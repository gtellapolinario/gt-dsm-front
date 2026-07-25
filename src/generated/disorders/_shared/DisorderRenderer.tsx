// src/generated/disorders/_shared/DisorderRenderer.tsx
// Renderer único dos 62 transtornos. Layout clonado do guia de referência
// (scripts/tdah.html): header fixo com ações, coluna esquerda de seções em
// acordeão (identificação, critérios, clusters, impacto, comorbidades, DDx,
// especificadores, complementares) e coluna direita sticky com o Painel de
// Critérios + preview Markdown ao vivo. Tudo dirigido pelo payload clínico.

import { useMemo, useState, type ReactNode } from "react";
import {
  Activity,
  BookOpen,
  Brain,
  Briefcase,
  Cake,
  ChevronsDown,
  ChevronsUp,
  ClipboardList,
  Clock,
  Copy,
  FileSpreadsheet,
  FileText,
  GraduationCap,
  Info,
  Layers,
  ListChecks,
  MessageSquare,
  MessageSquarePlus,
  Printer,
  RotateCcw,
  SearchCheck,
  SlidersHorizontal,
  TrendingUp,
  User,
  UserPen,
  Users,
  VenusAndMars,
  type LucideIcon,
} from "lucide-react";
import type { ClinicalDisorder } from "./schema";
import {
  useDisorderAssessment,
  type ClusterCounter,
} from "./hooks/useDisorderAssessment";
import {
  getVisibleEntries,
  isRecord,
  normalizeChoiceItems,
  previewText,
  sectionHasData,
  stringifyClinicalValue,
  titleFromValue,
  type SeverityLevel,
} from "./utils/disorderDataAccess";
import { cn } from "@/lib/utils";
import { getIcone } from "@/lib/mapear-icones";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Markdown, MarkdownInline } from "./Markdown";
/** Ícone lucide a partir do `icone_fa` (Font Awesome) presente no payload clínico. */
function itemIcon(raw: unknown): LucideIcon | null {
  return isRecord(raw) && typeof raw.icone_fa === "string"
    ? getIcone(raw.icone_fa)
    : null;
}

function ItemIcon({ raw }: { readonly raw: unknown }) {
  const Icon = itemIcon(raw);
  return Icon ? <Icon className="mr-1 inline h-3 w-3" /> : null;
}

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
  "dominios_impacto",
  "diagnostico_diferencial",
  "comorbidades_frequentes",
  "instrumentos_complementares",
  "prevalencia",
  "curso_desenvolvimento",
] as const;

const hiddenKeys = new Set([
  "id",
  "metadados",
  "master_metadata",
  "inventory_notes",
  "icone_fa",
]);

type Assessment = ReturnType<typeof useDisorderAssessment>;

/* ─── Primitivos visuais (tokens do app, cara da referência) ────────────── */

function CountBadge({
  n,
  total,
  met,
}: {
  readonly n: number | string;
  readonly total?: number | string;
  readonly met?: boolean;
}) {
  return (
    <span
      className={cn(
        "text-sm font-semibold px-2.5 py-0.5 rounded-full transition-colors",
        met ? "bg-green-100 text-green-700" : "bg-surface-2 text-text-3",
      )}
    >
      {n}
      {total !== undefined ? `/${total}` : ""}
    </span>
  );
}

