import {
  generatedDisorderMetadata,
  type GeneratedDisorderId,
  type GeneratedDisorderMetadata,
} from "@/generated/disorders";
import { CHAPTER_BY_ID } from "@/lib/disease-catalog";

export interface GeneratedDisorderCatalogItem {
  id: GeneratedDisorderId;
  nome: string;
  sigla?: string;
  capituloId: string;
  capituloKey: string;
  capituloNome: string;
  chapterHue: string;
  route: string;
}

function toCatalogItem(metadata: GeneratedDisorderMetadata): GeneratedDisorderCatalogItem {
  const chapter = CHAPTER_BY_ID[metadata.capitulo_id];

  return {
    id: metadata.id,
    nome: metadata.nome,
    capituloId: metadata.capitulo_id,
    capituloKey: chapter?.key ?? metadata.capitulo_id,
    capituloNome: chapter?.nome ?? metadata.capitulo_id,
    chapterHue: chapter?.hue ?? "#9E9E9E",
    route: metadata.route_path,
  };
}

const generatedDisorders = Object.freeze(generatedDisorderMetadata.map(toCatalogItem));

const generatedDisordersById = Object.freeze(
  Object.fromEntries(generatedDisorders.map((disorder) => [disorder.id, disorder])) as Record<
    GeneratedDisorderId,
    GeneratedDisorderCatalogItem
  >,
);

export function listGeneratedDisorders(): readonly GeneratedDisorderCatalogItem[] {
  return generatedDisorders;
}

export function getGeneratedDisorderMetadata(id: string): GeneratedDisorderCatalogItem | undefined {
  return isGeneratedDisorderId(id) ? generatedDisordersById[id] : undefined;
}

export function listGeneratedDisordersByChapter(capituloId: string): readonly GeneratedDisorderCatalogItem[] {
  return generatedDisorders.filter((disorder) => disorder.capituloId === capituloId);
}

export function isGeneratedDisorderId(id: string): id is GeneratedDisorderId {
  return id in generatedDisordersById;
}
