/**
 * ============================================================
 * Hook Types (hook-types.ts)
 * ============================================================
 * Discriminated unions para os retornos de todos os hooks
 * de avaliacao DSM-5. Cada hook retorna um tipo especifico
 * com propriedades unicas, permitindo type narrowing via
 * type guards e discriminants.
 *
 * PRINCIPIOS:
 * - Cada hook tem um `__tipo` literal para discriminated union
 * - Propriedades comuns sao compartilhadas via interface base
 * - Type guards para acesso seguro a propriedades opcionais
 * ============================================================
 */

import type {
  ConsultaState,
  ContadoresCriterios,
  DiagnosticoPayload,
  FormValuesBase,
  ApresentacaoData,
  MarkdownData,
  IdentificacaoState,
  TranstornoDSM,
} from "./dsm-form-types";

/* ============================================================
 * 1. INTERFACE BASE (propriedades comuns a TODOS os hooks)
 * ============================================================ */

/**
 * Interface base com propriedades compartilhadas por todos os hooks.
 * Nunca usar diretamente — usar DSMHookReturn em vez disso.
 */
interface HookReturnBase {
  /** Estado de identificacao do paciente */
  identificacao: IdentificacaoState;
  /** Valores do formulario */
  formValues: FormValuesBase;
  /** Contadores de criterios (presente na maioria dos hooks) */
  contadores?: ContadoresCriterios;
  /** Contagem de criterios BE satisfeitos */
  criteriosBECount?: number;
  /** Total de criterios BE necessarios */
  criteriosBETotal?: number;
  /** Payload de diagnostico */
  payload: DiagnosticoPayload;
  /** Dados de markdown para exibicao */
  markdown: MarkdownData;
  /** Flag indicando se o diagnostico esta completo */
  diagnosticoCompleto: boolean;
}

/* ============================================================
 * 2. TIPOS ESPECIFICOS DE CADA HOOK (com discriminant)
 * ============================================================ */

/** Tipo de hook: polythetic simetricos (clusters simetricos) */
export interface PolytheticSimetricosReturn extends HookReturnBase {
  /** Discriminant literal */
  __tipo: "polythetic_simetricos";
  /** Dados de apresentacao do transtorno */
  apresentacao: ApresentacaoData;
  /** Contadores de clusters simetricos */
  contadores: ContadoresCriterios;
  /** Contagem de criterios BE */
  criteriosBECount: number;
  /** Total de criterios BE */
  criteriosBETotal: number;
  /** Toggle de sintoma */
  toggleSintoma: (clusterId: string, sintomaId: string) => void;
  /** Reset de cluster */
  resetCluster: (clusterId: string) => void;
}

/** Tipo de hook: polythetic assimetricos (clusters com pesos diferentes) */
export interface PolytheticAssimetricosReturn extends HookReturnBase {
  /** Discriminant literal */
  __tipo: "polythetic_assimetricos";
  /** Dados de apresentacao do transtorno */
  apresentacao: ApresentacaoData;
  /** Contadores de clusters assimetricos */
  contadores: ContadoresCriterios;
  /** Contagem de criterios BE */
  criteriosBECount: number;
  /** Total de criterios BE */
  criteriosBETotal: number;
  /** Clusters com seus pesos */
  pesosClusters: Record<string, number>;
  /** Toggle de sintoma */
  toggleSintoma: (clusterId: string, sintomaId: string) => void;
  /** Atualizar peso de cluster */
  setPesoCluster: (clusterId: string, peso: number) => void;
}

/** Tipo de hook: polythetic monocluster (um unico cluster) */
export interface PolytheticMonoclusterReturn extends HookReturnBase {
  /** Discriminant literal */
  __tipo: "polythetic_monocluster";
  /** Contadores do unico cluster */
  contadores: ContadoresCriterios;
  /** Threshold para diagnostico */
  threshold: number;
  /** Toggle de sintoma */
  toggleSintoma: (sintomaId: string) => void;
  /** Reset do cluster */
  resetCluster: () => void;
}

/** Tipo de hook: polythetic com ancora (requer ancora + sintomas) */
export interface PolytheticComAncoraReturn extends HookReturnBase {
  /** Discriminant literal */
  __tipo: "polythetic_com_ancora";
  /** Dados de apresentacao do transtorno */
  apresentacao: ApresentacaoData;
  /** Contadores com flag de ancora */
  contadores: ContadoresCriterios;
  /** Contagem de criterios BE */
  criteriosBECount: number;
  /** Total de criterios BE */
  criteriosBETotal: number;
  /** Toggle de sintoma */
  toggleSintoma: (clusterId: string, sintomaId: string) => void;
  /** Check de ancora */
  checkAncora: (criterioId: string, valor: boolean) => void;
}

