// src/components/patient-page/PatientPage.tsx
// Full patient-page (assessment in progress). Two-column layout:
// left = identification + B-E + criterion sections; right = computation panel.
// All data comes from a parent route via TanStack Query; this component
// composes the sections and the persistent header.

import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Assessment, Patient, Disorder } from "@/lib/schemas";
import { IdentificationSection } from "./IdentificationSection";
import { ABCDESection } from "./ABCDESection";
import { CriterionA1Section } from "./CriterionA1Section";
import { ComputationPanel } from "./ComputationPanel";
import { BECriteriaStatus } from "./BECriteriaStatus";
import { FunctionalImpact } from "./FunctionalImpact";
import { ReportPreview } from "./ReportPreview";

interface PatientPageProps {
  assessment: Assessment;
  patient: Patient;
  disorder: Disorder;
}

export function PatientPage({ assessment, patient, disorder }: PatientPageProps) {
  return (
    <div className="flex flex-col min-h-full">
      <PatientPageHeader assessment={assessment} patient={patient} disorder={disorder} />
      <div className="grid grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] flex-1">
        <main className="px-8 py-6 pb-20 border-r border-border min-w-0">
          <IdentificationSection patient={patient} chiefComplaint={assessment.freeText?.chiefComplaint} />
          <ABCDESection assessment={assessment} />
          <CriterionA1Section assessment={assessment} />
        </main>
        <aside className="px-7 py-6 pb-15 bg-surface min-w-0">
          <ComputationPanel assessment={assessment} disorder={disorder} />
          <BECriteriaStatus assessment={assessment} />
          <FunctionalImpact impact={assessment.functionalImpact} />
          <ReportPreview markdown={assessment.reportMarkdown} />
        </aside>
      </div>
    </div>
  );
}

// ─── Header ─────────────────────────────────────────────────
function PatientPageHeader({ assessment, patient, disorder }: PatientPageProps) {
  // Compute progress from responses (rough: % of criteria touched).
  // Real implementation should weight by required vs. optional.
  const progressPct = Math.round((assessment.responses.filter(r => r.checked).length / Math.max(1, assessment.responses.length)) * 100);

  return (
    <header className="flex items-center gap-4 px-8 pt-6 pb-5.5 border-b border-border bg-bg sticky top-0 z-10">
      <div className="flex-1 min-w-0">
        <nav className="flex items-center gap-1.5 text-xs text-text-3 mb-2" aria-label="breadcrumb">
          <span>01 — Neurodesenvolvimento</span>
          <ChevronRight size={11} className="text-text-4" />
          <span>{disorder.shortName ?? disorder.name}</span>
          <ChevronRight size={11} className="text-text-4" />
          <span className="text-text-2">{patient.fullName.split(" ")[0]} {patient.fullName.split(" ").at(-1)?.[0]}.</span>
        </nav>
        <div className="flex items-baseline gap-3.5 mb-1.5">
          <Badge >{disorder.code} · DSM-5 {disorder.dsm5Code}</Badge>
          <Badge>Polythetic com limiar · adultos ≥ 17a</Badge>
          <Badge >Em andamento · {progressPct}%</Badge>
        </div>
        <h1 className="font-serif text-3xl font-medium tracking-[-0.5px] m-0 mb-1 text-text">
          {disorder.name}
        </h1>
        <p className="text-xs text-text-3 m-0">
          Avaliação clínica estruturada em adultos · paciente:{" "}
          <strong className="text-text-2 font-semibold">{patient.fullName}</strong>
          {" · última edição há 2h"}
          {assessment.sessionNumber && ` · sessão #${assessment.sessionNumber}`}
        </p>
      </div>
      <div className="flex gap-2">
        <Button size="sm" >Copiar</Button>
        <Button size="sm" >Exportar</Button>
        <Button size="sm" variant="default" >
          Salvar e gerar relatório
        </Button>
      </div>
    </header>
  );
}
