# Gravidade no DSM-5-TR — snippets JSON para 58 transtornos

## Objetivo e contrato adotado

Este documento normaliza o campo `gravidade` pela semântica do DSM-5-TR, e não pela simples presença de uma lista chamada `niveis`.

Cada snippet é um objeto JSON válido e autônomo. O campo `classificacao_dsm` funciona como discriminador principal:

| `classificacao_dsm` | Uso |
|---|---|
| `formal_categorica` | O DSM estabelece categorias de gravidade selecionáveis. |
| `formal_dimensional` | A gravidade é atribuída separadamente por domínio. |
| `formal_contextual` | A gravidade depende do episódio, apresentação ou contexto selecionado. |
| `formal_condicional` | Os níveis só se aplicam quando uma condição explícita é satisfeita. |
| `sem_niveis_formais` | O DSM não estabelece níveis formais de gravidade para o transtorno. |

Decisões estruturais:

- `classificacao_dsm` é a fonte de verdade. Um eventual `tem_gravidade_formal` legado deve ser derivado dela, nunca preenchido manualmente.
- `niveis` aparece apenas quando existem categorias formais.
- `dominios` aparece quando cada dimensão precisa ser avaliada separadamente.
- O placeholder dos transtornos sem níveis formais é informativo e nunca deve ser transformado em opção selecionável.
- Escalas clínicas externas e medidas da Seção III não devem ser apresentadas como níveis diagnósticos do DSM.

---

## 1. Agorafobia

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para agorafobia."
  }
}
```

## 2. Anorexia nervosa

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "gravidade_atual",
    "tipo": "marcador_biometrico_com_ajuste_clinico",
    "lembrete_aplicador": "Use o IMC atual em adultos e o percentil de IMC em crianças e adolescentes.",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Adultos: IMC igual ou superior a 17 kg/m²."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Adultos: IMC entre 16 e 16,99 kg/m²."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Adultos: IMC entre 15 e 15,99 kg/m²."
      },
      {
        "id": "extrema",
        "label": "Extrema",
        "descritor": "Adultos: IMC inferior a 15 kg/m²."
      }
    ],
    "regra_atribuicao": "O nível mínimo é definido pelo IMC ou pelo percentil correspondente.",
    "observacao": "O nível pode ser elevado conforme sintomas clínicos, incapacidade funcional e necessidade de supervisão."
  }
}
```

## 3. Bulimia nervosa

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "gravidade_atual",
    "tipo": "frequencia_semanal_de_eventos",
    "lembrete_aplicador": "Classifique pela média semanal de comportamentos compensatórios inapropriados.",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "1 a 3 episódios por semana."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "4 a 7 episódios por semana."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "8 a 13 episódios por semana."
      },
      {
        "id": "extrema",
        "label": "Extrema",
        "descritor": "14 ou mais episódios por semana."
      }
    ],
    "regra_atribuicao": "Use a frequência média semanal dos comportamentos compensatórios.",
    "observacao": "O nível pode ser elevado conforme outros sintomas e o grau de incapacidade funcional."
  }
}
```

## 4. Transtorno da conduta

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "transtorno",
    "tipo": "numero_de_problemas_e_magnitude_do_dano",
    "lembrete_aplicador": "Considere os problemas além do mínimo diagnóstico e a magnitude dos danos produzidos.",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos problemas além do necessário para o diagnóstico e danos relativamente pequenos."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Número de problemas e efeitos situados entre leve e grave."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos problemas além do necessário ou danos consideráveis a outras pessoas."
      }
    ],
    "regra_atribuicao": "Integre quantidade, diversidade e gravidade das condutas, com ênfase no dano causado."
  }
}
```

## 5. Transtorno do desenvolvimento intelectual (deficiência intelectual)

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_dimensional",
    "escopo": "funcionamento_adaptativo",
    "tipo": "funcionamento_adaptativo_por_dominio",
    "lembrete_aplicador": "Classifique pelo funcionamento adaptativo nos domínios conceitual, social e prático, não pelo QI.",
    "dominios": [
      {
        "id": "conceitual",
        "label": "Conceitual"
      },
      {
        "id": "social",
        "label": "Social"
      },
      {
        "id": "pratico",
        "label": "Prático"
      }
    ],
    "niveis_referencia": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Necessita apoio em tarefas adaptativas complexas."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Necessita apoio regular para atividades conceituais, sociais e práticas."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Necessita apoio amplo e contínuo para as atividades cotidianas."
      },
      {
        "id": "profunda",
        "label": "Profunda",
        "descritor": "Depende de apoio permanente para participação, segurança e cuidados cotidianos."
      }
    ],
    "regra_atribuicao": "A gravidade global deve refletir o perfil adaptativo e a intensidade de apoio necessária."
  }
}
```

## 6. Delirium

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para delirium."
  }
}
```

