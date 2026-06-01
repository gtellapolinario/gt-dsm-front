/**
 * ============================================================
 * DSM Form Types (dsm-form-types.ts)
 * ============================================================
 * Tipos base compartilhados por todos os hooks de formularios
 * DSM-5. Nenhum tipo de dominio de negocio deve ser definido
 * localmente nos hooks — importe daqui.
 *
 * REGRAS:
 * - ZERO `any` — use `unknown` para tipos indeterminados
 * - Tipos imutaveis (readonly) por padrao em colecoes
 * ============================================================
 */

/* ============================================================
 * 0. TIPOS DO TRANSTORNO DSM (interfaces locais — schema-free)
 * ============================================================
 * Estas interfaces definem a estrutura minima necessaria para
 * os hooks e utils funcionarem. Sao independentes do schema
 * Zod, evitando problemas de compatibilidade entre versoes.
 */

/** Um sintoma dentro de um cluster de sintomas. */
export interface SintomaDSM {
  readonly id: string;
  readonly texto: string;
  readonly descricao: string;
}

/** Um cluster (grupo) de sintomas para avaliacao. */
export interface ClusterSintomas {
  readonly id: string;
  readonly nome: string;
  readonly descricao: string;
  readonly sintomas: SintomaDSM[];
}

/** Um criterio diagnostico individual. */
export interface CriterioDiagnostico {
  readonly id: string;
  readonly letra: string;
  readonly rotulo: string;
  readonly descricao_completa: string;
  readonly obrigatorio: boolean;
}

/** Um dominio de impacto funcional. */
export interface DominioImpactoFuncional {
  readonly id: string;
  readonly label: string;
  readonly icone_fa?: string | null;
}

/** Um especificador do transtorno. */
export interface Especificador {
  readonly id: string;
  readonly nome: string;
  readonly descricao: string;
}

/** Uma comorbidade frequente. */
export interface Comorbidade {
  readonly condicao: string;
  readonly frequencia: string | null;
  readonly nota: string;
}

/** Um diagnostico diferencial. */
export interface DiagnosticoDiferencial {
  readonly condicao: string;
  readonly ponto_distincao: string;
  readonly pertence_a_classe: boolean;
}

/** Nivel de gravidade disponivel. */
export interface NivelGravidade {
  readonly id: string;
  readonly label: string;
  readonly descricao: string;
}

/** Dominio de gravidade. */
export interface DominioGravidade {
  readonly id: string;
  readonly label: string;
  readonly descricao: string;
}

/** Objeto de gravidade completo. */
export interface Gravidade {
  readonly tipo: string;
  readonly presente: boolean;
  readonly has_formal_severity: boolean;
  readonly regra_atribuicao: string;
  readonly niveis: NivelGravidade[];
  readonly dominios: DominioGravidade[];
}

/** Subtipos do transtorno. */
export interface Subtipos {
  readonly presente: boolean;
  readonly itens: unknown[];
}

/** Codigos de classificacao. */
export interface CodigoClassificacao {
  readonly cid10: string;
  readonly cid11: string | null;
  readonly dsm5: string;
}

/** Metadados do transtorno. */
export interface TranstornoMeta {
  readonly id: string;
  readonly nome_completo: string;
  readonly sigla: string;
  readonly capitulo_id: string;
  readonly capitulo: string;
  readonly grupo: string | null;
  readonly versao_complementar_existe: boolean;
  readonly sinonimos_historicos: string[];
  readonly faixa_etaria_alvo: string;
  readonly codigo: CodigoClassificacao;
}

/** Pergunta chave para diagnostico. */
export interface PerguntaChave {
  readonly id: string;
  readonly texto: string;
}

/** Template para prontuario. */
export interface TemplateProntuario {
  readonly titulo: string;
  readonly texto: string;
  readonly campos: unknown[];
}

/**
 * Interface principal do Transtorno DSM.
 * Contem toda a estrutura necessaria para os hooks.
 */
