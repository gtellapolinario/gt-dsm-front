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

function titleFromValue(value: string) {
  return value.replaceAll("_", " ").replace(/^\w/, (letter) => letter.toUpperCase());
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

function ClinicalBlock({ title, value }: { readonly title: string; readonly value: unknown }) {
  if (value === undefined || value === null) {
    return null;
  }

  const text = previewText(value);
  if (text !== null) {
    return (
      <section className="rounded-xl border border-border bg-surface p-4 shadow-sm">
        <h2 className="mb-2 text-base font-semibold text-text-1">{title}</h2>
        <p className="whitespace-pre-wrap text-sm leading-6 text-text-2">{text}</p>
      </section>
    );
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return null;
    }

    return (
      <section className="rounded-xl border border-border bg-surface p-4 shadow-sm">
        <h2 className="mb-3 text-base font-semibold text-text-1">{title}</h2>
        <div className="space-y-3">
          {value.map((item, index) => (
            <ClinicalBlock key={typeof item === "object" && item !== null && "id" in item ? String(item.id) : index} title={`${title} ${index + 1}`} value={item} />
          ))}
        </div>
      </section>
    );
  }

  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>).filter(([, itemValue]) => itemValue !== null && itemValue !== undefined);
    if (entries.length === 0) {
      return null;
    }

    return (
      <section className="rounded-xl border border-border bg-surface p-4 shadow-sm">
        <h2 className="mb-3 text-base font-semibold text-text-1">{title}</h2>
        <dl className="grid gap-3 md:grid-cols-2">
          {entries.map(([key, itemValue]) => {
            const entryText = previewText(itemValue);
            return (
              <div key={key} className="rounded-lg bg-bg p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-text-3">{titleFromValue(key)}</dt>
                <dd className="mt-1 text-sm leading-6 text-text-2">
                  {entryText ?? <pre className="max-h-80 overflow-auto whitespace-pre-wrap text-xs">{JSON.stringify(itemValue, null, 2)}</pre>}
                </dd>
              </div>
            );
          })}
        </dl>
      </section>
    );
  }

  return null;
}

export function DisorderRenderer({ data, config }: { readonly data: ClinicalDisorder; readonly config: DisorderRenderConfig }) {
  const clinicalSections = [
    "estrutura_geral",
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

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-4 p-6">
      <header className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
        <p className="text-sm uppercase tracking-[0.2em] text-text-3">{config.capitulo_nome ?? config.capitulo_id ?? "DSM"}</p>
        <h1 className="mt-2 text-3xl font-bold text-text-1">{config.nome}</h1>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-text-2">
          {config.codigo_dsm5 ? <span className="rounded-full border border-border bg-bg px-3 py-1">DSM-5: {config.codigo_dsm5}</span> : null}
          {config.codigo_cid10 ? <span className="rounded-full border border-border bg-bg px-3 py-1">CID-10: {config.codigo_cid10}</span> : null}
          {config.codigo_cid11 ? <span className="rounded-full border border-border bg-bg px-3 py-1">CID-11: {config.codigo_cid11}</span> : null}
          {config.estrutura_geral ? <span className="rounded-full border border-border bg-bg px-3 py-1">{config.estrutura_geral}</span> : null}
        </div>
      </header>

      {clinicalSections.map((section) => (
        <ClinicalBlock key={section} title={titleFromValue(section)} value={data[section]} />
      ))}
    </main>
  );
}
