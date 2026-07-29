import { FileSpreadsheet } from "lucide-react";
import { Badge } from "@ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@ui/tooltip";
import type { InstrumentView } from "../../adapters/guideView";
import { GuideCardHeader } from "../../ui/GuideCardHeader";

export function InstrumentsCard({
  instrumentos,
}: {
  readonly instrumentos: readonly InstrumentView[];
}) {
  return (
    <div className="rounded-xl shadow-md border border-border bg-surface-2/60 p-4">
      <GuideCardHeader
        icon={FileSpreadsheet}
        iconClass="text-emerald-800 text-shadow-xs"
      >
        Escalas Complementares
      </GuideCardHeader>
      <div className="mt-2 flex flex-wrap gap-1.5 mx-3 mb-2">
        {instrumentos.map((inst, idx) => (
          <Tooltip key={idx}>
            <TooltipTrigger asChild>
              <Badge variant="secondary" className="h-auto">
                {inst.sigla || inst.nome}
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              {[inst.nome, inst.uso].filter(Boolean).join(" — ")}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
