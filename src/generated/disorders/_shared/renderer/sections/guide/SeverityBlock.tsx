import type { ReactNode } from "react";
import { Gauge } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { SeverityView } from "../../adapters/severityAdapter";
import { GuideCardHeader } from "../../ui/GuideCardHeader";
import { SeverityScale } from "../../ui/SeverityScale";

/**
 * Bloco de gravidade do guia, fiel ao contrato
 * `gravidade_dsm5tr_58_transtornos.md`: `classificacao_dsm` é a fonte da
 * verdade e decide a apresentação. `sem_niveis_formais` renderiza nota
 * informativa — nunca opção selecionável.
 */
export function SeverityBlock({
  severity,
}: {
  readonly severity: SeverityView | null;
}) {
  if (!severity) return null;

  let body: ReactNode;
  switch (severity.kind) {
    case "sem_niveis_formais":
      body = (
        <p className="mt-2 text-sm leading-relaxed text-text-2">
          {severity.lembrete}
        </p>
      );
      break;
    case "por_episodio":
      body = severity.grupos.map((grupo) => (
        <div key={grupo.episodioKey}>
          <p className="mt-3 text-xs font-bold uppercase tracking-wider text-text-2">
            {grupo.label}
          </p>
          <SeverityScale levels={grupo.niveis} />
        </div>
      ));
      break;
    case "escalar":
      body = (
        <>
          {severity.dominios.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {severity.dominios.map((d) => (
                <Badge key={d.dominioKey} variant="outline">
                  {d.label}
                </Badge>
              ))}
            </div>
          ) : null}
          {severity.condicaoAplicabilidade ? (
            <p className="mt-2 text-xs font-medium text-amber-700 dark:text-amber-400">
              {severity.condicaoAplicabilidade}
            </p>
          ) : null}
          {severity.niveis.length > 0 ? (
            <SeverityScale levels={severity.niveis} />
          ) : null}
          {severity.niveisReferencia.length > 0 ? (
            <SeverityScale levels={severity.niveisReferencia} />
          ) : null}
          {severity.escalaNiveis !== null ? (
            <SeverityScale levels={severity.escalaNiveis} />
          ) : null}
        </>
      );
      break;
  }

  return (
    <div className="rounded-xl border border-border bg-surface-2/40 p-4">
      <GuideCardHeader icon={Gauge} iconClass="text-red-600 dark:text-red-400">
        Parâmetros de Gravidade
      </GuideCardHeader>
      {body}
      {severity.kind !== "sem_niveis_formais" && severity.observacao ? (
        <p className="mt-3 text-xs leading-relaxed text-text-3">
          {severity.observacao}
        </p>
      ) : null}
      {severity.kind !== "sem_niveis_formais" && severity.lembrete ? (
        <p className="mt-2 border-t border-border pt-2 text-[11px] italic text-text-3">
          {severity.lembrete}
        </p>
      ) : null}
    </div>
  );
}
