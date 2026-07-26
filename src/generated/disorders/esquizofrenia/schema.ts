import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const EsquizofreniaSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("esquizofrenia"),
  }),
}).passthrough();

export type Esquizofrenia = z.infer<typeof EsquizofreniaSchema>;
export const DisorderSchema = EsquizofreniaSchema;
export type Disorder = Esquizofrenia;
