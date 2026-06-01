import { TranstornoDSMSchema, type TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import { parseGeneratedDiseaseData } from "@/infra/validation-helpers";

// Dados brutos normalizados da release DSM operacional
const rawData = {
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_esquizoafetivo",
    "nome_completo": "Transtorno Esquizoafetivo",
    "sigla": "",
    "capitulo_id": "02",
    "capitulo": "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
    "grupo": null,
    "versao_complementar_existe": false,
    "sinonimos_historicos": [],
    "faixa_etaria_alvo": "ambos",
    "codigo": {
      "cid10": "F25.9",
      "cid11": "6A21",
      "dsm5": "295.70"
    }
  },
  "id": "transtorno_esquizoafetivo",
  "item_id": "transtorno_esquizoafetivo",
  "name": "Transtorno Esquizoafetivo",
  "nome_completo": "Transtorno Esquizoafetivo",
  "chapter_id": "02",
  "chapter_name": "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
  "category": "FULL",
  "estrutura_diagnostica": "conjuncao_temporal_complexa",
  "estrutura_geral": "criterios_sintomaticos",
  "ui_mode": "structured_full",
  "severity_type": "dimensional_psicose",
  "has_formal_severity": true,
  "render_structured_interview": true,
  "diagnostic_rule": "",
  "clusters_sintomas": [
    {
      "id": "A",
      "nome": "Sintomas da Fase Ativa (Critério A Esquizofrenia)",
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
        }
      ]
    },
    {
      "id": "B",
      "nome": "Sintoma de Episódio de Humor Maior",
      "descricao": "",
      "sintomas": [
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
      "id": "delirios_sem_humor",
      "letra": "B",
      "rotulo": "Psicose sem humor >= 2 semanas",
      "descricao_completa": "Delírios ou alucinações na ausência de um episódio de humor maior (depressivo ou maníaco) por pelo menos duas semanas em algum momento durante a duração total da doença ao longo da vida.",
      "obrigatorio": true
    },
    {
      "id": "proporcao_humor",
      "letra": "C",
      "rotulo": "Humor presente na maior parte da doença",
      "descricao_completa": "Os sintomas que satisfazem os critérios para um episódio de humor maior estão presentes na maior parte da duração total das fases ativa e residual do período de doença.",
      "obrigatorio": true
    },
    {
      "id": "exclusao_substancia_esquizoafetivo",
      "letra": "D",
      "rotulo": "Não atribuível a substância ou condição médica",
      "descricao_completa": "A perturbação não é atribuível aos efeitos de uma substância (droga de abuso, medicamento) ou a outra condição médica.",
      "obrigatorio": true
    }
  ],
  "gravidade": {
    "tipo": "dimensional_psicose",
    "presente": true,
    "has_formal_severity": true,
    "regra_atribuicao": "",
    "niveis": [],
    "dominios": []
  },
  "dominios_impacto": [
    {
      "id": "social",
      "label": "Funcionamento Social e Interpessoal"
    },
    {
      "id": "trabalho",
      "label": "Desempenho Ocupacional"
    }
  ],
  "comorbidades_frequentes": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Esquizofrenia",
      "ponto_distincao": "Na esquizofrenia, os sintomas de humor não estão presentes na maior parte da duração total da doença ou a psicose sem humor dura menos de 2 semanas.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno Depressivo ou Bipolar com Características Psicóticas",
      "ponto_distincao": "Diferencia-se pela ausência de delírios ou alucinações na ausência de episódios de humor por pelo menos duas semanas.",
      "pertence_a_classe": false
    }
  ],
  "perguntas_chave": [],
  "key_questions": [],
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Início no jovem adulto",
    "trajetoria": "A proporção relativa de sintomas de humor e psicose pode mudar ao longo do tempo. O prognóstico é ligeiramente melhor que o da esquizofrenia, mas geralmente pior que o de transtornos de humor isolados.",
    "prognostico": "O prejuízo ocupacional e social é frequente, necessitando intervenção de longo prazo."
  },
  "prevalencia": {
    "populacao_geral": "Aproximadamente 0,3% ao longo da vida.",
    "proporcao_sexo": "Mais comum em indivíduos do sexo feminino, impulsionado pelo tipo depressivo.",
    "variacoes_culturais": "None",
    "notas": "O risco de suicídio ao longo da vida é de 5%, similar ao da esquizofrenia."
  },
  "hierarquia": {
    "presente": true,
    "notas": "O transtorno esquizoafetivo é uma entidade complexa que engloba sintomas de humor de forma proeminente. Sua presença exclui esquizofrenia e variantes mais breves se os sintomas de humor dominarem.",
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [
      "esquizofrenia",
      "transtorno_esquizofreniforme",
      "transtorno_psicotico_breve",
      "transtorno_delirante"
    ]
  },
  "subtipos": {
    "presente": true,
    "itens": [
      true,
      "Subtipo baseado no episódio de humor",
      true,
      [
        {
          "id": "tipo_bipolar",
          "codigo": {
            "dsm5": "295.70",
            "cid10": "F25.0",
            "cid11": null
          },
          "label": "Tipo Bipolar",
          "descricao": "Aplica-se se um episódio maníaco faz parte da apresentação. Episódios depressivos maiores também podem ocorrer.",
          "sintomas_caracteristicos": []
        },
        {
          "id": "tipo_depressivo",
          "codigo": {
            "dsm5": "295.70",
            "cid10": "F25.1",
            "cid11": null
          },
          "label": "Tipo Depressivo",
          "descricao": "Aplica-se se apenas episódios depressivos maiores fazem parte da apresentação.",
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
      "id": "curso_apos_um_ano",
      "nome": "Especificador de Curso (após 1 ano de duração)",
      "descricao": ""
    },
    {
      "id": "com_catatonia",
      "nome": "Com catatonia",
      "descricao": ""
    }
  ],
  "template_prontuario": {
    "titulo": "",
    "texto": "",
    "campos": []
  },
  "metadados_globais": {
    "fonte_capitulo_md": "02_espectro_esquizofrenia_outros_transtornos_psicoticos.md",
    "fonte_inventario_md": "inventario/02_inventario.md",
    "data_extracao": "2026-05-21",
    "modelo_agente": "antigravity-ide",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "instrumentos_complementares": [],
  "raw_document": {
    "$schema_version": "1.0.0",
    "meta": {
      "id": "transtorno_esquizoafetivo",
      "nome_completo": "Transtorno Esquizoafetivo",
      "sigla": "",
      "capitulo_id": "02",
      "capitulo": "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
      "grupo": null,
      "versao_complementar_existe": false,
      "sinonimos_historicos": [],
      "faixa_etaria_alvo": "transversal",
      "codigo": {
        "cid10": "F25.9",
        "cid11": "6A21",
        "dsm5": "295.70"
      }
    },
    "id": "transtorno_esquizoafetivo",
    "item_id": "transtorno_esquizoafetivo",
    "name": "Transtorno Esquizoafetivo",
    "nome_completo": "Transtorno Esquizoafetivo",
    "chapter_id": "02",
    "chapter_name": "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
    "category": "FULL",
    "estrutura_diagnostica": "conjuncao_temporal_complexa",
    "estrutura_geral": "conjuncao_temporal_complexa",
    "ui_mode": "structured_full",
    "severity_type": "dimensional_psicose",
    "has_formal_severity": true,
    "render_structured_interview": true,
    "diagnostic_rule": "",
    "clusters_sintomas": [
      {
        "id": "A",
        "nome": "Sintomas da Fase Ativa (Critério A Esquizofrenia)",
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
          }
        ]
      },
      {
        "id": "B",
        "nome": "Sintoma de Episódio de Humor Maior",
        "descricao": "",
        "sintomas": [
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
        "id": "delirios_sem_humor",
        "letra": "B",
        "rotulo": "Psicose sem humor >= 2 semanas",
        "descricao_completa": "Delírios ou alucinações na ausência de um episódio de humor maior (depressivo ou maníaco) por pelo menos duas semanas em algum momento durante a duração total da doença ao longo da vida.",
        "obrigatorio": true
      },
      {
        "id": "proporcao_humor",
        "letra": "C",
        "rotulo": "Humor presente na maior parte da doença",
        "descricao_completa": "Os sintomas que satisfazem os critérios para um episódio de humor maior estão presentes na maior parte da duração total das fases ativa e residual do período de doença.",
        "obrigatorio": true
      },
      {
        "id": "exclusao_substancia_esquizoafetivo",
        "letra": "D",
        "rotulo": "Não atribuível a substância ou condição médica",
        "descricao_completa": "A perturbação não é atribuível aos efeitos de uma substância (droga de abuso, medicamento) ou a outra condição médica.",
        "obrigatorio": true
      }
    ],
    "gravidade": {
      "tipo": "dimensional_psicose",
      "presente": true,
      "has_formal_severity": true,
      "regra_atribuicao": "",
      "niveis": [],
      "dominios": []
    },
    "dominios_impacto": [
      {
        "id": "social",
        "label": "Funcionamento Social e Interpessoal"
      },
      {
        "id": "trabalho",
        "label": "Desempenho Ocupacional"
      }
    ],
    "comorbidades_frequentes": [],
    "diagnostico_diferencial": [
      {
        "condicao": "Esquizofrenia",
        "ponto_distincao": "Na esquizofrenia, os sintomas de humor não estão presentes na maior parte da duração total da doença ou a psicose sem humor dura menos de 2 semanas.",
        "pertence_a_classe": true
      },
      {
        "condicao": "Transtorno Depressivo ou Bipolar com Características Psicóticas",
        "ponto_distincao": "Diferencia-se pela ausência de delírios ou alucinações na ausência de episódios de humor por pelo menos duas semanas.",
        "pertence_a_classe": false
      }
    ],
    "perguntas_chave": [],
    "key_questions": [],
    "curso_desenvolvimento": {
      "idade_inicio_tipica": "Início no jovem adulto",
      "trajetoria": "A proporção relativa de sintomas de humor e psicose pode mudar ao longo do tempo. O prognóstico é ligeiramente melhor que o da esquizofrenia, mas geralmente pior que o de transtornos de humor isolados.",
      "prognostico": "O prejuízo ocupacional e social é frequente, necessitando intervenção de longo prazo."
    },
    "prevalencia": {
      "populacao_geral": "Aproximadamente 0,3% ao longo da vida.",
      "proporcao_sexo": "Mais comum em indivíduos do sexo feminino, impulsionado pelo tipo depressivo.",
      "variacoes_culturais": "None",
      "notas": "O risco de suicídio ao longo da vida é de 5%, similar ao da esquizofrenia."
    },
    "hierarquia": {
      "presente": true,
      "notas": "O transtorno esquizoafetivo é uma entidade complexa que engloba sintomas de humor de forma proeminente. Sua presença exclui esquizofrenia e variantes mais breves se os sintomas de humor dominarem.",
      "exclui_se_diagnosticado": [],
      "exclui_diagnostico_de": [
        "esquizofrenia",
        "transtorno_esquizofreniforme",
        "transtorno_psicotico_breve",
        "transtorno_delirante"
      ]
    },
    "subtipos": {
      "presente": true,
      "itens": [
        true,
        "Subtipo baseado no episódio de humor",
        true,
        [
          {
            "id": "tipo_bipolar",
            "codigo": {
              "dsm5": "295.70",
              "cid10": "F25.0",
              "cid11": null
            },
            "label": "Tipo Bipolar",
            "descricao": "Aplica-se se um episódio maníaco faz parte da apresentação. Episódios depressivos maiores também podem ocorrer.",
            "sintomas_caracteristicos": []
          },
          {
            "id": "tipo_depressivo",
            "codigo": {
              "dsm5": "295.70",
              "cid10": "F25.1",
              "cid11": null
            },
            "label": "Tipo Depressivo",
            "descricao": "Aplica-se se apenas episódios depressivos maiores fazem parte da apresentação.",
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
        "id": "curso_apos_um_ano",
        "nome": "Especificador de Curso (após 1 ano de duração)",
        "descricao": ""
      },
      {
        "id": "com_catatonia",
        "nome": "Com catatonia",
        "descricao": ""
      }
    ],
    "template_prontuario": {
      "titulo": "",
      "texto": "",
      "campos": []
    },
    "metadados_globais": {
      "fonte_capitulo_md": "02_espectro_esquizofrenia_outros_transtornos_psicoticos.md",
      "fonte_inventario_md": "inventario/02_inventario.md",
      "data_extracao": "2026-05-21",
      "modelo_agente": "antigravity-ide",
      "lacunas_globais": [],
      "inconsistencias_detectadas": [],
      "notas_agente_globais": null,
      "revisao_humana_necessaria": false
    },
    "instrumentos_complementares": [],
    "raw_document": {
      "$schema_version": "1.0.0",
      "meta": {
        "id": "transtorno_esquizoafetivo",
        "nome_completo": "Transtorno Esquizoafetivo",
        "sigla": null,
        "codigo": {
          "dsm5": "295.70",
          "cid10": "F25.9",
          "cid11": "6A21"
        },
        "capitulo": "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
        "capitulo_id": "02",
        "grupo": null,
        "faixa_etaria_alvo": "transversal",
        "versao_complementar_existe": false,
        "sinonimos_historicos": []
      },
      "estrutura_geral": "conjuncao_temporal_complexa",
      "clusters_sintomas": [
        {
          "id": "A",
          "nome": "Sintomas da Fase Ativa (Critério A Esquizofrenia)",
          "tipo": "polythetic_com_ancora",
          "limiar": {
            "adulto": 2,
            "pediatria": null
          },
          "ancora_obrigatoria": {
            "descricao": "Pelo menos um dos sintomas no cluster deve ser Delírios (A1), Alucinações (A2) ou Discurso Desorganizado (A3).",
            "ids_obrigatorios": [
              "A1",
              "A2",
              "A3"
            ],
            "n_minimo": 1
          },
          "sintomas": [
            {
              "id": "A1",
              "rotulo": "Delírios",
              "desc": "Crenças fixas e falsas não abaláveis.",
              "pergunta": "Você vivenciou ideias ou crenças persistentes e irracionais?",
              "exemplos_clinicos": [
                "Crenças de perseguição ou grandiosidade marcantes"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A2",
              "rotulo": "Alucinações",
              "desc": "Percepções reais sem estímulos físicos.",
              "pergunta": "Você ouviu ou viu coisas que pareciam reais mas que os outros não percebiam?",
              "exemplos_clinicos": [
                "Ouvir vozes nítidas na ausência de pessoas"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A3",
              "rotulo": "Discurso desorganizado",
              "desc": "Pensamento e fala desorganizados.",
              "pergunta": "Ficou difícil para você organizar as palavras de modo coerente?",
              "exemplos_clinicos": [
                "Incoerência ou descarrilamento frequente da fala"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A4",
              "rotulo": "Comportamento grosseiramente desorganizado ou catatônico",
              "desc": "Comportamento motor tolo, agressivo ou catatônico.",
              "pergunta": "Você apresentou movimentos involuntários, rigidez extrema ou agitação sem motivo?",
              "exemplos_clinicos": [
                "Posturas rígidas e bizarras ou agitação incontrolável"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A5",
              "rotulo": "Sintomas negativos",
              "desc": "Expressão emocional diminuída ou avolia.",
              "pergunta": "Sentiu falta de motivação, apatia ou diminuição das expressões faciais?",
              "exemplos_clinicos": [
                "Alogia ou expressão facial inalterada e pobre de reatividade"
              ],
              "faixa_aplicavel": null
            }
          ],
          "descricao_qualitativa": "Um período ininterrupto de doença durante o qual há um episódio de humor maior concomitante com o Critério A da esquizofrenia.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "B",
          "nome": "Sintoma de Episódio de Humor Maior",
          "tipo": "unico_obrigatorio",
          "limiar": null,
          "ancora_obrigatoria": null,
          "sintomas": [
            {
              "id": "B1",
              "rotulo": "Episódio Maníaco ou Depressivo Concomitante",
              "desc": "Período ininterrupto de doença com a concomitância de um episódio maníaco ou depressivo maior (humor deprimido obrigatório no depressivo).",
              "pergunta": "Você apresentou flutuações profundas de depressão ou mania (como excesso de energia ou tristeza paralisante) ao mesmo tempo que os sintomas de confusão mental?",
              "exemplos_clinicos": [
                "Apresentação de mania florida ou depressão grave com ideias de ruína concomitantemente aos delírios"
              ],
              "faixa_aplicavel": null
            }
          ],
          "descricao_qualitativa": "Presença concomitante de episódio maníaco ou depressivo maior (se depressivo, exige humor deprimido, não apenas anedonia).",
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
          "id": "delirios_sem_humor",
          "letra": "B",
          "rotulo": "Psicose sem humor >= 2 semanas",
          "tipo": "temporal_duracao_minima",
          "ui_widget": "toggle_com_justificativa_obrigatoria",
          "obrigatorio": true,
          "icone_fa": "fa-clock",
          "ddx_sugeridos": [],
          "descricao_completa": "Delírios ou alucinações na ausência de um episódio de humor maior (depressivo ou maníaco) por pelo menos duas semanas em algum momento durante a duração total da doença ao longo da vida.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "proporcao_humor",
          "letra": "C",
          "rotulo": "Humor presente na maior parte da doença",
          "tipo": "temporal_proporcao",
          "ui_widget": "toggle_simples",
          "obrigatorio": true,
          "icone_fa": "fa-percent",
          "ddx_sugeridos": [],
          "descricao_completa": "Os sintomas que satisfazem os critérios para um episódio de humor maior estão presentes na maior parte da duração total das fases ativa e residual do período de doença.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "exclusao_substancia_esquizoafetivo",
          "letra": "D",
          "rotulo": "Não atribuível a substância ou condição médica",
          "tipo": "exclusao_substancia_medica",
          "ui_widget": "toggle_simples",
          "obrigatorio": true,
          "icone_fa": "fa-ban",
          "ddx_sugeridos": [],
          "descricao_completa": "A perturbação não é atribuível aos efeitos de uma substância (droga de abuso, medicamento) ou a outra condição médica.",
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
        "nome": "Subtipo baseado no episódio de humor",
        "mutuamente_exclusivos": true,
        "subtipos": [
          {
            "id": "tipo_bipolar",
            "codigo": {
              "dsm5": "295.70",
              "cid10": "F25.0",
              "cid11": null
            },
            "label": "Tipo Bipolar",
            "descricao": "Aplica-se se um episódio maníaco faz parte da apresentação. Episódios depressivos maiores também podem ocorrer.",
            "sintomas_caracteristicos": []
          },
          {
            "id": "tipo_depressivo",
            "codigo": {
              "dsm5": "295.70",
              "cid10": "F25.1",
              "cid11": null
            },
            "label": "Tipo Depressivo",
            "descricao": "Aplica-se se apenas episódios depressivos maiores fazem parte da apresentação.",
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
          "id": "curso_apos_um_ano",
          "nome": "Especificador de Curso (após 1 ano de duração)",
          "tipo": "curso_temporal",
          "ortogonal": true,
          "opcoes": [
            {
              "id": "primeiro_episodio_agudo",
              "label": "Primeiro episódio, atualmente em episódio agudo",
              "codigo_adicional": null
            },
            {
              "id": "primeiro_episodio_remissao_parcial",
              "label": "Primeiro episódio, atualmente em remissão parcial",
              "codigo_adicional": null
            },
            {
              "id": "primeiro_episodio_remissao_completa",
              "label": "Primeiro episódio, atualmente em remissão completa",
              "codigo_adicional": null
            },
            {
              "id": "episodios_multiplos_agudo",
              "label": "Episódios múltiplos, atualmente em episódio agudo",
              "codigo_adicional": null
            },
            {
              "id": "episodios_multiplos_remissao_parcial",
              "label": "Episódios múltiplos, atualmente em remissão parcial",
              "codigo_adicional": null
            },
            {
              "id": "episodios_multiplos_remissao_completa",
              "label": "Episódios múltiplos, atualmente em remissão completa",
              "codigo_adicional": null
            },
            {
              "id": "continuo",
              "label": "Contínuo",
              "codigo_adicional": null
            },
            {
              "id": "nao_especificado",
              "label": "Não especificado",
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
          "id": "com_catatonia",
          "nome": "Com catatonia",
          "tipo": "booleano",
          "ortogonal": true,
          "opcoes": [],
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": "Exige o uso do código adicional 293.89 (F06.1).",
            "fonte_passada_1": true
          }
        }
      ],
      "gravidade": {
        "tipo": "dimensional_psicose",
        "sintomas_avaliados": [
          "delirios",
          "alucinacoes",
          "discurso_desorganizado",
          "comportamento_psicomotor_anormal",
          "sintomas_negativos"
        ],
        "escala": {
          "min": 0,
          "max": 4,
          "labels": [
            "Ausente",
            "Equívoco",
            "Leve",
            "Moderado",
            "Grave"
          ]
        },
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "hierarquia": {
        "presente": true,
        "exclui_se_diagnosticado": [],
        "exclui_diagnostico_de": [
          "esquizofrenia",
          "transtorno_esquizofreniforme",
          "transtorno_psicotico_breve",
          "transtorno_delirante"
        ],
        "notas": "O transtorno esquizoafetivo é uma entidade complexa que engloba sintomas de humor de forma proeminente. Sua presença exclui esquizofrenia e variantes mais breves se os sintomas de humor dominarem.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "dominios_impacto": [
        {
          "id": "social",
          "label": "Funcionamento Social e Interpessoal",
          "icone_fa": "fa-users",
          "relevante_para": "transversal"
        },
        {
          "id": "trabalho",
          "label": "Desempenho Ocupacional",
          "icone_fa": "fa-briefcase",
          "relevante_para": "transversal"
        }
      ],
      "diagnostico_diferencial": [
        {
          "condicao": "Esquizofrenia",
          "ponto_distincao": "Na esquizofrenia, os sintomas de humor não estão presentes na maior parte da duração total da doença ou a psicose sem humor dura menos de 2 semanas.",
          "pertence_a_classe": true
        },
        {
          "condicao": "Transtorno Depressivo ou Bipolar com Características Psicóticas",
          "ponto_distincao": "Diferencia-se pela ausência de delírios ou alucinações na ausência de episódios de humor por pelo menos duas semanas.",
          "pertence_a_classe": false
        }
      ],
      "comorbidades_frequentes": [],
      "instrumentos_complementares": [],
      "prevalencia": {
        "populacao_geral": "Aproximadamente 0,3% ao longo da vida.",
        "proporcao_sexo": "Mais comum em indivíduos do sexo feminino, impulsionado pelo tipo depressivo.",
        "variacoes_culturais": null,
        "notas": "O risco de suicídio ao longo da vida é de 5%, similar ao da esquizofrenia.",
        "metadados": {
          "completo": true,
          "lacunas": [
            "prevalencia.variacoes_culturais"
          ],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "curso_desenvolvimento": {
        "idade_inicio_tipica": "Início no jovem adulto",
        "trajetoria": "A proporção relativa de sintomas de humor e psicose pode mudar ao longo do tempo. O prognóstico é ligeiramente melhor que o da esquizofrenia, mas geralmente pior que o de transtornos de humor isolados.",
        "prognostico": "O prejuízo ocupacional e social é frequente, necessitando intervenção de longo prazo.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "template_prontuario": {
        "cabecalho": "## Avaliação de Transtorno Esquizoafetivo - {nome_paciente}",
        "rodape_metodologico": "Diagnóstico baseado na concomitância de episódios de humor e sintomas de fase ativa, com episódios psicóticos isolados superiores a 2 semanas."
      },
      "metadados_globais": {
        "fonte_capitulo_md": "02_espectro_esquizofrenia_outros_transtornos_psicoticos.md",
        "fonte_inventario_md": "inventario/02_inventario.md",
        "data_extracao": "2026-05-21",
        "modelo_agente": "antigravity-ide",
        "lacunas_globais": [],
        "inconsistencias_detectadas": [],
        "notas_agente_globais": null,
        "revisao_humana_necessaria": false
      },
      "id": "transtorno_esquizoafetivo",
      "category": "FULL",
      "ui_mode": "structured_full",
      "render_structured_interview": true,
      "rendering": {
        "estrutura_diagnostica": "polythetic_com_ancora",
        "criteria": [],
        "diagnostic_rule": "- Critério A (sobreposição humor + psicose) **E** Critério B (psicose isolada ≥2 semanas) **E** Critério C (humor dominante ao longo do tempo) **E** Critério D",
        "clusters": [],
        "duration": null,
        "age_onset": null,
        "functional_impairment": null,
        "exclusions": [],
        "subtypes_presentations": [
          "Tipo bipolar",
          "Tipo depressivo"
        ],
        "specifiers": [
          "Com catatonia (código adicional 293.89 F06.1)",
          "Especificadores de curso (mesmos da esquizofrenia; usar após 1 ano)",
          "Gravidade dimensional (opcional)"
        ],
        "operational_profiles": [],
        "severity": {
          "has_formal_severity": true,
          "type": "ordinal_por_dominio",
          "levels": [],
          "assignment_rule": "Escala dimensional 0-4 por dimensao (OPCIONAL)",
          "domains": [
            "delírios",
            "alucinações",
            "discurso desorganizado",
            "comportamento psicomotor anormal",
            "sintomas negativos"
          ]
        },
        "critical_differentials": [],
        "key_questions": [
          "Você já teve períodos de humor muito deprimido ou muito elevado que duraram semanas?",
          "Durante esses períodos, você também teve experiências estranhas (ouvir vozes, crenças incomuns)?",
          "Já houve momentos em que você ouvia vozes ou tinha crenças estranhas SEM estar deprimido ou eufórico?",
          "Ao longo de toda a doença, quanto tempo você passou com alterações de humor versus sem elas?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### TRANSTORNO ESQUIZOAFE TIVO",
          "patches_applied": [
            "gravidade.tem_gravidade_formal: adicionado USO_OPCIONAL=True"
          ]
        },
        "category": "FULL",
        "ui_mode": "structured_full",
        "render_structured_interview": true
      },
      "codigo_dsm5": "295.70",
      "codigo_cid10": "F25.9",
      "faixa_etaria_alvo": "transversal",
      "versao_complementar_existe": false,
      "inventario_clinico": {
        "codigo_bruto": "- **Código DSM-5 / CID-10:** 295.70 (F25.0 tipo bipolar / F25.1 tipo depressivo)",
        "estrutura_efetiva": "- **Estrutura efetiva:** A (período ininterrupto de doença com episódio depressivo maior [com humor deprimido, não só anedonia] ou maníaco concomitante ao Critério A da esquizofrenia) + B (delírios ou alucinações por >=2 semanas sem episódio de humor durante a doença ao longo da vida) + C (sintomas de humor presentes na maior parte da duração total das fases ativa e residual) + D (exclusão: substância, condição médica)",
        "notas_clinicas": "- **Notas:**"
      },
      "hierarquia_exclusao": {
        "exclui": [
          "esquizofrenia",
          "transtorno_esquizofreniforme",
          "transtorno_psicotico_breve",
          "transtorno_delirante"
        ],
        "exclui_de": [
          "esquizofrenia",
          "transtorno_esquizofreniforme",
          "transtorno_psicotico_breve",
          "transtorno_delirante"
        ],
        "notas_hierarquia": "O transtorno esquizoafetivo é uma entidade complexa que engloba sintomas de humor de forma proeminente. Sua presença exclui esquizofrenia e variantes mais breves se os sintomas de humor dominarem."
      },
      "codigo_cid11": "6A21",
      "super_enrichment": {
        "id": "transtorno_esquizoafetivo",
        "nome_original": "TRANSTORNO ESQUIZOAFE TIVO",
        "comorbidades_frequentes": [],
        "diagnostico_diferencial": [
          {
            "condicao": "Esquizofrenia",
            "ponto_distincao": "Na esquizofrenia, os sintomas de humor não estão presentes na maior parte da duração total da doença ou a psicose sem humor dura menos de 2 semanas.",
            "pertence_a_classe": true
          },
          {
            "condicao": "Transtorno Depressivo ou Bipolar com Características Psicóticas",
            "ponto_distincao": "Diferencia-se pela ausência de delírios ou alucinações na ausência de episódios de humor por pelo menos duas semanas.",
            "pertence_a_classe": false
          }
        ],
        "hierarquia": {
          "presente": true,
          "exclui_se_diagnosticado": [
            "esquizofrenia",
            "transtorno_delirante",
            "transtorno_esquizofreniforme",
            "transtorno_psicotico_breve"
          ],
          "exclui_diagnostico_de": [
            "esquizofrenia",
            "transtorno_delirante",
            "transtorno_esquizofreniforme",
            "transtorno_psicotico_breve"
          ],
          "notas": "O transtorno esquizoafetivo é uma entidade complexa que engloba sintomas de humor de forma proeminente. Sua presença exclui esquizofrenia e variantes mais breves se os sintomas de humor dominarem."
        },
        "prevalencia": {
          "populacao_geral": "Aproximadamente 0,3% ao longo da vida.",
          "proporcao_sexo": "Mais comum em indivíduos do sexo feminino, impulsionado pelo tipo depressivo.",
          "variacoes_culturais": null
        },
        "curso_desenvolvimento": {
          "idade_inicio_tipica": "Início no jovem adulto",
          "trajetoria": "A proporção relativa de sintomas de humor e psicose pode mudar ao longo do tempo. O prognóstico é ligeiramente melhor que o da esquizofrenia, mas geralmente pior que o de transtornos de humor isolados.",
          "prognostico": "O prejuízo ocupacional e social é frequente, necessitando intervenção de longo prazo."
        },
        "instrumentos_complementares": [],
        "transtorno_esquizoafe_tivo": "| Campo | Valor |\n|-------|-------|\n| **nome** | Transtorno Esquizoafetivo |\n| **categoria_operacional** | FULL |\n| **codigo_dsm5** | 295.70 (F25.0/F25.1) |\n| **codigo_cid10** | F25.0 / F25.1 |\n| **estrutura_diagnostica** | polythetic_com_ancora |",
        "criterios_obrigatorios": [
          {
            "id": "A",
            "texto": "Período ininterrupto de doença durante o qual há episódio depressivo maior OU maníaco concomitante com Critério A da esquizofrenia.\n> Nota: Episódio depressivo maior deve incluir humor deprimido (não apenas perda de interesse/prazer)."
          },
          {
            "id": "B - Ancora distintiva",
            "texto": "Delírios ou alucinações por **2 semanas ou mais** na ausência de episódio depressivo maior ou maníaco durante a duração da doença ao longo da vida."
          },
          {
            "id": "C - Dominância do humor",
            "texto": "Sintomas que satisfazem critérios para episódio de humor estão presentes na **maior parte** da duração total das fases ativa e residual da doença."
          },
          {
            "id": "D",
            "texto": "Não atribuível a efeitos de substância ou condição médica."
          }
        ],
        "regra_diagnostica": "- Critério A (sobreposição humor + psicose) **E** Critério B (psicose isolada ≥2 semanas) **E** Critério C (humor dominante ao longo do tempo) **E** Critério D",
        "subtipos": [
          {
            "Subtipo": "Tipo bipolar (F25.0)",
            "Critério": "Episódio maníaco parte da apresentação; podem ocorrer episódios depressivos"
          },
          {
            "Subtipo": "Tipo depressivo (F25.1)",
            "Critério": "Somente episódios depressivos maiores"
          }
        ],
        "especificadores": [
          "Com catatonia (código adicional 293.89 F06.1)",
          "Especificadores de curso (mesmos da esquizofrenia; usar após 1 ano)",
          "Gravidade dimensional (opcional)"
        ],
        "duracao_e_curso": "- Idade habitual de início: início da fase adulta\n- Critério C requer avaliação do CURSO TOTAL da doença (mudança do DSM-IV)\n- Prognóstico: um pouco melhor que esquizofrenia, pior que transtornos do humor",
        "diferenciais_criticos": [
          {
            "Condição": "Esquizofrenia",
            "Distinção": "Episódios de humor presentes em apenas parte MÍNIMA da duração"
          },
          {
            "Condição": "TDM com características psicóticas",
            "Distinção": "Delírios/alucinações ocorrem APENAS durante episódio de humor"
          },
          {
            "Condição": "Tipo bipolar I com psicose",
            "Distinção": "Psicose presente APENAS durante mania; nunca ≥2 semanas isolada"
          }
        ],
        "perguntas_chave": "1. \"Você já teve períodos de humor muito deprimido ou muito elevado que duraram semanas?\"\n2. \"Durante esses períodos, você também teve experiências estranhas (ouvir vozes, crenças incomuns)?\"\n3. \"Já houve momentos em que você ouvia vozes ou tinha crenças estranhas SEM estar deprimido ou eufórico?\" (Critério B - ancora)\n4. \"Ao longo de toda a doença, quanto tempo você passou com alterações de humor versus sem elas?\" (Critério C)",
        "ui": {
          "renderiza_entrevista": true,
          "modo": "structured_full",
          "observacoes": "Critério C é o mais difícil - requer história longitudinal detalhada; usar cronograma visual do curso"
        }
      },
      "super_enrichment_source": "dsm/output/json_super_adicionado/transtorno_esquizoafetivo.json",
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
