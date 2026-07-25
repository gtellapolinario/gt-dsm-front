// src/generated/disorders/_shared/Markdown.tsx
// Mini-renderizador de markdown (zero dependências) para o conteúdo clínico
// dos payloads: headings, tabelas pipe, listas, parágrafos, **negrito**,
// *itálico* e `código`. Usado pelos cards das seções complementares.

import { Fragment, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ─── Inline: **negrito**, *itálico*, `código` ──────────────────────────── */

const INLINE_RE = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;

export function MarkdownInline({ text }: { readonly text: string }) {
  const parts = text.split(INLINE_RE).filter(Boolean);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={index} className="font-semibold text-text">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
          return <em key={index}>{part.slice(1, -1)}</em>;
        }
        if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
          return (
            <code key={index} className="rounded bg-surface-2 px-1 py-0.5 font-mono text-[0.85em]">
              {part.slice(1, -1)}
            </code>
          );
        }
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}

/* ─── Blocos ────────────────────────────────────────────────────────────── */

function isTableLine(line: string) {
  return line.trim().startsWith("|") && line.trim().endsWith("|");
}

function isTableSeparator(line: string) {
  return /^\|[\s:|-]+\|$/.test(line.trim());
}

function splitRow(line: string): string[] {
  return line.trim().slice(1, -1).split("|").map((cell) => cell.trim());
}

function TableBlock({ lines }: { readonly lines: string[] }) {
  const header = splitRow(lines[0]);
  const body = lines.slice(2); // pula header + separador
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-xs">
        <thead>
          <tr>
            {header.map((cell, i) => (
              <th key={i} className="border border-border bg-surface-2 px-2 py-1.5 text-left font-semibold text-text-2">
                <MarkdownInline text={cell} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, r) => (
            <tr key={r}>
              {splitRow(row).map((cell, c) => (
                <td key={c} className="border border-border px-2 py-1.5 align-top text-text-2">
                  <MarkdownInline text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Markdown({ text, className }: { readonly text: string; readonly className?: string }): ReactNode {
  const lines = text.replaceAll("\r\n", "\n").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "") {
      i += 1;
      continue;
    }

    // Tabela pipe: header + linha separadora |---|
    if (isTableLine(line) && i + 1 < lines.length && isTableSeparator(lines[i + 1])) {
      const tableLines = [line, lines[i + 1]];
      i += 2;
      while (i < lines.length && isTableLine(lines[i])) {
        tableLines.push(lines[i]);
        i += 1;
      }
      blocks.push(<TableBlock key={key++} lines={tableLines} />);
      continue;
    }

    // Heading
    const headingMatch = /^(#{1,4})\s+(.*)$/.exec(trimmed);
    if (headingMatch) {
      const level = headingMatch[1].length;
      blocks.push(
        <p
          key={key++}
          className={cn(
            "font-semibold text-text",
            level <= 2 ? "text-sm" : "text-xs uppercase tracking-wide text-text-2",
          )}
        >
          <MarkdownInline text={headingMatch[2]} />
        </p>,
      );
      i += 1;
      continue;
    }

    // HR
    if (/^-{3,}$/.test(trimmed)) {
      blocks.push(<hr key={key++} className="border-border" />);
      i += 1;
      continue;
    }

    // Lista (-, *, 1.)
    if (/^(-|\*)\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
      const ordered = /^\d+\.\s+/.test(trimmed);
      const items: string[] = [];
      while (i < lines.length) {
        const itemMatch = /^(?:-|\*|\d+\.)\s+(.*)$/.exec(lines[i].trim());
        if (!itemMatch) break;
        items.push(itemMatch[1]);
        i += 1;
      }
      const ListTag = ordered ? "ol" : "ul";
      blocks.push(
        <ListTag key={key++} className={cn("space-y-1 pl-4", ordered ? "list-decimal" : "list-disc")}>
          {items.map((item, idx) => (
            <li key={idx} className="text-sm text-text-2 leading-relaxed">
              <MarkdownInline text={item} />
            </li>
          ))}
        </ListTag>,
      );
      continue;
    }

    // Parágrafo: junta linhas consecutivas não-vazias
    const paraLines = [trimmed];
    i += 1;
    while (i < lines.length) {
      const next = lines[i].trim();
      if (
        next === "" ||
        /^(#{1,4})\s+/.test(next) ||
        /^(-|\*)\s+/.test(next) ||
        /^\d+\.\s+/.test(next) ||
        isTableLine(lines[i]) ||
        /^-{3,}$/.test(next)
      ) {
        break;
      }
      paraLines.push(next);
      i += 1;
    }
    blocks.push(
      <p key={key++} className="text-sm text-text-2 leading-relaxed">
        <MarkdownInline text={paraLines.join(" ")} />
      </p>,
    );
  }

  if (blocks.length === 0) return null;
  return <div className={cn("space-y-2", className)}>{blocks}</div>;
}
