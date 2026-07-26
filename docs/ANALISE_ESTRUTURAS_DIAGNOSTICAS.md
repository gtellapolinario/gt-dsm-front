# Matriz: Estruturas Diagnósticas × Avaliação (análise)

> Análise consolidada (2026-07-25). Três mundos comparados: os hooks antigos
> por estrutura (apagados no commit `3e064fa`, recuperáveis em `3e064fa^:src/infra/hooks/`),
> o que o DSM-5 exige por estrutura, e o que os payloads enriquecidos atuais
> (`src/generated/disorders/*/data.ts`) já entregam. **Nenhuma linha de código
> foi alterada para produzir este documento.**

## Conclusões transversais

1. **Os hooks antigos nunca leram o dado estrutural.** Limiar era escada
   heurística (`≤2→total, ≤4→2, ≤6→3, >6→ceil(n/2)`), âncora era "primeiro
   sintoma do cluster", tipo mono/polythetic era "índice 0 vs. resto". Nenhum
   lia `tipo`, `limiar` ou `ancora_obrigatoria` — esses campos são mais novos
   que os hooks.
2. **Nenhum hook computava "atendido" global.** Todos expunham contadores
   parciais e deixavam a conjunção "para o consumidor" — que nunca a fez.
   Nem no mundo antigo a regra DSM era avaliada de verdade.
3. **Os payloads enriquecidos são melhores que os dois mundos:**
   - `limiar`: só 2 formatos no corpus — `{adulto, pediatria}` ou `null`
     (chave sempre presente);
   - `ancora_obrigatoria`: 1 formato único quando presente —
     `{descricao, ids_obrigatorios, n_minimo}` (11 clusters); `null` nos demais;
   - `criterios_condicionais`: shape uniforme em todas as 9 estruturas —
     `{id, letra, rotulo, tipo, ui_widget, obrigatorio, icone, ddx_sugeridos,
     descricao_completa, metadados}`.

## A matriz — hook antigo × DSM × payload de hoje

| Estrutura (n) | Hook antigo fazia | DSM exige | Payload responde com |
|---|---|---|---|
| **polythetic_monocluster** (23) | contagem vs. escada no cluster[0] | N de M sintomas, limiar por faixa etária | `limiar {adulto, pediatria}` (22/23) |
| **monothetic_puro** (16) | AND de TODOS os cc (ignorava `obrigatorio`) | todos os critérios obrigatórios | `cc[].obrigatorio` (58 itens) + clusters `monothetic_obrigatorio` |
| **polythetic_com_ancora** (9) | contagem + âncora = 1º sintoma (chute) | N de M **e** ≥1 sintoma-âncora (TDM: 5/9 com A1∨A2) | `limiar` + `ancora_obrigatoria` nos 9/9 |
| **clusters_simetricos** (3) | contagem/cluster + heurística de apresentação TDAH | cada cluster no seu limiar; combinação por transtorno (TEPT: A–E em conjunção; TDAH: domínio define apresentação) | `limiar` por cluster (8/9) + âncora real em bipolar2/D |
| **clusters_assimetricos** (3) | índice 0 = todos, resto = escada | clusters monotéticos (todos) + politéticos (limiar) | `tipo` explícito por cluster (4 mono, 2 poly) |
| **tripartite_funcional** (1) | 1 por letra A/B/C + AND | A intelectual ∧ B adaptativo ∧ C início no desenvolvimento | 2 clusters `qualitativo_sem_lista` + cc `temporal_idade_inicio` |
| **etiologico_externo** (1) | flags de texto (agente, data) que nem iam pro payload | estressor identificável + sintomas + não-luto + remissão ≤6m | cluster `unico_obrigatorio` + cc tipados + widget `campo_duracao_meses` |
| **conjuncao_temporal_complexa** (1) | ceil(n/2)/cluster + merge temporal bugado | A (2+/5 c/ âncora) ∧ B (humor na maior parte) ∧ C (psicose s/ humor ≥2sem) ∧ duração | âncora real A1–A3, limiar, cluster B único, cc temporais |
| **categorico_por_subtipo** (1) | contagem + subtipo sem efeito | 1 delírio ≥1 mês ∧ subtipo obrigatório ∧ cc | cluster `unico_obrigatorio` + `subtipos` (chave própria) + cc |

### Transtornos por estrutura

- **polythetic_monocluster (23):** agorafobia, explosivo_intermittente,
  oposicao_desafiante, tp_antissocial, tp_borderline, tp_dependente,
  tp_esquizoide, tp_esquizotipico, tp_evitativo, tp_histrionico,
  tp_narcisista, tp_obsessivo_compulsivo, tp_paranoide,
  transtorno_ansiedade_separacao, transtorno_bipolar_tipo_1,
  transtorno_disruptivo_desregulacao_humor, transtorno_especifico_aprendizagem,
  transtorno_insonia, transtorno_linguagem, transtorno_por_uso_de_alcool,
  transtorno_por_uso_de_estimulantes, transtorno_por_uso_de_opioides,
  transtorno_por_uso_de_tabaco
