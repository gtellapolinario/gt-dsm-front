import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TranstornoCompulsaoAlimentarSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("transtorno_compulsao_alimentar"),
  }),
}).passthrough();

export type TranstornoCompulsaoAlimentar = z.infer<typeof TranstornoCompulsaoAlimentarSchema>;
export const DisorderSchema = TranstornoCompulsaoAlimentarSchema;
export type Disorder = TranstornoCompulsaoAlimentar;
