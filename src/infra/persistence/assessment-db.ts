import { Dexie, type EntityTable } from "dexie";
import { z } from "zod/v4";
import type {
  DisorderAssessmentState,
  PatientIdentification,
} from "@/generated/disorders/_shared/hooks/useDisorderAssessment";

const SeverityLevelSchema = z.enum(["ausente", "leve", "moderado", "grave"]);

const PatientIdentificationSchema = z.object({
  nomeId: z.string(),
  dataNascimento: z.string(),
  sexo: z.string(),
  genero: z.string(),
  escolaridade: z.string(),
  queixaPrincipal: z.string(),
});

const PersistedAssessmentStateSchema = z.object({
  patient: PatientIdentificationSchema,
  symptomChecked: z.record(z.string(), z.boolean()),
  symptomSeverity: z.record(z.string(), SeverityLevelSchema),
  symptomNotes: z.record(z.string(), z.string()),
  clusterNotes: z.record(z.string(), z.string()),
  conditionalCriteria: z.record(z.string(), z.boolean()),
  specifiers: z.record(z.string(), z.boolean()),
  comorbidities: z.record(z.string(), z.boolean()),
  ddx: z.record(z.string(), z.boolean()),
  impactFunctional: SeverityLevelSchema,
  sectionNotes: z.record(z.string(), z.string()),
  markdown: z.string(),
});

export interface PersistedAssessmentRecord {
  id: string;
  scope: string;
  disorderId: string;
  state: DisorderAssessmentState;
  openSections?: string[];
  updatedAt: number;
}

export interface PersistedPatientRecord {
  id: string;
  scope: string;
  patient: PatientIdentification;
  updatedAt: number;
}

type GtDsmDexie = Dexie & {
  assessments: EntityTable<PersistedAssessmentRecord, "id">;
  patients: EntityTable<PersistedPatientRecord, "id">;
};

const DEFAULT_SCOPE = "workspace:default";

function createDatabase(): GtDsmDexie | null {
  if (typeof indexedDB === "undefined") {
    return null;
  }
  const instance = new Dexie("gtmedics_dsm_db") as GtDsmDexie;
  instance.version(1).stores({
    assessments: "id, scope, disorderId, updatedAt",
    patients: "id, scope, updatedAt",
  });
  return instance;
}

const db = createDatabase();

export function buildAssessmentKey(
  disorderId: string,
  scope: string = DEFAULT_SCOPE,
): string {
  return `${scope}::${disorderId}`;
}

export async function loadPersistedAssessment(
  disorderId: string,
  scope: string = DEFAULT_SCOPE,
): Promise<{
  state: DisorderAssessmentState | null;
  openSections: string[] | null;
}> {
  if (!db) {
    return { state: null, openSections: null };
  }
  try {
    const key = buildAssessmentKey(disorderId, scope);
    const [record, sharedPatient] = await Promise.all([
      db.assessments.get(key),
      db.patients.get(scope),
    ]);

    if (!record) {
      if (sharedPatient) {
        const parsedPatient = PatientIdentificationSchema.safeParse(
          sharedPatient.patient,
        );
        if (parsedPatient.success) {
          return {
            state: {
              patient: parsedPatient.data,
              symptomChecked: {},
              symptomSeverity: {},
              symptomNotes: {},
              clusterNotes: {},
              conditionalCriteria: {},
              specifiers: {},
              comorbidities: {},
              ddx: {},
              impactFunctional: "ausente",
              sectionNotes: {},
              markdown: "",
            },
            openSections: null,
          };
        }
      }
      return { state: null, openSections: null };
    }

    const parsed = PersistedAssessmentStateSchema.safeParse(record.state);
    if (!parsed.success) {
      console.warn(
        "[GT-DSM Dexie] Registro inválido descartado (fail-open):",
        disorderId,
      );
      return { state: null, openSections: null };
    }

    const patient =
      sharedPatient &&
      PatientIdentificationSchema.safeParse(sharedPatient.patient).success
        ? sharedPatient.patient
        : parsed.data.patient;

    return {
      state: {
        ...parsed.data,
        patient,
      },
      openSections: Array.isArray(record.openSections)
        ? record.openSections
        : null,
    };
  } catch (err) {
    console.warn(
      "[GT-DSM Dexie] Falha ao ler avaliação do IndexedDB (fail-open):",
      err,
    );
    return { state: null, openSections: null };
  }
}

