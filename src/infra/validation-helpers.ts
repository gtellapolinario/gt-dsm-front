/**
 * validation-helpers.ts
 * Utilitarios de validacao runtime para o sistema DSM-5.
 *
 * Regras:
 * - ZERO `any` - use `unknown` para dados externos
 * - Toda validacao falha cedo com mensagens claras
 * - Schemas centralizados importados de dsm-schemas.ts (unica fonte de verdade)
 * - Type guards e asserts com tipagem estreita
 * - Todos os helpers documentados via JSDoc
 */

import { z } from "zod";
import type { ZodSafeParseResult } from "zod";
import {
  CatalogItemSchema,
  TranstornoDsmLegacySchema,
  RegistryModuleSchema,
  EstruturaDiagnosticaSchema,
  type CatalogItem as DiseaseCatalogItem,
  type TranstornoDsmLegacy as TranstornoDSM,
  type RegistryModule as DiseaseModule,
  type EstruturaDiagnostica,
} from "@/infra/schemas/dsm-schemas";

// ---------------------------------------------------------------------------
// Schemas Auxiliares
// ---------------------------------------------------------------------------

/** Schema para validacao de arrays de catalogo */
const DiseaseCatalogArraySchema = z.array(CatalogItemSchema);

/** Schema para validacao de mapas de componentes */
const ComponentMapSchema = z.record(
  z.string(),
  z.custom<React.ComponentType>(),
);

// ---------------------------------------------------------------------------
// Helpers de Parse e Validacao
// ---------------------------------------------------------------------------

/**
 * Valida um array de catalogo de doencas.
 * Falha cedo com mensagem detalhada caso algum item seja invalido.
 *
 * @param input - Dado desconhecido a ser validado como array de catalogo
 * @returns Array validado de DiseaseCatalogItem
 * @throws Error se o input nao for um array ou contiver itens invalidos
 *
 * @example
 * ```typescript
 * const catalog = parseDiseaseCatalog(jsonFromApi);
 * // catalog e readonly DiseaseCatalogItem[]
 * ```
 */
export function parseDiseaseCatalog(input: unknown): DiseaseCatalogItem[] {
  if (!Array.isArray(input)) {
    throw new Error(
      `parseDiseaseCatalog espera um array, recebeu: ${input === null ? "null" : typeof input}`,
    );
  }

  if (input.length === 0) {
    throw new Error("parseDiseaseCatalog recebeu array vazio");
  }

  const result = DiseaseCatalogArraySchema.safeParse(input);
  if (!result.success) {
    const failureDetails = result.error.issues
      .slice(0, 5)
      .map((issue) => `[${issue.path.join(".") || "root"}] ${issue.message}`)
      .join("; ");
    const totalIssues = result.error.issues.length;
    throw new Error(
      `Validacao de catalogo falhou (${totalIssues} erro(s)): ${failureDetails}${totalIssues > 5 ? "..." : ""}`,
    );
  }

  return Object.freeze(result.data) as DiseaseCatalogItem[];
}

/**
 * Valida dados brutos de transtorno DSM no formato legacy (gerado pelo Python).
 * Falha cedo com mensagem detalhada em caso de erro.
 *
 * @param raw - Dado desconhecido a ser validado como TranstornoDSM
 * @returns Objeto TranstornoDSM validado
 * @throws Error se a validacao falhar
 *
 * @example
 * ```typescript
 * const dados = parseGeneratedDiseaseData(jsonLegacy);
 * // dados e TranstornoDSM com todas as propriedades tipadas
 * ```
 */
export function parseGeneratedDiseaseData(raw: unknown): TranstornoDSM {
  const result = TranstornoDsmLegacySchema.safeParse(raw);
  if (!result.success) {
    const messages = result.error.issues
      .slice(0, 10)
      .map((issue) => `[${issue.path.join(".") || "root"}] ${issue.message}`)
      .join("\n  - ");
    const totalIssues = result.error.issues.length;
    throw new Error(
      `Validacao de TranstornoDSM falhou com ${totalIssues} erro(s):\n  - ${messages}${totalIssues > 10 ? "\n  ..." : ""}`,
    );
  }
  return result.data;
}

/**
 * Valida dados de transtorno DSM com safeParse.
 * Retorna um resultado tipado que indica sucesso ou falha.
 *
 * @param raw - Dado desconhecido a ser validado como TranstornoDSM
 * @returns SafeParseReturnType com os dados validados ou detalhes do erro
 *
 * @example
 * ```typescript
 * const result = safeParseGeneratedDiseaseData(jsonLegacy);
 * if (result.success) {
 *   console.log(result.data.meta.nome_completo);
 * } else {
 *   console.error(result.error.format());
 * }
 * ```
 */
export function safeParseGeneratedDiseaseData(
  raw: unknown,
): ZodSafeParseResult<TranstornoDSM> {
  return TranstornoDsmLegacySchema.safeParse(raw);
}

/**
 * Type guard para verificar se um valor desconhecido e uma string nao-vazia
 * que corresponde a um DiseaseId valido no catalogo.
 *
 * Nota: Esta funcao verifica APENAS o tipo da entrada.
 * Para verificar se o ID existe no catalogo, use em conjunto com isDiseaseId
 * do disease-catalog.ts.
 *
 * @param id - Valor desconhecido a ser verificado
 * @returns true se o valor e uma string nao-vazia (formato valido de ID)
 *
 * @example
 * ```typescript
 * if (isDiseaseId(someValue)) {
 *   // someValue e string
 *   const module = await loadDiseaseModule(someValue);
 * }
 * ```
 */
