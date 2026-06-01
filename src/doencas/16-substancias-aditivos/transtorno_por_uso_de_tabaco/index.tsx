// Auto-generated from DSM operational release. Do not edit manually.
import { useMemo } from "react";
import { Copy, FileText, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ConsultaShell } from "@/infra/components/layout/consulta-shell";
import { IdentificacaoPaciente } from "@/infra/components/layout/identificacao-paciente";
import { AccordionSection } from "@/infra/components/ui/accordion-section";
import { SymptomItem } from "@/infra/components/ui/symptom-item";
import { ToggleChip } from "@/infra/components/ui/toggle-chip";
import { NivelImpacto } from "@/infra/components/ui/nivel-impacto";
import type { TranstornoDSM, ClusterSintomas, CriterioDiagnostico, DominioImpactoFuncional, Comorbidade, DiagnosticoDiferencial, NivelGravidade } from "@/infra/schemas/dsm-schemas";
import { usePolytheticMonoClusterEvaluation } from "@/hooks/evaluation-hooks";
import { data } from "./data";

export const meta = {
  id: "transtorno_por_uso_de_tabaco",
  nome: "Transtorno por Uso de Tabaco",
  sigla: "",
  capituloId: "16",
};

// Funções utilitárias seguras
const safeArray = <T,>(value: T[] | undefined | null): T[] => Array.isArray(value) ? value : [];
const asText = (value: unknown): string => typeof value === "string" ? value : value == null ? "" : JSON.stringify(value);

