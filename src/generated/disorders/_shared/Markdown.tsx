// src/generated/disorders/_shared/Markdown.tsx
// Renderizador de markdown do conteúdo clínico dos payloads, sobre
// react-markdown + remark-gfm (tabelas) + remark-breaks (quebras simples).
// Mantém a API (`Markdown`, `MarkdownInline`) e o estilo visual anteriores.

import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { cn } from "@/lib/utils";

const remarkPlugins = [remarkGfm, remarkBreaks];

const headingClasses = {
  h1: "font-semibold text-stone-800 text-shadow-xs text-md",
  h2: "font-semibold text-stone-700 text-shadow-xs text-sm",
  h3: "font-semibold text-xs uppercase tracking-wide text-stone-600 text-shadow-xs",
  h4: "font-semibold text-xs uppercase tracking-wide text-stone-600 text-shadow-xs",
} as const;

const inlineComponents: Components = {
  strong: ({ children }) => (
    <strong className="font-semibold text-stone-600">{children}</strong>
  ),
  code: ({ children }) => (
    <code className="rounded bg-surface-2 px-1 py-0.5 font-mono text-[0.85em]">
      {children}
    </code>
  ),
};

const blockComponents: Components = {
  ...inlineComponents,
  h1: ({ children }) => <h1 className={headingClasses.h1}>{children}</h1>,
  h2: ({ children }) => <h2 className={headingClasses.h2}>{children}</h2>,
  h3: ({ children }) => <h3 className={headingClasses.h3}>{children}</h3>,
  h4: ({ children }) => <h4 className={headingClasses.h4}>{children}</h4>,
  hr: () => <hr className="border-border" />,
  p: ({ children }) => (
    <p className="text-sm text-text-2 leading-relaxed">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="space-y-1 pl-4 list-disc">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="space-y-1 pl-4 list-decimal">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="text-sm text-text-2 leading-relaxed">{children}</li>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-xs">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-border bg-surface-2 px-2 py-1.5 text-left font-semibold text-text-2">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-border px-2 py-1.5 align-top text-text-2">
      {children}
    </td>
  ),
};

/** Markdown em bloco: headings, tabelas pipe, listas, parágrafos. */
export function Markdown({
  text,
  className,
}: {
  readonly text: string;
  readonly className?: string;
}) {
  if (!text.trim()) return null;
  return (
    <div className={cn("space-y-2", className)}>
      <ReactMarkdown remarkPlugins={remarkPlugins} components={blockComponents}>
        {text}
      </ReactMarkdown>
    </div>
  );
}

/** Markdown inline: **negrito**, *itálico*, `código` — sem wrapper de bloco. */
export function MarkdownInline({ text }: { readonly text: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={remarkPlugins}
      components={{ ...inlineComponents, p: ({ children }) => <>{children}</> }}
    >
      {text}
    </ReactMarkdown>
  );
}
