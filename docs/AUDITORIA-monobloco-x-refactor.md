# Auditoria: Monobloco × Refatoração SOLID do DisorderRenderer

> Data: 2026-07-26. Objetivo: identificar toda mudança/melhoria feita no
> monobloco (`DisorderRenderer.tsx`, 1.782 linhas) enquanto a refatoração
> modular (`_shared/renderer/`, 34 arquivos) era desenvolvida em paralelo,
> aplicar o que faltava no refactor e provar equivalência 100% antes de
> prosseguir com a troca.

## Veredito

**1 divergência real encontrada e aplicada. Após o port, a refatoração é
provadamente equivalente ao monobloco: 58/58 rotas com DOM idêntico.**
**SWAP EXECUTADO em 2026-07-26** — ver "Prosseguimento executado" abaixo.
Rollback: `git checkout -- src/generated/disorders/_shared/` ou restaurar
`script/DisorderRenderer.backup` como `DisorderRenderer.tsx`.

## Método (3 provas independentes)

1. **Comparação símbolo a símbolo** — extração por função (parser brace-aware)
   do monobloco × arquivo de destino no refactor, diff normalizado.
2. **Dump-DOM das 58 rotas** — Chrome headless (`--dump-dom`) em
   `/app/assess/<id>` para os 58 transtornos, antes (monobloco) e depois
   (refactor via barril temporário), com normalização de ids voláteis do
   Radix (`radix-_r_*_`, `aria-controls/labelledby`, `?t=` do Vite).
3. **Typecheck + build oficiais** a cada etapa (`tsc -b --noEmit`, `vite build`).

## Achado 1 — Mudança do monobloco ausente no refactor (aplicada)

**Botões do header viraram ícone + Tooltip.** Em algum momento do trabalho
paralelo, o monobloco trocou os 4 botões de ação do header
(Expandir/Recolher/Imprimir/Limpar) de `size="sm"` com texto para
**ícone-only** (`size="icon"`, `h-9 w-9 rounded-full`, `aria-label`
descritivo) envolvidos em `TooltipProvider` + `Tooltip`/`TooltipTrigger asChild`
com `TooltipContent side="bottom"` descritivo. O `DisorderHeader.tsx` do
refactor estava no estilo antigo (botões com texto).

- **Evidência:** diff do dump-DOM — `data-slot="tooltip-trigger"
  data-size="icon"` (monobloco) × `data-slot="button" data-size="sm"` +
  rótulos textuais (refactor), nas 58 páginas.
- **Correção aplicada:** port verbatim do bloco Tooltip para
  `renderer/layout/DisorderHeader.tsx` (mesmas variants outline/outline/
  default/destructive, mesmos aria-labels e textos de tooltip), props
  `onExpand/onCollapse/onPrint/onReset` preservadas.

## Achado 2 — Todo o resto já estava no refactor (nada a aplicar)

Comparação símbolo a símbolo (12 seções + 10 helpers/área do guia):

- **10/12 seções interativas byte-idênticas** (CountBadge, Section,
  ToggleChip, SymptomSeveritySelect, IdentificationSection,
  ConditionalCriteriaSection, ChoiceChipsSection, DifferentialSection,
  ImpactSection, CompactClinicalValue).
- **2 divergências = apenas o nome da função** (renames autorizados no
  relatório do refactor): `ClusterSectionBody`→`ClusterSection`,
  `CriteriaPanel`→`CriteriaPanelSection`. Corpos idênticos.
- **Helpers do guia** (`subtiposLabelsOf`, `hierarquiaDe`,
  `clinicalGuideHasData`, `conditionalCriteriaItems`): divergências apenas
  das refatorações documentadas (`asRaw`/`rec`/`str` no lugar de `as any`,
  view-models tipados, `?? 0` sob strictNullChecks) — zero divergência
  comportamental.
- **Melhorias recentes confirmadas presentes no refactor:** toast sonner
  (via `browserPlatform`), tints `emerald-800/amber-400` da escala de
  gravidade, `RAZAO_SEXO_GLIFO` (com trailing space de `text-stone-700 `),
  card A sintético com `derivado_do_cluster`, Badge shadcn nos chips,
  Tooltip nas escalas, as 5 classes de gravidade no `SeverityBlock`.

