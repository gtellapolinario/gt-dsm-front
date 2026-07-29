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
    <div className="rounded-xl shadow-md border border-border bg-surface-2/60 p-4">
      <GuideCardHeader icon={Activity} iconClass="text-blue-800 text-shadow-xs">
        Prevalência & Demografia
      </GuideCardHeader>
      {prevalencia.estimativa ? (
        <p className="text-shadow-xs mt-2 font-serif text-md font-semibold leading-relaxed text-stone-800 text-justify text-wrap mx-3 mb-2">
          {prevalencia.estimativa}
        </p>
      ) : null}
      {prevalencia.distribuicaoSexo ? (
        <p className="mt-2 text-stone-700 font-serif text-md font-semibold leading-relaxed text-justify text-wrap mx-3 mb-2 ">
          <span className="font-bold text-stone-800 uppercase tracking-wider">
            Razão →{" "}
            <span className="text-2xl text-stone-800">
              {RAZAO_SEXO_GLIFO}:{" "}
            </span>
          </span>
          <span className="text-md">{prevalencia.distribuicaoSexo}</span>
        </p>
      ) : null}
      {prevalencia.variacoesContextuais ? (
        <p className="mt-2 text-stone-700 font-serif text-md font-semibold leading-relaxed text-justify text-wrap mx-3 mb-2">
          <span className="font-bold text-stone-800 uppercase tracking-wider">
            Variações contextuais:
          </span>{" "}
          {prevalencia.variacoesContextuais}
        </p>
      ) : null}
      {prevalencia.notaAplicador ? (
        <p className="border-t border-border pt-2 italic text-shadow-xs mt-2 font-serif text-sm font-medium leading-relaxed text-stone-500 text-justify text-wrap mx-3 mb-2">
          {prevalencia.notaAplicador}
        </p>
      ) : null}
    </div>
  );
}
