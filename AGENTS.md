# AGENTS.md — GT-DSM Front

Avaliação clínica estruturada DSM-5: 58 transtornos renderizados a partir de
payloads clínicos enriquecidos. Vite + React 19 + TanStack Router/Query +
Tailwind v4 + shadcn/radix + zustand + zod.

## Comandos

- `npm run dev` — dev server (use **porta 3003**: `npx vite --port 3003`;
  o `vite.config.ts` diz 3000, mas a 3000 é de outro projeto na máquina).
- `npm run typecheck` — `tsc -b --noEmit` (rode após qualquer mudança).
- `npm run build` — `vite build`.
- Não há testes nem linter configurados.

## Arquitetura

- `src/generated/disorders/<id>/` — 58 módulos de transtorno. `data.ts` =
  payload clínico, `schema.ts` = zod do transtorno, `index.tsx` = wrapper de
  12 linhas (`<DisorderRenderer data={data} />`). **Divergência permanente:**
  estes arquivos vieram de um pipeline gerador externo
  (`generate_disorders.py`) que **não é mais usado** — o selo "Auto-generated"
  foi removido de todos em 2026-07-25. Ajustes daqui pra frente são finos e
  **manuais**; não regerar nem esperar regeneração. Anomalias de dado são
  corrigidas diretamente nos `data.ts`.
- `src/generated/disorders/_shared/` — tudo que é comum:
  - `DisorderRenderer.tsx` — renderer único e genérico dos 58 transtornos.
    **Decisão de arquitetura: um renderer só, dirigido pelo payload. NÃO criar
    renderer por estrutura nem por transtorno** (o passado tinha 60 cópias de
    313 linhas; ver `ANALISE_ESTRUTURAS_DIAGNOSTICAS.md`).
  - `hooks/useDisorderAssessment.ts` — estado da avaliação + markdown.
  - `utils/disorderDataAccess.ts` — acesso defensivo ao payload (`isRecord`,
    `normalizeChoiceItems`, `thresholdNumber`, ...).
  - `Markdown.tsx` — wrapper de `react-markdown` + `remark-gfm` +
    `remark-breaks` (não escrever parser markdown manual).
- `src/infra/` — `disease-registry.ts` (importadores por rota, valida
  `estrutura_geral`), `schemas/dsm-schemas.ts` (enum das 16 estruturas),
  `disease-aliases.ts`. `src/lib/disease-catalog.ts` é **legado** (entradas
  com `estrutura: "None"`).
- Rotas: `src/routes/app.assess.$assessmentId.tsx` renderiza um transtorno via
  registry; demais rotas são dashboard/layout.

## Modelo de dados (payloads enriquecidos)

Todos os 58 têm: `meta`, `estrutura_geral`, `clusters_sintomas`,
`criterios_condicionais`, `subtipos`, `especificadores`, `gravidade`,
`hierarquia`, `dominios_impacto`, `diagnostico_diferencial`,
`comorbidades_frequentes`, `instrumentos_complementares`, `prevalencia`,
`curso_desenvolvimento`, `metadados_globais` + bloco operacional (`category`,
`ui_mode`) + proveniência (`rendering`, `inventario_clinico`).

Contratos estáveis (inventário exato em `ANALISE_ESTRUTURAS_DIAGNOSTICAS.md`):

- `estrutura_geral`: 9 valores em uso (de 16 no enum).
- Cluster: `limiar` é sempre `{adulto, pediatria}` ou `null`;
  `ancora_obrigatoria` é `{descricao, ids_obrigatorios, n_minimo}` ou `null`.
- Critério condicional: shape uniforme `{id, letra, rotulo, tipo, ui_widget,
  obrigatorio, icone, ddx_sugeridos, descricao_completa, metadados}`.
- **Sanitização 2026-07:** códigos só em `meta.codigo` (as chaves raiz
  `codigo_*`/`faixa_etaria_alvo` foram apagadas); `rendering.severity` e
  `rendering.subtypes_presentations` aposentados; subtipos canônicos em
  `subtipos.subtipos[]`.
