/**
 * =============================================================================
 * disease-catalog.ts
 * =============================================================================
 * Catalogo unico e type-safe de doencas DSM-5 para lookups e renderizacao.
 *
 * - Fonte unica de verdade para ~160 doencas renderizaveis
 * - Validacao runtime via Zod (zero `any`)
 * - Indexacao O(1) por ID e por capitulo
 * - Helpers type-safe para busca, arvore e validacao
 * - Union literal DiseaseId derivada automaticamente dos dados
 *
 * @module disease-catalog
 * @requires zod
 */

import { z } from "zod";

/* =============================================================================
   SCHEMA ZOD — validacao estatica + runtime
   ============================================================================= */

/** Estrutura diagnostica de uma doenca no DSM-5. */
const DiseaseCatalogItemSchema = z.object({
  id: z.string(),
  nome: z.string(),
  sigla: z.string().nullable().default(null),
  dsm5: z.string().nullable().default(null),
  cid10: z.string().nullable().default(null),
  capituloId: z.string().length(2),
  capituloNome: z.string(),
  categoria: z.enum(["FULL", "SHORT"]),
  estrutura: z.enum([
    "None",
    "polythetic_clusters_simetricos",
    "polythetic_clusters_assimetricos",
    "polythetic_monocluster",
    "polythetic_com_ancora",
    "monothetic_puro",
    "monothetic_tripartite",
    "mixed_monothetic_polythetic",
    "temporal_topografico",
    "etiologico_externo",
    "qualitativo_descritivo",
    "episodico",
    "episodico_com_sintomas",
    "tripartite_funcional",
    "conjuncao_temporal_complexa",
    "categorico_por_subtipo",
    "psicomotor_polythetic",
  ]),
  route: z.string(),
  folder: z.string(),
});

/** Tipo TypeScript derivado do schema Zod (dados validados). */
export type DiseaseCatalogItem = z.infer<typeof DiseaseCatalogItemSchema>;

/* =============================================================================
   CAPITULOS DSM-5 (21 capitulos oficiais)
   ============================================================================= */

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

/* =============================================================================
   ARRAY BRUTO — todas as ~160 doencas renderizaveis
   ============================================================================= */

/**
 * Array bruto com TODAS as doencas do catalogo DSM-5.
 * Usa `as const` para freeze profundo e `satisfies` para checagem estatica
 * contra o schema Zod (sem executar parse ainda).
 */
