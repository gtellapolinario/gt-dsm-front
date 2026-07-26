import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TranstornoPorUsoDeOpioidesSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("transtorno_por_uso_de_opioides"),
  }),
}).passthrough();

export type TranstornoPorUsoDeOpioides = z.infer<typeof TranstornoPorUsoDeOpioidesSchema>;
export const DisorderSchema = TranstornoPorUsoDeOpioidesSchema;
export type Disorder = TranstornoPorUsoDeOpioides;