export interface TranstornoDSM {
  readonly diagnostico_diferencial: DiagnosticoDiferencial[];
  readonly $schema_version: "1.0.0";
  readonly meta: TranstornoMeta;
  readonly id: string;
  readonly item_id: string;
  readonly name: string;
  readonly nome_completo: string;
  readonly chapter_id: string;
  readonly chapter_name: string;
  readonly category: "FULL" | "SHORT" | "MINIMAL" | "EXCLUDE";
  readonly estrutura_diagnostica: string;
  readonly estrutura_geral: string;
  readonly ui_mode: string;
  readonly severity_type: string;
  readonly has_formal_severity: boolean;
  readonly render_structured_interview: boolean;
  readonly diagnostic_rule: string;
  readonly clusters_sintomas: ClusterSintomas[];
  readonly criterios_condicionais: CriterioDiagnostico[];
  readonly gravidade: Gravidade;
  readonly dominios_impacto: DominioImpactoFuncional[];
  readonly comorbidades_frequentes: Comorbidade[];
  readonly especificadores: Especificador[];
  readonly subtipos: Subtipos;
  readonly hierarquia: {
    readonly presente: boolean;
    readonly notas: string;
    readonly exclui_se_diagnosticado: string[];
    readonly exclui_diagnostico_de: string[];
  };
  readonly curso_desenvolvimento: {
    readonly idade_inicio_tipica: string;
    readonly trajetoria: string;
    readonly prognostico: string;
  };
  readonly prevalencia: {
    readonly populacao_geral: string;
    readonly proporcao_sexo: string;
    readonly variacoes_culturais: string;
    readonly notas: string;
  };
  readonly perguntas_chave: PerguntaChave[];
  readonly key_questions: PerguntaChave[];
  readonly template_prontuario: TemplateProntuario;
  readonly metadados_globais: Record<string, unknown>;
  readonly instrumentos_complementares: unknown[];
}

/* ============================================================
 * 1. ESTADO DE IDENTIFICACAO DO PACIENTE
 * ============================================================ */

/**
 * Estado de identificacao basica do paciente.
 * Usado em todos os formularios DSM-5 para vincular
 * a avaliacao ao paciente.
 *
 * NOTA: Use snake_case para consistencia com o backend.
 */
export interface IdentificacaoState {
  /** Nome completo do paciente */
  readonly paciente: string;
  /** Data de nascimento no formato ISO (YYYY-MM-DD) */
  readonly data_nascimento: string;
  /** Sexo biologico ou identidade de genero */
  readonly sexo: string;
  /** Nivel de escolaridade */
  readonly escolaridade: string;
  /** Ocupacao principal */
  readonly ocupacao: string;
  /** Queixa principal ou motivo da consulta */
  readonly queixa: string;
}

/** Chaves validas dos campos de identificacao. */
export type IdentificacaoField = keyof IdentificacaoState;

/* ============================================================
 * 2. ESTADO DE SINTOMAS E CLUSTERS
 * ============================================================ */

/**
 * Valores validos para severidade de um sintoma.
 */
export type SeverityValue = "" | "leve" | "moderado" | "grave";

/**
 * Estado de um sintoma individual no formulario.
 */
export interface SintomaFormState {
  /** Indica se o sintoma esta presente (marcado) */
  readonly checked: boolean;
  /** Nivel de severidade do sintoma quando presente */
  readonly severity: SeverityValue;
}

/**
 * Mapa de sintomas dentro de um cluster.
 * Chave: ID do sintoma, Valor: estado do sintoma.
 */
export type SintomaMap = Record<string, SintomaFormState>;

/**
 * Mapa de clusters no formulario.
 * Chave: ID do cluster, Valor: mapa de sintomas.
 */
export type ClusterMap = Record<string, SintomaMap>;

/* ============================================================
 * 3. ESTADO COMPLETO DO FORMULARIO
 * ============================================================ */

/**
 * Valor de impacto funcional em um dominio.
 * 0 = sem impacto, 1 = leve, 2 = moderado, 3 = grave.
 */
export type ImpactoValue = "0" | "1" | "2" | "3";

/**
 * Estado completo do formulario DSM-5.
 * Compativel com todos os hooks polythetic e categoricos.
 */
