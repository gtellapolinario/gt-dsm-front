/**
 * ============================================================
 * DSM-5 Centralized Schemas (dsm-schemas.ts)
 * ============================================================
 * Schemas Zod compartilhados do sistema DSM-5.
 * ============================================================
 */

import { z } from "zod";

/**
 * As 16 estruturas diagnosticas validas no DSM-5.
 * Representam os padroes de criterios usados para cada transtorno.
 */
const ESTRUTURAS_DIAGNOSTICAS = [
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
const EstruturaDiagnosticaSchema = z.enum(ESTRUTURAS_DIAGNOSTICAS);

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
