/**
 * ============================================================
 * Consulta Full (consulta-full.tsx) — REFATORADO
 * ============================================================
 * Componente de consulta completa que orquestra:
 * - ConsultaShell (layout)
 * - IdentificacaoPaciente (form de identificacao)
 * - ConsultaRenderer (renderizacao do conteudo DSM)
 *
 * ANTES: Props com `any`, hook sem tipagem
 * DEPOIS: Props totalmente tipadas, hook via DSMHookReturn
 * ============================================================ */

import { useState, useCallback } from "react";
import type { ReactElement } from "react";
import type { TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import type {
  ConsultaState,
  ErrorBoundaryState,
  IdentificacaoState,
} from "@/infra/types/dsm-form-types";
import type { DSMHookReturn } from "@/infra/types/hook-types";

import { ConsultaShell } from "./layout/consulta-shell";
import { IdentificacaoPaciente } from "./layout/identificacao-paciente";
import { ConsultaRenderer } from "./consulta-renderer";

/* ============================================================
 * 1. INTERFACE DE PROPS (totalmente tipada, zero any)
 * ============================================================ */

interface ConsultaFullProps {
  /** Dados do transtorno DSM em avaliacao */
  data: TranstornoDSM;
  /** Hook de avaliacao tipado via discriminated union */
  hook: DSMHookReturn;
  /** Estado da consulta */
  consultaState: ConsultaState;
  /** Setter para estado da consulta */
  setConsultaState: (state: ConsultaState) => void;
  /** Estado do error boundary */
  errorBoundary: ErrorBoundaryState;
  /** Titulo da pagina (opcional, default = nome do transtorno) */
  titulo?: string;
  /** Callback quando a consulta for concluida */
  onConcluir?: (state: ConsultaState) => void;
  /** Callback para cancelar a consulta */
  onCancelar?: () => void;
  /** Flag de modo leitura (apenas visualizacao) */
  modoLeitura?: boolean;
}

/* ============================================================
 * 2. COMPONENTE
 * ============================================================ */

export function ConsultaFull({
  data,
  hook,
  consultaState,
  setConsultaState,
  errorBoundary,
  titulo,
  onConcluir,
  onCancelar,
  modoLeitura = false,
}: ConsultaFullProps): ReactElement {
  /** Abas disponiveis na consulta full */
  type AbaAtiva = "identificacao" | "avaliacao" | "resultado";

  /** Aba atualmente selecionada */
  const [abaAtiva, setAbaAtiva] = useState<AbaAtiva>("identificacao");

  /** Atualiza identificacao no estado da consulta */
  const handleIdentificacaoChange = useCallback(
    (field: keyof IdentificacaoState, value: string) => {
      setConsultaState({
        ...consultaState,
        identificacao: {
          ...consultaState.identificacao,
          [field]: value,
        },
        ultimaAtualizacao: new Date().toISOString(),
      });
    },
    [consultaState, setConsultaState]
  );

  /** Conclui a consulta */
  const handleConcluir = useCallback(() => {
    const estadoFinal: ConsultaState = {
      ...consultaState,
      status: "concluida",
      ultimaAtualizacao: new Date().toISOString(),
      diagnosticoPreliminar: hook.payload.diagnosticoFirmado,
    };
    setConsultaState(estadoFinal);
    onConcluir?.(estadoFinal);
  }, [consultaState, hook.payload.diagnosticoFirmado, setConsultaState, onConcluir]);

  /** Gera as acoes do shell */
  const shellActions = (
    <div className="flex space-x-2">
      {abaAtiva === "avaliacao" && (
        <button
          type="button"
          onClick={handleConcluir}
          disabled={!hook.payload.diagnosticoFirmado}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            hook.payload.diagnosticoFirmado
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Concluir Consulta
        </button>
      )}
      {onCancelar && (
        <button
          type="button"
          onClick={onCancelar}
          className="px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
        >
          Cancelar
        </button>
      )}
    </div>
  );

  return (
    <ConsultaShell
      title={titulo ?? data.nome_completo}
      subtitle={`${data.meta.codigo.cid10} | ${data.estrutura_diagnostica}`}
      actions={shellActions}
      breadcrumb={[
        { label: "Inicio", href: "/" },
        { label: data.chapter_name, href: `/capitulo/${data.chapter_id}` },
        { label: data.nome_completo },
      ]}
    >
      {/* Navegacao por abas */}
      <nav
        className="flex space-x-1 border-b border-gray-200 mb-6"
        aria-label="Abas da consulta"
      >
        <AbaButton
          label="Identificacao"
          aba="identificacao"
          abaAtiva={abaAtiva}
          onClick={() => setAbaAtiva("identificacao")}
        />
        <AbaButton
          label="Avaliacao"
          aba="avaliacao"
          abaAtiva={abaAtiva}
          onClick={() => setAbaAtiva("avaliacao")}
        />
        <AbaButton
          label="Resultado"
          aba="resultado"
          abaAtiva={abaAtiva}
          onClick={() => setAbaAtiva("resultado")}
        />
      </nav>

      {/* Conteudo por aba */}
      <div className="tab-content">
        {abaAtiva === "identificacao" && (
          <section data-testid="aba-identificacao">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Identificacao do Paciente
            </h2>
            <IdentificacaoPaciente
              values={consultaState.identificacao}
              onChange={handleIdentificacaoChange}
              modoLeitura={modoLeitura}
            />
          </section>
        )}

        {abaAtiva === "avaliacao" && (
          <section data-testid="aba-avaliacao">
            <ConsultaRenderer
              data={data}
              hook={hook}
              setConsultaState={setConsultaState}
              consultaState={consultaState}
              errorBoundary={errorBoundary}
            />
          </section>
        )}

        {abaAtiva === "resultado" && (
          <section data-testid="aba-resultado">
            <ResultadoConsulta hook={hook} data={data} consultaState={consultaState} />
          </section>
        )}
      </div>
    </ConsultaShell>
  );
}

/* ============================================================
 * 3. SUB-COMPONENTES
 * ============================================================ */

/** Props para botao de aba */
interface AbaButtonProps {
  label: string;
  aba: "identificacao" | "avaliacao" | "resultado";
  abaAtiva: "identificacao" | "avaliacao" | "resultado";
  onClick: () => void;
}

/** Botao de navegacao de aba */
function AbaButton({ label, aba, abaAtiva, onClick }: AbaButtonProps): ReactElement {
  const ativa = aba === abaAtiva;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
        ativa
          ? "border-blue-600 text-blue-600"
          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
      }`}
      aria-current={ativa ? "page" : undefined}
    >
      {label}
    </button>
  );
}

/** Props para ResultadoConsulta */
interface ResultadoConsultaProps {
  hook: DSMHookReturn;
  data: TranstornoDSM;
  consultaState: ConsultaState;
}

/** Exibe o resultado da consulta */
function ResultadoConsulta({
  hook,
  data,
  consultaState,
}: ResultadoConsultaProps): ReactElement {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-800">
        Resultado da Avaliacao
      </h2>

      <div
        className={`p-4 rounded-lg border ${
          hook.payload.diagnosticoFirmado
            ? "bg-green-50 border-green-300"
            : "bg-yellow-50 border-yellow-300"
        }`}
      >
        <h3 className="font-medium text-sm mb-2">
          {hook.payload.diagnosticoFirmado
            ? "Diagnostico Firmado"
            : "Diagnostico Incompleto"}
        </h3>

        <div className="space-y-2">
          <p className="text-sm">
            <strong>Transtorno:</strong> {data.nome_completo}
          </p>
          <p className="text-sm">
            <strong>CID-10:</strong> {data.meta.codigo.cid10}
          </p>
          <p className="text-sm">
            <strong>DSM-5:</strong> {data.meta.codigo.dsm5}
          </p>

          {hook.payload.subtipoIdentificado && (
            <p className="text-sm">
              <strong>Subtipo:</strong> {hook.payload.subtipoIdentificado}
            </p>
          )}

          {hook.payload.gravidadeCalculada && (
            <p className="text-sm">
              <strong>Gravidade:</strong> {hook.payload.gravidadeCalculada}
            </p>
          )}

          {hook.payload.justificativa && (
            <div className="mt-3 p-3 bg-white rounded border">
              <p className="text-xs font-medium text-gray-500 uppercase mb-1">
                Justificativa
              </p>
              <p className="text-sm text-gray-700">
                {hook.payload.justificativa}
              </p>
            </div>
          )}
        </div>
      </div>

      {consultaState.notasClinicas && (
        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Notas Clinicas
          </h3>
          <p className="text-sm text-gray-600 whitespace-pre-wrap">
            {consultaState.notasClinicas}
          </p>
        </div>
      )}

      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Markdown</h3>
        <div className="prose prose-sm max-w-none">
          <h4>{hook.markdown.titulo}</h4>
          <p className="text-sm text-gray-600">{hook.markdown.resumo}</p>
          <div className="text-sm text-gray-700 whitespace-pre-wrap">
            {hook.markdown.content}
          </div>
        </div>
      </div>
    </div>
  );
}
