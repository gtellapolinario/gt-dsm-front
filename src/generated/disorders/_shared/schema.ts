import { z } from "zod";

export const UnknownRecordSchema = z.record(z.string(), z.unknown());
export const NullableStringSchema = z.string().nullable().optional();

export const CodigoSchema = z
  .object({
    dsm5: z.string().nullable().optional(),
    cid10: z.string().nullable().optional(),
    cid11: z.string().nullable().optional(),
  })
  .passthrough();

export const MetaSchema = z
  .object({
    id: z.string().min(1),
    nome_completo: z.string().min(1).optional(),
    nome: z.string().min(1).optional(),
    sigla: NullableStringSchema,
    codigo: CodigoSchema.optional(),
    capitulo: NullableStringSchema,
    capitulo_id: NullableStringSchema,
    grupo: NullableStringSchema,
    faixa_etaria_alvo: NullableStringSchema,
  })
  .passthrough();

export const SintomaSchema = z
  .object({
    id: z.string().min(1),
    rotulo: z.string().optional(),
    texto: z.string().optional(),
    desc: z.string().optional(),
    descricao: z.string().optional(),
    pergunta: z.string().optional(),
  })
  .passthrough();

export const ClusterSintomasSchema = z
  .object({
    id: z.string().min(1),
    nome: z.string().optional(),
    descricao: z.string().optional(),
    tipo: z.string().optional(),
    limiar: z.unknown().optional(),
    sintomas: z.array(SintomaSchema).default([]),
  })
  .passthrough();

export const CriterioCondicionalSchema = z
  .object({
    id: z.string().min(1),
    letra: z.string().optional(),
    rotulo: z.string().optional(),
    tipo: z.string().optional(),
    obrigatorio: z.boolean().optional(),
    descricao_completa: z.string().optional(),
  })
  .passthrough();

export const SubtipoSchema = z
  .object({
    id: z.string().min(1),
    label: z.string().optional(),
    nome: z.string().optional(),
    descricao: z.string().optional(),
  })
  .passthrough();

export const EspecificadorSchema = z
  .object({
    id: z.string().min(1),
    label: z.string().optional(),
    nome: z.string().optional(),
    descricao: z.string().optional(),
  })
  .passthrough();

export const NivelGravidadeSchema = z
  .object({
    id: z.string().min(1),
    label: z.string().optional(),
    descritor: z.string().optional(),
    descricao: z.string().optional(),
  })
  .passthrough();

export const GravidadeSchema = z
  .object({
    tipo: z.string().optional(),
    presente: z.boolean().optional(),
    niveis: z.array(NivelGravidadeSchema).optional(),
    dominios: z.array(UnknownRecordSchema).optional(),
  })
  .passthrough();

export const HierarquiaSchema = UnknownRecordSchema;
export const DiagnosticoDiferencialSchema = z.union([z.array(UnknownRecordSchema), UnknownRecordSchema]);
export const PrevalenciaSchema = UnknownRecordSchema;
export const CursoDesenvolvimentoSchema = UnknownRecordSchema;
export const TemplateProntuarioSchema = UnknownRecordSchema;

export const ClinicalDisorderSchema = z
  .object({
    $schema_version: z.string().optional(),
    meta: MetaSchema,
    estrutura_geral: z.string().optional(),
    clusters_sintomas: z.array(ClusterSintomasSchema).optional(),
    criterios_condicionais: z.array(CriterioCondicionalSchema).optional(),
    subtipos: z.union([z.array(SubtipoSchema), UnknownRecordSchema]).optional(),
    especificadores: z.union([z.array(EspecificadorSchema), UnknownRecordSchema]).optional(),
    gravidade: GravidadeSchema.optional(),
    hierarquia: HierarquiaSchema.optional(),
    dominios_impacto: z.array(UnknownRecordSchema).optional(),
    diagnostico_diferencial: DiagnosticoDiferencialSchema.optional(),
    comorbidades_frequentes: z.array(UnknownRecordSchema).optional(),
    instrumentos_complementares: z.array(UnknownRecordSchema).optional(),
    prevalencia: PrevalenciaSchema.optional(),
    curso_desenvolvimento: CursoDesenvolvimentoSchema.optional(),
    template_prontuario: TemplateProntuarioSchema.optional(),
    metadados_globais: UnknownRecordSchema.optional(),
    super_enrichment: UnknownRecordSchema.optional(),
    master_metadata: UnknownRecordSchema.optional(),
    inventory_notes: UnknownRecordSchema.optional(),
  })
  .passthrough();

export type ClinicalDisorder = z.infer<typeof ClinicalDisorderSchema>;
