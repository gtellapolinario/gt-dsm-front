import type { ClinicalDisorder } from "../../schema";
import type { CriteriaSlice } from "../model/assessmentPort";
import {
  conditionalCriteriaItems,
  letterOf,
} from "../adapters/criteriaAdapter";
import { ItemIcon } from "../ui/ItemIcon";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

export function ConditionalCriteriaSection({
  data,
  assessment,
}: {
  readonly data: ClinicalDisorder;
  readonly assessment: CriteriaSlice;
}) {
  const items = conditionalCriteriaItems(data);

  if (items.length === 0) return null;

  return (
    <div className="p-5 space-y-3">
      <p className="text-sm text-text-3">
        Critérios obrigatórios para o diagnóstico. Marque cada item confirmado.
      </p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {items.map((item) => {
          const letter = letterOf(item.raw);
          const checked =
            assessment.state.conditionalCriteria[item.id] ?? false;
          return (
            <div
              key={item.id}
              className={cn(
                "flex items-start gap-3 rounded-lg border p-3 transition",
                checked
                  ? "border-primary bg-accent/60"
                  : "border-border hover:bg-surface-2",
              )}
            >
              <Checkbox
                id={`cc-${item.id}`}
                checked={checked}
                onCheckedChange={(v) =>
                  assessment.setToggle(
                    "conditionalCriteria",
                    item.id,
                    v === true,
                  )
                }
                className="mt-0.5"
                aria-label={`Confirmar critério ${letter ?? item.label}`}
              />
              <label
                htmlFor={`cc-${item.id}`}
                className="flex-1 cursor-pointer select-none space-y-1"
              >
                <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <ItemIcon raw={item.raw} />
                  {letter ? (
                    <span className="font-mono text-sm font-bold text-primary">
                      {letter}
                    </span>
                  ) : null}
                  <span className="text-sm font-semibold text-text">
                    {item.label}
                  </span>
                </span>
                {item.description ? (
                  <p className="text-sm text-text-2 leading-relaxed text-justify">
                    {item.description}
                  </p>
                ) : null}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
