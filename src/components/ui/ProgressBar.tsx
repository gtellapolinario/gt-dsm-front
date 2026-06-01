// src/components/ui/ProgressBar.tsx
import { cn } from "@/lib/cn";

interface ProgressBarProps {
  /** 0..1 */
  value: number;
  className?: string;
  muted?: boolean;
  height?: number;
}

export function ProgressBar({ value, className, muted, height = 4 }: ProgressBarProps) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <div
      className={cn("bg-surface-3 rounded-sm overflow-hidden", className)}
      style={{ height }}
    >
      <div
        className={cn("h-full rounded-sm", muted ? "bg-border-hi" : "bg-accent")}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
