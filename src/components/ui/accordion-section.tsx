import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { getIcone } from "@/lib/mapear-icones";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionSectionProps {
  title: string;
  icon?: string | LucideIcon;
  badge?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  color?: "blue" | "amber" | "red" | "green" | "slate";
  className?: string;
}

const colorMap = {
  blue: "text-blue-600",
  amber: "text-amber-600",
  red: "text-red-600",
  green: "text-emerald-600",
  slate: "text-slate-600",
};

export function AccordionSection({
  title,
  icon,
  badge,
  children,
  defaultOpen = true,
  color = "blue",
  className,
}: AccordionSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  const IconComponent = typeof icon === "string" ? getIcone(icon) : icon;
  const hasIcon = IconComponent !== undefined;

  return (
    <section
      className={cn(
        "bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="bg-stone-100 w-full flex items-center justify-between px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-stone-200 transition-colors"
        aria-expanded={open}
      >
        <div className={cn("flex items-center gap-2 font-bold", colorMap[color])}>
          {hasIcon && <IconComponent className="w-4 h-4" />}
          <span>{title}</span>
        </div>
        <span className="flex items-center gap-2">
          {badge}
          <ChevronDown
            className={cn(
              "w-4 h-4 text-slate-400 transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        </span>
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-200 ease-out",
          open ? "max-h-[3000px]" : "max-h-0"
        )}
      >
        <div className="p-5 space-y-3 border-t border-slate-100">{children}</div>
      </div>
    </section>
  );
}
