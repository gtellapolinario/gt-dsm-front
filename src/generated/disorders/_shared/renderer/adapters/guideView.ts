import type { SeverityView } from "./severityAdapter";

export interface CodeEntry {
  readonly sistema: "DSM-5-TR" | "CID-10" | "CID-11";
  readonly valor: string;
  readonly equivalencia?: string | null;
  readonly regra?: string | null;
}
export interface PrevalenceView {
  readonly estimativa: string | null;
  readonly distribuicaoSexo: string | null;
  readonly variacoesContextuais: string | null;
  readonly notaAplicador: string | null;
}
export interface CourseStep {
  readonly rotulo: "Início típico" | "Trajetória" | "Prognóstico";
  readonly valor: string;
}
export interface InstrumentView {
  readonly nome?: string;
  readonly sigla?: string;
  readonly uso?: string;
}
export interface HierarchyView {
  readonly exclui: readonly string[];
  readonly excluidoPor: readonly string[];
  readonly notas: string | null;
}

export interface GuideView {
  readonly codigos: readonly CodeEntry[];
  readonly prevalencia: PrevalenceView | null; // null se os 4 campos forem falsy
  readonly curso: readonly CourseStep[];
  readonly gravidade: SeverityView | null;
  /**
   * Sinal do EARLY-RETURN do guia, distinto de `gravidade` (que alimenta o
   * SeverityBlock). Bug-for-bug: o original usa `classificacao_dsm != null`
   * (frouxo) para decidir se o guia "tem gravidade" (baseline linha 1160),
   * mas falsy (`!g?.classificacao_dsm`, linha 1010) para o corpo do bloco.
   * Com `classificacao_dsm: ""`: temGravidade=true (guia renderiza a div
   * wrapper) e gravidade=null (bloco não renderiza) — assimetria preservada.
   */
  readonly temGravidade: boolean;
  readonly subtipos: readonly string[];
  readonly hierarquia: HierarchyView | null;
  readonly instrumentos: readonly InstrumentView[];
}
