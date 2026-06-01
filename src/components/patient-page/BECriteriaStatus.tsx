// src/components/patient-page/BECriteriaStatus.tsx
// Compact mirror of the B–E checklist on the right panel.

import { Check, AlertTriangle } from "lucide-react";
import { PanelBlock } from "./PanelBlock";
import { cn } from "@/lib/cn";
import type { Assessment } from "@/lib/schemas";

const BE = [
  { id: "B", label: "Início antes dos 12 anos" },
  { id: "C", label: "Presentes em dois ou mais contextos" },
  { id: "D", label: "Prejuízo clinicamente significativo" },
  { id: "E", label: "Não explicado por outro transtorno mental" },
];

export function BECriteriaStatus({ assessment }: { assessment: Assessment }) {
  const byId = new Map(assessment.responses.map((r) => [r.criterionId, r]));
  const done = BE.filter((c) => byId.get(c.id)?.checked).length;
  const missing = BE.filter((c) => !byId.get(c.id)?.checked).map((c) => c.id);

  return (
    <PanelBlock kicker={`Critérios B–E · ${done}/4`}>
      <ul className="flex flex-col gap-1.5 list-none p-0 m-0">
        {BE.map((c) => {
          const checked = byId.get(c.id)?.checked ?? false;
          return (
            <li
              key={c.id}
              className={cn(
                "flex items-center gap-2.5 text-[12.5px]",
                checked ? "text-text" : "text-text-3"
              )}
            >
              <span
                className={cn(
                  "w-3.5 h-3.5 rounded-full border-[1.5px] flex items-center justify-center shrink-0 text-accent-fg",
                  checked ? "bg-accent border-accent" : "border-border-hi"
                )}
              >
                {checked && <Check size={9} strokeWidth={3} />}
              </span>
              <span className="font-mono text-[11px] text-text-3 font-semibold shrink-0">{c.id}</span>
              <span className="flex-1">{c.label}</span>
            </li>
          );
        })}
      </ul>
      {done < 4 && (
        <div className="mt-3 px-2.5 py-2 bg-warn-bg text-warn rounded-[var(--radius-card)] text-xs flex gap-2">
          <AlertTriangle size={14} className="shrink-0 mt-0.5" />
          <span>
            Diagnóstico não fechável: faltam critérios obrigatórios{" "}
            {missing.join(" e ")}.
          </span>
        </div>
      )}
    </PanelBlock>
  );
}