## 7. Esquizofrenia

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_dimensional",
    "escopo": "gravidade_atual_por_dominio",
    "tipo": "dimensoes_primarias_da_psicose",
    "uso": "opcional",
    "janela_avaliacao": "ultimos_7_dias",
    "lembrete_aplicador": "Avalie cada domínio separadamente de 0 a 4, considerando os últimos 7 dias.",
    "dominios": [
      {
        "id": "delirios",
        "label": "Delírios"
      },
      {
        "id": "alucinacoes",
        "label": "Alucinações"
      },
      {
        "id": "discurso_desorganizado",
        "label": "Discurso desorganizado"
      },
      {
        "id": "comportamento_psicomotor_anormal",
        "label": "Comportamento psicomotor anormal"
      },
      {
        "id": "sintomas_negativos",
        "label": "Sintomas negativos"
      }
    ],
    "escala": {
      "min": 0,
      "max": 4,
      "niveis": [
        {
          "valor": 0,
          "label": "Ausente"
        },
        {
          "valor": 1,
          "label": "Equívoco"
        },
        {
          "valor": 2,
          "label": "Leve"
        },
        {
          "valor": 3,
          "label": "Moderado"
        },
        {
          "valor": 4,
          "label": "Grave"
        }
      ]
    },
    "observacao": "O diagnóstico pode ser estabelecido sem o uso deste especificador."
  }
}
```

## 8. Transtorno explosivo intermitente

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno explosivo intermitente."
  }
}
```

## 9. Fobia específica

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para fobia específica."
  }
}
```

## 10. Mutismo seletivo

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para mutismo seletivo."
  }
}
```

## 11. Transtorno de oposição desafiante

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "transtorno",
    "tipo": "numero_de_ambientes",
    "lembrete_aplicador": "Classifique pelo número de ambientes em que os sintomas estão presentes.",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Sintomas limitados a um ambiente."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Alguns sintomas presentes em pelo menos dois ambientes."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Alguns sintomas presentes em três ou mais ambientes."
      }
    ],
    "regra_atribuicao": "Leve: 1 ambiente; moderada: 2 ambientes; grave: 3 ou mais ambientes."
  }
}
```

## 12. Transtorno de estresse pós-traumático

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno de estresse pós-traumático."
  }
}
```

## 13. Transtorno neurocognitivo maior ou leve devido à doença de Alzheimer

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_condicional",
    "escopo": "apenas_tnc_maior",
    "tipo": "dependencia_funcional",
    "condicao_aplicabilidade": "Aplicar os níveis somente quando a apresentação for transtorno neurocognitivo maior.",
    "lembrete_aplicador": "No TNC maior, classifique pela perda de independência nas atividades da vida diária.",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Dificuldade em atividades instrumentais da vida diária."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Dificuldade em atividades básicas da vida diária."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Dependência completa para os cuidados cotidianos."
      }
    ],
    "regra_atribuicao": "Não aplicar esta graduação ao transtorno neurocognitivo leve."
  }
}
```

## 14. Transtorno neurocognitivo leve

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "graduacao_nao_aplicavel_ao_tnc_leve",
    "lembrete_aplicador": "O diagnóstico já corresponde à forma leve; os níveis leve, moderado e grave aplicam-se ao transtorno neurocognitivo maior."
  }
}
```

## 15. Transtorno neurocognitivo maior

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "tnc_maior",
    "tipo": "dependencia_funcional",
    "lembrete_aplicador": "Classifique pela perda de independência nas atividades da vida diária.",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Dificuldade em atividades instrumentais da vida diária."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Dificuldade em atividades básicas da vida diária."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Dependência completa para os cuidados cotidianos."
      }
    ],
    "regra_atribuicao": "Use o nível de dependência funcional atual."
  }
}
```

## 16. Transtorno neurocognitivo vascular maior ou leve

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_condicional",
    "escopo": "apenas_tnc_maior",
    "tipo": "dependencia_funcional",
    "condicao_aplicabilidade": "Aplicar os níveis somente quando a apresentação for transtorno neurocognitivo maior.",
    "lembrete_aplicador": "No TNC vascular maior, classifique pela perda de independência nas atividades da vida diária.",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Dificuldade em atividades instrumentais da vida diária."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Dificuldade em atividades básicas da vida diária."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Dependência completa para os cuidados cotidianos."
      }
    ],
    "regra_atribuicao": "Não aplicar esta graduação ao transtorno neurocognitivo leve."
  }
}
```

