import { Brain } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  className?: string;
  /** When true, render only the mark (no wordmark). */
  markOnly?: boolean;
}

export function Logo({ size = 22, className, markOnly = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-text font-medium", className)}>
      <Brain size={size} className="text-cyan-600 dark:text-cyan-400 shrink-0" />
      {!markOnly && (
        <span className="font-serif text-[17px] font-medium tracking-[-0.3px] leading-none">
          GTmedic<span className="opacity-50">·</span>DSM
        </span>
      )}
    </span>
  );
}
