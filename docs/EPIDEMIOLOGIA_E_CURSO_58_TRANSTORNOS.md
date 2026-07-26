# Epidemiologia, Curso e Agrupamento dos 58 Transtornos (DSM-5-TR)

> Mapeamento para refatoração e estruturação avançada:

> 1. `meta` (com `capitulo` e `grupo` nosológico)

> 2. `prevalencia` (Taxa populacional, proporção por sexo, variações culturais)

> 3. `curso_desenvolvimento` (Idade de início típica, trajetória clínica, prognóstico)

---

## Agorafobia

```json
{
  "meta": {
    "id": "agorafobia",
    "nome_completo": "Agorafobia",
    "sigla": null,
    "codigo": {
      "dsm5": "300.22",
      "cid10": "F40.00",
      "cid11": "6B02"
    },
    "capitulo": "Transtornos de Ansiedade",
    "capitulo_id": "05",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "1,7% (prevalência de 12 meses em adolescentes e adultos)",
    "proporcao_sexo": "2:1 mulheres:homens",
    "variacoes_culturais": null,
    "notas": "Casos graves podem tornar a pessoa completamente homebound.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Qualquer idade; pico: adolescência tardia e início da vida adulta; mediana ~17 anos",
    "trajetoria": "Geralmente crônico e persistente sem tratamento; com tratamento, remissão possível.",
    "prognostico": "Prognóstico pior que TP isolado; funcionalidade frequentemente comprometida.",
      }
}
```

---

## Anorexia Nervosa

```json
{
  meta: {
    id: "anorexia_nervosa",
    nome_completo: "Anorexia Nervosa",
    sigla: null,
    codigo: {
      dsm5: "307.1",
      cid10: "F50.0x",
      cid11: "6B80"},
    capitulo: "Transtornos Alimentares",
    capitulo_id: "10",
    grupo: null,
    faixa_etaria_alvo: "ambos",
    versao_complementar_existe: false,
    sinonimos_historicos: []},
  prevalencia: {
    populacao_geral:
      "0,4% (prevalência de 12 meses entre jovens do sexo feminino).",
    proporcao_sexo:
      "Aproximadamente 10:1 feminino:masculino em populações clínicas.",
    variacoes_culturais:
      "Possivelmente mais prevalente em países ricos pós-industrializados. A ausência de medo intenso manifesto de ganhar peso parece relativamente mais comum na Ásia e entre grupos latinos nos EUA.",
    notas: "Pouco se sabe sobre a prevalência no sexo masculino.",
    },
  curso_desenvolvimento: {
    idade_inicio_tipica:
      "Adolescência ou idade adulta jovem; raramente antes da puberdade ou após os 40 anos.",
    trajetoria:
      "Altamente variável. Alguns se recuperam após um único episódio; outros apresentam curso crônico. A maioria entra em remissão dentro de cinco anos.",
    prognostico:
      "Taxa bruta de mortalidade de cerca de 5% por década. Morte mais comum por complicações clínicas ou suicídio.",
    }
}
```

---

## Bulimia Nervosa

```json
{
  "meta": {
    "id": "bulimia_nervosa",
    "nome_completo": "Bulimia Nervosa",
    "sigla": null,
    "codigo": {
      "dsm5": "307.51",
      "cid10": "F50.2",
      "cid11": "6B81"
    },
    "capitulo": "Transtornos Alimentares",
    "capitulo_id": "10",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "1 a 1,5% (prevalência de 12 meses entre jovens do sexo feminino).",
    "proporcao_sexo": "Aproximadamente 10:1 feminino:masculino.",
    "variacoes_culturais": "Ocorrência relatada em frequências relativamente similares na maioria dos países industrializados.",
    "notas": "A prevalência-ponto é maior entre adultos, já que o transtorno atinge seu pico no fim da adolescência e início da idade adulta.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Adolescência ou idade adulta jovem; incomum antes da puberdade ou após os 40 anos.",
    "trajetoria": "Curso crônico ou intermitente com períodos de remissão e recorrência. Sintomas tendem a diminuir ao longo do tempo, especialmente com tratamento.",
    "prognostico": "Períodos de remissão acima de um ano estão associados a evolução de longo prazo mais favorável. Taxa bruta de mortalidade de aproximadamente 2% por década.",
      }
}
```

---

## Transtorno da Conduta

```json
{
  "meta": {
    "id": "conduta",
    "nome_completo": "Transtorno da Conduta",
    "sigla": null,
    "codigo": {
      "dsm5": "312.8",
      "cid10": "F91.x",
      "cid11": "6C91"
    },
    "capitulo": "Transtornos Disruptivos, do Controle de Impulsos e da Conduta",
    "capitulo_id": "15",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "2–10% em um ano, mediana de 4%",
    "proporcao_sexo": "Mais elevado no sexo masculino",
    "variacoes_culturais": "Contexto ambiental (áreas de alto crime, zonas de guerra) pode levar a aplicação incorreta do diagnóstico.",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Começo dos anos pré-escolares até adolescência intermediária",
    "trajetoria": "Tipo infância: pior prognóstico, mais agressão física, TDAH comórbido. Tipo adolescência: menos agressão, melhor prognóstico. Remissão na vida adulta é comum.",
    "prognostico": "Persistência mais provável em subtipo infância + emoções pró-sociais limitadas + comorbidade com TDAH e substâncias.",
      }
}
```

---

## Transtorno do Desenvolvimento Intelectual (Deficiência Intelectual)

```json
{
  "meta": {
    "id": "deficiencia_intelectual",
    "nome_completo": "Transtorno do Desenvolvimento Intelectual (Deficiência Intelectual)",
    "sigla": "DI",
    "codigo": {
      "dsm5": "319",
      "cid10": "F79",
      "cid11": "6A00"
    },
    "capitulo": "Transtornos do Neurodesenvolvimento",
    "capitulo_id": "01",
    "grupo": "Deficiência Intelectual",
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Oligofrenia",
      "Retardo Mental"
    ]
  },
  "prevalencia": {
    "populacao_geral": "Aproximadamente 1% na população geral.",
    "proporcao_sexo": "Razão de prevalência mais alta em indivíduos do sexo masculino.",
    "variacoes_culturais": null,
    "notas": "Prevalência para deficiência intelectual grave é de aproximadamente 6 por 1.000.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Período do desenvolvimento",
    "trajetoria": "Geralmente crônico e estável, embora intervenções e suporte adequado possam melhorar o funcionamento adaptativo ao longo da vida.",
    "prognostico": "Depende da severidade e da presença de outras comorbidades neurológicas/psiquiátricas.",
      }
}
```

---

## Delirium

```json
{
  "meta": {
    "id": "delirium",
    "nome_completo": "Delirium",
    "sigla": null,
    "codigo": {
      "dsm5": "293.0",
      "cid10": "F05",
      "cid11": "6D70"
    },
    "capitulo": "Transtornos Neurocognitivos",
    "capitulo_id": "17",
    "grupo": null,
    "faixa_etaria_alvo": "transversal",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "1–2% na comunidade; 14–24% em admissões hospitalares; 70–87% em UTI",
    "proporcao_sexo": null,
    "variacoes_culturais": null,
    "notas": "Prevalência muito alta em idosos hospitalizados e pós-operatórios.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Qualquer idade; mais comum em idosos",
    "trajetoria": "Recuperação completa com tratamento da causa subjacente; pode progredir para coma ou morte se não tratado.",
    "prognostico": "Mortalidade alta em hospitalizados; até 40% morrem dentro de um ano.",
      }
}
```

---

## Esquizofrenia

```json
{
  "meta": {
    "id": "esquizofrenia",
    "nome_completo": "Esquizofrenia",
    "sigla": null,
    "codigo": {
      "dsm5": "295.90",
      "cid10": "F20.9",
      "cid11": "6A20"
    },
    "capitulo": "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
    "capitulo_id": "02",
    "grupo": null,
    "faixa_etaria_alvo": "transversal",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Dementia praecox"
    ]
  },
  "prevalencia": {
    "populacao_geral": "Entre 0,3% e 0,7% ao longo da vida.",
    "proporcao_sexo": "Similar entre os sexos, embora com início ligeiramente mais precoce e prognóstico mais grave no sexo masculino.",
    "variacoes_culturais": "Ideias delirantes que parecem bizarras em uma cultura (ex: feitiçaria) podem ser comumente aceitas em outra, necessitando avaliação atenta.",
    "notas": "O risco de suicídio é elevado, com 5% a 6% dos indivíduos morrendo por autoextermínio e cerca de 20% realizando tentativas.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Início/meados dos 20 anos (homens); fim dos 20 anos (mulheres)",
    "trajetoria": "O início pode ser abrupto ou gradual, mas a maioria exibe curso flutuante ou crônico com exacerbações agudas e declínio progressivo da funcionalidade social e cognitiva.",
    "prognostico": "Geralmente crônico e com prejuízos funcionais residuais em grande parte dos indivíduos, necessitando de suporte medicamentoso e psicossocial contínuo.",
      }
}
```

