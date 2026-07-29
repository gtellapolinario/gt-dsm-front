import { useState } from "react";
import { Markdown } from "@/generated/disorders/_shared/Markdown";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MarkdownPreviewSection({
  markdown,
}: {
  readonly markdown: string;
}) {
  const [tab, setTab] = useState<"formatted" | "raw">("formatted");

  return (
    <>
      <div className="px-4 pt-4">
        <Tabs value={tab} onValueChange={(value) => setTab(value as "formatted" | "raw")} className="w-full">
          <TabsList className="inline-flex h-auto items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50/80 p-1 shadow-lg">
            <TabsTrigger
              value="formatted"
              className="
                rounded-lg px-4 py-2 text-sm font-medium text-emerald-900
                transition-colors
                hover:bg-emerald-100
                focus-visible:ring-2 focus-visible:ring-emerald-500/40
                data-[state=active]:bg-emerald-700
                data-[state=active]:text-white
                data-[state=active]:shadow-sm
              "
            >
              Formatado
            </TabsTrigger>

            <TabsTrigger
              value="raw"
              className="
                rounded-lg px-4 py-2 text-sm font-medium text-emerald-900
                transition-colors
                hover:bg-emerald-100
                focus-visible:ring-2 focus-visible:ring-emerald-500/40
                data-[state=active]:bg-emerald-700
                data-[state=active]:text-white
                data-[state=active]:shadow-sm
              "
            >
              Markdown
            </TabsTrigger>
          </TabsList>

          <TabsContent value="formatted" className="mt-4">
            <div className="rounded-lg border border-border bg-bg p-4">
              <Markdown text={markdown} className="space-y-3" />
            </div>
          </TabsContent>

          <TabsContent value="raw" className="mt-4">
            <pre className="max-h-[65vh] overflow-auto whitespace-pre-wrap rounded-lg border border-border bg-surface-2 p-4 font-mono text-[0.8rem] leading-relaxed text-text-2">
              {markdown}
            </pre>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-1.5 px-5 pt-6">
        <p className="mx-3 mb-2 text-wrap text-justify font-serif text-sm font-medium italic leading-relaxed text-stone-500 text-shadow-xs">
          Ferramenta auxiliar da entrevista clínica, baseado nos critérios
          DSM-5/DSM-5-TR.
        </p>
      </div>
    </>
  );
}