interface PendingWrite {
  scope: string;
  disorderId: string;
  state: DisorderAssessmentState;
  openSections?: string[];
  timer: ReturnType<typeof setTimeout>;
}

const pendingWrites = new Map<string, PendingWrite>();
const WRITE_DEBOUNCE_MS = 250;

async function commitWrite(entry: Omit<PendingWrite, "timer">): Promise<void> {
  if (!db) return;
  try {
    const key = buildAssessmentKey(entry.disorderId, entry.scope);
    const now = Date.now();
    await db.transaction("rw", db.assessments, db.patients, async () => {
      const existing = await db.assessments.get(key);
      await db.assessments.put({
        id: key,
        scope: entry.scope,
        disorderId: entry.disorderId,
        state: entry.state,
        openSections: entry.openSections ?? existing?.openSections,
        updatedAt: now,
      });
      await db.patients.put({
        id: entry.scope,
        scope: entry.scope,
        patient: entry.state.patient,
        updatedAt: now,
      });
    });
  } catch (err) {
    console.warn(
      "[GT-DSM Dexie] Falha ao gravar avaliação no IndexedDB (fail-open):",
      err,
    );
  }
}

export function scheduleSaveAssessment(
  disorderId: string,
  state: DisorderAssessmentState,
  openSections?: string[],
  scope: string = DEFAULT_SCOPE,
): void {
  if (!db) return;
  const key = buildAssessmentKey(disorderId, scope);
  const existing = pendingWrites.get(key);
  if (existing) {
    clearTimeout(existing.timer);
  }

  const mergedOpenSections = openSections ?? existing?.openSections;

  const timer = setTimeout(() => {
    const current = pendingWrites.get(key);
    pendingWrites.delete(key);
    if (current) {
      void commitWrite(current);
    }
  }, WRITE_DEBOUNCE_MS);

  pendingWrites.set(key, {
    scope,
    disorderId,
    state,
    openSections: mergedOpenSections,
    timer,
  });
}

export async function saveOpenSections(
  disorderId: string,
  openSections: string[],
  fallbackState: DisorderAssessmentState,
  scope: string = DEFAULT_SCOPE,
): Promise<void> {
  if (!db) return;
  const key = buildAssessmentKey(disorderId, scope);
  const pending = pendingWrites.get(key);
  if (pending) {
    pending.openSections = openSections;
    return;
  }
  try {
    const existing = await db.assessments.get(key);
    await db.assessments.put({
      id: key,
      scope,
      disorderId,
      state: existing?.state ?? fallbackState,
      openSections,
      updatedAt: Date.now(),
    });
  } catch (err) {
    console.warn(
      "[GT-DSM Dexie] Falha ao persistir seções abertas (fail-open):",
      err,
    );
  }
}

export async function clearPersistedAssessment(
  disorderId: string,
  scope: string = DEFAULT_SCOPE,
): Promise<void> {
  const key = buildAssessmentKey(disorderId, scope);
  const pending = pendingWrites.get(key);
  if (pending) {
    clearTimeout(pending.timer);
    pendingWrites.delete(key);
  }
  if (!db) return;
  try {
    await db.assessments.delete(key);
  } catch (err) {
    console.warn(
      "[GT-DSM Dexie] Falha ao remover avaliação do IndexedDB (fail-open):",
      err,
    );
  }
}

export function flushPendingAssessments(): void {
  for (const [key, entry] of pendingWrites.entries()) {
    clearTimeout(entry.timer);
    pendingWrites.delete(key);
    void commitWrite(entry);
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("pagehide", flushPendingAssessments);
  window.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      flushPendingAssessments();
    }
  });
}

