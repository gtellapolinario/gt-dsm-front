import { lazy, Suspense, useMemo } from "react";
import type { ComponentType } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { resolveDiseaseId } from "@/infra/disease-aliases";
import { getDiseaseImporter } from "@/infra/disease-registry";

const Params = z.object({ assessmentId: z.string() });

export const Route = createFileRoute("/app/assess/$assessmentId")({
  parseParams: (raw) => Params.parse(raw),
  component: AssessmentRoute,
});

function DiseaseNotFound({ assessmentId, resolvedId }: { readonly assessmentId: string; readonly resolvedId: string }) {
  const resolvedMessage = resolvedId !== assessmentId ? ` (alias resolvido para ${resolvedId})` : "";

  return (
    <div className="flex h-full items-center justify-center p-8">
      <div className="max-w-xl rounded-2xl border border-border bg-surface p-6 text-center shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-text-3">Módulo não encontrado</p>
        <h1 className="mt-3 text-xl font-semibold text-text-1">Transtorno indisponível para avaliação</h1>
        <p className="mt-2 text-sm leading-6 text-text-2">
          Não há módulo gerado em <code className="rounded bg-bg px-1 py-0.5">src/generated/disorders</code> para
          <span className="font-medium"> {assessmentId}</span>{resolvedMessage}.
        </p>
      </div>
    </div>
  );
}

function AssessmentRoute() {
  const { assessmentId } = Route.useParams();

  const resolvedId = useMemo(() => resolveDiseaseId(assessmentId), [assessmentId]);

  const DiseaseComponent = useMemo<ComponentType>(() => {
    const importer = getDiseaseImporter(resolvedId);

    if (!importer) {
      return function MissingDisease() {
        return <DiseaseNotFound assessmentId={assessmentId} resolvedId={resolvedId} />;
      };
    }

    return lazy(async () => {
      const diseaseModule = await importer();
      return { default: diseaseModule.default };
    });
  }, [assessmentId, resolvedId]);

  return (
    <Suspense
      fallback={
        <div className="flex h-full items-center justify-center p-8 text-muted-foreground">
          Carregando formulário de avaliação...
        </div>
      }
    >
      <DiseaseComponent />
    </Suspense>
  );
}
