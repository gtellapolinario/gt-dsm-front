import { TranstornoDSMSchema, type TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import { parseGeneratedDiseaseData } from "@/infra/validation-helpers";

// Dados brutos normalizados da release DSM operacional
const rawData = {
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_alimentar_restritivo_evitativo",
    "nome_completo": "Transtorno Alimentar Restritivo/Evitativo",
    "sigla": "TARE",
    "capitulo_id": "10",
    "capitulo": "Transtornos Alimentares",
    "grupo": null,
    "versao_complementar_existe": false,
    "sinonimos_historicos": [],
    "faixa_etaria_alvo": "ambos",
    "codigo": {
      "cid10": "F50.8",
      "cid11": "6B83",
      "dsm5": "307.59"
    }
  },
  "id": "transtorno_alimentar_restritivo_evitativo",
  "item_id": "transtorno_alimentar_restritivo_evitativo",
  "name": "Transtorno Alimentar Restritivo/Evitativo",
  "nome_completo": "Transtorno Alimentar Restritivo/Evitativo",
  "chapter_id": "10",
  "chapter_name": "Transtornos Alimentares",
  "category": "FULL",
  "estrutura_diagnostica": "polythetic_com_ancora",
  "estrutura_geral": "criterios_sintomaticos",
  "ui_mode": "structured_full",
  "severity_type": "nao_aplica",
  "has_formal_severity": false,
  "render_structured_interview": true,
  "diagnostic_rule": "",
  "clusters_sintomas": [
    {
      "id": "A",
      "nome": "Perturbação Alimentar com Comprometimento Nutricional ou Psicossocial",
      "descricao": "",
      "sintomas": [
        {
          "id": "A_core",
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
        }
      ]
    }
  ],
  "criterios_condicionais": [
    {
      "id": "nao_cultural_nao_indisponibilidade",
      "letra": "B",
      "rotulo": "Não explicada por indisponibilidade de alimento ou prática cultural",
      "descricao_completa": "A perturbação não é mais bem explicada por indisponibilidade de alimento ou por uma prática culturalmente aceita (p. ex., jejum religioso).",
      "obrigatorio": true
    },
    {
      "id": "exclusao_anorexia_bulimia",
      "letra": "C",
      "rotulo": "Não ocorre exclusivamente durante anorexia ou bulimia; sem perturbação de peso/forma",
      "descricao_completa": "A perturbação alimentar não ocorre exclusivamente durante o curso de anorexia nervosa ou bulimia nervosa, e não há evidência de perturbação na maneira como o peso ou a forma corporal é vivenciada.",
      "obrigatorio": true
    },
    {
      "id": "exclusao_medica_outro_tm",
      "letra": "D",
      "rotulo": "Não atribuível a condição médica ou melhor explicada por outro transtorno mental",
      "descricao_completa": "A perturbação alimentar não é atribuível a uma condição médica concomitante ou mais bem explicada por outro transtorno mental. Quando ocorre no contexto de outra condição, sua gravidade excede a habitualmente associada.",
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
      "id": "nutricao",
      "label": "Estado Nutricional"
    },
    {
      "id": "social",
      "label": "Funcionamento Social e Familiar"
    },
    {
      "id": "desenvolvimento",
      "label": "Desenvolvimento e Crescimento"
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtornos de ansiedade",
      "frequencia": "alta",
      "nota": "None"
    },
    {
      "condicao": "Transtorno obsessivo-compulsivo",
      "frequencia": "alta",
      "nota": "None"
    },
    {
      "condicao": "Transtorno do espectro autista",
      "frequencia": "alta",
      "nota": "None"
    },
    {
      "condicao": "Transtorno de déficit de atenção/hiperatividade",
      "frequencia": "moderada",
      "nota": "None"
    },
    {
      "condicao": "Transtorno do desenvolvimento intelectual",
      "frequencia": "moderada",
      "nota": "None"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Anorexia nervosa",
      "ponto_distincao": "Anorexia: medo de ganhar peso e perturbação na vivência do peso/forma corporal; TARE: ausência dessas características. Os dois não devem ser diagnosticados concomitantemente.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Condições médicas (GI, alergias, malignidades)",
      "ponto_distincao": "TARE requer que a perturbação da ingesta esteja além daquela diretamente explicada pelos sintomas físicos de uma condição médica e persista após sua resolução.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno do espectro autista",
      "ponto_distincao": "TEA: comportamentos alimentares rígidos e sensibilidades sensoriais, mas nem sempre com o nível de comprometimento necessário para TARE. Diagnosticar concomitantemente apenas se todos os critérios forem satisfeitos e a alimentação demandar tratamento específico.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Fobia específica e transtorno de ansiedade social",
      "ponto_distincao": "Quando o medo de asfixia ou vômito leva a esquiva alimentar, a distinção pode ser difícil. Se o problema alimentar for o foco primário de atenção clínica, TARE é o diagnóstico apropriado.",
      "pertence_a_classe": false
    }
  ],
  "perguntas_chave": [],
  "key_questions": [],
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Lactência ou primeira infância (evitação baseada em sensibilidade sensorial tende a surgir na primeira década).",
    "trajetoria": "A evitação/restricão baseada em aspectos sensoriais é relativamente estável e duradoura. Pode persistir na idade adulta com funcionamento relativamente normal.",
    "prognostico": "Pouca evidência associando diretamente TARE e manifestação subsequente de outro transtorno alimentar."
  },
  "prevalencia": {
    "populacao_geral": "None",
    "proporcao_sexo": "Igualmente comum em ambos os sexos na lactência e primeira infância; comórbido com TEA, é mais comum no sexo masculino.",
    "variacoes_culturais": "Não deve ser diagnosticado quando a evitação estiver relacionada unicamente a práticas religiosas ou culturais específicas.",
    "notas": "Mais comum em crianças do que em adultos; pode haver grande demora entre manifestação inicial e apresentação clínica."
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
      "id": "em_remicao",
      "nome": "Em remissão",
      "descricao": ""
    }
  ],
  "template_prontuario": {
    "titulo": "",
    "texto": "",
    "campos": []
  },
  "metadados_globais": {
    "fonte_capitulo_md": "10_transtornos_alimentares.md",
    "fonte_inventario_md": null,
    "data_extracao": "2026-05-31",
    "modelo_agente": "antigravity-gemini",
    "lacunas_globais": [
      "epidemiologia"
    ],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "instrumentos_complementares": [],
  "raw_document": {
    "$schema_version": "1.0.0",
    "meta": {
      "id": "transtorno_alimentar_restritivo_evitativo",
      "nome_completo": "Transtorno Alimentar Restritivo/Evitativo",
      "sigla": "TARE",
      "capitulo_id": "10",
      "capitulo": "Transtornos Alimentares",
      "grupo": null,
      "versao_complementar_existe": false,
      "sinonimos_historicos": [],
      "faixa_etaria_alvo": "ambos",
      "codigo": {
        "cid10": "F50.8",
        "cid11": "6B83",
        "dsm5": "307.59"
      }
    },
    "id": "transtorno_alimentar_restritivo_evitativo",
    "item_id": "transtorno_alimentar_restritivo_evitativo",
    "name": "Transtorno Alimentar Restritivo/Evitativo",
    "nome_completo": "Transtorno Alimentar Restritivo/Evitativo",
    "chapter_id": "10",
    "chapter_name": "Transtornos Alimentares",
    "category": "FULL",
    "estrutura_diagnostica": "polythetic_com_ancora",
    "estrutura_geral": "polythetic_com_ancora",
    "ui_mode": "structured_full",
    "severity_type": "nao_aplica",
    "has_formal_severity": false,
    "render_structured_interview": true,
    "diagnostic_rule": "",
    "clusters_sintomas": [
      {
        "id": "A",
        "nome": "Perturbação Alimentar com Comprometimento Nutricional ou Psicossocial",
        "descricao": "",
        "sintomas": [
          {
            "id": "A_core",
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
          }
        ]
      }
    ],
    "criterios_condicionais": [
      {
        "id": "nao_cultural_nao_indisponibilidade",
        "letra": "B",
        "rotulo": "Não explicada por indisponibilidade de alimento ou prática cultural",
        "descricao_completa": "A perturbação não é mais bem explicada por indisponibilidade de alimento ou por uma prática culturalmente aceita (p. ex., jejum religioso).",
        "obrigatorio": true
      },
      {
        "id": "exclusao_anorexia_bulimia",
        "letra": "C",
        "rotulo": "Não ocorre exclusivamente durante anorexia ou bulimia; sem perturbação de peso/forma",
        "descricao_completa": "A perturbação alimentar não ocorre exclusivamente durante o curso de anorexia nervosa ou bulimia nervosa, e não há evidência de perturbação na maneira como o peso ou a forma corporal é vivenciada.",
        "obrigatorio": true
      },
      {
        "id": "exclusao_medica_outro_tm",
        "letra": "D",
        "rotulo": "Não atribuível a condição médica ou melhor explicada por outro transtorno mental",
        "descricao_completa": "A perturbação alimentar não é atribuível a uma condição médica concomitante ou mais bem explicada por outro transtorno mental. Quando ocorre no contexto de outra condição, sua gravidade excede a habitualmente associada.",
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
        "id": "nutricao",
        "label": "Estado Nutricional"
      },
      {
        "id": "social",
        "label": "Funcionamento Social e Familiar"
      },
      {
        "id": "desenvolvimento",
        "label": "Desenvolvimento e Crescimento"
      }
    ],
    "comorbidades_frequentes": [
      {
        "condicao": "Transtornos de ansiedade",
        "frequencia": "alta",
        "nota": "None"
      },
      {
        "condicao": "Transtorno obsessivo-compulsivo",
        "frequencia": "alta",
        "nota": "None"
      },
      {
        "condicao": "Transtorno do espectro autista",
        "frequencia": "alta",
        "nota": "None"
      },
      {
        "condicao": "Transtorno de déficit de atenção/hiperatividade",
        "frequencia": "moderada",
        "nota": "None"
      },
      {
        "condicao": "Transtorno do desenvolvimento intelectual",
        "frequencia": "moderada",
        "nota": "None"
      }
    ],
    "diagnostico_diferencial": [
      {
        "condicao": "Anorexia nervosa",
        "ponto_distincao": "Anorexia: medo de ganhar peso e perturbação na vivência do peso/forma corporal; TARE: ausência dessas características. Os dois não devem ser diagnosticados concomitantemente.",
        "pertence_a_classe": true
      },
      {
        "condicao": "Condições médicas (GI, alergias, malignidades)",
        "ponto_distincao": "TARE requer que a perturbação da ingesta esteja além daquela diretamente explicada pelos sintomas físicos de uma condição médica e persista após sua resolução.",
        "pertence_a_classe": false
      },
      {
        "condicao": "Transtorno do espectro autista",
        "ponto_distincao": "TEA: comportamentos alimentares rígidos e sensibilidades sensoriais, mas nem sempre com o nível de comprometimento necessário para TARE. Diagnosticar concomitantemente apenas se todos os critérios forem satisfeitos e a alimentação demandar tratamento específico.",
        "pertence_a_classe": false
      },
      {
        "condicao": "Fobia específica e transtorno de ansiedade social",
        "ponto_distincao": "Quando o medo de asfixia ou vômito leva a esquiva alimentar, a distinção pode ser difícil. Se o problema alimentar for o foco primário de atenção clínica, TARE é o diagnóstico apropriado.",
        "pertence_a_classe": false
      }
    ],
    "perguntas_chave": [],
    "key_questions": [],
    "curso_desenvolvimento": {
      "idade_inicio_tipica": "Lactência ou primeira infância (evitação baseada em sensibilidade sensorial tende a surgir na primeira década).",
      "trajetoria": "A evitação/restricão baseada em aspectos sensoriais é relativamente estável e duradoura. Pode persistir na idade adulta com funcionamento relativamente normal.",
      "prognostico": "Pouca evidência associando diretamente TARE e manifestação subsequente de outro transtorno alimentar."
    },
    "prevalencia": {
      "populacao_geral": "None",
      "proporcao_sexo": "Igualmente comum em ambos os sexos na lactência e primeira infância; comórbido com TEA, é mais comum no sexo masculino.",
      "variacoes_culturais": "Não deve ser diagnosticado quando a evitação estiver relacionada unicamente a práticas religiosas ou culturais específicas.",
      "notas": "Mais comum em crianças do que em adultos; pode haver grande demora entre manifestação inicial e apresentação clínica."
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
        "id": "em_remicao",
        "nome": "Em remissão",
        "descricao": ""
      }
    ],
    "template_prontuario": {
      "titulo": "",
      "texto": "",
      "campos": []
    },
    "metadados_globais": {
      "fonte_capitulo_md": "10_transtornos_alimentares.md",
      "fonte_inventario_md": null,
      "data_extracao": "2026-05-31",
      "modelo_agente": "antigravity-gemini",
      "lacunas_globais": [
        "epidemiologia"
      ],
      "inconsistencias_detectadas": [],
      "notas_agente_globais": null,
      "revisao_humana_necessaria": false
    },
    "instrumentos_complementares": [],
    "raw_document": {
      "$schema_version": "1.0.0",
      "meta": {
        "id": "transtorno_alimentar_restritivo_evitativo",
        "nome_completo": "Transtorno Alimentar Restritivo/Evitativo",
        "sigla": "TARE",
        "codigo": {
          "dsm5": "307.59",
          "cid10": "F50.8",
          "cid11": "6B83"
        },
        "capitulo": "Transtornos Alimentares",
        "capitulo_id": "10",
        "grupo": null,
        "faixa_etaria_alvo": "ambos",
        "versao_complementar_existe": false,
        "sinonimos_historicos": []
      },
      "estrutura_geral": "polythetic_com_ancora",
      "clusters_sintomas": [
        {
          "id": "A",
          "nome": "Perturbação Alimentar com Comprometimento Nutricional ou Psicossocial",
          "tipo": "polythetic_com_ancora",
          "limiar": {
            "adulto": 1,
            "pediatria": 1
          },
          "ancora_obrigatoria": {
            "descricao": "Pelo menos 1 entre A_core (perturbação alimentar com fracasso nutricional/energético).",
            "ids_obrigatorios": [
              "A_core"
            ],
            "n_minimo": 1
          },
          "sintomas": [
            {
              "id": "A_core",
              "rotulo": "Perturbação alimentar com fracasso nutricional persistente",
              "desc": "Falta aparente de interesse na alimentação ou em alimentos; esquiva baseada nas características sensoriais do alimento; ou preocupação acerca de consequências aversivas da alimentação, manifestada por fracasso persistente em satisfazer as necessidades nutricionais e/ou energéticas apropriadas.",
              "pergunta": "A pessoa apresenta evitação ou restrição alimentar persistente que leva a insuficiência nutricional ou energética?",
              "exemplos_clinicos": [
                "Falta de interesse em alimentos",
                "Esquiva sensorial alimentar",
                "Medo de engasgo ou vômito"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A1",
              "rotulo": "Perda de peso ou insucesso no ganho de peso/crescimento",
              "desc": "Perda de peso significativa, insucesso em obter o ganho de peso esperado ou atraso de crescimento em crianças.",
              "pergunta": "Houve perda de peso significativa, insucesso em ganhar peso adequadamente ou atraso no crescimento?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A2",
              "rotulo": "Deficiência nutricional significativa",
              "desc": "Deficiência nutricional significativa com impacto na saúde física.",
              "pergunta": "Há deficiência nutricional significativa com consequências para a saúde física?",
              "exemplos_clinicos": [
                "Hipotermia",
                "Bradicardia",
                "Anemia"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A3",
              "rotulo": "Dependência de alimentação enteral ou suplementos orais",
              "desc": "Necessidade de suplementação enteral ou de suplementos nutricionais orais para manter ingesta adequada, na ausência de condição médica subjacente.",
              "pergunta": "A pessoa depende de alimentação por sonda ou suplementos nutricionais orais para manter a nutrição adequada?",
              "exemplos_clinicos": [
                "Gastrostomia",
                "Suplementos nutricionalmente completos"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A4",
              "rotulo": "Interferência marcante no funcionamento psicossocial",
              "desc": "Incapacidade de participar de atividades sociais normais envolvendo alimentação ou prejuízo em relacionamentos devido à perturbação.",
              "pergunta": "A perturbação alimentar interfere de forma marcada no funcionamento social, nas relações ou na participação em refeições com outras pessoas?",
              "exemplos_clinicos": [
                "Evita jantares sociais",
                "Conflitos familiares nas refeições"
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
          "id": "nao_cultural_nao_indisponibilidade",
          "letra": "B",
          "rotulo": "Não explicada por indisponibilidade de alimento ou prática cultural",
          "tipo": "qualitativo_descritivo",
          "ui_widget": "toggle_simples",
          "obrigatorio": true,
          "icone_fa": "fa-check",
          "ddx_sugeridos": [],
          "descricao_completa": "A perturbação não é mais bem explicada por indisponibilidade de alimento ou por uma prática culturalmente aceita (p. ex., jejum religioso).",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "exclusao_anorexia_bulimia",
          "letra": "C",
          "rotulo": "Não ocorre exclusivamente durante anorexia ou bulimia; sem perturbação de peso/forma",
          "tipo": "exclusao_diagnostica",
          "ui_widget": "select_multiplos_ddx",
          "obrigatorio": true,
          "icone_fa": "fa-check",
          "ddx_sugeridos": [
            "anorexia_nervosa",
            "bulimia_nervosa"
          ],
          "descricao_completa": "A perturbação alimentar não ocorre exclusivamente durante o curso de anorexia nervosa ou bulimia nervosa, e não há evidência de perturbação na maneira como o peso ou a forma corporal é vivenciada.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "exclusao_medica_outro_tm",
          "letra": "D",
          "rotulo": "Não atribuível a condição médica ou melhor explicada por outro transtorno mental",
          "tipo": "exclusao_substancia_medica",
          "ui_widget": "toggle_com_justificativa_obrigatoria",
          "obrigatorio": true,
          "icone_fa": "fa-check",
          "ddx_sugeridos": [],
          "descricao_completa": "A perturbação alimentar não é atribuível a uma condição médica concomitante ou mais bem explicada por outro transtorno mental. Quando ocorre no contexto de outra condição, sua gravidade excede a habitualmente associada.",
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
          "id": "em_remicao",
          "nome": "Em remissão",
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
          "id": "nutricao",
          "label": "Estado Nutricional",
          "icone_fa": "fa-heartbeat",
          "relevante_para": "transversal"
        },
        {
          "id": "social",
          "label": "Funcionamento Social e Familiar",
          "icone_fa": "fa-users",
          "relevante_para": "transversal"
        },
        {
          "id": "desenvolvimento",
          "label": "Desenvolvimento e Crescimento",
          "icone_fa": "fa-child",
          "relevante_para": "pediatria"
        }
      ],
      "diagnostico_diferencial": [
        {
          "condicao": "Anorexia nervosa",
          "ponto_distincao": "Anorexia: medo de ganhar peso e perturbação na vivência do peso/forma corporal; TARE: ausência dessas características. Os dois não devem ser diagnosticados concomitantemente.",
          "pertence_a_classe": true
        },
        {
          "condicao": "Condições médicas (GI, alergias, malignidades)",
          "ponto_distincao": "TARE requer que a perturbação da ingesta esteja além daquela diretamente explicada pelos sintomas físicos de uma condição médica e persista após sua resolução.",
          "pertence_a_classe": false
        },
        {
          "condicao": "Transtorno do espectro autista",
          "ponto_distincao": "TEA: comportamentos alimentares rígidos e sensibilidades sensoriais, mas nem sempre com o nível de comprometimento necessário para TARE. Diagnosticar concomitantemente apenas se todos os critérios forem satisfeitos e a alimentação demandar tratamento específico.",
          "pertence_a_classe": false
        },
        {
          "condicao": "Fobia específica e transtorno de ansiedade social",
          "ponto_distincao": "Quando o medo de asfixia ou vômito leva a esquiva alimentar, a distinção pode ser difícil. Se o problema alimentar for o foco primário de atenção clínica, TARE é o diagnóstico apropriado.",
          "pertence_a_classe": false
        }
      ],
      "comorbidades_frequentes": [
        {
          "condicao": "Transtornos de ansiedade",
          "frequencia": "alta",
          "nota": null
        },
        {
          "condicao": "Transtorno obsessivo-compulsivo",
          "frequencia": "alta",
          "nota": null
        },
        {
          "condicao": "Transtorno do espectro autista",
          "frequencia": "alta",
          "nota": null
        },
        {
          "condicao": "Transtorno de déficit de atenção/hiperatividade",
          "frequencia": "moderada",
          "nota": null
        },
        {
          "condicao": "Transtorno do desenvolvimento intelectual",
          "frequencia": "moderada",
          "nota": null
        }
      ],
      "instrumentos_complementares": [],
      "prevalencia": {
        "populacao_geral": null,
        "proporcao_sexo": "Igualmente comum em ambos os sexos na lactência e primeira infância; comórbido com TEA, é mais comum no sexo masculino.",
        "variacoes_culturais": "Não deve ser diagnosticado quando a evitação estiver relacionada unicamente a práticas religiosas ou culturais específicas.",
        "notas": "Mais comum em crianças do que em adultos; pode haver grande demora entre manifestação inicial e apresentação clínica.",
        "metadados": {
          "completo": false,
          "lacunas": [
            "epidemiologia"
          ],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "curso_desenvolvimento": {
        "idade_inicio_tipica": "Lactência ou primeira infância (evitação baseada em sensibilidade sensorial tende a surgir na primeira década).",
        "trajetoria": "A evitação/restricão baseada em aspectos sensoriais é relativamente estável e duradoura. Pode persistir na idade adulta com funcionamento relativamente normal.",
        "prognostico": "Pouca evidência associando diretamente TARE e manifestação subsequente de outro transtorno alimentar.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "template_prontuario": {
        "cabecalho": "## Avaliação do Transtorno Alimentar Restritivo/Evitativo - {nome_paciente}",
        "rodape_metodologico": "Anamnese clínica com base nos critérios DSM-5 (307.59 / F50.8)."
      },
      "metadados_globais": {
        "fonte_capitulo_md": "10_transtornos_alimentares.md",
        "fonte_inventario_md": null,
        "data_extracao": "2026-05-31",
        "modelo_agente": "antigravity-gemini",
        "lacunas_globais": [
          "epidemiologia"
        ],
        "inconsistencias_detectadas": [],
        "notas_agente_globais": null,
        "revisao_humana_necessaria": false
      },
      "id": "transtorno_alimentar_restritivo_evitativo",
      "category": "FULL",
      "ui_mode": "structured_full",
      "render_structured_interview": true,
      "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [
          "A. Perturbacao alimentar com fracasso nutricional (≥1 consequencia: perda de peso, deficiencia nutricional, dependencia de sonda/suplementos, interferencia psicossocial marcante)",
          "B. NAO explicada por indisponibilidade de alimento ou pratica culturalmente aceita",
          "C. NAO ocorre exclusivamente durante anorexia/bulimia; NAO ha evidencia de perturbacao na vivencia de peso/forma",
          "D. NAO atribuivel a condicao medica concomitante"
        ],
        "diagnostic_rule": "A(≥1 consequencia) AND B AND C AND D",
        "clusters": [
          "Consequencias nutricionais/funcionais"
        ],
        "duration": null,
        "age_onset": "Fase de lactente, primeira infancia ou qualquer idade",
        "functional_impairment": "Desnutricao potencialmente fatal; prejuizo psicossocial marcante",
        "exclusions": [
          "Anorexia nervosa",
          "Bulimia nervosa",
          "Indisponibilidade de alimento",
          "Pratica cultural",
          "Condicao medica explicativa"
        ],
        "subtypes_presentations": [
          "Evitacao baseada em sensorial",
          "Falta de interesse",
          "Preocupacao com consequencias aversivas"
        ],
        "specifiers": [
          "Em remissao"
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
          "Anorexia nervosa",
          "Crianca exigente",
          "Condicao medica",
          "TEA"
        ],
        "key_questions": [
          "Tem dificuldade com alimentacao?",
          "Perdeu peso recentemente?",
          "Tem medo de ganhar peso?"
        ],
        "alerts": [
          "Desnutricao potencialmente fatal",
          "Excluir Anorexia obrigatorio"
        ],
        "source_trace": {
          "markdown_section": "4. TRANSTORNO ALIMENTAR RESTRITIVO/EVITATIVO (ARFID)",
          "patches_applied": []
        },
        "category": "FULL",
        "ui_mode": "structured_full",
        "render_structured_interview": true
      },
      "sigla": "TARE",
      "codigo_dsm5": "307.59",
      "codigo_cid10": "F50.8",
      "faixa_etaria_alvo": "ambos",
      "versao_complementar_existe": false,
      "inventario_clinico": {
        "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 307.59 (F50.8)",
        "estrutura_efetiva": "- **Estrutura efetiva:**",
        "notas_clinicas": "- **Notas:**"
      },
      "codigo_cid11": "6B83",
      "super_enrichment": {
        "id": "transtorno_alimentar_restritivo_evitativo",
        "nome_original": "TRANSTORNO ALIMENTAR RESTRITIVO/EVITATIVO",
        "comorbidades_frequentes": [
          {
            "condicao": "Transtornos de ansiedade",
            "frequencia": "alta",
            "nota": null
          },
          {
            "condicao": "Transtorno obsessivo-compulsivo",
            "frequencia": "alta",
            "nota": null
          },
          {
            "condicao": "Transtorno do espectro autista",
            "frequencia": "alta",
            "nota": null
          },
          {
            "condicao": "Transtorno de déficit de atenção/hiperatividade",
            "frequencia": "moderada",
            "nota": null
          },
          {
            "condicao": "Transtorno do desenvolvimento intelectual",
            "frequencia": "moderada",
            "nota": null
          }
        ],
        "diagnostico_diferencial": [
          {
            "condicao": "Anorexia nervosa",
            "ponto_distincao": "Anorexia: medo de ganhar peso e perturbação na vivência do peso/forma corporal; TARE: ausência dessas características. Os dois não devem ser diagnosticados concomitantemente.",
            "pertence_a_classe": true
          },
          {
            "condicao": "Condições médicas (GI, alergias, malignidades)",
            "ponto_distincao": "TARE requer que a perturbação da ingesta esteja além daquela diretamente explicada pelos sintomas físicos de uma condição médica e persista após sua resolução.",
            "pertence_a_classe": false
          },
          {
            "condicao": "Transtorno do espectro autista",
            "ponto_distincao": "TEA: comportamentos alimentares rígidos e sensibilidades sensoriais, mas nem sempre com o nível de comprometimento necessário para TARE. Diagnosticar concomitantemente apenas se todos os critérios forem satisfeitos e a alimentação demandar tratamento específico.",
            "pertence_a_classe": false
          },
          {
            "condicao": "Fobia específica e transtorno de ansiedade social",
            "ponto_distincao": "Quando o medo de asfixia ou vômito leva a esquiva alimentar, a distinção pode ser difícil. Se o problema alimentar for o foco primário de atenção clínica, TARE é o diagnóstico apropriado.",
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
          "populacao_geral": null,
          "proporcao_sexo": "Igualmente comum em ambos os sexos na lactência e primeira infância; comórbido com TEA, é mais comum no sexo masculino.",
          "variacoes_culturais": "Não deve ser diagnosticado quando a evitação estiver relacionada unicamente a práticas religiosas ou culturais específicas."
        },
        "curso_desenvolvimento": {
          "idade_inicio_tipica": "Lactência ou primeira infância (evitação baseada em sensibilidade sensorial tende a surgir na primeira década).",
          "trajetoria": "A evitação/restricão baseada em aspectos sensoriais é relativamente estável e duradoura. Pode persistir na idade adulta com funcionamento relativamente normal.",
          "prognostico": "Pouca evidência associando diretamente TARE e manifestação subsequente de outro transtorno alimentar."
        },
        "instrumentos_complementares": [],
        "identificacao": {},
        "criterios_obrigatorios": [
          {
            "id": "A - Perturbacao alimentar com fracasso nutricional (≥1 consequencia)",
            "texto": "Manifestada por: falta de interesse na alimentacao; esquiva baseada em caracteristicas sensoriais do alimento; ou preocupacao com consequencias aversivas da alimentacao.\n\nConsequencia(s) associada(s) (pelo menos 1):\n1. Perda de peso significativa (ou insucesso em ganhar peso/ atraso de crescimento em criancas)\n2. Deficiencia nutricional significativa\n3. Dependencia de alimentacao enteral ou suplementos nutricionais orais\n4. Interferencia marcante no funcionamento psicossocial"
          },
          {
            "id": "B",
            "texto": "Perturbacao NAO explicada por indisponibilidade de alimento ou pratica culturalmente aceita."
          },
          {
            "id": "C",
            "texto": "NAO ocorre exclusivamente durante anorexia ou bulimia, e NAO ha evidencia de perturbacao na vivencia de peso/forma corporal."
          },
          {
            "id": "D",
            "texto": "NAO atribuivel a condicao medica concomitante nem melhor explicada por outro transtorno mental. Quando ocorre no contexto de outra condicao, a gravidade excede a habitualmente associada."
          }
        ],
        "regra_diagnostica": "A ≥ 1_consequencia AND B = true AND C = true AND D = true",
        "apresentacoes_tipicas": "1. **Evitacao baseada em sensorial:** Extrema sensibilidade a aparencia, cor, odor, textura, temperatura ou paladar (\"seletividade alimentar\", \"neofobia alimentar\")\n2. **Falta de interesse:** Inapetencia generalizada, falta de interesse por alimentacao\n3. **Preocupacao com consequencias aversivas:** Medo de engasgar, vomitar, dor; geralmente pos-traumatica (ex: experiencia de engasgo, procedimento gastrico)",
        "especificador": "- **Em remissao:** Criterios previamente preenchidos; nao mais satisfeitos por periodo sustentado",
        "gravidade": {
          "texto_completo": "- **tem_gravidade_formal:** FALSE\n- **Tipo:** nao_aplica\n- Nota: a gravidade e implicita na consequencia clinica (perda de peso, deficiencia nutricional, necessidade de sonda, prejuizo funcional), mas nao ha niveis formais no DSM-5"
        },
        "duracao_e_curso": "- **Inicio:** Fase de lactente, primeira infancia ou qualquer idade (evitacao pos-traumatica)\n- **Curso:** Evitacao sensorial tende a ser estavel e duradoura; preocupacao com consequencias pode ter inicio em qualquer idade\n- **Risco:** Desnutricao potencialmente fatal em casos graves",
        "exclusoes_obrigatorias": [
          "Indisponibilidade de alimento",
          "Pratica culturalmente aceita (jejum religioso)",
          "Comportamento alimentar tipico do desenvolvimento (ex: crianças exigentes)",
          "**Anorexia nervosa:** Diferenca crucial = ARFID nao tem medo de ganhar peso nem perturbacao da vivencia de peso/forma",
          "**Bulimia nervosa**",
          "Condicao medica explicativa (gastrointestinal, alergias)",
          "Transtorno do espectro autista (rigidez alimentar comum, mas nem sempre gera comprometimento ARFID-level)",
          "Fobia especifica (medo de asfixia/vomito pode ser fobia; se alimentacao e foco primario → ARFID)",
          "Transtorno depressivo maior (inapetencia geralmente cede com resolucao do humor)"
        ],
        "diferenciais_criticos": "1. **ARFID vs Anorexia:** A diferenca mais importante do DSM-5 — ARFID nao tem medo de ganhar peso nem dismorfia. Se surgir medo de gordura → mudar para Anorexia.\n2. **ARFID vs \"crianca exigente\":** ARFID exige consequencia clinica significativa (perda de peso, deficiencia, sonda, prejuizo social)\n3. **ARFID vs condicao medica:** A perturbacao alimentar deve persistir ALEM da condicao medica subjacente\n4. **ARFID vs TEA:** TEA pode ter seletividade alimentar, mas diagnostico conjunto so se houver comprometimento que demande tratamento especifico",
        "perguntas_chave_entrevista": [
          {
            "bloco": "Criterio A - Perturbacao alimentar:",
            "texto": "Voce tem alguma dificuldade com a alimentacao? Falta de interesse, esquiva por textura/sabor/aparencia, ou medo de consequencias?"
          },
          {
            "bloco": "Criterio A - Perturbacao alimentar:",
            "texto": "Quais alimentos aceita normalmente? Ha restricoes muito severas?"
          },
          {
            "bloco": "Criterio A - Perturbacao alimentar:",
            "texto": "Ja teve experiencias negativas com comida (engasgo, vomito, procedimento)?"
          },
          {
            "bloco": "Consequencias (≥1):",
            "texto": "Perdeu peso recentemente ou teve dificuldade para ganhar peso/crescer?"
          },
          {
            "bloco": "Consequencias (≥1):",
            "texto": "Tem alguma deficiencia nutricional diagnosticada?"
          },
          {
            "bloco": "Consequencias (≥1):",
            "texto": "Precisa usar sonda ou suplementos nutricionais?"
          },
          {
            "bloco": "Consequencias (≥1):",
            "texto": "A alimentacao interfere em relacionamentos, trabalho ou vida social?"
          },
          {
            "bloco": "Criterio C - Exclusao de Anorexia:",
            "texto": "Voce tem medo de ganhar peso ou de ficar gordo?"
          },
          {
            "bloco": "Criterio C - Exclusao de Anorexia:",
            "texto": "O peso e a forma do corpo sao muito importantes para voce?"
          },
          {
            "bloco": "Criterio D - Exclusao medica:",
            "texto": "Tem alguma condicao medica que explique a dificuldade alimentar?"
          },
          {
            "bloco": "Criterio D - Exclusao medica:",
            "texto": "A dificuldade persistiu mesmo depois da condicao medica ter sido tratada?"
          }
        ],
        "ui": {
          "renderiza_entrevista": true,
          "modo": "structured_full",
          "tres_apresentacoes": [
            "sensorial",
            "falta_interesse",
            "consequencias_aversivas"
          ],
          "excluir_anorexia": "obrigatorio",
          "avaliar_consequencia_nutricional": "obrigatorio",
          "alerta_medico": "desnutricao_potencialmente_fatal"
        }
      },
      "super_enrichment_source": "dsm/output/json_super_adicionado/transtorno_alimentar_restritivo_evitativo.json",
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
