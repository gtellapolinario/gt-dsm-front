export function MarkdownPreviewSection({
  markdown,
}: {
  readonly markdown: string;
  readonly onCopy: () => void;
}) {
  return (
    <>
      <div className="p-4">
        <pre className="text-text-2 bg-surface-2 rounded-lg border border-border p-4 overflow-auto max-h-[65vh] whitespace-pre-wrap leading-relaxed font-mono text-[0.8rem]">
          {markdown}
        </pre>
      </div>
      <div className="px-5 pb-4">
        <p className="text-sm text-text-3 leading-relaxed">
          Baseado nos critérios DSM-5/DSM-5-TR. Esta ferramenta é auxiliar
          e não substitui entrevista clínica, instrumentos validados ou
          julgamento profissional.
        </p>
      </div>
    </>
  );
}
