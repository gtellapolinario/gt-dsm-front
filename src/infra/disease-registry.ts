// Auto-generated from DSM operational release. Do not edit manually.
import type { ComponentType } from "react";
import type { EstruturaDiagnostica } from "@/infra/schemas/dsm-schemas";

export interface DiseaseModule {
  default: ComponentType;
  meta?: {
    id: string;
    nome: string;
    sigla?: string;
    capituloId: string;
  };
  config?: {
    estrutura?: EstruturaDiagnostica;
    route?: string;
  };
}

export const diseaseImports: Record<string, () => Promise<DiseaseModule>> = {
  deficiencia_intelectual: () =>
    import("@/doencas/01-neurodesenvolvimento/deficiencia_intelectual"),
  transtorno_deficit_atencao_hiperatividade: () =>
    import("@/doencas/01-neurodesenvolvimento/transtorno_deficit_atencao_hiperatividade/y"),
  transtorno_do_espectro_autista: () =>
    import("@/doencas/01-neurodesenvolvimento/transtorno_do_espectro_autista"),
  transtorno_especifico_aprendizagem: () =>
    import("@/doencas/01-neurodesenvolvimento/transtorno_especifico_aprendizagem"),
  transtorno_linguagem: () =>
    import("@/doencas/01-neurodesenvolvimento/transtorno_linguagem"),
  esquizofrenia: () =>
    import("@/doencas/02-esquizofrenia-psicoticos/esquizofrenia"),
  transtorno_delirante: () =>
    import("@/doencas/02-esquizofrenia-psicoticos/transtorno_delirante"),
  transtorno_esquizoafetivo: () =>
    import("@/doencas/02-esquizofrenia-psicoticos/transtorno_esquizoafetivo"),
  transtorno_esquizofreniforme: () =>
    import("@/doencas/02-esquizofrenia-psicoticos/transtorno_esquizofreniforme"),
  transtorno_psicotico_breve: () =>
    import("@/doencas/02-esquizofrenia-psicoticos/transtorno_psicotico_breve"),
  transtorno_bipolar_tipo_1: () =>
    import("@/doencas/03-bipolar-relacionados/transtorno_bipolar_tipo_1"),
  transtorno_bipolar_tipo_2: () =>
    import("@/doencas/03-bipolar-relacionados/transtorno_bipolar_tipo_2"),
  transtorno_depressivo_maior: () =>
    import("@/doencas/04-depressivos/transtorno_depressivo_maior"),
  transtorno_depressivo_persistente: () =>
    import("@/doencas/04-depressivos/transtorno_depressivo_persistente"),
  transtorno_disruptivo_desregulacao_humor: () =>
    import("@/doencas/04-depressivos/transtorno_disruptivo_desregulacao_humor"),
  agorafobia: () => import("@/doencas/05-ansiedade/agorafobia"),
  fobia_especifica: () => import("@/doencas/05-ansiedade/fobia_especifica"),
  mutismo_seletivo: () => import("@/doencas/05-ansiedade/mutismo_seletivo"),
  transtorno_ansiedade_generalizada: () =>
    import("@/doencas/05-ansiedade/transtorno_ansiedade_generalizada"),
  transtorno_ansiedade_separacao: () =>
    import("@/doencas/05-ansiedade/transtorno_ansiedade_separacao"),
  transtorno_ansiedade_social: () =>
    import("@/doencas/05-ansiedade/transtorno_ansiedade_social"),
  transtorno_panico: () => import("@/doencas/05-ansiedade/transtorno_panico"),
  transtorno_acumulacao: () =>
    import("@/doencas/06-obsessivo-compulsivo/transtorno_acumulacao"),
  transtorno_dismorfico_corporal: () =>
    import("@/doencas/06-obsessivo-compulsivo/transtorno_dismorfico_corporal"),
  transtorno_escoriacao: () =>
    import("@/doencas/06-obsessivo-compulsivo/transtorno_escoriacao"),
  transtorno_obsessivo_compulsivo: () =>
    import("@/doencas/06-obsessivo-compulsivo/transtorno_obsessivo_compulsivo"),
  tricotilomania: () =>
    import("@/doencas/06-obsessivo-compulsivo/tricotilomania"),
  tept: () => import("@/doencas/07-trauma-estressores/tept"),
  transtornos_adaptacao: () =>
    import("@/doencas/07-trauma-estressores/transtornos_adaptacao"),
  transtorno_ansiedade_doenca: () =>
    import("@/doencas/09-sintomas-somaticos/transtorno_ansiedade_doenca"),
  transtorno_conversao: () =>
    import("@/doencas/09-sintomas-somaticos/transtorno_conversao"),
  anorexia_nervosa: () => import("@/doencas/10-alimentares/anorexia_nervosa"),
  bulimia_nervosa: () => import("@/doencas/10-alimentares/bulimia_nervosa"),
  transtorno_alimentar_restritivo_evitativo: () =>
    import("@/doencas/10-alimentares/transtorno_alimentar_restritivo_evitativo"),
  transtorno_compulsao_alimentar: () =>
    import("@/doencas/10-alimentares/transtorno_compulsao_alimentar"),
  transtorno_insonia: () =>
    import("@/doencas/12-sono-vigilia/transtorno_insonia"),
  conduta: () => import("@/doencas/15-disruptivos-impulsos-conduta/conduta"),
  explosivo_intermittente: () =>
    import("@/doencas/15-disruptivos-impulsos-conduta/explosivo_intermittente"),
  oposicao_desafiante: () =>
    import("@/doencas/15-disruptivos-impulsos-conduta/oposicao_desafiante"),
  transtorno_por_uso_de_alcool: () =>
    import("@/doencas/16-substancias-aditivos/transtorno_por_uso_de_alcool"),
  transtorno_por_uso_de_estimulantes: () =>
    import("@/doencas/16-substancias-aditivos/transtorno_por_uso_de_estimulantes"),
  transtorno_por_uso_de_opioides: () =>
    import("@/doencas/16-substancias-aditivos/transtorno_por_uso_de_opioides"),
  transtorno_por_uso_de_tabaco: () =>
    import("@/doencas/16-substancias-aditivos/transtorno_por_uso_de_tabaco"),
  delirium: () => import("@/doencas/17-neurocognitivos/delirium"),
  tnc_alzheimer: () => import("@/doencas/17-neurocognitivos/tnc_alzheimer"),
  tnc_leve: () => import("@/doencas/17-neurocognitivos/tnc_leve"),
  tnc_maior: () => import("@/doencas/17-neurocognitivos/tnc_maior"),
  tnc_vascular: () => import("@/doencas/17-neurocognitivos/tnc_vascular"),
  tp_antissocial: () => import("@/doencas/18-personalidade/tp_antissocial"),
  tp_borderline: () => import("@/doencas/18-personalidade/tp_borderline"),
  tp_dependente: () => import("@/doencas/18-personalidade/tp_dependente"),
  tp_esquizoide: () => import("@/doencas/18-personalidade/tp_esquizoide"),
  tp_esquizotipico: () => import("@/doencas/18-personalidade/tp_esquizotipico"),
  tp_evitativo: () => import("@/doencas/18-personalidade/tp_evitativo"),
  tp_histrionico: () => import("@/doencas/18-personalidade/tp_histrionico"),
  tp_narcisista: () => import("@/doencas/18-personalidade/tp_narcisista"),
  tp_obsessivo_compulsivo: () =>
    import("@/doencas/18-personalidade/tp_obsessivo_compulsivo"),
  tp_paranoide: () => import("@/doencas/18-personalidade/tp_paranoide"),
};

