import type { ClinicalDisorder } from "../schema";
import type { DisorderAssessmentState } from "../hooks/useDisorderAssessment";
import {
  disorderName,
  getDisplayDescription,
  getDisplayLabel,
  getRecordId,
  isRecord,
  normalizeChoiceItems,
  nosologyCodes,
  stringifyClinicalValue,
  thresholdNumber,
  titleFromValue,
} from "./disorderDataAccess";

function filled(label: string, value: string | null | undefined): string | null {
  return value && value.trim().length > 0
    ? `- **${label}:** ${value.trim()}`
    : null;
}

/** "1994-02-10" (input date) → "10/02/1994 (32 anos)". */
function formatNascimento(isoDate: string): string {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-").map(Number);
  if (!year || !month || !day) return isoDate;
  const today = new Date();
  let age = today.getFullYear() - year;
  if (
    today.getMonth() < month - 1 ||
    (today.getMonth() === month - 1 && today.getDate() < day)
  ) {
    age -= 1;
  }
  const formatted = `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}`;
  return age >= 0 && age < 150 ? `${formatted} (${age} anos)` : formatted;
}

function selectedLabels(value: unknown, selected: Record<string, boolean>) {
  return normalizeChoiceItems(value)
    .filter((item) => selected[item.id])
    .map((item) => item.label);
}

/**
 * Gera o documento clínico SOMENTE com o que o aplicador fez (padrão
 * script/tdah.html): campos vazios, itens não marcados e conteúdo do
 * payload (limiares, descrições, escalas) não vão para o markdown.
 */
