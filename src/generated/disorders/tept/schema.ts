import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TeptSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("tept"),
  }),
}).passthrough();

export type Tept = z.infer<typeof TeptSchema>;
export const DisorderSchema = TeptSchema;
export type Disorder = Tept;
