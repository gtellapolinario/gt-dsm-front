import { TranstornoDepressivoPersistenteSchema } from "./schema";

export const data = TranstornoDepressivoPersistenteSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "transtorno_depressivo_persistente",
    "nome_completo": "Transtorno Depressivo Persistente (Distimia)",
    "codigo": {
        "dsm5": "",
        "cid10": "F34.1",
        "cid11": "6A72"
    },
    "capitulo": "Transtornos Depressivos",
    "capitulo_id": "transtornos_depressivos",
    "sigla": "TDP",
    "codificacao": {
        "cid10_cm": {
            "referencia_base": "F34.1",
            "equivalencia": "direta",
            "regra": "Correspondência diagnóstica direta no nível informado; confirmar especificadores e requisitos da versão CID-10-CM adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6A72",
            "equivalencia": "direta",
            "regra": "Correspondência diagnóstica direta; selecionar eventual subcategoria de curso, gravidade ou remissão quando aplicável.",
            "versao": "CID-11 MMS 2026-01"
        }
    },
    "agrupamento": {
        "capitulo": {
            "id": "transtornos_depressivos",
            "label": "Transtornos Depressivos"
        },
        "subgrupo": null
    },
    "faixa_etaria_alvo": "transversal",
    "terminologia_relacionada": [
        {
            "termo": "Distimia",
            "status": "historico",
            "equivalencia": "parcial",
            "nota": null
        },
        {
            "termo": "Transtorno distímico",
            "status": "historico",
            "equivalencia": "parcial",
            "nota": null
        },
        {
            "termo": "Depressão crônica",
            "status": "termo_descritivo",
            "equivalencia": "parcial",
            "nota": null
        },
        {
            "termo": "Transtorno depressivo maior crônico",
            "status": "historico",
            "equivalencia": "parcial",
            "nota": null
        }
    ]
},
  "estrutura_geral": "polythetic_com_ancora",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Humor deprimido persistente",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Humor deprimido persistente (≥2 anos/≥1 ano criança)",
                "desc": "Humor deprimido na maior parte do dia, na maioria dos dias, por no mínimo 2 anos em adultos (1 ano em crianças/adolescentes; pode ser irritável).",
                "pergunta": "A pessoa tem se sentido deprimido a maior parte do tempo durante os últimos 2 anos (ou 1 ano para crianças)?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "'Sempre fui assim'",
                    "Tristeza crônica de baixa intensidade"
                ]
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    },
    {
        "id": "B",
        "nome": "Sintomas associados ao humor deprimido",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 2,
            "pediatria": 2
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "B1",
                "rotulo": "Apetite diminuído ou alimentação excessiva",
                "desc": "Apetite diminuído ou alimentação em excesso enquanto deprimido.",
                "pergunta": "A pessoa come muito menos ou muito mais do que o habitual quando está deprimido?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Perda de apetite crônica",
                    "Comer compulsivamente"
                ]
            },
            {
                "id": "B2",
                "rotulo": "Insônia ou hipersonia",
                "desc": "Dificuldade para dormir ou dormir em excesso.",
                "pergunta": "A pessoa tem problemas crônicos com o sono?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Insônia de manutenção crônica"
                ]
            },
            {
                "id": "B3",
                "rotulo": "Baixa energia ou fadiga",
                "desc": "Sensação persistente de baixa energia ou fadiga.",
                "pergunta": "A pessoa se sente com pouca energia ou cansado a maior parte do tempo?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Fadiga crônica sem causa médica identificada"
                ]
            },
            {
                "id": "B4",
                "rotulo": "Baixa autoestima",
                "desc": "Visão negativa persistente de si mesmo.",
                "pergunta": "A pessoa costuma se sentir incapaz, sem valor ou inferior aos outros?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Autocrítica constante",
                    "Sentimento de inadequação crônica"
                ]
            },
            {
                "id": "B5",
                "rotulo": "Concentração pobre ou dificuldade de decidir",
                "desc": "Dificuldade em se concentrar ou tomar decisões.",
                "pergunta": "A pessoa tem dificuldade para se concentrar ou para decidir sobre coisas do dia a dia?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Indecisão crônica em situações simples"
                ]
            },
            {
                "id": "B6",
                "rotulo": "Sentimentos de desesperança",
                "desc": "Sensação persistente de que as coisas não vão melhorar.",
                "pergunta": "A pessoa frequentemente sente que as coisas nunca vão melhorar?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Pessimismo crônico sobre o futuro"
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
        "id": "sem_periodo_livre_maior_2meses",
        "letra": "C",
        "rotulo": "Sem período livre superior a 2 meses durante os 2 anos",
        "tipo": "temporal_proporcao",
        "ui_widget": "toggle_simples",
        "obrigatorio": true,
        "icone": "Calendar",
        "descricao_completa": "Durante o período de 2 anos (1 ano para crianças/adolescentes), o indivíduo jamais esteve sem os sintomas dos Critérios A e B por mais de 2 meses consecutivos.",
        "nota": null
    },
    {
        "id": "edm_pode_estar_presente",
        "letra": "D",
        "rotulo": "EDM pode estar presente continuamente por 2 anos",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": false,
        "icone": "ClipboardCheck",
        "descricao_completa": "Os critérios para EDM podem estar continuamente presentes por 2 anos — nesse caso, ambos os diagnósticos são feitos.",
        "nota": null
    },
    {
        "id": "exclusao_mania_hipomania_ciclotimia",
        "letra": "E",
        "rotulo": "Nunca houve episódio maníaco/hipomaníaco ou ciclotimia",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Jamais houve episódio maníaco ou hipomaníaco e jamais foram satisfeitos critérios para transtorno ciclotímico.",
        "nota": null,
        "ddx_sugeridos": [
            "transtorno_bipolar_tipo_1",
            "transtorno_bipolar_tipo_2",
            "transtorno_ciclotimico"
        ]
    },
    {
        "id": "exclusao_psicotico_persistente",
        "letra": "F",
        "rotulo": "Não melhor explicado por transtorno psicótico persistente",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "A perturbação não é mais bem explicada por transtorno esquizoafetivo persistente, esquizofrenia, transtorno delirante ou outro transtorno psicótico.",
        "nota": null,
        "ddx_sugeridos": [
            "transtorno_esquizoafetivo_persistente",
            "esquizofrenia",
            "transtorno_delirante",
            "transtorno_esquizoafetivo"
        ]
    },
    {
        "id": "exclusao_substancia_medica",
        "letra": "G",
        "rotulo": "Não atribuível a substância ou condição médica",
        "tipo": "exclusao_substancia_medica",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Os sintomas não se devem aos efeitos fisiológicos de uma substância ou a outra condição médica (ex: hipotireoidismo).",
        "nota": null,
        "ddx_sugeridos": [
            "hipotireoidismo"
        ]
    },
    {
        "id": "sofrimento_funcional",
        "letra": "H",
        "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Frown",
        "descricao_completa": "Os sintomas causam sofrimento clinicamente significativo ou prejuízo no funcionamento social, profissional ou em outras áreas importantes.",
        "nota": null
    }
],
  "subtipos": {
    "presente": true,
    "nome": "Padrão nos últimos 2 anos",
    "natureza": "padrao_de_curso",
    "formal_dsm": true,
    "mutuamente_exclusivos": true,
    "subtipos": [
        {
            "id": "tdp_sindrome_distimica_pura",
            "label": "Com síndrome distímica pura",
            "descricao": "Não satisfeitos critérios para episódio depressivo maior pelos últimos 2 anos.",
            "codigo": {
                "dsm5_legacy": "300.4",
                "cid10_cm": "F34.1",
                "cid11_mms": "6A72",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "tdp_edm_persistente",
            "label": "Com episódio depressivo maior persistente",
            "descricao": "Critérios para episódio depressivo maior satisfeitos durante todo o período dos últimos 2 anos.",
            "codigo": {
                "dsm5_legacy": "300.4",
                "cid10_cm": "F34.1",
                "cid11_mms": "6A72",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "tdp_edm_intermitente_com_atual",
            "label": "Com episódio depressivo maior intermitentes, com episódio atual",
            "descricao": "Critérios atuais para episódio depressivo maior satisfeitos; houve períodos pelo menos oito semanas abaixo do limiar nos 2 anos anteriores.",
            "codigo": {
                "dsm5_legacy": "300.4",
                "cid10_cm": "F34.1",
                "cid11_mms": "6A72",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "tdp_edm_intermitente_sem_atual",
            "label": "Com episódio depressivo maior intermitentes, sem episódio atual",
            "descricao": "Critérios atuais para episódio depressivo maior não satisfeitos; houve ≥1 episódio depressivo maior nos 2 anos anteriores.",
            "codigo": {
                "dsm5_legacy": "300.4",
                "cid10_cm": "F34.1",
                "cid11_mms": "6A72",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        }
    ],
    "nota_aplicador": "Selecione somente opções sustentadas pela avaliação clínica."
},
  "especificadores": [
    {
        "id": "inicio",
        "nome": "Início",
        "tipo": "enum",
        "ortogonal": false,
        "opcoes": [
            "Início precoce",
            "Início tardio"
        ],
        "regra_criterial": "Início precoce: Início antes dos 21 anos.; Início tardio: Início aos 21 anos ou mais."
    },
    {
        "id": "com_sintomas_ansiosos",
        "nome": "Com sintomas ansiosos",
        "tipo": "escala_ordinal",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "com_caracteristicas_mistas",
        "nome": "Com características mistas",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    }
],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6A72",
        "equivalencia": "direta",
        "regra": "Correspondência diagnóstica direta; selecionar eventual subcategoria de curso, gravidade ou remissão quando aplicável.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "gravidade_atual",
    "tipo": "sintomas_intensidade_e_prejuizo",
    "lembrete_aplicador": "Classifique a gravidade atual pelo número e intensidade dos sintomas e pelo prejuízo funcional.",
    "niveis": [
        {
            "id": "leve",
            "label": "Leve",
            "descritor": "Poucos sintomas além do mínimo; sofrimento manejável e pequeno prejuízo funcional."
        },
        {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "Número, intensidade dos sintomas ou prejuízo entre leve e grave."
        },
        {
            "id": "grave",
            "label": "Grave",
            "descritor": "Sintomas substancialmente excedentes, sofrimento não manejável ou prejuízo funcional acentuado."
        }
    ],
    "regra_atribuicao": "Integre quantidade e intensidade dos sintomas com o funcionamento atual."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [
      "transtorno_bipolar_tipo_1",
      "transtorno_bipolar_tipo_2",
      "transtorno_ciclotimico"
    ],
    "exclui_diagnostico_de": [],
    "notas": "Se critérios para EDM satisfeitos durante o período de TDP, ambos os diagnósticos são registrados (EDM como especificador do TDP, não separado).",
      },
  "dominios_impacto": [
    {
        "id": "ocupacional",
        "label": "Desempenho ocupacional",
        "icone": "Briefcase",
        "relevante_para": "adulto"
    },
    {
        "id": "social",
        "label": "Funcionamento social",
        "icone": "Users",
        "relevante_para": "transversal"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "transtorno_depressivo_maior",
        "condicao": "Transtorno Depressivo Maior",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno Depressivo Persistente requer 2 anos de humor deprimido; se episódio depressivo maior satisfeito, é especificador — não diagnóstico separado.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtornos_psicoticos",
        "condicao": "Transtornos psicóticos",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno Depressivo Persistente não diagnosticado se sintomas ocorrem somente durante transtorno psicótico.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_depressivo_bipolar_devido_a_condicao_medica",
        "condicao": "Transtorno depressivo/bipolar devido a condição médica",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Se condição médica crônica é causa fisiopatológica direta, usar diagnóstico específico.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_da_personalidade",
        "condicao": "Transtorno da personalidade",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Podem coexistir; se critérios de ambos satisfeitos, ambos os diagnósticos são dados.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "hipotireoidismo_anemia_ou_condicao_neurologica",
        "condicao": "Hipotireoidismo, anemia ou condição neurológica",
        "natureza": "condicao_medica",
        "ponto_distincao": "Sintomas somáticos e curso vinculados à condição médica favorecem etiologia orgânica, sem excluir comorbidade.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_depressivo_induzido_por_substancia_ou_medicamento",
        "condicao": "Transtorno depressivo induzido por substância ou medicamento",
        "natureza": "substancia_medicamento",
        "ponto_distincao": "Curso temporalmente ligado ao agente e melhora após sua retirada favorecem etiologia induzida.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtornos de ansiedade",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtornos por uso de substâncias",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtornos de personalidade grupos B e C",
      "frequencia": "alta",
      "nota": "Especialmente em início precoce."
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "phq_9",
        "nome": "Questionário de Saúde do Paciente – 9 itens",
        "sigla": "PHQ-9",
        "uso": "triagem_monitoramento",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "tipo_estimativa": "prevalencia_12_meses",
    "estimativa": "0,5% para TDP e 1,5% para TDM crônico (prevalência de 12 meses nos EUA)",
    "distribuicao_por_sexo": null,
    "variacoes_contextuais": null,
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Frequentemente precoce e insidioso, na infância, adolescência ou início da vida adulta; início tardio também ocorre.",
    "trajetoria": "Persistente por definição, com intensidade flutuante e possíveis episódios depressivos maiores sobrepostos.",
    "prognostico": "Início precoce, maior duração, comorbidades e sintomas sobrepostos associam-se a maior prejuízo funcional.",
    "nota_aplicador": "Início e trajetória são descritores típicos, não critérios isolados; um curso diferente exige reavaliação, mas não exclusão automática."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [],
        "diagnostic_rule": "- A (humor deprimido ≥2 anos) + B (≥2 de 6 sintomas) + C (sem remissão >2 meses) + D-H (exclusões)",
        "clusters": [],
        "duration": null,
        "age_onset": null,
        "functional_impairment": null,
        "exclusions": [],
        "specifiers": [],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [
          "Você se sente deprimido ou desanimado na maior parte do tempo há quanto tempo?",
          "Nesse período, houve algum intervalo de mais de 2 meses sem se sentir assim?",
          "Nos últimos 2 anos, houve períodos em que os sintomas foram muito piores?",
          "Já teve algum período de humor anormalmente elevado?",
          "Como isso afeta seu funcionome_completonto diário?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### Transtorno DEPRESSIVO PERSISTENTE (DISTIMIA)",
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
        "has_hierarchy": true,
        "has_cid11": true,
            "match_notes": {
          "poor": "id",
          "master": "id",
          "inventario": "id",
          "hierarquia": "id",
          "cid11": "id",
          "super": "id"
        }
      }
  },
  "metadados_globais": {
    "fonte_capitulo_md": "04_transtornos_depressivos.md",
    "fonte_inventario_md": "inventario/04_inventario.md",
    "data_extracao": "2026-05-31",
    "modelo_agente": "claude-sonnet-4-6",
    "lacunas_globais": [
      "razao_sexo",
      "prevalencia_global",
      "herdabilidade_estimada"
    ],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": "Lacunas em epidemiologia de comunidade, genética molecular e dados de proporção sexual marcadas como ausentes no texto fonte.",
    "revisao_humana_necessaria": false
  },
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:** A (humor deprimido maior parte do dia, maioria dos dias, >=2 anos [>=1 ano em criancas/adolescentes]) + B (>=2/6 sintomas: apetite, sono, energia, autoestima, concentracao, desesperanca) + C (sem periodo livre >2 meses durante os 2 anos) + D (criterios para TDM podem estar continuamente presentes) + E (nunca episodio maníaco/hipomaníaco, nunca ciclotimico) + F (nao melhor explicado por transtorno psicótico) + G (nao por substancia/condicao médica) + H (sofrimento/prejuizo funcional)",
    "notas_clinicas": "- **Notas:**"
  },
  
});
export type DisorderData = typeof data;