export function generateClinicalMarkdown(state: DisorderAssessmentState, data: ClinicalDisorder): string {
  const codes = nosologyCodes(data)
    .filter((c) => c.valor !== null)
    .map((c) => `${c.sistema} ${c.valor}`)
    .join(" · ");
  const clusters = data.clusters_sintomas ?? [];
  const metClusters = clusters.filter((cluster) => cluster.sintomas.filter((symptom) => state.symptomChecked[symptom.id]).length >= thresholdNumber(cluster.limiar, cluster.sintomas.length));
  const requiredConditionals = normalizeChoiceItems(data.criterios_condicionais).filter((item) => isRecord(item.raw) && item.raw.obrigatorio === true);
  const metRequired = requiredConditionals.filter((item) => state.conditionalCriteria[item.id]).length;
  const confirmedConditionals = normalizeChoiceItems(data.criterios_condicionais).filter((item) => state.conditionalCriteria[item.id]);
  const specs = selectedLabels(data.especificadores, state.specifiers);
  const comorbidities = selectedLabels(data.comorbidades_frequentes, state.comorbidities);
  const ddx = selectedLabels(data.diagnostico_diferencial, state.ddx);

  const output: string[] = [
    `# Avaliação clínica — ${disorderName(data)}`,
    codes ? `_${codes}_` : "",
    "",
    "## Identificação",
    `- **Data da avaliação:** ${new Date().toLocaleDateString("pt-BR")}`,
  ];

  const identificacao = [
    filled("Paciente", state.patient.nomeId),
    filled("Data de nascimento", formatNascimento(state.patient.dataNascimento)),
    filled("Sexo", state.patient.sexo),
    filled("Gênero", state.patient.genero),
    filled("Escolaridade", state.patient.escolaridade),
    filled("Motivo da consulta", state.patient.queixaPrincipal),
  ].filter((item): item is string => item !== null);
  output.push(...identificacao);

  // ─── Sintomas: só os marcados, com gravidade e observações ───
  const clustersComMarcados = clusters.filter((cluster) =>
    cluster.sintomas.some((symptom) => state.symptomChecked[symptom.id]),
  );
  if (clustersComMarcados.length > 0) {
    output.push("", "## Critérios e sintomas");
    clustersComMarcados.forEach((cluster, index) => {
      const selectedSymptoms = cluster.sintomas.filter((symptom) => state.symptomChecked[symptom.id]);
      const threshold = thresholdNumber(cluster.limiar, cluster.sintomas.length);
      output.push("", `### ${cluster.nome ?? `Cluster ${index + 1}`} (${selectedSymptoms.length}/${threshold})`);
      selectedSymptoms.forEach((symptom) => {
        const label = symptom.rotulo ?? symptom.texto ?? symptom.id;
        const severity = state.symptomSeverity[symptom.id] ?? "leve";
        output.push(`- **${symptom.id} — ${label}** (${severity})`);
        const note = state.symptomNotes[symptom.id];
        if (note?.trim()) output.push(`  - Observação: ${note.trim()}`);
      });
      const clusterNote = state.clusterNotes[cluster.id];
      if (clusterNote?.trim()) output.push(`- *Observações clínicas:* ${clusterNote.trim()}`);
    });
  }

  // ─── Critérios condicionais: só os confirmados ───
  if (confirmedConditionals.length > 0) {
    output.push("", `## Critérios condicionais confirmados (${metRequired}/${requiredConditionals.length} obrigatórios)`);
    confirmedConditionals.forEach((item) => output.push(`- ✓ **${item.label}**`));
  }

  if (specs.length > 0) {
    output.push("", "## Especificadores");
    specs.forEach((label) => output.push(`- ${label}`));
    const note = state.sectionNotes.especificadores;
    if (note?.trim()) output.push(`- *Notas:* ${note.trim()}`);
  }

  if (comorbidities.length > 0) {
    output.push("", "## Comorbidades");
    comorbidities.forEach((label) => output.push(`- ${label}`));
    const note = state.sectionNotes.comorbidades_frequentes;
    if (note?.trim()) output.push(`- *Detalhamento:* ${note.trim()}`);
  }

  if (ddx.length > 0) {
    output.push("", "## Diagnóstico diferencial");
    ddx.forEach((label) => output.push(`- ✓ Excluído: ${label}`));
    const note = state.sectionNotes.diagnostico_diferencial;
    if (note?.trim()) output.push(`- *Notas DDx:* ${note.trim()}`);
  }

  if (state.impactFunctional !== "ausente") {
    output.push("", "## Impacto funcional");
    output.push(`- **Impacto funcional global:** ${state.impactFunctional}`);
    const note = state.sectionNotes.impacto_funcional;
    if (note?.trim()) output.push(`- *Observações:* ${note.trim()}`);
  }

  // Notas de seção com chave fora do mapa acima (nenhuma hoje — defensivo).
  const notasMapeadas = new Set([
    "especificadores",
    "comorbidades_frequentes",
    "diagnostico_diferencial",
    "impacto_funcional",
  ]);
  const outrasNotas = Object.entries(state.sectionNotes).filter(
    ([section, note]) => !notasMapeadas.has(section) && note.trim().length > 0,
  );
  if (outrasNotas.length > 0) {
    output.push("", "## Observações clínicas");
    outrasNotas.forEach(([section, note]) =>
      output.push(`- **${titleFromValue(section)}:** ${note.trim()}`),
    );
  }

  output.push("", "## Síntese diagnóstica orientativa");
  output.push(`- Clusters com limiar atingido: ${metClusters.length}/${clusters.length}.`);
  output.push(`- Critérios obrigatórios confirmados: ${metRequired}/${requiredConditionals.length}.`);
  output.push(`- Hipótese/apresentação: ${metClusters.length === clusters.length && (requiredConditionals.length === 0 || metRequired === requiredConditionals.length) ? "compatibilidade clínica preliminar com os critérios preenchidos" : "compatibilidade parcial; revisar critérios faltantes, prejuízo funcional, exclusões e diagnóstico diferencial"}.`);

  output.push("", "---", "");
  output.push(`> Dados obtidos por avaliação clínica estruturada com base nos critérios DSM-5/DSM-5-TR para ${disorderName(data)}. Ferramenta auxiliar — não substitui entrevista clínica, instrumentos validados ou julgamento profissional.`);

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