---

## Transtorno Explosivo Intermitente

```json
{
  "meta": {
    "id": "explosivo_intermittente",
    "nome_completo": "Transtorno Explosivo Intermitente",
    "sigla": "TEI",
    "codigo": {
      "dsm5": "312.34",
      "cid10": "F63.81",
      "cid11": "6C91"
    },
    "capitulo": "Transtornos Disruptivos, do Controle de Impulsos e da Conduta",
    "capitulo_id": "15",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "2,7% em um ano (definição estrita, EUA)",
    "proporcao_sexo": "1,4–2,3:1 M:F em alguns estudos",
    "variacoes_culturais": "Prevalência mais baixa em Ásia, Oriente Médio, Romênia e Nigéria.",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Fase final da infância ou adolescência",
    "trajetoria": "Características persistentes por muitos anos; curso pode ser episódico ou crônico.",
    "prognostico": "Relativamente comum independentemente de comorbidades.",
      }
}
```

---

## Fobia Específica

```json
{
  "meta": {
    "id": "fobia_especifica",
    "nome_completo": "Fobia Específica",
    "sigla": null,
    "codigo": {
      "dsm5": "300.29",
      "cid10": "F40.2",
      "cid11": "6B03"
    },
    "capitulo": "Transtornos de Ansiedade",
    "capitulo_id": "05",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "7–9% (prevalência de 12 meses); 13,2% (prevalência na vida)",
    "proporcao_sexo": "2:1 mulheres:homens; tipo sangue-injeção-ferimento: razão menor",
    "variacoes_culturais": "Taxas variam; medo de magia e espíritos em algumas culturas; não classificar se sancionado culturalmente.",
    "notas": "Prevalência decresce com a idade.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Infância; tipo situacional: início mais tardio (~20 anos)",
    "trajetoria": "Início na infância frequentemente remite; quando persiste na adultícia raramente remite espontaneamente.",
    "prognostico": "Com tratamento (terapia de exposição), remissão em 80%+ dos casos.",
      }
}
```

---

## Mutismo Seletivo

```json
{
  "meta": {
    "id": "mutismo_seletivo",
    "nome_completo": "Mutismo Seletivo",
    "sigla": null,
    "codigo": {
      "dsm5": "312.23",
      "cid10": "F94.0",
      "cid11": "6B06"
    },
    "capitulo": "Transtornos de Ansiedade",
    "capitulo_id": "05",
    "grupo": null,
    "faixa_etaria_alvo": "pediatria",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Afasia voluntária",
      "Mudismo eletivo"
    ]
  },
  "prevalencia": {
    "populacao_geral": "0,03–1% (estimativa variável por contexto clínico vs. escolar vs. comunitário)",
    "proporcao_sexo": "Sem variação significativa por sexo ou raça/etnia documentada",
    "variacoes_culturais": "Crianças de famílias imigrantes podem se recusar a falar em nova língua — avaliar antes de diagnosticar.",
    "notas": "Mais frequente em crianças menores que em adolescentes/adultos.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Usualmente antes dos 5 anos; atenção clínica surge na entrada escolar",
    "trajetoria": "Muitos superam o mutismo seletivo; ansiedade social pode persistir mesmo após remissão.",
    "prognostico": "Variável; história natural pouco estudada.",
      }
}
```

---

## Transtorno de Oposição Desafiante

```json
{
  "meta": {
    "id": "oposicao_desafiante",
    "nome_completo": "Transtorno de Oposição Desafiante",
    "sigla": "TOD",
    "codigo": {
      "dsm5": "313.81",
      "cid10": "F91.3",
      "cid11": "6C90"
    },
    "capitulo": "Transtornos Disruptivos, do Controle de Impulsos e da Conduta",
    "capitulo_id": "15",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "1–11%, média estimada de 3,3%",
    "proporcao_sexo": "1,4:1 M:F antes da adolescência",
    "variacoes_culturais": "Prevalência relativamente consistente entre países com diferentes raças e etnias.",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Anos pré-escolares",
    "trajetoria": "Pode preceder transtorno da conduta; maioria das crianças com TOD não desenvolve conduta. Risco aumentado para ansiedade e depressão.",
    "prognostico": "Sintomas desafiantes/questionadores predizem conduta; sintomas de humor predizem transtornos emocionais.",
      }
}
```

---

## Transtorno de Estresse Pós-Traumático

```json
{
  "meta": {
    "id": "tept",
    "nome_completo": "Transtorno de Estresse Pós-Traumático",
    "sigla": "TEPT",
    "codigo": {
      "dsm5": "309.81",
      "cid10": "F43.10",
      "cid11": "6B40"
    },
    "capitulo": "Transtornos Relacionados a Trauma e a Estressores",
    "capitulo_id": "07",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": true,
    "sinonimos_historicos": [
      "PTSD"
    ]
  },
  "prevalencia": {
    "populacao_geral": "3,5% (prevalência de 12 meses nos EUA); 0,5–1% internacionalmente",
    "proporcao_sexo": "2:1 mulheres:homens",
    "variacoes_culturais": "Taxas menores em países com renda baixa; expressão varia culturalmente.",
    "notas": "Risco de TEPT condicional (após trauma) ~20%; variaações por tipo de trauma.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Qualquer idade; pode ocorrer em crianças pequenas após trauma",
    "trajetoria": "Altamente variável: ~50% recuperam em 3 meses; outros persistem décadas.",
    "prognostico": "Boa resposta a TCC focada no trauma (CPT, PE) e EMDR.",
      }
}
```

---

## Transtorno Neurocognitivo Maior ou Leve Devido à Doença de Alzheimer

```json
{
  "meta": {
    "id": "tnc_alzheimer",
    "nome_completo": "Transtorno Neurocognitivo Maior ou Leve Devido à Doença de Alzheimer",
    "sigla": null,
    "codigo": {
      "dsm5": "294.1x",
      "cid10": "F02.8x",
      "cid11": "6D80.0"
    },
    "capitulo": "Transtornos Neurocognitivos",
    "capitulo_id": "17",
    "grupo": null,
    "faixa_etaria_alvo": "transversal",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Demência de Alzheimer"
    ]
  },
  "prevalencia": {
    "populacao_geral": "Cerca de 60–90% das demências em idosos",
    "proporcao_sexo": "Mais frequente em mulheres (devido à maior longevidade)",
    "variacoes_culturais": null,
    "notas": "7% entre 65–74a; 53% entre 75–84a; 40% ≥85a.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Oitava/nona década; formas precoces na quinta/sexta década",
    "trajetoria": "Progressão gradual por cerca de 10 anos em média; platôs curtos possíveis.",
    "prognostico": "Morte geralmente por pneumonia por aspiração no estágio terminal.",
      }
}
```

---

## Transtorno Neurocognitivo Leve

```json
{
  "meta": {
    "id": "tnc_leve",
    "nome_completo": "Transtorno Neurocognitivo Leve",
    "sigla": "TNC Leve",
    "codigo": {
      "dsm5": "331.83",
      "cid10": "G31.84",
      "cid11": "6D81"
    },
    "capitulo": "Transtornos Neurocognitivos",
    "capitulo_id": "17",
    "grupo": null,
    "faixa_etaria_alvo": "transversal",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Transtorno cognitivo sem outra especificação (DSM-IV, parcial)"
    ]
  },
  "prevalencia": {
    "populacao_geral": "2–10% aos 65 anos; 5–25% aos 85 anos",
    "proporcao_sexo": null,
    "variacoes_culturais": null,
    "notas": "Estimativas variam conforme definição utilizada.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Varia por subtipo etiológico",
    "trajetoria": "Varia por etiologia; pode progredir para TNC maior ou estabilizar.",
    "prognostico": "Varia conforme etiologia subjacente.",
      }
}
```

