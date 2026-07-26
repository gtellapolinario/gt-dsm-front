/**
 * =============================================================================
 * disease-catalog.ts
 * =============================================================================
 * Metadados dos 21 capítulos DSM-5 (id, chave abreviada, nome, cor).
 *
 * NOTA: o catálogo de doenças que vivia aqui (com `estrutura: "None"`) era um
 * duplicado legado do registry e foi aposentado em 2026-07. A fonte de
 * verdade dos transtornos é o registry de payloads
 * (`@/generated/disorders` + `@/infra/generated-disorder-catalog`, que
 * oferece tree/search/lookups derivados).
 * =============================================================================
 */

/** Metadados de um capitulo DSM-5. */
export interface ChapterMeta {
  id: string;
  key: string;
  nome: string;
  hue: string;
}

/** Array ordenado dos 21 capitulos DSM-5 com chave abreviada e cor. */
export const CHAPTERS = [
  { id: "01", key: "neuro", nome: "Transtornos do Neurodesenvolvimento", hue: "#4A90D9" },
  { id: "02", key: "psico", nome: "Espectro da Esquizofrenia e Outros Transtornos Psicoticos", hue: "#8E44AD" },
  { id: "03", key: "bipo", nome: "Transtorno Bipolar e Transtornos Relacionados", hue: "#E67E22" },
  { id: "04", key: "depr", nome: "Transtornos Depressivos", hue: "#2ECC71" },
  { id: "05", key: "ansi", nome: "Transtornos de Ansiedade", hue: "#1ABC9C" },
  { id: "06", key: "toc", nome: "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados", hue: "#16A085" },
  { id: "07", key: "trau", nome: "Transtornos Relacionados a Trauma e Estressores", hue: "#C0392B" },
  { id: "08", key: "diss", nome: "Transtornos Dissociativos", hue: "#D35400" },
  { id: "09", key: "soma", nome: "Transtornos de Sintomas Somaticos e Relacionados", hue: "#27AE60" },
  { id: "10", key: "alim", nome: "Transtornos Alimentares", hue: "#F39C12" },
  { id: "11", key: "elim", nome: "Transtornos de Eliminacao", hue: "#7F8C8D" },
  { id: "12", key: "sono", nome: "Transtornos do Sono-Vigilia", hue: "#2980B9" },
  { id: "13", key: "sexo", nome: "Disfuncoes Sexuais", hue: "#E74C3C" },
  { id: "14", key: "gene", nome: "Disforia de Genero", hue: "#9B59B6" },
  { id: "15", key: "disr", nome: "Transtornos Disruptivos, do Controle de Impulsos e da Conduta", hue: "#34495E" },
  { id: "16", key: "subs", nome: "Transtornos Relacionados a Substancias e Transtornos Aditivos", hue: "#E91E63" },
  { id: "17", key: "neco", nome: "Transtornos Neurocognitivos", hue: "#607D8B" },
  { id: "18", key: "pers", nome: "Transtornos da Personalidade", hue: "#795548" },
  { id: "19", key: "para", nome: "Transtornos Parafilicos", hue: "#FF5722" },
  { id: "20", key: "outr", nome: "Outros Transtornos Mentais", hue: "#9E9E9E" },
  { id: "21", key: "movi", nome: "Transtornos do Movimento Induzidos por Medicamentos e Outros Efeitos Adversos", hue: "#607D8B" },
] as const satisfies Readonly<ChapterMeta[]>;

/** Lookup O(1) de capitulo por ID ("01".."21"). */
export const CHAPTER_BY_ID: Readonly<Record<string, ChapterMeta>> = Object.freeze(
  Object.fromEntries(CHAPTERS.map((c) => [c.id, c]))
);
