/**
 * ============================================================
 * DSM-5 Centralized Schemas (dsm-schemas.ts)
 * ============================================================
 * Arquivo central de schemas Zod para validacao de todos os
 * dados do sistema DSM-5. Todos os modulos do frontend
 * consomem estes schemas e seus tipos inferidos.
 *
 * DESIGN PRINCIPLES:
 * - Validacao estrita: passthrough desligado por padrao
 * - Defaults explicitos em campos opcionais
 * - Zero `any` — `z.unknown()` para tipos indeterminados
 * - Inferencia via `z.infer<>` para todos os tipos publicos
 * - Schemas modulares e reutilizaveis
 * ============================================================
 */

import { z } from "zod";

/* ============================================================
 * 1. ENUMS & CONSTANTES
 * ============================================================ */

/**
 * As 16 estruturas diagnosticas validas no DSM-5.
 * Representam os padroes de criterios usados para cada transtorno.
 */
export const ESTRUTURAS_DIAGNOSTICAS = [
  "polythetic_clusters_simetricos",
  "polythetic_clusters_assimetricos",
  "polythetic_monocluster",
  "polythetic_com_ancora",
  "monothetic_puro",
  "monothetic_tripartite",
  "mixed_monothetic_polythetic",
  "temporal_topografico",
  "etiologico_externo",
  "qualitativo_descritivo",
  "episodico",
  "episodico_com_sintomas",
  "tripartite_funcional",
  "conjuncao_temporal_complexa",
  "categorico_por_subtipo",
  "psicomotor_polythetic",
] as const;

/**
 * Schema Zod para o enum de estruturas diagnosticas.
 */
export const EstruturaDiagnosticaSchema = z.enum(ESTRUTURAS_DIAGNOSTICAS);

/**
 * Tipo para estruturas diagnosticas.
 */
export type EstruturaDiagnostica = z.infer<typeof EstruturaDiagnosticaSchema>;

/**
 * Type guard: verifica se um valor e uma EstruturaDiagnostica valida.
 */
export function isEstruturaDiagnostica(
  value: unknown
): value is EstruturaDiagnostica {
  return EstruturaDiagnosticaSchema.safeParse(value).success;
}

/**
 * Categorias de documento DSM-5.
 */
export const CATEGORIAS_DOCUMENTO = ["FULL", "SHORT", "MINIMAL", "EXCLUDE"] as const;

/**
 * Schema Zod para o enum de categorias de documento.
 */
export const CategoriaDocumentoSchema = z.enum(CATEGORIAS_DOCUMENTO);

/**
 * Tipo para categorias de documento DSM-5.
 */
export type CategoriaDocumento = z.infer<typeof CategoriaDocumentoSchema>;

/**
 * Type guard: verifica se um valor e uma CategoriaDocumento valida.
 */
export function isCategoriaDocumento(
  value: unknown
): value is CategoriaDocumento {
  return CategoriaDocumentoSchema.safeParse(value).success;
}

/* ============================================================
 * 2. SCHEMAS PRIMITIVOS / ATOMICOS
 * ============================================================ */

/**
 * Schema para codigos de classificacao (CID-10, CID-11, DSM-5).
 */
export const CodeSchema = z.object({
  /** Codigo CID-10 (Classificacao Internacional de Doencas, 10a revisao) */
  cid10: z.string(),
  /** Codigo CID-11 (Classificacao Internacional de Doencas, 11a revisao) — pode ser null */
  cid11: z.string().nullable(),
  /** Codigo DSM-5 (Manual Diagnostico e Estatistico de Transtornos Mentais, 5a edicao) */
  dsm5: z.string(),
});

/**
 * Tipo para codigos de classificacao.
 */
export type Code = z.infer<typeof CodeSchema>;

/**
 * Schema para um criterio diagnostico individual.
 * Representa um criterio com letra (ex: "A", "B", "C") com
 * sintomas e regras de contagem obrigatorios.
 */