/** Tipo de hook: monothetic puro (todos os criterios obrigatorios) */
export interface MonotheticPuroReturn extends HookReturnBase {
  /** Discriminant literal */
  __tipo: "monothetic_puro";
  /** Criterios obrigatorios com estado */
  criteriosObrigatorios: Array<{
    id: string;
    letra: string;
    descricao: string;
    satisfeito: boolean;
  }>;
  /** Toggle de criterio */
  toggleCriterio: (criterioId: string) => void;
  /** Reset de todos os criterios */
  resetCriterios: () => void;
}

/** Tipo de hook: qualitativo descritivo (sem criterios formais) */
export interface QualitativoDescritivoReturn extends HookReturnBase {
  /** Discriminant literal */
  __tipo: "qualitativo_descritivo";
  /** Avaliacao qualitativa */
  avaliacaoQualitativa: string;
  /** Observacoes clinicas */
  observacoes: string;
  /** Set avaliacao qualitativa */
  setAvaliacaoQualitativa: (valor: string) => void;
  /** Set observacoes */
  setObservacoes: (valor: string) => void;
}

/** Tipo de hook: temporal topografico (foco temporal) */
export interface TemporalTopograficoReturn extends HookReturnBase {
  /** Discriminant literal */
  __tipo: "temporal_topografico";
  /** Duracao em dias */
  duracaoDias: number;
  /** Topografia (localizacao) */
  topografia: string;
  /** Set duracao em dias */
  setDuracaoDias: (dias: number) => void;
  /** Set topografia */
  setTopografia: (topo: string) => void;
  /** Avaliar temporalidade */
  avaliarTemporalidade: () => boolean;
}

/** Tipo de hook: categorico por subtipo */
export interface CategoricoPorSubtipoReturn extends HookReturnBase {
  /** Discriminant literal */
  __tipo: "categorico_por_subtipo";
  /** Subtipos disponiveis */
  subtipos: Array<{
    id: string;
    nome: string;
    descricao: string;
    criterios: string[];
  }>;
  /** Subtipo selecionado */
  subtipoSelecionado: string | null;
  /** Selecionar subtipo */
  selecionarSubtipo: (subtipoId: string) => void;
  /** Toggle de criterio dentro do subtipo */
  toggleCriterioSubtipo: (subtipoId: string, criterioId: string) => void;
}

/** Tipo de hook: tripartite funcional */
export interface TripartiteFuncionalReturn extends HookReturnBase {
  /** Discriminant literal */
  __tipo: "tripartite_funcional";
  /** Criterios por dominio funcional */
  dominios: Record<string, {
    id: string;
    label: string;
    criterios: Array<{ id: string; texto: string; satisfeito: boolean }>;
    satisfeito: boolean;
  }>;
  /** Contadores por dominio */
  contadores: ContadoresCriterios;
  /** Toggle de criterio */
  toggleCriterio: (dominioId: string, criterioId: string) => void;
  /** Reset de dominio */
  resetDominio: (dominioId: string) => void;
}

/** Tipo de hook: psicomotor polythetic */
export interface PsicomotorPolytheticReturn extends HookReturnBase {
  /** Discriminant literal */
  __tipo: "psicomotor_polythetic";
  /** Contadores psicomotores */
  contadores: ContadoresCriterios;
  /** Sintomas observados */
  sintomasObservados: string[];
  /** Adicionar sintoma observado */
  adicionarSintoma: (sintomaId: string) => void;
  /** Remover sintoma */
  removerSintoma: (sintomaId: string) => void;
  /** Reset de sintomas */
  resetSintomas: () => void;
}

/** Tipo de hook: conjuncao temporal complexa */
export interface ConjuncaoTemporalComplexaReturn extends HookReturnBase {
  /** Discriminant literal */
  __tipo: "conjuncao_temporal_complexa";
  /** Periodos temporais avaliados */
  periodos: Array<{
    id: string;
    label: string;
    duracaoMinima: number;
    satisfeito: boolean;
  }>;
  /** Conjuncoes satisfeitas */
  contadores: ContadoresCriterios;
  /** Toggle de periodo */
  togglePeriodo: (periodoId: string) => void;
  /** Set duracao de periodo */
  setDuracaoPeriodo: (periodoId: string, duracao: number) => void;
}

