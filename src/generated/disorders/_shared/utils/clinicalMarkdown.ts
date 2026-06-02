import type { ClinicalDisorder } from "../schema";
import type { DisorderAssessmentState } from "../hooks/useDisorderAssessment";
import {
  disorderName,
  formatThreshold,
  getDisplayDescription,
  getDisplayLabel,
  getRecordId,
  isRecord,
  normalizeChoiceItems,
  stringifyClinicalValue,
  thresholdNumber,
  titleFromValue,
} from "./disorderDataAccess";

export interface ClinicalMarkdownConfig {
  readonly id: string;
  readonly nome: string;
  readonly sigla?: string | null;
  readonly codigo_dsm5?: string | null;
  readonly codigo_cid10?: string | null;
  readonly codigo_cid11?: string | null;
  readonly route_path?: string;
}

function line(label: string, value: string | null | undefined) {
  return `- **${label}:** ${value && value.trim().length > 0 ? value : "Não informado"}`;
}

function selectedLabels(value: unknown, selected: Record<string, boolean>) {
  return normalizeChoiceItems(value)
    .filter((item) => selected[item.id])
    .map((item) => item.label);
}

function conditionalLines(value: unknown, selected: Record<string, boolean>) {
  return normalizeChoiceItems(value).map((item) => `- ${selected[item.id] ? "[x]" : "[ ]"} **${item.label}**${item.description ? ` — ${item.description}` : ""}`);
}

export function generateClinicalMarkdown(state: DisorderAssessmentState, data: ClinicalDisorder, config: ClinicalMarkdownConfig): string {
  const codes = [config.codigo_dsm5 ? `DSM-5 ${config.codigo_dsm5}` : null, config.codigo_cid10 ? `CID-10 ${config.codigo_cid10}` : null, config.codigo_cid11 ? `CID-11 ${config.codigo_cid11}` : null]
    .filter(Boolean)
    .join(" · ");
  const clusters = data.clusters_sintomas ?? [];
  const metClusters = clusters.filter((cluster) => cluster.sintomas.filter((symptom) => state.symptomChecked[symptom.id]).length >= thresholdNumber(cluster.limiar, cluster.sintomas.length));
  const requiredConditionals = normalizeChoiceItems(data.criterios_condicionais).filter((item) => isRecord(item.raw) && item.raw.obrigatorio === true);
  const metRequired = requiredConditionals.filter((item) => state.conditionalCriteria[item.id]).length;
  const specs = selectedLabels(data.especificadores, state.specifiers);
  const comorbidities = selectedLabels(data.comorbidades_frequentes, state.comorbidities);
  const ddx = selectedLabels(data.diagnostico_diferencial, state.comorbidities);

  const output: string[] = [
    `# Avaliação clínica — ${disorderName(data, config.nome)}`,
    codes ? `_${codes}_` : "",
    "",
    "## Identificação",
    line("Paciente", state.patient.nomeId),
    line("Idade/data de nascimento", state.patient.idadeNascimento),
    line("Sexo", state.patient.sexo),
    line("Escolaridade", state.patient.escolaridade),
    line("Ocupação", state.patient.ocupacao),
    line("Informante/encaminhamento", state.patient.informante),
    line("Queixa principal", state.patient.queixaPrincipal),
    "",
    "## Critérios e sintomas por cluster",
  ];

  if (clusters.length === 0) {
    output.push("- Não há clusters de sintomas estruturados no payload.");
  }

  clusters.forEach((cluster, clusterIndex) => {
    const selectedSymptoms = cluster.sintomas.filter((symptom) => state.symptomChecked[symptom.id]);
    const threshold = thresholdNumber(cluster.limiar, cluster.sintomas.length);
    const thresholdLabel = formatThreshold(cluster.limiar) ?? `fallback ≥ ${threshold}`;
    output.push("", `### ${cluster.nome ?? `Cluster ${clusterIndex + 1}`} (${selectedSymptoms.length}/${threshold})`, `- Limiar: ${thresholdLabel}`);
    if (cluster.descricao) output.push(`- Descrição: ${cluster.descricao}`);
    if (selectedSymptoms.length === 0) {
      output.push("- Nenhum item marcado.");
    } else {
      selectedSymptoms.forEach((symptom) => {
        const label = symptom.rotulo ?? symptom.texto ?? symptom.id;
        const severity = state.symptomSeverity[symptom.id] ?? "leve";
        output.push(`- **${symptom.id} — ${label}** (${severity})`);
        const note = state.symptomNotes[symptom.id];
        if (note?.trim()) output.push(`  - Observação: ${note.trim()}`);
      });
    }
    const clusterNote = state.clusterNotes[cluster.id];
    if (clusterNote?.trim()) output.push(`- Observações do cluster: ${clusterNote.trim()}`);
  });

  output.push("", "## Critérios condicionais");
  const conditionals = conditionalLines(data.criterios_condicionais, state.conditionalCriteria);
  output.push(...(conditionals.length > 0 ? conditionals : ["- Sem critérios condicionais estruturados."]));

  output.push("", "## Especificadores, DDx e comorbidades");
  output.push(line("Especificadores", specs.join(", ")));
  output.push(line("Comorbidades/DDx selecionados", [...comorbidities, ...ddx].join(", ")));
  output.push(line("Impacto funcional", state.impactFunctional));

  output.push("", "## Observações clínicas por seção");
  const sectionNotes = Object.entries(state.sectionNotes).filter(([, note]) => note.trim().length > 0);
  output.push(...(sectionNotes.length > 0 ? sectionNotes.map(([section, note]) => `- **${titleFromValue(section)}:** ${note.trim()}`) : ["- Sem observações adicionais registradas."]));

  output.push("", "## Síntese diagnóstica orientativa");
  output.push(`- Clusters com limiar atingido: ${metClusters.length}/${clusters.length}.`);
  output.push(`- Critérios obrigatórios marcados: ${metRequired}/${requiredConditionals.length}.`);
  output.push(`- Hipótese/apresentação: ${metClusters.length === clusters.length && (requiredConditionals.length === 0 || metRequired === requiredConditionals.length) ? "compatibilidade clínica preliminar com os critérios preenchidos" : "compatibilidade parcial; revisar critérios faltantes, prejuízo funcional, exclusões e diagnóstico diferencial"}.`);
  output.push("- Conclusão orientativa: síntese gerada como apoio ao registro clínico; não substitui entrevista clínica, julgamento profissional, instrumentos validados e avaliação de risco.");

  output.push("", "## Dados clínicos complementares preservados do payload");
  ["gravidade", "dominios_impacto", "diagnostico_diferencial", "instrumentos_complementares"].forEach((section) => {
    const value = data[section];
    if (value !== undefined && value !== null) {
      const summary = stringifyClinicalValue(value);
      if (summary) output.push(`- **${titleFromValue(section)}:** ${summary}`);
    }
  });

  return output.filter((item) => item !== "").join("\n");
}

export function describeRawItem(value: unknown, fallback: string) {
  if (!isRecord(value)) return { id: fallback, label: stringifyClinicalValue(value) || fallback, description: null as string | null };
  return {
    id: getRecordId(value, 0),
    label: getDisplayLabel(value, fallback),
    description: getDisplayDescription(value),
  };
}