## 17. Transtorno da personalidade antissocial

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "modelo_categorial_sem_graduacao",
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade antissocial não recebe níveis formais de gravidade."
  }
}
```

## 18. Transtorno da personalidade borderline

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "modelo_categorial_sem_graduacao",
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade borderline não recebe níveis formais de gravidade."
  }
}
```

## 19. Transtorno da personalidade dependente

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "modelo_categorial_sem_graduacao",
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade dependente não recebe níveis formais de gravidade."
  }
}
```

## 20. Transtorno da personalidade esquizoide

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "modelo_categorial_sem_graduacao",
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade esquizoide não recebe níveis formais de gravidade."
  }
}
```

## 21. Transtorno da personalidade esquizotípica

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "modelo_categorial_sem_graduacao",
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade esquizotípica não recebe níveis formais de gravidade."
  }
}
```

## 22. Transtorno da personalidade evitativa

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "modelo_categorial_sem_graduacao",
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade evitativa não recebe níveis formais de gravidade."
  }
}
```

## 23. Transtorno da personalidade histriônica

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "modelo_categorial_sem_graduacao",
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade histriônica não recebe níveis formais de gravidade."
  }
}
```

## 24. Transtorno da personalidade narcisista

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "modelo_categorial_sem_graduacao",
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade narcisista não recebe níveis formais de gravidade."
  }
}
```

## 25. Transtorno da personalidade obsessivo-compulsiva

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "modelo_categorial_sem_graduacao",
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade obsessivo-compulsiva não recebe níveis formais de gravidade."
  }
}
```

## 26. Transtorno da personalidade paranoide

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "modelo_categorial_sem_graduacao",
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade paranoide não recebe níveis formais de gravidade."
  }
}
```

## 27. Transtorno de acumulação

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno de acumulação."
  }
}
```

## 28. Transtorno alimentar restritivo/evitativo

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno alimentar restritivo/evitativo."
  }
}
```

## 29. Transtorno de ansiedade de doença

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno de ansiedade de doença."
  }
}
```

## 30. Transtorno de ansiedade generalizada

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno de ansiedade generalizada."
  }
}
```

## 31. Transtorno de ansiedade de separação

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno de ansiedade de separação."
  }
}
```

## 32. Transtorno de ansiedade social (fobia social)

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno de ansiedade social."
  }
}
```

## 33. Transtorno bipolar tipo I

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_contextual",
    "escopo": "episodio_atual",
    "tipo": "gravidade_por_tipo_de_episodio",
    "lembrete_aplicador": "Atribua a gravidade ao episódio atual, não ao transtorno bipolar de forma global.",
    "regras_por_episodio": [
      {
        "episodio": "maniaco",
        "label": "Episódio maníaco",
        "niveis": [
          {
            "id": "leve",
            "label": "Leve",
            "descritor": "Estão presentes apenas os sintomas mínimos exigidos para o episódio maníaco."
          },
          {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "Há aumento muito significativo da atividade ou prejuízo do julgamento."
          },
          {
            "id": "grave",
            "label": "Grave",
            "descritor": "É necessária supervisão quase contínua para prevenir dano físico a si ou a terceiros."
          }
        ]
      },
      {
        "episodio": "depressivo_maior",
        "label": "Episódio depressivo maior",
        "niveis": [
          {
            "id": "leve",
            "label": "Leve",
            "descritor": "Poucos sintomas além do mínimo; sofrimento manejável e pequeno prejuízo funcional."
          },
          {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "Número, intensidade dos sintomas ou prejuízo entre leve e grave."
          },
          {
            "id": "grave",
            "label": "Grave",
            "descritor": "Sintomas substancialmente excedentes, sofrimento não manejável ou prejuízo funcional acentuado."
          }
        ]
      }
    ],
    "observacao": "Não aplicar níveis de gravidade ao episódio hipomaníaco."
  }
}
```

## 34. Transtorno bipolar tipo II

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_contextual",
    "escopo": "episodio_depressivo_maior_atual",
    "tipo": "gravidade_do_episodio_depressivo",
    "condicao_aplicabilidade": "Aplicar quando os critérios completos de episódio depressivo maior estiverem atualmente presentes.",
    "lembrete_aplicador": "No bipolar II, aplique leve, moderada ou grave ao episódio depressivo maior atual; não gradue o episódio hipomaníaco.",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas além do mínimo; sofrimento manejável e pequeno prejuízo funcional."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Número, intensidade dos sintomas ou prejuízo entre leve e grave."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Sintomas substancialmente excedentes, sofrimento não manejável ou prejuízo funcional acentuado."
      }
    ],
    "observacao": "A gravidade descreve o episódio aplicável, não o transtorno bipolar II globalmente."
  }
}
```

