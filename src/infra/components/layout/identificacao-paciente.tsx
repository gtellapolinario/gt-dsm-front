import React from "react";
import { User, Calendar } from "lucide-react";

interface IdentificacaoPacienteProps {
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export const IdentificacaoPaciente: React.FC<IdentificacaoPacienteProps> = ({ values, onChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-900/50 backdrop-blur-md p-4 rounded-xl border border-slate-800/80 text-white shadow-sm">
      <div className="flex flex-col gap-1">
        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
          <User size={10} className="text-blue-400" /> Nome do Paciente
        </label>
        <input
          type="text"
          value={values.nome || ""}
          onChange={(e) => onChange("nome", e.target.value)}
          placeholder="Ex: João Silva"
          className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500/50 transition-colors"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
          <Calendar size={10} className="text-blue-400" /> Data da Avaliação
        </label>
        <input
          type="date"
          value={values.data || ""}
          onChange={(e) => onChange("data", e.target.value)}
          className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500/50 transition-colors"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
          <User size={10} className="text-blue-400" /> Avaliador
        </label>
        <input
          type="text"
          value={values.avaliador || ""}
          onChange={(e) => onChange("avaliador", e.target.value)}
          placeholder="Ex: Dr. Carlos"
          className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500/50 transition-colors"
        />
      </div>
    </div>
  );
};