export interface FormValues {
  /** Clusters de sintomas avaliados */
  readonly clusters: ClusterMap;
  /** Criterios condicionais marcados */
  readonly criterios_condicionais: Record<string, boolean>;
  /** Subtipo selecionado (null se nenhum ou nao aplicavel) */
  readonly subtipo_selecionado: string | null;
  /** Nivel de gravidade selecionado */
  readonly gravidade: string;
  /** Especificadores marcados */
  readonly especificadores: Record<string, boolean | string>;
  /** Impacto funcional por dominio */
  readonly impacto: Record<string, ImpactoValue>;
  /** Comorbidades selecionadas */
  readonly comorbidades_selecionadas: string[];
  /** Notas clinicas do avaliador */
  readonly notas_clinicas: {
    /** Historia clinica resumida */
    readonly historia: string;
    /** Observacoes especificas por cluster */
    readonly observacoes_clusters: Record<string, string>;
    /** Observacoes gerais */
    readonly observacoes_gerais: string;
  };
}

/** Chave dos campos de notas clinicas de nivel superior. */
export type NotasClinicasTopLevelField = "historia" | "observacoes_gerais";

/* ============================================================
 * 4. CONTADORES E REGRAS DE LIMIAR
 * ============================================================ */

/**
 * Contador de sintomas selecionados em um cluster.
 * Usado para verificar se o limiar diagnostico foi atingido.
 */
export interface ClusterCounter {
  /** Numero de sintomas selecionados no cluster */
  readonly selecionados: number;
  /** Numero minimo de sintomas necessarios para o diagnostico */
  readonly limiar: number;
  /** Indica se a ancora obrigatoria foi satisfeita (quando aplicavel) */
  readonly ancoraSatisfeita?: boolean;
}

/**
 * Contador extendido para clusters assimetricos.
 * Adiciona tipo do cluster e status de satisfacao.
 */
export interface ClusterCounterAssimetrico extends ClusterCounter {
  /** Tipo do cluster (ex: "monothetic", "polythetic") */
  readonly tipo: string;
  /** Indica se o criterio deste cluster esta satisfeito */
  readonly satisfeito: boolean;
}

/**
 * Contador extendido para clusters com ancora obrigatoria.
 */
export interface ClusterCounterAncora extends ClusterCounter {
  /** Indica se a ancora obrigatoria foi satisfeita */
  readonly ancoraSatisfeita: boolean;
}

/* ============================================================
 * 5. PAYLOAD DE SAIDA
 * ============================================================ */

/**
 * Resultado do diagnostico para um cluster especifico.
 */
export interface ClusterDiagnostico {
  /** ID do cluster */
  readonly clusterId: string;
  /** Nome do cluster */
  readonly nome: string;
  /** Sintomas marcados como presentes */
  readonly sintomasPresentes: readonly string[];
  /** Total de sintomas no cluster */
  readonly totalSintomas: number;
  /** Total selecionados */
  readonly selecionados: number;
  /** Limiar necessario */
  readonly limiar: number;
  /** Indica se o limiar foi atingido */
  readonly limiarAtingido: boolean;
}

/**
 * Payload de saida padrao para todos os hooks DSM.
 * Representa o resultado completo da avaliacao.
 */
export interface PayloadSaida {
  /** Identificador do transtorno avaliado */
  readonly transtornoId: string;
  /** Nome do transtorno */
  readonly transtornoNome: string;
  /** Data/hora da avaliacao */
  readonly dataAvaliacao: string;
  /** Clusters avaliados com resultado */
  readonly clusters: Readonly<Record<string, ClusterDiagnostico>>;
  /** Criterios condicionais atendidos */
  readonly criteriosCondicionais: Readonly<Record<string, boolean>>;
  /** Subtipo selecionado */
  readonly subtipoSelecionado: string | null;
  /** Gravidade atribuida */
  readonly gravidade: string;
  /** Especificadores aplicaveis */
  readonly especificadores: Readonly<Record<string, boolean | string>>;
  /** Impacto funcional */
  readonly impactoFuncional: Readonly<Record<string, ImpactoValue>>;
  /** Comorbidades identificadas */
  readonly comorbidades: readonly string[];
  /** Notas clinicas */
  readonly notasClinicas: FormValues["notas_clinicas"];
  /** Flag indicando se o diagnostico e formalmente atendido */
  readonly diagnosticoAtendido: boolean;
  /** Metadados adicionais especificos do hook */
  readonly metadados: Record<string, unknown>;
}

