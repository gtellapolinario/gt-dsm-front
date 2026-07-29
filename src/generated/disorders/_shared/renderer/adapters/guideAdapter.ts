import type { ClinicalDisorder } from "../../schema";
import { asRaw, list, rec, str } from "./raw";
import { nosologyCodes } from "../../utils/disorderDataAccess";
import type {
  CodeEntry,
  CourseStep,
  GuideView,
  HierarchyView,
  InstrumentView,
  PrevalenceView,
} from "./guideView";
import { buildSeverityView } from "./severityAdapter";

/** Rótulos de subtipos a partir da chave canônica `subtipos.subtipos`. */
function subtiposLabelsOf(data: ClinicalDisorder): string[] {
  const rawData = asRaw(data);
  const arr = rawData.subtipos?.subtipos;
  if (!Array.isArray(arr)) return [];
  return arr.map((s) => {
    if (typeof s === "string") return s;
    const r = rec(s);
    return String(r?.label ?? r?.nome ?? r?.id);
  });
}

/** Hierarquia diagnóstica com conteúdo exibível. */
function hierarquiaDe(data: ClinicalDisorder): HierarchyView | null {
  const h = asRaw(data).hierarquia;
  if (!h) return null;
  // Listas brutas, como no original (que as tipava via `any`): o componente
  // aplica titleFromValue em cada item no render.
  const exclui = (h.exclui_se_diagnosticado ?? []) as string[];
  const excluidoPor = (h.exclui_diagnostico_de ?? []) as string[];
  const notas = h.notas ? String(h.notas) : null;
  if (exclui.length === 0 && excluidoPor.length === 0 && !notas) return null;
  return { exclui, excluidoPor, notas };
}

/** O guia só existe quando há algo para mostrar: campo nulo não renderiza. */
export function clinicalGuideHasData(data: ClinicalDisorder): boolean {
  const rawData = asRaw(data);
  return Boolean(
    nosologyCodes(data).some((c) => c.valor !== null) ||
    rawData.prevalencia?.estimativa ||
    rawData.prevalencia?.distribuicao_por_sexo ||
    rawData.prevalencia?.variacoes_contextuais ||
    rawData.prevalencia?.nota_aplicador ||
    rawData.curso_desenvolvimento?.inicio_tipico ||
    rawData.curso_desenvolvimento?.trajetoria ||
    rawData.curso_desenvolvimento?.prognostico ||
    rawData.gravidade?.classificacao_dsm != null ||
    subtiposLabelsOf(data).length > 0 ||
    hierarquiaDe(data) != null ||
    // `?? 0`: o original (any) avaliava `undefined > 0` como false; idem aqui.
    (rawData.instrumentos_complementares?.length ?? 0) > 0,
  );
}

export function buildGuideView(data: ClinicalDisorder): GuideView {
  const rawData = asRaw(data);
  const prevalencia = rawData.prevalencia;
  const curso = rawData.curso_desenvolvimento;

  // Fonte canônica: meta.codificacao (dsm5_tr editorial ICD-9-CM, cid10_cm,
  // cid11_mms). O bloco meta.codigo foi aposentado — incompleto e duplicado.
  const codigos: CodeEntry[] = nosologyCodes(data)
    .filter((c) => c.valor !== null)
    .map((c) => ({
      sistema: c.sistema,
      valor: String(c.valor),
      equivalencia: c.equivalencia,
      regra: c.regra,
    }));

  // Chaves do payload v2.3.0 (fonte:
  // docs/meta_prevalencia_curso_dsm5tr_revisados_58.json). As chaves antigas
  // (populacao_geral, proporcao_sexo, variacoes_culturais, notas,
  // idade_inicio_tipica) não existem mais em nenhum dos 58 payloads.
  const temPrevalencia = Boolean(
    prevalencia?.estimativa ||
    prevalencia?.distribuicao_por_sexo ||
    prevalencia?.variacoes_contextuais ||
    prevalencia?.nota_aplicador,
  );
  const prevalenciaView: PrevalenceView | null = temPrevalencia
    ? {
        estimativa: prevalencia?.estimativa
          ? String(prevalencia.estimativa)
          : null,
        distribuicaoSexo: prevalencia?.distribuicao_por_sexo
          ? String(prevalencia.distribuicao_por_sexo)
          : null,
        variacoesContextuais: prevalencia?.variacoes_contextuais
          ? String(prevalencia.variacoes_contextuais)
          : null,
        notaAplicador: prevalencia?.nota_aplicador
          ? String(prevalencia.nota_aplicador)
          : null,
      }
    : null;

  const cursoEtapas: CourseStep[] = (
    [
      { rotulo: "Início típico", valor: curso?.inicio_tipico },
      { rotulo: "Trajetória", valor: curso?.trajetoria },
      { rotulo: "Prognóstico", valor: curso?.prognostico },
    ] as const
  )
    .filter((etapa) => etapa.valor)
    .map((etapa) => ({ rotulo: etapa.rotulo, valor: String(etapa.valor) }));

  // No original os itens passavam crus (`any`) e o render lia nome/sigla/uso.
  // Aqui os campos string são normalizados via `str` (null→undefined); um
  // campo não-string no payload renderizaria o valor bruto no original —
  // limitação declarada no relatório.
  const instrumentos: InstrumentView[] = list(
    rawData.instrumentos_complementares,
  ).map((item) => {
    const r = rec(item);
    return {
      nome: str(r?.nome) ?? undefined,
      sigla: str(r?.sigla) ?? undefined,
      uso: str(r?.uso) ?? undefined,
    };
  });

  return {
    codigos,
    prevalencia: prevalenciaView,
    curso: cursoEtapas,
    gravidade: buildSeverityView(data),
    // != null frouxo, como o `temGravidade` do original (linha 1160 do
    // baseline) — semântica distinta do guarda falsy do SeverityBlock.
    temGravidade: rawData.gravidade?.classificacao_dsm != null,
    subtipos: subtiposLabelsOf(data),
    hierarquia: hierarquiaDe(data),
    instrumentos,
  };
}