export const CriterioDiagnosticoSchema = z.object({
  /** Identificador unico do criterio */
  id: z.string(),
  /** Letra do criterio (ex: "A", "B", "C") */
  letra: z.string(),
  /** Rotulo legivel (ex: "Criterio A") */
  rotulo: z.string(),
  /** Descricao completa do que o criterio exige */
  descricao_completa: z.string(),
  /** Indica se o criterio e obrigatorio para o diagnostico */
  obrigatorio: z.boolean().default(true),
});

/**
 * Tipo para criterio diagnostico.
 */
export type CriterioDiagnostico = z.infer<typeof CriterioDiagnosticoSchema>;

/**
 * Schema para um sintoma individual.
 */
export const SintomaSchema = z.object({
  /** Identificador unico do sintoma */
  id: z.string(),
  /** Texto descritivo do sintoma */
  texto: z.string(),
  /** Descricao adicional ou esclarecimento */
  descricao: z.string(),
});

/**
 * Tipo para sintoma.
 */
export type Sintoma = z.infer<typeof SintomaSchema>;

/**
 * Schema para um cluster (grupo) de sintomas.
 * Clusters agrupam sintomas relacionados em conjuntos que devem
 * ser avaliados em conjunto para o diagnostico.
 */
export const ClusterSintomasSchema = z.object({
  /** Identificador unico do cluster */
  id: z.string(),
  /** Nome do cluster (ex: "Cluster A") */
  nome: z.string(),
  /** Descricao do que o cluster representa */
  descricao: z.string().default(""),
  /** Lista de sintomas contidos neste cluster */
  sintomas: z.array(SintomaSchema),
});

/**
 * Tipo para cluster de sintomas.
 */
export type ClusterSintomas = z.infer<typeof ClusterSintomasSchema>;

/**
 * Schema para um nivel de gravidade (ex: leve, moderado, grave).
 */
export const NivelGravidadeSchema = z.object({
  /** Identificador unico do nivel */
  id: z.string(),
  /** Rotulo legivel (ex: "Leve", "Moderado", "Grave") */
  label: z.string(),
  /** Descricao do que caracteriza este nivel */
  descricao: z.string().default(""),
});

/**
 * Tipo para nivel de gravidade.
 */
export type NivelGravidade = z.infer<typeof NivelGravidadeSchema>;

/**
 * Schema para um dominio de gravidade.
 */
export const DominioGravidadeSchema = z.object({
  /** Identificador unico do dominio */
  id: z.string(),
  /** Rotulo legivel (ex: "Funcionamento Intelectual") */
  label: z.string(),
  /** Descricao do que o dominio mede */
  descricao: z.string().default(""),
});

/**
 * Tipo para dominio de gravidade.
 */
export type DominioGravidade = z.infer<typeof DominioGravidadeSchema>;

/**
 * Schema para o objeto completo de gravidade.
 * Contem informacoes sobre severidade, niveis e dominios.
 */
export const GravidadeSchema = z.object({
  /** Tipo de escala de gravidade aplicavel */
  tipo: z.string().default("nao_aplica"),
  /** Indica se ha gravidade formal definida para o transtorno */
  presente: z.boolean().default(false),
  /** Indica se o transtorno possui escala de severidade formal */
  has_formal_severity: z.boolean().default(false),
  /** Regra para atribuicao do nivel de gravidade */
  regra_atribuicao: z.string().default(""),
  /** Lista de niveis de gravidade disponiveis */
  niveis: z.array(NivelGravidadeSchema).default([]),
  /** Lista de dominios de gravidade avaliados */
  dominios: z.array(DominioGravidadeSchema).default([]),
});

/**
 * Tipo para gravidade.
 */
export type Gravidade = z.infer<typeof GravidadeSchema>;

/**
 * Schema para um dominio de impacto funcional.
 * Representa areas da vida que podem ser afetadas pelo transtorno
 * (ex: ocupacional, social, pessoal).
 */
