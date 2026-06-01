/**
 * ============================================================
 * Hook 5: useTripartiteFuncional
 * ============================================================
 * Critérios tripartite (A, B, C) com limiares diferentes.
 * Exemplo: Anorexia Nervosa, Bulimia, Transtornos Alimentares.
 *
 * Estado: clusters com A/B/C, cada um com limiar diferente.
 * ZERO `any`, ZERO `as any`.
 * ============================================================
 */

import { useState, useMemo, useCallback } from "react";
import type {
  TranstornoDSM,
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

/* ------------------------------------------------------------
 * Configuracao de limiar por letra de criterio
 * ------------------------------------------------------------ */

interface LimiarConfig {
  letra: string;
  limiar: number;
}

/* ------------------------------------------------------------
 * Estado interno — clusters tripartite A/B/C
 * ------------------------------------------------------------ */

interface TripartiteFormState {
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

const FORM_INICIAL: TripartiteFormState = {
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

/* ------------------------------------------------------------
 * Interface de retorno
 * ------------------------------------------------------------ */

export interface TripartiteFuncionalReturn {
  /** Dados de identificacao do paciente */
  identificacao: IdentificacaoState;
  /** Valores do formulario interno */
  formValues: TripartiteFormState;
  /** Counters por cluster */
  clusterCounters: Record<string, ClusterCounter>;
  /** Indica se cada cluster atingiu seu limiar */
  clustersAtendidos: Record<string, boolean>;
  /** Indica se todos os clusters obrigatorios foram atendidos */
  todosClustersAtendidos: boolean;
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
  /** Reseta o formulario */
  reset: () => void;
  /** Copia o markdown para a area de transferencia */
  copiarMarkdown: () => Promise<boolean>;
}

/* ------------------------------------------------------------
 * Adapter: TripartiteFormState -> FormValues
 * ------------------------------------------------------------ */

function adaptToFormValues(form: TripartiteFormState): FormValues {
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

/* ------------------------------------------------------------
 * Extrai letra do criterio de um cluster (A, B, C)
 * ------------------------------------------------------------ */

function getClusterLetra(clusterNome: string): string {
  const match = clusterNome.match(/^\s*([A-Ca-c])/);
  return match ? match[1].toUpperCase() : "A";
}

/* ------------------------------------------------------------
 * Hook
 * ------------------------------------------------------------ */

export function useTripartiteFuncional(
  data: TranstornoDSM,
  limiares?: LimiarConfig[],
): TripartiteFuncionalReturn {
  const [identificacao, setIdentificacao] = useState<IdentificacaoState>(
    IDENTIFICACAO_INICIAL,
  );
  const [formValues, setFormValues] = useState<TripartiteFormState>(FORM_INICIAL);

  // Determina limiares default: A=1, B=1, C=1 ou usa os fornecidos
  const limiarMap = useMemo<Record<string, number>>(() => {
    if (limiares && limiares.length > 0) {
      return Object.fromEntries(limiares.map((l) => [l.letra, l.limiar]));
    }
    // Default: cada cluster precisa de pelo menos 1 sintoma
    const map: Record<string, number> = {};
    for (const cluster of data.clusters_sintomas) {
      const letra = getClusterLetra(cluster.nome);
      if (map[letra] === undefined) {
        map[letra] = 1;
      }
    }
    return map;
  }, [data.clusters_sintomas, limiares]);

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

  const reset = useCallback(() => {
    setIdentificacao(IDENTIFICACAO_INICIAL);
    setFormValues(FORM_INICIAL);
  }, []);

  // --- Computed values ---

  const clusterCounters = useMemo<Record<string, ClusterCounter>>(() => {
    const counters: Record<string, ClusterCounter> = {};
    for (const cluster of data.clusters_sintomas) {
      const clusterValues = formValues.clusters[cluster.id] ?? {};
      const selecionados = Object.values(clusterValues).filter(
        (s) => s.checked,
      ).length;
      const letra = getClusterLetra(cluster.nome);
      counters[cluster.id] = {
        selecionados,
        limiar: limiarMap[letra] ?? 1,
      };
    }
    return counters;
  }, [formValues.clusters, data.clusters_sintomas, limiarMap]);

  const clustersAtendidos = useMemo<Record<string, boolean>>(() => {
    const atendidos: Record<string, boolean> = {};
    for (const [clusterId, counter] of Object.entries(clusterCounters)) {
      atendidos[clusterId] = counter.selecionados >= counter.limiar;
    }
    return atendidos;
  }, [clusterCounters]);

  const todosClustersAtendidos = useMemo(() => {
    if (Object.keys(clustersAtendidos).length === 0) return false;
    return Object.values(clustersAtendidos).every(Boolean);
  }, [clustersAtendidos]);

  const adaptedFormValues = useMemo(
    () => adaptToFormValues(formValues),
    [formValues],
  );

  const payload = useMemo(
    () => buildPayload(data, adaptedFormValues),
    [data, adaptedFormValues],
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
    () => generateMarkdown(data, adaptedFormValues, payload, identificacaoMarkdown),
    [data, adaptedFormValues, payload, identificacaoMarkdown],
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
    clusterCounters,
    clustersAtendidos,
    todosClustersAtendidos,
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
    reset,
    copiarMarkdown,
  };
}
