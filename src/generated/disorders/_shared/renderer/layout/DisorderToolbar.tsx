import { RotateCcw, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DisorderToolbar({
  onRefresh,
  onCopy,
}: {
  readonly onRefresh: () => void;
  readonly onCopy: () => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 no-print pt-1">
      <Button variant="outline" onClick={onRefresh}>
        <RotateCcw data-icon="inline-start" /> Atualizar síntese
      </Button>
      <Button onClick={onCopy}>
        <Copy data-icon="inline-start" /> Copiar Markdown
      </Button>
      <span className="text-sm text-text-3">
        Formato pronto para prontuário eletrônico ou Obsidian.
      </span>
    </div>
  );
}
