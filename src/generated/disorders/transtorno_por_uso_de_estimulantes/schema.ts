import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TranstornoPorUsoDeEstimulantesSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("transtorno_por_uso_de_estimulantes"),
  }),
}).passthrough();

export type TranstornoPorUsoDeEstimulantes = z.infer<typeof TranstornoPorUsoDeEstimulantesSchema>;
export const DisorderSchema = TranstornoPorUsoDeEstimulantesSchema;
export type Disorder = TranstornoPorUsoDeEstimulantes;