/* ============================================================
 * 6. TIPOS DE SUBTIPO
 * ============================================================ */

/**
 * Representa um subtipo de transtorno.
 * Usado principalmente em transtornos categoricos por subtipo.
 */
export interface Subtipo {
  /** Identificador unico do subtipo */
  readonly id: string;
  /** Nome do subtipo */
  readonly nome: string;
  /** Descricao do subtipo */
  readonly descricao: string;
  /** Criterios especificos deste subtipo */
  readonly criterios?: readonly string[];
}

/* ============================================================
 * 7. TIPO PARA DADOS DE IDENTIFICACAO DO MARKDOWN
 * ============================================================ */

/**
 * Dados de identificacao formatados para geracao de markdown.
 * Usado como parametro no generateMarkdown — converte snake_case
 * para camelCase.
 */
export interface MarkdownIdentificacao {
  /** Nome do paciente */
  readonly nome: string;
  /** Data de nascimento */
  readonly dataNascimento: string;
  /** Sexo */
  readonly sexo: string;
  /** Escolaridade */
  readonly escolaridade: string;
  /** Ocupacao */
  readonly ocupacao: string;
  /** Queixa principal */
  readonly queixa: string;
}

/* ============================================================
 * 8. TYPE GUARDS
 * ============================================================ */

/**
 * Valida se uma string e um valor de severidade valido.
 */
export function isSeverityValue(value: string): value is SeverityValue {
  return value === "" || value === "leve" || value === "moderado" || value === "grave";
}

/**
 * Valida se uma string e um valor de impacto valido.
 */
export function isImpactoValue(value: string): value is ImpactoValue {
  return value === "0" || value === "1" || value === "2" || value === "3";
}

/* ============================================================
 * 9. TIPOS ADICIONAIS PARA HOOK-TYPES E COMPATIBILIDADE
 * ============================================================ */

export interface ContadorCriterio {
  readonly count: number;
  readonly total: number;
  readonly satisfeito: boolean;
  readonly ancoraSatisfeita?: boolean;
}

export type ContadoresCriterios = Record<string, ContadorCriterio>;

export interface DiagnosticoPayload {
  readonly diagnosticoFirmado: boolean;
  readonly subtipoIdentificado?: string | null;
  readonly gravidadeCalculada?: string | null;
  readonly justificativa?: string | null;
  readonly [key: string]: string | number | boolean | null | undefined;
}

export type FormValuesBase = FormValues;

export interface ApresentacaoData {
  readonly regraDiagnostica?: string | null;
  readonly clusters: readonly ClusterSintomas[];
}

export interface MarkdownData {
  readonly titulo: string;
  readonly resumo: string;
  readonly content: string;
}

export interface ErrorBoundaryState {
  readonly hasError: boolean;
  readonly error: Error | null;
  readonly errorInfo: string | null;
}

export interface ConsultaState {
  id: string;
  identificacao: IdentificacaoState;
  transtorno: string | null;
  respostas: Record<string, boolean>;
  sintomasSelecionados: Record<string, Record<string, boolean>>;
  clustersAvaliados: Record<string, boolean>;
  subtipoSelecionado: string | null;
  especificadoresSelecionados: string[];
  nivelGravidade: string | null;
  impactoFuncional: Record<string, string>;
  diagnosticosDiferenciais: string[];
  notasClinicas: string;
  inicioConsulta: string;
  ultimaAtualizacao: string;
  status: "em_andamento" | "concluida" | "rascunho";
  diagnosticoPreliminar: boolean;
  pontuacoes: Record<string, number>;
}

export type EstruturaGeral =
  | "polythetic_clusters_simetricos"
  | "polythetic_clusters_assimetricos"
  | "polythetic_monocluster"
  | "polythetic_com_ancora"
  | "monothetic_puro"
  | "monothetic_tripartite"
  | "mixed_monothetic_polythetic"
  | "temporal_topografico"
  | "etiologico_externo"
  | "qualitativo_descritivo"
  | "episodico"
  | "episodico_com_sintomas"
  | "tripartite_funcional"
  | "conjuncao_temporal_complexa"
  | "categorico_por_subtipo"
  | "psicomotor_polythetic";

