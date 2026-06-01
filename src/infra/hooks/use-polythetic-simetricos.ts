/**
 * ============================================================
 * Hook: usePolytheticSimetricos
 * ============================================================
 * Gerencia formulario para clusters simetricos polythetic com
 * limiar — ex: TDAH (A1 desatento + A2 hiperativo).
 *
 * Caracteristicas:
 * - Multiplos clusters com mesma regra de limiar
 * - Campo especial `apresentacao` inferido dos contadores A1/A2
 * - ZERO `any`, ZERO assertions inseguras
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
import { isSeverityValue } from "@/infra/types/dsm-form-types";
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

export interface PolytheticSimetricosReturn {
  /** Dados de identificacao do paciente */
  readonly identificacao: IdentificacaoState;
  /** Estado completo do formulario */
  readonly formValues: FormValues;
  /** Contadores por cluster */
  readonly contadores: Record<string, ClusterCounter>;
  /** Quantidade de criterios condicionais ativos */
  readonly criteriosBECount: number;
  /** Total de criterios condicionais */
  readonly criteriosBETotal: number;
  /** Apresentacao inferida (ex: "Combinada", "Predominantemente Desatento") */
  readonly apresentacao: string | null;
  /** Payload de saida completo */
  readonly payload: PayloadSaida;
  /** Laudo em formato Markdown */
  readonly markdown: string;
  /** Atualiza um campo de identificacao */
  setIdentificacaoField: (field: keyof IdentificacaoState, value: string) => void;
  /** Marca/desmarca um sintoma */
  toggleSintoma: (clusterId: string, sintomaId: string, checked: boolean) => void;
  /** Define severidade de um sintoma */
  setSeverity: (clusterId: string, sintomaId: string, severity: SeverityValue) => void;
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
  /** Define observacao para um cluster especifico */
  setObservacaoCluster: (clusterId: string, value: string) => void;
  /** Reseta o formulario */
  reset: () => void;
  /** Copia markdown para clipboard */
  copiarMarkdown: () => Promise<boolean>;
}

/* -----------------------------------------------------------
 * 3. HOOK
 * ----------------------------------------------------------- */

export function usePolytheticSimetricos(
  data: TranstornoDSM,
): PolytheticSimetricosReturn {
  // -- Estado de identificacao ------------------------------------------------
  const [identificacao, setIdentificacao] = useState<IdentificacaoState>(
    INITIAL_IDENTIFICACAO,
  );

  // -- Estado do formulario ---------------------------------------------------
  const [formValues, setFormValues] = useState<FormValues>(() =>
    createInitialFormValues(data),
  );

  // -- Handlers de identificacao ----------------------------------------------
  const setIdentificacaoField = useCallback(
    (field: keyof IdentificacaoState, value: string): void => {
      setIdentificacao((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  // -- Handlers de sintomas ---------------------------------------------------
  const toggleSintoma = useCallback(
    (clusterId: string, sintomaId: string, checked: boolean): void => {
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
    [],
  );

  const setSeverity = useCallback(
    (clusterId: string, sintomaId: string, severity: SeverityValue): void => {
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
    [],
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
    (clusterId: string, value: string): void => {
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
    [],
  );

  // -- Reset ------------------------------------------------------------------
  const reset = useCallback((): void => {
    setIdentificacao(INITIAL_IDENTIFICACAO);
    setFormValues(createInitialFormValues(data));
  }, [data]);

  // -- Contadores (memoizado) -------------------------------------------------
  const contadores = useMemo<Record<string, ClusterCounter>>(() => {
    const resultado: Record<string, ClusterCounter> = {};

    for (const cluster of data.clusters_sintomas) {
      const sintomasMap = formValues.clusters[cluster.id] ?? {};
      let selecionados = 0;

      for (const sintoma of cluster.sintomas) {
        const estado = sintomasMap[sintoma.id];
        if (estado?.checked === true) {
          selecionados += 1;
        }
      }

      const limiar = inferirLimiar(cluster.sintomas.length);

      resultado[cluster.id] = { selecionados, limiar };
    }

    return resultado;
  }, [data.clusters_sintomas, formValues.clusters]);

  // -- Criterios B/E ---------------------------------------------------------
  const criteriosBETotal = data.criterios_condicionais.length;
  const criteriosBECount = useMemo(() => {
    return Object.values(formValues.criterios_condicionais).filter(Boolean)
      .length;
  }, [formValues.criterios_condicionais]);

  // -- Apresentacao (inferida dos contadores — especifico do TDAH) -----------
  const apresentacao = useMemo<string | null>(() => {
    const clusterEntries = Object.entries(contadores);
    if (clusterEntries.length < 2) return null;

    // Heuristica para TDAH: analisa os 2 primeiros clusters (A1, A2)
    const [first, second] = clusterEntries;
    if (!first || !second) return null;

    const firstAtingido = first[1].selecionados >= first[1].limiar;
    const secondAtingido = second[1].selecionados >= second[1].limiar;

    if (firstAtingido && secondAtingido) return "Combinada";
    if (firstAtingido && !secondAtingido)
      return "Predominantemente Desatento";
    if (!firstAtingido && secondAtingido)
      return "Predominantemente Hiperativo-Impulsivo";
    return null;
  }, [contadores]);

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
    contadores,
    criteriosBECount,
    criteriosBETotal,
    apresentacao,
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

/**
 * Infere o limiar com base no numero de sintomas no cluster.
 */
function inferirLimiar(totalSintomas: number): number {
  if (totalSintomas <= 2) return totalSintomas;
  if (totalSintomas <= 4) return 2;
  if (totalSintomas <= 6) return 3;
  return Math.ceil(totalSintomas / 2);
}
