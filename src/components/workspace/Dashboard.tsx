// src/components/workspace/Dashboard.tsx
// Página inicial do workspace: catálogo real dos transtornos DSM-5-TR gerados,
// agrupado por capítulo. Cada item leva direto à avaliação (/app/assess/:id).

import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { CHAPTERS } from "@/lib/disease-catalog";
import { listGeneratedDisordersByChapter } from "@/infra/generated-disorder-catalog";
import { cn } from "@/lib/utils";

export function Dashboard() {
  const chapters = CHAPTERS.map((chapter) => ({
    chapter,
    disorders: listGeneratedDisordersByChapter(chapter.id),
  })).filter(({ disorders }) => disorders.length > 0);

  const total = chapters.reduce((acc, { disorders }) => acc + disorders.length, 0);

  return (
    <div className="px-10 py-8 max-w-[1280px]">
      <header className="mb-8">
        <h1 className="font-serif text-[28px] font-normal tracking-tight text-text m-0 mb-1.5">
          DSM-5-TR · Avaliações
        </h1>
        <p className="text-sm text-text-3 m-0">
          {total} transtornos disponíveis — selecione um para iniciar a avaliação.
        </p>
      </header>

      <div className="flex flex-col gap-7">
        {chapters.map(({ chapter, disorders }) => (
          <section key={chapter.key}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-text-3 m-0 mb-2.5">
              {chapter.nome}
              <span className="ml-2 text-text-4 font-normal normal-case tracking-normal tabular-nums">
                {disorders.length}
              </span>
            </h2>
            <div className="bg-surface border border-border rounded-[var(--radius-card)] overflow-hidden">
              {disorders.map((d, i) => (
                <Link
                  key={d.id}
                  to="/app/assess/$assessmentId"
                  params={{ assessmentId: d.id }}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 text-sm text-text hover:bg-surface-2 transition-colors",
                    i > 0 && "border-t border-border",
                  )}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: chapter.hue }}
                  />
                  <span className="flex-1 font-medium">{d.nome}</span>
                  <ChevronRight size={14} className="text-text-4" />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
