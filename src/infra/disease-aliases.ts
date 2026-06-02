import { isDiseaseRegistered } from "@/infra/disease-registry";

/**
 * Aliases de compatibilidade para IDs legados do catálogo/mapa de conhecimento.
 * Mantemos somente aliases que resolvem para módulos canônicos gerados em
 * `src/generated/disorders` para evitar navegação para telas inexistentes.
 */
const diseaseAliases = {
  transtorno_da_linguagem: "transtorno_linguagem",
  deficit_de_atencao_hiperatividade: "transtorno_deficit_atencao_hiperatividade",
  espectro_autista: "transtorno_do_espectro_autista",
  transtorno_especifico_da_aprendizagem: "transtorno_especifico_aprendizagem",

  transtorno_psicótico_breve: "transtorno_psicotico_breve",
  transtorno_esquizoafe_tivo: "transtorno_esquizoafetivo",

  transtorno_bipolar_tipo_i: "transtorno_bipolar_tipo_1",
  transtorno_bipolar_tipo_ii: "transtorno_bipolar_tipo_2",

  transtorno_disruptivo_da_desregulação_do_humor_tddc: "transtorno_disruptivo_desregulacao_humor",
  transtorno_depressivo_maior_tdm: "transtorno_depressivo_maior",
  transtorno_depressivo_persistente_distimia: "transtorno_depressivo_persistente",

  ansiedade_generalizada_tag: "transtorno_ansiedade_generalizada",
  panico: "transtorno_panico",
  ansiedade_social_fobia_social: "transtorno_ansiedade_social",
  ansiedade_de_separacao: "transtorno_ansiedade_separacao",

  transtorno_obsessivo_compulsivo_toc: "transtorno_obsessivo_compulsivo",
  transtorno_dismorfico_corporal_bdd: "transtorno_dismorfico_corporal",
  acumulacao_hoarding: "transtorno_acumulacao",
  tricotilomania_arrancar_o_cabelo: "tricotilomania",
  escoriacao_skin_picking: "transtorno_escoriacao",

  estresse_pos_traumatico_tept_30981_f4310: "tept",
  ajustamento_varios_codigos_f432x: "transtornos_adaptacao",

  transtorno_conversivo: "transtorno_conversao",

  transtorno_personalidade_borderline: "tp_borderline",
  transtorno_personalidade_dependente: "tp_dependente",
  transtorno_personalidade_esquizoide: "tp_esquizoide",
  transtorno_personalidade_esquizotipica: "tp_esquizotipico",
  transtorno_personalidade_evitativa: "tp_evitativo",
  transtorno_personalidade_narcisista: "tp_narcisista",
  transtorno_personalidade_paranoide: "tp_paranoide",
  transtorno_personalidade_antissocial: "tp_antissocial",
  transtorno_personalidade_histrionica: "tp_histrionico",
  transtorno_personalidade_obsessivo_compulsiva: "tp_obsessivo_compulsivo",
} as const;

export type DiseaseAliasId = keyof typeof diseaseAliases;

export function resolveDiseaseId(id: string): string {
  const alias = diseaseAliases[id as DiseaseAliasId];
  return alias && isDiseaseRegistered(alias) ? alias : id;
}

export function listDiseaseAliases(): Readonly<Record<DiseaseAliasId, string>> {
  return diseaseAliases;
}
