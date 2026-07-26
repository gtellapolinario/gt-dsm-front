import {
  generatedDisorderMetadata,
  type GeneratedDisorderId,
  type GeneratedDisorderMetadata,
} from "@/generated/disorders";
import { CHAPTERS, CHAPTER_BY_ID } from "@/lib/disease-catalog";

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

/* ─── Navegação (sidebar): derivada do registry, sem catálogo paralelo ──── */

export interface ChapterTreeNode {
  type: "chapter";
  key: string;
  label: string;
  meta: { n: string; count: number; hue: string };
  children: Array<{ type: "disease"; key: string; label: string }>;
}

/** Árvore capítulo → transtornos, derivada do registry (fonte: payloads). */
export function getGeneratedSidebarTree(): ChapterTreeNode[] {
  const byChapter = new Map<string, GeneratedDisorderCatalogItem[]>();
  for (const disorder of generatedDisorders) {
    const list = byChapter.get(disorder.capituloId) ?? [];
    list.push(disorder);
    byChapter.set(disorder.capituloId, list);
  }
  return CHAPTERS.filter((ch) => byChapter.has(ch.id)).map((ch) => {
    const items = byChapter.get(ch.id)!;
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

const normalize = (text: string) =>
  text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/** Busca accent-insensitive por nome ou id do transtorno (fonte: registry). */
export function searchGeneratedDisorders(
  query: string,
): GeneratedDisorderCatalogItem[] {
  const q = normalize(query);
  return generatedDisorders.filter(
    (d) => normalize(d.nome).includes(q) || normalize(d.id).includes(q),
  );
}

/** Chave abreviada do capítulo de um transtorno (ex.: "depr"). */
export function getGeneratedChapterKeyByDiseaseId(
  diseaseId: string,
): string | undefined {
  return getGeneratedDisorderMetadata(diseaseId)?.capituloKey;
}
