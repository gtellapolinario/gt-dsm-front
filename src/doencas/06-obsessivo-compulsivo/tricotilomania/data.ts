import { TranstornoDSMSchema, type TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import { parseGeneratedDiseaseData } from "@/infra/validation-helpers";

// Dados brutos normalizados da release DSM operacional
const rawData = {
  "$schema_version": "1.0.0",
  "meta": {
    "id": "tricotilomania",
    "nome_completo": "Tricotilomania (Transtorno de Arrancar o Cabelo)",
    "sigla": "",
    "capitulo_id": "06",
    "capitulo": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
    "grupo": null,
    "versao_complementar_existe": false,
    "sinonimos_historicos": [],
    "faixa_etaria_alvo": "ambos",
    "codigo": {
      "cid10": "F63.3",
      "cid11": "6B25",
      "dsm5": "312.39"
    }
  },
  "id": "tricotilomania",
  "item_id": "tricotilomania",
  "name": "Tricotilomania (Transtorno de Arrancar o Cabelo)",
  "nome_completo": "Tricotilomania (Transtorno de Arrancar o Cabelo)",
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
      "nome": "Arrancar Cabelos Recorrente com Tentativas Fracassadas de Parar",
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
      "descricao_completa": "O arrancar cabelos causa sofrimento clinicamente significativo ou prejuízo no funcionamento.",
      "obrigatorio": true
    },
    {
      "id": "exclusao_medica_outros",
      "letra": "D",
      "rotulo": "Não atribuível a condição médica ou outro transtorno mental",
      "descricao_completa": "Não atribuível a condição dermatológica nem mais bem explicado por outro transtorno mental.",
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
      "label": "Saúde Dermatológica/Capilar"
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno de Escoriação",
      "frequencia": "alta",
      "nota": "None"
    },
    {
      "condicao": "TOC",
      "frequencia": "moderada",
      "nota": "None"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "TOC",
      "ponto_distincao": "TOC: compulsões em resposta a obsessões específicas; tricotilomania: comportamento sem pensamento obsessivo subjacente.",
      "pertence_a_classe": true
    }
  ],
  "perguntas_chave": [],
  "key_questions": [],
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Pico na pré-adolescência (~12–13 anos); pode ser crônico se não tratado",
    "trajetoria": "Crônico com flutuações; pode remitir na gravidez.",
    "prognostico": "Responde a TCC (Habit Reversal Training) e N-acetilcisteína."
  },
  "prevalencia": {
    "populacao_geral": "1–2% (prevalência de 12 meses)",
    "proporcao_sexo": "10:1 mulheres:homens em amostras clínicas; mais equilibrado na infância",
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
      "id": "tricotilomania",
      "nome_completo": "Tricotilomania (Transtorno de Arrancar o Cabelo)",
      "sigla": "",
      "capitulo_id": "06",
      "capitulo": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
      "grupo": null,
      "versao_complementar_existe": false,
      "sinonimos_historicos": [
        "Hair-pulling disorder"
      ],
      "faixa_etaria_alvo": "ambos",
      "codigo": {
        "cid10": "F63.3",
        "cid11": "6B25",
        "dsm5": "312.39"
      }
    },
    "id": "tricotilomania",
    "item_id": "tricotilomania",
    "name": "Tricotilomania (Transtorno de Arrancar o Cabelo)",
    "nome_completo": "Tricotilomania (Transtorno de Arrancar o Cabelo)",
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
        "nome": "Arrancar Cabelos Recorrente com Tentativas Fracassadas de Parar",
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
        "descricao_completa": "O arrancar cabelos causa sofrimento clinicamente significativo ou prejuízo no funcionamento.",
        "obrigatorio": true
      },
      {
        "id": "exclusao_medica_outros",
        "letra": "D",
        "rotulo": "Não atribuível a condição médica ou outro transtorno mental",
        "descricao_completa": "Não atribuível a condição dermatológica nem mais bem explicado por outro transtorno mental.",
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
        "label": "Saúde Dermatológica/Capilar"
      }
    ],
    "comorbidades_frequentes": [
      {
        "condicao": "Transtorno de Escoriação",
        "frequencia": "alta",
        "nota": "None"
      },
      {
        "condicao": "TOC",
        "frequencia": "moderada",
        "nota": "None"
      }
    ],
    "diagnostico_diferencial": [
      {
        "condicao": "TOC",
        "ponto_distincao": "TOC: compulsões em resposta a obsessões específicas; tricotilomania: comportamento sem pensamento obsessivo subjacente.",
        "pertence_a_classe": true
      }
    ],
    "perguntas_chave": [],
    "key_questions": [],
    "curso_desenvolvimento": {
      "idade_inicio_tipica": "Pico na pré-adolescência (~12–13 anos); pode ser crônico se não tratado",
      "trajetoria": "Crônico com flutuações; pode remitir na gravidez.",
      "prognostico": "Responde a TCC (Habit Reversal Training) e N-acetilcisteína."
    },
    "prevalencia": {
      "populacao_geral": "1–2% (prevalência de 12 meses)",
      "proporcao_sexo": "10:1 mulheres:homens em amostras clínicas; mais equilibrado na infância",
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
        "id": "tricotilomania",
        "nome_completo": "Tricotilomania (Transtorno de Arrancar o Cabelo)",
        "sigla": null,
        "codigo": {
          "dsm5": "312.39",
          "cid10": "F63.3",
          "cid11": "6B25"
        },
        "capitulo": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
        "capitulo_id": "06",
        "grupo": null,
        "faixa_etaria_alvo": "ambos",
        "versao_complementar_existe": false,
        "sinonimos_historicos": [
          "Hair-pulling disorder"
        ]
      },
      "estrutura_geral": "monothetic_puro",
      "clusters_sintomas": [
        {
          "id": "A_B",
          "nome": "Arrancar Cabelos Recorrente com Tentativas Fracassadas de Parar",
          "tipo": "monothetic_obrigatorio",
          "limiar": null,
          "ancora_obrigatoria": null,
          "sintomas": [
            {
              "id": "A1",
              "rotulo": "Arrancar cabelos recorrente resultando em perda",
              "desc": "Arrancar cabelos recorrente resultando em perda de cabelo.",
              "pergunta": "Você arranca repetidamente cabelos (do couro cabeludo, sobrancelhas, cílios ou outras áreas) causando queda visível?",
              "exemplos_clinicos": [
                "Áreas de alopecia no couro cabeludo",
                "Cílios ausentes"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "B1",
              "rotulo": "Tentativas repetidas de parar ou diminuir o comportamento",
              "desc": "O indivíduo fez tentativas repetidas de diminuir ou parar de arrancar cabelos.",
              "pergunta": "Você já tentou parar de arrancar o cabelo sem conseguir?",
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
          "descricao_completa": "O arrancar cabelos causa sofrimento clinicamente significativo ou prejuízo no funcionamento.",
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
          "rotulo": "Não atribuível a condição médica ou outro transtorno mental",
          "tipo": "exclusao_diagnostica",
          "ui_widget": "toggle_simples",
          "obrigatorio": true,
          "icone_fa": "fa-ban",
          "ddx_sugeridos": [
            "dermatite",
            "toc",
            "transtorno_psicose"
          ],
          "descricao_completa": "Não atribuível a condição dermatológica nem mais bem explicado por outro transtorno mental.",
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
          "label": "Saúde Dermatológica/Capilar",
          "icone_fa": "fa-hospital",
          "relevante_para": "transversal"
        }
      ],
      "diagnostico_diferencial": [
        {
          "condicao": "TOC",
          "ponto_distincao": "TOC: compulsões em resposta a obsessões específicas; tricotilomania: comportamento sem pensamento obsessivo subjacente.",
          "pertence_a_classe": true
        }
      ],
      "comorbidades_frequentes": [
        {
          "condicao": "Transtorno de Escoriação",
          "frequencia": "alta",
          "nota": null
        },
        {
          "condicao": "TOC",
          "frequencia": "moderada",
          "nota": null
        }
      ],
      "instrumentos_complementares": [],
      "prevalencia": {
        "populacao_geral": "1–2% (prevalência de 12 meses)",
        "proporcao_sexo": "10:1 mulheres:homens em amostras clínicas; mais equilibrado na infância",
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
        "idade_inicio_tipica": "Pico na pré-adolescência (~12–13 anos); pode ser crônico se não tratado",
        "trajetoria": "Crônico com flutuações; pode remitir na gravidez.",
        "prognostico": "Responde a TCC (Habit Reversal Training) e N-acetilcisteína.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "template_prontuario": {
        "cabecalho": "## Avaliação da Tricotilomania - {nome_paciente}",
        "rodape_metodologico": "Anamnese clínica com base nos critérios DSM-5 (312.39 / F63.3)."
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
      "id": "tricotilomania",
      "category": "FULL",
      "ui_mode": "structured_full",
      "render_structured_interview": true,
      "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [],
        "diagnostic_rule": "Criterios descritivos para TRICOTILOMANIA / TRANSTORNO DE ARRANCAR O CABELO conforme DSM-5",
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
          "Voce arranca seus cabelos de forma recorrente?",
          "Isso ja causou perda visivel de cabelo ou calvicie em areas?",
          "Voce ja tentou parar ou reduzir e nao conseguiu?",
          "Voce arranca por ansiedade, tedio, ou sem perceber?",
          "Voce sente alivio ou prazer quando arranca?",
          "Voce engole os cabelos depois de arranca-los (tricofagia)?",
          "O arrancar e para melhorar algum defeito que voce percebe?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### TRICOTILOMANIA / TRANSTORNO DE ARRANCAR O CABELO",
          "patches_applied": []
        },
        "category": "FULL",
        "ui_mode": "structured_full",
        "render_structured_interview": true
      },
      "codigo_dsm5": "312.39",
      "codigo_cid10": "F63.3",
      "faixa_etaria_alvo": "ambos",
      "versao_complementar_existe": false,
      "inventario_clinico": {
        "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 312.39 (F63.3)",
        "estrutura_efetiva": "- **Estrutura efetiva:**",
        "notas_clinicas": "- **Notas:**"
      },
      "codigo_cid11": "6B25",
      "super_enrichment": {
        "id": "tricotilomania",
        "nome_original": "TRICOTILOMANIA",
        "comorbidades_frequentes": [
          {
            "condicao": "Transtorno de Escoriação",
            "frequencia": "alta",
            "nota": null
          },
          {
            "condicao": "TOC",
            "frequencia": "moderada",
            "nota": null
          }
        ],
        "diagnostico_diferencial": [
          {
            "condicao": "TOC",
            "ponto_distincao": "TOC: compulsões em resposta a obsessões específicas; tricotilomania: comportamento sem pensamento obsessivo subjacente.",
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
          "populacao_geral": "1–2% (prevalência de 12 meses)",
          "proporcao_sexo": "10:1 mulheres:homens em amostras clínicas; mais equilibrado na infância",
          "variacoes_culturais": null
        },
        "curso_desenvolvimento": {
          "idade_inicio_tipica": "Pico na pré-adolescência (~12–13 anos); pode ser crônico se não tratado",
          "trajetoria": "Crônico com flutuações; pode remitir na gravidez.",
          "prognostico": "Responde a TCC (Habit Reversal Training) e N-acetilcisteína."
        },
        "instrumentos_complementares": [],
        "identificacao": {},
        "nucleo_diagnostico": "Arrancar o proprio cabelo de forma **recorrente**, resultando em **perda de cabelo**, com tentativas repetidas de parar.",
        "criterios_obrigatorios": [
          {
            "id": "completo",
            "texto": "- **A:** Arrancar o proprio cabelo de forma recorrente, resultando em perda de cabelo.\n- **B:** Tentativas repetidas de reduzir ou parar o comportamento.\n- **C:** Causa sofrimento clinicamente significativo ou prejuizo funcional.\n- **D:** Nao se deve a condicao medica (dermatologica).\n- **E:** Nao melhor explicado por outro transtorno mental (ex.: BDD, tentativa de melhorar aparencia)."
          }
        ],
        "caracteristicas_chave": [
          "Locais mais comuns:",
          "Padroes:",
          "Precedentes:",
          "Consequencia:",
          "Comportamentos associados:"
        ],
        "diferenciais_criticos": [
          "**BDD:** Arrancar pelo para melhorar defeito percebido = BDD, nao tricotilomania",
          "**TOC:** Arrancar por ritual de simetria = TOC, nao tricotilomania",
          "**Tique:** Tiques raramente levam a perda de cabelo",
          "**Estereotipias neurodesenvolvimentais:** Inicio precoce, padrao diferente",
          "**Alopecia dermatologica:** Negacao de arrancar, exame dermatoscopico",
          "**Remocao estetica normal:** Depilacao, arrancar por estetica nao conta"
        ],
        "perguntas_chave": "1. \"Voce arranca seus cabelos de forma recorrente?\"\n2. \"Isso ja causou perda visivel de cabelo ou calvicie em areas?\"\n3. \"Voce ja tentou parar ou reduzir e nao conseguiu?\"\n4. \"Voce arranca por ansiedade, tedio, ou sem perceber?\"\n5. \"Voce sente alivio ou prazer quando arranca?\"\n6. \"Voce engole os cabelos depois de arranca-los (tricofagia)?\"\n7. \"O arrancar e para melhorar algum defeito que voce percebe?\" (excluir BDD)",
        "ui": {}
      },
      "super_enrichment_source": "dsm/output/json_super_adicionado/tricotilomania.json",
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
