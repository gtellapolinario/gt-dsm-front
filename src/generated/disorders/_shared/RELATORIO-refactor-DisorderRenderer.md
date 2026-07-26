# RELATÓRIO — Refatoração SOLID do `DisorderRenderer.tsx`

> **Contexto de execução (ler primeiro).** Este refactor foi executado fora do checkout do projeto: o workspace continha apenas o `DisorderRenderer.tsx` original (1.743 linhas) e o `package.json`. Por isso os checkpoints oficiais da §6 do contrato (`npm run typecheck`, `npm run build`, harness §7 com os 62 payloads, `classname-audit.mjs`) **não puderam ser executados aqui** e foram substituídos por verificações estáticas equivalentes + typecheck em sandbox com stubs (tsc 7.0.2, strict). **A integração no projeto DEVE rodar os checkpoints reais (§"Pendências de integração" ao final).**
>
> Verificação independente adversarial: 2 rodadas. Rodada 1 **REPROVADO** (2 divergências reais, F1/F2 abaixo) → corrigidas → Rodada 2 **APROVADO** sem ressalvas bloqueantes.

---

## 1. Gate da §0.3 — o diretório `_shared/` é gerado?

**NÃO VERIFICÁVEL neste workspace** (a pasta `scripts/` e o restante de `src/` não foram fornecidos). Ação pendente na integração — rodar no projeto:

```bash
grep -rn "_shared" --include="*.{ts,mjs,js,py,json}" scripts/ src/ 2>/dev/null | grep -vi "^src/generated/disorders/" | head -50
```

Se existir gerador que emite `_shared/DisorderRenderer.tsx`, o template do gerador deve ser atualizado para emitir o barril de 2 linhas (§5.8), senão ele sobrescreve o refactor no próximo build.

## 2. Arquivos criados (34 arquivos, 2.322 LOC novas)

