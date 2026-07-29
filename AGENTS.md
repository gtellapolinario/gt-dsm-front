# AGENTS.md — GT-DSM Front

Avaliação clínica estruturada DSM-5: 58 transtornos renderizados a partir de
payloads clínicos enriquecidos. Vite + React 19 + TanStack Router/Query +
Tailwind v4 + shadcn/radix + zustand + zod.

## Comandos

- `npm run dev` — dev server (use **porta 3003**: `npx vite --port 3003`;
  o `vite.config.ts` diz 3000, mas a 3000 é de outro projeto na máquina).
- `npm run typecheck` — `tsc -b --noEmit` (rode após qualquer mudança).
- `npm run build` — `vite build`.
- `docker compose up -d --build` — esboço de produção (nginx estático +
  Traefik na rede `web`, host `gt-dsm.gtmedics.com`; ver `Dockerfile` e
  `docker/nginx.conf` com SPA fallback).
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
  - `DisorderRenderer.tsx` — **barril de 4 linhas** (re-exporta
    `DisorderRendererView` de `./renderer/`); caminho e named export
    preservados para os 58 wrappers. Desde 2026-07-26 a implementação é a
    refatoração modular em `renderer/` (adapters/ports/registry/sections/
    layout/ui), auditada como DOM-idêntica ao monobloco — ver
    `AUDITORIA-monobloco-x-refactor.md`. O monobloco (1.782 linhas) sobrevive
    apenas como backup em `script/DisorderRenderer.backup` — não editar nem
    reimportar de lá.
    **Decisão de arquitetura: um renderer só, dirigido pelo payload. NÃO criar
    renderer por estrutura nem por transtorno** (o passado tinha 60 cópias de
    313 linhas; ver `ANALISE_ESTRUTURAS_DIAGNOSTICAS.md`).
  - `hooks/useDisorderAssessment.ts` — estado da avaliação + markdown.
    Namespaces de toggles: `conditionalCriteria`, `specifiers`,
    `comorbidities` e `ddx` (D2 resolvido em 2026-07-26 — DDx não
    compartilha mais o namespace `comorbidities`).
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
- Navegação (sidebar/dashboard) deriva do registry:
  `src/infra/generated-disorder-catalog.ts` (tree, busca, lookups por capítulo).
  `src/lib/disease-catalog.ts` = **apenas metadados dos 21 capítulos**
  (id/key/nome/hue); o catálogo legado de doenças (`estrutura: "None"`) foi
  aposentado — a fonte de verdade dos transtornos é o registry de payloads.
  `src/stores/` não existe mais (removido na refatoração do `__root`).

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
- **Sanitização 2026-07 (2 ondas):** raiz limpa — códigos só em
  `meta.codificacao` (até 2026-07-26 era `meta.codigo`, aposentado);
  identificação só em `meta`; sem `metadados` de pipeline aninhados (573
  blocos removidos, conteúdo vivo resgatado em `RESCUE_METADADOS.md`);
  `rendering.severity`/`subtypes_presentations` e `hierarquia_exclusao`
  (fundida na `hierarquia` canônica) aposentados; proveniência consolidada em
  `_pipeline` (rendering + enrichment_status) e `metadados_globais`.
  Hierarquia diagnóstica exibida no Guia Clínico quando tem conteúdo.
- **v2.2.0 (campos complementares, fonte:
  `campos_complementares_dsm5tr_revisados_58.md` + `.json`):**
  `$schema_version: "2.2.0"` nos 58. Novos/blocos revistos:
  `codificacao.cid11_mms` (CID-11 MMS 2026-01: codigo_base, equivalencia,
  regra, versao — exibido no card nosológico desde 2026-07-26); `subtipos` com `formal_dsm` + `nota_aplicador` (18 formais,
  40 com nota de ausência — a nota ainda não é exibida; chips leem
  `subtipos.subtipos[].label`); `instrumentos_complementares` (99, com
  sigla/uso/faixa/nota APA — nunca diagnóstico isolado);
  `diagnostico_diferencial` categorizado `{id, condicao, natureza,
  ponto_distincao, pertence_a_mesma_classe_dsm}` (209; `labelKeys` inclui
  `condicao` e `descriptionKeys` inclui `ponto_distincao`, então o renderer já
  resolve rótulo/descrição); `dominios_impacto` (154, com `icone` Lucide —
  todo nome novo DEVE existir em `mapear-icones.ts`).
