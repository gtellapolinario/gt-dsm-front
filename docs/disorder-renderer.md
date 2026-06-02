# Como usar o `DisorderRenderer`

O `DisorderRenderer` é o componente React compartilhado que transforma um payload clínico estruturado de transtorno em uma tela interativa de avaliação DSM. Ele renderiza cabeçalho, identificação do paciente, clusters de sintomas, critérios condicionais, especificadores, comorbidades, impacto funcional, seções complementares e uma síntese clínica em Markdown pronta para copiar ou imprimir.

## Localização e responsabilidades

| Arquivo | Responsabilidade |
| --- | --- |
| `src/generated/disorders/_shared/DisorderRenderer.tsx` | Componente visual principal e tipo `DisorderRenderConfig`. |
| `src/generated/disorders/_shared/schema.ts` | Contrato Zod do payload clínico (`ClinicalDisorderSchema`). |
| `src/generated/disorders/_shared/hooks/useDisorderAssessment.ts` | Estado local da avaliação, contadores de clusters, marcações e geração/reset do Markdown. |
| `src/generated/disorders/_shared/utils/clinicalMarkdown.ts` | Montagem da síntese clínica em Markdown. |
| `src/generated/disorders/_shared/utils/disorderDataAccess.ts` | Normalização de labels, descrições, limiares e valores vindos do JSON. |
| `scripts/generate_disorders.py` | Gera módulos em `src/generated/disorders/<id>/` que já usam o renderer. |

> **Importante:** os arquivos dentro de `src/generated/disorders/<id>/` são gerados automaticamente. Para transtornos gerados, prefira alterar o JSON de origem ou o script de geração em vez de editar `index.tsx`, `config.ts`, `data.ts` ou `schema.ts` manualmente.

## Uso mais comum: módulo gerado automaticamente

Cada transtorno gerado segue este padrão:

```tsx
import { DisorderRenderer } from "../_shared/DisorderRenderer";
import { config } from "./config";
import { data } from "./data";

export function Delirium() {
  return <DisorderRenderer data={data} config={config} />;
}

export { config, data };
export default Delirium;
```

Na prática, você normalmente não instancia o `DisorderRenderer` na rota. O fluxo é:

1. `scripts/generate_disorders.py` cria o diretório do transtorno em `src/generated/disorders/<id>/`.
2. O catálogo gerado exporta o import dinâmico do módulo.
3. `src/infra/disease-registry.ts` adapta o módulo gerado para o formato consumido pela aplicação.
4. A rota `/app/assess/$assessmentId` resolve o ID/alias, carrega o módulo com `lazy()` e renderiza o componente default.

Exemplo de URL para abrir um módulo registrado:

```text
/app/assess/delirium
```

## Uso manual em um componente React

Use manualmente quando estiver prototipando, criando um módulo não gerado ou escrevendo uma página de teste:

```tsx
import { DisorderRenderer, type DisorderRenderConfig } from "@/generated/disorders/_shared/DisorderRenderer";
import type { ClinicalDisorder } from "@/generated/disorders/_shared/schema";

const data = {
  meta: {
    id: "transtorno_exemplo",
    nome_completo: "Transtorno de Exemplo",
  },
  clusters_sintomas: [
    {
      id: "A",
      nome: "Sintomas principais",
      limiar: 2,
      sintomas: [
        { id: "A1", rotulo: "Sintoma 1", pergunta: "Pergunta-guia do sintoma 1?" },
        { id: "A2", rotulo: "Sintoma 2" },
        { id: "A3", rotulo: "Sintoma 3" },
      ],
    },
  ],
  criterios_condicionais: [
    {
      id: "B",
      rotulo: "Prejuízo clinicamente significativo",
      obrigatorio: true,
      descricao_completa: "Confirmar prejuízo social, ocupacional ou em outras áreas importantes.",
    },
  ],
  especificadores: [{ id: "leve", label: "Apresentação leve" }],
  comorbidades_frequentes: [{ id: "ansiedade", label: "Sintomas ansiosos" }],
  diagnostico_diferencial: [{ id: "ddx_1", label: "Condição diferencial relevante" }],
} satisfies ClinicalDisorder;

const config = {
  id: "transtorno_exemplo",
  nome: "Transtorno de Exemplo",
  sigla: null,
  capitulo_id: "00",
  capitulo_nome: "Capítulo de Exemplo",
  codigo_dsm5: null,
  codigo_cid10: null,
  codigo_cid11: null,
  faixa_etaria_alvo: "transversal",
  estrutura_geral: "polythetic_monocluster",
  render_component: "GenericDisorderRenderer",
  route_path: "/app/assess/transtorno_exemplo",
  tags: ["exemplo"],
} as const satisfies DisorderRenderConfig;

export function ExampleAssessment() {
  return <DisorderRenderer data={data} config={config} />;
}
```

## Props

```tsx
<DisorderRenderer data={data} config={config} />
```

### `data: ClinicalDisorder`

Payload clínico validável por `ClinicalDisorderSchema`. Campos relevantes:

| Campo | Tipo esperado | Como o renderer usa |
| --- | --- | --- |
| `meta` | objeto obrigatório | Nome completo, nome curto, sigla, capítulo e códigos de fallback. |
| `clusters_sintomas` | array opcional | Renderiza cards de sintomas com checkbox, gravidade e observações. |
| `criterios_condicionais` | array opcional | Renderiza checklist de critérios adicionais; itens com `obrigatorio: true` entram na síntese diagnóstica. |
| `especificadores` | array ou objeto opcional | Renderiza seleção de especificadores. |
| `comorbidades_frequentes` | array opcional | Renderiza seleção de comorbidades. |
| `diagnostico_diferencial` | array ou objeto opcional | Renderiza seleção de diagnóstico diferencial. |
| `gravidade` | objeto opcional | Alimenta a seção complementar e dados preservados no Markdown. |
| `dominios_impacto` | array opcional | Alimenta a seção de impacto funcional e dados complementares. |
| `instrumentos_complementares`, `prevalencia`, `curso_desenvolvimento`, `template_prontuario`, `super_enrichment` | objetos/arrays opcionais | Aparecem em acordeões complementares quando houver dados. |

