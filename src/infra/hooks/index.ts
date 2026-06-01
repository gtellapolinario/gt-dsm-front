/**
 * ============================================================
 * Index de Hooks DSM
 * ============================================================
 * Exporta todos os 10 hooks refatorados com tipagem forte.
 * NENHUM hook neste modulo usa `any` ou `as any`.
 * ============================================================
 */

// Tipos V2B exportados do hook principal
export type {
  TranstornoDSMV2B,
  V2BCriterion,
  V2BCluster,
  V2BSeverity,
  V2BSeverityLevel,
  V2BSubtype,
  V2BSpecifier,
  TranstornoDSMUnified,
} from "./use-dsm-avaliacao";

// Type guard
export { isTranstornoV2B } from "./use-dsm-avaliacao";

// Hook 1: Qualitativo Descritivo
export { useQualitativoDescritivo } from "./use-qualitativo-descritivo";
export type { QualitativoDescritivoReturn } from "./use-qualitativo-descritivo";

// Hook 2: Temporal Topografico
export { useTemporalTopografico } from "./use-temporal-topografico";
export type { TemporalTopograficoReturn } from "./use-temporal-topografico";

// Hook 3: Monothetic Puro
export { useMonotheticPuro } from "./use-monothetic-puro";
export type { MonotheticPuroReturn } from "./use-monothetic-puro";

// Hook 4: Fallback Classe
export { useFallbackClasse } from "./use-fallback-classe";
export type { FallbackClasseReturn } from "./use-fallback-classe";

// Hook 5: Tripartite Funcional
export { useTripartiteFuncional } from "./use-tripartite-funcional";
export type { TripartiteFuncionalReturn } from "./use-tripartite-funcional";

// Hook 6: Psicomotor Polythetic
export { usePsicomotorPolythetic } from "./use-psicomotor-polythetic";
export type { PsicomotorPolytheticReturn } from "./use-psicomotor-polythetic";

// Hook 7: Conjuncao Temporal Complexa
export { useConjuncaoTemporalComplexa } from "./use-conjuncao-temporal-complexa";
export type { ConjuncaoTemporalComplexaReturn } from "./use-conjuncao-temporal-complexa";

// Hook 8: Etiologico Externo
export { useEtiologicoExterno } from "./use-etiologico-externo";
export type { EtiologicoExternoReturn } from "./use-etiologico-externo";

// Hook 9: Unico Obrigatorio
export { useUnicoObrigatorio } from "./use-unico-obrigatorio";
export type { UnicoObrigatorioReturn } from "./use-unico-obrigatorio";

// Hook 10: DSM Avaliacao (dispatcher generico)
export { useDSMAvaliacao } from "./use-dsm-avaliacao";
export type { DSMAvaliacaoReturn } from "./use-dsm-avaliacao";
