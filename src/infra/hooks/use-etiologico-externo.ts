/**
 * ============================================================
 * Hook 8: useEtiologicoExterno
 * ============================================================
 * Transtornos causados por agente externo.
 * Exemplo: Transtornos induzidos por substancia, devido a
 * condicao medica.
 *
 * Estado: criterios, agenteEtiologico (string), dataInicio (string),
 *         impacto.
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
 * Estado interno — com agente etiologico e data de inicio
 * ------------------------------------------------------------ */

interface EtiologicoFormState {
  criterios_condicionais: Record<string, boolean>;
  agente_etiologico: string;
  data_inicio: string;
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

const FORM_INICIAL: EtiologicoFormState = {
  criterios_condicionais: {},
  agente_etiologico: "",
  data_inicio: "",
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

export interface EtiologicoExternoReturn {
  /** Dados de identificacao do paciente */
  identificacao: IdentificacaoState;
  /** Valores do formulario interno */
  formValues: EtiologicoFormState;
  /** Contagem de criterios atendidos */
  criteriosCount: number;
  /** Total de criterios */
  criteriosTotal: number;
  /** Indica se o agente etiologico foi informado */
  hasAgenteEtiologico: boolean;
  /** Indica se a data de inicio foi informada */
  hasDataInicio: boolean;
  /** Payload de saida */
  payload: PayloadSaida;
  /** Relatorio em markdown */
  markdown: string;
  /** Atualiza um campo de identificacao */
  setIdentificacaoField: (field: keyof IdentificacaoState, value: string) => void;
  /** Alterna um criterio */
  toggleCriterio: (criterioId: string) => void;
  /** Define o agente etiologico */
  setAgenteEtiologico: (agente: string) => void;
  /** Define a data de inicio */
  setDataInicio: (data: string) => void;
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
 * Adapter: EtiologicoFormState -> FormValues
 * ------------------------------------------------------------ */

function adaptToFormValues(form: EtiologicoFormState): FormValues {
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

export function useEtiologicoExterno(
  data: TranstornoDSM,
): EtiologicoExternoReturn {
  const [identificacao, setIdentificacao] = useState<IdentificacaoState>(
    IDENTIFICACAO_INICIAL,
  );
  const [formValues, setFormValues] = useState<EtiologicoFormState>(FORM_INICIAL);

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

  const setAgenteEtiologico = useCallback((agente: string) => {
    setFormValues((prev) => ({ ...prev, agente_etiologico: agente }));
  }, []);

  const setDataInicio = useCallback((data: string) => {
    setFormValues((prev) => ({ ...prev, data_inicio: data }));
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

  const criteriosCount = useMemo(() => {
    return Object.values(formValues.criterios_condicionais).filter(Boolean).length;
  }, [formValues.criterios_condicionais]);

  const criteriosTotal = useMemo(
    () => data.criterios_condicionais.length,
    [data.criterios_condicionais],
  );

  const hasAgenteEtiologico = useMemo(
    () => formValues.agente_etiologico.trim().length > 0,
    [formValues.agente_etiologico],
  );

  const hasDataInicio = useMemo(
    () => formValues.data_inicio.trim().length > 0,
    [formValues.data_inicio],
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
    criteriosCount,
    criteriosTotal,
    hasAgenteEtiologico,
    hasDataInicio,
    payload,
    markdown,
    setIdentificacaoField,
    toggleCriterio,
    setAgenteEtiologico,
    setDataInicio,
    setGravidade,
    setImpacto,
    toggleComorbidade,
    setNotasClinicas,
    reset,
    copiarMarkdown,
  };
}