function Section({
  id,
  icon: Icon,
  iconClass = "text-blue-600",
  title,
  badge,
  children,
}: {
  readonly id: string;
  readonly icon: LucideIcon;
  readonly iconClass?: string;
  readonly title: ReactNode;
  readonly badge?: ReactNode;
  readonly children: ReactNode;
}) {
  return (
    <AccordionItem
      value={id}
      className="bg-surface rounded-xl border border-border shadow-sm overflow-hidden not-last:border-b-0 data-open:bg-transparent"
    >
      <AccordionTrigger className="bg-muted/60 w-full items-center px-5 py-3 text-md hover:bg-muted hover:no-underline transition-colors cursor-pointer">
        <span className="flex flex-1 items-center justify-between gap-2">
          <span className={cn("flex items-center gap-2 font-bold", iconClass)}>
            <Icon className="h-4 w-4" />
            <span className="text-text">{title}</span>
          </span>
          {badge ? (
            <span className="flex items-center gap-2">{badge}</span>
          ) : null}
        </span>
      </AccordionTrigger>
      <AccordionContent className="border-t border-border p-0 [&_p:not(:last-child)]:mb-0">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
}

function ToggleChip({
  active,
  onClick,
  children,
}: {
  readonly active: boolean;
  readonly onClick: () => void;
  readonly children: ReactNode;
}) {
  return (
    <Toggle
      variant="outline"
      size="sm"
      pressed={active}
      onPressedChange={() => onClick()}
      className="rounded-full font-semibold aria-pressed:bg-accent aria-pressed:border-primary aria-pressed:text-primary"
    >
      {children}
    </Toggle>
  );
}

function SymptomSeveritySelect({
  value,
  onChange,
}: {
  readonly value: SeverityLevel;
  readonly onChange: (value: SeverityLevel) => void;
}) {
  return (
    <Select value={value} onValueChange={(v) => onChange(v as SeverityLevel)}>
      <SelectTrigger size="sm" className="w-[96px]" title="Gravidade">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ausente">—</SelectItem>
        <SelectItem value="leve">Leve</SelectItem>
        <SelectItem value="moderado">Moderado</SelectItem>
        <SelectItem value="grave">Grave</SelectItem>
      </SelectContent>
    </Select>
  );
}

/* ─── Seções ────────────────────────────────────────────────────────────── */

function IdentificationSection({
  assessment,
}: {
  readonly assessment: Assessment;
}) {
  const { state, setPatientField } = assessment;
  return (
    <div className="p-5 space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Field>
          <FieldLabel htmlFor="paciente">
            <User className="h-3.5 w-3.5" /> Nome / ID
          </FieldLabel>
          <Input
            id="paciente"
            type="text"
            placeholder="Identificação"
            value={state.patient.nomeId}
            onChange={(e) => setPatientField("nomeId", e.target.value)}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="dataNasc">
            <Cake className="h-3.5 w-3.5" /> Data de nascimento
          </FieldLabel>
          <Input
            id="dataNasc"
            type="date"
            value={state.patient.dataNascimento}
            onChange={(e) => setPatientField("dataNascimento", e.target.value)}
          />
        </Field>
        <Field>
          <FieldLabel>
            <VenusAndMars className="h-3.5 w-3.5" /> Sexo
          </FieldLabel>
          <RadioGroup
            value={state.patient.sexo}
            onValueChange={(v) => setPatientField("sexo", v)}
            className="flex items-center gap-4 h-9"
          >
            <div className="flex items-center gap-1.5">
              <RadioGroupItem value="M" id="sexo-m" />
              <Label htmlFor="sexo-m">M</Label>
            </div>
            <div className="flex items-center gap-1.5">
              <RadioGroupItem value="F" id="sexo-f" />
              <Label htmlFor="sexo-f">F</Label>
            </div>
          </RadioGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="genero">
            <Users className="h-3.5 w-3.5" /> Gênero
          </FieldLabel>
          <Select
            value={state.patient.genero}
            onValueChange={(v) => setPatientField("genero", v)}
          >
            <SelectTrigger id="genero" className="w-full">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mulher cis">Mulher cis</SelectItem>
              <SelectItem value="Homem cis">Homem cis</SelectItem>
              <SelectItem value="Mulher trans">Mulher trans</SelectItem>
              <SelectItem value="Homem trans">Homem trans</SelectItem>
              <SelectItem value="Não-binário">Não-binário</SelectItem>
              <SelectItem value="Outro">Outro</SelectItem>
              <SelectItem value="Prefiro não informar">
                Prefiro não informar
              </SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field>
          <FieldLabel htmlFor="escolaridade">
            <GraduationCap className="h-3.5 w-3.5" /> Escolaridade
          </FieldLabel>
          <Select
            value={state.patient.escolaridade}
            onValueChange={(v) => setPatientField("escolaridade", v)}
          >
            <SelectTrigger id="escolaridade" className="w-full">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Ensino Fundamental Incompleto">
                Ensino Fundamental Incompleto
              </SelectItem>
              <SelectItem value="Ensino Fundamental Completo">
                Ensino Fundamental Completo
              </SelectItem>
              <SelectItem value="Ensino Médio Incompleto">
                Ensino Médio Incompleto
              </SelectItem>
              <SelectItem value="Ensino Médio Completo">
                Ensino Médio Completo
              </SelectItem>
              <SelectItem value="Ensino Técnico">Ensino Técnico</SelectItem>
              <SelectItem value="Ensino Superior Incompleto">
                Ensino Superior Incompleto
              </SelectItem>
              <SelectItem value="Ensino Superior Completo">
                Ensino Superior Completo
              </SelectItem>
              <SelectItem value="Pós-graduação">Pós-graduação</SelectItem>
              <SelectItem value="Mestrado">Mestrado</SelectItem>
              <SelectItem value="Doutorado">Doutorado</SelectItem>
              <SelectItem value="Outro">Outro</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor="ocupacao">
            <Briefcase className="h-3.5 w-3.5" /> Ocupação atual
          </FieldLabel>
          <Input
            id="ocupacao"
            type="text"
            placeholder="Ex.: analista financeiro"
            value={state.patient.ocupacao}
            onChange={(e) => setPatientField("ocupacao", e.target.value)}
          />
        </Field>
      </div>
      <Field>
        <FieldLabel htmlFor="queixa">
          <MessageSquarePlus className="h-3.5 w-3.5" /> Motivo da consulta e
          observações
        </FieldLabel>
        <Textarea
          id="queixa"
          rows={3}
          placeholder="Descreva o motivo da consulta e observações iniciais"
          value={state.patient.queixaPrincipal}
          onChange={(e) => setPatientField("queixaPrincipal", e.target.value)}
        />
      </Field>
    </div>
  );
}

function ConditionalCriteriaSection({
  data,
  assessment,
}: {
  readonly data: ClinicalDisorder;
  readonly assessment: Assessment;
}) {
  const items = normalizeChoiceItems(data.criterios_condicionais);
  if (items.length === 0) return null;

  // A letra do criterio ("B", "C"...) e o identificador clinico exibido;
  // o id snake_case do JSON nao aparece na UI.
  const letterOf = (raw: unknown): string | null =>
    isRecord(raw) && typeof raw.letra === "string" ? raw.letra : null;

  return (
    <div className="p-5 space-y-3">
      <p className="text-sm text-text-3">
        Critérios obrigatórios para o diagnóstico. Clique para confirmar cada
        item.
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const letter = letterOf(item.raw);
          return (
            <ToggleChip
              key={item.id}
              active={assessment.state.conditionalCriteria[item.id] ?? false}
              onClick={() =>
                assessment.setToggle(
                  "conditionalCriteria",
                  item.id,
                  !(assessment.state.conditionalCriteria[item.id] ?? false),
                )
              }
            >
              <ItemIcon raw={item.raw} />
              {letter ? (
                <span className="font-mono text-sm mr-1 opacity-70">
                  {letter}
                </span>
              ) : null}
              {item.label}
            </ToggleChip>
          );
        })}
      </div>
      {items.some((item) => item.description) ? (
        <ul className="space-y-1 pt-1">
          {items
            .filter((item) => item.description)
            .map((item) => {
              const letter = letterOf(item.raw);
              return (
                <li
                  key={item.id}
                  className="text-sm text-text-3 leading-relaxed"
                >
                  <span className="font-semibold text-text-2">
                    {letter ? `${letter} — ${item.label}` : item.label}:
                  </span>{" "}
                  {item.description}
                </li>
              );
            })}
        </ul>
      ) : null}
    </div>
  );
}