## 35. Transtorno de compulsão alimentar

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "gravidade_atual",
    "tipo": "frequencia_semanal_de_eventos",
    "lembrete_aplicador": "Classifique pela média semanal de episódios de compulsão alimentar.",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "1 a 3 episódios por semana."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "4 a 7 episódios por semana."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "8 a 13 episódios por semana."
      },
      {
        "id": "extrema",
        "label": "Extrema",
        "descritor": "14 ou mais episódios por semana."
      }
    ],
    "regra_atribuicao": "Use a frequência média semanal dos episódios de compulsão alimentar.",
    "observacao": "O nível pode ser elevado conforme outros sintomas e o grau de incapacidade funcional."
  }
}
```

## 36. Transtorno de conversão (transtorno de sintomas neurológicos funcionais)

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno de conversão."
  }
}
```

## 37. Transtorno de déficit de atenção/hiperatividade

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "transtorno",
    "tipo": "sintomas_excedentes_e_prejuizo",
    "lembrete_aplicador": "Considere sintomas além do mínimo diagnóstico, intensidade dos sintomas e prejuízo funcional.",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas além do mínimo e prejuízo funcional pequeno."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Sintomas ou prejuízo funcional situados entre leve e grave."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Muitos sintomas além do mínimo, vários sintomas particularmente graves ou prejuízo funcional acentuado."
      }
    ],
    "regra_atribuicao": "Integre quantidade e intensidade dos sintomas com o grau de prejuízo funcional."
  }
}
```

## 38. Transtorno delirante

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_dimensional",
    "escopo": "gravidade_atual_por_dominio",
    "tipo": "dimensoes_primarias_da_psicose",
    "uso": "opcional",
    "janela_avaliacao": "ultimos_7_dias",
    "lembrete_aplicador": "Avalie cada domínio separadamente de 0 a 4, considerando os últimos 7 dias.",
    "dominios": [
      {
        "id": "delirios",
        "label": "Delírios"
      },
      {
        "id": "alucinacoes",
        "label": "Alucinações"
      },
      {
        "id": "discurso_desorganizado",
        "label": "Discurso desorganizado"
      },
      {
        "id": "comportamento_psicomotor_anormal",
        "label": "Comportamento psicomotor anormal"
      },
      {
        "id": "sintomas_negativos",
        "label": "Sintomas negativos"
      }
    ],
    "escala": {
      "min": 0,
      "max": 4,
      "niveis": [
        {
          "valor": 0,
          "label": "Ausente"
        },
        {
          "valor": 1,
          "label": "Equívoco"
        },
        {
          "valor": 2,
          "label": "Leve"
        },
        {
          "valor": 3,
          "label": "Moderado"
        },
        {
          "valor": 4,
          "label": "Grave"
        }
      ]
    },
    "observacao": "O diagnóstico pode ser estabelecido sem o uso deste especificador."
  }
}
```