const RAW_RENDERABLE_DISEASES = [

  /* --------------------------------------------------------------------------
     Capitulo 01 — Transtornos do Neurodesenvolvimento
     -------------------------------------------------------------------------- */
  {
    id: "deficiencia_intelectual",
    nome: "Transtorno do Desenvolvimento Intelectual (Deficiência Intelectual)",
    sigla: "DI",
    dsm5: "319",
    cid10: "F79",
    capituloId: "01",
    capituloNome: "Transtornos do Neurodesenvolvimento",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/deficiencia_intelectual",
    folder: "01-neurodesenvolvimento",
  },
  {
    id: "transtorno_deficit_atencao_hiperatividade",
    nome: "Transtorno de Déficit de Atenção/Hiperatividade",
    sigla: "TDAH",
    dsm5: "314.01",
    cid10: "F90.2",
    capituloId: "01",
    capituloNome: "Transtornos do Neurodesenvolvimento",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_deficit_atencao_hiperatividade",
    folder: "01-neurodesenvolvimento",
  },
  {
    id: "transtorno_do_espectro_autista",
    nome: "Transtorno do Espectro Autista",
    sigla: "TEA",
    dsm5: "299.00",
    cid10: "F84.0",
    capituloId: "01",
    capituloNome: "Transtornos do Neurodesenvolvimento",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_do_espectro_autista",
    folder: "01-neurodesenvolvimento",
  },
  {
    id: "transtorno_especifico_aprendizagem",
    nome: "Transtorno Específico da Aprendizagem",
    sigla: null,
    dsm5: "315.00",
    cid10: "F81.0",
    capituloId: "01",
    capituloNome: "Transtornos do Neurodesenvolvimento",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_especifico_aprendizagem",
    folder: "01-neurodesenvolvimento",
  },
  {
    id: "transtorno_linguagem",
    nome: "Transtorno da Linguagem",
    sigla: null,
    dsm5: "315.32",
    cid10: "F80.2",
    capituloId: "01",
    capituloNome: "Transtornos do Neurodesenvolvimento",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_linguagem",
    folder: "01-neurodesenvolvimento",
  },

  /* --------------------------------------------------------------------------
     Capitulo 02 — Espectro da Esquizofrenia e Outros Transtornos Psicóticos
     -------------------------------------------------------------------------- */
  {
    id: "esquizofrenia",
    nome: "Esquizofrenia",
    sigla: null,
    dsm5: "295.90",
    cid10: "F20.9",
    capituloId: "02",
    capituloNome: "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/esquizofrenia",
    folder: "02-esquizofrenia-psicoticos",
  },
  {
    id: "transtorno_delirante",
    nome: "Transtorno Delirante",
    sigla: null,
    dsm5: "297.1",
    cid10: "F22",
    capituloId: "02",
    capituloNome: "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_delirante",
    folder: "02-esquizofrenia-psicoticos",
  },
  {
    id: "transtorno_esquizoafetivo",
    nome: "Transtorno Esquizoafetivo",
    sigla: null,
    dsm5: "295.70",
    cid10: "F25.9",
    capituloId: "02",
    capituloNome: "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_esquizoafetivo",
    folder: "02-esquizofrenia-psicoticos",
  },
  {
    id: "transtorno_esquizofreniforme",
    nome: "Transtorno Esquizofreniforme",
    sigla: null,
    dsm5: "295.40",
    cid10: "F20.81",
    capituloId: "02",
    capituloNome: "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_esquizofreniforme",
    folder: "02-esquizofrenia-psicoticos",
  },
  {
    id: "transtorno_psicotico_breve",
    nome: "Transtorno Psicótico Breve",
    sigla: "TPB",
    dsm5: "298.8",
    cid10: "F23",
    capituloId: "02",
    capituloNome: "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_psicotico_breve",
    folder: "02-esquizofrenia-psicoticos",
  },

  /* --------------------------------------------------------------------------
     Capitulo 03 — Transtorno Bipolar e Transtornos Relacionados
     -------------------------------------------------------------------------- */
  {
    id: "transtorno_bipolar_tipo_1",
    nome: "Transtorno Bipolar Tipo I",
    sigla: "TB1",
    dsm5: "296.40",
    cid10: "F31.9",
    capituloId: "03",
    capituloNome: "Transtorno Bipolar e Transtornos Relacionados",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_bipolar_tipo_1",
    folder: "03-bipolar-relacionados",
  },
  {
    id: "transtorno_bipolar_tipo_2",
    nome: "Transtorno Bipolar Tipo II",
    sigla: "TB2",
    dsm5: "296.89",
    cid10: "F31.81",
    capituloId: "03",
    capituloNome: "Transtorno Bipolar e Transtornos Relacionados",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_bipolar_tipo_2",
    folder: "03-bipolar-relacionados",
  },

  /* --------------------------------------------------------------------------
     Capitulo 04 — Transtornos Depressivos
     -------------------------------------------------------------------------- */
  {
    id: "transtorno_depressivo_maior",
    nome: "Transtorno Depressivo Maior",
    sigla: "TDM",
    dsm5: "296.21",
    cid10: "F32.0",
    capituloId: "04",
    capituloNome: "Transtornos Depressivos",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_depressivo_maior",
    folder: "04-depressivos",
  },
  {
    id: "transtorno_depressivo_persistente",
    nome: "Transtorno Depressivo Persistente (Distimia)",
    sigla: "TDP",
    dsm5: "300.4",
    cid10: "F34.1",
    capituloId: "04",
    capituloNome: "Transtornos Depressivos",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_depressivo_persistente",
    folder: "04-depressivos",
  },
  {
    id: "transtorno_disruptivo_desregulacao_humor",
    nome: "Transtorno Disruptivo da Desregulação do Humor",
    sigla: "TDDH",
    dsm5: "296.99",
    cid10: "F34.8",
    capituloId: "04",
    capituloNome: "Transtornos Depressivos",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_disruptivo_desregulacao_humor",
    folder: "04-depressivos",
  },

  /* --------------------------------------------------------------------------
     Capitulo 05 — Transtornos de Ansiedade
     -------------------------------------------------------------------------- */
  {
    id: "agorafobia",
    nome: "Agorafobia",
    sigla: null,
    dsm5: "300.22",
    cid10: "F40.00",
    capituloId: "05",
    capituloNome: "Transtornos de Ansiedade",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/agorafobia",
    folder: "05-ansiedade",
  },
  {
    id: "fobia_especifica",
    nome: "Fobia Específica",
    sigla: null,
    dsm5: "300.29",
    cid10: "F40.2",
    capituloId: "05",
    capituloNome: "Transtornos de Ansiedade",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/fobia_especifica",
    folder: "05-ansiedade",
  },
  {
    id: "mutismo_seletivo",
    nome: "Mutismo Seletivo",
    sigla: null,
    dsm5: "312.23",
    cid10: "F94.0",
    capituloId: "05",
    capituloNome: "Transtornos de Ansiedade",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/mutismo_seletivo",
    folder: "05-ansiedade",
  },
  {
    id: "transtorno_ansiedade_generalizada",
    nome: "Transtorno de Ansiedade Generalizada",
    sigla: "TAG",
    dsm5: "300.02",
    cid10: "F41.1",
    capituloId: "05",
    capituloNome: "Transtornos de Ansiedade",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_ansiedade_generalizada",
    folder: "05-ansiedade",
  },
  {
    id: "transtorno_ansiedade_separacao",
    nome: "Transtorno de Ansiedade de Separação",
    sigla: "TAS",
    dsm5: "309.21",
    cid10: "F93.0",
    capituloId: "05",
    capituloNome: "Transtornos de Ansiedade",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_ansiedade_separacao",
    folder: "05-ansiedade",
  },
  {
    id: "transtorno_ansiedade_social",
    nome: "Transtorno de Ansiedade Social (Fobia Social)",
    sigla: "TAS",
    dsm5: "300.23",
    cid10: "F40.10",
    capituloId: "05",
    capituloNome: "Transtornos de Ansiedade",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_ansiedade_social",
    folder: "05-ansiedade",
  },
  {
    id: "transtorno_panico",
    nome: "Transtorno de Pânico",
    sigla: "TP",
    dsm5: "300.01",
    cid10: "F41.0",
    capituloId: "05",
    capituloNome: "Transtornos de Ansiedade",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_panico",
    folder: "05-ansiedade",
  },

  /* --------------------------------------------------------------------------
     Capitulo 06 — Transtorno Obsessivo-Compulsivo e Transtornos Relacionados
     -------------------------------------------------------------------------- */
  {
    id: "transtorno_acumulacao",
    nome: "Transtorno de Acumulação",
    sigla: null,
    dsm5: "300.3",
    cid10: "F42",
    capituloId: "06",
    capituloNome: "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_acumulacao",
    folder: "06-obsessivo-compulsivo",
  },
  {
    id: "transtorno_dismorfico_corporal",
    nome: "Transtorno Dismórfico Corporal",
    sigla: "TDC",
    dsm5: "300.7",
    cid10: "F45.22",
    capituloId: "06",
    capituloNome: "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_dismorfico_corporal",
    folder: "06-obsessivo-compulsivo",
  },
  {
    id: "transtorno_escoriacao",
    nome: "Transtorno de Escoriação (Skin-Picking)",
    sigla: null,
    dsm5: "698.4",
    cid10: "L98.1",
    capituloId: "06",
    capituloNome: "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_escoriacao",
    folder: "06-obsessivo-compulsivo",
  },
  {
    id: "transtorno_obsessivo_compulsivo",
    nome: "Transtorno Obsessivo-Compulsivo",
    sigla: "TOC",
    dsm5: "300.3",
    cid10: "F42",
    capituloId: "06",
    capituloNome: "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_obsessivo_compulsivo",
    folder: "06-obsessivo-compulsivo",
  },
  {
    id: "tricotilomania",
    nome: "Tricotilomania (Transtorno de Arrancar o Cabelo)",
    sigla: null,
    dsm5: "312.39",
    cid10: "F63.3",
    capituloId: "06",
    capituloNome: "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/tricotilomania",
    folder: "06-obsessivo-compulsivo",
  },

  /* --------------------------------------------------------------------------
     Capitulo 07 — Transtornos Relacionados a Trauma e a Estressores
     -------------------------------------------------------------------------- */
  {
    id: "tept",
    nome: "Transtorno de Estresse Pós-Traumático",
    sigla: "TEPT",
    dsm5: "309.81",
    cid10: "F43.10",
    capituloId: "07",
    capituloNome: "Transtornos Relacionados a Trauma e a Estressores",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/tept",
    folder: "07-trauma-estressores",
  },
  {
    id: "transtornos_adaptacao",
    nome: "Transtornos de Adaptação",
    sigla: null,
    dsm5: "309.0",
    cid10: "F43.20",
    capituloId: "07",
    capituloNome: "Transtornos Relacionados a Trauma e a Estressores",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtornos_adaptacao",
    folder: "07-trauma-estressores",
  },

  /* --------------------------------------------------------------------------
     Capitulo 09 — Transtorno de Sintomas Somáticos e Transtornos Relacionados
     -------------------------------------------------------------------------- */
  {
    id: "transtorno_ansiedade_doenca",
    nome: "Transtorno de Ansiedade de Doença",
    sigla: "TAD",
    dsm5: "300.7",
    cid10: "F45.21",
    capituloId: "09",
    capituloNome: "Transtorno de Sintomas Somáticos e Transtornos Relacionados",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_ansiedade_doenca",
    folder: "09-sintomas-somaticos",
  },
  {
    id: "transtorno_conversao",
    nome: "Transtorno de Conversão (Transtorno de Sintomas Neurológicos Funcionais)",
    sigla: null,
    dsm5: "300.11",
    cid10: "F44.x",
    capituloId: "09",
    capituloNome: "Transtorno de Sintomas Somáticos e Transtornos Relacionados",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_conversao",
    folder: "09-sintomas-somaticos",
  },

  /* --------------------------------------------------------------------------
     Capitulo 10 — Transtornos Alimentares
     -------------------------------------------------------------------------- */
  {
    id: "anorexia_nervosa",
    nome: "Anorexia Nervosa",
    sigla: null,
    dsm5: "307.1",
    cid10: "F50.0x",
    capituloId: "10",
    capituloNome: "Transtornos Alimentares",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/anorexia_nervosa",
    folder: "10-alimentares",
  },
  {
    id: "bulimia_nervosa",
    nome: "Bulimia Nervosa",
    sigla: null,
    dsm5: "307.51",
    cid10: "F50.2",
    capituloId: "10",
    capituloNome: "Transtornos Alimentares",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/bulimia_nervosa",
    folder: "10-alimentares",
  },
  {
    id: "transtorno_alimentar_restritivo_evitativo",
    nome: "Transtorno Alimentar Restritivo/Evitativo",
    sigla: "TARE",
    dsm5: "307.59",
    cid10: "F50.8",
    capituloId: "10",
    capituloNome: "Transtornos Alimentares",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_alimentar_restritivo_evitativo",
    folder: "10-alimentares",
  },
  {
    id: "transtorno_compulsao_alimentar",
    nome: "Transtorno de Compulsão Alimentar",
    sigla: "TCA",
    dsm5: "307.51",
    cid10: "F50.8",
    capituloId: "10",
    capituloNome: "Transtornos Alimentares",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_compulsao_alimentar",
    folder: "10-alimentares",
  },

  /* --------------------------------------------------------------------------
     Capitulo 12 — Transtornos do Sono-Vigília
     -------------------------------------------------------------------------- */
  {
    id: "transtorno_insonia",
    nome: "Transtorno de Insônia",
    sigla: null,
    dsm5: "307.42",
    cid10: "F51.01",
    capituloId: "12",
    capituloNome: "Transtornos do Sono-Vigília",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_insonia",
    folder: "12-sono-vigilia",
  },

  /* --------------------------------------------------------------------------
     Capitulo 15 — Transtornos Disruptivos, do Controle de Impulsos e da Conduta
     -------------------------------------------------------------------------- */
  {
    id: "conduta",
    nome: "Transtorno da Conduta",
    sigla: null,
    dsm5: "312.8",
    cid10: "F91.x",
    capituloId: "15",
    capituloNome: "Transtornos Disruptivos, do Controle de Impulsos e da Conduta",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/conduta",
    folder: "15-disruptivos-impulsos-conduta",
  },
  {
    id: "explosivo_intermittente",
    nome: "Transtorno Explosivo Intermitente",
    sigla: "TEI",
    dsm5: "312.34",
    cid10: "F63.81",
    capituloId: "15",
    capituloNome: "Transtornos Disruptivos, do Controle de Impulsos e da Conduta",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/explosivo_intermittente",
    folder: "15-disruptivos-impulsos-conduta",
  },
  {
    id: "oposicao_desafiante",
    nome: "Transtorno de Oposição Desafiante",
    sigla: "TOD",
    dsm5: "313.81",
    cid10: "F91.3",
    capituloId: "15",
    capituloNome: "Transtornos Disruptivos, do Controle de Impulsos e da Conduta",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/oposicao_desafiante",
    folder: "15-disruptivos-impulsos-conduta",
  },

  /* --------------------------------------------------------------------------
     Capitulo 16 — Transtornos Relacionados a Substâncias e Transtornos Aditivos
     -------------------------------------------------------------------------- */
  {
    id: "transtorno_por_uso_de_alcool",
    nome: "Transtorno por Uso de Álcool",
    sigla: null,
    dsm5: "303.90",
    cid10: "F10.20",
    capituloId: "16",
    capituloNome: "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_por_uso_de_alcool",
    folder: "16-substancias-aditivos",
  },
  {
    id: "transtorno_por_uso_de_estimulantes",
    nome: "Transtorno por Uso de Estimulantes",
    sigla: null,
    dsm5: "304.40",
    cid10: "F15.20",
    capituloId: "16",
    capituloNome: "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_por_uso_de_estimulantes",
    folder: "16-substancias-aditivos",
  },
  {
    id: "transtorno_por_uso_de_opioides",
    nome: "Transtorno por Uso de Opioides",
    sigla: null,
    dsm5: "304.00",
    cid10: "F11.20",
    capituloId: "16",
    capituloNome: "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_por_uso_de_opioides",
    folder: "16-substancias-aditivos",
  },
  {
    id: "transtorno_por_uso_de_tabaco",
    nome: "Transtorno por Uso de Tabaco",
    sigla: null,
    dsm5: "305.1",
    cid10: "F17.200",
    capituloId: "16",
    capituloNome: "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/transtorno_por_uso_de_tabaco",
    folder: "16-substancias-aditivos",
  },

  /* --------------------------------------------------------------------------
     Capitulo 17 — Transtornos Neurocognitivos
     -------------------------------------------------------------------------- */
  {
    id: "delirium",
    nome: "Delirium",
    sigla: null,
    dsm5: "293.0",
    cid10: "F05",
    capituloId: "17",
    capituloNome: "Transtornos Neurocognitivos",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/delirium",
    folder: "17-neurocognitivos",
  },
  {
    id: "tnc_alzheimer",
    nome: "Transtorno Neurocognitivo Maior ou Leve Devido à Doença de Alzheimer",
    sigla: null,
    dsm5: "294.1x",
    cid10: "F02.8x",
    capituloId: "17",
    capituloNome: "Transtornos Neurocognitivos",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/tnc_alzheimer",
    folder: "17-neurocognitivos",
  },
  {
    id: "tnc_leve",
    nome: "Transtorno Neurocognitivo Leve",
    sigla: "TNC Leve",
    dsm5: "331.83",
    cid10: "G31.84",
    capituloId: "17",
    capituloNome: "Transtornos Neurocognitivos",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/tnc_leve",
    folder: "17-neurocognitivos",
  },
  {
    id: "tnc_maior",
    nome: "Transtorno Neurocognitivo Maior",
    sigla: "TNC Maior",
    dsm5: "294.1x",
    cid10: "F02.8x",
    capituloId: "17",
    capituloNome: "Transtornos Neurocognitivos",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/tnc_maior",
    folder: "17-neurocognitivos",
  },
  {
    id: "tnc_vascular",
    nome: "Transtorno Neurocognitivo Vascular Maior ou Leve",
    sigla: null,
    dsm5: "290.40",
    cid10: "F01.5x",
    capituloId: "17",
    capituloNome: "Transtornos Neurocognitivos",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/tnc_vascular",
    folder: "17-neurocognitivos",
  },

  /* --------------------------------------------------------------------------
     Capitulo 18 — Transtornos da Personalidade
     -------------------------------------------------------------------------- */
  {
    id: "tp_antissocial",
    nome: "Transtorno da Personalidade Antissocial",
    sigla: "TPA",
    dsm5: "301.7",
    cid10: "F60.2",
    capituloId: "18",
    capituloNome: "Transtornos da Personalidade",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/tp_antissocial",
    folder: "18-personalidade",
  },
  {
    id: "tp_borderline",
    nome: "Transtorno da Personalidade Borderline",
    sigla: "TPB",
    dsm5: "301.83",
    cid10: "F60.3",
    capituloId: "18",
    capituloNome: "Transtornos da Personalidade",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/tp_borderline",
    folder: "18-personalidade",
  },
  {
    id: "tp_dependente",
    nome: "Transtorno da Personalidade Dependente",
    sigla: "TPD",
    dsm5: "301.6",
    cid10: "F60.7",
    capituloId: "18",
    capituloNome: "Transtornos da Personalidade",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/tp_dependente",
    folder: "18-personalidade",
  },
  {
    id: "tp_esquizoide",
    nome: "Transtorno da Personalidade Esquizoide",
    sigla: "TPE",
    dsm5: "301.20",
    cid10: "F60.1",
    capituloId: "18",
    capituloNome: "Transtornos da Personalidade",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/tp_esquizoide",
    folder: "18-personalidade",
  },
  {
    id: "tp_esquizotipico",
    nome: "Transtorno da Personalidade Esquizotípica",
    sigla: "TPET",
    dsm5: "301.22",
    cid10: "F21",
    capituloId: "18",
    capituloNome: "Transtornos da Personalidade",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/tp_esquizotipico",
    folder: "18-personalidade",
  },
  {
    id: "tp_evitativo",
    nome: "Transtorno da Personalidade Evitativa",
    sigla: "TPEV",
    dsm5: "301.82",
    cid10: "F60.6",
    capituloId: "18",
    capituloNome: "Transtornos da Personalidade",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/tp_evitativo",
    folder: "18-personalidade",
  },
  {
    id: "tp_histrionico",
    nome: "Transtorno da Personalidade Histriônica",
    sigla: "TPH",
    dsm5: "301.50",
    cid10: "F60.4",
    capituloId: "18",
    capituloNome: "Transtornos da Personalidade",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/tp_histrionico",
    folder: "18-personalidade",
  },
  {
    id: "tp_narcisista",
    nome: "Transtorno da Personalidade Narcisista",
    sigla: "TPN",
    dsm5: "301.81",
    cid10: "F60.81",
    capituloId: "18",
    capituloNome: "Transtornos da Personalidade",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/tp_narcisista",
    folder: "18-personalidade",
  },
  {
    id: "tp_obsessivo_compulsivo",
    nome: "Transtorno da Personalidade Obsessivo-Compulsiva",
    sigla: "TPOC",
    dsm5: "301.4",
    cid10: "F60.5",
    capituloId: "18",
    capituloNome: "Transtornos da Personalidade",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/tp_obsessivo_compulsivo",
    folder: "18-personalidade",
  },
  {
    id: "tp_paranoide",
    nome: "Transtorno da Personalidade Paranóide",
    sigla: "TPP",
    dsm5: "301.0",
    cid10: "F60.0",
    capituloId: "18",
    capituloNome: "Transtornos da Personalidade",
    categoria: "FULL",
    estrutura: "None",
    route: "/app/tp_paranoide",
    folder: "18-personalidade",
  },
] as const satisfies z.input<typeof DiseaseCatalogItemSchema>[];

