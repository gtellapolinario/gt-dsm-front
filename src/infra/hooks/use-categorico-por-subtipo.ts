/**
 * ============================================================
 * Hook: useCategoricoPorSubtipo
 * ============================================================
 * Gerencia formulario para transtornos categoricos por subtipo
 * — ex: Transtornos por Uso de Substancias.
 *
 * Caracteristicas:
 * - Selecao de subtipo que define quais criterios aplicam
 * - Subtipo selecionado controla renderizacao condicional
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
  Subtipo,
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
 * 2. EXTRACAO DE SUBTIPOS DOS DADOS RAW
 * ----------------------------------------------------------- */

/**
 * Extrai subtipos do TranstornoDSM.
 * Como Subtipos.itens e `unknown[]`, fazemos validacao runtime
 * segura para extrair apenas os campos que precisamos.
 */
function extrairSubtipos(data: TranstornoDSM): readonly Subtipo[] {
  if (!data.subtipos.presente || !Array.isArray(data.subtipos.itens)) {
    return [];
  }

  const resultado: Subtipo[] = [];

  for (const item of data.subtipos.itens) {
    if (item === null || typeof item !== "object") continue;

    const record = item as Record<string, unknown>;

    const id =
      typeof record["id"] === "string"
        ? record["id"]
        : typeof record["codigo"] === "string"
          ? record["codigo"]
          : null;

    const nome =
      typeof record["nome"] === "string"
        ? record["nome"]
        : typeof record["label"] === "string"
          ? record["label"]
          : null;

    const descricao =
      typeof record["descricao"] === "string"
        ? record["descricao"]
        : typeof record["description"] === "string"
          ? record["description"]
          : "";

    if (id !== null && nome !== null) {
      const subtipo: Subtipo = { id, nome, descricao };

      // Extrai criterios se disponiveis
      const criteriosRaw = record["criterios"];
      if (Array.isArray(criteriosRaw)) {
        const criteriosFiltrados = criteriosRaw.filter(
          (c): c is string => typeof c === "string",
        );
        Object.defineProperty(subtipo, "criterios", {
          value: Object.freeze(criteriosFiltrados),
          writable: false,
        });
      }

      resultado.push(Object.freeze(subtipo));
    }
  }

  return Object.freeze(resultado);
}

/* -----------------------------------------------------------
 * 3. INTERFACE DE RETORNO
 * ----------------------------------------------------------- */

export interface CategoricoPorSubtipoReturn {
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
  /** Subtipo atualmente selecionado */
  readonly subtipoAtual: Subtipo | null;
  /** Lista de subtipos disponiveis */
  readonly subtiposDisponiveis: readonly Subtipo[];
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
  /** Define subtipo */
  setSubtipo: (subtipoId: string | null) => void;
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
 * 4. HOOK
 * ----------------------------------------------------------- */

export function useCategoricoPorSubtipo(
  data: TranstornoDSM,
): CategoricoPorSubtipoReturn {
  // -- Estado de identificacao ------------------------------------------------
  const [identificacao, setIdentificacao] = useState<IdentificacaoState>(
    INITIAL_IDENTIFICACAO,
  );

  // -- Estado do formulario ---------------------------------------------------
  const [formValues, setFormValues] = useState<FormValues>(() =>
    createInitialFormValues(data),
  );

  // -- Subtipos disponiveis (memoizado) ---------------------------------------
  const subtiposDisponiveis = useMemo<readonly Subtipo[]>(
    () => extrairSubtipos(data),
    [data],
  );

  // -- Subtipo atual (memoizado) ----------------------------------------------
  const subtipoAtual = useMemo<Subtipo | null>(() => {
    if (formValues.subtipo_selecionado === null) return null;
    return (
      subtiposDisponiveis.find(
        (s) => s.id === formValues.subtipo_selecionado,
      ) ?? null
    );
  }, [formValues.subtipo_selecionado, subtiposDisponiveis]);

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

  // -- Handler de subtipo -----------------------------------------------------
  const setSubtipo = useCallback(
    (subtipoId: string | null): void => {
      setFormValues((prev) => ({
        ...prev,
        subtipo_selecionado: subtipoId,
      }));
    },
    [],
  );

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
    subtipoAtual,
    subtiposDisponiveis,
    payload,
    markdown,
    setIdentificacaoField,
    toggleSintoma,
    setSeverity,
    toggleCriterio,
    setGravidade,
    setSubtipo,
    setImpacto,
    toggleComorbidade,
    setNotasClinicas,
    setObservacaoCluster,
    reset,
    copiarMarkdown,
  };
}

/* -----------------------------------------------------------
 * 5. UTILITARIOS INTERNOS
 * ----------------------------------------------------------- */

function inferirLimiar(totalSintomas: number): number {
  if (totalSintomas <= 2) return totalSintomas;
  if (totalSintomas <= 4) return 2;
  if (totalSintomas <= 6) return 3;
  return Math.ceil(totalSintomas / 2);
}
