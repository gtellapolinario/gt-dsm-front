/**
 * ============================================================
 * Hook: usePolytheticMonocluster
 * ============================================================
 * Gerencia formulario para um unico cluster polythetic — ex:
 * Transtornos da Personalidade.
 *
 * Caracteristicas:
 * - Um unico cluster de sintomas polythetic
 * - Sem campos especiais adicionais
 * - Reutiliza logica do usePolytheticSimetricos com um cluster
 * ============================================================
 */

import { useState, useMemo, useCallback } from "react";
import type { TranstornoDSM } from "@/infra/types";
import type {
  IdentificacaoState,
  SintomaFormState,
  SeverityValue,
  FormValues,
  ClusterCounter,
  PayloadSaida,
} from "@/infra/types/dsm-form-types";
import { buildPayload } from "@/infra/utils/payload-builder";
import { generateMarkdown } from "@/infra/utils/markdown-generator";

/* -----------------------------------------------------------
 * 1. ESTADO INICIAL
 * ----------------------------------------------------------- */

const INITIAL_IDENTIFICACAO: IdentificacaoState = {
  paciente: "",
  data_nascimento: "",
  sexo: "",
  escolaridade: "",
  ocupacao: "",
  queixa: "",
};

function createInitialFormValues(data: TranstornoDSM): FormValues {
  const clusters: FormValues["clusters"] = {};

  for (const cluster of data.clusters_sintomas) {
    const sintomas: Record<string, SintomaFormState> = {};
    for (const sintoma of cluster.sintomas) {
      sintomas[sintoma.id] = { checked: false, severity: "" };
    }
    clusters[cluster.id] = sintomas;
  }

  const criterios: Record<string, boolean> = {};
  for (const criterio of data.criterios_condicionais) {
    criterios[criterio.id] = false;
  }

  const impacto: Record<string, "0" | "1" | "2" | "3"> = {};
  for (const dominio of data.dominios_impacto) {
    impacto[dominio.id] = "0";
  }

  const especificadores: Record<string, boolean> = {};
  for (const esp of data.especificadores) {
    especificadores[esp.id] = false;
  }

  return {
    clusters,
    criterios_condicionais: criterios,
    subtipo_selecionado: null,
    gravidade: "",
    especificadores,
    impacto,
    comorbidades_selecionadas: [],
    notas_clinicas: {
      historia: "",
      observacoes_clusters: {},
      observacoes_gerais: "",
    },
  };
}

/* -----------------------------------------------------------
 * 2. INTERFACE DE RETORNO
 * ----------------------------------------------------------- */

export interface PolytheticMonoclusterReturn {
  /** Dados de identificacao do paciente */
  readonly identificacao: IdentificacaoState;
  /** Estado completo do formulario */
  readonly formValues: FormValues;
  /** Contador do unico cluster */
  readonly contador: ClusterCounter;
  /** Quantidade de criterios condicionais ativos */
  readonly criteriosBECount: number;
  /** Total de criterios condicionais */
  readonly criteriosBETotal: number;
  /** Payload de saida completo */
  readonly payload: PayloadSaida;
  /** Laudo em formato Markdown */
  readonly markdown: string;
  /** Atualiza um campo de identificacao */
  setIdentificacaoField: (field: keyof IdentificacaoState, value: string) => void;
  /** Marca/desmarca um sintoma */
  toggleSintoma: (sintomaId: string, checked: boolean) => void;
  /** Define severidade de um sintoma */
  setSeverity: (sintomaId: string, severity: SeverityValue) => void;
  /** Alterna um criterio condicional */
  toggleCriterio: (criterioId: string) => void;
  /** Define gravidade global */
  setGravidade: (gravidade: string) => void;
  /** Define impacto em um dominio */
  setImpacto: (dominioId: string, value: "0" | "1" | "2" | "3") => void;
  /** Alterna comorbidade */
  toggleComorbidade: (condicao: string) => void;
  /** Define notas clinicas */
  setNotasClinicas: (field: "historia" | "observacoes_gerais", value: string) => void;
  /** Define observacao para o cluster */
  setObservacaoCluster: (value: string) => void;
  /** Reseta o formulario */
  reset: () => void;
  /** Copia markdown para clipboard */
  copiarMarkdown: () => Promise<boolean>;
}

