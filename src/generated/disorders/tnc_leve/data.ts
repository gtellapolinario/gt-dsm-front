import { TncLeveSchema } from "./schema";

export const data = TncLeveSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "tnc_leve",
    "nome_completo": "Transtorno Neurocognitivo Leve",
    "codigo": {
        "dsm5": "",
        "cid10": "G31.84",
        "cid11": "6D71"
    },
    "capitulo": "Transtornos Neurocognitivos",
    "capitulo_id": "transtornos_neurocognitivos",
    "sigla": "TNC Leve",
    "codificacao": {
        "cid10_cm": {
            "referencia_base": "G31.84",
            "equivalencia": "direta",
            "regra": "Correspondência diagnóstica direta no nível informado; confirmar especificadores e requisitos da versão CID-10-CM adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6D71",
            "equivalencia": "contextual",
            "regra": "Registrar a etiologia por codificação adicional quando o sistema local exigir; as opções etiológicas não têm todas uma subcategoria própria sob 6D71.",
            "versao": "CID-11 MMS 2026-01"
        }
    },
    "agrupamento": {
        "capitulo": {
            "id": "transtornos_neurocognitivos",
            "label": "Transtornos Neurocognitivos"
        },
        "subgrupo": null
    },
    "faixa_etaria_alvo": "transversal",
    "terminologia_relacionada": [
        {
            "termo": "Transtorno cognitivo sem outra especificação",
            "status": "historico",
            "equivalencia": "parcial",
            "nota": "Categoria anterior mais ampla e não equivalente."
        }
    ]
},
  "estrutura_geral": "monothetic_puro",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Declínio Cognitivo Pequeno",
        "tipo": "monothetic_conjuntivo",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Preocupação com declínio na função cognitiva",
                "desc": "Preocupação do indivíduo, de um informante com conhecimento ou do clínico de que ocorreu declínio na função cognitiva.",
                "pergunta": "Há preocupação do paciente, de um informante ou do clínico sobre declínio em algum domínio cognitivo?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Precisa de mais esforço para tarefas cognitivas",
                    "Uso de estratégias compensatórias"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Prejuízo pequeno no desempenho cognitivo documentado",
                "desc": "Prejuízo pequeno no desempenho cognitivo, de preferência documentado por teste neuropsicológico padronizado ou, em sua falta, outra avaliação quantificada.",
                "pergunta": "O desempenho cognitivo está levemente abaixo do esperado, documentado por testes ou avaliação clínica quantificada?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Desempenho 1–2 desvios-padrão abaixo da norma"
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
        "id": "independencia_preservada",
        "letra": "B",
        "rotulo": "Independência preservada nas AVDs",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Frown",
        "descricao_completa": "Os déficits cognitivos não interferem na capacidade de ser independente nas atividades cotidianas (atividades instrumentais complexas da vida diária preservadas, mas pode haver necessidade de mais esforço, estratégias compensatórias ou acomodação).",
        "nota": null
    },
    {
        "id": "exclusao_delirium",
        "letra": "C",
        "rotulo": "Déficits não ocorrem exclusivamente no contexto de delirium",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Os déficits cognitivos não ocorrem exclusivamente no contexto de delirium.",
        "nota": null,
        "ddx_sugeridos": [
            "delirium"
        ]
    },
    {
        "id": "exclusao_outro_mental",
        "letra": "D",
        "rotulo": "Não mais bem explicado por outro transtorno mental",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Os déficits cognitivos não são mais bem explicados por outro transtorno mental (p. ex. , transtorno depressivo maior, esquizofrenia).",
        "nota": null,
        "ddx_sugeridos": [
            "transtorno_depressivo_maior",
            "esquizofrenia"
        ]
    }
],
  "subtipos": {
    "presente": true,
    "nome": "Subtipo etiológico",
    "natureza": "etiologia",
    "formal_dsm": true,
    "mutuamente_exclusivos": true,
    "subtipos": [
        {
            "id": "alzheimer",
            "label": "Devido à doença de Alzheimer",
            "descricao": "",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "regra": "Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão.",
                "cid11_mms": "6D71"
            }
        },
        {
            "id": "frontotemporal",
            "label": "Devido à degeneração lobar frontotemporal",
            "descricao": "",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "regra": "Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão.",
                "cid11_mms": "6D71"
            }
        },
        {
            "id": "corpos_lewy",
            "label": "Com corpos de Lewy",
            "descricao": "",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "regra": "Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão.",
                "cid11_mms": "6D71"
            }
        },
        {
            "id": "vascular",
            "label": "Vascular",
            "descricao": "",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "regra": "Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão.",
                "cid11_mms": "6D71"
            }
        },
        {
            "id": "lesao_traumatica",
            "label": "Devido a lesão cerebral traumática",
            "descricao": "",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "regra": "Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão.",
                "cid11_mms": "6D71"
            }
        },
        {
            "id": "substancia",
            "label": "Induzido por substância/medicamento",
            "descricao": "",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "regra": "Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão.",
                "cid11_mms": "6D71"
            }
        },
        {
            "id": "hiv",
            "label": "Devido a infecção por HIV",
            "descricao": "",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "regra": "Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão.",
                "cid11_mms": "6D71"
            }
        },
        {
            "id": "prion",
            "label": "Devido à doença do príon",
            "descricao": "",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "regra": "Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão.",
                "cid11_mms": "6D71"
            }
        },
        {
            "id": "parkinson",
            "label": "Devido à doença de Parkinson",
            "descricao": "",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "regra": "Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão.",
                "cid11_mms": "6D71"
            }
        },
        {
            "id": "huntington",
            "label": "Devido à doença de Huntington",
            "descricao": "",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "regra": "Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão.",
                "cid11_mms": "6D71"
            }
        },
        {
            "id": "outra_condicao",
            "label": "Devido a outra condição médica",
            "descricao": "",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "regra": "Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão.",
                "cid11_mms": "6D71"
            }
        },
        {
            "id": "multiplas_etiologias",
            "label": "Devido a múltiplas etiologias",
            "descricao": "",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "regra": "Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão.",
                "cid11_mms": "6D71"
            }
        },
        {
            "id": "nao_especificado",
            "label": "Não especificado",
            "descricao": "",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "regra": "Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão.",
                "cid11_mms": "6D71"
            }
        }
    ],
    "nota_aplicador": "Selecione somente opções sustentadas pela avaliação clínica."
},
  "especificadores": [
    {
        "id": "perturbacao_comportamental",
        "nome": "Perturbação comportamental",
        "tipo": "enum",
        "ortogonal": false,
        "regra_criterial": null,
        "opcoes": [
            "Sem perturbação comportamental",
            "Com perturbação comportamental"
        ]
    }
],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6D71",
        "equivalencia": "contextual",
        "regra": "Registrar a etiologia por codificação adicional quando o sistema local exigir; as opções etiológicas não têm todas uma subcategoria própria sob 6D71.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "graduacao_nao_aplicavel_ao_tnc_leve",
    "lembrete_aplicador": "O diagnóstico já corresponde à forma leve; os níveis leve, moderado e grave aplicam-se ao transtorno neurocognitivo maior."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": null,
      },
  "dominios_impacto": [
    {
        "id": "autonomia_autocuidado",
        "label": "Autonomia e autocuidado",
        "icone": "House",
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
        "id": "transtorno_neurocognitivo_maior",
        "condicao": "Transtorno Neurocognitivo maior",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno Neurocognitivo leve: independência preservada, prejuízo pequeno; Transtorno Neurocognitivo maior: prejuízo substancial, interferência na independência.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "cognicao_normal_envelhecimento",
        "condicao": "Cognição normal/envelhecimento",
        "natureza": "variacao_normativa",
        "ponto_distincao": "Transtorno Neurocognitivo leve: declínio documentado a partir de linha de base anterior; envelhecimento normal: sem declínio significativo.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_depressivo_maior",
        "condicao": "Transtorno depressivo maior",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Depressão pode causar queixas cognitivas; melhora com tratamento da depressão.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Delirium",
      "frequencia": "moderada",
      "nota": "TNC leve aumenta vulnerabilidade a delirium."
    },
    {
      "condicao": "Transtorno depressivo maior",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "moca",
        "nome": "Avaliação Cognitiva de Montreal",
        "sigla": "MoCA",
        "uso": "triagem",
        "faixa_etaria": "adulto",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "avaliacao_neuropsicologica",
        "nome": "Avaliação neuropsicológica padronizada",
        "sigla": null,
        "uso": "apoio_diagnostico",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Documenta domínios cognitivos e funcionamento; interpretar com escolaridade, cultura e condição sensorial."
    }
],
  "prevalencia": {
    "tipo_estimativa": "multiplas_estimativas",
    "estimativa": "Estimativas aumentam com a idade e variam conforme definição, instrumento e etiologia; não há uma taxa única aplicável a todos os transtornos neurocognitivos leves.",
    "distribuicao_por_sexo": null,
    "variacoes_contextuais": null,
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Varia conforme a etiologia; a frequência aumenta com a idade, mas apresentações precoces podem ocorrer.",
    "trajetoria": "Pode permanecer estável, melhorar ou progredir para transtorno neurocognitivo maior; o padrão temporal depende da etiologia.",
    "prognostico": "Etiologia, biomarcadores quando indicados, reserva cognitiva, funcionalidade e comorbidades influenciam o risco de progressão.",
    "nota_aplicador": "Idade e trajetória dependem da etiologia; mudança em relação ao nível prévio e curso temporal têm prioridade sobre a faixa típica."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [
          "A1. Preocupacao sobre declinio + A2. Prejuizo pequeno documentado (1-2 DP abaixo, percentil 3-16)",
          "B. Deficits NAO interferem na independencia em AVDs",
          "C. Nao ocorre exclusivamente durante delirium",
          "D. Nao melhor explicado por outro transtorno mental"
        ],
        "diagnostic_rule": "A1+A2 + B + C + D todos obrigatorios; limiar: 1-2 DP abaixo (percentil 3-16)",
        "clusters": [],
        "duration": "cronico",
        "age_onset": null,
        "functional_impairment": "independencia preservada (com esforco adicional ou estrategias compensatorias)",
        "exclusions": [
          "delirium",
          "depressao maior",
          "envelhecimento normal"
        ],
        "specifiers": [
          {
            "id": "sem_perturbacao",
            "nome_completo": "Sem perturbacao comportamental"
          },
          {
            "id": "com_perturbacao",
            "nome_completo": "Com perturbacao comportamental"
          }
        ],
        "operational_profiles": [],
        "critical_differentials": [
          "envelhecimento normal",
          "transtorno depressivo maior",
          "delirium"
        ],
        "key_questions": [
          "Dificuldade para lembrar coisas que antes lembrava?",
          "Necessidade de listas ou lembretes mais frequentes?",
          "Tarefas complexas exigem mais esforco?",
          "Evita situacoes que exigem processamento rapido?",
          "Independencia funcional preservada?"
        ],
        "alerts": [
          "Reavaliacao longitudinal recomendada; monitorar progressao para TNC Maior"
        ],
        "source_trace": {
          "markdown_section": "## FICHA 17.3: TRANSTORNO NEUROCOGNITIVO LEVE",
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
    "fonte_capitulo_md": "17_transtornos_neurocognitivos.md",
    "fonte_inventario_md": null,
    "data_extracao": "2026-05-31",
    "modelo_agente": "antigravity-gemini",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:** Declinio cognitivo modesto em 1+ dominios, sem interferir na independencia (pode exigir mais esforco/estrategias compensatorias). Prejuizo de 1-2 desvios-padrao.",
    "notas_clinicas": "- **Notas:** Mesmos subtipos etiologicos do TNC maior. Distincao com TNC maior e inerentemente arbitrarria. Prevalencia estimada 2-25% em maiores de 65 anos."
  },
  
});
export type DisorderData = typeof data;
