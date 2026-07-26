import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TpAntissocialSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("tp_antissocial"),
  }),
}).passthrough();

export type TpAntissocial = z.infer<typeof TpAntissocialSchema>;
export const DisorderSchema = TpAntissocialSchema;
export type Disorder = TpAntissocial;
