import { TranstornoDSMSchema, type TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import { parseGeneratedDiseaseData } from "@/infra/validation-helpers";

// Dados brutos normalizados da release DSM operacional
const rawData = {
  "$schema_version": "1.0.0",
  "meta": {
    "id": "delirium",
    "nome_completo": "Delirium",
    "sigla": "",
    "capitulo_id": "17",
    "capitulo": "Transtornos Neurocognitivos",
    "grupo": null,
    "versao_complementar_existe": false,
    "sinonimos_historicos": [],
    "faixa_etaria_alvo": "ambos",
    "codigo": {
      "cid10": "F05",
      "cid11": "6D70",
      "dsm5": "293.0"
    }
  },
  "id": "delirium",
  "item_id": "delirium",
  "name": "Delirium",
  "nome_completo": "Delirium",
  "chapter_id": "17",
  "chapter_name": "Transtornos Neurocognitivos",
  "category": "FULL",
  "estrutura_diagnostica": "monothetic_puro",
  "estrutura_geral": "criterios_sintomaticos",
  "ui_mode": "structured_full",
  "severity_type": "nao_aplica",
  "has_formal_severity": false,
  "render_structured_interview": true,
  "diagnostic_rule": "",
  "clusters_sintomas": [
    {
      "id": "A",
      "nome": "Perturbação da Atenção e Consciência",
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
    }
  ],
  "criterios_condicionais": [
    {
      "id": "curso_temporal",
      "letra": "B",
      "rotulo": "Surge em período breve e tende a oscilar",
      "descricao_completa": "A perturbação se desenvolve em um período breve de tempo (normalmente de horas a poucos dias), representa uma mudança da atenção e da consciência basais e tende a oscilar quanto à gravidade ao longo de um dia.",
      "obrigatorio": true
    },
    {
      "id": "perturbacao_adicional_cognicao",
      "letra": "C",
      "rotulo": "Perturbação adicional na cognição",
      "descricao_completa": "Perturbação adicional na cognição (p. ex., déficit de memória, desorientação, linguagem, capacidade visuoespacial ou percepção).",
      "obrigatorio": true
    },
    {
      "id": "exclusao_outro_tnc_coma",
      "letra": "D",
      "rotulo": "Não explicado por outro TNC preexistente nem ocorre em coma",
      "descricao_completa": "As perturbações dos Critérios A e C não são mais bem explicadas por outro transtorno neurocognitivo preexistente, estabelecido ou em desenvolvimento e não ocorrem no contexto de um nível gravemente diminuído de estimulação, como no coma.",
      "obrigatorio": true
    },
    {
      "id": "etiologia_fisiologica",
      "letra": "E",
      "rotulo": "Evidências de etiologia fisiológica",
      "descricao_completa": "Há evidências a partir da história, do exame físico ou de achados laboratoriais de que a perturbação é uma consequência fisiológica direta de outra condição médica, intoxicação ou abstinência de substância, de exposição a uma toxina ou de que ela se deva a múltiplas etiologias.",
      "obrigatorio": true
    }
  ],
  "gravidade": {
    "tipo": "nao_aplica",
    "presente": false,
    "has_formal_severity": false,
    "regra_atribuicao": "",
    "niveis": [],
    "dominios": []
  },
  "dominios_impacto": [
    {
      "id": "saude",
      "label": "Cuidados de Saúde"
    },
    {
      "id": "social",
      "label": "Funcionamento Social"
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno neurocognitivo maior ou leve",
      "frequencia": "alta",
      "nota": "Delirium comumente ocorre sobre TNC preexistente."
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtornos psicóticos",
      "ponto_distincao": "Delirium: curso agudo, perturbação da atenção/consciência, evidência de etiologia médica; psicoses: sem perturbação da consciência.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno de estresse agudo",
      "ponto_distincao": "Delirium: etiologia fisiológica identificável; TEA: precipitado por evento traumático.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtornos neurocognitivos maiores/leves",
      "ponto_distincao": "Delirium: curso agudo e flutuante; TNC: curso mais gradual, sem perturbação da consciência.",
      "pertence_a_classe": true
    }
  ],
  "perguntas_chave": [],
  "key_questions": [],
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Qualquer idade; mais comum em idosos",
    "trajetoria": "Recuperação completa com tratamento da causa subjacente; pode progredir para coma ou morte se não tratado.",
    "prognostico": "Mortalidade alta em hospitalizados; até 40% morrem dentro de um ano."
  },
  "prevalencia": {
    "populacao_geral": "1–2% na comunidade; 14–24% em admissões hospitalares; 70–87% em UTI",
    "proporcao_sexo": "None",
    "variacoes_culturais": "None",
    "notas": "Prevalência muito alta em idosos hospitalizados e pós-operatórios."
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
      "Subtipo etiológico",
      true,
      [
        {
          "id": "intoxicacao_substancia",
          "codigo": {
            "dsm5": "292.81",
            "cid10": "F19.921",
            "cid11": null
          },
          "label": "Delirium por intoxicação por substância",
          "descricao": "Predominam sintomas de delirium no quadro de intoxicação por substância.",
          "sintomas_caracteristicos": []
        },
        {
          "id": "abstinencia_substancia",
          "codigo": {
            "dsm5": "291.0",
            "cid10": "F10.231",
            "cid11": null
          },
          "label": "Delirium por abstinência de substância",
          "descricao": "Predominam sintomas de delirium no quadro de abstinência de substância.",
          "sintomas_caracteristicos": []
        },
        {
          "id": "induzido_medicamento",
          "codigo": {
            "dsm5": "292.81",
            "cid10": "F19.921",
            "cid11": null
          },
          "label": "Delirium induzido por medicamento",
          "descricao": "Sintomas aparecem como efeito colateral de medicamento tomado conforme prescrição.",
          "sintomas_caracteristicos": []
        },
        {
          "id": "outra_condicao_medica",
          "codigo": {
            "dsm5": "293.0",
            "cid10": "F05",
            "cid11": null
          },
          "label": "Delirium devido a outra condição médica",
          "descricao": "Perturbação atribuível às consequências fisiológicas de outra condição médica.",
          "sintomas_caracteristicos": []
        },
        {
          "id": "multiplas_etiologias",
          "codigo": {
            "dsm5": "293.0",
            "cid10": "F05",
            "cid11": null
          },
          "label": "Delirium devido a múltiplas etiologias",
          "descricao": "Delirium com mais de uma etiologia identificada.",
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
      "id": "curso",
      "nome": "Curso",
      "descricao": ""
    },
    {
      "id": "nivel_atividade",
      "nome": "Nível de atividade psicomotora",
      "descricao": ""
    }
  ],
  "template_prontuario": {
    "titulo": "",
    "texto": "",
    "campos": []
  },
  "metadados_globais": {
    "fonte_capitulo_md": "17_transtornos_neurocognitivos.md",
    "fonte_inventario_md": null,
    "data_extracao": "2026-05-31",
    "modelo_agente": "antigravity-gemini",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "instrumentos_complementares": [
    {
      "nome": "Escala de Confusão do Camargo",
      "sigla": "ECC",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Mini-Mental State Examination",
      "sigla": "MMSE",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ],
  "raw_document": {
    "$schema_version": "1.0.0",
    "meta": {
      "id": "delirium",
      "nome_completo": "Delirium",
      "sigla": "",
      "capitulo_id": "17",
      "capitulo": "Transtornos Neurocognitivos",
      "grupo": null,
      "versao_complementar_existe": false,
      "sinonimos_historicos": [],
      "faixa_etaria_alvo": "transversal",
      "codigo": {
        "cid10": "F05",
        "cid11": "6D70",
        "dsm5": "293.0"
      }
    },
    "id": "delirium",
    "item_id": "delirium",
    "name": "Delirium",
    "nome_completo": "Delirium",
    "chapter_id": "17",
    "chapter_name": "Transtornos Neurocognitivos",
    "category": "FULL",
    "estrutura_diagnostica": "monothetic_puro",
    "estrutura_geral": "monothetic_puro",
    "ui_mode": "structured_full",
    "severity_type": "nao_aplica",
    "has_formal_severity": false,
    "render_structured_interview": true,
    "diagnostic_rule": "",
    "clusters_sintomas": [
      {
        "id": "A",
        "nome": "Perturbação da Atenção e Consciência",
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
      }
    ],
    "criterios_condicionais": [
      {
        "id": "curso_temporal",
        "letra": "B",
        "rotulo": "Surge em período breve e tende a oscilar",
        "descricao_completa": "A perturbação se desenvolve em um período breve de tempo (normalmente de horas a poucos dias), representa uma mudança da atenção e da consciência basais e tende a oscilar quanto à gravidade ao longo de um dia.",
        "obrigatorio": true
      },
      {
        "id": "perturbacao_adicional_cognicao",
        "letra": "C",
        "rotulo": "Perturbação adicional na cognição",
        "descricao_completa": "Perturbação adicional na cognição (p. ex., déficit de memória, desorientação, linguagem, capacidade visuoespacial ou percepção).",
        "obrigatorio": true
      },
      {
        "id": "exclusao_outro_tnc_coma",
        "letra": "D",
        "rotulo": "Não explicado por outro TNC preexistente nem ocorre em coma",
        "descricao_completa": "As perturbações dos Critérios A e C não são mais bem explicadas por outro transtorno neurocognitivo preexistente, estabelecido ou em desenvolvimento e não ocorrem no contexto de um nível gravemente diminuído de estimulação, como no coma.",
        "obrigatorio": true
      },
      {
        "id": "etiologia_fisiologica",
        "letra": "E",
        "rotulo": "Evidências de etiologia fisiológica",
        "descricao_completa": "Há evidências a partir da história, do exame físico ou de achados laboratoriais de que a perturbação é uma consequência fisiológica direta de outra condição médica, intoxicação ou abstinência de substância, de exposição a uma toxina ou de que ela se deva a múltiplas etiologias.",
        "obrigatorio": true
      }
    ],
    "gravidade": {
      "tipo": "nao_aplica",
      "presente": false,
      "has_formal_severity": false,
      "regra_atribuicao": "",
      "niveis": [],
      "dominios": []
    },
    "dominios_impacto": [
      {
        "id": "saude",
        "label": "Cuidados de Saúde"
      },
      {
        "id": "social",
        "label": "Funcionamento Social"
      }
    ],
    "comorbidades_frequentes": [
      {
        "condicao": "Transtorno neurocognitivo maior ou leve",
        "frequencia": "alta",
        "nota": "Delirium comumente ocorre sobre TNC preexistente."
      }
    ],
    "diagnostico_diferencial": [
      {
        "condicao": "Transtornos psicóticos",
        "ponto_distincao": "Delirium: curso agudo, perturbação da atenção/consciência, evidência de etiologia médica; psicoses: sem perturbação da consciência.",
        "pertence_a_classe": false
      },
      {
        "condicao": "Transtorno de estresse agudo",
        "ponto_distincao": "Delirium: etiologia fisiológica identificável; TEA: precipitado por evento traumático.",
        "pertence_a_classe": false
      },
      {
        "condicao": "Transtornos neurocognitivos maiores/leves",
        "ponto_distincao": "Delirium: curso agudo e flutuante; TNC: curso mais gradual, sem perturbação da consciência.",
        "pertence_a_classe": true
      }
    ],
    "perguntas_chave": [],
    "key_questions": [],
    "curso_desenvolvimento": {
      "idade_inicio_tipica": "Qualquer idade; mais comum em idosos",
      "trajetoria": "Recuperação completa com tratamento da causa subjacente; pode progredir para coma ou morte se não tratado.",
      "prognostico": "Mortalidade alta em hospitalizados; até 40% morrem dentro de um ano."
    },
    "prevalencia": {
      "populacao_geral": "1–2% na comunidade; 14–24% em admissões hospitalares; 70–87% em UTI",
      "proporcao_sexo": "None",
      "variacoes_culturais": "None",
      "notas": "Prevalência muito alta em idosos hospitalizados e pós-operatórios."
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
        "Subtipo etiológico",
        true,
        [
          {
            "id": "intoxicacao_substancia",
            "codigo": {
              "dsm5": "292.81",
              "cid10": "F19.921",
              "cid11": null
            },
            "label": "Delirium por intoxicação por substância",
            "descricao": "Predominam sintomas de delirium no quadro de intoxicação por substância.",
            "sintomas_caracteristicos": []
          },
          {
            "id": "abstinencia_substancia",
            "codigo": {
              "dsm5": "291.0",
              "cid10": "F10.231",
              "cid11": null
            },
            "label": "Delirium por abstinência de substância",
            "descricao": "Predominam sintomas de delirium no quadro de abstinência de substância.",
            "sintomas_caracteristicos": []
          },
          {
            "id": "induzido_medicamento",
            "codigo": {
              "dsm5": "292.81",
              "cid10": "F19.921",
              "cid11": null
            },
            "label": "Delirium induzido por medicamento",
            "descricao": "Sintomas aparecem como efeito colateral de medicamento tomado conforme prescrição.",
            "sintomas_caracteristicos": []
          },
          {
            "id": "outra_condicao_medica",
            "codigo": {
              "dsm5": "293.0",
              "cid10": "F05",
              "cid11": null
            },
            "label": "Delirium devido a outra condição médica",
            "descricao": "Perturbação atribuível às consequências fisiológicas de outra condição médica.",
            "sintomas_caracteristicos": []
          },
          {
            "id": "multiplas_etiologias",
            "codigo": {
              "dsm5": "293.0",
              "cid10": "F05",
              "cid11": null
            },
            "label": "Delirium devido a múltiplas etiologias",
            "descricao": "Delirium com mais de uma etiologia identificada.",
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
        "id": "curso",
        "nome": "Curso",
        "descricao": ""
      },
      {
        "id": "nivel_atividade",
        "nome": "Nível de atividade psicomotora",
        "descricao": ""
      }
    ],
    "template_prontuario": {
      "titulo": "",
      "texto": "",
      "campos": []
    },
    "metadados_globais": {
      "fonte_capitulo_md": "17_transtornos_neurocognitivos.md",
      "fonte_inventario_md": null,
      "data_extracao": "2026-05-31",
      "modelo_agente": "antigravity-gemini",
      "lacunas_globais": [],
      "inconsistencias_detectadas": [],
      "notas_agente_globais": null,
      "revisao_humana_necessaria": false
    },
    "instrumentos_complementares": [
      {
        "nome": "Escala de Confusão do Camargo",
        "sigla": "ECC",
        "uso": "triagem",
        "obrigatorio_para_diagnostico": false,
        "fonte": "sugestao_clinica_padrao"
      },
      {
        "nome": "Mini-Mental State Examination",
        "sigla": "MMSE",
        "uso": "triagem",
        "obrigatorio_para_diagnostico": false,
        "fonte": "sugestao_clinica_padrao"
      }
    ],
    "raw_document": {
      "$schema_version": "1.0.0",
      "meta": {
        "id": "delirium",
        "nome_completo": "Delirium",
        "sigla": null,
        "codigo": {
          "dsm5": "293.0",
          "cid10": "F05",
          "cid11": "6D70"
        },
        "capitulo": "Transtornos Neurocognitivos",
        "capitulo_id": "17",
        "grupo": null,
        "faixa_etaria_alvo": "transversal",
        "versao_complementar_existe": false,
        "sinonimos_historicos": []
      },
      "estrutura_geral": "monothetic_puro",
      "clusters_sintomas": [
        {
          "id": "A",
          "nome": "Perturbação da Atenção e Consciência",
          "tipo": "monothetic_obrigatorio",
          "limiar": null,
          "ancora_obrigatoria": null,
          "sintomas": [
            {
              "id": "A1",
              "rotulo": "Capacidade reduzida de direcionar e manter a atenção",
              "desc": "Perturbação da atenção evidenciada por capacidade reduzida de direcionar, focalizar, manter e mudar a atenção.",
              "pergunta": "A pessoa apresenta dificuldade para manter a atenção, sendo facilmente distraída ou precisando que as perguntas sejam repetidas?",
              "exemplos_clinicos": [
                "Perguntas precisam ser repetidas",
                "Perseveração em respostas anteriores",
                "Distração por estímulos irrelevantes"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A2",
              "rotulo": "Menor orientação para o ambiente (consciência)",
              "desc": "Perturbação da consciência manifestada por menor orientação ao ambiente ou, por vezes, até para si mesmo.",
              "pergunta": "A pessoa está desorientada em relação ao ambiente ou a si mesma?",
              "exemplos_clinicos": [
                "Desorientação para tempo e lugar"
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
          "id": "curso_temporal",
          "letra": "B",
          "rotulo": "Surge em período breve e tende a oscilar",
          "tipo": "temporal_duracao_janela",
          "ui_widget": "campo_duracao_meses",
          "obrigatorio": true,
          "icone_fa": "fa-clock",
          "ddx_sugeridos": [],
          "descricao_completa": "A perturbação se desenvolve em um período breve de tempo (normalmente de horas a poucos dias), representa uma mudança da atenção e da consciência basais e tende a oscilar quanto à gravidade ao longo de um dia.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "perturbacao_adicional_cognicao",
          "letra": "C",
          "rotulo": "Perturbação adicional na cognição",
          "tipo": "qualitativo_descritivo",
          "ui_widget": "toggle_com_justificativa_obrigatoria",
          "obrigatorio": true,
          "icone_fa": "fa-brain",
          "ddx_sugeridos": [],
          "descricao_completa": "Perturbação adicional na cognição (p. ex., déficit de memória, desorientação, linguagem, capacidade visuoespacial ou percepção).",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "exclusao_outro_tnc_coma",
          "letra": "D",
          "rotulo": "Não explicado por outro TNC preexistente nem ocorre em coma",
          "tipo": "exclusao_diagnostica",
          "ui_widget": "select_multiplos_ddx",
          "obrigatorio": true,
          "icone_fa": "fa-ban",
          "ddx_sugeridos": [
            "tnc_maior",
            "tnc_leve"
          ],
          "descricao_completa": "As perturbações dos Critérios A e C não são mais bem explicadas por outro transtorno neurocognitivo preexistente, estabelecido ou em desenvolvimento e não ocorrem no contexto de um nível gravemente diminuído de estimulação, como no coma.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "etiologia_fisiologica",
          "letra": "E",
          "rotulo": "Evidências de etiologia fisiológica",
          "tipo": "condicao_associada_obrigatoria",
          "ui_widget": "checklist_achados_objetivos",
          "obrigatorio": true,
          "icone_fa": "fa-stethoscope",
          "ddx_sugeridos": [],
          "descricao_completa": "Há evidências a partir da história, do exame físico ou de achados laboratoriais de que a perturbação é uma consequência fisiológica direta de outra condição médica, intoxicação ou abstinência de substância, de exposição a uma toxina ou de que ela se deva a múltiplas etiologias.",
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
        "nome": "Subtipo etiológico",
        "mutuamente_exclusivos": true,
        "subtipos": [
          {
            "id": "intoxicacao_substancia",
            "codigo": {
              "dsm5": "292.81",
              "cid10": "F19.921",
              "cid11": null
            },
            "label": "Delirium por intoxicação por substância",
            "descricao": "Predominam sintomas de delirium no quadro de intoxicação por substância.",
            "sintomas_caracteristicos": []
          },
          {
            "id": "abstinencia_substancia",
            "codigo": {
              "dsm5": "291.0",
              "cid10": "F10.231",
              "cid11": null
            },
            "label": "Delirium por abstinência de substância",
            "descricao": "Predominam sintomas de delirium no quadro de abstinência de substância.",
            "sintomas_caracteristicos": []
          },
          {
            "id": "induzido_medicamento",
            "codigo": {
              "dsm5": "292.81",
              "cid10": "F19.921",
              "cid11": null
            },
            "label": "Delirium induzido por medicamento",
            "descricao": "Sintomas aparecem como efeito colateral de medicamento tomado conforme prescrição.",
            "sintomas_caracteristicos": []
          },
          {
            "id": "outra_condicao_medica",
            "codigo": {
              "dsm5": "293.0",
              "cid10": "F05",
              "cid11": null
            },
            "label": "Delirium devido a outra condição médica",
            "descricao": "Perturbação atribuível às consequências fisiológicas de outra condição médica.",
            "sintomas_caracteristicos": []
          },
          {
            "id": "multiplas_etiologias",
            "codigo": {
              "dsm5": "293.0",
              "cid10": "F05",
              "cid11": null
            },
            "label": "Delirium devido a múltiplas etiologias",
            "descricao": "Delirium com mais de uma etiologia identificada.",
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
          "id": "curso",
          "nome": "Curso",
          "tipo": "select_unico",
          "ortogonal": false,
          "opcoes": [
            {
              "id": "agudo",
              "label": "Agudo",
              "codigo_adicional": null
            },
            {
              "id": "persistente",
              "label": "Persistente",
              "codigo_adicional": null
            }
          ],
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "nivel_atividade",
          "nome": "Nível de atividade psicomotora",
          "tipo": "select_unico",
          "ortogonal": false,
          "opcoes": [
            {
              "id": "hiperativo",
              "label": "Hiperativo",
              "codigo_adicional": null
            },
            {
              "id": "hipoativo",
              "label": "Hipoativo",
              "codigo_adicional": null
            },
            {
              "id": "misto",
              "label": "Misto",
              "codigo_adicional": null
            }
          ],
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        }
      ],
      "gravidade": {
        "tipo": "nao_aplica",
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
          "label": "Cuidados de Saúde",
          "icone_fa": "fa-hospital",
          "relevante_para": "transversal"
        },
        {
          "id": "social",
          "label": "Funcionamento Social",
          "icone_fa": "fa-users",
          "relevante_para": "transversal"
        }
      ],
      "diagnostico_diferencial": [
        {
          "condicao": "Transtornos psicóticos",
          "ponto_distincao": "Delirium: curso agudo, perturbação da atenção/consciência, evidência de etiologia médica; psicoses: sem perturbação da consciência.",
          "pertence_a_classe": false
        },
        {
          "condicao": "Transtorno de estresse agudo",
          "ponto_distincao": "Delirium: etiologia fisiológica identificável; TEA: precipitado por evento traumático.",
          "pertence_a_classe": false
        },
        {
          "condicao": "Transtornos neurocognitivos maiores/leves",
          "ponto_distincao": "Delirium: curso agudo e flutuante; TNC: curso mais gradual, sem perturbação da consciência.",
          "pertence_a_classe": true
        }
      ],
      "comorbidades_frequentes": [
        {
          "condicao": "Transtorno neurocognitivo maior ou leve",
          "frequencia": "alta",
          "nota": "Delirium comumente ocorre sobre TNC preexistente."
        }
      ],
      "instrumentos_complementares": [
        {
          "nome": "Escala de Confusão do Camargo",
          "sigla": "ECC",
          "uso": "triagem",
          "obrigatorio_para_diagnostico": false,
          "fonte": "sugestao_clinica_padrao"
        },
        {
          "nome": "Mini-Mental State Examination",
          "sigla": "MMSE",
          "uso": "triagem",
          "obrigatorio_para_diagnostico": false,
          "fonte": "sugestao_clinica_padrao"
        }
      ],
      "prevalencia": {
        "populacao_geral": "1–2% na comunidade; 14–24% em admissões hospitalares; 70–87% em UTI",
        "proporcao_sexo": null,
        "variacoes_culturais": null,
        "notas": "Prevalência muito alta em idosos hospitalizados e pós-operatórios.",
        "metadados": {
          "completo": false,
          "lacunas": [
            "proporcao_sexo",
            "variacoes_culturais"
          ],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "curso_desenvolvimento": {
        "idade_inicio_tipica": "Qualquer idade; mais comum em idosos",
        "trajetoria": "Recuperação completa com tratamento da causa subjacente; pode progredir para coma ou morte se não tratado.",
        "prognostico": "Mortalidade alta em hospitalizados; até 40% morrem dentro de um ano.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "template_prontuario": {
        "cabecalho": "## Avaliação de Delirium - {nome_paciente}",
        "rodape_metodologico": "Anamnese clínica com base nos critérios DSM-5 (293.0 / F05)."
      },
      "metadados_globais": {
        "fonte_capitulo_md": "17_transtornos_neurocognitivos.md",
        "fonte_inventario_md": null,
        "data_extracao": "2026-05-31",
        "modelo_agente": "antigravity-gemini",
        "lacunas_globais": [],
        "inconsistencias_detectadas": [],
        "notas_agente_globais": null,
        "revisao_humana_necessaria": false
      },
      "id": "delirium",
      "category": "FULL",
      "ui_mode": "structured_full",
      "render_structured_interview": true,
      "rendering": {
        "estrutura_diagnostica": "etiologico_externo",
        "criteria": [
          "A. Perturbacao da atencao E da consciencia",
          "B. Desenvolvimento em periodo breve (horas a poucos dias), com oscilacao",
          "C. Perturbacao adicional na cognicao (memoria, desorientacao, linguagem, visuoespacial)",
          "D. Nao melhor explicada por outro TNC preexistente; nao ocorre em coma",
          "E. Evidencias de consequencia fisiologica direta (condicao medica, intoxicacao, abstinencia, toxina, multiplas etiologias)"
        ],
        "diagnostic_rule": "Todos A, B, C, D, E obrigatorios",
        "clusters": [],
        "duration": "horas a dias (agudo) ou semanas/meses (persistente)",
        "age_onset": null,
        "functional_impairment": "oscilacao do nivel de consciencia, deficit cognitivo, prejuizo funcional significativo",
        "exclusions": [
          "TNC preexistente",
          "coma"
        ],
        "subtypes_presentations": [
          {
            "id": "intoxicacao_substancia",
            "nome_completo": "Delirium por intoxicacao por substancia"
          },
          {
            "id": "abstinencia_substancia",
            "nome_completo": "Delirium por abstinencia de substancia"
          },
          {
            "id": "medicamento",
            "nome_completo": "Delirium induzido por medicamento"
          },
          {
            "id": "condicao_medica",
            "nome_completo": "Delirium devido a outra condicao medica"
          },
          {
            "id": "multiplas_etio",
            "nome_completo": "Delirium devido a multiplas etiologias"
          }
        ],
        "specifiers": [
          {
            "id": "agudo",
            "nome_completo": "Agudo"
          },
          {
            "id": "persistente",
            "nome_completo": "Persistente"
          },
          {
            "id": "hiperativo",
            "nome_completo": "Hiperativo"
          },
          {
            "id": "hipoativo",
            "nome_completo": "Hipoativo"
          },
          {
            "id": "misto",
            "nome_completo": "Nivel misto de atividade"
          }
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
          "TNC Maior (demencia)",
          "transtornos psicoticos",
          "transtorno de estresse agudo"
        ],
        "key_questions": [
          "Mudanca aguda no estado mental nas ultimas horas ou dias?",
          "Ha oscilacao do nivel de consciencia ao longo do dia?",
          "Consegue manter a atencao em uma conversa?",
          "Ha desorientacao para tempo, lugar ou pessoa?",
          "Ha evidencias de alucinacoes ou ilusoes (especialmente visuais)?",
          "Historia de infeccao, novo medicamento, abstinencia, toxina?"
        ],
        "alerts": [
          "NAO diagnosticar delirium no contexto de coma",
          "Avaliacao diaria recomendada; usar CAM ou 4AT",
          "Requer investigacao etiologica sistematica"
        ],
        "source_trace": {
          "markdown_section": "## FICHA 17.1: DELIRIUM",
          "patches_applied": []
        },
        "category": "FULL",
        "ui_mode": "structured_full",
        "render_structured_interview": true
      },
      "codigo_dsm5": "293.0",
      "codigo_cid10": "F05",
      "faixa_etaria_alvo": "transversal",
      "versao_complementar_existe": false,
      "inventario_clinico": {
        "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 780.09 (R41.0)",
        "estrutura_efetiva": "- **Estrutura efetiva:** Sintomas de delirium sem satisfazer criterios completos, quando o clinico opta por nao especificar a razao ou ha informacoes insuficientes.",
        "notas_clinicas": "- **Notas:** Usado em contextos como salas de emergencia."
      },
      "codigo_cid11": "6D70",
      "super_enrichment": {
        "id": "delirium",
        "nome_original": "DELIRIUM",
        "comorbidades_frequentes": [
          {
            "condicao": "Transtorno neurocognitivo maior ou leve",
            "frequencia": "alta",
            "nota": "Delirium comumente ocorre sobre TNC preexistente."
          }
        ],
        "diagnostico_diferencial": [
          {
            "condicao": "Transtornos psicóticos",
            "ponto_distincao": "Delirium: curso agudo, perturbação da atenção/consciência, evidência de etiologia médica; psicoses: sem perturbação da consciência.",
            "pertence_a_classe": false
          },
          {
            "condicao": "Transtorno de estresse agudo",
            "ponto_distincao": "Delirium: etiologia fisiológica identificável; TEA: precipitado por evento traumático.",
            "pertence_a_classe": false
          },
          {
            "condicao": "Transtornos neurocognitivos maiores/leves",
            "ponto_distincao": "Delirium: curso agudo e flutuante; TNC: curso mais gradual, sem perturbação da consciência.",
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
          "populacao_geral": "1–2% na comunidade; 14–24% em admissões hospitalares; 70–87% em UTI",
          "proporcao_sexo": null,
          "variacoes_culturais": null
        },
        "curso_desenvolvimento": {
          "idade_inicio_tipica": "Qualquer idade; mais comum em idosos",
          "trajetoria": "Recuperação completa com tratamento da causa subjacente; pode progredir para coma ou morte se não tratado.",
          "prognostico": "Mortalidade alta em hospitalizados; até 40% morrem dentro de um ano."
        },
        "instrumentos_complementares": [
          {
            "nome": "Escala de Confusão do Camargo",
            "sigla": "ECC",
            "uso": "triagem",
            "obrigatorio_para_diagnostico": false,
            "fonte": "sugestao_clinica_padrao"
          },
          {
            "nome": "Mini-Mental State Examination",
            "sigla": "MMSE",
            "uso": "triagem",
            "obrigatorio_para_diagnostico": false,
            "fonte": "sugestao_clinica_padrao"
          }
        ],
        "identificacao": {},
        "criterios_obrigatorios": [
          {
            "id": "A",
            "texto": "Perturbacao da **atencao** (capacidade reduzida para direcionar, focalizar, manter e mudar a atencao) **E** da **consciencia** (menor orientacao para o ambiente)."
          },
          {
            "id": "B",
            "texto": "Desenvolvimento em **periodo breve** (horas a poucos dias), representando mudanca da atencao/consciencia basais, com **oscilacao** de gravidade ao longo do dia."
          },
          {
            "id": "C",
            "texto": "Perturbacao **adicional na cognicao** (pelo menos um): deficit de memoria, desorientacao, alteracao de linguagem, capacidade visuoespacial ou percepcao."
          },
          {
            "id": "D",
            "texto": "Perturbacoes de A e C NAO sao melhor explicadas por outro TNC preexistente/estabelecido e NAO ocorrem no contexto de coma."
          },
          {
            "id": "E",
            "texto": "Evidencias de que a perturbacao e consequencia fisiologica direta de:\n- outra condicao medica; OU\n- intoxicacao por substancia/medicamento; OU\n- abstinencia de substancia; OU\n- exposicao a toxina; OU\n- multiplas etiologias."
          }
        ],
        "subtipos_etiologicos": [
          {
            "Subtipo": "Delirium por intoxicacao por substancia",
            "Definicao Operacional": "Predominam sintomas A e C; substancia especifica deve ser nomeada"
          },
          {
            "Subtipo": "Delirium por abstinencia de substancia",
            "Definicao Operacional": "Predominam sintomas A e C; substancia especifica deve ser nomeada"
          },
          {
            "Subtipo": "Delirium induzido por medicamento",
            "Definicao Operacional": "Sintomas A e C como efeito colateral de medicamento prescrito"
          },
          {
            "Subtipo": "Delirium devido a outra condicao medica",
            "Definicao Operacional": "Evidencias de condicao medica subjacente (ex: encefalopatia hepatica)"
          },
          {
            "Subtipo": "Delirium devido a multiplas etiologias",
            "Definicao Operacional": "Evidencias de mais de uma etiologia contribuinte"
          }
        ],
        "especificadores_curso": [
          {
            "Especificador": "Agudo",
            "Definicao": "Duracao de poucas horas a dias"
          },
          {
            "Especificador": "Persistente",
            "Definicao": "Duracao de semanas ou meses"
          }
        ],
        "especificadores_nivel_atividade": [
          {
            "Especificador": "Hiperativo",
            "Definicao": "Nivel hiperativo de atividade psicomotora; pode haver oscilacao de humor, agitacao, recusa a cooperar"
          },
          {
            "Especificador": "Hipoativo",
            "Definicao": "Nivel hipoativo; lentidao e letargia que se aproximam do estupor"
          },
          {
            "Especificador": "Nivel misto de atividade",
            "Definicao": "Atividade psicomotora normal apesar da perturbacao atencional/perceptiva; pode oscilar rapidamente"
          }
        ],
        "regra_diagnostica": "- TODOS os criterios A, B, C, D e E sao obrigatorios.\n- A atencao + consciencia (A) e o nucleo sindromico.\n- A oscilacao temporal (B) e essencial para diferenciar de TNC.\n- A etiologia (E) determina o subtipo.",
        "diferenciais_criticos": [
          {
            "Condicao": "TNC Maior (demencia)",
            "Chave de Diferenciacao": "Delirium = agudo, oscilante, atencao/consciencia comprometidas; demencia = cronico, estavel, atencao preservada ate estagios finais"
          },
          {
            "Condicao": "Transtornos psicoticos",
            "Chave de Diferenciacao": "Delirium tem desorientacao, atencao comprometida, oscilacao; alucinacoes visuais mais comuns que auditivas"
          },
          {
            "Condicao": "Transtorno de estresse agudo",
            "Chave de Diferenciacao": "Historia de trauma; sem deficit cognitivo objetivo oscilante"
          },
          {
            "Condicao": "Transtorno facticio/simulacao",
            "Chave de Diferenciacao": "Ausencia de condicao medica/substancia etiologica; apresentacao atipica"
          }
        ],
        "perguntas_chave_entrevista": [
          {
            "numero": 1,
            "texto": "O paciente teve mudanca aguda no estado mental nas ultimas horas ou dias?"
          },
          {
            "numero": 2,
            "texto": "Ha oscilacao do nivel de consciencia ao longo do dia (melhora/deterioracao)?"
          },
          {
            "numero": 3,
            "texto": "O paciente consegue manter a atencao em uma conversa? Precisa repetir perguntas?"
          },
          {
            "numero": 4,
            "texto": "Ha desorientacao para tempo, lugar ou pessoa?"
          },
          {
            "numero": 5,
            "texto": "Ha evidencias de alucinacoes ou ilusoes (especialmente visuais)?"
          },
          {
            "numero": 6,
            "texto": "O paciente esta confuso, distraido, com pensamento desorganizado?"
          },
          {
            "numero": 7,
            "texto": "Ha historia de infeccao, uso de novo medicamento, abstinencia de substancia, ou toxina?"
          },
          {
            "numero": 8,
            "texto": "Ha condicao medica aguda ou exacerbada recentemente?"
          }
        ],
        "procedimentos_exame": "- Avaliar nivel de consciencia (alerta, letargico, estuporoso).\n- Testar atencao sustentada (digitos, meses do ano ao contrario).\n- Verificar orientacao temporal, espacial, pessoal.\n- Rastrear causas medicas: exames laboratoriais, medicacoes atuais, sinais vitais.\n- NAO diagnosticar delirium no contexto de coma (nivel de excitacao insuficiente).",
        "ui": {}
      },
      "super_enrichment_source": "dsm/output/json_super_adicionado/delirium.json",
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
