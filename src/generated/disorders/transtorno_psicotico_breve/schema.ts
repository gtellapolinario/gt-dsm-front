import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TranstornoPsicoticoBreveSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("transtorno_psicotico_breve"),
  }),
}).passthrough();

export type TranstornoPsicoticoBreve = z.infer<typeof TranstornoPsicoticoBreveSchema>;
export const DisorderSchema = TranstornoPsicoticoBreveSchema;
export type Disorder = TranstornoPsicoticoBreve;
