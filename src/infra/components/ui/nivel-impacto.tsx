import React from "react";

interface NivelImpactoProps {
  dominio: {
    id: string;
    label: string;
  };
  value: string;
  onChange: (val: string) => void;
}

export const NivelImpacto: React.FC<NivelImpactoProps> = ({
  dominio,
  value,
  onChange,
}) => {
  const levels = [
    { val: "0", label: "Ausente", color: "bg-slate-900 border-slate-800 text-slate-500" },
    { val: "1", label: "Leve", color: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400" },
    { val: "2", label: "Moderado", color: "bg-orange-500/10 border-orange-500/30 text-orange-400" },
    { val: "3", label: "Grave", color: "bg-red-500/10 border-red-500/30 text-red-400" },
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-850 shadow-sm">
      <span className="text-xs font-semibold text-slate-200">{dominio.label}</span>
      <div className="flex gap-1">
        {levels.map((lvl) => {
          const active = value === lvl.val;
          return (
            <button
              key={lvl.val}
              type="button"
              onClick={() => onChange(lvl.val)}
              className={`text-[10px] px-2.5 py-1.5 rounded-lg border font-semibold transition-all cursor-pointer ${
                active
                  ? `${lvl.color} ring-1 ring-blue-500/30`
                  : "border-slate-800 bg-slate-950 text-slate-500 hover:text-slate-300 hover:border-slate-700"
              }`}
            >
              {lvl.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