## Achado 3 — Prova final de equivalência

Após o port do header: **58/58 rotas com dump-DOM idêntico** (normalizados
ids Radix e timestamp do Vite). Isso cobre não só o JSX estático mas também
ordem de seções, badges, visibilidade condicional (guia, critérios,
clusters, subtipos, hierarquia, instrumentos) e o contrato `openByDefault`/
`collapsible` do acordeão.

## Estado do working tree agora (PÓS-SWAP, 2026-07-26)

- `DisorderRenderer.tsx` = **barril de 4 linhas** — a refatoração modular
  (`renderer/`) é o entry point em produção.
- `DisorderRendererNew.tsx` = deletado (conteúdo virou o barril).
- Monobloco preservado em `script/DisorderRenderer.backup` (fora do src),
  `/tmp/DisorderRenderer.monobloco.bak` e no histórico git.

## Prosseguimento executado (2026-07-26)

1. Swap feito manualmente; efeito colateral corrigido: a renomeação reescreveu
   os imports dos 58 `index.tsx` para `DisorderRenderer.backup` — revertidos
   via `git checkout` (cada diff era só a linha do import).
2. `typecheck` + `build` + `audit:payloads` verdes.
3. Dump-DOM 61 rotas pós-swap (`/tmp/domC`) × pré-swap (`/tmp/domB`):
   **body-DOM 61/61 idêntico**. O diff de CSS era só o scanner do Tailwind:
   com o monobloco fora do `src/`, utilities que só existiam como literais
   mortos nele deixaram de ser emitidas (16 variáveis `--color-*`). Varredura
   das 61 rotas confirmou que toda classe de cor usada no DOM tem regra —
   exceto `border-slate-800/60` (Sidebar.tsx:72), ausente **igualmente nos
   dumps A, B e C**: lacuna pré-existente, não regressão do swap.
4. **Bug descoberto na verificação (pré-datava o swap):** o card de
   Prevalência nunca renderizava e o "Início típico" sumira do Curso — o
   enriquecimento v2.3.0 renomeou as chaves do payload
   (`prevalencia.estimativa/distribuicao_por_sexo/variacoes_contextuais/
   nota_aplicador`, `curso_desenvolvimento.inicio_tipico`) e o renderer
   (monobloco e refactor, bug-for-bug) seguia lendo as antigas
   (`populacao_geral`, `proporcao_sexo`, `variacoes_culturais`, `notas`,
   `idade_inicio_tipica`). Corrigido em `renderer/adapters/guideAdapter.ts` +
   `guideView.ts` + `PrevalenceCard.tsx`: **58/58 com card de prevalência e
   curso completo (3 etapas)**. Verificado em runtime (vite-node) e em
   screenshots com o guia aberto (agorafobia = sem_niveis_formais,
   esquizofrenia = formal_dimensional).
5. Dívidas **D1/D2** resolvidas: D1 (Guia não expansível pelo "Expandir")
   pelo usuário; D2 (DDx no namespace `comorbidities`) em 2026-07-26 — estado
   ganhou `ddx: Record<string, boolean>` próprio (`useDisorderAssessment`),
   `DifferentialSection` e `clinicalMarkdown` passaram a ler `state.ddx`, e o
   contador "Comorbidades / DDx" do painel soma os dois namespaces (UX
   preservada). Verificação: nenhuma colisão real de ids nos 58 payloads —
   era acoplamento estrutural latente, não bug visível.

## Notas de processo

- O relatório do refactor externo citava "62 payloads" e "1.743 linhas" —
  números de contexto desatualizado; os valores reais são 58 e 1.782. Não
  invalida nada, mas reforça a necessidade desta auditoria independente.
- A técnica dump-DOM A×B provou-se o check mais barato e mais forte de
  fidelidade de render: pegou em minutos a única divergência real que a
  leitura símbolo a símbolo não cobria (o header, extraído para `layout/`).
