import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const DeliriumSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("delirium"),
  }),
}).passthrough();

export type Delirium = z.infer<typeof DeliriumSchema>;
export const DisorderSchema = DeliriumSchema;
export type Disorder = Delirium;
