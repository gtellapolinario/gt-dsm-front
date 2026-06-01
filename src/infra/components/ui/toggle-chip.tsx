import React from "react";

interface ToggleChipProps {
  label: string;
  active: boolean;
  onToggle: () => void;
  variant?: "blue" | "green" | "red" | "purple" | "amber";
}

export const ToggleChip: React.FC<ToggleChipProps> = ({
  label,
  active,
  onToggle,
}) => {
  return (
    <div
      onClick={onToggle}
      className={`cursor-pointer text-[11px] font-semibold px-3 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 select-none shadow-sm ${
        active
          ? "bg-amber-600/10 border-amber-500/50 text-white"
          : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:border-slate-700"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${active ? "bg-amber-400" : "bg-slate-600"}`} />
      {label}
    </div>
  );
};
