import { TranstornoDSMSchema, type TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import { parseGeneratedDiseaseData } from "@/infra/validation-helpers";

// Dados brutos normalizados da release DSM operacional
const rawData = {
  "$schema_version": "1.0.0",
  "meta": {
    "id": "fobia_especifica",
    "nome_completo": "Fobia Específica",
    "sigla": "",
    "capitulo_id": "05",
    "capitulo": "Transtornos de Ansiedade",
    "grupo": null,
    "versao_complementar_existe": false,
    "sinonimos_historicos": [],
    "faixa_etaria_alvo": "ambos",
    "codigo": {
      "cid10": "F40.2",
      "cid11": "6B03",
      "dsm5": "300.29"
    }
  },
  "id": "fobia_especifica",
  "item_id": "fobia_especifica",
  "name": "Fobia Específica",
  "nome_completo": "Fobia Específica",
  "chapter_id": "05",
  "chapter_name": "Transtornos de Ansiedade",
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
      "id": "A",
      "nome": "Medo/Ansiedade Acentuados Acerca de Objeto/Situação Específica",
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
        },
        {
          "id": "C1",
          "texto": "",
          "descricao": ""
        }
      ]
    }
  ],
  "criterios_condicionais": [
    {
      "id": "desproporcional_contexto",
      "letra": "D",
      "rotulo": "Medo desproporcional ao perigo real",
      "descricao_completa": "O medo ou ansiedade é desproporcional ao perigo real imposto pelo objeto/situação e ao contexto sociocultural.",
      "obrigatorio": true
    },
    {
      "id": "duracao_6meses",
      "letra": "E",
      "rotulo": "Duração ≥6 meses",
      "descricao_completa": "O medo, ansiedade ou esquiva é persistente, com duração mínima de seis meses.",
      "obrigatorio": true
    },
    {
      "id": "sofrimento_funcional",
      "letra": "F",
      "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
      "descricao_completa": "O medo, ansiedade ou esquiva causa sofrimento clinicamente significativo ou prejuízo no funcionamento social, profissional ou outras áreas.",
      "obrigatorio": true
    },
    {
      "id": "exclusao_outros",
      "letra": "G",
      "rotulo": "Não melhor explicado por outro transtorno mental",
      "descricao_completa": "Não mais bem explicado por TAS, agorafobia, TAG, TEPT, TAG, transtorno obsessivo-compulsivo, transtorno de ansiedade social.",
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
      "id": "social",
      "label": "Funcionamento Social"
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Outros transtornos de ansiedade",
      "frequencia": "alta",
      "nota": "Frequentemente múltiplas fobias coexistem."
    },
    {
      "condicao": "Transtorno Depressivo Maior",
      "frequencia": "moderada",
      "nota": "None"
    },
    {
      "condicao": "Transtorno por uso de substâncias",
      "frequencia": "moderada",
      "nota": "None"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Agorafobia",
      "ponto_distincao": "Agorafobia: medo de situações múltiplas por impossibilidade de escapar; fobia específica: objeto/situação único.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno de Ansiedade Social",
      "ponto_distincao": "TAS: situações de avaliação social; fobia específica: objeto/situação específico não vinculado à avaliação.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno de Estresse Pós-Traumático",
      "ponto_distincao": "TEPT: medo surge após trauma; fobia específica: estímulo fóbico não necessariamente relacionado a trauma.",
      "pertence_a_classe": false
    }
  ],
  "perguntas_chave": [],
  "key_questions": [],
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Infância; tipo situacional: início mais tardio (~20 anos)",
    "trajetoria": "Início na infância frequentemente remite; quando persiste na adultícia raramente remite espontaneamente.",
    "prognostico": "Com tratamento (terapia de exposição), remissão em 80%+ dos casos."
  },
  "prevalencia": {
    "populacao_geral": "7–9% (prevalência de 12 meses); 13,2% (prevalência na vida)",
    "proporcao_sexo": "2:1 mulheres:homens; tipo sangue-injeção-ferimento: razão menor",
    "variacoes_culturais": "Taxas variam; medo de magia e espíritos em algumas culturas; não classificar se sancionado culturalmente.",
    "notas": "Prevalência decresce com a idade."
  },
  "hierarquia": {
    "presente": false,
    "notas": "Múltiplas fobias específicas devem ser diagnosticadas — cada objeto/situação distinto recebe seu próprio código.",
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": []
  },
  "subtipos": {
    "presente": true,
    "itens": [
      true,
      "Tipo de estímulo",
      false,
      [
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
      {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    ]
  },
  "especificadores": [],
  "template_prontuario": {
    "titulo": "",
    "texto": "",
    "campos": []
  },
  "metadados_globais": {
    "fonte_capitulo_md": "05_transtornos_ansiedade.md",
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
      "id": "fobia_especifica",
      "nome_completo": "Fobia Específica",
      "sigla": "",
      "capitulo_id": "05",
      "capitulo": "Transtornos de Ansiedade",
      "grupo": null,
      "versao_complementar_existe": false,
      "sinonimos_historicos": [],
      "faixa_etaria_alvo": "ambos",
      "codigo": {
        "cid10": "F40.2",
        "cid11": "6B03",
        "dsm5": "300.29"
      }
    },
    "id": "fobia_especifica",
    "item_id": "fobia_especifica",
    "name": "Fobia Específica",
    "nome_completo": "Fobia Específica",
    "chapter_id": "05",
    "chapter_name": "Transtornos de Ansiedade",
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
        "id": "A",
        "nome": "Medo/Ansiedade Acentuados Acerca de Objeto/Situação Específica",
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
          },
          {
            "id": "C1",
            "texto": "",
            "descricao": ""
          }
        ]
      }
    ],
    "criterios_condicionais": [
      {
        "id": "desproporcional_contexto",
        "letra": "D",
        "rotulo": "Medo desproporcional ao perigo real",
        "descricao_completa": "O medo ou ansiedade é desproporcional ao perigo real imposto pelo objeto/situação e ao contexto sociocultural.",
        "obrigatorio": true
      },
      {
        "id": "duracao_6meses",
        "letra": "E",
        "rotulo": "Duração ≥6 meses",
        "descricao_completa": "O medo, ansiedade ou esquiva é persistente, com duração mínima de seis meses.",
        "obrigatorio": true
      },
      {
        "id": "sofrimento_funcional",
        "letra": "F",
        "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
        "descricao_completa": "O medo, ansiedade ou esquiva causa sofrimento clinicamente significativo ou prejuízo no funcionamento social, profissional ou outras áreas.",
        "obrigatorio": true
      },
      {
        "id": "exclusao_outros",
        "letra": "G",
        "rotulo": "Não melhor explicado por outro transtorno mental",
        "descricao_completa": "Não mais bem explicado por TAS, agorafobia, TAG, TEPT, TAG, transtorno obsessivo-compulsivo, transtorno de ansiedade social.",
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
        "id": "social",
        "label": "Funcionamento Social"
      }
    ],
    "comorbidades_frequentes": [
      {
        "condicao": "Outros transtornos de ansiedade",
        "frequencia": "alta",
        "nota": "Frequentemente múltiplas fobias coexistem."
      },
      {
        "condicao": "Transtorno Depressivo Maior",
        "frequencia": "moderada",
        "nota": "None"
      },
      {
        "condicao": "Transtorno por uso de substâncias",
        "frequencia": "moderada",
        "nota": "None"
      }
    ],
    "diagnostico_diferencial": [
      {
        "condicao": "Agorafobia",
        "ponto_distincao": "Agorafobia: medo de situações múltiplas por impossibilidade de escapar; fobia específica: objeto/situação único.",
        "pertence_a_classe": true
      },
      {
        "condicao": "Transtorno de Ansiedade Social",
        "ponto_distincao": "TAS: situações de avaliação social; fobia específica: objeto/situação específico não vinculado à avaliação.",
        "pertence_a_classe": true
      },
      {
        "condicao": "Transtorno de Estresse Pós-Traumático",
        "ponto_distincao": "TEPT: medo surge após trauma; fobia específica: estímulo fóbico não necessariamente relacionado a trauma.",
        "pertence_a_classe": false
      }
    ],
    "perguntas_chave": [],
    "key_questions": [],
    "curso_desenvolvimento": {
      "idade_inicio_tipica": "Infância; tipo situacional: início mais tardio (~20 anos)",
      "trajetoria": "Início na infância frequentemente remite; quando persiste na adultícia raramente remite espontaneamente.",
      "prognostico": "Com tratamento (terapia de exposição), remissão em 80%+ dos casos."
    },
    "prevalencia": {
      "populacao_geral": "7–9% (prevalência de 12 meses); 13,2% (prevalência na vida)",
      "proporcao_sexo": "2:1 mulheres:homens; tipo sangue-injeção-ferimento: razão menor",
      "variacoes_culturais": "Taxas variam; medo de magia e espíritos em algumas culturas; não classificar se sancionado culturalmente.",
      "notas": "Prevalência decresce com a idade."
    },
    "hierarquia": {
      "presente": false,
      "notas": "Múltiplas fobias específicas devem ser diagnosticadas — cada objeto/situação distinto recebe seu próprio código.",
      "exclui_se_diagnosticado": [],
      "exclui_diagnostico_de": []
    },
    "subtipos": {
      "presente": true,
      "itens": [
        true,
        "Tipo de estímulo",
        false,
        [
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
        {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      ]
    },
    "especificadores": [],
    "template_prontuario": {
      "titulo": "",
      "texto": "",
      "campos": []
    },
    "metadados_globais": {
      "fonte_capitulo_md": "05_transtornos_ansiedade.md",
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
      "estrutura_geral": "monothetic_puro",
      "clusters_sintomas": [
        {
          "id": "A",
          "nome": "Medo/Ansiedade Acentuados Acerca de Objeto/Situação Específica",
          "tipo": "monothetic_obrigatorio",
          "limiar": null,
          "ancora_obrigatoria": null,
          "sintomas": [
            {
              "id": "A1",
              "rotulo": "Medo ou ansiedade acentuados sobre objeto/situação",
              "desc": "Medo ou ansiedade acentuados acerca de objeto ou situação específica (p.ex., voar, alturas, animais, injeção, sangue). Em crianças: pode ser choro, ataques de raiva, imobilidade ou comportamento de agarrar-se.",
              "pergunta": "Você tem medo intenso de alguma coisa específica, como animais, alturas, agulhas ou lugares fechados?",
              "exemplos_clinicos": [
                "Pânico ao ver cobras",
                "Terror ao entrar em elevador"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "B1",
              "rotulo": "Resposta imediata de medo/ansiedade ao estímulo",
              "desc": "O objeto ou situação fóbica quase invariavelmente provoca uma resposta imediata de medo ou ansiedade.",
              "pergunta": "Quando você se depara com esse objeto ou situação, sente medo imediatamente?",
              "exemplos_clinicos": [
                "Ataque de pânico ao ver sangue"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "C1",
              "rotulo": "Evitação ativa ou suportação com sofrimento intenso",
              "desc": "O objeto ou situação fóbica é ativamente evitado ou suportado com intensa ansiedade ou sofrimento.",
              "pergunta": "Você evita esse objeto/situação ou suporta com muito sofrimento?",
              "exemplos_clinicos": [
                "Recusa de viagens aéreas"
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
        }
      ],
      "criterios_condicionais": [
        {
          "id": "desproporcional_contexto",
          "letra": "D",
          "rotulo": "Medo desproporcional ao perigo real",
          "tipo": "qualitativo_descritivo",
          "ui_widget": "toggle_com_justificativa_obrigatoria",
          "obrigatorio": true,
          "icone_fa": "fa-balance-scale",
          "ddx_sugeridos": [],
          "descricao_completa": "O medo ou ansiedade é desproporcional ao perigo real imposto pelo objeto/situação e ao contexto sociocultural.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "duracao_6meses",
          "letra": "E",
          "rotulo": "Duração ≥6 meses",
          "tipo": "temporal_duracao_minima",
          "ui_widget": "campo_duracao_meses",
          "obrigatorio": true,
          "icone_fa": "fa-calendar",
          "ddx_sugeridos": [],
          "descricao_completa": "O medo, ansiedade ou esquiva é persistente, com duração mínima de seis meses.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "sofrimento_funcional",
          "letra": "F",
          "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
          "tipo": "prejuizo_funcional",
          "ui_widget": "toggle_com_justificativa_obrigatoria",
          "obrigatorio": true,
          "icone_fa": "fa-exclamation-circle",
          "ddx_sugeridos": [],
          "descricao_completa": "O medo, ansiedade ou esquiva causa sofrimento clinicamente significativo ou prejuízo no funcionamento social, profissional ou outras áreas.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "exclusao_outros",
          "letra": "G",
          "rotulo": "Não melhor explicado por outro transtorno mental",
          "tipo": "exclusao_diagnostica",
          "ui_widget": "select_multiplos_ddx",
          "obrigatorio": true,
          "icone_fa": "fa-ban",
          "ddx_sugeridos": [
            "tas",
            "agorafobia",
            "tag",
            "tept",
            "transtorno_ansiedade_social"
          ],
          "descricao_completa": "Não mais bem explicado por TAS, agorafobia, TAG, TEPT, TAG, transtorno obsessivo-compulsivo, transtorno de ansiedade social.",
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
      },
      "especificadores": [],
      "gravidade": {
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
      },
      "hierarquia": {
        "presente": false,
        "exclui_se_diagnosticado": [],
        "exclui_diagnostico_de": [],
        "notas": "Múltiplas fobias específicas devem ser diagnosticadas — cada objeto/situação distinto recebe seu próprio código.",
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
          "id": "social",
          "label": "Funcionamento Social",
          "icone_fa": "fa-users",
          "relevante_para": "ambos"
        }
      ],
      "diagnostico_diferencial": [
        {
          "condicao": "Agorafobia",
          "ponto_distincao": "Agorafobia: medo de situações múltiplas por impossibilidade de escapar; fobia específica: objeto/situação único.",
          "pertence_a_classe": true
        },
        {
          "condicao": "Transtorno de Ansiedade Social",
          "ponto_distincao": "TAS: situações de avaliação social; fobia específica: objeto/situação específico não vinculado à avaliação.",
          "pertence_a_classe": true
        },
        {
          "condicao": "Transtorno de Estresse Pós-Traumático",
          "ponto_distincao": "TEPT: medo surge após trauma; fobia específica: estímulo fóbico não necessariamente relacionado a trauma.",
          "pertence_a_classe": false
        }
      ],
      "comorbidades_frequentes": [
        {
          "condicao": "Outros transtornos de ansiedade",
          "frequencia": "alta",
          "nota": "Frequentemente múltiplas fobias coexistem."
        },
        {
          "condicao": "Transtorno Depressivo Maior",
          "frequencia": "moderada",
          "nota": null
        },
        {
          "condicao": "Transtorno por uso de substâncias",
          "frequencia": "moderada",
          "nota": null
        }
      ],
      "instrumentos_complementares": [],
      "prevalencia": {
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
      },
      "curso_desenvolvimento": {
        "idade_inicio_tipica": "Infância; tipo situacional: início mais tardio (~20 anos)",
        "trajetoria": "Início na infância frequentemente remite; quando persiste na adultícia raramente remite espontaneamente.",
        "prognostico": "Com tratamento (terapia de exposição), remissão em 80%+ dos casos.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "template_prontuario": {
        "cabecalho": "## Avaliação de Fobia Específica - {nome_paciente}",
        "rodape_metodologico": "Dados obtidos por anamnese clínica estruturada com base nos critérios DSM-5 (300.29 / F40.2xx)."
      },
      "metadados_globais": {
        "fonte_capitulo_md": "05_transtornos_ansiedade.md",
        "fonte_inventario_md": null,
        "data_extracao": "2026-05-31",
        "modelo_agente": "antigravity-gemini",
        "lacunas_globais": [],
        "inconsistencias_detectadas": [],
        "notas_agente_globais": null,
        "revisao_humana_necessaria": false
      },
      "id": "fobia_especifica",
      "category": "FULL",
      "ui_mode": "structured_full",
      "render_structured_interview": true,
      "rendering": {
        "estrutura_diagnostica": "monothetic_tripartite",
        "criteria": [],
        "diagnostic_rule": "```\n(A OBJETO_ESPECIFICO) + (B QUASE_INVARIAVEL_IMEDIATO) + (C EVITA_OU_INTENSO) + (D DESPROPORCIONAL) + (E >=6M) + (F PREJUIZO) + (G NAO_OUTRO_TX)\n```",
        "clusters": [],
        "duration": "| >= 6 meses |",
        "age_onset": "| 7-11 anos (media ~10 anos); situacionais tem inicio mais tardio |",
        "functional_impairment": null,
        "exclusions": [],
        "subtypes_presentations": [],
        "specifiers": [],
        "operational_profiles": [],
        "severity": {
          "has_formal_severity": false,
          "type": "nao_aplica",
          "levels": [],
          "assignment_rule": null,
          "domains": []
        },
        "critical_differentials": [],
        "key_questions": [
          "Tem medo intenso de algum objeto ou situacao especifica?",
          "O medo comeca imediatamente quando ve/encontra [estimulo]?",
          "Evita [estimulo] ou suporta com muito sofrimento?",
          "O medo e maior do que o perigo real justificaria?",
          "Ha quanto tempo isso dura?",
          "O medo interfere na sua vida?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### Fobia Especifica",
          "patches_applied": []
        },
        "category": "FULL",
        "ui_mode": "structured_full",
        "render_structured_interview": true
      },
      "codigo_dsm5": "300.29",
      "codigo_cid10": "F40.2",
      "faixa_etaria_alvo": "ambos",
      "versao_complementar_existe": false,
      "inventario_clinico": {
        "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 300.29 (subcodigos variados por estímulo)",
        "estrutura_efetiva": "- **Estrutura efetiva:** A (medo/ansiedade) + B (resposta imediata) + C (evitacao/sofrimento) + D (desproporcional) + E duracao + F funcional + G exclusao",
        "notas_clinicas": "- **Notas:**"
      },
      "codigo_cid11": "6B03",
      "super_enrichment": {
        "id": "fobia_especifica",
        "nome_original": "Fobia Especifica",
        "comorbidades_frequentes": [
          {
            "condicao": "Outros transtornos de ansiedade",
            "frequencia": "alta",
            "nota": "Frequentemente múltiplas fobias coexistem."
          },
          {
            "condicao": "Transtorno Depressivo Maior",
            "frequencia": "moderada",
            "nota": null
          },
          {
            "condicao": "Transtorno por uso de substâncias",
            "frequencia": "moderada",
            "nota": null
          }
        ],
        "diagnostico_diferencial": [
          {
            "condicao": "Agorafobia",
            "ponto_distincao": "Agorafobia: medo de situações múltiplas por impossibilidade de escapar; fobia específica: objeto/situação único.",
            "pertence_a_classe": true
          },
          {
            "condicao": "Transtorno de Ansiedade Social",
            "ponto_distincao": "TAS: situações de avaliação social; fobia específica: objeto/situação específico não vinculado à avaliação.",
            "pertence_a_classe": true
          },
          {
            "condicao": "Transtorno de Estresse Pós-Traumático",
            "ponto_distincao": "TEPT: medo surge após trauma; fobia específica: estímulo fóbico não necessariamente relacionado a trauma.",
            "pertence_a_classe": false
          }
        ],
        "hierarquia": {
          "presente": false,
          "exclui_se_diagnosticado": [],
          "exclui_diagnostico_de": [],
          "notas": "Múltiplas fobias específicas devem ser diagnosticadas — cada objeto/situação distinto recebe seu próprio código."
        },
        "prevalencia": {
          "populacao_geral": "7–9% (prevalência de 12 meses); 13,2% (prevalência na vida)",
          "proporcao_sexo": "2:1 mulheres:homens; tipo sangue-injeção-ferimento: razão menor",
          "variacoes_culturais": "Taxas variam; medo de magia e espíritos em algumas culturas; não classificar se sancionado culturalmente."
        },
        "curso_desenvolvimento": {
          "idade_inicio_tipica": "Infância; tipo situacional: início mais tardio (~20 anos)",
          "trajetoria": "Início na infância frequentemente remite; quando persiste na adultícia raramente remite espontaneamente.",
          "prognostico": "Com tratamento (terapia de exposição), remissão em 80%+ dos casos."
        },
        "instrumentos_complementares": [],
        "identificacao": {
          "nome": "Fobia Especifica",
          "codigo_dsm_5": "300.29 (varios F40.2xx)",
          "categoria_operacional": "SHORT",
          "estrutura_diagnostica": "monothetic_tripartite",
          "prevalencia": "7-9% (12 meses, EUA)",
          "razao_f_m": "2:1 (geral); aprox. 1:1 (sangue-injecao-ferimentos)"
        },
        "criterios_obrigatorios": [
          {
            "id": "completo",
            "texto": "| Criterio | Resumo Operacional |\n|----------|-------------------|\n| **A** | Medo ou ansiedade **acentuados** de objeto/situacao especifica (ex: voar, alturas, animais, injecao, sangue) |\n| **B** | Objeto/situacao **quase invariavelmente** provoca resposta imediata de medo/ansiedade |\n| **C** | Ativamente **evitado** ou suportado com **intensa ansiedade/sofrimento** |\n| **D** | Medo/ansiedade **desproporcional** ao perigo real e ao contexto sociocultural |\n| **E** | Persistente: geralmente **>= 6 meses** |\n| **F** | Causa **sofrimento ou prejuizo** clinicamente significativo |\n| **G** | Nao melhor explicado por: agorafobia, TOC, TEPT, ansiedade de separacao, fobia social |\n\n> Nota: Em criancas, medo/ansiedade pode ser expresso por choro, ataques de raiva, imobilidade ou agarrar-se."
          }
        ],
        "tipos_codigos": [
          {
            "Tipo": "Animal",
            "Codigo CID-10": "F40.218",
            "Exemplos": "Aranhas, insetos, caes"
          },
          {
            "Tipo": "Ambiente natural",
            "Codigo CID-10": "F40.228",
            "Exemplos": "Alturas, tempestades, agua"
          },
          {
            "Tipo": "Sangue-injecao-ferimentos",
            "Codigo CID-10": "F40.23x",
            "Exemplos": "Agulhas, procedimentos medicos"
          },
          {
            "Tipo": "Situacional",
            "Codigo CID-10": "F40.248",
            "Exemplos": "Avioes, elevadores, locais fechados"
          },
          {
            "Tipo": "Outro",
            "Codigo CID-10": "F40.298",
            "Exemplos": "Asfixia, vomitos, sons altos"
          }
        ],
        "regra_diagnostica": "(A OBJETO_ESPECIFICO) + (B QUASE_INVARIAVEL_IMEDIATO) + (C EVITA_OU_INTENSO) + (D DESPROPORCIONAL) + (E >=6M) + (F PREJUIZO) + (G NAO_OUTRO_TX)",
        "caracteristica_distintiva_sangue_injecao_ferimentos": "Resposta vasovagal peculiar: **breve aceleracao cardiaca → desaceleracao → queda de PA → desmaio/quase desmaio**. Diferencia-se de outros tipos que tem excitacao simpatica.",
        "duracao_idade_prejuizo": {
          "duracao": ">= 6 meses",
          "idade_media_inicio": "7-11 anos (media ~10 anos); situacionais tem inicio mais tardio",
          "curso": "Persistente se chega a adulta; recaidas e remissoes na infancia/adolescencia"
        },
        "gravidade": {
          "tem_gravidade_formal": "**false**",
          "tipo": "nao_aplica",
          "regra_atribuicao": "Inferida pelo numero de objetos temidos (75% temem >1), grau de esquiva, prejuizo funcional"
        },
        "diferenciais_criticos": [
          {
            "condicao": "Agorafobia",
            "chave_diferenciacao": "Se APENAS 1 situacao agorafobica → fobia especifica; se 2+ → agorafobia"
          },
          {
            "condicao": "Fobia social",
            "chave_diferenciacao": "Medo de avaliacao negativa em situacoes sociais"
          },
          {
            "condicao": "TOC",
            "chave_diferenciacao": "Medo de contaminacao por sangue com obsessoes/compulsoes"
          },
          {
            "condicao": "TEPT",
            "chave_diferenciacao": "Fobia apos trauma → avaliar criterios TEPT completos"
          }
        ],
        "perguntas_chave_compactas": "1. \"Tem medo intenso de algum objeto ou situacao especifica?\"\n2. \"O medo comeca imediatamente quando ve/encontra [estimulo]?\"\n3. \"Evita [estimulo] ou suporta com muito sofrimento?\"\n4. \"O medo e maior do que o perigo real justificaria?\"\n5. \"Ha quanto tempo isso dura?\" (>= 6 meses)\n6. \"O medo interfere na sua vida?\"",
        "ui": {}
      },
      "super_enrichment_source": "dsm/output/json_super_adicionado/fobia_especifica.json",
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
