# TDAH — Transtorno de Déficit de Atenção/Hiperatividade

## Identificação

| Campo | Valor |
|---|---|
| **Nome completo** | Transtorno de Déficit de Atenção/Hiperatividade |
| **Sigla** | TDAH |
| **DSM-5** | 314.01 |
| **CID-10** | F90.2 |
| **CID-11** | 6A05 |
| **Capítulo** | 01 — Transtornos do Neurodesenvolvimento |
| **Estrutura** | `polythetic_clusters_simetricos` |

## Estrutura Diagnóstica

O TDAH segue uma estrutura **polythética com clusters simétricos**:

- **2 clusters** (A1 e A2), cada um com **9 sintomas**
- **Limiar**: 5 sintomas em adultos (≥17 anos), 6 em crianças
- Os clusters são **independentes** — um paciente pode atender critérios em apenas um deles
- A apresentação clínica é **inferida automaticamente** a partir dos clusters atingidos

### Critério A1 — Desatenção (9 sintomas)

| ID | Sintoma |
|---|---|
| A1a | Erros por descuido ou falta de atenção a detalhes |
| A1b | Dificuldade em manter a atenção |
| A1c | Parece não escutar quando se fala diretamente |
| A1d | Não segue instruções e não termina tarefas |
| A1e | Dificuldade para organizar tarefas e atividades |
| A1f | Evita tarefas que exigem esforço mental prolongado |
| A1g | Perde coisas necessárias para tarefas ou atividades |
| A1h | Facilmente distraído por estímulos externos |
| A1i | Esquecido em atividades diárias |

### Critério A2 — Hiperatividade/Impulsividade (9 sintomas)

| ID | Sintoma |
|---|---|
| A2a | Remexer-se na cadeira ou batucar mãos/pés |
| A2b | Levantar-se quando deveria permanecer sentado |
| A2c | Correr ou subir nas coisas em situações inapropriadas |
| A2d | Dificuldade em brincar ou fazer lazer em silêncio |
| A2e | Inquietude motora extrema e sensação de "motor ligado" |
| A2f | Falar em excesso |
| A2g | Responder a perguntas antes que sejam concluídas |
| A2h | Dificuldade em esperar a sua vez |
| A2i | Interromper ou intrometer-se nas atividades alheias |

### Critérios B–E (Condicionais)

| Letra | Critério | Tipo |
|---|---|---|
| B | Sintomas presentes antes dos 12 anos | `temporal_idade_inicio` |
| C | Sintomas em dois ou mais ambientes | `multicontexto` |
| D | Interferência ou redução da qualidade do funcionamento | `prejuizo_funcional` |
| E | Sintomas não explicados por outro transtorno | `exclusao_diagnostica` |

### Apresentações (Subtipos)

| Subtipo | Condição |
|---|---|
| Combinada | A1 ≥ limiar E A2 ≥ limiar |
| Predominantemente desatenta | A1 ≥ limiar, A2 < limiar |
| Predominantemente hiperativa/impulsiva | A2 ≥ limiar, A1 < limiar |

### Níveis de Gravidade

| Nível | Critério |
|---|---|
| Leve | Poucos sintomas além do necessário, prejuízos mínimos |
| Moderada | Entre leve e grave |
| Grave | Muitos sintomas além do necessário ou prejuízo acentuado |

## Implementação

### Hook

`usePolytheticSimetricos(data)` — Gerencia estado de formulário, contadores, inferência de apresentação, payload JSON e geração de markdown.

### Componentes Personalizados

Nenhum — o TDAH usa apenas componentes genéricos da infraestrutura:

- `ConsultaShell` — layout 7/5
- `IdentificacaoPaciente` — dados demográficos
- `AccordionSection` — seções colapsáveis
- `SymptomItem` — itens de sintoma com checkbox + severity
- `ToggleChip` — chips de critérios B–E e comorbidades
- `CountBadge` — contadores A1/A2
- `NivelImpacto` — selects de impacto funcional 0–3

### Dados

- Fonte: `data.ts` — objeto `TranstornoDSM` completo
- Validação: `schema.ts` — schema Zod específico do TDAH
- Configuração: `config.ts` — metadados do módulo

## Notas Clínicas

- **População-alvo**: Adultos (≥17 anos) — o formulário usa limiar de 5 sintomas
- **Duração mínima**: 6 meses de sintomas
- **Início**: Obrigatório antes dos 12 anos (Critério B)
- **Multicontexto**: Sintomas em ≥2 ambientes (Critério C)
- **Prejuízo funcional**: Deve haver interferência significativa (Critério D)

## Referências

1. DSM-5-TR, American Psychiatric Association, 2022
2. ICD-11, WHO, 6A05
3. ICD-10, WHO, F90.2