---

## Transtorno Neurocognitivo Maior

```json
{
  "meta": {
    "id": "tnc_maior",
    "nome_completo": "Transtorno Neurocognitivo Maior",
    "sigla": "TNC Maior",
    "codigo": {
      "dsm5": "294.1x",
      "cid10": "F02.8x",
      "cid11": "6D80"
    },
    "capitulo": "Transtornos Neurocognitivos",
    "capitulo_id": "17",
    "grupo": null,
    "faixa_etaria_alvo": "transversal",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Demência"
    ]
  },
  "prevalencia": {
    "populacao_geral": "1–2% aos 65 anos; até 30% aos 85 anos",
    "proporcao_sexo": null,
    "variacoes_culturais": null,
    "notas": "Prevalência varia conforme idade e subtipo etiológico.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Geralmente idade avançada; varia por subtipo",
    "trajetoria": "Varia por etiologia: degenerativa = progressão gradual; vascular = início agudo ou gradual.",
    "prognostico": "Varia conforme etiologia subjacente e comorbidades.",
      }
}
```

---

## Transtorno Neurocognitivo Vascular Maior ou Leve

```json
{
  "meta": {
    "id": "tnc_vascular",
    "nome_completo": "Transtorno Neurocognitivo Vascular Maior ou Leve",
    "sigla": null,
    "codigo": {
      "dsm5": "290.40",
      "cid10": "F01.5x",
      "cid11": "6D80.1"
    },
    "capitulo": "Transtornos Neurocognitivos",
    "capitulo_id": "17",
    "grupo": null,
    "faixa_etaria_alvo": "transversal",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Demência vascular"
    ]
  },
  "prevalencia": {
    "populacao_geral": "0,2% (65–70a) até 16% (≥80a); 20–30% pós-AVC",
    "proporcao_sexo": "Mais em homens",
    "variacoes_culturais": "Mais prevalente em afro-americanos e países do leste asiático.",
    "notas": "Segunda causa mais comum de TNC.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Qualquer idade; aumenta exponencialmente após 65a",
    "trajetoria": "Variável: agudo com melhora parcial, gradual progressivo, ou flutuante com platôs.",
    "prognostico": "Depende de controle dos fatores de risco vascular.",
      }
}
```

---

## Transtorno da Personalidade Antissocial

```json
{
  "meta": {
    "id": "tp_antissocial",
    "nome_completo": "Transtorno da Personalidade Antissocial",
    "sigla": "TPA",
    "codigo": {
      "dsm5": "301.7",
      "cid10": "F60.2",
      "cid11": "6D11"
    },
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "18",
    "grupo": "Cluster B",
    "faixa_etaria_alvo": "adulto",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Psicopatia",
      "Sociopatia",
      "Transtorno da personalidade dissocial"
    ]
  },
  "prevalencia": {
    "populacao_geral": "0,2% a 3,3%",
    "proporcao_sexo": "Muito mais comum no sexo masculino",
    "variacoes_culturais": "Maior prevalência em contextos de pobreza e urbanos.",
    "notas": "Maior prevalência em ambientes forenses e de abuso de substâncias.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Infância ou início da adolescência (conduta)",
    "trajetoria": "Crônico; pode remitir após a quarta década, especialmente comportamento criminoso.",
    "prognostico": "Remissão parcial com envelhecimento; envolvimento precoce na justiça juvenil é fator de risco.",
      }
}
```

---

## Transtorno da Personalidade Borderline

```json
{
  "meta": {
    "id": "tp_borderline",
    "nome_completo": "Transtorno da Personalidade Borderline",
    "sigla": "TPB",
    "codigo": {
      "dsm5": "301.83",
      "cid10": "F60.3",
      "cid11": "6D11.5"
    },
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "18",
    "grupo": "Cluster B",
    "faixa_etaria_alvo": "adulto",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "1,6% a 5,9%",
    "proporcao_sexo": "Cerca de 75% diagnosticados no sexo feminino",
    "variacoes_culturais": null,
    "notas": "Até 20% em pacientes psiquiátricos internados.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Início da vida adulta",
    "trajetoria": "Instabilidade crônica no início; melhora gradual após os 30–50 anos.",
    "prognostico": "Metade não mais preenche critérios após ~10 anos de acompanhamento.",
      }
}
```

---

## Transtorno da Personalidade Dependente

```json
{
  "meta": {
    "id": "tp_dependente",
    "nome_completo": "Transtorno da Personalidade Dependente",
    "sigla": "TPD",
    "codigo": {
      "dsm5": "301.6",
      "cid10": "F60.7",
      "cid11": "6D10"
    },
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "18",
    "grupo": "Cluster C",
    "faixa_etaria_alvo": "adulto",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "0,49% a 0,6%",
    "proporcao_sexo": "Diagnosticado mais em mulheres em contextos clínicos; alguns estudos mostram taxas similares",
    "variacoes_culturais": "Ênfase em passividade e deferência em algumas culturas não deve ser confundida com TPD.",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Início da vida adulta",
    "trajetoria": "Crônico; comportamento dependente pode ser apropriado ao desenvolvimento em crianças/adolescentes.",
    "prognostico": "Cautela no diagnóstico em jovens.",
      }
}
```

---

## Transtorno da Personalidade Esquizoide

```json
{
  "meta": {
    "id": "tp_esquizoide",
    "nome_completo": "Transtorno da Personalidade Esquizoide",
    "sigla": "TPE",
    "codigo": {
      "dsm5": "301.20",
      "cid10": "F60.1",
      "cid11": "6D10"
    },
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "18",
    "grupo": "Cluster A",
    "faixa_etaria_alvo": "adulto",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "3,1% a 4,9%",
    "proporcao_sexo": "Diagnosticado um pouco mais em homens",
    "variacoes_culturais": "Imigrantes podem ser incorretamente vistos como frios ou indiferentes.",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Infância e adolescência (solidão, relacionamento ruim com colegas)",
    "trajetoria": "Crônico; pode preceder esquizofrenia.",
    "prognostico": "Funcionamento profissional pode ser adequado em isolamento social.",
      }
}
```

---

## Transtorno da Personalidade Esquizotípica

```json
{
  "meta": {
    "id": "tp_esquizotipico",
    "nome_completo": "Transtorno da Personalidade Esquizotípica",
    "sigla": "TPET",
    "codigo": {
      "dsm5": "301.22",
      "cid10": "F21",
      "cid11": "6A22"
    },
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "18",
    "grupo": "Cluster A",
    "faixa_etaria_alvo": "adulto",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "0,6% a 3,9%",
    "proporcao_sexo": "Pouco mais comum no sexo masculino",
    "variacoes_culturais": "Crenças religiosas culturalmente aceitas não devem ser consideradas esquizotípicas.",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Infância e adolescência",
    "trajetoria": "Relativamente estável; pequena parcela desenvolve esquizofrenia.",
    "prognostico": "Episódios psicóticos breves sob estresse.",
      }
}
```

---

## Transtorno da Personalidade Evitativa

```json
{
  "meta": {
    "id": "tp_evitativo",
    "nome_completo": "Transtorno da Personalidade Evitativa",
    "sigla": "TPEV",
    "codigo": {
      "dsm5": "301.82",
      "cid10": "F60.6",
      "cid11": "6D10"
    },
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "18",
    "grupo": "Cluster C",
    "faixa_etaria_alvo": "adulto",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "2,4%",
    "proporcao_sexo": "Igualmente frequente em ambos os sexos",
    "variacoes_culturais": "Retraimento pode ser consequência de aculturação após imigração.",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Infância (timidez, medo de estranhos)",
    "trajetoria": "Tendência a piorar na adolescência; pode remitir com o envelhecimento.",
    "prognostico": "Uso cauteloso em crianças e adolescentes, pois timidez pode ser adequada ao desenvolvimento.",
      }
}
```

---

## Transtorno da Personalidade Histriônica

```json
{
  "meta": {
    "id": "tp_histrionico",
    "nome_completo": "Transtorno da Personalidade Histriônica",
    "sigla": "TPH",
    "codigo": {
      "dsm5": "301.50",
      "cid10": "F60.4",
      "cid11": "6D10"
    },
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "18",
    "grupo": "Cluster B",
    "faixa_etaria_alvo": "adulto",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "1,84%",
    "proporcao_sexo": "Diagnosticado mais em mulheres em contextos clínicos; taxas similares em estudos estruturados",
    "variacoes_culturais": "Normas culturais de expressão emocional e sedução devem ser consideradas.",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Início da vida adulta",
    "trajetoria": "Crônico; busca constante de novidades e excitação.",
    "prognostico": "Dificuldade em manter relacionamentos de longo prazo.",
      }
}
```

