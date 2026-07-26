import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TranstornoEscoriacaoSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("transtorno_escoriacao"),
  }),
}).passthrough();

export type TranstornoEscoriacao = z.infer<typeof TranstornoEscoriacaoSchema>;
export const DisorderSchema = TranstornoEscoriacaoSchema;
export type Disorder = TranstornoEscoriacao;
