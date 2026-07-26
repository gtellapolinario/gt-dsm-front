# Auditoria: Monobloco × Refatoração SOLID do DisorderRenderer

> Data: 2026-07-26. Objetivo: identificar toda mudança/melhoria feita no
> monobloco (`DisorderRenderer.tsx`, 1.782 linhas) enquanto a refatoração
> modular (`_shared/renderer/`, 34 arquivos) era desenvolvida em paralelo,
> aplicar o que faltava no refactor e provar equivalência 100% antes de
> prosseguir com a troca.

## Veredito

**1 divergência real encontrada e aplicada. Após o port, a refatoração é
provadamente equivalente ao monobloco: 58/58 rotas com DOM idêntico.**
O monobloco foi restaurado como entry point — a troca definitiva aguarda
autorização (rollback: `git checkout -- src/generated/disorders/_shared/DisorderRenderer.tsx`).

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

## Estado do working tree agora

- `DisorderRenderer.tsx` = **monobloco restaurado** (entry point em produção).
- `renderer/` = refatoração completa **com o port do header aplicado** —
  pronta para o swap.
- `DisorderRendererNew.tsx` = barril candidato (torna-se o conteúdo do
  `DisorderRenderer.tsx` no swap; arquivo some depois).
- Backup do monobloco em `/tmp/DisorderRenderer.monobloco.bak` (e no git).

## Pendências para o prosseguimento (quando autorizado)

1. Swap: `DisorderRenderer.tsx` ← barril de 4 linhas (conteúdo de
   `DisorderRendererNew.tsx`).
2. `npm run typecheck && npm run build && npm run audit:payloads`.
3. Re-rodar dump-DOM 58× (sanidade pós-swap definitivo) + 6 screenshots
   visuais (1 por classe de gravidade + hierarquia).
4. Deletar `DisorderRendererNew.tsx`.
5. Abrir as tarefas de dívida catalogadas no relatório do refactor:
   **D1** ("Expandir" não abre o Guia Clínico — `collapsible: false`) e
   **D2** (DDx compartilha o namespace `comorbidities` no estado — colisão
   de ids acopla checkboxes).

## Notas de processo

- O relatório do refactor externo citava "62 payloads" e "1.743 linhas" —
  números de contexto desatualizado; os valores reais são 58 e 1.782. Não
  invalida nada, mas reforça a necessidade desta auditoria independente.
- A técnica dump-DOM A×B provou-se o check mais barato e mais forte de
  fidelidade de render: pegou em minutos a única divergência real que a
  leitura símbolo a símbolo não cobria (o header, extraído para `layout/`).