| Arquivo | LOC | Símbolo(s) exportado(s) | Origem no antigo |
|---|---|---|---|
| `DisorderRenderer.tsx` (barril) | 4 | `DisorderRenderer` (re-export), `ClinicalDisorder` (type re-export) | linha 1366 |
| `renderer/DisorderRendererView.tsx` | 94 | `DisorderRendererView` | 1366–1743 |
| `renderer/constants.ts` | 1 | `RAZAO_SEXO_GLIFO` | 1175 (D7, simplificação autorizada) |
| `renderer/model/assessmentPort.ts` | 13 | `Assessment`, `AssessmentState`, `ClusterCounter`, 6 fatias ISP | 128 (§5.1) |
| `renderer/model/sectionContext.ts` | 9 | `SectionContext` | — (§5.7) |
| `renderer/ports/platform.ts` | 11 | `ClipboardPort`, `NotifyPort`, `ConfirmPort`, `PrintPort`, `PlatformPorts` | — (§5.2, DIP) |
| `renderer/ports/browserPlatform.ts` | 37 | `browserPlatform` | 921–932 (`copyText`) + `toast`/`window.confirm`/`window.print` |
| `renderer/ports/PlatformContext.tsx` | 23 | `PlatformProvider`, `usePlatform` (default = `browserPlatform`) | — (§5.2) |
| `renderer/adapters/raw.ts` | 26 | `RawExtras`, `asRaw`, `str`, `list`, `rec` | todos os `(data as any)` (§5.3) |
| `renderer/adapters/guideView.ts` | 45 | `CodeEntry`, `PrevalenceView`, `CourseStep`, `InstrumentView`, `HierarchyView`, `GuideView` (+`temGravidade`) | — (§5.5) |
| `renderer/adapters/guideAdapter.ts` | 133 | `buildGuideView`, `clinicalGuideHasData` (+ `subtiposLabelsOf`/`hierarquiaDe` privados) | 958–966, 1097–1131, 1142–1160 |
| `renderer/adapters/severityAdapter.ts` | 162 | `SeverityLevelView`, `SeverityDomainView`, `SeverityEpisodeGroupView`, `SeverityView`, `buildSeverityView` | 1008–1075 (§5.4) |
| `renderer/adapters/criteriaAdapter.ts` | 36 | `conditionalCriteriaItems`, `letterOf` | 381–405, 416–419 |
| `renderer/ui/ItemIcon.tsx` | 15 | `ItemIcon` (+ `itemIcon` privado) | 96–106 |
| `renderer/ui/CountBadge.tsx` | 21 | `CountBadge` | 132–150 |
| `renderer/ui/Section.tsx` | 46 | `Section` | 152–188 |
| `renderer/ui/ToggleChip.tsx` | 24 | `ToggleChip` | 190–210 |
| `renderer/ui/SymptomSeveritySelect.tsx` | 30 | `SymptomSeveritySelect` | 212–232 |
| `renderer/ui/GuideCardHeader.tsx` | 25 | `GuideCardHeader` | 936–956 |
| `renderer/ui/SeverityScale.tsx` | 35 | `SeverityScale` | 968–1000 |
| `renderer/ui/CompactClinicalValue.tsx` | 70 | `CompactClinicalValue` (+ `hiddenKeys` privado) | 120–126, 740–791 |
| `renderer/sections/IdentificationSection.tsx` | 167 | `IdentificationSection` | 236–379 |
| `renderer/sections/CriteriaPanelSection.tsx` | 107 | `CriteriaPanelSection` (renomeado de `CriteriaPanel`) | 823–917 |
| `renderer/sections/ConditionalCriteriaSection.tsx` | 82 | `ConditionalCriteriaSection` | 407–483 |
| `renderer/sections/ClusterSection.tsx` | 94 | `ClusterSection` (renomeado de `ClusterSectionBody`) | 485–570 |
| `renderer/sections/ImpactSection.tsx` | 69 | `ImpactSection` | 687–738 |
| `renderer/sections/ChoiceChipsSection.tsx` | 57 | `ChoiceChipsSection` (assinatura genérica intacta) | 572–621 |
| `renderer/sections/DifferentialSection.tsx` | 70 | `DifferentialSection` | 623–685 |
| `renderer/sections/MarkdownPreviewSection.tsx` | 23 | `MarkdownPreviewSection` | 1727–1738 |
| `renderer/sections/guide/ClinicalGuideSection.tsx` | 64 | `ClinicalGuideSection` (recebe `view: GuideView`) | 1133–1362 |
| `renderer/sections/guide/PrevalenceCard.tsx` | 48 | `PrevalenceCard` | 1182–1218 |
| `renderer/sections/guide/CourseCard.tsx` | 33 | `CourseCard` | 1222–1242 |
| `renderer/sections/guide/SeverityBlock.tsx` | 89 | `SeverityBlock` (switch exaustivo sobre `SeverityView`) | 1008–1095 |
| `renderer/sections/guide/SubtypesCard.tsx` | 27 | `SubtypesCard` | 1252–1266 |
| `renderer/sections/guide/HierarchyCard.tsx` | 44 | `HierarchyCard` | 1270–1300 |
| `renderer/sections/guide/InstrumentsCard.tsx` | 40 | `InstrumentsCard` | 1304–1325 |
| `renderer/sections/guide/NosologyCard.tsx` | 40 | `NosologyCard` | 1331–1358 |
| `renderer/layout/DisorderHeader.tsx` | 87 | `DisorderHeader` | 1373–1386, 1449–1502 |
| `renderer/layout/DisorderToolbar.tsx` | 24 | `DisorderToolbar` | 1681–1691 |
| `renderer/registry/sectionDescriptor.ts` | 26 | `SectionDescriptor`, `SlotDescriptor`, `RendererNode` | — (§5.7) |
| `renderer/registry/buildRendererNodes.tsx` | 271 | `buildRendererNodes` (ordem canônica + visibilidade + badges) | 1388–1427, 1511–1739 |

## 3. Checklist da §1 (28 símbolos) — ✅ 28/28