- **v2.3.0 (meta/prevalência/curso, fonte:
  `docs/meta_prevalencia_curso_dsm5tr_revisados_58.json`):**
  **`meta.codigo` foi APOSENTADO em 2026-07-26** (era incompleto — `dsm5`
  sempre vazio — e duplicado; removido dos 58 payloads, do `MetaSchema` e do
  `CodigoSchema`). A fonte canônica de códigos é **`meta.codificacao`**, lida
  via `nosologyCodes()` de `utils/disorderDataAccess.ts` (usado pelo card
  nosológico, pelo header e pelo markdown — nunca ler outro caminho):
  - `dsm5_tr.codigo` — código editorial ICD-9-CM legacy do DSM-5-TR (ex.:
    agorafobia = 300.22; fonte: `codificacao_dsm5tr_legacy_58.md`, injetado
    em 2026-07-26 como primeira chave do bloco; os 58 têm);
  - `cid10_cm.{referencia_base, equivalencia, regra, sistema}` — CID-10-CM;
  - `cid11_mms.{codigo_base, equivalencia, regra, versao}` — CID-11 MMS.
  O card nosológico exibe as 3 células + badge de equivalência não-direta +
  notas (legacy do DSM e `regra` das equivalências contextuais).
  `meta.sigla` é sempre string ou null (a forma objeto
  `{valor, ambigua, nota}` foi normalizada; siglas ambíguas como TAS têm a
  nota preservada em `meta.terminologia_relacionada` com
  `status: "sigla_ambigua"`); `meta.capitulo_id` é slug
  (ex.: "transtornos_depressivos") — o mapeamento para capítulos DSM usa o
  `generatedDisorderMetadata` do registry, não este campo.
  **`prevalencia`/`curso_desenvolvimento` — chaves canônicas v2.3.0** (o
  renderer lê APENAS estas; as antigas `populacao_geral`, `proporcao_sexo`,
  `variacoes_culturais`, `notas`, `idade_inicio_tipica` não existem mais em
  nenhum payload — reintroduzi-las quebra o card silenciosamente):
  `prevalencia.{tipo_estimativa, estimativa, distribuicao_por_sexo,
  variacoes_contextuais, nota_aplicador}` e
  `curso_desenvolvimento.{inicio_tipico, trajetoria, prognostico,
  nota_aplicador}`. `tipo_estimativa` (ex.: "prevalencia_12_meses") e o
  `nota_aplicador` do curso ainda não são exibidos.
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
- **Tema único: claro.** Sem variantes dark — o bloco `.dark` do `index.css`,
  os tokens `dark:*` dos componentes e o `next-themes` foram removidos em
  2026-07-26; `index.css` declara `color-scheme: light` no `:root`. Não
  reintroduzir `dark:` nem seletor `.dark`.
- **Classes de cor:** além dos tokens shadcn, existem aliases em
  `src/index.css` (`@theme inline`): `text-text`, `text-text-2`, `text-text-3`,
  `bg-bg`, `bg-surface`, `bg-surface-2`. Não inventar variantes novas sem
  declarar o token. O mesmo vale para `text-md` (font-size): a escala do
  Tailwind pula de `sm` para `base` — o token `--text-md` (1rem) foi
  declarado no `@theme inline` para a classe existir.
- **Null-safe na UI:** campo ausente/nulo no payload = não renderizar o bloco
  (sem placeholders). Ex.: `ClinicalGuideSection` some inteira sem dados.
- **Markdown:** sempre via `Markdown`/`MarkdownInline` do `_shared`. O
  markdown do prontuário (`generateClinicalMarkdown`) segue o padrão de
  `script/tdah.html`: **só entra o que o aplicador fez** — campos vazios,
  itens não marcados e conteúdo do payload (limiares, descrições, escalas)
  ficam de fora; seções vazias são omitidas inteiras.