/** Tipo de hook: etiologico externo (substancia/condicao medica) */
export interface EtiologicoExternoReturn extends HookReturnBase {
  /** Discriminant literal */
  __tipo: "etiologico_externo";
  /** Agente causal identificado */
  agenteCausal: string;
  /** Tipo de etiologia */
  tipoEtiologia: "substancia" | "condicao_medica" | null;
  /** Criterios de intoxicacao/dependencia */
  criteriosEtiologicos: Array<{
    id: string;
    texto: string;
    satisfeito: boolean;
  }>;
  /** Set agente causal */
  setAgenteCausal: (agente: string) => void;
  /** Set tipo de etiologia */
  setTipoEtiologia: (tipo: "substancia" | "condicao_medica") => void;
  /** Toggle de criterio etiologico */
  toggleCriterio: (criterioId: string) => void;
}

/** Tipo de hook: fallback classe (estrutura nao mapeada) */
export interface FallbackClasseReturn extends HookReturnBase {
  /** Discriminant literal */
  __tipo: "fallback_classe";
  /** Nome da classe/estrutura detectada */
  classeDetectada: string;
  /** Aviso para o usuario */
  aviso: string;
}

/** Tipo de hook: unico obrigatorio (um unico criterio obrigatorio) */
export interface UnicoObrigatorioReturn extends HookReturnBase {
  /** Discriminant literal */
  __tipo: "unico_obrigatorio";
  /** Criterio unico obrigatorio */
  criterio: {
    id: string;
    texto: string;
    satisfeito: boolean;
  };
  /** Toggle do criterio */
  toggleCriterio: () => void;
}

/* ============================================================
 * 3. DISCRIMINATED UNION DE TODOS OS HOOKS
 * ============================================================ */

/**
 * Union discriminada de TODOS os retornos possiveis de hooks DSM.
 * Usar em componentes que recebem hooks genericos (ex: ConsultaRenderer).
 */
export type DSMHookReturn =
  | PolytheticSimetricosReturn
  | PolytheticAssimetricosReturn
  | PolytheticMonoclusterReturn
  | PolytheticComAncoraReturn
  | CategoricoPorSubtipoReturn
  | QualitativoDescritivoReturn
  | TemporalTopograficoReturn
  | MonotheticPuroReturn
  | FallbackClasseReturn
  | TripartiteFuncionalReturn
  | PsicomotorPolytheticReturn
  | ConjuncaoTemporalComplexaReturn
  | EtiologicoExternoReturn
  | UnicoObrigatorioReturn;

/* ============================================================
 * 4. TYPE GUARDS
 * ============================================================ */

/** Verifica se o hook tem a propriedade `apresentacao` */
export function hasApresentacao(
  hook: DSMHookReturn
): hook is
  | PolytheticSimetricosReturn
  | PolytheticAssimetricosReturn
  | PolytheticComAncoraReturn {
  return hook.__tipo === "polythetic_simetricos" ||
    hook.__tipo === "polythetic_assimetricos" ||
    hook.__tipo === "polythetic_com_ancora";
}

/** Verifica se o hook tem a propriedade `contadores` */
export function hasContadores(
  hook: DSMHookReturn
): hook is
  | PolytheticSimetricosReturn
  | PolytheticAssimetricosReturn
  | PolytheticMonoclusterReturn
  | PolytheticComAncoraReturn
  | TripartiteFuncionalReturn
  | PsicomotorPolytheticReturn
  | ConjuncaoTemporalComplexaReturn {
  return "contadores" in hook && hook.contadores !== undefined;
}

/** Verifica se o hook tem criterios BE count/total */
export function hasCriteriosBE(
  hook: DSMHookReturn
): hook is
  | PolytheticSimetricosReturn
  | PolytheticAssimetricosReturn
  | PolytheticComAncoraReturn {
  return hook.__tipo === "polythetic_simetricos" ||
    hook.__tipo === "polythetic_assimetricos" ||
    hook.__tipo === "polythetic_com_ancora";
}

/** Verifica se o hook eh do tipo com ancora */
export function hasAncora(
  hook: DSMHookReturn
): hook is PolytheticComAncoraReturn {
  return hook.__tipo === "polythetic_com_ancora";
}

/** Verifica se o hook eh do tipo monothetic puro */
export function isMonotheticPuro(
  hook: DSMHookReturn
): hook is MonotheticPuroReturn {
  return hook.__tipo === "monothetic_puro";
}

/** Verifica se o hook eh do tipo qualitativo descritivo */
export function isQualitativoDescritivo(
  hook: DSMHookReturn
): hook is QualitativoDescritivoReturn {
  return hook.__tipo === "qualitativo_descritivo";
}

/** Verifica se o hook eh do tipo temporal topografico */
export function isTemporalTopografico(
  hook: DSMHookReturn
): hook is TemporalTopograficoReturn {
  return hook.__tipo === "temporal_topografico";
}

