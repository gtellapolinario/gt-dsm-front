/**
 * =============================================================================
 * examples.tsx
 * =============================================================================
 * Exemplos de uso do sistema DSM-5 type-safe.
 *
 * Demonstra:
 * 1. Validacao de entrada de dados com Zod
 * 2. Consumo seguro de tipos em componentes
 * 3. Uso do catalogo e registry
 * 4. Helpers de validacao e consistencia
 */

import React from "react";
import { z } from "zod";
import {
  type TranstornoDSM,
  type ClusterSintomas,
  type CriterioDiagnostico,
} from "./schemas/dsm-schemas";
import {
  RENDERABLE_DISEASES,
  DISEASE_BY_ID,
  isDiseaseId,
  getDiseaseById,
  searchDiseases,
  getSidebarTree,
  type DiseaseCatalogItem,
} from "../lib/disease-catalog";
import {
  isDiseaseRegistered,
  loadDiseaseModule,
  getStructureInfo,
  diseaseImportMap,
} from "./disease-registry";
import {
  parseDiseaseCatalog,
  parseGeneratedDiseaseData,
  safeParseGeneratedDiseaseData,
  assertValidDiseaseComponentMap,
  validateRegistryCatalogAlignment,
  safeLoadDiseaseModule,
  isValidDiseaseStructure,
} from "./validation-helpers";

// ============================================================================
// EXEMPLO 1: Validacao de dados brutos (borda do sistema)
// ============================================================================

