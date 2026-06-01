import { TranstornoDSMSchema, type TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import { parseGeneratedDiseaseData } from "@/infra/validation-helpers";

// Dados brutos normalizados da release DSM operacional
const rawData = {
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_escoriacao",
    "nome_completo": "Transtorno de Escoriação (Skin-Picking)",
    "sigla": "",
    "capitulo_id": "06",
    "capitulo": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
    "grupo": null,
    "versao_complementar_existe": false,
    "sinonimos_historicos": [],
    "faixa_etaria_alvo": "ambos",
    "codigo": {
      "cid10": "L98.1",
      "cid11": "6B26",
      "dsm5": "698.4"
    }
  },
  "id": "transtorno_escoriacao",
  "item_id": "transtorno_escoriacao",
  "name": "Transtorno de Escoriação (Skin-Picking)",
  "nome_completo": "Transtorno de Escoriação (Skin-Picking)",
  "chapter_id": "06",
  "chapter_name": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
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
      "nome": "Beliscar Pele Recorrente com Lesões e Tentativas Fracassadas",
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
      "id": "sofrimento_funcional",
      "letra": "C",
      "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
      "descricao_completa": "Causa sofrimento clinicamente significativo ou prejuízo funcional.",
      "obrigatorio": true
    },
    {
      "id": "exclusao_medica_outros",
      "letra": "D",
      "rotulo": "Não atribuível a substância, CMG ou outro transtorno",
      "descricao_completa": "Não atribuível a efeitos de substância ou condição médica dermatológica; não mais bem explicado por outro transtorno mental.",
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
      "id": "social",
      "label": "Funcionamento Social (vergonha)"
    },
    {
      "id": "saude",
      "label": "Saúde Dermatológica"
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Tricotilomania",
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
      "condicao": "TOC",
      "ponto_distincao": "TOC: beliscar em resposta a obsessões específicas; escoriação: comportamento sem obsessão subjacente típica.",
      "pertence_a_classe": true
    }
  ],
  "perguntas_chave": [],
  "key_questions": [],
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Bimodal: ~10 anos e início na adolescência/adulto jovem",
    "trajetoria": "Crônico; pode flutuar com estresse.",
    "prognostico": "Habit Reversal Training eficaz; N-acetilcisteína como adjuvante."
  },
  "prevalencia": {
    "populacao_geral": "1,4% (estimativa adultos)",
    "proporcao_sexo": "Mais comum em mulheres (~75%)",
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
  "especificadores": [],
  "template_prontuario": {
    "titulo": "",
    "texto": "",
    "campos": []
  },
  "metadados_globais": {
    "fonte_capitulo_md": "06_transtorno_obsessivo_compulsivo_transtornos_relacionados.md",
    "fonte_inventario_md": null,
    "data_extracao": "2026-05-31",
    "modelo_agente": "antigravity-gemini",
    "lacunas_globais": [
      "variacao_cultural"
    ],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "instrumentos_complementares": [],
  "raw_document": {
    "$schema_version": "1.0.0",
    "meta": {
      "id": "transtorno_escoriacao",
      "nome_completo": "Transtorno de Escoriação (Skin-Picking)",
      "sigla": "",
      "capitulo_id": "06",
      "capitulo": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
      "grupo": null,
      "versao_complementar_existe": false,
      "sinonimos_historicos": [
        "Excoriação neurótica",
        "Dermatillomania"
      ],
      "faixa_etaria_alvo": "ambos",
      "codigo": {
        "cid10": "L98.1",
        "cid11": "6B26",
        "dsm5": "698.4"
      }
    },
    "id": "transtorno_escoriacao",
    "item_id": "transtorno_escoriacao",
    "name": "Transtorno de Escoriação (Skin-Picking)",
    "nome_completo": "Transtorno de Escoriação (Skin-Picking)",
    "chapter_id": "06",
    "chapter_name": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
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
        "nome": "Beliscar Pele Recorrente com Lesões e Tentativas Fracassadas",
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
        "id": "sofrimento_funcional",
        "letra": "C",
        "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
        "descricao_completa": "Causa sofrimento clinicamente significativo ou prejuízo funcional.",
        "obrigatorio": true
      },
      {
        "id": "exclusao_medica_outros",
        "letra": "D",
        "rotulo": "Não atribuível a substância, CMG ou outro transtorno",
        "descricao_completa": "Não atribuível a efeitos de substância ou condição médica dermatológica; não mais bem explicado por outro transtorno mental.",
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
        "id": "social",
        "label": "Funcionamento Social (vergonha)"
      },
      {
        "id": "saude",
        "label": "Saúde Dermatológica"
      }
    ],
    "comorbidades_frequentes": [
      {
        "condicao": "Tricotilomania",
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
        "condicao": "TOC",
        "ponto_distincao": "TOC: beliscar em resposta a obsessões específicas; escoriação: comportamento sem obsessão subjacente típica.",
        "pertence_a_classe": true
      }
    ],
    "perguntas_chave": [],
    "key_questions": [],
    "curso_desenvolvimento": {
      "idade_inicio_tipica": "Bimodal: ~10 anos e início na adolescência/adulto jovem",
      "trajetoria": "Crônico; pode flutuar com estresse.",
      "prognostico": "Habit Reversal Training eficaz; N-acetilcisteína como adjuvante."
    },
    "prevalencia": {
      "populacao_geral": "1,4% (estimativa adultos)",
      "proporcao_sexo": "Mais comum em mulheres (~75%)",
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
    "especificadores": [],
    "template_prontuario": {
      "titulo": "",
      "texto": "",
      "campos": []
    },
    "metadados_globais": {
      "fonte_capitulo_md": "06_transtorno_obsessivo_compulsivo_transtornos_relacionados.md",
      "fonte_inventario_md": null,
      "data_extracao": "2026-05-31",
      "modelo_agente": "antigravity-gemini",
      "lacunas_globais": [
        "variacao_cultural"
      ],
      "inconsistencias_detectadas": [],
      "notas_agente_globais": null,
      "revisao_humana_necessaria": false
    },
    "instrumentos_complementares": [],
    "raw_document": {
      "$schema_version": "1.0.0",
      "meta": {
        "id": "transtorno_escoriacao",
        "nome_completo": "Transtorno de Escoriação (Skin-Picking)",
        "sigla": null,
        "codigo": {
          "dsm5": "698.4",
          "cid10": "L98.1",
          "cid11": "6B26"
        },
        "capitulo": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
        "capitulo_id": "06",
        "grupo": null,
        "faixa_etaria_alvo": "ambos",
        "versao_complementar_existe": false,
        "sinonimos_historicos": [
          "Excoriação neurótica",
          "Dermatillomania"
        ]
      },
      "estrutura_geral": "monothetic_puro",
      "clusters_sintomas": [
        {
          "id": "A_B",
          "nome": "Beliscar Pele Recorrente com Lesões e Tentativas Fracassadas",
          "tipo": "monothetic_obrigatorio",
          "limiar": null,
          "ancora_obrigatoria": null,
          "sintomas": [
            {
              "id": "A1",
              "rotulo": "Beliscar a pele de forma recorrente causando lesões",
              "desc": "Beliscar ou escoriar a pele de forma recorrente, resultando em lesões cutâneas.",
              "pergunta": "Você belisca repetidamente a pele (rosto, mãos, braços) causando feridas ou cicatrizes?",
              "exemplos_clinicos": [
                "Feridas abertas no rosto",
                "Cicatrizes nos braços"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "B1",
              "rotulo": "Tentativas repetidas de parar o comportamento",
              "desc": "Tentativas repetidas de parar ou diminuir o comportamento de beliscar a pele.",
              "pergunta": "Você já tentou parar de beliscar a pele sem conseguir?",
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
          "id": "sofrimento_funcional",
          "letra": "C",
          "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
          "tipo": "prejuizo_funcional",
          "ui_widget": "toggle_com_justificativa_obrigatoria",
          "obrigatorio": true,
          "icone_fa": "fa-exclamation-circle",
          "ddx_sugeridos": [],
          "descricao_completa": "Causa sofrimento clinicamente significativo ou prejuízo funcional.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "exclusao_medica_outros",
          "letra": "D",
          "rotulo": "Não atribuível a substância, CMG ou outro transtorno",
          "tipo": "exclusao_diagnostica",
          "ui_widget": "toggle_simples",
          "obrigatorio": true,
          "icone_fa": "fa-ban",
          "ddx_sugeridos": [
            "scabiose",
            "psoriase",
            "toc"
          ],
          "descricao_completa": "Não atribuível a efeitos de substância ou condição médica dermatológica; não mais bem explicado por outro transtorno mental.",
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
            "descritor": "Poucos sintomas; sofrimento manejável."
          },
          {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "Sintomas e prejuízo intermediários."
          },
          {
            "id": "grave",
            "label": "Grave",
            "descritor": "Muitos sintomas; prejuízo funcional acentuado."
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
          "id": "social",
          "label": "Funcionamento Social (vergonha)",
          "icone_fa": "fa-users",
          "relevante_para": "transversal"
        },
        {
          "id": "saude",
          "label": "Saúde Dermatológica",
          "icone_fa": "fa-hospital",
          "relevante_para": "transversal"
        }
      ],
      "diagnostico_diferencial": [
        {
          "condicao": "TOC",
          "ponto_distincao": "TOC: beliscar em resposta a obsessões específicas; escoriação: comportamento sem obsessão subjacente típica.",
          "pertence_a_classe": true
        }
      ],
      "comorbidades_frequentes": [
        {
          "condicao": "Tricotilomania",
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
        "populacao_geral": "1,4% (estimativa adultos)",
        "proporcao_sexo": "Mais comum em mulheres (~75%)",
        "variacoes_culturais": null,
        "notas": null,
        "metadados": {
          "completo": false,
          "lacunas": [
            "variacao_cultural"
          ],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "curso_desenvolvimento": {
        "idade_inicio_tipica": "Bimodal: ~10 anos e início na adolescência/adulto jovem",
        "trajetoria": "Crônico; pode flutuar com estresse.",
        "prognostico": "Habit Reversal Training eficaz; N-acetilcisteína como adjuvante.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "template_prontuario": {
        "cabecalho": "## Avaliação do Transtorno de Escoriação - {nome_paciente}",
        "rodape_metodologico": "Anamnese clínica com base nos critérios DSM-5 (698.4 / L98.1)."
      },
      "metadados_globais": {
        "fonte_capitulo_md": "06_transtorno_obsessivo_compulsivo_transtornos_relacionados.md",
        "fonte_inventario_md": null,
        "data_extracao": "2026-05-31",
        "modelo_agente": "antigravity-gemini",
        "lacunas_globais": [
          "variacao_cultural"
        ],
        "inconsistencias_detectadas": [],
        "notas_agente_globais": null,
        "revisao_humana_necessaria": false
      },
      "id": "transtorno_escoriacao",
      "category": "FULL",
      "ui_mode": "structured_full",
      "render_structured_interview": true,
      "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [],
        "diagnostic_rule": "Criterios descritivos para TRANSTORNO DE ESCORIACAO / SKIN-PICKING conforme DSM-5",
        "clusters": [],
        "duration": null,
        "age_onset": null,
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
          "Voce belisca sua pele de forma recorrente, deixando marcas ou lesoes?",
          "Quais areas do corpo voce belisca mais?",
          "Voce ja tentou parar ou reduzir e nao conseguiu?",
          "Voce belisca por ansiedade, tedio, ou sem perceber?",
          "Voce belisca para melhorar algum defeito da pele?",
          "Ja teve infeccoes ou cicatrizes por causa do beliscar?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### TRANSTORNO DE ESCORIACAO / SKIN-PICKING",
          "patches_applied": []
        },
        "category": "FULL",
        "ui_mode": "structured_full",
        "render_structured_interview": true
      },
      "codigo_dsm5": "698.4",
      "codigo_cid10": "L98.1",
      "faixa_etaria_alvo": "ambos",
      "versao_complementar_existe": false,
      "inventario_clinico": {
        "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 698.4 (L98.1)",
        "estrutura_efetiva": "- **Estrutura efetiva:**",
        "notas_clinicas": "- **Notas:**"
      },
      "codigo_cid11": "6B26",
      "super_enrichment": {
        "id": "transtorno_escoriacao",
        "nome_original": "TRANSTORNO DE ESCORIACAO",
        "comorbidades_frequentes": [
          {
            "condicao": "Tricotilomania",
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
            "condicao": "TOC",
            "ponto_distincao": "TOC: beliscar em resposta a obsessões específicas; escoriação: comportamento sem obsessão subjacente típica.",
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
          "populacao_geral": "1,4% (estimativa adultos)",
          "proporcao_sexo": "Mais comum em mulheres (~75%)",
          "variacoes_culturais": null
        },
        "curso_desenvolvimento": {
          "idade_inicio_tipica": "Bimodal: ~10 anos e início na adolescência/adulto jovem",
          "trajetoria": "Crônico; pode flutuar com estresse.",
          "prognostico": "Habit Reversal Training eficaz; N-acetilcisteína como adjuvante."
        },
        "instrumentos_complementares": [],
        "identificacao": {},
        "nucleo_diagnostico": "Beliscar a propria pele de forma **recorrente**, resultando em **lesoes cutaneas**, com tentativas repetidas de parar.",
        "criterios_obrigatorios": [
          {
            "id": "completo",
            "texto": "- **A:** Beliscar a pele de forma recorrente, resultando em lesoes.\n- **B:** Tentativas repetidas de reduzir ou parar.\n- **C:** Causa sofrimento clinicamente significativo ou prejuizo funcional.\n- **D:** Nao se deve a efeitos fisiologicos de substancia ou condicao medica (escabiose).\n- **E:** Nao melhor explicado por outro transtorno mental (delirios/alucinacoes, BDD, estereotipias, autolesao nao suicida)."
          }
        ],
        "caracteristicas_chave": [
          "Locais mais comuns:",
          "Instrumentos:",
          "Padroes:",
          "Duracao:",
          "Complicacoes medicas:"
        ],
        "diferenciais_criticos": [
          "**BDD:** Beliscar para melhorar defeito percebido = BDD",
          "**TOC:** Lavagem excessiva por contaminacao = TOC (nao escoriacao)",
          "**Transtorno psicotico:** Beliscar por delirio (parasitose) ou alucinacao tatil = psicose",
          "**Estereotipias neurodesenvolvimentais:** Inicio precoce, associado a TEA/PE",
          "**Autolesao nao suicida:** Intencao de causar dano a si = autolesao, nao escoriacao",
          "**Transtorno facticio:** Lesao por comportamento enganoso = facticio",
          "**Substancia:** Cocaina pode induzir beliscar",
          "**Condicao dermatologica:** Escabiose, acne podem precipitar; diferenciar se beliscar e independente"
        ],
        "perguntas_chave": "1. \"Voce belisca sua pele de forma recorrente, deixando marcas ou lesoes?\"\n2. \"Quais areas do corpo voce belisca mais?\"\n3. \"Voce ja tentou parar ou reduzir e nao conseguiu?\"\n4. \"Voce belisca por ansiedade, tedio, ou sem perceber?\"\n5. \"Voce belisca para melhorar algum defeito da pele?\" (excluir BDD)\n6. \"Ja teve infeccoes ou cicatrizes por causa do beliscar?\"",
        "ui": {}
      },
      "super_enrichment_source": "dsm/output/json_super_adicionado/transtorno_escoriacao.json",
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
