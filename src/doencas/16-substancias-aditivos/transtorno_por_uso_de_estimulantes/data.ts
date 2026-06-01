import { TranstornoDSMSchema, type TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import { parseGeneratedDiseaseData } from "@/infra/validation-helpers";

// Dados brutos normalizados da release DSM operacional
const rawData = {
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_por_uso_de_estimulantes",
    "nome_completo": "Transtorno por Uso de Estimulantes",
    "sigla": "",
    "capitulo_id": "16",
    "capitulo": "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
    "grupo": null,
    "versao_complementar_existe": false,
    "sinonimos_historicos": [],
    "faixa_etaria_alvo": "ambos",
    "codigo": {
      "cid10": "F15.20",
      "cid11": "6C42",
      "dsm5": "304.40"
    }
  },
  "id": "transtorno_por_uso_de_estimulantes",
  "item_id": "transtorno_por_uso_de_estimulantes",
  "name": "Transtorno por Uso de Estimulantes",
  "nome_completo": "Transtorno por Uso de Estimulantes",
  "chapter_id": "16",
  "chapter_name": "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
  "category": "FULL",
  "estrutura_diagnostica": "polythetic_monocluster",
  "estrutura_geral": "criterios_sintomaticos",
  "ui_mode": "structured_full",
  "severity_type": "ordinal_simples",
  "has_formal_severity": true,
  "render_structured_interview": true,
  "diagnostic_rule": "",
  "clusters_sintomas": [
    {
      "id": "A",
      "nome": "Critérios de Uso Problemático de estimulante",
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
        }
      ]
    }
  ],
  "criterios_condicionais": [
    {
      "id": "periodo_12meses",
      "letra": "A",
      "rotulo": "Padrão problemático em 12 meses",
      "descricao_completa": "Um padrão de uso de substância tipo anfetamina, cocaína ou outro estimulante, levando a comprometimento ou sofrimento clinicamente significativo, manifestado por pelo menos dois dos critérios, ocorrendo durante um período de 12 meses.",
      "obrigatorio": true
    },
    {
      "id": "exclusao_substancia_medica",
      "letra": "D",
      "rotulo": "Não atribuível a outra condição médica ou substância",
      "descricao_completa": "Os sinais ou sintomas não são atribuíveis a outra condição médica nem são mais bem explicados por outro transtorno mental, incluindo intoxicação por ou abstinência de outra substância.",
      "obrigatorio": true
    }
  ],
  "gravidade": {
    "tipo": "ordinal_simples",
    "presente": true,
    "has_formal_severity": true,
    "regra_atribuicao": "Baseada na quantidade de critérios preenchidos no cluster A.",
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
      "label": "Saúde Cardiopulmonar"
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno por uso de álcool",
      "frequencia": "alta",
      "nota": "None"
    },
    {
      "condicao": "Transtorno por uso de Cannabis",
      "frequencia": "moderada",
      "nota": "None"
    },
    {
      "condicao": "Transtorno de déficit de atenção/hiperatividade",
      "frequencia": "moderada",
      "nota": "None"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtornos mentais primários",
      "ponto_distincao": "Efeitos de estimulantes devem ser distinguidos de esquizofrenia, transtornos bipolares/depressivos, TAG e TP.",
      "pertence_a_classe": false
    }
  ],
  "perguntas_chave": [],
  "key_questions": [],
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "12-25 anos",
    "trajetoria": "Progressão rápida com uso fumado/intravenoso; gradual com uso intranasal/oral.",
    "prognostico": "Reservado para uso crônico; depressão/ideação suicida durante abstinência."
  },
  "prevalencia": {
    "populacao_geral": "Anfetamina: 0,2% (12-17a e adultos); Cocaína: 0,2% (12-17a), 0,3% adultos.",
    "proporcao_sexo": "Cocaína: mais em homens (0,4% vs 0,1% adultos).",
    "variacoes_culturais": "None",
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
      "id": "remissao_inicial",
      "nome": "Em remissão inicial",
      "descricao": ""
    },
    {
      "id": "remissao_sustentada",
      "nome": "Em remissão sustentada",
      "descricao": ""
    },
    {
      "id": "ambiente_protegido",
      "nome": "Em ambiente protegido",
      "descricao": ""
    }
  ],
  "template_prontuario": {
    "titulo": "",
    "texto": "",
    "campos": []
  },
  "metadados_globais": {
    "fonte_capitulo_md": "16_transtornos_relacionados_substancias_transtornos_aditivos.md",
    "fonte_inventario_md": null,
    "data_extracao": "2026-05-31",
    "modelo_agente": "claude-opus-4",
    "lacunas_globais": [
      "variacoes_culturais"
    ],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "instrumentos_complementares": [],
  "raw_document": {
    "$schema_version": "1.0.0",
    "meta": {
      "id": "transtorno_por_uso_de_estimulantes",
      "nome_completo": "Transtorno por Uso de Estimulantes",
      "sigla": "",
      "capitulo_id": "16",
      "capitulo": "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
      "grupo": "Estimulantes",
      "versao_complementar_existe": false,
      "sinonimos_historicos": [
        "Dependência de cocaína",
        "Dependência de anfetaminas",
        "Metanfetamina"
      ],
      "faixa_etaria_alvo": "ambos",
      "codigo": {
        "cid10": "F15.20",
        "cid11": "6C42",
        "dsm5": "304.40"
      }
    },
    "id": "transtorno_por_uso_de_estimulantes",
    "item_id": "transtorno_por_uso_de_estimulantes",
    "name": "Transtorno por Uso de Estimulantes",
    "nome_completo": "Transtorno por Uso de Estimulantes",
    "chapter_id": "16",
    "chapter_name": "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
    "category": "FULL",
    "estrutura_diagnostica": "polythetic_monocluster",
    "estrutura_geral": "polythetic_monocluster",
    "ui_mode": "structured_full",
    "severity_type": "ordinal_simples",
    "has_formal_severity": true,
    "render_structured_interview": true,
    "diagnostic_rule": "",
    "clusters_sintomas": [
      {
        "id": "A",
        "nome": "Critérios de Uso Problemático de estimulante",
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
          }
        ]
      }
    ],
    "criterios_condicionais": [
      {
        "id": "periodo_12meses",
        "letra": "A",
        "rotulo": "Padrão problemático em 12 meses",
        "descricao_completa": "Um padrão de uso de substância tipo anfetamina, cocaína ou outro estimulante, levando a comprometimento ou sofrimento clinicamente significativo, manifestado por pelo menos dois dos critérios, ocorrendo durante um período de 12 meses.",
        "obrigatorio": true
      },
      {
        "id": "exclusao_substancia_medica",
        "letra": "D",
        "rotulo": "Não atribuível a outra condição médica ou substância",
        "descricao_completa": "Os sinais ou sintomas não são atribuíveis a outra condição médica nem são mais bem explicados por outro transtorno mental, incluindo intoxicação por ou abstinência de outra substância.",
        "obrigatorio": true
      }
    ],
    "gravidade": {
      "tipo": "ordinal_simples",
      "presente": true,
      "has_formal_severity": true,
      "regra_atribuicao": "Baseada na quantidade de critérios preenchidos no cluster A.",
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
        "label": "Saúde Cardiopulmonar"
      }
    ],
    "comorbidades_frequentes": [
      {
        "condicao": "Transtorno por uso de álcool",
        "frequencia": "alta",
        "nota": "None"
      },
      {
        "condicao": "Transtorno por uso de Cannabis",
        "frequencia": "moderada",
        "nota": "None"
      },
      {
        "condicao": "Transtorno de déficit de atenção/hiperatividade",
        "frequencia": "moderada",
        "nota": "None"
      }
    ],
    "diagnostico_diferencial": [
      {
        "condicao": "Transtornos mentais primários",
        "ponto_distincao": "Efeitos de estimulantes devem ser distinguidos de esquizofrenia, transtornos bipolares/depressivos, TAG e TP.",
        "pertence_a_classe": false
      }
    ],
    "perguntas_chave": [],
    "key_questions": [],
    "curso_desenvolvimento": {
      "idade_inicio_tipica": "12-25 anos",
      "trajetoria": "Progressão rápida com uso fumado/intravenoso; gradual com uso intranasal/oral.",
      "prognostico": "Reservado para uso crônico; depressão/ideação suicida durante abstinência."
    },
    "prevalencia": {
      "populacao_geral": "Anfetamina: 0,2% (12-17a e adultos); Cocaína: 0,2% (12-17a), 0,3% adultos.",
      "proporcao_sexo": "Cocaína: mais em homens (0,4% vs 0,1% adultos).",
      "variacoes_culturais": "None",
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
        "id": "remissao_inicial",
        "nome": "Em remissão inicial",
        "descricao": ""
      },
      {
        "id": "remissao_sustentada",
        "nome": "Em remissão sustentada",
        "descricao": ""
      },
      {
        "id": "ambiente_protegido",
        "nome": "Em ambiente protegido",
        "descricao": ""
      }
    ],
    "template_prontuario": {
      "titulo": "",
      "texto": "",
      "campos": []
    },
    "metadados_globais": {
      "fonte_capitulo_md": "16_transtornos_relacionados_substancias_transtornos_aditivos.md",
      "fonte_inventario_md": null,
      "data_extracao": "2026-05-31",
      "modelo_agente": "claude-opus-4",
      "lacunas_globais": [
        "variacoes_culturais"
      ],
      "inconsistencias_detectadas": [],
      "notas_agente_globais": null,
      "revisao_humana_necessaria": false
    },
    "instrumentos_complementares": [],
    "raw_document": {
      "$schema_version": "1.0.0",
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
      "estrutura_geral": "polythetic_monocluster",
      "clusters_sintomas": [
        {
          "id": "A",
          "nome": "Critérios de Uso Problemático de estimulante",
          "tipo": "polythetic_com_limiar",
          "limiar": {
            "adulto": 2,
            "pediatria": 2
          },
          "ancora_obrigatoria": null,
          "sintomas": [
            {
              "id": "A1",
              "rotulo": "Quantidades/periodo maiores que pretendido",
              "desc": "estimulante consumido em maiores quantidades ou por período mais longo do que pretendido.",
              "pergunta": "Você já usou estimulante em quantidades maiores ou por mais tempo do que pretendia?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A2",
              "rotulo": "Desejo persistente ou esforços malsucedidos de reduzir",
              "desc": "Desejo persistente ou esforços malsucedidos para reduzir ou controlar o uso de estimulante.",
              "pergunta": "Você já tentou reduzir ou parar de usar estimulante sem sucesso?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A3",
              "rotulo": "Muito tempo obtendo, usando ou recuperando-se",
              "desc": "Muito tempo gasto em atividades necessárias para obtenção, uso ou recuperação dos efeitos de estimulante.",
              "pergunta": "Você passa muito tempo obtendo, usando ou se recuperando dos efeitos de estimulante?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A4",
              "rotulo": "Fissura ou forte desejo de usar",
              "desc": "Fissura ou forte desejo ou necessidade de usar estimulante.",
              "pergunta": "Você sente forte desejo ou necessidade de usar estimulante?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A5",
              "rotulo": "Fracasso em papéis por uso recorrente",
              "desc": "Uso recorrente resultando em fracasso em cumprir obrigações no trabalho, escola ou casa.",
              "pergunta": "O uso de estimulante já causou problemas no trabalho, na escola ou em casa?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A6",
              "rotulo": "Uso continuado apesar de problemas sociais/interpessoais",
              "desc": "Uso continuado apesar de problemas sociais ou interpessoais persistentes causados ou exacerbados pelos efeitos.",
              "pergunta": "Você continua usando estimulante mesmo tendo problemas com outras pessoas por causa disso?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A7",
              "rotulo": "Abandono de atividades importantes",
              "desc": "Atividades sociais, profissionais ou recreacionais importantes abandonadas ou reduzidas em virtude do uso.",
              "pergunta": "Você deixou de fazer atividades importantes por causa do uso de estimulante?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A8",
              "rotulo": "Uso recorrente em situações perigosas",
              "desc": "Uso recorrente em situações nas quais isso representa perigo para a integridade física.",
              "pergunta": "Você já usou estimulante em situações que poderiam ser perigosas?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A9",
              "rotulo": "Uso mantido apesar de problemas físicos/psicológicos",
              "desc": "Uso mantido apesar da consciência de ter um problema físico ou psicológico persistente provavelmente causado ou exacerbado pela substância.",
              "pergunta": "Você continua usando estimulante mesmo sabendo que isso agrava problemas de saúde?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A10",
              "rotulo": "Tolerância",
              "desc": "Tolerância: necessidade de quantidades progressivamente maiores para obter o efeito desejado, ou efeito acentuadamente menor com a mesma quantidade.",
              "pergunta": "Você precisa de quantidades maiores de estimulante para sentir o mesmo efeito?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A11",
              "rotulo": "Abstinência",
              "desc": "Abstinência: síndrome característica ao cessar/reduzir, ou uso para aliviar/evitar sintomas de abstinência.",
              "pergunta": "Você sente sintomas desagradáveis quando para de usar estimulante, ou o usa para evitar esses sintomas?",
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
          "id": "periodo_12meses",
          "letra": "A",
          "rotulo": "Padrão problemático em 12 meses",
          "tipo": "temporal_duracao_minima",
          "ui_widget": "campo_duracao_meses",
          "obrigatorio": true,
          "icone_fa": "fa-calendar",
          "ddx_sugeridos": [],
          "descricao_completa": "Um padrão de uso de substância tipo anfetamina, cocaína ou outro estimulante, levando a comprometimento ou sofrimento clinicamente significativo, manifestado por pelo menos dois dos critérios, ocorrendo durante um período de 12 meses.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "exclusao_substancia_medica",
          "letra": "D",
          "rotulo": "Não atribuível a outra condição médica ou substância",
          "tipo": "exclusao_substancia_medica",
          "ui_widget": "toggle_com_justificativa_obrigatoria",
          "obrigatorio": true,
          "icone_fa": "fa-ban",
          "ddx_sugeridos": [],
          "descricao_completa": "Os sinais ou sintomas não são atribuíveis a outra condição médica nem são mais bem explicados por outro transtorno mental, incluindo intoxicação por ou abstinência de outra substância.",
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
          "id": "remissao_inicial",
          "nome": "Em remissão inicial",
          "tipo": "booleano",
          "ortogonal": false,
          "opcoes": [],
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": "3-12 meses sem critérios (exceto fissura) para estimulante.",
            "fonte_passada_1": true
          }
        },
        {
          "id": "remissao_sustentada",
          "nome": "Em remissão sustentada",
          "tipo": "booleano",
          "ortogonal": false,
          "opcoes": [],
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": "≥12 meses sem critérios (exceto fissura) para estimulante.",
            "fonte_passada_1": true
          }
        },
        {
          "id": "ambiente_protegido",
          "nome": "Em ambiente protegido",
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
          "label": "Saúde Cardiopulmonar",
          "icone_fa": "fa-heartbeat",
          "relevante_para": "transversal"
        }
      ],
      "diagnostico_diferencial": [
        {
          "condicao": "Transtornos mentais primários",
          "ponto_distincao": "Efeitos de estimulantes devem ser distinguidos de esquizofrenia, transtornos bipolares/depressivos, TAG e TP.",
          "pertence_a_classe": false
        }
      ],
      "comorbidades_frequentes": [
        {
          "condicao": "Transtorno por uso de álcool",
          "frequencia": "alta",
          "nota": null
        },
        {
          "condicao": "Transtorno por uso de Cannabis",
          "frequencia": "moderada",
          "nota": null
        },
        {
          "condicao": "Transtorno de déficit de atenção/hiperatividade",
          "frequencia": "moderada",
          "nota": null
        }
      ],
      "instrumentos_complementares": [],
      "prevalencia": {
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
      },
      "curso_desenvolvimento": {
        "idade_inicio_tipica": "12-25 anos",
        "trajetoria": "Progressão rápida com uso fumado/intravenoso; gradual com uso intranasal/oral.",
        "prognostico": "Reservado para uso crônico; depressão/ideação suicida durante abstinência.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "template_prontuario": {
        "cabecalho": "## Avaliação do Transtorno por Uso de Estimulantes - {nome_paciente}",
        "rodape_metodologico": "DSM-5 (304.40 / F15.20)."
      },
      "metadados_globais": {
        "fonte_capitulo_md": "16_transtornos_relacionados_substancias_transtornos_aditivos.md",
        "fonte_inventario_md": null,
        "data_extracao": "2026-05-31",
        "modelo_agente": "claude-opus-4",
        "lacunas_globais": [
          "variacoes_culturais"
        ],
        "inconsistencias_detectadas": [],
        "notas_agente_globais": null,
        "revisao_humana_necessaria": false
      },
      "id": "transtorno_por_uso_de_estimulantes",
      "category": "FULL",
      "ui_mode": "structured_full",
      "render_structured_interview": true,
      "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [
          "Dose/tempo excessivo",
          "Tentativas de reducao",
          "Tempo gasto",
          "Fissura",
          "Fracasso em obrigacoes",
          "Problemas sociais",
          "Abandono de atividades",
          "Uso perigoso",
          "Uso apesar de problemas de saude",
          "Tolerancia",
          "Abstinencia (fadiga excessiva, depressao, fome aumentada, pesadelos)"
        ],
        "diagnostic_rule": "pelo menos 2 de 11 criterios em 12 meses",
        "clusters": [
          "Baixo Controle",
          "Prejuizo Social",
          "Uso Arriscado",
          "Farmacologicos"
        ],
        "duration": "12 meses",
        "age_onset": null,
        "functional_impairment": "comprometimento clinicamente significativo",
        "exclusions": [
          "Uso de estimulantes sob supervisao medica adequada (ex: TDAH, narcolepsia) - tolerancia e abstinencia desconsideradas"
        ],
        "subtypes_presentations": [
          "Substancia tipo anfetamina (incl. metanfetamina)",
          "Cocaina",
          "Outro estimulante"
        ],
        "specifiers": [
          "em remissao inicial",
          "em remissao sustentada",
          "em ambiente protegido"
        ],
        "operational_profiles": [],
        "severity": {
          "has_formal_severity": true,
          "type": "contagem_sintomas_e_prejuizo",
          "levels": [
            "leve (2-3)",
            "moderado (4-5)",
            "grave (6+)"
          ],
          "assignment_rule": "numero de criterios preenchidos em 12 meses",
          "domains": []
        },
        "critical_differentials": [],
        "key_questions": [
          "Usou mais cocaina/anfetamina do que pretendia? Ficou usando por dias sem parar (binges)?",
          "Ja tentou parar ou controlar? Conseguiu?",
          "Quanto tempo investe em conseguir ou usar?",
          "Sentiu necessidade intensa de usar?",
          "O uso atrapalhou trabalho, estudo ou responsabilidades?",
          "Brigou ou perdeu amizades por causa do uso?",
          "Deixou de fazer coisas importantes para usar?",
          "Usou e dirigiu? Usou de formas perigosas (injeccao, desconhecidos)?",
          "Continua usando apesar de dor no peito, perda de peso, problemas nasais?",
          "Precisa de mais para sentir o mesmo efeito?",
          "Quando para, sente fadiga excessiva, depressao, fome aumentada, pesadelos?"
        ],
        "alerts": [
          "Complicacoes agudas: Infarto do miocardio, arritmias, morte subita",
          "AVC, convulsoes",
          "Pneumotorax (manobra Valsalva ao fumar)",
          "Transtorno psicotico induzido (delirios paranoides, alucinacoes tateis)",
          "Risco de suicidio durante abstinencia (repe)",
          "Nota Critica: Criterios de tolerancia e abstinencia sao DESCONSIDERADOS em individuos cujo uso se da unicamente sob supervisao medica adequada."
        ],
        "source_trace": {
          "markdown_section": "## 10. TRANSTORNO POR USO DE ESTIMULANTES (TUEst)",
          "patches_applied": []
        },
        "category": "FULL",
        "ui_mode": "structured_full",
        "render_structured_interview": true
      },
      "codigo_dsm5": "304.40",
      "codigo_cid10": "F15.20",
      "grupo": "Estimulantes",
      "faixa_etaria_alvo": "ambos",
      "versao_complementar_existe": false,
      "inventario_clinico": {
        "codigo_bruto": "",
        "estrutura_efetiva": "",
        "notas_clinicas": "Padrão problemático de uso de cocaína (pó, crack, freebase) com comprometimento significativo. Critérios idênticos aos de anfetamina-type."
      },
      "codigo_cid11": "6C42",
      "super_enrichment": {
        "id": "transtorno_por_uso_de_estimulantes",
        "nome_original": "TRANSTORNO POR USO DE ESTIMULANTES",
        "comorbidades_frequentes": [
          {
            "condicao": "Transtorno por uso de álcool",
            "frequencia": "alta",
            "nota": null
          },
          {
            "condicao": "Transtorno por uso de Cannabis",
            "frequencia": "moderada",
            "nota": null
          },
          {
            "condicao": "Transtorno de déficit de atenção/hiperatividade",
            "frequencia": "moderada",
            "nota": null
          }
        ],
        "diagnostico_diferencial": [
          {
            "condicao": "Transtornos mentais primários",
            "ponto_distincao": "Efeitos de estimulantes devem ser distinguidos de esquizofrenia, transtornos bipolares/depressivos, TAG e TP.",
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
          "populacao_geral": "Anfetamina: 0,2% (12-17a e adultos); Cocaína: 0,2% (12-17a), 0,3% adultos.",
          "proporcao_sexo": "Cocaína: mais em homens (0,4% vs 0,1% adultos).",
          "variacoes_culturais": null
        },
        "curso_desenvolvimento": {
          "idade_inicio_tipica": "12-25 anos",
          "trajetoria": "Progressão rápida com uso fumado/intravenoso; gradual com uso intranasal/oral.",
          "prognostico": "Reservado para uso crônico; depressão/ideação suicida durante abstinência."
        },
        "instrumentos_complementares": [],
        "transtorno_por_uso_de_estimulantes": "| Campo | Valor |\n|-------|-------|\n| **nome** | Transtorno por Uso de Estimulantes |\n| **codigo_dsm5** | 304.20 (F14.20/F15.20) / 305.60 (F14.10) cocaína leve / 305.70 (F15.10) anfetamina leve |\n| **estrutura_diagnostica** | polythetic_monocluster |\n| **duracao** | 12 meses |\n| **renderiza_entrevista** | true |\n| **modo** | structured_full |",
        "especificacao_obrigatoria": [
          "Substância tipo anfetamina (incl. metanfetamina)",
          "Cocaína",
          "Outro estimulante"
        ],
        "criterios_obrigatorios": [
          {
            "id": "completo",
            "texto": "**Mesma estrutura de 11 critérios**, com notas:\n\n> **Nota Crítica**: Critérios de tolerância e abstinência são DESCONSIDERADOS em indivíduos cujo uso de estimulantes se dá unicamente sob supervisão médica adequada (ex: TDAH, narcolepsia)."
          }
        ],
        "perguntas_chave_especificas": [],
        "regra_diagnostica": "- 2-3 sintomas → LEVE\n- 4-5 sintomas → MODERADO\n- 6+ sintomas → GRAVE",
        "gravidade": {
          "texto_completo": "| Nível | Cocaína | Anfetamina/Outro |\n|-------|---------|------------------|\n| Leve | 305.60 (F14.10) | 305.70 (F15.10) |\n| Moderada | 304.20 (F14.20) | 304.40 (F15.20) |\n| Grave | 304.20 (F14.20) | 304.40 (F15.20) |"
        },
        "padroes_de_uso_tipicos": "- **Uso episódico (\"binges\")**: Uso contínuo de altas doses por horas/dias, interrompido apenas por exaustão ou falta da droga\n- **Uso diário crônico**: Doses altas ou baixas com aumento progressivo\n- **Uso intranasal/oral**: Progressão mais lenta (meses a anos)\n- **Uso IV/fumado**: Progressão rápida para grave (semanas a meses)",
        "complicacoes_agudas": "- Infarto do miocárdio, arritmias, morte súbita\n- AVC, convulsões\n- Pneumotórax (manobra Valsalva ao fumar)\n- Transtorno psicótico induzido (delírios paranoides, alucinações táteis)\n- Risco de suicídio durante abstinência (\"repé\")\n\n---"
      },
      "super_enrichment_source": "dsm/output/json_super_adicionado/transtorno_por_uso_de_estimulantes.json",
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
