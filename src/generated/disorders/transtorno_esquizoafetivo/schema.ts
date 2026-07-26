import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TranstornoEsquizoafetivoSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("transtorno_esquizoafetivo"),
  }),
}).passthrough();

export type TranstornoEsquizoafetivo = z.infer<typeof TranstornoEsquizoafetivoSchema>;
export const DisorderSchema = TranstornoEsquizoafetivoSchema;
export type Disorder = TranstornoEsquizoafetivo;
