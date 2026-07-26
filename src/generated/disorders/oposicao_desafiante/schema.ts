import { z } from "zod";
import { ClinicalDisorderSchema } from "../_shared/schema";

export const OposicaoDesafianteSchema = ClinicalDisorderSchema.extend({
  meta: ClinicalDisorderSchema.shape.meta.extend({
    id: z.literal("oposicao_desafiante"),
  }),
}).passthrough();

export type OposicaoDesafiante = z.infer<typeof OposicaoDesafianteSchema>;
export const DisorderSchema = OposicaoDesafianteSchema;
export type Disorder = OposicaoDesafiante;
