import { cn } from "@/lib/utils";

/** Escala ordinal de gravidade: a cor acompanha a posição no eixo. */
export function SeverityScale({
  levels,
}: {
  readonly levels: readonly { label: string; descritor: string | null }[];
}) {
  const tints = [
    "bg-emerald-800",
    "bg-amber-400",
    "bg-orange-400",
    "bg-red-400",
  ];
  return (
    <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:gap-4">
      {levels.map((lvl, i) => (
        <div key={i} className="min-w-0 sm:flex-1">
          <div
            className={cn(
              "h-1.5 rounded-full",
              tints[Math.min(i, tints.length - 1)],
            )}
          />
          <p className="mt-1.5 text-sm font-semibold text-text">{lvl.label}</p>
          {lvl.descritor ? (
            <p className="text-xs leading-relaxed text-text-3">
              {lvl.descritor}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
