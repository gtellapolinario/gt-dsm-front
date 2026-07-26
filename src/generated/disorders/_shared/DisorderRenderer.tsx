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
  BookMarked,
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
  Gauge,
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
  Tags,
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
/** Ícone lucide a partir do nome no campo `icone` do payload clínico. */
function itemIcon(raw: unknown): LucideIcon | null {
  return isRecord(raw) && typeof raw.icone === "string"
    ? getIcone(raw.icone)
    : null;
}

function ItemIcon({ raw }: { readonly raw: unknown }) {
  const Icon = itemIcon(raw);
  return Icon ? <Icon className="mr-1 inline h-3 w-3" /> : null;
}

// Seções suplementares: apenas o que o Guia Clínico NÃO cobre.
// prevalencia, curso_desenvolvimento, gravidade, instrumentos_complementares
// e subtipos são apresentados pelo ClinicalGuideSection — reexibi-los aqui
// duplicava o conteúdo (sanitização 2026-07).
const clinicalSections = [
  "criterios_condicionais",
  "especificadores",
  "dominios_impacto",
  "diagnostico_diferencial",
  "comorbidades_frequentes",
] as const;

const hiddenKeys = new Set([
  "id",
  "metadados",
  "master_metadata",
  "inventory_notes",
  "icone",
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

/**
 * Critérios condicionais do payload + critério A sintetizado a partir do
 * cluster de sintomas (id "A") quando o payload não o traz como critério
 * condicional. `derivado_do_cluster` marca a origem para deduplicar depois;
 * se o payload já tem letra A, prevalece o payload e nada é sintetizado.
 */
function conditionalCriteriaItems(data: ClinicalDisorder) {
  const rawItems = normalizeChoiceItems(data.criterios_condicionais);
  const clusterA = data.clusters_sintomas?.find(
    (cluster) => cluster.id === "A",
  );
  const hasLetterA = rawItems.some(
    (item) => isRecord(item.raw) && item.raw.letra === "A",
  );
  if (hasLetterA || !clusterA) return rawItems;
  return [
    {
      id: "criterio-a-cluster",
      label: clusterA.nome ?? clusterA.id,
      description: clusterA.descricao ?? null,
      raw: { letra: "A", derivado_do_cluster: clusterA.id },
    },
    ...rawItems,
  ];
}

function ConditionalCriteriaSection({
  data,
  assessment,
}: {
  readonly data: ClinicalDisorder;
  readonly assessment: Assessment;
}) {
  const items = conditionalCriteriaItems(data);

  // A letra do criterio ("A", "B"...) e o identificador clinico exibido;
  // o id snake_case do JSON nao aparece na UI.
  const letterOf = (raw: unknown): string | null =>
    isRecord(raw) && typeof raw.letra === "string" ? raw.letra : null;

  if (items.length === 0) return null;

  return (
    <div className="p-5 space-y-3">
      <p className="text-sm text-text-3">
        Critérios obrigatórios para o diagnóstico. Marque cada item confirmado.
      </p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {items.map((item) => {
          const letter = letterOf(item.raw);
          const checked =
            assessment.state.conditionalCriteria[item.id] ?? false;
          return (
            <div
              key={item.id}
              className={cn(
                "flex items-start gap-3 rounded-lg border p-3 transition",
                checked
                  ? "border-primary bg-accent/60"
                  : "border-border hover:bg-surface-2",
              )}
            >
              <Checkbox
                id={`cc-${item.id}`}
                checked={checked}
                onCheckedChange={(v) =>
                  assessment.setToggle(
                    "conditionalCriteria",
                    item.id,
                    v === true,
                  )
                }
                className="mt-0.5"
                aria-label={`Confirmar critério ${letter ?? item.label}`}
              />
              <label
                htmlFor={`cc-${item.id}`}
                className="flex-1 cursor-pointer select-none space-y-1"
              >
                <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <ItemIcon raw={item.raw} />
                  {letter ? (
                    <span className="font-mono text-sm font-bold text-primary">
                      {letter}
                    </span>
                  ) : null}
                  <span className="text-sm font-semibold text-text">
                    {item.label}
                  </span>
                </span>
                {item.description ? (
                  <p className="text-sm text-text-2 leading-relaxed text-justify">
                    {item.description}
                  </p>
                ) : null}
              </label>
            </div>
          );
        })}
      </div>
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

function GuideCardHeader({
  icon: Icon,
  iconClass,
  children,
}: {
  readonly icon: LucideIcon;
  readonly iconClass: string;
  readonly children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 text-xs font-bold uppercase tracking-wider",
        iconClass,
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{children}</span>
    </div>
  );
}

/** Rótulos de subtipos a partir da chave canônica `subtipos.subtipos`. */
function subtiposLabelsOf(data: ClinicalDisorder): string[] {
  const rawData = data as any;
  const arr = rawData.subtipos?.subtipos;
  if (!Array.isArray(arr)) return [];
  return arr.map((s: any) =>
    typeof s === "string" ? s : String(s.label ?? s.nome ?? s.id),
  );
}

/** Escala ordinal de gravidade: a cor acompanha a posição no eixo. */
function SeverityScale({
  levels,
}: {
  readonly levels: Array<{ label: string; descritor: string | null }>;
}) {
  const tints = [
    "bg-emerald-800 dark:bg-emerald-800",
    "bg-amber-400 dark:bg-amber-500",
    "bg-orange-400 dark:bg-orange-500",
    "bg-red-400 dark:bg-red-500",
  ];
  return (
    <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:gap-4">
      {levels.map((lvl, i) => (
        <div key={i} className="min-w-0 sm:flex-1">
          <div
            className={cn(
              "h-1.5 rounded-full",
              tints[Math.min(i, tints.length - 1)],
            )}
          />
          <p className="mt-1.5 text-sm font-semibold text-text">{lvl.label}</p>
          {lvl.descritor ? (
            <p className="text-xs leading-relaxed text-text-3">
              {lvl.descritor}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

/**
 * Bloco de gravidade do guia, fiel ao contrato
 * `gravidade_dsm5tr_58_transtornos.md`: `classificacao_dsm` é a fonte da
 * verdade e decide a apresentação. `sem_niveis_formais` renderiza nota
 * informativa — nunca opção selecionável.
 */
function SeverityBlock({ data }: { readonly data: ClinicalDisorder }) {
  const g = (data as any).gravidade;
  if (!g?.classificacao_dsm) return null;

  const dominioLabel = (id: string) =>
    g.dominios?.find((d: any) => d.id === id)?.label ?? id;
  const nivel = (n: any): { label: string; descritor: string | null } => ({
    label: String(n.label ?? n.id),
    descritor: n.descritor
      ? String(n.descritor)
      : n.descritores_por_dominio
        ? Object.entries(n.descritores_por_dominio)
            .map(([k, v]) => `${dominioLabel(k)}: ${String(v)}`)
            .join(" ")
        : null,
  });

  const semNiveis = g.classificacao_dsm === "sem_niveis_formais";
  let body: ReactNode;
  if (semNiveis) {
    body = (
      <p className="mt-2 text-sm leading-relaxed text-text-2">
        {String(g.lembrete_aplicador)}
      </p>
    );
  } else if (Array.isArray(g.regras_por_episodio)) {
    body = g.regras_por_episodio.map((r: any) => (
      <div key={String(r.episodio)}>
        <p className="mt-3 text-xs font-bold uppercase tracking-wider text-text-2">
          {String(r.label)}
        </p>
        <SeverityScale levels={(r.niveis ?? []).map(nivel)} />
      </div>
    ));
  } else {
    body = (
      <>
        {Array.isArray(g.dominios) && g.dominios.length > 0 ? (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {g.dominios.map((d: any) => (
              <span
                key={String(d.id)}
                className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-text-2"
              >
                {String(d.label ?? d.id)}
              </span>
            ))}
          </div>
        ) : null}
        {g.condicao_aplicabilidade ? (
          <p className="mt-2 text-xs font-medium text-amber-700 dark:text-amber-400">
            {String(g.condicao_aplicabilidade)}
          </p>
        ) : null}
        {Array.isArray(g.niveis) && g.niveis.length > 0 ? (
          <SeverityScale levels={g.niveis.map(nivel)} />
        ) : null}
        {Array.isArray(g.niveis_referencia) && g.niveis_referencia.length > 0 ? (
          <SeverityScale levels={g.niveis_referencia.map(nivel)} />
        ) : null}
        {Array.isArray(g.escala?.niveis) ? (
          <SeverityScale
            levels={g.escala.niveis.map((n: any) => ({
              label: `${String(n.valor)} — ${String(n.label)}`,
              descritor: null,
            }))}
          />
        ) : null}
      </>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-surface-2/40 p-4">
      <GuideCardHeader icon={Gauge} iconClass="text-red-600 dark:text-red-400">
        Parâmetros de Gravidade
      </GuideCardHeader>
      {body}
      {!semNiveis && g.observacao ? (
        <p className="mt-3 text-xs leading-relaxed text-text-3">
          {String(g.observacao)}
        </p>
      ) : null}
      {!semNiveis && g.lembrete_aplicador ? (
        <p className="mt-2 border-t border-border pt-2 text-[11px] italic text-text-3">
          {String(g.lembrete_aplicador)}
        </p>
      ) : null}
    </div>
  );
}

/** O guia só existe quando há algo para mostrar: campo nulo não renderiza. */
function clinicalGuideHasData(data: ClinicalDisorder): boolean {
  const rawData = data as any;
  return Boolean(
    rawData.meta?.codigo?.dsm5 ||
    rawData.meta?.codigo?.cid10 ||
    rawData.meta?.codigo?.cid11 ||
    rawData.prevalencia?.populacao_geral ||
    rawData.prevalencia?.proporcao_sexo ||
    rawData.prevalencia?.variacoes_culturais ||
    rawData.prevalencia?.notas ||
    rawData.curso_desenvolvimento?.idade_inicio_tipica ||
    rawData.curso_desenvolvimento?.trajetoria ||
    rawData.curso_desenvolvimento?.prognostico ||
    rawData.gravidade?.classificacao_dsm != null ||
    subtiposLabelsOf(data).length > 0 ||
    rawData.instrumentos_complementares?.length > 0,
  );
}

function ClinicalGuideSection({ data }: { readonly data: ClinicalDisorder }) {
  const rawData = data as any;
  const prevalencia = rawData.prevalencia;
  const curso = rawData.curso_desenvolvimento;
  const instrumentos: Array<{ nome?: string; sigla?: string; uso?: string }> =
    rawData.instrumentos_complementares ?? [];
  const subtipos = subtiposLabelsOf(data);

  const codigos = [
    { sistema: "DSM-5", valor: rawData.meta?.codigo?.dsm5 },
    { sistema: "CID-10", valor: rawData.meta?.codigo?.cid10 },
    { sistema: "CID-11", valor: rawData.meta?.codigo?.cid11 },
  ].filter((codigo) => codigo.valor);
  const temCodigos = codigos.length > 0;

  const temPrevalencia = Boolean(
    prevalencia?.populacao_geral ||
    prevalencia?.proporcao_sexo ||
    prevalencia?.variacoes_culturais ||
    prevalencia?.notas,
  );
  const cursoEtapas = [
    { rotulo: "Início típico", valor: curso?.idade_inicio_tipica },
    { rotulo: "Trajetória", valor: curso?.trajetoria },
    { rotulo: "Prognóstico", valor: curso?.prognostico },
  ].filter((etapa) => etapa.valor);
  const temGravidade = rawData.gravidade?.classificacao_dsm != null;

  // Campos nulos não renderizam: sem dados, sem seção.
  if (
    !temCodigos &&
    !temPrevalencia &&
    cursoEtapas.length === 0 &&
    !temGravidade &&
    subtipos.length === 0 &&
    instrumentos.length === 0
  ) {
    return null;
  }

  const sex = [{ label: "sex", value: "(♀:♂)" }];

  return (
    <div className="p-5 space-y-4">
      {temPrevalencia || cursoEtapas.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
          {temPrevalencia ? (
            <div className="rounded-xl border border-border bg-surface-2/60 p-4">
              <GuideCardHeader
                icon={Activity}
                iconClass="text-blue-600 dark:text-blue-400"
              >
                Prevalência & Demografia
              </GuideCardHeader>
              {prevalencia.populacao_geral ? (
                <p className="mt-2 font-serif text-xl font-bold leading-snug text-text">
                  {String(prevalencia.populacao_geral)}
                </p>
              ) : null}
              {prevalencia.proporcao_sexo ? (
                <p className="mt-1.5 text-lg text-stone-700 ">
                  <span className="font-semibold text-text">
                    Razão{" "}
                    <span className="text-2xl text-stone-800">
                      {sex[0].value}
                    </span>
                  </span>{" "}
                  {String(prevalencia.proporcao_sexo)}
                </p>
              ) : null}
              {prevalencia.variacoes_culturais ? (
                <p className="mt-1.5 text-xs leading-relaxed text-text-2">
                  <span className="font-semibold text-text">
                    Variações culturais:
                  </span>{" "}
                  {String(prevalencia.variacoes_culturais)}
                </p>
              ) : null}
              {prevalencia.notas ? (
                <p className="mt-2 border-t border-border pt-2 text-[11px] italic text-text-3">
                  {String(prevalencia.notas)}
                </p>
              ) : null}
            </div>
          ) : null}

          {cursoEtapas.length > 0 ? (
            <div className="rounded-xl border border-border bg-surface-2/60 p-4">
              <GuideCardHeader
                icon={Clock}
                iconClass="text-amber-600 dark:text-amber-400"
              >
                Curso & Desenvolvimento
              </GuideCardHeader>
              <ol className="mt-3 space-y-3 border-l-2 border-amber-200 pl-4 dark:border-amber-800">
                {cursoEtapas.map((etapa) => (
                  <li key={etapa.rotulo} className="relative">
                    <span className="absolute top-1 -left-[23px] h-2.5 w-2.5 rounded-full bg-amber-500 ring-4 ring-amber-100 dark:ring-amber-950" />
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                      {etapa.rotulo}
                    </p>
                    <p className="text-sm leading-relaxed text-text-2">
                      {String(etapa.valor)}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
        </div>
      ) : null}

      <SeverityBlock data={data} />

      {subtipos.length > 0 || instrumentos.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
          {subtipos.length > 0 ? (
            <div className="rounded-xl border border-border bg-surface-2/40 p-4">
              <GuideCardHeader
                icon={Tags}
                iconClass="text-violet-600 dark:text-violet-400"
              >
                Subtipos / Especificadores Clínicos
              </GuideCardHeader>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {subtipos.map((sub, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-text-2"
                  >
                    {String(sub)}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {instrumentos.length > 0 ? (
            <div className="rounded-xl border border-border bg-surface-2/40 p-4">
              <GuideCardHeader
                icon={FileSpreadsheet}
                iconClass="text-emerald-600 dark:text-emerald-400"
              >
                Escalas Complementares
              </GuideCardHeader>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {instrumentos.map((inst, idx) => (
                  <span
                    key={idx}
                    title={[inst.nome, inst.uso].filter(Boolean).join(" — ")}
                    className="rounded-md border border-emerald-200 bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
                  >
                    {inst.sigla || inst.nome}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      {temCodigos ? (
        <div className="rounded-xl border border-border bg-surface-2/60 p-4">
          <GuideCardHeader
            icon={BookMarked}
            iconClass="text-slate-600 dark:text-slate-400"
          >
            Classificação Nosológica
          </GuideCardHeader>
          <dl
            className="mt-3 grid gap-3"
            style={{
              gridTemplateColumns: `repeat(${codigos.length}, minmax(0, 1fr))`,
            }}
          >
            {codigos.map((codigo) => (
              <div
                key={codigo.sistema}
                className="rounded-lg border border-border/60 bg-surface px-3 py-2 text-center"
              >
                <dt className="text-xs font-bold uppercase tracking-wider text-text-3">
                  {codigo.sistema}
                </dt>
                <dd className="mt-0.5 font-mono text-sm font-semibold text-text">
                  {String(codigo.valor)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}
    </div>
  );
}

/* ─── Renderer principal ────────────────────────────────────────────────── */

export function DisorderRenderer({
  data,
}: {
  readonly data: ClinicalDisorder;
}) {
  const assessment = useDisorderAssessment(data);
  const [copyFeedback, setCopyFeedback] = useState("Copiar Markdown");

  const metaName = data.meta.nome_completo ?? data.meta.nome;
  const sigla = data.meta.sigla;
  const targetAge = data.meta.faixa_etaria_alvo;
  const subtitle = [
    data.meta.capitulo ?? "DSM-5",
    targetAge ? `faixa alvo: ${targetAge}` : null,
  ]
    .filter(Boolean)
    .join(" · ");
  const codes = [
    ["DSM-5", data.meta.codigo?.dsm5],
    ["CID-10", data.meta.codigo?.cid10],
    ["CID-11", data.meta.codigo?.cid11],
  ] as const;

  const clusters = data.clusters_sintomas ?? [];
  const criteriaItems = conditionalCriteriaItems(data);
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

  const allSectionIds: string[] = ["identificacao"];
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
                {sigla ? (
                  <span className="ml-2 text-md font-sans font-semibold text-text-3">
                    {sigla}
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

          {clinicalGuideHasData(data) ? (
            <Section
              id="guia-clinico"
              icon={BookOpen}
              iconClass="text-emerald-600 dark:text-emerald-400"
              title="Guia Clínico & Informativo (Resumo do Aplicador)"
            >
              <ClinicalGuideSection data={data} />
            </Section>
          ) : null}

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
              // asChild + span: o trigger do acordeão já é um <button>;
              // um <button> aqui dentro gera HTML inválido (erro de hydration).
              <Button
                asChild
                variant="secondary"
                size="xs"
                className="no-print"
              >
                <span
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy();
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.stopPropagation();
                      e.preventDefault();
                      handleCopy();
                    }
                  }}
                >
                  <Copy data-icon="inline-start" /> Copiar
                </span>
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