export const DominioImpactoFuncionalSchema = z.object({
  /** Identificador unico do dominio */
  id: z.string(),
  /** Rotulo legivel (ex: "Ocupacional", "Social") */
  label: z.string(),
});

/**
 * Tipo para dominio de impacto funcional.
 */
export type DominioImpactoFuncional = z.infer<typeof DominioImpactoFuncionalSchema>;

/**
 * Schema para comorbidade frequente.
 * Indica condicoes que frequentemente co-ocorrem com o transtorno.
 */
export const ComorbidadeSchema = z.object({
  /** Nome da condicao comorbida */
  condicao: z.string(),
  /** Frequencia da coocorrencia (ex: "alta", "moderada", null se desconhecida) */
  frequencia: z.string().nullable().default(null),
  /** Nota ou esclarecimento adicional */
  nota: z.string().default(""),
});

/**
 * Tipo para comorbidade.
 */
export type Comorbidade = z.infer<typeof ComorbidadeSchema>;

/**
 * Schema para diagnostico diferencial.
 * Representa uma condicao que deve ser diferenciada do transtorno
 * durante o diagnostico.
 */
export const DiagnosticoDiferencialSchema = z.object({
  /** Nome da condicao a diferenciar */
  condicao: z.string(),
  /** Ponto de distincao principal */
  ponto_distincao: z.string().default(""),
  /** Indica se pertence a mesma classe de transtornos */
  pertence_a_classe: z.boolean().default(false),
});

/**
 * Tipo para diagnostico diferencial.
 */
export type DiagnosticoDiferencial = z.infer<typeof DiagnosticoDiferencialSchema>;

/**
 * Schema para pergunta chave (usada em entrevista estruturada).
 */
export const PerguntaChaveSchema = z.object({
  /** Identificador unico da pergunta */
  id: z.string(),
  /** Texto da pergunta a ser feita ao paciente */
  texto: z.string(),
});

/**
 * Tipo para pergunta chave.
 */
export type PerguntaChave = z.infer<typeof PerguntaChaveSchema>;

/**
 * Schema para curso de desenvolvimento do transtorno.
 */
export const CursoDesenvolvimentoSchema = z.object({
  /** Idade tipica de inicio dos sintomas */
  idade_inicio_tipica: z.string().default(""),
  /** Descricao da trajetoria tipica do transtorno */
  trajetoria: z.string().default(""),
  /** Prognostico geral */
  prognostico: z.string().default(""),
});

/**
 * Tipo para curso de desenvolvimento.
 */
export type CursoDesenvolvimento = z.infer<typeof CursoDesenvolvimentoSchema>;

/**
 * Schema para dados de prevalencia do transtorno.
 */
export const PrevalenciaSchema = z.object({
  /** Prevalencia na populacao geral */
  populacao_geral: z.string().default(""),
  /** Proporcao entre sexos (ex: "M>F", "F>M", "1:1") */
  proporcao_sexo: z.string().default(""),
  /** Variacoes observadas em diferentes contextos culturais */
  variacoes_culturais: z.string().default(""),
  /** Notas adicionais sobre prevalencia */
  notas: z.string().default(""),
});

/**
 * Tipo para prevalencia.
 */
export type Prevalencia = z.infer<typeof PrevalenciaSchema>;

/**
 * Schema para regras de hierarquia diagnostica.
 * Define exclusoes mutuas e dependencias entre diagnosticos.
 */
export const HierarquiaSchema = z.object({
  /** Indica se ha regras de hierarquia aplicaveis */
  presente: z.boolean().default(false),
  /** Notas sobre a hierarquia */
  notas: z.string().default(""),
  /** Lista de transtornos que este transtorno exclui se diagnosticado */
  exclui_se_diagnosticado: z.array(z.string()).default([]),
  /** Lista de transtornos que excluem este transtorno se diagnosticados */
  exclui_diagnostico_de: z.array(z.string()).default([]),
});

/**
 * Tipo para hierarquia.
 */
export type Hierarquia = z.infer<typeof HierarquiaSchema>;

