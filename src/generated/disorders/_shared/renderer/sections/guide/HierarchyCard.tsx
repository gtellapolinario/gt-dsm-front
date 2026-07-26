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
    <div className="rounded-xl border border-border bg-surface-2/40 p-4">
      <GuideCardHeader
        icon={Network}
        iconClass="text-cyan-700 dark:text-cyan-400"
      >
        Hierarquia Diagnóstica
      </GuideCardHeader>
      <div className="mt-2 space-y-2 text-xs leading-relaxed">
        {hierarquia.exclui.length > 0 ? (
          <p className="text-text-2">
            <span className="font-semibold text-text">
              Tem precedência sobre:
            </span>{" "}
            {hierarquia.exclui.map(titleFromValue).join(", ")}
          </p>
        ) : null}
        {hierarquia.excluidoPor.length > 0 ? (
          <p className="text-text-2">
            <span className="font-semibold text-text">
              Precedido por:
            </span>{" "}
            {hierarquia.excluidoPor.map(titleFromValue).join(", ")}
          </p>
        ) : null}
        {hierarquia.notas ? (
          <p className="border-t border-border pt-2 italic text-text-3">
            {hierarquia.notas}
          </p>
        ) : null}
      </div>
    </div>
  );
}
