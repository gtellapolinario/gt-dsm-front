import React from "react";
import { User, Calendar } from "lucide-react";

// =============================================================================
// TYPES & SCHEMAS DEFINITIONS (extracted / mapped)
// =============================================================================

export interface Symptom {
  id: string;
  texto: string;
  descricao: string;
}

export interface Cluster {
  id: string;
  nome: string;
  descricao: string;
  sintomas: Symptom[];
}

export interface CriterioDiagnostico {
  id: string;
  letra: string;
  rotulo: string;
  descricao_completa: string;
  obrigatorio: boolean;
}

export interface NivelGravidade {
  id: string;
  label: string;
  descricao: string;
}

export interface DominioImpacto {
  id: string;
  label: string;
}

export interface Comorbidade {
  condicao: string;
  frequencia?: string;
  nota: string;
}

export interface DiagnosticoDiferencial {
  condicao: string;
  ponto_distincao: string;
  pertence_a_classe: boolean;
}

export interface Especificador {
  id: string;
  nome: string;
  descricao: string;
}

export interface TranstornoSubtype {
  id: string;
  label: string;
  descricao: string;
}

// =============================================================================
// COMPONENT 1: IdentificacaoForm
// =============================================================================
interface IdentificacaoFormProps {
  values: Record<string, string>;
  onFieldChange: (field: string, value: string) => void;
}