---

## Transtorno da Personalidade Narcisista

```json
{
  "meta": {
    "id": "tp_narcisista",
    "nome_completo": "Transtorno da Personalidade Narcisista",
    "sigla": "TPN",
    "codigo": {
      "dsm5": "301.81",
      "cid10": "F60.81",
      "cid11": "6D10"
    },
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "18",
    "grupo": "Cluster B",
    "faixa_etaria_alvo": "adulto",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "0% a 6,2%",
    "proporcao_sexo": "50 a 75% do sexo masculino entre os diagnosticados",
    "variacoes_culturais": null,
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Início da vida adulta",
    "trajetoria": "Crônico; dificuldades de adaptação às limitações do envelhecimento.",
    "prognostico": "Vulnerabilidade da autoestima a críticas pode levar a retraimento ou depressão.",
      }
}
```

---

## Transtorno da Personalidade Obsessivo-Compulsiva

```json
{
  "meta": {
    "id": "tp_obsessivo_compulsivo",
    "nome_completo": "Transtorno da Personalidade Obsessivo-Compulsiva",
    "sigla": "TPOC",
    "codigo": {
      "dsm5": "301.4",
      "cid10": "F60.5",
      "cid11": "6D10"
    },
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "18",
    "grupo": "Cluster C",
    "faixa_etaria_alvo": "adulto",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "2,1% a 7,9%",
    "proporcao_sexo": "Cerca de duas vezes mais em homens",
    "variacoes_culturais": "Culturas que enfatizam trabalho e produtividade não devem ser confundidas.",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Início da vida adulta",
    "trajetoria": "Crônico; traços moderados podem ser adaptativos em contextos de alto desempenho.",
    "prognostico": "Dificuldade em novas situações que exijam flexibilidade.",
      }
}
```

---

## Transtorno da Personalidade Paranóide

```json
{
  "meta": {
    "id": "tp_paranoide",
    "nome_completo": "Transtorno da Personalidade Paranóide",
    "sigla": "TPP",
    "codigo": {
      "dsm5": "301.0",
      "cid10": "F60.0",
      "cid11": "6D10"
    },
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "18",
    "grupo": "Cluster A",
    "faixa_etaria_alvo": "adulto",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "2,3% a 4,4%",
    "proporcao_sexo": "Mais comumente diagnosticado no sexo masculino (amostras clínicas)",
    "variacoes_culturais": "Comportamentos defensivos de minorias não devem ser confundidos com TPP.",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Infância e adolescência (solidão, relacionamento ruim com colegas)",
    "trajetoria": "Crônico; pode preceder transtorno delirante ou esquizofrenia.",
    "prognostico": "Difícil convivência; episódios psicóticos breves sob estresse.",
      }
}
```

---

## Transtorno de Acumulação

```json
{
  "meta": {
    "id": "transtorno_acumulacao",
    "nome_completo": "Transtorno de Acumulação",
    "sigla": null,
    "codigo": {
      "dsm5": "300.3",
      "cid10": "F42",
      "cid11": "6B23"
    },
    "capitulo": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
    "capitulo_id": "06",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Hoarding disorder"
    ]
  },
  "prevalencia": {
    "populacao_geral": "2–6% (estimativa populacao geral)",
    "proporcao_sexo": "Levemente mais frequente em homens; mulheres mais frequentemente tratam",
    "variacoes_culturais": null,
    "notas": "Prevalência aumenta com a idade.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Sintomas observáveis na infância/adolescência; apresentação clínica ~30s-40s; piora progressiva sem tratamento",
    "trajetoria": "Crônico e progressivo; raramente remite espontaneamente.",
    "prognostico": "Resposta moderada à TCC especializada; pior prognóstico que TOC.",
      }
}
```

---

## Transtorno Alimentar Restritivo/Evitativo

```json
{
  "meta": {
    "id": "transtorno_alimentar_restritivo_evitativo",
    "nome_completo": "Transtorno Alimentar Restritivo/Evitativo",
    "sigla": "TARE",
    "codigo": {
      "dsm5": "307.59",
      "cid10": "F50.8",
      "cid11": "6B83"
    },
    "capitulo": "Transtornos Alimentares",
    "capitulo_id": "10",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": null,
    "proporcao_sexo": "Igualmente comum em ambos os sexos na lactência e primeira infância; comórbido com TEA, é mais comum no sexo masculino.",
    "variacoes_culturais": "Não deve ser diagnosticado quando a evitação estiver relacionada unicamente a práticas religiosas ou culturais específicas.",
    "notas": "Mais comum em crianças do que em adultos; pode haver grande demora entre manifestação inicial e apresentação clínica.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Lactência ou primeira infância (evitação baseada em sensibilidade sensorial tende a surgir na primeira década).",
    "trajetoria": "A evitação/restricão baseada em aspectos sensoriais é relativamente estável e duradoura. Pode persistir na idade adulta com funcionamento relativamente normal.",
    "prognostico": "Pouca evidência associando diretamente TARE e manifestação subsequente de outro transtorno alimentar.",
      }
}
```

---

## Transtorno de Ansiedade de Doença

```json
{
  "meta": {
    "id": "transtorno_ansiedade_doenca",
    "nome_completo": "Transtorno de Ansiedade de Doença",
    "sigla": "TAD",
    "codigo": {
      "dsm5": "300.7",
      "cid10": "F45.21",
      "cid11": "6B24"
    },
    "capitulo": "Transtorno de Sintomas Somáticos e Transtornos Relacionados",
    "capitulo_id": "09",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Hipocondria"
    ]
  },
  "prevalencia": {
    "populacao_geral": "1,3–10% (estimativa em serviços de atenção primária)",
    "proporcao_sexo": "Igual entre sexos",
    "variacoes_culturais": null,
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Início adulto jovem",
    "trajetoria": "Crônico sem tratamento; bom prognóstico com TCC.",
    "prognostico": "TCC focada em ansiedade de saúde é tratamento de primeira linha.",
      }
}
```

---

## Transtorno de Ansiedade Generalizada

```json
{
  "meta": {
    "id": "transtorno_ansiedade_generalizada",
    "nome_completo": "Transtorno de Ansiedade Generalizada",
    "sigla": "TAG",
    "codigo": {
      "dsm5": "300.02",
      "cid10": "F41.1",
      "cid11": "6B00"
    },
    "capitulo": "Transtornos de Ansiedade",
    "capitulo_id": "05",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "0,9% em adolescentes; 2,9% em adultos (prevalência de 12 meses nos EUA); 0,4–3,6% internacionalmente",
    "proporcao_sexo": "2:1 mulheres:homens",
    "variacoes_culturais": "Sintomas somáticos predominam em países com menor renda; taxas menores na Ásia e África.",
    "notas": "Segundo transtorno de ansiedade mais comum em atenção primária.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Relativamente precoce, porém sintomas na vida inteira; mediana de início: ~30 anos; início mais precoce que outros transtornos",
    "trajetoria": "Crônico, com exacerbações em estresse. Pode apresentar-se de forma flutuante.",
    "prognostico": "Remissão completa incomum sem tratamento; respondem bem a TCC e farmacoterapia.",
      }
}
```

---

## Transtorno de Ansiedade de Separação

```json
{
  "meta": {
    "id": "transtorno_ansiedade_separacao",
    "nome_completo": "Transtorno de Ansiedade de Separação",
    "sigla": "TAS",
    "codigo": {
      "dsm5": "309.21",
      "cid10": "F93.0",
      "cid11": "6B05"
    },
    "capitulo": "Transtornos de Ansiedade",
    "capitulo_id": "05",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "4% em crianças, 1,6% em adolescentes, 0,9–1,9% em adultos (prevalência de 12 meses)",
    "proporcao_sexo": "Mais comum em mulheres na população geral",
    "variacoes_culturais": null,
    "notas": "Um dos mais prevalentes em crianças menores de 12 anos.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Pode iniciar em qualquer idade; mais comum em crianças; média de início em adultos: final da adolescência/início da vida adulta",
    "trajetoria": "Geralmente remite com o tempo; quando persiste na vida adulta pode ser crônico e causar prejuízo significativo.",
    "prognostico": "Preditor de transtorno de pânico na vida adulta quando persistente.",
      }
}
```

