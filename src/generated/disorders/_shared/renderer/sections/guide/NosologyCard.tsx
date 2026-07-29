import { BookMarked } from "lucide-react";
import type { CodeEntry } from "../../adapters/guideView";
import { GuideCardHeader } from "../../ui/GuideCardHeader";

export function NosologyCard({
  codigos,
}: {
  readonly codigos: readonly CodeEntry[];
}) {
  const temDsm = codigos.some((c) => c.sistema === "DSM-5-TR");
  // Regras de codificação das equivalências não-diretas (contextual etc.) —
  // enriquecimento vindo do bloco meta.codificacao.
  const regras = codigos.filter(
    (c) => c.regra && c.equivalencia && c.equivalencia !== "direta",
  );
  const temNotas = temDsm || regras.length > 0;
  return (
    <div className="rounded-xl shadow-md border border-border bg-surface-2/60 p-4">
      <GuideCardHeader icon={BookMarked} iconClass="text-slate-800 text-shadow-xs">
        Classificação Nosológica
      </GuideCardHeader>
      <dl
        className="mt-3 grid gap-3"
        style={{
          gridTemplateColumns: `repeat(auto-fit, minmax(7rem, 1fr))`,
        }}
      >
        {codigos.map((codigo) => (
          <div
            key={codigo.sistema}
            className="rounded-lg border border-border/60 bg-surface px-3 py-2 text-center"
          >
            <dt className="text-xs font-bold uppercase tracking-wider text-stone-800">
              {codigo.sistema}
            </dt>
            <dd className="mt-0.5 font-mono text-sm font-semibold text-stone-800">
              {String(codigo.valor)}
            </dd>
            {codigo.equivalencia && codigo.equivalencia !== "direta" ? (
              <dd className="mt-0.5 text-[10px] uppercase tracking-wide text-stone-500">
                {codigo.equivalencia}
              </dd>
            ) : null}
          </div>
        ))}
      </dl>
      {temNotas ? (
        <div className="border-t border-border pt-2 mt-2 mx-3 mb-2 space-y-1.5">
          {temDsm ? (
            <p className="italic text-shadow-xs font-serif text-sm font-medium leading-relaxed text-stone-500 text-justify text-wrap">
              DSM-5-TR: código editorial ICD-9-CM (referência legacy) — a
              codificação vigente segue a CID.
            </p>
          ) : null}
          {regras.map((c) => (
            <p
              key={c.sistema}
              className="italic text-shadow-xs font-serif text-sm font-medium leading-relaxed text-stone-500 text-justify text-wrap"
            >
              {c.sistema}: {c.regra}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
