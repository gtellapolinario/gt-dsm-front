import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TranstornoAlimentarRestritivoEvitativoSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("transtorno_alimentar_restritivo_evitativo"),
  }),
}).passthrough();

export type TranstornoAlimentarRestritivoEvitativo = z.infer<typeof TranstornoAlimentarRestritivoEvitativoSchema>;
export const DisorderSchema = TranstornoAlimentarRestritivoEvitativoSchema;
export type Disorder = TranstornoAlimentarRestritivoEvitativo;
