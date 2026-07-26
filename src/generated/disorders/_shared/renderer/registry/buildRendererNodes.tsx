import {
  BookOpen,
  ClipboardList,
  Copy,
  FileText,
  Layers,
  ListChecks,
  SearchCheck,
  SlidersHorizontal,
  TrendingUp,
  UserPen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ClinicalDisorder } from "../../schema";
import { normalizeChoiceItems } from "../../utils/disorderDataAccess";
import { conditionalCriteriaItems } from "../adapters/criteriaAdapter";
import { buildGuideView, clinicalGuideHasData } from "../adapters/guideAdapter";
import { CountBadge } from "../ui/CountBadge";
import { IdentificationSection } from "../sections/IdentificationSection";
import { ClinicalGuideSection } from "../sections/guide/ClinicalGuideSection";
import { CriteriaPanelSection } from "../sections/CriteriaPanelSection";
import { ConditionalCriteriaSection } from "../sections/ConditionalCriteriaSection";
import { ClusterSection } from "../sections/ClusterSection";
import { ImpactSection } from "../sections/ImpactSection";
import { ChoiceChipsSection } from "../sections/ChoiceChipsSection";
import { DifferentialSection } from "../sections/DifferentialSection";
import { MarkdownPreviewSection } from "../sections/MarkdownPreviewSection";
import { DisorderToolbar } from "../layout/DisorderToolbar";
import type { RendererNode } from "./sectionDescriptor";

/**
 * A ordem do array É a ordem do DOM (espelha a cadeia hardcoded original).
 * `openByDefault` alimenta o initializer de useState (D3); `collapsible`
 * alimenta allSectionIds (guia-clinico fica de fora — D1).
 */
