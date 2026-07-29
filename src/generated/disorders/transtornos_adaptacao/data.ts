import { TranstornosAdaptacaoSchema } from "./schema";

export const data = TranstornosAdaptacaoSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "transtornos_adaptacao",
    "nome_completo": "Transtornos de Adaptação",
    "capitulo": "Transtornos Relacionados a Trauma e a Estressores",
    "capitulo_id": "transtornos_relacionados_a_trauma_e_a_estressores",
    "sigla": null,
    "codificacao": {
        "dsm5_tr": {
            "codigo": "309.0",
            "sistema_origem": "ICD-9-CM",
            "uso": "referencia_editorial_legacy"
        },
        "cid10_cm": {
            "referencia_base": "F43.20",
            "equivalencia": "direta",
            "regra": "Correspondência diagnóstica direta no nível informado; confirmar especificadores e requisitos da versão CID-10-CM adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6B43",
            "equivalencia": "direta_sem_subcodigos_dsm",
            "regra": "Os subtipos do DSM-5-TR não recebem códigos CID-11 MMS distintos.",
            "versao": "CID-11 MMS 2026-01"
        }
    },
    "agrupamento": {
        "capitulo": {
            "id": "transtornos_relacionados_a_trauma_e_a_estressores",
            "label": "Transtornos Relacionados a Trauma e a Estressores"
        },
        "subgrupo": null
    },
    "faixa_etaria_alvo": "transversal",
    "terminologia_relacionada": []
},
  "estrutura_geral": "etiologico_externo",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Sintomas Emocionais/Comportamentais em Resposta a Estressor",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Sintomas em resposta a estressor identificável",
                "desc": "Sintomas emocionais ou comportamentais em resposta a um estressor identificável, com início em até 3 meses após o início do estressor.",
                "pergunta": "A pessoa começou a ter sintomas emocionais ou comportamentais logo após um evento estressante específico?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Depressão após demissão",
                    "Ansiedade após separação conjugal"
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
        "id": "sofrimento_desproporcional_ou_funcional",
        "letra": "B",
        "rotulo": "Sofrimento desproporcional ou prejuízo funcional significativo",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Frown",
        "descricao_completa": "Clinicamente significativo como evidenciado por: (1) sofrimento acentuado desproporcional ao estressor; (2) prejuízo significativo no funcionamento.",
        "nota": null
    },
    {
        "id": "exclusao_outro_transtorno",
        "letra": "C",
        "rotulo": "Não satisfaz critérios de outro transtorno mental",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Não satisfaz critérios de outro transtorno mental específico e não é exacerbação de transtorno pré-existente.",
        "nota": null,
        "ddx_sugeridos": [
            "transtorno_estresse_pos_traumatico",
            "transtorno_depressivo_maior",
            "transtorno_ansiedade_generalizada"
        ]
    },
    {
        "id": "exclusao_luto_normal",
        "letra": "D",
        "rotulo": "Não representa luto normal",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Não representa luto normal.",
        "nota": null
    },
    {
        "id": "remissao_6meses",
        "letra": "E",
        "rotulo": "Remite em ≤6 meses após cessação do estressor",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": false,
        "icone": "Calendar",
        "descricao_completa": "Uma vez cessado o estressor (ou suas consequências), os sintomas não persistem por mais de 6 meses adicionais.",
        "nota": null
    }
],
  "subtipos": {
    "presente": true,
    "nome": "Subtipo clínico",
    "natureza": "subtipo",
    "formal_dsm": true,
    "mutuamente_exclusivos": true,
    "subtipos": [
        {
            "id": "humor_deprimido",
            "label": "Com humor deprimido",
            "descricao": "Baixo astral, choro e sentimentos de desesperança predominam.",
            "codigo": {
                "dsm5_legacy": "309.0",
                "cid10_cm": "F43.21",
                "cid11_mms": "6B43",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "ansiedade",
            "label": "Com ansiedade",
            "descricao": "Nervosismo, preocupação, agitação ou ansiedade de separação predominam.",
            "codigo": {
                "dsm5_legacy": "309.24",
                "cid10_cm": "F43.22",
                "cid11_mms": "6B43",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "misto_depressivo_ansioso",
            "label": "Com humor deprimido e ansiedade mistos",
            "descricao": "Combinação de depressão e ansiedade predomina.",
            "codigo": {
                "dsm5_legacy": "309.28",
                "cid10_cm": "F43.23",
                "cid11_mms": "6B43",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "perturbacao_conduta",
            "label": "Com perturbação de conduta",
            "descricao": "Perturbação de conduta predomina.",
            "codigo": {
                "dsm5_legacy": "309.3",
                "cid10_cm": "F43.24",
                "cid11_mms": "6B43",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "misto_emocoes_conduta",
            "label": "Com perturbação mista de emoções e conduta",
            "descricao": "Sintomas emocionais e de conduta.",
            "codigo": {
                "dsm5_legacy": "309.4",
                "cid10_cm": "F43.25",
                "cid11_mms": "6B43",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "nao_especificado",
            "label": "Não especificado",
            "descricao": "Reações mal adaptativas não classificáveis em outros subtipos.",
            "codigo": {
                "dsm5_legacy": "309.9",
                "cid10_cm": "F43.20",
                "cid11_mms": "6B43",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        }
    ],
    "nota_aplicador": "Selecione somente opções sustentadas pela avaliação clínica."
},
  "especificadores": [
    {
        "id": "curso",
        "nome": "Curso",
        "tipo": "enum",
        "ortogonal": false,
        "opcoes": [
            "Agudo",
            "Persistente/crônico"
        ],
        "regra_criterial": "Agudo: Duração <6 meses.; Persistente/crônico: Duração ≥6 meses por causa do estressor crônico."
    }
],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6B43",
        "equivalencia": "direta_sem_subcodigos_dsm",
        "regra": "Os subtipos do DSM-5-TR não recebem códigos CID-11 MMS distintos.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtornos de adaptação."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": null,
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
        "id": "transtorno_de_estresse_pos_traumatico_transtorno_de_estresse_agudo",
        "condicao": "Transtorno de Estresse Pós-Traumático / Transtorno de Estresse Agudo",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno de Estresse Pós-Traumático/Transtorno de Estresse Agudo: exigem trauma com risco de vida; transtorno de adaptação: qualquer estressor.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_depressivo_maior",
        "condicao": "Transtorno Depressivo Maior",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno Depressivo Maior: pode ser diagnosticado mesmo sem estressor identificável; satisfeitos critérios formais A-E do Transtorno Depressivo Maior.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Condições médicas gerais",
      "frequencia": "alta",
      "nota": "Comum em pacientes hospitalizados."
    }
  ],
  "instrumentos_complementares": [],
  "prevalencia": {
    "tipo_estimativa": "frequencia_em_servico",
    "estimativa": "Frequência variável em saúde mental ambulatorial e em psiquiatria de ligação; percentuais de serviços selecionados não equivalem à prevalência populacional.",
    "distribuicao_por_sexo": "2:1 mulheres:homens",
    "variacoes_contextuais": null,
    "nota_aplicador": "Identificar o denominador e o serviço antes de exibir qualquer percentual."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Pode ocorrer em qualquer idade, com sintomas dentro de três meses após o estressor.",
    "trajetoria": "Em geral reduz após o término do estressor ou de suas consequências; pode persistir quando o estressor ou suas consequências continuam.",
    "prognostico": "Depende da persistência do estressor, suporte, comorbidades e funcionamento prévio.",
    "nota_aplicador": "Início e trajetória são descritores típicos, não critérios isolados; um curso diferente exige reavaliação, mas não exclusão automática."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "etiologico_externo",
        "criteria": [],
        "diagnostic_rule": "A = estressor_identificado AND inicio_dentro_3_meses AND B ≥ 1 AND C = true AND D = true AND E = true",
        "clusters": [],
        "duration": null,
        "age_onset": null,
        "functional_impairment": null,
        "exclusions": [],
        "specifiers": [],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### TRANSTORNO DE AJUSTAMENTO - Varios codigos (F43.2x)",
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
    "fonte_capitulo_md": "07_transtornos_relacionados_trauma_a_estressores.md",
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