export const IdentificacaoForm: React.FC<IdentificacaoFormProps> = ({ values, onFieldChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-900/50 backdrop-blur-md p-4 rounded-xl border border-slate-700/50 text-white shadow-lg">
      <div className="flex flex-col gap-1">
        <label className="text-xs text-slate-400 font-semibold flex items-center gap-1">
          <User size={12} className="text-blue-400" /> Nome do Paciente
        </label>
        <input
          type="text"
          value={values.nome || ""}
          onChange={(e) => onFieldChange("nome", e.target.value)}
          placeholder="Ex: João Silva"
          className="bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-slate-400 font-semibold flex items-center gap-1">
          <Calendar size={12} className="text-blue-400" /> Data da Avaliação
        </label>
        <input
          type="date"
          value={values.data || ""}
          onChange={(e) => onFieldChange("data", e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 transition-colors text-white"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-slate-400 font-semibold flex items-center gap-1">
          <User size={12} className="text-blue-400" /> Avaliador / Profissional
        </label>
        <input
          type="text"
          value={values.avaliador || ""}
          onChange={(e) => onFieldChange("avaliador", e.target.value)}
          placeholder="Ex: Dr. Carlos"
          className="bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>
    </div>
  );
};

// =============================================================================
// COMPONENT 2: ClustersPanel
// =============================================================================
interface ClustersPanelProps {
  clusters: readonly Cluster[];
  contadores: Record<string, { selecionados: number; total: number }>;
  onToggleSintoma: (clusterId: string, sintomaId: string, checked: boolean) => void;
}

export const ClustersPanel: React.FC<ClustersPanelProps> = ({ clusters, contadores, onToggleSintoma }) => {
  return (
    <div className="flex flex-col gap-4 mt-2">
      {clusters.map((cluster) => {
        const stats = contadores[cluster.id] || { selecionados: 0, total: cluster.sintomas.length };
        return (
          <div key={cluster.id} className="bg-slate-900/40 border border-slate-800/80 rounded-xl overflow-hidden shadow-md">
            <div className="flex justify-between items-center bg-slate-800/60 px-4 py-3 border-b border-slate-800">
              <div>
                <h3 className="text-sm font-bold text-slate-200">{cluster.nome}</h3>
                {cluster.descricao && <p className="text-xs text-slate-400 mt-0.5">{cluster.descricao}</p>}
              </div>
              <span className="text-xs bg-blue-500/20 text-blue-300 font-semibold px-2 py-0.5 rounded-full border border-blue-500/30">
                {stats.selecionados} / {stats.total}
              </span>
            </div>
            <div className="p-3 flex flex-col gap-2.5">
              {cluster.sintomas.map((sintoma) => (
                <label
                  key={sintoma.id}
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-800/30 transition-colors cursor-pointer text-slate-300 hover:text-white"
                >
                  <input
                    type="checkbox"
                    onChange={(e) => onToggleSintoma(cluster.id, sintoma.id, e.target.checked)}
                    className="mt-1 rounded border-slate-700 bg-slate-800 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-900"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-200">{sintoma.texto}</span>
                    <span className="text-xs text-slate-400 leading-relaxed mt-0.5">{sintoma.descricao}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// =============================================================================
// COMPONENT 3: CriteriosPanel
// =============================================================================
interface CriteriosPanelProps {
  criterios: readonly CriterioDiagnostico[];
  onToggleCriterio: (criterioId: string) => void;
}

export const CriteriosPanel: React.FC<CriteriosPanelProps> = ({ criterios, onToggleCriterio }) => {
  return (
    <div className="flex flex-col gap-3 mt-3">
      {criterios.map((criterio) => (
        <div
          key={criterio.id}
          className="flex gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 shadow-sm"
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-blue-400 border border-blue-500/20">
            {criterio.letra}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="text-sm font-semibold text-slate-200">{criterio.rotulo}</h4>
              {criterio.obrigatorio && (
                <span className="text-[10px] bg-red-500/10 text-red-400 px-1.5 py-0.5 rounded border border-red-500/20 font-medium">
                  Obrigatório
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">{criterio.descricao_completa}</p>
            <button
              type="button"
              onClick={() => onToggleCriterio(criterio.id)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-all shadow-sm"
            >
              Confirmar Critério
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// =============================================================================
// COMPONENT 4: GravidadeSelector
// =============================================================================
interface GravidadeSelectorProps {
  niveis: readonly NivelGravidade[];
  selecionado?: string;
  onChange: (valor: string) => void;
}

export const GravidadeSelector: React.FC<GravidadeSelectorProps> = ({ niveis, selecionado, onChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {niveis.map((nivel) => {
        const active = selecionado === nivel.id;
        return (
          <div
            key={nivel.id}
            onClick={() => onChange(nivel.id)}
            className={`cursor-pointer p-4 rounded-xl border transition-all flex flex-col gap-1 shadow-sm ${
              active
                ? "bg-blue-600/10 border-blue-500/50 text-white shadow-blue-500/5"
                : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:border-slate-700"
            }`}
          >
            <span className={`text-xs font-bold uppercase tracking-wider ${active ? "text-blue-400" : "text-slate-500"}`}>
              {nivel.label}
            </span>
            <span className="text-xs text-slate-300 leading-normal mt-1">{nivel.descricao}</span>
          </div>
        );
      })}
    </div>
  );
};

// =============================================================================
// COMPONENT 5: ImpactoFuncionalPanel
// =============================================================================
interface ImpactoFuncionalPanelProps {
  dominios: readonly DominioImpacto[];
  valores?: Record<string, string>;
  onChange: (dominioId: string, valor: string) => void;
}

export const ImpactoFuncionalPanel: React.FC<ImpactoFuncionalPanelProps> = ({ dominios, valores = {}, onChange }) => {
  const levels = [
    { value: "0", label: "Ausente", color: "bg-slate-800 text-slate-400" },
    { value: "1", label: "Leve", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
    { value: "2", label: "Moderado", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
    { value: "3", label: "Grave", color: "bg-red-500/20 text-red-300 border-red-500/30" },
  ];

  return (
    <div className="flex flex-col gap-4">
      {dominios.map((dom) => {
        const currentVal = valores[dom.id] || "0";
        return (
          <div
            key={dom.id}
            className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 shadow-sm"
          >
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-200">{dom.label}</span>
            </div>
            <div className="flex gap-1.5">
              {levels.map((lvl) => {
                const active = currentVal === lvl.value;
                return (
                  <button
                    key={lvl.value}
                    type="button"
                    onClick={() => onChange(dom.id, lvl.value)}
                    className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${
                      active
                        ? lvl.color + " border-opacity-100 ring-1 ring-offset-1 ring-offset-slate-900"
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
      })}
    </div>
  );
};

// =============================================================================
// COMPONENT 6: ComorbidadesChecklist
// =============================================================================
interface ComorbidadesChecklistProps {
  comorbidades: readonly Comorbidade[];
  selecionadas?: string[];
  onToggle: (condicao: string) => void;
}

export const ComorbidadesChecklist: React.FC<ComorbidadesChecklistProps> = ({
  comorbidades,
  selecionadas = [],
  onToggle,
}) => {
  return (
    <div className="flex flex-wrap gap-2.5">
      {comorbidades.map((c) => {
        const active = selecionadas.includes(c.condicao);
        return (
          <div
            key={c.condicao}
            onClick={() => onToggle(c.condicao)}
            className={`cursor-pointer text-xs font-semibold px-3 py-2 rounded-xl border transition-all flex flex-col gap-0.5 shadow-sm select-none ${
              active
                ? "bg-amber-600/10 border-amber-500/50 text-white"
                : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:border-slate-700"
            }`}
          >
            <span className="flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${active ? "bg-amber-400" : "bg-slate-600"}`} />
              {c.condicao}
            </span>
            {c.nota && <span className="text-[10px] text-slate-500 font-normal ml-3">{c.nota}</span>}
          </div>
        );
      })}
    </div>
  );
};

// =============================================================================
// COMPONENT 7: DiferencialList
// =============================================================================
interface DiferencialListProps {
  diferenciais: readonly DiagnosticoDiferencial[];
}

export const DiferencialList: React.FC<DiferencialListProps> = ({ diferenciais }) => {
  return (
    <div className="flex flex-col gap-3">
      {diferenciais.map((ddx) => (
        <div
          key={ddx.condicao}
          className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col gap-1 shadow-sm"
        >
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-slate-200">{ddx.condicao}</span>
            {ddx.pertence_a_classe && (
              <span className="text-[9px] bg-purple-500/10 text-purple-400 px-1.5 py-0.5 rounded border border-purple-500/20 font-medium">
                Mesma Classe
              </span>
            )}
          </div>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">{ddx.ponto_distincao}</p>
        </div>
      ))}
    </div>
  );
};

// =============================================================================
// COMPONENT 8: SubtiposSelector
// =============================================================================
interface SubtiposSelectorProps {
  subtipos: readonly TranstornoSubtype[];
  selecionado?: string;
  onChange: (id: string) => void;
}

export const SubtiposSelector: React.FC<SubtiposSelectorProps> = ({ subtipos, selecionado, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      {subtipos.map((sub) => {
        const active = selecionado === sub.id;
        return (
          <div
            key={sub.id}
            onClick={() => onChange(sub.id)}
            className={`cursor-pointer p-3.5 rounded-xl border transition-all flex flex-col gap-1 shadow-sm ${
              active
                ? "bg-emerald-600/10 border-emerald-500/50 text-white"
                : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:border-slate-700"
            }`}
          >
            <span className="text-sm font-semibold text-slate-200">{sub.label}</span>
            {sub.descricao && <span className="text-xs text-slate-400 mt-0.5">{sub.descricao}</span>}
          </div>
        );
      })}
    </div>
  );
};

// =============================================================================
// COMPONENT 9: EspecificadoresChecklist
// =============================================================================
interface EspecificadoresChecklistProps {
  especificadores: readonly Especificador[];
  selecionados?: string[];
  onToggle: (id: string) => void;
}

export const EspecificadoresChecklist: React.FC<EspecificadoresChecklistProps> = ({
  especificadores,
  selecionados = [],
  onToggle,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {especificadores.map((esp) => {
        const active = selecionados.includes(esp.id);
        return (
          <div
            key={esp.id}
            onClick={() => onToggle(esp.id)}
            className={`cursor-pointer p-3.5 rounded-xl border transition-all flex flex-col gap-1 shadow-sm select-none ${
              active
                ? "bg-indigo-600/10 border-indigo-500/50 text-white"
                : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:border-slate-700"
            }`}
          >
            <span className="text-sm font-semibold text-slate-200">{esp.nome}</span>
            {esp.descricao && <span className="text-xs text-slate-400 mt-0.5">{esp.descricao}</span>}
          </div>
        );
      })}
    </div>
  );
};

// =============================================================================
// COMPONENT 10: MarkdownPreview
// =============================================================================
interface MarkdownPreviewProps {
  markdown: string;
}

export const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ markdown }) => {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 overflow-auto max-h-[400px] shadow-inner">
      <pre className="text-xs text-slate-300 font-mono leading-relaxed whitespace-pre-wrap">{markdown}</pre>
    </div>
  );
};
