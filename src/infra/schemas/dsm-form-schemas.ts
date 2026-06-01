/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * DSM-5 Form Schemas — src/infra/schemas/dsm-form-schemas.ts
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * Schemas Zod para validação runtime de TODOS os tipos base DSM-5.
 * Cada schema corresponde 1:1 a um tipo exportado de `dsm-form-types.ts`.
 *
 * REGRAS:
 *   • ZERO `any` — usa `z.unknown()` quando o tipo não é conhecido
 *   • Todos os schemas exportados
 *   • Enums Zod para SeverityLevel e ImpactoLevel
 *   • Factory `createEmptyFormValues` cria FormValues vazio a partir de TranstornoDSM
 *   • Inferência de tipos via `z.infer<typeof Schema>` para manter consistência
 *
 * @module dsm-form-schemas
 */

import { z } from "zod";

// ═══════════════════════════════════════════════════════════════════════════════
// Enums de Domínio
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Schema para o nível de severidade de um sintoma.
 *
 * Valores válidos: `""` (sem severidade), `"leve"`, `"moderado"`, `"grave"`.
 * Usado em `SintomaFormStateSchema` e `PayloadSaidaSchema`.
 */
export const SeverityLevelSchema = z.enum(["", "leve", "moderado", "grave"]);

/** Tipo inferido do schema de nível de severidade. */
export type SeverityLevel = z.infer<typeof SeverityLevelSchema>;

/**
 * Schema para o nível de impacto funcional.
 *
 * Valores válidos: `"0"` (sem impacto) … `"3"` (impacto severo).
 * Usado em `ImpactoFormStateSchema` e `PayloadSaidaSchema`.
 */
export const ImpactoLevelSchema = z.enum(["0", "1", "2", "3"]);

/** Tipo inferido do schema de nível de impacto. */
export type ImpactoLevel = z.infer<typeof ImpactoLevelSchema>;

// ═══════════════════════════════════════════════════════════════════════════════
// Identificação do Paciente
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Schema de validação para {@link IdentificacaoState}.
 *
 * Valida que todos os campos obrigatórios estão presentes e são strings.
 * O campo `data_nascimento` deve estar no formato ISO YYYY-MM-DD.
 */
export const IdentificacaoStateSchema = z.object({
  paciente: z.string().min(1, "Nome do paciente é obrigatório"),
  data_nascimento: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Data de nascimento deve estar no formato YYYY-MM-DD"),
  sexo: z.string(),
  escolaridade: z.string(),
  ocupacao: z.string(),
  queixa: z.string(),
});

/** Tipo inferido: Estado de identificação validado. */
export type IdentificacaoState = z.infer<typeof IdentificacaoStateSchema>;

// ═══════════════════════════════════════════════════════════════════════════════
// Estado de Sintomas
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Schema de validação para {@link SintomaFormState}.
 *
 * Valida que `checked` é booleano e `severity` é um nível válido.
 */
export const SintomaFormStateSchema = z.object({
  checked: z.boolean(),
  severity: SeverityLevelSchema,
});

/** Tipo inferido: Estado de um sintoma validado. */
export type SintomaFormState = z.infer<typeof SintomaFormStateSchema>;

/**
 * Schema de validação para um cluster completo de sintomas.
 * Chave = sintomaId, valor = estado do sintoma.
 */
export const ClusterFormStateSchema = z.record(z.string(), SintomaFormStateSchema);

/** Tipo inferido: Estado de um cluster validado. */
export type ClusterFormState = z.infer<typeof ClusterFormStateSchema>;

/**
 * Schema de validação para todos os clusters do formulário.
 * Chave = clusterId, valor = estado do cluster.
 */
export const ClustersFormStateSchema = z.record(z.string(), ClusterFormStateSchema);

/** Tipo inferido: Estado de todos os clusters validado. */
export type ClustersFormState = z.infer<typeof ClustersFormStateSchema>;

// ═══════════════════════════════════════════════════════════════════════════════
// Critérios Condicionais & Especificadores
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Schema de validação para critérios condicionais (B, C, D, E).
 * Chave = criterioId, valor = booleano.
 */
export const CriteriosCondicionaisStateSchema = z.record(z.string(), z.boolean());

/** Tipo inferido: Estado de critérios condicionais validado. */
export type CriteriosCondicionaisState = z.infer<typeof CriteriosCondicionaisStateSchema>;

