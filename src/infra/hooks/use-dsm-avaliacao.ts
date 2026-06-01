/**
 * ============================================================
 * Hook 10: useDSMAvaliacao (Dispatcher Generico)
 * ============================================================
 * Hook UNICO generico para FULL e SHORT. Suporta:
 * - Criterios simples, clusters, severidade, especificadores,
 *   subtipos, key questions.
 * - DUAL MODE: TranstornoDSM V1 (legacy) e V2B (novo formato).
 *
 * Usa discriminated union com campo `_version` para diferenciar.
 * V1: `clusters_sintomas`, `criterios_condicionais` etc.
 * V2B: `data.criteria`, `data.clusters`, `data.severity` etc.
 *
 * ZERO `any`, ZERO `as any`, ZERO `as unknown as`.
 * ============================================================
 */

import { useState, useMemo, useCallback } from "react";
import type {
  TranstornoDSM,
  ClusterSintomas,
  CriterioDiagnostico,
  DominioImpactoFuncional,
  Comorbidade,
  Especificador,
} from "@/infra/schemas/dsm-schemas";
import type {
  IdentificacaoState,
  SintomaFormState,
  FormValues,
  PayloadSaida,
  ClusterCounter,
} from "@/infra/types/dsm-form-types";
import { buildPayload } from "@/infra/utils/payload-builder";
import { generateMarkdown } from "@/infra/utils/markdown-generator";

/* ============================================================
 * 1. TIPOS V2B — formato novo
 * ============================================================ */

/** Criterio no formato V2B. */
export interface V2BCriterion {
  id: string;
  letter: string;
  label: string;
  description: string;
  required: boolean;
}

/** Cluster no formato V2B. */
export interface V2BCluster {
  id: string;
  name: string;
  description: string;
  symptoms: Array<{
    id: string;
    text: string;
    description: string;
  }>;
  threshold: number;
}

/** Nivel de severidade no formato V2B. */
export interface V2BSeverityLevel {
  id: string;
  label: string;
  description: string;
}

/** Severidade no formato V2B. */
export interface V2BSeverity {
  type: string;
  present: boolean;
  has_formal_severity: boolean;
  levels: V2BSeverityLevel[];
  domains: Array<{ id: string; label: string; description?: string }>;
}

/** Subtipo no formato V2B. */
export interface V2BSubtype {
  id: string;
  name: string;
  description: string;
}

/** Especificador no formato V2B. */
export interface V2BSpecifier {
  id: string;
  name: string;
  description: string;
}

/** TranstornoDSM no formato V2B. */
export interface TranstornoDSMV2B {
  /** Versao do schema */
  $schema_version: "2.0.0";
  /** Versao do formato */
  _version: "v2b";
  /** Metadados */
  meta: {
    id: string;
    nome_completo: string;
    sigla: string;
    capitulo_id: string;
    capitulo: string;
    codigo: { cid10: string; cid11: string | null; dsm5: string };
  };
  /** ID */
  id: string;
  /** Nome */
  nome_completo: string;
  /** Capitulo */
  chapter_id: string;
  chapter_name: string;
  /** Categoria */
  category: "FULL" | "SHORT" | "MINIMAL" | "EXCLUDE";
  /** Estrutura diagnostica */
  estrutura_diagnostica: string;
  /** Clusters */
  clusters: V2BCluster[];
  /** Criterios */
  criteria: V2BCriterion[];
  /** Severidade */
  severity: V2BSeverity;
  /** Dominios de impacto */
  impact_domains: Array<{ id: string; label: string }>;
  /** Comorbidades */
  comorbidities: Array<{ condition: string; frequency: string | null; note: string }>;
  /** Especificadores */
  specifiers: V2BSpecifier[];
  /** Subtipos */
  subtypes: { present: boolean; items: V2BSubtype[] };
  /** Key questions */
  key_questions: Array<{ id: string; text: string }>;
  /** Regra diagnostica */
  diagnostic_rule: string;
}

/* ============================================================
 * 2. Discriminated Union e Type Guards
 * ============================================================ */

/** Tipo unificado: V1 (legacy) ou V2B. */
export type TranstornoDSMUnified = TranstornoDSM | TranstornoDSMV2B;

