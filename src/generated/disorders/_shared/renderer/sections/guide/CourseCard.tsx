import { Clock } from "lucide-react";
import type { CourseStep } from "../../adapters/guideView";
import { GuideCardHeader } from "../../ui/GuideCardHeader";

export function CourseCard({
  etapas,
}: {
  readonly etapas: readonly CourseStep[];
}) {
  return (
    <div className="rounded-xl border border-border bg-surface-2/60 p-4">
      <GuideCardHeader
        icon={Clock}
        iconClass="text-amber-600 dark:text-amber-400"
      >
        Curso & Desenvolvimento
      </GuideCardHeader>
      <ol className="mt-3 space-y-3 border-l-2 border-amber-200 pl-4 dark:border-amber-800">
        {etapas.map((etapa) => (
          <li key={etapa.rotulo} className="relative">
            <span className="absolute top-1 -left-[23px] h-2.5 w-2.5 rounded-full bg-amber-500 ring-4 ring-amber-100 dark:ring-amber-950" />
            <p className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              {etapa.rotulo}
            </p>
            <p className="text-sm leading-relaxed text-text-2">
              {etapa.valor}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
