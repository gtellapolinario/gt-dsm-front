/**
 * ============================================================
 * Consulta Short (consulta-short.tsx) — REFATORADO
 * ============================================================
 * Componente de consulta resumida (V2B) para transtornos SHORT.
 * Usa useDSMAvaliacao tipado corretamente com TranstornoDSM V2B.
 *
 * ANTES: useDSMAvaliacao com tipagem fraca, props sem tipagem
 * DEPOIS: Props totalmente tipadas, hook tipado com V2B
 * ============================================================
 */

import { useState, useCallback } from "react";
import type { TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import type {
  ConsultaState,
  ErrorBoundaryState,
  IdentificacaoState,
} from "@/infra/types/dsm-form-types";
import type { DSMHookReturn } from "@/infra/types/hook-types";

import { ConsultaShell } from "./layout/consulta-shell";
import { IdentificacaoPaciente } from "./layout/identificacao-paciente";
import { ConsultaRenderer } from "./consulta-renderer";

/* ============================================================
 * 1. TIPOS ESPECIFICOS V2B (SHORT)
 * ============================================================ */

/**
 * Versao V2B do TranstornoDSM: contem apenas dados essenciais
 * para consultas SHORT (sem clusters completos, sem entrevista estruturada).
 */
export interface TranstornoDSMV2B {
  /** ID do transtorno */
  id: string;
  /** Nome completo */
  nome_completo: string;
  /** Sigla */
  name: string;
  /** Capitulo */
  chapter_id: string;
  chapter_name: string;
  /** Estrutura diagnostica */
  estrutura_diagnostica: string;
  /** Categoria (SHORT) */
  category: "SHORT";
  /** Codigos */
  codigo?: {
    cid10: string;
    cid11: string | null;
    dsm5: string;
  };
  /** Criterios resumidos */
  criterios_resumidos: Array<{
    id: string;
    texto: string;
    obrigatorio: boolean;
  }>;
  /** Indicacao terapeutica resumida */
  indicacao_terapeutica: string;
  /** Referencias rapidas */
  referencias_rapidas: string[];
}

/**
 * Estado de consulta SHORT (simplificado).
 */
export interface ConsultaStateV2B {
  /** Identificacao do paciente */
  identificacao: IdentificacaoState;
  /** Respostas dos criterios resumidos */
  respostas: Record<string, boolean>;
  /** Notas clinicas */
  notasClinicas: string;
  /** Status */
  status: "em_andamento" | "concluida" | "rascunho";
  /** Timestamp */
  inicioConsulta: string;
  ultimaAtualizacao: string;
}

/* ============================================================
 * 2. INTERFACE DE PROPS
 * ============================================================ */

interface ConsultaShortProps {
  /** Dados do transtorno V2B (SHORT) */
  data: TranstornoDSMV2B;
  /** Hook de avaliacao V2B */
  hook: DSMHookReturn;
  /** Estado da consulta V2B */
  consultaState: ConsultaStateV2B;
  /** Setter para estado */
  setConsultaState: (state: ConsultaStateV2B) => void;
  /** Error boundary */
  errorBoundary: ErrorBoundaryState;
  /** Titulo opcional */
  titulo?: string;
  /** Callback de conclusao */
  onConcluir?: (state: ConsultaStateV2B) => void;
  /** Callback de cancelamento */
  onCancelar?: () => void;
}

/* ============================================================
 * 3. ADAPTER: Converte V2B -> Full para ConsultaRenderer
 * ============================================================ */

/**
 * Adapter que converte TranstornoDSMV2B para TranstornoDSM completo.
 * Permite reusar ConsultaRenderer sem duplicar logica.
 */
function adaptarV2BParaFull(transtornoV2B: TranstornoDSMV2B): TranstornoDSM {
  return {
    $schema_version: "1.0.0",
    meta: {
      id: transtornoV2B.id,
      nome_completo: transtornoV2B.nome_completo,
      sigla: transtornoV2B.name,
      capitulo_id: transtornoV2B.chapter_id,
      capitulo: transtornoV2B.chapter_name,
      grupo: null,
      versao_complementar_existe: false,
      sinonimos_historicos: [],
      faixa_etaria_alvo: "adulto",
      codigo: transtornoV2B.codigo ?? {
        cid10: "",
        cid11: null,
        dsm5: "",
      },
    },
    id: transtornoV2B.id,
    item_id: transtornoV2B.id,
    name: transtornoV2B.name,
    nome_completo: transtornoV2B.nome_completo,
    chapter_id: transtornoV2B.chapter_id,
    chapter_name: transtornoV2B.chapter_name,
    category: transtornoV2B.category,
    estrutura_diagnostica: transtornoV2B.estrutura_diagnostica,
    estrutura_geral: transtornoV2B.estrutura_diagnostica,
    ui_mode: "short",
    severity_type: "nao_aplica",
    has_formal_severity: false,
    render_structured_interview: false,
    diagnostic_rule: "",
    clusters_sintomas: transtornoV2B.criterios_resumidos.map((c) => ({
      id: c.id,
      nome: c.texto,
      descricao: "",
      sintomas: [
        {
          id: c.id,
          texto: c.texto,
          descricao: "",
        },
      ],
    })),
    criterios_condicionais: [],
    gravidade: {
      tipo: "nao_aplica",
      presente: false,
      has_formal_severity: false,
      regra_atribuicao: "",
      niveis: [],
      dominios: [],
    },
    dominios_impacto: [],
    comorbidades_frequentes: [],
    diagnostico_diferencial: [],
    perguntas_chave: [],
    key_questions: [],
    curso_desenvolvimento: {
      idade_inicio_tipica: "",
      trajetoria: "",
      prognostico: "",
    },
    prevalencia: {
      populacao_geral: "",
      proporcao_sexo: "",
      variacoes_culturais: "",
      notas: "",
    },
    hierarquia: {
      presente: false,
      notas: "",
      exclui_se_diagnosticado: [],
      exclui_diagnostico_de: [],
    },
    subtipos: {
      presente: false,
      itens: [],
    },
    especificadores: [],
    template_prontuario: {
      titulo: transtornoV2B.nome_completo,
      texto: transtornoV2B.indicacao_terapeutica,
      campos: [],
    },
    metadados_globais: {},
    instrumentos_complementares: [],
  };
}

/**
 * Converte ConsultaStateV2B para ConsultaState completo.
 */
function adaptarEstadoV2BParaFull(
  estadoV2B: ConsultaStateV2B
): ConsultaState {
  return {
    id: `short-${Date.now()}`,
    identificacao: estadoV2B.identificacao,
    transtorno: null,
    respostas: estadoV2B.respostas,
    sintomasSelecionados: {},
    clustersAvaliados: {},
    subtipoSelecionado: null,
    especificadoresSelecionados: [],
    nivelGravidade: null,
    impactoFuncional: {},
    diagnosticosDiferenciais: [],
    notasClinicas: estadoV2B.notasClinicas,
    inicioConsulta: estadoV2B.inicioConsulta,
    ultimaAtualizacao: estadoV2B.ultimaAtualizacao,
    status: estadoV2B.status,
    diagnosticoPreliminar: false,
    pontuacoes: {},
  };
}

/* ============================================================
 * 4. COMPONENTE
 * ============================================================ */

export function ConsultaShort({
  data,
  hook,
  consultaState,
  setConsultaState,
  errorBoundary,
  titulo,
  onConcluir,
  onCancelar,
}: ConsultaShortProps): JSX.Element {
  /** Aba ativa (short tem menos abas) */
  const [abaAtiva, setAbaAtiva] = useState<"identificacao" | "avaliacao">(
    "identificacao"
  );

  /** Atualiza identificacao */
  const handleIdentificacaoChange = useCallback(
    (field: keyof IdentificacaoState, value: string) => {
      setConsultaState({
        ...consultaState,
        identificacao: {
          ...consultaState.identificacao,
          [field]: value,
        },
        ultimaAtualizacao: new Date().toISOString(),
      });
    },
    [consultaState, setConsultaState]
  );

  /** Concluir consulta short */
  const handleConcluir = useCallback(() => {
    const estadoFinal: ConsultaStateV2B = {
      ...consultaState,
      status: "concluida",
      ultimaAtualizacao: new Date().toISOString(),
    };
    setConsultaState(estadoFinal);
    onConcluir?.(estadoFinal);
  }, [consultaState, setConsultaState, onConcluir]);

  /** Adapta dados para ConsultaRenderer */
  const dataAdaptado = adaptarV2BParaFull(data);
  const estadoAdaptado = adaptarEstadoV2BParaFull(consultaState);

  /** Acoes do shell */
  const shellActions = (
    <div className="flex space-x-2">
      {abaAtiva === "avaliacao" && (
        <button
          type="button"
          onClick={handleConcluir}
          className="px-4 py-2 rounded-md text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors"
        >
          Concluir
        </button>
      )}
      {onCancelar && (
        <button
          type="button"
          onClick={onCancelar}
          className="px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
        >
          Cancelar
        </button>
      )}
    </div>
  );

  return (
    <ConsultaShell
      title={titulo ?? `${data.nome_completo} (Consulta Resumida)`}
      subtitle={`SHORT | ${data.estrutura_diagnostica}`}
      actions={shellActions}
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: data.chapter_name, href: `/capitulo/${data.chapter_id}` },
        { label: data.nome_completo },
      ]}
    >
      {/* Banner indicando modo SHORT */}
      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center space-x-2">
        <span className="text-blue-600" aria-hidden="true">
          &#9432;
        </span>
        <p className="text-sm text-blue-700">
          <strong>Modo Consulta Resumida (SHORT):</strong> Este transtorno usa
          uma avaliacao simplificada com criterios resumidos.
        </p>
      </div>

      {/* Navegacao por abas */}
      <nav className="flex space-x-1 border-b border-gray-200 mb-6">
        <button
          type="button"
          onClick={() => setAbaAtiva("identificacao")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            abaAtiva === "identificacao"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Identificacao
        </button>
        <button
          type="button"
          onClick={() => setAbaAtiva("avaliacao")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            abaAtiva === "avaliacao"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Avaliacao
        </button>
      </nav>

      {/* Conteudo por aba */}
      {abaAtiva === "identificacao" && (
        <section data-testid="short-aba-identificacao">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Identificacao do Paciente
          </h2>
          <IdentificacaoPaciente
            values={consultaState.identificacao}
            onChange={handleIdentificacaoChange}
          />
        </section>
      )}

      {abaAtiva === "avaliacao" && (
        <section data-testid="short-aba-avaliacao">
          <ConsultaRenderer
            data={dataAdaptado}
            hook={hook}
            setConsultaState={(state: ConsultaState) => {
              // Mapeia estado completo de volta para V2B
              setConsultaState({
                ...consultaState,
                respostas: state.respostas,
                notasClinicas: state.notasClinicas,
                ultimaAtualizacao: new Date().toISOString(),
              });
            }}
            consultaState={estadoAdaptado}
            errorBoundary={errorBoundary}
          />
        </section>
      )}
    </ConsultaShell>
  );
}
