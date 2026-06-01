/**
 * ============================================================
 * Consulta Renderer (consulta-renderer.tsx) — REFATORADO
 * ============================================================
 * Componente central de renderizacao de conteudo DSM.
 * Recebe hook tipado via discriminated union e usa type guards
 * para acesso seguro a propriedades variantes.
 *
 * ANTES: `hook: any` com deconstruct dinamico
 * DEPOIS: `hook: DSMHookReturn` com discriminated union + type guards
 * ============================================================
 */

import { useCallback } from "react";
import type { TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import type {
  ConsultaState,
  ErrorBoundaryState,
  ClusterSintomas,
} from "@/infra/types/dsm-form-types";
import type { DSMHookReturn } from "@/infra/types/hook-types";
import {
  hasApresentacao,
  hasContadores,
  hasCriteriosBE,
  isMonotheticPuro,
  isQualitativoDescritivo,
  isTemporalTopografico,
  isCategoricoPorSubtipo,
  isTripartiteFuncional,
  isPsicomotorPolythetic,
  isConjuncaoTemporalComplexa,
  isEtiologicoExterno,
  isFallbackClasse,
  isUnicoObrigatorio,
  hasToggleSintoma,
} from "@/infra/types/hook-types";

/* ============================================================
 * 1. INTERFACE DE PROPS (totalmente tipada, zero any)
 * ============================================================ */

interface ConsultaRendererProps {
  /** Dados do transtorno DSM */
  data: TranstornoDSM;
  /** Hook de avaliacao tipado via discriminated union */
  hook: DSMHookReturn;
  /** Funcao para atualizar estado da consulta */
  setConsultaState: (state: ConsultaState) => void;
  /** Estado atual da consulta */
  consultaState: ConsultaState;
  /** Estado do error boundary */
  errorBoundary: ErrorBoundaryState;
}

/* ============================================================
 * 2. COMPONENTE
 * ============================================================ */

export function ConsultaRenderer({
  data,
  hook,
  setConsultaState: _setConsultaState,
  consultaState,
  errorBoundary,
}: ConsultaRendererProps): JSX.Element {
  /**
   * Renderiza conteudo principal baseado no tipo do hook.
   * Usa type guards para acesso seguro a propriedades especificas.
   */
  const renderizarConteudoPrincipal = useCallback((): JSX.Element => {
    // --- 2.1. Hooks com apresentacao (polythetic variants) ---
    if (hasApresentacao(hook)) {
      const { apresentacao, contadores } = hook;

      return (
        <div className="space-y-6">
          <section className="apresentacao-section" data-testid="apresentacao">
            <h2 className="text-lg font-semibold text-gray-800">
              {data.nome_completo}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Estrutura: {data.estrutura_diagnostica}
            </p>

            {apresentacao.regraDiagnostica && (
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="text-sm font-medium text-blue-800">
                  Regra Diagnostica
                </h3>
                <p className="text-sm text-blue-700 mt-1">
                  {apresentacao.regraDiagnostica}
                </p>
              </div>
            )}

            {/* Render clusters com type-safe access */}
            {apresentacao.clusters.length > 0 && (
              <div className="clusters-container mt-4 space-y-4">
                {apresentacao.clusters.map((cluster) => {
                  const clusterKey = `cluster-${cluster.id}`;
                  const contador = contadores[cluster.id];
                  const satisfeito = contador?.satisfeito ?? false;

                  return (
                    <ClusterCard
                      key={clusterKey}
                      cluster={cluster}
                      satisfeito={satisfeito}
                      contador={contador}
                      onToggleSintoma={
                        hasToggleSintoma(hook)
                          ? (sintomaId: string) =>
                              hook.toggleSintoma(cluster.id, sintomaId)
                          : undefined
                      }
                      consultaState={consultaState}
                    />
                  );
                })}
              </div>
            )}
          </section>

          {/* Render criterios BE com progresso */}
          {hasCriteriosBE(hook) && (
            <CriteriosBEProgress
              count={hook.criteriosBECount}
              total={hook.criteriosBETotal}
            />
          )}
        </div>
      );
    }

    // --- 2.2. Monothetic puro ---
    if (isMonotheticPuro(hook)) {
      const { criteriosObrigatorios, toggleCriterio } = hook;

      return (
        <div className="space-y-6">
          <section data-testid="monothetic-puro">
            <h2 className="text-lg font-semibold text-gray-800">
              {data.nome_completo} — Criterios Obrigatorios
            </h2>

            <div className="criterios-list mt-4 space-y-3">
              {criteriosObrigatorios.map((criterio) => (
                <div
                  key={criterio.id}
                  className={`p-4 border rounded-lg transition-colors ${
                    criterio.satisfeito
                      ? "bg-green-50 border-green-300"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={criterio.satisfeito}
                      onChange={() => toggleCriterio(criterio.id)}
                      className="mt-1 h-4 w-4 text-blue-600 rounded"
                    />
                    <div>
                      <span className="font-medium text-sm">
                        Criterio {criterio.letra}
                      </span>
                      <p className="text-sm text-gray-600 mt-0.5">
                        {criterio.descricao}
                      </p>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </section>
        </div>
      );
    }

    // --- 2.3. Qualitativo descritivo ---
    if (isQualitativoDescritivo(hook)) {
      const { avaliacaoQualitativa, observacoes, setAvaliacaoQualitativa, setObservacoes } = hook;

      return (
        <div className="space-y-6">
          <section data-testid="qualitativo-descritivo">
            <h2 className="text-lg font-semibold text-gray-800">
              {data.nome_completo} — Avaliacao Qualitativa
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <label
                  htmlFor="avaliacao-qualitativa"
                  className="block text-sm font-medium text-gray-700"
                >
                  Avaliacao Qualitativa
                </label>
                <textarea
                  id="avaliacao-qualitativa"
                  value={avaliacaoQualitativa}
                  onChange={(e) => setAvaliacaoQualitativa(e.target.value)}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Descreva a avaliacao qualitativa..."
                />
              </div>

              <div>
                <label
                  htmlFor="observacoes-clinicas"
                  className="block text-sm font-medium text-gray-700"
                >
                  Observacoes Clinicas
                </label>
                <textarea
                  id="observacoes-clinicas"
                  value={observacoes}
                  onChange={(e) => setObservacoes(e.target.value)}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Observacoes adicionais..."
                />
              </div>
            </div>
          </section>
        </div>
      );
    }

    // --- 2.4. Temporal topografico ---
    if (isTemporalTopografico(hook)) {
      const { duracaoDias, topografia, setDuracaoDias, setTopografia, avaliarTemporalidade } = hook;

      return (
        <div className="space-y-6">
          <section data-testid="temporal-topografico">
            <h2 className="text-lg font-semibold text-gray-800">
              {data.nome_completo} — Avaliacao Temporal
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <label
                  htmlFor="duracao-dias"
                  className="block text-sm font-medium text-gray-700"
                >
                  Duracao (dias)
                </label>
                <input
                  id="duracao-dias"
                  type="number"
                  value={duracaoDias}
                  onChange={(e) => setDuracaoDias(Number(e.target.value))}
                  min={0}
                  className="mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="topografia"
                  className="block text-sm font-medium text-gray-700"
                >
                  Topografia / Localizacao
                </label>
                <input
                  id="topografia"
                  type="text"
                  value={topografia}
                  onChange={(e) => setTopografia(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Descreva a localizacao..."
                />
              </div>

              <div
                className={`p-3 rounded-lg ${
                  avaliarTemporalidade()
                    ? "bg-green-50 text-green-800"
                    : "bg-yellow-50 text-yellow-800"
                }`}
              >
                <p className="text-sm font-medium">
                  {avaliarTemporalidade()
                    ? "Temporalidade satisfatoria"
                    : "Temporalidade insatisfatoria"}
                </p>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // --- 2.5. Categorico por subtipo ---
    if (isCategoricoPorSubtipo(hook)) {
      const { subtipos, subtipoSelecionado, selecionarSubtipo, toggleCriterioSubtipo } = hook;

      return (
        <div className="space-y-6">
          <section data-testid="categorico-subtipo">
            <h2 className="text-lg font-semibold text-gray-800">
              {data.nome_completo} — Subtipos
            </h2>

            <div className="subtipos-list mt-4 space-y-4">
              {subtipos.map((subtipo) => (
                <div
                  key={subtipo.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    subtipoSelecionado === subtipo.id
                      ? "bg-blue-50 border-blue-300"
                      : "bg-white border-gray-200 hover:bg-gray-50"
                  }`}
                  onClick={() => selecionarSubtipo(subtipo.id)}
                  role="button"
                  tabIndex={0}
                >
                  <h3 className="font-medium text-sm">{subtipo.nome}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {subtipo.descricao}
                  </p>

                  {subtipoSelecionado === subtipo.id && (
                    <div className="criterios-subtipo mt-3 space-y-2">
                      {subtipo.criterios.map((criterioTexto, idx) => (
                        <label
                          key={`${subtipo.id}-crit-${idx}`}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            onChange={() =>
                              toggleCriterioSubtipo(
                                subtipo.id,
                                String(idx)
                              )
                            }
                            className="h-4 w-4 text-blue-600 rounded"
                          />
                          <span className="text-sm">{criterioTexto}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      );
    }

    // --- 2.6. Tripartite funcional ---
    if (isTripartiteFuncional(hook)) {
      const { dominios, contadores, toggleCriterio, resetDominio } = hook;

      return (
        <div className="space-y-6">
          <section data-testid="tripartite-funcional">
            <h2 className="text-lg font-semibold text-gray-800">
              {data.nome_completo} — Avaliacao Funcional
            </h2>

            <div className="dominios-list mt-4 space-y-6">
              {Object.values(dominios).map((dominio) => (
                <div
                  key={dominio.id}
                  className={`p-4 border rounded-lg ${
                    dominio.satisfeito
                      ? "bg-green-50 border-green-300"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-sm">{dominio.label}</h3>
                    <button
                      type="button"
                      onClick={() => resetDominio(dominio.id)}
                      className="text-xs text-gray-500 hover:text-gray-700"
                    >
                      Resetar
                    </button>
                  </div>

                  <div className="criterios-dominio mt-3 space-y-2">
                    {dominio.criterios.map((criterio) => (
                      <label
                        key={criterio.id}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          checked={criterio.satisfeito}
                          onChange={() =>
                            toggleCriterio(dominio.id, criterio.id)
                          }
                          className="h-4 w-4 text-blue-600 rounded"
                        />
                        <span className="text-sm">{criterio.texto}</span>
                      </label>
                    ))}
                  </div>

                  {contadores[dominio.id] && (
                    <p className="text-xs text-gray-500 mt-2">
                      Progresso: {contadores[dominio.id].count} /{" "}
                      {contadores[dominio.id].total}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      );
    }

    // --- 2.7. Psicomotor polythetic ---
    if (isPsicomotorPolythetic(hook)) {
      const { sintomasObservados, adicionarSintoma, removerSintoma } = hook;

      const sintomasDisponiveis = data.clusters_sintomas.flatMap(
        (c) => c.sintomas
      );

      return (
        <div className="space-y-6">
          <section data-testid="psicomotor-polythetic">
            <h2 className="text-lg font-semibold text-gray-800">
              {data.nome_completo} — Avaliacao Psicomotora
            </h2>

            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Sintomas Observados
              </h3>

              {sintomasObservados.length === 0 && (
                <p className="text-sm text-gray-500 italic">
                  Nenhum sintoma observado ainda
                </p>
              )}

              <div className="observed-sintomas flex flex-wrap gap-2 mb-4">
                {sintomasObservados.map((sintomaId) => {
                  const sintoma = sintomasDisponiveis.find(
                    (s) => s.id === sintomaId
                  );
                  return (
                    <span
                      key={sintomaId}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {sintoma?.texto ?? sintomaId}
                      <button
                        type="button"
                        onClick={() => removerSintoma(sintomaId)}
                        className="ml-1 text-blue-600 hover:text-blue-900"
                        aria-label={`Remover ${sintoma?.texto ?? sintomaId}`}
                      >
                        &times;
                      </button>
                    </span>
                  );
                })}
              </div>

              <div className="available-sintomas mt-4">
                <h4 className="text-xs font-medium text-gray-500 uppercase mb-2">
                  Clique para adicionar:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {sintomasDisponiveis.map((sintoma) => (
                    <button
                      key={sintoma.id}
                      type="button"
                      onClick={() => adicionarSintoma(sintoma.id)}
                      disabled={sintomasObservados.includes(sintoma.id)}
                      className={`px-3 py-1 rounded-full text-xs border transition-colors ${
                        sintomasObservados.includes(sintoma.id)
                          ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300"
                      }`}
                    >
                      {sintoma.texto}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    // --- 2.8. Conjuncao temporal complexa ---
    if (isConjuncaoTemporalComplexa(hook)) {
      const { periodos, togglePeriodo, setDuracaoPeriodo } = hook;

      return (
        <div className="space-y-6">
          <section data-testid="conjuncao-temporal">
            <h2 className="text-lg font-semibold text-gray-800">
              {data.nome_completo} — Conjuncao Temporal
            </h2>

            <div className="periodos-list mt-4 space-y-4">
              {periodos.map((periodo) => (
                <div
                  key={periodo.id}
                  className={`p-4 border rounded-lg ${
                    periodo.satisfeito
                      ? "bg-green-50 border-green-300"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={periodo.satisfeito}
                        onChange={() => togglePeriodo(periodo.id)}
                        className="h-4 w-4 text-blue-600 rounded"
                      />
                      <span className="text-sm font-medium">
                        {periodo.label}
                      </span>
                    </label>

                    <div className="flex items-center space-x-2">
                      <label
                        htmlFor={`duracao-${periodo.id}`}
                        className="text-xs text-gray-500"
                      >
                        Duracao (dias):
                      </label>
                      <input
                        id={`duracao-${periodo.id}`}
                        type="number"
                        min={0}
                        onChange={(e) =>
                          setDuracaoPeriodo(
                            periodo.id,
                            Number(e.target.value)
                          )
                        }
                        className="w-20 rounded-md border-gray-300 shadow-sm text-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mt-2">
                    Duracao minima: {periodo.duracaoMinima} dias
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      );
    }

    // --- 2.9. Etiologico externo ---
    if (isEtiologicoExterno(hook)) {
      const {
        agenteCausal,
        tipoEtiologia,
        criteriosEtiologicos,
        setAgenteCausal,
        setTipoEtiologia,
        toggleCriterio,
      } = hook;

      return (
        <div className="space-y-6">
          <section data-testid="etiologico-externo">
            <h2 className="text-lg font-semibold text-gray-800">
              {data.nome_completo} — Causa Externa
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tipo de Etiologia
                </label>
                <div className="mt-1 flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="tipo-etiologia"
                      checked={tipoEtiologia === "substancia"}
                      onChange={() => setTipoEtiologia("substancia")}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-sm">Substancia</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="tipo-etiologia"
                      checked={tipoEtiologia === "condicao_medica"}
                      onChange={() => setTipoEtiologia("condicao_medica")}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-sm">Condicao Medica</span>
                  </label>
                </div>
              </div>

              <div>
                <label
                  htmlFor="agente-causal"
                  className="block text-sm font-medium text-gray-700"
                >
                  Agente Causal
                </label>
                <input
                  id="agente-causal"
                  type="text"
                  value={agenteCausal}
                  onChange={(e) => setAgenteCausal(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ex: Alcool, Cannabis, Condicao X..."
                />
              </div>

              <div className="criterios-etiologicos space-y-2">
                {criteriosEtiologicos.map((criterio) => (
                  <label
                    key={criterio.id}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      checked={criterio.satisfeito}
                      onChange={() => toggleCriterio(criterio.id)}
                      className="h-4 w-4 text-blue-600 rounded"
                    />
                    <span className="text-sm">{criterio.texto}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>
        </div>
      );
    }

    // --- 2.10. Fallback classe ---
    if (isFallbackClasse(hook)) {
      const { classeDetectada, aviso } = hook;

      return (
        <div className="space-y-6">
          <section
            data-testid="fallback-classe"
            className="p-4 bg-yellow-50 border border-yellow-300 rounded-lg"
          >
            <h2 className="text-lg font-semibold text-yellow-800">
              Estrutura Nao Mapeada
            </h2>
            <p className="text-sm text-yellow-700 mt-1">
              Classe detectada: <code>{classeDetectada}</code>
            </p>
            <p className="text-sm text-yellow-700 mt-2">{aviso}</p>
            <div className="mt-4 p-3 bg-white rounded border border-yellow-200">
              <p className="text-sm text-gray-600">
                Usando renderizacao generica para:{" "}
                <strong>{data.nome_completo}</strong>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Estrutura: {data.estrutura_diagnostica}
              </p>
            </div>
          </section>
        </div>
      );
    }

    // --- 2.11. Unico obrigatorio ---
    if (isUnicoObrigatorio(hook)) {
      const { criterio, toggleCriterio } = hook;

      return (
        <div className="space-y-6">
          <section data-testid="unico-obrigatorio">
            <h2 className="text-lg font-semibold text-gray-800">
              {data.nome_completo}
            </h2>

            <div className="mt-4">
              <label
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                  criterio.satisfeito
                    ? "bg-green-50 border-green-300"
                    : "bg-white border-gray-200"
                }`}
              >
                <input
                  type="checkbox"
                  checked={criterio.satisfeito}
                  onChange={() => toggleCriterio()}
                  className="h-5 w-5 text-blue-600 rounded"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium">
                    {criterio.texto}
                  </p>
                </div>
              </label>
            </div>
          </section>
        </div>
      );
    }

    if (hook.__tipo === "polythetic_monocluster") {
      return (
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-700">
            Estrutura Monocluster: consulte os sintomas individuais.
          </p>
        </div>
      );
    }

    // --- 2.12. Exhaustiveness check ---
    // Se chegou aqui, um tipo novo foi adicionado sem handler
    const _exhaustive: never = hook;
    void _exhaustive;

    return (
      <div className="p-4 bg-red-50 border border-red-300 rounded-lg">
        <p className="text-sm text-red-700">
          Erro: tipo de hook nao reconhecido. Verifique o tipo &quot;
          {String((hook as Record<string, unknown>).__tipo)}
          &quot;.
        </p>
      </div>
    );
  }, [hook, data, consultaState]);

  /* ============================================================
   * 3. RENDER PRINCIPAL
   * ============================================================ */

  // Se o error boundary capturou erro, mostra fallback
  if (errorBoundary.hasError && errorBoundary.error) {
    return (
      <div className="p-6 bg-red-50 border border-red-300 rounded-lg">
        <h2 className="text-lg font-semibold text-red-800">
          Erro ao Renderizar Consulta
        </h2>
        <p className="text-sm text-red-700 mt-2">
          {errorBoundary.error.message}
        </p>
        {errorBoundary.errorInfo && (
          <pre className="mt-4 p-3 bg-white rounded text-xs text-red-600 overflow-auto">
            {errorBoundary.errorInfo}
          </pre>
        )}
      </div>
    );
  }

  return (
    <article className="consulta-renderer space-y-6">
      {/* Header com info do transtorno */}
      <header className="pb-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">{data.nome_completo}</h1>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700">
            CID-10: {data.meta.codigo?.cid10 ?? "N/A"}
          </span>
          <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700">
            DSM-5: {data.meta.codigo?.dsm5 ?? "N/A"}
          </span>
          <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700">
            {data.estrutura_diagnostica}
          </span>
          {hook.diagnosticoCompleto && (
            <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700">
              Diagnostico Completo
            </span>
          )}
        </div>
      </header>

      {/* Conteudo principal renderizado por tipo de hook */}
      <main>{renderizarConteudoPrincipal()}</main>

      {/* Secao de contadores (se disponivel) */}
      {hasContadores(hook) && (
        <section className="contadores-section" data-testid="contadores">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Progresso dos Criterios
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {Object.entries(hook.contadores).map(([key, contador]) => (
              <div
                key={key}
                className={`p-3 rounded-lg border ${
                  contador.satisfeito
                    ? "bg-green-50 border-green-300"
                    : "bg-white border-gray-200"
                }`}
              >
                <p className="text-xs font-medium text-gray-600 capitalize">
                  {key}
                </p>
                <p className="text-sm mt-1">
                  <span
                    className={
                      contador.satisfeito ? "text-green-700" : "text-gray-700"
                    }
                  >
                    {contador.count}
                  </span>
                  <span className="text-gray-400"> / {contador.total}</span>
                </p>
                {contador.ancoraSatisfeita !== undefined && (
                  <p className="text-xs mt-1">
                    Ancora:{" "}
                    <span
                      className={
                        contador.ancoraSatisfeita
                          ? "text-green-600"
                          : "text-yellow-600"
                      }
                    >
                      {contador.ancoraSatisfeita ? "Satisfeita" : "Pendente"}
                    </span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Secao de payload/diagnostico */}
      <section className="payload-section" data-testid="payload-diagnostico">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">
          Resumo do Diagnostico
        </h3>
        <div
          className={`p-4 rounded-lg border ${
            hook.payload.diagnosticoFirmado
              ? "bg-green-50 border-green-300"
              : "bg-yellow-50 border-yellow-300"
          }`}
        >
          <p className="text-sm font-medium">
            Status:{" "}
            {hook.payload.diagnosticoFirmado
              ? "Diagnostico pode ser firmado"
              : "Diagnostico incompleto"}
          </p>
          {hook.payload.justificativa && (
            <p className="text-sm text-gray-600 mt-2">
              {hook.payload.justificativa}
            </p>
          )}
        </div>
      </section>
    </article>
  );
}

/* ============================================================
 * 4. SUB-COMPONENTES (totalmente tipados)
 * ============================================================ */

/** Props para ClusterCard */
interface ClusterCardProps {
  cluster: ClusterSintomas;
  satisfeito: boolean;
  contador:
    | {
        count: number;
        total: number;
        satisfeito: boolean;
        ancoraSatisfeita?: boolean;
      }
    | undefined;
  onToggleSintoma: ((sintomaId: string) => void) | undefined;
  consultaState: ConsultaState;
}

/** Card individual de cluster */
function ClusterCard({
  cluster,
  satisfeito,
  contador,
  onToggleSintoma,
}: ClusterCardProps): JSX.Element {
  return (
    <div
      className={`p-4 border rounded-lg transition-colors ${
        satisfeito
          ? "bg-green-50 border-green-300"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-sm">{cluster.nome}</h4>
        {contador && (
          <span className="text-xs text-gray-500">
            {contador.count}/{contador.total}
          </span>
        )}
      </div>

      {cluster.descricao && (
        <p className="text-xs text-gray-500 mb-3">{cluster.descricao}</p>
      )}

      <div className="sintomas-list space-y-2">
        {cluster.sintomas.map((sintoma) => (
          <label
            key={sintoma.id}
            className="flex items-start space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              onChange={() => onToggleSintoma?.(sintoma.id)}
              className="mt-0.5 h-4 w-4 text-blue-600 rounded"
            />
            <div>
              <p className="text-sm">{sintoma.texto}</p>
              {sintoma.descricao && (
                <p className="text-xs text-gray-500">{sintoma.descricao}</p>
              )}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

/** Props para CriteriosBEProgress */
interface CriteriosBEProgressProps {
  count: number;
  total: number;
}

/** Barra de progresso de criterios BE */
function CriteriosBEProgress({
  count,
  total,
}: CriteriosBEProgressProps): JSX.Element {
  const porcentagem = total > 0 ? Math.round((count / total) * 100) : 0;

  return (
    <section
      className="criterios-be-progress"
      data-testid="criterios-be-progress"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-700">
          Criterios BE
        </h3>
        <span className="text-sm text-gray-600">
          {count} / {total} ({porcentagem}%)
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full transition-all ${
            count >= total ? "bg-green-600" : "bg-blue-600"
          }`}
          style={{ width: `${Math.min(porcentagem, 100)}%` }}
          role="progressbar"
          aria-valuenow={count}
          aria-valuemin={0}
          aria-valuemax={total}
        />
      </div>
    </section>
  );
}