O schema usa `.passthrough()`, então campos extras podem ser preservados e exibidos em seções complementares quando o renderer conseguir normalizá-los.

### `config: DisorderRenderConfig`

Metadados de renderização e roteamento:

| Campo | Obrigatório | Observação |
| --- | --- | --- |
| `id` | sim | ID canônico do transtorno. Deve bater com o diretório/registro gerado. |
| `nome` | sim | Nome de fallback quando `data.meta.nome_completo` ou `data.meta.nome` não existem. |
| `render_component` | sim | Deve ser exatamente `"GenericDisorderRenderer"`. |
| `route_path` | sim | Caminho usado pelo app, normalmente `/app/assess/<id>`. |
| `tags` | sim | Tags de catálogo e filtragem. |
| `sigla`, `capitulo_id`, `capitulo_nome`, `codigo_dsm5`, `codigo_cid10`, `codigo_cid11`, `faixa_etaria_alvo`, `estrutura_geral` | não | Exibidos no cabeçalho, catálogo ou adaptação do registro quando disponíveis. |

## Como a tela se comporta

### Cabeçalho

Mostra capítulo, nome do transtorno, sigla e códigos DSM/CID disponíveis. O texto informa que a tela é um instrumento interativo para marcação de critérios, gravidade, observações e geração de Markdown.

### Identificação e anamnese

Coleta os campos locais:

- nome/ID do paciente;
- idade ou data de nascimento;
- sexo;
- escolaridade;
- ocupação;
- informante/encaminhamento;
- queixa principal.

Esses dados ficam apenas no estado do componente e entram no Markdown gerado.

### Critérios e sintomas

Para cada item de `clusters_sintomas`:

- mostra `cluster.id`, `cluster.nome`, `cluster.descricao`, tipo e limiar;
- renderiza cada sintoma com checkbox;
- permite escolher gravidade (`ausente`, `leve`, `moderado`, `grave`);
- permite registrar observação por sintoma e por cluster;
- calcula se o cluster atingiu o limiar.

A lógica de limiar tenta usar `cluster.limiar`. Se não houver número claro, usa fallback de metade dos sintomas, arredondado para cima, com mínimo de 1.

### Critérios condicionais, especificadores, DDx e comorbidades

O renderer aceita arrays ou objetos e normaliza automaticamente `id`, `label`/`nome`/`rotulo` e `descricao`/`desc`/`texto`. Critérios condicionais obrigatórios (`obrigatorio: true`) são contabilizados na seção de síntese diagnóstica.

### Impacto funcional e seções complementares

O impacto funcional usa a mesma escala de gravidade. Seções clínicas complementares são abertas em acordeões quando há dados no payload:

- `criterios_condicionais`;
- `subtipos`;
- `especificadores`;
- `gravidade`;
- `hierarquia`;
- `dominios_impacto`;
- `diagnostico_diferencial`;
- `comorbidades_frequentes`;
- `instrumentos_complementares`;
- `prevalencia`;
- `curso_desenvolvimento`;
- `template_prontuario`;
- `super_enrichment`.

### Markdown clínico

O hook `useDisorderAssessment` mantém `state.markdown` e oferece:

- `refreshMarkdown()` para recalcular a síntese exibida;
- `buildMarkdown()` para montar uma versão atual sem depender do textarea;
- `reset()` para limpar a avaliação.

A tela possui botões para atualizar síntese, copiar Markdown, limpar avaliação, imprimir, expandir todos e recolher todos.

## Como adicionar um novo transtorno usando o renderer

1. Prepare o JSON clínico com `meta`, `clusters_sintomas` e demais campos clínicos.
2. Rode o gerador apropriado do projeto para criar `src/generated/disorders/<id>/`.
3. Confira se o `config.ts` gerado possui `render_component: "GenericDisorderRenderer"` e `route_path: "/app/assess/<id>"`.
4. Valide se o módulo foi exportado no catálogo gerado.
5. Abra `/app/assess/<id>` no app.
6. Se a tela aparecer como “Módulo não encontrado”, verifique o ID, aliases e registro gerado.

## Boas práticas para o payload

- Use IDs estáveis e únicos para clusters, sintomas e critérios; o estado usa esses IDs como chaves.
- Prefira `rotulo`, `label` ou `nome` para títulos legíveis.
- Prefira `descricao`, `desc`, `texto` ou `descricao_completa` para descrições.
- Defina `limiar` como número quando a regra clínica for simples.
- Use `limiar` como objeto quando houver variações por faixa etária ou contexto; o renderer exibe a descrição e usa o primeiro número disponível para cálculo.
- Marque critérios indispensáveis com `obrigatorio: true`.
- Evite editar módulos gerados manualmente; alterações serão perdidas em nova geração.

## Limitações atuais

- O estado da avaliação é local ao componente; não há persistência automática em backend ou storage.
- O Markdown só reflete os campos depois de recalcular com “Atualizar síntese” ou copiar, que chama a montagem atual.
- Diagnóstico diferencial e comorbidades compartilham o mesmo grupo de seleção no estado atual.
- A conclusão é orientativa e não substitui entrevista clínica, instrumentos validados, avaliação de risco ou julgamento profissional.