export function isDiseaseId(id: unknown): id is string {
  return typeof id === "string" && id.trim().length > 0;
}

/**
 * Asserts que um mapa de componentes cobre todos os IDs do catalogo.
 * Lanca erro detalhado se houver divergencia (faltando ou sobrando).
 *
 * @param catalogIds - IDs esperados do catalogo (fonte de verdade)
 * @param componentIds - IDs presentes no mapa de componentes
 * @throws Error detalhada se houver divergencias
 *
 * @example
 * ```typescript
 * assertValidDiseaseComponentMap(
 *   diseaseCatalog.map(d => d.id),
 *   Object.keys(componentMap)
 * );
 * ```
 */
export function assertValidDiseaseComponentMap(
  catalogIds: readonly string[],
  componentIds: readonly string[],
): void {
  const catalogSet = new Set(catalogIds);
  const componentSet = new Set(componentIds);

  const missingFromComponents: string[] = [];
  for (const id of catalogSet) {
    if (!componentSet.has(id)) {
      missingFromComponents.push(id);
    }
  }

  const orphanComponents: string[] = [];
  for (const id of componentSet) {
    if (!catalogSet.has(id)) {
      orphanComponents.push(id);
    }
  }

  if (missingFromComponents.length > 0 || orphanComponents.length > 0) {
    const parts: string[] = [
      `Divergencia entre catalogo (${catalogIds.length} itens) e componentes (${componentIds.length} itens):`,
    ];

    if (missingFromComponents.length > 0) {
      parts.push(
        `\n  FALTANDO no mapa de componentes (${missingFromComponents.length}):\n    - ${missingFromComponents.join("\n    - ")}`,
      );
    }

    if (orphanComponents.length > 0) {
      parts.push(
        `\n  ORFAOS no mapa de componentes (${orphanComponents.length}):\n    - ${orphanComponents.join("\n    - ")}`,
      );
    }

    throw new Error(parts.join(""));
  }
}

/**
 * Valida que o registry e o catalogo estao alinhados.
 * Retorna um resultado discriminado indicando validade ou divergencias.
 *
 * @param registryIds - IDs presentes no registry (lazy imports)
 * @param catalogIds - IDs presentes no catalogo (fonte de verdade)
 * @returns Objeto indicando validade, IDs faltantes e IDs orfaos
 *
 * @example
 * ```typescript
 * const result = validateRegistryCatalogAlignment(registryIds, catalogIds);
 * if (!result.valid) {
 *   console.error("Faltando:", result.missing);
 *   console.error("Orfaos:", result.orphan);
 * }
 * ```
 */
export function validateRegistryCatalogAlignment(
  registryIds: readonly string[],
  catalogIds: readonly string[],
): { valid: boolean; missing: string[]; orphan: string[] } {
  const registrySet = new Set(registryIds);
  const catalogSet = new Set(catalogIds);

  const missing: string[] = [];
  for (const id of catalogSet) {
    if (!registrySet.has(id)) {
      missing.push(id);
    }
  }

  const orphan: string[] = [];
  for (const id of registrySet) {
    if (!catalogSet.has(id)) {
      orphan.push(id);
    }
  }

  return {
    valid: missing.length === 0 && orphan.length === 0,
    missing,
    orphan,
  };
}

/**
 * Wrapper seguro para import dinamico de modulo de doenca.
 * Captura excecoes e retorna resultado discriminado.
 *
 * @param importer - Funcao que retorna Promise do modulo
 * @returns Resultado tipado indicando sucesso ou falha
 *
 * @example
 * ```typescript
 * const result = await safeLoadDiseaseModule(() => import("@/generated/disorders/<id>"));
 * if (result.success) {
 *   const Component = result.module.default;
 *   return <Component />;
 * } else {
 *   return <Erro message={result.error} />;
 * }
 * ```
 */
export async function safeLoadDiseaseModule(
  importer: () => Promise<unknown>,
): Promise<
  { success: true; module: DiseaseModule } | { success: false; error: string }
> {
  try {
    const raw = await importer();
    const moduleParsed = parseDiseaseModuleSafe(raw);
    if (moduleParsed === null) {
      return {
        success: false,
        error: "Modulo carregado mas falhou na validacao do schema",
      };
    }
    return { success: true, module: moduleParsed };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      success: false,
      error: `Falha no carregamento do modulo: ${message}`,
    };
  }
}

// ---------------------------------------------------------------------------
// Type Guards para Estruturas Diagnosticas
// ---------------------------------------------------------------------------

/**
 * Type guard que verifica se uma string e uma EstruturaDiagnostica valida.
 *
 * @param value - Valor desconhecido a verificar
 * @returns true se value e uma estrutura diagnostica conhecida
 *
 * @example
 * ```typescript
 * if (isValidDiseaseStructure(someString)) {
 *   // someString e EstruturaDiagnostica
 *   const info = getStructureInfo(someString);
 * }
 * ```
 */
export function isValidDiseaseStructure(
  value: unknown,
): value is EstruturaDiagnostica {
  return (
    typeof value === "string" &&
    EstruturaDiagnosticaSchema.safeParse(value).success
  );
}

// ---------------------------------------------------------------------------
// Helpers Internos
// ---------------------------------------------------------------------------

/**
 * Tenta fazer parse seguro de um modulo de doenca.
 * Retorna null se falhar (uso interno).
 */
function parseDiseaseModuleSafe(raw: unknown): DiseaseModule | null {
  const result = RegistryModuleSchema.safeParse(raw);
  return result.success ? result.data : null;
}
