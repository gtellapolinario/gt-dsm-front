import { TranstornoDepressivoPersistenteSchema } from "./schema";

export const data = TranstornoDepressivoPersistenteSchema.parse({
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_depressivo_persistente",
    "nome_completo": "Transtorno Depressivo Persistente (Distimia)",
    "sigla": "TDP",
    "codigo": {
      "dsm5": "300.4",
      "cid10": "F34.1",
      "cid11": "6A71"
    },
    "capitulo": "Transtornos Depressivos",
    "capitulo_id": "04",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Distimia",
      "Transtorno distímico DSM-IV",
      "Depressão crônica",
      "TDM crônico"
    ]
  },
  "estrutura_geral": "polythetic_com_ancora",
  "clusters_sintomas": [
    {
      "id": "A",
      "nome": "Humor Deprimido Crônico (âncora) + ≥2 de Critério B",
      "tipo": "polythetic_com_ancora",
      "limiar": {
        "adulto": 2,
        "pediatria": 2
      },
      "ancora_obrigatoria": {
        "descricao": "A1 (humor deprimido) é obrigatório; mais ≥2 sintomas de B1-B6",
        "ids_obrigatorios": [
          "A1"
        ],
        "n_minimo": 1
      },
      "sintomas": [
        {
          "id": "A1",
          "rotulo": "Humor deprimido persistente (≥2 anos/≥1 ano criança)",
          "desc": "Humor deprimido na maior parte do dia, na maioria dos dias, por no mínimo 2 anos em adultos (1 ano em crianças/adolescentes; pode ser irritável).",
          "pergunta": "Você tem se sentido deprimido a maior parte do tempo durante os últimos 2 anos (ou 1 ano para crianças)?",
          "exemplos_clinicos": [
            "'Sempre fui assim'",
            "Tristeza crônica de baixa intensidade"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "B1",
          "rotulo": "Apetite diminuído ou alimentação excessiva",
          "desc": "Apetite diminuído ou alimentação em excesso enquanto deprimido.",
          "pergunta": "Você come muito menos ou muito mais do que o habitual quando está deprimido?",
          "exemplos_clinicos": [
            "Perda de apetite crônica",
            "Comer compulsivamente"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "B2",
          "rotulo": "Insônia ou hipersonia",
          "desc": "Dificuldade para dormir ou dormir em excesso.",
          "pergunta": "Você tem problemas crônicos com o sono?",
          "exemplos_clinicos": [
            "Insônia de manutenção crônica"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "B3",
          "rotulo": "Baixa energia ou fadiga",
          "desc": "Sensação persistente de baixa energia ou fadiga.",
          "pergunta": "Você se sente com pouca energia ou cansado a maior parte do tempo?",
          "exemplos_clinicos": [
            "Fadiga crônica sem causa médica identificada"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "B4",
          "rotulo": "Baixa autoestima",
          "desc": "Visão negativa persistente de si mesmo.",
          "pergunta": "Você costuma se sentir incapaz, sem valor ou inferior aos outros?",
          "exemplos_clinicos": [
            "Autocrítica constante",
            "Sentimento de inadequação crônica"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "B5",
          "rotulo": "Concentração pobre ou dificuldade de decidir",
          "desc": "Dificuldade em se concentrar ou tomar decisões.",
          "pergunta": "Você tem dificuldade para se concentrar ou para decidir sobre coisas do dia a dia?",
          "exemplos_clinicos": [
            "Indecisão crônica em situações simples"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "B6",
          "rotulo": "Sentimentos de desesperança",
          "desc": "Sensação persistente de que as coisas não vão melhorar.",
          "pergunta": "Você frequentemente sente que as coisas nunca vão melhorar?",
          "exemplos_clinicos": [
            "Pessimismo crônico sobre o futuro"
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
      "id": "sem_periodo_livre_maior_2meses",
      "letra": "C",
      "rotulo": "Sem período livre >2 meses durante os 2 anos",
      "tipo": "temporal_proporcao",
      "ui_widget": "toggle_simples",
      "obrigatorio": true,
      "icone": "Calendar",
      "ddx_sugeridos": [],
      "descricao_completa": "Durante o período de 2 anos (1 ano para crianças/adolescentes), o indivíduo jamais esteve sem os sintomas dos Critérios A e B por mais de 2 meses consecutivos.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "edm_pode_estar_presente",
      "letra": "D",
      "rotulo": "EDM pode estar presente continuamente por 2 anos",
      "tipo": "temporal_duracao_minima",
      "ui_widget": "toggle_simples",
      "obrigatorio": false,
      "icone": "Info",
      "ddx_sugeridos": [],
      "descricao_completa": "Os critérios para EDM podem estar continuamente presentes por 2 anos — nesse caso, ambos os diagnósticos são feitos.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_mania_hipomania_ciclotimia",
      "letra": "E",
      "rotulo": "Nunca houve episódio maníaco/hipomaníaco ou ciclotimia",
      "tipo": "exclusao_diagnostica",
      "ui_widget": "toggle_com_justificativa_obrigatoria",
      "obrigatorio": true,
      "icone": "Ban",
      "ddx_sugeridos": [
        "transtorno_bipolar_tipo_1",
        "transtorno_bipolar_tipo_2",
        "transtorno_ciclotimico"
      ],
      "descricao_completa": "Jamais houve episódio maníaco ou hipomaníaco e jamais foram satisfeitos critérios para transtorno ciclotímico.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_psicotico_persistente",
      "letra": "F",
      "rotulo": "Não melhor explicado por transtorno psicótico persistente",
      "tipo": "exclusao_diagnostica",
      "ui_widget": "select_multiplos_ddx",
      "obrigatorio": true,
      "icone": "Ban",
      "ddx_sugeridos": [
        "transtorno_esquizoafetivo_persistente",
        "esquizofrenia",
        "transtorno_delirante"
      ],
      "descricao_completa": "A perturbação não é mais bem explicada por transtorno esquizoafetivo persistente, esquizofrenia, transtorno delirante ou outro transtorno psicótico.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_substancia_medica",
      "letra": "G",
      "rotulo": "Não atribuível a substância ou condição médica",
      "tipo": "exclusao_substancia_medica",
      "ui_widget": "toggle_com_justificativa_obrigatoria",
      "obrigatorio": true,
      "icone": "Ban",
      "ddx_sugeridos": [
        "hipotireoidismo"
      ],
      "descricao_completa": "Os sintomas não se devem aos efeitos fisiológicos de uma substância ou a outra condição médica (ex: hipotireoidismo).",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "sofrimento_funcional",
      "letra": "H",
      "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
      "tipo": "prejuizo_funcional",
      "ui_widget": "toggle_com_justificativa_obrigatoria",
      "obrigatorio": true,
      "icone": "Frown",
      "ddx_sugeridos": [],
      "descricao_completa": "Os sintomas causam sofrimento clinicamente significativo ou prejuízo no funcionamento social, profissional ou em outras áreas importantes.",
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
    "nome": "Padrão nos últimos 2 anos",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "tdp_sindrome_distimica_pura",
        "codigo": {
          "dsm5": "300.4",
          "cid10": "F34.1",
          "cid11": null
        },
        "label": "Com síndrome distímica pura",
        "descricao": "Não satisfeitos critérios para EDM pelos últimos 2 anos.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "tdp_edm_persistente",
        "codigo": {
          "dsm5": "300.4",
          "cid10": "F34.1",
          "cid11": null
        },
        "label": "Com episódio depressivo maior persistente",
        "descricao": "Critérios para EDM satisfeitos durante todo o período dos últimos 2 anos.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "tdp_edm_intermitente_com_atual",
        "codigo": {
          "dsm5": "300.4",
          "cid10": "F34.1",
          "cid11": null
        },
        "label": "Com EDM intermitentes, com episódio atual",
        "descricao": "Critérios atuais para EDM satisfeitos; houve períodos ≥8 sem. abaixo do limiar nos 2 anos anteriores.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "tdp_edm_intermitente_sem_atual",
        "codigo": {
          "dsm5": "300.4",
          "cid10": "F34.1",
          "cid11": null
        },
        "label": "Com EDM intermitentes, sem episódio atual",
        "descricao": "Critérios atuais para EDM não satisfeitos; houve ≥1 EDM nos 2 anos anteriores.",
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
      "id": "inicio_precoce",
      "nome": "Início precoce",
      "tipo": "booleano",
      "ortogonal": true,
      "opcoes": [],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": "Início antes dos 21 anos.",
        "fonte_passada_1": true
      }
    },
    {
      "id": "inicio_tardio",
      "nome": "Início tardio",
      "tipo": "booleano",
      "ortogonal": true,
      "opcoes": [],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": "Início aos 21 anos ou mais.",
        "fonte_passada_1": true
      }
    },
    {
      "id": "com_sintomas_ansiosos",
      "nome": "Com sintomas ansiosos",
      "tipo": "gravidade_ordinal",
      "ortogonal": true,
      "opcoes": [
        {
          "id": "leve",
          "label": "Leve (2 sintomas)",
          "codigo_adicional": null
        },
        {
          "id": "moderado",
          "label": "Moderado (3 sintomas)",
          "codigo_adicional": null
        },
        {
          "id": "grave",
          "label": "Grave (4-5 sintomas + agitação)",
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
      "id": "com_caracteristicas_mistas",
      "nome": "Com características mistas",
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
      "icone": "Briefcase",
      "relevante_para": "adulto"
    },
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": "transversal"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno Depressivo Maior",
      "ponto_distincao": "TDP requer 2 anos de humor deprimido; se EDM satisfeito, é especificador — não diagnóstico separado.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtornos psicóticos",
      "ponto_distincao": "TDP não diagnosticado se sintomas ocorrem somente durante transtorno psicótico.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno depressivo/bipolar devido a condição médica",
      "ponto_distincao": "Se condição médica crônica é causa fisiopatológica direta, usar diagnóstico específico.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno da personalidade",
      "ponto_distincao": "Podem coexistir; se critérios de ambos satisfeitos, ambos os diagnósticos são dados.",
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
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "0,5% para TDP e 1,5% para TDM crônico (prevalência de 12 meses nos EUA)",
    "proporcao_sexo": null,
    "variacoes_culturais": null,
    "notas": "Consolidação do transtorno distímico e TDM crônico do DSM-IV.",
    "metadados": {
      "completo": false,
      "lacunas": [
        "proporcao_sexo",
        "variacao_cultural",
        "prevalencia_global"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Frequentemente início precoce e insidioso (infância, adolescência ou início da vida adulta)",
    "trajetoria": "Curso crônico por definição. Quando sintomas aumentam ao nível de EDM, provavelmente retornarão ao nível inferior. Sintomas depressivos têm menos probabilidade de desaparecer em determinado período que no TDM.",
    "prognostico": "Início precoce (<21 anos) associado a maior probabilidade de transtornos de personalidade e por uso de substâncias. Efeitos funcionais podem ser iguais ou maiores que no TDM.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
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
  "id": "transtorno_depressivo_persistente",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
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
  "sigla": "TDP",
  "versao_complementar_existe": false,
  "inventario_clinico": {
    "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 300.4 (F34.1)",
    "estrutura_efetiva": "- **Estrutura efetiva:** A (humor deprimido maior parte do dia, maioria dos dias, >=2 anos [>=1 ano em criancas/adolescentes]) + B (>=2/6 sintomas: apetite, sono, energia, autoestima, concentracao, desesperanca) + C (sem periodo livre >2 meses durante os 2 anos) + D (criterios para TDM podem estar continuamente presentes) + E (nunca episodio maníaco/hipomaníaco, nunca ciclotimico) + F (nao melhor explicado por transtorno psicótico) + G (nao por substancia/condicao médica) + H (sofrimento/prejuizo funcional)",
    "notas_clinicas": "- **Notas:**"
  },
  "hierarquia_exclusao": {
    "exclui": [
      "transtorno_bipolar_tipo_1",
      "transtorno_bipolar_tipo_2",
      "transtorno_ciclotimico"
    ],
    "exclui_de": [],
    "notas_hierarquia": "Extraído do índice de hierarquias do capítulo"
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
});
export type DisorderData = typeof data;
