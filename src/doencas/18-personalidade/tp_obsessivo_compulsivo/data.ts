import { TranstornoDSMSchema, type TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import { parseGeneratedDiseaseData } from "@/infra/validation-helpers";

// Dados brutos normalizados da release DSM operacional
const rawData = {
  "$schema_version": "1.0.0",
  "meta": {
    "id": "tp_obsessivo_compulsivo",
    "nome_completo": "Transtorno da Personalidade Obsessivo-Compulsiva",
    "sigla": "TPOC",
    "capitulo_id": "18",
    "capitulo": "Transtornos da Personalidade",
    "grupo": null,
    "versao_complementar_existe": false,
    "sinonimos_historicos": [],
    "faixa_etaria_alvo": "ambos",
    "codigo": {
      "cid10": "F60.5",
      "cid11": "6D10",
      "dsm5": "301.4"
    }
  },
  "id": "tp_obsessivo_compulsivo",
  "item_id": "tp_obsessivo_compulsivo",
  "name": "Transtorno da Personalidade Obsessivo-Compulsiva",
  "nome_completo": "Transtorno da Personalidade Obsessivo-Compulsiva",
  "chapter_id": "18",
  "chapter_name": "Transtornos da Personalidade",
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
      "nome": "Preocupação com Ordem, Perfeccionismo e Controle",
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
        }
      ]
    }
  ],
  "criterios_condicionais": [],
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
      "id": "relacoes",
      "label": "Relações Íntimas"
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtornos de ansiedade",
      "frequencia": "alta",
      "nota": "None"
    },
    {
      "condicao": "Transtorno obsessivo-compulsivo (TOC)",
      "frequencia": "moderada",
      "nota": "A maioria dos com TOC não tem TPOC"
    },
    {
      "condicao": "Transtornos depressivos e bipolares",
      "frequencia": "moderada",
      "nota": "None"
    },
    {
      "condicao": "Transtornos alimentares",
      "frequencia": "moderada",
      "nota": "None"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno Obsessivo-Compulsivo (TOC)",
      "ponto_distincao": "TOC: obsessões e compulsões verdadeiras; TPOC: padrão de personalidade de ordem e controle.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno de Acumulação",
      "ponto_distincao": "Acumulação: acúmulo extremo representando perigo; TPOC: dificuldade em descartar sem sentimentalismo.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno da Personalidade Narcisista",
      "ponto_distincao": "Narcisista: acredita ter atingido perfeição; TPOC: autocrítico e perfeccionista.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno da Personalidade Esquizoide",
      "ponto_distincao": "Esquizoide: ausência fundamental de intimidade; TPOC: distanciamento por dedicação ao trabalho.",
      "pertence_a_classe": true
    }
  ],
  "perguntas_chave": [],
  "key_questions": [],
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Início da vida adulta",
    "trajetoria": "Crônico; traços moderados podem ser adaptativos em contextos de alto desempenho.",
    "prognostico": "Dificuldade em novas situações que exijam flexibilidade."
  },
  "prevalencia": {
    "populacao_geral": "2,1% a 7,9%",
    "proporcao_sexo": "Cerca de duas vezes mais em homens",
    "variacoes_culturais": "Culturas que enfatizam trabalho e produtividade não devem ser confundidas.",
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
  "especificadores": [],
  "template_prontuario": {
    "titulo": "",
    "texto": "",
    "campos": []
  },
  "metadados_globais": {
    "fonte_capitulo_md": "18_transtornos_personalidade.md",
    "fonte_inventario_md": null,
    "data_extracao": "2026-05-31",
    "modelo_agente": "claude-opus-4-7",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "instrumentos_complementares": [],
  "raw_document": {
    "$schema_version": "1.0.0",
    "meta": {
      "id": "tp_obsessivo_compulsivo",
      "nome_completo": "Transtorno da Personalidade Obsessivo-Compulsiva",
      "sigla": "TPOC",
      "capitulo_id": "18",
      "capitulo": "Transtornos da Personalidade",
      "grupo": "Cluster C",
      "versao_complementar_existe": false,
      "sinonimos_historicos": [],
      "faixa_etaria_alvo": "adulto",
      "codigo": {
        "cid10": "F60.5",
        "cid11": "6D10",
        "dsm5": "301.4"
      }
    },
    "id": "tp_obsessivo_compulsivo",
    "item_id": "tp_obsessivo_compulsivo",
    "name": "Transtorno da Personalidade Obsessivo-Compulsiva",
    "nome_completo": "Transtorno da Personalidade Obsessivo-Compulsiva",
    "chapter_id": "18",
    "chapter_name": "Transtornos da Personalidade",
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
        "nome": "Preocupação com Ordem, Perfeccionismo e Controle",
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
          }
        ]
      }
    ],
    "criterios_condicionais": [],
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
        "id": "relacoes",
        "label": "Relações Íntimas"
      }
    ],
    "comorbidades_frequentes": [
      {
        "condicao": "Transtornos de ansiedade",
        "frequencia": "alta",
        "nota": "None"
      },
      {
        "condicao": "Transtorno obsessivo-compulsivo (TOC)",
        "frequencia": "moderada",
        "nota": "A maioria dos com TOC não tem TPOC"
      },
      {
        "condicao": "Transtornos depressivos e bipolares",
        "frequencia": "moderada",
        "nota": "None"
      },
      {
        "condicao": "Transtornos alimentares",
        "frequencia": "moderada",
        "nota": "None"
      }
    ],
    "diagnostico_diferencial": [
      {
        "condicao": "Transtorno Obsessivo-Compulsivo (TOC)",
        "ponto_distincao": "TOC: obsessões e compulsões verdadeiras; TPOC: padrão de personalidade de ordem e controle.",
        "pertence_a_classe": false
      },
      {
        "condicao": "Transtorno de Acumulação",
        "ponto_distincao": "Acumulação: acúmulo extremo representando perigo; TPOC: dificuldade em descartar sem sentimentalismo.",
        "pertence_a_classe": false
      },
      {
        "condicao": "Transtorno da Personalidade Narcisista",
        "ponto_distincao": "Narcisista: acredita ter atingido perfeição; TPOC: autocrítico e perfeccionista.",
        "pertence_a_classe": true
      },
      {
        "condicao": "Transtorno da Personalidade Esquizoide",
        "ponto_distincao": "Esquizoide: ausência fundamental de intimidade; TPOC: distanciamento por dedicação ao trabalho.",
        "pertence_a_classe": true
      }
    ],
    "perguntas_chave": [],
    "key_questions": [],
    "curso_desenvolvimento": {
      "idade_inicio_tipica": "Início da vida adulta",
      "trajetoria": "Crônico; traços moderados podem ser adaptativos em contextos de alto desempenho.",
      "prognostico": "Dificuldade em novas situações que exijam flexibilidade."
    },
    "prevalencia": {
      "populacao_geral": "2,1% a 7,9%",
      "proporcao_sexo": "Cerca de duas vezes mais em homens",
      "variacoes_culturais": "Culturas que enfatizam trabalho e produtividade não devem ser confundidas.",
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
    "especificadores": [],
    "template_prontuario": {
      "titulo": "",
      "texto": "",
      "campos": []
    },
    "metadados_globais": {
      "fonte_capitulo_md": "18_transtornos_personalidade.md",
      "fonte_inventario_md": null,
      "data_extracao": "2026-05-31",
      "modelo_agente": "claude-opus-4-7",
      "lacunas_globais": [],
      "inconsistencias_detectadas": [],
      "notas_agente_globais": null,
      "revisao_humana_necessaria": false
    },
    "instrumentos_complementares": [],
    "raw_document": {
      "$schema_version": "1.0.0",
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
      "estrutura_geral": "polythetic_monocluster",
      "clusters_sintomas": [
        {
          "id": "A",
          "nome": "Preocupação com Ordem, Perfeccionismo e Controle",
          "tipo": "polythetic_com_limiar",
          "limiar": {
            "adulto": 4,
            "pediatria": null
          },
          "ancora_obrigatoria": null,
          "sintomas": [
            {
              "id": "A1",
              "rotulo": "Preocupação excessiva com detalhes, regras e ordem",
              "desc": "É tão preocupado com detalhes, regras, listas, ordem, organização ou horários a ponto de o objetivo principal da atividade ser perdido.",
              "pergunta": "Você é tão preocupado com detalhes, regras, listas e organização que acaba perdendo o objetivo principal das atividades?",
              "exemplos_clinicos": [
                "Gastar tempo excessivo procurando lista em vez de refazê-la"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A2",
              "rotulo": "Perfeccionismo que interfere na conclusão de tarefas",
              "desc": "Demonstra perfeccionismo que interfere na conclusão de tarefas (não consegue completar projeto porque seus padrões rígidos não são atingidos).",
              "pergunta": "Seu perfeccionismo é tão rígido que interfere na conclusão de tarefas ou projetos?",
              "exemplos_clinicos": [
                "Relatório nunca concluído por reescritas infindáveis"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A3",
              "rotulo": "Dedicação excessiva ao trabalho em detrimento do lazer",
              "desc": "É excessivamente dedicado ao trabalho e à produtividade em detrimento de atividades de lazer e amizades (não explicado por necessidade financeira).",
              "pergunta": "Você é excessivamente dedicado ao trabalho e à produtividade, excluindo atividades de lazer e amizades, mesmo sem necessidade financeira?",
              "exemplos_clinicos": [
                "Postergar férias indefinidamente",
                "Transformar brincadeiras em tarefas estruturadas"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A4",
              "rotulo": "Excessivamente consciencioso e inflexível em moralidade",
              "desc": "É excessivamente consciencioso, escrupuloso e inflexível quanto a assuntos de moralidade, ética ou valores (não explicado por identificação cultural ou religiosa).",
              "pergunta": "Você é excessivamente rigoroso e inflexível em questões de moralidade, ética ou valores, além do que seria esperado por sua cultura ou religião?",
              "exemplos_clinicos": [
                "Não emprestar moeda a amigo por 'princípio'"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A5",
              "rotulo": "Incapaz de descartar objetos usados ou sem valor",
              "desc": "É incapaz de descartar objetos usados ou sem valor mesmo quando não têm valor sentimental.",
              "pergunta": "Você tem dificuldade em descartar objetos usados ou sem valor, mesmo quando não têm valor sentimental?",
              "exemplos_clinicos": [
                "Acumular peças e revistas antigas",
                "Objetos estragados"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A6",
              "rotulo": "Reluta em delegar tarefas",
              "desc": "Reluta em delegar tarefas ou trabalhar com outras pessoas a menos que elas se submetam à sua forma exata de fazer as coisas.",
              "pergunta": "Você reluta em delegar tarefas ou trabalhar com outras pessoas a menos que façam exatamente do seu jeito?",
              "exemplos_clinicos": [
                "Dar instruções detalhadas sobre como lavar pratos",
                "Rejeitar ajuda mesmo atrasado"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A7",
              "rotulo": "Estilo miserável de gastos",
              "desc": "Adota um estilo miserável de gastos em relação a si e a outros; o dinheiro é visto como algo a ser acumulado para futuras catástrofes.",
              "pergunta": "Você é excessivamente poupador ou mesquinho consigo mesmo e com outros, acumulando dinheiro para catástrofes futuras?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A8",
              "rotulo": "Rigidez e teimosia",
              "desc": "Exibe rigidez e teimosia.",
              "pergunta": "Você é rígido e teimoso, com dificuldade em concordar com ideias diferentes ou mudar de planos?",
              "exemplos_clinicos": [
                "Recusar ceder mesmo reconhecendo interesse próprio",
                "'É o princípio da coisa'"
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
      "criterios_condicionais": [],
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
          "id": "social",
          "label": "Funcionamento Social",
          "icone_fa": "fa-users",
          "relevante_para": "transversal"
        },
        {
          "id": "relacoes",
          "label": "Relações Íntimas",
          "icone_fa": "fa-heart",
          "relevante_para": "transversal"
        }
      ],
      "diagnostico_diferencial": [
        {
          "condicao": "Transtorno Obsessivo-Compulsivo (TOC)",
          "ponto_distincao": "TOC: obsessões e compulsões verdadeiras; TPOC: padrão de personalidade de ordem e controle.",
          "pertence_a_classe": false
        },
        {
          "condicao": "Transtorno de Acumulação",
          "ponto_distincao": "Acumulação: acúmulo extremo representando perigo; TPOC: dificuldade em descartar sem sentimentalismo.",
          "pertence_a_classe": false
        },
        {
          "condicao": "Transtorno da Personalidade Narcisista",
          "ponto_distincao": "Narcisista: acredita ter atingido perfeição; TPOC: autocrítico e perfeccionista.",
          "pertence_a_classe": true
        },
        {
          "condicao": "Transtorno da Personalidade Esquizoide",
          "ponto_distincao": "Esquizoide: ausência fundamental de intimidade; TPOC: distanciamento por dedicação ao trabalho.",
          "pertence_a_classe": true
        }
      ],
      "comorbidades_frequentes": [
        {
          "condicao": "Transtornos de ansiedade",
          "frequencia": "alta",
          "nota": null
        },
        {
          "condicao": "Transtorno obsessivo-compulsivo (TOC)",
          "frequencia": "moderada",
          "nota": "A maioria dos com TOC não tem TPOC"
        },
        {
          "condicao": "Transtornos depressivos e bipolares",
          "frequencia": "moderada",
          "nota": null
        },
        {
          "condicao": "Transtornos alimentares",
          "frequencia": "moderada",
          "nota": null
        }
      ],
      "instrumentos_complementares": [],
      "prevalencia": {
        "populacao_geral": "2,1% a 7,9%",
        "proporcao_sexo": "Cerca de duas vezes mais em homens",
        "variacoes_culturais": "Culturas que enfatizam trabalho e produtividade não devem ser confundidas.",
        "notas": null,
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "curso_desenvolvimento": {
        "idade_inicio_tipica": "Início da vida adulta",
        "trajetoria": "Crônico; traços moderados podem ser adaptativos em contextos de alto desempenho.",
        "prognostico": "Dificuldade em novas situações que exijam flexibilidade.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "template_prontuario": {
        "cabecalho": "## Avaliação do Transtorno da Personalidade Obsessivo-Compulsiva - {nome_paciente}",
        "rodape_metodologico": "Anamnese clínica com base nos critérios DSM-5 (301.4 / F60.5)."
      },
      "metadados_globais": {
        "fonte_capitulo_md": "18_transtornos_personalidade.md",
        "fonte_inventario_md": null,
        "data_extracao": "2026-05-31",
        "modelo_agente": "claude-opus-4-7",
        "lacunas_globais": [],
        "inconsistencias_detectadas": [],
        "notas_agente_globais": null,
        "revisao_humana_necessaria": false
      },
      "id": "tp_obsessivo_compulsivo",
      "category": "FULL",
      "ui_mode": "structured_full",
      "render_structured_interview": true,
      "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [
          "1. Preocupado com detalhes, regras, listas, ordem",
          "2. Perfeccionismo que interfere na conclusao",
          "3. Excessivamente dedicado ao trabalho em detrimento de lazer",
          "4. Consciencioso, escrupuloso, inflexivel quanto a moralidade",
          "5. Incapaz de descartar objetos sem valor",
          "6. Reluta em delegar a menos que submetam a sua forma",
          "7. Estilo miseravel de gastos",
          "8. Rigidez e teimosia"
        ],
        "diagnostic_rule": "Criterios gerais de TP (A-F) + >=4 de 8 criterios",
        "clusters": [
          "Preocupacao com Ordem",
          "Perfeccionismo",
          "Controle Mental e Interpessoal"
        ],
        "duration": "padrao persistente; tende a se tornar menos evidente com envelhecimento",
        "age_onset": "inicio vida adulta",
        "functional_impairment": "dificuldade em tomar decisoes; relacionamentos formais/artificiais; sofrimento quando exige flexibilidade",
        "exclusions": [
          "TOC",
          "transtorno de acumulacao",
          "narcisista",
          "esquizoide"
        ],
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
        "critical_differentials": [
          "TOC propriamente dito",
          "acumulacao",
          "narcisista",
          "esquizoide"
        ],
        "key_questions": [
          "Tao envolvido com detalhes que perde o objetivo?",
          "Dificuldade em terminar tarefas por perfeccionismo?",
          "Dedica tanto tempo ao trabalho que negligencia lazer?",
          "Excessivamente rigido com moralidade alem da cultura/religiao?",
          "Dificuldade em jogar fora coisas sem valor?",
          "Dificuldade em deixar outros fazerem do jeito deles?",
          "Poupado/mesquinho demais?",
          "Rigido ou teimoso demais?"
        ],
        "alerts": [
          "Distinguir de TOC: TPOC NAO tem obsessoes nem compulsoes ritualizadas",
          "Contexto cultural/religioso: normativa nao e patologica",
          "Tracos moderados podem ser adaptativos; patologia = inflexibilidade"
        ],
        "source_trace": {
          "markdown_section": "## 10. Transtorno da Personalidade Obsessivo-Compulsiva (TPOC)",
          "patches_applied": []
        },
        "category": "FULL",
        "ui_mode": "structured_full",
        "render_structured_interview": true
      },
      "inventario_clinico": {
        "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 301.4 / F60.5",
        "estrutura_efetiva": "- **Estrutura efetiva:** Padrao difuso de preocupacao com ordem, perfeccionismo e controle mental/interpessoal a custa de flexibilidade, abertura e eficiencia. Exige 4+ de 8 criterios: (1) preocupacao com detalhes/regras/listas/ordem a ponto de perder objetivo principal, (2) perfeccionismo que interfere na conclusao de tarefas, (3) dedicacao excessiva ao trabalho/produtividade em detrimento de lazer/amizades (sem necessidade financeira), (4) excessivamente consciencioso/escrupuloso/inflexivel quanto moralidade/etica/valores (sem explicacao cultural/religiosa), (5) incapaz de descartar objetos sem valor, (6) reluta em delegar tarefas, (7) estilo miseravel de gastos (acumula para catástrofes futuras), (8) rigidez e teimosia.",
        "notas_clinicas": "- **Notas:** Prevalencia: 2,1-7,9% (um dos mais prevalentes). Diagnosticado ~2x mais em homens. Diferenciar de TOC (TOC tem obsessões e compulsões verdadeiras; ambos podem ser diagnosticados simultaneamente). Diferenciar de transtorno de acumulacao (acumulacao extrema merece diagnostico separado; ambos podem coexistir). Comorbidade: transtornos de ansiedade (TAG, fobia social, fobias especificas), TOC, transtornos bipolares/depressivos, alimentares. Tracos tipo A (competitividade, urgencia temporal) podem estar presentes."
      },
      "codigo_cid11": "6D10",
      "super_enrichment": {
        "id": "tp_obsessivo_compulsivo",
        "nome_original": "Transtorno da Personalidade Obsessivo-Compulsiva",
        "comorbidades_frequentes": [
          {
            "condicao": "Transtornos de ansiedade",
            "frequencia": "alta",
            "nota": null
          },
          {
            "condicao": "Transtorno obsessivo-compulsivo (TOC)",
            "frequencia": "moderada",
            "nota": "A maioria dos com TOC não tem TPOC"
          },
          {
            "condicao": "Transtornos depressivos e bipolares",
            "frequencia": "moderada",
            "nota": null
          },
          {
            "condicao": "Transtornos alimentares",
            "frequencia": "moderada",
            "nota": null
          }
        ],
        "diagnostico_diferencial": [
          {
            "condicao": "Transtorno Obsessivo-Compulsivo (TOC)",
            "ponto_distincao": "TOC: obsessões e compulsões verdadeiras; TPOC: padrão de personalidade de ordem e controle.",
            "pertence_a_classe": false
          },
          {
            "condicao": "Transtorno de Acumulação",
            "ponto_distincao": "Acumulação: acúmulo extremo representando perigo; TPOC: dificuldade em descartar sem sentimentalismo.",
            "pertence_a_classe": false
          },
          {
            "condicao": "Transtorno da Personalidade Narcisista",
            "ponto_distincao": "Narcisista: acredita ter atingido perfeição; TPOC: autocrítico e perfeccionista.",
            "pertence_a_classe": true
          },
          {
            "condicao": "Transtorno da Personalidade Esquizoide",
            "ponto_distincao": "Esquizoide: ausência fundamental de intimidade; TPOC: distanciamento por dedicação ao trabalho.",
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
          "populacao_geral": "2,1% a 7,9%",
          "proporcao_sexo": "Cerca de duas vezes mais em homens",
          "variacoes_culturais": "Culturas que enfatizam trabalho e produtividade não devem ser confundidas."
        },
        "curso_desenvolvimento": {
          "idade_inicio_tipica": "Início da vida adulta",
          "trajetoria": "Crônico; traços moderados podem ser adaptativos em contextos de alto desempenho.",
          "prognostico": "Dificuldade em novas situações que exijam flexibilidade."
        },
        "instrumentos_complementares": [],
        "transtorno_da_personalidade_obsessivo_compulsiva": "```yaml\ncodigo_dsm5: \"301.4\"\ncodigo_cid10: \"F60.5\"\ncategoria_operacional: FULL\ncluster: C\nestrutura_diagnostica: polythetic_monocluster\n```",
        "criterios_obrigatorios": [
          {
            "id": "completo",
            "texto": "Padrao difuso de **preocupacao com ordem, perfeccionismo e controle mental e interpessoal** a custa de flexibilidade, abertura e eficiencia, inicio na vida adulta, presente em varios contextos, indicado por **4+** dos seguintes (8 itens):\n\n| # | Criterio |\n|---|----------|\n| 1 | Tao preocupado com detalhes, regras, listas, ordem, organizacao ou horarios que perde o objetivo principal |\n| 2 | Perfeccionismo que interfere na conclusao de tarefas (nao completa por padroes excessivamente rigidos) |\n| 3 | Excessivamente dedicado ao trabalho e produtividade em detrimento de lazer e amizades (nao explicado por necessidade financeira) |\n| 4 | Excessivamente consciencioso, escrupuloso e inflexivel quanto a moralidade, etica ou valores (nao explicado por identificacao cultural/religiosa) |\n| 5 | Incapaz de descartar objetos usados ou sem valor mesmo sem valor sentimental |\n| 6 | Reluta em delegar tarefas a menos que outros se submetam a sua forma exata |\n| 7 | Estilo miseravel de gastos (acumulador); dinheiro visto como protecao contra catastrofes futuras |\n| 8 | Rigidez e teimosia |"
          }
        ],
        "regra_diagnostica": "- Criterios gerais de TP (A-F) + 4+ dos 8 criterios acima\n- **Liminar**: 4/8 sintomas",
        "duracao_idade_prejuizo": {
          "idade_de_inicio": "Inicio da vida adulta",
          "duracao": "Padrao persistente; tende a se tornar menos evidente com envelhecimento (mas menos que outros)",
          "prejuizo_funcional": "Dificuldade em tomar decisoes; raiva reprimida; relacionamentos formais/artificiais; sofrimento profissional quando exige flexibilidade; dificuldade em expressar afeto"
        },
        "exclusoes_obrigatorias": [
          "Transtorno obsessivo-compulsivo (TOC) (diferenciar: TOC tem obsessoes/compulsoes verdadeiras; TPOC e traco de personalidade)",
          "Transtorno de acumulacao (diferenciar: acumulacao extrema e perigosa vs. dificuldade em descartar)",
          "Transtorno de personalidade narcisista (diferenciar: narcisista acredita ter atingido perfeicao; TPOC e autocrítico)",
          "Transtorno de personalidade esquizoide (diferenciar: TPOC tem capacidade subjacente de intimidade; esquizoide nao)",
          "Transtorno de personalidade antissocial (diferenciar: generosidade - TPOC e mesquinho consigo e outros por poupanca)",
          "Transtornos de ansiedade (TAG, fobia social, TOC)",
          "Mudanca de personalidade devido a condicao medica",
          "Uso de substancia",
          "Cultura (algumas culturas enfatizam trabalho/produtividade)"
        ],
        "gravidade": {
          "tipo": "nao_aplica"
        },
        "subtipos": [
          "Sem subtipos formais"
        ],
        "diferenciais_criticos": [
          {
            "numero": 1,
            "condicao": "Distinguir de TOC",
            "chave_diferenciacao": "TPOC nao tem obsessoes nem compulsoes ritualizadas; e um padrao de personalidade"
          },
          {
            "numero": 2,
            "condicao": "Distinguir de acumulacao",
            "chave_diferenciacao": "Criterio 5 e dificuldade de descarte (mesquinhez/utilitarismo), nao acumulacao desorganizada extrema"
          },
          {
            "numero": 3,
            "condicao": "Contexto cultural",
            "chave_diferenciacao": "Trabalho e produtividade valorizados culturalmente nao sao patologicos"
          },
          {
            "numero": 4,
            "condicao": "Contexto religioso",
            "chave_diferenciacao": "Escrupulosidade religiosa culturalmente normativa nao conta (Criterio 4)"
          },
          {
            "numero": 5,
            "condicao": "Necessidade financeira",
            "chave_diferenciacao": "Dedicacao ao trabalho por necessidade real nao conta (Criterio 3)"
          },
          {
            "numero": 6,
            "condicao": "Traços adaptativos",
            "chave_diferenciacao": "Ordem e organizacao sao adaptativos; patologia e a inflexibilidade"
          }
        ],
        "perguntas_chave_entrevista": [
          {
            "numero": 1,
            "texto": "Voce fica tao envolvido com detalhes e regras que acaba perdendo o objetivo principal?"
          },
          {
            "numero": 2,
            "texto": "Tem dificuldade em terminar tarefas porque quer que fiquem perfeitas?"
          },
          {
            "numero": 3,
            "texto": "Dedica tanto tempo ao trabalho que negligencia lazer e amizades?"
          },
          {
            "numero": 4,
            "texto": "E excessivamente rigido com questoes de moralidade ou etica, alem do que sua cultura/religiao prega?"
          },
          {
            "numero": 5,
            "texto": "Tem dificuldade em jogar fora coisas velhas ou sem valor mesmo sem apego sentimental?"
          },
          {
            "numero": 6,
            "texto": "Tem dificuldade em deixar outros fazerem as coisas do jeito deles?"
          },
          {
            "numero": 7,
            "texto": "Voce e poupado ou mesquinho de mais, guardando dinheiro por catastrofes futuras?"
          },
          {
            "numero": 8,
            "texto": "As pessoas ja disseram que voce e rigido ou teimoso demais?"
          }
        ],
        "ui": {
          "renderiza_entrevista": true,
          "modo": "structured_full",
          "caracteristicas_especiais": "",
          "distinguir_de_toc_propriamente_dito": "essencial",
          "atencao_contexto_cultural_religioso": true,
          "tracos_parcialmente_adaptativos": "nao patologizar organizacao e disciplina",
          "avaliar_inflexibilidade": "inflexibilidade e o marcador de patologia"
        }
      },
      "super_enrichment_source": "dsm/output/json_super_adicionado/tp_obsessivo_compulsivo.json",
      "enrichment_status": {
        "has_poor": true,
        "has_master": false,
        "has_inventory": true,
        "has_hierarchy": false,
        "has_cid11": true,
        "has_super_enrichment": true,
        "match_notes": {
          "poor": "id",
          "master": "missing",
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
