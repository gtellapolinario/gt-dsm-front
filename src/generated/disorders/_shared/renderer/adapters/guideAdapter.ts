import type { ClinicalDisorder } from "../../schema";
import { asRaw, list, rec, str } from "./raw";
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
    rawData.meta?.codigo?.dsm5 ||
    rawData.meta?.codigo?.cid10 ||
    rawData.meta?.codigo?.cid11 ||
    rawData.prevalencia?.populacao_geral ||
    rawData.prevalencia?.proporcao_sexo ||
    rawData.prevalencia?.variacoes_culturais ||
    rawData.prevalencia?.notas ||
    rawData.curso_desenvolvimento?.idade_inicio_tipica ||
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

  const codigos: CodeEntry[] = (
    [
      { sistema: "DSM-5", valor: rawData.meta?.codigo?.dsm5 },
      { sistema: "CID-10", valor: rawData.meta?.codigo?.cid10 },
      { sistema: "CID-11", valor: rawData.meta?.codigo?.cid11 },
    ] as const
  )
    .filter((codigo) => codigo.valor)
    .map((codigo) => ({ sistema: codigo.sistema, valor: String(codigo.valor) }));

  const temPrevalencia = Boolean(
    prevalencia?.populacao_geral ||
    prevalencia?.proporcao_sexo ||
    prevalencia?.variacoes_culturais ||
    prevalencia?.notas,
  );
  const prevalenciaView: PrevalenceView | null = temPrevalencia
    ? {
        populacaoGeral: prevalencia?.populacao_geral
          ? String(prevalencia.populacao_geral)
          : null,
        proporcaoSexo: prevalencia?.proporcao_sexo
          ? String(prevalencia.proporcao_sexo)
          : null,
        variacoesCulturais: prevalencia?.variacoes_culturais
          ? String(prevalencia.variacoes_culturais)
          : null,
        notas: prevalencia?.notas ? String(prevalencia.notas) : null,
      }
    : null;

  const cursoEtapas: CourseStep[] = (
    [
      { rotulo: "Início típico", valor: curso?.idade_inicio_tipica },
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
