import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TpParanoideSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("tp_paranoide"),
  }),
}).passthrough();

export type TpParanoide = z.infer<typeof TpParanoideSchema>;
export const DisorderSchema = TpParanoideSchema;
export type Disorder = TpParanoide;
