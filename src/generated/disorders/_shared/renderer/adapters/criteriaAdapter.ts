import type { ClinicalDisorder } from "../../schema";
import {
  isRecord,
  normalizeChoiceItems,
} from "../../utils/disorderDataAccess";

/**
 * Critérios condicionais do payload + critério A sintetizado a partir do
 * cluster de sintomas (id "A") quando o payload não o traz como critério
 * condicional. `derivado_do_cluster` marca a origem para deduplicar depois;
 * se o payload já tem letra A, prevalece o payload e nada é sintetizado.
 */
export function conditionalCriteriaItems(data: ClinicalDisorder) {
  const rawItems = normalizeChoiceItems(data.criterios_condicionais);
  const clusterA = data.clusters_sintomas?.find(
    (cluster) => cluster.id === "A",
  );
  const hasLetterA = rawItems.some(
    (item) => isRecord(item.raw) && item.raw.letra === "A",
  );
  if (hasLetterA || !clusterA) return rawItems;
  return [
    {
      id: "criterio-a-cluster",
      label: clusterA.nome ?? clusterA.id,
      description: clusterA.descricao ?? null,
      raw: { letra: "A", derivado_do_cluster: clusterA.id },
    },
    ...rawItems,
  ];
}

// A letra do criterio ("A", "B"...) e o identificador clinico exibido;
// o id snake_case do JSON nao aparece na UI.
export const letterOf = (raw: unknown): string | null =>
  isRecord(raw) && typeof raw.letra === "string" ? raw.letra : null;