---

## Transtorno de Ansiedade Social (Fobia Social)

```json
{
  "meta": {
    "id": "transtorno_ansiedade_social",
    "nome_completo": "Transtorno de Ansiedade Social (Fobia Social)",
    "sigla": "TAS",
    "codigo": {
      "dsm5": "300.23",
      "cid10": "F40.10",
      "cid11": "6B04"
    },
    "capitulo": "Transtornos de Ansiedade",
    "capitulo_id": "05",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Fobia Social"
    ]
  },
  "prevalencia": {
    "populacao_geral": "7% (prevalência de 12 meses nos EUA); 2–3% em outros países",
    "proporcao_sexo": "1,5–2:1 mulheres:homens na população geral; sem diferença em amostras clínicas",
    "variacoes_culturais": "Taijin kyofusho (Japão): variante com medo de ofender os outros; taxas mais baixas em Ásia.",
    "notas": "Segundo transtorno de ansiedade mais prevalente após fobia específica.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Mediana de início: ~13 anos; raro início após 25 anos",
    "trajetoria": "Geralmente crônico sem tratamento; pode deteriorar com responsabilidades sociais crescentes.",
    "prognostico": "Boa resposta à TCC; remissão menor que em outros transtornos de ansiedade sem tratamento.",
      }
}
```

---

## Transtorno Bipolar Tipo I

```json
{
  "meta": {
    "id": "transtorno_bipolar_tipo_1",
    "nome_completo": "Transtorno Bipolar Tipo I",
    "sigla": "TB1",
    "codigo": {
      "dsm5": "296.40",
      "cid10": "F31.9",
      "cid11": "6A60"
    },
    "capitulo": "Transtorno Bipolar e Transtornos Relacionados",
    "capitulo_id": "03",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Psicose maníaco-depressiva",
      "Transtorno maníaco-depressivo clássico"
    ]
  },
  "prevalencia": {
    "populacao_geral": "0,6% nos EUA (estimativa de 12 meses); variando de 0,0% a 0,6% internacionalmente.",
    "proporcao_sexo": "Razão de aproximadamente 1,1:1 (sexo masculino para sexo feminino).",
    "variacoes_culturais": "Prevalência em 12 meses significativamente mais baixa para afro-caribenhos do que para afro-americanos ou brancos nos EUA.",
    "notas": "Mais comum em países com renda elevada do que com renda baixa (1,4% vs. 0,7%).",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Cerca de 18 anos",
    "trajetoria": "Mais de 90% dos indivíduos com um único episódio de mania apresentam recorrências ao longo da vida. Cerca de 60% dos episódios de mania ocorrem imediatamente antes de um episódio depressivo maior.",
    "prognostico": "Cerca de 30% mostram prejuízo profissional duradouro. Déficits cognitivos podem persistir e comprometer a funcionalidade mesmo em períodos eutímicos.",
      }
}
```

---

## Transtorno Bipolar Tipo II

```json
{
  "meta": {
    "id": "transtorno_bipolar_tipo_2",
    "nome_completo": "Transtorno Bipolar Tipo II",
    "sigla": "TB2",
    "codigo": {
      "dsm5": "296.89",
      "cid10": "F31.81",
      "cid11": "6A61"
    },
    "capitulo": "Transtorno Bipolar e Transtornos Relacionados",
    "capitulo_id": "03",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "0,3% internacionalmente; 0,8% nas estimativas do DSM-5 nos EUA.",
    "proporcao_sexo": "Tendência de maior prevalência de estados depressivos e ciclagens rápidas em mulheres.",
    "variacoes_culturais": "Não há informações robustas de variação cultural bem definida na literatura.",
    "notas": "A prevalência acumulada do transtorno bipolar II ao longo do tempo demonstra grande morbidade.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Cerca de 25 anos",
    "trajetoria": "Geralmente se inicia com um episódio depressivo. 5-15% dos casos evoluem para Transtorno Bipolar Tipo I ao longo da vida com a manifestação de um episódio de mania.",
    "prognostico": "Não deve ser considerado mais leve que o Bipolar I. Pacientes passam longos períodos incapacitados pela cronicidade e depressão recorrente.",
      }
}
```

---

## Transtorno de Compulsão Alimentar

```json
{
  "meta": {
    "id": "transtorno_compulsao_alimentar",
    "nome_completo": "Transtorno de Compulsão Alimentar",
    "sigla": "TCA",
    "codigo": {
      "dsm5": "307.51",
      "cid10": "F50.8",
      "cid11": "6B82"
    },
    "capitulo": "Transtornos Alimentares",
    "capitulo_id": "10",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "1,6% (mulheres adultas norte-americanas); 0,8% (homens adultos norte-americanos) — prevalência de 12 meses.",
    "proporcao_sexo": "Bem menos assimétrico do que na bulimia nervosa. Tão prevalente entre mulheres de minorias raciais e étnicas quanto em mulheres brancas.",
    "variacoes_culturais": "Prevalência comparável entre brancos não latinos, latinos, asiáticos e afro-americanos nos Estados Unidos.",
    "notas": "Mais prevalente entre indivíduos que buscam tratamento para emagrecer do que na população em geral.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Adolescência ou idade adulta jovem; pode ter início posterior na idade adulta.",
    "trajetoria": "Relativamente persistente. O curso é comparável à bulimia nervosa em termos de gravidade e duração. Taxas de remissão maiores do que para bulimia ou anorexia.",
    "prognostico": "Mudança diagnóstica de TCA para outros transtornos alimentares é incomum.",
      }
}
```

---

## Transtorno de Conversão (Transtorno de Sintomas Neurológicos Funcionais)

```json
{
  "meta": {
    "id": "transtorno_conversao",
    "nome_completo": "Transtorno de Conversão (Transtorno de Sintomas Neurológicos Funcionais)",
    "sigla": null,
    "codigo": {
      "dsm5": "300.11",
      "cid10": "F44.x",
      "cid11": "6B60"
    },
    "capitulo": "Transtorno de Sintomas Somáticos e Transtornos Relacionados",
    "capitulo_id": "09",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Histeria",
      "Transtorno de conversão"
    ]
  },
  "prevalencia": {
    "populacao_geral": "2–5/100.000/ano (incidência estimada); comum em neurology clinics",
    "proporcao_sexo": "2–3:1 mulheres:homens",
    "variacoes_culturais": "Prevalência maior em países com renda baixa e recursos médicos limitados.",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Mediana ~30 anos; pode ocorrer em qualquer faixa etária",
    "trajetoria": "50% remitem espontaneamente em 2 semanas; crônico em alguns.",
    "prognostico": "Intervenção neuropsiquiátrica precoce é fator prognóstico positivo.",
      }
}
```

---

## Transtorno de Déficit de Atenção/Hiperatividade

```json
{
  "meta": {
    "id": "transtorno_deficit_atencao_hiperatividade",
    "nome_completo": "Transtorno de Déficit de Atenção/Hiperatividade",
    "sigla": "TDAH",
    "codigo": {
      "dsm5": "314.01",
      "cid10": "F90.2",
      "cid11": "6A05"
    },
    "capitulo": "Transtornos do Neurodesenvolvimento",
    "capitulo_id": "01",
    "grupo": "Transtorno de Déficit de Atenção/Hiperatividade",
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Instabilidade Psicomotora",
      "Disfunção Cerebral Mínima"
    ]
  },
  "prevalencia": {
    "populacao_geral": "Aproximadamente 5% das crianças e 2,5% dos adultos na maioria das culturas.",
    "proporcao_sexo": "Mais comum em indivíduos do sexo masculino, com uma proporção de cerca de 2:1 em crianças e 1,6:1 em adultos.",
    "variacoes_culturais": null,
    "notas": "Prevalência constante entre diferentes países e culturas se aplicados os mesmos critérios diagnósticos estritos.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Infância (antes dos 12 anos)",
    "trajetoria": "A hiperatividade física costuma declinar com a idade cronológica, transformando-se em inquietude subjetiva interna na adolescência e idade adulta, enquanto os sintomas de desatenção costumam persistir de forma crônica.",
    "prognostico": "Elevado risco de abandono acadêmico, instabilidade profissional e dificuldades de relacionamento se não tratado precocemente.",
      }
}
```

