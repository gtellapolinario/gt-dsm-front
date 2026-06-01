import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionSectionProps {
  title: string;
  icon?: string;
  color?: "blue" | "green" | "red" | "purple" | "amber";
  badge?: React.ReactNode;
  children: React.ReactNode;
}

export const AccordionSection: React.FC<AccordionSectionProps> = ({
  title,
  badge,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/30 overflow-hidden shadow-sm transition-all duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3.5 bg-slate-900/40 hover:bg-slate-900/60 transition-colors border-b border-slate-850 cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-slate-100">{title}</span>
          {badge}
        </div>
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-slate-400" />
        ) : (
          <ChevronDown className="h-4 w-4 text-slate-400" />
        )}
      </button>
      {isOpen && <div className="p-4 bg-transparent">{children}</div>}
    </div>
  );
};
