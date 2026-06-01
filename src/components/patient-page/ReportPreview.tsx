// src/components/patient-page/ReportPreview.tsx
// Faded preview of the auto-generated markdown report.

import { ExternalLink } from "lucide-react";
import { PanelBlock } from "./PanelBlock";
import { Button } from "@/components/ui/button";

interface ReportPreviewProps {
  markdown?: string;
  onOpen?: () => void;
}

export function ReportPreview({ markdown, onOpen }: ReportPreviewProps) {
  return (
    <PanelBlock kicker="Pré-visualização do relatório">
      <div className="relative bg-surface-2 border border-border rounded-[var(--radius-card)] p-3.5 max-h-60 overflow-hidden">
        <pre className="font-mono text-xs leading-relaxed text-text-2 whitespace-pre-wrap m-0">
          {markdown ?? "—"}
        </pre>
        <div
          className="absolute left-0 right-0 bottom-0 h-15 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(transparent, var(--color-surface-2))",
            height: 60,
          }}
        />
      </div>
      <Button
        size="sm"
        onClick={onOpen}
        className="mt-2.5 w-full justify-between"
      >
        Ver relatório completo
      </Button>
    </PanelBlock>
  );
}
