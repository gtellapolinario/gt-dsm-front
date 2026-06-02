import { useMemo, useState, type ReactNode } from "react";
import { Clipboard, FileText, Printer, RefreshCcw, RotateCcw } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import type { ClinicalDisorder } from "./schema";
import { useDisorderAssessment, type ClusterCounter } from "./hooks/useDisorderAssessment";
import {
  formatThreshold,
  getVisibleEntries,
  isRecord,
  normalizeChoiceItems,
  previewText,
  sectionHasData,
  severityOptions,
  stringifyClinicalValue,
  titleFromValue,
  type SeverityLevel,
} from "./utils/disorderDataAccess";

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

const clinicalSections = [
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
  "super_enrichment",
] as const;

const hiddenKeys = new Set(["id", "metadados", "master_metadata", "inventory_notes", "icone_fa"]);
const formSectionIds = ["identificacao", "clusters", "criterios_condicionais", "especificadores", "impacto", "markdown"] as const;

function CompactClinicalValue({ value }: { readonly value: unknown }): ReactNode {
  const text = previewText(value);
  if (text !== null) return <span className="whitespace-pre-wrap">{text}</span>;
  if (Array.isArray(value)) {
    if (value.length === 0) return <span className="text-muted-foreground">Sem itens registrados.</span>;
    return (
      <ul className="space-y-1.5">
        {value.slice(0, 6).map((item, index) => (
          <li key={`${stringifyClinicalValue(item)}-${index}`} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
            <span>{stringifyClinicalValue(item)}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (isRecord(value)) {
    return (
      <dl className="grid gap-2 md:grid-cols-2">
        {getVisibleEntries(value)
          .filter(([key]) => !hiddenKeys.has(key))
          .slice(0, 8)
          .map(([key, itemValue]) => (
            <div key={key} className="rounded-xl border border-border bg-background/60 p-3">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{titleFromValue(key)}</dt>
              <dd className="mt-1 text-sm text-foreground/80">{stringifyClinicalValue(itemValue)}</dd>
            </div>
          ))}
      </dl>
    );
  }
  return null;
}

function Header({ data, config }: { readonly data: ClinicalDisorder; readonly config: DisorderRenderConfig }) {
  const metaName = data.meta.nome_completo ?? data.meta.nome ?? config.nome;
  const codes = [
    ["DSM-5", config.codigo_dsm5],
    ["CID-10", config.codigo_cid10],
    ["CID-11", config.codigo_cid11],
  ] as const;

  return (
    <Card className="overflow-hidden rounded-3xl py-0">
      <div className="border-b border-border bg-gradient-to-br from-primary/10 via-card to-card p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">{config.capitulo_nome ?? config.capitulo_id ?? "DSM-5"}</p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-card-foreground md:text-4xl">{metaName}</h1>
          {config.sigla ? <Badge>{config.sigla}</Badge> : null}
        </div>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
          Instrumento interativo gerado a partir do JSON clínico: marque critérios, classifique gravidade, registre observações e gere síntese em Markdown.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {codes.map(([label, code]) => code ? <Badge key={label} variant="outline">{label}: {code}</Badge> : null)}
        </div>
      </div>
    </Card>
  );
}

function PatientSection({ assessment }: { readonly assessment: ReturnType<typeof useDisorderAssessment> }) {
  const { state, setPatientField } = assessment;
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Field label="Nome/ID do paciente"><Input value={state.patient.nomeId} onChange={(event) => setPatientField("nomeId", event.target.value)} placeholder="Identificador clínico" /></Field>
      <Field label="Idade ou data de nascimento"><Input value={state.patient.idadeNascimento} onChange={(event) => setPatientField("idadeNascimento", event.target.value)} placeholder="Ex.: 32 anos ou 10/02/1994" /></Field>
      <Field label="Sexo"><Input value={state.patient.sexo} onChange={(event) => setPatientField("sexo", event.target.value)} placeholder="Conforme registro clínico" /></Field>
      <Field label="Escolaridade"><Input value={state.patient.escolaridade} onChange={(event) => setPatientField("escolaridade", event.target.value)} placeholder="Escolaridade" /></Field>
      <Field label="Ocupação"><Input value={state.patient.ocupacao} onChange={(event) => setPatientField("ocupacao", event.target.value)} placeholder="Ocupação atual" /></Field>
      <Field label="Informante/encaminhamento"><Input value={state.patient.informante} onChange={(event) => setPatientField("informante", event.target.value)} placeholder="Fonte das informações" /></Field>
      <Field label="Queixa principal" className="md:col-span-2">
        <Textarea value={state.patient.queixaPrincipal} onChange={(event) => setPatientField("queixaPrincipal", event.target.value)} placeholder="Descreva a demanda, contexto, duração e motivo da avaliação." className="min-h-24 bg-background text-sm text-foreground" />
      </Field>
    </div>
  );
}

function Field({ label, children, className = "" }: { readonly label: string; readonly children: ReactNode; readonly className?: string }) {
  return <Label className={`flex flex-col items-start gap-2 ${className}`}><span>{label}</span>{children}</Label>;
}

function SeveritySelect({ value, onValueChange }: { readonly value: SeverityLevel; readonly onValueChange: (value: SeverityLevel) => void }) {
  return (
    <Select value={value} onValueChange={(next) => onValueChange(next as SeverityLevel)}>
      <SelectTrigger className="w-full sm:w-40"><SelectValue placeholder="Gravidade" /></SelectTrigger>
      <SelectContent>
        {severityOptions.map((severity) => <SelectItem key={severity} value={severity}>{titleFromValue(severity)}</SelectItem>)}
      </SelectContent>
    </Select>
  );
}

function SymptomClusters({ data, assessment }: { readonly data: ClinicalDisorder; readonly assessment: ReturnType<typeof useDisorderAssessment> }) {
  const clusters = data.clusters_sintomas ?? [];
  if (clusters.length === 0) return <p className="text-sm text-muted-foreground">Este payload não possui clusters de sintomas estruturados.</p>;

  return (
    <div className="space-y-4">
      {clusters.map((cluster, clusterIndex) => {
        const counter = assessment.clusterCounters.find((item) => item.id === cluster.id);
        const threshold = formatThreshold(cluster.limiar) ?? `fallback ≥ ${counter?.threshold ?? 1}`;
        return (
          <Card key={cluster.id} className="bg-background/60">
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge>{cluster.id}</Badge>
                    {cluster.tipo ? <Badge variant="secondary">{titleFromValue(cluster.tipo)}</Badge> : null}
                    <Badge variant={counter?.met ? "default" : "outline"}>Limiar: {threshold}</Badge>
                    <Badge variant={counter?.met ? "default" : "outline"}>{counter?.checked ?? 0}/{counter?.threshold ?? 1}</Badge>
                  </div>
                  <CardTitle>{cluster.nome ?? `Cluster ${clusterIndex + 1}`}</CardTitle>
                  {cluster.descricao ? <CardDescription>{cluster.descricao}</CardDescription> : null}
                </div>
                <Badge variant="outline">{cluster.sintomas.length} itens</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3 xl:grid-cols-2">
                {cluster.sintomas.map((symptom) => (
                  <Card key={symptom.id} className="py-4">
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          checked={assessment.state.symptomChecked[symptom.id] ?? false}
                          onCheckedChange={(checked) => assessment.setSymptomChecked(symptom.id, checked === true)}
                          aria-label={`Marcar ${symptom.rotulo ?? symptom.id}`}
                          className="mt-1"
                        />
                        <div className="min-w-0 flex-1 space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="outline">{symptom.id}</Badge>
                            <h4 className="text-sm font-semibold text-card-foreground">{symptom.rotulo ?? symptom.texto ?? symptom.id}</h4>
                          </div>
                          {symptom.desc ?? symptom.descricao ?? symptom.texto ? <p className="text-sm leading-6 text-muted-foreground">{symptom.desc ?? symptom.descricao ?? symptom.texto}</p> : null}
                          {symptom.pergunta ? <p className="rounded-lg border border-primary/20 bg-primary/5 p-3 text-sm leading-6"><span className="font-semibold text-primary">Pergunta-guia: </span>{symptom.pergunta}</p> : null}
                        </div>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-[10rem_1fr]">
                        <SeveritySelect value={assessment.state.symptomSeverity[symptom.id] ?? "ausente"} onValueChange={(value) => assessment.setSymptomSeverity(symptom.id, value)} />
                        <Textarea value={assessment.state.symptomNotes[symptom.id] ?? ""} onChange={(event) => assessment.setSymptomNote(symptom.id, event.target.value)} placeholder="Observação clínica do item" className="min-h-16 bg-background text-sm text-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Textarea value={assessment.state.clusterNotes[cluster.id] ?? ""} onChange={(event) => assessment.setClusterNote(cluster.id, event.target.value)} placeholder="Observações clínicas do cluster, exemplos, prejuízos, contexto e fontes." className="min-h-24 bg-background text-sm text-foreground" />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

function ChoiceGroup({ title, value, selected, onToggle }: { readonly title: string; readonly value: unknown; readonly selected: Record<string, boolean>; readonly onToggle: (id: string, checked: boolean) => void }) {
  const items = normalizeChoiceItems(value);
  if (items.length === 0) return <p className="text-sm text-muted-foreground">Sem itens estruturados para {title.toLowerCase()}.</p>;
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <Card key={item.id} className="py-4">
          <CardContent className="flex items-start gap-3">
            <Checkbox checked={selected[item.id] ?? false} onCheckedChange={(checked) => onToggle(item.id, checked === true)} aria-label={`Marcar ${item.label}`} className="mt-1" />
            <div className="min-w-0 space-y-2">
              <div className="flex flex-wrap items-center gap-2"><Badge variant="outline">{item.id}</Badge><h4 className="text-sm font-semibold">{item.label}</h4></div>
              {item.description ? <p className="text-sm leading-6 text-muted-foreground">{item.description}</p> : null}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function ImpactSection({ data, assessment }: { readonly data: ClinicalDisorder; readonly assessment: ReturnType<typeof useDisorderAssessment> }) {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-[16rem_1fr]">
        <Field label="Impacto funcional global">
          <SeveritySelect value={assessment.state.impactFunctional} onValueChange={assessment.setImpactFunctional} />
        </Field>
        <Field label="Observação de impacto funcional">
          <Textarea value={assessment.state.sectionNotes.impacto_funcional ?? ""} onChange={(event) => assessment.setSectionNote("impacto_funcional", event.target.value)} placeholder="Prejuízo acadêmico, ocupacional, familiar, social, autocuidado, segurança ou sofrimento subjetivo." className="min-h-20 bg-background text-sm text-foreground" />
        </Field>
      </div>
      {sectionHasData(data.dominios_impacto) ? <CompactClinicalValue value={data.dominios_impacto} /> : null}
    </div>
  );
}

function SupplementalSection({ section, value, assessment }: { readonly section: string; readonly value: unknown; readonly assessment: ReturnType<typeof useDisorderAssessment> }) {
  if (!sectionHasData(value)) return null;
  return (
    <div className="space-y-4">
      <CompactClinicalValue value={value} />
      <Textarea value={assessment.state.sectionNotes[section] ?? ""} onChange={(event) => assessment.setSectionNote(section, event.target.value)} placeholder={`Observações clínicas sobre ${titleFromValue(section).toLowerCase()}.`} className="min-h-20 bg-background text-sm text-foreground" />
    </div>
  );
}

function AssessmentSidebar({ config, counters, assessment }: { readonly config: DisorderRenderConfig; readonly counters: ClusterCounter[]; readonly assessment: ReturnType<typeof useDisorderAssessment> }) {
  const selectedSpecs = Object.values(assessment.state.specifiers).filter(Boolean).length;
  const selectedComorbidities = Object.values(assessment.state.comorbidities).filter(Boolean).length;
  const requiredMet = Object.values(assessment.state.conditionalCriteria).filter(Boolean).length;
  return (
    <aside className="space-y-4 lg:sticky lg:top-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><FileText className="size-4" /> Síntese diagnóstica</CardTitle>
          <CardDescription>{config.sigla ?? config.nome}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {counters.map((counter) => (
              <div key={counter.id} className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background/60 p-3 text-sm">
                <span className="min-w-0 truncate">{counter.label}</span>
                <Badge variant={counter.met ? "default" : "outline"}>{counter.checked}/{counter.threshold}</Badge>
              </div>
            ))}
          </div>
          <Separator />
          <div className="grid grid-cols-2 gap-2 text-sm">
            <Badge variant="outline">Condicionais: {requiredMet}</Badge>
            <Badge variant="outline">Especificadores: {selectedSpecs}</Badge>
            <Badge variant="outline">Comorbidades/DDx: {selectedComorbidities}</Badge>
            <Badge variant={assessment.state.impactFunctional === "ausente" ? "outline" : "default"}>Impacto: {titleFromValue(assessment.state.impactFunctional)}</Badge>
          </div>
          <Separator />
          <div className="max-h-96 overflow-auto rounded-xl border border-border bg-background p-3">
            <pre className="whitespace-pre-wrap text-xs leading-5 text-muted-foreground">{assessment.state.markdown}</pre>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const element = document.createElement("textarea");
  element.value = text;
  document.body.appendChild(element);
  element.select();
  document.execCommand("copy");
  document.body.removeChild(element);
}

export function DisorderRenderer({ data, config }: { readonly data: ClinicalDisorder; readonly config: DisorderRenderConfig }) {
  const assessment = useDisorderAssessment(data, config);
  const [openSections, setOpenSections] = useState<string[]>([...formSectionIds]);
  const [copyFeedback, setCopyFeedback] = useState("Copiar Markdown");
  const supplementalSections = useMemo(() => clinicalSections.filter((section) => !["criterios_condicionais", "especificadores", "dominios_impacto", "comorbidades_frequentes", "diagnostico_diferencial"].includes(section)), []);

  const handleCopy = async () => {
    const markdown = assessment.buildMarkdown();
    assessment.refreshMarkdown();
    try {
      await copyText(markdown);
      setCopyFeedback("Copiado");
      window.setTimeout(() => setCopyFeedback("Copiar Markdown"), 1800);
    } catch {
      setCopyFeedback("Falha ao copiar");
      window.setTimeout(() => setCopyFeedback("Copiar Markdown"), 1800);
    }
  };

  const expandAll = () => setOpenSections([...formSectionIds, ...supplementalSections]);
  const collapseAll = () => setOpenSections([]);

  return (
    <main className="min-h-full bg-bg px-4 py-6 text-text-1 md:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5">
        <Header data={data} config={config} />
        <div className="flex flex-wrap gap-2">
          <Button type="button" onClick={assessment.refreshMarkdown}><RefreshCcw className="mr-2 size-4" />Atualizar síntese</Button>
          <Button type="button" variant="outline" onClick={handleCopy}><Clipboard className="mr-2 size-4" />{copyFeedback}</Button>
          <Button type="button" variant="outline" onClick={assessment.reset}><RotateCcw className="mr-2 size-4" />Limpar avaliação</Button>
          <Button type="button" variant="outline" onClick={() => window.print()}><Printer className="mr-2 size-4" />Imprimir</Button>
          <Button type="button" variant="ghost" onClick={expandAll}>Expandir todos</Button>
          <Button type="button" variant="ghost" onClick={collapseAll}>Recolher todos</Button>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Accordion type="multiple" value={openSections} onValueChange={setOpenSections} className="bg-surface">
            <AccordionItem value="identificacao">
              <AccordionTrigger><SectionTitle title="Identificação e anamnese" badge="Obrigatório" /></AccordionTrigger>
              <AccordionContent><PatientSection assessment={assessment} /></AccordionContent>
            </AccordionItem>
            <AccordionItem value="clusters">
              <AccordionTrigger><SectionTitle title="Critérios e sintomas" badge={`${assessment.clusterCounters.filter((item) => item.met).length}/${assessment.clusterCounters.length} clusters`} /></AccordionTrigger>
              <AccordionContent><SymptomClusters data={data} assessment={assessment} /></AccordionContent>
            </AccordionItem>
            <AccordionItem value="criterios_condicionais">
              <AccordionTrigger><SectionTitle title="Critérios condicionais" badge={`${Object.values(assessment.state.conditionalCriteria).filter(Boolean).length} marcados`} /></AccordionTrigger>
              <AccordionContent><ChoiceGroup title="Critérios condicionais" value={data.criterios_condicionais} selected={assessment.state.conditionalCriteria} onToggle={(id, checked) => assessment.setToggle("conditionalCriteria", id, checked)} /></AccordionContent>
            </AccordionItem>
            <AccordionItem value="especificadores">
              <AccordionTrigger><SectionTitle title="Especificadores, DDx e comorbidades" badge={`${Object.values(assessment.state.specifiers).filter(Boolean).length + Object.values(assessment.state.comorbidities).filter(Boolean).length} selecionados`} /></AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  <div><h3 className="mb-3 text-base font-semibold">Especificadores</h3><ChoiceGroup title="Especificadores" value={data.especificadores} selected={assessment.state.specifiers} onToggle={(id, checked) => assessment.setToggle("specifiers", id, checked)} /></div>
                  <div><h3 className="mb-3 text-base font-semibold">Comorbidades frequentes</h3><ChoiceGroup title="Comorbidades" value={data.comorbidades_frequentes} selected={assessment.state.comorbidities} onToggle={(id, checked) => assessment.setToggle("comorbidities", id, checked)} /></div>
                  <div><h3 className="mb-3 text-base font-semibold">Diagnóstico diferencial</h3><ChoiceGroup title="Diagnóstico diferencial" value={data.diagnostico_diferencial} selected={assessment.state.comorbidities} onToggle={(id, checked) => assessment.setToggle("comorbidities", id, checked)} /></div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="impacto">
              <AccordionTrigger><SectionTitle title="Impacto funcional" badge={titleFromValue(assessment.state.impactFunctional)} /></AccordionTrigger>
              <AccordionContent><ImpactSection data={data} assessment={assessment} /></AccordionContent>
            </AccordionItem>
            {supplementalSections.map((section) => sectionHasData(data[section]) ? (
              <AccordionItem key={section} value={section}>
                <AccordionTrigger><SectionTitle title={titleFromValue(section)} badge="Complementar" /></AccordionTrigger>
                <AccordionContent><SupplementalSection section={section} value={data[section]} assessment={assessment} /></AccordionContent>
              </AccordionItem>
            ) : null)}
            <AccordionItem value="markdown">
              <AccordionTrigger><SectionTitle title="Markdown clínico" badge="Copiável" /></AccordionTrigger>
              <AccordionContent>
                <Textarea value={assessment.state.markdown} onChange={(event) => assessment.setSectionNote("markdown_manual", event.target.value)} readOnly className="min-h-96 bg-background font-mono text-xs text-foreground" />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <AssessmentSidebar config={config} counters={assessment.clusterCounters} assessment={assessment} />
        </div>
      </div>
    </main>
  );
}

function SectionTitle({ title, badge }: { readonly title: string; readonly badge: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-base font-semibold text-text-1">{title}</span>
      <Badge variant="outline">{badge}</Badge>
    </div>
  );
}