/**
 * Schema de validação para especificadores.
 * Valor pode ser booleano (checkbox) ou string (select).
 */
export const EspecificadoresStateSchema = z.record(
  z.string(),
  z.union([z.boolean(), z.string()]),
);

/** Tipo inferido: Estado de especificadores validado. */
export type EspecificadoresState = z.infer<typeof EspecificadoresStateSchema>;

// ═══════════════════════════════════════════════════════════════════════════════
// Impacto Funcional
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Schema de validação para domínios de impacto funcional.
 * Chave = dominioId, valor = nível de impacto (0–3).
 */
export const ImpactoFormStateSchema = z.record(z.string(), ImpactoLevelSchema);

/** Tipo inferido: Estado de impacto funcional validado. */
export type ImpactoFormState = z.infer<typeof ImpactoFormStateSchema>;

// ═══════════════════════════════════════════════════════════════════════════════
// Notas Clínicas
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Schema de validação para {@link NotasClinicasState}.
 *
 * Campos obrigatórios: `historia`, `observacoes_clusters`, `observacoes_gerais`.
 * Campos opcionais: `observacoes_agente`, `achados_objetivos`.
 */
export const NotasClinicasStateSchema = z.object({
  historia: z.string(),
  observacoes_clusters: z.record(z.string(), z.string()),
  observacoes_gerais: z.string(),
  observacoes_agente: z.string().optional(),
  achados_objetivos: z.array(z.string()).optional(),
});

/** Tipo inferido: Estado de notas clínicas validado. */
export type NotasClinicasState = z.infer<typeof NotasClinicasStateSchema>;

// ═══════════════════════════════════════════════════════════════════════════════
// Dados Etiológicos
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Schema de validação para {@link DadosEtiologicos}.
 *
 * Valida que `data_inicio` está no formato ISO YYYY-MM-DD.
 */
export const DadosEtiologicosSchema = z.object({
  agente: z.string().min(1, "Agente etiológico é obrigatório"),
  data_inicio: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Data de início deve estar no formato YYYY-MM-DD"),
  observacoes: z.string(),
});

/** Tipo inferido: Dados etiológicos validados. */
export type DadosEtiologicos = z.infer<typeof DadosEtiologicosSchema>;

// ═══════════════════════════════════════════════════════════════════════════════
// ClusterCounter
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Schema de validação para {@link ClusterCounter}.
 *
 * Valida métricas de critérios atingidos por cluster.
 * `ancoraSatisfeita` é opcional (apenas clusters com âncora).
 */
export const ClusterCounterSchema = z.object({
  selecionados: z.number().int().min(0),
  limiar: z.number().int().positive(),
  ancoraSatisfeita: z.boolean().optional(),
});

/** Tipo inferido: Contador de cluster validado. */
export type ClusterCounter = z.infer<typeof ClusterCounterSchema>;

// ═══════════════════════════════════════════════════════════════════════════════
// Definição do Transtorno DSM — Schemas de estrutura
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Schema de validação para um sintomo DSM-5.
 */
export const SintomaDSMSchema = z.object({
  id: z.string(),
  texto: z.string(),
  isAncora: z.boolean().optional(),
});

/** Tipo inferido: Sintoma DSM-5 validado. */
export type SintomaDSM = z.infer<typeof SintomaDSMSchema>;

/**
 * Schema de validação para um cluster DSM-5.
 */
export const ClusterDSMSchema = z.object({
  id: z.string(),
  nome: z.string(),
  sintomas: z.array(SintomaDSMSchema),
  limiar: z.number().int().positive(),
  sintoma_ancora: z.string().optional(),
});

/** Tipo inferido: Cluster DSM-5 validado. */
export type ClusterDSM = z.infer<typeof ClusterDSMSchema>;

/**
 * Schema de validação para um critério condicional DSM-5.
 */
export const CriterioCondicionalDSMSchema = z.object({
  id: z.string(),
  texto: z.string(),
});

/** Tipo inferido: Critério condicional DSM-5 validado. */
export type CriterioCondicionalDSM = z.infer<typeof CriterioCondicionalDSMSchema>;

/**
 * Schema de validação para um domínio de impacto funcional.
 */
export const DominioImpactoDSMSchema = z.object({
  id: z.string(),
  nome: z.string(),
});

/** Tipo inferido: Domínio de impacto DSM-5 validado. */
export type DominioImpactoDSM = z.infer<typeof DominioImpactoDSMSchema>;

