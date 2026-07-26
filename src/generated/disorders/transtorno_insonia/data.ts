import { TranstornoInsoniaSchema } from "./schema";

export const data = TranstornoInsoniaSchema.parse({
  "$schema_version": "2.2.0",
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
                "pergunta": "A pessoa tem dificuldade para pegar no sono quando vai deitar?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Latência do sono superior a 20–30 minutos"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Dificuldade para manter o sono",
                "desc": "Dificuldade para manter o sono, com despertares frequentes ou problemas para retornar ao sono após cada despertar. Em crianças, pode manifestar-se como dificuldade para retornar ao sono sem intervenção de cuidadores.",
                "pergunta": "A pessoa acorda várias vezes durante a noite ou tem dificuldade de voltar a dormir?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Permanecer desperto mais de 20–30 minutos após despertar"
                ]
            },
            {
                "id": "A3",
                "rotulo": "Despertar antes do horário habitual",
                "desc": "Despertar antes do horário habitual com incapacidade de retornar ao sono.",
                "pergunta": "A pessoa acorda muito mais cedo do que gostaria e não consegue voltar a dormir?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Despertar pelo menos 30 minutos antes do programado"
                ]
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
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
        "icone": "Frown",
        "descricao_completa": "A perturbação do sono causa sofrimento clinicamente significativo e prejuízo no funcionamento social, profissional, educacional, acadêmico, comportamental ou em outras áreas importantes.",
        "nota": null
    },
    {
        "id": "frequencia_3x_semana",
        "letra": "C",
        "rotulo": "Dificuldades pelo menos três noites por semana",
        "tipo": "temporal_frequencia",
        "ui_widget": "campo_frequencia_semanal",
        "obrigatorio": true,
        "icone": "Repeat",
        "descricao_completa": "As dificuldades relacionadas ao sono ocorrem pelo menos três noites por semana.",
        "nota": null
    },
    {
        "id": "duracao_3meses",
        "letra": "D",
        "rotulo": "Duração mínima de três meses",
        "tipo": "temporal_duracao_minima",
        "ui_widget": "campo_duracao_meses",
        "obrigatorio": true,
        "icone": "Calendar",
        "descricao_completa": "As dificuldades relacionadas ao sono permanecem durante pelo menos três meses.",
        "nota": null
    },
    {
        "id": "oportunidades_adequadas",
        "letra": "E",
        "rotulo": "Ocorrem a despeito de oportunidades adequadas para dormir",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "ClipboardCheck",
        "descricao_completa": "As dificuldades relacionadas ao sono ocorrem a despeito de oportunidades adequadas para dormir.",
        "nota": null
    },
    {
        "id": "exclusao_outro_sono",
        "letra": "F",
        "rotulo": "Não explicada por outro transtorno do sono-vigília",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "A insônia não é mais bem explicada ou não ocorre exclusivamente durante o curso de outro transtorno do sono-vigília (narcolepsia, transtorno do sono relacionado à respiração, transtorno do sono-vigília do ritmo circadiano, parassonia).",
        "nota": null,
        "ddx_sugeridos": [
            "narcolepsia",
            "apneia_sono",
            "ritmo_circadiano",
            "parassonia"
        ]
    },
    {
        "id": "exclusao_substancia",
        "letra": "G",
        "rotulo": "Não atribuível aos efeitos fisiológicos de substância",
        "tipo": "exclusao_substancia_medica",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "A insônia não é atribuída aos efeitos fisiológicos de alguma substância (drogas ilícitas, medicamentos).",
        "nota": null
    },
    {
        "id": "exclusao_comorbidade",
        "letra": "H",
        "rotulo": "Condições coexistentes não explicam a queixa predominante",
        "tipo": "condicional_comorbidade",
        "ui_widget": "toggle_condicional",
        "obrigatorio": true,
        "icone": "GitBranch",
        "descricao_completa": "A coexistência de transtornos mentais e de condições médicas não explica adequadamente a queixa predominante de insônia.",
        "nota": null
    }
],
  "subtipos": {
    "presente": false,
    "nome": null,
    "natureza": null,
    "formal_dsm": false,
    "mutuamente_exclusivos": null,
    "subtipos": [],
    "nota_aplicador": "O DSM-5-TR não define subtipos formais para este diagnóstico."
},
  "especificadores": [
    {
        "id": "com_comorbidade_mental",
        "nome": "Com comorbidade mental",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "com_comorbidade_medica",
        "nome": "Com outra comorbidade médica",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "com_outro_transtorno_sono",
        "nome": "Com outro transtorno do sono",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "curso",
        "nome": "Curso",
        "tipo": "enum",
        "ortogonal": false,
        "opcoes": [
            "Episódico",
            "Persistente",
            "Recorrente"
        ],
        "regra_criterial": "Episódico: Sintomas duram pelo menos um mês, porém menos que três meses.; Persistente: Sintomas duram três meses ou mais.; Recorrente: Dois ou mais episódios dentro do espaço de um ano."
    }
],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "7A00",
        "equivalencia": "aproximada",
        "regra": "7A00 corresponde a insônia crônica; curso curto ou não especificado requer 7A01 ou 7A0Z conforme o caso.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno de insônia."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": null,
      },
  "dominios_impacto": [
    {
        "id": "sono",
        "label": "Qualidade do Sono",
        "icone": "Bed",
        "relevante_para": "transversal"
    },
    {
        "id": "cognitivo",
        "label": "Desempenho Cognitivo Diurno",
        "icone": "Brain",
        "relevante_para": "transversal"
    },
    {
        "id": "social",
        "label": "Funcionamento social",
        "icone": "Users",
        "relevante_para": "transversal"
    },
    {
        "id": "ocupacional",
        "label": "Desempenho ocupacional",
        "icone": "Briefcase",
        "relevante_para": "adulto"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "variacoes_normais_do_sono",
        "condicao": "Variações normais do sono",
        "natureza": "variacao_normativa",
        "ponto_distincao": "Pessoas com sono curto não apresentam dificuldade para conciliar ou manter o sono nem sintomas diurnos típicos.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_do_sono_vigilia_do_ritmo_circadiano",
        "condicao": "Transtorno do sono-vigília do ritmo circadiano",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Ritmo circadiano: insônia apenas quando há descompasso entre horário de dormir e ritmo endógeno.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "sindrome_das_pernas_inquietas",
        "condicao": "Síndrome das pernas inquietas",
        "natureza": "transtorno_mental",
        "ponto_distincao": "SPI distingue-se pela necessidade de movimentar as pernas acompanhada de sensações desconfortáveis.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtornos_do_sono_relacionados_a_respiracao",
        "condicao": "Transtornos do sono relacionados à respiração",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Apneia do sono: história de roncos altos, pausas respiratórias e sonolência diurna excessiva.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "narcolepsia",
        "condicao": "Narcolepsia",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Narcolepsia distingue-se pela predominância de sonolência diurna excessiva, cataplexia, paralisia do sono e alucinações.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "condicao_dolorosa_ou_outra_doenca_medica_que_perturba_o_sono",
        "condicao": "Condição dolorosa ou outra doença médica que perturba o sono",
        "natureza": "condicao_medica",
        "ponto_distincao": "A condição pode explicar a queixa; insônia pode coexistir quando mantém curso e prejuízo próprios.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "insonia_induzida_por_substancia_ou_medicamento",
        "condicao": "Insônia induzida por substância ou medicamento",
        "natureza": "substancia_medicamento",
        "ponto_distincao": "Cafeína, estimulantes, álcool, nicotina e medicamentos podem explicar o curso temporal da insônia.",
        "pertence_a_mesma_classe_dsm": false
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
        "id": "isi",
        "nome": "Índice de Gravidade da Insônia",
        "sigla": "ISI",
        "uso": "gravidade_monitoramento",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "diario_sono",
        "nome": "Diário de sono",
        "sigla": null,
        "uso": "monitoramento",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "polissonografia",
        "nome": "Polissonografia",
        "sigla": "PSG",
        "uso": "investigacao_diferencial",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Não é necessária para diagnosticar insônia; usar quando houver suspeita de outro transtorno do sono."
    }
],
  "prevalencia": {
    "populacao_geral": "6–10% atendem critérios do transtorno; 10–15% com prejuízos diurnos; ~1/3 com sintomas.",
    "proporcao_sexo": "1,44:1 F:M",
    "variacoes_culturais": null,
    "notas": "Mais prevalente em mulheres e idosos.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Adultos jovens; também menopausa e idade avançada",
    "trajetoria": "Pode ser ocasional, persistente ou recorrente. Taxas de cronicidade 45–75% em 1–7 anos.",
    "prognostico": "Melhor com terapia cognitivo-comportamental do sono (TCC-I).",
      },
  
  "_pipeline": {
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
        "specifiers": [
          "Com comorbidade mental",
          "Com comorbidade medica",
          "Com outro transtorno do sono",
          "Episodico",
          "Persistente",
          "Recorrente"
        ],
        "operational_profiles": [],
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
    "enrichment_status": {
        "has_poor": true,
        "has_master": true,
        "has_inventory": true,
        "has_hierarchy": false,
        "has_cid11": true,
            "match_notes": {
          "poor": "id",
          "master": "id",
          "inventario": "id",
          "hierarquia": "missing",
          "cid11": "id",
          "super": "id"
        }
      }
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
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:**",
    "notas_clinicas": "- **Notas:**"
  },
  
});
export type DisorderData = typeof data;
