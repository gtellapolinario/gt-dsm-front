// src/lib/dsm.ts
// DSM-5 chapter key type.

import { z } from "zod";

const ChapterKey = z.enum([
  "neuro",
  "psico",
  "bipo",
  "depr",
  "ansi",
  "toc",
  "trau",
  "diss",
  "soma",
  "alim",
  "elim",
  "sono",
  "sexo",
  "gene",
  "disr",
  "subs",
  "neco",
  "pers",
  "para",
  "outr",
  "movi",
]);
export type ChapterKey = z.infer<typeof ChapterKey>;
