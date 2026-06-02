import type { ReactNode } from "react";
import type { ClinicalDisorder } from "./schema";

export interface DisorderRenderConfig {
  readonly id: string;
  readonly nome: string;
  readonly sigla?: string | null;
  readonly capitulo_id?: string | null;
  readonly capitulo_nome?: string | null;
  readonly codigo_dsm5?: string | null;
  readonly codigo_cid10?: string | null;
  readonly codigo_cid11?: string | null;
  readonly faixa_etaria_alvo?: string | null;
  readonly estrutura_geral?: string | null;
  readonly render_component: "GenericDisorderRenderer";
  readonly route_path: string;
  readonly tags: readonly string[];
}

type UnknownRecord = Record<string, unknown>;

const clinicalSections = [
  "clusters_sintomas",
  "criterios_condicionais",
  "subtipos",
  "especificadores",
  "gravidade",
  "hierarquia",
  "dominios_impacto",
  "diagnostico_diferencial",
  "comorbidades_frequentes",
  "instrumentos_complementares",
  "prevalencia",
  "curso_desenvolvimento",
  "template_prontuario",
  "inventory_notes",
  "super_enrichment",
] as const;

const hiddenKeys = new Set(["id", "metadados", "master_metadata", "inventory_notes"]);
const labelKeys: readonly string[] = ["label", "nome", "rotulo", "titulo", "name"];
const descriptionKeys: readonly string[] = ["descricao", "desc", "texto", "descricao_completa", "description"];