export default function TranstornoPorUsoDeTabacoAvaliacao() {
  const hook = usePolytheticMonoClusterEvaluation(data);
  const {
    identificacao,
    formValues,
    payload,
    markdown,
    setIdentificacaoField,
    toggleSintoma,
    toggleCriterio,
    setGravidade,
    setImpacto,
    toggleComorbidade,
    setNotasClinicas,
    reset,
    copiarMarkdown,
  } = hook;

  // --- Dados tipados extraídos do objeto validado ---
  const clusters: readonly ClusterSintomas[] = safeArray(data.clusters_sintomas);
  const criterios: readonly CriterioDiagnostico[] = safeArray(data.criterios_condicionais);
  const dominiosImpacto: readonly DominioImpactoFuncional[] = safeArray(data.dominios_impacto);
  const comorbidades: readonly Comorbidade[] = safeArray(data.comorbidades_frequentes);
  const diferenciais: readonly DiagnosticoDiferencial[] = safeArray(data.diagnostico_diferencial);
  const rawDoc = data.raw_document as Record<string, unknown> | undefined;
  const rawDocInner = rawDoc?.raw_document as Record<string, unknown> | undefined;
  const rawSuper = rawDocInner?.super_enrichment as Record<string, unknown> | undefined;
  const rawRendering = rawDocInner?.rendering as Record<string, unknown> | undefined;
  const perguntasRaw: { id: string; texto: string }[] = (() => {
    const top = safeArray(data.perguntas_chave?.length ? data.perguntas_chave : data.key_questions);
    if (top.length) return top;
    const seArr = safeArray(rawSuper?.perguntas_chave_entrevista as unknown[]);
    if (seArr.length) return seArr.map((p, i) => { const item = p as Record<string, unknown>; return { id: String(item.numero ?? i + 1), texto: String(item.texto ?? "") }; });
    const rkArr = safeArray(rawRendering?.key_questions as unknown[]);
    if (rkArr.length) return rkArr.map((s, i) => ({ id: String(i + 1), texto: String(s) }));
    return [];
  })();
  const perguntas = perguntasRaw;
  const instrumentos = safeArray(data.instrumentos_complementares);
  const gravidade = data.gravidade;
  const niveisGravidade: readonly NivelGravidade[] = safeArray(gravidade?.niveis);
  const dominiosGravidade = safeArray(gravidade?.dominios);
  const curso = data.curso_desenvolvimento;
  const prevalencia = data.prevalencia;
  const hierarquia = data.hierarquia;

  const hasClusters = clusters.length > 0;
  const hasCriterios = criterios.length > 0;
  const hasComorb = comorbidades.length > 0;
  const hasDDx = diferenciais.length > 0;
  const hasQuestions = perguntas.length > 0;
  const hasInst = instrumentos.length > 0;
  const hasCurso = Boolean(curso?.idade_inicio_tipica || curso?.trajetoria || curso?.prognostico);
  const hasPrevalencia = Boolean(prevalencia?.populacao_geral);
  const hasGravidade = Boolean(gravidade?.tipo && gravidade.tipo !== "nao_aplica");
  const isGravSelectable = niveisGravidade.length > 0;

  // --- Estado tipado vindo do hook ---
  const values = formValues || {};
  const clustersState: Record<string, any> = values.clusters || {};
  const criteriosState: Record<string, any> = values.criterios_condicionais || {};
  const impactoState: Record<string, any> = values.impacto || {};
  const notas = values.notas_clinicas || {};
  const grav = values.gravidade || "";
  const comorbSel: string[] = values.comorbidades_selecionadas || [];
  const contadores: Record<string, any> = hook.contadores || {};

  const criteriosStatus = useMemo(() => hasCriterios
    ? criterios.map((c) => ({ ...c, active: Boolean(criteriosState[c.id]) }))
    : [], [criterios, criteriosState, hasCriterios]);

  const impactoBarras = useMemo(() =>
    dominiosImpacto.map((d) => {
      const val = parseInt(impactoState[d.id] || "0", 10);
      const cores = ["bg-slate-200", "bg-yellow-400", "bg-amber-500", "bg-red-500"];
      const ct = ["text-slate-400", "text-yellow-700", "text-amber-700", "text-red-700"];
      return { ...d, val, cor: cores[val] || cores[0], corText: ct[val] || ct[0] };
    }), [dominiosImpacto, impactoState]);

  const handleCopiar = async () => {
    const ok = await copiarMarkdown?.();
    if (ok) alert("Copiado!"); else alert("Falha ao copiar.");
  };

  return (
    <ConsultaShell
      titulo="Transtorno por Uso de Tabaco"
      subtitulo="Transtorno por Uso de Tabaco (305.1 / F17.200)"
      onPrint={() => window.print()}
      onReset={reset}
      acoes={
        <Button variant="outline" size="sm" onClick={handleCopiar}
          className="text-xs bg-blue-600 text-white border-0 hover:bg-blue-700">
          <Copy className="w-3 h-3 mr-1" />Copiar
        </Button>
      }
    >
      <div className="xl:col-span-7 space-y-3">
        <IdentificacaoPaciente values={identificacao} onChange={setIdentificacaoField} />

        {hasClusters && clusters.map((cl) => (
          <AccordionSection key={cl.id} title={cl.nome || cl.id} icon="fa-brain" color="blue"
            badge={<Badge variant="outline" className="text-slate-400">
              {(contadores[cl.id]?.selecionados || 0)}/{safeArray(cl.sintomas).length || "?"}
            </Badge>}>
            {safeArray(cl.sintomas).map((s) => (
              <SymptomItem key={s.id} sintoma={{ id: s.id, rotulo: s.texto, desc: s.descricao, pergunta: "" }} clusterId={cl.id}
                checked={Boolean(clustersState[cl.id]?.[s.id]?.checked)}
                severity="_none"
                onToggle={(chk: boolean) => toggleSintoma?.(cl.id, s.id, chk)}
                onSeverityChange={() => {}} />
            ))}
            <Textarea value={notas.observacoes_clusters?.[cl.id] || ""}
              onChange={(e) => setNotasClinicas?.("observacoes_clusters", e.target.value, cl.id)}
              rows={2} placeholder={`Observações sobre ${cl.nome || cl.id}...`} className="text-sm resize-y mt-2" />
          </AccordionSection>
        ))}

        {hasCriterios && (
          <AccordionSection title="Critérios diagnósticos" icon="fa-clipboard-check" color="green"
            badge={<Badge variant="outline" className="text-slate-400">{criteriosStatus.filter((c) => c.active).length}/{criteriosStatus.length}</Badge>}>
            <div className="space-y-3">
              {criteriosStatus.map((c) => (
                <div key={c.id} className={`rounded-lg border p-3 ${c.active ? "border-emerald-300 bg-emerald-50" : "border-slate-200"}`}>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{c.active ? <CheckCircle2 className="w-5 h-5 text-emerald-600"/> : <XCircle className="w-5 h-5 text-slate-300"/>}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">{c.letra}</span>
                        <span className="text-sm font-semibold text-stone-700">{c.rotulo}</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed mb-2">{asText(c.descricao_completa)}</p>
                      <Button variant="outline" size="sm" onClick={() => toggleCriterio?.(c.id)}
                        className={`text-xs h-7 ${c.active ? "bg-emerald-100 text-emerald-700 border-emerald-300" : ""}`}>
                        {c.active ? "Confirmado" : "Confirmar"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AccordionSection>
        )}

        {hasGravidade && (
          <AccordionSection title="Gravidade" icon="fa-gauge-high" color="red">
            {gravidade?.regra_atribuicao && <p className="text-xs text-slate-500 mb-2">{gravidade.regra_atribuicao}</p>}
            <p className="text-xs text-slate-400 mb-2">Tipo: {gravidade?.tipo}</p>
            {isGravSelectable ? (
              <select value={grav} onChange={(e) => setGravidade?.(e.target.value)} className="w-full text-sm border rounded-md p-2">
                <option value="">Selecione...</option>
                {niveisGravidade.map((n) => <option key={n.id} value={n.id}>{n.label}</option>)}
              </select>
            ) : (
              <div className="space-y-2">
                {dominiosGravidade.length > 0 ? dominiosGravidade.map((d) => (
                  <div key={d.id} className="rounded border border-slate-200 bg-slate-50 p-2 text-xs text-slate-600">
                    <strong>{d.label}</strong>
                    {d.descricao && <p className="text-slate-400 mt-0.5">{d.descricao}</p>}
                  </div>
                )) : <p className="text-xs text-slate-500">Gravidade formal registrada, sem níveis selecionáveis no JSON.</p>}
              </div>
            )}
          </AccordionSection>
        )}

        {dominiosImpacto.length > 0 && (
          <AccordionSection title="Impacto Funcional" icon="fa-chart-line" color="blue">
            <p className="text-xs text-slate-400 mb-3">0 = sem prejuízo, 1 = leve, 2 = moderado, 3 = grave</p>
            <div className="grid grid-cols-1 gap-3">
              {dominiosImpacto.map((d) => (
                <NivelImpacto key={d.id} dominio={d} value={impactoState[d.id] || "0"} onChange={(v: string) => setImpacto?.(d.id, v)} />
              ))}
            </div>
            <Textarea value={notas.observacoes_gerais || ""} onChange={(e) => setNotasClinicas?.("observacoes_gerais", e.target.value)}
              rows={2} placeholder="Observações..." className="text-sm resize-y mt-3" />
          </AccordionSection>
        )}

        {hasQuestions && (
          <AccordionSection title="Perguntas-chave" icon="fa-circle-question" color="blue">
            <div className="space-y-2">
              {perguntas.map((q) => (
                <div key={q.id} className="text-xs text-slate-600 bg-blue-50 rounded border border-blue-100 p-2">
                  {q.texto}
                </div>
              ))}
            </div>
          </AccordionSection>
        )}

        <AccordionSection title="Comorbidades e Diagnóstico Diferencial" icon="fa-layer-group" color="blue">
          {hasComorb ? (
            <div className="flex flex-wrap gap-2 mb-4">
              {comorbidades.map((c) => (
                <ToggleChip key={c.condicao} label={c.condicao} active={comorbSel.includes(c.condicao)}
                  onToggle={() => toggleComorbidade?.(c.condicao)} variant="amber" />
              ))}
            </div>
          ) : <p className="text-xs text-slate-400 mb-2">Sem comorbidades catalogadas.</p>}
          {hierarquia?.presente && hierarquia.notas && (
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 mb-3">
              <p className="text-xs font-semibold text-amber-800 mb-1">Hierarquia</p>
              <p className="text-xs text-amber-700">{hierarquia.notas}</p>
            </div>
          )}
          {hasDDx && (
            <div className="space-y-2">
              <p className="text-xs font-semibold text-stone-700">Diagnóstico Diferencial</p>
              {diferenciais.map((ddx) => (
                <div key={ddx.condicao} className="text-xs text-slate-600 bg-slate-50 rounded border border-slate-200 p-2">
                  <strong>{ddx.condicao}</strong>
                  {ddx.ponto_distincao && <p className="text-slate-400 mt-0.5">{ddx.ponto_distincao}</p>}
                </div>
              ))}
            </div>
          )}
        </AccordionSection>

        {(hasCurso || hasPrevalencia || hasInst) && (
          <AccordionSection title="Curso e Instrumentos" icon="fa-clock-rotate-left" color="blue">
            <div className="space-y-3 text-xs text-slate-600">
              {curso?.idade_inicio_tipica && <div><p className="font-semibold text-stone-700 mb-0.5">Início típico</p><p>{curso.idade_inicio_tipica}</p></div>}
              {curso?.trajetoria && <div><p className="font-semibold text-stone-700 mb-0.5">Trajetória</p><p className="leading-relaxed">{curso.trajetoria}</p></div>}
              {curso?.prognostico && <div><p className="font-semibold text-stone-700 mb-0.5">Prognóstico</p><p>{curso.prognostico}</p></div>}
              {prevalencia?.populacao_geral && <div><p className="font-semibold text-stone-700 mb-0.5">Prevalência</p><p>{prevalencia.populacao_geral}</p></div>}
              {hasInst && <div><p className="font-semibold text-stone-700 mb-0.5">Instrumentos</p>{instrumentos.map((i: Record<string, string>) => <p key={i.sigla || i.nome || i.name}><strong>{i.sigla || "?"}</strong> — {i.nome || i.name || asText(i)}</p>)}</div>}
            </div>
          </AccordionSection>
        )}
      </div>

      <div className="xl:col-span-5 space-y-3">
        <div className="xl:sticky xl:top-20 space-y-3">
          <div className="rounded-lg border border-slate-200 shadow-sm p-3">
            <p className="text-xs text-slate-400 mb-2">Status</p>
            <div className="space-y-1">
              {hasClusters ? clusters.map((cl) => (
                <div key={cl.id} className="flex justify-between text-xs">
                  <span className="text-slate-500">{cl.nome || cl.id}</span>
                  <span className="font-semibold text-stone-600">{(contadores[cl.id]?.selecionados || 0)}/{safeArray(cl.sintomas).length || "?"}</span>
                </div>
              )) : <p className="text-xs text-slate-400">Sem clusters</p>}
              {hasCriterios && criteriosStatus.map((c) => (
                <div key={c.id} className="flex items-center gap-2 text-xs">
                  {c.active ? <CheckCircle2 className="w-3 h-3 text-emerald-600"/> : <XCircle className="w-3 h-3 text-slate-300"/>}
                  <span className={c.active ? "text-emerald-700" : "text-slate-400"}>{c.letra} — {c.rotulo}</span>
                </div>
              ))}
            </div>
          </div>

          {dominiosImpacto.length > 0 && (
            <div className="rounded-lg border border-slate-200 shadow-sm p-3">
              <p className="text-xs text-slate-400 mb-2">Impacto funcional</p>
              <div className="space-y-1.5">
                {impactoBarras.map((d) => (
                  <div key={d.id} className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 w-32 truncate">{d.label}</span>
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden"><div className={`${d.cor} h-full rounded-full transition-all`} style={{ width: `${(d.val / 3) * 100}%` }} /></div>
                    <span className={`text-[10px] font-semibold w-4 text-right ${d.corText}`}>{d.val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {comorbSel.length > 0 && (
            <div className="rounded-lg border border-slate-200 shadow-sm p-3">
              <p className="text-xs text-slate-400 mb-1">Comorbidades</p>
              <div className="flex flex-wrap gap-1">
                {comorbSel.map((c) => <span key={c} className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">{c}</span>)}
              </div>
            </div>
          )}

          <div className="rounded-lg border border-slate-200 shadow-sm p-3">
            <p className="text-xs text-slate-400 mb-2 flex items-center gap-1"><FileText className="w-3 h-3"/> Relatório</p>
            <pre className="text-xs text-slate-600 bg-slate-50 rounded border p-4 overflow-auto max-h-[50vh] whitespace-pre-wrap font-mono text-[11px]">{markdown}</pre>
            <p className="text-[10px] text-slate-400 mt-2">Baseado em critérios DSM operacionais. Ferramenta auxiliar; não substitui julgamento clínico.</p>
          </div>
        </div>
      </div>
    </ConsultaShell>
  );
}
