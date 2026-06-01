import { cn } from "@/lib/utils";

interface CountBadgeProps {
  current: number;
  target: number;
  className?: string;
}

export function CountBadge({ current, target, className }: CountBadgeProps) {
  const atingiu = current >= target;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5 text-xs font-semibold px-2.5 py-0.5 rounded-full transition-colors",
        atingiu
          ? "bg-emerald-100 text-emerald-700"
          : "bg-slate-100 text-slate-500",
        className
      )}
    >
      {current}/{target}
    </span>
  );
}
