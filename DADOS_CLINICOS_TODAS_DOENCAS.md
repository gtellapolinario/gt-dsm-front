# BASE COMPLETA DE DADOS CLÍNICOS E EPIDEMIOLÓGICOS DO DSM-5-TR

> **Documento compilado para processamento via Enxame de Agentes / LLMs.**

> Contém: Subtipos, Gravidade, Instrumentos Complementares, Prevalência, Curso & Desenvolvimento e Template de Prontuário de todas as 58/59 doenças.


---

# Agorafobia
**ID**: `agorafobia` | **Capítulo**: Transtornos de Ansiedade | **DSM-5**: 300.22 | **CID-10**: F40.00 | **CID-11**: 6B02

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "1,7% (prevalência de 12 meses em adolescentes e adultos)",
    "proporcao_sexo": "2:1 mulheres:homens",
    "variacoes_culturais": null,
    "notas": "Casos graves podem tornar a pessoa completamente homebound.",
    "metadados": {
      "completo": false,
      "lacunas": [
        "variacao_cultural"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Qualquer idade; pico: adolescência tardia e início da vida adulta; mediana ~17 anos",
    "trajetoria": "Geralmente crônico e persistente sem tratamento; com tratamento, remissão possível.",
    "prognostico": "Prognóstico pior que TP isolado; funcionalidade frequentemente comprometida.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas além do mínimo; sofrimento manejável; pouco prejuízo funcional."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas, sofrimento e prejuízo funcional moderados."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas além do mínimo; sofrimento intenso; prejuízo funcional acentuado."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Anorexia Nervosa
**ID**: `anorexia_nervosa` | **Capítulo**: Transtornos Alimentares | **DSM-5**: 307.1 | **CID-10**: F50.0x | **CID-11**: 6B80

## 📊 Prevalência & Epidemiologia
```json
{
    populacao_geral:
      "0,4% (prevalência de 12 meses entre jovens do sexo feminino).",
    proporcao_sexo:
      "Aproximadamente 10:1 feminino:masculino em populações clínicas.",
    variacoes_culturais:
      "Possivelmente mais prevalente em países ricos pós-industrializados. A ausência de medo intenso manifesto de ganhar peso parece relativamente mais comum na Ásia e entre grupos latinos nos EUA.",
    notas: "Pouco se sabe sobre a prevalência no sexo masculino.",
    metadados: {
      completo: true,
      lacunas: [],
      notas_agente: null,
      fonte_passada_1: true,
    },
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    idade_inicio_tipica:
      "Adolescência ou idade adulta jovem; raramente antes da puberdade ou após os 40 anos.",
    trajetoria:
      "Altamente variável. Alguns se recuperam após um único episódio; outros apresentam curso crônico. A maioria entra em remissão dentro de cinco anos.",
    prognostico:
      "Taxa bruta de mortalidade de cerca de 5% por década. Morte mais comum por complicações clínicas ou suicídio.",
    metadados: {
      completo: true,
      lacunas: [],
      notas_agente: null,
      fonte_passada_1: true,
    },
  }
```

## 📈 Níveis de Gravidade
```json
{
    tipo: "ordinal_simples",
    niveis: [
      {
        id: "leve",
        label: "Leve",
        descritor:
          "IMC ≥ 17 kg/m² (adultos) ou percentil do IMC correspondente (crianças/adolescentes).",
      },
      {
        id: "moderada",
        label: "Moderada",
        descritor:
          "IMC 16–16,99 kg/m² (adultos) ou percentil do IMC correspondente.",
      },
      {
        id: "grave",
        label: "Grave",
        descritor:
          "IMC 15–15,99 kg/m² (adultos) ou percentil do IMC correspondente.",
      },
      {
        id: "extrema",
        label: "Extrema",
        descritor:
          "IMC < 15 kg/m² (adultos) ou percentil do IMC correspondente.",
      },
    ],
    regra_atribuicao:
      "Baseia-se no IMC atual para adultos ou no percentil do IMC para crianças e adolescentes. O nível pode ser aumentado para refletir sintomas clínicos, incapacidade funcional e necessidade de supervisão.",
    metadados: {
      completo: true,
      lacunas: [],
      notas_agente: null,
      fonte_passada_1: true,
    },
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    presente: true,
    nome: "Subtipo",
    mutuamente_exclusivos: true,
    subtipos: [
      {
        id: "tipo_restritivo",
        codigo: {
          dsm5: "307.1",
          cid10: "F50.01",
          cid11: null,
        },
        label: "Tipo restritivo",
        descricao:
          "Nos últimos três meses, o indivíduo não se envolveu em episódios recorrentes de compulsão alimentar ou comportamento purgativo. A perda de peso é conseguida essencialmente por dieta, jejum e/ou exercício excessivo.",
        sintomas_caracteristicos: [],
      },
      {
        id: "tipo_compulsao_alimentar_purgativa",
        codigo: {
          dsm5: "307.1",
          cid10: "F50.02",
          cid11: null,
        },
        label: "Tipo compulsão alimentar purgativa",
        descricao:
          "Nos últimos três meses, o indivíduo se envolveu em episódios recorrentes de compulsão alimentar purgativa (vômitos autoinduzidos ou uso indevido de laxantes, diuréticos ou enemas).",
        sintomas_caracteristicos: [],
      },
    ],
    metadados: {
      completo: true,
      lacunas: [],
      notas_agente: null,
      fonte_passada_1: true,
    },
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Bulimia Nervosa
**ID**: `bulimia_nervosa` | **Capítulo**: Transtornos Alimentares | **DSM-5**: 307.51 | **CID-10**: F50.2 | **CID-11**: 6B81

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "1 a 1,5% (prevalência de 12 meses entre jovens do sexo feminino).",
    "proporcao_sexo": "Aproximadamente 10:1 feminino:masculino.",
    "variacoes_culturais": "Ocorrência relatada em frequências relativamente similares na maioria dos países industrializados.",
    "notas": "A prevalência-ponto é maior entre adultos, já que o transtorno atinge seu pico no fim da adolescência e início da idade adulta.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Adolescência ou idade adulta jovem; incomum antes da puberdade ou após os 40 anos.",
    "trajetoria": "Curso crônico ou intermitente com períodos de remissão e recorrência. Sintomas tendem a diminuir ao longo do tempo, especialmente com tratamento.",
    "prognostico": "Períodos de remissão acima de um ano estão associados a evolução de longo prazo mais favorável. Taxa bruta de mortalidade de aproximadamente 2% por década.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Média de 1 a 3 episódios de comportamentos compensatórios inapropriados por semana."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Média de 4 a 7 episódios de comportamentos compensatórios inapropriados por semana."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Média de 8 a 13 episódios de comportamentos compensatórios inapropriados por semana."
      },
      {
        "id": "extrema",
        "label": "Extrema",
        "descritor": "Média de 14 ou mais comportamentos compensatórios inapropriados por semana."
      }
    ],
    "regra_atribuicao": "Baseia-se na frequência média semanal dos comportamentos compensatórios inapropriados. O nível pode ser elevado para refletir outros sintomas e o grau de incapacidade funcional.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno da Conduta
**ID**: `conduta` | **Capítulo**: Transtornos Disruptivos, do Controle de Impulsos e da Conduta | **DSM-5**: 312.8 | **CID-10**: F91.x | **CID-11**: 6C91

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "2–10% em um ano, mediana de 4%",
    "proporcao_sexo": "Mais elevado no sexo masculino",
    "variacoes_culturais": "Contexto ambiental (áreas de alto crime, zonas de guerra) pode levar a aplicação incorreta do diagnóstico.",
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Começo dos anos pré-escolares até adolescência intermediária",
    "trajetoria": "Tipo infância: pior prognóstico, mais agressão física, TDAH comórbido. Tipo adolescência: menos agressão, melhor prognóstico. Remissão na vida adulta é comum.",
    "prognostico": "Persistência mais provável em subtipo infância + emoções pró-sociais limitadas + comorbidade com TDAH e substâncias.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos problemas além dos necessários para o diagnóstico; danos relativamente pequenos a outros (mentir, faltar, ficar fora à noite)."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Número de problemas e efeito sobre os outros entre leve e grave (furtar sem confronto, vandalismo)."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos problemas além dos necessários, ou conduta causando danos consideráveis (sexo forçado, crueldade, armas, roubo com confronto, invasão)."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": true,
    "nome": "Tipo de início",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "infancia",
        "codigo": {
          "dsm5": "312.81",
          "cid10": "F91.1",
          "cid11": null
        },
        "label": "Tipo com início na infância",
        "descricao": "Pelo menos um sintoma característico antes dos 10 anos de idade.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "adolescencia",
        "codigo": {
          "dsm5": "312.82",
          "cid10": "F91.2",
          "cid11": null
        },
        "label": "Tipo com início na adolescência",
        "descricao": "Nenhum sintoma característico antes dos 10 anos de idade.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "nao_especificado",
        "codigo": {
          "dsm5": "312.89",
          "cid10": "F91.9",
          "cid11": null
        },
        "label": "Início não especificado",
        "descricao": "Critérios preenchidos, porém sem informações suficientes para determinar a idade de início.",
        "sintomas_caracteristicos": []
      }
    ],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno do Desenvolvimento Intelectual (Deficiência Intelectual) (DI)
**ID**: `deficiencia_intelectual` | **Capítulo**: Transtornos do Neurodesenvolvimento | **DSM-5**: 319 | **CID-10**: F79 | **CID-11**: 6A00

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "Aproximadamente 1% na população geral.",
    "proporcao_sexo": "Razão de prevalência mais alta em indivíduos do sexo masculino.",
    "variacoes_culturais": null,
    "notas": "Prevalência para deficiência intelectual grave é de aproximadamente 6 por 1.000.",
    "metadados": {
      "completo": true,
      "lacunas": [
        "prevalencia.variacoes_culturais"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Período do desenvolvimento",
    "trajetoria": "Geralmente crônico e estável, embora intervenções e suporte adequado possam melhorar o funcionamento adaptativo ao longo da vida.",
    "prognostico": "Depende da severidade e da presença de outras comorbidades neurológicas/psiquiátricas.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Dificuldades acadêmicas e de aprendizagem leves. Socialmente imaturo, mas independente no cuidado pessoal básico."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Habilidades conceituais atrasadas de forma marcante. Comunicação simples. Independente em cuidados pessoais com treinamento prolongado."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Pouca compreensão da linguagem escrita ou conceitos numéricos. Linguagem muito limitada. Requer apoio contínuo para tarefas cotidianas."
      },
      {
        "id": "profunda",
        "label": "Profunda",
        "descritor": "Dificuldades conceituais extremas. Expressão não-verbal. Dependência total em todos os aspectos práticos e físicos."
      }
    ],
    "regra_atribuicao": "Definida pelo funcionamento adaptativo (e não por escores de QI), uma vez que é o funcionamento adaptativo que determina o nível de apoio necessário.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": false,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[
    {
      "nome": "Escala Vineland de Comportamento Adaptativo",
      "sigla": "Vineland",
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ]
```

---

# Delirium
**ID**: `delirium` | **Capítulo**: Transtornos Neurocognitivos | **DSM-5**: 293.0 | **CID-10**: F05 | **CID-11**: 6D70

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "1–2% na comunidade; 14–24% em admissões hospitalares; 70–87% em UTI",
    "proporcao_sexo": null,
    "variacoes_culturais": null,
    "notas": "Prevalência muito alta em idosos hospitalizados e pós-operatórios.",
    "metadados": {
      "completo": false,
      "lacunas": [
        "proporcao_sexo",
        "variacoes_culturais"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Qualquer idade; mais comum em idosos",
    "trajetoria": "Recuperação completa com tratamento da causa subjacente; pode progredir para coma ou morte se não tratado.",
    "prognostico": "Mortalidade alta em hospitalizados; até 40% morrem dentro de um ano.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "nao_aplica",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": true,
    "nome": "Subtipo etiológico",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "intoxicacao_substancia",
        "codigo": {
          "dsm5": "292.81",
          "cid10": "F19.921",
          "cid11": null
        },
        "label": "Delirium por intoxicação por substância",
        "descricao": "Predominam sintomas de delirium no quadro de intoxicação por substância.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "abstinencia_substancia",
        "codigo": {
          "dsm5": "291.0",
          "cid10": "F10.231",
          "cid11": null
        },
        "label": "Delirium por abstinência de substância",
        "descricao": "Predominam sintomas de delirium no quadro de abstinência de substância.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "induzido_medicamento",
        "codigo": {
          "dsm5": "292.81",
          "cid10": "F19.921",
          "cid11": null
        },
        "label": "Delirium induzido por medicamento",
        "descricao": "Sintomas aparecem como efeito colateral de medicamento tomado conforme prescrição.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "outra_condicao_medica",
        "codigo": {
          "dsm5": "293.0",
          "cid10": "F05",
          "cid11": null
        },
        "label": "Delirium devido a outra condição médica",
        "descricao": "Perturbação atribuível às consequências fisiológicas de outra condição médica.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "multiplas_etiologias",
        "codigo": {
          "dsm5": "293.0",
          "cid10": "F05",
          "cid11": null
        },
        "label": "Delirium devido a múltiplas etiologias",
        "descricao": "Delirium com mais de uma etiologia identificada.",
        "sintomas_caracteristicos": []
      }
    ],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[
    {
      "nome": "Escala de Confusão do Camargo",
      "sigla": "ECC",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Mini-Mental State Examination",
      "sigla": "MMSE",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ]
```

---

# Esquizofrenia
**ID**: `esquizofrenia` | **Capítulo**: Espectro da Esquizofrenia e Outros Transtornos Psicóticos | **DSM-5**: 295.90 | **CID-10**: F20.9 | **CID-11**: 6A20

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "Entre 0,3% e 0,7% ao longo da vida.",
    "proporcao_sexo": "Similar entre os sexos, embora com início ligeiramente mais precoce e prognóstico mais grave no sexo masculino.",
    "variacoes_culturais": "Ideias delirantes que parecem bizarras em uma cultura (ex: feitiçaria) podem ser comumente aceitas em outra, necessitando avaliação atenta.",
    "notas": "O risco de suicídio é elevado, com 5% a 6% dos indivíduos morrendo por autoextermínio e cerca de 20% realizando tentativas.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Início/meados dos 20 anos (homens); fim dos 20 anos (mulheres)",
    "trajetoria": "O início pode ser abrupto ou gradual, mas a maioria exibe curso flutuante ou crônico com exacerbações agudas e declínio progressivo da funcionalidade social e cognitiva.",
    "prognostico": "Geralmente crônico e com prejuízos funcionais residuais em grande parte dos indivíduos, necessitando de suporte medicamentoso e psicossocial contínuo.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "dimensional_psicose",
    "sintomas_avaliados": [
      "delirios",
      "alucinacoes",
      "discurso_desorganizado",
      "comportamento_psicomotor_anormal",
      "sintomas_negativos"
    ],
    "escala": {
      "min": 0,
      "max": 4,
      "labels": [
        "Ausente",
        "Equívoco",
        "Leve",
        "Moderado",
        "Grave"
      ]
    },
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno Explosivo Intermitente (TEI)
**ID**: `explosivo_intermittente` | **Capítulo**: Transtornos Disruptivos, do Controle de Impulsos e da Conduta | **DSM-5**: 312.34 | **CID-10**: F63.81 | **CID-11**: 6C91

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "2,7% em um ano (definição estrita, EUA)",
    "proporcao_sexo": "1,4–2,3:1 M:F em alguns estudos",
    "variacoes_culturais": "Prevalência mais baixa em Ásia, Oriente Médio, Romênia e Nigéria.",
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Fase final da infância ou adolescência",
    "trajetoria": "Características persistentes por muitos anos; curso pode ser episódico ou crônico.",
    "prognostico": "Relativamente comum independentemente de comorbidades.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "nao_aplica",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Fobia Específica
**ID**: `fobia_especifica` | **Capítulo**: Transtornos de Ansiedade | **DSM-5**: 300.29 | **CID-10**: F40.2 | **CID-11**: 6B03

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "7–9% (prevalência de 12 meses); 13,2% (prevalência na vida)",
    "proporcao_sexo": "2:1 mulheres:homens; tipo sangue-injeção-ferimento: razão menor",
    "variacoes_culturais": "Taxas variam; medo de magia e espíritos em algumas culturas; não classificar se sancionado culturalmente.",
    "notas": "Prevalência decresce com a idade.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Infância; tipo situacional: início mais tardio (~20 anos)",
    "trajetoria": "Início na infância frequentemente remite; quando persiste na adultícia raramente remite espontaneamente.",
    "prognostico": "Com tratamento (terapia de exposição), remissão em 80%+ dos casos.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas além do mínimo; sofrimento manejável; pouco prejuízo funcional."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas, sofrimento e prejuízo funcional moderados."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas além do mínimo; sofrimento intenso; prejuízo funcional acentuado."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": true,
    "nome": "Tipo de estímulo",
    "mutuamente_exclusivos": false,
    "subtipos": [
      {
        "id": "animal",
        "codigo": {
          "dsm5": "300.29",
          "cid10": "F40.218",
          "cid11": null
        },
        "label": "Tipo animal",
        "descricao": "Medo de animais ou insetos.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "ambiente_natural",
        "codigo": {
          "dsm5": "300.29",
          "cid10": "F40.228",
          "cid11": null
        },
        "label": "Tipo ambiente natural",
        "descricao": "Medo de alturas, tempestades, água.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "sangue_injecao_ferimento",
        "codigo": {
          "dsm5": "300.29",
          "cid10": "F40.23x",
          "cid11": null
        },
        "label": "Tipo sangue-injeção-ferimento",
        "descricao": "Medo de sangue, ferimentos, agulhas, procedimentos médicos.",
        "sintomas_caracteristicos": [
          "Resposta vasovagal — desmaio"
        ]
      },
      {
        "id": "situacional",
        "codigo": {
          "dsm5": "300.29",
          "cid10": "F40.248",
          "cid11": null
        },
        "label": "Tipo situacional",
        "descricao": "Medo de aviões, elevadores, espaços fechados.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "outro",
        "codigo": {
          "dsm5": "300.29",
          "cid10": "F40.298",
          "cid11": null
        },
        "label": "Tipo outro",
        "descricao": "Outros estímulos (engasgar, vomitar, contrair doença, palhaços etc.).",
        "sintomas_caracteristicos": []
      }
    ],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Mutismo Seletivo
**ID**: `mutismo_seletivo` | **Capítulo**: Transtornos de Ansiedade | **DSM-5**: 312.23 | **CID-10**: F94.0 | **CID-11**: 6B06

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "0,03–1% (estimativa variável por contexto clínico vs. escolar vs. comunitário)",
    "proporcao_sexo": "Sem variação significativa por sexo ou raça/etnia documentada",
    "variacoes_culturais": "Crianças de famílias imigrantes podem se recusar a falar em nova língua — avaliar antes de diagnosticar.",
    "notas": "Mais frequente em crianças menores que em adolescentes/adultos.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Usualmente antes dos 5 anos; atenção clínica surge na entrada escolar",
    "trajetoria": "Muitos superam o mutismo seletivo; ansiedade social pode persistir mesmo após remissão.",
    "prognostico": "Variável; história natural pouco estudada.",
    "metadados": {
      "completo": false,
      "lacunas": [
        "dados_prognostico_longo_prazo"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas além do mínimo; sofrimento manejável; pouco prejuízo funcional."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas, sofrimento e prejuízo funcional moderados."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas além do mínimo; sofrimento intenso; prejuízo funcional acentuado."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno de Oposição Desafiante (TOD)
**ID**: `oposicao_desafiante` | **Capítulo**: Transtornos Disruptivos, do Controle de Impulsos e da Conduta | **DSM-5**: 313.81 | **CID-10**: F91.3 | **CID-11**: 6C90

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "1–11%, média estimada de 3,3%",
    "proporcao_sexo": "1,4:1 M:F antes da adolescência",
    "variacoes_culturais": "Prevalência relativamente consistente entre países com diferentes raças e etnias.",
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Anos pré-escolares",
    "trajetoria": "Pode preceder transtorno da conduta; maioria das crianças com TOD não desenvolve conduta. Risco aumentado para ansiedade e depressão.",
    "prognostico": "Sintomas desafiantes/questionadores predizem conduta; sintomas de humor predizem transtornos emocionais.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Sintomas limitam-se a apenas um ambiente."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Alguns sintomas estão presentes em pelo menos dois ambientes."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Alguns sintomas estão presentes em três ou mais ambientes."
      }
    ],
    "regra_atribuicao": "Leve = 1 ambiente; Moderada = 2 ambientes; Grave = 3+ ambientes.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno de Estresse Pós-Traumático (TEPT)
**ID**: `tept` | **Capítulo**: Transtornos Relacionados a Trauma e a Estressores | **DSM-5**: 309.81 | **CID-10**: F43.10 | **CID-11**: 6B40

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "3,5% (prevalência de 12 meses nos EUA); 0,5–1% internacionalmente",
    "proporcao_sexo": "2:1 mulheres:homens",
    "variacoes_culturais": "Taxas menores em países com renda baixa; expressão varia culturalmente.",
    "notas": "Risco de TEPT condicional (após trauma) ~20%; variaações por tipo de trauma.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Qualquer idade; pode ocorrer em crianças pequenas após trauma",
    "trajetoria": "Altamente variável: ~50% recuperam em 3 meses; outros persistem décadas.",
    "prognostico": "Boa resposta a TCC focada no trauma (CPT, PE) e EMDR.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas; sofrimento manejável."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas e prejuízo intermediários."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas; prejuízo funcional acentuado."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[
    {
      "nome": "PTSD Checklist for DSM-5",
      "sigla": "PCL-5",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Clinician-Administered PTSD Scale",
      "sigla": "CAPS-5",
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ]
```

---

# Transtorno Neurocognitivo Maior ou Leve Devido à Doença de Alzheimer
**ID**: `tnc_alzheimer` | **Capítulo**: Transtornos Neurocognitivos | **DSM-5**: 294.1x | **CID-10**: F02.8x | **CID-11**: 6D80.0

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "Cerca de 60–90% das demências em idosos",
    "proporcao_sexo": "Mais frequente em mulheres (devido à maior longevidade)",
    "variacoes_culturais": null,
    "notas": "7% entre 65–74a; 53% entre 75–84a; 40% ≥85a.",
    "metadados": {
      "completo": false,
      "lacunas": [
        "variacoes_culturais"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Oitava/nona década; formas precoces na quinta/sexta década",
    "trajetoria": "Progressão gradual por cerca de 10 anos em média; platôs curtos possíveis.",
    "prognostico": "Morte geralmente por pneumonia por aspiração no estágio terminal.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Dificuldades com atividades instrumentais da vida diária (AIVDs)."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Dificuldades com atividades básicas da vida diária (ABVDs)."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Totalmente dependente de cuidados."
      }
    ],
    "regra_atribuicao": "Baseada no nível de dependência funcional nas atividades da vida diária.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": true,
    "nome": "Certeza diagnóstica e gravidade",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "provavel_maior",
        "codigo": {
          "dsm5": "294.1x",
          "cid10": "F02.8x",
          "cid11": null
        },
        "label": "Provável TNC maior",
        "descricao": "Com evidência de mutação genética ou quadro clássico progressivo.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "possivel_maior",
        "codigo": {
          "dsm5": "331.9",
          "cid10": "G31.9",
          "cid11": null
        },
        "label": "Possível TNC maior",
        "descricao": "Sem evidência de mutação genética ou com atípico.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "leve",
        "codigo": {
          "dsm5": "331.83",
          "cid10": "G31.84",
          "cid11": null
        },
        "label": "TNC leve",
        "descricao": "Prejuízo cognitivo leve com critérios de Alzheimer.",
        "sintomas_caracteristicos": []
      }
    ],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[
    {
      "nome": "Avaliação neuropsicológica formal",
      "sigla": null,
      "uso": "neuropsicologico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    }
  ]
```

---

# Transtorno Neurocognitivo Leve (TNC Leve)
**ID**: `tnc_leve` | **Capítulo**: Transtornos Neurocognitivos | **DSM-5**: 331.83 | **CID-10**: G31.84 | **CID-11**: 6D81

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "2–10% aos 65 anos; 5–25% aos 85 anos",
    "proporcao_sexo": null,
    "variacoes_culturais": null,
    "notas": "Estimativas variam conforme definição utilizada.",
    "metadados": {
      "completo": false,
      "lacunas": [
        "proporcao_sexo",
        "variacoes_culturais"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Varia por subtipo etiológico",
    "trajetoria": "Varia por etiologia; pode progredir para TNC maior ou estabilizar.",
    "prognostico": "Varia conforme etiologia subjacente.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "nao_aplica",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": true,
    "nome": "Subtipo etiológico",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "alzheimer",
        "codigo": null,
        "label": "Devido à doença de Alzheimer",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "frontotemporal",
        "codigo": null,
        "label": "Devido à degeneração lobar frontotemporal",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "corpos_lewy",
        "codigo": null,
        "label": "Com corpos de Lewy",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "vascular",
        "codigo": null,
        "label": "Vascular",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "lesao_traumatica",
        "codigo": null,
        "label": "Devido a lesão cerebral traumática",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "substancia",
        "codigo": null,
        "label": "Induzido por substância/medicamento",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "hiv",
        "codigo": null,
        "label": "Devido a infecção por HIV",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "prion",
        "codigo": null,
        "label": "Devido à doença do príon",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "parkinson",
        "codigo": null,
        "label": "Devido à doença de Parkinson",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "huntington",
        "codigo": null,
        "label": "Devido à doença de Huntington",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "outra_condicao",
        "codigo": null,
        "label": "Devido a outra condição médica",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "multiplas_etiologias",
        "codigo": null,
        "label": "Devido a múltiplas etiologias",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "nao_especificado",
        "codigo": null,
        "label": "Não especificado",
        "descricao": "",
        "sintomas_caracteristicos": []
      }
    ],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": "Subtipos etiológicos possuem critérios específicos em seções próprias do DSM-5.",
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[
    {
      "nome": "Montreal Cognitive Assessment",
      "sigla": "MoCA",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Avaliação neuropsicológica formal",
      "sigla": null,
      "uso": "neuropsicologico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    }
  ]
```

---

# Transtorno Neurocognitivo Maior (TNC Maior)
**ID**: `tnc_maior` | **Capítulo**: Transtornos Neurocognitivos | **DSM-5**: 294.1x | **CID-10**: F02.8x | **CID-11**: 6D80

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "1–2% aos 65 anos; até 30% aos 85 anos",
    "proporcao_sexo": null,
    "variacoes_culturais": null,
    "notas": "Prevalência varia conforme idade e subtipo etiológico.",
    "metadados": {
      "completo": false,
      "lacunas": [
        "proporcao_sexo",
        "variacoes_culturais"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Geralmente idade avançada; varia por subtipo",
    "trajetoria": "Varia por etiologia: degenerativa = progressão gradual; vascular = início agudo ou gradual.",
    "prognostico": "Varia conforme etiologia subjacente e comorbidades.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Dificuldades com atividades instrumentais da vida diária (AIVDs)."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Dificuldades com atividades básicas da vida diária (ABVDs)."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Totalmente dependente de cuidados."
      }
    ],
    "regra_atribuicao": "Baseada no nível de dependência funcional nas atividades da vida diária.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": true,
    "nome": "Subtipo etiológico",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "alzheimer",
        "codigo": null,
        "label": "Devido à doença de Alzheimer",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "frontotemporal",
        "codigo": null,
        "label": "Devido à degeneração lobar frontotemporal",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "corpos_lewy",
        "codigo": null,
        "label": "Com corpos de Lewy",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "vascular",
        "codigo": null,
        "label": "Vascular",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "lesao_traumatica",
        "codigo": null,
        "label": "Devido a lesão cerebral traumática",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "substancia",
        "codigo": null,
        "label": "Induzido por substância/medicamento",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "hiv",
        "codigo": null,
        "label": "Devido a infecção por HIV",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "prion",
        "codigo": null,
        "label": "Devido à doença do príon",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "parkinson",
        "codigo": null,
        "label": "Devido à doença de Parkinson",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "huntington",
        "codigo": null,
        "label": "Devido à doença de Huntington",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "outra_condicao",
        "codigo": null,
        "label": "Devido a outra condição médica",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "multiplas_etiologias",
        "codigo": null,
        "label": "Devido a múltiplas etiologias",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "nao_especificado",
        "codigo": null,
        "label": "Não especificado",
        "descricao": "",
        "sintomas_caracteristicos": []
      }
    ],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": "Subtipos etiológicos possuem critérios específicos em seções próprias do DSM-5.",
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[
    {
      "nome": "Mini-Mental State Examination",
      "sigla": "MMSE",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Montreal Cognitive Assessment",
      "sigla": "MoCA",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Avaliação neuropsicológica formal",
      "sigla": null,
      "uso": "neuropsicologico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    }
  ]
```

---

# Transtorno Neurocognitivo Vascular Maior ou Leve
**ID**: `tnc_vascular` | **Capítulo**: Transtornos Neurocognitivos | **DSM-5**: 290.40 | **CID-10**: F01.5x | **CID-11**: 6D80.1

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "0,2% (65–70a) até 16% (≥80a); 20–30% pós-AVC",
    "proporcao_sexo": "Mais em homens",
    "variacoes_culturais": "Mais prevalente em afro-americanos e países do leste asiático.",
    "notas": "Segunda causa mais comum de TNC.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Qualquer idade; aumenta exponencialmente após 65a",
    "trajetoria": "Variável: agudo com melhora parcial, gradual progressivo, ou flutuante com platôs.",
    "prognostico": "Depende de controle dos fatores de risco vascular.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Dificuldades com atividades instrumentais da vida diária (AIVDs)."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Dificuldades com atividades básicas da vida diária (ABVDs)."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Totalmente dependente de cuidados."
      }
    ],
    "regra_atribuicao": "Baseada no nível de dependência funcional nas atividades da vida diária.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": true,
    "nome": "Certeza diagnóstica",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "provavel",
        "codigo": {
          "dsm5": "290.40",
          "cid10": "F01.5x",
          "cid11": null
        },
        "label": "Provável",
        "descricao": "Com neuroimagem de lesão parenquimal significativa, relação temporal com AVC documentado, ou evidências clínicas/genéticas de doença cerebrovascular.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "possivel",
        "codigo": {
          "dsm5": "331.9",
          "cid10": "G31.9",
          "cid11": null
        },
        "label": "Possível",
        "descricao": "Critérios clínicos atendidos sem neuroimagem disponível ou relação temporal não estabelecida.",
        "sintomas_caracteristicos": []
      }
    ],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[
    {
      "nome": "Neuroimagem (TC/RM)",
      "sigla": null,
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": true,
      "fonte": "mencionado_no_dsm"
    }
  ]
```

---

# Transtorno da Personalidade Antissocial (TPA)
**ID**: `tp_antissocial` | **Capítulo**: Transtornos da Personalidade | **DSM-5**: 301.7 | **CID-10**: F60.2 | **CID-11**: 6D11

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "0,2% a 3,3%",
    "proporcao_sexo": "Muito mais comum no sexo masculino",
    "variacoes_culturais": "Maior prevalência em contextos de pobreza e urbanos.",
    "notas": "Maior prevalência em ambientes forenses e de abuso de substâncias.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Infância ou início da adolescência (conduta)",
    "trajetoria": "Crônico; pode remitir após a quarta década, especialmente comportamento criminoso.",
    "prognostico": "Remissão parcial com envelhecimento; envolvimento precoce na justiça juvenil é fator de risco.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas; prejuízo leve."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas moderados; prejuízo moderado."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas; prejuízo grave."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno da Personalidade Borderline (TPB)
**ID**: `tp_borderline` | **Capítulo**: Transtornos da Personalidade | **DSM-5**: 301.83 | **CID-10**: F60.3 | **CID-11**: 6D11.5

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "1,6% a 5,9%",
    "proporcao_sexo": "Cerca de 75% diagnosticados no sexo feminino",
    "variacoes_culturais": null,
    "notas": "Até 20% em pacientes psiquiátricos internados.",
    "metadados": {
      "completo": false,
      "lacunas": [
        "variacao_cultural"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Início da vida adulta",
    "trajetoria": "Instabilidade crônica no início; melhora gradual após os 30–50 anos.",
    "prognostico": "Metade não mais preenche critérios após ~10 anos de acompanhamento.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas; prejuízo leve."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas moderados; prejuízo moderado."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas; prejuízo grave."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[
    {
      "nome": "Zanarini Rating Scale for Borderline Personality Disorder",
      "sigla": "ZAN-BPD",
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ]
```

---

# Transtorno da Personalidade Dependente (TPD)
**ID**: `tp_dependente` | **Capítulo**: Transtornos da Personalidade | **DSM-5**: 301.6 | **CID-10**: F60.7 | **CID-11**: 6D10

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "0,49% a 0,6%",
    "proporcao_sexo": "Diagnosticado mais em mulheres em contextos clínicos; alguns estudos mostram taxas similares",
    "variacoes_culturais": "Ênfase em passividade e deferência em algumas culturas não deve ser confundida com TPD.",
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Início da vida adulta",
    "trajetoria": "Crônico; comportamento dependente pode ser apropriado ao desenvolvimento em crianças/adolescentes.",
    "prognostico": "Cautela no diagnóstico em jovens.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas; prejuízo leve."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas moderados; prejuízo moderado."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas; prejuízo grave."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno da Personalidade Esquizoide (TPE)
**ID**: `tp_esquizoide` | **Capítulo**: Transtornos da Personalidade | **DSM-5**: 301.20 | **CID-10**: F60.1 | **CID-11**: 6D10

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "3,1% a 4,9%",
    "proporcao_sexo": "Diagnosticado um pouco mais em homens",
    "variacoes_culturais": "Imigrantes podem ser incorretamente vistos como frios ou indiferentes.",
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Infância e adolescência (solidão, relacionamento ruim com colegas)",
    "trajetoria": "Crônico; pode preceder esquizofrenia.",
    "prognostico": "Funcionamento profissional pode ser adequado em isolamento social.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas; prejuízo leve."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas moderados; prejuízo moderado."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas; prejuízo grave."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno da Personalidade Esquizotípica (TPET)
**ID**: `tp_esquizotipico` | **Capítulo**: Transtornos da Personalidade | **DSM-5**: 301.22 | **CID-10**: F21 | **CID-11**: 6A22

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "0,6% a 3,9%",
    "proporcao_sexo": "Pouco mais comum no sexo masculino",
    "variacoes_culturais": "Crenças religiosas culturalmente aceitas não devem ser consideradas esquizotípicas.",
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Infância e adolescência",
    "trajetoria": "Relativamente estável; pequena parcela desenvolve esquizofrenia.",
    "prognostico": "Episódios psicóticos breves sob estresse.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas; prejuízo leve."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas moderados; prejuízo moderado."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas; prejuízo grave."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno da Personalidade Evitativa (TPEV)
**ID**: `tp_evitativo` | **Capítulo**: Transtornos da Personalidade | **DSM-5**: 301.82 | **CID-10**: F60.6 | **CID-11**: 6D10

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "2,4%",
    "proporcao_sexo": "Igualmente frequente em ambos os sexos",
    "variacoes_culturais": "Retraimento pode ser consequência de aculturação após imigração.",
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Infância (timidez, medo de estranhos)",
    "trajetoria": "Tendência a piorar na adolescência; pode remitir com o envelhecimento.",
    "prognostico": "Uso cauteloso em crianças e adolescentes, pois timidez pode ser adequada ao desenvolvimento.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas; prejuízo leve."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas moderados; prejuízo moderado."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas; prejuízo grave."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno da Personalidade Histriônica (TPH)
**ID**: `tp_histrionico` | **Capítulo**: Transtornos da Personalidade | **DSM-5**: 301.50 | **CID-10**: F60.4 | **CID-11**: 6D10

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "1,84%",
    "proporcao_sexo": "Diagnosticado mais em mulheres em contextos clínicos; taxas similares em estudos estruturados",
    "variacoes_culturais": "Normas culturais de expressão emocional e sedução devem ser consideradas.",
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Início da vida adulta",
    "trajetoria": "Crônico; busca constante de novidades e excitação.",
    "prognostico": "Dificuldade em manter relacionamentos de longo prazo.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas; prejuízo leve."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas moderados; prejuízo moderado."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas; prejuízo grave."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno da Personalidade Narcisista (TPN)
**ID**: `tp_narcisista` | **Capítulo**: Transtornos da Personalidade | **DSM-5**: 301.81 | **CID-10**: F60.81 | **CID-11**: 6D10

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "0% a 6,2%",
    "proporcao_sexo": "50 a 75% do sexo masculino entre os diagnosticados",
    "variacoes_culturais": null,
    "notas": null,
    "metadados": {
      "completo": false,
      "lacunas": [
        "variacao_cultural"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Início da vida adulta",
    "trajetoria": "Crônico; dificuldades de adaptação às limitações do envelhecimento.",
    "prognostico": "Vulnerabilidade da autoestima a críticas pode levar a retraimento ou depressão.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas; prejuízo leve."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas moderados; prejuízo moderado."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas; prejuízo grave."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno da Personalidade Obsessivo-Compulsiva (TPOC)
**ID**: `tp_obsessivo_compulsivo` | **Capítulo**: Transtornos da Personalidade | **DSM-5**: 301.4 | **CID-10**: F60.5 | **CID-11**: 6D10

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "2,1% a 7,9%",
    "proporcao_sexo": "Cerca de duas vezes mais em homens",
    "variacoes_culturais": "Culturas que enfatizam trabalho e produtividade não devem ser confundidas.",
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Início da vida adulta",
    "trajetoria": "Crônico; traços moderados podem ser adaptativos em contextos de alto desempenho.",
    "prognostico": "Dificuldade em novas situações que exijam flexibilidade.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas; prejuízo leve."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas moderados; prejuízo moderado."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas; prejuízo grave."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno da Personalidade Paranóide (TPP)
**ID**: `tp_paranoide` | **Capítulo**: Transtornos da Personalidade | **DSM-5**: 301.0 | **CID-10**: F60.0 | **CID-11**: 6D10

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "2,3% a 4,4%",
    "proporcao_sexo": "Mais comumente diagnosticado no sexo masculino (amostras clínicas)",
    "variacoes_culturais": "Comportamentos defensivos de minorias não devem ser confundidos com TPP.",
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Infância e adolescência (solidão, relacionamento ruim com colegas)",
    "trajetoria": "Crônico; pode preceder transtorno delirante ou esquizofrenia.",
    "prognostico": "Difícil convivência; episódios psicóticos breves sob estresse.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas; prejuízo leve."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas moderados; prejuízo moderado."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas; prejuízo grave."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno de Acumulação
**ID**: `transtorno_acumulacao` | **Capítulo**: Transtorno Obsessivo-Compulsivo e Transtornos Relacionados | **DSM-5**: 300.3 | **CID-10**: F42 | **CID-11**: 6B23

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "2–6% (estimativa populacao geral)",
    "proporcao_sexo": "Levemente mais frequente em homens; mulheres mais frequentemente tratam",
    "variacoes_culturais": null,
    "notas": "Prevalência aumenta com a idade.",
    "metadados": {
      "completo": false,
      "lacunas": [
        "variacao_cultural"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Sintomas observáveis na infância/adolescência; apresentação clínica ~30s-40s; piora progressiva sem tratamento",
    "trajetoria": "Crônico e progressivo; raramente remite espontaneamente.",
    "prognostico": "Resposta moderada à TCC especializada; pior prognóstico que TOC.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas; sofrimento manejável."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas e prejuízo intermediários."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas; prejuízo funcional acentuado."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno Alimentar Restritivo/Evitativo (TARE)
**ID**: `transtorno_alimentar_restritivo_evitativo` | **Capítulo**: Transtornos Alimentares | **DSM-5**: 307.59 | **CID-10**: F50.8 | **CID-11**: 6B83

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": null,
    "proporcao_sexo": "Igualmente comum em ambos os sexos na lactência e primeira infância; comórbido com TEA, é mais comum no sexo masculino.",
    "variacoes_culturais": "Não deve ser diagnosticado quando a evitação estiver relacionada unicamente a práticas religiosas ou culturais específicas.",
    "notas": "Mais comum em crianças do que em adultos; pode haver grande demora entre manifestação inicial e apresentação clínica.",
    "metadados": {
      "completo": false,
      "lacunas": [
        "epidemiologia"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Lactência ou primeira infância (evitação baseada em sensibilidade sensorial tende a surgir na primeira década).",
    "trajetoria": "A evitação/restricão baseada em aspectos sensoriais é relativamente estável e duradoura. Pode persistir na idade adulta com funcionamento relativamente normal.",
    "prognostico": "Pouca evidência associando diretamente TARE e manifestação subsequente de outro transtorno alimentar.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "nao_aplica",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno de Ansiedade de Doença (TAD)
**ID**: `transtorno_ansiedade_doenca` | **Capítulo**: Transtorno de Sintomas Somáticos e Transtornos Relacionados | **DSM-5**: 300.7 | **CID-10**: F45.21 | **CID-11**: 6B24

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "1,3–10% (estimativa em serviços de atenção primária)",
    "proporcao_sexo": "Igual entre sexos",
    "variacoes_culturais": null,
    "notas": null,
    "metadados": {
      "completo": false,
      "lacunas": [
        "variacao_cultural"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Início adulto jovem",
    "trajetoria": "Crônico sem tratamento; bom prognóstico com TCC.",
    "prognostico": "TCC focada em ansiedade de saúde é tratamento de primeira linha.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas; prejuízo leve."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas moderados; prejuízo moderado."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas; prejuízo grave."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno de Ansiedade Generalizada (TAG)
**ID**: `transtorno_ansiedade_generalizada` | **Capítulo**: Transtornos de Ansiedade | **DSM-5**: 300.02 | **CID-10**: F41.1 | **CID-11**: 6B00

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "0,9% em adolescentes; 2,9% em adultos (prevalência de 12 meses nos EUA); 0,4–3,6% internacionalmente",
    "proporcao_sexo": "2:1 mulheres:homens",
    "variacoes_culturais": "Sintomas somáticos predominam em países com menor renda; taxas menores na Ásia e África.",
    "notas": "Segundo transtorno de ansiedade mais comum em atenção primária.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Relativamente precoce, porém sintomas na vida inteira; mediana de início: ~30 anos; início mais precoce que outros transtornos",
    "trajetoria": "Crônico, com exacerbações em estresse. Pode apresentar-se de forma flutuante.",
    "prognostico": "Remissão completa incomum sem tratamento; respondem bem a TCC e farmacoterapia.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas além do mínimo; sofrimento manejável; pouco prejuízo funcional."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas, sofrimento e prejuízo funcional moderados."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas além do mínimo; sofrimento intenso; prejuízo funcional acentuado."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[
    {
      "nome": "Generalized Anxiety Disorder 7-item Scale",
      "sigla": "GAD-7",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ]
```

---

# Transtorno de Ansiedade de Separação (TAS)
**ID**: `transtorno_ansiedade_separacao` | **Capítulo**: Transtornos de Ansiedade | **DSM-5**: 309.21 | **CID-10**: F93.0 | **CID-11**: 6B05

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "4% em crianças, 1,6% em adolescentes, 0,9–1,9% em adultos (prevalência de 12 meses)",
    "proporcao_sexo": "Mais comum em mulheres na população geral",
    "variacoes_culturais": null,
    "notas": "Um dos mais prevalentes em crianças menores de 12 anos.",
    "metadados": {
      "completo": false,
      "lacunas": [
        "variacao_cultural"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Pode iniciar em qualquer idade; mais comum em crianças; média de início em adultos: final da adolescência/início da vida adulta",
    "trajetoria": "Geralmente remite com o tempo; quando persiste na vida adulta pode ser crônico e causar prejuízo significativo.",
    "prognostico": "Preditor de transtorno de pânico na vida adulta quando persistente.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas além do mínimo; sofrimento manejável; pouco prejuízo funcional."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas, sofrimento e prejuízo funcional moderados."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas além do mínimo; sofrimento intenso; prejuízo funcional acentuado."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno de Ansiedade Social (Fobia Social) (TAS)
**ID**: `transtorno_ansiedade_social` | **Capítulo**: Transtornos de Ansiedade | **DSM-5**: 300.23 | **CID-10**: F40.10 | **CID-11**: 6B04

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "7% (prevalência de 12 meses nos EUA); 2–3% em outros países",
    "proporcao_sexo": "1,5–2:1 mulheres:homens na população geral; sem diferença em amostras clínicas",
    "variacoes_culturais": "Taijin kyofusho (Japão): variante com medo de ofender os outros; taxas mais baixas em Ásia.",
    "notas": "Segundo transtorno de ansiedade mais prevalente após fobia específica.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Mediana de início: ~13 anos; raro início após 25 anos",
    "trajetoria": "Geralmente crônico sem tratamento; pode deteriorar com responsabilidades sociais crescentes.",
    "prognostico": "Boa resposta à TCC; remissão menor que em outros transtornos de ansiedade sem tratamento.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas além do mínimo; sofrimento manejável; pouco prejuízo funcional."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas, sofrimento e prejuízo funcional moderados."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas além do mínimo; sofrimento intenso; prejuízo funcional acentuado."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno Bipolar Tipo I (TB1)
**ID**: `transtorno_bipolar_tipo_1` | **Capítulo**: Transtorno Bipolar e Transtornos Relacionados | **DSM-5**: 296.40 | **CID-10**: F31.9 | **CID-11**: 6A60

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "0,6% nos EUA (estimativa de 12 meses); variando de 0,0% a 0,6% internacionalmente.",
    "proporcao_sexo": "Razão de aproximadamente 1,1:1 (sexo masculino para sexo feminino).",
    "variacoes_culturais": "Prevalência em 12 meses significativamente mais baixa para afro-caribenhos do que para afro-americanos ou brancos nos EUA.",
    "notas": "Mais comum em países com renda elevada do que com renda baixa (1,4% vs. 0,7%).",
    "metadados": {
      "completo": true,
      "lacunas": [
        "prevalencia_pediatrica_especifica"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Cerca de 18 anos",
    "trajetoria": "Mais de 90% dos indivíduos com um único episódio de mania apresentam recorrências ao longo da vida. Cerca de 60% dos episódios de mania ocorrem imediatamente antes de um episódio depressivo maior.",
    "prognostico": "Cerca de 30% mostram prejuízo profissional duradouro. Déficits cognitivos podem persistir e comprometer a funcionalidade mesmo em períodos eutímicos.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Sintomas mínimos para preencher critérios do episódio maníaco ou depressivo atual."
      },
      {
        "id": "moderado",
        "label": "Moderado",
        "descritor": "Aumento intermediário de sintomas e prejuízo funcional."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Número de sintomas excede muito o mínimo, com acentuado prejuízo funcional profissional ou social."
      }
    ],
    "regra_atribuicao": "A gravidade atual só é indicada se todos os critérios estiverem atualmente presentes para episódio maníaco ou depressivo maior. Se houver psicose, codificar como com características psicóticas independentemente da gravidade.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[
    {
      "nome": "Escala de Mania de Young",
      "sigla": "YMRS",
      "uso": "monitoramento",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Questionário de Transtornos do Humor",
      "sigla": "MDQ",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ]
```

---

# Transtorno Bipolar Tipo II (TB2)
**ID**: `transtorno_bipolar_tipo_2` | **Capítulo**: Transtorno Bipolar e Transtornos Relacionados | **DSM-5**: 296.89 | **CID-10**: F31.81 | **CID-11**: 6A61

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "0,3% internacionalmente; 0,8% nas estimativas do DSM-5 nos EUA.",
    "proporcao_sexo": "Tendência de maior prevalência de estados depressivos e ciclagens rápidas em mulheres.",
    "variacoes_culturais": "Não há informações robustas de variação cultural bem definida na literatura.",
    "notas": "A prevalência acumulada do transtorno bipolar II ao longo do tempo demonstra grande morbidade.",
    "metadados": {
      "completo": true,
      "lacunas": [
        "prevalencia_por_sexo_razao_exata"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Cerca de 25 anos",
    "trajetoria": "Geralmente se inicia com um episódio depressivo. 5-15% dos casos evoluem para Transtorno Bipolar Tipo I ao longo da vida com a manifestação de um episódio de mania.",
    "prognostico": "Não deve ser considerado mais leve que o Bipolar I. Pacientes passam longos períodos incapacitados pela cronicidade e depressão recorrente.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Sintomas mínimos para o diagnóstico e prejuízo funcional leve."
      },
      {
        "id": "moderado",
        "label": "Moderado",
        "descritor": "Prejuízo intermediário e presença de vários sintomas."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Prejuízo acentuado com sintomas muito acima do limiar."
      }
    ],
    "regra_atribuicao": "Os especificadores de gravidade de Bipolar II devem ser indicados por escrito na descrição do diagnóstico clínico, uma vez que o código DSM-5 é fixo (296.89). Indica-se o estado para o episódio atual/mais recente.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[
    {
      "nome": "Questionário de Transtornos do Humor",
      "sigla": "MDQ",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ]
```

---

# Transtorno de Compulsão Alimentar (TCA)
**ID**: `transtorno_compulsao_alimentar` | **Capítulo**: Transtornos Alimentares | **DSM-5**: 307.51 | **CID-10**: F50.8 | **CID-11**: 6B82

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "1,6% (mulheres adultas norte-americanas); 0,8% (homens adultos norte-americanos) — prevalência de 12 meses.",
    "proporcao_sexo": "Bem menos assimétrico do que na bulimia nervosa. Tão prevalente entre mulheres de minorias raciais e étnicas quanto em mulheres brancas.",
    "variacoes_culturais": "Prevalência comparável entre brancos não latinos, latinos, asiáticos e afro-americanos nos Estados Unidos.",
    "notas": "Mais prevalente entre indivíduos que buscam tratamento para emagrecer do que na população em geral.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Adolescência ou idade adulta jovem; pode ter início posterior na idade adulta.",
    "trajetoria": "Relativamente persistente. O curso é comparável à bulimia nervosa em termos de gravidade e duração. Taxas de remissão maiores do que para bulimia ou anorexia.",
    "prognostico": "Mudança diagnóstica de TCA para outros transtornos alimentares é incomum.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "1 a 3 episódios de compulsão alimentar por semana."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "4 a 7 episódios de compulsão alimentar por semana."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "8 a 13 episódios de compulsão alimentar por semana."
      },
      {
        "id": "extrema",
        "label": "Extrema",
        "descritor": "14 ou mais episódios de compulsão alimentar por semana."
      }
    ],
    "regra_atribuicao": "Baseia-se na frequência média semanal de episódios de compulsão alimentar. O nível pode ser ampliado para refletir outros sintomas e o grau de incapacidade funcional.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno de Conversão (Transtorno de Sintomas Neurológicos Funcionais)
**ID**: `transtorno_conversao` | **Capítulo**: Transtorno de Sintomas Somáticos e Transtornos Relacionados | **DSM-5**: 300.11 | **CID-10**: F44.x | **CID-11**: 6B60

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "2–5/100.000/ano (incidência estimada); comum em neurology clinics",
    "proporcao_sexo": "2–3:1 mulheres:homens",
    "variacoes_culturais": "Prevalência maior em países com renda baixa e recursos médicos limitados.",
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Mediana ~30 anos; pode ocorrer em qualquer faixa etária",
    "trajetoria": "50% remitem espontaneamente em 2 semanas; crônico em alguns.",
    "prognostico": "Intervenção neuropsiquiátrica precoce é fator prognóstico positivo.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas; prejuízo leve."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas moderados; prejuízo moderado."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas; prejuízo grave."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": true,
    "nome": "Tipo de sintoma",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "fraqueza_paralisia",
        "codigo": {
          "dsm5": "300.11",
          "cid10": "F44.4",
          "cid11": null
        },
        "label": "Com fraqueza ou paralisia",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "movimento_anormal",
        "codigo": {
          "dsm5": "300.11",
          "cid10": "F44.4",
          "cid11": null
        },
        "label": "Com movimento anormal",
        "descricao": "Tremor, mioclonia, discinesia, gait disorder.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "crises_nao_epilepticas",
        "codigo": {
          "dsm5": "300.11",
          "cid10": "F44.5",
          "cid11": null
        },
        "label": "Com crises ou convulsões",
        "descricao": "Crises não epilépticas funcionais.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "anestesia_sensorial",
        "codigo": {
          "dsm5": "300.11",
          "cid10": "F44.6",
          "cid11": null
        },
        "label": "Com anestesia ou perda sensorial",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "sintomas_sensoriais_especiais",
        "codigo": {
          "dsm5": "300.11",
          "cid10": "F44.6",
          "cid11": null
        },
        "label": "Com sintoma sensorial especial",
        "descricao": "Visual, olfatório, auditivo.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "sintomas_mistos",
        "codigo": {
          "dsm5": "300.11",
          "cid10": "F44.7",
          "cid11": null
        },
        "label": "Com sintomas mistos",
        "descricao": "",
        "sintomas_caracteristicos": []
      }
    ],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno de Déficit de Atenção/Hiperatividade (TDAH)
**ID**: `transtorno_deficit_atencao_hiperatividade` | **Capítulo**: Transtornos do Neurodesenvolvimento | **DSM-5**: 314.01 | **CID-10**: F90.2 | **CID-11**: 6A05

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "Aproximadamente 5% das crianças e 2,5% dos adultos na maioria das culturas.",
    "proporcao_sexo": "Mais comum em indivíduos do sexo masculino, com uma proporção de cerca de 2:1 em crianças e 1,6:1 em adultos.",
    "variacoes_culturais": null,
    "notas": "Prevalência constante entre diferentes países e culturas se aplicados os mesmos critérios diagnósticos estritos.",
    "metadados": {
      "completo": true,
      "lacunas": [
        "prevalencia.variacoes_culturais"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Infância (antes dos 12 anos)",
    "trajetoria": "A hiperatividade física costuma declinar com a idade cronológica, transformando-se em inquietude subjetiva interna na adolescência e idade adulta, enquanto os sintomas de desatenção costumam persistir de forma crônica.",
    "prognostico": "Elevado risco de abandono acadêmico, instabilidade profissional e dificuldades de relacionamento se não tratado precocemente.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos, se algum, sintomas além daqueles necessários para o diagnóstico estão presentes, e os sintomas resultam em não mais do que prejuízos mínimos no funcionamento social ou profissional."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas ou prejuízo funcional entre 'leve' e 'grave' estão presentes."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas além daqueles necessários para o diagnóstico estão presentes, ou vários sintomas que são particularmente graves estão presentes, ou os sintomas resultam em prejuízo social, acadêmico ou profissional acentuado."
      }
    ],
    "regra_atribuicao": "Baseado no número de sintomas acima do limiar clínico e na intensidade do prejuízo funcional.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": true,
    "nome": "Apresentação Clínica",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "apresentacao_combinada",
        "codigo": {
          "dsm5": "314.01",
          "cid10": "F90.2",
          "cid11": null
        },
        "label": "Apresentação combinada",
        "descricao": "Se tanto o Critério A1 (desatenção) quanto o Critério A2 (hiperatividade-impulsividade) forem preenchidos nos últimos 6 meses.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "apresentacao_predominantemente_desatenta",
        "codigo": {
          "dsm5": "314.00",
          "cid10": "F90.0",
          "cid11": null
        },
        "label": "Apresentação predominantemente desatenta",
        "descricao": "Se o Critério A1 (desatenção) for preenchido, mas o Critério A2 (hiperatividade-impulsividade) não for preenchido nos últimos 6 meses.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "apresentacao_predominantemente_hiperativa_impulsiva",
        "codigo": {
          "dsm5": "314.01",
          "cid10": "F90.1",
          "cid11": null
        },
        "label": "Apresentação predominantemente hiperativa/impulsiva",
        "descricao": "Se o Critério A2 (hiperatividade-impulsividade) for preenchido, mas o Critério A1 (desatenção) não for preenchido nos últimos 6 meses.",
        "sintomas_caracteristicos": []
      }
    ],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[
    {
      "nome": "Questionário de Sintomas de TDAH SNAP-IV",
      "sigla": "SNAP-IV",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Escala de TDAH para Adultos ASRS-v1.1",
      "sigla": "ASRS-v1.1",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ]
```

---

# Transtorno Delirante
**ID**: `transtorno_delirante` | **Capítulo**: Espectro da Esquizofrenia e Outros Transtornos Psicóticos | **DSM-5**: 297.1 | **CID-10**: F22 | **CID-11**: 6A24

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "Aproximadamente 0,2% ao longo da vida.",
    "proporcao_sexo": "Sem grandes diferenças de gênero na frequência geral, embora o subtipo ciumento seja provavelmente mais comum em indivíduos do sexo masculino.",
    "variacoes_culturais": "Antecedentes culturais e religiosos individuais devem ser levados em conta na avaliação; o conteúdo dos delírios varia conforme os contextos culturais.",
    "notas": "O subtipo mais frequente é o persecutório. A condição pode ser mais prevalente em indivíduos mais velhos.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Idade adulta ou mais tardia",
    "trajetoria": "O diagnóstico costuma ser estável, embora uma parte dos indivíduos possa evoluir no sentido de desenvolver esquizofrenia. A função global é geralmente melhor que a observada na esquizofrenia.",
    "prognostico": "Costuma apresentar prejuízo funcional mais circunscrito do que outros transtornos psicóticos, permitindo funcionamento social e profissional aceitável fora das discussões delirantes.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "dimensional_psicose",
    "sintomas_avaliados": [
      "delirios",
      "alucinacoes",
      "discurso_desorganizado",
      "comportamento_psicomotor_anormal",
      "sintomas_negativos"
    ],
    "escala": {
      "min": 0,
      "max": 4,
      "labels": [
        "Ausente",
        "Equívoco",
        "Leve",
        "Moderado",
        "Grave"
      ]
    },
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": true,
    "nome": "Subtipo de delírio predominante",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "erotomanico",
        "codigo": {
          "dsm5": "297.1",
          "cid10": "F22",
          "cid11": null
        },
        "label": "Tipo Erotomaníaco",
        "descricao": "Aplica-se quando o tema central do delírio é que outra pessoa está apaixonada pelo indivíduo.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "grandioso",
        "codigo": {
          "dsm5": "297.1",
          "cid10": "F22",
          "cid11": null
        },
        "label": "Tipo Grandioso",
        "descricao": "Aplica-se quando o tema central do delírio é a convicção de ter algum grande talento ou insight (embora não reconhecido) ou de ter feito alguma descoberta importante.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "ciumento",
        "codigo": {
          "dsm5": "297.1",
          "cid10": "F22",
          "cid11": null
        },
        "label": "Tipo Ciumento",
        "descricao": "Aplica-se quando o tema central do delírio do indivíduo é de que seu cônjuge ou parceiro é infiel.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "persecutorio",
        "codigo": {
          "dsm5": "297.1",
          "cid10": "F22",
          "cid11": null
        },
        "label": "Tipo Persecutório",
        "descricao": "Aplica-se quando o tema central do delírio envolve a crença do indivíduo de que está sendo alvo de conspiração, enganado, espiado, seguido, envenenado ou drogado, difamado de forma maliciosa, assediado ou obstruído na busca de metas de longo prazo.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "somatico",
        "codigo": {
          "dsm5": "297.1",
          "cid10": "F22",
          "cid11": null
        },
        "label": "Tipo Somático",
        "descricao": "Aplica-se quando o tema central do delírio envolve funções ou sensações corporais.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "misto",
        "codigo": {
          "dsm5": "297.1",
          "cid10": "F22",
          "cid11": null
        },
        "label": "Tipo Misto",
        "descricao": "Aplica-se quando nenhum tema delirante predomina.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "nao_especificado",
        "codigo": {
          "dsm5": "297.1",
          "cid10": "F22",
          "cid11": null
        },
        "label": "Tipo Não Especificado",
        "descricao": "Aplica-se quando a crença delirante dominante não pode ser determinada com clareza ou não é descrita nos tipos específicos.",
        "sintomas_caracteristicos": []
      }
    ],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno Depressivo Maior (TDM)
**ID**: `transtorno_depressivo_maior` | **Capítulo**: Transtornos Depressivos | **DSM-5**: 296.21 | **CID-10**: F32.0 | **CID-11**: 6A70

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "Aproximadamente 7% (prevalência de 12 meses nos EUA); prevalência em 18-29 anos é 3x maior que em indivíduos acima de 60 anos",
    "proporcao_sexo": "1,5 a 3x mais em mulheres que em homens; disparidade inicia na adolescência",
    "variacoes_culturais": "Diferenças de até 7x nas taxas entre culturas; sintomas somáticos como queixa predominante em muitas culturas; insônia e perda de energia mais uniformemente relatados",
    "notas": "Alta mortalidade associada, em boa parte pelo suicídio. Indivíduos deprimidos em asilos têm probabilidade aumentada de morte no primeiro ano.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Pico na década dos 20 anos; pode surgir em qualquer idade; probabilidade aumenta sensivelmente com a puberdade",
    "trajetoria": "Curso bastante variável. Recuperação começa em 3 meses em 2/5 dos casos; em 1 ano em 4/5. Risco de recorrência aumenta progressivamente com número de episódios. Possível transição para bipolar, especialmente em início na adolescência ou com características psicóticas.",
    "prognostico": "Cronicidade aumenta probabilidade de transtornos de personalidade, ansiedade e abuso de substância. Tempos médios de recuperação estáveis por longos períodos.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Sintomas mínimos para preencher critérios; sofrimento manejável; pouco prejuízo funcional."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Número de sintomas, intensidade e/ou prejuízo funcional entre leve e grave."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Número de sintomas substancialmente acima do mínimo; sofrimento intenso não manejável; interferência acentuada no funcionamento."
      }
    ],
    "regra_atribuicao": "Baseada no número de sintomas dos critérios, na sua gravidade e no grau de incapacitação funcional.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": true,
    "nome": "Episodicidade",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "episodio_unico",
        "codigo": {
          "dsm5": "296.2x",
          "cid10": "F32.x",
          "cid11": null
        },
        "label": "Episódio único",
        "descricao": "Primeiro episódio depressivo maior na vida do indivíduo.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "episodio_recorrente",
        "codigo": {
          "dsm5": "296.3x",
          "cid10": "F33.x",
          "cid11": null
        },
        "label": "Episódio recorrente",
        "descricao": "Dois ou mais episódios com intervalo de pelo menos 2 meses entre eles sem critérios para EDM.",
        "sintomas_caracteristicos": []
      }
    ],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno Depressivo Persistente (Distimia) (TDP)
**ID**: `transtorno_depressivo_persistente` | **Capítulo**: Transtornos Depressivos | **DSM-5**: 300.4 | **CID-10**: F34.1 | **CID-11**: 6A71

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "0,5% para TDP e 1,5% para TDM crônico (prevalência de 12 meses nos EUA)",
    "proporcao_sexo": null,
    "variacoes_culturais": null,
    "notas": "Consolidação do transtorno distímico e TDM crônico do DSM-IV.",
    "metadados": {
      "completo": false,
      "lacunas": [
        "proporcao_sexo",
        "variacao_cultural",
        "prevalencia_global"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Frequentemente início precoce e insidioso (infância, adolescência ou início da vida adulta)",
    "trajetoria": "Curso crônico por definição. Quando sintomas aumentam ao nível de EDM, provavelmente retornarão ao nível inferior. Sintomas depressivos têm menos probabilidade de desaparecer em determinado período que no TDM.",
    "prognostico": "Início precoce (<21 anos) associado a maior probabilidade de transtornos de personalidade e por uso de substâncias. Efeitos funcionais podem ser iguais ou maiores que no TDM.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Sintomas mínimos para preencher critérios; sofrimento manejável; pouco prejuízo funcional."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Número de sintomas, intensidade e/ou prejuízo funcional entre leve e grave."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Número de sintomas substancialmente acima do mínimo; sofrimento intenso não manejável; interferência acentuada no funcionamento."
      }
    ],
    "regra_atribuicao": "Baseada no número de sintomas dos critérios, na sua gravidade e no grau de incapacitação funcional.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": true,
    "nome": "Padrão nos últimos 2 anos",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "tdp_sindrome_distimica_pura",
        "codigo": {
          "dsm5": "300.4",
          "cid10": "F34.1",
          "cid11": null
        },
        "label": "Com síndrome distímica pura",
        "descricao": "Não satisfeitos critérios para EDM pelos últimos 2 anos.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "tdp_edm_persistente",
        "codigo": {
          "dsm5": "300.4",
          "cid10": "F34.1",
          "cid11": null
        },
        "label": "Com episódio depressivo maior persistente",
        "descricao": "Critérios para EDM satisfeitos durante todo o período dos últimos 2 anos.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "tdp_edm_intermitente_com_atual",
        "codigo": {
          "dsm5": "300.4",
          "cid10": "F34.1",
          "cid11": null
        },
        "label": "Com EDM intermitentes, com episódio atual",
        "descricao": "Critérios atuais para EDM satisfeitos; houve períodos ≥8 sem. abaixo do limiar nos 2 anos anteriores.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "tdp_edm_intermitente_sem_atual",
        "codigo": {
          "dsm5": "300.4",
          "cid10": "F34.1",
          "cid11": null
        },
        "label": "Com EDM intermitentes, sem episódio atual",
        "descricao": "Critérios atuais para EDM não satisfeitos; houve ≥1 EDM nos 2 anos anteriores.",
        "sintomas_caracteristicos": []
      }
    ],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno Dismórfico Corporal (TDC)
**ID**: `transtorno_dismorfico_corporal` | **Capítulo**: Transtorno Obsessivo-Compulsivo e Transtornos Relacionados | **DSM-5**: 300.7 | **CID-10**: F45.22 | **CID-11**: 6B21

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "2,4% em adultos (EUA); maior em pacientes de dermatologia e cirurgia estética",
    "proporcao_sexo": "Levemente mais comum em mulheres na população geral",
    "variacoes_culturais": null,
    "notas": "Taxas de ideação suicida extremamente elevadas.",
    "metadados": {
      "completo": false,
      "lacunas": [
        "variacao_cultural"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Mediana ~16–17 anos; frequentemente início gradual",
    "trajetoria": "Geralmente crônico sem tratamento; alta taxa de hospitalizações e tentativas de suicídio.",
    "prognostico": "Responde a ISRSs em doses altas e TCC adaptada.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas; sofrimento manejável."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas e prejuízo intermediários."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas; prejuízo funcional acentuado."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno Disruptivo da Desregulação do Humor (TDDH)
**ID**: `transtorno_disruptivo_desregulacao_humor` | **Capítulo**: Transtornos Depressivos | **DSM-5**: 296.99 | **CID-10**: F34.8 | **CID-11**: 6A83

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "2 a 5% entre crianças e adolescentes na comunidade (estimativa de 6 meses a 1 ano)",
    "proporcao_sexo": "Predominantemente masculino em amostras clínicas e comunitárias",
    "variacoes_culturais": null,
    "notas": "Estimativas baseadas em critério de irritabilidade persistente crônica e grave. Taxas mais elevadas em crianças do sexo masculino e em idade escolar.",
    "metadados": {
      "completo": false,
      "lacunas": [
        "prevalencia_ponto_precisa",
        "variacao_cultural"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Antes dos 10 anos (critério obrigatório); diagnóstico entre 7-18 anos",
    "trajetoria": "Aproximadamente 50% das crianças com irritabilidade grave satisfarão critérios 1 ano depois. Baixas taxas de conversão para transtorno bipolar. Crianças com irritabilidade crônica têm risco aumentado de transtornos depressivos unipolares e/ou ansiedade na idade adulta.",
    "prognostico": "Transtorno bipolar é mais comum antes da adolescência (<1%); TDDH tende a diminuir com a transição para a vida adulta.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Explosões e irritabilidade presentes mas com impacto moderado em um contexto."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Comprometimento em dois contextos."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Comprometimento grave em dois ou mais contextos com hospitalização ou comportamento de risco."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": false,
      "lacunas": [
        "regra_gravidade_especifica"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno do Espectro Autista (TEA)
**ID**: `transtorno_do_espectro_autista` | **Capítulo**: Transtornos do Neurodesenvolvimento | **DSM-5**: 299.00 | **CID-10**: F84.0 | **CID-11**: 6A02

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "Estima-se em cerca de 1% a 2% da população, com taxas de diagnóstico crescentes nas últimas décadas devido a maior conscientização e mudanças de critérios.",
    "proporcao_sexo": "Razão de aproximadamente 4:1 a favor do sexo masculino.",
    "variacoes_culturais": null,
    "notas": "As taxas de prevalência parecem ser semelhantes entre diferentes culturas e raças.",
    "metadados": {
      "completo": true,
      "lacunas": [
        "prevalencia.variacoes_culturais"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Antes dos 2 anos de idade (embora sintomas sutis possam ser vistos no primeiro ano de vida)",
    "trajetoria": "Os sintomas costumam ser contínuos e persistentes ao longo da vida, embora intervenções comportamentais precoces e intensivas alterem positivamente a trajetória funcional.",
    "prognostico": "Altamente dependente da presença de deficiência intelectual e da capacidade de comunicação verbal funcional até os 5 anos de idade.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "nivel_1",
        "label": "Nível 1 (Exigindo Apoio)",
        "descritor": "Comunicação social: apresenta dificuldades para iniciar interações e respostas atípicas. Comportamento repetitivo: inflexibilidade causa interferência significativa em um ou mais contextos."
      },
      {
        "id": "nivel_2",
        "label": "Nível 2 (Exigindo Apoio Substancial)",
        "descritor": "Comunicação social: déficits marcantes nas habilidades de comunicação social verbal e não verbal. Comportamento repetitivo: inflexibilidade aparente a observadores casuais e interfere na rotina em múltiplos contextos."
      },
      {
        "id": "nivel_3",
        "label": "Nível 3 (Exigindo Apoio Muito Substancial)",
        "descritor": "Comunicação social: déficits graves na comunicação social verbal e não verbal causam prejuízos graves no funcionamento. Comportamento repetitivo: inflexibilidade de comportamento obstrui gravemente o funcionamento em todas as esferas."
      }
    ],
    "regra_atribuicao": "A gravidade deve ser registrada individualmente para o domínio da comunicação social (Critério A) e para os comportamentos repetitivos (Critério B), variando do Nível 1 ao Nível 3.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": false,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[
    {
      "nome": "Escala de Observação para o Diagnóstico do Autismo",
      "sigla": "ADOS-2",
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Entrevista de Diagnóstico de Autismo Revisada",
      "sigla": "ADI-R",
      "uso": "informante",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ]
```

---

# Transtorno de Escoriação (Skin-Picking)
**ID**: `transtorno_escoriacao` | **Capítulo**: Transtorno Obsessivo-Compulsivo e Transtornos Relacionados | **DSM-5**: 698.4 | **CID-10**: L98.1 | **CID-11**: 6B26

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "1,4% (estimativa adultos)",
    "proporcao_sexo": "Mais comum em mulheres (~75%)",
    "variacoes_culturais": null,
    "notas": null,
    "metadados": {
      "completo": false,
      "lacunas": [
        "variacao_cultural"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Bimodal: ~10 anos e início na adolescência/adulto jovem",
    "trajetoria": "Crônico; pode flutuar com estresse.",
    "prognostico": "Habit Reversal Training eficaz; N-acetilcisteína como adjuvante.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas; sofrimento manejável."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas e prejuízo intermediários."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas; prejuízo funcional acentuado."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno Específico da Aprendizagem
**ID**: `transtorno_especifico_aprendizagem` | **Capítulo**: Transtornos do Neurodesenvolvimento | **DSM-5**: 315.00 | **CID-10**: F81.0 | **CID-11**: 6A03

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "5% a 15% entre crianças em idade escolar e aproximadamente 4% em adultos.",
    "proporcao_sexo": "Mais comum em indivíduos do sexo masculino.",
    "variacoes_culturais": null,
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [
        "prevalencia.variacoes_culturais"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Anos escolares (frequentemente 6 a 8 anos)",
    "trajetoria": "Persiste até a idade adulta com dificuldades na velocidade de leitura, escrita acadêmica ou cálculos práticos, embora estratégias adaptativas amenizem o impacto prático.",
    "prognostico": "Altamente dependente de diagnóstico precoce e intervenção psicopedagógica intensiva.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Algumas dificuldades nas habilidades de aprendizagem em um ou dois domínios acadêmicos, mas compensáveis com apoio adequado."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Dificuldades acentuadas em um ou mais domínios acadêmicos. Improvável eficácia sem apoio especializado contínuo."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Dificuldades graves que afetam vários domínios acadêmicos. O indivíduo necessita de apoio individualizado constante ao longo dos anos escolares."
      }
    ],
    "regra_atribuicao": "Baseada no número de domínios afetados e no nível de adaptação/suporte compensatório exigido.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": false,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno Esquizoafetivo
**ID**: `transtorno_esquizoafetivo` | **Capítulo**: Espectro da Esquizofrenia e Outros Transtornos Psicóticos | **DSM-5**: 295.70 | **CID-10**: F25.9 | **CID-11**: 6A21

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "Aproximadamente 0,3% ao longo da vida.",
    "proporcao_sexo": "Mais comum em indivíduos do sexo feminino, impulsionado pelo tipo depressivo.",
    "variacoes_culturais": null,
    "notas": "O risco de suicídio ao longo da vida é de 5%, similar ao da esquizofrenia.",
    "metadados": {
      "completo": true,
      "lacunas": [
        "prevalencia.variacoes_culturais"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Início no jovem adulto",
    "trajetoria": "A proporção relativa de sintomas de humor e psicose pode mudar ao longo do tempo. O prognóstico é ligeiramente melhor que o da esquizofrenia, mas geralmente pior que o de transtornos de humor isolados.",
    "prognostico": "O prejuízo ocupacional e social é frequente, necessitando intervenção de longo prazo.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "dimensional_psicose",
    "sintomas_avaliados": [
      "delirios",
      "alucinacoes",
      "discurso_desorganizado",
      "comportamento_psicomotor_anormal",
      "sintomas_negativos"
    ],
    "escala": {
      "min": 0,
      "max": 4,
      "labels": [
        "Ausente",
        "Equívoco",
        "Leve",
        "Moderado",
        "Grave"
      ]
    },
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": true,
    "nome": "Subtipo baseado no episódio de humor",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "tipo_bipolar",
        "codigo": {
          "dsm5": "295.70",
          "cid10": "F25.0",
          "cid11": null
        },
        "label": "Tipo Bipolar",
        "descricao": "Aplica-se se um episódio maníaco faz parte da apresentação. Episódios depressivos maiores também podem ocorrer.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "tipo_depressivo",
        "codigo": {
          "dsm5": "295.70",
          "cid10": "F25.1",
          "cid11": null
        },
        "label": "Tipo Depressivo",
        "descricao": "Aplica-se se apenas episódios depressivos maiores fazem parte da apresentação.",
        "sintomas_caracteristicos": []
      }
    ],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno Esquizofreniforme
**ID**: `transtorno_esquizofreniforme` | **Capítulo**: Espectro da Esquizofrenia e Outros Transtornos Psicóticos | **DSM-5**: 295.40 | **CID-10**: F20.81 | **CID-11**: 6A23

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "A incidência é cerca de cinco vezes menor que a da esquizofrenia em países desenvolvidos.",
    "proporcao_sexo": "Incidência similar entre os sexos.",
    "variacoes_culturais": null,
    "notas": "Aproximadamente um terço dos indivíduos recupera-se em até 6 meses, mantendo o diagnóstico de esquizofreniforme; os dois terços restantes evoluem para esquizofrenia ou esquizoafetivo.",
    "metadados": {
      "completo": true,
      "lacunas": [
        "prevalencia.variacoes_culturais"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Início da idade adulta",
    "trajetoria": "O curso do transtorno esquizofreniforme é intermediário em termos de duração. Cerca de 60-80% dos diagnósticos provisórios acabam evoluindo para esquizofrenia ao longo de 6 meses.",
    "prognostico": "Depende muito das características de bom prognóstico. Se presentes, a recuperação total é significativamente mais provável.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "dimensional_psicose",
    "sintomas_avaliados": [
      "delirios",
      "alucinacoes",
      "discurso_desorganizado",
      "comportamento_psicomotor_anormal",
      "sintomas_negativos"
    ],
    "escala": {
      "min": 0,
      "max": 4,
      "labels": [
        "Ausente",
        "Equívoco",
        "Leve",
        "Moderado",
        "Grave"
      ]
    },
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno de Insônia
**ID**: `transtorno_insonia` | **Capítulo**: Transtornos do Sono-Vigília | **DSM-5**: 307.42 | **CID-10**: F51.01 | **CID-11**: 7A00

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "6–10% atendem critérios do transtorno; 10–15% com prejuízos diurnos; ~1/3 com sintomas.",
    "proporcao_sexo": "1,44:1 F:M",
    "variacoes_culturais": null,
    "notas": "Mais prevalente em mulheres e idosos.",
    "metadados": {
      "completo": false,
      "lacunas": [
        "variacao_cultural"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Adultos jovens; também menopausa e idade avançada",
    "trajetoria": "Pode ser ocasional, persistente ou recorrente. Taxas de cronicidade 45–75% em 1–7 anos.",
    "prognostico": "Melhor com terapia cognitivo-comportamental do sono (TCC-I).",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas; prejuízo leve."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas moderados; prejuízo moderado."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas; prejuízo grave."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[
    {
      "nome": "Polissonografia",
      "sigla": "PSG",
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    },
    {
      "nome": "Diário do Sono",
      "sigla": null,
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    },
    {
      "nome": "Actigrafia",
      "sigla": null,
      "uso": "monitoramento",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    }
  ]
```

---

# Transtorno da Linguagem
**ID**: `transtorno_linguagem` | **Capítulo**: Transtornos do Neurodesenvolvimento | **DSM-5**: 315.32 | **CID-10**: F80.2 | **CID-11**: 6A01

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "Ocorre em aproximadamente 7% a 8% das crianças em idade escolar.",
    "proporcao_sexo": "Mais frequente em meninos.",
    "variacoes_culturais": null,
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [
        "prevalencia.variacoes_culturais"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "4 anos (onde o diagnóstico se torna estável)",
    "trajetoria": "Crianças com atrasos puramente expressivos têm melhor prognóstico que aquelas com atrasos mistos (receptivo-expressivos).",
    "prognostico": "Dificuldades que persistem após os 4 anos tendem a ser crônicas na vida adulta.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "nao_aplica",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": false,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno Obsessivo-Compulsivo (TOC)
**ID**: `transtorno_obsessivo_compulsivo` | **Capítulo**: Transtorno Obsessivo-Compulsivo e Transtornos Relacionados | **DSM-5**: 300.3 | **CID-10**: F42 | **CID-11**: 6B20

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "1,2% (prevalência de 12 meses)",
    "proporcao_sexo": "Levemente mais comum em mulheres adultas; mais em meninos na infância",
    "variacoes_culturais": "Sintomas similares cross-culturalmente; conteúdo das obsessões pode variar.",
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Pico bimodal: 9–10 anos (meninos) e início na adolescência/adulto jovem (mulheres); mediana geral ~19–20 anos",
    "trajetoria": "Geralmente crônico com flutuações; 15% curso deteriorante; 5% episódico.",
    "prognostico": "Boa resposta a TCC com exposição e resposta (ERPrev) e ISRSs.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas; sofrimento manejável."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas e prejuízo intermediários."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas; prejuízo funcional acentuado."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[
    {
      "nome": "Yale-Brown Obsessive Compulsive Scale",
      "sigla": "Y-BOCS",
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ]
```

---

# Transtorno de Pânico (TP)
**ID**: `transtorno_panico` | **Capítulo**: Transtornos de Ansiedade | **DSM-5**: 300.01 | **CID-10**: F41.0 | **CID-11**: 6B01

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "2–3% (prevalência de 12 meses em adultos e adolescentes nos EUA e Europa)",
    "proporcao_sexo": "2:1 mulheres:homens",
    "variacoes_culturais": "Ataque de pânico pode apresentar-se como khyâl cap (cultura cambojana) ou ataque de nervios (latino). Prevalência menor em africanos americanos, asiáticos americanos, latinos.",
    "notas": "Prevalência de ataques de pânico (isolados) é ~11%/ano; critérios plenos do TP não atingidos na maioria.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Adulto jovem; pico 20–24 anos; raro antes dos 14 e após os 45",
    "trajetoria": "Geralmente crônico com flutuações. Episódio mais grave raramente excede 1 ano isoladamente.",
    "prognostico": "Variável; prognóstico pior associado a esquiva fóbica marcada, depressão comórbida.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas além do mínimo; sofrimento manejável; pouco prejuízo funcional."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas, sofrimento e prejuízo funcional moderados."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas além do mínimo; sofrimento intenso; prejuízo funcional acentuado."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno por Uso de Álcool
**ID**: `transtorno_por_uso_de_alcool` | **Capítulo**: Transtornos Relacionados a Substâncias e Transtornos Aditivos | **DSM-5**: 303.90 | **CID-10**: F10.20 | **CID-11**: 6C40

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "4,6% (12-17a); 8,5% adultos ≥18a",
    "proporcao_sexo": "12,4% homens vs 4,9% mulheres adultos",
    "variacoes_culturais": "Maior entre índios norte-americanos (12,1%)",
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Fim da adolescência / 20-25 anos",
    "trajetoria": "Curso variável com períodos de remissão e recaídas. Primeira intoxicação na adolescência.",
    "prognostico": "Prognóstico promissor para a maioria; casos graves representam parcela minoritária.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Presença de 2 ou 3 sintomas."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Presença de 4 ou 5 sintomas."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Presença de 6 ou mais sintomas."
      }
    ],
    "regra_atribuicao": "Baseada na quantidade de critérios preenchidos no cluster A.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[
    {
      "nome": "AUDIT",
      "sigla": "AUDIT",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ]
```

---

# Transtorno por Uso de Estimulantes
**ID**: `transtorno_por_uso_de_estimulantes` | **Capítulo**: Transtornos Relacionados a Substâncias e Transtornos Aditivos | **DSM-5**: 304.40 | **CID-10**: F15.20 | **CID-11**: 6C42

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "Anfetamina: 0,2% (12-17a e adultos); Cocaína: 0,2% (12-17a), 0,3% adultos.",
    "proporcao_sexo": "Cocaína: mais em homens (0,4% vs 0,1% adultos).",
    "variacoes_culturais": null,
    "notas": null,
    "metadados": {
      "completo": false,
      "lacunas": [
        "variacoes_culturais"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "12-25 anos",
    "trajetoria": "Progressão rápida com uso fumado/intravenoso; gradual com uso intranasal/oral.",
    "prognostico": "Reservado para uso crônico; depressão/ideação suicida durante abstinência.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Presença de 2 ou 3 sintomas."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Presença de 4 ou 5 sintomas."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Presença de 6 ou mais sintomas."
      }
    ],
    "regra_atribuicao": "Baseada na quantidade de critérios preenchidos no cluster A.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtorno por Uso de Opioides
**ID**: `transtorno_por_uso_de_opioides` | **Capítulo**: Transtornos Relacionados a Substâncias e Transtornos Aditivos | **DSM-5**: 304.00 | **CID-10**: F11.20 | **CID-11**: 6C41

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "0,37% adultos ≥18a; ~1% (12-17a) para analgésicos.",
    "proporcao_sexo": "1,5:1 homens:mulheres (analgesicos); 3:1 com heroína.",
    "variacoes_culturais": "Maior entre índios norte-americanos (1,25%).",
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Fim da adolescência / início dos 20 anos",
    "trajetoria": "Curso crônico com recaídas frequentes após tratamento.",
    "prognostico": "20-30% alcançam abstinência duradoura; mortalidade 1,5-2%/ano.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Presença de 2 ou 3 sintomas."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Presença de 4 ou 5 sintomas."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Presença de 6 ou mais sintomas."
      }
    ],
    "regra_atribuicao": "Baseada na quantidade de critérios preenchidos no cluster A.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[
    {
      "nome": "Exame toxicológico de urina",
      "sigla": null,
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    }
  ]
```

---

# Transtorno por Uso de Tabaco
**ID**: `transtorno_por_uso_de_tabaco` | **Capítulo**: Transtornos Relacionados a Substâncias e Transtornos Aditivos | **DSM-5**: 305.1 | **CID-10**: F17.200 | **CID-11**: 6C4A

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "~13% adultos ≥18a (dependência de nicotina DSM-IV); ~21% fumantes atuais.",
    "proporcao_sexo": "14% homens vs 12% mulheres adultos.",
    "variacoes_culturais": "Maior em índios norte-americanos (23%); maior em países em desenvolvimento.",
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Adolescência; início após 21 anos é raro.",
    "trajetoria": ">80% tentam parar; 60% recaem em uma semana; metade alcança abstinência.",
    "prognostico": "50% dos que não param morrem prematuramente de doenças relacionadas ao tabaco.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Presença de 2 ou 3 sintomas."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Presença de 4 ou 5 sintomas."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Presença de 6 ou mais sintomas."
      }
    ],
    "regra_atribuicao": "Baseada na quantidade de critérios preenchidos no cluster A.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[
    {
      "nome": "Monóxido de carbono no ar expirado",
      "sigla": null,
      "uso": "monitoramento",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    },
    {
      "nome": "Cotinina no sangue/saliva/urina",
      "sigla": null,
      "uso": "monitoramento",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    }
  ]