## 39. Transtorno depressivo maior

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_contextual",
    "escopo": "episodio_depressivo_maior_atual",
    "tipo": "sintomas_intensidade_e_prejuizo",
    "lembrete_aplicador": "Classifique o episódio atual pelo número e intensidade dos sintomas e pelo prejuízo funcional.",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas além do mínimo; sofrimento manejável e pequeno prejuízo funcional."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Número, intensidade dos sintomas ou prejuízo entre leve e grave."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Sintomas substancialmente excedentes, sofrimento não manejável ou prejuízo funcional acentuado."
      }
    ],
    "regra_atribuicao": "Use a apresentação atual do episódio; não trate remissão como nível de gravidade."
  }
}
```

## 40. Transtorno depressivo persistente (distimia)

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "gravidade_atual",
    "tipo": "sintomas_intensidade_e_prejuizo",
    "lembrete_aplicador": "Classifique a gravidade atual pelo número e intensidade dos sintomas e pelo prejuízo funcional.",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Poucos sintomas além do mínimo; sofrimento manejável e pequeno prejuízo funcional."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Número, intensidade dos sintomas ou prejuízo entre leve e grave."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Sintomas substancialmente excedentes, sofrimento não manejável ou prejuízo funcional acentuado."
      }
    ],
    "regra_atribuicao": "Integre quantidade e intensidade dos sintomas com o funcionamento atual."
  }
}
```

## 41. Transtorno dismórfico corporal

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno dismórfico corporal."
  }
}
```

## 42. Transtorno disruptivo da desregulação do humor

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno disruptivo da desregulação do humor."
  }
}
```

## 43. Transtorno do espectro autista

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_dimensional",
    "escopo": "necessidade_de_suporte_por_dominio",
    "tipo": "niveis_de_suporte",
    "lembrete_aplicador": "Atribua o nível separadamente em cada domínio; não produza um nível global único.",
    "dominios": [
      {
        "id": "comunicacao_social",
        "label": "Comunicação social"
      },
      {
        "id": "comportamentos_restritos_repetitivos",
        "label": "Comportamentos restritos e repetitivos"
      }
    ],
    "niveis_referencia": [
      {
        "id": "nivel_1",
        "label": "Nível 1 — exige apoio",
        "descritores_por_dominio": {
          "comunicacao_social": "Sem apoio, os déficits causam prejuízos perceptíveis na interação social.",
          "comportamentos_restritos_repetitivos": "A inflexibilidade interfere de modo significativo em um ou mais contextos."
        }
      },
      {
        "id": "nivel_2",
        "label": "Nível 2 — exige apoio substancial",
        "descritores_por_dominio": {
          "comunicacao_social": "Déficits acentuados permanecem evidentes mesmo com apoio.",
          "comportamentos_restritos_repetitivos": "Inflexibilidade e dificuldade com mudanças são aparentes em diversos contextos."
        }
      },
      {
        "id": "nivel_3",
        "label": "Nível 3 — exige apoio muito substancial",
        "descritores_por_dominio": {
          "comunicacao_social": "Déficits graves causam prejuízo importante e grande limitação das interações.",
          "comportamentos_restritos_repetitivos": "Inflexibilidade extrema e dificuldade intensa com mudanças interferem amplamente no funcionamento."
        }
      }
    ],
    "regra_atribuicao": "Registre um nível para comunicação social e outro para comportamentos restritos e repetitivos."
  }
}
```

## 44. Transtorno de escoriação

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno de escoriação."
  }
}
```

## 45. Transtorno específico da aprendizagem

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "transtorno",
    "tipo": "extensao_das_dificuldades_e_necessidade_de_apoio",
    "lembrete_aplicador": "Considere a extensão das dificuldades acadêmicas e a intensidade do apoio necessário.",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "Algumas dificuldades em uma ou duas áreas acadêmicas, compensáveis com adaptações ou apoio."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "Dificuldades acentuadas em uma ou mais áreas, exigindo ensino intensivo e apoio durante parte do tempo."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "Dificuldades graves em várias áreas, exigindo ensino individualizado, especializado e contínuo."
      }
    ],
    "regra_atribuicao": "Integre extensão das dificuldades, resposta às intervenções e necessidade de apoio especializado."
  }
}
```

## 46. Transtorno esquizoafetivo

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_dimensional",
    "escopo": "gravidade_atual_por_dominio",
    "tipo": "dimensoes_primarias_da_psicose",
    "uso": "opcional",
    "janela_avaliacao": "ultimos_7_dias",
    "lembrete_aplicador": "Avalie cada domínio separadamente de 0 a 4, considerando os últimos 7 dias.",
    "dominios": [
      {
        "id": "delirios",
        "label": "Delírios"
      },
      {
        "id": "alucinacoes",
        "label": "Alucinações"
      },
      {
        "id": "discurso_desorganizado",
        "label": "Discurso desorganizado"
      },
      {
        "id": "comportamento_psicomotor_anormal",
        "label": "Comportamento psicomotor anormal"
      },
      {
        "id": "sintomas_negativos",
        "label": "Sintomas negativos"
      }
    ],
    "escala": {
      "min": 0,
      "max": 4,
      "niveis": [
        {
          "valor": 0,
          "label": "Ausente"
        },
        {
          "valor": 1,
          "label": "Equívoco"
        },
        {
          "valor": 2,
          "label": "Leve"
        },
        {
          "valor": 3,
          "label": "Moderado"
        },
        {
          "valor": 4,
          "label": "Grave"
        }
      ]
    },
    "observacao": "O diagnóstico pode ser estabelecido sem o uso deste especificador."
  }
}
```