/**
 * Schema de validação para um subtipo DSM-5.
 */
export const SubtipoDSMSchema = z.object({
  id: z.string(),
  nome: z.string(),
});

/** Tipo inferido: Subtipo DSM-5 validado. */
export type SubtipoDSM = z.infer<typeof SubtipoDSMSchema>;

/**
 * Schema de validação para um especificador DSM-5.
 */
export const EspecificadorDSMSchema = z.object({
  id: z.string(),
  nome: z.string(),
  tipo: z.enum(["boolean", "select"]),
  opcoes: z.array(z.string()).optional(),
});

/** Tipo inferido: Especificador DSM-5 validado. */
export type EspecificadorDSM = z.infer<typeof EspecificadorDSMSchema>;

/**
 * Schema de validação para uma comorbidade DSM-5.
 */
export const ComorbidadeDSMSchema = z.object({
  id: z.string(),
  nome: z.string(),
});

/** Tipo inferido: Comorbidade DSM-5 validada. */
export type ComorbidadeDSM = z.infer<typeof ComorbidadeDSMSchema>;

/**
 * Schema de validação para a definição completa de um transtorno DSM-5.
 *
 * Versão unificada que cobre tanto a estrutura V1 (FULL) quanto V2B (SHORT).
 * Todos os campos opcionais (`?`) são omissíveis para manter compatibilidade
 * com ambas as versões do tipo TranstornoDSM.
 */
export const TranstornoDSMSchema = z.object({
  $schema_version: z.string().optional(),
  meta: z
    .object({
      capitulo_id: z.string(),
      capitulo_nome: z.string(),
      codigo_cid: z.string().optional(),
    })
    .optional(),
  id: z.string(),
  name: z.string(),
  category: z.string(),
  clusters: z.array(ClusterDSMSchema),
  criterios_condicionais: z.array(CriterioCondicionalDSMSchema),
  subtipos: z.array(SubtipoDSMSchema).optional(),
  especificadores: z.array(EspecificadorDSMSchema).optional(),
  dominios_impacto: z.array(DominioImpactoDSMSchema),
  comorbidades: z.array(ComorbidadeDSMSchema).optional(),
  requer_dados_etiologicos: z.boolean().optional(),
});

/** Tipo inferido: Transtorno DSM-5 validado. */
export type TranstornoDSM = z.infer<typeof TranstornoDSMSchema>;

// ═══════════════════════════════════════════════════════════════════════════════
// FormValues — Schema completo
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Schema de validação completo para {@link FormValues}.
 *
 * Este é o schema central consumido por:
 *   • `buildPayload()`     — antes de construir PayloadSaida
 *   • `generateMarkdown()` — antes de gerar relatório
 *   • Hooks DSM            — para validar estado após operações assíncronas
 */
export const FormValuesSchema = z.object({
  clusters: ClustersFormStateSchema,
  criterios_condicionais: CriteriosCondicionaisStateSchema,
  subtipo_selecionado: z.string().nullable(),
  gravidade: z.string(),
  especificadores: EspecificadoresStateSchema,
  impacto: ImpactoFormStateSchema,
  comorbidades_selecionadas: z.array(z.string()),
  notas_clinicas: NotasClinicasStateSchema,
  dados_etiologicos: DadosEtiologicosSchema.optional(),
});

/** Tipo inferido: FormValues validado. */
export type FormValues = z.infer<typeof FormValuesSchema>;

// ═══════════════════════════════════════════════════════════════════════════════
// PayloadSaida — Schema completo
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Schema de validação para o payload de saída de uma avaliação.
 *
 * Usado para validar o resultado de `buildPayload()` antes de persistir
 * ou transmitir para API externa.
 */
export const PayloadSaidaSchema = z.object({
  transtorno_id: z.string(),
  transtorno_nome: z.string(),
  data_consulta: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  paciente_id: z.string(),
  profissional_id: z.string(),
  clusters_avaliados: z.record(
    z.string(),
    z.object({
      sintomas_selecionados: z.array(z.string()),
      severidades: z.record(z.string(), SeverityLevelSchema),
      observacoes: z.string().optional(),
    }),
  ),
  criterios_condicionais: z.record(z.string(), z.boolean()),
  subtipo_selecionado: z.string().nullable(),
  gravidade: z.string().nullable(),
  especificadores_ativos: z.array(z.string()),
  dominios_impacto: z.record(z.string(), ImpactoLevelSchema),
  comorbidades_investigadas: z.array(z.string()),
  notas_clinicas: z.object({
    historia: z.string(),
    observacoes_gerais: z.string(),
  }),
  inferencias: z.object({
    apresentacao: z.string().optional(),
    criterios_minimos_atingidos: z.boolean(),
    clusters_atingidos: z.array(z.string()),
  }),
  relatorio_markdown: z.string(),
  template_cabecalho: z.string(),
  template_rodape: z.string(),
  capitulo_id: z.string(),
  versao_schema: z.string(),
});

