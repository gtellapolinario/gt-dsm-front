import type { ClusterCounter, CountersSlice } from "../model/assessmentPort";
import { titleFromValue } from "../../utils/disorderDataAccess";
import { CountBadge } from "../ui/CountBadge";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CriteriaPanelSection({
  counters,
  assessment,
}: {
  readonly counters: readonly ClusterCounter[];
  readonly assessment: CountersSlice;
}) {
  const requiredMet = Object.values(
    assessment.state.conditionalCriteria,
  ).filter(Boolean).length;
  const selectedSpecs = Object.values(assessment.state.specifiers).filter(
    Boolean,
  ).length;
  const selectedComorbidities = Object.values(
    assessment.state.comorbidities,
  ).filter(Boolean).length;

  return (
    <div
      className={cn(
        "p-5 grid gap-3 items-start",
        counters.length > 0 ? "lg:grid-cols-[2fr_1fr]" : "",
      )}
    >
      {counters.length > 0 ? (
        <Card size="sm">
          <CardHeader>
            <CardTitle>Critérios por cluster</CardTitle>
            <CardDescription>
              Sintomas marcados em relação ao mínimo necessário
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {counters.map((counter) => (
                <div
                  key={counter.id}
                  className={cn(
                    "rounded-lg border p-3 text-center transition-colors",
                    counter.met
                      ? "border-primary bg-accent/60"
                      : "border-border bg-surface",
                  )}
                >
                  <p
                    className="text-sm text-text-3 mb-1 truncate"
                    title={counter.label}
                  >
                    {counter.label}
                  </p>
                  <p className="text-2xl font-bold font-serif text-text tabular-nums">
                    {counter.checked}
                  </p>
                  <p className="text-sm text-text-3">
                    de {counter.threshold} necessários
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : null}

      <Card size="sm">
        <CardHeader>
          <CardTitle>Resumo da avaliação</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1.5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-2">Critérios condicionais</span>
            <CountBadge n={requiredMet} met={requiredMet > 0} />
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-2">Especificadores</span>
            <CountBadge n={selectedSpecs} met={selectedSpecs > 0} />
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-2">Comorbidades / DDx</span>
            <CountBadge
              n={selectedComorbidities}
              met={selectedComorbidities > 0}
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-2">Impacto funcional</span>
            <CountBadge
              n={titleFromValue(assessment.state.impactFunctional)}
              met={assessment.state.impactFunctional !== "ausente"}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