| # | Símbolo | Destino verificado (grep) |
|---|---|---|
| 1 | `itemIcon` | ✅ `ui/ItemIcon.tsx` (privado) |
| 2 | `ItemIcon` | ✅ `ui/ItemIcon.tsx` |
| 3 | `clinicalSections` | ✅ **removido** (§3, grep vazio) |
| 4 | `hiddenKeys` | ✅ `ui/CompactClinicalValue.tsx` (privado) |
| 5 | `Assessment` | ✅ `model/assessmentPort.ts` |
| 6 | `CountBadge` | ✅ `ui/CountBadge.tsx` |
| 7 | `Section` | ✅ `ui/Section.tsx` |
| 8 | `ToggleChip` | ✅ `ui/ToggleChip.tsx` |
| 9 | `SymptomSeveritySelect` | ✅ `ui/SymptomSeveritySelect.tsx` |
| 10 | `IdentificationSection` | ✅ `sections/IdentificationSection.tsx` |
| 11 | `conditionalCriteriaItems` | ✅ `adapters/criteriaAdapter.ts` |
| 12 | `ConditionalCriteriaSection` | ✅ `sections/ConditionalCriteriaSection.tsx` |
| 13 | `ClusterSectionBody` | ✅ `sections/ClusterSection.tsx` (rename autorizado) |
| 14 | `ChoiceChipsSection` | ✅ `sections/ChoiceChipsSection.tsx` |
| 15 | `DifferentialSection` | ✅ `sections/DifferentialSection.tsx` |
| 16 | `ImpactSection` | ✅ `sections/ImpactSection.tsx` |
| 17 | `CompactClinicalValue` | ✅ `ui/CompactClinicalValue.tsx` |
| 18 | `SupplementalSection` | ✅ **removido** (§3, grep vazio) |
| 19 | `CriteriaPanel` | ✅ `sections/CriteriaPanelSection.tsx` (rename autorizado) |
| 20 | `copyText` | ✅ `ports/browserPlatform.ts` (`clipboard.write`, corpo verbatim) |
| 21 | `GuideCardHeader` | ✅ `ui/GuideCardHeader.tsx` |
| 22 | `subtiposLabelsOf` | ✅ `adapters/guideAdapter.ts` (privado) |
| 23 | `SeverityScale` | ✅ `ui/SeverityScale.tsx` |
| 24 | `SeverityBlock` | ✅ `sections/guide/SeverityBlock.tsx` + `adapters/severityAdapter.ts` |
| 25 | `hierarquiaDe` | ✅ `adapters/guideAdapter.ts` (privado) |
| 26 | `clinicalGuideHasData` | ✅ `adapters/guideAdapter.ts` |
| 27 | `ClinicalGuideSection` | ✅ `sections/guide/ClinicalGuideSection.tsx` + 7 cards |
| 28 | `DisorderRenderer` | ✅ `DisorderRendererView.tsx` + `registry/*` + `layout/*` + barril |

## 4. Typecheck / build

- **Sandbox (aqui):** tsc **7.0.2** `--noEmit --strict --verbatimModuleSyntax --noUnusedLocals --noUnusedParameters --jsx react-jsx --moduleResolution bundler` sobre os 34 arquivos → **EXIT=0**. Stubs de `schema`/hooks/`disorderDataAccess`/`Markdown`/`@/components/ui/*`/`lucide-react`/`sonner` reconstruídos por inferência de uso. Controle negativo injetado (import inexistente + guarda revertida) foi detectado (TS2305/TS18047/TS2322), provando que a checagem morde. **Limitação:** os módulos reais (intocados) têm tipos mais estritos que os stubs — o typecheck oficial continua obrigatório.
- **Oficial (pendente, rodar no projeto):** `npm run typecheck && npm run build`.

## 5. Harness de fidelidade (§7) — PENDENTE NA INTEGRAÇÃO

Os 62 payloads não foram fornecidos; o harness `__fidelity__` (§7.1–7.4) deve ser montado no projeto conforme o contrato e atingir **62/62 PASS** (incl. script de interação §7.4). Substituições parciais executadas aqui:
- **Verbatim de JSX:** comparação programática por região de cada componente extraído contra o baseline (tolerando apenas imports, linha de export e as substituições de fonte de dados documentadas) — **todas as regiões idênticas**.
- **Equivalência de lógica dos adapters:** harness em Node com **26 payloads sintéticos** cobrindo todos os ramos (sem_niveis sem lembrete, por_episodio com descritores numéricos, escalar vazio, subtipos com número, hierarquia só-notas, prevalência com 0 falsy) → 0 divergências entre lógica original e adapters.
- **Equivalência de conjuntos:** `defaultOpen`/`allSectionIds` derivados dos descritores ≡ conjuntos do baseline (linhas 1411–1427). A **ordem** do array `allSectionIds` difere (`painel`/`markdown` ao final no baseline), mas o Radix Accordion trata `value` como conjunto — DOM idêntico.

## 6. Auditoria de classNames (multiset)

