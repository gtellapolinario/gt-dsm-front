import type { ClinicalDisorder } from "../schema";

export type UnknownRecord = Record<string, unknown>;

export const severityOptions = ["ausente", "leve", "moderado", "grave"] as const;
export type SeverityLevel = (typeof severityOptions)[number];

const labelKeys = ["label", "nome", "rotulo", "titulo", "name", "condicao"] as const;
const descriptionKeys = ["descricao", "desc", "texto", "descricao_completa", "description", "descritor", "ponto_distincao"] as const;

export function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function previewText(value: unknown): string | null {
  if (typeof value === "string" && value.trim().length > 0) return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return null;
}

export function titleFromValue(value: string) {
  return value
    .replaceAll("_", " ")
    .replaceAll("cid", "CID")
    .replaceAll("dsm", "DSM")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function getTextValue(record: UnknownRecord, keys: readonly string[]): string | null {
  for (const key of keys) {
    const text = previewText(record[key]);
    if (text !== null) return text;
  }
  return null;
}

export function getRecordId(record: UnknownRecord, fallback: number) {
  return previewText(record.id) ?? previewText(record.codigo) ?? `item-${fallback + 1}`;
}

export function getDisplayLabel(value: unknown, fallback: string) {
  if (isRecord(value)) return getTextValue(value, labelKeys) ?? getTextValue(value, descriptionKeys) ?? fallback;
  return previewText(value) ?? fallback;
}

export function getDisplayDescription(value: unknown) {
  if (!isRecord(value)) return null;
  return getTextValue(value, descriptionKeys);
}

export function getVisibleEntries(record: UnknownRecord) {
  return Object.entries(record).filter(([, itemValue]) => itemValue !== null && itemValue !== undefined);
}

export function stringifyClinicalValue(value: unknown): string {
  const text = previewText(value);
  if (text !== null) return text;
  if (Array.isArray(value)) return value.map(stringifyClinicalValue).filter(Boolean).join(", ");
  if (isRecord(value)) {
    return Object.entries(value)
      .map(([key, itemValue]) => `${titleFromValue(key)}: ${stringifyClinicalValue(itemValue)}`)
      .filter((item) => item.trim().length > 0)
      .join("; ");
  }
  return "";
}

export function formatThreshold(limiar: unknown): string | null {
  const text = previewText(limiar);
  if (text !== null) return text;
  if (!isRecord(limiar)) return null;
  const entries = Object.entries(limiar)
    .map(([key, value]) => `${titleFromValue(key)} ≥ ${previewText(value) ?? stringifyClinicalValue(value) ?? "—"}`)
    .filter(Boolean);
  return entries.length > 0 ? entries.join(" · ") : null;
}

export function thresholdNumber(limiar: unknown, symptomTotal: number): number {
  if (typeof limiar === "number" && Number.isFinite(limiar)) return limiar;
  if (typeof limiar === "string") {
    const number = Number.parseInt(limiar, 10);
    if (Number.isFinite(number)) return number;
  }
  if (isRecord(limiar)) {
    const adult = limiar.adulto;
    if (typeof adult === "number" && Number.isFinite(adult)) return adult;
    const firstNumber = Object.values(limiar).find((value) => typeof value === "number" && Number.isFinite(value));
    if (typeof firstNumber === "number") return firstNumber;
  }
  if (symptomTotal <= 0) return 1;
  return Math.max(1, Math.ceil(symptomTotal / 2));
}

export function sectionHasData(value: unknown): boolean {
  if (value === undefined || value === null) return false;
  if (Array.isArray(value)) return value.length > 0;
  if (isRecord(value)) return Object.keys(value).length > 0;
  return previewText(value) !== null;
}

export function normalizeChoiceItems(value: unknown): Array<{ id: string; label: string; description: string | null; raw: unknown }> {
  const source = Array.isArray(value) ? value : isRecord(value) ? Object.entries(value).map(([id, item]) => (isRecord(item) ? { id, ...item } : { id, label: stringifyClinicalValue(item) })) : [];
  return source.map((item, index) => {
    const record = isRecord(item) ? item : { label: item };
    const id = getRecordId(record, index);
    const rawLabel = getDisplayLabel(record, id);
    return {
      id,
      // Quando o label cai no fallback do proprio id (chave snake_case do JSON),
      // humaniza: "grav_leve" -> "Grav Leve" em vez de exibir o id cru.
      label: rawLabel === id ? titleFromValue(id) : rawLabel,
      description: getDisplayDescription(record),
      raw: item,
    };
  });
}

export function disorderName(data: ClinicalDisorder, fallback: string) {
  return data.meta.nome_completo ?? data.meta.nome ?? fallback;
}
