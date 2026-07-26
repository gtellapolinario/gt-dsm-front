import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TranstornoDepressivoMaiorSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("transtorno_depressivo_maior"),
  }),
}).passthrough();

export type TranstornoDepressivoMaior = z.infer<typeof TranstornoDepressivoMaiorSchema>;
export const DisorderSchema = TranstornoDepressivoMaiorSchema;
export type Disorder = TranstornoDepressivoMaior;
