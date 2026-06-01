// src/components/patient-page/PanelBlock.tsx
// Shared shell for the right-side computation panel blocks.

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PanelBlockProps {
  kicker: string;
  children: ReactNode;
  className?: string;
}

export function PanelBlock({ kicker, children, className }: PanelBlockProps) {
  return (
    <div className={cn("mb-7", className)}>
      <div className="text-[10px] font-bold tracking-[1.5px] text-text-4 mb-3 uppercase">
        {kicker}
      </div>
      {children}
    </div>
  );
}
