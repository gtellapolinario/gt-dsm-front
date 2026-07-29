import type { ReactNode } from "react";
import { Markdown, MarkdownInline } from "../../Markdown";
import {
  previewText,
  stringifyClinicalValue,
  getVisibleEntries,
  isRecord,
  titleFromValue,
} from "../../utils/disorderDataAccess";

const hiddenKeys = new Set([
  "id",
  "metadados",
  "master_metadata",
  "inventory_notes",
  "icone",
]);

export function CompactClinicalValue({
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
            className="flex gap-2 text-md text-stone-700"
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
              <dt className="text-sm font-bold uppercase tracking-[0.14em] text-stone-800">
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
