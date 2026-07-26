import { BookMarked } from "lucide-react";
import type { CodeEntry } from "../../adapters/guideView";
import { GuideCardHeader } from "../../ui/GuideCardHeader";

export function NosologyCard({
  codigos,
}: {
  readonly codigos: readonly CodeEntry[];
}) {
  return (
    <div className="rounded-xl border border-border bg-surface-2/60 p-4">
      <GuideCardHeader
        icon={BookMarked}
        iconClass="text-slate-600 dark:text-slate-400"
      >
        Classificação Nosológica
      </GuideCardHeader>
      <dl
        className="mt-3 grid gap-3"
        style={{
          gridTemplateColumns: `repeat(${codigos.length}, minmax(0, 1fr))`,
        }}
      >
        {codigos.map((codigo) => (
          <div
            key={codigo.sistema}
            className="rounded-lg border border-border/60 bg-surface px-3 py-2 text-center"
          >
            <dt className="text-xs font-bold uppercase tracking-wider text-text-3">
              {codigo.sistema}
            </dt>
            <dd className="mt-0.5 font-mono text-sm font-semibold text-text">
              {String(codigo.valor)}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
