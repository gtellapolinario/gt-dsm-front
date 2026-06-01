import { TranstornoDSMSchema, type TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import { parseGeneratedDiseaseData } from "@/infra/validation-helpers";

// Dados brutos normalizados da release DSM operacional
const rawData = {
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_por_uso_de_opioides",
    "nome_completo": "Transtorno por Uso de Opioides",
    "sigla": "",
    "capitulo_id": "16",
    "capitulo": "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
    "grupo": null,
    "versao_complementar_existe": false,
    "sinonimos_historicos": [],
    "faixa_etaria_alvo": "ambos",
    "codigo": {
      "cid10": "F11.20",
      "cid11": "6C41",
      "dsm5": "304.00"
    }
  },
  "id": "transtorno_por_uso_de_opioides",
  "item_id": "transtorno_por_uso_de_opioides",
  "name": "Transtorno por Uso de Opioides",
  "nome_completo": "Transtorno por Uso de Opioides",
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
      "nome": "Critérios de Uso Problemático de opioides",
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
      "descricao_completa": "Um padrão problemático de uso de opioides, levando a comprometimento ou sofrimento clinicamente significativo, manifestado por pelo menos dois dos critérios, ocorrendo durante um período de 12 meses.",
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
      "condicao": "Hepatite C",
      "frequencia": "alta",
      "nota": "Até 90% em usuários intravenosos."
    },
    {
      "condicao": "HIV",
      "frequencia": "alta",
      "nota": "Alto risco em usuários intravenosos."
    },
    {
      "condicao": "Transtorno depressivo maior",
      "frequencia": "moderada",
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
      "condicao": "Transtornos mentais induzidos por opioides",
      "ponto_distincao": "Sintomas específicos de outro transtorno predominam e justificam atenção clínica independente.",
      "pertence_a_classe": true
    }
  ],
  "perguntas_chave": [],
  "key_questions": [],
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Fim da adolescência / início dos 20 anos",
    "trajetoria": "Curso crônico com recaídas frequentes após tratamento.",
    "prognostico": "20-30% alcançam abstinência duradoura; mortalidade 1,5-2%/ano."
  },
  "prevalencia": {
    "populacao_geral": "0,37% adultos ≥18a; ~1% (12-17a) para analgésicos.",
    "proporcao_sexo": "1,5:1 homens:mulheres (analgesicos); 3:1 com heroína.",
    "variacoes_culturais": "Maior entre índios norte-americanos (1,25%).",
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
    },
    {
      "id": "terapia_manutencao",
      "nome": "Em terapia de manutenção",
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
      "nome": "Exame toxicológico de urina",
      "sigla": null,
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    }
  ],
  "raw_document": {
    "$schema_version": "1.0.0",
    "meta": {
      "id": "transtorno_por_uso_de_opioides",
      "nome_completo": "Transtorno por Uso de Opioides",
      "sigla": "",
      "capitulo_id": "16",
      "capitulo": "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
      "grupo": "Opioides",
      "versao_complementar_existe": false,
      "sinonimos_historicos": [
        "Dependência de heroína",
        "Abuso de opioides"
      ],
      "faixa_etaria_alvo": "ambos",
      "codigo": {
        "cid10": "F11.20",
        "cid11": "6C41",
        "dsm5": "304.00"
      }
    },
    "id": "transtorno_por_uso_de_opioides",
    "item_id": "transtorno_por_uso_de_opioides",
    "name": "Transtorno por Uso de Opioides",
    "nome_completo": "Transtorno por Uso de Opioides",
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
        "nome": "Critérios de Uso Problemático de opioides",
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
        "descricao_completa": "Um padrão problemático de uso de opioides, levando a comprometimento ou sofrimento clinicamente significativo, manifestado por pelo menos dois dos critérios, ocorrendo durante um período de 12 meses.",
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
        "condicao": "Hepatite C",
        "frequencia": "alta",
        "nota": "Até 90% em usuários intravenosos."
      },
      {
        "condicao": "HIV",
        "frequencia": "alta",
        "nota": "Alto risco em usuários intravenosos."
      },
      {
        "condicao": "Transtorno depressivo maior",
        "frequencia": "moderada",
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
        "condicao": "Transtornos mentais induzidos por opioides",
        "ponto_distincao": "Sintomas específicos de outro transtorno predominam e justificam atenção clínica independente.",
        "pertence_a_classe": true
      }
    ],
    "perguntas_chave": [],
    "key_questions": [],
    "curso_desenvolvimento": {
      "idade_inicio_tipica": "Fim da adolescência / início dos 20 anos",
      "trajetoria": "Curso crônico com recaídas frequentes após tratamento.",
      "prognostico": "20-30% alcançam abstinência duradoura; mortalidade 1,5-2%/ano."
    },
    "prevalencia": {
      "populacao_geral": "0,37% adultos ≥18a; ~1% (12-17a) para analgésicos.",
      "proporcao_sexo": "1,5:1 homens:mulheres (analgesicos); 3:1 com heroína.",
      "variacoes_culturais": "Maior entre índios norte-americanos (1,25%).",
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
      },
      {
        "id": "terapia_manutencao",
        "nome": "Em terapia de manutenção",
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
        "nome": "Exame toxicológico de urina",
        "sigla": null,
        "uso": "diagnostico",
        "obrigatorio_para_diagnostico": false,
        "fonte": "mencionado_no_dsm"
      }
    ],
    "raw_document": {
      "$schema_version": "1.0.0",
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
      "estrutura_geral": "polythetic_monocluster",
      "clusters_sintomas": [
        {
          "id": "A",
          "nome": "Critérios de Uso Problemático de opioides",
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
              "desc": "opioides consumido em maiores quantidades ou por período mais longo do que pretendido.",
              "pergunta": "Você já usou opioides em quantidades maiores ou por mais tempo do que pretendia?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A2",
              "rotulo": "Desejo persistente ou esforços malsucedidos de reduzir",
              "desc": "Desejo persistente ou esforços malsucedidos para reduzir ou controlar o uso de opioides.",
              "pergunta": "Você já tentou reduzir ou parar de usar opioides sem sucesso?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A3",
              "rotulo": "Muito tempo obtendo, usando ou recuperando-se",
              "desc": "Muito tempo gasto em atividades necessárias para obtenção, uso ou recuperação dos efeitos de opioides.",
              "pergunta": "Você passa muito tempo obtendo, usando ou se recuperando dos efeitos de opioides?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A4",
              "rotulo": "Fissura ou forte desejo de usar",
              "desc": "Fissura ou forte desejo ou necessidade de usar opioides.",
              "pergunta": "Você sente forte desejo ou necessidade de usar opioides?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A5",
              "rotulo": "Fracasso em papéis por uso recorrente",
              "desc": "Uso recorrente resultando em fracasso em cumprir obrigações no trabalho, escola ou casa.",
              "pergunta": "O uso de opioides já causou problemas no trabalho, na escola ou em casa?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A6",
              "rotulo": "Uso continuado apesar de problemas sociais/interpessoais",
              "desc": "Uso continuado apesar de problemas sociais ou interpessoais persistentes causados ou exacerbados pelos efeitos.",
              "pergunta": "Você continua usando opioides mesmo tendo problemas com outras pessoas por causa disso?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A7",
              "rotulo": "Abandono de atividades importantes",
              "desc": "Atividades sociais, profissionais ou recreacionais importantes abandonadas ou reduzidas em virtude do uso.",
              "pergunta": "Você deixou de fazer atividades importantes por causa do uso de opioides?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A8",
              "rotulo": "Uso recorrente em situações perigosas",
              "desc": "Uso recorrente em situações nas quais isso representa perigo para a integridade física.",
              "pergunta": "Você já usou opioides em situações que poderiam ser perigosas?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A9",
              "rotulo": "Uso mantido apesar de problemas físicos/psicológicos",
              "desc": "Uso mantido apesar da consciência de ter um problema físico ou psicológico persistente provavelmente causado ou exacerbado pela substância.",
              "pergunta": "Você continua usando opioides mesmo sabendo que isso agrava problemas de saúde?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A10",
              "rotulo": "Tolerância",
              "desc": "Tolerância: necessidade de quantidades progressivamente maiores para obter o efeito desejado, ou efeito acentuadamente menor com a mesma quantidade.",
              "pergunta": "Você precisa de quantidades maiores de opioides para sentir o mesmo efeito?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A11",
              "rotulo": "Abstinência",
              "desc": "Abstinência: síndrome característica ao cessar/reduzir, ou uso para aliviar/evitar sintomas de abstinência.",
              "pergunta": "Você sente sintomas desagradáveis quando para de usar opioides, ou o usa para evitar esses sintomas?",
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
          "descricao_completa": "Um padrão problemático de uso de opioides, levando a comprometimento ou sofrimento clinicamente significativo, manifestado por pelo menos dois dos critérios, ocorrendo durante um período de 12 meses.",
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
            "notas_agente": "3-12 meses sem critérios (exceto fissura) para opioides.",
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
            "notas_agente": "≥12 meses sem critérios (exceto fissura) para opioides.",
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
        },
        {
          "id": "terapia_manutencao",
          "nome": "Em terapia de manutenção",
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
          "condicao": "Transtornos mentais induzidos por opioides",
          "ponto_distincao": "Sintomas específicos de outro transtorno predominam e justificam atenção clínica independente.",
          "pertence_a_classe": true
        }
      ],
      "comorbidades_frequentes": [
        {
          "condicao": "Hepatite C",
          "frequencia": "alta",
          "nota": "Até 90% em usuários intravenosos."
        },
        {
          "condicao": "HIV",
          "frequencia": "alta",
          "nota": "Alto risco em usuários intravenosos."
        },
        {
          "condicao": "Transtorno depressivo maior",
          "frequencia": "moderada",
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
          "nome": "Exame toxicológico de urina",
          "sigla": null,
          "uso": "diagnostico",
          "obrigatorio_para_diagnostico": false,
          "fonte": "mencionado_no_dsm"
        }
      ],
      "prevalencia": {
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
      },
      "curso_desenvolvimento": {
        "idade_inicio_tipica": "Fim da adolescência / início dos 20 anos",
        "trajetoria": "Curso crônico com recaídas frequentes após tratamento.",
        "prognostico": "20-30% alcançam abstinência duradoura; mortalidade 1,5-2%/ano.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "template_prontuario": {
        "cabecalho": "## Avaliação do Transtorno por Uso de Opioides - {nome_paciente}",
        "rodape_metodologico": "DSM-5 (304.00 / F11.20)."
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
      "id": "transtorno_por_uso_de_opioides",
      "category": "FULL",
      "ui_mode": "structured_full",
      "render_structured_interview": true,
      "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [
          "Dose/tempo maior que pretendido",
          "Tentativas malsucedidas de reducao",
          "Tempo gasto obtendo/usando",
          "Fissura",
          "Fracasso em obrigacoes",
          "Uso apesar de problemas sociais",
          "Abandono de atividades",
          "Uso em situacoes perigosas",
          "Uso apesar de problemas de saude",
          "Tolerancia (doses maiores para mesmo efeito)",
          "Abstinencia (sindrome caracteristica ou uso para aliviar)"
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
          "Uso adequado de opioides prescritos (sem compulsao, sem prejuizo funcional)",
          "Dor cronica legitima (uso conforme prescricao, monitoramento medico)"
        ],
        "subtypes_presentations": [],
        "specifiers": [
          "Em terapia de manutencao",
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
            "condicao": "Uso adequado de opioides prescritos",
            "diferenciador": "Sem compulsao, sem prejuizo funcional"
          },
          {
            "condicao": "Dor cronica legitima",
            "diferenciador": "Uso conforme prescricao, monitoramento medico"
          },
          {
            "condicao": "Abstinencia de sedativos",
            "diferenciador": "Pupilas DILATADAS em abstinencia de opioides; pupilas normais em sedativos"
          },
          {
            "condicao": "Intoxicacao por alcool/sedativos",
            "diferenciador": "Sem miose; sem resposta a naloxona"
          }
        ],
        "key_questions": [
          "Usou mais comprimidos ou injecoes do que planejava?",
          "Ja tentou parar ou diminuir? Conseguiu? Por quanto tempo?",
          "Quanto tempo gasta para conseguir opioides? Ja visitou varios medicos?",
          "Sentiu necessidade intensa de usar?",
          "Faltou ao trabalho ou negligenciou familia por causa dos opioides?",
          "Continuou usando apesar de brigas ou perda de relacionome_completontos?",
          "Deixou hobbies, esportes ou trabalho por causa do uso?",
          "Usou em situacoes de risco (ex: dividindo agulhas, usando sozinho)?",
          "Continua usando apesar de constipacao, overdoses previas ou infeccoes?",
          "Precisa de doses maiores para aliviar a dor ou sentir efeito?",
          "Quando para, sente calafrios, colicas, suores, ansiedade, vomitos?"
        ],
        "alerts": [
          "Overdose: Miose + depressao respiratoria = emergencia. Naloxona reverte em minutos.",
          "Risco de suicidio: TUO associado a 1,5-2% mortalidade/ano; overdose pode ser acidental ou deliberada.",
          "Complicacoes medicas: HIV, hepatite C (ate 90% em usuarios IV), endocardite, tuberculose.",
          "Sindrome neonatal: ~50% dos bebes de maes com TUO desenvolvem abstinencia neonatal.",
          "Nota Critica: Tolerancia e abstinencia desconsiderados em individuos cujo uso se da UNICAMENTE sob supervisao medica adequada."
        ],
        "source_trace": {
          "markdown_section": "## 7. TRANSTORNO POR USO DE OPIOIDES (TUO)",
          "patches_applied": []
        },
        "category": "FULL",
        "ui_mode": "structured_full",
        "render_structured_interview": true
      },
      "codigo_dsm5": "304.00",
      "codigo_cid10": "F11.20",
      "grupo": "Opioides",
      "faixa_etaria_alvo": "ambos",
      "versao_complementar_existe": false,
      "inventario_clinico": {
        "codigo_bruto": "",
        "estrutura_efetiva": "",
        "notas_clinicas": "Padrão problemático de uso de opioides (heroína, analgésicos prescritos) com comprometimento significativo (2+ critérios em 12 meses). Autoadministração compulsiva, tolerância, abstinência."
      },
      "codigo_cid11": "6C41",
      "super_enrichment": {
        "id": "transtorno_por_uso_de_opioides",
        "nome_original": "TRANSTORNO POR USO DE OPIOIDES",
        "comorbidades_frequentes": [
          {
            "condicao": "Hepatite C",
            "frequencia": "alta",
            "nota": "Até 90% em usuários intravenosos."
          },
          {
            "condicao": "HIV",
            "frequencia": "alta",
            "nota": "Alto risco em usuários intravenosos."
          },
          {
            "condicao": "Transtorno depressivo maior",
            "frequencia": "moderada",
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
            "condicao": "Transtornos mentais induzidos por opioides",
            "ponto_distincao": "Sintomas específicos de outro transtorno predominam e justificam atenção clínica independente.",
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
          "populacao_geral": "0,37% adultos ≥18a; ~1% (12-17a) para analgésicos.",
          "proporcao_sexo": "1,5:1 homens:mulheres (analgesicos); 3:1 com heroína.",
          "variacoes_culturais": "Maior entre índios norte-americanos (1,25%)."
        },
        "curso_desenvolvimento": {
          "idade_inicio_tipica": "Fim da adolescência / início dos 20 anos",
          "trajetoria": "Curso crônico com recaídas frequentes após tratamento.",
          "prognostico": "20-30% alcançam abstinência duradoura; mortalidade 1,5-2%/ano."
        },
        "instrumentos_complementares": [
          {
            "nome": "Exame toxicológico de urina",
            "sigla": null,
            "uso": "diagnostico",
            "obrigatorio_para_diagnostico": false,
            "fonte": "mencionado_no_dsm"
          }
        ],
        "transtorno_por_uso_de_opioides": "| Campo | Valor |\n|-------|-------|\n| **nome** | Transtorno por Uso de Opioides |\n| **codigo_dsm5** | 304.00 (F11.20) / 305.50 (F11.10) leve |\n| **estrutura_diagnostica** | polythetic_monocluster |\n| **duracao** | 12 meses |\n| **renderiza_entrevista** | true |\n| **modo** | structured_full |",
        "criterios_obrigatorios": [
          {
            "id": "completo",
            "texto": "**Mesma estrutura de 11 critérios**, com nota especial:\n\n> **Nota Crítica para Critério 10 (Tolerância) e 11 (Abstinência)**: Desconsiderados em indivíduos cujo uso se dá UNICAMENTE sob supervisão médica adequada (ex: analgesia prescrita corretamente)."
          }
        ],
        "perguntas_chave_especificas": [],
        "regra_diagnostica": "- 2-3 sintomas → LEVE (305.50 / F11.10)\n- 4-5 sintomas → MODERADO (304.00 / F11.20)\n- 6+ sintomas → GRAVE (304.00 / F11.20)",
        "especificadores": [
          {
            "nome": "Em terapia de manutenção",
            "descricao": "Uso de agonista prescrito (metadona, buprenorfina) sem critérios para TUO (exceto tolerância/abstinência do agonista)"
          }
        ],
        "alertas_clinicos": "> **Overdose**: Miose + depressão respiratória = emergência. Naloxona reverte em minutos.\n> **Risco de suicídio**: TUO associado a 1,5-2% mortalidade/ano; overdose pode ser acidental ou deliberada.\n> **Complicações médicas**: HIV, hepatite C (até 90% em usuários IV), endocardite, tuberculose.\n> **Síndrome neonatal**: ~50% dos bebês de mães com TUO desenvolvem abstinência neonatal.",
        "diferenciais_criticos": [
          {
            "Condição": "Uso adequado de opioides prescritos",
            "Diferenciador": "Sem compulsão, sem prejuízo funcional"
          },
          {
            "Condição": "Dor crônica legítima",
            "Diferenciador": "Uso conforme prescrição, monitoramento médico"
          },
          {
            "Condição": "Abstinência de sedativos",
            "Diferenciador": "Pupilas DILATADAS em abstinência de opioides; pupilas normais em sedativos"
          },
          {
            "Condição": "Intoxicação por álcool/sedativos",
            "Diferenciador": "Sem miose; sem resposta a naloxona"
          }
        ]
      },
      "super_enrichment_source": "dsm/output/json_super_adicionado/transtorno_por_uso_de_opioides.json",
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
