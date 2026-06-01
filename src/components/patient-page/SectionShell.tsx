// src/components/patient-page/SectionShell.tsx
// Visual chrome shared by every patient-page section. Title bar with a small
// kicker; thin underline; optional action slot on the right.

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionShellProps {
  kicker: string;
  title: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function SectionShell({ kicker, title, action, children, className }: SectionShellProps) {
  return (
    <section className={cn("mb-9", className)}>
      <header className="flex items-end justify-between mb-4 pb-2 border-b border-border">
        <div>
          <div className="text-[10px] font-bold tracking-[1.5px] text-accent mb-1 uppercase">
            {kicker}
          </div>
          <h2 className="font-serif text-[22px] font-medium tracking-[-0.3px] m-0 text-text">
            {title}
          </h2>
        </div>
        {action}
      </header>
      {children}
    </section>
  );
}
