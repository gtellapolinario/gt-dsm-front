import { create } from "zustand";
import type { ClinicalDisorder } from "@/generated/disorders/_shared/schema";
import type {
  DisorderAssessmentState,
  PatientIdentification,
} from "@/generated/disorders/_shared/hooks/useDisorderAssessment";
import { generateClinicalMarkdown } from "@/generated/disorders/_shared/utils/clinicalMarkdown";
import type { SeverityLevel } from "@/generated/disorders/_shared/utils/disorderDataAccess";
import {
  clearPersistedAssessment,
  loadPersistedAssessment,
  saveOpenSections,
  scheduleSaveAssessment,
} from "./assessment-db";

export const initialPatientState: PatientIdentification = {
  nomeId: "",
  dataNascimento: "",
  sexo: "",
  genero: "",
  escolaridade: "",
  queixaPrincipal: "",
};

export function createInitialAssessmentState(
  patient: PatientIdentification = initialPatientState,
): DisorderAssessmentState {
  return {
    patient: { ...patient },
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
  };
}

interface AssessmentStoreState {
  sharedPatient: PatientIdentification;
  assessmentsByDisorder: Record<string, DisorderAssessmentState>;
  openSectionsByDisorder: Record<string, string[]>;
  hydratedByDisorder: Record<string, boolean>;

  ensureDisorderState: (disorderId: string) => DisorderAssessmentState;
  hydrateDisorder: (
    disorderId: string,
    defaultOpenSections: string[],
  ) => Promise<void>;
  setOpenSections: (disorderId: string, openSections: string[]) => void;

  setPatientField: <K extends keyof PatientIdentification>(
    disorderId: string,
    field: K,
    value: PatientIdentification[K],
  ) => void;
  setSymptomChecked: (
    disorderId: string,
    id: string,
    checked: boolean,
  ) => void;
  setSymptomSeverity: (
    disorderId: string,
    id: string,
    severity: SeverityLevel,
  ) => void;
  setSymptomNote: (disorderId: string, id: string, note: string) => void;
  setClusterNote: (disorderId: string, id: string, note: string) => void;
  setToggle: (
    disorderId: string,
    group: "conditionalCriteria" | "specifiers" | "comorbidities" | "ddx",
    id: string,
    checked: boolean,
  ) => void;
  setImpactFunctional: (disorderId: string, impact: SeverityLevel) => void;
  setSectionNote: (disorderId: string, id: string, note: string) => void;
  refreshMarkdown: (disorderId: string, data: ClinicalDisorder) => string;
  resetDisorder: (disorderId: string, data: ClinicalDisorder) => void;
}

const hydrationInFlight = new Map<string, Promise<void>>();

