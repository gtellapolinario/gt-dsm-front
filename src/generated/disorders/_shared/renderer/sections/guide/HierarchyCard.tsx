import { Network } from "lucide-react";
import type { HierarchyView } from "../../adapters/guideView";
import { GuideCardHeader } from "../../ui/GuideCardHeader";
import { titleFromValue } from "../../../utils/disorderDataAccess";

export function HierarchyCard({
  hierarquia,
}: {
  readonly hierarquia: HierarchyView;
}) {
  return (
    <div className="rounded-xl shadow-md border border-border bg-surface-2/60 p-4">
      <GuideCardHeader icon={Network} iconClass="text-cyan-800 text-shadow-xs">
        Hierarquia Diagnóstica
      </GuideCardHeader>
      <div className="mt-2 space-y-2">
        {hierarquia.exclui.length > 0 ? (
          <p className="text-shadow-xs font-serif text-md font-semibold leading-relaxed text-stone-700 text-justify text-wrap mx-3 mb-2 pb-3">
            <span className="font-bold uppercase tracking-wider text-stone-800">
              Tem precedência sobre:
            </span>{" "}
            <span className="font-medium text-justify  break-word text-xs text-stone-700 pb-3">
              {hierarquia.exclui.map(titleFromValue).join(", ")}
            </span>
          </p>
        ) : null}
        {hierarquia.excluidoPor.length > 0 ? (
          <p className="text-shadow-xs font-serif text-md font-semibold leading-relaxed text-stone-700 text-justify text-wrap mx-3 mb-2">
            <span className="font-bold uppercase tracking-wider text-stone-800">
              Precedido por:
            </span>{" "}
            <span className="font-medium text-justify  break-word text-[11px] text-stone-700 pb-3">
              {hierarquia.excluidoPor.map(titleFromValue).join(", ")}
            </span>
          </p>
        ) : null}
        {hierarquia.notas ? (
          <p className="border-t border-border pt-2 italic text-shadow-xs mt-2 font-serif text-sm font-medium leading-relaxed text-stone-500 text-justify text-wrap mx-3 mb-2">
            {hierarquia.notas}
          </p>
        ) : null}
      </div>
    </div>
  );
}