/* -----------------------------------------------------------
 * 3. HOOK
 * ----------------------------------------------------------- */

export function usePolytheticMonocluster(
  data: TranstornoDSM,
): PolytheticMonoclusterReturn {
  // -- Estado de identificacao ------------------------------------------------
  const [identificacao, setIdentificacao] = useState<IdentificacaoState>(
    INITIAL_IDENTIFICACAO,
  );

  // -- Estado do formulario ---------------------------------------------------
  const [formValues, setFormValues] = useState<FormValues>(() =>
    createInitialFormValues(data),
  );

  // -- ID do unico cluster (memoizado) ----------------------------------------
  const clusterId = useMemo<string>(() => {
    if (data.clusters_sintomas.length === 0) return "";
    return data.clusters_sintomas[0]?.id ?? "";
  }, [data.clusters_sintomas]);

  // -- Handlers de identificacao ----------------------------------------------
  const setIdentificacaoField = useCallback(
    (field: keyof IdentificacaoState, value: string): void => {
      setIdentificacao((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  // -- Handlers de sintomas (sem clusterId — unico cluster) -------------------
  const toggleSintoma = useCallback(
    (sintomaId: string, checked: boolean): void => {
      if (clusterId === "") return;
      setFormValues((prev) => {
        const cluster = prev.clusters[clusterId];
        if (!cluster) return prev;

        const sintoma = cluster[sintomaId];
        if (!sintoma) return prev;

        return {
          ...prev,
          clusters: {
            ...prev.clusters,
            [clusterId]: {
              ...cluster,
              [sintomaId]: { ...sintoma, checked },
            },
          },
        };
      });
    },
    [clusterId],
  );

  const setSeverity = useCallback(
    (sintomaId: string, severity: SeverityValue): void => {
      if (clusterId === "") return;
      setFormValues((prev) => {
        const cluster = prev.clusters[clusterId];
        if (!cluster) return prev;

        const sintoma = cluster[sintomaId];
        if (!sintoma) return prev;

        return {
          ...prev,
          clusters: {
            ...prev.clusters,
            [clusterId]: {
              ...cluster,
              [sintomaId]: { ...sintoma, severity },
            },
          },
        };
      });
    },
    [clusterId],
  );

  // -- Handlers de criterios condicionais -------------------------------------
  const toggleCriterio = useCallback((criterioId: string): void => {
    setFormValues((prev) => ({
      ...prev,
      criterios_condicionais: {
        ...prev.criterios_condicionais,
        [criterioId]: !prev.criterios_condicionais[criterioId],
      },
    }));
  }, []);

  // -- Handler de gravidade ---------------------------------------------------
  const setGravidade = useCallback((gravidade: string): void => {
    setFormValues((prev) => ({ ...prev, gravidade }));
  }, []);

  // -- Handler de impacto -----------------------------------------------------
  const setImpacto = useCallback(
    (dominioId: string, value: "0" | "1" | "2" | "3"): void => {
      setFormValues((prev) => ({
        ...prev,
        impacto: { ...prev.impacto, [dominioId]: value },
      }));
    },
    [],
  );

  // -- Handler de comorbidades ------------------------------------------------
  const toggleComorbidade = useCallback((condicao: string): void => {
    setFormValues((prev) => {
      const atual = prev.comorbidades_selecionadas;
      const inclui = atual.includes(condicao);
      return {
        ...prev,
        comorbidades_selecionadas: inclui
          ? atual.filter((c) => c !== condicao)
          : [...atual, condicao],
      };
    });
  }, []);

  // -- Handler de notas clinicas ----------------------------------------------
  const setNotasClinicas = useCallback(
    (field: "historia" | "observacoes_gerais", value: string): void => {
      setFormValues((prev) => ({
        ...prev,
        notas_clinicas: { ...prev.notas_clinicas, [field]: value },
      }));
    },
    [],
  );

  const setObservacaoCluster = useCallback(
    (value: string): void => {
      if (clusterId === "") return;
      setFormValues((prev) => ({
        ...prev,
        notas_clinicas: {
          ...prev.notas_clinicas,
          observacoes_clusters: {
            ...prev.notas_clinicas.observacoes_clusters,
            [clusterId]: value,
          },
        },
      }));
    },
    [clusterId],
  );

  // -- Reset ------------------------------------------------------------------
  const reset = useCallback((): void => {
    setIdentificacao(INITIAL_IDENTIFICACAO);
    setFormValues(createInitialFormValues(data));
  }, [data]);

  // -- Contador do unico cluster (memoizado) ----------------------------------
  const contador = useMemo<ClusterCounter>(() => {
    if (clusterId === "" || data.clusters_sintomas.length === 0) {
      return { selecionados: 0, limiar: 0 };
    }

    const clusterData = data.clusters_sintomas[0];
    if (!clusterData) return { selecionados: 0, limiar: 0 };

    const sintomasMap = formValues.clusters[clusterId] ?? {};
    let selecionados = 0;

    for (const sintoma of clusterData.sintomas) {
      const estado = sintomasMap[sintoma.id];
      if (estado?.checked === true) {
        selecionados += 1;
      }
    }

    const limiar = inferirLimiar(clusterData.sintomas.length);

    return { selecionados, limiar };
  }, [clusterId, data.clusters_sintomas, formValues.clusters]);

  // -- Criterios B/E ---------------------------------------------------------
  const criteriosBETotal = data.criterios_condicionais.length;
  const criteriosBECount = useMemo(() => {
    return Object.values(formValues.criterios_condicionais).filter(Boolean)
      .length;
  }, [formValues.criterios_condicionais]);

  // -- Payload (memoizado) ----------------------------------------------------
  const payload = useMemo<PayloadSaida>(() => {
    return buildPayload(data, formValues);
  }, [data, formValues]);

  // -- Markdown (memoizado) ---------------------------------------------------
  const markdown = useMemo<string>(() => {
    return generateMarkdown(data, formValues, payload, {
      nome: identificacao.paciente,
      dataNascimento: identificacao.data_nascimento,
      sexo: identificacao.sexo,
      escolaridade: identificacao.escolaridade,
      ocupacao: identificacao.ocupacao,
      queixa: identificacao.queixa,
    });
  }, [data, formValues, payload, identificacao]);

  // -- Copiar markdown --------------------------------------------------------
  const copiarMarkdown = useCallback(async (): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(markdown);
      return true;
    } catch {
      return false;
    }
  }, [markdown]);

  // -- Retorno ----------------------------------------------------------------
  return {
    identificacao,
    formValues,
    contador,
    criteriosBECount,
    criteriosBETotal,
    payload,
    markdown,
    setIdentificacaoField,
    toggleSintoma,
    setSeverity,
    toggleCriterio,
    setGravidade,
    setImpacto,
    toggleComorbidade,
    setNotasClinicas,
    setObservacaoCluster,
    reset,
    copiarMarkdown,
  };
}

/* -----------------------------------------------------------
 * 4. UTILITARIOS INTERNOS
 * ----------------------------------------------------------- */

function inferirLimiar(totalSintomas: number): number {
  if (totalSintomas <= 2) return totalSintomas;
  if (totalSintomas <= 4) return 2;
  if (totalSintomas <= 6) return 3;
  return Math.ceil(totalSintomas / 2);
}
