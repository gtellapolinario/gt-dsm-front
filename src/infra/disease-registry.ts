import type { ComponentType } from "react";
import {
  generatedDisorderImports,
  generatedDisorderMetadata,
  type GeneratedDisorderId,
  type GeneratedDisorderMetadata,
  type GeneratedDisorderModule,
} from "@/generated/disorders";
import {
  isEstruturaDiagnostica,
  type EstruturaDiagnostica,
} from "@/infra/schemas/dsm-schemas";

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
  data?: GeneratedDisorderModule["data"];
}

export type DiseaseImporter = () => Promise<DiseaseModule>;

function adaptDiseaseConfig(
  config: GeneratedDisorderModule["config"] | undefined,
): DiseaseModule["config"] | undefined {
  if (!config) {
    return undefined;
  }

  return {
    estrutura: isEstruturaDiagnostica(config.estrutura_geral)
      ? config.estrutura_geral
      : undefined,
    route: config.route_path,
  };
}

function adaptDiseaseMeta(
  module: GeneratedDisorderModule,
  fallback: GeneratedDisorderMetadata,
): NonNullable<DiseaseModule["meta"]> {
  return {
    id: module.meta?.id ?? fallback.id,
    nome: module.meta?.nome ?? fallback.nome,
    sigla: module.meta?.sigla ?? undefined,
    capituloId: module.meta?.capituloId ?? fallback.capitulo_id,
  };
}

function adaptGeneratedModule(
  module: GeneratedDisorderModule,
  fallback: GeneratedDisorderMetadata,
): DiseaseModule {
  return {
    default: module.default,
    meta: adaptDiseaseMeta(module, fallback),
    config: adaptDiseaseConfig(module.config),
    data: module.data,
  };
}

const generatedMetadataById: Readonly<Record<GeneratedDisorderId, GeneratedDisorderMetadata>> =
  Object.freeze(
    Object.fromEntries(
      generatedDisorderMetadata.map((metadata) => [metadata.id, metadata]),
    ) as Record<GeneratedDisorderId, GeneratedDisorderMetadata>,
  );

function createDiseaseImporter(id: GeneratedDisorderId): DiseaseImporter {
  return async () => {
    const module = await generatedDisorderImports[id]();
    return adaptGeneratedModule(module, generatedMetadataById[id]);
  };
}

export const diseaseImports: Readonly<Record<string, DiseaseImporter>> =
  Object.freeze(
    Object.fromEntries(
      generatedDisorderMetadata.map((metadata) => [
        metadata.id,
        createDiseaseImporter(metadata.id),
      ]),
    ) as Record<GeneratedDisorderId, DiseaseImporter>,
  );

export function isDiseaseRegistered(id: string): id is GeneratedDisorderId {
  return id in diseaseImports;
}

export async function loadDiseaseModule(id: string): Promise<DiseaseModule> {
  const importer = getDiseaseImporter(id);
  if (!importer) {
    throw new Error(`Doença não encontrada no registro gerado: "${id}"`);
  }
  return importer();
}

export function listRegisteredDiseases(): string[] {
  return Object.keys(diseaseImports);
}

export function getDiseaseImporter(id: string): DiseaseImporter | undefined {
  return isDiseaseRegistered(id) ? diseaseImports[id] : undefined;
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
