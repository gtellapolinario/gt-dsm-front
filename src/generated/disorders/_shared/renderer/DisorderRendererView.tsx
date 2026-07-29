import { Fragment, useState } from "react";
import { Accordion } from "@ui/accordion";
import { Separator } from "@ui/separator";

import type { ClinicalDisorder } from "../schema";
import { useDisorderAssessment } from "../hooks/useDisorderAssessment";
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
  const assessment = useDisorderAssessment(data);
  const platform = usePlatform();

  const liveMarkdown = assessment.buildMarkdown();

  const handleCopy = async () => {
    try {
      await platform.clipboard.write(liveMarkdown);
      platform.notify.success("Markdown copiado para a área de transferência.");
    } catch {
      platform.notify.error("Falha ao copiar o Markdown.");
    }
  };

  const handleReset = () => {
    if (platform.confirm.ask("Limpar todos os dados preenchidos?")) {
      assessment.reset();
    }
  };

  const nodes = buildRendererNodes(data);

  const ctx: SectionContext = {
    data,
    assessment,
    liveMarkdown,
    onCopy: handleCopy,
  };

  const [openSections, setOpenSections] = useState<string[]>(() =>
    nodes
      .filter(
        (n): n is SectionDescriptor => n.kind === "section" && n.openByDefault,
      )
      .map((n) => n.id),
  );

  const allSectionIds = nodes
    .filter(
      (n): n is SectionDescriptor => n.kind === "section" && n.collapsible,
    )
    .map((n) => n.id);

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