// src/components/patient-page/CriterionA1Section.tsx
// Block 3: A1 inattention symptoms (9 items, polythetic threshold 5/9 for adults).
// Generic enough to host any polythetic domain — pass the criterion list as a prop
// when wiring multiple domains (A2 hyperactivity uses the same component).

import { Check, Edit3 } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";
import type { Assessment } from "@/lib/schemas";

interface CriterionItem {
  id: string;         // "A1.1"
  i: number;
  title: string;
  fullText: string;
}

// Canonical TDAH A1 — desatenção. Move to a per-disorder data module
// when more domains come online.
const A1_ITEMS: CriterionItem[] = [
  { id: "A1.1", i: 1, title: "Erros por descuido em detalhes",
    fullText: "Frequentemente deixa de prestar atenção a detalhes ou comete erros por descuido em atividades escolares, trabalho ou outras atividades." },
  { id: "A1.2", i: 2, title: "Dificuldade em manter atenção",
    fullText: "Frequentemente tem dificuldade para manter a atenção em tarefas ou atividades lúdicas." },
  { id: "A1.3", i: 3, title: "Parece não escutar",
    fullText: "Frequentemente parece não escutar quando alguém lhe dirige a palavra diretamente." },
  { id: "A1.4", i: 4, title: "Não termina tarefas",
    fullText: "Frequentemente não segue instruções até o fim e não consegue terminar trabalhos escolares, tarefas domésticas ou atribuições no local de trabalho." },
  { id: "A1.5", i: 5, title: "Dificuldade em organização",
    fullText: "Frequentemente tem dificuldade para organizar tarefas e atividades." },
  { id: "A1.6", i: 6, title: "Evita esforço mental",
    fullText: "Frequentemente evita, não gosta ou reluta em se envolver em tarefas que exigem esforço mental prolongado." },
  { id: "A1.7", i: 7, title: "Perde objetos",
    fullText: "Frequentemente perde coisas necessárias para tarefas ou atividades." },
  { id: "A1.8", i: 8, title: "Distrai-se facilmente",
    fullText: "Frequentemente é facilmente distraído por estímulos externos." },
  { id: "A1.9", i: 9, title: "Esquecimento de atividades",
    fullText: "Frequentemente é esquecido em relação a atividades cotidianas." },
];

const THRESHOLD_ADULT = 5;

interface CriterionA1SectionProps {
  assessment: Assessment;
  onToggle?: (id: string) => void;
  onAddNote?: (id: string, note: string) => void;
}

export function CriterionA1Section({ assessment, onToggle }: CriterionA1SectionProps) {
  const byId = new Map(assessment.responses.map((r) => [r.criterionId, r]));
  const total = A1_ITEMS.filter((it) => byId.get(it.id)?.checked).length;
  const met = total >= THRESHOLD_ADULT;

  return (
    <SectionShell
      kicker="Bloco 3 · Critério A.1"
      title="Sintomas de desatenção"
      action={
        <div className="flex items-baseline gap-1.5">
          <span className="font-serif text-[28px] font-medium text-text tracking-[-0.5px]">
            {total}
          </span>
          <span className="text-xs text-text-3">/ 9</span>
          <Badge  className="ml-2">
            {met ? `≥ ${THRESHOLD_ADULT} atingido` : `${total}/${THRESHOLD_ADULT} abaixo`}
          </Badge>
        </div>
      }
    >
      <p className="text-xs text-text-3 mb-3.5 leading-relaxed">
        Em adultos (≥ 17a), no mínimo{" "}
        <strong className="text-text-2">{THRESHOLD_ADULT} de 9 sintomas</strong>{" "}
        presentes por ≥ 6 meses, em grau inconsistente com o nível de desenvolvimento.
      </p>
      <ul className="flex flex-col border border-border rounded-[var(--radius-card)] overflow-hidden bg-surface list-none p-0 m-0">
        {A1_ITEMS.map((it, i) => {
          const resp = byId.get(it.id);
          const checked = resp?.checked ?? false;
          return (
            <li
              key={it.id}
              className={cn(
                "flex items-start gap-3.5 px-4 py-3.5",
                i > 0 && "border-t border-border"
              )}
            >
              <button
                type="button"
                onClick={() => onToggle?.(it.id)}
                aria-label={`${checked ? "Desmarcar" : "Marcar"} ${it.title}`}
                aria-pressed={checked}
                className={cn(
                  "shrink-0 mt-0.5 w-[18px] h-[18px] rounded-[3px] border-[1.5px] cursor-pointer",
                  "flex items-center justify-center transition-colors text-accent-fg",
                  checked ? "bg-accent border-accent" : "border-border-hi hover:border-text-3 bg-transparent"
                )}
              >
                {checked && <Check size={12} strokeWidth={2.4} />}
              </button>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="text-[11px] font-semibold text-text-3 font-mono">{it.id}</span>
                  <span className="text-sm text-text font-medium">{it.title}</span>
                </div>
                <p className="text-xs text-text-2 leading-relaxed m-0">{it.fullText}</p>
                {resp?.note && (
                  <div className="mt-2 px-2.5 py-1.5 bg-accent-tint text-accent border-l-2 border-accent text-xs leading-snug italic flex gap-1.5 items-start">
                    <Edit3 size={11} className="mt-px shrink-0" />
                    <span>{resp.note}</span>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </SectionShell>
  );
}