/** Tipo inferido: Payload de saída validado. */
export type PayloadSaida = z.infer<typeof PayloadSaidaSchema>;

// ═══════════════════════════════════════════════════════════════════════════════
// Parâmetros auxiliares — Schemas
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Schema de validação para parâmetros de build do payload.
 */
export const PayloadBuildParamsSchema = z.object({
  transtornoId: z.string(),
  transtornoNome: z.string(),
  identificacao: IdentificacaoStateSchema,
  formValues: FormValuesSchema,
  capituloId: z.string(),
  dataConsulta: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  profissionalId: z.string(),
});

/** Tipo inferido: Parâmetros de build validados. */
export type PayloadBuildParams = z.infer<typeof PayloadBuildParamsSchema>;

/**
 * Schema de validação para parâmetros de build do markdown.
 */
export const MarkdownBuildParamsSchema = z.object({
  identificacao: IdentificacaoStateSchema,
  formValues: FormValuesSchema,
  contadores: z.record(z.string(), ClusterCounterSchema),
  payload: PayloadSaidaSchema,
  transtorno: TranstornoDSMSchema,
});

/** Tipo inferido: Parâmetros de markdown validados. */
export type MarkdownBuildParams = z.infer<typeof MarkdownBuildParamsSchema>;

// ═══════════════════════════════════════════════════════════════════════════════
// DSMHookState & DSMHookResult — Schemas
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Schema de validação para o estado de carregamento de um hook DSM.
 */
export const DSMHookStateSchema = z.object({
  isLoading: z.boolean(),
  error: z.string().nullable(),
  isReady: z.boolean(),
});

/** Tipo inferido: Estado de hook DSM validado. */
export type DSMHookState = z.infer<typeof DSMHookStateSchema>;

// ═══════════════════════════════════════════════════════════════════════════════
// Factory Functions
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Cria um {@link FormValues} vazio a partir da definição de um transtorno.
 *
 * Esta factory garante que a estrutura inicial do formulário reflete
 * exatamente os clusters, sintomas, critérios condicionais e domínios
 * de impacto definidos no transtorno — evitando discrepâncias entre
 * estado inicial e estrutura esperada.
 *
 * @example
 * ```ts
 * const transtorno: TranstornoDSM = await carregarTranstorno("tag");
 * const formValues = createEmptyFormValues(transtorno);
 * // formValues.clusters contém todas as chaves dos clusters do transtorno,
 * // cada um com seus sintomas inicializados como { checked: false, severity: "" }
 * ```
 *
 * @param transtorno — Definição completa do transtorno DSM-5
 * @returns FormValues inicializado com valores padrão
 */
