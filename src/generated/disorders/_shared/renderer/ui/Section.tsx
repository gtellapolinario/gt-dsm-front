import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function Section({
  id,
  icon: Icon,
  iconClass = "text-blue-600",
  title,
  badge,
  children,
}: {
  readonly id: string;
  readonly icon: LucideIcon;
  readonly iconClass?: string;
  readonly title: ReactNode;
  readonly badge?: ReactNode;
  readonly children: ReactNode;
}) {
  return (
    <AccordionItem
      value={id}
      className="bg-surface rounded-xl border border-border shadow-sm overflow-hidden not-last:border-b-0 data-open:bg-transparent"
    >
      <AccordionTrigger className="bg-muted/60 w-full items-center px-5 py-3 text-md hover:bg-muted hover:no-underline transition-colors cursor-pointer">
        <span className="flex flex-1 items-center justify-between gap-2">
          <span className={cn("flex items-center gap-2 font-bold", iconClass)}>
            <Icon className="h-4 w-4" />
            <span className="text-text">{title}</span>
          </span>
          {badge ? (
            <span className="flex items-center gap-2">{badge}</span>
          ) : null}
        </span>
      </AccordionTrigger>
      <AccordionContent className="border-t border-border p-0 [&_p:not(:last-child)]:mb-0">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
}
