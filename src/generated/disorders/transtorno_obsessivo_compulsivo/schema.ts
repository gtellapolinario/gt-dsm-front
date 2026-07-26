import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TranstornoObsessivoCompulsivoSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("transtorno_obsessivo_compulsivo"),
  }),
}).passthrough();

export type TranstornoObsessivoCompulsivo = z.infer<typeof TranstornoObsessivoCompulsivoSchema>;
export const DisorderSchema = TranstornoObsessivoCompulsivoSchema;
export type Disorder = TranstornoObsessivoCompulsivo;