/** Dados brutos vindos do gerador Python — formato desconhecido ate validar. */
const rawDataFromPython: unknown = {
  $schema_version: "1.0.0",
  meta: {
    id: "espectro_autista",
    nome_completo: "Transtorno do Espectro Autista",
    sigla: "TEA",
    capitulo_id: "01",
    capitulo: "Transtornos do Neurodesenvolvimento",
    grupo: null,
    versao_complementar_existe: false,
    sinonimos_historicos: ["autismo infantil", "Asperger"],
    faixa_etaria_alvo: "infancia",
    codigo: { cid10: "F84.0", cid11: "6A02", dsm5: "299.00" },
  },
  id: "espectro_autista",
  item_id: "espectro_autista",
  name: "TEA",
  nome_completo: "Transtorno do Espectro Autista",
  chapter_id: "01",
  chapter_name: "Transtornos do Neurodesenvolvimento",
  category: "FULL" as const,
  estrutura_diagnostica: "polythetic_com_ancora",
  estrutura_geral: "polythetic_com_ancora",
  ui_mode: "structured_compact",
  severity_type: "nao_aplica",
  has_formal_severity: false,
  render_structured_interview: true,
  diagnostic_rule:
    "Deficits persistentes na comunicacao social + comportamentos restritos",
  clusters_sintomas: [
    {
      id: "comunicacao_social",
      nome: "Comunicacao Social",
      descricao: "Deficits persistentes em comunicacao social",
      sintomas: [
        { id: "emocoes", texto: "Deficit na reciprocidade emocional", descricao: "" },
        { id: "naoverbal", texto: "Deficit em comportamento nao verbal", descricao: "" },
        { id: "relacionamentos", texto: "Deficit no desenvolvimento de relacionamentos", descricao: "" },
      ],
    },
    {
      id: "comportamentos_restritos",
      nome: "Comportamentos Restritos/Repetitivos",
      descricao: "Padroes restritos e repetitivos de comportamento",
      sintomas: [
        { id: "estereotipias", texto: "Movimentos estereotipados", descricao: "" },
        { id: "rotinas", texto: "Aderencia inflexivel a rotinas", descricao: "" },
        { id: "interesses", texto: "Interesses restritos e fixos", descricao: "" },
        { id: "sensorial", texto: "Hiper ou hiporreatividade sensorial", descricao: "" },
      ],
    },
  ],
  criterios_condicionais: [
    {
      id: "crit_a",
      letra: "A",
      rotulo: "Deficits em Comunicacao Social",
      descricao_completa: "Deficits persistentes na comunicacao social...",
      obrigatorio: true,
    },
    {
      id: "crit_b",
      letra: "B",
      rotulo: "Comportamentos Restritos",
      descricao_completa: "Padroes restritos e repetitivos...",
      obrigatorio: true,
    },
  ],
  gravidade: {
    tipo: "por_dominio",
    presente: true,
    has_formal_severity: true,
    regra_atribuicao: "Baseada no nivel de suporte necessario",
    niveis: [
      { id: "leve", label: "Nivel 1 - Requer suporte", descricao: "" },
      { id: "moderado", label: "Nivel 2 - Requer suporte substancial", descricao: "" },
      { id: "grave", label: "Nivel 3 - Requer suporte muito substancial", descricao: "" },
    ],
    dominios: [],
  },
  dominios_impacto: [
    { id: "social", label: "Social" },
    { id: "ocupacional", label: "Ocupacional" },
    { id: "escolar", label: "Escolar" },
  ],
  comorbidades_frequentes: [
    { condicao: "TDAH", frequencia: "alta", nota: "Coocorre em ~50% dos casos" },
    { condicao: "Ansiedade", frequencia: "alta", nota: "" },
  ],
  diagnostico_diferencial: [
    {
      condicao: "TDAH",
      ponto_distincao: "TEA tem deficit social qualitativo; TDAH nao",
      pertence_a_classe: false,
    },
    {
      condicao: "Transtorno da Linguagem",
      ponto_distincao: "TEA abrange multiplos contextos; TL e especifico",
      pertence_a_classe: true,
    },
  ],
  perguntas_chave: [
    { id: "p1", texto: "A crianca evita contato visual durante interacoes?" },
    { id: "p2", texto: "Ha comportamentos repetitivos ou estereotipados?" },
    { id: "p3", texto: "A crianca apresenta interesses muito restritos?" },
  ],
  key_questions: [
    { id: "p1", texto: "A crianca evita contato visual durante interacoes?" },
    { id: "p2", texto: "Ha comportamentos repetitivos ou estereotipados?" },
    { id: "p3", texto: "A crianca apresenta interesses muito restritos?" },
  ],
  curso_desenvolvimento: {
    idade_inicio_tipica: "Primeiros 2 anos de vida",
    trajetoria: "Variavel; muitos apresentam sintomas antes dos 12 meses",
    prognostico: "Variavel com intervenao precoce",
  },
  prevalencia: {
    populacao_geral: "~1% da populacao mundial",
    proporcao_sexo: "M:F aproximadamente 4:1",
    variacoes_culturais: "Prevalencia similar em todas as culturas estudadas",
    notas: "Subdiagnosticos em mulheres e populacoes nao brancas",
  },
  hierarquia: {
    presente: true,
    notas: "O diagnostico de TEA tem precedencia sobre TDAH social",
    exclui_se_diagnosticado: ["transtorno_social_comunicacao"],
    exclui_diagnostico_de: [],
  },
  subtipos: { presente: false, itens: [] },
  especificadores: [
    {
      id: "com_intelectual",
      nome: "Com deficiencia intelectual associada",
      descricao: "",
    },
    { id: "sem_intelectual", nome: "Sem deficiencia intelectual", descricao: "" },
  ],
  template_prontuario: {
    titulo: "Transtorno do Espectro Autista",
    texto: "Paciente atende criterios DSM-5 para TEA...",
    campos: [],
  },
  metadados_globais: { fonte: "DSM-5-TR", versao: "2026-05" },
  instrumentos_complementares: [
    { nome: "ADOS-2", tipo: "observacao" },
    { nome: "ADI-R", tipo: "entrevista" },
  ],
  raw_document: { source: "dsm_api" },
};

// --- VALIDACAO COM parse (falha imediata se invalido) ---
try {
  const dadosValidados: TranstornoDSM = parseGeneratedDiseaseData(rawDataFromPython);
  console.log("[parse] Dados validados com sucesso:", dadosValidados.meta.nome_completo);
} catch (err) {
  console.error("[parse] Falha na validacao:", err instanceof Error ? err.message : err);
}