- **Gravidade — fonte da verdade: `gravidade_dsm5tr_58_transtornos.md`.**
  O campo `gravidade.classificacao_dsm` discrimina 5 classes
  (`formal_categorica`, `formal_dimensional`, `formal_contextual`,
  `formal_condicional`, `sem_niveis_formais`) e o `SeverityBlock` do guia
  renderiza por classe. `tem_gravidade_formal` é derivado (nunca editável);
  `sem_niveis_formais` renderiza nota informativa, nunca opção selecionável.
- **Seções suplementares NÃO repetem o Guia Clínico**: `prevalencia`,
  `curso_desenvolvimento`, `gravidade`, `instrumentos_complementares` e
  `subtipos` são exclusivos do `ClinicalGuideSection`; `clinicalSections`
  cobre apenas o que o guia não trata.
- **Hoje a avaliação ignora `estrutura_geral`, `tipo`, `ancora_obrigatoria` e
  `obrigatorio`** — só `limiar` é usado (contadores). Os `ui_widget`
  (`campo_duracao_meses`, `select_multiplos_ddx`,
  `toggle_com_justificativa_obrigatoria`, ...) não são implementados; tudo
  vira toggle. Direção acordada: avaliadores por estrutura como funções puras
  dirigidas pelo dado (ver matriz no MD de análise).

## Convenções deste projeto

- **Ícones: somente lucide-react.** Payloads usam o campo `icone` com o nome
  do componente Lucide (`"Ban"`, `"Scale"`...). `src/lib/mapear-icones.ts`
  mapeia nome → componente; ícone novo no payload = adicionar 1 linha lá.
  Font Awesome está proibido (foi removido; não reintroduzir).
- **Classes de cor:** além dos tokens shadcn, existem aliases em
  `src/index.css` (`@theme inline`): `text-text`, `text-text-2`, `text-text-3`,
  `bg-bg`, `bg-surface`, `bg-surface-2`. Não inventar variantes novas sem
  declarar o token.
- **Null-safe na UI:** campo ausente/nulo no payload = não renderizar o bloco
  (sem placeholders). Ex.: `ClinicalGuideSection` some inteira sem dados.
- **Markdown:** sempre via `Markdown`/`MarkdownInline` do `_shared`.
- Estilo dos payloads segue o arquivo existente (atenção: `anorexia_nervosa`
  usa chaves sem aspas — quebra greps ingênuos).

## Armadilhas conhecidas

- `severity.levels` está vazio em todos os payloads (a escala de gravidade do
  Guia Clínico só aparece quando a fonte preencher).
- Anomalias de dado registradas no MD de análise: `tnc_alzheimer`/
  `tnc_vascular` sem clusters; TDDH com tipo/limiar inconsistentes;
  esquizoafetivo com `pediatria: null`.
- `src/components/ui/dsm-components.tsx`, `nivel-impacto.tsx`,
  `accordion-section.tsx`, `toggle-chip.tsx` — código morto (sem consumidores),
  mantido compilando; candidato a remoção.
- Critério A: nos 51 transtornos em que é cluster, o renderer sintetiza um
  card "A" em Critérios Condicionais (`conditionalCriteriaItems` no
  `DisorderRenderer.tsx`), marcado com `derivado_do_cluster` — duplicação
  deliberada, a deduplicar quando a avaliação por estrutura entrar.
- Na máquina há outros dev servers (3000 = orquestrador, 5174 = Escalas);
  mate/ignore apenas os do GT-DSM.

## Verificação esperada antes de entregar mudanças

1. `npm run typecheck` limpo.
2. `npm run build` verde.
3. Para mudanças visuais: screenshot headless
   (`google-chrome --headless --screenshot ... http://localhost:3003/app/assess/<id>`)
   e conferir o resultado.
