// ═══════════════════════════════════════════════════════════════════════════
// TDAH — Transtorno de Déficit de Atenção/Hiperatividade
// Estrutura: polythetic_clusters_simetricos
// ═══════════════════════════════════════════════════════════════════════════

import { useMemo } from "react";
import { Copy, EyeOff, Zap, Tag, FileText, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ConsultaShell } from "@/infra/components/layout/consulta-shell";
import { IdentificacaoPaciente } from "@/infra/components/layout/identificacao-paciente";
import { AccordionSection } from "@/infra/components/ui/accordion-section";
import { SymptomItem } from "@/infra/components/ui/symptom-item";
import { ToggleChip } from "@/infra/components/ui/toggle-chip";
import { CountBadge } from "@/infra/components/ui/count-badge";
import { NivelImpacto } from "@/infra/components/ui/nivel-impacto";
import { usePolytheticSimetricos } from "@/infra/hooks/use-polythetic-simetricos";
import { data } from "./data";

export const meta = {
  id: "transtorno_deficit_atencao_hiperatividade",
  nome: "Transtorno de Déficit de Atenção/Hiperatividade",
  sigla: "TDAH",
  capituloId: "01",
};

export default function TdahAvaliacao() {
  const {
    identificacao,
    formValues,
    contadores,
    criteriosBECount,
    criteriosBETotal,
    apresentacao,
    markdown,
    setIdentificacaoField,
    toggleSintoma,
    setSeverity,
    toggleCriterio,
    setSubtipo,
    setGravidade,
    setImpacto,
    toggleComorbidade,
    setNotasClinicas,
    reset,
    copiarMarkdown,
  } = usePolytheticSimetricos(data);

  // Status dos critérios B-E para o painel
  const beStatus = useMemo(
    () =>
      data.criterios_condicionais.map((c) => ({
        ...c,
        active: formValues.criterios_condicionais[c.id] || false,
      })),
    [formValues.criterios_condicionais]
  );

  // Barras de impacto
  const impactoBarras = useMemo(
    () =>
      data.dominios_impacto.map((d) => {
        const val = parseInt(formValues.impacto[d.id] || "0");
        const cores = ["bg-slate-200", "bg-yellow-400", "bg-amber-500", "bg-red-500"];
        const coresText = ["text-slate-400", "text-yellow-700", "text-amber-700", "text-red-700"];
        return { ...d, val, cor: cores[val], corText: coresText[val] };
      }),
    [formValues.impacto]
  );

  const handleCopiar = async () => {
    const ok = await copiarMarkdown();
    if (ok) alert("Markdown copiado para a área de transferência!");
    else alert("Falha ao copiar.");
  };

  return (
    <ConsultaShell
      titulo="Guia TDAH DSM-5"
      subtitulo="Avaliação clínica estruturada em adultos (≥17 anos)"
      onPrint={() => window.print()}
      onReset={reset}
      acoes={
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopiar}
          className="text-xs bg-blue-600 text-white border-0 hover:bg-blue-700"
        >
          <Copy className="w-3 h-3 mr-1" />
          Copiar
        </Button>
      }
    >
      {/* ═══ COLUNA ESQUERDA (7) ═══ */}
      <div className="xl:col-span-7 space-y-3">
        {/* 1. Identificação */}
        <IdentificacaoPaciente
          values={identificacao}
          onChange={setIdentificacaoField}
        />

        {/* 2. Histórico Evolutivo */}
        <AccordionSection title="Histórico Evolutivo e Critérios B–E" icon="fa-clock-rotate-left" color="blue">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-slate-400 mb-2">
                Critérios obrigatórios para o diagnóstico. Clique para confirmar cada item.
              </p>
              <div className="flex flex-wrap gap-2">
                {data.criterios_condicionais.map((c) => (
                  <ToggleChip
                    key={c.id}
                    label={`${c.letra} — ${c.rotulo}`}
                    icon={c.icone_fa || undefined}
                    active={formValues.criterios_condicionais[c.id] || false}
                    onToggle={() => toggleCriterio(c.id)}
                    variant="brand"
                    description={c.descricao_completa}
                  />
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Desenvolvimento e curso dos sintomas
              </label>
              <Textarea
                value={formValues.notas_clinicas.historia}
                onChange={(e) => setNotasClinicas("historia", e.target.value)}
                rows={3}
                placeholder="Descreva o início dos sintomas na infância, trajetória escolar, adaptações ao longo da vida..."
                className="text-sm resize-y"
              />
            </div>
          </div>
        </AccordionSection>

        {/* 3. Cluster A1 — Desatenção */}
        <AccordionSection
          title="Critério A1 — Desatenção"
          icon={EyeOff}
          color="amber"
          badge={<CountBadge current={contadores.A1?.selecionados || 0} target={contadores.A1?.limiar || 5} />}
        >
          <div className="space-y-1">
            {data.clusters_sintomas[0]?.sintomas.map((s) => (
              <SymptomItem
                key={s.id}
                sintoma={s}
                checked={formValues.clusters.A1?.[s.id]?.checked || false}
                severity={formValues.clusters.A1?.[s.id]?.severity || ""}
                onToggle={(checked) => toggleSintoma("A1", s.id, checked)}
                onSeverityChange={(sev) => setSeverity("A1", s.id, sev)}
              />
            ))}
          </div>
          <div className="pt-3">
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Observações clínicas — Desatenção
            </label>
            <Textarea
              value={formValues.notas_clinicas.observacoes_clusters.A1 || ""}
              onChange={(e) => setNotasClinicas("observacoes_clusters", e.target.value, "A1")}
              rows={2}
              placeholder="Ex.: dificuldade crônica em terminar relatórios, leitura fragmentada..."
              className="text-sm resize-y"
            />
          </div>
        </AccordionSection>

        {/* 4. Cluster A2 — Hiperatividade/Impulsividade */}
        <AccordionSection
          title="Critério A2 — Hiperatividade / Impulsividade"
          icon={Zap}
          color="red"
          badge={<CountBadge current={contadores.A2?.selecionados || 0} target={contadores.A2?.limiar || 5} />}
        >
          <div className="space-y-1">
            {data.clusters_sintomas[1]?.sintomas.map((s) => (
              <SymptomItem
                key={s.id}
                sintoma={s}
                checked={formValues.clusters.A2?.[s.id]?.checked || false}
                severity={formValues.clusters.A2?.[s.id]?.severity || ""}
                onToggle={(checked) => toggleSintoma("A2", s.id, checked)}
                onSeverityChange={(sev) => setSeverity("A2", s.id, sev)}
              />
            ))}
          </div>
          <div className="pt-3">
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Observações clínicas — Hiperatividade/Impulsividade
            </label>
            <Textarea
              value={formValues.notas_clinicas.observacoes_clusters.A2 || ""}
              onChange={(e) => setNotasClinicas("observacoes_clusters", e.target.value, "A2")}
              rows={2}
              placeholder="Ex.: sensação interna de aceleração constante, interrompe colegas..."
              className="text-sm resize-y"
            />
          </div>
        </AccordionSection>

        {/* 5. Subtipos */}
        {data.subtipos.presente && (
          <AccordionSection title="Apresentação Clínica (Subtipo)" icon={Tag} color="blue">
            <RadioGroup
              value={formValues.subtipo_selecionado || ""}
              onValueChange={(v) => setSubtipo(v || null)}
              className="space-y-2"
            >
              {data.subtipos.subtipos.map((sub) => (
                <div key={sub.id} className="flex items-start space-x-2">
                  <RadioGroupItem value={sub.id} id={sub.id} />
                  <Label htmlFor={sub.id} className="text-sm cursor-pointer">
                    <span className="font-semibold">{sub.label}</span>
                    <p className="text-xs text-slate-400 mt-0.5">{sub.descricao}</p>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </AccordionSection>
        )}

        {/* 6. Gravidade */}
        {data.gravidade.tipo === "ordinal_simples" && (
          <AccordionSection title="Gravidade" icon="fa-chart-bar" color="blue">
            <Select value={formValues.gravidade || undefined} onValueChange={setGravidade}>
              <SelectTrigger className="text-sm">
                <SelectValue placeholder="Selecione a gravidade" />
              </SelectTrigger>
              <SelectContent>
                {data.gravidade.niveis?.map((n) => (
                  <SelectItem key={n.id} value={n.id}>
                    {n.label} — {n.descritor}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </AccordionSection>
        )}

        {/* 7. Impacto Funcional */}
        <AccordionSection title="Avaliação de Impacto Funcional" icon="fa-chart-line" color="blue">
          <p className="text-xs text-slate-400 mb-3">
            Classifique o grau de prejuízo em cada domínio (0 = sem prejuízo, 1 = leve, 2 = moderado, 3 = grave).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.dominios_impacto.map((d) => (
              <NivelImpacto
                key={d.id}
                dominio={d}
                value={formValues.impacto[d.id] || "0"}
                onChange={(v) => setImpacto(d.id, v)}
              />
            ))}
          </div>
          <div className="pt-3">
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Observações sobre impacto funcional
            </label>
            <Textarea
              value={formValues.notas_clinicas.observacoes_gerais}
              onChange={(e) => setNotasClinicas("observacoes_gerais", e.target.value)}
              rows={2}
              placeholder="Detalhes sobre áreas de maior comprometimento, estratégias compensatórias..."
              className="text-sm resize-y"
            />
          </div>
        </AccordionSection>

        {/* 8. Comorbidades */}
        <AccordionSection title="Comorbidades e Diagnóstico Diferencial" icon="fa-layer-group" color="blue">
          <p className="text-xs text-slate-400 mb-2">
            Selecione as condições em investigação ou já confirmadas.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {data.comorbidades_frequentes.map((c) => (
              <ToggleChip
                key={c.condicao}
                label={c.condicao}
                active={formValues.comorbidades_selecionadas.includes(c.condicao)}
                onToggle={() => toggleComorbidade(c.condicao)}
                variant="amber"
              />
            ))}
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Detalhamento das comorbidades / DDx
            </label>
            <Textarea
              rows={3}
              placeholder="Detalhe quadros comórbidos confirmados, em investigação ou diagnósticos diferenciais considerados..."
              className="text-sm resize-y"
            />
          </div>
        </AccordionSection>
      </div>

      {/* ═══ COLUNA DIREITA (5) — PAINEL DE SÍNTESE ═══ */}
      <div className="xl:col-span-5 space-y-3">
        <div className="xl:sticky xl:top-20 space-y-3">
          {/* Painel de Critérios */}
          <AccordionSection title="Painel de Critérios" icon="fa-clipboard-check" color="blue">
            {/* Contadores A1/A2 */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div
                className={`rounded-lg border p-3 text-center ${
                  (contadores.A1?.selecionados || 0) >= (contadores.A1?.limiar || 5)
                    ? "border-emerald-300 bg-emerald-50"
                    : "border-slate-200 shadow-sm"
                }`}
              >
                <p className="text-xs text-slate-400 mb-1">Desatenção (A1)</p>
                <p className="text-2xl font-bold text-slate-700">{contadores.A1?.selecionados || 0}</p>
                <p className="text-xs text-slate-400">de {contadores.A1?.limiar || 5} necessários</p>
              </div>
              <div
                className={`rounded-lg border p-3 text-center ${
                  (contadores.A2?.selecionados || 0) >= (contadores.A2?.limiar || 5)
                    ? "border-emerald-300 bg-emerald-50"
                    : "border-slate-200 shadow-sm"
                }`}
              >
                <p className="text-xs text-slate-400 mb-1">Hiper/Impuls. (A2)</p>
                <p className="text-2xl font-bold text-slate-700">{contadores.A2?.selecionados || 0}</p>
                <p className="text-xs text-slate-400">de {contadores.A2?.limiar || 5} necessários</p>
              </div>
            </div>

            {/* Apresentação inferida */}
            <div
              className={`rounded-lg border p-3 mb-3 ${
                apresentacao && apresentacao !== "Abaixo do limiar para apresentações formais"
                  ? "border-emerald-300 bg-emerald-50"
                  : "border-amber-300 bg-amber-50"
              }`}
            >
              <p className="text-xs text-slate-400 mb-1">
                <Tag className="w-3 h-3 inline mr-1" />
                Apresentação inferida
              </p>
              <p className="text-sm font-semibold text-slate-700">{apresentacao || "—"}</p>
            </div>

            {/* Status B-E */}
            <div className="rounded-lg border border-slate-200 shadow-sm p-3 mb-3">
              <p className="text-xs text-slate-400 mb-2">
                <FileText className="w-3 h-3 inline mr-1" />
                Critérios B–E ({criteriosBECount}/{criteriosBETotal})
              </p>
              <div className="space-y-1">
                {beStatus.map((c) => (
                  <div key={c.id} className="flex items-center gap-2 text-xs">
                    {c.active ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-slate-300 shrink-0" />
                    )}
                    <span className={c.active ? "text-emerald-700 font-semibold" : "text-slate-400"}>
                      {c.letra} — {c.rotulo}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impacto funcional */}
            <div className="rounded-lg border border-slate-200 shadow-sm p-3">
              <p className="text-xs text-slate-400 mb-2">Impacto funcional</p>
              <div className="space-y-1.5">
                {impactoBarras.map((d) => (
                  <div key={d.id} className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 w-24 truncate">{d.label}</span>
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`${d.cor} h-full rounded-full transition-all`}
                        style={{ width: `${(d.val / 3) * 100}%` }}
                      />
                    </div>
                    <span className={`text-[10px] font-semibold w-4 text-right ${d.corText}`}>
                      {d.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AccordionSection>

          {/* Markdown Preview */}
          <AccordionSection title="Pré-visualização do Relatório" icon={FileText} color="blue">
            <pre className="text-xs text-slate-600 bg-slate-50 rounded-lg border border-slate-200 p-4 overflow-auto max-h-[65vh] whitespace-pre-wrap leading-relaxed font-mono text-[11px]">
              {markdown}
            </pre>
            <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">
              Baseado nos critérios DSM-5/DSM-5-TR para TDAH em adultos. Ferramenta auxiliar — não substitui o julgamento clínico.
            </p>
          </AccordionSection>
        </div>
      </div>
    </ConsultaShell>
  );
}