/**
 * Schema para especificador.
 * Especificadores qualificam o diagnostico (ex: "com catatonia",
 * "em remissao parcial").
 */
export const EspecificadorSchema = z.object({
  /** Identificador unico do especificador */
  id: z.string(),
  /** Nome do especificador */
  nome: z.string(),
  /** Descricao do que o especificador indica */
  descricao: z.string().default(""),
});

/**
 * Tipo para especificador.
 */
export type Especificador = z.infer<typeof EspecificadorSchema>;

/**
 * Schema para template de prontuario medico.
 */
export const TemplateProntuarioSchema = z.object({
  /** Titulo do template */
  titulo: z.string(),
  /** Texto base do prontuario */
  texto: z.string().default(""),
  /** Campos editaveis do template (estrutura flexivel) */
  campos: z.array(z.unknown()).default([]),
});

/**
 * Tipo para template de prontuario.
 */
export type TemplateProntuario = z.infer<typeof TemplateProntuarioSchema>;

/* ============================================================
 * 3. SCHEMA COMPLETO: TranstornoDSM (LEGACY)
 * ============================================================ */

/**
 * Schema para metadados do transtorno.
 */
export const TranstornoMetaSchema = z.object({
  /** Identificador unico */
  id: z.string(),
  /** Nome completo do transtorno */
  nome_completo: z.string(),
  /** Sigla ou nome curto */
  sigla: z.string(),
  /** Identificador do capitulo DSM */
  capitulo_id: z.string(),
  /** Nome do capitulo */
  capitulo: z.string(),
  /** Grupo dentro do capitulo (null se nao aplicavel) */
  grupo: z.string().nullable(),
  /** Indica se existe versao complementar */
  versao_complementar_existe: z.boolean(),
  /** Sinonimos historicos do transtorno */
  sinonimos_historicos: z.array(z.string()),
  /** Faixa etaria para a qual o transtorno se aplica */
  faixa_etaria_alvo: z.string(),
  /** Codigos de classificacao */
  codigo: CodeSchema,
});

/**
 * Tipo para metadados do transtorno.
 */
export type TranstornoMeta = z.infer<typeof TranstornoMetaSchema>;

/**
 * Schema para subtipos do transtorno.
 */
export const SubtiposSchema = z.object({
  /** Indica se o transtorno possui subtipos definidos */
  presente: z.boolean(),
  /** Lista de subtipos (estrutura flexivel pois varia por transtorno) */
  itens: z.array(z.unknown()).default([]),
});

/**
 * Tipo para subtipos do transtorno.
 */
export type Subtipos = z.infer<typeof SubtiposSchema>;

/**
 * Schema completo para o objeto TranstornoDSM no formato legacy.
 *
 * Este e o principal schema do sistema. Representa o objeto `legacy`
 * gerado pelo pipeline Python de normalizacao, consumido pelos
 * componentes React do frontend.
 */
