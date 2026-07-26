import {
  Brain,
  ChevronsDown,
  ChevronsUp,
  Printer,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ClinicalDisorder } from "../../schema";

export function DisorderHeader({
  data,
  onExpand,
  onCollapse,
  onPrint,
  onReset,
}: {
  readonly data: ClinicalDisorder;
  readonly onExpand: () => void;
  readonly onCollapse: () => void;
  readonly onPrint: () => void;
  readonly onReset: () => void;
}) {
  const metaName = data.meta.nome_completo ?? data.meta.nome;
  const sigla = data.meta.sigla;
  const targetAge = data.meta.faixa_etaria_alvo;
  const subtitle = [
    data.meta.capitulo ?? "DSM-5",
    targetAge ? `faixa alvo: ${targetAge}` : null,
  ]
    .filter(Boolean)
    .join(" · ");
  const codes = [
    ["DSM-5", data.meta.codigo?.dsm5],
    ["CID-10", data.meta.codigo?.cid10],
    ["CID-11", data.meta.codigo?.cid11],
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-muted border-b border-border shadow-sm no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
            <Brain className="h-4.5 w-4.5 text-white" />
          </div>
          <div className="min-w-0">
            <h1 className="text-lg font-serif font-bold text-text leading-tight truncate">
              {metaName}
              {sigla ? (
                <span className="ml-2 text-md font-sans font-semibold text-text-3">
                  {sigla}
                </span>
              ) : null}
            </h1>
            <p className="text-sm text-text-3 truncate">
              {subtitle}
              {codes.some(([, code]) => code)
                ? ` · ${codes
                    .filter(([, code]) => code)
                    .map(([label, code]) => `${label}: ${code}`)
                    .join(" · ")}`
                : ""}
            </p>
          </div>
        </div>
        <TooltipProvider>
          <div className="flex items-center gap-2 shrink-0">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full"
                  onClick={onExpand}
                  aria-label="Expandir todas as seções"
                >
                  <ChevronsDown className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Expandir todas as seções</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full"
                  onClick={onCollapse}
                  aria-label="Recolher todas as seções"
                >
                  <ChevronsUp className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Recolher todas as seções</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full"
                  onClick={onPrint}
                  aria-label="Imprimir relatório clínico"
                >
                  <Printer className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Imprimir relatório clínico</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="destructive"
                  size="icon"
                  className="h-9 w-9 rounded-full"
                  onClick={onReset}
                  aria-label="Limpar respostas da avaliação"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Limpar respostas da avaliação</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </header>
  );
}
