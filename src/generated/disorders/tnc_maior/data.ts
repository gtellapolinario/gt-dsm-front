import { TncMaiorSchema } from "./schema";

export const data = TncMaiorSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "tnc_maior",
    "nome_completo": "Transtorno Neurocognitivo Maior",
    "capitulo": "Transtornos Neurocognitivos",
    "capitulo_id": "transtornos_neurocognitivos",
    "sigla": "TNC Maior",
    "codificacao": {
        "dsm5_tr": {
            "codigo": "294.1x",
            "sistema_origem": "ICD-9-CM",
            "uso": "referencia_editorial_legacy"
        },
        "cid10_cm": {
            "referencia_base": [
                "F01",
                "F02",
                "F03"
            ],
            "equivalencia": "contextual",
            "regra": "Referência de família ou conjunto de códigos; selecionar o código CID-10-CM específico conforme apresentação, curso, gravidade e regras da versão adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": [
                "6D80",
                "6D81",
                "6D82",
                "6D83",
                "6D84",
                "6D85",
                "6D8Y",
                "6D8Z"
            ],
            "equivalencia": "contextual",
            "regra": "A CID-11 usa categorias de demência determinadas pela etiologia; selecionar a categoria etiológica específica.",
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
            "termo": "Demência",
            "status": "termo_relacionado",
            "equivalencia": "parcial",
            "nota": "O DSM-5-TR admite o uso do termo tradicional quando apropriado; nem toda etiologia é nomeada apenas por esse termo."
        }
    ]
},
  "estrutura_geral": "monothetic_puro",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Declínio Cognitivo Importante",
        "tipo": "monothetic_conjuntivo",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Preocupação com declínio significativo na função cognitiva",
                "desc": "Preocupação do indivíduo, de um informante com conhecimento ou do clínico de que há declínio significativo na função cognitiva.",
                "pergunta": "Há preocupação do paciente, de um informante ou do clínico sobre declínio significativo em algum domínio cognitivo?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Dificuldade de recordar eventos recentes",
                    "Confusão em ambientes familiares"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Prejuízo substancial no desempenho cognitivo documentado",
                "desc": "Prejuízo substancial no desempenho cognitivo, de preferência documentado por teste neuropsicológico padronizado ou, em sua falta, por outra investigação clínica quantificada.",
                "pergunta": "O desempenho cognitivo está substancialmente abaixo do esperado, documentado por testes ou avaliação clínica quantificada?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Desempenho 2+ desvios-padrão abaixo da norma",
                    "Declínio documentado em testes em série"
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
        "id": "prejuizo_independencia",
        "letra": "B",
        "rotulo": "Déficits interferem na independência em AVDs",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Accessibility",
        "descricao_completa": "Os déficits cognitivos interferem na independência em atividades da vida diária (no mínimo, necessita de assistência em atividades instrumentais complexas da vida diária, tais como pagamento de contas ou controle medicamentoso).",
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
                "cid11_mms": "6D80"
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
                "cid11_mms": "6D83"
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
                "cid11_mms": "6D82"
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
                "cid11_mms": "6D81"
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
                "cid11_mms": "6D85.7"
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
                "cid11_mms": "6D84"
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
                "cid11_mms": "6D85.3"
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
                "cid11_mms": "6D85.5"
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
                "cid11_mms": "6D85.0"
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
                "cid11_mms": "6D85.1"
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
                "cid11_mms": "6D85.Y"
            }
        },
        {
            "id": "multiplas_etiologias",
            "label": "Devido a múltiplas etiologias",
            "descricao": "",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "regra": "Categoria residual; se etiologias específicas puderem ser codificadas em conjunto, seguir a orientação local de codificação.",
                "cid11_mms": "6D8Y"
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
                "cid11_mms": "6D8Z"
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
    },
    {
        "id": "gravidade_atual",
        "nome": "Gravidade atual",
        "tipo": "enum",
        "ortogonal": false,
        "regra_criterial": null,
        "opcoes": [
            "Leve",
            "Moderada",
            "Grave"
        ]
    }
],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": [
            "6D80",
            "6D81",
            "6D82",
            "6D83",
            "6D84",
            "6D85",
            "6D8Y",
            "6D8Z"
        ],
        "equivalencia": "contextual",
        "regra": "A CID-11 usa categorias de demência determinadas pela etiologia; selecionar a categoria etiológica específica.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "tnc_maior",
    "tipo": "dependencia_funcional",
    "lembrete_aplicador": "Classifique pela perda de independência nas atividades da vida diária.",
    "niveis": [
        {
            "id": "leve",
            "label": "Leve",
            "descritor": "Dificuldade em atividades instrumentais da vida diária."
        },
        {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "Dificuldade em atividades básicas da vida diária."
        },
        {
            "id": "grave",
            "label": "Grave",
            "descritor": "Dependência completa para os cuidados cotidianos."
        }
    ],
    "regra_atribuicao": "Use o nível de dependência funcional atual."
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
        "id": "transtorno_neurocognitivo_leve",
        "condicao": "Transtorno Neurocognitivo leve",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno Neurocognitivo maior: prejuízo interfere na independência em AVDs; Transtorno Neurocognitivo leve: independência preservada.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "delirium",
        "condicao": "Delirium",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Delirium: curso agudo, perturbação da atenção/consciência; Transtorno Neurocognitivo maior: curso gradual, sem perturbação da consciência.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_depressivo_maior",
        "condicao": "Transtorno depressivo maior",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Depressão pode causar pseudodemência; melhora com tratamento da depressão favorece este diagnóstico.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Delirium",
      "frequencia": "alta",
      "nota": "TNC aumenta risco de delirium."
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
        "id": "meem",
        "nome": "Miniexame do Estado Mental",
        "sigla": "MEEM",
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
    "estimativa": "A prevalência aumenta acentuadamente com a idade e varia conforme etiologia, população e método diagnóstico.",
    "distribuicao_por_sexo": null,
    "variacoes_contextuais": null,
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Mais frequente em idade avançada, mas varia amplamente conforme a etiologia.",
    "trajetoria": "Pode ser progressiva, em degraus, flutuante ou parcialmente reversível, conforme a etiologia; não há trajetória única para a categoria sindrômica.",
    "prognostico": "Depende da etiologia, gravidade funcional, velocidade de progressão, comorbidades, complicações clínicas e suporte.",
    "nota_aplicador": "Idade e trajetória dependem da etiologia; mudança em relação ao nível prévio e curso temporal têm prioridade sobre a faixa típica."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [
          "A1. Preocupacao sobre declinio significativo + A2. Prejuizo substancial documentado (2+ DP abaixo, <percentil 3)",
          "B. Deficits interferem na independencia em AVDs (AIVDs complexas comprometidas)",
          "C. Nao ocorre exclusivamente durante delirium",
          "D. Nao melhor explicado por outro transtorno mental"
        ],
        "diagnostic_rule": "A1+A2 + B + C + D todos obrigatorios; limiar neuropsicologico: <percentil 3 ou 2+ DP abaixo",
        "clusters": [
          "Atencao complexa",
          "Funcao executiva",
          "Aprendizagem e memoria",
          "Linguagem",
          "Perceptomotor",
          "Cognicao social"
        ],
        "duration": "cronico, progressivo",
        "age_onset": null,
        "functional_impairment": "dependencia parcial a total em AIVDs complexas (financas, medicamentos) e/ou ABVDs",
        "exclusions": [
          "delirium",
          "depressao maior",
          "esquizofrenia"
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
          "TNC Leve",
          "delirium",
          "transtorno depressivo maior (pseudodemencia)",
          "transtorno do neurodesenvolvimento"
        ],
        "key_questions": [
          "Paciente ou familiares notaram piora na memoria?",
          "Dificuldade para lembrar eventos recentes, nomes, compromissos?",
          "Precisa de mais tempo para tarefas que fazia com facilidade?",
          "Dificuldade para encontrar palavras, se expressar?",
          "Mudancas no julgamento, planejamento ou decisoes?",
          "Consegue gerenciar financas, pagar contas, controlar medicamentos sozinho?",
          "Precisa de ajuda para se alimentar, vestir ou higienizar?",
          "Declinio foi gradual ou abrupto? Historia de AVC ou trauma?"
        ],
        "alerts": [
          "Doenca com Corpos de Lewy: sensibilidade neuroleptica FATAL - evitar neurolépticos",
          "Avaliacao funcional e obrigatoria para distinguir Maior de Leve"
        ],
        "source_trace": {
          "markdown_section": "## FICHA 17.2: TRANSTORNO NEUROCOGNITIVO MAIOR",
          "patches_applied": [
            "HIGH: gravidade.tipo→funcionome_completonto_adaptativo"
          ]
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
    "estrutura_efetiva": "- **Estrutura efetiva:** TNC decorrente de mais de um processo etiologico (excluindo substancias). Ex.: doenca de Alzheimer + doenca vascular; Parkinson + corpos de Lewy.",
    "notas_clinicas": "- **Notas:** Todas as condicoes medicas etiologicas devem ser codificadas separadamente. Comum em idosos pela coexistencia de patologias neurodegenerativas e cerebrovasculares."
  },
  
});
export type DisorderData = typeof data;