```
baseline: 162 literais (115 distintos)
refactor: 160 literais (114 distintos)
diff:  − "p-5 space-y-3" ×1   (baseline linha 804 — corpo do SupplementalSection, código morto §3)
       − "text-sm font-semibold px-2 py-0.5 rounded-full bg-surface-2 text-text-3" ×1
                             (baseline linha 1667 — badge "complementar" do bloco morto)
classes novas: 0
```

Resultado = baseline − bloco morto. **IDENTIDADE comprovada** fora do código morto. O script oficial `scripts/classname-audit.mjs` (§7.5) deve ser criado no projeto e repetir esta prova.

## 7. `grep -rn "as any\|: any" renderer/`

**VAZIO** — nem `adapters/raw.ts` usa `any` textual (`asRaw` usa `as ClinicalDisorder & RawExtras`; `rec` usa `as Record<string, unknown>`). Greps complementares vazios: `export *`, `useMemo`, `useCallback`, `React.memo`, `forwardRef`, `Suspense`, `lazy(`, ícone `Info`, `window./toast./navigator./document.` fora de `ports/`.

## 8. D1–D10 preservados (item a item)

- **D1** — `guia-clinico` é o único descritor com `collapsible: false` (`buildRendererNodes.tsx:63`); `allSectionIds` filtra `collapsible` → "Expandir" não abre o Guia. ✅
- **D2** — `DifferentialSection.tsx` mantém `state.comorbidities[...]` e `setToggle("comorbidities", ...)`. ✅
- **D3** — `openByDefault` lido somente no initializer de `useState` (`DisorderRendererView.tsx:42–48`); zero `useEffect` na árvore. ✅
- **D4** — `liveMarkdown = assessment.buildMarkdown()` no corpo da View (recalculado a cada render); `refreshMarkdown` ligado ao botão via slot da toolbar. ✅
- **D5** — `.slice(0, 6)` (`CompactClinicalValue.tsx:33`) e `.slice(0, 8)` (`:52`). ✅
- **D6** — `bg-blue-600` (header), `text-stone-700 ` **com trailing space** (PrevalenceCard, confirmado com `cat -A`), `border-amber-200`, `ring-amber-100`, `text-amber-700` etc., verbatim. ✅
- **D7** — array `sex` eliminado; `RAZAO_SEXO_GLIFO = "(♀:♂)"` (U+2640/U+2642 confirmados por codepoint) em `constants.ts`, usado em `PrevalenceCard`. Única simplificação autorizada, aplicada. ✅
- **D8** — nó `markdown` com push incondicional no registry. ✅
- **D9** — `<Button asChild variant="secondary" size="xs">` + `<span role="button" tabIndex={0}>` com `stopPropagation` no badge do markdown (registry), comentário original migrado. ✅
- **D10** — `not-last:border-b-0 data-open:bg-transparent` verbatim em `ui/Section.tsx:28`. ✅

## 9. Prova da §3 reexecutada

O predicado do `filter` exclui exatamente os 5 elementos do array `clinicalSections` → `supplementalSections ≡ []` → `visibleSupplemental ≡ []` → o `.map` nunca renderiza. Removidos: `clinicalSections`, `supplementalSections`, `visibleSupplemental`, `SupplementalSection` e o bloco `<Section>` complementar (baseline 1659–1678), junto com o `useMemo` (único do arquivo — a árvore nova tem **zero** `useMemo`). Consequência colateral verificada: o ícone `Info` não é importado em nenhum arquivo novo; `titleFromValue` permanece usado em `ui/CompactClinicalValue.tsx`, `sections/CriteriaPanelSection.tsx` e `sections/guide/HierarchyCard.tsx`. O multiset de classNames (§6 acima) confirma que as únicas classes ausentes são as do bloco morto — a remoção não alterou o render.

## 10. Correções aplicadas após a verificação independente (rodada 1 → 2)

- **F1 — guarda de `escala.niveis`:** o original usa apenas `Array.isArray(g.escala?.niveis)` (sem `length > 0`, assimétrico aos demais ramos) e renderiza o wrapper vazio da `SeverityScale` para array vazio. Corrigido: `escalaNiveis: readonly SeverityLevelView[] | null` (null = não-array; `[]` = array vazio) e guarda `!== null` no `SeverityBlock`. Bug-for-bug restaurado.
- **F2 — assimetria `!= null` vs falsy da gravidade:** o early-return do guia usa `classificacao_dsm != null` (frouxo, baseline 1160) e o `SeverityBlock` usa falsy (baseline 1010). Corrigido: `GuideView.temGravidade` (frouxo) alimenta o early-return; `view.gravidade` (falsy, via `buildSeverityView`) alimenta o bloco. Com `classificacao_dsm: ""` o guia renderiza a div wrapper sem bloco — exatamente como o original.

