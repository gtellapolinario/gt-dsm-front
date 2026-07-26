import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TranstornoAnsiedadeDoencaSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("transtorno_ansiedade_doenca"),
  }),
}).passthrough();

export type TranstornoAnsiedadeDoenca = z.infer<typeof TranstornoAnsiedadeDoencaSchema>;
export const DisorderSchema = TranstornoAnsiedadeDoencaSchema;
export type Disorder = TranstornoAnsiedadeDoenca;
