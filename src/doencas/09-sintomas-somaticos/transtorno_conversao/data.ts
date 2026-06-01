import { TranstornoDSMSchema, type TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import { parseGeneratedDiseaseData } from "@/infra/validation-helpers";

// Dados brutos normalizados da release DSM operacional
const rawData = {
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_conversao",
    "nome_completo": "Transtorno de Conversão (Transtorno de Sintomas Neurológicos Funcionais)",
    "sigla": "",
    "capitulo_id": "09",
    "capitulo": "Transtorno de Sintomas Somáticos e Transtornos Relacionados",
    "grupo": null,
    "versao_complementar_existe": false,
    "sinonimos_historicos": [],
    "faixa_etaria_alvo": "ambos",
    "codigo": {
      "cid10": "F44.x",
      "cid11": "6B60",
      "dsm5": "300.11"
    }
  },
  "id": "transtorno_conversao",
  "item_id": "transtorno_conversao",
  "name": "Transtorno de Conversão (Transtorno de Sintomas Neurológicos Funcionais)",
  "nome_completo": "Transtorno de Conversão (Transtorno de Sintomas Neurológicos Funcionais)",
  "chapter_id": "09",
  "chapter_name": "Transtorno de Sintomas Somáticos e Transtornos Relacionados",
  "category": "FULL",
  "estrutura_diagnostica": "monothetic_puro",
  "estrutura_geral": "criterios_sintomaticos",
  "ui_mode": "structured_full",
  "severity_type": "ordinal_simples",
  "has_formal_severity": true,
  "render_structured_interview": true,
  "diagnostic_rule": "",
  "clusters_sintomas": [
    {
      "id": "A_B",
      "nome": "Sintoma Motor/Sensorial Incompatível com Condição Neurológica",
      "descricao": "",
      "sintomas": [
        {
          "id": "A1",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "B1",
          "texto": "",
          "descricao": ""
        }
      ]
    }
  ],
  "criterios_condicionais": [
    {
      "id": "exclusao_facticio",
      "letra": "C",
      "rotulo": "Não melhor explicado por transtorno factício ou simulação",
      "descricao_completa": "Não melhor explicado por outro transtorno médico, transtorno factício ou simulação.",
      "obrigatorio": true
    },
    {
      "id": "sofrimento_funcional",
      "letra": "D",
      "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
      "descricao_completa": "Causa sofrimento clinicamente significativo ou prejuízo.",
      "obrigatorio": true
    }
  ],
  "gravidade": {
    "tipo": "ordinal_simples",
    "presente": true,
    "has_formal_severity": true,
    "regra_atribuicao": "None",
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
      }
    ],
    "dominios": []
  },
  "dominios_impacto": [
    {
      "id": "trabalho",
      "label": "Desempenho Profissional"
    },
    {
      "id": "mobilidade",
      "label": "Mobilidade e Independência"
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno de ansiedade",
      "frequencia": "alta",
      "nota": "None"
    },
    {
      "condicao": "Transtorno Depressivo Maior",
      "frequencia": "alta",
      "nota": "None"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Doença neurológica",
      "ponto_distincao": "Conversão: sinais clínicos incompatíveis com doença neurológica reconhecida (sinal de Hoover, etc.).",
      "pertence_a_classe": false
    }
  ],
  "perguntas_chave": [],
  "key_questions": [],
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Mediana ~30 anos; pode ocorrer em qualquer faixa etária",
    "trajetoria": "50% remitem espontaneamente em 2 semanas; crônico em alguns.",
    "prognostico": "Intervenção neuropsiquiátrica precoce é fator prognóstico positivo."
  },
  "prevalencia": {
    "populacao_geral": "2–5/100.000/ano (incidência estimada); comum em neurology clinics",
    "proporcao_sexo": "2–3:1 mulheres:homens",
    "variacoes_culturais": "Prevalência maior em países com renda baixa e recursos médicos limitados.",
    "notas": "None"
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
      true,
      "Tipo de sintoma",
      true,
      [
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
      "id": "episodio_agudo",
      "nome": "Episódio agudo",
      "descricao": ""
    },
    {
      "id": "persistente",
      "nome": "Persistente",
      "descricao": ""
    },
    {
      "id": "estressor_psicologico",
      "nome": "Com estressor psicológico",
      "descricao": ""
    },
    {
      "id": "sem_estressor",
      "nome": "Sem estressor psicológico",
      "descricao": ""
    }
  ],
  "template_prontuario": {
    "titulo": "",
    "texto": "",
    "campos": []
  },
  "metadados_globais": {
    "fonte_capitulo_md": "09_transtorno_sintomas_somaticos_transtornos_relacionados.md",
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
      "id": "transtorno_conversao",
      "nome_completo": "Transtorno de Conversão (Transtorno de Sintomas Neurológicos Funcionais)",
      "sigla": "",
      "capitulo_id": "09",
      "capitulo": "Transtorno de Sintomas Somáticos e Transtornos Relacionados",
      "grupo": null,
      "versao_complementar_existe": false,
      "sinonimos_historicos": [
        "Histeria",
        "Transtorno de conversão"
      ],
      "faixa_etaria_alvo": "ambos",
      "codigo": {
        "cid10": "F44.x",
        "cid11": "6B60",
        "dsm5": "300.11"
      }
    },
    "id": "transtorno_conversao",
    "item_id": "transtorno_conversao",
    "name": "Transtorno de Conversão (Transtorno de Sintomas Neurológicos Funcionais)",
    "nome_completo": "Transtorno de Conversão (Transtorno de Sintomas Neurológicos Funcionais)",
    "chapter_id": "09",
    "chapter_name": "Transtorno de Sintomas Somáticos e Transtornos Relacionados",
    "category": "FULL",
    "estrutura_diagnostica": "monothetic_puro",
    "estrutura_geral": "monothetic_puro",
    "ui_mode": "structured_full",
    "severity_type": "ordinal_simples",
    "has_formal_severity": true,
    "render_structured_interview": true,
    "diagnostic_rule": "",
    "clusters_sintomas": [
      {
        "id": "A_B",
        "nome": "Sintoma Motor/Sensorial Incompatível com Condição Neurológica",
        "descricao": "",
        "sintomas": [
          {
            "id": "A1",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "B1",
            "texto": "",
            "descricao": ""
          }
        ]
      }
    ],
    "criterios_condicionais": [
      {
        "id": "exclusao_facticio",
        "letra": "C",
        "rotulo": "Não melhor explicado por transtorno factício ou simulação",
        "descricao_completa": "Não melhor explicado por outro transtorno médico, transtorno factício ou simulação.",
        "obrigatorio": true
      },
      {
        "id": "sofrimento_funcional",
        "letra": "D",
        "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
        "descricao_completa": "Causa sofrimento clinicamente significativo ou prejuízo.",
        "obrigatorio": true
      }
    ],
    "gravidade": {
      "tipo": "ordinal_simples",
      "presente": true,
      "has_formal_severity": true,
      "regra_atribuicao": "None",
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
        }
      ],
      "dominios": []
    },
    "dominios_impacto": [
      {
        "id": "trabalho",
        "label": "Desempenho Profissional"
      },
      {
        "id": "mobilidade",
        "label": "Mobilidade e Independência"
      }
    ],
    "comorbidades_frequentes": [
      {
        "condicao": "Transtorno de ansiedade",
        "frequencia": "alta",
        "nota": "None"
      },
      {
        "condicao": "Transtorno Depressivo Maior",
        "frequencia": "alta",
        "nota": "None"
      }
    ],
    "diagnostico_diferencial": [
      {
        "condicao": "Doença neurológica",
        "ponto_distincao": "Conversão: sinais clínicos incompatíveis com doença neurológica reconhecida (sinal de Hoover, etc.).",
        "pertence_a_classe": false
      }
    ],
    "perguntas_chave": [],
    "key_questions": [],
    "curso_desenvolvimento": {
      "idade_inicio_tipica": "Mediana ~30 anos; pode ocorrer em qualquer faixa etária",
      "trajetoria": "50% remitem espontaneamente em 2 semanas; crônico em alguns.",
      "prognostico": "Intervenção neuropsiquiátrica precoce é fator prognóstico positivo."
    },
    "prevalencia": {
      "populacao_geral": "2–5/100.000/ano (incidência estimada); comum em neurology clinics",
      "proporcao_sexo": "2–3:1 mulheres:homens",
      "variacoes_culturais": "Prevalência maior em países com renda baixa e recursos médicos limitados.",
      "notas": "None"
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
        true,
        "Tipo de sintoma",
        true,
        [
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
        "id": "episodio_agudo",
        "nome": "Episódio agudo",
        "descricao": ""
      },
      {
        "id": "persistente",
        "nome": "Persistente",
        "descricao": ""
      },
      {
        "id": "estressor_psicologico",
        "nome": "Com estressor psicológico",
        "descricao": ""
      },
      {
        "id": "sem_estressor",
        "nome": "Sem estressor psicológico",
        "descricao": ""
      }
    ],
    "template_prontuario": {
      "titulo": "",
      "texto": "",
      "campos": []
    },
    "metadados_globais": {
      "fonte_capitulo_md": "09_transtorno_sintomas_somaticos_transtornos_relacionados.md",
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
      "estrutura_geral": "monothetic_puro",
      "clusters_sintomas": [
        {
          "id": "A_B",
          "nome": "Sintoma Motor/Sensorial Incompatível com Condição Neurológica",
          "tipo": "monothetic_obrigatorio",
          "limiar": null,
          "ancora_obrigatoria": null,
          "sintomas": [
            {
              "id": "A1",
              "rotulo": "Sintoma(s) motor ou sensorial alterados",
              "desc": "Um ou mais sintomas de função motora ou sensorial voluntária alteradas.",
              "pergunta": "Você tem fraqueza, paralisia, tremores ou perda sensorial que os médicos dizem não ter causa neurológica identificável?",
              "exemplos_clinicos": [
                "Fraqueza funcional de membros",
                "Crises não epilépticas",
                "Cegueira funcional"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "B1",
              "rotulo": "Incompatibilidade com doença neurológica conhecida",
              "desc": "Achados clínicos fornecem evidências de incompatibilidade entre o sintoma e condições neurológicas ou médicas reconhecidas.",
              "pergunta": "O médico confirmou que seus sintomas não são explicados por doença neurológica ou médica conhecida?",
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
          "id": "exclusao_facticio",
          "letra": "C",
          "rotulo": "Não melhor explicado por transtorno factício ou simulação",
          "tipo": "exclusao_diagnostica",
          "ui_widget": "toggle_simples",
          "obrigatorio": true,
          "icone_fa": "fa-check",
          "ddx_sugeridos": [
            "transtorno_facticio"
          ],
          "descricao_completa": "Não melhor explicado por outro transtorno médico, transtorno factício ou simulação.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "sofrimento_funcional",
          "letra": "D",
          "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
          "tipo": "prejuizo_funcional",
          "ui_widget": "toggle_com_justificativa_obrigatoria",
          "obrigatorio": true,
          "icone_fa": "fa-check",
          "ddx_sugeridos": [],
          "descricao_completa": "Causa sofrimento clinicamente significativo ou prejuízo.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        }
      ],
      "subtipos": {
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
      },
      "especificadores": [
        {
          "id": "episodio_agudo",
          "nome": "Episódio agudo",
          "tipo": "booleano",
          "ortogonal": false,
          "opcoes": [],
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": "Sintomas <6 meses.",
            "fonte_passada_1": true
          }
        },
        {
          "id": "persistente",
          "nome": "Persistente",
          "tipo": "booleano",
          "ortogonal": false,
          "opcoes": [],
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": "Sintomas ≥6 meses.",
            "fonte_passada_1": true
          }
        },
        {
          "id": "estressor_psicologico",
          "nome": "Com estressor psicológico",
          "tipo": "booleano",
          "ortogonal": true,
          "opcoes": [],
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "sem_estressor",
          "nome": "Sem estressor psicológico",
          "tipo": "booleano",
          "ortogonal": true,
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
          "id": "trabalho",
          "label": "Desempenho Profissional",
          "icone_fa": "fa-briefcase",
          "relevante_para": "adulto"
        },
        {
          "id": "mobilidade",
          "label": "Mobilidade e Independência",
          "icone_fa": "fa-walking",
          "relevante_para": "transversal"
        }
      ],
      "diagnostico_diferencial": [
        {
          "condicao": "Doença neurológica",
          "ponto_distincao": "Conversão: sinais clínicos incompatíveis com doença neurológica reconhecida (sinal de Hoover, etc.).",
          "pertence_a_classe": false
        }
      ],
      "comorbidades_frequentes": [
        {
          "condicao": "Transtorno de ansiedade",
          "frequencia": "alta",
          "nota": null
        },
        {
          "condicao": "Transtorno Depressivo Maior",
          "frequencia": "alta",
          "nota": null
        }
      ],
      "instrumentos_complementares": [],
      "prevalencia": {
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
      },
      "curso_desenvolvimento": {
        "idade_inicio_tipica": "Mediana ~30 anos; pode ocorrer em qualquer faixa etária",
        "trajetoria": "50% remitem espontaneamente em 2 semanas; crônico em alguns.",
        "prognostico": "Intervenção neuropsiquiátrica precoce é fator prognóstico positivo.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "template_prontuario": {
        "cabecalho": "## Avaliação do Transtorno de Conversão - {nome_paciente}",
        "rodape_metodologico": "Anamnese clínica com base nos critérios DSM-5 (300.11 / F44.x)."
      },
      "metadados_globais": {
        "fonte_capitulo_md": "09_transtorno_sintomas_somaticos_transtornos_relacionados.md",
        "fonte_inventario_md": null,
        "data_extracao": "2026-05-31",
        "modelo_agente": "antigravity-gemini",
        "lacunas_globais": [],
        "inconsistencias_detectadas": [],
        "notas_agente_globais": null,
        "revisao_humana_necessaria": false
      },
      "id": "transtorno_conversao",
      "category": "FULL",
      "ui_mode": "structured_full",
      "render_structured_interview": true,
      "rendering": {
        "estrutura_diagnostica": "qualitativo_descritivo",
        "criteria": [
          "A. Um ou mais sintomas de funcao motora ou sensorial alterada",
          "B. Achados fisicos evidenciam incompatibilidade entre o sintoma e condicoes neurologicas conhecidas",
          "C. NAO e melhor explicado por outro transtorno mental ou medico",
          "D. O sintoma causa sofrimento clinicamente significativo OU prejuizo funcional OU requer avaliacao medica"
        ],
        "diagnostic_rule": "A(sintoma motor/sensorial) + B(incompatibilidade neurologica) + C(exclusoes) + D(sofrimento/prejuizo/avaliacao)",
        "clusters": [],
        "duration": null,
        "age_onset": null,
        "functional_impairment": "Sofrimento clinicamente significativo ou prejuizo funcional",
        "exclusions": [
          "Doenca neurologica explicativa",
          "Facticio/simulacao com evidencias definitivas"
        ],
        "subtypes_presentations": [
          "Com fraqueza ou paralisia",
          "Com movimento anormal",
          "Com sintomas de degluticao",
          "Com sintoma de fala",
          "Com ataques ou convulsoes",
          "Com anestesia ou perda sensorial",
          "Com sintoma sensorial especial",
          "Com sintomas mistos"
        ],
        "specifiers": [
          "Episodio agudo (<6 meses)",
          "Persistente (≥6 meses)",
          "Com estressor psicologico",
          "Sem estressor psicologico"
        ],
        "operational_profiles": [],
        "severity": {
          "has_formal_severity": false,
          "type": "nao_aplica",
          "levels": [],
          "assignment_rule": null,
          "domains": []
        },
        "critical_differentials": [
          "Doenca neurologica",
          "TSS",
          "Transtorno facticio/simulacao",
          "Transtornos dissociativos",
          "DBC",
          "Panico",
          "Transtornos depressivos"
        ],
        "key_questions": [
          "Que tipo de alteracao voce notou no movimento ou sensacao?",
          "Os sintomas sao consistentes?",
          "Ja houve exame neurologico?",
          "Os sintomas mudam quando voce esta distraido?"
        ],
        "alerts": [
          "Requer avaliacao neurologica previa; diagnostico por incompatibilidade, nao por exames normais"
        ],
        "source_trace": {
          "markdown_section": "3. TRANSTORNO CONVERSIVO - FICHA FULL",
          "patches_applied": []
        },
        "category": "FULL",
        "ui_mode": "structured_full",
        "render_structured_interview": true
      },
      "codigo_dsm5": "300.11",
      "codigo_cid10": "F44.x",
      "faixa_etaria_alvo": "ambos",
      "versao_complementar_existe": false,
      "inventario_clinico": {
        "codigo_bruto": "- **Codigo DSM-5 / CID-10:** CID-9-MC 300.11 (independentemente do tipo de sintoma); CID-10-MC varia por tipo de sintoma (ver subtipos abaixo).",
        "estrutura_efetiva": "- **Estrutura efetiva:**",
        "notas_clinicas": "- **Notas:**"
      },
      "codigo_cid11": "6B60",
      "super_enrichment": {
        "id": "transtorno_conversao",
        "nome_original": "TRANSTORNO CONVERSIVO",
        "comorbidades_frequentes": [
          {
            "condicao": "Transtorno de ansiedade",
            "frequencia": "alta",
            "nota": null
          },
          {
            "condicao": "Transtorno Depressivo Maior",
            "frequencia": "alta",
            "nota": null
          }
        ],
        "diagnostico_diferencial": [
          {
            "condicao": "Doença neurológica",
            "ponto_distincao": "Conversão: sinais clínicos incompatíveis com doença neurológica reconhecida (sinal de Hoover, etc.).",
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
          "populacao_geral": "2–5/100.000/ano (incidência estimada); comum em neurology clinics",
          "proporcao_sexo": "2–3:1 mulheres:homens",
          "variacoes_culturais": "Prevalência maior em países com renda baixa e recursos médicos limitados."
        },
        "curso_desenvolvimento": {
          "idade_inicio_tipica": "Mediana ~30 anos; pode ocorrer em qualquer faixa etária",
          "trajetoria": "50% remitem espontaneamente em 2 semanas; crônico em alguns.",
          "prognostico": "Intervenção neuropsiquiátrica precoce é fator prognóstico positivo."
        },
        "instrumentos_complementares": [],
        "identificacao": {
          "nome": "Transtorno Conversivo (Transtorno de Sintomas Neurologicos Funcionais)",
          "codigo_dsm5": "300.11 (F44.x)",
          "categoria": "Transtornos de Sintomas Somaticos e Relacionados",
          "categoria_operacional": "FULL",
          "estrutura_diagnostica": "qualitativo_descritivo",
          "nota_dsm5": "Nome alterado do DSM-IV (\"transtorno conversivo\" → \"transtorno de sintomas neurologicos funcionais\"). Diagnostico baseado em incompatibilidade com fisiopatologia neurologica demonstrada por achados clinicos."
        },
        "criterios_obrigatorios": [
          {
            "id": "A",
            "texto": "Um ou mais sintomas de funcao motora ou sensorial alterada."
          },
          {
            "id": "B",
            "texto": "Achados fisicos evidenciam **incompatibilidade** entre o sintoma e condicoes medicas/neurologicas conhecidas."
          },
          {
            "id": "C",
            "texto": "O sintoma/deficit NAO e melhor explicado por outro transtorno mental ou medico."
          },
          {
            "id": "D",
            "texto": "O sintoma/deficit causa sofrimento clinicamente significativo OU prejuizo no funcionamento social/profissional OU requer avaliacao medica."
          }
        ],
        "regra_diagnostica": "TCnv = A(sintoma_motor_sensorial) + B(incompatibilidade_neurologica) + C(exclusoes) + D(sofrimento/prejuizo/avaliacao)",
        "subtipos": [
          {
            "Codigo": "F44.4",
            "Tipo": "Com fraqueza ou paralisia"
          },
          {
            "Codigo": "F44.4",
            "Tipo": "Com movimento anormal (tremor, distonia, mioclonia, disturbio da marcha)"
          },
          {
            "Codigo": "F44.4",
            "Tipo": "Com sintomas de degluticao"
          },
          {
            "Codigo": "F44.4",
            "Tipo": "Com sintoma de fala (disfonia, fala arrastada)"
          },
          {
            "Codigo": "F44.5",
            "Tipo": "Com ataques ou convulsoes"
          },
          {
            "Codigo": "F44.6",
            "Tipo": "Com anestesia ou perda sensorial"
          },
          {
            "Codigo": "F44.6",
            "Tipo": "Com sintoma sensorial especial (visual, olfatório, auditivo)"
          },
          {
            "Codigo": "F44.7",
            "Tipo": "Com sintomas mistos"
          }
        ],
        "especificadores": [
          {
            "Especificador": "Curso",
            "Descricao": "Episodio agudo (<6 meses) / Persistente (≥6 meses)"
          },
          {
            "Especificador": "Estressor",
            "Descricao": "Com estressor psicologico (especificar) / Sem estressor psicologico"
          }
        ],
        "achados_de_incompatibilidade_exemplos_clinicos": "- **Sinal de Hoover:** Fraqueza da extensao do quadril retorna a forca normal com flexao contralateral\n- **Fraqueza plantar inconsistente:** Acentuada no leito, mas paciente caminha na ponta dos pes\n- **Tremor funcional:** Muda quando paciente distraido (imita ritmo da mao nao afetada)\n- **Ataques nao epilepticos:** Olhos fechados com resistencia a abertura + EEG normal\n- **Campo visual tubular:** Visao em tunel\n\n**Nota critica:** Diagnostico deve se basear no quadro clinico geral, NAO em um unico achado.",
        "diferenciais_criticos": [
          {
            "Condicao": "Doenca neurologica",
            "Chave de Diferenciacao": "Principal diferencial. Requer avaliacao neurologica completa. TCnv pode coexistir com doenca neurologica."
          },
          {
            "Condicao": "TSS",
            "Chave de Diferenciacao": "TCnv = perda de funcao neurologica incompative. TSS = sofrimento pelos sintomas + resposta excessiva. Podem coexistir."
          },
          {
            "Condicao": "Transtorno facticio/simulacao",
            "Chave de Diferenciacao": "TCnv NAO requer julgamento de nao-intencionalidade. Evidencias DEFINITIVAS de fingimento → facticio/simulacao."
          },
          {
            "Condicao": "Transtornos dissociativos",
            "Chave de Diferenciacao": "Sintomas dissociativos sao comuns em TCnv. Se ambos presentes, diagnosticar ambos."
          },
          {
            "Condicao": "Transtorno dismorfico corporal",
            "Chave de Diferenciacao": "DBC = preocupacao com aparencia; TCnv = alteracao de funcionamento sensorial/motor."
          },
          {
            "Condicao": "Transtorno de panico",
            "Chave de Diferenciacao": "Panico = sintomas neurologicos transitorios + cardiorespiratorios. TCnv = perda de consciencia/amnesia/movimentos violentos nao ocorrem em panico."
          },
          {
            "Condicao": "Transtornos depressivos",
            "Chave de Diferenciacao": "Depressao = sensacao de peso generalizada; TCnv = fraqueza focal e proeminente + sintomas depressivos centrais."
          }
        ],
        "perguntas_chave_entrevista": [
          {
            "numero": 1,
            "texto": "Que tipo de alteracao voce notou no movimento ou sensacao?"
          },
          {
            "numero": 2,
            "texto": "Quando comecou? Foi gradual ou repentino?"
          },
          {
            "numero": 3,
            "texto": "Houve algum estresse ou trauma proximo ao inicio?"
          },
          {
            "numero": 4,
            "texto": "Os sintomas sao consistentes?"
          },
          {
            "numero": 5,
            "texto": "Ja houve exame neurologico? Os achados explicam completamente os sintomas?"
          },
          {
            "numero": 6,
            "texto": "Os sintomas causam sofrimento ou prejuizo no dia a dia?"
          },
          {
            "numero": 7,
            "texto": "Voce parece preocupado com as implicacoes do sintoma?"
          },
          {
            "numero": 8,
            "texto": "Os sintomas mudam quando voce esta distraido?"
          },
          {
            "numero": 9,
            "texto": "Ha historia de abuso, negligencia ou trauma na infancia?"
          },
          {
            "numero": 10,
            "texto": "Sintomas dissociativos (desrealizacao, amnesia) presentes?"
          }
        ],
        "ui": {}
      },
      "super_enrichment_source": "dsm/output/json_super_adicionado/transtorno_conversao.json",
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