/** Verifica se o hook eh do tipo categorico por subtipo */
export function isCategoricoPorSubtipo(
  hook: DSMHookReturn
): hook is CategoricoPorSubtipoReturn {
  return hook.__tipo === "categorico_por_subtipo";
}

/** Verifica se o hook eh do tipo tripartite funcional */
export function isTripartiteFuncional(
  hook: DSMHookReturn
): hook is TripartiteFuncionalReturn {
  return hook.__tipo === "tripartite_funcional";
}

/** Verifica se o hook eh do tipo psicomotor polythetic */
export function isPsicomotorPolythetic(
  hook: DSMHookReturn
): hook is PsicomotorPolytheticReturn {
  return hook.__tipo === "psicomotor_polythetic";
}

/** Verifica se o hook eh do tipo conjuncao temporal complexa */
export function isConjuncaoTemporalComplexa(
  hook: DSMHookReturn
): hook is ConjuncaoTemporalComplexaReturn {
  return hook.__tipo === "conjuncao_temporal_complexa";
}

/** Verifica se o hook eh do tipo etiologico externo */
export function isEtiologicoExterno(
  hook: DSMHookReturn
): hook is EtiologicoExternoReturn {
  return hook.__tipo === "etiologico_externo";
}

/** Verifica se o hook eh fallback */
export function isFallbackClasse(
  hook: DSMHookReturn
): hook is FallbackClasseReturn {
  return hook.__tipo === "fallback_classe";
}

/** Verifica se o hook eh unico obrigatorio */
export function isUnicoObrigatorio(
  hook: DSMHookReturn
): hook is UnicoObrigatorioReturn {
  return hook.__tipo === "unico_obrigatorio";
}

/** Verifica se o hook tem funcao toggleSintoma */
export function hasToggleSintoma(
  hook: DSMHookReturn
): hook is
  | PolytheticSimetricosReturn
  | PolytheticAssimetricosReturn
  | PolytheticMonoclusterReturn
  | PolytheticComAncoraReturn {
  return (
    hook.__tipo === "polythetic_simetricos" ||
    hook.__tipo === "polythetic_assimetricos" ||
    hook.__tipo === "polythetic_monocluster" ||
    hook.__tipo === "polythetic_com_ancora"
  );
}

/** Verifica se o hook tem funcao toggleCriterio */
export function hasToggleCriterio(
  hook: DSMHookReturn
): hook is
  | MonotheticPuroReturn
  | CategoricoPorSubtipoReturn
  | TripartiteFuncionalReturn
  | EtiologicoExternoReturn
  | UnicoObrigatorioReturn {
  return (
    hook.__tipo === "monothetic_puro" ||
    hook.__tipo === "categorico_por_subtipo" ||
    hook.__tipo === "tripartite_funcional" ||
    hook.__tipo === "etiologico_externo" ||
    hook.__tipo === "unico_obrigatorio"
  );
}

/* ============================================================
 * 5. TIPO PARA MAPEAMENTO DE ESTRUTURA -> HOOK
 * ============================================================ */

/**
 * Estruturas diagnosticas que usam cada tipo de hook.
 * Usado para routing correto no DynamicConsulta.
 */
export type EstruturaHookMap = {
  polythetic_clusters_simetricos: PolytheticSimetricosReturn;
  polythetic_clusters_assimetricos: PolytheticAssimetricosReturn;
  polythetic_monocluster: PolytheticMonoclusterReturn;
  polythetic_com_ancora: PolytheticComAncoraReturn;
  monothetic_puro: MonotheticPuroReturn;
  monothetic_tripartite: TripartiteFuncionalReturn;
  mixed_monothetic_polythetic: PolytheticComAncoraReturn;
  temporal_topografico: TemporalTopograficoReturn;
  etiologico_externo: EtiologicoExternoReturn;
  qualitativo_descritivo: QualitativoDescritivoReturn;
  episodico: QualitativoDescritivoReturn;
  episodico_com_sintomas: PolytheticSimetricosReturn;
  tripartite_funcional: TripartiteFuncionalReturn;
  conjuncao_temporal_complexa: ConjuncaoTemporalComplexaReturn;
  categorico_por_subtipo: CategoricoPorSubtipoReturn;
  psicomotor_polythetic: PsicomotorPolytheticReturn;
};

/* ============================================================
 * 6. TIPOS DE PROPS COMPARTILHADOS
 * ============================================================ */

/**
 * Props compartilhadas por componentes que renderizam conteudo DSM.
 */
export interface DSMRendererProps {
  /** Dados do transtorno */
  data: TranstornoDSM;
  /** Estado atual da consulta */
  consultaState: ConsultaState;
  /** Funcao para atualizar o estado da consulta */
  setConsultaState: (state: ConsultaState) => void;
}
