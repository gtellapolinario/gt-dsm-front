import { Clock } from "lucide-react";
import type { CourseStep } from "../../adapters/guideView";
import { GuideCardHeader } from "../../ui/GuideCardHeader";

export function CourseCard({
  etapas,
}: {
  readonly etapas: readonly CourseStep[];
}) {
  return (
    <div className="rounded-xl shadow-md border border-border bg-surface-2/60 p-4">
      <GuideCardHeader icon={Clock} iconClass="text-amber-950 text-shadow-xs">
        Curso & Desenvolvimento
      </GuideCardHeader>
      <ol className="mt-3 space-y-3 border-l-2 border-amber-200 pl-4 text-shadow-xs font-serif text-sm font-medium leading-relaxed text-stone-700 text-justify break-words hyphens-auto mx-4 mb-2">
        {etapas.map((etapa) => (
          <li key={etapa.rotulo} className="relative">
            <span className="absolute top-1 -left-[23px] h-2.5 w-2.5 rounded-full bg-amber-500 ring-4 ring-amber-100" />
            <p className="mb-2.5 font-bold text-shadow-xs uppercase tracking-wider text-amber-700">
              {etapa.rotulo}
            </p>
            <p className="text-sm! leading-relaxed text-shadow-xs text-stone-700">
              {etapa.valor}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
