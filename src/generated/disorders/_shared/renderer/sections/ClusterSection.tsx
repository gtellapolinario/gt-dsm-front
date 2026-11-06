import { memo } from "react";
import { MessageSquare } from "lucide-react";
import type { ClinicalDisorder } from "../../schema";
import type { SeverityLevel } from "../../utils/disorderDataAccess";
import type { SymptomSlice } from "../model/assessmentPort";
import { SymptomSeveritySelect } from "../ui/SymptomSeveritySelect";
import { Field, FieldLabel } from "@ui/field";
import { Textarea } from "@ui/textarea";
import { Checkbox } from "@ui/checkbox";

type ClusterItem = NonNullable<ClinicalDisorder["clusters_sintomas"]>[number];
type SymptomItem = ClusterItem["sintomas"][number];

const SymptomRow = memo(function SymptomRow({
  symptom,
  checked,
  severity,
  onCheckedChange,
  onSeverityChange,
}: {
  readonly symptom: SymptomItem;
  readonly checked: boolean;
  readonly severity: SeverityLevel;
  readonly onCheckedChange: (id: string, checked: boolean) => void;
  readonly onSeverityChange: (id: string, severity: SeverityLevel) => void;
}) {
  return (
    <div className="flex flex-wrap items-start gap-2 mt-4  p-2.5 rounded-xl shadow-md bg-gray-100/80 transition hover:bg-surface-2">
      <Checkbox
        id={`sym-${symptom.id}`}
        checked={checked}
        onCheckedChange={(v) => onCheckedChange(symptom.id, v === true)}
        className="mt-0.5"
        aria-label={`Marcar ${symptom.rotulo ?? symptom.id}`}
      />
      <label
        htmlFor={`sym-${symptom.id}`}
        className="flex-1 min-w-56 cursor-pointer select-none"
      >
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-sm font-semibold tracking-wide uppercase text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
            {symptom.id}
          </span>
          <span className="text-md font-semibold text-stone-800">
            {symptom.rotulo ?? symptom.texto ?? symptom.id}
          </span>
        </div>
        {(symptom.desc ?? symptom.descricao ?? symptom.texto) ? (
          <p className="text-shadow-xs font-serif text-sm font-medium leading-relaxed text-stone-700 text-justify text-wrap mb-1">
            {symptom.desc ?? symptom.descricao ?? symptom.texto}
          </p>
        ) : null}
        {symptom.pergunta ? (
          <p className="text-shadow-xs font-serif text-sm font-medium italic leading-relaxed text-stone-500">
            <MessageSquare className="mr-1 inline h-3 w-3 not-italic" />
            {symptom.pergunta}
          </p>
        ) : null}
      </label>
      <div className="ml-auto">
        <SymptomSeveritySelect
          value={severity}
          onChange={(value) => onSeverityChange(symptom.id, value)}
        />
      </div>
    </div>
  );
});

export const ClusterSection = memo(
  function ClusterSection({
    cluster,
    assessment,
  }: {
    readonly cluster: ClusterItem;
    readonly assessment: SymptomSlice;
  }) {
    return (
      <div>
        {cluster.descricao ? (
          <p className="px-5 pt-4 text-shadow-xs font-serif text-sm font-medium italic leading-relaxed text-stone-500 text-justify text-wrap mx-3">
            {cluster.descricao}
          </p>
        ) : null}
        <div className="p-5 space-y-1">
          {cluster.sintomas.map((symptom) => (
            <SymptomRow
              key={symptom.id}
              symptom={symptom}
              checked={assessment.state.symptomChecked[symptom.id] ?? false}
              severity={
                assessment.state.symptomSeverity[symptom.id] ?? "ausente"
              }
              onCheckedChange={assessment.setSymptomChecked}
              onSeverityChange={assessment.setSymptomSeverity}
            />
          ))}
        </div>
        <div className="px-5 pb-4">
          <Field>
            <FieldLabel htmlFor={`obs-${cluster.id}`}>
              Observações clínicas — {cluster.nome ?? cluster.id}
            </FieldLabel>
            <Textarea
              id={`obs-${cluster.id}`}
              rows={2}
              placeholder="Exemplos, frequência, contexto, fontes de informação..."
              value={assessment.state.clusterNotes[cluster.id] ?? ""}
              onChange={(e) =>
                assessment.setClusterNote(cluster.id, e.target.value)
              }
            />
          </Field>
        </div>
      </div>
    );
  },
  (prev, next) =>
    prev.cluster === next.cluster &&
    prev.assessment.state.symptomChecked ===
      next.assessment.state.symptomChecked &&
    prev.assessment.state.symptomSeverity ===
      next.assessment.state.symptomSeverity &&
    (prev.assessment.state.clusterNotes[prev.cluster.id] ?? "") ===
      (next.assessment.state.clusterNotes[next.cluster.id] ?? "") &&
    prev.assessment.setSymptomChecked === next.assessment.setSymptomChecked &&
    prev.assessment.setSymptomSeverity === next.assessment.setSymptomSeverity &&
    prev.assessment.setClusterNote === next.assessment.setClusterNote,
);