export const TranstornoDsmLegacySchema = z.object({
  /** Versao do schema para controle de compatibilidade */
  $schema_version: z.literal("1.0.0"),

  /** Metadados descritivos do transtorno */
  meta: TranstornoMetaSchema,

  /** Identificador unico do transtorno */
  id: z.string(),

  /** Identificador do item no catalogo */
  item_id: z.string(),

  /** Nome curto / sigla do transtorno */
  name: z.string(),

  /** Nome completo e formal do transtorno */
  nome_completo: z.string(),

  /** Identificador do capitulo DSM */
  chapter_id: z.string(),

  /** Nome do capitulo DSM */
  chapter_name: z.string(),

  /** Categoria do documento: completo, resumo, minimal ou excluido */
  category: CategoriaDocumentoSchema,

  /** Estrutura diagnostica do transtorno */
  estrutura_diagnostica: z.string(),

  /** Estrutura geral da avaliacao */
  estrutura_geral: z.string(),

  /** Modo de UI recomendado para renderizacao */
  ui_mode: z.string(),

  /** Tipo de escala de severidade ("nao_aplica" se nao tem) */
  severity_type: z.string().default("nao_aplica"),

  /** Indica se o transtorno possui escala de severidade formal */
  has_formal_severity: z.boolean().default(false),

  /** Indica se deve renderizar entrevista estruturada */
  render_structured_interview: z.boolean(),

  /** Regra diagnostica descritiva */
  diagnostic_rule: z.string().default(""),

  /** Clusters de sintomas para avaliacao */
  clusters_sintomas: z.array(ClusterSintomasSchema),

  /** Criterios condicionais adicionais */
  criterios_condicionais: z.array(CriterioDiagnosticoSchema),

  /** Informacoes de gravidade / severidade */
  gravidade: GravidadeSchema,

  /** Dominios de impacto funcional */
  dominios_impacto: z.array(DominioImpactoFuncionalSchema),

  /** Comorbidades frequentes */
  comorbidades_frequentes: z.array(ComorbidadeSchema),

  /** Diagnosticos diferenciais */
  diagnostico_diferencial: z.array(DiagnosticoDiferencialSchema),

  /** Perguntas chave (camelCase - formato legado) */
  perguntas_chave: z.array(PerguntaChaveSchema),

  /** Perguntas chave (snake_case - formato normalizado) */
  key_questions: z.array(PerguntaChaveSchema),

  /** Curso de desenvolvimento do transtorno */
  curso_desenvolvimento: CursoDesenvolvimentoSchema,

  /** Dados de prevalencia */
  prevalencia: PrevalenciaSchema,

  /** Regras de hierarquia diagnostica */
  hierarquia: HierarquiaSchema,

  /** Subtipos do transtorno */
  subtipos: SubtiposSchema,

  /** Especificadores aplicaveis */
  especificadores: z.array(EspecificadorSchema),

  /** Template para preenchimento de prontuario */
  template_prontuario: TemplateProntuarioSchema,

  /** Metadados globais adicionais (estrutura variavel) */
  metadados_globais: z.record(z.string(), z.unknown()).default({}),

  /** Instrumentos complementares recomendados */
  instrumentos_complementares: z.array(z.unknown()).default([]),

  /** Documento bruto original (opcional) */
  raw_document: z.record(z.string(), z.unknown()).optional(),
});

/**
 * Tipo para TranstornoDSM no formato legacy.
 */
export type TranstornoDsmLegacy = z.infer<typeof TranstornoDsmLegacySchema>;

/* ============================================================
 * 4. SCHEMAS DE CONFIGURACAO & CATALOGO
 * ============================================================ */

/**
 * Schema para configuracao do componente de um transtorno.
 * Usado para registrar e rotear os componentes React.
 */
export const ComponentConfigSchema = z.object({
  /** Identificador unico */
  id: z.string(),
  /** Nome completo do transtorno */
  nome: z.string(),
  /** Sigla ou nome curto */
  sigla: z.string(),
  /** Rota de navegacao */
  route: z.string(),
  /** Capitulo DSM */
  capitulo: z.string(),
  /** Nome do capitulo DSM */
  capituloNome: z.string(),
  /** Estrutura diagnostica */
  estrutura: EstruturaDiagnosticaSchema,
  /** Modo de UI */
  uiMode: z.string(),
  /** Categoria do documento */
  category: CategoriaDocumentoSchema,
  /** Tipo de severidade */
  severityType: z.string(),
  /** Indica se deve renderizar entrevista estruturada */
  renderStructuredInterview: z.boolean(),
  /** Nome do icone (ex: nome de um icon do Lucide) */
  icon: z.string(),
  /** Cor primaria do tema (hex) */
  corPrimaria: z.string(),
  /** Cor secundaria do tema (hex) */
  corSecundaria: z.string(),
  /** Faixa etaria alvo */
  faixaEtaria: z.string(),
  /** Indica se ha subtipos definidos */
  temSubtipos: z.boolean(),
  /** Indica se ha avaliacao de gravidade */
  temGravidade: z.boolean(),
  /** Indica se ha avaliacao de impacto funcional */
  temImpactoFuncional: z.boolean(),
  /** Indica se ha comorbidades documentadas */
  temComorbidades: z.boolean(),
  /** Indica se ha especificadores definidos */
  temEspecificadores: z.boolean(),
  /** Codigo CID-10 */
  cid10: z.string(),
  /** Codigo CID-11 (null se nao disponivel) */
  cid11: z.string().nullable(),
  /** Codigo DSM-5 */
  dsm5: z.string(),
});

