// src/components/patient-page/ABCDESection.tsx
// Block 2: B-E criteria (required for diagnosis). Toggleable checkbox grid.

import { Check } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { cn } from "@/lib/cn";
import type { Assessment } from "@/lib/schemas";

interface ABCDESectionProps {
  assessment: Assessment;
  onToggle?: (id: string) => void;
}

// Per-disorder definition. For TDAH these are the canonical B-E criteria.
const BE_CRITERIA = [
  { id: "B", label: "Início antes dos 12 anos" },
  { id: "C", label: "Presentes em dois ou mais contextos" },
  { id: "D", label: "Prejuízo clinicamente significativo" },
  { id: "E", label: "Não explicado por outro transtorno mental" },
];

export function ABCDESection({ assessment, onToggle }: ABCDESectionProps) {
  const isChecked = (id: string) =>
    assessment.responses.find((r) => r.criterionId === id)?.checked ?? false;

  return (
    <SectionShell kicker="Bloco 2" title="Histórico evolutivo · critérios B–E">
      <p className="text-xs text-text-3 mb-4 leading-relaxed">
        Critérios obrigatórios. Todos precisam ser confirmados para fechar
        diagnóstico, independentemente do limiar de sintomas em A1 ou A2.
      </p>
      <div className="grid grid-cols-2 gap-2.5 mb-6">
        {BE_CRITERIA.map((c) => {
          const checked = isChecked(c.id);
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => onToggle?.(c.id)}
              className={cn(
                "flex items-start gap-3 p-3.5 rounded-[var(--radius-card)] text-left transition-colors",
                "border cursor-pointer",
                checked
                  ? "border-accent bg-accent-tint"
                  : "border-border bg-surface hover:border-border-hi"
              )}
            >
              <span
                className={cn(
                  "shrink-0 mt-0.5 w-[18px] h-[18px] rounded-[3px] border-[1.5px] flex items-center justify-center text-accent-fg",
                  checked ? "bg-accent border-accent" : "border-border-hi"
                )}
              >
                {checked && <Check size={12} strokeWidth={2.4} />}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] text-text-3 mb-0.5 font-semibold tracking-wide">
                  CRITÉRIO {c.id}
                </div>
                <div className="text-sm text-text leading-snug">{c.label}</div>
              </div>
            </button>
          );
        })}
      </div>
      <div>
        <label className="block text-[11px] text-text-3 mb-1.5 tracking-wide font-medium">
          Desenvolvimento e curso dos sintomas
        </label>
        <div className="p-3.5 border border-border rounded-[var(--radius-card)] bg-surface text-sm text-text-2 leading-relaxed min-h-[84px] whitespace-pre-wrap">
          {assessment.freeText?.courseAndDevelopment ?? "—"}
        </div>
      </div>
    </SectionShell>
  );
}
