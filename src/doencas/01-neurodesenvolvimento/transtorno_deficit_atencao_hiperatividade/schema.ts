// ═══════════════════════════════════════════════════════════════════════════
// Schema Zod — Validação Runtime do TDAH
// Schema mais restritivo que o genérico, específico para a estrutura do TDAH
// ═══════════════════════════════════════════════════════════════════════════

import { z } from "zod";

export const schemaTDAH = z.object({
  $schema_version: z.literal("1.0.0"),

  meta: z.object({
    id: z.literal("transtorno_deficit_atencao_hiperatividade"),
    nome_completo: z.literal("Transtorno de Déficit de Atenção/Hiperatividade"),
    sigla: z.literal("TDAH"),
    codigo: z.object({
      dsm5: z.string(),
      cid10: z.string(),
      cid11: z.string().nullable(),
    }),
    capitulo: z.string(),
    capitulo_id: z.literal("01"),
    grupo: z.string().nullable(),
    faixa_etaria_alvo: z.literal("ambos"),
  }),

  estrutura_geral: z.literal("polythetic_clusters_simetricos"),

  clusters_sintomas: z.array(
    z.object({
      id: z.string(),
      nome: z.string(),
      tipo: z.literal("polythetic_com_limiar"),
      limiar: z.object({
        adulto: z.number().nullable(),
        pediatria: z.number().nullable(),
      }).nullable(),
      sintomas: z.array(z.object({
        id: z.string(),
        rotulo: z.string(),
        desc: z.string(),
        pergunta: z.string(),
      })),
    })
  ),

  criterios_condicionais: z.array(
    z.object({
      id: z.string(),
      letra: z.enum(["B", "C", "D", "E"]),
      rotulo: z.string(),
      tipo: z.string(),
      obrigatorio: z.literal(true),
    })
  ),

  subtipos: z.object({
    presente: z.literal(true),
    subtipos: z.array(z.object({
      id: z.string(),
      label: z.string(),
      descricao: z.string(),
    })),
  }),

  gravidade: z.object({
    tipo: z.literal("ordinal_simples"),
    niveis: z.array(z.object({
      id: z.enum(["leve", "moderada", "grave"]),
      label: z.string(),
      descritor: z.string(),
    })),
  }),
});

export type ValidatedTDAHData = z.infer<typeof schemaTDAH>;

/**
 * Validação rápida para uso em desenvolvimento.
 * Em produção, use o schema mestre do pipeline.
 */
export function validarTDAH(data: unknown): ValidatedTDAHData {
  return schemaTDAH.parse(data);
}
