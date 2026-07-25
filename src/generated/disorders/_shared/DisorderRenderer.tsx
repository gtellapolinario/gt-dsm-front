// src/generated/disorders/_shared/DisorderRenderer.tsx
// Renderer único dos 62 transtornos. Layout clonado do guia de referência
// (scripts/tdah.html): header fixo com ações, coluna esquerda de seções em
// acordeão (identificação, critérios, clusters, impacto, comorbidades, DDx,
// especificadores, complementares) e coluna direita sticky com o Painel de
// Critérios + preview Markdown ao vivo. Tudo dirigido pelo payload clínico.

import { useMemo, useState, type ReactNode } from "react";
import {
  Brain,
  ChevronUp,
  ChevronsDown,
  ChevronsUp,
  ClipboardList,
  Copy,
  FileText,
  Info,
  Layers,
  ListChecks,
  MessageSquare,
  Printer,
  RotateCcw,
  SearchCheck,
  SlidersHorizontal,
  TrendingUp,
  UserPen,
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
import { cn } from "@/lib/cn";
import { getIcone } from "@/lib/mapear-icones";
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

const inputCls =
  "w-full text-md border border-border rounded-lg px-3 py-2 bg-surface text-text focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition";
const textareaCls = cn(inputCls, "resize-y");
const labelCls = "block text-sm font-semibold text-text-2 mb-1";
const severitySelectCls =
  "text-sm px-1.5 py-1 rounded-md border border-border bg-surface-2 text-text-2 cursor-pointer min-w-[96px] focus:outline-none focus:ring-2 focus:ring-primary/20";

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
  icon: Icon,
  iconClass = "text-blue-600",
  title,
  badge,
  open,
  onToggle,
  children,
}: {
  readonly icon: LucideIcon;
  readonly iconClass?: string;
  readonly title: ReactNode;
  readonly badge?: ReactNode;
  readonly open: boolean;
  readonly onToggle: () => void;
  readonly children: ReactNode;
}) {
  return (
    <section className="bg-surface rounded-xl border border-border shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="bg-muted/60 w-full flex items-center justify-between px-5 py-3 text-md hover:bg-muted transition-colors cursor-pointer"
      >
        <span className={cn("flex items-center gap-2 font-bold", iconClass)}>
          <Icon className="h-4 w-4" />
          <span className="text-text">{title}</span>
        </span>
        <span className="flex items-center gap-2">
          {badge}
          <ChevronUp
            className={cn(
              "h-3.5 w-3.5 text-text-3 transition-transform duration-200",
              !open && "rotate-180",
            )}
          />
        </span>
      </button>
      {open ? <div className="border-t border-border">{children}</div> : null}
    </section>
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
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "text-sm font-semibold border rounded-full px-3 py-1.5 transition-all select-none cursor-pointer",
        active
          ? "bg-accent border-primary text-primary"
          : "bg-surface border-border text-text-2 hover:border-primary/50",
      )}
    >
      {children}
    </button>
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
    <select
      className={severitySelectCls}
      title="Gravidade"
      value={value}
      onChange={(event) => onChange(event.target.value as SeverityLevel)}
    >
      <option value="ausente">—</option>
      <option value="leve">Leve</option>
      <option value="moderado">Moderado</option>
      <option value="grave">Grave</option>
    </select>
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className={labelCls} htmlFor="paciente">
            Nome / ID
          </label>
          <input
            id="paciente"
            type="text"
            className={inputCls}
            placeholder="Identificação"
            value={state.patient.nomeId}
            onChange={(e) => setPatientField("nomeId", e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="idadeNasc">
            Idade / nascimento
          </label>
          <input
            id="idadeNasc"
            type="text"
            className={inputCls}
            placeholder="Ex.: 32 anos ou 10/02/1994"
            value={state.patient.idadeNascimento}
            onChange={(e) => setPatientField("idadeNascimento", e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="sexo">
            Sexo
          </label>
          <select
            id="sexo"
            className={inputCls}
            value={state.patient.sexo}
            onChange={(e) => setPatientField("sexo", e.target.value)}
          >
            <option value="">Não informado</option>
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
            <option value="Não-binário">Não-binário</option>
            <option value="Mulher Trans">Mulher Trans</option>
            <option value="Homem Trans">Homem Trans</option>
            <option value="Outro">Outro</option>
            <option value="Prefiro não informar">Prefiro não informar</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className={labelCls} htmlFor="escolaridade">
            Escolaridade
          </label>
          <select
            id="escolaridade"
            className={inputCls}
            value={state.patient.escolaridade}
            onChange={(e) => setPatientField("escolaridade", e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Ensino Fundamental Incompleto">
              Ensino Fundamental Incompleto
            </option>
            <option value="Ensino Fundamental Completo">
              Ensino Fundamental Completo
            </option>
            <option value="Ensino Médio Incompleto">
              Ensino Médio Incompleto
            </option>
            <option value="Ensino Médio Completo">Ensino Médio Completo</option>
            <option value="Ensino Técnico">Ensino Técnico</option>
            <option value="Ensino Superior Incompleto">
              Ensino Superior Incompleto
            </option>
            <option value="Ensino Superior Completo">
              Ensino Superior Completo
            </option>
            <option value="Pós-graduação">Pós-graduação</option>
            <option value="Mestrado">Mestrado</option>
            <option value="Doutorado">Doutorado</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="ocupacao">
            Ocupação atual
          </label>
          <input
            id="ocupacao"
            type="text"
            className={inputCls}
            placeholder="Ex.: analista financeiro"
            value={state.patient.ocupacao}
            onChange={(e) => setPatientField("ocupacao", e.target.value)}
          />
        </div>
      </div>
      <div>
        <label className={labelCls} htmlFor="informante">
          Informante / encaminhamento
        </label>
        <input
          id="informante"
          type="text"
          className={inputCls}
          placeholder="Fonte das informações"
          value={state.patient.informante}
          onChange={(e) => setPatientField("informante", e.target.value)}
        />
      </div>
      <div>
        <label className={labelCls} htmlFor="queixa">
          Queixa principal / motivo da consulta
        </label>
        <textarea
          id="queixa"
          rows={2}
          className={textareaCls}
          placeholder="Descreva a queixa principal que motivou a avaliação"
          value={state.patient.queixaPrincipal}
          onChange={(e) => setPatientField("queixaPrincipal", e.target.value)}
        />
      </div>
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
              <input
                type="checkbox"
                id={`sym-${symptom.id}`}
                checked={checked}
                onChange={(e) =>
                  assessment.setSymptomChecked(symptom.id, e.target.checked)
                }
                className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-blue-600"
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
        <label className={labelCls} htmlFor={`obs-${cluster.id}`}>
          Observações clínicas — {cluster.nome ?? cluster.id}
        </label>
        <textarea
          id={`obs-${cluster.id}`}
          rows={2}
          className={textareaCls}
          placeholder="Exemplos, frequência, contexto, fontes de informação..."
          value={assessment.state.clusterNotes[cluster.id] ?? ""}
          onChange={(e) =>
            assessment.setClusterNote(cluster.id, e.target.value)
          }
        />
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
      <div>
        <label className={labelCls} htmlFor={`note-${noteKey}`}>
          {noteLabel}
        </label>
        <textarea
          id={`note-${noteKey}`}
          rows={2}
          className={textareaCls}
          value={assessment.state.sectionNotes[noteKey] ?? ""}
          onChange={(e) => assessment.setSectionNote(noteKey, e.target.value)}
        />
      </div>
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
              <input
                type="checkbox"
                id={`ddx-${item.id}`}
                checked={checked}
                onChange={(e) =>
                  assessment.setToggle(
                    "comorbidities",
                    item.id,
                    e.target.checked,
                  )
                }
                className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-blue-600"
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
      <div>
        <label className={labelCls} htmlFor="note-ddx">
          Notas sobre diagnóstico diferencial
        </label>
        <textarea
          id="note-ddx"
          rows={2}
          className={textareaCls}
          value={assessment.state.sectionNotes.diagnostico_diferencial ?? ""}
          onChange={(e) =>
            assessment.setSectionNote("diagnostico_diferencial", e.target.value)
          }
        />
      </div>
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
        <div>
          <label className={labelCls} htmlFor="impacto-global">
            Impacto funcional global
          </label>
          <select
            id="impacto-global"
            className={severitySelectCls}
            value={assessment.state.impactFunctional}
            onChange={(e) =>
              assessment.setImpactFunctional(e.target.value as SeverityLevel)
            }
          >
            <option value="ausente">Sem prejuízo</option>
            <option value="leve">Leve</option>
            <option value="moderado">Moderado</option>
            <option value="grave">Grave</option>
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="impacto-obs">
            Observações sobre impacto funcional
          </label>
          <textarea
            id="impacto-obs"
            rows={2}
            className={textareaCls}
            placeholder="Prejuízo acadêmico, ocupacional, familiar, social, autocuidado, segurança..."
            value={assessment.state.sectionNotes.impacto_funcional ?? ""}
            onChange={(e) =>
              assessment.setSectionNote("impacto_funcional", e.target.value)
            }
          />
        </div>
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
      <div>
        <label className={labelCls} htmlFor={`note-${section}`}>
          Observações clínicas — {titleFromValue(section).toLowerCase()}
        </label>
        <textarea
          id={`note-${section}`}
          rows={2}
          className={textareaCls}
          value={assessment.state.sectionNotes[section] ?? ""}
          onChange={(e) => assessment.setSectionNote(section, e.target.value)}
        />
      </div>
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
    <div className="p-5 space-y-3">
      {counters.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
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
      ) : null}

      <div className="rounded-lg border border-border p-3 space-y-1.5">
        <p className="text-sm text-text-3 mb-1">Resumo da avaliação</p>
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
      </div>
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
  const toggleSection = (id: string) =>
    setOpenSections((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  const isOpen = (id: string) => openSections.includes(id);

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
            <button
              type="button"
              onClick={() => setOpenSections(allSectionIds)}
              className="text-sm font-semibold bg-surface border border-border text-text-2 rounded-lg px-3 py-1.5 hover:bg-surface-2 transition cursor-pointer"
            >
              <ChevronsDown className="inline h-3.5 w-3.5 mr-1" />
              Expandir
            </button>
            <button
              type="button"
              onClick={() => setOpenSections([])}
              className="text-sm font-semibold bg-surface border border-border text-text-2 rounded-lg px-3 py-1.5 hover:bg-surface-2 transition cursor-pointer"
            >
              <ChevronsUp className="inline h-3.5 w-3.5 mr-1" />
              Recolher
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="text-sm font-semibold bg-blue-700 text-white rounded-lg px-3 py-1.5 hover:bg-blue-800 transition cursor-pointer"
            >
              <Printer className="inline h-3.5 w-3.5 mr-1" />
              Imprimir
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="text-sm font-semibold bg-orange-700 text-white rounded-lg px-3 py-1.5 hover:bg-orange-800 transition cursor-pointer"
            >
              <RotateCcw className="inline h-3.5 w-3.5 mr-1" />
              Limpar
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="space-y-3">
          <Section
            icon={UserPen}
            title="Identificação do Paciente"
            open={isOpen("identificacao")}
            onToggle={() => toggleSection("identificacao")}
          >
            <IdentificationSection assessment={assessment} />
          </Section>

          <Section
            icon={ListChecks}
            title="Painel de Critérios"
            open={isOpen("painel")}
            onToggle={() => toggleSection("painel")}
          >
            <CriteriaPanel
              counters={assessment.clusterCounters}
              assessment={assessment}
            />
          </Section>

          {criteriaItems.length > 0 ? (
            <Section
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
              open={isOpen("criterios")}
              onToggle={() => toggleSection("criterios")}
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
                open={isOpen(`cluster-${cluster.id}`)}
                onToggle={() => toggleSection(`cluster-${cluster.id}`)}
              >
                <ClusterSectionBody cluster={cluster} assessment={assessment} />
              </Section>
            );
          })}

          <Section
            icon={TrendingUp}
            title="Avaliação de Impacto Funcional"
            open={isOpen("impacto")}
            onToggle={() => toggleSection("impacto")}
          >
            <ImpactSection data={data} assessment={assessment} />
          </Section>

          {comorbidityItems.length > 0 ? (
            <Section
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
              open={isOpen("comorbidades")}
              onToggle={() => toggleSection("comorbidades")}
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
              icon={SearchCheck}
              iconClass="text-purple-700"
              title="Diagnóstico Diferencial (DDx)"
              open={isOpen("ddx")}
              onToggle={() => toggleSection("ddx")}
            >
              <DifferentialSection data={data} assessment={assessment} />
            </Section>
          ) : null}

          {specifierItems.length > 0 ? (
            <Section
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
              open={isOpen("especificadores")}
              onToggle={() => toggleSection("especificadores")}
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
              icon={Info}
              iconClass="text-teal-700"
              title={titleFromValue(section)}
              badge={
                <span className="text-sm font-semibold px-2 py-0.5 rounded-full bg-surface-2 text-text-3">
                  complementar
                </span>
              }
              open={isOpen(section)}
              onToggle={() => toggleSection(section)}
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
            <button
              type="button"
              onClick={assessment.refreshMarkdown}
              className="inline-flex items-center gap-2 text-md font-semibold bg-surface border border-border text-text-2 rounded-lg px-5 py-2.5 hover:bg-surface-2 transition cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" /> Atualizar síntese
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 text-md font-semibold bg-blue-600 text-white rounded-lg px-5 py-2.5 hover:bg-blue-700 transition cursor-pointer"
            >
              <Copy className="h-4 w-4" /> {copyFeedback}
            </button>
            <span className="text-sm text-text-3">
              Formato pronto para prontuário eletrônico ou Obsidian.
            </span>
          </div>

          {/* ─── Markdown: sempre por último ─── */}
          <Section
            icon={FileText}
            title="Pré-visualização Markdown"
            badge={
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy();
                }}
                className="text-sm text-blue-600 hover:text-blue-800 font-semibold bg-blue-50 px-2 py-0.5 rounded-full no-print cursor-pointer"
              >
                <Copy className="inline h-2.5 w-2.5 mr-0.5" /> Copiar
              </button>
            }
            open={isOpen("markdown")}
            onToggle={() => toggleSection("markdown")}
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
        </div>
      </main>
    </div>
  );
}
