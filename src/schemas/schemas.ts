// src/lib/schemas.ts
// Zod schemas for clinical entities. Mirror PocketBase collections.

import { z } from "zod";
import { ChapterKey, Structure } from "../lib/dsm";

// ─── Patient ──────────────────────────────────────────────────
export const Patient = z.object({
  id: z.string(),                       // pocketbase id
  fullName: z.string().min(2),
  birthDate: z.iso.date(),
  sex: z.enum(["F", "M", "outro", "nao-informado"]),
  education: z.string().optional(),
  occupation: z.string().optional(),
  origin: z.string().optional(),        // naturalidade
  insurance: z.string().optional(),
  referredBy: z.string().optional(),
  status: z.enum(["em-acompanhamento", "em-avaliacao", "alta", "encaminhado"]),
  notes: z.string().optional(),
  created: z.iso.datetime(),
  updated: z.iso.datetime(),
});
export type Patient = z.infer<typeof Patient>;

// ─── Disorder (catalog) ──────────────────────────────────────
export const Disorder = z.object({
  id: z.string(),
  code: z.string(),                     // F90, F32.0, etc.
  dsm5Code: z.string(),                 // 314.00, etc.
  name: z.string(),
  shortName: z.string().optional(),     // "TDAH"
  chapter: ChapterKey,
  structure: Structure,
});
export type Disorder = z.infer<typeof Disorder>;

// ─── Criterion ───────────────────────────────────────────────
export const Criterion = z.object({
  id: z.string(),                       // "A1.1", "B", etc.
  domain: z.string(),                   // "A1", "B"
  label: z.string(),
  fullText: z.string(),                 // DSM verbatim
});
export type Criterion = z.infer<typeof Criterion>;

// ─── Assessment ──────────────────────────────────────────────
export const CriterionResponse = z.object({
  criterionId: z.string(),
  checked: z.boolean(),
  note: z.string().optional(),          // clinician free text
});
export type CriterionResponse = z.infer<typeof CriterionResponse>;

export const AssessmentState = z.enum([
  "em-andamento", "finalizada", "descartada", "provisoria",
]);
export type AssessmentState = z.infer<typeof AssessmentState>;

export const Assessment = z.object({
  id: z.string(),
  patientId: z.string(),
  disorderId: z.string(),
  state: AssessmentState,
  responses: z.array(CriterionResponse),
  inferredSubtype: z.string().optional(),
  inferredCode: z.string().optional(),
  functionalImpact: z.record(z.string(), z.number().int().min(0).max(4)).optional(),
  freeText: z.object({
    chiefComplaint: z.string().optional(),
    courseAndDevelopment: z.string().optional(),
    notes: z.string().optional(),
  }).optional(),
  reportMarkdown: z.string().optional(),
  sessionNumber: z.number().int().positive().optional(),
  lastEditedAt: z.iso.datetime(),
  created: z.iso.datetime(),
  updated: z.iso.datetime(),
});
export type Assessment = z.infer<typeof Assessment>;

// ─── Threshold rule (TDAH-style) ─────────────────────────────
export const ThresholdRule = z.object({
  domain: z.string(),                   // "A1"
  adult: z.number().int().positive(),
  child: z.number().int().positive(),
  total: z.number().int().positive(),
});
export type ThresholdRule = z.infer<typeof ThresholdRule>;
