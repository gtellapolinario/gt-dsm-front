import { TranstornoDSMSchema, type TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import { parseGeneratedDiseaseData } from "@/infra/validation-helpers";

// Dados brutos normalizados da release DSM operacional
const rawData = {
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_compulsao_alimentar",
    "nome_completo": "Transtorno de Compulsão Alimentar",
    "sigla": "TCA",
    "capitulo_id": "10",
    "capitulo": "Transtornos Alimentares",
    "grupo": null,
    "versao_complementar_existe": false,
    "sinonimos_historicos": [],
    "faixa_etaria_alvo": "ambos",
    "codigo": {
      "cid10": "F50.8",
      "cid11": "6B82",
      "dsm5": "307.51"
    }
  },
  "id": "transtorno_compulsao_alimentar",
  "item_id": "transtorno_compulsao_alimentar",
  "name": "Transtorno de Compulsão Alimentar",
  "nome_completo": "Transtorno de Compulsão Alimentar",
  "chapter_id": "10",
  "chapter_name": "Transtornos Alimentares",
  "category": "FULL",
  "estrutura_diagnostica": "polythetic_clusters_assimetricos",
  "estrutura_geral": "criterios_sintomaticos",
  "ui_mode": "structured_full",
  "severity_type": "ordinal_simples",
  "has_formal_severity": true,
  "render_structured_interview": true,
  "diagnostic_rule": "",
  "clusters_sintomas": [
    {
      "id": "A",
      "nome": "Episódios Recorrentes de Compulsão Alimentar",
      "descricao": "",
      "sintomas": [
        {
          "id": "A1",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A2",
          "texto": "",
          "descricao": ""
        }
      ]
    },
    {
      "id": "B",
      "nome": "Características Associadas à Compulsão Alimentar",
      "descricao": "",
      "sintomas": [
        {
          "id": "B1",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "B2",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "B3",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "B4",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "B5",
          "texto": "",
          "descricao": ""
        }
      ]
    }
  ],
  "criterios_condicionais": [
    {
      "id": "sofrimento_marcante",
      "letra": "C",
      "rotulo": "Sofrimento marcante em virtude da compulsão alimentar",
      "descricao_completa": "Sofrimento marcante em virtude da compulsão alimentar.",
      "obrigatorio": true
    },
    {
      "id": "frequencia_minima",
      "letra": "D",
      "rotulo": "Frequência mínima: ≥1 vez por semana durante 3 meses",
      "descricao_completa": "Os episódios de compulsão alimentar ocorrem, em média, ao menos uma vez por semana durante três meses.",
      "obrigatorio": true
    },
    {
      "id": "exclusao_compensacao_bulimia_anorexia",
      "letra": "E",
      "rotulo": "Sem comportamento compensatório inapropriado recorrente; não exclusivo de bulimia ou anorexia",
      "descricao_completa": "A compulsão alimentar não está associada ao uso recorrente de comportamento compensatório inapropriado como na bulimia nervosa e não ocorre exclusivamente durante o curso de bulimia nervosa ou anorexia nervosa.",
      "obrigatorio": true
    }
  ],
  "gravidade": {
    "tipo": "ordinal_simples",
    "presente": true,
    "has_formal_severity": true,
    "regra_atribuicao": "Baseia-se na frequência média semanal de episódios de compulsão alimentar. O nível pode ser ampliado para refletir outros sintomas e o grau de incapacidade funcional.",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descricao": ""
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descricao": ""
      },
      {
        "id": "grave",
        "label": "Grave",
        "descricao": ""
      },
      {
        "id": "extrema",
        "label": "Extrema",
        "descricao": ""
      }
    ],
    "dominios": []
  },
  "dominios_impacto": [
    {
      "id": "saude",
      "label": "Saúde Física e Peso"
    },
    {
      "id": "social",
      "label": "Funcionamento Social"
    },
    {
      "id": "trabalho",
      "label": "Desempenho Profissional/Acadêmico"
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtornos bipolares",
      "frequencia": "alta",
      "nota": "None"
    },
    {
      "condicao": "Transtornos depressivos",
      "frequencia": "alta",
      "nota": "None"
    },
    {
      "condicao": "Transtornos de ansiedade",
      "frequencia": "alta",
      "nota": "None"
    },
    {
      "condicao": "Transtorno por uso de substância",
      "frequencia": "moderada",
      "nota": "None"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Bulimia nervosa",
      "ponto_distincao": "Bulimia: comportamento compensatório inapropriado recorrente (purgação, exercício excessivo) e restrição dietética marcada entre episódios. TCA: ausência de compensação recorrente.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Obesidade",
      "ponto_distincao": "TCA: episódios de compulsão com perda de controle e sofrimento marcante. A maioria dos indivíduos obesos não se envolve em compulsão alimentar recorrente.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno depressivo maior e transtorno bipolar",
      "ponto_distincao": "Aumento do apetite pode ocorrer em episódios depressivos maiores com aspectos atípicos ou em transtorno bipolar. Se todos os critérios de ambos forem satisfeitos, ambos os diagnósticos podem ser dados.",
      "pertence_a_classe": false
    }
  ],
  "perguntas_chave": [],
  "key_questions": [],
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Adolescência ou idade adulta jovem; pode ter início posterior na idade adulta.",
    "trajetoria": "Relativamente persistente. O curso é comparável à bulimia nervosa em termos de gravidade e duração. Taxas de remissão maiores do que para bulimia ou anorexia.",
    "prognostico": "Mudança diagnóstica de TCA para outros transtornos alimentares é incomum."
  },
  "prevalencia": {
    "populacao_geral": "1,6% (mulheres adultas norte-americanas); 0,8% (homens adultos norte-americanos) — prevalência de 12 meses.",
    "proporcao_sexo": "Bem menos assimétrico do que na bulimia nervosa. Tão prevalente entre mulheres de minorias raciais e étnicas quanto em mulheres brancas.",
    "variacoes_culturais": "Prevalência comparável entre brancos não latinos, latinos, asiáticos e afro-americanos nos Estados Unidos.",
    "notas": "Mais prevalente entre indivíduos que buscam tratamento para emagrecer do que na população em geral."
  },
  "hierarquia": {
    "presente": false,
    "notas": "None",
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": []
  },
  "subtipos": {
    "presente": true,
    "itens": [
      false,
      null,
      true,
      [],
      {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    ]
  },
  "especificadores": [
    {
      "id": "em_remicao_parcial",
      "nome": "Em remissão parcial",
      "descricao": ""
    },
    {
      "id": "em_remicao_completa",
      "nome": "Em remissão completa",
      "descricao": ""
    }
  ],
  "template_prontuario": {
    "titulo": "",
    "texto": "",
    "campos": []
  },
  "metadados_globais": {
    "fonte_capitulo_md": "10_transtornos_alimentares.md",
    "fonte_inventario_md": null,
    "data_extracao": "2026-05-31",
    "modelo_agente": "antigravity-gemini",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "instrumentos_complementares": [],
  "raw_document": {
    "$schema_version": "1.0.0",
    "meta": {
      "id": "transtorno_compulsao_alimentar",
      "nome_completo": "Transtorno de Compulsão Alimentar",
      "sigla": "TCA",
      "capitulo_id": "10",
      "capitulo": "Transtornos Alimentares",
      "grupo": null,
      "versao_complementar_existe": false,
      "sinonimos_historicos": [],
      "faixa_etaria_alvo": "ambos",
      "codigo": {
        "cid10": "F50.8",
        "cid11": "6B82",
        "dsm5": "307.51"
      }
    },
    "id": "transtorno_compulsao_alimentar",
    "item_id": "transtorno_compulsao_alimentar",
    "name": "Transtorno de Compulsão Alimentar",
    "nome_completo": "Transtorno de Compulsão Alimentar",
    "chapter_id": "10",
    "chapter_name": "Transtornos Alimentares",
    "category": "FULL",
    "estrutura_diagnostica": "polythetic_clusters_assimetricos",
    "estrutura_geral": "polythetic_clusters_assimetricos",
    "ui_mode": "structured_full",
    "severity_type": "ordinal_simples",
    "has_formal_severity": true,
    "render_structured_interview": true,
    "diagnostic_rule": "",
    "clusters_sintomas": [
      {
        "id": "A",
        "nome": "Episódios Recorrentes de Compulsão Alimentar",
        "descricao": "",
        "sintomas": [
          {
            "id": "A1",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A2",
            "texto": "",
            "descricao": ""
          }
        ]
      },
      {
        "id": "B",
        "nome": "Características Associadas à Compulsão Alimentar",
        "descricao": "",
        "sintomas": [
          {
            "id": "B1",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "B2",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "B3",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "B4",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "B5",
            "texto": "",
            "descricao": ""
          }
        ]
      }
    ],
    "criterios_condicionais": [
      {
        "id": "sofrimento_marcante",
        "letra": "C",
        "rotulo": "Sofrimento marcante em virtude da compulsão alimentar",
        "descricao_completa": "Sofrimento marcante em virtude da compulsão alimentar.",
        "obrigatorio": true
      },
      {
        "id": "frequencia_minima",
        "letra": "D",
        "rotulo": "Frequência mínima: ≥1 vez por semana durante 3 meses",
        "descricao_completa": "Os episódios de compulsão alimentar ocorrem, em média, ao menos uma vez por semana durante três meses.",
        "obrigatorio": true
      },
      {
        "id": "exclusao_compensacao_bulimia_anorexia",
        "letra": "E",
        "rotulo": "Sem comportamento compensatório inapropriado recorrente; não exclusivo de bulimia ou anorexia",
        "descricao_completa": "A compulsão alimentar não está associada ao uso recorrente de comportamento compensatório inapropriado como na bulimia nervosa e não ocorre exclusivamente durante o curso de bulimia nervosa ou anorexia nervosa.",
        "obrigatorio": true
      }
    ],
    "gravidade": {
      "tipo": "ordinal_simples",
      "presente": true,
      "has_formal_severity": true,
      "regra_atribuicao": "Baseia-se na frequência média semanal de episódios de compulsão alimentar. O nível pode ser ampliado para refletir outros sintomas e o grau de incapacidade funcional.",
      "niveis": [
        {
          "id": "leve",
          "label": "Leve",
          "descricao": ""
        },
        {
          "id": "moderada",
          "label": "Moderada",
          "descricao": ""
        },
        {
          "id": "grave",
          "label": "Grave",
          "descricao": ""
        },
        {
          "id": "extrema",
          "label": "Extrema",
          "descricao": ""
        }
      ],
      "dominios": []
    },
    "dominios_impacto": [
      {
        "id": "saude",
        "label": "Saúde Física e Peso"
      },
      {
        "id": "social",
        "label": "Funcionamento Social"
      },
      {
        "id": "trabalho",
        "label": "Desempenho Profissional/Acadêmico"
      }
    ],
    "comorbidades_frequentes": [
      {
        "condicao": "Transtornos bipolares",
        "frequencia": "alta",
        "nota": "None"
      },
      {
        "condicao": "Transtornos depressivos",
        "frequencia": "alta",
        "nota": "None"
      },
      {
        "condicao": "Transtornos de ansiedade",
        "frequencia": "alta",
        "nota": "None"
      },
      {
        "condicao": "Transtorno por uso de substância",
        "frequencia": "moderada",
        "nota": "None"
      }
    ],
    "diagnostico_diferencial": [
      {
        "condicao": "Bulimia nervosa",
        "ponto_distincao": "Bulimia: comportamento compensatório inapropriado recorrente (purgação, exercício excessivo) e restrição dietética marcada entre episódios. TCA: ausência de compensação recorrente.",
        "pertence_a_classe": true
      },
      {
        "condicao": "Obesidade",
        "ponto_distincao": "TCA: episódios de compulsão com perda de controle e sofrimento marcante. A maioria dos indivíduos obesos não se envolve em compulsão alimentar recorrente.",
        "pertence_a_classe": false
      },
      {
        "condicao": "Transtorno depressivo maior e transtorno bipolar",
        "ponto_distincao": "Aumento do apetite pode ocorrer em episódios depressivos maiores com aspectos atípicos ou em transtorno bipolar. Se todos os critérios de ambos forem satisfeitos, ambos os diagnósticos podem ser dados.",
        "pertence_a_classe": false
      }
    ],
    "perguntas_chave": [],
    "key_questions": [],
    "curso_desenvolvimento": {
      "idade_inicio_tipica": "Adolescência ou idade adulta jovem; pode ter início posterior na idade adulta.",
      "trajetoria": "Relativamente persistente. O curso é comparável à bulimia nervosa em termos de gravidade e duração. Taxas de remissão maiores do que para bulimia ou anorexia.",
      "prognostico": "Mudança diagnóstica de TCA para outros transtornos alimentares é incomum."
    },
    "prevalencia": {
      "populacao_geral": "1,6% (mulheres adultas norte-americanas); 0,8% (homens adultos norte-americanos) — prevalência de 12 meses.",
      "proporcao_sexo": "Bem menos assimétrico do que na bulimia nervosa. Tão prevalente entre mulheres de minorias raciais e étnicas quanto em mulheres brancas.",
      "variacoes_culturais": "Prevalência comparável entre brancos não latinos, latinos, asiáticos e afro-americanos nos Estados Unidos.",
      "notas": "Mais prevalente entre indivíduos que buscam tratamento para emagrecer do que na população em geral."
    },
    "hierarquia": {
      "presente": false,
      "notas": "None",
      "exclui_se_diagnosticado": [],
      "exclui_diagnostico_de": []
    },
    "subtipos": {
      "presente": true,
      "itens": [
        false,
        null,
        true,
        [],
        {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      ]
    },
    "especificadores": [
      {
        "id": "em_remicao_parcial",
        "nome": "Em remissão parcial",
        "descricao": ""
      },
      {
        "id": "em_remicao_completa",
        "nome": "Em remissão completa",
        "descricao": ""
      }
    ],
    "template_prontuario": {
      "titulo": "",
      "texto": "",
      "campos": []
    },
    "metadados_globais": {
      "fonte_capitulo_md": "10_transtornos_alimentares.md",
      "fonte_inventario_md": null,
      "data_extracao": "2026-05-31",
      "modelo_agente": "antigravity-gemini",
      "lacunas_globais": [],
      "inconsistencias_detectadas": [],
      "notas_agente_globais": null,
      "revisao_humana_necessaria": false
    },
    "instrumentos_complementares": [],
    "raw_document": {
      "$schema_version": "1.0.0",
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
      "estrutura_geral": "polythetic_clusters_assimetricos",
      "clusters_sintomas": [
        {
          "id": "A",
          "nome": "Episódios Recorrentes de Compulsão Alimentar",
          "tipo": "monothetic_obrigatorio",
          "limiar": null,
          "ancora_obrigatoria": null,
          "sintomas": [
            {
              "id": "A1",
              "rotulo": "Ingestão excessiva de alimento em período determinado",
              "desc": "Ingestão, em um período determinado (geralmente inferior a duas horas), de uma quantidade de alimento definitivamente maior do que a maioria das pessoas consumiria no mesmo período sob circunstâncias semelhantes.",
              "pergunta": "A pessoa tem episódios nos quais come uma quantidade de alimento definitivamente maior do que a maioria das pessoas comeria em um período similar?",
              "exemplos_clinicos": [
                "A quantidade deve ser contextualizada às circunstâncias (p. ex., refeições comemorativas)."
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A2",
              "rotulo": "Sensação de falta de controle durante a ingestão",
              "desc": "Sensação de falta de controle sobre a ingestão durante o episódio, como sentimento de não conseguir parar de comer ou controlar o que e o quanto se está ingerindo.",
              "pergunta": "Durante esses episódios, a pessoa sente que não consegue parar de comer ou controlar o que e quanto está ingerindo?",
              "exemplos_clinicos": [
                "Incapacidade de evitar comer",
                "Desistiu de tentar controlar a ingesta"
              ],
              "faixa_aplicavel": null
            }
          ],
          "descricao_qualitativa": null,
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "B",
          "nome": "Características Associadas à Compulsão Alimentar",
          "tipo": "polythetic_com_limiar",
          "limiar": {
            "adulto": 3,
            "pediatria": 3
          },
          "ancora_obrigatoria": null,
          "sintomas": [
            {
              "id": "B1",
              "rotulo": "Comer mais rapidamente do que o normal",
              "desc": "Comer mais rapidamente do que o normal durante os episódios de compulsão.",
              "pergunta": "Durante os episódios, a pessoa come mais rápido do que o habitual?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "B2",
              "rotulo": "Comer até se sentir desconfortavelmente cheio",
              "desc": "Comer até se sentir desconfortavelmente cheio.",
              "pergunta": "A pessoa continua comendo até ficar desconfortavelmente cheia?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "B3",
              "rotulo": "Comer grandes quantidades na ausência de fome física",
              "desc": "Comer grandes quantidades de alimento na ausência da sensação física de fome.",
              "pergunta": "A pessoa come grandes quantidades mesmo quando não está fisicamente com fome?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "B4",
              "rotulo": "Comer sozinho por vergonha",
              "desc": "Comer sozinho por vergonha do quanto se está comendo.",
              "pergunta": "A pessoa come sozinha ou esconde a alimentação por vergonha da quantidade ingerida?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "B5",
              "rotulo": "Sentir-se desgostoso, deprimido ou culpado após a compulsão",
              "desc": "Sentir-se desgostoso de si mesmo, deprimido ou muito culpado em seguida ao episódio.",
              "pergunta": "Após os episódios de compulsão, a pessoa se sente envergonhada, deprimida ou muito culpada?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            }
          ],
          "descricao_qualitativa": null,
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        }
      ],
      "criterios_condicionais": [
        {
          "id": "sofrimento_marcante",
          "letra": "C",
          "rotulo": "Sofrimento marcante em virtude da compulsão alimentar",
          "tipo": "prejuizo_funcional",
          "ui_widget": "toggle_com_justificativa_obrigatoria",
          "obrigatorio": true,
          "icone_fa": "fa-check",
          "ddx_sugeridos": [],
          "descricao_completa": "Sofrimento marcante em virtude da compulsão alimentar.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "frequencia_minima",
          "letra": "D",
          "rotulo": "Frequência mínima: ≥1 vez por semana durante 3 meses",
          "tipo": "temporal_duracao_minima",
          "ui_widget": "campo_duracao_meses",
          "obrigatorio": true,
          "icone_fa": "fa-check",
          "ddx_sugeridos": [],
          "descricao_completa": "Os episódios de compulsão alimentar ocorrem, em média, ao menos uma vez por semana durante três meses.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "exclusao_compensacao_bulimia_anorexia",
          "letra": "E",
          "rotulo": "Sem comportamento compensatório inapropriado recorrente; não exclusivo de bulimia ou anorexia",
          "tipo": "exclusao_diagnostica",
          "ui_widget": "select_multiplos_ddx",
          "obrigatorio": true,
          "icone_fa": "fa-check",
          "ddx_sugeridos": [
            "bulimia_nervosa",
            "anorexia_nervosa"
          ],
          "descricao_completa": "A compulsão alimentar não está associada ao uso recorrente de comportamento compensatório inapropriado como na bulimia nervosa e não ocorre exclusivamente durante o curso de bulimia nervosa ou anorexia nervosa.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        }
      ],
      "subtipos": {
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
      },
      "especificadores": [
        {
          "id": "em_remicao_parcial",
          "nome": "Em remissão parcial",
          "tipo": "booleano",
          "ortogonal": false,
          "opcoes": [],
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "em_remicao_completa",
          "nome": "Em remissão completa",
          "tipo": "booleano",
          "ortogonal": false,
          "opcoes": [],
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        }
      ],
      "gravidade": {
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
      },
      "hierarquia": {
        "presente": false,
        "exclui_se_diagnosticado": [],
        "exclui_diagnostico_de": [],
        "notas": null,
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "dominios_impacto": [
        {
          "id": "saude",
          "label": "Saúde Física e Peso",
          "icone_fa": "fa-heartbeat",
          "relevante_para": "transversal"
        },
        {
          "id": "social",
          "label": "Funcionamento Social",
          "icone_fa": "fa-users",
          "relevante_para": "transversal"
        },
        {
          "id": "trabalho",
          "label": "Desempenho Profissional/Acadêmico",
          "icone_fa": "fa-briefcase",
          "relevante_para": "adulto"
        }
      ],
      "diagnostico_diferencial": [
        {
          "condicao": "Bulimia nervosa",
          "ponto_distincao": "Bulimia: comportamento compensatório inapropriado recorrente (purgação, exercício excessivo) e restrição dietética marcada entre episódios. TCA: ausência de compensação recorrente.",
          "pertence_a_classe": true
        },
        {
          "condicao": "Obesidade",
          "ponto_distincao": "TCA: episódios de compulsão com perda de controle e sofrimento marcante. A maioria dos indivíduos obesos não se envolve em compulsão alimentar recorrente.",
          "pertence_a_classe": false
        },
        {
          "condicao": "Transtorno depressivo maior e transtorno bipolar",
          "ponto_distincao": "Aumento do apetite pode ocorrer em episódios depressivos maiores com aspectos atípicos ou em transtorno bipolar. Se todos os critérios de ambos forem satisfeitos, ambos os diagnósticos podem ser dados.",
          "pertence_a_classe": false
        }
      ],
      "comorbidades_frequentes": [
        {
          "condicao": "Transtornos bipolares",
          "frequencia": "alta",
          "nota": null
        },
        {
          "condicao": "Transtornos depressivos",
          "frequencia": "alta",
          "nota": null
        },
        {
          "condicao": "Transtornos de ansiedade",
          "frequencia": "alta",
          "nota": null
        },
        {
          "condicao": "Transtorno por uso de substância",
          "frequencia": "moderada",
          "nota": null
        }
      ],
      "instrumentos_complementares": [],
      "prevalencia": {
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
      },
      "curso_desenvolvimento": {
        "idade_inicio_tipica": "Adolescência ou idade adulta jovem; pode ter início posterior na idade adulta.",
        "trajetoria": "Relativamente persistente. O curso é comparável à bulimia nervosa em termos de gravidade e duração. Taxas de remissão maiores do que para bulimia ou anorexia.",
        "prognostico": "Mudança diagnóstica de TCA para outros transtornos alimentares é incomum.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "template_prontuario": {
        "cabecalho": "## Avaliação do Transtorno de Compulsão Alimentar - {nome_paciente}",
        "rodape_metodologico": "Anamnese clínica com base nos critérios DSM-5 (307.51 / F50.8)."
      },
      "metadados_globais": {
        "fonte_capitulo_md": "10_transtornos_alimentares.md",
        "fonte_inventario_md": null,
        "data_extracao": "2026-05-31",
        "modelo_agente": "antigravity-gemini",
        "lacunas_globais": [],
        "inconsistencias_detectadas": [],
        "notas_agente_globais": null,
        "revisao_humana_necessaria": false
      },
      "id": "transtorno_compulsao_alimentar",
      "category": "FULL",
      "ui_mode": "structured_full",
      "render_structured_interview": true,
      "rendering": {
        "estrutura_diagnostica": "monothetic_tripartite",
        "criteria": [
          "A. Episodios recorrentes de compulsao alimentar (quantidade excessiva + perda de controle)",
          "B. Caracteristicas associadas (≥3 de 5): comer rapido, ate desconforto, sem fome, sozinho por vergonha, sentir-se desgostoso/culpado",
          "C. Sofrimento marcante",
          "D. Frequencia minima: ≥1x/semana durante 3 meses",
          "E. Sem compensacao inapropriada recorrente"
        ],
        "diagnostic_rule": "A AND B(≥3/5) AND C AND D(≥1x/semana_3meses) AND E",
        "clusters": [],
        "duration": "≥3 meses de frequencia ≥1x/semana",
        "age_onset": "Adolescencia ou idade adulta jovem",
        "functional_impairment": "Associado a sobrepeso/obesidade; prejuizo funcional significativo",
        "exclusions": [
          "Bulimia nervosa",
          "Anorexia nervosa",
          "Obesidade",
          "TDM atipico"
        ],
        "subtypes_presentations": [],
        "specifiers": [
          "Remissao parcial",
          "Remissao completa"
        ],
        "operational_profiles": [],
        "severity": {
          "has_formal_severity": true,
          "type": "frequencia_eventos",
          "levels": [
            "Leve (1-3 episodios/semana)",
            "Moderada (4-7)",
            "Grave (8-13)",
            "Extrema (≥14)"
          ],
          "assignment_rule": "Baseado na frequencia de episodios de compulsao por semana",
          "domains": []
        },
        "critical_differentials": [
          "Bulimia",
          "Obesidade",
          "TDM atipico"
        ],
        "key_questions": [
          "Come rapido ate ficar desconfortavelmente cheio?",
          "Come sozinho por vergonha?",
          "Faz algo para compensar?"
        ],
        "alerts": [
          "Verificar compensacao obrigatorio (diferenciar de Bulimia)"
        ],
        "source_trace": {
          "markdown_section": "3. TRANSTORNO DE COMPULSAO ALIMENTAR (TCA)",
          "patches_applied": []
        },
        "category": "FULL",
        "ui_mode": "structured_full",
        "render_structured_interview": true
      },
      "sigla": "TCA",
      "codigo_dsm5": "307.51",
      "codigo_cid10": "F50.8",
      "faixa_etaria_alvo": "ambos",
      "versao_complementar_existe": false,
      "inventario_clinico": {
        "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 307.51 (F50.8)",
        "estrutura_efetiva": "- **Estrutura efetiva:**",
        "notas_clinicas": "- **Notas:**"
      },
      "codigo_cid11": "6B82",
      "super_enrichment": {
        "id": "transtorno_compulsao_alimentar",
        "nome_original": "TRANSTORNO DE COMPULSAO ALIMENTAR",
        "comorbidades_frequentes": [
          {
            "condicao": "Transtornos bipolares",
            "frequencia": "alta",
            "nota": null
          },
          {
            "condicao": "Transtornos depressivos",
            "frequencia": "alta",
            "nota": null
          },
          {
            "condicao": "Transtornos de ansiedade",
            "frequencia": "alta",
            "nota": null
          },
          {
            "condicao": "Transtorno por uso de substância",
            "frequencia": "moderada",
            "nota": null
          }
        ],
        "diagnostico_diferencial": [
          {
            "condicao": "Bulimia nervosa",
            "ponto_distincao": "Bulimia: comportamento compensatório inapropriado recorrente (purgação, exercício excessivo) e restrição dietética marcada entre episódios. TCA: ausência de compensação recorrente.",
            "pertence_a_classe": true
          },
          {
            "condicao": "Obesidade",
            "ponto_distincao": "TCA: episódios de compulsão com perda de controle e sofrimento marcante. A maioria dos indivíduos obesos não se envolve em compulsão alimentar recorrente.",
            "pertence_a_classe": false
          },
          {
            "condicao": "Transtorno depressivo maior e transtorno bipolar",
            "ponto_distincao": "Aumento do apetite pode ocorrer em episódios depressivos maiores com aspectos atípicos ou em transtorno bipolar. Se todos os critérios de ambos forem satisfeitos, ambos os diagnósticos podem ser dados.",
            "pertence_a_classe": false
          }
        ],
        "hierarquia": {
          "presente": false,
          "exclui_se_diagnosticado": [],
          "exclui_diagnostico_de": [],
          "notas": ""
        },
        "prevalencia": {
          "populacao_geral": "1,6% (mulheres adultas norte-americanas); 0,8% (homens adultos norte-americanos) — prevalência de 12 meses.",
          "proporcao_sexo": "Bem menos assimétrico do que na bulimia nervosa. Tão prevalente entre mulheres de minorias raciais e étnicas quanto em mulheres brancas.",
          "variacoes_culturais": "Prevalência comparável entre brancos não latinos, latinos, asiáticos e afro-americanos nos Estados Unidos."
        },
        "curso_desenvolvimento": {
          "idade_inicio_tipica": "Adolescência ou idade adulta jovem; pode ter início posterior na idade adulta.",
          "trajetoria": "Relativamente persistente. O curso é comparável à bulimia nervosa em termos de gravidade e duração. Taxas de remissão maiores do que para bulimia ou anorexia.",
          "prognostico": "Mudança diagnóstica de TCA para outros transtornos alimentares é incomum."
        },
        "instrumentos_complementares": [],
        "identificacao": {},
        "criterios_obrigatorios": [
          {
            "id": "A - Episodios recorrentes de compulsao alimentar",
            "texto": "Mesma definicao de episodio de Bulimia (quantidade excessiva + perda de controle em periodo determinado)."
          },
          {
            "id": "B - Caracteristicas associadas (≥3 de 5)",
            "texto": "1. Comer mais rapidamente do que o normal\n2. Comer ate se sentir desconfortavelmente cheio\n3. Comer grandes quantidades na ausencia de fome fisica\n4. Comer sozinho por vergonha do quanto esta comendo\n5. Sentir-se desgostoso de si mesmo, deprimido ou muito culpado em seguida"
          },
          {
            "id": "C - Sofrimento marcante",
            "texto": "em virtude da compulsao alimentar"
          },
          {
            "id": "D - Frequencia minima",
            "texto": "Episodios ocorrem, em media, ao menos 1 vez por semana durante 3 meses."
          },
          {
            "id": "E - Sem compensacao",
            "texto": "A compulsao NAO esta associada ao uso recorrente de comportamento compensatorio inapropriado (como na bulimia) e NAO ocorre exclusivamente durante bulimia ou anorexia."
          }
        ],
        "regra_diagnostica": "A = true(compulsao_com_perda_de_controle) AND B ≥ 3/5 AND C = true(sofrimento) AND D ≥ 1x_semana_3_meses AND E = true(sem_compensacao_recorrente)",
        "especificadores": [
          "Remissao parcial:",
          "Remissao completa:"
        ],
        "gravidade": {
          "texto_completo": "- **tem_gravidade_formal:** TRUE\n- **Tipo:** frequencia_eventos\n- **Niveis (episodios de compulsao/semana):**\n\n| Nivel | Frequencia |\n|-------|-----------|\n| Leve | 1-3 episodios/semana |\n| Moderada | 4-7 episodios/semana |\n| Grave | 8-13 episodios/semana |\n| Extrema | ≥14 episodios/semana |\n\n- **Elevacao permitida:** Nivel pode ser aumentado para refletir outros sintomas e incapacidade funcional"
        },
        "duracao_e_curso": "- **Inicio:** Adolescencia ou idade adulta jovem (pode ser posterior a Bulimia)\n- **Minimo para diagnostico:** 3 meses de frequencia ≥1x/semana\n- **Curso:** Relativamente persistente; remissao mais comum que em Bulimia/Anorexia\n- **Relacao com obesidade:** Associado a sobrepeso/obesidade, mas DISTINTO da obesidade (maior comorbidade psiquiatrica, mais prejuizo funcional)",
        "exclusoes_obrigatorias": [
          "**Mutuamente exclusivo com Bulimia:** Bulimia tem compensacao; TCA nao tem",
          "**Mutuamente exclusivo com Anorexia:** Quando AN ativa, nao diagnosticar TCA",
          "Obesidade (nao e transtorno mental no DSM-5)",
          "TDM com aspectos atipicos (aumento de apetite pode nao ter perda de controle)",
          "Transtorno da personalidade borderline (compulsao faz parte do criterio de impulsividade, mas ambos podem ser diagnosticados)",
          "Transtorno bipolar (compulsao pode ocorrer na mania; ambos se criterios plenos)"
        ],
        "diferenciais_criticos": "1. **TCA vs Bulimia:** Diferenca crucial = ausencia de comportamentos compensatorios inapropriados recorrentes\n2. **TCA vs obesidade:** Obesidade = estado nutricional; TCA = perturbacao comportamental com sofrimento marcante e perda de controle\n3. **TCA vs TDM atipico:** TDM pode ter hiperfagia mas sem os criterios B especificos nem a frequencia/focus central na alimentacao\n4. **Frequencia sublimiar:** Se <1x/semana ou <3 meses → Outro Transtorno Alimentar Especificado (TCA de baixa frequencia)",
        "perguntas_chave_entrevista": [
          {
            "bloco": "Criterio A - Compulsao:",
            "texto": "Ja teve momentos de comer muito mais do que o normal em pouco tempo?"
          },
          {
            "bloco": "Criterio A - Compulsao:",
            "texto": "Sentiu que nao conseguia parar de comer durante esses momentos?"
          },
          {
            "bloco": "Criterio B - Caracteristicas (≥3):",
            "texto": "Nesses momentos, voce come mais rapido do que o normal?"
          },
          {
            "bloco": "Criterio B - Caracteristicas (≥3):",
            "texto": "Come ate ficar desconfortavelmente cheio?"
          },
          {
            "bloco": "Criterio B - Caracteristicas (≥3):",
            "texto": "Come grandes quantidades mesmo sem estar com fome?"
          },
          {
            "bloco": "Criterio B - Caracteristicas (≥3):",
            "texto": "Come sozinho porque tem vergonha do que ou quanto esta comendo?"
          },
          {
            "bloco": "Criterio B - Caracteristicas (≥3):",
            "texto": "Depois desses episodios, se sente enojado, deprimido ou com muita culpa?"
          },
          {
            "bloco": "Criterio C - Sofrimento:",
            "texto": "O quanto isso te incomoda ou causa sofrimento?"
          },
          {
            "bloco": "Criterio D - Frequencia:",
            "texto": "Com que frequencia isso acontece? Ha quanto tempo?"
          },
          {
            "bloco": "Criterio E - Compensacao:",
            "texto": "Voce faz algo para compensar a comida (vomito, laxantes, jejum, exercicio excessivo)?"
          },
          {
            "bloco": "Criterio E - Compensacao:",
            "texto": "Se sim, com que frequencia?"
          }
        ],
        "ui": {
          "renderiza_entrevista": true,
          "modo": "structured_full",
          "frequencia_minima": "1x_semana_3_meses",
          "contador_episodios": "obrigatorio",
          "caracteristicas_b": "3_de_5",
          "gravidade_por_frequencia": true,
          "verificar_compensacao": "obrigatorio"
        }
      },
      "super_enrichment_source": "dsm/output/json_super_adicionado/transtorno_compulsao_alimentar.json",
      "enrichment_status": {
        "has_poor": true,
        "has_master": true,
        "has_inventory": true,
        "has_hierarchy": false,
        "has_cid11": true,
        "has_super_enrichment": true,
        "match_notes": {
          "poor": "id",
          "master": "id",
          "inventario": "id",
          "hierarquia": "missing",
          "cid11": "id",
          "super": "id"
        }
      }
    }
  }
} as const;

// Validação runtime na borda — falha imediatamente se dados estiverem corrompidos
export const data: TranstornoDSM = parseGeneratedDiseaseData(rawData);

// Raw document preservado para depuração — acessado via objeto validado
export const rawDocument = data.raw_document;