function ClusterSectionBody({
  cluster,
  assessment,
}: {
  readonly cluster: NonNullable<ClinicalDisorder["clusters_sintomas"]>[number];
  readonly assessment: Assessment;
}) {
  return (
    <div>
      {cluster.descricao ? (
        <p className="px-5 pt-4 text-sm text-text-3 leading-relaxed">
          {cluster.descricao}
        </p>
      ) : null}
      <div className="p-5 space-y-1">
        {cluster.sintomas.map((symptom) => {
          const checked = assessment.state.symptomChecked[symptom.id] ?? false;
          return (
            <div
              key={symptom.id}
              className="flex items-start gap-3 p-2.5 rounded-lg transition hover:bg-surface-2"
            >
              <Checkbox
                id={`sym-${symptom.id}`}
                checked={checked}
                onCheckedChange={(v) =>
                  assessment.setSymptomChecked(symptom.id, v === true)
                }
                className="mt-0.5"
                aria-label={`Marcar ${symptom.rotulo ?? symptom.id}`}
              />
              <label
                htmlFor={`sym-${symptom.id}`}
                className="flex-1 cursor-pointer select-none"
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm font-semibold tracking-wide uppercase text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                    {symptom.id}
                  </span>
                  <span className="text-md font-semibold text-text">
                    {symptom.rotulo ?? symptom.texto ?? symptom.id}
                  </span>
                </div>
                {(symptom.desc ?? symptom.descricao ?? symptom.texto) ? (
                  <p className="text-sm text-text-2 leading-relaxed mb-1">
                    {symptom.desc ?? symptom.descricao ?? symptom.texto}
                  </p>
                ) : null}
                {symptom.pergunta ? (
                  <p className="text-sm text-text-3 italic leading-relaxed">
                    <MessageSquare className="mr-1 inline h-3 w-3 not-italic" />
                    {symptom.pergunta}
                  </p>
                ) : null}
              </label>
              <SymptomSeveritySelect
                value={
                  assessment.state.symptomSeverity[symptom.id] ?? "ausente"
                }
                onChange={(value) =>
                  assessment.setSymptomSeverity(symptom.id, value)
                }
              />
            </div>
          );
        })}
      </div>
      <div className="px-5 pb-4">
        <Field>
          <FieldLabel htmlFor={`obs-${cluster.id}`}>
            Observações clínicas — {cluster.nome ?? cluster.id}
          </FieldLabel>
          <Textarea
            id={`obs-${cluster.id}`}
            rows={2}
            placeholder="Exemplos, frequência, contexto, fontes de informação..."
            value={assessment.state.clusterNotes[cluster.id] ?? ""}
            onChange={(e) =>
              assessment.setClusterNote(cluster.id, e.target.value)
            }
          />
        </Field>
      </div>
    </div>
  );
}

