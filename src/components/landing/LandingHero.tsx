// src/components/landing/LandingHero.tsx
// Hero with a "product window" — an inline preview of one patient-page (TDAH).
// The preview is intentionally a static facsimile; for marketing screenshots
// from the real workspace, replace <HeroProductPreview /> with an <img>.

import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function LandingHero() {
  return (
    <div className="w-full hidden md:block md:max-w-6xl p-8 mx-auto rounded-lg overflow-hidden border border-border bg-surface shadow-s3">
      {/* macOS chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface-2">
        <span className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-2.5 h-2.5 rounded-full bg-border-hi" />
          ))}
        </span>
        <div className="flex-1 text-center text-xs text-text-3">
          gtmedic-dsm · TDAH · paciente:{" "}
          <span className="text-text-2">Marina S., 32a</span>
        </div>
      </div>
      <div className="grid grid-cols-[220px_1fr_280px] min-h-[540px]">
        {/* mini aside */}
        <aside className="border-r border-border p-3 bg-surface text-xs">
          <div className="text-[10px] font-semibold tracking-wider text-text-4 mb-3 px-1.5">
            CAPÍTULO 01
          </div>
          {["TDAH", "TEA", "Deficiência Intelectual", "Tourette", "Tique Persistente", "Comunicação Social", "Aprendizagem Específico"].map((d, i) => (
            <div
              key={d}
              className={`px-2.5 py-1.5 rounded-sm mb-px flex items-center gap-2 ${i === 0 ? "bg-accent-tint text-accent font-semibold" : "text-text-2"}`}
            >
              {i === 0 && <span className="w-1 h-1 rounded-sm bg-accent" />}
              {d}
            </div>
          ))}
        </aside>
        {/* main */}
        <main className="px-8 py-7 overflow-hidden">
          <div className="flex items-baseline gap-3 mb-2">
            <Badge >F90.0 · DSM-5</Badge>
            <Badge>Polythetic · limiar 5/9</Badge>
          </div>
          <h2 className="font-serif text-3xl font-medium tracking-[-0.6px] text-text mt-2 mb-1.5">
            Transtorno do Déficit de Atenção / Hiperatividade
          </h2>
          <p className="text-xs text-text-3 mb-6">
            Critério A.1 — Sintomas de desatenção (≥ 6 em crianças · ≥ 5 em adultos)
          </p>
          <CriterionPreview />
        </main>
        {/* right panel */}
        <aside className="border-l border-border px-5 py-6 bg-surface-2 text-xs">
          <div className="text-[10px] font-semibold tracking-wider text-text-4 mb-3.5">
            CÔMPUTO EM TEMPO REAL
          </div>
          <ThresholdMini label="Desatenção · adulto ≥ 5"     value={6} max={9} met />
          <ThresholdMini label="Hiperatividade · adulto ≥ 5" value={3} max={9} />
          <div className="h-px bg-border my-4 -mx-5" />
          <div className="text-[10px] font-semibold tracking-wider text-text-4 mb-2.5">
            SUBTIPO INFERIDO
          </div>
          <p className="font-serif text-lg text-text mb-1 m-0">
            Apresentação predominantemente desatenta
          </p>
          <p className="text-xs text-text-3 leading-snug m-0">
            F90.0 · baseada em desatenção atingida sem hiperatividade no limiar.
          </p>
        </aside>
      </div>
    </div>
  );
}

function CriterionPreview() {
  const items = [
    { text: "Não presta atenção em detalhes",   checked: true },
    { text: "Dificuldade para manter atenção",  checked: true },
    { text: "Parece não escutar",                checked: false },
    { text: "Não termina tarefas",               checked: true },
    { text: "Dificuldade para organizar",        checked: true },
    { text: "Evita esforço mental prolongado",   checked: true },
    { text: "Perde objetos",                     checked: false },
    { text: "Distrai-se facilmente",             checked: true },
    { text: "Esquece atividades cotidianas",     checked: false },
  ];
  return (
    <ul className="list-none p-0 m-0">
      {items.map((it, i) => (
        <li
          key={i}
          className={`flex items-start gap-2.5 py-2.5 ${i > 0 ? "border-t border-border" : ""}`}
        >
          <span
            className={`shrink-0 mt-0.5 w-4 h-4 rounded-[3px] border-[1.5px] flex items-center justify-center text-accent-fg ${it.checked ? "bg-accent border-accent" : "border-border-hi"}`}
          >
            {it.checked && <Check size={11} strokeWidth={2.4} />}
          </span>
          <span className={`text-sm leading-snug ${it.checked ? "text-text" : "text-text-2"}`}>
            <span className="text-[11px] text-text-3 mr-1.5 tabular-nums">A.1.{i + 1}</span>
            {it.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ThresholdMini({ label, value, max, met }: { label: string; value: number; max: number; met?: boolean }) {
  return (
    <div className="mb-4">
      <p className="text-xs text-text-3 mb-1.5 m-0">{label}</p>
      <div className="flex items-baseline gap-1.5">
        <span className="font-serif text-3xl font-medium text-text leading-none">{value}</span>
        <span className="text-text-3 text-sm">/ {max}</span>
        <Badge  className="ml-auto">
          {met ? "Atingido" : "Abaixo"}
        </Badge>
      </div>
      <div className="h-1 mt-2 bg-surface-3 rounded-sm overflow-hidden">
        <div
          className={`h-full ${met ? "bg-accent" : "bg-border-hi"}`}
          style={{ width: `${(value / max) * 100}%` }}
        />
      </div>
    </div>
  );
}
