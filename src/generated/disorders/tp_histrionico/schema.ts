import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TpHistrionicoSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("tp_histrionico"),
  }),
}).passthrough();

export type TpHistrionico = z.infer<typeof TpHistrionicoSchema>;
export const DisorderSchema = TpHistrionicoSchema;
export type Disorder = TpHistrionico;
