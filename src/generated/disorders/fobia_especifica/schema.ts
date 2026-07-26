import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const FobiaEspecificaSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("fobia_especifica"),
  }),
}).passthrough();

export type FobiaEspecifica = z.infer<typeof FobiaEspecificaSchema>;
export const DisorderSchema = FobiaEspecificaSchema;
export type Disorder = FobiaEspecifica;
