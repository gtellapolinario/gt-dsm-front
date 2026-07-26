import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const AnorexiaNervosaSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("anorexia_nervosa"),
  }),
}).passthrough();

export type AnorexiaNervosa = z.infer<typeof AnorexiaNervosaSchema>;
export const DisorderSchema = AnorexiaNervosaSchema;
export type Disorder = AnorexiaNervosa;
