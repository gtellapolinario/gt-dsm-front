import { MessageSquare } from "lucide-react";
import type { ClinicalDisorder } from "../../schema";
import type { SymptomSlice } from "../model/assessmentPort";
import { SymptomSeveritySelect } from "../ui/SymptomSeveritySelect";
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export function ClusterSection({
  cluster,
  assessment,
}: {
  readonly cluster: NonNullable<ClinicalDisorder["clusters_sintomas"]>[number];
  readonly assessment: SymptomSlice;
}) {
  return (
    <div>
      {cluster.descricao ? (
        <p className="px-5 pt-4 text-sm text-text-3 leading-relaxed">
          {cluster.descricao}
        </p>
      ) : null}
      <div className="p-5 space-y-1">
        {cluster.sintomas.map((symptom) => {
          const checked = assessment.state.symptomChecked[symptom.id] ?? false;
          return (
            <div
              key={symptom.id}
              className="flex items-start gap-3 p-2.5 rounded-lg transition hover:bg-surface-2"
            >
              <Checkbox
                id={`sym-${symptom.id}`}
                checked={checked}
                onCheckedChange={(v) =>
                  assessment.setSymptomChecked(symptom.id, v === true)
                }
                className="mt-0.5"
                aria-label={`Marcar ${symptom.rotulo ?? symptom.id}`}
              />
              <label
                htmlFor={`sym-${symptom.id}`}
                className="flex-1 cursor-pointer select-none"
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm font-semibold tracking-wide uppercase text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                    {symptom.id}
                  </span>
                  <span className="text-md font-semibold text-text">
                    {symptom.rotulo ?? symptom.texto ?? symptom.id}
                  </span>
                </div>
                {(symptom.desc ?? symptom.descricao ?? symptom.texto) ? (
                  <p className="text-sm text-text-2 leading-relaxed mb-1">
                    {symptom.desc ?? symptom.descricao ?? symptom.texto}
                  </p>
                ) : null}
                {symptom.pergunta ? (
                  <p className="text-sm text-text-3 italic leading-relaxed">
                    <MessageSquare className="mr-1 inline h-3 w-3 not-italic" />
                    {symptom.pergunta}
                  </p>
                ) : null}
              </label>
              <SymptomSeveritySelect
                value={
                  assessment.state.symptomSeverity[symptom.id] ?? "ausente"
                }
                onChange={(value) =>
                  assessment.setSymptomSeverity(symptom.id, value)
                }
              />
            </div>
          );
        })}
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
}
