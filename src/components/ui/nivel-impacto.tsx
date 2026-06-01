import { getIcone } from "@/lib/mapear-icones";
import type { DominioImpacto } from "@/infra/types";

interface NivelImpactoProps {
  dominio: DominioImpacto;
  value: string;
  onChange: (value: string) => void;
}

const niveis = [
  { value: "0", label: "Sem prejuízo" },
  { value: "1", label: "Leve" },
  { value: "2", label: "Moderado" },
  { value: "3", label: "Grave" },
];

export function NivelImpacto({ dominio, value, onChange }: NivelImpactoProps) {
  const Icon = getIcone(dominio.icone_fa);

  return (
    <div className="flex items-center gap-2">
      <Icon className="w-4 h-4 text-slate-400 shrink-0" />
      <label className="text-xs text-slate-600 flex-1 truncate">
        {dominio.label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-xs border border-slate-200 rounded-md bg-slate-50 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 min-w-[130px]"
      >
        {niveis.map((n) => (
          <option key={n.value} value={n.value}>
            {n.value} — {n.label}
          </option>
        ))}
      </select>
    </div>
  );
}