export function createEmptyFormValues(transtorno: TranstornoDSM): FormValues {
  // Inicializa clusters com todos os sintomas desmarcados e sem severidade
  const clusters: ClustersFormState = {};

  for (const cluster of transtorno.clusters) {
    const clusterState: ClusterFormState = {};
    for (const sintoma of cluster.sintomas) {
      clusterState[sintoma.id] = {
        checked: false,
        severity: "",
      };
    }
    clusters[cluster.id] = clusterState;
  }

  // Inicializa critérios condicionais como todos false
  const criterios_condicionais: CriteriosCondicionaisState = {};

  for (const criterio of transtorno.criterios_condicionais) {
    criterios_condicionais[criterio.id] = false;
  }

  // Inicializa domínios de impacto como "0" (sem impacto)
  const impacto: ImpactoFormState = {};

  for (const dominio of transtorno.dominios_impacto) {
    impacto[dominio.id] = "0";
  }

  // Inicializa especificadores (booleanos como false, selects como string vazia)
  const especificadores: EspecificadoresState = {};

  if (transtorno.especificadores) {
    for (const especificador of transtorno.especificadores) {
      especificadores[especificador.id] =
        especificador.tipo === "boolean" ? false : "";
    }
  }

  // Constrói o FormValues completo
  const formValues: FormValues = {
    clusters,
    criterios_condicionais,
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

  // Se o transtorno requer dados etiológicos, inicializa com valores vazios
  if (transtorno.requer_dados_etiologicos) {
    formValues.dados_etiologicos = {
      agente: "",
      data_inicio: "",
      observacoes: "",
    };
  }

  // Valida o resultado antes de retornar (fail-fast na borda)
  const parseResult = FormValuesSchema.safeParse(formValues);
  if (!parseResult.success) {
    const issues = parseResult.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`);
    throw new Error(
      `createEmptyFormValues: FormValues gerado é inválido:\n${issues.join("\n")}`,
    );
  }

  return parseResult.data;
}

/**
 * Cria um {@link IdentificacaoState} vazio com valores padrão.
 *
 * Utilitário para inicialização de hooks — evita campos `undefined`
 * que quebrariam componentes UI controlados.
 *
 * @example
 * ```ts
 * const [identificacao, setIdentificacao] = useState<IdentificacaoState>(createEmptyIdentificacao());
 * ```
 */
export function createEmptyIdentificacao(): IdentificacaoState {
  return {
    paciente: "",
    data_nascimento: "",
    sexo: "",
    escolaridade: "",
    ocupacao: "",
    queixa: "",
  };
}

/**
 * Cria um {@link ClusterCounter} inicial (zerado) para um cluster.
 *
 * @param cluster — Definição do cluster DSM-5
 * @returns ClusterCounter com contadores zerados
 */
export function createEmptyClusterCounter(cluster: ClusterDSM): ClusterCounter {
  return {
    selecionados: 0,
    limiar: cluster.limiar,
    ancoraSatisfeita: cluster.sintoma_ancora ? false : undefined,
  };
}

/**
 * Cria um mapa de {@link ClusterCounter} zerados para todos os clusters
 * de um transtorno.
 *
 * @param transtorno — Definição do transtorno DSM-5
 * @returns Record<clusterId, ClusterCounter> com todos os contadores zerados
 */
export function createEmptyContadores(
  transtorno: TranstornoDSM,
): Record<string, ClusterCounter> {
  const contadores: Record<string, ClusterCounter> = {};

  for (const cluster of transtorno.clusters) {
    contadores[cluster.id] = createEmptyClusterCounter(cluster);
  }

  return contadores;
}

// ═══════════════════════════════════════════════════════════════════════════════
// Validadores de borda (Runtime guards)
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Valida se um objeto qualquer é um {@link FormValues} válido.
 * Retorna um resultado tipado em vez de lançar exceção.
 *
 * @param value — Valor a ser validado (tipicamente de localStorage, API, etc.)
 * @returns Resultado da validação com dados tipados ou lista de erros
 */
export function validateFormValues(
  value: unknown,
): { success: true; data: FormValues } | { success: false; errors: string[] } {
  const result = FormValuesSchema.safeParse(value);
  if (result.success) {
    return { success: true, data: result.data };
  }
  return {
    success: false,
    errors: result.error.issues.map((i) => `[${i.path.join(".")}] ${i.message}`),
  };
}

/**
 * Valida se um objeto qualquer é um {@link PayloadSaida} válido.
 * Útil para validar respostas de API antes de consumir.
 *
 * @param value — Valor a ser validado
 * @returns Resultado da validação com dados tipados ou lista de erros
 */
export function validatePayloadSaida(
  value: unknown,
): { success: true; data: PayloadSaida } | { success: false; errors: string[] } {
  const result = PayloadSaidaSchema.safeParse(value);
  if (result.success) {
    return { success: true, data: result.data };
  }
  return {
    success: false,
    errors: result.error.issues.map((i) => `[${i.path.join(".")}] ${i.message}`),
  };
}

/**
 * Valida se um objeto qualquer é um {@link IdentificacaoState} válido.
 *
 * @param value — Valor a ser validado
 * @returns Resultado da validação com dados tipados ou lista de erros
 */
export function validateIdentificacao(
  value: unknown,
): { success: true; data: IdentificacaoState } | { success: false; errors: string[] } {
  const result = IdentificacaoStateSchema.safeParse(value);
  if (result.success) {
    return { success: true, data: result.data };
  }
  return {
    success: false,
    errors: result.error.issues.map((i) => `[${i.path.join(".")}] ${i.message}`),
  };
}