---

## Transtorno Delirante

```json
{
  "meta": {
    "id": "transtorno_delirante",
    "nome_completo": "Transtorno Delirante",
    "sigla": null,
    "codigo": {
      "dsm5": "297.1",
      "cid10": "F22",
      "cid11": "6A24"
    },
    "capitulo": "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
    "capitulo_id": "02",
    "grupo": null,
    "faixa_etaria_alvo": "transversal",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "Aproximadamente 0,2% ao longo da vida.",
    "proporcao_sexo": "Sem grandes diferenças de gênero na frequência geral, embora o subtipo ciumento seja provavelmente mais comum em indivíduos do sexo masculino.",
    "variacoes_culturais": "Antecedentes culturais e religiosos individuais devem ser levados em conta na avaliação; o conteúdo dos delírios varia conforme os contextos culturais.",
    "notas": "O subtipo mais frequente é o persecutório. A condição pode ser mais prevalente em indivíduos mais velhos.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Idade adulta ou mais tardia",
    "trajetoria": "O diagnóstico costuma ser estável, embora uma parte dos indivíduos possa evoluir no sentido de desenvolver esquizofrenia. A função global é geralmente melhor que a observada na esquizofrenia.",
    "prognostico": "Costuma apresentar prejuízo funcional mais circunscrito do que outros transtornos psicóticos, permitindo funcionamento social e profissional aceitável fora das discussões delirantes.",
      }
}
```

---

## Transtorno Depressivo Maior

```json
{
  "meta": {
    "id": "transtorno_depressivo_maior",
    "nome_completo": "Transtorno Depressivo Maior",
    "sigla": "TDM",
    "codigo": {
      "dsm5": "296.21",
      "cid10": "F32.0",
      "cid11": "6A70"
    },
    "capitulo": "Transtornos Depressivos",
    "capitulo_id": "04",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Depressão maior",
      "Depressão unipolar",
      "Episódio depressivo maior"
    ]
  },
  "prevalencia": {
    "populacao_geral": "Aproximadamente 7% (prevalência de 12 meses nos EUA); prevalência em 18-29 anos é 3x maior que em indivíduos acima de 60 anos",
    "proporcao_sexo": "1,5 a 3x mais em mulheres que em homens; disparidade inicia na adolescência",
    "variacoes_culturais": "Diferenças de até 7x nas taxas entre culturas; sintomas somáticos como queixa predominante em muitas culturas; insônia e perda de energia mais uniformemente relatados",
    "notas": "Alta mortalidade associada, em boa parte pelo suicídio. Indivíduos deprimidos em asilos têm probabilidade aumentada de morte no primeiro ano.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Pico na década dos 20 anos; pode surgir em qualquer idade; probabilidade aumenta sensivelmente com a puberdade",
    "trajetoria": "Curso bastante variável. Recuperação começa em 3 meses em 2/5 dos casos; em 1 ano em 4/5. Risco de recorrência aumenta progressivamente com número de episódios. Possível transição para bipolar, especialmente em início na adolescência ou com características psicóticas.",
    "prognostico": "Cronicidade aumenta probabilidade de transtornos de personalidade, ansiedade e abuso de substância. Tempos médios de recuperação estáveis por longos períodos.",
      }
}
```

---

## Transtorno Depressivo Persistente (Distimia)

```json
{
  "meta": {
    "id": "transtorno_depressivo_persistente",
    "nome_completo": "Transtorno Depressivo Persistente (Distimia)",
    "sigla": "TDP",
    "codigo": {
      "dsm5": "300.4",
      "cid10": "F34.1",
      "cid11": "6A71"
    },
    "capitulo": "Transtornos Depressivos",
    "capitulo_id": "04",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Distimia",
      "Transtorno distímico DSM-IV",
      "Depressão crônica",
      "TDM crônico"
    ]
  },
  "prevalencia": {
    "populacao_geral": "0,5% para TDP e 1,5% para TDM crônico (prevalência de 12 meses nos EUA)",
    "proporcao_sexo": null,
    "variacoes_culturais": null,
    "notas": "Consolidação do transtorno distímico e TDM crônico do DSM-IV.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Frequentemente início precoce e insidioso (infância, adolescência ou início da vida adulta)",
    "trajetoria": "Curso crônico por definição. Quando sintomas aumentam ao nível de EDM, provavelmente retornarão ao nível inferior. Sintomas depressivos têm menos probabilidade de desaparecer em determinado período que no TDM.",
    "prognostico": "Início precoce (<21 anos) associado a maior probabilidade de transtornos de personalidade e por uso de substâncias. Efeitos funcionais podem ser iguais ou maiores que no TDM.",
      }
}
```

---

## Transtorno Dismórfico Corporal

```json
{
  "meta": {
    "id": "transtorno_dismorfico_corporal",
    "nome_completo": "Transtorno Dismórfico Corporal",
    "sigla": "TDC",
    "codigo": {
      "dsm5": "300.7",
      "cid10": "F45.22",
      "cid11": "6B21"
    },
    "capitulo": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
    "capitulo_id": "06",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Dismorfofobia"
    ]
  },
  "prevalencia": {
    "populacao_geral": "2,4% em adultos (EUA); maior em pacientes de dermatologia e cirurgia estética",
    "proporcao_sexo": "Levemente mais comum em mulheres na população geral",
    "variacoes_culturais": null,
    "notas": "Taxas de ideação suicida extremamente elevadas.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Mediana ~16–17 anos; frequentemente início gradual",
    "trajetoria": "Geralmente crônico sem tratamento; alta taxa de hospitalizações e tentativas de suicídio.",
    "prognostico": "Responde a ISRSs em doses altas e TCC adaptada.",
      }
}
```

---

## Transtorno Disruptivo da Desregulação do Humor

```json
{
  "meta": {
    "id": "transtorno_disruptivo_desregulacao_humor",
    "nome_completo": "Transtorno Disruptivo da Desregulação do Humor",
    "sigla": "TDDH",
    "codigo": {
      "dsm5": "296.99",
      "cid10": "F34.8",
      "cid11": "6A83"
    },
    "capitulo": "Transtornos Depressivos",
    "capitulo_id": "04",
    "grupo": null,
    "faixa_etaria_alvo": "pediatria",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "2 a 5% entre crianças e adolescentes na comunidade (estimativa de 6 meses a 1 ano)",
    "proporcao_sexo": "Predominantemente masculino em amostras clínicas e comunitárias",
    "variacoes_culturais": null,
    "notas": "Estimativas baseadas em critério de irritabilidade persistente crônica e grave. Taxas mais elevadas em crianças do sexo masculino e em idade escolar.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Antes dos 10 anos (critério obrigatório); diagnóstico entre 7-18 anos",
    "trajetoria": "Aproximadamente 50% das crianças com irritabilidade grave satisfarão critérios 1 ano depois. Baixas taxas de conversão para transtorno bipolar. Crianças com irritabilidade crônica têm risco aumentado de transtornos depressivos unipolares e/ou ansiedade na idade adulta.",
    "prognostico": "Transtorno bipolar é mais comum antes da adolescência (<1%); TDDH tende a diminuir com a transição para a vida adulta.",
      }
}
```

---

## Transtorno do Espectro Autista

```json
{
  "meta": {
    "id": "transtorno_do_espectro_autista",
    "nome_completo": "Transtorno do Espectro Autista",
    "sigla": "TEA",
    "codigo": {
      "dsm5": "299.00",
      "cid10": "F84.0",
      "cid11": "6A02"
    },
    "capitulo": "Transtornos do Neurodesenvolvimento",
    "capitulo_id": "01",
    "grupo": "Transtorno do Espectro Autista",
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Autismo Infantil",
      "Síndrome de Asperger",
      "Transtorno Invasivo do Desenvolvimento"
    ]
  },
  "prevalencia": {
    "populacao_geral": "Estima-se em cerca de 1% a 2% da população, com taxas de diagnóstico crescentes nas últimas décadas devido a maior conscientização e mudanças de critérios.",
    "proporcao_sexo": "Razão de aproximadamente 4:1 a favor do sexo masculino.",
    "variacoes_culturais": null,
    "notas": "As taxas de prevalência parecem ser semelhantes entre diferentes culturas e raças.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Antes dos 2 anos de idade (embora sintomas sutis possam ser vistos no primeiro ano de vida)",
    "trajetoria": "Os sintomas costumam ser contínuos e persistentes ao longo da vida, embora intervenções comportamentais precoces e intensivas alterem positivamente a trajetória funcional.",
    "prognostico": "Altamente dependente da presença de deficiência intelectual e da capacidade de comunicação verbal funcional até os 5 anos de idade.",
      }
}
```