## 11. Dívida catalogada

1. **ISP parcial no `state`** — todas as fatias carregam `state` inteiro (fatiar exigiria mexer no hook, fora do escopo — §5.1 tradeoff).
2. **D1 e D2 são bugs reais** que merecem tarefa própria (Guia não expansível; DDx compartilhando namespace `comorbidities` — colisão de ids acopla checkboxes).
3. **Cores fora do design system (D6)** convivem com os tokens — preservadas; harmonização é tarefa visual separada.
4. **`SeverityScale` com array vazio** renderiza wrapper vazio (F1, preservado bug-for-bug) — avaliar correção futura junto com D1/D2.
5. **Dupla contagem DDx+comorbidades** no `CriteriaPanelSection` ("Comorbidades / DDx") — decorrência de D2.

## 12. Divergências/limitações declaradas (não resolvidas por contrato ou por natureza de edge-case)

1. **Instrumentos com campo não-string:** o original renderia o valor bruto; o view-model normaliza via `str` (não-string → `undefined`). Payloads reais (campos string) são byte-idênticos. (comentário em `guideAdapter.ts:106–109`)
2. **Guards que viraram `list()`/`rec()`:** onde o original lançaria TypeError com payload malformado (item `null` em `niveis`, `regras_por_episodio` truthy não-array etc.), o adapter trata como vazio. Comportamento de crash não é render; payloads bem-formados idênticos.
3. **`key=` materializadas no view-model:** `episodioKey` (`= String(r.episodio)`) e `dominioKey` (`= String(d.id)`) são campos novos nos view-models para preservar as keys verbatim sem recomputar coerção no componente. Acréscimo tipado, sem impacto de DOM.
4. **`ui/SeverityScale.tsx`:** tipo da prop `levels` afrouxado de `Array<...>` para `readonly {...}[]` (aceita os `readonly SeverityLevelView[]` dos view-models). Zero impacto de DOM.
5. **`MarkdownPreviewSection`:** o tipo das props inclui `onCopy` (§5.11) mas só `markdown` é desestruturado (o botão de copiar vive no badge D9 do registry); fragment `<>` envolve os dois divs (não emite nó no DOM).
6. **`(rawData.instrumentos_complementares?.length ?? 0) > 0`:** o original (any) avaliava `undefined > 0` como `false`; `?? 0` reproduz a semântica sob `strictNullChecks`.
7. **Quebras de linha LF** nos arquivos novos (baseline é CRLF) — irrelevante para o DOM.
8. **Line-ending/espaços internos de source** (recuo, quebra de linha dentro de tags): HTML emitido idêntico; verificado por comparação normalizada.

## 13. Pendências de integração (checklist para o projeto real)

1. Copiar `DisorderRenderer.tsx` (barril) e `renderer/` para `src/generated/disorders/_shared/` (substituindo o antigo `DisorderRenderer.tsx` — manter backup).
2. Rodar o gate §0.3 (gerador que escreve `_shared/`?) — ver §1 deste relatório.
3. Confirmar que os 62 arquivos gerados usam **named import** (`import { DisorderRenderer }`); se algum usar default, adicionar `export default` ao barril (§5.8). Os 62 arquivos não foram fornecidos — verificação pendente.
4. `npm run typecheck && npm run build`.
5. Montar o harness §7 (`__fidelity__/`, rota `/__fidelity`, script de interação) → exigir **62/62 PASS** + 0 diffs pós-interação; verificação manual de gravidade de sintoma e impacto funcional em ≥3 transtornos (limitação Radix Select, §7.4).
6. Criar `scripts/classname-audit.mjs` e repetir a prova do multiset (§6).
7. Após 62/62: deletar `__fidelity__/`, `src/routes/__fidelity.tsx`, `scripts/classname-audit.mjs` (F8).

> **Regra final do contrato:** se o harness não atingir 62/62, não manter o refactor — o relatório de divergência deve ser produzido com o diff e o rollout revertido.
