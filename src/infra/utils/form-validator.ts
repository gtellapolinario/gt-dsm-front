import { z } from "zod";
import type { FormValues } from "@/infra/types";

// Schema Zod para SintomaFormState
const SintomaFormStateSchema = z.object({
  checked: z.boolean().default(false),
  severity: z.enum(["", "leve", "moderado", "grave"]).default(""),
});

// Schema Zod para ClusterFormState
const ClusterFormStateSchema = z.record(z.string(), SintomaFormStateSchema).default({});

const NotasClinicasSchema = z.object({
  historia: z.string().default(""),
  observacoes_clusters: z.record(z.string(), z.string()).default({}),
  observacoes_gerais: z.string().default(""),
}).default({
  historia: "",
  observacoes_clusters: {},
  observacoes_gerais: "",
});

// Schema Zod para FormValues com valores padrão garantidos
export const FormValuesSchema = z.object({
  clusters: z.record(z.string(), ClusterFormStateSchema).default({}),
  criterios_condicionais: z.record(z.string(), z.boolean()).default({}),
  subtipo_selecionado: z.string().nullable().default(null),
  gravidade: z.string().default(""),
  especificadores: z.record(z.string(), z.union([z.boolean(), z.string()])).default({}),
  impacto: z.record(z.string(), z.string()).default({}),
  comorbidades_selecionadas: z.array(z.string()).default([]),
  notas_clinicas: NotasClinicasSchema,
});

/**
 * Normaliza os valores do formulário clínicos, garantindo que todas as propriedades
 * obrigatórias existam e tenham valores de fallback seguros a nível de runtime.
 */
export function normalizeFormValues(values: unknown): FormValues {
  // Faz o parse seguro injetando defaults em chaves ausentes
  const result = FormValuesSchema.safeParse(values || {});
  if (result.success) {
    return result.data as unknown as FormValues;
  }
  
  // Em caso de falha de validação extrema, reconstrói um objeto vazio válido
  return {
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
  } as unknown as FormValues;
}