/**
 * Type guard: verifica se um transtorno é V2B.
 * Usa discriminated union no campo `_version`.
 */
export function isTranstornoV2B(
  t: TranstornoDSMUnified,
): t is TranstornoDSMV2B {
  return "_version" in t && t._version === "v2b";
}

/* ============================================================
 * 3. Adapter: V2B -> V1 (normaliza para FormValues compativel)
 * ============================================================ */

/**
 * Adapta um TranstornoDSM V2B para o formato V1 (legacy).
 * Isso permite que `buildPayload` funcione com ambos os formatos.
 */
function adaptV2BToV1(v2b: TranstornoDSMV2B): TranstornoDSM {
  const clustersSintomas: ClusterSintomas[] = v2b.clusters.map((c) => ({
    id: c.id,
    nome: c.name,
    descricao: c.description,
    sintomas: c.symptoms.map((s) => ({
      id: s.id,
      texto: s.text,
      descricao: s.description,
    })),
  }));

  const criteriosCondicionais: CriterioDiagnostico[] = v2b.criteria.map((c) => ({
    id: c.id,
    letra: c.letter,
    rotulo: c.label,
    descricao_completa: c.description,
    obrigatorio: c.required,
  }));

  const dominiosImpacto: DominioImpactoFuncional[] = v2b.impact_domains.map(
    (d) => ({ id: d.id, label: d.label }),
  );

  const comorbidadesFrequentes: Comorbidade[] = v2b.comorbidities.map((c) => ({
    condicao: c.condition,
    frequencia: c.frequency,
    nota: c.note,
  }));

  const especificadores: Especificador[] = v2b.specifiers.map((s) => ({
    id: s.id,
    nome: s.name,
    descricao: s.description,
  }));

  return {
    $schema_version: "1.0.0",
    meta: {
      id: v2b.meta.id,
      nome_completo: v2b.meta.nome_completo,
      sigla: v2b.meta.sigla,
      capitulo_id: v2b.meta.capitulo_id,
      capitulo: v2b.meta.capitulo,
      grupo: null,
      versao_complementar_existe: false,
      sinonimos_historicos: [],
      faixa_etaria_alvo: "",
      codigo: v2b.meta.codigo,
    },
    id: v2b.id,
    item_id: v2b.id,
    name: v2b.meta.sigla || v2b.id,
    nome_completo: v2b.nome_completo,
    chapter_id: v2b.chapter_id,
    chapter_name: v2b.chapter_name,
    category: v2b.category,
    estrutura_diagnostica: v2b.estrutura_diagnostica,
    estrutura_geral: v2b.estrutura_diagnostica,
    ui_mode: "structured_compact",
    severity_type: v2b.severity.type,
    has_formal_severity: v2b.severity.has_formal_severity,
    render_structured_interview: false,
    diagnostic_rule: v2b.diagnostic_rule,
    clusters_sintomas: clustersSintomas,
    criterios_condicionais: criteriosCondicionais,
    gravidade: {
      tipo: v2b.severity.type,
      presente: v2b.severity.present,
      has_formal_severity: v2b.severity.has_formal_severity,
      regra_atribuicao: "",
      niveis: v2b.severity.levels.map((l) => ({
        id: l.id,
        label: l.label,
        descricao: l.description,
      })),
      dominios: v2b.severity.domains.map((d) => ({
        id: d.id,
        label: d.label,
        descricao: d.description ?? "",
      })),
    },
    dominios_impacto: dominiosImpacto,
    comorbidades_frequentes: comorbidadesFrequentes,
    diagnostico_diferencial: [],
    perguntas_chave: v2b.key_questions.map((q) => ({
      id: q.id,
      texto: q.text,
    })),
    key_questions: v2b.key_questions.map((q) => ({
      id: q.id,
      texto: q.text,
    })),
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
      presente: v2b.subtypes.present,
      itens: v2b.subtypes.items.map((s) => ({
        id: s.id,
        nome: s.name,
        descricao: s.description,
      })),
    },
    especificadores: especificadores,
    template_prontuario: {
      titulo: v2b.nome_completo,
      texto: "",
      campos: [],
    },
    metadados_globais: {},
    instrumentos_complementares: [],
  };
}

/* ============================================================
 * 4. Estado interno do hook
 * ============================================================ */