function ChoiceChipsSection({
  data,
  group,
  hint,
  noteKey,
  noteLabel,
  assessment,
}: {
  readonly data: unknown;
  readonly group: "specifiers" | "comorbidities";
  readonly hint: string;
  readonly noteKey: string;
  readonly noteLabel: string;
  readonly assessment: Assessment;
}) {
  const items = normalizeChoiceItems(data);
  if (items.length === 0) return null;
  return (
    <div className="p-5 space-y-3">
      <p className="text-sm text-text-3">{hint}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <ToggleChip
            key={item.id}
            active={assessment.state[group][item.id] ?? false}
            onClick={() =>
              assessment.setToggle(
                group,
                item.id,
                !(assessment.state[group][item.id] ?? false),
              )
            }
          >
            <ItemIcon raw={item.raw} />
            {item.label}
          </ToggleChip>
        ))}
      </div>
      <Field>
        <FieldLabel htmlFor={`note-${noteKey}`}>{noteLabel}</FieldLabel>
        <Textarea
          id={`note-${noteKey}`}
          rows={2}
          value={assessment.state.sectionNotes[noteKey] ?? ""}
          onChange={(e) => assessment.setSectionNote(noteKey, e.target.value)}
        />
      </Field>
    </div>
  );
}

function DifferentialSection({
  data,
  assessment,
}: {
  readonly data: ClinicalDisorder;
  readonly assessment: Assessment;
}) {
  const items = normalizeChoiceItems(data.diagnostico_diferencial);
  if (items.length === 0) return null;
  return (
    <div className="p-5 space-y-3">
      <p className="text-sm text-text-3">
        Confirme se cada condição foi considerada e excluída.
      </p>
      <div className="space-y-1">
        {items.map((item) => {
          const checked = assessment.state.comorbidities[item.id] ?? false;
          return (
            <div
              key={item.id}
              className="flex items-start gap-3 p-2.5 rounded-lg transition hover:bg-surface-2"
            >
              <Checkbox
                id={`ddx-${item.id}`}
                checked={checked}
                onCheckedChange={(v) =>
                  assessment.setToggle("comorbidities", item.id, v === true)
                }
                className="mt-0.5"
              />
              <label
                htmlFor={`ddx-${item.id}`}
                className="flex-1 cursor-pointer select-none"
              >
                <span className="text-md font-semibold text-text">
                  {item.label}
                </span>
                {item.description ? (
                  <p className="text-sm text-text-2 leading-relaxed">
                    {item.description}
                  </p>
                ) : null}
              </label>
            </div>
          );
        })}
      </div>
      <Field>
        <FieldLabel htmlFor="note-ddx">
          Notas sobre diagnóstico diferencial
        </FieldLabel>
        <Textarea
          id="note-ddx"
          rows={2}
          value={assessment.state.sectionNotes.diagnostico_diferencial ?? ""}
          onChange={(e) =>
            assessment.setSectionNote("diagnostico_diferencial", e.target.value)
          }
        />
      </Field>
    </div>
  );
}

function ImpactSection({
  data,
  assessment,
}: {
  readonly data: ClinicalDisorder;
  readonly assessment: Assessment;
}) {
  return (
    <div className="p-5 space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-[12rem_1fr] gap-3 items-start">
        <Field>
          <FieldLabel htmlFor="impacto-global">
            Impacto funcional global
          </FieldLabel>
          <Select
            value={assessment.state.impactFunctional}
            onValueChange={(v) =>
              assessment.setImpactFunctional(v as SeverityLevel)
            }
          >
            <SelectTrigger id="impacto-global" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ausente">Sem prejuízo</SelectItem>
              <SelectItem value="leve">Leve</SelectItem>
              <SelectItem value="moderado">Moderado</SelectItem>
              <SelectItem value="grave">Grave</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor="impacto-obs">
            Observações sobre impacto funcional
          </FieldLabel>
          <Textarea
            id="impacto-obs"
            rows={2}
            placeholder="Prejuízo acadêmico, ocupacional, familiar, social, autocuidado, segurança..."
            value={assessment.state.sectionNotes.impacto_funcional ?? ""}
            onChange={(e) =>
              assessment.setSectionNote("impacto_funcional", e.target.value)
            }
          />
        </Field>
      </div>
      {sectionHasData(data.dominios_impacto) ? (
        <CompactClinicalValue value={data.dominios_impacto} />
      ) : null}
    </div>
  );
}