// --- VALIDACAO COM safeParse (tratamento de erro esperado) ---
const resultado = safeParseGeneratedDiseaseData(rawDataFromPython);
if (resultado.success) {
  const transtorno: TranstornoDSM = resultado.data;
  console.log("[safeParse] OK:", transtorno.clusters_sintomas.length, "clusters");
} else {
  console.error(
    "[safeParse] Erros:",
    resultado.error.issues.map((i: z.ZodIssue) => i.message).join("; ")
  );
}

// ============================================================================
// EXEMPLO 2: Consumo seguro em componente React (sem any)
// ============================================================================

interface SintomaToggleProps {
  sintoma: ClusterSintomas["sintomas"][number];
  clusterId: string;
  checked: boolean;
  onToggle: (checked: boolean) => void;
}

function SintomaToggle({ sintoma, checked, onToggle }: SintomaToggleProps): React.ReactElement {
  return (
    <label className="flex items-center gap-2 p-2 rounded border">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onToggle(e.target.checked)}
        className="w-4 h-4"
      />
      <span className="text-sm">{sintoma.texto}</span>
    </label>
  );
}

interface ClusterPanelProps {
  cluster: ClusterSintomas;
  selecionados: Record<string, boolean>;
  onToggleSintoma: (clusterId: string, sintomaId: string, checked: boolean) => void;
}

function ClusterPanel({ cluster, selecionados, onToggleSintoma }: ClusterPanelProps): React.ReactElement {
  return (
    <div className="rounded-lg border p-4">
      <h3 className="font-semibold mb-2">{cluster.nome}</h3>
      <p className="text-sm text-slate-500 mb-3">{cluster.descricao}</p>
      <div className="space-y-2">
        {cluster.sintomas.map((sintoma) => (
          <SintomaToggle
            key={sintoma.id}
            sintoma={sintoma}
            clusterId={cluster.id}
            checked={selecionados[sintoma.id] ?? false}
            onToggle={(checked) => onToggleSintoma(cluster.id, sintoma.id, checked)}
          />
        ))}
      </div>
    </div>
  );
}

interface CriterioPanelProps {
  criterio: CriterioDiagnostico;
  ativo: boolean;
  onToggle: () => void;
}

