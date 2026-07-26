import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function GuideCardHeader({
  icon: Icon,
  iconClass,
  children,
}: {
  readonly icon: LucideIcon;
  readonly iconClass: string;
  readonly children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 text-xs font-bold uppercase tracking-wider",
        iconClass,
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{children}</span>
    </div>
  );
}
