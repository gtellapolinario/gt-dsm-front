import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TpEsquizotipicoSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("tp_esquizotipico"),
  }),
}).passthrough();

export type TpEsquizotipico = z.infer<typeof TpEsquizotipicoSchema>;
export const DisorderSchema = TpEsquizotipicoSchema;
export type Disorder = TpEsquizotipico;