function CompactClinicalValue({
  value,
}: {
  readonly value: unknown;
}): ReactNode {
  const text = previewText(value);
  if (text !== null) return <Markdown text={text} />;
  if (Array.isArray(value)) {
    if (value.length === 0)
      return (
        <span className="text-md text-text-3">Sem itens registrados.</span>
      );
    return (
      <ul className="space-y-1.5">
        {value.slice(0, 6).map((item, index) => (
          <li
            key={`${stringifyClinicalValue(item)}-${index}`}
            className="flex gap-2 text-md text-text-2"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
            <span>
              <MarkdownInline text={stringifyClinicalValue(item)} />
            </span>
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
            <div
              key={key}
              className="rounded-lg bg-surface-2 border border-border p-3"
            >
              <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-text-3">
                {titleFromValue(key)}
              </dt>
              <dd className="mt-1">
                <Markdown text={stringifyClinicalValue(itemValue)} />
              </dd>
            </div>
          ))}
      </dl>
    );
  }
  return null;
}

function SupplementalSection({
  section,
  value,
  assessment,
}: {
  readonly section: string;
  readonly value: unknown;
  readonly assessment: Assessment;
}) {
  if (!sectionHasData(value)) return null;
  return (
    <div className="p-5 space-y-3">
      <CompactClinicalValue value={value} />
      <Field>
        <FieldLabel htmlFor={`note-${section}`}>
          Observações clínicas — {titleFromValue(section).toLowerCase()}
        </FieldLabel>
        <Textarea
          id={`note-${section}`}
          rows={2}
          value={assessment.state.sectionNotes[section] ?? ""}
          onChange={(e) => assessment.setSectionNote(section, e.target.value)}
        />
      </Field>
    </div>
  );
}

/* ─── Painel de Critérios + Markdown (coluna direita) ───────────────────── */