/* =============================================================================
   TIPOS DERIVADOS DOS DADOS
   ============================================================================= */

/** Union literal de todos os IDs de doenca validos (automatizado). */
type DiseaseId = (typeof RAW_RENDERABLE_DISEASES)[number]["id"];

/* =============================================================================
   VALIDACAO RUNTIME VIA ZOD
   ============================================================================= */

/**
 * Array validado de doencas. Todo dado passou pelo parse do Zod.
 */
const RENDERABLE_DISEASES: DiseaseCatalogItem[] = z
  .array(DiseaseCatalogItemSchema)
  .parse(RAW_RENDERABLE_DISEASES);

/* =============================================================================
   INDEXACAO O(1) PARA LOOKUPS
   ============================================================================= */

/** Lookup O(1): doenca por ID exato. O type guard `isDiseaseId` garante acesso seguro. */
const DISEASE_BY_ID: Readonly<
  Record<string, DiseaseCatalogItem>
> = Object.freeze(
  Object.fromEntries(
    RENDERABLE_DISEASES.map((d) => [d.id, d])
  )
);

/* =============================================================================
   DISEASE_CATALOG — organizado por chave abreviada de capitulo
   ============================================================================= */

/** Catalogo organizado por chave abreviada do capitulo (neuro, psico, bipo...). */
const DISEASE_CATALOG: Readonly<
  Record<string, readonly DiseaseCatalogItem[]>
