import { TranstornoDSMSchema, type TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import { parseGeneratedDiseaseData } from "@/infra/validation-helpers";

// Dados brutos normalizados da release DSM operacional
const rawData = {
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_por_uso_de_alcool",
    "nome_completo": "Transtorno por Uso de Álcool",
    "sigla": "",
    "capitulo_id": "16",
    "capitulo": "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
    "grupo": null,
    "versao_complementar_existe": false,
    "sinonimos_historicos": [],
    "faixa_etaria_alvo": "ambos",
    "codigo": {
      "cid10": "F10.20",
      "cid11": "6C40",
      "dsm5": "303.90"
    }
  },
  "id": "transtorno_por_uso_de_alcool",
  "item_id": "transtorno_por_uso_de_alcool",
  "name": "Transtorno por Uso de Álcool",
  "nome_completo": "Transtorno por Uso de Álcool",
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
      "nome": "Critérios de Uso Problemático de álcool",
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
      "descricao_completa": "Um padrão problemático de uso de álcool, levando a comprometimento ou sofrimento clinicamente significativos, manifestado por pelo menos dois dos critérios, ocorrendo durante um período de 12 meses.",
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
      "label": "Saúde Física"
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno bipolar",
      "frequencia": "alta",
      "nota": "None"
    },
    {
      "condicao": "Transtorno depressivo maior",
      "frequencia": "alta",
      "nota": "None"
    },
    {
      "condicao": "Transtorno da personalidade antissocial",
      "frequencia": "alta",
      "nota": "None"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Uso não patológico de álcool",
      "ponto_distincao": "Ingestão ocasional ou diária em pequenas doses sem sofrimento/significativo prejuízo funcional.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno por uso de sedativos, hipnóticos ou ansiolíticos",
      "ponto_distincao": "Sintomas semelhantes, mas curso pode ser diferente, especialmente quanto a problemas médicos.",
      "pertence_a_classe": true
    }
  ],
  "perguntas_chave": [],
  "key_questions": [],
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Fim da adolescência / 20-25 anos",
    "trajetoria": "Curso variável com períodos de remissão e recaídas. Primeira intoxicação na adolescência.",
    "prognostico": "Prognóstico promissor para a maioria; casos graves representam parcela minoritária."
  },
  "prevalencia": {
    "populacao_geral": "4,6% (12-17a); 8,5% adultos ≥18a",
    "proporcao_sexo": "12,4% homens vs 4,9% mulheres adultos",
    "variacoes_culturais": "Maior entre índios norte-americanos (12,1%)",
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
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "instrumentos_complementares": [
    {
      "nome": "AUDIT",
      "sigla": "AUDIT",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ],
  "raw_document": {
    "$schema_version": "1.0.0",
    "meta": {
      "id": "transtorno_por_uso_de_alcool",
      "nome_completo": "Transtorno por Uso de Álcool",
      "sigla": "",
      "capitulo_id": "16",
      "capitulo": "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
      "grupo": "Álcool",
      "versao_complementar_existe": false,
      "sinonimos_historicos": [
        "Dependência de álcool",
        "Abuso de álcool"
      ],
      "faixa_etaria_alvo": "ambos",
      "codigo": {
        "cid10": "F10.20",
        "cid11": "6C40",
        "dsm5": "303.90"
      }
    },
    "id": "transtorno_por_uso_de_alcool",
    "item_id": "transtorno_por_uso_de_alcool",
    "name": "Transtorno por Uso de Álcool",
    "nome_completo": "Transtorno por Uso de Álcool",
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
        "nome": "Critérios de Uso Problemático de álcool",
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
        "descricao_completa": "Um padrão problemático de uso de álcool, levando a comprometimento ou sofrimento clinicamente significativos, manifestado por pelo menos dois dos critérios, ocorrendo durante um período de 12 meses.",
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
        "label": "Saúde Física"
      }
    ],
    "comorbidades_frequentes": [
      {
        "condicao": "Transtorno bipolar",
        "frequencia": "alta",
        "nota": "None"
      },
      {
        "condicao": "Transtorno depressivo maior",
        "frequencia": "alta",
        "nota": "None"
      },
      {
        "condicao": "Transtorno da personalidade antissocial",
        "frequencia": "alta",
        "nota": "None"
      }
    ],
    "diagnostico_diferencial": [
      {
        "condicao": "Uso não patológico de álcool",
        "ponto_distincao": "Ingestão ocasional ou diária em pequenas doses sem sofrimento/significativo prejuízo funcional.",
        "pertence_a_classe": false
      },
      {
        "condicao": "Transtorno por uso de sedativos, hipnóticos ou ansiolíticos",
        "ponto_distincao": "Sintomas semelhantes, mas curso pode ser diferente, especialmente quanto a problemas médicos.",
        "pertence_a_classe": true
      }
    ],
    "perguntas_chave": [],
    "key_questions": [],
    "curso_desenvolvimento": {
      "idade_inicio_tipica": "Fim da adolescência / 20-25 anos",
      "trajetoria": "Curso variável com períodos de remissão e recaídas. Primeira intoxicação na adolescência.",
      "prognostico": "Prognóstico promissor para a maioria; casos graves representam parcela minoritária."
    },
    "prevalencia": {
      "populacao_geral": "4,6% (12-17a); 8,5% adultos ≥18a",
      "proporcao_sexo": "12,4% homens vs 4,9% mulheres adultos",
      "variacoes_culturais": "Maior entre índios norte-americanos (12,1%)",
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
      "lacunas_globais": [],
      "inconsistencias_detectadas": [],
      "notas_agente_globais": null,
      "revisao_humana_necessaria": false
    },
    "instrumentos_complementares": [
      {
        "nome": "AUDIT",
        "sigla": "AUDIT",
        "uso": "triagem",
        "obrigatorio_para_diagnostico": false,
        "fonte": "sugestao_clinica_padrao"
      }
    ],
    "raw_document": {
      "$schema_version": "1.0.0",
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
      "estrutura_geral": "polythetic_monocluster",
      "clusters_sintomas": [
        {
          "id": "A",
          "nome": "Critérios de Uso Problemático de álcool",
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
              "desc": "álcool consumido em maiores quantidades ou por período mais longo do que pretendido.",
              "pergunta": "Você já usou álcool em quantidades maiores ou por mais tempo do que pretendia?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A2",
              "rotulo": "Desejo persistente ou esforços malsucedidos de reduzir",
              "desc": "Desejo persistente ou esforços malsucedidos para reduzir ou controlar o uso de álcool.",
              "pergunta": "Você já tentou reduzir ou parar de usar álcool sem sucesso?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A3",
              "rotulo": "Muito tempo obtendo, usando ou recuperando-se",
              "desc": "Muito tempo gasto em atividades necessárias para obtenção, uso ou recuperação dos efeitos de álcool.",
              "pergunta": "Você passa muito tempo obtendo, usando ou se recuperando dos efeitos de álcool?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A4",
              "rotulo": "Fissura ou forte desejo de usar",
              "desc": "Fissura ou forte desejo ou necessidade de usar álcool.",
              "pergunta": "Você sente forte desejo ou necessidade de usar álcool?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A5",
              "rotulo": "Fracasso em papéis por uso recorrente",
              "desc": "Uso recorrente resultando em fracasso em cumprir obrigações no trabalho, escola ou casa.",
              "pergunta": "O uso de álcool já causou problemas no trabalho, na escola ou em casa?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A6",
              "rotulo": "Uso continuado apesar de problemas sociais/interpessoais",
              "desc": "Uso continuado apesar de problemas sociais ou interpessoais persistentes causados ou exacerbados pelos efeitos.",
              "pergunta": "Você continua usando álcool mesmo tendo problemas com outras pessoas por causa disso?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A7",
              "rotulo": "Abandono de atividades importantes",
              "desc": "Atividades sociais, profissionais ou recreacionais importantes abandonadas ou reduzidas em virtude do uso.",
              "pergunta": "Você deixou de fazer atividades importantes por causa do uso de álcool?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A8",
              "rotulo": "Uso recorrente em situações perigosas",
              "desc": "Uso recorrente em situações nas quais isso representa perigo para a integridade física.",
              "pergunta": "Você já usou álcool em situações que poderiam ser perigosas?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A9",
              "rotulo": "Uso mantido apesar de problemas físicos/psicológicos",
              "desc": "Uso mantido apesar da consciência de ter um problema físico ou psicológico persistente provavelmente causado ou exacerbado pela substância.",
              "pergunta": "Você continua usando álcool mesmo sabendo que isso agrava problemas de saúde?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A10",
              "rotulo": "Tolerância",
              "desc": "Tolerância: necessidade de quantidades progressivamente maiores para obter o efeito desejado, ou efeito acentuadamente menor com a mesma quantidade.",
              "pergunta": "Você precisa de quantidades maiores de álcool para sentir o mesmo efeito?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A11",
              "rotulo": "Abstinência",
              "desc": "Abstinência: síndrome característica ao cessar/reduzir, ou uso para aliviar/evitar sintomas de abstinência.",
              "pergunta": "Você sente sintomas desagradáveis quando para de usar álcool, ou o usa para evitar esses sintomas?",
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
          "descricao_completa": "Um padrão problemático de uso de álcool, levando a comprometimento ou sofrimento clinicamente significativos, manifestado por pelo menos dois dos critérios, ocorrendo durante um período de 12 meses.",
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
            "notas_agente": "3-12 meses sem critérios (exceto fissura) para álcool.",
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
            "notas_agente": "≥12 meses sem critérios (exceto fissura) para álcool.",
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
          "label": "Saúde Física",
          "icone_fa": "fa-heartbeat",
          "relevante_para": "transversal"
        }
      ],
      "diagnostico_diferencial": [
        {
          "condicao": "Uso não patológico de álcool",
          "ponto_distincao": "Ingestão ocasional ou diária em pequenas doses sem sofrimento/significativo prejuízo funcional.",
          "pertence_a_classe": false
        },
        {
          "condicao": "Transtorno por uso de sedativos, hipnóticos ou ansiolíticos",
          "ponto_distincao": "Sintomas semelhantes, mas curso pode ser diferente, especialmente quanto a problemas médicos.",
          "pertence_a_classe": true
        }
      ],
      "comorbidades_frequentes": [
        {
          "condicao": "Transtorno bipolar",
          "frequencia": "alta",
          "nota": null
        },
        {
          "condicao": "Transtorno depressivo maior",
          "frequencia": "alta",
          "nota": null
        },
        {
          "condicao": "Transtorno da personalidade antissocial",
          "frequencia": "alta",
          "nota": null
        }
      ],
      "instrumentos_complementares": [
        {
          "nome": "AUDIT",
          "sigla": "AUDIT",
          "uso": "triagem",
          "obrigatorio_para_diagnostico": false,
          "fonte": "sugestao_clinica_padrao"
        }
      ],
      "prevalencia": {
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
      },
      "curso_desenvolvimento": {
        "idade_inicio_tipica": "Fim da adolescência / 20-25 anos",
        "trajetoria": "Curso variável com períodos de remissão e recaídas. Primeira intoxicação na adolescência.",
        "prognostico": "Prognóstico promissor para a maioria; casos graves representam parcela minoritária.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "template_prontuario": {
        "cabecalho": "## Avaliação do Transtorno por Uso de Álcool - {nome_paciente}",
        "rodape_metodologico": "DSM-5 (303.90 / F10.20)."
      },
      "metadados_globais": {
        "fonte_capitulo_md": "16_transtornos_relacionados_substancias_transtornos_aditivos.md",
        "fonte_inventario_md": null,
        "data_extracao": "2026-05-31",
        "modelo_agente": "claude-opus-4",
        "lacunas_globais": [],
        "inconsistencias_detectadas": [],
        "notas_agente_globais": null,
        "revisao_humana_necessaria": false
      },
      "id": "transtorno_por_uso_de_alcool",
      "category": "FULL",
      "ui_mode": "structured_full",
      "render_structured_interview": true,
      "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [
          "Consumo em maiores quantidades ou por periodo maior que o pretendido",
          "Desejo persistente ou esforcos malsucedidos para reduzir/controlar",
          "Muito tempo gasto obtendo, usando ou se recuperando",
          "Fissura (craving) forte",
          "Fracasso em cumprir obrigacoes (trabalho/escola/casa)",
          "Uso continuado apesar de problemas sociais/interpessoais",
          "Abandono/reducao de atividades importantes",
          "Uso recorrente em situacoes perigosas",
          "Uso continuado apesar de problemas fisicos/psicologicos",
          "Tolerancia (doses maiores para mesmo efeito, ou efeito reduzido)",
          "Abstinencia (sindrome caracteristica ou uso para aliviar sintomas)"
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
          "Uso nao patologico de alcool (intoxicacao ocasional, ingestao social)",
          "Transtorno por uso de sedativos/hipnoticos/ansioliticos (sintomas semelhantes)",
          "Transtorno da conduta / personalidade antissocial (comorbidade comum, diagnosticar ambos)",
          "Transtorno mental induzido por alcool (sintomas devem persistir >1 mes apos abstinencia para ser independente)"
        ],
        "subtypes_presentations": [],
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
        "critical_differentials": [
          {
            "condicao": "Uso social",
            "diferenciador": "Nao ha prejuizo funcional ou compulsao"
          },
          {
            "condicao": "Dependencia fisica sem transtorno",
            "diferenciador": "Tolerancia/abstinencia isoladas nao sao suficientes"
          },
          {
            "condicao": "TDM/Tag",
            "diferenciador": "Sintomas de ansiedade/depressao que MELHORAM com abstinencia = induzidos"
          }
        ],
        "key_questions": [
          "Nas ultimas 4 semanas, sentiu necessidade forte de beber? (fissura)",
          "Alguem ja se preocupou ou reclamou do seu consumo de alcool?",
          "Ja tentou diminuir ou parar sem conseguir?",
          "O alcool ja atrapalhou trabalho, estudo ou relacionome_completontos?",
          "Ja dirigiu ou fez algo perigoso apos beber?",
          "Continua bebendo apesar de problemas de saude?"
        ],
        "alerts": [
          "ALERTA: abstinencia de alcool/sedativos pode ser FATAL",
          "Tolerancia e abstinencia decorrentes de tratamento medico adequado NAO contam para o diagnostico"
        ],
        "source_trace": {
          "markdown_section": "## 1. TRANSTORNO POR USO DE ALCOOL (TUA)",
          "patches_applied": []
        },
        "category": "FULL",
        "ui_mode": "structured_full",
        "render_structured_interview": true
      },
      "codigo_dsm5": "303.90",
      "codigo_cid10": "F10.20",
      "grupo": "Álcool",
      "faixa_etaria_alvo": "ambos",
      "versao_complementar_existe": false,
      "inventario_clinico": {
        "codigo_bruto": "",
        "estrutura_efetiva": "",
        "notas_clinicas": "Padrão problemático de uso de álcool com comprometimento significativo (2+ critérios em 12 meses). Inclui tolerância, abstinência, fissura e uso continuado apesar de consequências adversas."
      },
      "codigo_cid11": "6C40",
      "super_enrichment": {
        "id": "transtorno_por_uso_de_alcool",
        "nome_original": "TRANSTORNO POR USO DE ALCOOL",
        "comorbidades_frequentes": [
          {
            "condicao": "Transtorno bipolar",
            "frequencia": "alta",
            "nota": null
          },
          {
            "condicao": "Transtorno depressivo maior",
            "frequencia": "alta",
            "nota": null
          },
          {
            "condicao": "Transtorno da personalidade antissocial",
            "frequencia": "alta",
            "nota": null
          }
        ],
        "diagnostico_diferencial": [
          {
            "condicao": "Uso não patológico de álcool",
            "ponto_distincao": "Ingestão ocasional ou diária em pequenas doses sem sofrimento/significativo prejuízo funcional.",
            "pertence_a_classe": false
          },
          {
            "condicao": "Transtorno por uso de sedativos, hipnóticos ou ansiolíticos",
            "ponto_distincao": "Sintomas semelhantes, mas curso pode ser diferente, especialmente quanto a problemas médicos.",
            "pertence_a_classe": true
          }
        ],
        "hierarquia": {
          "presente": false,
          "exclui_se_diagnosticado": [],
          "exclui_diagnostico_de": [],
          "notas": ""
        },
        "prevalencia": {
          "populacao_geral": "4,6% (12-17a); 8,5% adultos ≥18a",
          "proporcao_sexo": "12,4% homens vs 4,9% mulheres adultos",
          "variacoes_culturais": "Maior entre índios norte-americanos (12,1%)"
        },
        "curso_desenvolvimento": {
          "idade_inicio_tipica": "Fim da adolescência / 20-25 anos",
          "trajetoria": "Curso variável com períodos de remissão e recaídas. Primeira intoxicação na adolescência.",
          "prognostico": "Prognóstico promissor para a maioria; casos graves representam parcela minoritária."
        },
        "instrumentos_complementares": [
          {
            "nome": "AUDIT",
            "sigla": "AUDIT",
            "uso": "triagem",
            "obrigatorio_para_diagnostico": false,
            "fonte": "sugestao_clinica_padrao"
          }
        ],
        "transtorno_por_uso_de_alcool": "| Campo | Valor |\n|-------|-------|\n| **nome** | Transtorno por Uso de Álcool |\n| **categoria** | Transtornos Relacionados a Substâncias - Depressores |\n| **codigo_dsm5** | 303.90 (F10.20) / 305.00 (F10.10) leve |\n| **estrutura_diagnostica** | polythetic_monocluster |\n| **duracao** | 12 meses |\n| **renderiza_entrevista** | true |\n| **modo** | structured_full |",
        "criterios_obrigatorios": [
          {
            "id": "completo",
            "texto": "Padrão problemático de uso de álcool levando a comprometimento clinicamente significativo, manifestado por **pelo menos 2 dos 11 critérios** abaixo, em 12 meses:"
          }
        ],
        "clusters_sintomaticos": [
          {
            "#": "10",
            "Critério": "Tolerância (doses maiores para mesmo efeito, ou efeito reduzido)",
            "Pergunta Chave": "\"Precisa beber mais para sentir o mesmo efeito? O mesmo quantidade já não basta?\""
          },
          {
            "#": "11",
            "Critério": "Abstinência (síndrome característica ou uso para aliviar sintomas)",
            "Pergunta Chave": "\"Quando para de beber, sente tremor, suor, ansiedade, insônia, náusea?\""
          }
        ],
        "regra_diagnostica": "Contagem de critérios em 12 meses:\n- 2-3 sintomas → LEVE\n- 4-5 sintomas → MODERADO  \n- 6+ sintomas → GRAVE",
        "gravidade": {
          "texto_completo": "| Nível | Critérios | Códigos |\n|-------|-----------|---------|\n| Leve | 2-3 sintomas | 305.00 (F10.10) |\n| Moderada | 4-5 sintomas | 303.90 (F10.20) |\n| Grave | 6+ sintomas | 303.90 (F10.20) |\n| tipo_gravidade | contagem_sintomas_e_prejuizo | |"
        },
        "especificadores": [
          {
            "nome": "Em remissão inicial",
            "descricao": "3-12 meses sem critérios (exceto fissura)"
          },
          {
            "nome": "Em remissão sustentada",
            "descricao": "12+ meses sem critérios (exceto fissura)"
          },
          {
            "nome": "Em ambiente protegido",
            "descricao": "acesso restrito à substância (prisão, comunidade terapêutica)"
          }
        ],
        "exclusoes_obrigatorias": "1. Uso não patológico de álcool (intoxicação ocasional, ingestão social)\n2. Transtorno por uso de sedativos/hipnóticos/ansiolíticos (sintomas semelhantes)\n3. Transtorno da conduta / personalidade antissocial (comorbidade comum, diagnosticar ambos)\n4. Transtorno mental induzido por álcool (sintomas devem persistir >1 mês após abstinência para ser independente)",
        "diferenciais_criticos": [
          {
            "Condição": "Uso social",
            "Diferenciador": "Não há prejuíço funcional ou compulsão"
          },
          {
            "Condição": "Dependência física sem transtorno",
            "Diferenciador": "Tolerância/abstinência isoladas não são suficientes"
          },
          {
            "Condição": "TDM/Tag",
            "Diferenciador": "Sintomas de ansiedade/depressão que MELHORAM com abstinência = induzidos"
          }
        ],
        "perguntas_de_triagem_3_minutos": "1. \"Nas últimas 4 semanas, sentiu necessidade forte de beber?\" (fissura)\n2. \"Alguém já se preocupou ou reclamou do seu consumo de álcool?\"\n3. \"Já tentou diminuir ou parar sem conseguir?\"\n4. \"O álcool já atrapalhou trabalho, estudo ou relacionamentos?\"\n5. \"Já dirigiu ou fez algo perigoso após beber?\"\n6. \"Continua bebendo apesar de problemas de saúde?\"\n\n---"
      },
      "super_enrichment_source": "dsm/output/json_super_adicionado/transtorno_por_uso_de_alcool.json",
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
