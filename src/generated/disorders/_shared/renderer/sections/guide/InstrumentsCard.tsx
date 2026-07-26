import { FileSpreadsheet } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { InstrumentView } from "../../adapters/guideView";
import { GuideCardHeader } from "../../ui/GuideCardHeader";

export function InstrumentsCard({
  instrumentos,
}: {
  readonly instrumentos: readonly InstrumentView[];
}) {
  return (
    <div className="rounded-xl border border-border bg-surface-2/40 p-4">
      <GuideCardHeader
        icon={FileSpreadsheet}
        iconClass="text-emerald-600 dark:text-emerald-400"
      >
        Escalas Complementares
      </GuideCardHeader>
      <div className="mt-2 flex flex-wrap gap-1.5">
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
