import React from "react";

interface SymptomItemProps {
  sintoma: {
    id: string;
    rotulo: string;
    desc: string;
    pergunta?: string;
  };
  clusterId: string;
  checked: boolean;
  severity?: string;
  onToggle: (checked: boolean) => void;
  onSeverityChange?: (val: string) => void;
}

export const SymptomItem: React.FC<SymptomItemProps> = ({
  sintoma,
  checked,
  onToggle,
}) => {
  return (
    <label className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/80 transition-all cursor-pointer mb-2.5 shadow-sm text-slate-300 hover:text-white select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onToggle(e.target.checked)}
        className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-800 text-blue-500 focus:ring-blue-500/50 focus:ring-offset-slate-900"
      />
      <div className="flex flex-col">
        <span className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
          <span className="text-[10px] bg-slate-800 text-slate-400 px-1 py-0.25 rounded font-mono font-medium">
            {sintoma.id}
          </span>
          {sintoma.rotulo}
        </span>
        {sintoma.desc && (
          <span className="text-xs text-slate-400 mt-1 leading-relaxed">
            {sintoma.desc}
          </span>
        )}
        {sintoma.pergunta && (
          <span className="text-xs text-blue-400/80 italic mt-1.5 leading-relaxed bg-blue-950/20 border border-blue-950/50 p-2 rounded-lg">
            ❓ &ldquo;{sintoma.pergunta}&rdquo;
          </span>
        )}
      </div>
    </label>
  );
};
