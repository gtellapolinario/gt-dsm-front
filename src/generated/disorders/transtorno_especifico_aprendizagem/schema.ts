import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TranstornoEspecificoAprendizagemSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("transtorno_especifico_aprendizagem"),
  }),
}).passthrough();

export type TranstornoEspecificoAprendizagem = z.infer<typeof TranstornoEspecificoAprendizagemSchema>;
export const DisorderSchema = TranstornoEspecificoAprendizagemSchema;
export type Disorder = TranstornoEspecificoAprendizagem;
