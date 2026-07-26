import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TranstornoDepressivoPersistenteSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("transtorno_depressivo_persistente"),
  }),
}).passthrough();

export type TranstornoDepressivoPersistente = z.infer<typeof TranstornoDepressivoPersistenteSchema>;
export const DisorderSchema = TranstornoDepressivoPersistenteSchema;
export type Disorder = TranstornoDepressivoPersistente;
