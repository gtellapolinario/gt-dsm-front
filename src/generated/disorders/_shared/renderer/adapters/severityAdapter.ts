import type { ClinicalDisorder } from "../../schema";
import { asRaw, list, rec } from "./raw";

export interface SeverityLevelView {
  readonly label: string;
  readonly descritor: string | null;
}

/**
 * Grupo do ramo `por_episodio`. `episodioKey` não existia como dado no
 * original: é `String(r.episodio)`, a expressão usada em `key=` no map do
 * SeverityBlock (baseline linha 1035). Migrada para o view-model para que a
 * key permaneça byte-idêntica sem que o componente recompute a coerção.
 */
export interface SeverityEpisodeGroupView {
  readonly episodioKey: string;
  readonly label: string;
  readonly niveis: readonly SeverityLevelView[];
}

/**
 * Domínio do ramo `escalar`. `dominioKey` = `String(d.id)`, a expressão usada
 * em `key=` no map dos badges (baseline linha 1048); `label` = o conteúdo
 * renderizado, `String(d.label ?? d.id)`.
 */
export interface SeverityDomainView {
  readonly dominioKey: string;
  readonly label: string;
}

export type SeverityView =
  | { readonly kind: "sem_niveis_formais"; readonly lembrete: string }
  | {
      readonly kind: "por_episodio";
      readonly grupos: readonly SeverityEpisodeGroupView[];
      readonly observacao: string | null;
      readonly lembrete: string | null;
    }
  | {
      readonly kind: "escalar";
      readonly dominios: readonly SeverityDomainView[];
      readonly condicaoAplicabilidade: string | null;
      readonly niveis: readonly SeverityLevelView[];
      readonly niveisReferencia: readonly SeverityLevelView[];
      /**
       * `null` quando `gravidade.escala?.niveis` NÃO é um array; `[]` quando é
       * um array vazio. A distinção é bug-for-bug: o guarda original é apenas
       * `Array.isArray(g.escala?.niveis)` (sem `length > 0`, ao contrário dos
       * demais ramos), logo um array vazio renderiza o wrapper vazio da
       * SeverityScale (baseline linhas 1065–1072).
       */
      readonly escalaNiveis: readonly SeverityLevelView[] | null;
      readonly observacao: string | null;
      readonly lembrete: string | null;
    };

/**
 * View-model do SeverityBlock (baseline linhas 1008–1075). `classificacao_dsm`
 * é a fonte da verdade e decide a apresentação, na ordem exata do original:
 * ausente → null; "sem_niveis_formais"; Array.isArray(regras_por_episodio);
 * senão escalar. No ramo sem_niveis_formais, observacao e o lembrete de
 * rodapé NÃO entram (o original guarda ambos com `!semNiveis`).
 */
export function buildSeverityView(data: ClinicalDisorder): SeverityView | null {
  const g = asRaw(data).gravidade;
  if (!g?.classificacao_dsm) return null;

  const dominioLabel = (id: string): string => {
    const found = list(g.dominios)
      .map(rec)
      .find((d) => d?.id === id);
    return String(found?.label ?? id);
  };

  const nivel = (n: unknown): SeverityLevelView => {
    const r = rec(n) ?? {};
    return {
      label: String(r.label ?? r.id),
      descritor: r.descritor
        ? String(r.descritor)
        : r.descritores_por_dominio
          ? Object.entries(rec(r.descritores_por_dominio) ?? {})
              .map(([k, v]) => `${dominioLabel(k)}: ${String(v)}`)
              .join(" ")
          : null,
    };
  };

  if (g.classificacao_dsm === "sem_niveis_formais") {
    return {
      kind: "sem_niveis_formais",
      lembrete: String(g.lembrete_aplicador),
    };
  }

  if (Array.isArray(g.regras_por_episodio)) {
    const regras: readonly unknown[] = g.regras_por_episodio;
    return {
      kind: "por_episodio",
      grupos: regras.map((r) => {
        const rr = rec(r) ?? {};
        return {
          episodioKey: String(rr.episodio),
          label: String(rr.label),
          niveis: list(rr.niveis).map(nivel),
        };
      }),
      observacao: g.observacao ? String(g.observacao) : null,
      lembrete: g.lembrete_aplicador ? String(g.lembrete_aplicador) : null,
    };
  }

  const dominiosRaw = g.dominios;
  const dominios =
    Array.isArray(dominiosRaw) && dominiosRaw.length > 0
      ? dominiosRaw.map((d) => {
          const rd = rec(d) ?? {};
          return {
            dominioKey: String(rd.id),
            label: String(rd.label ?? rd.id),
          };
        })
      : [];

  const niveisRaw = g.niveis;
  const niveis =
    Array.isArray(niveisRaw) && niveisRaw.length > 0
      ? niveisRaw.map(nivel)
      : [];

  const niveisReferenciaRaw = g.niveis_referencia;
  const niveisReferencia =
    Array.isArray(niveisReferenciaRaw) && niveisReferenciaRaw.length > 0
      ? niveisReferenciaRaw.map(nivel)
      : [];

  // Guarda assimétrico do original: apenas Array.isArray, SEM length > 0.
  // null = não-array (não renderiza); [] = array vazio (renderiza wrapper).
  const escalaNiveisRaw = rec(g.escala)?.niveis;
  const escalaNiveis = Array.isArray(escalaNiveisRaw)
    ? escalaNiveisRaw.map((n) => {
        const rn = rec(n) ?? {};
        return {
          label: `${String(rn.valor)} — ${String(rn.label)}`,
          descritor: null,
        };
      })
    : null;

  return {
    kind: "escalar",
    dominios,
    condicaoAplicabilidade: g.condicao_aplicabilidade
      ? String(g.condicao_aplicabilidade)
      : null,
    niveis,
    niveisReferencia,
    escalaNiveis,
    observacao: g.observacao ? String(g.observacao) : null,
    lembrete: g.lembrete_aplicador ? String(g.lembrete_aplicador) : null,
  };
}