## 47. Transtorno esquizofreniforme

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_dimensional",
    "escopo": "gravidade_atual_por_dominio",
    "tipo": "dimensoes_primarias_da_psicose",
    "uso": "opcional",
    "janela_avaliacao": "ultimos_7_dias",
    "lembrete_aplicador": "Avalie cada domínio separadamente de 0 a 4, considerando os últimos 7 dias.",
    "dominios": [
      {
        "id": "delirios",
        "label": "Delírios"
      },
      {
        "id": "alucinacoes",
        "label": "Alucinações"
      },
      {
        "id": "discurso_desorganizado",
        "label": "Discurso desorganizado"
      },
      {
        "id": "comportamento_psicomotor_anormal",
        "label": "Comportamento psicomotor anormal"
      },
      {
        "id": "sintomas_negativos",
        "label": "Sintomas negativos"
      }
    ],
    "escala": {
      "min": 0,
      "max": 4,
      "niveis": [
        {
          "valor": 0,
          "label": "Ausente"
        },
        {
          "valor": 1,
          "label": "Equívoco"
        },
        {
          "valor": 2,
          "label": "Leve"
        },
        {
          "valor": 3,
          "label": "Moderado"
        },
        {
          "valor": 4,
          "label": "Grave"
        }
      ]
    },
    "observacao": "O diagnóstico pode ser estabelecido sem o uso deste especificador."
  }
}
```

## 48. Transtorno de insônia

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno de insônia."
  }
}
```

## 49. Transtorno da linguagem

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno da linguagem."
  }
}
```

## 50. Transtorno obsessivo-compulsivo

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno obsessivo-compulsivo."
  }
}
```

## 51. Transtorno de pânico

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno de pânico."
  }
}
```

## 52. Transtorno por uso de álcool

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "transtorno",
    "tipo": "contagem_de_criterios",
    "lembrete_aplicador": "Classifique pela quantidade de critérios diagnósticos preenchidos.",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "2 ou 3 critérios."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "4 ou 5 critérios."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "6 ou mais critérios."
      }
    ],
    "regra_atribuicao": "Conte os critérios preenchidos no período diagnóstico; remissão é registrada separadamente."
  }
}
```

## 53. Transtorno por uso de estimulantes

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "transtorno",
    "tipo": "contagem_de_criterios",
    "lembrete_aplicador": "Classifique pela quantidade de critérios diagnósticos preenchidos.",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "2 ou 3 critérios."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "4 ou 5 critérios."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "6 ou mais critérios."
      }
    ],
    "regra_atribuicao": "Conte os critérios preenchidos no período diagnóstico; remissão e classe do estimulante são registradas separadamente."
  }
}
```

## 54. Transtorno por uso de opioides

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "transtorno",
    "tipo": "contagem_de_criterios",
    "lembrete_aplicador": "Classifique pela quantidade de critérios diagnósticos preenchidos.",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "2 ou 3 critérios."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "4 ou 5 critérios."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "6 ou mais critérios."
      }
    ],
    "regra_atribuicao": "Conte os critérios preenchidos no período diagnóstico; remissão e tratamento de manutenção são registrados separadamente."
  }
}
```

