import { cn } from "@/lib/utils";
import { getIcone } from "@/lib/mapear-icones";

interface ToggleChipProps {
  label: string;
  icon?: string;
  active: boolean;
  onToggle: () => void;
  variant?: "brand" | "amber" | "red" | "green";
  description?: string;
}

const variantMap = {
  brand: {
    active: "bg-blue-100 border-blue-500 text-blue-700",
    inactive: "bg-white border-slate-200 text-stone-700 hover:border-blue-300",
  },
  amber: {
    active: "bg-amber-100 border-amber-500 text-amber-700",
    inactive: "bg-white border-slate-200 text-stone-700 hover:border-amber-300",
  },
  red: {
    active: "bg-red-100 border-red-500 text-red-700",
    inactive: "bg-white border-slate-200 text-stone-700 hover:border-red-300",
  },
  green: {
    active: "bg-emerald-100 border-emerald-500 text-emerald-700",
    inactive: "bg-white border-slate-200 text-stone-700 hover:border-emerald-300",
  },
};

export function ToggleChip({
  label,
  icon,
  active,
  onToggle,
  variant = "brand",
  description,
}: ToggleChipProps) {
  const Icon = icon ? getIcone(icon) : null;

  return (
    <button
      type="button"
      onClick={onToggle}
      title={description}
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-semibold border shadow-sm rounded-full px-3 py-1.5 transition select-none cursor-pointer",
        variantMap[variant][active ? "active" : "inactive"]
      )}
    >
      {Icon && <Icon className="w-3 h-3" />}
      <span>{label}</span>
    </button>
  );
}
