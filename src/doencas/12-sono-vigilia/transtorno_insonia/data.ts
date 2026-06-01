import { TranstornoDSMSchema, type TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import { parseGeneratedDiseaseData } from "@/infra/validation-helpers";

// Dados brutos normalizados da release DSM operacional
const rawData = {
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_insonia",
    "nome_completo": "Transtorno de Insônia",
    "sigla": "",
    "capitulo_id": "12",
    "capitulo": "Transtornos do Sono-Vigília",
    "grupo": null,
    "versao_complementar_existe": false,
    "sinonimos_historicos": [],
    "faixa_etaria_alvo": "ambos",
    "codigo": {
      "cid10": "F51.01",
      "cid11": "7A00",
      "dsm5": "307.42"
    }
  },
  "id": "transtorno_insonia",
  "item_id": "transtorno_insonia",
  "name": "Transtorno de Insônia",
  "nome_completo": "Transtorno de Insônia",
  "chapter_id": "12",
  "chapter_name": "Transtornos do Sono-Vigília",
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
      "nome": "Queixas de Insatisfação com Quantidade ou Qualidade do Sono",
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
        }
      ]
    }
  ],
  "criterios_condicionais": [
    {
      "id": "prejuizo_funcional",
      "letra": "B",
      "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
      "descricao_completa": "A perturbação do sono causa sofrimento clinicamente significativo e prejuízo no funcionamento social, profissional, educacional, acadêmico, comportamental ou em outras áreas importantes.",
      "obrigatorio": true
    },
    {
      "id": "frequencia_3x_semana",
      "letra": "C",
      "rotulo": "Dificuldades pelo menos três noites por semana",
      "descricao_completa": "As dificuldades relacionadas ao sono ocorrem pelo menos três noites por semana.",
      "obrigatorio": true
    },
    {
      "id": "duracao_3meses",
      "letra": "D",
      "rotulo": "Duração mínima de três meses",
      "descricao_completa": "As dificuldades relacionadas ao sono permanecem durante pelo menos três meses.",
      "obrigatorio": true
    },
    {
      "id": "oportunidades_adequadas",
      "letra": "E",
      "rotulo": "Ocorrem a despeito de oportunidades adequadas para dormir",
      "descricao_completa": "As dificuldades relacionadas ao sono ocorrem a despeito de oportunidades adequadas para dormir.",
      "obrigatorio": true
    },
    {
      "id": "exclusao_outro_sono",
      "letra": "F",
      "rotulo": "Não explicada por outro transtorno do sono-vigília",
      "descricao_completa": "A insônia não é mais bem explicada ou não ocorre exclusivamente durante o curso de outro transtorno do sono-vigília (narcolepsia, transtorno do sono relacionado à respiração, transtorno do sono-vigília do ritmo circadiano, parassonia).",
      "obrigatorio": true
    },
    {
      "id": "exclusao_substancia",
      "letra": "G",
      "rotulo": "Não atribuível aos efeitos fisiológicos de substância",
      "descricao_completa": "A insônia não é atribuída aos efeitos fisiológicos de alguma substância (drogas ilícitas, medicamentos).",
      "obrigatorio": true
    },
    {
      "id": "exclusao_comorbidade",
      "letra": "H",
      "rotulo": "Coexistência de transtornos mentais ou médicos não explica a queixa predominante",
      "descricao_completa": "A coexistência de transtornos mentais e de condições médicas não explica adequadamente a queixa predominante de insônia.",
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
      "id": "sono",
      "label": "Qualidade do Sono"
    },
    {
      "id": "cognitivo",
      "label": "Desempenho Cognitivo Diurno"
    },
    {
      "id": "social",
      "label": "Funcionamento Social"
    },
    {
      "id": "trabalho",
      "label": "Desempenho Profissional/Escolar"
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno Depressivo Maior",
      "frequencia": "alta",
      "nota": "None"
    },
    {
      "condicao": "Transtornos de ansiedade",
      "frequencia": "alta",
      "nota": "None"
    },
    {
      "condicao": "Transtornos bipolares",
      "frequencia": "alta",
      "nota": "None"
    },
    {
      "condicao": "Transtornos relacionados ao uso de substâncias",
      "frequencia": "moderada",
      "nota": "None"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Variações normais do sono",
      "ponto_distincao": "Pessoas com sono curto não apresentam dificuldade para conciliar ou manter o sono nem sintomas diurnos típicos.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno do sono-vigília do ritmo circadiano",
      "ponto_distincao": "Ritmo circadiano: insônia apenas quando há descompasso entre horário de dormir e ritmo endógeno.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Síndrome das pernas inquietas",
      "ponto_distincao": "SPI distingue-se pela necessidade de movimentar as pernas acompanhada de sensações desconfortáveis.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtornos do sono relacionados à respiração",
      "ponto_distincao": "Apneia do sono: história de roncos altos, pausas respiratórias e sonolência diurna excessiva.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Narcolepsia",
      "ponto_distincao": "Narcolepsia distingue-se pela predominância de sonolência diurna excessiva, cataplexia, paralisia do sono e alucinações.",
      "pertence_a_classe": true
    }
  ],
  "perguntas_chave": [],
  "key_questions": [],
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Adultos jovens; também menopausa e idade avançada",
    "trajetoria": "Pode ser ocasional, persistente ou recorrente. Taxas de cronicidade 45–75% em 1–7 anos.",
    "prognostico": "Melhor com terapia cognitivo-comportamental do sono (TCC-I)."
  },
  "prevalencia": {
    "populacao_geral": "6–10% atendem critérios do transtorno; 10–15% com prejuízos diurnos; ~1/3 com sintomas.",
    "proporcao_sexo": "1,44:1 F:M",
    "variacoes_culturais": "None",
    "notas": "Mais prevalente em mulheres e idosos."
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
      "id": "com_comorbidade_mental",
      "nome": "Com comorbidade mental",
      "descricao": ""
    },
    {
      "id": "com_comorbidade_medica",
      "nome": "Com outra comorbidade médica",
      "descricao": ""
    },
    {
      "id": "com_outro_transtorno_sono",
      "nome": "Com outro transtorno do sono",
      "descricao": ""
    },
    {
      "id": "curso_episodico",
      "nome": "Episódico",
      "descricao": ""
    },
    {
      "id": "curso_persistente",
      "nome": "Persistente",
      "descricao": ""
    },
    {
      "id": "curso_recorrente",
      "nome": "Recorrente",
      "descricao": ""
    }
  ],
  "template_prontuario": {
    "titulo": "",
    "texto": "",
    "campos": []
  },
  "metadados_globais": {
    "fonte_capitulo_md": "12_transtornos_sono_vigilia.md",
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
  "instrumentos_complementares": [
    {
      "nome": "Polissonografia",
      "sigla": "PSG",
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    },
    {
      "nome": "Diário do Sono",
      "sigla": null,
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    },
    {
      "nome": "Actigrafia",
      "sigla": null,
      "uso": "monitoramento",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    }
  ],
  "raw_document": {
    "$schema_version": "1.0.0",
    "meta": {
      "id": "transtorno_insonia",
      "nome_completo": "Transtorno de Insônia",
      "sigla": "",
      "capitulo_id": "12",
      "capitulo": "Transtornos do Sono-Vigília",
      "grupo": null,
      "versao_complementar_existe": false,
      "sinonimos_historicos": [],
      "faixa_etaria_alvo": "ambos",
      "codigo": {
        "cid10": "F51.01",
        "cid11": "7A00",
        "dsm5": "307.42"
      }
    },
    "id": "transtorno_insonia",
    "item_id": "transtorno_insonia",
    "name": "Transtorno de Insônia",
    "nome_completo": "Transtorno de Insônia",
    "chapter_id": "12",
    "chapter_name": "Transtornos do Sono-Vigília",
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
        "nome": "Queixas de Insatisfação com Quantidade ou Qualidade do Sono",
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
          }
        ]
      }
    ],
    "criterios_condicionais": [
      {
        "id": "prejuizo_funcional",
        "letra": "B",
        "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
        "descricao_completa": "A perturbação do sono causa sofrimento clinicamente significativo e prejuízo no funcionamento social, profissional, educacional, acadêmico, comportamental ou em outras áreas importantes.",
        "obrigatorio": true
      },
      {
        "id": "frequencia_3x_semana",
        "letra": "C",
        "rotulo": "Dificuldades pelo menos três noites por semana",
        "descricao_completa": "As dificuldades relacionadas ao sono ocorrem pelo menos três noites por semana.",
        "obrigatorio": true
      },
      {
        "id": "duracao_3meses",
        "letra": "D",
        "rotulo": "Duração mínima de três meses",
        "descricao_completa": "As dificuldades relacionadas ao sono permanecem durante pelo menos três meses.",
        "obrigatorio": true
      },
      {
        "id": "oportunidades_adequadas",
        "letra": "E",
        "rotulo": "Ocorrem a despeito de oportunidades adequadas para dormir",
        "descricao_completa": "As dificuldades relacionadas ao sono ocorrem a despeito de oportunidades adequadas para dormir.",
        "obrigatorio": true
      },
      {
        "id": "exclusao_outro_sono",
        "letra": "F",
        "rotulo": "Não explicada por outro transtorno do sono-vigília",
        "descricao_completa": "A insônia não é mais bem explicada ou não ocorre exclusivamente durante o curso de outro transtorno do sono-vigília (narcolepsia, transtorno do sono relacionado à respiração, transtorno do sono-vigília do ritmo circadiano, parassonia).",
        "obrigatorio": true
      },
      {
        "id": "exclusao_substancia",
        "letra": "G",
        "rotulo": "Não atribuível aos efeitos fisiológicos de substância",
        "descricao_completa": "A insônia não é atribuída aos efeitos fisiológicos de alguma substância (drogas ilícitas, medicamentos).",
        "obrigatorio": true
      },
      {
        "id": "exclusao_comorbidade",
        "letra": "H",
        "rotulo": "Coexistência de transtornos mentais ou médicos não explica a queixa predominante",
        "descricao_completa": "A coexistência de transtornos mentais e de condições médicas não explica adequadamente a queixa predominante de insônia.",
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
        "id": "sono",
        "label": "Qualidade do Sono"
      },
      {
        "id": "cognitivo",
        "label": "Desempenho Cognitivo Diurno"
      },
      {
        "id": "social",
        "label": "Funcionamento Social"
      },
      {
        "id": "trabalho",
        "label": "Desempenho Profissional/Escolar"
      }
    ],
    "comorbidades_frequentes": [
      {
        "condicao": "Transtorno Depressivo Maior",
        "frequencia": "alta",
        "nota": "None"
      },
      {
        "condicao": "Transtornos de ansiedade",
        "frequencia": "alta",
        "nota": "None"
      },
      {
        "condicao": "Transtornos bipolares",
        "frequencia": "alta",
        "nota": "None"
      },
      {
        "condicao": "Transtornos relacionados ao uso de substâncias",
        "frequencia": "moderada",
        "nota": "None"
      }
    ],
    "diagnostico_diferencial": [
      {
        "condicao": "Variações normais do sono",
        "ponto_distincao": "Pessoas com sono curto não apresentam dificuldade para conciliar ou manter o sono nem sintomas diurnos típicos.",
        "pertence_a_classe": false
      },
      {
        "condicao": "Transtorno do sono-vigília do ritmo circadiano",
        "ponto_distincao": "Ritmo circadiano: insônia apenas quando há descompasso entre horário de dormir e ritmo endógeno.",
        "pertence_a_classe": true
      },
      {
        "condicao": "Síndrome das pernas inquietas",
        "ponto_distincao": "SPI distingue-se pela necessidade de movimentar as pernas acompanhada de sensações desconfortáveis.",
        "pertence_a_classe": true
      },
      {
        "condicao": "Transtornos do sono relacionados à respiração",
        "ponto_distincao": "Apneia do sono: história de roncos altos, pausas respiratórias e sonolência diurna excessiva.",
        "pertence_a_classe": true
      },
      {
        "condicao": "Narcolepsia",
        "ponto_distincao": "Narcolepsia distingue-se pela predominância de sonolência diurna excessiva, cataplexia, paralisia do sono e alucinações.",
        "pertence_a_classe": true
      }
    ],
    "perguntas_chave": [],
    "key_questions": [],
    "curso_desenvolvimento": {
      "idade_inicio_tipica": "Adultos jovens; também menopausa e idade avançada",
      "trajetoria": "Pode ser ocasional, persistente ou recorrente. Taxas de cronicidade 45–75% em 1–7 anos.",
      "prognostico": "Melhor com terapia cognitivo-comportamental do sono (TCC-I)."
    },
    "prevalencia": {
      "populacao_geral": "6–10% atendem critérios do transtorno; 10–15% com prejuízos diurnos; ~1/3 com sintomas.",
      "proporcao_sexo": "1,44:1 F:M",
      "variacoes_culturais": "None",
      "notas": "Mais prevalente em mulheres e idosos."
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
        "id": "com_comorbidade_mental",
        "nome": "Com comorbidade mental",
        "descricao": ""
      },
      {
        "id": "com_comorbidade_medica",
        "nome": "Com outra comorbidade médica",
        "descricao": ""
      },
      {
        "id": "com_outro_transtorno_sono",
        "nome": "Com outro transtorno do sono",
        "descricao": ""
      },
      {
        "id": "curso_episodico",
        "nome": "Episódico",
        "descricao": ""
      },
      {
        "id": "curso_persistente",
        "nome": "Persistente",
        "descricao": ""
      },
      {
        "id": "curso_recorrente",
        "nome": "Recorrente",
        "descricao": ""
      }
    ],
    "template_prontuario": {
      "titulo": "",
      "texto": "",
      "campos": []
    },
    "metadados_globais": {
      "fonte_capitulo_md": "12_transtornos_sono_vigilia.md",
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
    "instrumentos_complementares": [
      {
        "nome": "Polissonografia",
        "sigla": "PSG",
        "uso": "diagnostico",
        "obrigatorio_para_diagnostico": false,
        "fonte": "mencionado_no_dsm"
      },
      {
        "nome": "Diário do Sono",
        "sigla": null,
        "uso": "triagem",
        "obrigatorio_para_diagnostico": false,
        "fonte": "mencionado_no_dsm"
      },
      {
        "nome": "Actigrafia",
        "sigla": null,
        "uso": "monitoramento",
        "obrigatorio_para_diagnostico": false,
        "fonte": "mencionado_no_dsm"
      }
    ],
    "raw_document": {
      "$schema_version": "1.0.0",
      "meta": {
        "id": "transtorno_insonia",
        "nome_completo": "Transtorno de Insônia",
        "sigla": null,
        "codigo": {
          "dsm5": "307.42",
          "cid10": "F51.01",
          "cid11": "7A00"
        },
        "capitulo": "Transtornos do Sono-Vigília",
        "capitulo_id": "12",
        "grupo": null,
        "faixa_etaria_alvo": "ambos",
        "versao_complementar_existe": false,
        "sinonimos_historicos": []
      },
      "estrutura_geral": "polythetic_monocluster",
      "clusters_sintomas": [
        {
          "id": "A",
          "nome": "Queixas de Insatisfação com Quantidade ou Qualidade do Sono",
          "tipo": "polythetic_com_limiar",
          "limiar": {
            "adulto": 1,
            "pediatria": 1
          },
          "ancora_obrigatoria": null,
          "sintomas": [
            {
              "id": "A1",
              "rotulo": "Dificuldade para iniciar o sono",
              "desc": "Dificuldade predominante para conciliar o sono na hora de deitar. Em crianças, pode manifestar-se como dificuldade para iniciar o sono sem intervenção de cuidadores.",
              "pergunta": "Você tem dificuldade para pegar no sono quando vai deitar?",
              "exemplos_clinicos": [
                "Latência do sono superior a 20–30 minutos"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A2",
              "rotulo": "Dificuldade para manter o sono",
              "desc": "Dificuldade para manter o sono, com despertares frequentes ou problemas para retornar ao sono após cada despertar. Em crianças, pode manifestar-se como dificuldade para retornar ao sono sem intervenção de cuidadores.",
              "pergunta": "Você acorda várias vezes durante a noite ou tem dificuldade de voltar a dormir?",
              "exemplos_clinicos": [
                "Permanecer desperto mais de 20–30 minutos após despertar"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A3",
              "rotulo": "Despertar antes do horário habitual",
              "desc": "Despertar antes do horário habitual com incapacidade de retornar ao sono.",
              "pergunta": "Você acorda muito mais cedo do que gostaria e não consegue voltar a dormir?",
              "exemplos_clinicos": [
                "Despertar pelo menos 30 minutos antes do programado"
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
          "id": "prejuizo_funcional",
          "letra": "B",
          "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
          "tipo": "prejuizo_funcional",
          "ui_widget": "toggle_com_justificativa_obrigatoria",
          "obrigatorio": true,
          "icone_fa": "fa-check",
          "ddx_sugeridos": [],
          "descricao_completa": "A perturbação do sono causa sofrimento clinicamente significativo e prejuízo no funcionamento social, profissional, educacional, acadêmico, comportamental ou em outras áreas importantes.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "frequencia_3x_semana",
          "letra": "C",
          "rotulo": "Dificuldades pelo menos três noites por semana",
          "tipo": "temporal_duracao_minima",
          "ui_widget": "campo_duracao_meses",
          "obrigatorio": true,
          "icone_fa": "fa-check",
          "ddx_sugeridos": [],
          "descricao_completa": "As dificuldades relacionadas ao sono ocorrem pelo menos três noites por semana.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "duracao_3meses",
          "letra": "D",
          "rotulo": "Duração mínima de três meses",
          "tipo": "temporal_duracao_minima",
          "ui_widget": "campo_duracao_meses",
          "obrigatorio": true,
          "icone_fa": "fa-check",
          "ddx_sugeridos": [],
          "descricao_completa": "As dificuldades relacionadas ao sono permanecem durante pelo menos três meses.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "oportunidades_adequadas",
          "letra": "E",
          "rotulo": "Ocorrem a despeito de oportunidades adequadas para dormir",
          "tipo": "qualitativo_descritivo",
          "ui_widget": "toggle_simples",
          "obrigatorio": true,
          "icone_fa": "fa-check",
          "ddx_sugeridos": [],
          "descricao_completa": "As dificuldades relacionadas ao sono ocorrem a despeito de oportunidades adequadas para dormir.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "exclusao_outro_sono",
          "letra": "F",
          "rotulo": "Não explicada por outro transtorno do sono-vigília",
          "tipo": "exclusao_diagnostica",
          "ui_widget": "select_multiplos_ddx",
          "obrigatorio": true,
          "icone_fa": "fa-check",
          "ddx_sugeridos": [
            "narcolepsia",
            "apneia_sono",
            "ritmo_circadiano",
            "parassonia"
          ],
          "descricao_completa": "A insônia não é mais bem explicada ou não ocorre exclusivamente durante o curso de outro transtorno do sono-vigília (narcolepsia, transtorno do sono relacionado à respiração, transtorno do sono-vigília do ritmo circadiano, parassonia).",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "exclusao_substancia",
          "letra": "G",
          "rotulo": "Não atribuível aos efeitos fisiológicos de substância",
          "tipo": "exclusao_substancia_medica",
          "ui_widget": "toggle_com_justificativa_obrigatoria",
          "obrigatorio": true,
          "icone_fa": "fa-check",
          "ddx_sugeridos": [],
          "descricao_completa": "A insônia não é atribuída aos efeitos fisiológicos de alguma substância (drogas ilícitas, medicamentos).",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "exclusao_comorbidade",
          "letra": "H",
          "rotulo": "Coexistência de transtornos mentais ou médicos não explica a queixa predominante",
          "tipo": "qualitativo_descritivo",
          "ui_widget": "toggle_simples",
          "obrigatorio": true,
          "icone_fa": "fa-check",
          "ddx_sugeridos": [],
          "descricao_completa": "A coexistência de transtornos mentais e de condições médicas não explica adequadamente a queixa predominante de insônia.",
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
          "id": "com_comorbidade_mental",
          "nome": "Com comorbidade mental",
          "tipo": "booleano",
          "ortogonal": false,
          "opcoes": [],
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "com_comorbidade_medica",
          "nome": "Com outra comorbidade médica",
          "tipo": "booleano",
          "ortogonal": false,
          "opcoes": [],
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "com_outro_transtorno_sono",
          "nome": "Com outro transtorno do sono",
          "tipo": "booleano",
          "ortogonal": false,
          "opcoes": [],
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "curso_episodico",
          "nome": "Episódico",
          "tipo": "booleano",
          "ortogonal": false,
          "opcoes": [],
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": "Sintomas duram pelo menos um mês, porém menos que três meses.",
            "fonte_passada_1": true
          }
        },
        {
          "id": "curso_persistente",
          "nome": "Persistente",
          "tipo": "booleano",
          "ortogonal": false,
          "opcoes": [],
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": "Sintomas duram três meses ou mais.",
            "fonte_passada_1": true
          }
        },
        {
          "id": "curso_recorrente",
          "nome": "Recorrente",
          "tipo": "booleano",
          "ortogonal": false,
          "opcoes": [],
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": "Dois ou mais episódios dentro do espaço de um ano.",
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
          "id": "sono",
          "label": "Qualidade do Sono",
          "icone_fa": "fa-bed",
          "relevante_para": "transversal"
        },
        {
          "id": "cognitivo",
          "label": "Desempenho Cognitivo Diurno",
          "icone_fa": "fa-brain",
          "relevante_para": "transversal"
        },
        {
          "id": "social",
          "label": "Funcionamento Social",
          "icone_fa": "fa-users",
          "relevante_para": "transversal"
        },
        {
          "id": "trabalho",
          "label": "Desempenho Profissional/Escolar",
          "icone_fa": "fa-briefcase",
          "relevante_para": "adulto"
        }
      ],
      "diagnostico_diferencial": [
        {
          "condicao": "Variações normais do sono",
          "ponto_distincao": "Pessoas com sono curto não apresentam dificuldade para conciliar ou manter o sono nem sintomas diurnos típicos.",
          "pertence_a_classe": false
        },
        {
          "condicao": "Transtorno do sono-vigília do ritmo circadiano",
          "ponto_distincao": "Ritmo circadiano: insônia apenas quando há descompasso entre horário de dormir e ritmo endógeno.",
          "pertence_a_classe": true
        },
        {
          "condicao": "Síndrome das pernas inquietas",
          "ponto_distincao": "SPI distingue-se pela necessidade de movimentar as pernas acompanhada de sensações desconfortáveis.",
          "pertence_a_classe": true
        },
        {
          "condicao": "Transtornos do sono relacionados à respiração",
          "ponto_distincao": "Apneia do sono: história de roncos altos, pausas respiratórias e sonolência diurna excessiva.",
          "pertence_a_classe": true
        },
        {
          "condicao": "Narcolepsia",
          "ponto_distincao": "Narcolepsia distingue-se pela predominância de sonolência diurna excessiva, cataplexia, paralisia do sono e alucinações.",
          "pertence_a_classe": true
        }
      ],
      "comorbidades_frequentes": [
        {
          "condicao": "Transtorno Depressivo Maior",
          "frequencia": "alta",
          "nota": null
        },
        {
          "condicao": "Transtornos de ansiedade",
          "frequencia": "alta",
          "nota": null
        },
        {
          "condicao": "Transtornos bipolares",
          "frequencia": "alta",
          "nota": null
        },
        {
          "condicao": "Transtornos relacionados ao uso de substâncias",
          "frequencia": "moderada",
          "nota": null
        }
      ],
      "instrumentos_complementares": [
        {
          "nome": "Polissonografia",
          "sigla": "PSG",
          "uso": "diagnostico",
          "obrigatorio_para_diagnostico": false,
          "fonte": "mencionado_no_dsm"
        },
        {
          "nome": "Diário do Sono",
          "sigla": null,
          "uso": "triagem",
          "obrigatorio_para_diagnostico": false,
          "fonte": "mencionado_no_dsm"
        },
        {
          "nome": "Actigrafia",
          "sigla": null,
          "uso": "monitoramento",
          "obrigatorio_para_diagnostico": false,
          "fonte": "mencionado_no_dsm"
        }
      ],
      "prevalencia": {
        "populacao_geral": "6–10% atendem critérios do transtorno; 10–15% com prejuízos diurnos; ~1/3 com sintomas.",
        "proporcao_sexo": "1,44:1 F:M",
        "variacoes_culturais": null,
        "notas": "Mais prevalente em mulheres e idosos.",
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
        "idade_inicio_tipica": "Adultos jovens; também menopausa e idade avançada",
        "trajetoria": "Pode ser ocasional, persistente ou recorrente. Taxas de cronicidade 45–75% em 1–7 anos.",
        "prognostico": "Melhor com terapia cognitivo-comportamental do sono (TCC-I).",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "template_prontuario": {
        "cabecalho": "## Avaliação do Transtorno de Insônia - {nome_paciente}",
        "rodape_metodologico": "Anamnese clínica com base nos critérios DSM-5 (307.42 / F51.01)."
      },
      "metadados_globais": {
        "fonte_capitulo_md": "12_transtornos_sono_vigilia.md",
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
      "id": "transtorno_insonia",
      "category": "FULL",
      "ui_mode": "structured_full",
      "render_structured_interview": true,
      "rendering": {
        "estrutura_diagnostica": "monothetic_tripartite",
        "criteria": [
          "A. Queixa de insatisfacao com quantidade ou qualidade do sono (pelo menos 1: dificuldade iniciar sono, manter sono, ou despertar precoce)",
          "B. Sofrimento clinicamente significativo ou prejuizo funcional",
          "C. Ocorre pelo menos 3 noites por semana",
          "D. Persiste durante pelo menos 3 meses",
          "E. Ocorre a despeito de oportunidades adequadas para dormir",
          "F. NAO e melhor explicada por narcolepsia, transtorno do sono relacionado a respiracao, transtorno do ritmo circadiano ou parassonia",
          "G. NAO e atribuida a substancia",
          "H. Coexistencia de transtornos mentais/condicoes medicas NAO explica adequadamente a queixa predominante"
        ],
        "diagnostic_rule": "A AND B AND C(≥3noites/semana) AND D(≥3meses) AND E AND F AND G AND H",
        "clusters": [],
        "duration": "≥3 meses",
        "age_onset": "Qualquer idade; mais comum em adultos jovens",
        "functional_impairment": "Fadiga diurna, prejuizos cognitivos, perturbacoes de humor, risco de acidentes",
        "exclusions": [
          "Narcolepsia",
          "Apneia do sono",
          "Ritmo circadiano",
          "Parassonias",
          "Substancia"
        ],
        "subtypes_presentations": [],
        "specifiers": [
          "Com comorbidade mental",
          "Com comorbidade medica",
          "Com outro transtorno do sono",
          "Episodico",
          "Persistente",
          "Recorrente"
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
          "Variacao normal de sono",
          "Privacao de sono",
          "Ritmo circadiano",
          "SPI",
          "Apneia",
          "Narcolepsia"
        ],
        "key_questions": [
          "Com que frequencia tem dificuldade para pegar no sono?",
          "Acorda varias vezes?",
          "Ha quanto tempo?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "1. TRANSTORNO DE INSONIA",
          "patches_applied": []
        },
        "category": "FULL",
        "ui_mode": "structured_full",
        "render_structured_interview": true
      },
      "codigo_dsm5": "307.42",
      "codigo_cid10": "F51.01",
      "faixa_etaria_alvo": "ambos",
      "versao_complementar_existe": false,
      "inventario_clinico": {
        "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 307.42 (F51.01)",
        "estrutura_efetiva": "- **Estrutura efetiva:**",
        "notas_clinicas": "- **Notas:**"
      },
      "codigo_cid11": "7A00",
      "super_enrichment": {
        "id": "transtorno_insonia",
        "nome_original": "TRANSTORNO DE INSONIA",
        "comorbidades_frequentes": [
          {
            "condicao": "Transtorno Depressivo Maior",
            "frequencia": "alta",
            "nota": null
          },
          {
            "condicao": "Transtornos de ansiedade",
            "frequencia": "alta",
            "nota": null
          },
          {
            "condicao": "Transtornos bipolares",
            "frequencia": "alta",
            "nota": null
          },
          {
            "condicao": "Transtornos relacionados ao uso de substâncias",
            "frequencia": "moderada",
            "nota": null
          }
        ],
        "diagnostico_diferencial": [
          {
            "condicao": "Variações normais do sono",
            "ponto_distincao": "Pessoas com sono curto não apresentam dificuldade para conciliar ou manter o sono nem sintomas diurnos típicos.",
            "pertence_a_classe": false
          },
          {
            "condicao": "Transtorno do sono-vigília do ritmo circadiano",
            "ponto_distincao": "Ritmo circadiano: insônia apenas quando há descompasso entre horário de dormir e ritmo endógeno.",
            "pertence_a_classe": true
          },
          {
            "condicao": "Síndrome das pernas inquietas",
            "ponto_distincao": "SPI distingue-se pela necessidade de movimentar as pernas acompanhada de sensações desconfortáveis.",
            "pertence_a_classe": true
          },
          {
            "condicao": "Transtornos do sono relacionados à respiração",
            "ponto_distincao": "Apneia do sono: história de roncos altos, pausas respiratórias e sonolência diurna excessiva.",
            "pertence_a_classe": true
          },
          {
            "condicao": "Narcolepsia",
            "ponto_distincao": "Narcolepsia distingue-se pela predominância de sonolência diurna excessiva, cataplexia, paralisia do sono e alucinações.",
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
          "populacao_geral": "6–10% atendem critérios do transtorno; 10–15% com prejuízos diurnos; ~1/3 com sintomas.",
          "proporcao_sexo": "1,44:1 F:M",
          "variacoes_culturais": null
        },
        "curso_desenvolvimento": {
          "idade_inicio_tipica": "Adultos jovens; também menopausa e idade avançada",
          "trajetoria": "Pode ser ocasional, persistente ou recorrente. Taxas de cronicidade 45–75% em 1–7 anos.",
          "prognostico": "Melhor com terapia cognitivo-comportamental do sono (TCC-I)."
        },
        "instrumentos_complementares": [
          {
            "nome": "Polissonografia",
            "sigla": "PSG",
            "uso": "diagnostico",
            "obrigatorio_para_diagnostico": false,
            "fonte": "mencionado_no_dsm"
          },
          {
            "nome": "Diário do Sono",
            "sigla": null,
            "uso": "triagem",
            "obrigatorio_para_diagnostico": false,
            "fonte": "mencionado_no_dsm"
          },
          {
            "nome": "Actigrafia",
            "sigla": null,
            "uso": "monitoramento",
            "obrigatorio_para_diagnostico": false,
            "fonte": "mencionado_no_dsm"
          }
        ],
        "transtorno_de_insonia": "**codigo_dsm5**: 307.42 (F51.01)\n**codigo_cid10**: G47.00 (comorbidade)\n**categoria**: Transtornos do Sono-Vigilia\n**estrutura_diagnostica**: monothetic_tripartite (sintomas + sofrimento/prejuizo + exclusoes)",
        "criterios_obrigatorios": [
          {
            "id": "completo",
            "texto": "**A. Queixa de insatisfacao com quantidade ou qualidade do sono** com PELO MENOS UM dos seguintes:\n  1. Dificuldade para iniciar o sono (em criancas: sem intervencao de cuidadores)\n  2. Dificuldade para manter o sono (despertares frequentes ou problemas para retornar ao sono)\n  3. Despertar antes do horario habitual com incapacidade de retornar ao sono\n\n**B. Sofrimento clinicamente significativo ou prejuizo funcional** (social, profissional, educacional, academico, comportamental ou outras areas)\n\n**C. Frequencia**: Ocorre pelo menos 3 noites por semana\n\n**D. Duracao**: Persiste durante pelo menos 3 meses\n\n**E. Oportunidades adequadas**: Ocorre a despeito de oportunidades adequadas para dormir\n\n**F. Exclusao de outros transtornos do sono**: Nao e melhor explicada por narcolepsia, transtorno do sono relacionado a respiracao, transtorno do ritmo circadiano ou parassonia\n\n**G. Exclusao de substancias**: Nao e atribuida aos efeitos fisiologicos de substancia (drogas ilicitas, medicamentos)\n\n**H. Exclusao de comorbidades**: Coexistencia de transtornos mentais e condicoes medicas NAO explica adequadamente a queixa predominante de insonia"
          }
        ],
        "regra_diagnostica": "**Regra**: A AND B AND C AND D AND E AND F AND G AND H\n- Critério A = pelo menos 1 dos 3 sintomas obrigatorio\n- Critérios C+D = limiar de frequência e duração\n- Critérios F+G+H = exclusões diferenciais obrigatórias\n- **Nota**: Insonia pode ser diagnosticada como condicao independente OU comorbida com transtorno mental, condicao medica ou outro transtorno do sono. Nao e necessario estabelecer relacao causal — basta a coexistencia quando a insonia e suficientemente grave para justificar atencao clinica independente.",
        "especificadores": [
          "Com comorbidade mental (incluindo transtornos por uso de substancias)",
          "Com outra comorbidade medica",
          "Com outro transtorno do sono",
          "Codigo 780.52 (G47.00) aplica-se a todos os tres especificadores"
        ],
        "especificadores_curso": [
          {
            "Curso": "Episodico",
            "Definicao": "Sintomas duram >= 1 mes, porem < 3 meses"
          },
          {
            "Curso": "Persistente",
            "Definicao": "Sintomas duram 3 meses ou mais"
          },
          {
            "Curso": "Recorrente",
            "Definicao": "Dois ou mais episodios dentro de 1 ano"
          }
        ],
        "notas_codificacao": "- Insonia aguda/curto prazo (< 3 meses mas atende todos outros criterios) → codificar como **Outro Transtorno de Insonia Especificado**\n- Sono nao reparador isolado (ausencia de dificuldades de iniciar/manter, mas atende frequencia, duracao, sofrimento/prejuizo) → Outro Transtorno de Insonia Especificado ou Nao Especificado",
        "gravidade": {
          "texto_completo": "**tem_gravidade_formal**: false\n**tipo**: nao_aplica\n**nota**: O DSM-5 nao define niveis formais de gravidade para insonia. A gravidade e avaliada clinicamente pela frequencia/intensidade dos sintomas e prejuizos funcionais. Critérios quantitativos ilustrativos (nao obrigatorios):\n- Latencia para iniciar sono: > 20-30 minutos\n- Tempo acordado apos despertar: > 20-30 minutos\n- Despertar precoce: >= 30 min antes do horario, com sono total < 6.5h"
        },
        "duracao_e_inicio": "| Parametro | Valor |\n|-----------|-------|\n| Duracao minima | 3 meses (para diagnostico formal) |\n| Frequencia minima | 3 noites/semana |\n| Idade de inicio tipica | Qualquer idade; mais comum em adultos jovens |\n| Curso | Episodico, persistente ou recorrente |",
        "prejuizo_funcional": "- Fadiga ou sonolencia diurna\n- Prejuizos cognitivos: atencao, concentracao, memoria\n- Perturbacoes de humor: irritabilidade, labilidade, sintomas depressivos/ansiosos\n- Problemas interpessoais, sociais e profissionais\n- Risco aumentado de acidentes",
        "exclusoes_obrigatorias": "| Condicao | Caracteristica Diferenciadora |\n|----------|-------------------------------|\n| Variacao normal de sono (pessoa de sono curto) | Sem dificuldade para conciliar/manter sono; sem sintomas diurnos |\n| Privacao de sono (circunstancial) | Oportunidades inadequadas para dormir |\n| Insonia situacional/aguda | < 1-3 meses → Outro Transtorno de Insonia Especificado |\n| Ritmo circadiano (fase atrasada) | Dificuldade APENAS em horarios sociais; sem problemas quando segue ritmo proprio |\n| Ritmo circadiano (trabalho em turnos) | Historia de mudanca recente no horario de trabalho |\n| Sindrome das pernas inquietas | Necessidade de mover pernas com sensacoes desconfortaveis |\n| Apneia do sono | Roncos altos, pausas respiratorias, sonolencia excessiva diurna |\n| Narcolepsia | Sonolencia diurna excessiva, cataplexia, paralisia do sono |\n| Parassonias | Comportamentos/eventos incomuns durante sono dominam o quadro |\n| Substancia/medicamento | Etiologicamente relacionada a substancia |",
        "perguntas_chave_entrevista": [
          {
            "numero": 1,
            "texto": "Com que frequencia voce tem dificuldade para pegar no sono?"
          },
          {
            "numero": 2,
            "texto": "Voce acorda varias vezes durante a noite e tem dificuldade para voltar a dormir?"
          },
          {
            "numero": 3,
            "texto": "Voce acorda muito cedo, antes do horario desejado, e nao consegue mais dormir?"
          },
          {
            "numero": 4,
            "texto": "Ha quanto tempo esses problemas vêm ocorrendo?"
          },
          {
            "numero": 5,
            "texto": "Com que frequencia por semana?"
          },
          {
            "numero": 6,
            "texto": "Voce tem oportunidade adequada para dormir (tempo e ambiente)?"
          },
          {
            "numero": 7,
            "texto": "Esses problemas causam sofrimento ou dificuldade em alguma area da sua vida?"
          },
          {
            "numero": 8,
            "texto": "Voce ronca fortemente, tem pausas na respiracao durante o sono ou sonolencia excessiva durante o dia?"
          },
          {
            "numero": 9,
            "texto": "Sente necessidade de mexer as pernas ou sensacoes desconfortaveis nelas ao deitar?"
          },
          {
            "numero": 10,
            "texto": "Usa alguma substancia ou medicamento que possa estar afetando seu sono?"
          },
          {
            "numero": 11,
            "texto": "Voce trabalha em turnos ou mudou recentemente seu horario?"
          },
          {
            "numero": 12,
            "texto": "Existe um transtorno mental ou condicao medica que explica completamente a insonia?"
          }
        ],
        "ui": {}
      },
      "super_enrichment_source": "dsm/output/json_super_adicionado/transtorno_insonia.json",
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
