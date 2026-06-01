/**
 * ============================================================
 * Dynamic Consulta (dynamic-consulta.tsx) — REFATORADO
 * ============================================================
 * Componente de lazy loading dinamico de consultas DSM.
 * Carrega o componente correto baseado na estrutura diagnostica
 * do transtorno.
 *
 * ANTES: `Component: any`, lazy loading sem tipagem
 * DEPOIS: `React.LazyExoticComponent<ComponentType<Props>>`
 *         com mapping type-safe de estrutura -> componente
 * ============================================================
 */

import {
  lazy,
  Suspense,
  useMemo,
  useState,
  useCallback,
} from "react";
import type {
  ComponentType,
  LazyExoticComponent,
  ReactNode,
} from "react";
import type { TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import type {
  ConsultaState,
  ErrorBoundaryState,
} from "@/infra/types/dsm-form-types";
import type { DSMHookReturn } from "@/infra/types/hook-types";
import { EstruturaDiagnosticaSchema } from "@/infra/schemas/dsm-schemas";
import type { z } from "zod";

/* ============================================================
 * 1. TIPOS AUXILIARES
 * ============================================================ */

/** Estrutura diagnostica valida (derivada do schema Zod) */
type EstruturaDiagnostica = z.infer<typeof EstruturaDiagnosticaSchema>;

/**
 * Props base que todo componente de consulta dinamica deve aceitar.
 * Usado como contrato para os componentes lazy-loaded.
 */
interface DynamicConsultaBaseProps {
  /** Dados do transtorno */
  data: TranstornoDSM;
  /** Hook de avaliacao */
  hook: DSMHookReturn;
  /** Estado da consulta */
  consultaState: ConsultaState;
  /** Setter de estado */
  setConsultaState: (state: ConsultaState) => void;
  /** Error boundary */
  errorBoundary: ErrorBoundaryState;
}

/**
 * Tipo de um componente de consulta carregavel dinamicamente.
 */
type ConsultaComponentType = ComponentType<DynamicConsultaBaseProps>;

/**
 * Tipo lazy-loaded de componente de consulta.
 */
type LazyConsultaComponent = LazyExoticComponent<ConsultaComponentType>;

/**
 * Funcao que retorna uma Promise com o modulo default export.
 */
type ConsultaComponentLoader = () => Promise<{ default: ConsultaComponentType }>;

/* ============================================================
 * 2. MAPA DE LOADER POR ESTRUTURA DIAGNOSTICA
 * ============================================================ */

/**
 * Mapeamento estrutura diagnostica -> funcao de lazy import.
 * Cada entrada aponta para o componente especializado daquela estrutura.
 *
 * O tipo `Record<EstruturaDiagnostica, ConsultaComponentLoader>` garante
 * que TODAS as estruturas tenham um loader registrado.
 */
const componentLoaders: Record<
  EstruturaDiagnostica,
  ConsultaComponentLoader
> = {
  polythetic_clusters_simetricos: () =>
    import("@/infra/components/consulta-full").then((mod) => ({
      default: mod.ConsultaFull,
    })),
  polythetic_clusters_assimetricos: () =>
    import("@/infra/components/consulta-full").then((mod) => ({
      default: mod.ConsultaFull,
    })),
  polythetic_monocluster: () =>
    import("@/infra/components/consulta-full").then((mod) => ({
      default: mod.ConsultaFull,
    })),
  polythetic_com_ancora: () =>
    import("@/infra/components/consulta-full").then((mod) => ({
      default: mod.ConsultaFull,
    })),
  monothetic_puro: () =>
    import("@/infra/components/consulta-full").then((mod) => ({
      default: mod.ConsultaFull,
    })),
  monothetic_tripartite: () =>
    import("@/infra/components/consulta-full").then((mod) => ({
      default: mod.ConsultaFull,
    })),
  mixed_monothetic_polythetic: () =>
    import("@/infra/components/consulta-full").then((mod) => ({
      default: mod.ConsultaFull,
    })),
  temporal_topografico: () =>
    import("@/infra/components/consulta-full").then((mod) => ({
      default: mod.ConsultaFull,
    })),
  etiologico_externo: () =>
    import("@/infra/components/consulta-full").then((mod) => ({
      default: mod.ConsultaFull,
    })),
  qualitativo_descritivo: () =>
    import("@/infra/components/consulta-full").then((mod) => ({
      default: mod.ConsultaFull,
    })),
  episodico: () =>
    import("@/infra/components/consulta-full").then((mod) => ({
      default: mod.ConsultaFull,
    })),
  episodico_com_sintomas: () =>
    import("@/infra/components/consulta-full").then((mod) => ({
      default: mod.ConsultaFull,
    })),
  tripartite_funcional: () =>
    import("@/infra/components/consulta-full").then((mod) => ({
      default: mod.ConsultaFull,
    })),
  conjuncao_temporal_complexa: () =>
    import("@/infra/components/consulta-full").then((mod) => ({
      default: mod.ConsultaFull,
    })),
  categorico_por_subtipo: () =>
    import("@/infra/components/consulta-full").then((mod) => ({
      default: mod.ConsultaFull,
    })),
  psicomotor_polythetic: () =>
    import("@/infra/components/consulta-full").then((mod) => ({
      default: mod.ConsultaFull,
    })),
};

/* ============================================================
 * 3. INTERFACE DE PROPS
 * ============================================================ */

interface DynamicConsultaProps {
  /** Dados do transtorno */
  data: TranstornoDSM;
  /** Hook de avaliacao */
  hook: DSMHookReturn;
  /** Estado da consulta */
  consultaState: ConsultaState;
  /** Setter de estado */
  setConsultaState: (state: ConsultaState) => void;
  /** Error boundary */
  errorBoundary: ErrorBoundaryState;
  /** Estrutura diagnostica (determina qual componente carregar) */
  estrutura?: EstruturaDiagnostica;
  /** Componente de fallback enquanto carrega */
  fallback?: ReactNode;
  /** Componente de erro se o carregamento falhar */
  errorComponent?: ReactNode;
}

/* ============================================================
 * 4. COMPONENTE FALLBACK
 * ============================================================ */

/** Fallback exibido enquanto o componente carrega */
function DefaultFallback(): JSX.Element {
  return (
    <div className="p-8 flex items-center justify-center" data-testid="dynamic-loading">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto" />
        <p className="text-sm text-gray-600">Carregando componente de consulta...</p>
      </div>
    </div>
  );
}

/** Fallback de erro */function DefaultError({ message }: { message: string }): JSX.Element {
  return (
    <div className="p-6 bg-red-50 border border-red-300 rounded-lg" data-testid="dynamic-error">
      <h3 className="text-lg font-semibold text-red-800">
        Erro ao Carregar Consulta
      </h3>
      <p className="text-sm text-red-700 mt-2">{message}</p>
    </div>
  );
}

/* ============================================================
 * 5. COMPONENTE PRINCIPAL
 * ============================================================ */

export function DynamicConsulta({
  data,
  hook,
  consultaState,
  setConsultaState,
  errorBoundary,
  estrutura,
  fallback,
  errorComponent,
}: DynamicConsultaProps): JSX.Element {
  /** Estado de erro de carregamento */
  const [loadError, setLoadError] = useState<Error | null>(null);

  /**
   * Determina a estrutura diagnostica a usar.
   * Usa a prop `estrutura` se fornecida, senao extrai dos dados.
   */
  const estruturaEfetiva: EstruturaDiagnostica = useMemo(() => {
    if (estrutura) return estrutura;

    const parsed = EstruturaDiagnosticaSchema.safeParse(
      data.estrutura_diagnostica
    );
    if (parsed.success) return parsed.data;

    // Fallback para qualitativo_descritivo se a estrutura for invalida
    return "qualitativo_descritivo";
  }, [estrutura, data.estrutura_diagnostica]);

  /**
   * Componente lazy-loaded baseado na estrutura.
   * useMemo evita recriar o lazy em cada render.
   */
  const LazyComponent: LazyConsultaComponent = useMemo(() => {
    setLoadError(null);

    const loader = componentLoaders[estruturaEfetiva];

    return lazy(() =>
      loader().catch((err: unknown) => {
        const error =
          err instanceof Error
            ? err
            : new Error(`Erro desconhecido ao carregar componente para ${estruturaEfetiva}`);
        setLoadError(error);
        // Retorna um componente placeholder que exibe o erro
        return {
          default: function ErrorPlaceholder() {
            return (
              <DefaultError
                message={`Falha ao carregar componente: ${error.message}`}
              />
            );
          },
        };
      })
    );
  }, [estruturaEfetiva]);

  /** Handler de erro do lazy */
  const handleResetError = useCallback(() => {
    setLoadError(null);
  }, []);

  // Se houve erro e temos um componente de erro customizado
  if (loadError && errorComponent) {
    return (
      <div onClick={handleResetError} role="button" tabIndex={0}>
        {errorComponent}
      </div>
    );
  }

  // Se houve erro sem componente customizado
  if (loadError) {
    return (
      <DefaultError
        message={loadError.message}
      />
    );
  }

  return (
    <Suspense fallback={fallback ?? <DefaultFallback />}>
      <LazyComponent
        data={data}
        hook={hook}
        consultaState={consultaState}
        setConsultaState={setConsultaState}
        errorBoundary={errorBoundary}
      />
    </Suspense>
  );
}

/* ============================================================
 * 6. EXPORTS ADICIONAIS
 * ============================================================ */

/**
 * Verifica se uma estrutura diagnostica tem um componente registrado.
 */
export function isEstruturaSuportada(
  estrutura: string
): estrutura is EstruturaDiagnostica {
  return EstruturaDiagnosticaSchema.safeParse(estrutura).success &&
    estrutura in componentLoaders;
}

/**
 * Retorna a lista de estruturas suportadas.
 */
export function listEstruturasSuportadas(): readonly EstruturaDiagnostica[] {
  return Object.freeze(
    Object.keys(componentLoaders) as EstruturaDiagnostica[]
  );
}