function CriterioPanel({ criterio, ativo, onToggle }: CriterioPanelProps): React.ReactElement {
  return (
    <div
      className={`rounded-lg border p-3 ${ativo ? "border-emerald-300 bg-emerald-50" : "border-slate-200"}`}
    >
      <div className="flex items-start gap-3">
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
          {criterio.letra}
        </span>
        <div className="flex-1">
          <div className="text-sm font-semibold text-stone-700">{criterio.rotulo}</div>
          <p className="text-xs text-slate-500 leading-relaxed mt-1">
            {criterio.descricao_completa}
          </p>
          <button
            type="button"
            onClick={onToggle}
            className={`mt-2 text-xs px-3 py-1 rounded border ${ativo ? "bg-emerald-100 text-emerald-700 border-emerald-300" : "bg-white text-slate-600 border-slate-300"}`}
          >
            {ativo ? "Confirmado" : "Confirmar"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// EXEMPLO 3: Uso do catalogo e lookups
// ============================================================================

/** Busca uma doenca pelo ID com type-safety. */
function exemploBuscaPorId(): void {
  const idAleatorio = "espectro_autista" as string;

  // Type guard garante que o ID e valido antes do acesso
  if (isDiseaseId(idAleatorio)) {
    const doenca: DiseaseCatalogItem = DISEASE_BY_ID[idAleatorio];
    console.log("Encontrada:", doenca.nome, "- Cap:", doenca.capituloNome);
  } else {
    console.log("ID invalido:", idAleatorio);
  }
}

/** Busca textual no catalogo. */
function exemploBuscaTextual(): void {
  const resultados: DiseaseCatalogItem[] = searchDiseases("ansiedade");
  console.log(`Encontradas ${resultados.length} doencas relacionadas a "ansiedade"`);
  resultados.forEach((d) => console.log(`  - ${d.nome}`));
}

/** Navegacao pela arvore de capitulos. */
function exemploArvore(): void {
  const tree = getSidebarTree();
  tree.forEach((chapter) => {
    console.log(`${chapter.meta?.n}. ${chapter.label} (${chapter.meta?.count} doencas)`);
    chapter.children?.forEach((disease) => {
      console.log(`    - ${disease.label}`);
    });
  });
}

// ============================================================================
// EXEMPLO 4: Registry e lazy loading
// ============================================================================

/** Carrega um componente dinamicamente com validacao. */
async function exemploCarregamentoDinamico(): Promise<void> {
  const diseaseId = "espectro_autista";

  if (!isDiseaseId(diseaseId) || !isDiseaseRegistered(diseaseId)) {
    console.error("Doenca nao disponivel:", diseaseId);
    return;
  }

  try {
    const mod = await loadDiseaseModule(diseaseId);
    console.log("Modulo carregado:", mod.meta?.nome ?? diseaseId);
  } catch (err) {
    console.error("Falha ao carregar:", err instanceof Error ? err.message : err);
  }
}

/** Usa safeLoad para tratar erros de forma elegante. */
async function exemploCarregamentoSeguro(): Promise<void> {
  const importer = diseaseImportMap["espectro_autista"];
  const result = await safeLoadDiseaseModule(importer);

  if (result.success) {
    const Component = result.module.default;
    console.log("Componente carregado com sucesso:", Component);
    // render: <Component />
  } else {
    console.error("Erro no carregamento:", result.error);
  }
}

/** Obtem informacoes do hook por estrutura diagnostica. */
function exemploHookPorEstrutura(): void {
  const estrutura = "polythetic_com_ancora";

  // Type guard para validar antes
  if (isValidDiseaseStructure(estrutura)) {
    const info = getStructureInfo(estrutura);
    console.log(`Estrutura "${estrutura}" usa hook "${info.hook}"`);
  }

  // Fallback automatico para estrutura desconhecida
  const infoDesconhecida = getStructureInfo("estrutura_inexistente");
  console.log(`Fallback: ${infoDesconhecida.hook} / ${infoDesconhecida.renderer}`);
}

// ============================================================================
// EXEMPLO 5: Validacao de consistencia entre catalogo e componentes
// ============================================================================

/** Verifica se todos os componentes gerados estao no catalogo. */
function exemploValidacaoConsistencia(): void {
  const catalogIds = RENDERABLE_DISEASES.map((d) => d.id);
  const componentIds = Object.keys(diseaseImportMap);

  // Assert que falha com detalhamento se houver divergencia
  try {
    assertValidDiseaseComponentMap(catalogIds, componentIds);
    console.log("Catalogo e componentes estao perfeitamente alinhados!");
  } catch (err) {
    console.error("Inconsistencia detectada:", err instanceof Error ? err.message : err);
  }
}

/** Valida alinhamento sem lancar excecao. */
function exemploValidacaoSuave(): void {
  const catalogIds = RENDERABLE_DISEASES.map((d) => d.id);
  const registryIds = Object.keys(diseaseImportMap);

  const resultado = validateRegistryCatalogAlignment(registryIds, catalogIds);

  if (resultado.valid) {
    console.log("Registry e catalogo estao sincronizados.");
  } else {
    console.warn("Faltando no registry:", resultado.missing);
    console.warn("Orfaos no registry:", resultado.orphan);
  }
}

// ============================================================================
// EXEMPLO 6: Pipeline de validacao na borda (runtime guard)
// ============================================================================

/**
 * Pipeline completo: recebe JSON do Python, valida, e retorna dados tipados.
 * Falha cedo se os dados estiverem corrompidos.
 */
function pipelineValidacaoEntrada(jsonBruto: unknown): {
  sucesso: true;
  dados: TranstornoDSM;
} | {
  sucesso: false;
  erros: string[];
} {
  // Passo 1: Validar estrutura do catalogo se for um array
  if (Array.isArray(jsonBruto)) {
    try {
      const catalogo = parseDiseaseCatalog(jsonBruto);
      console.log(`Catalogo validado: ${catalogo.length} itens`);
    } catch (err) {
      return {
        sucesso: false,
        erros: [`Catalogo invalido: ${err instanceof Error ? err.message : err}`],
      };
    }
  }

  // Passo 2: Validar documento individual
  const resultado = safeParseGeneratedDiseaseData(jsonBruto);
  if (!resultado.success) {
    return {
      sucesso: false,
      erros: resultado.error.issues.map((issue: z.ZodIssue) =>
        `[${issue.path.join(".")}] ${issue.message}`
      ),
    };
  }

  // Passo 3: Validar consistencia interna
  const dados = resultado.data;
  const errosConsistencia: string[] = [];

  if (dados.meta.id !== dados.id) {
    errosConsistencia.push(`Inconsistencia: meta.id (${dados.meta.id}) !== id (${dados.id})`);
  }
  if (dados.clusters_sintomas.length === 0 && dados.criterios_condicionais.length === 0) {
    errosConsistencia.push("Documento sem clusters nem criterios");
  }
  if (dados.category !== "FULL" && dados.category !== "SHORT") {
    errosConsistencia.push(`Categoria nao renderizavel: ${dados.category}`);
  }

  if (errosConsistencia.length > 0) {
    return { sucesso: false, erros: errosConsistencia };
  }

  return { sucesso: true, dados };
}

// ============================================================================
// EXEMPLO 7: Criar schema customizado extendendo o base
// ============================================================================

/**
 * Schema para um formulario de avaliacao que referencia um transtorno.
 * Exemplo de como extender os schemas base para casos de uso especificos.
 */
const FormularioAvaliacaoSchema = z.object({
  pacienteId: z.string().uuid(),
  dataAvaliacao: z.string().datetime(),
  avaliador: z.string().min(3),
  transtornoId: z.string().refine((val) => isDiseaseId(val), {
    message: "transtornoId deve ser um ID valido do catalogo DSM-5",
  }),
  clustersAvaliados: z.array(
    z.object({
      clusterId: z.string(),
      sintomasMarcados: z.array(z.string()),
      observacao: z.string().default(""),
    })
  ),
  criteriosConfirmados: z.array(z.string()),
  nivelGravidade: z.string().nullable(),
  dominiosImpacto: z.record(z.string(), z.number().int().min(0).max(3)),
  diagnosticoFinal: z.string().default(""),
});

type FormularioAvaliacao = z.infer<typeof FormularioAvaliacaoSchema>;

/** Valida um formulario de avaliacao completo. */
function validarFormulario(dados: unknown): FormularioAvaliacao {
  return FormularioAvaliacaoSchema.parse(dados);
}

// ============================================================================
// EXEMPLO 8: Uso em roteamento (React Router / TanStack Router)
// ============================================================================

/**
 * Gera as rotas dinamicas para todos os transtornos renderizaveis.
 * Cada rota carrega o componente via lazy import do registry.
 */
function gerarRotasDinamicas(): Array<{
  path: string;
  lazy: () => Promise<unknown>;
  meta: { diseaseId: string; nome: string };
}> {
  return RENDERABLE_DISEASES.map((doenca) => ({
    path: doenca.route,
    lazy: diseaseImportMap[doenca.id as keyof typeof diseaseImportMap],
    meta: { diseaseId: doenca.id, nome: doenca.nome },
  }));
}

/**
 * Middleware de validacao para rotas dinamicas.
 * Verifica se o :diseaseId da URL e valido antes de renderizar.
 */
function validarRotaDiseaseId(diseaseId: string): {
  valido: true;
  doenca: DiseaseCatalogItem;
} | {
  valido: false;
  erro: string;
} {
  if (!isDiseaseId(diseaseId)) {
    return { valido: false, erro: `Transtorno nao encontrado: "${diseaseId}"` };
  }
  const doenca = getDiseaseById(diseaseId);
  if (!doenca) {
    return { valido: false, erro: `Dados do transtorno ausentes: "${diseaseId}"` };
  }
  return { valido: true, doenca };
}

// ============================================================================
// EXPORTS dos exemplos para testes
// ============================================================================

export {
  SintomaToggle,
  ClusterPanel,
  CriterioPanel,
  exemploBuscaPorId,
  exemploBuscaTextual,
  exemploArvore,
  exemploCarregamentoDinamico,
  exemploCarregamentoSeguro,
  exemploHookPorEstrutura,
  exemploValidacaoConsistencia,
  exemploValidacaoSuave,
  pipelineValidacaoEntrada,
  validarFormulario,
  gerarRotasDinamicas,
  validarRotaDiseaseId,
};
