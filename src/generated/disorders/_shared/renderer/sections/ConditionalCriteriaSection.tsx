import type { ClinicalDisorder } from "../../schema";
import type { CriteriaSlice } from "../model/assessmentPort";
import {
  conditionalCriteriaItems,
  letterOf,
} from "../adapters/criteriaAdapter";
import { ItemIcon } from "../ui/ItemIcon";
import { cn } from "@/lib/utils";
import { Checkbox } from "@ui/checkbox";

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
      <p className="text-shadow-xs font-serif text-sm font-medium italic leading-relaxed text-stone-500 text-justify pb-2 text-wrap mx-3">
        Critérios obrigatórios para o diagnóstico. Marque cada item confirmado.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 font-serif">
        {items.map((item) => {
          const letter = letterOf(item.raw);
          const checked =
            assessment.state.conditionalCriteria[item.id] ?? false;
          return (
            <div
              key={item.id}
              className={cn(
                "flex items-start gap-3 bg-gray-100 rounded-lg border p-3 transition shadow-md",
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
                className="flex-1 text-md text-stone-800 cursor-pointer select-none space-y-1"
              >
                <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <ItemIcon raw={item.raw} />
                  {letter ? (
                    <span className="text-md font-bold text-orange-600">
                      {letter} -
                    </span>
                  ) : null}
                  <span className="text-md! font-semibold text-stone-800">
                    {item.label}
                  </span>
                  {item.description ? (
                    <span className="text-shadow-xs font-serif text-sm font-medium leading-relaxed text-stone-700">
                      {item.description}
                    </span>
                  ) : null}
                </span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