interface DSMFormState {
  clusters: Record<string, Record<string, SintomaFormState>>;
  criterios_condicionais: Record<string, boolean>;
  subtipo_selecionado: string | null;
  gravidade: string;
  especificadores: Record<string, boolean | string>;
  impacto: Record<string, "0" | "1" | "2" | "3">;
  comorbidades_selecionadas: string[];
  notas_clinicas: {
    historia: string;
    observacoes_clusters: Record<string, string>;
    observacoes_gerais: string;
  };
}

/* ------------------------------------------------------------
 * Estado inicial
 * ------------------------------------------------------------ */

const IDENTIFICACAO_INICIAL: IdentificacaoState = {
  paciente: "",
  data_nascimento: "",
  sexo: "",
  escolaridade: "",
  ocupacao: "",
  queixa: "",
};

const FORM_INICIAL: DSMFormState = {
  clusters: {},
  criterios_condicionais: {},
  subtipo_selecionado: null,
  gravidade: "",
  especificadores: {},
  impacto: {},
  comorbidades_selecionadas: [],
  notas_clinicas: {
    historia: "",
    observacoes_clusters: {},
    observacoes_gerais: "",
  },
};

/* ============================================================
 * 5. Interface de retorno
 * ============================================================ */

export interface DSMAvaliacaoReturn {
  /** Dados de identificacao do paciente */
  identificacao: IdentificacaoState;
  /** Valores do formulario interno */
  formValues: DSMFormState;
  /** Dados normalizados do transtorno (V1) */
  normalizedData: TranstornoDSM;
  /** Indica se a fonte era V2B */
  isV2BSource: boolean;
  /** Counters por cluster */
  clusterCounters: Record<string, ClusterCounter>;
  /** Clusters atendidos */
  clustersAtendidos: Record<string, boolean>;
  /** Criterios atendidos / total */
  criteriosAtendidos: number;
  criteriosTotal: number;
  /** Subtipos disponiveis */
  subtiposDisponiveis: Array<{ id: string; nome: string }>;
  /** Especificadores disponiveis */
  especificadoresDisponiveis: Especificador[];
  /** Perguntas chave */
  keyQuestions: Array<{ id: string; texto: string }>;
  /** Dominios de impacto */
  dominiosImpacto: DominioImpactoFuncional[];
  /** Comorbidades disponiveis */
  comorbidadesDisponiveis: Comorbidade[];
  /** Payload de saida */
  payload: PayloadSaida;
  /** Relatorio em markdown */
  markdown: string;
  /** Atualiza um campo de identificacao */
  setIdentificacaoField: (field: keyof IdentificacaoState, value: string) => void;
  /** Alterna um sintoma em um cluster */
  toggleSintoma: (clusterId: string, sintomaId: string) => void;
  /** Define a severidade de um sintoma */
  setSintomaSeverity: (clusterId: string, sintomaId: string, severity: SintomaFormState["severity"]) => void;
  /** Alterna um criterio condicional */
  toggleCriterio: (criterioId: string) => void;
  /** Define o subtipo selecionado */
  setSubtipo: (subtipo: string | null) => void;
  /** Define o nivel de gravidade */
  setGravidade: (gravidade: string) => void;
  /** Alterna um especificador */
  toggleEspecificador: (especificadorId: string) => void;
  /** Define o impacto em um dominio */
  setImpacto: (dominioId: string, value: "0" | "1" | "2" | "3") => void;
  /** Alterna uma comorbidade */
  toggleComorbidade: (condicao: string) => void;
  /** Atualiza notas clinicas */
  setNotasClinicas: (field: "historia" | "observacoes_gerais", value: string) => void;
  /** Atualiza observacoes de um cluster */
  setObservacaoCluster: (clusterId: string, observacao: string) => void;
  /** Reseta o formulario */
  reset: () => void;
  /** Copia o markdown para a area de transferencia */
  copiarMarkdown: () => Promise<boolean>;
}

/* ============================================================
 * 6. Adapter: DSMFormState -> FormValues
 * ============================================================ */

