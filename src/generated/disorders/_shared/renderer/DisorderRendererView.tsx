import { Fragment, useState } from "react";
import { Accordion } from "@/components/ui/accordion";
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

  // Markdown ao vivo (como a referência: atualiza a cada mudança).
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
    if (platform.confirm.ask("Limpar todos os dados preenchidos?"))
      assessment.reset();
  };

  const nodes = buildRendererNodes(data);
  const ctx: SectionContext = { data, assessment, liveMarkdown, onCopy: handleCopy };

  // IDs das seções abertas por padrão (espelha a referência: formulário aberto,
  // seções analíticas recolhidas). Lido só no initializer (D3).
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
      {/* ─── Header fixo ─── */}
      <DisorderHeader
        data={data}
        onExpand={() => setOpenSections(allSectionIds)}
        onCollapse={() => setOpenSections([])}
        onPrint={() => platform.printer.print()}
        onReset={handleReset}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <Accordion
          type="multiple"
          value={openSections}
          onValueChange={setOpenSections}
          className="space-y-3 border-0"
        >
          {nodes.map((node) =>
            node.kind === "slot" ? (
              <Fragment key={node.id}>{node.render(ctx)}</Fragment>
            ) : (
              <Section
                key={node.id}
                id={node.id}
                icon={node.icon}
                iconClass={node.iconClass}
                title={node.title}
                badge={node.badge?.(ctx)}
              >
                {node.render(ctx)}
              </Section>
            ),
          )}
        </Accordion>
      </main>
    </div>
  );
}
