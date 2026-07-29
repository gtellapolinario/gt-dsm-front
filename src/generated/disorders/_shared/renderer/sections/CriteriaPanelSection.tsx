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
} from "@ui/card";

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
  // Soma comorbidades + DDx: antes do namespace separado (D2), o contador
  // já agregava os dois grupos implicitamente — comportamento preservado.
  const selectedComorbidities =
    Object.values(assessment.state.comorbidities).filter(Boolean).length +
    Object.values(assessment.state.ddx).filter(Boolean).length;

  return (
    <div
      className={cn(
        "p-5 grid gap-3 items-start",
        counters.length > 0 ? "lg:grid-cols-[2fr_1fr]" : "",
      )}
    >
      {counters.length > 0 ? (
        <Card size="sm" className="bg-surface-2/60 shadow-md font-serif ">
          <CardHeader>
            <CardTitle className="font-serif text-shadow-xs text-stone-800">
              Critérios por cluster
            </CardTitle>
            <CardDescription className="font-serif text-stone-700 ">
              Sintomas marcados em relação ao mínimo necessário
            </CardDescription>
          </CardHeader>

          <CardContent className="font-serif text-shadow-xs text-stone-800">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {counters.map((counter) => (
                <div
                  key={counter.id}
                  className={cn(
                    "rounded-xl shadow-md border p-3 text-center transition-colors",
                    counter.met
                      ? "border-primary bg-accent/60"
                      : "border-border bg-surface",
                  )}
                >
                  <p className="text-sm text-stone-500 mb-1 break-words hyphens-auto">
                    {counter.label}
                  </p>
                  <p className="text-2xl font-bold font-serif text-stone-800 tabular-nums">
                    {counter.checked}
                  </p>
                  <p className="text-sm text-stone-500">
                    de {counter.threshold} necessários
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : null}

      <Card size="sm" className="bg-surface-2/60 shadow-md font-serif ">
        <CardHeader>
          <CardTitle className="font-serif text-shadow-xs text-stone-800">
            Resumo da avaliação
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1.5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-stone-700">Critérios condicionais</span>
            <CountBadge n={requiredMet} met={requiredMet > 0} />
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-stone-700">Especificadores</span>
            <CountBadge n={selectedSpecs} met={selectedSpecs > 0} />
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-stone-700">Comorbidades / DDx</span>
            <CountBadge
              n={selectedComorbidities}
              met={selectedComorbidities > 0}
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-stone-700">Impacto funcional</span>
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
