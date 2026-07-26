import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TncLeveSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("tnc_leve"),
  }),
}).passthrough();

export type TncLeve = z.infer<typeof TncLeveSchema>;
export const DisorderSchema = TncLeveSchema;
export type Disorder = TncLeve;
