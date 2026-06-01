import { useState, useCallback, useMemo } from "react";
import type { TranstornoDSM, Cluster } from "@/infra/schemas/dsm-schemas";

export interface DiseaseEvaluationHook {
  readonly identificacao: Record<string, string>;
  readonly formValues: Record<string, any>;
  readonly payload: unknown;
  readonly markdown: string;
  readonly contadores: Record<string, { selecionados: number; total: number }>;

  setIdentificacaoField: (field: string, value: string) => void;
  toggleSintoma: (
    clusterId: string,
    sintomaId: string,
    checked: boolean,
  ) => void;
  toggleCriterio: (criterioId: string) => void;
  setGravidade: (valor: string) => void;
  setImpacto: (dominioId: string, valor: string) => void;
  toggleComorbidade: (condicao: string) => void;
  toggleEspecificador?: (especificadorId: string) => void;
  setNotasClinicas?: (campo: string, valor: string, subcampo?: string) => void;
  reset: () => void;
  copiarMarkdown: () => Promise<boolean>;
}

export type HookReturn = DiseaseEvaluationHook;

// Generates a mock/base evaluation state and handlers
function useBaseEvaluation(data: TranstornoDSM): DiseaseEvaluationHook {
  const [identificacao, setIdentificacao] = useState<Record<string, string>>({
    nome: "",
    data: new Date().toISOString().split("T")[0] || "",
    avaliador: "",
  });

  const [formValues, setFormValues] = useState<Record<string, any>>({
    clusters: {},
    criterios_condicionais: {},
    impacto: {},
    gravidade: "",
    comorbidades_selecionadas: [],
    especificadores_selecionados: [],
    notas_clinicas: {
      observacoes_clusters: {},
      observacoes_gerais: "",
    },
  });

  const setIdentificacaoField = useCallback((field: string, value: string) => {
    setIdentificacao((prev) => ({ ...prev, [field]: value }));
  }, []);

  const toggleSintoma = useCallback(
    (clusterId: string, sintomaId: string, checked: boolean) => {
      setFormValues((prev) => {
        const clusters = { ...prev.clusters };
        if (!clusters[clusterId]) clusters[clusterId] = {};
        clusters[clusterId][sintomaId] = { checked };
        return { ...prev, clusters };
      });
    },
    [],
  );

  const toggleCriterio = useCallback((criterioId: string) => {
    setFormValues((prev) => {
      const criterios = { ...prev.criterios_condicionais };
      criterios[criterioId] = !criterios[criterioId];
      return { ...prev, criterios_condicionais: criterios };
    });
  }, []);

  const setGravidade = useCallback((valor: string) => {
    setFormValues((prev) => ({ ...prev, gravidade: valor }));
  }, []);

  const setImpacto = useCallback((dominioId: string, valor: string) => {
    setFormValues((prev) => {
      const impacto = { ...prev.impacto };
      impacto[dominioId] = valor;
      return { ...prev, impacto };
    });
  }, []);

  const toggleComorbidade = useCallback((condicao: string) => {
    setFormValues((prev) => {
      const current = prev.comorbidades_selecionadas || [];
      const next = current.includes(condicao)
        ? current.filter((c: string) => c !== condicao)
        : [...current, condicao];
      return { ...prev, comorbidades_selecionadas: next };
    });
  }, []);

  const toggleEspecificador = useCallback((especificadorId: string) => {
    setFormValues((prev) => {
      const current = prev.especificadores_selecionados || [];
      const next = current.includes(especificadorId)
        ? current.filter((id: string) => id !== especificadorId)
        : [...current, especificadorId];
      return { ...prev, especificadores_selecionados: next };
    });
  }, []);

  const setNotasClinicas = useCallback(
    (campo: string, valor: string, subcampo?: string) => {
      setFormValues((prev) => {
        const notas = { ...prev.notas_clinicas };
        if (subcampo) {
          if (!notas[campo]) notas[campo] = {};
          notas[campo][subcampo] = valor;
        } else {
          notas[campo] = valor;
        }
        return { ...prev, notas_clinicas: notas };
      });
    },
    [],
  );

  const reset = useCallback(() => {
    setFormValues({
      clusters: {},
      criterios_condicionais: {},
      impacto: {},
      gravidade: "",
      comorbidades_selecionadas: [],
      especificadores_selecionados: [],
      notas_clinicas: {
        observacoes_clusters: {},
        observacoes_gerais: "",
      },
    });
    setIdentificacao({
      nome: "",
      data: new Date().toISOString().split("T")[0] || "",
      avaliador: "",
    });
  }, []);

  const copiarMarkdown = useCallback(async () => {
    try {
      await navigator.clipboard.writeText("Relatório de Avaliação DSM-5");
      return true;
    } catch {
      return false;
    }
  }, []);

  const contadores = useMemo(() => {
    const result: Record<string, { selecionados: number; total: number }> = {};
    const clusters = data.clusters_sintomas || [];
    clusters.forEach((cl: Cluster) => {
      const symptoms = cl.sintomas || [];
      const clusterState = formValues.clusters[cl.id] || {};
      const selected = symptoms.filter(
        (s) => clusterState[s.id]?.checked,
      ).length;
      result[cl.id] = { selecionados: selected, total: symptoms.length };
    });
    return result;
  }, [data.clusters_sintomas, formValues.clusters]);

  const markdown = useMemo(() => {
    return `# AVALIAÇÃO DSM-5: ${data.meta.nome_completo} (${data.meta.sigla || ""})
---
**Paciente:** ${identificacao.nome || "Não informado"}
**Data:** ${identificacao.data || "Não informada"}
**Avaliador:** ${identificacao.avaliador || "Não informado"}

## Critérios e Sintomas:
${(data.clusters_sintomas || [])
  .map((cl: Cluster) => {
    const stats = contadores[cl.id] || {
      selecionados: 0,
      total: cl.sintomas.length,
    };
    return `### ${cl.nome}: ${stats.selecionados}/${stats.total} sintomas`;
  })
  .join("\n")}