- **Acordeões abrem todos fechados** (`openByDefault: false` em todos os
  descriptors desde 2026-07-26). Ações da seção de markdown (atualizar
  síntese, copiar) vivem no **header do próprio acordeão** como botões
  redondos ícone-only + tooltip — padrão `Button asChild` + `<span
  role="button">` com `stopPropagation` (o trigger do Radix já é um
  `<button>`; `<button>` aninhado quebra a hydration). A `DisorderToolbar`
  solta foi aposentada — não recriar.
- **Design language das seções/cards do guia (2026-07-26):** container
  `rounded-xl shadow-md border bg-surface-2/60 p-4`; header `text-*-800
  text-shadow-xs`; prosa `text-shadow-xs font-serif text-sm|md font-medium
  leading-relaxed text-stone-700 text-justify text-wrap mx-3 mb-2`;
  rótulos inline `font-bold uppercase tracking-wider text-stone-800`; notas
  `border-t pt-2 italic font-serif text-sm font-medium text-stone-500`;
  letras de critério em `text-orange-600 font-bold` com hífen (`A -`).
- Estilo dos payloads segue o arquivo existente (atenção: `anorexia_nervosa`
  usa chaves sem aspas — quebra greps ingênuos).

## Armadilhas conhecidas

- `severity.levels` está vazio em todos os payloads (a escala de gravidade do
  Guia Clínico só aparece quando a fonte preencher).
- `border-slate-800/60` (Sidebar.tsx:72) não tem regra gerada pelo Tailwind
  (verificado em dumps-DOM de 2026-07-26) — lacuna pré-existente; a borda da
  sidebar cai no default. Não é regressão do swap do renderer.
- Anomalias de dado registradas no MD de análise: `tnc_alzheimer`/
  `tnc_vascular` sem clusters; TDDH com tipo/limiar inconsistentes;
  esquizoafetivo com `pediatria: null`.
- **TDAH — estrutura corrigida em 2026-07-26:** o payload tinha 1 cluster
  único "A" com 18 sintomas (A1–A18); DSM exige 2 domínios pontuados à
  parte. Hoje são 2 clusters simétricos (`A1 — Desatenção`, `A2 —
  Hiperatividade/Impulsividade`, 9 sintomas cada, limiar `{adulto: 5,
  pediatria: 6}`) e ids em notação DSM (`A1a–A1i`, `A2a–A2i`). Obs.: o badge
  do sintoma usa `uppercase` no CSS, então exibe "A1A" (a notação DSM é
  minúscula).
- `src/components/ui/` contém apenas componentes vivos (21 arquivos). Os
  componentes mortos (`dsm-components`, `nivel-impacto`, `accordion-section`,
  `toggle-chip`, `count-badge`, `dialog`, `drawer`, `dropdown-menu`, `alert*`,
  `calendar`, `empty`, `item`, `input-group`, `button-group`, `SquircleButton`,
  `LazyBackground`, `ProgressBar`, `symptom-item`) foram removidos na faxina de
  2026-07 — não recriar sem consumidor real.
- Critério A: nos 51 transtornos em que é cluster, o renderer sintetiza um
  card "A" em Critérios Condicionais (`conditionalCriteriaItems` no
  `DisorderRenderer.tsx`), marcado com `derivado_do_cluster` — duplicação
  deliberada, a deduplicar quando a avaliação por estrutura entrar.
- Na máquina há outros dev servers (3000 = orquestrador, 5174 = Escalas);
  mate/ignore apenas os do GT-DSM.

## Verificação esperada antes de entregar mudanças

1. `npm run typecheck` limpo.
2. `npm run build` verde.
3. **Após qualquer mudança em `data.ts` ou `_shared/`: `npm run audit:payloads`**
   — auditoria runtime que carrega os 58 módulos (passa pelo `Schema.parse`)
   e valida o contrato do renderer. É o único check que pega erros de tipo
   dentro dos dados (sigla objeto, cid array, ícone fora do mapa), invisíveis
   para `tsc` e `vite build`.
4. Para mudanças visuais: screenshot headless
   (`google-chrome --headless --screenshot ... http://localhost:3003/app/assess/<id>`)
   e conferir o resultado.
