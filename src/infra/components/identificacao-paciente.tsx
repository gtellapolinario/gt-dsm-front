import { User, Calendar, GraduationCap, Briefcase, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { IdentificacaoState } from "@/infra/types";

interface Props {
  identificacao: IdentificacaoState;
  setField: (field: string, value: string) => void;
}

const ESCOLARIDADES = [
  "Ensino Fundamental Incompleto",
  "Ensino Fundamental Completo",
  "Ensino Médio Incompleto",
  "Ensino Médio Completo",
  "Ensino Superior Incompleto",
  "Ensino Superior Completo",
  "Pós-graduação",
  "Não alfabetizado",
];

export function IdentificacaoPaciente({ identificacao, setField }: Props) {
  return (
    <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="bg-blue-50 px-5 py-3 flex items-center gap-2 border-b border-blue-100">
        <User className="w-4 h-4 text-blue-600" />
        <span className="text-sm font-bold text-slate-700">Identificação do Paciente</span>
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Nome */}
        <div className="space-y-1.5">
          <Label className="text-xs text-slate-500 flex items-center gap-1">
            <User className="w-3 h-3" /> Nome completo
          </Label>
          <Input value={identificacao.paciente} onChange={(e) => setField("paciente", e.target.value)}
            placeholder="Nome do paciente" className="text-sm h-9" />
        </div>

        {/* Data de nascimento */}
        <div className="space-y-1.5">
          <Label className="text-xs text-slate-500 flex items-center gap-1">
            <Calendar className="w-3 h-3" /> Data de nascimento
          </Label>
          <Input type="date" value={identificacao.data_nascimento}
            onChange={(e) => setField("data_nascimento", e.target.value)}
            className="text-sm h-9" />
        </div>

        {/* Sexo */}
        <div className="space-y-1.5">
          <Label className="text-xs text-slate-500">Sexo biológico</Label>
          <select value={identificacao.sexo} onChange={(e) => setField("sexo", e.target.value)}
            className="w-full h-9 px-3 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white">
            <option value="">Selecionar...</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Intersexo">Intersexo</option>
          </select>
        </div>

        {/* Escolaridade */}
        <div className="space-y-1.5">
          <Label className="text-xs text-slate-500 flex items-center gap-1">
            <GraduationCap className="w-3 h-3" /> Escolaridade
          </Label>
          <select value={identificacao.escolaridade} onChange={(e) => setField("escolaridade", e.target.value)}
            className="w-full h-9 px-3 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white">
            <option value="">Selecionar...</option>
            {ESCOLARIDADES.map((e) => (
              <option key={e} value={e}>{e}</option>
            ))}
          </select>
        </div>

        {/* Ocupação */}
        <div className="space-y-1.5">
          <Label className="text-xs text-slate-500 flex items-center gap-1">
            <Briefcase className="w-3 h-3" /> Ocupação
          </Label>
          <Input value={identificacao.ocupacao} onChange={(e) => setField("ocupacao", e.target.value)}
            placeholder="Profissão/ocupação" className="text-sm h-9" />
        </div>

        {/* Queixa principal */}
        <div className="space-y-1.5 sm:col-span-2 lg:col-span-1">
          <Label className="text-xs text-slate-500 flex items-center gap-1">
            <FileText className="w-3 h-3" /> Queixa principal
          </Label>
          <Input value={identificacao.queixa} onChange={(e) => setField("queixa", e.target.value)}
            placeholder="Motivo da consulta" className="text-sm h-9" />
        </div>
      </div>
    </section>
  );
}