/**
 * Tipo para configuracao do componente.
 */
export type ComponentConfig = z.infer<typeof ComponentConfigSchema>;

/**
 * Schema para item do catalogo de transtornos.
 * Representa a entrada no catalogo mestre com informacoes
 * basicas para listagem e navegacao.
 */
export const CatalogItemSchema = z.object({
  /** Identificador unico */
  id: z.string(),
  /** Nome completo do transtorno */
  nome: z.string(),
  /** Sigla ou nome curto (null se nao aplicavel) */
  sigla: z.string().nullable(),
  /** Codigo DSM-5 (null se nao disponivel) */
  dsm5: z.string().nullable(),
  /** Codigo CID-10 (null se nao disponivel) */
  cid10: z.string().nullable(),
  /** Identificador do capitulo (2 caracteres, ex: "03") */
  capituloId: z.string().length(2),
  /** Nome do capitulo */
  capituloNome: z.string(),
  /** Categoria do documento */
  categoria: z.enum(["FULL", "SHORT"]),
  /** Estrutura diagnostica */
  estrutura: EstruturaDiagnosticaSchema,
  /** Rota de navegacao */
  route: z.string(),
  /** Pasta de armazenamento */
  folder: z.string(),
});

/**
 * Tipo para item do catalogo.
 */
export type CatalogItem = z.infer<typeof CatalogItemSchema>;

/**
 * Schema para um modulo do registry de componentes.
 * Cada modulo registra um componente React lazy-loaded.
 */
export const RegistryModuleSchema = z.object({
  /** Componente padrao exportado (lazy-loaded) */
  default: z.custom<React.ComponentType>(),
  /** Metadados do modulo */
  meta: z
    .object({
      id: z.string(),
      nome: z.string(),
      sigla: z.string().optional(),
      capituloId: z.string(),
    })
    .optional(),
  /** Configuracoes adicionais do modulo */
  config: z
    .object({
      estrutura: EstruturaDiagnosticaSchema.optional(),
      route: z.string().optional(),
    })
    .optional(),
});

/**
 * Tipo para modulo do registry.
 */
export type RegistryModule = z.infer<typeof RegistryModuleSchema>;

/* ============================================================
 * 5. SCHEMAS DERIVADOS / UTILITARIOS
 * ============================================================ */

/**
 * Schema para validacao de arrays de transtornos legacy.
 */
export const TranstornoDsmLegacyArraySchema = z.array(TranstornoDsmLegacySchema);

/**
 * Tipo para array de transtornos legacy.
 */
export type TranstornoDsmLegacyArray = z.infer<typeof TranstornoDsmLegacyArraySchema>;

/**
 * Schema para validacao de arrays de itens de catalogo.
 */
export const CatalogItemArraySchema = z.array(CatalogItemSchema);

/**
 * Tipo para array de itens de catalogo.
 */
export type CatalogItemArray = z.infer<typeof CatalogItemArraySchema>;

/**
 * Schema para validacao de arrays de configuracoes de componente.
 */
export const ComponentConfigArraySchema = z.array(ComponentConfigSchema);

/**
 * Tipo para array de configuracoes de componente.
 */
export type ComponentConfigArray = z.infer<typeof ComponentConfigArraySchema>;

/**
 * Schema para o catalogo completo (mapeamento de capitulos).
 */
export const CatalogoSchema = z.record(z.string(), CatalogItemArraySchema);

/**
 * Tipo para catalogo completo.
 */
export type Catalogo = z.infer<typeof CatalogoSchema>;