- **monothetic_puro (16):** anorexia_nervosa, bulimia_nervosa, delirium,
  fobia_especifica, mutismo_seletivo, tnc_alzheimer, tnc_leve, tnc_maior,
  tnc_vascular, transtorno_acumulacao, transtorno_ansiedade_doenca,
  transtorno_ansiedade_social, transtorno_conversao,
  transtorno_dismorfico_corporal, transtorno_escoriacao, tricotilomania
- **polythetic_com_ancora (9):** conduta, esquizofrenia,
  transtorno_alimentar_restritivo_evitativo,
  transtorno_ansiedade_generalizada, transtorno_depressivo_maior,
  transtorno_depressivo_persistente, transtorno_esquizofreniforme,
  transtorno_panico, transtorno_psicotico_breve
- **polythetic_clusters_simetricos (3):** tept (5 clusters A–E),
  transtorno_bipolar_tipo_2, transtorno_deficit_atencao_hiperatividade
- **polythetic_clusters_assimetricos (3):** transtorno_compulsao_alimentar,
  transtorno_do_espectro_autista, transtorno_obsessivo_compulsivo
- **tripartite_funcional (1):** deficiencia_intelectual
- **etiologico_externo (1):** transtornos_adaptacao
- **conjuncao_temporal_complexa (1):** transtorno_esquizoafetivo
- **categorico_por_subtipo (1):** transtorno_delirante

## Achados que explicam "faltando coisas / dispostas de forma errada"

### Widgets declarados no dado, não implementados no renderer

Os `criterios_condicionais` declaram `ui_widget`, mas o renderer trata tudo
como toggle simples:

| `ui_widget` | Ocorrências | Status no renderer |
|---|---|---|
| `toggle_com_justificativa_obrigatoria` | 60 | renderiza toggle; **justificativa não é exigida** |
| `campo_duracao_meses` | 19 | **não implementado** (duração não digitável) |
| `select_multiplos_ddx` | 19 | **não implementado** |
| `toggle_simples` | 41 | ok |
| `campo_data` | 3 | **não implementado** |
| `checklist_achados_objetivos` | 2 | **não implementado** |
| `campo_duracao_anos` | 1 | **não implementado** |

### `obrigatorio` ignorado

Só 2 itens opcionais em todo o corpus — `transtorno_depressivo_persistente/
edm_pode_estar_presente` e `transtornos_adaptacao/remissao_6meses` — mas a UI
não distingue obrigatório de opcional.

### Anomalias de dado (corrigir na fonte, não no renderer)

1. `tnc_alzheimer` e `tnc_vascular`: `clusters_sintomas: []` (monothetic_puro
   sem cluster; o critério vive nos criterios_condicionais).
2. `transtorno_disruptivo_desregulacao_humor`: declarado
   `polythetic_monocluster`, mas o cluster A é `monothetic_obrigatorio` com
   `limiar: null` — único cluster não-polythetic e único limiar null da
   estrutura.
3. `transtorno_esquizoafetivo`: único limiar parcial — `{adulto: 2,
   pediatria: null}`.
4. `anorexia_nervosa`: chaves sem aspas no data.ts (quebra greps simples).

### Tipos de cluster raros (confinados)

- `qualitativo_sem_lista` — só deficiencia_intelectual.
- `unico_obrigatorio` — só tept/A, transtorno_delirante,
  transtornos_adaptacao, esquizoafetivo/B.

## Recomendação

Um renderer só + módulo `avaliadores.ts` com 9 funções puras
`(payload, estado) → { porCluster, porCriterio, atendido, faltantes }`,
dirigidas 100% pelos campos do dado (`tipo`, `limiar`, `ancora_obrigatoria`,
`obrigatorio`). Nada de renderer por estrutura, nada de portar linha dos
hooks antigos — a heurística morre aqui.

Ordem de impacto para os widgets: justificativa obrigatória (60 usos) →
campo duração (19) → select múltiplos DDx (19).

## Apêndice: núcleo dos hooks antigos (minerado de `3e064fa^`)

- **Nenhum hook lia campos declarativos** (`tipo`, `limiar`,
  `ancora_obrigatoria`). Tudo heurística de código.
- **Limiar:** escada `≤2→total, ≤4→2, ≤6→3, >6→ceil(n/2)` (maioria);
  `ceil(n/2)` puro (psicomotor, conjuncao, dsm-avaliacao); default 1 por
  letra (tripartite); "todos" implícito (monothetic).
- **Âncora:** primeiro sintoma do cluster (com_ancora); monothetic =
  índice 0 (assimetricos).
- **"Atendido" global:** inexistente em todos — só `monothetic_puro` (AND de
  todos os cc) e `tripartite` (AND entre clusters) tinham boolean final.
- **Campos especiais perdidos:** `duracao_meses`, `agente_etiologico`,
  `data_inicio`, `justificativa_qualitativa` viviam só no estado do hook e
  nunca chegavam ao payload.
- `use-dsm-avaliacao.ts` não era dispatcher por estrutura (não havia
  HOOK_MAP no tree); `evaluation-hooks.ts` era um único hook reexportado sob
  13 nomes.
