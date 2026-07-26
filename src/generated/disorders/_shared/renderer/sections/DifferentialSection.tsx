import type { ClinicalDisorder } from "../../schema";
import type { ChoiceSlice } from "../model/assessmentPort";
import { normalizeChoiceItems } from "../../utils/disorderDataAccess";
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export function DifferentialSection({
  data,
  assessment,
}: {
  readonly data: ClinicalDisorder;
  readonly assessment: ChoiceSlice;
}) {
  const items = normalizeChoiceItems(data.diagnostico_diferencial);
  if (items.length === 0) return null;
  return (
    <div className="p-5 space-y-3">
      <p className="text-sm text-text-3">
        Confirme se cada condição foi considerada e excluída.
      </p>
      <div className="space-y-1">
        {items.map((item) => {
          const checked = assessment.state.comorbidities[item.id] ?? false;
          return (
            <div
              key={item.id}
              className="flex items-start gap-3 p-2.5 rounded-lg transition hover:bg-surface-2"
            >
              <Checkbox
                id={`ddx-${item.id}`}
                checked={checked}
                onCheckedChange={(v) =>
                  assessment.setToggle("comorbidities", item.id, v === true)
                }
                className="mt-0.5"
              />
              <label
                htmlFor={`ddx-${item.id}`}
                className="flex-1 cursor-pointer select-none"
              >
                <span className="text-md font-semibold text-text">
                  {item.label}
                </span>
                {item.description ? (
                  <p className="text-sm text-text-2 leading-relaxed">
                    {item.description}
                  </p>
                ) : null}
              </label>
            </div>
          );
        })}
      </div>
      <Field>
        <FieldLabel htmlFor="note-ddx">
          Notas sobre diagnóstico diferencial
        </FieldLabel>
        <Textarea
          id="note-ddx"
          rows={2}
          value={assessment.state.sectionNotes.diagnostico_diferencial ?? ""}
          onChange={(e) =>
            assessment.setSectionNote("diagnostico_diferencial", e.target.value)
          }
        />
      </Field>
    </div>
  );
}