/**
 * Schema para o registry de modulos (mapeamento de rotas).
 */
export const RegistrySchema = z.record(z.string(), RegistryModuleSchema);

/**
 * Tipo para registry completo.
 */
export type Registry = z.infer<typeof RegistrySchema>;

/* ============================================================
 * 6. FUNCOES UTILITARIAS DE VALIDACAO
 * ============================================================ */

/**
 * Valida se um objeto e um TranstornoDSM legacy valido.
 *
 * @param data — Objeto a ser validado
 * @returns Resultado seguro com dados parseados ou erro
 */
export function validateTranstornoLegacy(
  data: unknown
): z.ZodSafeParseResult<TranstornoDsmLegacy> {
  return TranstornoDsmLegacySchema.safeParse(data);
}

/**
 * Valida se um array contem apenas TranstornosDSM legacy validos.
 *
 * @param data — Array a ser validado
 * @returns Resultado seguro com array parseado ou erro
 */
export function validateTranstornoLegacyArray(
  data: unknown
): z.ZodSafeParseResult<TranstornoDsmLegacyArray> {
  return TranstornoDsmLegacyArraySchema.safeParse(data);
}

/**
 * Valida se um objeto e um CatalogItem valido.
 *
 * @param data — Objeto a ser validado
 * @returns Resultado seguro com dados parseados ou erro
 */
export function validateCatalogItem(
  data: unknown
): z.ZodSafeParseResult<CatalogItem> {
  return CatalogItemSchema.safeParse(data);
}

/**
 * Valida se um array contem apenas CatalogItems validos.
 *
 * @param data — Array a ser validado
 * @returns Resultado seguro com array parseado ou erro
 */
export function validateCatalogItemArray(
  data: unknown
): z.ZodSafeParseResult<CatalogItemArray> {
  return CatalogItemArraySchema.safeParse(data);
}

/**
 * Valida se um objeto e um ComponentConfig valido.
 *
 * @param data — Objeto a ser validado
 * @returns Resultado seguro com dados parseados ou erro
 */
export function validateComponentConfig(
  data: unknown
): z.ZodSafeParseResult<ComponentConfig> {
  return ComponentConfigSchema.safeParse(data);
}

/**
 * Valida uma estrutura diagnostica string.
 *
 * @param value — Valor a validar
 * @returns Resultado seguro com string parseada ou erro
 */
export function validateEstruturaDiagnostica(
  value: unknown
): z.ZodSafeParseResult<EstruturaDiagnostica> {
  return EstruturaDiagnosticaSchema.safeParse(value);
}

/**
 * Valida uma categoria de documento.
 *
 * @param value — Valor a validar
 * @returns Resultado seguro com string parseada ou erro
 */
export function validateCategoriaDocumento(
  value: unknown
): z.ZodSafeParseResult<CategoriaDocumento> {
  return CategoriaDocumentoSchema.safeParse(value);
}

/* ============================================================
 * ALIASES DE EXPORT — nomes convenientes para consumidores
 * ============================================================ */

/** Alias: TranstornoDSM (nome canonico usado pelo sistema) */
export type TranstornoDSM = TranstornoDsmLegacy;

/** Alias: schema TranstornoDSM */
export const TranstornoDSMSchema = TranstornoDsmLegacySchema;

/** Alias: DiseaseCatalogItem (nome canonico usado pelo catalogo) */
export type DiseaseCatalogItem = CatalogItem;

/** Alias: schema DiseaseCatalogItem */
export const DiseaseCatalogItemSchema = CatalogItemSchema;

/** Alias: DiseaseModule (nome canonico usado pelo registry) */
export type DiseaseModule = RegistryModule;

/** Alias: schema DiseaseModule */
export const DiseaseModuleSchema = RegistryModuleSchema;

/** Alias: ComponentConfig (nome canonico) */
export type DiseaseConfig = ComponentConfig;

/** Alias: schema DiseaseConfig */
export const DiseaseConfigSchema = ComponentConfigSchema;
