/**
 * ============================================================
 * Hook 3: useMonotheticPuro
 * ============================================================
 * TODOS os criterios sao obrigatorios (monothetic).
 * Exemplo: Delirium, Movimento Estereotipado, Desenvolvimento
 * da Coordenacao.
 *
 * Estado: criterios (boolean[]), todosCriteriosAtendidos (boolean).
 * ZERO `any`, ZERO `as any`.
 * ============================================================
 */

import { useState, useMemo, useCallback } from "react";
import type {
  TranstornoDSM,
} from "@/infra/schemas/dsm-schemas";
import type {
  IdentificacaoState,
  FormValues,
  PayloadSaida,
} from "@/infra/types/dsm-form-types";
import { buildPayload } from "@/infra/utils/payload-builder";
import { generateMarkdown } from "@/infra/utils/markdown-generator";

/* ------------------------------------------------------------
 * Estado interno — criterios obrigatorios
 * ------------------------------------------------------------ */

interface MonotheticFormState {
  criterios_condicionais: Record<string, boolean>;
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

const FORM_INICIAL: MonotheticFormState = {
  criterios_condicionais: {},
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

export interface MonotheticPuroReturn {
  /** Dados de identificacao do paciente */
  identificacao: IdentificacaoState;
  /** Valores do formulario interno */
  formValues: MonotheticFormState;
  /** Numero de criterios obrigatorios atendidos */
  criteriosAtendidos: number;
  /** Total de criterios obrigatorios */
  criteriosTotal: number;
  /** Indica se TODOS os criterios obrigatorios foram atendidos */
  todosCriteriosAtendidos: boolean;
  /** Payload de saida */
  payload: PayloadSaida;
  /** Relatorio em markdown */
  markdown: string;
  /** Atualiza um campo de identificacao */
  setIdentificacaoField: (field: keyof IdentificacaoState, value: string) => void;
  /** Alterna um criterio */
  toggleCriterio: (criterioId: string) => void;
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
 * Adapter: MonotheticFormState -> FormValues
 * ------------------------------------------------------------ */

function adaptToFormValues(form: MonotheticFormState): FormValues {
  return {
    clusters: {},
    criterios_condicionais: form.criterios_condicionais,
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

export function useMonotheticPuro(
  data: TranstornoDSM,
): MonotheticPuroReturn {
  const [identificacao, setIdentificacao] = useState<IdentificacaoState>(
    IDENTIFICACAO_INICIAL,
  );
  const [formValues, setFormValues] = useState<MonotheticFormState>(FORM_INICIAL);

  // --- Callbacks de atualizacao ---

  const setIdentificacaoField = useCallback(
    (field: keyof IdentificacaoState, value: string) => {
      setIdentificacao((prev) => ({ ...prev, [field]: value }));
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

  const criteriosAtendidos = useMemo(() => {
    return Object.values(formValues.criterios_condicionais).filter(Boolean).length;
  }, [formValues.criterios_condicionais]);

  const criteriosTotal = useMemo(
    () => data.criterios_condicionais.length,
    [data.criterios_condicionais],
  );

  const todosCriteriosAtendidos = useMemo(() => {
    if (data.criterios_condicionais.length === 0) return false;
    return data.criterios_condicionais.every(
      (criterio) => formValues.criterios_condicionais[criterio.id] === true,
    );
  }, [formValues.criterios_condicionais, data.criterios_condicionais]);

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
    criteriosAtendidos,
    criteriosTotal,
    todosCriteriosAtendidos,
    payload,
    markdown,
    setIdentificacaoField,
    toggleCriterio,
    setGravidade,
    setImpacto,
    toggleComorbidade,
    setNotasClinicas,
    reset,
    copiarMarkdown,
  };
}
