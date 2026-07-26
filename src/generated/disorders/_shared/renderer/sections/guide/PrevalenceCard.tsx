import { Activity } from "lucide-react";
import type { PrevalenceView } from "../../adapters/guideView";
import { RAZAO_SEXO_GLIFO } from "../../constants";
import { GuideCardHeader } from "../../ui/GuideCardHeader";

export function PrevalenceCard({
  prevalencia,
}: {
  readonly prevalencia: PrevalenceView;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface-2/60 p-4">
      <GuideCardHeader
        icon={Activity}
        iconClass="text-blue-600 dark:text-blue-400"
      >
        Prevalência & Demografia
      </GuideCardHeader>
      {prevalencia.populacaoGeral ? (
        <p className="mt-2 font-serif text-xl font-bold leading-snug text-text">
          {prevalencia.populacaoGeral}
        </p>
      ) : null}
      {prevalencia.proporcaoSexo ? (
        <p className="mt-1.5 text-lg text-stone-700 ">
          <span className="font-semibold text-text">
            Razão{" "}
            <span className="text-2xl text-stone-800">{RAZAO_SEXO_GLIFO}</span>
          </span>{" "}
          {prevalencia.proporcaoSexo}
        </p>
      ) : null}
      {prevalencia.variacoesCulturais ? (
        <p className="mt-1.5 text-xs leading-relaxed text-text-2">
          <span className="font-semibold text-text">
            Variações culturais:
          </span>{" "}
          {prevalencia.variacoesCulturais}
        </p>
      ) : null}
      {prevalencia.notas ? (
        <p className="mt-2 border-t border-border pt-2 text-[11px] italic text-text-3">
          {prevalencia.notas}
        </p>
      ) : null}
    </div>
  );
}
