/**
 * ============================================================
 * Hook 7: useConjuncaoTemporalComplexa
 * ============================================================
 * Conjuncao temporal complexa — transtornos com criterios de
 * duracao + sintomas. Exemplo: TDPM (Transtorno Disforico
 * Pre-Menstrual).
 *
 * Estado: clusters, criterios temporais (duracao), impacto.
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
 * Estado interno — clusters + criterios temporais
 * ------------------------------------------------------------ */

interface CriterioTemporal {
  id: string;
  descricao: string;
  atendido: boolean;
}

interface ConjuncaoFormState {
  clusters: Record<string, Record<string, SintomaFormState>>;
  criterios_temporais: Record<string, boolean>;
  criterios_condicionais: Record<string, boolean>;
  duracao_meses: string;
  gravidade: string;
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

const FORM_INICIAL: ConjuncaoFormState = {
  clusters: {},
  criterios_temporais: {},
  criterios_condicionais: {},
  duracao_meses: "",
  gravidade: "",
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

export interface ConjuncaoTemporalComplexaReturn {
  /** Dados de identificacao do paciente */
  identificacao: IdentificacaoState;
  /** Valores do formulario interno */
  formValues: ConjuncaoFormState;
  /** Counters por cluster */
  clusterCounters: Record<string, ClusterCounter>;
  /** Indica se cada cluster atingiu seu limiar */
  clustersAtendidos: Record<string, boolean>;
  /** Criterios temporais atendidos */
  criteriosTemporaisCount: number;
  /** Total de criterios temporais */
  criteriosTemporaisTotal: number;
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
  /** Alterna um criterio temporal */
  toggleCriterioTemporal: (criterioId: string) => void;
  /** Alterna um criterio condicional */
  toggleCriterio: (criterioId: string) => void;
  /** Define a duracao em meses */
  setDuracaoMeses: (meses: string) => void;
  /** Define o nivel de gravidade */
  setGravidade: (gravidade: string) => void;
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
 * Adapter: ConjuncaoFormState -> FormValues
 * ------------------------------------------------------------ */

function adaptToFormValues(form: ConjuncaoFormState): FormValues {
  // Merge criterios temporais com condicionais
  const criteriosMerge: Record<string, boolean> = {
    ...form.criterios_condicionais,
    ...form.criterios_temporais,
  };

  return {
    clusters: form.clusters,
    criterios_condicionais: criteriosMerge,
    subtipo_selecionado: null,
    gravidade: form.gravidade,
    especificadores: {},
    impacto: form.impacto,
    comorbidades_selecionadas: form.comorbidades_selecionadas,
    notas_clinicas: form.notas_clinicas,
  };
}

/* ------------------------------------------------------------
 * Hook
 * ------------------------------------------------------------ */

export function useConjuncaoTemporalComplexa(
  data: TranstornoDSM,
): ConjuncaoTemporalComplexaReturn {
  const [identificacao, setIdentificacao] = useState<IdentificacaoState>(
    IDENTIFICACAO_INICIAL,
  );
  const [formValues, setFormValues] = useState<ConjuncaoFormState>(FORM_INICIAL);

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

  const toggleCriterioTemporal = useCallback((criterioId: string) => {
    setFormValues((prev) => ({
      ...prev,
      criterios_temporais: {
        ...prev.criterios_temporais,
        [criterioId]: !prev.criterios_temporais[criterioId],
      },
    }));
  }, []);

  const toggleCriterio = useCallback((criterioId: string) => {
    setFormValues((prev) => ({
      ...prev,
      criterios_condicionais: {
        ...prev.criterios_condicionais,
        [criterioId]: !prev.criterios_condicionais[criterioId],
      },
    }));
  }, []);

  const setDuracaoMeses = useCallback((meses: string) => {
    setFormValues((prev) => ({ ...prev, duracao_meses: meses }));
  }, []);

  const setGravidade = useCallback((gravidade: string) => {
    setFormValues((prev) => ({ ...prev, gravidade }));
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
      counters[cluster.id] = {
        selecionados,
        limiar: Math.ceil(cluster.sintomas.length / 2),
      };
    }
    return counters;
  }, [formValues.clusters, data.clusters_sintomas]);

  const clustersAtendidos = useMemo<Record<string, boolean>>(() => {
    const atendidos: Record<string, boolean> = {};
    for (const [clusterId, counter] of Object.entries(clusterCounters)) {
      atendidos[clusterId] = counter.selecionados >= counter.limiar;
    }
    return atendidos;
  }, [clusterCounters]);

  const criteriosTemporaisCount = useMemo(() => {
    return Object.values(formValues.criterios_temporais).filter(Boolean).length;
  }, [formValues.criterios_temporais]);

  const criteriosTemporaisTotal = useMemo(
    () => data.criterios_condicionais.length,
    [data.criterios_condicionais],
  );

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
    criteriosTemporaisCount,
    criteriosTemporaisTotal,
    payload,
    markdown,
    setIdentificacaoField,
    toggleSintoma,
    setSintomaSeverity,
    toggleCriterioTemporal,
    toggleCriterio,
    setDuracaoMeses,
    setGravidade,
    setImpacto,
    toggleComorbidade,
    setNotasClinicas,
    reset,
    copiarMarkdown,
  };
}