```

---

# Transtorno Psicótico Breve (TPB)
**ID**: `transtorno_psicotico_breve` | **Capítulo**: Espectro da Esquizofrenia e Outros Transtornos Psicóticos | **DSM-5**: 298.8 | **CID-10**: F23 | **CID-11**: 6A23.0

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "Pode responder por 9% dos casos de primeiro surto psicótico nos EUA.",
    "proporcao_sexo": "Duas vezes mais comum em indivíduos do sexo feminino do que no masculino.",
    "variacoes_culturais": null,
    "notas": "A idade média de início é de cerca de 30 anos.",
    "metadados": {
      "completo": true,
      "lacunas": [
        "prevalencia.variacoes_culturais"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Cerca de 30 anos",
    "trajetoria": "O início dos sintomas é tipicamente súbito, ocorrendo uma mudança de um estado não psicótico para psicótico dentro do intervalo de duas semanas. O retorno ao nível funcional anterior é completo.",
    "prognostico": "Excelente prognóstico em termos de recuperação total, embora haja risco significativo de comportamento autolesivo e suicídio durante o período agudo.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "dimensional_psicose",
    "sintomas_avaliados": [
      "delirios",
      "alucinacoes",
      "discurso_desorganizado",
      "comportamento_psicomotor_anormal",
      "sintomas_negativos"
    ],
    "escala": {
      "min": 0,
      "max": 4,
      "labels": [
        "Ausente",
        "Equívoco",
        "Leve",
        "Moderado",
        "Grave"
      ]
    },
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Transtornos de Adaptação
**ID**: `transtornos_adaptacao` | **Capítulo**: Transtornos Relacionados a Trauma e a Estressores | **DSM-5**: 309.0 | **CID-10**: F43.20 | **CID-11**: 6B43

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "5–20% em amostras ambulatoriais de saúde mental; 50% em serviços médicos",
    "proporcao_sexo": "2:1 mulheres:homens",
    "variacoes_culturais": null,
    "notas": null,
    "metadados": {
      "completo": false,
      "lacunas": [
        "variacao_cultural"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Dentro de 3 meses do estressor; qualquer idade",
    "trajetoria": "Geralmente remite quando estressor cessa; crônico se estressor persistir.",
    "prognostico": "Bom com intervenção breve focada no problema.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas; sofrimento manejável."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas e prejuízo intermediários."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas; prejuízo funcional acentuado."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": true,
    "nome": "Subtipo clínico",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "humor_deprimido",
        "codigo": {
          "dsm5": "309.0",
          "cid10": "F43.21",
          "cid11": null
        },
        "label": "Com humor deprimido",
        "descricao": "Baixo astral, choro e sentimentos de desesperança predominam.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "ansiedade",
        "codigo": {
          "dsm5": "309.24",
          "cid10": "F43.22",
          "cid11": null
        },
        "label": "Com ansiedade",
        "descricao": "Nervosismo, preocupação, agitação ou ansiedade de separação predominam.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "misto_depressivo_ansioso",
        "codigo": {
          "dsm5": "309.28",
          "cid10": "F43.23",
          "cid11": null
        },
        "label": "Com humor deprimido e ansiedade mistos",
        "descricao": "Combinação de depressão e ansiedade predomina.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "perturbacao_conduta",
        "codigo": {
          "dsm5": "309.3",
          "cid10": "F43.24",
          "cid11": null
        },
        "label": "Com perturbação de conduta",
        "descricao": "Perturbação de conduta predomina.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "misto_emocoes_conduta",
        "codigo": {
          "dsm5": "309.4",
          "cid10": "F43.25",
          "cid11": null
        },
        "label": "Com perturbação mista de emoções e conduta",
        "descricao": "Sintomas emocionais e de conduta.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "nao_especificado",
        "codigo": {
          "dsm5": "309.9",
          "cid10": "F43.20",
          "cid11": null
        },
        "label": "Não especificado",
        "descricao": "Reações mal adaptativas não classificáveis em outros subtipos.",
        "sintomas_caracteristicos": []
      }
    ],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---

# Tricotilomania (Transtorno de Arrancar o Cabelo)
**ID**: `tricotilomania` | **Capítulo**: Transtorno Obsessivo-Compulsivo e Transtornos Relacionados | **DSM-5**: 312.39 | **CID-10**: F63.3 | **CID-11**: 6B25

## 📊 Prevalência & Epidemiologia
```json
{
    "populacao_geral": "1–2% (prevalência de 12 meses)",
    "proporcao_sexo": "10:1 mulheres:homens em amostras clínicas; mais equilibrado na infância",
    "variacoes_culturais": null,
    "notas": null,
    "metadados": {
      "completo": false,
      "lacunas": [
        "variacao_cultural"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## ⏳ Curso & Desenvolvimento
```json
{
    "idade_inicio_tipica": "Pico na pré-adolescência (~12–13 anos); pode ser crônico se não tratado",
    "trajetoria": "Crônico com flutuações; pode remitir na gravidez.",
    "prognostico": "Responde a TCC (Habit Reversal Training) e N-acetilcisteína.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📈 Níveis de Gravidade
```json
{
    "tipo": "ordinal_simples",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas; sofrimento manejável."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas e prejuízo intermediários."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas; prejuízo funcional acentuado."
      }
    ],
    "regra_atribuicao": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 🩺 Subtipos & Apresentações
```json
{
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

## 📋 Instrumentos & Escalas Complementares
```json
[]
```

---
