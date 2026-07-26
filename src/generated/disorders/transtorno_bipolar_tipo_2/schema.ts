import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const TranstornoBipolarTipo2Schema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("transtorno_bipolar_tipo_2"),
  }),
}).passthrough();

export type TranstornoBipolarTipo2 = z.infer<typeof TranstornoBipolarTipo2Schema>;
export const DisorderSchema = TranstornoBipolarTipo2Schema;
export type Disorder = TranstornoBipolarTipo2;
