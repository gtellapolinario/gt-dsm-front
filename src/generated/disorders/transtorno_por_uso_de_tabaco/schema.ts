import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TranstornoPorUsoDeTabacoSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("transtorno_por_uso_de_tabaco"),
  }),
}).passthrough();

export type TranstornoPorUsoDeTabaco = z.infer<typeof TranstornoPorUsoDeTabacoSchema>;
export const DisorderSchema = TranstornoPorUsoDeTabacoSchema;
export type Disorder = TranstornoPorUsoDeTabaco;
