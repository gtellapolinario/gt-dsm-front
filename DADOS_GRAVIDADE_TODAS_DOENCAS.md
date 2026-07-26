# Parâmetros de Gravidade em JSON dos Transtornos (DSM-5-TR)

# Agorafobia

```json
"gravidade": {
      "tem_gravidade_formal": "**false**",
      "tipo": "nao_aplica",
      "regra_atribuicao": "Inferida pelo numero de situacoes temidas, grau de restricao (ate confinamento domiciliar total), necessidade de acompanhante",
      "dominios": "N. situacoes temidas, capacidade de sair sozinho, funcionamento profissional"
    }
```

---

# Anorexia Nervosa

```json
gravidade: {
      texto_completo:
        "- **tem_gravidade_formal:** TRUE\n- **Tipo:** marcador_biometrico\n- **Niveis (adultos, IMC):**\n\n| Nivel | IMC Adulto |\n|-------|-----------|\n| Leve | ≥ 17 kg/m² |\n| Moderada | 16 - 16,99 kg/m² |\n| Grave | 15 - 15,99 kg/m² |\n| Extrema | < 15 kg/m² |\n\n- **Criancas/adolescentes:** Usar percentil do IMC por idade\n- **Elevacao permitida:** Nivel pode ser aumentado para refletir sintomas clinicos, incapacidade funcional e necessidade de supervisao",
    }
```

---

# Bulimia Nervosa

```json
"gravidade": {
      "texto_completo": "- **tem_gravidade_formal:** TRUE\n- **Tipo:** frequencia_eventos\n- **Niveis (comportamentos compensatorios/semana):**\n\n| Nivel | Frequencia |\n|-------|-----------|\n| Leve | 1-3 episodios/semana |\n| Moderada | 4-7 episodios/semana |\n| Grave | 8-13 episodios/semana |\n| Extrema | ≥14 episodios/semana |\n\n- **Elevacao permitida:** Nivel pode ser aumentado para refletir outros sintomas e incapacidade funcional"
    }
```

---

# Transtorno da Conduta

```json
"gravidade": {
      "texto_completo": "| Gravidade | Definicao |\n|-----------|-----------|\n| Leve | Poucos problemas alem do necessario; danos relativamente pequenos (mentir, faltar aula, violacoes de regras) |\n| Moderada | Numero de problemas e efeito entre leve e grave (furtar sem confronto, vandalismo) |\n| Grave | Muitos problemas alem do necessario; danos consideraveis (sexo forcado, crueldade fisica, armas, roubo confrontando vitima, invasao) |"
    }
```

---

# Transtorno do Desenvolvimento Intelectual (Deficiência Intelectual)

```json
"gravidade": {
      "tem_gravidade_formal": "SIM",
      "tipo": "funcionamento_adaptativo",
      "regra_atribuicao": "Baseada no funcionamento adaptativo, NAO em escores de QI",
      "leve": "Dificuldades academicas; necessario apoio em 1+ areas; pensamento concreto",
      "moderada": "Habilidades conceituais muito atrasadas; progresso lento na leitura/escrita/matematica; nivel academico elementar no adulto",
      "grave": "Alcance limitado de habilidades conceituais; pouca compreensao de linguagem escrita/numeros/tempo/dinheiro",
      "profunda": "Habilidades conceituais envolvem mais o mundo fisico que processos simbolicos; pode usar objetos de forma direcionada"
    }
```

---

# Delirium

```json
"gravidade": {
    "tipo": "nao_aplica",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

---

# Esquizofrenia

```json
"gravidade": {
      "tem_gravidade_formal": "Sim",
      "tipo": "ordinal_por_dominio",
      "escala": "0-4 para cada dimensão (últimos 7 dias)",
      "dominios_avaliados": "Delírios, alucinações, discurso desorganizado, comportamento psicomotor anormal, sintomas negativos",
      "niveis": "0=ausente, 1=equívoco/débil, 2=leve, 3=moderado, 4=grave",
      "observacao": "USO OPCIONAL; diagnóstico pode ser feito sem este especificador"
    }
