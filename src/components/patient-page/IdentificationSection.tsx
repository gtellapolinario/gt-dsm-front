// src/components/patient-page/IdentificationSection.tsx
// Block 1: patient identification.
// Wires to TanStack Form in the real app; here it reads from the loaded patient
// and renders read-only display cells. Replace with <form.Field>… when wiring.

import { SectionShell } from "./SectionShell";
import type { Patient } from "@/lib/schemas";

interface IdentificationSectionProps {
  patient: Patient;
  chiefComplaint?: string;
}

export function IdentificationSection({ patient, chiefComplaint }: IdentificationSectionProps) {
  const age = computeAge(patient.birthDate);

  return (
    <SectionShell kicker="Bloco 1" title="Identificação do paciente">
      <div className="flex gap-4 flex-wrap mb-4">
        <Field label="Nome / ID" value={patient.fullName} half />
        <Field label="Data de nascimento" value={`${formatBR(patient.birthDate)} · ${age}a`} half />
      </div>
      <div className="flex gap-4 flex-wrap mb-4">
        <Field label="Sexo" value={sexLabel(patient.sex)} third />
        <Field label="Escolaridade" value={patient.education ?? "—"} third />
        <Field label="Ocupação atual" value={patient.occupation ?? "—"} third />
      </div>
      <div>
        <FieldLabel>Queixa principal / motivo da consulta</FieldLabel>
        <div className="p-3.5 border border-border rounded-[var(--radius-card)] bg-surface text-sm text-text-2 leading-relaxed min-h-[80px]">
          {chiefComplaint ?? "—"}
        </div>
      </div>
    </SectionShell>
  );
}

// ─── helpers / shared bits ──────────────────────────────────
function Field({ label, value, half, third }: {
  label: string; value: string; half?: boolean; third?: boolean;
}) {
  return (
    <div
      className="min-w-0"
      style={{ flex: half ? "0 0 calc(50% - 8px)" : third ? "0 0 calc(33.33% - 11px)" : "1 1 0" }}
    >
      <FieldLabel>{label}</FieldLabel>
      <div className="h-9 px-3 border border-border rounded-[var(--radius-card)] bg-surface text-sm text-text flex items-center">
        {value}
      </div>
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[11px] text-text-3 mb-1.5 tracking-wide font-medium">
      {children}
    </label>
  );
}

function computeAge(isoDate: string): number {
  const d = new Date(isoDate);
  const now = new Date();
  let age = now.getFullYear() - d.getFullYear();
  const m = now.getMonth() - d.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < d.getDate())) age--;
  return age;
}
function formatBR(isoDate: string): string {
  const [y, m, d] = isoDate.split("-");
  return `${d}/${m}/${y}`;
}
function sexLabel(s: Patient["sex"]): string {
  return s === "F" ? "Feminino" : s === "M" ? "Masculino" : s === "outro" ? "Outro" : "Não informado";
}
