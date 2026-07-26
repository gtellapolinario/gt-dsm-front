import type { ClinicalDisorder } from "../../schema";

export interface RawExtras {
  readonly meta?: { readonly codigo?: { readonly dsm5?: unknown; readonly cid10?: unknown; readonly cid11?: unknown } };
  readonly prevalencia?: Record<string, unknown>;
  readonly curso_desenvolvimento?: Record<string, unknown>;
  readonly gravidade?: Record<string, unknown>;
  readonly subtipos?: Record<string, unknown>;
  readonly hierarquia?: Record<string, unknown>;
  readonly instrumentos_complementares?: readonly unknown[];
}

export function asRaw(data: ClinicalDisorder): ClinicalDisorder & RawExtras {
  return data as ClinicalDisorder & RawExtras;
}

export function str(value: unknown): string | null {
  return typeof value === "string" && value.length > 0 ? value : null;
}
export function list(value: unknown): readonly unknown[] {
  return Array.isArray(value) ? value : [];
}
export function rec(value: unknown): Record<string, unknown> | null {
  return typeof value === "object" && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>) : null;
}
