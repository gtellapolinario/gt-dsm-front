import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TranstornoAnsiedadeSeparacaoSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("transtorno_ansiedade_separacao"),
  }),
}).passthrough();

export type TranstornoAnsiedadeSeparacao = z.infer<typeof TranstornoAnsiedadeSeparacaoSchema>;
export const DisorderSchema = TranstornoAnsiedadeSeparacaoSchema;
export type Disorder = TranstornoAnsiedadeSeparacao;