## 55. Transtorno por uso de tabaco

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "transtorno",
    "tipo": "contagem_de_criterios",
    "lembrete_aplicador": "Classifique pela quantidade de critérios diagnósticos preenchidos.",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descritor": "2 ou 3 critérios."
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descritor": "4 ou 5 critérios."
      },
      {
        "id": "grave",
        "label": "Grave",
        "descritor": "6 ou mais critérios."
      }
    ],
    "regra_atribuicao": "Conte os critérios preenchidos no período diagnóstico; remissão é registrada separadamente."
  }
}
```

## 56. Transtorno psicótico breve

```json
{
  "gravidade": {
    "classificacao_dsm": "formal_dimensional",
    "escopo": "gravidade_atual_por_dominio",
    "tipo": "dimensoes_primarias_da_psicose",
    "uso": "opcional",
    "janela_avaliacao": "ultimos_7_dias",
    "lembrete_aplicador": "Avalie cada domínio separadamente de 0 a 4, considerando os últimos 7 dias.",
    "dominios": [
      {
        "id": "delirios",
        "label": "Delírios"
      },
      {
        "id": "alucinacoes",
        "label": "Alucinações"
      },
      {
        "id": "discurso_desorganizado",
        "label": "Discurso desorganizado"
      },
      {
        "id": "comportamento_psicomotor_anormal",
        "label": "Comportamento psicomotor anormal"
      },
      {
        "id": "sintomas_negativos",
        "label": "Sintomas negativos"
      }
    ],
    "escala": {
      "min": 0,
      "max": 4,
      "niveis": [
        {
          "valor": 0,
          "label": "Ausente"
        },
        {
          "valor": 1,
          "label": "Equívoco"
        },
        {
          "valor": 2,
          "label": "Leve"
        },
        {
          "valor": 3,
          "label": "Moderado"
        },
        {
          "valor": 4,
          "label": "Grave"
        }
      ]
    },
    "observacao": "O diagnóstico pode ser estabelecido sem o uso deste especificador."
  }
}
```

## 57. Transtornos de adaptação

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtornos de adaptação."
  }
}
```

## 58. Tricotilomania (transtorno de arrancar o cabelo)

```json
{
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para tricotilomania."
  }
}
```

---

## Notas de implementação

### Derivação de compatibilidade

Caso o aplicativo ainda dependa de `tem_gravidade_formal`, o valor deve ser derivado:

- `false` somente para `sem_niveis_formais`;
- `true` para `formal_categorica`, `formal_dimensional`, `formal_contextual` e `formal_condicional`.

Essa propriedade não deve coexistir como uma segunda fonte de verdade editável.

### Renderização esperada

| Classificação | Componente esperado |
|---|---|
| `formal_categorica` | Lista ou seletor de níveis. |
| `formal_dimensional` | Um controle independente para cada domínio. |
| `formal_contextual` | Seleção prévia do episódio ou contexto e, depois, os níveis aplicáveis. |
| `formal_condicional` | Exibição dos níveis somente quando a condição for satisfeita. |
| `sem_niveis_formais` | Nota informativa sem campo selecionável. |

### Psicose: especificador versus instrumento ampliado

Os snippets de psicose representam o especificador diagnóstico baseado nos cinco domínios psicóticos primários. Caso o aplicativo implemente a medida ampliada da Seção III, cognição, depressão e mania devem integrar outro instrumento explicitamente identificado, e não ser acrescentadas silenciosamente a estes snippets.

## Fontes institucionais de conferência

- American Psychiatric Association. [DSM-5-TR](https://www.psychiatry.org/psychiatrists/practice/dsm).
- American Psychiatric Association. [Bipolar I and Bipolar II Disorders — mudanças nos especificadores de gravidade](https://www.psychiatry.org/getmedia/98fd2c17-93f0-42cd-9f41-755d77b862a5/APA-DSM5TR-BipolarIandBipolarIIDisorders.pdf).
- American Psychiatric Association. [Clinician-Rated Dimensions of Psychosis Symptom Severity](https://www.psychiatry.org/getmedia/639675df-e6d0-4fe5-bb86-a517d9b15cfd/APA-DSM5TR-ClinicianRatedDimensionsofPsychosisSymptomSeverity.pdf).
- American Psychiatric Association. [DSM-5-TR Update — setembro de 2024](https://www.psychiatry.org/getmedia/2ed086b0-ec88-42ec-aa0e-f442e4af74e6/APA-DSM5TR-Update-September-2024.pdf).
- American Psychiatric Association. [DSM-5-TR Update — setembro de 2025](https://www.psychiatry.org/getmedia/b68a5776-f88c-45c7-9535-fd219d7aa5cb/APA-DSM5TR-Update-September-2025.pdf).
- American Psychiatric Association. [Highlights of Changes from DSM-IV-TR to DSM-5](https://www.psychiatry.org/File%20Library/Psychiatrists/Practice/DSM/APA_DSM_Changes_from_DSM-IV-TR_-to_DSM-5.pdf).