export function buildRendererNodes(data: ClinicalDisorder): RendererNode[] {
  const clusters = data.clusters_sintomas ?? [];
  const criteriaItems = conditionalCriteriaItems(data);
  const comorbidityItems = normalizeChoiceItems(data.comorbidades_frequentes);
  const ddxItems = normalizeChoiceItems(data.diagnostico_diferencial);
  const specifierItems = normalizeChoiceItems(data.especificadores);

  const nodes: RendererNode[] = [
    {
      kind: "section",
      id: "identificacao",
      icon: UserPen,
      title: "Identificação do Paciente",
      openByDefault: true,
      collapsible: true,
      render: (ctx) => <IdentificationSection assessment={ctx.assessment} />,
    },
  ];

  if (clinicalGuideHasData(data)) {
    nodes.push({
      kind: "section",
      id: "guia-clinico",
      icon: BookOpen,
      iconClass: "text-emerald-600 dark:text-emerald-400",
      title: "Guia Clínico & Informativo (Resumo do Aplicador)",
      openByDefault: false,
      collapsible: false,
      render: (ctx) => <ClinicalGuideSection view={buildGuideView(ctx.data)} />,
    });
  }

  nodes.push({
    kind: "section",
    id: "painel",
    icon: ListChecks,
    title: "Painel de Critérios",
    openByDefault: true,
    collapsible: true,
    render: (ctx) => (
      <CriteriaPanelSection
        counters={ctx.assessment.clusterCounters}
        assessment={ctx.assessment}
      />
    ),
  });

  if (criteriaItems.length > 0) {
    nodes.push({
      kind: "section",
      id: "criterios",
      icon: ListChecks,
      title: "Critérios Condicionais",
      openByDefault: true,
      collapsible: true,
      badge: (ctx) => (
        <CountBadge
          n={
            Object.values(ctx.assessment.state.conditionalCriteria).filter(
              Boolean,
            ).length
          }
          total={criteriaItems.length}
          met={criteriaItems.every(
            (item) => ctx.assessment.state.conditionalCriteria[item.id],
          )}
        />
      ),
      render: (ctx) => (
        <ConditionalCriteriaSection data={ctx.data} assessment={ctx.assessment} />
      ),
    });
  }

  clusters.forEach((cluster, index) => {
    nodes.push({
      kind: "section",
      id: `cluster-${cluster.id}`,
      icon: ClipboardList,
      iconClass: index % 2 === 0 ? "text-amber-600" : "text-red-600",
      title: `${cluster.id} – ${cluster.nome ?? `Cluster ${index + 1}`}`,
      openByDefault: true,
      collapsible: true,
      badge: (ctx) => {
        const counter = ctx.assessment.clusterCounters.find(
          (item) => item.id === cluster.id,
        );
        return (
          <CountBadge
            n={counter?.checked ?? 0}
            total={counter?.threshold ?? 1}
            met={counter?.met}
          />
        );
      },
      render: (ctx) => (
        <ClusterSection cluster={cluster} assessment={ctx.assessment} />
      ),
    });
  });

  nodes.push({
    kind: "section",
    id: "impacto",
    icon: TrendingUp,
    title: "Avaliação de Impacto Funcional",
    openByDefault: false,
    collapsible: true,
    render: (ctx) => <ImpactSection data={ctx.data} assessment={ctx.assessment} />,
  });

  if (comorbidityItems.length > 0) {
    nodes.push({
      kind: "section",
      id: "comorbidades",
      icon: Layers,
      title: "Comorbidades Frequentes",
      openByDefault: false,
      collapsible: true,
      badge: (ctx) => (
        <CountBadge
          n={
            Object.values(ctx.assessment.state.comorbidities).filter(
              Boolean,
            ).length
          }
          met={Object.values(ctx.assessment.state.comorbidities).some(
            Boolean,
          )}
        />
      ),
      render: (ctx) => (
        <ChoiceChipsSection
          data={ctx.data.comorbidades_frequentes}
          group="comorbidities"
          hint="Selecione as condições em investigação ou já confirmadas."
          noteKey="comorbidades_frequentes"
          noteLabel="Detalhamento das comorbidades"
          assessment={ctx.assessment}
        />
      ),
    });
  }

  if (ddxItems.length > 0) {
    nodes.push({
      kind: "section",
      id: "ddx",
      icon: SearchCheck,
      iconClass: "text-purple-700",
      title: "Diagnóstico Diferencial (DDx)",
      openByDefault: false,
      collapsible: true,
      render: (ctx) => (
        <DifferentialSection data={ctx.data} assessment={ctx.assessment} />
      ),
    });
  }

  if (specifierItems.length > 0) {
    nodes.push({
      kind: "section",
      id: "especificadores",
      icon: SlidersHorizontal,
      iconClass: "text-violet-700",
      title: "Especificadores",
      openByDefault: false,
      collapsible: true,
      badge: (ctx) => (
        <CountBadge
          n={Object.values(ctx.assessment.state.specifiers).filter(Boolean)
            .length}
          met={Object.values(ctx.assessment.state.specifiers).some(Boolean)}
        />
      ),
      render: (ctx) => (
        <ChoiceChipsSection
          data={ctx.data.especificadores}
          group="specifiers"
          hint="Selecione os especificadores aplicáveis ao quadro atual."
          noteKey="especificadores"
          noteLabel="Notas sobre especificadores"
          assessment={ctx.assessment}
        />
      ),
    });
  }

  nodes.push({
    kind: "slot",
    id: "__toolbar",
    render: (ctx) => (
      <DisorderToolbar
        onRefresh={ctx.assessment.refreshMarkdown}
        onCopy={ctx.onCopy}
      />
    ),
  });

  nodes.push({
    kind: "section",
    id: "markdown",
    icon: FileText,
    title: "Pré-visualização Markdown",
    openByDefault: false,
    collapsible: true,
    badge: (ctx) => (
      // asChild + span: o trigger do acordeão já é um <button>;
      // um <button> aqui dentro gera HTML inválido (erro de hydration).
      <Button asChild variant="secondary" size="xs" className="no-print">
        <span
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
            ctx.onCopy();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.stopPropagation();
              e.preventDefault();
              ctx.onCopy();
            }
          }}
        >
          <Copy data-icon="inline-start" /> Copiar
        </span>
      </Button>
    ),
    render: (ctx) => (
      <MarkdownPreviewSection markdown={ctx.liveMarkdown} onCopy={ctx.onCopy} />
    ),
  });

  return nodes;
}