`;
  }, [data, identificacao, contadores]);

  return {
    identificacao,
    formValues,
    payload: formValues,
    markdown,
    contadores,
    setIdentificacaoField,
    toggleSintoma,
    toggleCriterio,
    setGravidade,
    setImpacto,
    toggleComorbidade,
    toggleEspecificador,
    setNotasClinicas,
    reset,
    copiarMarkdown,
  };
}

// Specializations returning the unified base hook
export function usePolytheticClusterEvaluation(
  data: TranstornoDSM,
): DiseaseEvaluationHook {
  return useBaseEvaluation(data);
}

export function usePolytheticMonoClusterEvaluation(
  data: TranstornoDSM,
): DiseaseEvaluationHook {
  return useBaseEvaluation(data);
}

export function usePolytheticAncoraEvaluation(
  data: TranstornoDSM,
): DiseaseEvaluationHook {
  return useBaseEvaluation(data);
}

export function useMonotheticPureEvaluation(
  data: TranstornoDSM,
): DiseaseEvaluationHook {
  return useBaseEvaluation(data);
}

export function useMonotheticTripartiteEvaluation(
  data: TranstornoDSM,
): DiseaseEvaluationHook {
  return useBaseEvaluation(data);
}

export function useMixedEvaluation(data: TranstornoDSM): DiseaseEvaluationHook {
  return useBaseEvaluation(data);
}

export function useTemporalTopograficEvaluation(
  data: TranstornoDSM,
): DiseaseEvaluationHook {
  return useBaseEvaluation(data);
}

export function useEtiologicoExternoEvaluation(
  data: TranstornoDSM,
): DiseaseEvaluationHook {
  return useBaseEvaluation(data);
}

export function useQualitativoDescritivoEvaluation(
  data: TranstornoDSM,
): DiseaseEvaluationHook {
  return useBaseEvaluation(data);
}

export function useEpisodicEvaluation(
  data: TranstornoDSM,
): DiseaseEvaluationHook {
  return useBaseEvaluation(data);
}

export function useTripartiteFunctionalEvaluation(
  data: TranstornoDSM,
): DiseaseEvaluationHook {
  return useBaseEvaluation(data);
}

export function useConjuncaoTemporalEvaluation(
  data: TranstornoDSM,
): DiseaseEvaluationHook {
  return useBaseEvaluation(data);
}

export function useCategoricoSubtipoEvaluation(
  data: TranstornoDSM,
): DiseaseEvaluationHook {
  return useBaseEvaluation(data);
}

export function usePsicomotorPolytheticEvaluation(
  data: TranstornoDSM,
): DiseaseEvaluationHook {
  return useBaseEvaluation(data);
}

export function useDefaultEvaluation(
  data: TranstornoDSM,
): DiseaseEvaluationHook {
  return useBaseEvaluation(data);
}
