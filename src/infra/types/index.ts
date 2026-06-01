/**
 * ============================================================
 * DSM Types Index (types/index.ts)
 * ============================================================
 * Ponto unico de exportacao para todos os tipos DSM.
 * Todas as interfaces sao definidas localmente (schema-free)
 * para evitar dependencias circulares e problemas de
 * compatibilidade com versoes do Zod.
 */

// Tipos principais do Transtorno (interfaces locais)
export type {
  TranstornoDSM,
  TranstornoMeta,
  CodigoClassificacao,
  ClusterSintomas,
  SintomaDSM,
  SintomaDSM as Sintoma,
  CriterioDiagnostico,
  Especificador,
  Comorbidade,
  DiagnosticoDiferencial,
  DominioImpactoFuncional,
  DominioImpactoFuncional as DominioImpacto,
  Gravidade,
  NivelGravidade,
  DominioGravidade,
  Subtipos,
} from "./dsm-form-types";

// Tipos do formulario
export type {
  ConsultaState,
  ErrorBoundaryState,
  IdentificacaoState,
  IdentificacaoField,
  SeverityValue,
  SintomaFormState,
  SintomaMap,
  ClusterMap,
  ImpactoValue,
  FormValues,
  NotasClinicasTopLevelField,
  ClusterCounter,
  ClusterCounterAssimetrico,
  ClusterCounterAncora,
  ClusterDiagnostico,
  PayloadSaida,
  Subtipo,
  MarkdownIdentificacao,
  EstruturaGeral,
} from "./dsm-form-types";

// Funcoes utilitarias
export {
  isSeverityValue,
  isImpactoValue,
} from "./dsm-form-types";
