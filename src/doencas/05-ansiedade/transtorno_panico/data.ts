import { TranstornoDSMSchema, type TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import { parseGeneratedDiseaseData } from "@/infra/validation-helpers";

// Dados brutos normalizados da release DSM operacional
const rawData = {
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_panico",
    "nome_completo": "Transtorno de Pânico",
    "sigla": "TP",
    "capitulo_id": "05",
    "capitulo": "Transtornos de Ansiedade",
    "grupo": null,
    "versao_complementar_existe": false,
    "sinonimos_historicos": [],
    "faixa_etaria_alvo": "ambos",
    "codigo": {
      "cid10": "F41.0",
      "cid11": "6B01",
      "dsm5": "300.01"
    }
  },
  "id": "transtorno_panico",
  "item_id": "transtorno_panico",
  "name": "Transtorno de Pânico",
  "nome_completo": "Transtorno de Pânico",
  "chapter_id": "05",
  "chapter_name": "Transtornos de Ansiedade",
  "category": "FULL",
  "estrutura_diagnostica": "polythetic_com_ancora",
  "estrutura_geral": "criterios_sintomaticos",
  "ui_mode": "structured_full",
  "severity_type": "ordinal_simples",
  "has_formal_severity": true,
  "render_structured_interview": true,
  "diagnostic_rule": "",
  "clusters_sintomas": [
    {
      "id": "A",
      "nome": "Ataque de Pânico Recorrente e Inesperado (âncora) + Sequela",
      "descricao": "",
      "sintomas": [
        {
          "id": "A_ancora",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A1",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A2",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A3",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A4",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A5",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A6",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A7",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A8",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A9",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A10",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A11",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A12",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A13",
          "texto": "",
          "descricao": ""
        }
      ]
    }
  ],
  "criterios_condicionais": [
    {
      "id": "preocupacao_ou_mudanca",
      "letra": "B",
      "rotulo": "≥1 mês com preocupação/esquiva após ataques",
      "descricao_completa": "Ao menos um ataque foi seguido por ≥1 mês de: (1) preocupação persistente sobre novos ataques ou suas consequências; OU (2) mudança significativa no comportamento (esquivas) relacionada aos ataques.",
      "obrigatorio": true
    },
    {
      "id": "exclusao_substancia_medica",
      "letra": "C",
      "rotulo": "Não atribuível a substância ou condição médica",
      "descricao_completa": "Não atribuível aos efeitos fisiológicos de substância ou condição médica (hipertireoidismo, cardiopatias).",
      "obrigatorio": true
    },
    {
      "id": "exclusao_outros",
      "letra": "D",
      "rotulo": "Não melhor explicado por outro transtorno mental",
      "descricao_completa": "Os ataques não são mais bem explicados por TAS, fobia específica, TAS (separação), TEPT, TAG.",
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
    },
    {
      "id": "saude",
      "label": "Uso de Serviços de Saúde"
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Outros transtornos de ansiedade",
      "frequencia": "alta",
      "nota": "None"
    },
    {
      "condicao": "Transtorno Depressivo Maior",
      "frequencia": "alta",
      "nota": "None"
    },
    {
      "condicao": "Transtorno Bipolar",
      "frequencia": "moderada",
      "nota": "None"
    },
    {
      "condicao": "Transtorno por uso de álcool",
      "frequencia": "moderada",
      "nota": "None"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Outros transtornos de ansiedade",
      "ponto_distincao": "Pânico: ataques inesperados; em outros transtornos, a ansiedade é situacional e previsível.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Outras condições médicas",
      "ponto_distincao": "Exames laboratoriais para excluir causas orgânicas (tireoide, coração, sistema nervoso).",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno de depressão maior",
      "ponto_distincao": "Ataques de pânico ocorrem frequentemente no TDM; o diagnóstico de TP pode ser dado se satisfeitos todos os critérios.",
      "pertence_a_classe": false
    }
  ],
  "perguntas_chave": [],
  "key_questions": [],
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Adulto jovem; pico 20–24 anos; raro antes dos 14 e após os 45",
    "trajetoria": "Geralmente crônico com flutuações. Episódio mais grave raramente excede 1 ano isoladamente.",
    "prognostico": "Variável; prognóstico pior associado a esquiva fóbica marcada, depressão comórbida."
  },
  "prevalencia": {
    "populacao_geral": "2–3% (prevalência de 12 meses em adultos e adolescentes nos EUA e Europa)",
    "proporcao_sexo": "2:1 mulheres:homens",
    "variacoes_culturais": "Ataque de pânico pode apresentar-se como khyâl cap (cultura cambojana) ou ataque de nervios (latino). Prevalência menor em africanos americanos, asiáticos americanos, latinos.",
    "notas": "Prevalência de ataques de pânico (isolados) é ~11%/ano; critérios plenos do TP não atingidos na maioria."
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
      "id": "transtorno_panico",
      "nome_completo": "Transtorno de Pânico",
      "sigla": "TP",
      "capitulo_id": "05",
      "capitulo": "Transtornos de Ansiedade",
      "grupo": null,
      "versao_complementar_existe": false,
      "sinonimos_historicos": [
        "Síndrome do pânico"
      ],
      "faixa_etaria_alvo": "ambos",
      "codigo": {
        "cid10": "F41.0",
        "cid11": "6B01",
        "dsm5": "300.01"
      }
    },
    "id": "transtorno_panico",
    "item_id": "transtorno_panico",
    "name": "Transtorno de Pânico",
    "nome_completo": "Transtorno de Pânico",
    "chapter_id": "05",
    "chapter_name": "Transtornos de Ansiedade",
    "category": "FULL",
    "estrutura_diagnostica": "polythetic_com_ancora",
    "estrutura_geral": "polythetic_com_ancora",
    "ui_mode": "structured_full",
    "severity_type": "ordinal_simples",
    "has_formal_severity": true,
    "render_structured_interview": true,
    "diagnostic_rule": "",
    "clusters_sintomas": [
      {
        "id": "A",
        "nome": "Ataque de Pânico Recorrente e Inesperado (âncora) + Sequela",
        "descricao": "",
        "sintomas": [
          {
            "id": "A_ancora",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A1",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A2",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A3",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A4",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A5",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A6",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A7",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A8",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A9",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A10",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A11",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A12",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A13",
            "texto": "",
            "descricao": ""
          }
        ]
      }
    ],
    "criterios_condicionais": [
      {
        "id": "preocupacao_ou_mudanca",
        "letra": "B",
        "rotulo": "≥1 mês com preocupação/esquiva após ataques",
        "descricao_completa": "Ao menos um ataque foi seguido por ≥1 mês de: (1) preocupação persistente sobre novos ataques ou suas consequências; OU (2) mudança significativa no comportamento (esquivas) relacionada aos ataques.",
        "obrigatorio": true
      },
      {
        "id": "exclusao_substancia_medica",
        "letra": "C",
        "rotulo": "Não atribuível a substância ou condição médica",
        "descricao_completa": "Não atribuível aos efeitos fisiológicos de substância ou condição médica (hipertireoidismo, cardiopatias).",
        "obrigatorio": true
      },
      {
        "id": "exclusao_outros",
        "letra": "D",
        "rotulo": "Não melhor explicado por outro transtorno mental",
        "descricao_completa": "Os ataques não são mais bem explicados por TAS, fobia específica, TAS (separação), TEPT, TAG.",
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
      },
      {
        "id": "saude",
        "label": "Uso de Serviços de Saúde"
      }
    ],
    "comorbidades_frequentes": [
      {
        "condicao": "Outros transtornos de ansiedade",
        "frequencia": "alta",
        "nota": "None"
      },
      {
        "condicao": "Transtorno Depressivo Maior",
        "frequencia": "alta",
        "nota": "None"
      },
      {
        "condicao": "Transtorno Bipolar",
        "frequencia": "moderada",
        "nota": "None"
      },
      {
        "condicao": "Transtorno por uso de álcool",
        "frequencia": "moderada",
        "nota": "None"
      }
    ],
    "diagnostico_diferencial": [
      {
        "condicao": "Outros transtornos de ansiedade",
        "ponto_distincao": "Pânico: ataques inesperados; em outros transtornos, a ansiedade é situacional e previsível.",
        "pertence_a_classe": true
      },
      {
        "condicao": "Outras condições médicas",
        "ponto_distincao": "Exames laboratoriais para excluir causas orgânicas (tireoide, coração, sistema nervoso).",
        "pertence_a_classe": false
      },
      {
        "condicao": "Transtorno de depressão maior",
        "ponto_distincao": "Ataques de pânico ocorrem frequentemente no TDM; o diagnóstico de TP pode ser dado se satisfeitos todos os critérios.",
        "pertence_a_classe": false
      }
    ],
    "perguntas_chave": [],
    "key_questions": [],
    "curso_desenvolvimento": {
      "idade_inicio_tipica": "Adulto jovem; pico 20–24 anos; raro antes dos 14 e após os 45",
      "trajetoria": "Geralmente crônico com flutuações. Episódio mais grave raramente excede 1 ano isoladamente.",
      "prognostico": "Variável; prognóstico pior associado a esquiva fóbica marcada, depressão comórbida."
    },
    "prevalencia": {
      "populacao_geral": "2–3% (prevalência de 12 meses em adultos e adolescentes nos EUA e Europa)",
      "proporcao_sexo": "2:1 mulheres:homens",
      "variacoes_culturais": "Ataque de pânico pode apresentar-se como khyâl cap (cultura cambojana) ou ataque de nervios (latino). Prevalência menor em africanos americanos, asiáticos americanos, latinos.",
      "notas": "Prevalência de ataques de pânico (isolados) é ~11%/ano; critérios plenos do TP não atingidos na maioria."
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
      "estrutura_geral": "polythetic_com_ancora",
      "clusters_sintomas": [
        {
          "id": "A",
          "nome": "Ataque de Pânico Recorrente e Inesperado (âncora) + Sequela",
          "tipo": "polythetic_com_ancora",
          "limiar": {
            "adulto": 4,
            "pediatria": 4
          },
          "ancora_obrigatoria": {
            "descricao": "Surto abrupto de medo intenso ou desconforto intenso que atinge um pico em minutos e inclui ≥4 sintomas somáticos/cognitivos",
            "ids_obrigatorios": [
              "A_ancora"
            ],
            "n_minimo": 1
          },
          "sintomas": [
            {
              "id": "A_ancora",
              "rotulo": "Ataque de pânico recorrente e inesperado",
              "desc": "Ataques de pânico recorrentes e inesperados: surto abrupto de medo/desconforto intenso que atinge o pico em minutos.",
              "pergunta": "Você tem ataques súbitos de medo intenso ou desconforto que chegam ao máximo em poucos minutos?",
              "exemplos_clinicos": [
                "Despertar com ataque de pânico à noite",
                "Ataque sem gatilho identificável"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A1",
              "rotulo": "Palpitações / taquicardia",
              "desc": "Palpitações, coração acelerado ou taquicardia durante o ataque.",
              "pergunta": "Durante o ataque, sente o coração bater forte ou acelerado?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A2",
              "rotulo": "Sudorese",
              "desc": "Sudorese excessiva durante o ataque.",
              "pergunta": "Você transpira muito durante o ataque?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A3",
              "rotulo": "Tremores ou abalos",
              "desc": "Tremores ou abalos durante o ataque.",
              "pergunta": "Você treme durante o ataque?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A4",
              "rotulo": "Falta de ar / sensação de sufocamento",
              "desc": "Sensações de falta de ar ou sufocamento.",
              "pergunta": "Você sente que não consegue respirar ou que vai sufocar durante o ataque?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A5",
              "rotulo": "Sensações de asfixia",
              "desc": "Sensações de asfixia/garganta fechando.",
              "pergunta": "Sente a garganta fechando ou como se fosse engasgar?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A6",
              "rotulo": "Dor ou desconforto no tórax",
              "desc": "Dor ou desconforto torácico durante o ataque.",
              "pergunta": "Sente dor ou pressão no peito durante o ataque?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A7",
              "rotulo": "Náusea ou desconforto abdominal",
              "desc": "Náusea ou desconforto abdominal.",
              "pergunta": "Sente náusea ou mal-estar no estômago durante o ataque?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A8",
              "rotulo": "Tontura, instabilidade ou desmaio",
              "desc": "Sensação de tontura, instabilidade, atordoamento ou desmaio.",
              "pergunta": "Você sente tontura, vertigem ou que vai desmaiar durante o ataque?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A9",
              "rotulo": "Calafrios ou ondas de calor",
              "desc": "Calafrios ou ondas de calor.",
              "pergunta": "Sente calafrios ou ondas de calor intenso durante o ataque?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A10",
              "rotulo": "Parestesias (dormência/formigamento)",
              "desc": "Parestesias — sensações de dormência ou formigamento.",
              "pergunta": "Sente dormência ou formigamento (especialmente nas mãos, pés ou rosto) durante o ataque?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A11",
              "rotulo": "Desrealização ou despersonalização",
              "desc": "Desrealização (sentir que o mundo não é real) ou despersonalização (sentir-se separado de si mesmo).",
              "pergunta": "Durante o ataque, sente que o mundo ao redor não é real ou que está fora do seu corpo?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A12",
              "rotulo": "Medo de perder o controle ou 'enlouquecer'",
              "desc": "Medo de perder o controle ou 'enlouquecer'.",
              "pergunta": "Durante o ataque, você tem medo de perder o controle ou de ficar louco?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A13",
              "rotulo": "Medo de morrer",
              "desc": "Medo de morrer durante o ataque.",
              "pergunta": "Durante o ataque, você sente que vai morrer?",
              "exemplos_clinicos": [
                "Certeza de estar tendo infarto"
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
          "id": "preocupacao_ou_mudanca",
          "letra": "B",
          "rotulo": "≥1 mês com preocupação/esquiva após ataques",
          "tipo": "temporal_duracao_minima",
          "ui_widget": "toggle_simples",
          "obrigatorio": true,
          "icone_fa": "fa-calendar",
          "ddx_sugeridos": [],
          "descricao_completa": "Ao menos um ataque foi seguido por ≥1 mês de: (1) preocupação persistente sobre novos ataques ou suas consequências; OU (2) mudança significativa no comportamento (esquivas) relacionada aos ataques.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "exclusao_substancia_medica",
          "letra": "C",
          "rotulo": "Não atribuível a substância ou condição médica",
          "tipo": "exclusao_substancia_medica",
          "ui_widget": "toggle_com_justificativa_obrigatoria",
          "obrigatorio": true,
          "icone_fa": "fa-ban",
          "ddx_sugeridos": [
            "hipertireoidismo",
            "hiperparatireoidismo",
            "taquiarritmias",
            "feocromocitoma"
          ],
          "descricao_completa": "Não atribuível aos efeitos fisiológicos de substância ou condição médica (hipertireoidismo, cardiopatias).",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "exclusao_outros",
          "letra": "D",
          "rotulo": "Não melhor explicado por outro transtorno mental",
          "tipo": "exclusao_diagnostica",
          "ui_widget": "select_multiplos_ddx",
          "obrigatorio": true,
          "icone_fa": "fa-ban",
          "ddx_sugeridos": [
            "transtorno_ansiedade_social",
            "fobia_especifica",
            "tept",
            "tag",
            "tas"
          ],
          "descricao_completa": "Os ataques não são mais bem explicados por TAS, fobia específica, TAS (separação), TEPT, TAG.",
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
          "id": "social",
          "label": "Funcionamento Social",
          "icone_fa": "fa-users",
          "relevante_para": "transversal"
        },
        {
          "id": "saude",
          "label": "Uso de Serviços de Saúde",
          "icone_fa": "fa-hospital",
          "relevante_para": "transversal"
        }
      ],
      "diagnostico_diferencial": [
        {
          "condicao": "Outros transtornos de ansiedade",
          "ponto_distincao": "Pânico: ataques inesperados; em outros transtornos, a ansiedade é situacional e previsível.",
          "pertence_a_classe": true
        },
        {
          "condicao": "Outras condições médicas",
          "ponto_distincao": "Exames laboratoriais para excluir causas orgânicas (tireoide, coração, sistema nervoso).",
          "pertence_a_classe": false
        },
        {
          "condicao": "Transtorno de depressão maior",
          "ponto_distincao": "Ataques de pânico ocorrem frequentemente no TDM; o diagnóstico de TP pode ser dado se satisfeitos todos os critérios.",
          "pertence_a_classe": false
        }
      ],
      "comorbidades_frequentes": [
        {
          "condicao": "Outros transtornos de ansiedade",
          "frequencia": "alta",
          "nota": null
        },
        {
          "condicao": "Transtorno Depressivo Maior",
          "frequencia": "alta",
          "nota": null
        },
        {
          "condicao": "Transtorno Bipolar",
          "frequencia": "moderada",
          "nota": null
        },
        {
          "condicao": "Transtorno por uso de álcool",
          "frequencia": "moderada",
          "nota": null
        }
      ],
      "instrumentos_complementares": [],
      "prevalencia": {
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
      },
      "curso_desenvolvimento": {
        "idade_inicio_tipica": "Adulto jovem; pico 20–24 anos; raro antes dos 14 e após os 45",
        "trajetoria": "Geralmente crônico com flutuações. Episódio mais grave raramente excede 1 ano isoladamente.",
        "prognostico": "Variável; prognóstico pior associado a esquiva fóbica marcada, depressão comórbida.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "template_prontuario": {
        "cabecalho": "## Avaliação do Transtorno de Pânico - {nome_paciente}",
        "rodape_metodologico": "Dados obtidos por anamnese clínica estruturada com base nos critérios DSM-5 (300.01 / F41.0)."
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
      "id": "transtorno_panico",
      "category": "FULL",
      "ui_mode": "structured_full",
      "render_structured_interview": true,
      "rendering": {
        "estrutura_diagnostica": "episodico_com_sintomas",
        "criteria": [],
        "diagnostic_rule": "```\n(A: >=2 ataques inesperados COM >=4/13 sintomas atingindo pico em minutos) + (B1 OU B2 por >=1 mes) + (C NAO_SUBSTANCIA_MEDICA) + (D NAO_OUTRO_TX)\n```\n\n**Conceito-chave: \"Inesperado\"**\nAtaque sem indicio ou desencadeante obvio no momento — parece \"vir do nada\" (relaxando, emergindo do sono). A presenca de ataques esperados NAO exclui o diagnostico de transtorno de transtorno_panico (aprox. metade dos individuos tem ambos).",
        "clusters": [],
        "duration": null,
        "age_onset": "| 20-24 anos |",
        "functional_impairment": null,
        "exclusions": [
          "→ exames laboratoriais",
          "3. **Outros transtornos de ansiedade** → se ataques ocorrem SOMENTE em contexto do outro transtorno, nao diagnosticar transtorno_panico"
        ],
        "subtypes_presentations": [],
        "specifiers": [
          "**Com agorafobia** (quando criterios para agorafobia satisfeitos)",
          "Ataque de transtorno_panico como especificador pode ser anotado em outros transtornos"
        ],
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
          "Ja sentiu medo intenso ou desconforto que apareceu de repente e atingiu o maximo em poucos minutos?",
          "Quantas vezes isso aconteceu?",
          "O primeiro ataque pareceu vir 'do nada' ou havia um motivo obvio?",
          "Durante esses surtos, voce sentiu: palpitacoes? falta de ar? tontura? suor? tremores? dor no peito? nausea? calafrios/ondas de calor? formigamento? sensacao de irrealidade? medo de enlouquecer? medo de morrer?",
          "Depois dos ataques, ficou preocupado que pudessem acontecer novamente?",
          "Mudou algum comportamento por causa dos ataques? (evitar exercicios, lugares, situacoes)",
          "Usa cafeina, anfetaminas, cocaina ou outras substancias?",
          "Tem problemas de tireoide, coracao ou respiracao?",
          "Os ataques acontecem SOMENTE em situacoes sociais?",
          "Os ataques acontecem SOMENTE em situacoes ou com objetos especificos?",
          "Evita transporte publico, espacos abertos, espacos fechados, multidoes ou sair de casa sozinho por medo de ter um ataque?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### Transtorno de Panico",
          "patches_applied": []
        },
        "category": "FULL",
        "ui_mode": "structured_full",
        "render_structured_interview": true
      },
      "sigla": "TP",
      "codigo_dsm5": "300.01",
      "codigo_cid10": "F41.0",
      "faixa_etaria_alvo": "ambos",
      "versao_complementar_existe": false,
      "inventario_clinico": {
        "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 300.01 (F41.0)",
        "estrutura_efetiva": "- **Estrutura efetiva:** A (ataques recorrentes inesperados) + B (preocupacao/comportamento >=1 mes) + C exclusao substancia + D exclusao outro transtorno",
        "notas_clinicas": "- **Notas:**"
      },
      "hierarquia_exclusao": {
        "exclui": [],
        "exclui_de": [],
        "notas_hierarquia": "Extraído do índice de hierarquias do capítulo"
      },
      "codigo_cid11": "6B01",
      "super_enrichment": {
        "id": "transtorno_panico",
        "nome_original": "Transtorno de Panico",
        "comorbidades_frequentes": [
          {
            "condicao": "Outros transtornos de ansiedade",
            "frequencia": "alta",
            "nota": null
          },
          {
            "condicao": "Transtorno Depressivo Maior",
            "frequencia": "alta",
            "nota": null
          },
          {
            "condicao": "Transtorno Bipolar",
            "frequencia": "moderada",
            "nota": null
          },
          {
            "condicao": "Transtorno por uso de álcool",
            "frequencia": "moderada",
            "nota": null
          }
        ],
        "diagnostico_diferencial": [
          {
            "condicao": "Outros transtornos de ansiedade",
            "ponto_distincao": "Pânico: ataques inesperados; em outros transtornos, a ansiedade é situacional e previsível.",
            "pertence_a_classe": true
          },
          {
            "condicao": "Outras condições médicas",
            "ponto_distincao": "Exames laboratoriais para excluir causas orgânicas (tireoide, coração, sistema nervoso).",
            "pertence_a_classe": false
          },
          {
            "condicao": "Transtorno de depressão maior",
            "ponto_distincao": "Ataques de pânico ocorrem frequentemente no TDM; o diagnóstico de TP pode ser dado se satisfeitos todos os critérios.",
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
          "populacao_geral": "2–3% (prevalência de 12 meses em adultos e adolescentes nos EUA e Europa)",
          "proporcao_sexo": "2:1 mulheres:homens",
          "variacoes_culturais": "Ataque de pânico pode apresentar-se como khyâl cap (cultura cambojana) ou ataque de nervios (latino). Prevalência menor em africanos americanos, asiáticos americanos, latinos."
        },
        "curso_desenvolvimento": {
          "idade_inicio_tipica": "Adulto jovem; pico 20–24 anos; raro antes dos 14 e após os 45",
          "trajetoria": "Geralmente crônico com flutuações. Episódio mais grave raramente excede 1 ano isoladamente.",
          "prognostico": "Variável; prognóstico pior associado a esquiva fóbica marcada, depressão comórbida."
        },
        "instrumentos_complementares": [],
        "identificacao": {
          "nome": "Transtorno de Panico",
          "codigo_dsm_5": "300.01 (F41.0)",
          "categoria_operacional": "FULL",
          "estrutura_diagnostica": "episodico_com_sintomas",
          "prevalencia": "2-3% (12 meses, adultos EUA)",
          "razao_f_m": "2:1"
        },
        "criterios_obrigatorios": [
          {
            "id": "A — Ataques de panico (obrigatorio)",
            "texto": "Ataques de panico **recorrentes e inesperados**. Um ataque de panico = surto abrupto de medo intenso ou desconforto intenso que atinge um pico em **minutos** e durante o qual ocorrem **4 (ou mais)** dos seguintes 13 sintomas:\n\n| # | Sintoma | Categoria |\n|---|---------|-----------|\n| 1 | Palpitacoes, coracao acelerado, taquicardia | Cardiovascular |\n| 2 | Sudorese | Autonomica |\n| 3 | Tremores ou abalos | Motor |\n| 4 | Sensacoes de falta de ar ou sufocamento | Respiratoria |\n| 5 | Sensacoes de asfixia | Respiratoria |\n| 6 | Dor ou desconforto toracico | Cardiovascular |\n| 7 | Nausea ou desconforto abdominal | Gastrointestinal |\n| 8 | Sensacao de tontura, instabilidade, vertigem ou desmaio | Neurologica |\n| 9 | Calafrios ou ondas de calor | Termoregulacao |\n| 10 | Parestesias (anestesia ou formigamento) | Neurologica |\n| 11 | Desrealizacao (sensacoes de irrealidade) ou despersonalizacao (distanciamento de si mesmo) | Dissociativo |\n| 12 | Medo de perder o controle ou \"enlouquecer\" | Cognitivo |\n| 13 | Medo de morrer | Cognitivo |\n\n> Nota: Sintomas especificos da cultura (tinido, dor na nuca, cefaleia, gritos/choro) NAO contam como um dos 4 sintomas exigidos."
          },
          {
            "id": "B — Consequencias (obrigatorio: 1 ou ambas por >=1 mes)",
            "texto": "- B1: **Apreensao/preocupacao persistente** acerca de ataques de panico adicionais ou suas consequencias (perder controle, ataque cardiaco, \"enlouquecer\")\n- B2: **Mudanca desadaptativa significativa no comportamento** relacionada aos ataques (ex: esquiva de exercicios, situacoes desconhecidas)"
          },
          {
            "id": "C — Exclusao substancia/condicao medica",
            "texto": "Nao e consequencia dos efeitos psicologicos de substancia ou condicao medica (hipertireoidismo, doencas cardiopulmonares)."
          },
          {
            "id": "D — Exclusao outro transtorno mental",
            "texto": "Ataques de panico NAO ocorrem apenas em resposta a:\n- Situacoes sociais temidas (fobia social)\n- Objetos/situacoes fobicas circunscritas (fobia especifica)\n- Obsessoes (TOC)\n- Evocacao de eventos traumaticos (TEPT)\n- Separacao de figuras de apego (ansiedade de separacao)"
          }
        ],
        "regra_diagnostica": "(A: >=2 ataques inesperados COM >=4/13 sintomas atingindo pico em minutos) + (B1 OU B2 por >=1 mes) + (C NAO_SUBSTANCIA_MEDICA) + (D NAO_OUTRO_TX)\n\n**Conceito-chave: \"Inesperado\"**\nAtaque sem indicio ou desencadeante obvio no momento — parece \"vir do nada\" (relaxando, emergindo do sono). A presenca de ataques esperados NAO exclui o diagnostico de transtorno de panico (aprox. metade dos individuos tem ambos).",
        "subtipos": [
          {
            "Apresentacao": "Panico sem agorafobia",
            "Descricao": "Ataques inesperados sem esquiva de situacoes agorafobicas"
          },
          {
            "Apresentacao": "Panico com agorafobia",
            "Descricao": "Ataques + medo/esquiva de 2+ situacoes agorafobicas (diagnosticar AMBOS)"
          },
          {
            "Apresentacao": "Ataques com sintomas limitados",
            "Descricao": "<4 sintomas — NAO satisfaz criterio A; usar especificador ou outro especificado"
          }
        ],
        "duracao_idade_prejuizo": {
          "duracao_criterio_b": ">= 1 mes de preocupacao/comportamento alterado",
          "idade_media_inicio": "20-24 anos",
          "curso_tipico": "Cronico com oscilacoes; surtos episodicos ou sintomatologia grave continua",
          "remissao": "Minorias tem remissao completa sem recaida; 30% remissao em 1 ano (comunidade)"
        },
        "exclusoes_obrigatorias": "1. **Hipertireoidismo, hiperparatireoidismo, feocromocitoma, arritmias, taquicardia supraventricular, asma, DPOC** → exames laboratoriais\n2. **Intoxicacao por estimulantes (cocaina, anfetaminas, cafeina) ou abstinencia de depressores (alcool)**\n3. **Outros transtornos de ansiedade** → se ataques ocorrem SOMENTE em contexto do outro transtorno, nao diagnosticar panico",
        "gravidade": {
          "tem_gravidade_formal": "**false** — O DSM-5 nao define niveis formais de gravidade",
          "tipo": "nao_aplica",
          "niveis": "—",
          "regra_atribuicao": "Inferida pela frequencia dos ataques, numero/tipo de sintomas, grau de prejuizo, presenca de agorafobia e comorbidades",
          "dominios": "Frequencia de ataques, incapacidade social/profissional, uso de servicos de saude"
        },
        "especificadores": [
          "Com agorafobia"
        ],
        "perguntas_chave_entrevista": [
          {
            "bloco": "Bloco A — Ataques de panico (screening)",
            "numero": 1,
            "texto": "Ja sentiu medo intenso ou desconforto que apareceu de repente e atingiu o maximo em poucos minutos?"
          },
          {
            "bloco": "Bloco A — Ataques de panico (screening)",
            "numero": 2,
            "texto": "Quantas vezes isso aconteceu?"
          },
          {
            "bloco": "Bloco A — Ataques de panico (screening)",
            "numero": 3,
            "texto": "O primeiro ataque pareceu vir 'do nada' ou havia um motivo obvio?"
          },
          {
            "bloco": "Bloco A.1 — Sintomas durante o ataque (4+ de 13)",
            "numero": 4,
            "texto": "Durante esses surtos, voce sentiu: palpitacoes? falta de ar? tontura? suor? tremores? dor no peito? nausea? calafrios/ondas de calor? formigamento? sensacao de irrealidade? medo de enlouquecer? medo de morrer?"
          },
          {
            "bloco": "Bloco B — Consequencias (1+ por >=1 mes)",
            "numero": 5,
            "texto": "Depois dos ataques, ficou preocupado que pudessem acontecer novamente?"
          },
          {
            "bloco": "Bloco B — Consequencias (1+ por >=1 mes)",
            "numero": 6,
            "texto": "Mudou algum comportamento por causa dos ataques? (evitar exercicios, lugares, situacoes)"
          },
          {
            "bloco": "Bloco C/D — Exclusoes",
            "numero": 7,
            "texto": "Usa cafeina, anfetaminas, cocaina ou outras substancias?"
          },
          {
            "bloco": "Bloco C/D — Exclusoes",
            "numero": 8,
            "texto": "Tem problemas de tireoide, coracao ou respiracao?"
          },
          {
            "bloco": "Bloco C/D — Exclusoes",
            "numero": 9,
            "texto": "Os ataques acontecem SOMENTE em situacoes sociais?"
          },
          {
            "bloco": "Bloco C/D — Exclusoes",
            "numero": 10,
            "texto": "Os ataques acontecem SOMENTE em situacoes ou com objetos especificos?"
          },
          {
            "bloco": "Bloco — Agorafobia (screening conjunto)",
            "numero": 11,
            "texto": "Evita transporte publico, espacos abertos, espacos fechados, multidoes ou sair de casa sozinho por medo de ter um ataque?"
          }
        ],
        "diferenciais_criticos": [
          {
            "condicao": "Ataque de panico isolado",
            "chave_diferenciacao": "1 unico ataque ou ataques esperados sem preocupacao persistente → nao e transtorno"
          },
          {
            "condicao": "Agorafobia sem historico de panico",
            "chave_diferenciacao": "Criterios para agorafobia podem ser satisfeitos sem panico previo"
          },
          {
            "condicao": "Transtorno de ansiedade induzido por substancia",
            "chave_diferenciacao": "Ataques ocorrem durante intoxicacao/abstinencia"
          },
          {
            "condicao": "Cardiopatia, arritmia, hipertireoidismo",
            "chave_diferenciacao": "Exames obrigatorios (TSH, ECG, Holter)"
          }
        ],
        "ui": {}
      },
      "super_enrichment_source": "dsm/output/json_super_adicionado/transtorno_panico.json",
      "enrichment_status": {
        "has_poor": true,
        "has_master": true,
        "has_inventory": true,
        "has_hierarchy": true,
        "has_cid11": true,
        "has_super_enrichment": true,
        "match_notes": {
          "poor": "id",
          "master": "id",
          "inventario": "id",
          "hierarquia": "id",
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
