// src/lib/dsm.ts
// DSM-5 chapter catalog + clinical structure types.
// Counts are the canonical "modeled disorder" numbers for the platform.

import { z } from "zod";
import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Sparkles,
  Activity,
  CloudRain,
  Wind,
  Repeat,
  Flame,
  Split,
  HeartPulse,
  Utensils,
  Droplet,
  Moon,
  Heart,
  User,
  Zap,
  Pill,
  Cpu,
  Users,
  EyeOff,
  HelpCircle,
  Waves,
} from "lucide-react";

export const ChapterKey = z.enum([
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

export const ChapterData = z.object({
  key: ChapterKey,
  title: z.string(),
  count: z.number().int().nonnegative(),
  hue: z.string(),
});
export type ChapterData = z.infer<typeof ChapterData>;

export type Chapter = ChapterData & {
  icon: LucideIcon;
};

export const CHAPTERS: readonly Chapter[] = [
  {
    key: "neuro",
    icon: Brain,
    title: "Neurodesenvolvimento",
    count: 15,
    hue: "#4A6FA5",
  },
  {
    key: "psico",
    icon: Sparkles,
    title: "Espectro Esquizofrenia e Psicóticos",
    count: 12,
    hue: "#7B5EA0",
  },
  {
    key: "bipo",
    icon: Activity,
    title: "Transtornos Bipolares",
    count: 7,
    hue: "#A05E7B",
  },
  {
    key: "depr",
    icon: CloudRain,
    title: "Transtornos Depressivos",
    count: 8,
    hue: "#5E7BA0",
  },
  {
    key: "ansi",
    icon: Wind,
    title: "Transtornos de Ansiedade",
    count: 11,
    hue: "#A07B5E",
  },
  {
    key: "toc",
    icon: Repeat,
    title: "TOC e Relacionados",
    count: 8,
    hue: "#6B8E7B",
  },
  {
    key: "trau",
    icon: Flame,
    title: "Trauma e Estressores",
    count: 7,
    hue: "#8A5A4A",
  },
  {
    key: "diss",
    icon: Split,
    title: "Dissociativos",
    count: 4,
    hue: "#6B6E8E",
  },
  {
    key: "soma",
    icon: HeartPulse,
    title: "Sintomas Somáticos",
    count: 7,
    hue: "#8E8A6B",
  },
  {
    key: "alim",
    icon: Utensils,
    title: "Alimentares",
    count: 8,
    hue: "#7B9C8A",
  },
  { key: "elim", icon: Droplet, title: "Eliminação", count: 5, hue: "#9C8A7B" },
  { key: "sono", icon: Moon, title: "Sono-Vigília", count: 14, hue: "#5A8A9E" },
  {
    key: "sexo",
    icon: Heart,
    title: "Disfunções Sexuais",
    count: 10,
    hue: "#9E5A8A",
  },
  {
    key: "gene",
    icon: User,
    title: "Disforia de Gênero",
    count: 3,
    hue: "#8E7B5A",
  },
  {
    key: "disr",
    icon: Zap,
    title: "Disruptivos, Controle de Impulsos",
    count: 9,
    hue: "#9C7B6E",
  },
  {
    key: "subs",
    icon: Pill,
    title: "Substâncias e Adições",
    count: 28,
    hue: "#6E8A6E",
  },
  {
    key: "neco",
    icon: Cpu,
    title: "Neurocognitivos",
    count: 18,
    hue: "#5E5E8E",
  },
  {
    key: "pers",
    icon: Users,
    title: "Personalidade",
    count: 12,
    hue: "#7B5A5A",
  },
  { key: "para", icon: EyeOff, title: "Parafílicos", count: 9, hue: "#6B7B9C" },
  {
    key: "outr",
    icon: HelpCircle,
    title: "Outros Mentais",
    count: 5,
    hue: "#8A8A8A",
  },
  {
    key: "movi",
    icon: Waves,
    title: "Movimentos Induzidos por Medicação",
    count: 5,
    hue: "#5A8A7B",
  },
] as const;

export const TOTAL_DISORDERS = CHAPTERS.reduce((sum, c) => sum + c.count, 0);

/** Lookup by ChapterKey */
export const CHAPTER_BY_KEY: Record<ChapterKey, Chapter> = CHAPTERS.reduce(
  (acc, c) => {
    acc[c.key] = c;
    return acc;
  },
  {} as Record<ChapterKey, Chapter>,
);

/** The 14 canonical diagnostic structures supported by the platform. */
export const Structure = z.enum([
  "polythetic-threshold",
  "monothetic-pure",
  "tripartite-functional",
  "categorical-by-subtype",
  "temporal-conjunction",
  "polythetic-multi-domain",
  "duration-based",
  "severity-graded",
  "etiology-defined",
  "developmental-trajectory",
  "episodic-recurrent",
  "specifier-driven",
  "exclusion-hierarchy",
  "phenomenological-cluster",
]);
export type Structure = z.infer<typeof Structure>;

export const STRUCTURE_LABEL: Record<Structure, string> = {
  "polythetic-threshold": "Polythetic com limiar",
  "monothetic-pure": "Monothetic puro",
  "tripartite-functional": "Tripartite funcional",
  "categorical-by-subtype": "Categórico por subtipo",
  "temporal-conjunction": "Conjunção temporal",
  "polythetic-multi-domain": "Polythetic multi-domínio",
  "duration-based": "Baseado em duração",
  "severity-graded": "Graduado por gravidade",
  "etiology-defined": "Definido por etiologia",
  "developmental-trajectory": "Trajetória do desenvolvimento",
  "episodic-recurrent": "Episódico-recorrente",
  "specifier-driven": "Conduzido por especificador",
  "exclusion-hierarchy": "Hierarquia de exclusão",
  "phenomenological-cluster": "Cluster fenomenológico",
};