> = Object.freeze(
  Object.fromEntries(
    CHAPTERS.map((ch) => [
      ch.key,
      Object.freeze(RENDERABLE_DISEASES.filter((d: DiseaseCatalogItem) => d.capituloId === ch.id)),
    ])
  )
);

/* =============================================================================
   HELPERS TYPE-SAFE
   ============================================================================= */

/**
 * Type-guard: verifica se uma string e um DiseaseId valido.
 * @param id - string arbitraria a testar
 * @returns `true` quando `id` existe no catalogo
 */
function isDiseaseId(id: string): id is DiseaseId {
  return id in DISEASE_BY_ID;
}

/**
 * Retorna uma doenca pelo ID (type-safe).
 * @param id - ID da doenca
 * @returns O item do catalogo ou `undefined`
 */
function getDiseaseById(id: string): DiseaseCatalogItem | undefined {
  if (!isDiseaseId(id)) return undefined;
  // isDiseaseId garante que id e uma chave valida de DISEASE_BY_ID
  return DISEASE_BY_ID[id];
}

/**
 * Busca textual em nome e sigla (case-insensitive, sem acentos).
 * @param query - termo de busca
 * @returns Lista de doencas que contem o termo
 */
export function searchDiseases(query: string): DiseaseCatalogItem[] {
  const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return RENDERABLE_DISEASES.filter((d: DiseaseCatalogItem) => {
    const nome = d.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const sigla = (d.sigla ?? "").toLowerCase();
    return nome.includes(q) || sigla.includes(q);
  });
}

