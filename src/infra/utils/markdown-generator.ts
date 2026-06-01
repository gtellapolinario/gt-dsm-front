/**
 * ============================================================
 * Markdown Generator (markdown-generator.ts)
 * ============================================================
 * Gera laudo markdown a partir dos dados da avaliacao DSM-5.
 *
 * REGRAS:
 * - ZERO `any` — use `unknown` para tipos indeterminados
 * - NENHUMA assertion insegura
 * - Todos os parametros e retornos tipados explicitamente
 * ============================================================
 */

import type { TranstornoDSM } from "@/infra/types";
import type {
  FormValues,
  PayloadSaida,
  MarkdownIdentificacao,
} from "@/infra/types/dsm-form-types";

/**
 * Gera um laudo em formato Markdown a partir da avaliacao completa.
 *
 * @param transtorno — Dados do transtorno DSM
 * @param values — Estado completo do formulario (para detalhes nao incluidos no payload)
 * @param payload — Payload de saida com os resultados do diagnostico
 * @param identificacao — Dados de identificacao do paciente (mapeados de snake_case para camelCase)
 * @returns String Markdown formatada
 */
export function generateMarkdown(
  transtorno: TranstornoDSM,
  values: FormValues,
  payload: PayloadSaida,
  identificacao?: MarkdownIdentificacao,
): string {
  const linhas: string[] = [];

  // Titulo
  linhas.push(`# Laudo DSM-5: ${transtorno.nome_completo}`);
  linhas.push("");

  // Data
  linhas.push(`**Data da avaliacao:** ${formatarData(payload.dataAvaliacao)}`);
  linhas.push("");

  // Identificacao do paciente
  if (identificacao) {
    linhas.push("## Identificacao do Paciente");
    linhas.push("");
    if (identificacao.nome) {
      linhas.push(`- **Nome:** ${identificacao.nome}`);
    }
    if (identificacao.dataNascimento) {
      linhas.push(`- **Data de nascimento:** ${identificacao.dataNascimento}`);
    }
    if (identificacao.sexo) {
      linhas.push(`- **Sexo:** ${identificacao.sexo}`);
    }
    if (identificacao.escolaridade) {
      linhas.push(`- **Escolaridade:** ${identificacao.escolaridade}`);
    }
    if (identificacao.ocupacao) {
      linhas.push(`- **Ocupacao:** ${identificacao.ocupacao}`);
    }
    if (identificacao.queixa) {
      linhas.push(`- **Queixa principal:** ${identificacao.queixa}`);
    }
    linhas.push("");
  }

  // Diagnostico
  linhas.push("## Resultado do Diagnostico");
  linhas.push("");
  linhas.push(
    payload.diagnosticoAtendido
      ? "**Diagnostico: CRITERIOS ATENDIDOS** ✅"
      : "**Diagnostico: CRITERIOS NAO ATENDIDOS** ❌",
  );
  linhas.push("");

  // Clusters
  linhas.push("## Clusters Avaliados");
  linhas.push("");

  for (const cluster of transtorno.clusters_sintomas) {
    const diag = payload.clusters[cluster.id];
    if (!diag) continue;

    const status = diag.limiarAtingido ? "✅" : "❌";
    linhas.push(
      `### ${cluster.nome} ${status} (${diag.selecionados}/${diag.totalSintomas} sintomas, limiar: ${diag.limiar})`,
    );
    linhas.push("");

    if (cluster.descricao) {
      linhas.push(`*${cluster.descricao}*`);
      linhas.push("");
    }

    // Listar sintomas com status
    for (const sintoma of cluster.sintomas) {
      const sintomaState = values.clusters[cluster.id]?.[sintoma.id];
      const marcado = sintomaState?.checked ?? false;
      const severidade = sintomaState?.severity;
      const checkbox = marcado ? "[x]" : "[ ]";
      const severidadeStr =
        typeof severidade === "string" && severidade.length > 0
          ? ` — *${severidade}*`
          : "";
      linhas.push(`- ${checkbox} ${sintoma.texto}${severidadeStr}`);
    }
    linhas.push("");

    // Observacoes do cluster
    const obsCluster = values.notas_clinicas.observacoes_clusters[cluster.id];
    if (obsCluster && obsCluster.trim().length > 0) {
      linhas.push(`**Observacoes:** ${obsCluster}`);
      linhas.push("");
    }
  }

  // Criterios condicionais
  if (transtorno.criterios_condicionais.length > 0) {
    linhas.push("## Criterios Condicionais");
    linhas.push("");
    for (const criterio of transtorno.criterios_condicionais) {
      const ativo = payload.criteriosCondicionais[criterio.id] ?? false;
      const checkbox = ativo ? "[x]" : "[ ]";
      linhas.push(`- ${checkbox} **${criterio.letra}** — ${criterio.rotulo}`);
      if (criterio.descricao_completa) {
        linhas.push(`  *${criterio.descricao_completa}*`);
      }
    }
    linhas.push("");
  }

  // Subtipo
  if (payload.subtipoSelecionado) {
    linhas.push(`**Subtipo:** ${payload.subtipoSelecionado}`);
    linhas.push("");
  }

  // Gravidade
  if (payload.gravidade && payload.gravidade !== "") {
    linhas.push(`**Gravidade:** ${payload.gravidade}`);
    linhas.push("");
  }

  // Especificadores
  const especificadoresAtivos = Object.entries(payload.especificadores).filter(
    ([, v]) => v === true || (typeof v === "string" && v !== ""),
  );
  if (especificadoresAtivos.length > 0) {
    linhas.push("## Especificadores");
    linhas.push("");
    for (const [id, valor] of especificadoresAtivos) {
      const especificador = transtorno.especificadores.find((e) => e.id === id);
      const nome = especificador?.nome ?? id;
      const valorStr = typeof valor === "string" ? `: ${valor}` : "";
      linhas.push(`- ${nome}${valorStr}`);
    }
    linhas.push("");
  }

  // Impacto funcional
  const impactoEntries = Object.entries(payload.impactoFuncional).filter(
    ([, v]) => v !== "0",
  );
  if (impactoEntries.length > 0) {
    linhas.push("## Impacto Funcional");
    linhas.push("");
    for (const [dominio, valor] of impactoEntries) {
      const dominioInfo = transtorno.dominios_impacto.find(
        (d) => d.id === dominio,
      );
      const label = dominioInfo?.label ?? dominio;
      const nivel = formatarNivelImpacto(valor);
      linhas.push(`- **${label}:** ${nivel}`);
    }
    linhas.push("");
  }

  // Comorbidades
  if (payload.comorbidades.length > 0) {
    linhas.push("## Comorbidades Identificadas");
    linhas.push("");
    for (const comorbidade of payload.comorbidades) {
      linhas.push(`- ${comorbidade}`);
    }
    linhas.push("");
  }

  // Notas clinicas
  if (
    values.notas_clinicas.historia &&
    values.notas_clinicas.historia.trim().length > 0
  ) {
    linhas.push("## Historia Clinica");
    linhas.push("");
    linhas.push(values.notas_clinicas.historia);
    linhas.push("");
  }

  if (
    values.notas_clinicas.observacoes_gerais &&
    values.notas_clinicas.observacoes_gerais.trim().length > 0
  ) {
    linhas.push("## Observacoes Gerais");
    linhas.push("");
    linhas.push(values.notas_clinicas.observacoes_gerais);
    linhas.push("");
  }

  // Metadados
  linhas.push("---");
  linhas.push(`*Gerado pelo sistema DSM-5 — ${transtorno.meta.codigo.dsm5}*`);

  return linhas.join("\n");
}

/**
 * Formata uma data ISO para formato legivel.
 */
function formatarData(isoString: string): string {
  try {
    const data = new Date(isoString);
    return data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return isoString;
  }
}

/**
 * Converte nivel numerico de impacto em rotulo legivel.
 */
function formatarNivelImpacto(valor: string): string {
  switch (valor) {
    case "1":
      return "Leve";
    case "2":
      return "Moderado";
    case "3":
      return "Grave";
    default:
      return "Sem impacto";
  }
}
