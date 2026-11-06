import { Fragment, useCallback, useDeferredValue, useEffect, useMemo } from "react";
import { Accordion } from "@ui/accordion";
import { Separator } from "@ui/separator";

import type { ClinicalDisorder } from "../schema";
import { useDisorderAssessment } from "../hooks/useDisorderAssessment";
import { generateClinicalMarkdown } from "../utils/clinicalMarkdown";
import { useAssessmentStore } from "@/infra/persistence/assessment-store";
import { usePlatform } from "./ports/PlatformContext";
import type { SectionContext } from "./model/sectionContext";
import { Section } from "./ui/Section";
import { DisorderHeader } from "./layout/DisorderHeader";
import { buildRendererNodes } from "./registry/buildRendererNodes";
import type { SectionDescriptor } from "./registry/sectionDescriptor";

export function DisorderRendererView({
  data,
}: {
  readonly data: ClinicalDisorder;
}) {
  const disorderId = data.meta.id;
  const assessment = useDisorderAssessment(data);
  const platform = usePlatform();

  const nodes = useMemo(() => buildRendererNodes(data), [data]);

  const defaultOpenSections = useMemo(
    () =>
      nodes
        .filter(
          (n): n is SectionDescriptor =>
            n.kind === "section" && n.openByDefault,
        )
        .map((n) => n.id),
    [nodes],
  );

  const allSectionIds = useMemo(
    () =>
      nodes
        .filter(
          (n): n is SectionDescriptor => n.kind === "section" && n.collapsible,
        )
        .map((n) => n.id),
    [nodes],
  );

  const storedOpenSections = useAssessmentStore(
    (s) => s.openSectionsByDisorder[disorderId],
  );
  const storeSetOpenSections = useAssessmentStore((s) => s.setOpenSections);
  const hydrateDisorder = useAssessmentStore((s) => s.hydrateDisorder);

  useEffect(() => {
    void hydrateDisorder(disorderId, defaultOpenSections);
  }, [disorderId, defaultOpenSections, hydrateDisorder]);

  const openSections = storedOpenSections ?? defaultOpenSections;

  const setOpenSections = useCallback(
    (next: string[]) => {
      storeSetOpenSections(disorderId, next);
    },
    [disorderId, storeSetOpenSections],
  );

  const isMarkdownOpen = openSections.includes("markdown");
  const deferredState = useDeferredValue(assessment.state);

  const liveMarkdown = useMemo(
    () =>
      isMarkdownOpen ? generateClinicalMarkdown(deferredState, data) : "",
    [isMarkdownOpen, deferredState, data],
  );

  const handleCopy = useCallback(async () => {
    try {
      const markdownToCopy = assessment.buildMarkdown();
      await platform.clipboard.write(markdownToCopy);
      platform.notify.success("Markdown copiado para a área de transferência.");
    } catch {
      platform.notify.error("Falha ao copiar o Markdown.");
    }
  }, [assessment, platform]);

  const handleReset = useCallback(() => {
    if (platform.confirm.ask("Limpar todos os dados preenchidos?")) {
      assessment.reset();
    }
  }, [assessment, platform]);

  const ctx = useMemo<SectionContext>(
    () => ({
      data,
      assessment,
      liveMarkdown,
      onCopy: handleCopy,
    }),
    [data, assessment, liveMarkdown, handleCopy],
  );

  return (
    <div className="min-h-full bg-bg text-text">
      <DisorderHeader
        data={data}
        onExpand={() => setOpenSections(allSectionIds)}
        onCollapse={() => setOpenSections([])}
        onPrint={() => platform.printer.print()}
        onReset={handleReset}
      />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <Accordion
          type="multiple"
          value={openSections}
          onValueChange={setOpenSections}
          className="border-0"
        >
          {nodes.map((node, index) => {
            const isLast = index === nodes.length - 1;

            return (
              <Fragment key={node.id}>
                {node.kind === "slot" ? (
                  node.render(ctx)
                ) : (
                  <Section
                    id={node.id}
                    icon={node.icon}
                    iconClass={node.iconClass}
                    title={node.title}
                    badge={node.badge?.(ctx)}
                  >
                    {node.render(ctx)}
                  </Section>
                )}

                {!isLast ? <Separator className="mx-auto my-6 bg-stone-300 " /> : null}
              </Fragment>
            );
          })}
        </Accordion>
      </main>
    </div>
  );
}