function CriteriaPanel({
  counters,
  assessment,
}: {
  readonly counters: ClusterCounter[];
  readonly assessment: Assessment;
}) {
  const requiredMet = Object.values(
    assessment.state.conditionalCriteria,
  ).filter(Boolean).length;
  const selectedSpecs = Object.values(assessment.state.specifiers).filter(
    Boolean,
  ).length;
  const selectedComorbidities = Object.values(
    assessment.state.comorbidities,
  ).filter(Boolean).length;

  return (
    <div
      className={cn(
        "p-5 grid gap-3 items-start",
        counters.length > 0 ? "lg:grid-cols-[2fr_1fr]" : "",
      )}
    >
      {counters.length > 0 ? (
        <Card size="sm">
          <CardHeader>
            <CardTitle>Critérios por cluster</CardTitle>
            <CardDescription>
              Sintomas marcados em relação ao mínimo necessário
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {counters.map((counter) => (
                <div
                  key={counter.id}
                  className={cn(
                    "rounded-lg border p-3 text-center transition-colors",
                    counter.met
                      ? "border-green-300 bg-green-50"
                      : "border-border bg-surface",
                  )}
                >
                  <p
                    className="text-sm text-text-3 mb-1 truncate"
                    title={counter.label}
                  >
                    {counter.label}
                  </p>
                  <p className="text-2xl font-bold font-serif text-text tabular-nums">
                    {counter.checked}
                  </p>
                  <p className="text-sm text-text-3">
                    de {counter.threshold} necessários
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : null}

      <Card size="sm">
        <CardHeader>
          <CardTitle>Resumo da avaliação</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1.5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-2">Critérios condicionais</span>
            <CountBadge n={requiredMet} met={requiredMet > 0} />
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-2">Especificadores</span>
            <CountBadge n={selectedSpecs} met={selectedSpecs > 0} />
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-2">Comorbidades / DDx</span>
            <CountBadge
              n={selectedComorbidities}
              met={selectedComorbidities > 0}
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-2">Impacto funcional</span>
            <CountBadge
              n={titleFromValue(assessment.state.impactFunctional)}
              met={assessment.state.impactFunctional !== "ausente"}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ─── Utilidades ────────────────────────────────────────────────────────── */

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

/* ─── Guia Clínico Informativo (Resumo do Aplicador) ───────────────────── */

function ClinicalGuideSection({ data }: { readonly data: ClinicalDisorder }) {
  const rawData = data as any;
  const prevalencia = rawData.prevalencia;
  const curso = rawData.curso_desenvolvimento;
  const gravidade = rawData.rendering?.severity;
  const instrumentos: Array<{ nome?: string; sigla?: string }> =
    rawData.instrumentos_complementares ?? [];
  const subtipos: string[] = rawData.rendering?.subtypes_presentations ?? [];

  return (
    <div className="p-5 space-y-5">
      {/* Grade de 3 Cards de Resumo Rápidos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 📊 Prevalência & Epidemiologia */}
        <div className="bg-surface-2/60 rounded-xl p-4 border border-border space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Activity className="h-4 w-4" />
            <span>Prevalência & Demografia</span>
          </div>
          <div className="text-xs space-y-1 text-text-2">
            {prevalencia?.populacao_geral ? (
              <p>
                <strong className="text-text font-semibold">Geral:</strong>{" "}
                {String(prevalencia.populacao_geral)}
              </p>
            ) : null}
            {prevalencia?.proporcao_sexo ? (
              <p>
                <strong className="text-text font-semibold">
                  Razão (♀:♂):
                </strong>{" "}
                {String(prevalencia.proporcao_sexo)}
              </p>
            ) : null}
            {prevalencia?.notas ? (
              <p className="text-[11px] text-text-3 italic mt-1">
                {String(prevalencia.notas)}
              </p>
            ) : null}
            {!prevalencia?.populacao_geral &&
            !prevalencia?.proporcao_sexo &&
            !prevalencia?.notas ? (
              <p className="text-text-3 italic">
                Dados epidemiológicos padronizados do DSM-5-TR.
              </p>
            ) : null}
          </div>
        </div>

        {/* ⏳ Curso & Desenvolvimento */}
        <div className="bg-surface-2/60 rounded-xl p-4 border border-border space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Clock className="h-4 w-4" />
            <span>Curso & Desenvolvimento</span>
          </div>
          <div className="text-xs space-y-1 text-text-2">
            {curso?.idade_inicio_tipica ? (
              <p>
                <strong className="text-text font-semibold">
                  Início Típico:
                </strong>{" "}
                {String(curso.idade_inicio_tipica)}
              </p>
            ) : null}
            {curso?.trajetoria ? (
              <p>
                <strong className="text-text font-semibold">Trajetória:</strong>{" "}
                {String(curso.trajetoria)}
              </p>
            ) : null}
            {curso?.prognostico ? (
              <p className="text-[11px] text-text-3 italic mt-1">
                {String(curso.prognostico)}
              </p>
            ) : null}
            {!curso?.idade_inicio_tipica && !curso?.trajetoria ? (
              <p className="text-text-3 italic">
                Evolução longitudinal e curso clínico típicos do capítulo.
              </p>
            ) : null}
          </div>
        </div>

        {/* 📋 Instrumentos & Escalas */}
        <div className="bg-surface-2/60 rounded-xl p-4 border border-border space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <FileSpreadsheet className="h-4 w-4" />
            <span>Escalas Complementares</span>
          </div>
          {instrumentos.length > 0 ? (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {instrumentos.map((inst, idx) => (
                <span
                  key={idx}
                  title={inst.nome}
                  className="text-xs font-medium px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                >
                  {inst.sigla || inst.nome}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-xs text-text-3">
              Avaliação primariamente clínica baseada no checklist DSM-5-TR.
            </p>
          )}
        </div>
      </div>

      {/* Grade Inferior: Gravidade e Subtipos */}
      {gravidade?.levels?.length || subtipos.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {gravidade?.levels &&
          Array.isArray(gravidade.levels) &&
          gravidade.levels.length > 0 ? (
            <div className="bg-surface-2/40 rounded-xl p-4 border border-border space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-text-2">
                Parâmetros de Gravidade
              </h4>
              <ul className="space-y-1.5 text-xs">
                {gravidade.levels.map((lvl: any, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-semibold text-text min-w-[70px]">
                      {String(lvl.label || lvl.id)}:
                    </span>
                    <span className="text-text-2">{String(lvl.descritor)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {subtipos.length > 0 ? (
            <div className="bg-surface-2/40 rounded-xl p-4 border border-border space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-text-2">
                Subtipos / Especificadores Clínicos
              </h4>
              <ul className="list-disc pl-4 space-y-1 text-xs text-text-2">
                {subtipos.map((sub: string, i: number) => (
                  <li key={i}>{String(sub)}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

/* ─── Renderer principal ────────────────────────────────────────────────── */

export function DisorderRenderer({
  data,
  config,
}: {
  readonly data: ClinicalDisorder;
  readonly config: DisorderRenderConfig;
}) {
  const assessment = useDisorderAssessment(data, config);
  const [copyFeedback, setCopyFeedback] = useState("Copiar Markdown");

  const metaName = data.meta.nome_completo ?? data.meta.nome ?? config.nome;
  const subtitle = [
    config.capitulo_nome ?? "DSM-5",
    config.faixa_etaria_alvo ? `faixa alvo: ${config.faixa_etaria_alvo}` : null,
  ]
    .filter(Boolean)
    .join(" · ");
  const codes = [
    ["DSM-5", config.codigo_dsm5],
    ["CID-10", config.codigo_cid10],
    ["CID-11", config.codigo_cid11],
  ] as const;

  const clusters = data.clusters_sintomas ?? [];
  const criteriaItems = normalizeChoiceItems(data.criterios_condicionais);
  const comorbidityItems = normalizeChoiceItems(data.comorbidades_frequentes);
  const ddxItems = normalizeChoiceItems(data.diagnostico_diferencial);
  const specifierItems = normalizeChoiceItems(data.especificadores);
  const supplementalSections = useMemo(
    () =>
      clinicalSections.filter(
        (section) =>
          ![
            "criterios_condicionais",
            "especificadores",
            "dominios_impacto",
            "comorbidades_frequentes",
            "diagnostico_diferencial",
          ].includes(section),
      ),
    [],
  );
  const visibleSupplemental = supplementalSections.filter((section) =>
    sectionHasData(data[section]),
  );

  // IDs das seções abertas por padrão (espelha a referência: formulário aberto,
  // seções analíticas recolhidas).
  const defaultOpen: string[] = ["identificacao", "painel"];
  if (criteriaItems.length > 0) defaultOpen.push("criterios");
  clusters.forEach((cluster) => defaultOpen.push(`cluster-${cluster.id}`));

  const [openSections, setOpenSections] = useState<string[]>(defaultOpen);

  const allSectionIds: string[] = ["identificacao", "guia-clinico"];
  if (criteriaItems.length > 0) allSectionIds.push("criterios");
  clusters.forEach((cluster) => allSectionIds.push(`cluster-${cluster.id}`));
  allSectionIds.push("impacto");
  if (comorbidityItems.length > 0) allSectionIds.push("comorbidades");
  if (ddxItems.length > 0) allSectionIds.push("ddx");
  if (specifierItems.length > 0) allSectionIds.push("especificadores");
  visibleSupplemental.forEach((section) => allSectionIds.push(section));
  allSectionIds.push("painel", "markdown");

  // Markdown ao vivo (como a referência: atualiza a cada mudança).
  const liveMarkdown = assessment.buildMarkdown();

  const handleCopy = async () => {
    try {
      await copyText(liveMarkdown);
      setCopyFeedback("Copiado!");
    } catch {
      setCopyFeedback("Falha ao copiar");
    }
    window.setTimeout(() => setCopyFeedback("Copiar Markdown"), 1800);
  };

  const handleReset = () => {
    if (window.confirm("Limpar todos os dados preenchidos?"))
      assessment.reset();
  };

  return (
    <div className="min-h-full bg-bg text-text">
      {/* ─── Header fixo ─── */}
      <header className="sticky top-0 z-40 bg-muted border-b border-border shadow-sm no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
              <Brain className="h-4.5 w-4.5 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg font-serif font-bold text-text leading-tight truncate">
                {metaName}
                {config.sigla ? (
                  <span className="ml-2 text-md font-sans font-semibold text-text-3">
                    {config.sigla}
                  </span>
                ) : null}
              </h1>
              <p className="text-sm text-text-3 truncate">
                {subtitle}
                {codes.some(([, code]) => code)
                  ? ` · ${codes
                      .filter(([, code]) => code)
                      .map(([label, code]) => `${label}: ${code}`)
                      .join(" · ")}`
                  : ""}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setOpenSections(allSectionIds)}
            >
              <ChevronsDown data-icon="inline-start" />
              Expandir
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setOpenSections([])}
            >
              <ChevronsUp data-icon="inline-start" />
              Recolher
            </Button>
            <Button size="sm" onClick={() => window.print()}>
              <Printer data-icon="inline-start" />
              Imprimir
            </Button>
            <Button variant="destructive" size="sm" onClick={handleReset}>
              <RotateCcw data-icon="inline-start" />
              Limpar
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <Accordion
          type="multiple"
          value={openSections}
          onValueChange={setOpenSections}
          className="space-y-3 border-0"
        >
          <Section
            id="identificacao"
            icon={UserPen}
            title="Identificação do Paciente"
          >
            <IdentificationSection assessment={assessment} />
          </Section>

          <Section
            id="guia-clinico"
            icon={BookOpen}
            iconClass="text-emerald-600 dark:text-emerald-400"
            title="Guia Clínico & Informativo (Resumo do Aplicador)"
          >
            <ClinicalGuideSection data={data} />
          </Section>

          <Section id="painel" icon={ListChecks} title="Painel de Critérios">
            <CriteriaPanel
              counters={assessment.clusterCounters}
              assessment={assessment}
            />
          </Section>

          {criteriaItems.length > 0 ? (
            <Section
              id="criterios"
              icon={ListChecks}
              title="Critérios Condicionais"
              badge={
                <CountBadge
                  n={
                    Object.values(assessment.state.conditionalCriteria).filter(
                      Boolean,
                    ).length
                  }
                  total={criteriaItems.length}
                  met={criteriaItems.every(
                    (item) => assessment.state.conditionalCriteria[item.id],
                  )}
                />
              }
            >
              <ConditionalCriteriaSection data={data} assessment={assessment} />
            </Section>
          ) : null}

          {clusters.map((cluster, index) => {
            const counter = assessment.clusterCounters.find(
              (item) => item.id === cluster.id,
            );
            return (
              <Section
                key={cluster.id}
                id={`cluster-${cluster.id}`}
                icon={ClipboardList}
                iconClass={index % 2 === 0 ? "text-amber-600" : "text-red-600"}
                title={`${cluster.id} – ${cluster.nome ?? `Cluster ${index + 1}`}`}
                badge={
                  <CountBadge
                    n={counter?.checked ?? 0}
                    total={counter?.threshold ?? 1}
                    met={counter?.met}
                  />
                }
              >
                <ClusterSectionBody cluster={cluster} assessment={assessment} />
              </Section>
            );
          })}

          <Section
            id="impacto"
            icon={TrendingUp}
            title="Avaliação de Impacto Funcional"
          >
            <ImpactSection data={data} assessment={assessment} />
          </Section>

          {comorbidityItems.length > 0 ? (
            <Section
              id="comorbidades"
              icon={Layers}
              title="Comorbidades Frequentes"
              badge={
                <CountBadge
                  n={
                    Object.values(assessment.state.comorbidities).filter(
                      Boolean,
                    ).length
                  }
                  met={Object.values(assessment.state.comorbidities).some(
                    Boolean,
                  )}
                />
              }
            >
              <ChoiceChipsSection
                data={data.comorbidades_frequentes}
                group="comorbidities"
                hint="Selecione as condições em investigação ou já confirmadas."
                noteKey="comorbidades_frequentes"
                noteLabel="Detalhamento das comorbidades"
                assessment={assessment}
              />
            </Section>
          ) : null}

          {ddxItems.length > 0 ? (
            <Section
              id="ddx"
              icon={SearchCheck}
              iconClass="text-purple-700"
              title="Diagnóstico Diferencial (DDx)"
            >
              <DifferentialSection data={data} assessment={assessment} />
            </Section>
          ) : null}

          {specifierItems.length > 0 ? (
            <Section
              id="especificadores"
              icon={SlidersHorizontal}
              iconClass="text-violet-700"
              title="Especificadores"
              badge={
                <CountBadge
                  n={
                    Object.values(assessment.state.specifiers).filter(Boolean)
                      .length
                  }
                  met={Object.values(assessment.state.specifiers).some(Boolean)}
                />
              }
            >
              <ChoiceChipsSection
                data={data.especificadores}
                group="specifiers"
                hint="Selecione os especificadores aplicáveis ao quadro atual."
                noteKey="especificadores"
                noteLabel="Notas sobre especificadores"
                assessment={assessment}
              />
            </Section>
          ) : null}

          {visibleSupplemental.map((section) => (
            <Section
              key={section}
              id={section}
              icon={Info}
              iconClass="text-teal-700"
              title={titleFromValue(section)}
              badge={
                <span className="text-sm font-semibold px-2 py-0.5 rounded-full bg-surface-2 text-text-3">
                  complementar
                </span>
              }
            >
              <SupplementalSection
                section={section}
                value={data[section]}
                assessment={assessment}
              />
            </Section>
          ))}

          {/* ─── Botões de ação ─── */}
          <div className="flex flex-wrap items-center gap-3 no-print pt-1">
            <Button variant="outline" onClick={assessment.refreshMarkdown}>
              <RotateCcw data-icon="inline-start" /> Atualizar síntese
            </Button>
            <Button onClick={handleCopy}>
              <Copy data-icon="inline-start" /> {copyFeedback}
            </Button>
            <span className="text-sm text-text-3">
              Formato pronto para prontuário eletrônico ou Obsidian.
            </span>
          </div>

          {/* ─── Markdown: sempre por último ─── */}
          <Section
            id="markdown"
            icon={FileText}
            title="Pré-visualização Markdown"
            badge={
              <Button
                variant="secondary"
                size="xs"
                className="no-print"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy();
                }}
              >
                <Copy data-icon="inline-start" /> Copiar
              </Button>
            }
          >
            <div className="p-4">
              <pre className="text-text-2 bg-surface-2 rounded-lg border border-border p-4 overflow-auto max-h-[65vh] whitespace-pre-wrap leading-relaxed font-mono text-[0.8rem]">
                {liveMarkdown}
              </pre>
            </div>
            <div className="px-5 pb-4">
              <p className="text-sm text-text-3 leading-relaxed">
                Baseado nos critérios DSM-5/DSM-5-TR. Esta ferramenta é auxiliar
                e não substitui entrevista clínica, instrumentos validados ou
                julgamento profissional.
              </p>
            </div>
          </Section>
        </Accordion>
      </main>
    </div>
  );
}