function adaptToFormValues(form: DSMFormState): FormValues {
  return {
    clusters: form.clusters,
    criterios_condicionais: form.criterios_condicionais,
    subtipo_selecionado: form.subtipo_selecionado,
    gravidade: form.gravidade,
    especificadores: form.especificadores,
    impacto: form.impacto,
    comorbidades_selecionadas: form.comorbidades_selecionadas,
    notas_clinicas: form.notas_clinicas,
  };
}

/* ============================================================
 * 7. Hook principal
 * ============================================================ */

export function useDSMAvaliacao(
  data: TranstornoDSMUnified,
): DSMAvaliacaoReturn {
  // Normaliza V2B -> V1 se necessario
  const normalizedData: TranstornoDSM = useMemo(() => {
    if (isTranstornoV2B(data)) {
      return adaptV2BToV1(data);
    }
    return data;
  }, [data]);

  const isV2BSource = useMemo(() => isTranstornoV2B(data), [data]);

  const [identificacao, setIdentificacao] = useState<IdentificacaoState>(
    IDENTIFICACAO_INICIAL,
  );
  const [formValues, setFormValues] = useState<DSMFormState>(FORM_INICIAL);

  // --- Callbacks de atualizacao ---

  const setIdentificacaoField = useCallback(
    (field: keyof IdentificacaoState, value: string) => {
      setIdentificacao((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const toggleSintoma = useCallback((clusterId: string, sintomaId: string) => {
    setFormValues((prev) => {
      const cluster = prev.clusters[clusterId] ?? {};
      const atual = cluster[sintomaId] ?? { checked: false, severity: "" };
      return {
        ...prev,
        clusters: {
          ...prev.clusters,
          [clusterId]: {
            ...cluster,
            [sintomaId]: { ...atual, checked: !atual.checked },
          },
        },
      };
    });
  }, []);

  const setSintomaSeverity = useCallback(
    (clusterId: string, sintomaId: string, severity: SintomaFormState["severity"]) => {
      setFormValues((prev) => {
        const cluster = prev.clusters[clusterId] ?? {};
        const atual = cluster[sintomaId] ?? { checked: false, severity: "" };
        return {
          ...prev,
          clusters: {
            ...prev.clusters,
            [clusterId]: {
              ...cluster,
              [sintomaId]: { ...atual, severity },
            },
          },
        };
      });
    },
    [],
  );

  const toggleCriterio = useCallback((criterioId: string) => {
    setFormValues((prev) => ({
      ...prev,
      criterios_condicionais: {
        ...prev.criterios_condicionais,
        [criterioId]: !prev.criterios_condicionais[criterioId],
      },
    }));
  }, []);

  const setSubtipo = useCallback((subtipo: string | null) => {
    setFormValues((prev) => ({ ...prev, subtipo_selecionado: subtipo }));
  }, []);

  const setGravidade = useCallback((gravidade: string) => {
    setFormValues((prev) => ({ ...prev, gravidade }));
  }, []);

  const toggleEspecificador = useCallback((especificadorId: string) => {
    setFormValues((prev) => ({
      ...prev,
      especificadores: {
        ...prev.especificadores,
        [especificadorId]: !prev.especificadores[especificadorId],
      },
    }));
  }, []);

  const setImpacto = useCallback(
    (dominioId: string, value: "0" | "1" | "2" | "3") => {
      setFormValues((prev) => ({
        ...prev,
        impacto: { ...prev.impacto, [dominioId]: value },
      }));
    },
    [],
  );

  const toggleComorbidade = useCallback((condicao: string) => {
    setFormValues((prev) => {
      const atuais = prev.comorbidades_selecionadas;
      const jaSelecionada = atuais.includes(condicao);
      return {
        ...prev,
        comorbidades_selecionadas: jaSelecionada
          ? atuais.filter((c) => c !== condicao)
          : [...atuais, condicao],
      };
    });
  }, []);

  const setNotasClinicas = useCallback(
    (field: "historia" | "observacoes_gerais", value: string) => {
      setFormValues((prev) => ({
        ...prev,
        notas_clinicas: { ...prev.notas_clinicas, [field]: value },
      }));
    },
    [],
  );

  const setObservacaoCluster = useCallback((clusterId: string, observacao: string) => {
    setFormValues((prev) => ({
      ...prev,
      notas_clinicas: {
        ...prev.notas_clinicas,
        observacoes_clusters: {
          ...prev.notas_clinicas.observacoes_clusters,
          [clusterId]: observacao,
        },
      },
    }));
  }, []);

  const reset = useCallback(() => {
    setIdentificacao(IDENTIFICACAO_INICIAL);
    setFormValues(FORM_INICIAL);
  }, []);

  // --- Computed values ---

  const clusterCounters = useMemo<Record<string, ClusterCounter>>(() => {
    const counters: Record<string, ClusterCounter> = {};
    for (const cluster of normalizedData.clusters_sintomas) {
      const clusterValues = formValues.clusters[cluster.id] ?? {};
      const selecionados = Object.values(clusterValues).filter(
        (s) => s.checked,
      ).length;
      counters[cluster.id] = {
        selecionados,
        limiar: Math.ceil(cluster.sintomas.length / 2),
      };
    }
    return counters;
  }, [formValues.clusters, normalizedData.clusters_sintomas]);

  const clustersAtendidos = useMemo<Record<string, boolean>>(() => {
    const atendidos: Record<string, boolean> = {};
    for (const [clusterId, counter] of Object.entries(clusterCounters)) {
      atendidos[clusterId] = counter.selecionados >= counter.limiar;
    }
    return atendidos;
  }, [clusterCounters]);

  const criteriosAtendidos = useMemo(() => {
    return Object.values(formValues.criterios_condicionais).filter(Boolean).length;
  }, [formValues.criterios_condicionais]);

  const criteriosTotal = useMemo(
    () => normalizedData.criterios_condicionais.length,
    [normalizedData.criterios_condicionais],
  );

  const subtiposDisponiveis = useMemo(() => {
    if (!normalizedData.subtipos.presente) return [];
    const itens = normalizedData.subtipos.itens;
    return itens
      .filter(
        (item): item is Record<string, string> =>
          item !== null && typeof item === "object" && "id" in item,
      )
      .map((item) => ({
        id: String(item.id ?? ""),
        nome: String(item.nome ?? item.id ?? ""),
      }));
  }, [normalizedData.subtipos]);

  const especificadoresDisponiveis = useMemo(
    () => normalizedData.especificadores,
    [normalizedData.especificadores],
  );

  const keyQuestions = useMemo(
    () => normalizedData.key_questions,
    [normalizedData.key_questions],
  );

  const dominiosImpacto = useMemo(
    () => normalizedData.dominios_impacto,
    [normalizedData.dominios_impacto],
  );

  const comorbidadesDisponiveis = useMemo(
    () => normalizedData.comorbidades_frequentes,
    [normalizedData.comorbidades_frequentes],
  );

  const adaptedFormValues = useMemo(
    () => adaptToFormValues(formValues),
    [formValues],
  );

  const payload = useMemo(
    () => buildPayload(normalizedData, adaptedFormValues),
    [normalizedData, adaptedFormValues],
  );

  const identificacaoMarkdown = useMemo(
    () => ({
      nome: identificacao.paciente,
      dataNascimento: identificacao.data_nascimento,
      sexo: identificacao.sexo,
      escolaridade: identificacao.escolaridade,
      ocupacao: identificacao.ocupacao,
      queixa: identificacao.queixa,
    }),
    [identificacao],
  );

  const markdown = useMemo(
    () => generateMarkdown(normalizedData, adaptedFormValues, payload, identificacaoMarkdown),
    [normalizedData, adaptedFormValues, payload, identificacaoMarkdown],
  );

  const copiarMarkdown = useCallback(async (): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(markdown);
      return true;
    } catch {
      return false;
    }
  }, [markdown]);

  return {
    identificacao,
    formValues,
    normalizedData,
    isV2BSource,
    clusterCounters,
    clustersAtendidos,
    criteriosAtendidos,
    criteriosTotal,
    subtiposDisponiveis,
    especificadoresDisponiveis,
    keyQuestions,
    dominiosImpacto,
    comorbidadesDisponiveis,
    payload,
    markdown,
    setIdentificacaoField,
    toggleSintoma,
    setSintomaSeverity,
    toggleCriterio,
    setSubtipo,
    setGravidade,
    toggleEspecificador,
    setImpacto,
    toggleComorbidade,
    setNotasClinicas,
    setObservacaoCluster,
    reset,
    copiarMarkdown,
  };
}