export const useAssessmentStore = create<AssessmentStoreState>((set, get) => {
  const updateDisorder = (
    disorderId: string,
    updater: (current: DisorderAssessmentState) => DisorderAssessmentState,
  ) => {
    const prev =
      get().assessmentsByDisorder[disorderId] ??
      createInitialAssessmentState(get().sharedPatient);
    const next = updater(prev);
    const openSections = get().openSectionsByDisorder[disorderId];

    set((store) => ({
      sharedPatient: next.patient,
      assessmentsByDisorder: {
        ...store.assessmentsByDisorder,
        [disorderId]: next,
      },
    }));

    scheduleSaveAssessment(disorderId, next, openSections);
    return next;
  };

  return {
    sharedPatient: initialPatientState,
    assessmentsByDisorder: {},
    openSectionsByDisorder: {},
    hydratedByDisorder: {},

    ensureDisorderState: (disorderId) => {
      const existing = get().assessmentsByDisorder[disorderId];
      if (existing) return existing;
      return createInitialAssessmentState(get().sharedPatient);
    },

    hydrateDisorder: async (disorderId, defaultOpenSections) => {
      if (get().hydratedByDisorder[disorderId]) {
        return;
      }
      const inFlight = hydrationInFlight.get(disorderId);
      if (inFlight) {
        return inFlight;
      }

      const promise = (async () => {
        const { state: persistedState, openSections } =
          await loadPersistedAssessment(disorderId);

        set((store) => {
          const fallback =
            store.assessmentsByDisorder[disorderId] ??
            createInitialAssessmentState(store.sharedPatient);
          const resolvedState = persistedState ?? fallback;
          const resolvedPatient = persistedState?.patient ?? store.sharedPatient;

          return {
            sharedPatient: resolvedPatient,
            assessmentsByDisorder: {
              ...store.assessmentsByDisorder,
              [disorderId]: {
                ...resolvedState,
                patient: resolvedPatient,
              },
            },
            openSectionsByDisorder: {
              ...store.openSectionsByDisorder,
              [disorderId]:
                openSections ??
                store.openSectionsByDisorder[disorderId] ??
                defaultOpenSections,
            },
            hydratedByDisorder: {
              ...store.hydratedByDisorder,
              [disorderId]: true,
            },
          };
        });
      })().finally(() => {
        hydrationInFlight.delete(disorderId);
      });

      hydrationInFlight.set(disorderId, promise);
      return promise;
    },

    setOpenSections: (disorderId, openSections) => {
      const current = get().ensureDisorderState(disorderId);
      set((store) => ({
        openSectionsByDisorder: {
          ...store.openSectionsByDisorder,
          [disorderId]: openSections,
        },
      }));
      void saveOpenSections(disorderId, openSections, current);
    },

    setPatientField: (disorderId, field, value) => {
      updateDisorder(disorderId, (current) => ({
        ...current,
        patient: { ...current.patient, [field]: value },
      }));
    },

    setSymptomChecked: (disorderId, id, checked) => {
      updateDisorder(disorderId, (current) => ({
        ...current,
        symptomChecked: { ...current.symptomChecked, [id]: checked },
        symptomSeverity: {
          ...current.symptomSeverity,
          [id]: checked ? (current.symptomSeverity[id] ?? "leve") : "ausente",
        },
      }));
    },

    setSymptomSeverity: (disorderId, id, severity) => {
      updateDisorder(disorderId, (current) => ({
        ...current,
        symptomSeverity: { ...current.symptomSeverity, [id]: severity },
        symptomChecked: {
          ...current.symptomChecked,
          [id]:
            severity !== "ausente"
              ? true
              : (current.symptomChecked[id] ?? false),
        },
      }));
    },

    setSymptomNote: (disorderId, id, note) => {
      updateDisorder(disorderId, (current) => ({
        ...current,
        symptomNotes: { ...current.symptomNotes, [id]: note },
      }));
    },

    setClusterNote: (disorderId, id, note) => {
      updateDisorder(disorderId, (current) => ({
        ...current,
        clusterNotes: { ...current.clusterNotes, [id]: note },
      }));
    },

    setToggle: (disorderId, group, id, checked) => {
      updateDisorder(disorderId, (current) => ({
        ...current,
        [group]: { ...current[group], [id]: checked },
      }));
    },

    setImpactFunctional: (disorderId, impact) => {
      updateDisorder(disorderId, (current) => ({
        ...current,
        impactFunctional: impact,
      }));
    },

    setSectionNote: (disorderId, id, note) => {
      updateDisorder(disorderId, (current) => ({
        ...current,
        sectionNotes: { ...current.sectionNotes, [id]: note },
      }));
    },

    refreshMarkdown: (disorderId, data) => {
      let nextMarkdown = "";
      updateDisorder(disorderId, (current) => {
        nextMarkdown = generateClinicalMarkdown(current, data);
        return { ...current, markdown: nextMarkdown };
      });
      return nextMarkdown;
    },

    resetDisorder: (disorderId, data) => {
      const fresh = createInitialAssessmentState(initialPatientState);
      const next: DisorderAssessmentState = {
        ...fresh,
        markdown: generateClinicalMarkdown(fresh, data),
      };
      set((store) => ({
        sharedPatient: initialPatientState,
        assessmentsByDisorder: {
          ...store.assessmentsByDisorder,
          [disorderId]: next,
        },
      }));
      void clearPersistedAssessment(disorderId);
    },
  };
});