function titleFromValue(value: string) {
  return value
    .replaceAll("_", " ")
    .replaceAll("cid", "CID")
    .replaceAll("dsm", "DSM")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function previewText(value: unknown): string | null {
  if (typeof value === "string" && value.trim().length > 0) {
    return value;
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  return null;
}

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getTextValue(record: UnknownRecord, keys: readonly string[]): string | null {
  for (const key of keys) {
    const text = previewText(record[key]);
    if (text !== null) {
      return text;
    }
  }
  return null;
}

function getRecordId(record: UnknownRecord, fallback: number) {
  const id = previewText(record.id);
  return id ?? `item-${fallback + 1}`;
}

function getVisibleEntries(record: UnknownRecord) {
  return Object.entries(record).filter(([, itemValue]) => itemValue !== null && itemValue !== undefined);
}

function KeyValueGrid({ value, compact = false }: { readonly value: UnknownRecord; readonly compact?: boolean }) {
  const entries = getVisibleEntries(value).filter(([key]) => !hiddenKeys.has(key));

  if (entries.length === 0) {
    return null;
  }

  return (
    <dl className={compact ? "grid gap-2 sm:grid-cols-2" : "grid gap-3 md:grid-cols-2"}>
      {entries.map(([key, itemValue]) => (
        <div key={key} className="rounded-xl border border-border bg-background/70 p-3">
          <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{titleFromValue(key)}</dt>
          <dd className="mt-1 text-sm leading-6 text-foreground/80">
            <ClinicalValue value={itemValue} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

function ClinicalValue({ value }: { readonly value: unknown }): ReactNode {
  const text = previewText(value);
  if (text !== null) {
    return <span className="whitespace-pre-wrap">{text}</span>;
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return <span className="text-muted-foreground">Sem itens registrados.</span>;
    }

    const primitiveValues = value.map(previewText);
    if (primitiveValues.every((item) => item !== null)) {
      return (
        <ul className="space-y-1.5">
          {primitiveValues.map((item, index) => (
            <li key={`${item}-${index}`} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div className="space-y-3">
        {value.map((item, index) => (
          <GenericItem key={isRecord(item) ? getRecordId(item, index) : index} value={item} index={index} />
        ))}
      </div>
    );
  }

  if (isRecord(value)) {
    return <KeyValueGrid value={value} compact />;
  }

  return null;
}

function GenericItem({ value, index }: { readonly value: unknown; readonly index: number }) {
  if (!isRecord(value)) {
    return <ClinicalValue value={value} />;
  }

  const label = getTextValue(value, labelKeys) ?? getRecordId(value, index);
  const description = getTextValue(value, descriptionKeys);
  const detailEntries = Object.fromEntries(
    getVisibleEntries(value).filter(([key]) => !hiddenKeys.has(key) && !labelKeys.includes(key) && !descriptionKeys.includes(key)),
  );

  return (
    <article className="rounded-xl border border-border bg-background/70 p-4">
      <div className="flex flex-wrap items-start gap-3">
        <span className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-primary">
          {getRecordId(value, index)}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold text-foreground">{label}</h3>
          {description ? <p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-foreground/75">{description}</p> : null}
        </div>
      </div>
      <div className="mt-3">
        <KeyValueGrid value={detailEntries} compact />
      </div>
    </article>
  );
}

function ClinicalSection({ title, value }: { readonly title: string; readonly value: unknown }) {
  if (value === undefined || value === null || (Array.isArray(value) && value.length === 0)) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-3 border-b border-border pb-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Seção clínica</p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight text-card-foreground">{title}</h2>
        </div>
        {Array.isArray(value) ? (
          <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
            {value.length} {value.length === 1 ? "item" : "itens"}
          </span>
        ) : null}
      </div>
      <ClinicalValue value={value} />
    </section>
  );
}

function SymptomClusters({ clusters }: { readonly clusters: NonNullable<ClinicalDisorder["clusters_sintomas"]> }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3 border-b border-border pb-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Critério A</p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight text-card-foreground">Clusters de sintomas</h2>
        </div>
        <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
          {clusters.length} {clusters.length === 1 ? "cluster" : "clusters"}
        </span>
      </div>

      <div className="space-y-4">
        {clusters.map((cluster, clusterIndex) => {
          const threshold = previewText(cluster.limiar) ?? (isRecord(cluster.limiar) ? Object.entries(cluster.limiar).map(([key, value]) => `${titleFromValue(key)} ≥ ${previewText(value) ?? "—"}`).join(" · ") : null);

          return (
            <article key={cluster.id} className="rounded-2xl border border-border bg-background/70 p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-xs font-semibold text-primary">{cluster.id}</span>
                    {cluster.tipo ? <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">{titleFromValue(cluster.tipo)}</span> : null}
                    {threshold ? <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">Limiar: {threshold}</span> : null}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{cluster.nome ?? `Cluster ${clusterIndex + 1}`}</h3>
                  {cluster.descricao ? <p className="mt-1 text-sm leading-6 text-foreground/75">{cluster.descricao}</p> : null}
                </div>
                <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                  {cluster.sintomas.length} sintomas
                </span>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {cluster.sintomas.map((symptom) => (
                  <article key={symptom.id} className="rounded-xl border border-border bg-card p-4">
                    <div className="flex items-start gap-3">
                      <span className="rounded-full bg-primary/10 px-2 py-1 font-mono text-[11px] font-semibold text-primary">{symptom.id}</span>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-semibold text-card-foreground">{symptom.rotulo ?? symptom.texto ?? symptom.id}</h4>
                        {symptom.desc ?? symptom.descricao ?? symptom.texto ? (
                          <p className="mt-1 text-sm leading-6 text-foreground/75">{symptom.desc ?? symptom.descricao ?? symptom.texto}</p>
                        ) : null}
                        {symptom.pergunta ? (
                          <p className="mt-3 rounded-lg border border-primary/20 bg-primary/5 p-3 text-sm leading-6 text-foreground/80">
                            <span className="font-semibold text-primary">Pergunta-guia: </span>
                            {symptom.pergunta}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Header({ data, config }: { readonly data: ClinicalDisorder; readonly config: DisorderRenderConfig }) {
  const metaName = data.meta.nome_completo ?? data.meta.nome ?? config.nome;
  const codes = [
    ["DSM-5", config.codigo_dsm5],
    ["CID-10", config.codigo_cid10],
    ["CID-11", config.codigo_cid11],
  ] as const;
  const overviewItems = [
    ["Capítulo", config.capitulo_nome ?? data.meta.capitulo ?? config.capitulo_id],
    ["Faixa etária", config.faixa_etaria_alvo ?? data.meta.faixa_etaria_alvo],
    ["Estrutura", config.estrutura_geral ?? data.estrutura_geral],
  ] as const;

  return (
    <header className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
      <div className="border-b border-border bg-gradient-to-br from-primary/10 via-card to-card p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">{config.capitulo_nome ?? config.capitulo_id ?? "DSM-5"}</p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-card-foreground md:text-4xl">{metaName}</h1>
          {config.sigla ? <span className="rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">{config.sigla}</span> : null}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {codes.map(([label, code]) => code ? (
            <span key={label} className="rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-foreground/80">
              {label}: {code}
            </span>
          ) : null)}
        </div>
      </div>

      <dl className="grid gap-px bg-border md:grid-cols-3">
        {overviewItems.map(([label, value]) => value ? (
          <div key={label} className="bg-card p-4">
            <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</dt>
            <dd className="mt-1 text-sm font-medium text-card-foreground">{value}</dd>
          </div>
        ) : null)}
      </dl>
    </header>
  );
}

export function DisorderRenderer({ data, config }: { readonly data: ClinicalDisorder; readonly config: DisorderRenderConfig }) {
  const sections = clinicalSections.filter((section) => section !== "clusters_sintomas");

  return (
    <main className="min-h-full bg-background px-4 py-6 text-foreground md:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5">
        <Header data={data} config={config} />

        {data.clusters_sintomas && data.clusters_sintomas.length > 0 ? <SymptomClusters clusters={data.clusters_sintomas} /> : null}

        {sections.map((section) => (
          <ClinicalSection key={section} title={titleFromValue(section)} value={data[section]} />
        ))}
      </div>
    </main>
  );
}