---

## Transtorno de Escoriação (Skin-Picking)

```json
{
  "meta": {
    "id": "transtorno_escoriacao",
    "nome_completo": "Transtorno de Escoriação (Skin-Picking)",
    "sigla": null,
    "codigo": {
      "dsm5": "698.4",
      "cid10": "L98.1",
      "cid11": "6B26"
    },
    "capitulo": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
    "capitulo_id": "06",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Excoriação neurótica",
      "Dermatillomania"
    ]
  },
  "prevalencia": {
    "populacao_geral": "1,4% (estimativa adultos)",
    "proporcao_sexo": "Mais comum em mulheres (~75%)",
    "variacoes_culturais": null,
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Bimodal: ~10 anos e início na adolescência/adulto jovem",
    "trajetoria": "Crônico; pode flutuar com estresse.",
    "prognostico": "Habit Reversal Training eficaz; N-acetilcisteína como adjuvante.",
      }
}
```

---

## Transtorno Específico da Aprendizagem

```json
{
  "meta": {
    "id": "transtorno_especifico_aprendizagem",
    "nome_completo": "Transtorno Específico da Aprendizagem",
    "sigla": null,
    "codigo": {
      "dsm5": "315.00",
      "cid10": "F81.0",
      "cid11": "6A03"
    },
    "capitulo": "Transtornos do Neurodesenvolvimento",
    "capitulo_id": "01",
    "grupo": "Transtorno Específico da Aprendizagem",
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Dislexia",
      "Discalculia",
      "Disgrafia"
    ]
  },
  "prevalencia": {
    "populacao_geral": "5% a 15% entre crianças em idade escolar e aproximadamente 4% em adultos.",
    "proporcao_sexo": "Mais comum em indivíduos do sexo masculino.",
    "variacoes_culturais": null,
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Anos escolares (frequentemente 6 a 8 anos)",
    "trajetoria": "Persiste até a idade adulta com dificuldades na velocidade de leitura, escrita acadêmica ou cálculos práticos, embora estratégias adaptativas amenizem o impacto prático.",
    "prognostico": "Altamente dependente de diagnóstico precoce e intervenção psicopedagógica intensiva.",
      }
}
```

---

## Transtorno Esquizoafetivo

```json
{
  "meta": {
    "id": "transtorno_esquizoafetivo",
    "nome_completo": "Transtorno Esquizoafetivo",
    "sigla": null,
    "codigo": {
      "dsm5": "295.70",
      "cid10": "F25.9",
      "cid11": "6A21"
    },
    "capitulo": "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
    "capitulo_id": "02",
    "grupo": null,
    "faixa_etaria_alvo": "transversal",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "Aproximadamente 0,3% ao longo da vida.",
    "proporcao_sexo": "Mais comum em indivíduos do sexo feminino, impulsionado pelo tipo depressivo.",
    "variacoes_culturais": null,
    "notas": "O risco de suicídio ao longo da vida é de 5%, similar ao da esquizofrenia.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Início no jovem adulto",
    "trajetoria": "A proporção relativa de sintomas de humor e psicose pode mudar ao longo do tempo. O prognóstico é ligeiramente melhor que o da esquizofrenia, mas geralmente pior que o de transtornos de humor isolados.",
    "prognostico": "O prejuízo ocupacional e social é frequente, necessitando intervenção de longo prazo.",
      }
}
```

---

## Transtorno Esquizofreniforme

```json
{
  "meta": {
    "id": "transtorno_esquizofreniforme",
    "nome_completo": "Transtorno Esquizofreniforme",
    "sigla": null,
    "codigo": {
      "dsm5": "295.40",
      "cid10": "F20.81",
      "cid11": "6A23"
    },
    "capitulo": "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
    "capitulo_id": "02",
    "grupo": null,
    "faixa_etaria_alvo": "transversal",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "A incidência é cerca de cinco vezes menor que a da esquizofrenia em países desenvolvidos.",
    "proporcao_sexo": "Incidência similar entre os sexos.",
    "variacoes_culturais": null,
    "notas": "Aproximadamente um terço dos indivíduos recupera-se em até 6 meses, mantendo o diagnóstico de esquizofreniforme; os dois terços restantes evoluem para esquizofrenia ou esquizoafetivo.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Início da idade adulta",
    "trajetoria": "O curso do transtorno esquizofreniforme é intermediário em termos de duração. Cerca de 60-80% dos diagnósticos provisórios acabam evoluindo para esquizofrenia ao longo de 6 meses.",
    "prognostico": "Depende muito das características de bom prognóstico. Se presentes, a recuperação total é significativamente mais provável.",
      }
}
```

---

## Transtorno de Insônia

```json
{
  "meta": {
    "id": "transtorno_insonia",
    "nome_completo": "Transtorno de Insônia",
    "sigla": null,
    "codigo": {
      "dsm5": "307.42",
      "cid10": "F51.01",
      "cid11": "7A00"
    },
    "capitulo": "Transtornos do Sono-Vigília",
    "capitulo_id": "12",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "6–10% atendem critérios do transtorno; 10–15% com prejuízos diurnos; ~1/3 com sintomas.",
    "proporcao_sexo": "1,44:1 F:M",
    "variacoes_culturais": null,
    "notas": "Mais prevalente em mulheres e idosos.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Adultos jovens; também menopausa e idade avançada",
    "trajetoria": "Pode ser ocasional, persistente ou recorrente. Taxas de cronicidade 45–75% em 1–7 anos.",
    "prognostico": "Melhor com terapia cognitivo-comportamental do sono (TCC-I).",
      }
}
```

---

## Transtorno da Linguagem

```json
{
  "meta": {
    "id": "transtorno_linguagem",
    "nome_completo": "Transtorno da Linguagem",
    "sigla": null,
    "codigo": {
      "dsm5": "315.32",
      "cid10": "F80.2",
      "cid11": "6A01"
    },
    "capitulo": "Transtornos do Neurodesenvolvimento",
    "capitulo_id": "01",
    "grupo": "Transtornos da Comunicação",
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Afasia do desenvolvimento",
      "Disfasia"
    ]
  },
  "prevalencia": {
    "populacao_geral": "Ocorre em aproximadamente 7% a 8% das crianças em idade escolar.",
    "proporcao_sexo": "Mais frequente em meninos.",
    "variacoes_culturais": null,
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "4 anos (onde o diagnóstico se torna estável)",
    "trajetoria": "Crianças com atrasos puramente expressivos têm melhor prognóstico que aquelas com atrasos mistos (receptivo-expressivos).",
    "prognostico": "Dificuldades que persistem após os 4 anos tendem a ser crônicas na vida adulta.",
      }
}
```

---

## Transtorno Obsessivo-Compulsivo

```json
{
  "meta": {
    "id": "transtorno_obsessivo_compulsivo",
    "nome_completo": "Transtorno Obsessivo-Compulsivo",
    "sigla": "TOC",
    "codigo": {
      "dsm5": "300.3",
      "cid10": "F42",
      "cid11": "6B20"
    },
    "capitulo": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
    "capitulo_id": "06",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "1,2% (prevalência de 12 meses)",
    "proporcao_sexo": "Levemente mais comum em mulheres adultas; mais em meninos na infância",
    "variacoes_culturais": "Sintomas similares cross-culturalmente; conteúdo das obsessões pode variar.",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Pico bimodal: 9–10 anos (meninos) e início na adolescência/adulto jovem (mulheres); mediana geral ~19–20 anos",
    "trajetoria": "Geralmente crônico com flutuações; 15% curso deteriorante; 5% episódico.",
    "prognostico": "Boa resposta a TCC com exposição e resposta (ERPrev) e ISRSs.",
      }
}
```

---

## Transtorno de Pânico