```

---

# Transtorno Explosivo Intermitente

```json
"gravidade": {
    "tipo": "nao_aplica",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

---

# Fobia Específica

```json
"gravidade": {
      "tem_gravidade_formal": "**false**",
      "tipo": "nao_aplica",
      "regra_atribuicao": "Inferida pelo numero de objetos temidos (75% temem >1), grau de esquiva, prejuizo funcional"
    }
```

---

# Mutismo Seletivo

```json
"gravidade": {
      "tem_gravidade_formal": "**false**"
    }
```

---

# Transtorno de Oposição Desafiante

```json
"gravidade": {
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

---

# Transtorno de Estresse Pós-Traumático

```json
"gravidade": {
      "texto_completo": "- **tem_gravidade_formal:** false (DSM-5 não define niveis formais de gravidade para TEPT)\n- **Tipo:** nao_aplica\n- O DSM-5 menciona que o transtorno pode ser \"especialmente grave ou duradouro quando o estressor é interpessoal e intencional\" (tortura, violencia sexual), mas nao estabelece niveis ordinal"
    }
```

---

# Transtorno Neurocognitivo Maior ou Leve Devido à Doença de Alzheimer

```json
"gravidade": {
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

---

# Transtorno Neurocognitivo Leve

```json
"gravidade": {
    "tipo": "nao_aplica",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  }
```

---

# Transtorno Neurocognitivo Maior

```json
"gravidade": {
      "leve": "Dificuldades com AIVDs complexas (trabalho domestico, controle do dinheiro)",
      "moderada": "Dificuldades com ABVDs (alimentar-se, vestir-se)",
      "grave": "Totalmente dependente"
    }
```

---

# Transtorno Neurocognitivo Vascular Maior ou Leve

```json
"gravidade": {
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

---

# Transtorno da Personalidade Antissocial

```json
"gravidade": {
      "tipo": "nao_aplica"
    }
```

---

# Transtorno da Personalidade Borderline

```json
"gravidade": {
      "tipo": "nao_aplica"
    }
```

---

# Transtorno da Personalidade Dependente

```json
"gravidade": {
      "tipo": "nao_aplica"
    }
```

---

# Transtorno da Personalidade Esquizoide

```json
"gravidade": {
      "tipo": "nao_aplica"
    }
```

---

# Transtorno da Personalidade Esquizotípica

```json
"gravidade": {
      "tipo": "nao_aplica"
    }
```

---

# Transtorno da Personalidade Evitativa

```json
"gravidade": {
      "tipo": "nao_aplica"
    }
```

---

# Transtorno da Personalidade Histriônica

```json
"gravidade": {
      "tipo": "nao_aplica"
    }
```

---

# Transtorno da Personalidade Narcisista

```json
"gravidade": {
      "tipo": "nao_aplica"
    }
```

---

# Transtorno da Personalidade Obsessivo-Compulsiva

```json
"gravidade": {
      "tipo": "nao_aplica"
    }
```

---

# Transtorno da Personalidade Paranóide

```json
"gravidade": {
      "tipo": "nao_aplica"
    }
```

---

# Transtorno de Acumulação

```json
"gravidade": {
      "texto_completo": "- **tem_gravidade_formal:** NAO\n- **tipo:** nao_aplica\n- **niveis:** Nao ha niveis formais leve/moderado/grave\n- **nota:** Gravidade inferida pelo nivel de obstrucao, insight, presenca de condicoes insalubres, riscos de seguranca"
    }
```

---

# Transtorno Alimentar Restritivo/Evitativo

```json
"gravidade": {
      "texto_completo": "- **tem_gravidade_formal:** FALSE\n- **Tipo:** nao_aplica\n- Nota: a gravidade e implicita na consequencia clinica (perda de peso, deficiencia nutricional, necessidade de sonda, prejuizo funcional), mas nao ha niveis formais no DSM-5"
    }
```

---

# Transtorno de Ansiedade de Doença

```json
"gravidade": {
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

---

# Transtorno de Ansiedade Generalizada

```json
"gravidade": {
      "tem_gravidade_formal": "**false** — O DSM-5 nao define niveis formais de gravidade para TAG",
      "tipo": "nao_aplica",
      "niveis": "—",
      "regra_atribuicao": "A gravidade e inferida clinicamente pelo numero de sintomas associados, intensidade da preocupacao e grau de prejuizo funcional",
      "dominios": "Funcionamento social, profissional, sono"
    }
```

---

# Transtorno de Ansiedade de Separação

```json
"gravidade": {
      "tem_gravidade_formal": "**false**",
      "tipo": "nao_aplica",
      "regra_atribuicao": "Inferida pelo numero de sintomas (3-8), grau de prejuizo, idade (mais grave se persiste na adulta)",
      "dominios": "Escolar, social, independencia, relacionamentos"
    }
```

---

# Transtorno de Ansiedade Social (Fobia Social)

```json
"gravidade": {
      "tem_gravidade_formal": "**false**",
      "tipo": "nao_aplica",
      "regra_atribuicao": "Inferida pelo numero de situacoes temidas (generalizado vs. circunscrito), intensidade da ansiedade, grau de esquiva, prejuizo funcional",
      "dominios": "Funcionamento social, profissional/academico, relacionamentos"
    }
```

---

# Transtorno Bipolar Tipo I

```json
"gravidade": {
      "texto_completo": "- **tem_gravidade_formal:** SIM\n- **tipo:** episodio_atual\n- **niveis:** Leve, Moderado, Grave, Nao Especificado\n- **regra_atribuicao:** A gravidade baseia-se na quantidade de sintomas dos criterios, na gravidade desses sintomas e no grau de incapacidade funcional.\n  - **Leve:** Poucos sintomas excedem os criterios, intensidade manejavel, prejuizo funcional menor.\n  - **Moderado:** Quantidade/intensidade/prejuizo entre leve e grave.\n  - **Grave:** Sintomas excedem substancialmente os necessarios, intensidade seria/dificil de manejar, interferencia acentuada no funcionamento.\n- **dominios:** Sintomas + Funcionamento social/profissional"
    }
```

---

# Transtorno Bipolar Tipo II

```json
"gravidade": {
      "texto_completo": "- **tem_gravidade_formal:** SIM\n- **tipo:** episodio_atual\n- **niveis:** Leve, Moderado, Grave\n- **regra_atribuicao:** Mesmos criterios de gravidade do TB I, mas aplicaveis apenas descritivamente (sem codigos separados)\n- **dominios:** Quantidade de sintomas + intensidade + incapacidade funcional"
    }
```

---

# Transtorno de Compulsão Alimentar

```json
"gravidade": {
      "texto_completo": "- **tem_gravidade_formal:** TRUE\n- **Tipo:** frequencia_eventos\n- **Niveis (episodios de compulsao/semana):**\n\n| Nivel | Frequencia |\n|-------|-----------|\n| Leve | 1-3 episodios/semana |\n| Moderada | 4-7 episodios/semana |\n| Grave | 8-13 episodios/semana |\n| Extrema | ≥14 episodios/semana |\n\n- **Elevacao permitida:** Nivel pode ser aumentado para refletir outros sintomas e incapacidade funcional"
    }
```

---

# Transtorno de Conversão (Transtorno de Sintomas Neurológicos Funcionais)

```json
"gravidade": {
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

---

# Transtorno de Déficit de Atenção/Hiperatividade

```json
"gravidade": {
      "tem_gravidade_formal": "SIM",
      "tipo": "contagem_sintomas_e_prejuizo",
      "leve": "Poucos sintomas alem dos necessarios para o diagnostico; prejuizos pequenos no funcionamento",
      "moderada": "Sintomas ou prejuizo entre leve e grave",
      "grave": "Muitos sintomas alem dos necessarios; varios sintomas particularmente graves; ou prejuizo acentuado no funcionamento"
    }
```

---

# Transtorno Delirante

```json
"gravidade": {
      "texto_completo": "- Mesma escala dimensional (0-4 por domínio) - uso opcional"
    }
```

---

# Transtorno Depressivo Maior

```json
"gravidade": {
      "tem_gravidade_formal": "Sim",
      "tipo": "episodio_atual",
      "regra_atribuicao": "Baseada no número de sintomas, gravidade e incapacitação funcional"
    }
```

---

# Transtorno Depressivo Persistente (Distimia)

```json
"gravidade": {
      "tem_gravidade_formal": "Sim",
      "tipo": "ordinal_simples (leve/moderada/grave)"
    }
```

---

# Transtorno Dismórfico Corporal

```json
"gravidade": {
      "texto_completo": "- **tem_gravidade_formal:** NAO\n- **tipo:** nao_aplica\n- **niveis:** Nao ha niveis formais leve/moderado/grave\n- **nota:** Gravidade inferida pelo insight (pior insight = maior morbidade/suicidalidade), tempo gasto, nivel de prejuizo funcional, e comorbidade depressiva"
    }
```

---

# Transtorno Disruptivo da Desregulação do Humor

```json
"gravidade": {
      "texto_completo": "- Não há escala formal específica no DSM-5\n- Baseada em: frequência/intensidade das explosões, número de ambientes afetados, grau do prejuíço funcional\n- tipo: **nao_aplica** (sem gravidade formal DSM-5)"
    }
```

---

# Transtorno do Espectro Autista

```json
"gravidade": {
      "tem_gravidade_formal": "SIM",
      "tipo": "necessidade_suporte_por_dominio",
      "regra_atribuicao": "Gravidade e atribuida SEPARADAMENTE para cada um dos dois dominios (comunicacao social e comportamentos restritos/repetitivos)",
      "nivel_3_apoio_muito_substancial": "Deficits graves na comunicacao verbal e nao-verbal; prejuizos graves de funcionamento; grande limitacao em iniciar interacoes; resposta minima a aberturas sociais (ex: fala de poucas palavras, raramente inicia interacoes)",
      "nivel_2_apoio_substancial": "Deficits graves na comunicacao; prejuizos sociais aparentes mesmo com apoio; limitacao em iniciar interacoes; resposta reduzida/anormal a aberturas sociais (ex: frases simples, interacao limitada a interesses especiais, comunicacao nao-verbal estranha)",
      "nivel_1_apoio": "Na ausencia de apoio, deficits causam prejuizos notaveis; dificuldade para iniciar interacoes; respostas atipicas/sem sucesso a aberturas sociais; interesse reduzido por interacoes (ex: fala frases completas, mas falhas na conversacao; tentativas de amizade estranhas/malsucedidas)"
    }
```

---

# Transtorno de Escoriação (Skin-Picking)

```json
"gravidade": {
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

---

# Transtorno Específico da Aprendizagem

```json
"gravidade": {
      "tem_gravidade_formal": "SIM",
      "tipo": "ordinal_por_dominio",
      "leve": "Dificuldade em 1-2 dominios academicos; capaz de compensar ou funcionar bem com adaptacoes/apoio",
      "moderada": "Dificuldades acentuadas em 1+ dominios; improvavel tornar-se proficiente sem ensino intensivo/especializado; adaptacoes/apoio por parte do dia necessarios",
      "grave": "Dificuldades graves em varios dominios; improvavel aprender sem ensino individualizado especializado continuo; mesmo com adaptacoes pode nao completar atividades de forma eficiente"
    }
```

---

# Transtorno Esquizoafetivo

```json
"gravidade": {
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

---

# Transtorno Esquizofreniforme

```json
"gravidade": {
      "texto_completo": "- Mesma escala dimensional da esquizofrenia (0-4 por domínio)\n- USO OPCIONAL; diagnóstico pode ser feito sem este especificador"
    }
```

---

# Transtorno de Insônia

```json
"gravidade": {
      "texto_completo": "**tem_gravidade_formal**: false\n**tipo**: nao_aplica\n**nota**: O DSM-5 nao define niveis formais de gravidade para insonia. A gravidade e avaliada clinicamente pela frequencia/intensidade dos sintomas e prejuizos funcionais. Critérios quantitativos ilustrativos (nao obrigatorios):\n- Latencia para iniciar sono: > 20-30 minutos\n- Tempo acordado apos despertar: > 20-30 minutos\n- Despertar precoce: >= 30 min antes do horario, com sono total < 6.5h"
    }
```

---

# Transtorno da Linguagem

```json
"gravidade": {
      "tem_gravidade_formal": "NAO",
      "tipo": "nao_aplica"
    }
```

---

# Transtorno Obsessivo-Compulsivo

```json
"gravidade": {
      "texto_completo": "- **tem_gravidade_formal:** NAO\n- **tipo:** contagem_sintomas_e_prejuizo\n- **niveis:** Nao ha niveis formais \"leve/moderado/grave\" no DSM-5 para TOC\n- **regra_atribuicao_indireta:** A gravidade e inferida por:\n  - Horas por dia gastas em sintomas (1-3h = leve-moderado; quase constante = grave)\n  - Nivel de incapacitacao funcional\n  - Presenca de insight pobre/ausente\n  - Comorbidades"
    }
```

---

# Transtorno de Pânico

```json
"gravidade": {
      "tem_gravidade_formal": "**false** — O DSM-5 nao define niveis formais de gravidade",
      "tipo": "nao_aplica",
      "niveis": "—",
      "regra_atribuicao": "Inferida pela frequencia dos ataques, numero/tipo de sintomas, grau de prejuizo, presenca de agorafobia e comorbidades",
      "dominios": "Frequencia de ataques, incapacidade social/profissional, uso de servicos de saude"
    }
```

---

# Transtorno por Uso de Álcool

```json
"gravidade": {
      "texto_completo": "| Nível | Critérios | Códigos |\n|-------|-----------|---------|\n| Leve | 2-3 sintomas | 305.00 (F10.10) |\n| Moderada | 4-5 sintomas | 303.90 (F10.20) |\n| Grave | 6+ sintomas | 303.90 (F10.20) |\n| tipo_gravidade | contagem_sintomas_e_prejuizo | |"
    }
```

---

# Transtorno por Uso de Estimulantes

```json
"gravidade": {
      "texto_completo": "| Nível | Cocaína | Anfetamina/Outro |\n|-------|---------|------------------|\n| Leve | 305.60 (F14.10) | 305.70 (F15.10) |\n| Moderada | 304.20 (F14.20) | 304.40 (F15.20) |\n| Grave | 304.20 (F14.20) | 304.40 (F15.20) |"
    }
```

---

# Transtorno por Uso de Opioides

```json
"gravidade": {
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

---

# Transtorno por Uso de Tabaco

```json
"gravidade": {
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

---

# Transtorno Psicótico Breve

```json
"gravidade": {
      "texto_completo": "- Escala dimensional 0-4 (opcional)"
    }
```

---

# Transtornos de Adaptação

```json
"gravidade": {
      "texto_completo": "- **tem_gravidade_formal:** false\n- **Tipo:** nao_aplica"
    }
```

---

# Tricotilomania (Transtorno de Arrancar o Cabelo)

```json
"gravidade": {
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

---
