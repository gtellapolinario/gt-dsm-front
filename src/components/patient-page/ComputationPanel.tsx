// src/components/patient-page/ComputationPanel.tsx
// Real-time computation: A1 / A2 threshold cards + inferred subtype.

import { Sparkles, Check } from "lucide-react";
import { PanelBlock } from "./PanelBlock";
import { cn } from "@/lib/cn";
import type { Assessment, Disorder } from "@/lib/schemas";

interface ComputationPanelProps {
  assessment: Assessment;
  disorder: Disorder;
}

export function ComputationPanel({ assessment }: ComputationPanelProps) {
  // Count responses per A1 / A2 domain. Real version: drive these from the
  // disorder schema's domain definitions instead of hardcoded prefixes.
  const count = (prefix: string) =>
    assessment.responses.filter((r) => r.criterionId.startsWith(prefix) && r.checked).length;

  const a1 = count("A1");
  const a2 = count("A2");

  return (
    <PanelBlock kicker="Painel de critérios · em tempo real">
      <div className="grid grid-cols-2 gap-2.5 mb-3.5">
        <ThresholdCard domain="A1" label="Desatenção"     current={a1} need={5} max={9} met={a1 >= 5} />
        <ThresholdCard domain="A2" label="Hiper/Impuls." current={a2} need={5} max={9} met={a2 >= 5} />
      </div>

      {assessment.inferredSubtype && (
        <div className="p-3.5 rounded-[var(--radius-card)] bg-accent-tint border border-accent/30">
          <div className="flex items-center gap-2 mb-1.5">
            <Sparkles size={14} className="text-accent" />
            <span className="text-[11px] font-bold tracking-wider text-accent uppercase">
              Apresentação inferida
            </span>
          </div>
          <div className="font-serif text-lg font-medium tracking-tight text-text mb-1">
            {assessment.inferredSubtype}
          </div>
          <p className="text-xs text-text-2 leading-snug m-0">
            A1 ≥ 5 atingido sem A2 no limiar nos últimos 6 meses ·{" "}
            {assessment.inferredCode ?? "código a inferir"}
          </p>
        </div>
      )}
    </PanelBlock>
  );
}

// ─── ThresholdCard ──────────────────────────────────────────
interface ThresholdCardProps {
  domain: string;
  label: string;
  current: number;
  need: number;
  max: number;
  met: boolean;
}

function ThresholdCard({ domain, label, current, need, max, met }: ThresholdCardProps) {
  const pct = (current / max) * 100;
  return (
    <div
      className={cn(
        "p-3.5 rounded-[var(--radius-card)] bg-surface border border-border",
        "border-t-2",
        met ? "border-t-accent" : "border-t-border-hi"
      )}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[11px] text-text-3 font-semibold">
          {domain} · {label}
        </span>
        {met && <Check size={12} strokeWidth={2.4} className="text-accent" />}
      </div>
      <div className="flex items-baseline gap-1 mb-2">
        <span className="font-serif text-3xl font-medium tracking-[-0.5px] text-text leading-none">
          {current}
        </span>
        <span className="text-xs text-text-3">/ {max}</span>
      </div>
      <div className="text-[11px] text-text-3 mb-1.5">≥ {need} necessários</div>
      <div className="h-[3px] bg-surface-3 rounded-sm overflow-hidden">
        <div
          className={cn("h-full rounded-sm", met ? "bg-accent" : "bg-border-hi")}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