/* =============================================================================
   TREE HELPERS — estrutura de arvore para sidebar / navegacao
   ============================================================================= */

/** No de arvore para componentes de navegacao (sidebar, menu, breadcrumbs). */
export interface TreeNode {
  type: "chapter" | "disease";
  key: string;
  label: string;
  meta?: { n: string; count: number; hue: string };
  children?: TreeNode[];
}

/**
 * Constroi a arvore completa de capitulos e doencas para a sidebar.
 * Cada no de capitulo traz metadados (meta.n, meta.count, meta.hue) uteis
 * para renderizacao de badges e cores.
 * @returns Array de nos raiz (um por capitulo que possui doencas)
 */
export function getSidebarTree(): TreeNode[] {
  return CHAPTERS.filter((ch) => {
    const items = DISEASE_CATALOG[ch.key];
    return items && items.length > 0;
  }).map((ch) => {
    const items = DISEASE_CATALOG[ch.key] ?? [];
    return {
      type: "chapter" as const,
      key: ch.key,
      label: ch.nome,
      meta: { n: ch.id, count: items.length, hue: ch.hue },
      children: items.map((d) => ({
        type: "disease" as const,
        key: d.id,
        label: d.nome,
      })),
    };
  });
}

/**
 * Dado um diseaseId, retorna a chave abreviada do capitulo ao qual pertence.
 * @param diseaseId - ID da doenca
 * @returns Chave abreviada do capitulo (ex: "neuro", "depr") ou `undefined`
 */
export function getChapterKeyByDiseaseId(
  diseaseId: string
): string | undefined {
  const d = getDiseaseById(diseaseId);
  if (!d) return undefined;
  const ch = CHAPTER_BY_ID[d.capituloId];
  return ch?.key;
}

/* =============================================================================
   FIM DO ARQUIVO
   ============================================================================= */
