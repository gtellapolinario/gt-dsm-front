/**
 * ============================================================
 * Payload Builder (payload-builder.ts)
 * ============================================================
 * Constroi o payload de saida padrao a partir do estado do
 * formulario e dos dados do transtorno DSM.
 *
 * REGRAS:
 * - ZERO `any` — use `unknown` para tipos indeterminados
 * - NENHUMA assertion insegura (`as any`, `as unknown as`)
 * - Todos os parametros e retornos tipados explicitamente
 * ============================================================
 */

import type { TranstornoDSM } from "@/infra/types";
import type {
  FormValues,
  PayloadSaida,
  ClusterDiagnostico,
  ImpactoValue,
} from "@/infra/types/dsm-form-types";

/**
 * Constroi o payload de saida completo a partir do formulario.
 *
 * @param transtorno — Dados do transtorno DSM (metadados e estrutura)
 * @param values — Estado completo do formulario
 * @param pacienteId — ID opcional do paciente
 * @param profissionalId — ID opcional do profissional avaliador
 * @returns Payload tipado pronto para exportacao/persistencia
 */
export function buildPayload(
  transtorno: TranstornoDSM,
  values: FormValues,
  pacienteId?: string,
  profissionalId?: string,
): PayloadSaida {
  const now = new Date();
  const dataAvaliacao = now.toISOString();

  const clustersDiagnostico = buildClustersDiagnostico(transtorno, values);
  const diagnosticoAtendido = calcularDiagnosticoAtendido(clustersDiagnostico);

  const metadados: Record<string, unknown> = {
    pacienteId: pacienteId ?? null,
    profissionalId: profissionalId ?? null,
    estruturaDiagnostica: transtorno.estrutura_diagnostica,
    totalClusters: transtorno.clusters_sintomas.length,
    totalCriteriosCondicionais: transtorno.criterios_condicionais.length,
  };

  return {
    transtornoId: transtorno.id,
    transtornoNome: transtorno.nome_completo,
    dataAvaliacao,
    clusters: clustersDiagnostico,
    criteriosCondicionais: { ...values.criterios_condicionais },
    subtipoSelecionado: values.subtipo_selecionado,
    gravidade: values.gravidade,
    especificadores: { ...values.especificadores },
    impactoFuncional: { ...values.impacto },
    comorbidades: [...values.comorbidades_selecionadas],
    notasClinicas: values.notas_clinicas,
    diagnosticoAtendido,
    metadados,
  };
}

/**
 * Constroi o mapa de diagnosticos por cluster.
 */
function buildClustersDiagnostico(
  transtorno: TranstornoDSM,
  values: FormValues,
): Record<string, ClusterDiagnostico> {
  const resultado: Record<string, ClusterDiagnostico> = {};

  for (const cluster of transtorno.clusters_sintomas) {
    const sintomasMap = values.clusters[cluster.id] ?? {};
    const sintomasPresentes: string[] = [];

    for (const sintoma of cluster.sintomas) {
      const estado = sintomasMap[sintoma.id];
      if (estado?.checked === true) {
        sintomasPresentes.push(sintoma.id);
      }
    }

    const selecionados = sintomasPresentes.length;
    const limiar = inferirLimiar(cluster.sintomas.length);
    const limiarAtingido = selecionados >= limiar;

    resultado[cluster.id] = {
      clusterId: cluster.id,
      nome: cluster.nome,
      sintomasPresentes,
      totalSintomas: cluster.sintomas.length,
      selecionados,
      limiar,
      limiarAtingido,
    };
  }

  return resultado;
}

/**
 * Calcula se o diagnostico foi atendido com base nos clusters.
 * Regra padrao: todos os clusters devem ter atingido o limiar.
 */
function calcularDiagnosticoAtendido(
  clusters: Record<string, ClusterDiagnostico>,
): boolean {
  const valores = Object.values(clusters);
  if (valores.length === 0) return false;
  return valores.every((c) => c.limiarAtingido);
}

/**
 * Infere o limiar com base no numero total de sintomas no cluster.
 * Heuristica padrao: metade arredondada para cima (regra DSM-5 comum).
 */
function inferirLimiar(totalSintomas: number): number {
  if (totalSintomas <= 2) return totalSintomas;
  if (totalSintomas <= 4) return 2;
  if (totalSintomas <= 6) return 3;
  return Math.ceil(totalSintomas / 2);
}

/**
 * Calcula contadores para cada cluster com base no estado atual.
 * Usado pelos hooks para exibir progresso ao usuario.
 */
export function calcularContadores(
  transtorno: TranstornoDSM,
  values: FormValues,
): Record<string, { selecionados: number; limiar: number }> {
  const resultado: Record<string, { selecionados: number; limiar: number }> = {};

  for (const cluster of transtorno.clusters_sintomas) {
    const sintomasMap = values.clusters[cluster.id] ?? {};
    let selecionados = 0;

    for (const sintoma of cluster.sintomas) {
      const estado = sintomasMap[sintoma.id];
      if (estado?.checked === true) {
        selecionados += 1;
      }
    }

    const limiar = inferirLimiar(cluster.sintomas.length);

    resultado[cluster.id] = { selecionados, limiar };
  }

  return resultado;
}

/**
 * Converte um valor de impacto desconhecido em ImpactoValue valido.
 * Retorna "0" como fallback seguro.
 */
export function parseImpactoValue(value: unknown): ImpactoValue {
  if (value === "0" || value === "1" || value === "2" || value === "3") {
    return value;
  }
  return "0";
}