export function isDiseaseRegistered(id: string): boolean {
  return id in diseaseImports;
}

export async function loadDiseaseModule(id: string): Promise<DiseaseModule> {
  const importer = diseaseImports[id];
  if (!importer) {
    throw new Error(`Doença não encontrada no registro: "${id}"`);
  }
  return importer();
}

export function listRegisteredDiseases(): string[] {
  return Object.keys(diseaseImports);
}

export function getDiseaseImporter(
  id: string,
): (() => Promise<DiseaseModule>) | undefined {
  return diseaseImports[id];
}

export const structureHookMap: Record<
  string,
  { hook: string; renderer: string }
> = {
  categorico_por_subtipo: {
    hook: "useCategoricoSubtipoEvaluation",
    renderer: "CategoricoPorSubtipoRenderer",
  },
  conjuncao_temporal_complexa: {
    hook: "useConjuncaoTemporalEvaluation",
    renderer: "ConjuncaoTemporalComplexaRenderer",
  },
  episodico: { hook: "useEpisodicEvaluation", renderer: "EpisodicoRenderer" },
  episodico_com_sintomas: {
    hook: "useEpisodicEvaluation",
    renderer: "EpisodicoComSintomasRenderer",
  },
  etiologico_externo: {
    hook: "useEtiologicoExternoEvaluation",
    renderer: "EtiologicoExternoRenderer",
  },
  mixed_monothetic_polythetic: {
    hook: "useMixedEvaluation",
    renderer: "MixedMonotheticPolytheticRenderer",
  },
  monothetic_puro: {
    hook: "useMonotheticPureEvaluation",
    renderer: "MonotheticPuroRenderer",
  },
  monothetic_tripartite: {
    hook: "useMonotheticTripartiteEvaluation",
    renderer: "MonotheticTripartiteRenderer",
  },
  polythetic_clusters_assimetricos: {
    hook: "usePolytheticClusterEvaluation",
    renderer: "PolytheticAssimetricosRenderer",
  },
  polythetic_clusters_simetricos: {
    hook: "usePolytheticClusterEvaluation",
    renderer: "PolytheticClusterRenderer",
  },
  polythetic_com_ancora: {
    hook: "usePolytheticAncoraEvaluation",
    renderer: "PolytheticComAncoraRenderer",
  },
  polythetic_monocluster: {
    hook: "usePolytheticMonoClusterEvaluation",
    renderer: "PolytheticMonoclusterRenderer",
  },
  psicomotor_polythetic: {
    hook: "usePsicomotorPolytheticEvaluation",
    renderer: "PsicomotorPolytheticRenderer",
  },
  qualitativo_descritivo: {
    hook: "useQualitativoDescritivoEvaluation",
    renderer: "QualitativoDescritivoRenderer",
  },
  temporal_topografico: {
    hook: "useTemporalTopograficEvaluation",
    renderer: "TemporalTopograficoRenderer",
  },
  tripartite_funcional: {
    hook: "useTripartiteFunctionalEvaluation",
    renderer: "TripartiteFuncionalRenderer",
  },
};

export function getStructureInfo(estrutura: EstruturaDiagnostica | string) {
  return (
    structureHookMap[estrutura] || {
      hook: "useDefaultEvaluation",
      renderer: "DefaultRenderer",
    }
  );
}

export const diseaseImportMap = diseaseImports;