```json
{
  "meta": {
    "id": "transtorno_panico",
    "nome_completo": "Transtorno de Pânico",
    "sigla": "TP",
    "codigo": {
      "dsm5": "300.01",
      "cid10": "F41.0",
      "cid11": "6B01"
    },
    "capitulo": "Transtornos de Ansiedade",
    "capitulo_id": "05",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Síndrome do pânico"
    ]
  },
  "prevalencia": {
    "populacao_geral": "2–3% (prevalência de 12 meses em adultos e adolescentes nos EUA e Europa)",
    "proporcao_sexo": "2:1 mulheres:homens",
    "variacoes_culturais": "Ataque de pânico pode apresentar-se como khyâl cap (cultura cambojana) ou ataque de nervios (latino). Prevalência menor em africanos americanos, asiáticos americanos, latinos.",
    "notas": "Prevalência de ataques de pânico (isolados) é ~11%/ano; critérios plenos do TP não atingidos na maioria.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Adulto jovem; pico 20–24 anos; raro antes dos 14 e após os 45",
    "trajetoria": "Geralmente crônico com flutuações. Episódio mais grave raramente excede 1 ano isoladamente.",
    "prognostico": "Variável; prognóstico pior associado a esquiva fóbica marcada, depressão comórbida.",
      }
}
```

---

## Transtorno por Uso de Álcool

```json
{
  "meta": {
    "id": "transtorno_por_uso_de_alcool",
    "nome_completo": "Transtorno por Uso de Álcool",
    "sigla": null,
    "codigo": {
      "dsm5": "303.90",
      "cid10": "F10.20",
      "cid11": "6C40"
    },
    "capitulo": "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
    "capitulo_id": "16",
    "grupo": "Álcool",
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Dependência de álcool",
      "Abuso de álcool"
    ]
  },
  "prevalencia": {
    "populacao_geral": "4,6% (12-17a); 8,5% adultos ≥18a",
    "proporcao_sexo": "12,4% homens vs 4,9% mulheres adultos",
    "variacoes_culturais": "Maior entre índios norte-americanos (12,1%)",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Fim da adolescência / 20-25 anos",
    "trajetoria": "Curso variável com períodos de remissão e recaídas. Primeira intoxicação na adolescência.",
    "prognostico": "Prognóstico promissor para a maioria; casos graves representam parcela minoritária.",
      }
}
```

---

## Transtorno por Uso de Estimulantes

```json
{
  "meta": {
    "id": "transtorno_por_uso_de_estimulantes",
    "nome_completo": "Transtorno por Uso de Estimulantes",
    "sigla": null,
    "codigo": {
      "dsm5": "304.40",
      "cid10": "F15.20",
      "cid11": "6C42"
    },
    "capitulo": "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
    "capitulo_id": "16",
    "grupo": "Estimulantes",
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Dependência de cocaína",
      "Dependência de anfetaminas",
      "Metanfetamina"
    ]
  },
  "prevalencia": {
    "populacao_geral": "Anfetamina: 0,2% (12-17a e adultos); Cocaína: 0,2% (12-17a), 0,3% adultos.",
    "proporcao_sexo": "Cocaína: mais em homens (0,4% vs 0,1% adultos).",
    "variacoes_culturais": null,
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "12-25 anos",
    "trajetoria": "Progressão rápida com uso fumado/intravenoso; gradual com uso intranasal/oral.",
    "prognostico": "Reservado para uso crônico; depressão/ideação suicida durante abstinência.",
      }
}
```

---

## Transtorno por Uso de Opioides

```json
{
  "meta": {
    "id": "transtorno_por_uso_de_opioides",
    "nome_completo": "Transtorno por Uso de Opioides",
    "sigla": null,
    "codigo": {
      "dsm5": "304.00",
      "cid10": "F11.20",
      "cid11": "6C41"
    },
    "capitulo": "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
    "capitulo_id": "16",
    "grupo": "Opioides",
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Dependência de heroína",
      "Abuso de opioides"
    ]
  },
  "prevalencia": {
    "populacao_geral": "0,37% adultos ≥18a; ~1% (12-17a) para analgésicos.",
    "proporcao_sexo": "1,5:1 homens:mulheres (analgesicos); 3:1 com heroína.",
    "variacoes_culturais": "Maior entre índios norte-americanos (1,25%).",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Fim da adolescência / início dos 20 anos",
    "trajetoria": "Curso crônico com recaídas frequentes após tratamento.",
    "prognostico": "20-30% alcançam abstinência duradoura; mortalidade 1,5-2%/ano.",
      }
}
```

---

## Transtorno por Uso de Tabaco

```json
{
  "meta": {
    "id": "transtorno_por_uso_de_tabaco",
    "nome_completo": "Transtorno por Uso de Tabaco",
    "sigla": null,
    "codigo": {
      "dsm5": "305.1",
      "cid10": "F17.200",
      "cid11": "6C4A"
    },
    "capitulo": "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
    "capitulo_id": "16",
    "grupo": "Tabaco",
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Dependência de nicotina"
    ]
  },
  "prevalencia": {
    "populacao_geral": "~13% adultos ≥18a (dependência de nicotina DSM-IV); ~21% fumantes atuais.",
    "proporcao_sexo": "14% homens vs 12% mulheres adultos.",
    "variacoes_culturais": "Maior em índios norte-americanos (23%); maior em países em desenvolvimento.",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Adolescência; início após 21 anos é raro.",
    "trajetoria": ">80% tentam parar; 60% recaem em uma semana; metade alcança abstinência.",
    "prognostico": "50% dos que não param morrem prematuramente de doenças relacionadas ao tabaco.",
      }
}
```

---

## Transtorno Psicótico Breve

```json
{
  "meta": {
    "id": "transtorno_psicotico_breve",
    "nome_completo": "Transtorno Psicótico Breve",
    "sigla": "TPB",
    "codigo": {
      "dsm5": "298.8",
      "cid10": "F23",
      "cid11": "6A23.0"
    },
    "capitulo": "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
    "capitulo_id": "02",
    "grupo": null,
    "faixa_etaria_alvo": "transversal",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "Pode responder por 9% dos casos de primeiro surto psicótico nos EUA.",
    "proporcao_sexo": "Duas vezes mais comum em indivíduos do sexo feminino do que no masculino.",
    "variacoes_culturais": null,
    "notas": "A idade média de início é de cerca de 30 anos.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Cerca de 30 anos",
    "trajetoria": "O início dos sintomas é tipicamente súbito, ocorrendo uma mudança de um estado não psicótico para psicótico dentro do intervalo de duas semanas. O retorno ao nível funcional anterior é completo.",
    "prognostico": "Excelente prognóstico em termos de recuperação total, embora haja risco significativo de comportamento autolesivo e suicídio durante o período agudo.",
      }
}
```

---

## Transtornos de Adaptação

```json
{
  "meta": {
    "id": "transtornos_adaptacao",
    "nome_completo": "Transtornos de Adaptação",
    "sigla": null,
    "codigo": {
      "dsm5": "309.0",
      "cid10": "F43.20",
      "cid11": "6B43"
    },
    "capitulo": "Transtornos Relacionados a Trauma e a Estressores",
    "capitulo_id": "07",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "prevalencia": {
    "populacao_geral": "5–20% em amostras ambulatoriais de saúde mental; 50% em serviços médicos",
    "proporcao_sexo": "2:1 mulheres:homens",
    "variacoes_culturais": null,
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Dentro de 3 meses do estressor; qualquer idade",
    "trajetoria": "Geralmente remite quando estressor cessa; crônico se estressor persistir.",
    "prognostico": "Bom com intervenção breve focada no problema.",
      }
}
```

---

## Tricotilomania (Transtorno de Arrancar o Cabelo)

```json
{
  "meta": {
    "id": "tricotilomania",
    "nome_completo": "Tricotilomania (Transtorno de Arrancar o Cabelo)",
    "sigla": null,
    "codigo": {
      "dsm5": "312.39",
      "cid10": "F63.3",
      "cid11": "6B25"
    },
    "capitulo": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
    "capitulo_id": "06",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Hair-pulling disorder"
    ]
  },
  "prevalencia": {
    "populacao_geral": "1–2% (prevalência de 12 meses)",
    "proporcao_sexo": "10:1 mulheres:homens em amostras clínicas; mais equilibrado na infância",
    "variacoes_culturais": null,
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Pico na pré-adolescência (~12–13 anos); pode ser crônico se não tratado",
    "trajetoria": "Crônico com flutuações; pode remitir na gravidez.",
    "prognostico": "Responde a TCC (Habit Reversal Training) e N-acetilcisteína.",
      }
}
```

---
