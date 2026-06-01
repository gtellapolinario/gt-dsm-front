// src/components/patient-page/FunctionalImpact.tsx
// 0–4 impact rating across functional domains.

import { PanelBlock } from "./PanelBlock";
import { cn } from "@/lib/cn";

interface FunctionalImpactProps {
  /** Domain key → score (0–4). undefined value = N/A. */
  impact?: Record<string, number>;
}

const DOMAINS: { key: string; label: string }[] = [
  { key: "academic",     label: "Desempenho acadêmico" },
  { key: "professional", label: "Desempenho profissional" },
  { key: "social",       label: "Funcionamento social" },
  { key: "autonomy",     label: "Autonomia e funcional" },
];

export function FunctionalImpact({ impact = {} }: FunctionalImpactProps) {
  return (
    <PanelBlock kicker="Impacto funcional · escala 0–4">
      <div className="flex flex-col gap-2.5">
        {DOMAINS.map((d) => {
          const v = impact[d.key];
          const na = v == null;
          return (
            <div key={d.key}>
              <div className="flex justify-between text-xs text-text-2 mb-1">
                <span className="truncate">{d.label}</span>
                <span
                  className={cn(
                    "font-semibold tabular-nums",
                    na ? "text-text-4" : "text-text"
                  )}
                >
                  {na ? "N/A" : v}
                </span>
              </div>
              <div className="flex gap-[3px]">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex-1 h-1.5 rounded-[1px]",
                      !na && i <= (v ?? -1) ? "bg-accent" : "bg-surface-3"
                    )}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </PanelBlock>
  );
}
