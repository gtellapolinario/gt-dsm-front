import { TranstornoConversaoSchema } from "./schema";

export const data = TranstornoConversaoSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "transtorno_conversao",
    "nome_completo": "Transtorno de Conversão (Transtorno de Sintomas Neurológicos Funcionais)",
    "capitulo": "Transtorno de Sintomas Somáticos e Transtornos Relacionados",
    "capitulo_id": "transtorno_de_sintomas_somaticos_e_transtornos_relacionados",
    "sigla": null,
    "codificacao": {
        "dsm5_tr": {
            "codigo": "300.11",
            "sistema_origem": "ICD-9-CM",
            "uso": "referencia_editorial_legacy"
        },
        "cid10_cm": {
            "referencia_base": "F44",
            "equivalencia": "contextual",
            "regra": "Referência de família ou conjunto de códigos; selecionar o código CID-10-CM específico conforme apresentação, curso, gravidade e regras da versão adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6B60",
            "equivalencia": "contextual",
            "regra": "A CID-11 denomina o quadro transtorno dissociativo de sintomas neurológicos e codifica vários tipos pelo sintoma predominante.",
            "versao": "CID-11 MMS 2026-01"
        }
    },
    "agrupamento": {
        "capitulo": {
            "id": "transtorno_de_sintomas_somaticos_e_transtornos_relacionados",
            "label": "Transtorno de Sintomas Somáticos e Transtornos Relacionados"
        },
        "subgrupo": null
    },
    "faixa_etaria_alvo": "transversal",
    "terminologia_relacionada": [
        {
            "termo": "Histeria",
            "status": "obsoleto",
            "equivalencia": "nao_equivalente",
            "nota": "Categoria histórica ampla e heterogênea; não equivale ao diagnóstico atual."
        },
        {
            "termo": "Transtorno de sintomas neurológicos funcionais",
            "status": "nome_alternativo",
            "equivalencia": "equivalente",
            "nota": null
        }
    ]
},
  "estrutura_geral": "monothetic_puro",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Sintomas de função motora ou sensorial alterada",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Sintoma(s) motor ou sensorial alterados",
                "desc": "Um ou mais sintomas de função motora ou sensorial voluntária alteradas.",
                "pergunta": "A pessoa tem fraqueza, paralisia, tremores ou perda sensorial que os médicos dizem não ter causa neurológica identificável?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Fraqueza funcional de membros",
                    "Crises não epilépticas",
                    "Cegueira funcional"
                ]
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    },
    {
        "id": "B",
        "nome": "Incompatibilidade com condição neurológica reconhecida",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "B1",
                "rotulo": "Incompatibilidade com doença neurológica conhecida",
                "desc": "Achados clínicos fornecem evidências de incompatibilidade entre o sintoma e condições neurológicas ou médicas reconhecidas.",
                "pergunta": "O médico confirmou que seus sintomas não são explicados por doença neurológica ou médica conhecida?",
                "faixa_aplicavel": null,
                "nota": null
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    }
],
  "criterios_condicionais": [
    {
        "id": "exclusao_facticio",
        "letra": "C",
        "rotulo": "Não é mais bem explicado por outro transtorno médico ou mental",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "O sintoma ou déficit não é mais bem explicado por outro transtorno médico ou mental.",
        "nota": null,
        "ddx_sugeridos": [
            "transtorno_facticio",
            "transtorno_sintomas_somaticos"
        ]
    },
    {
        "id": "sofrimento_funcional",
        "letra": "D",
        "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Frown",
        "descricao_completa": "O sintoma ou déficit causa sofrimento clinicamente significativo ou prejuízo no funcionamento social, profissional ou em outras áreas importantes, ou justifica avaliação médica.",
        "nota": null
    }
],
  "subtipos": {
    "presente": true,
    "nome": "Tipo de sintoma",
    "natureza": "tipo_de_sintoma",
    "formal_dsm": true,
    "mutuamente_exclusivos": true,
    "subtipos": [
        {
            "id": "fraqueza_paralisia",
            "label": "Com fraqueza ou paralisia",
            "descricao": "",
            "codigo": {
                "dsm5_legacy": "300.11",
                "cid10_cm": "F44.4",
                "cid11_mms": "6B60.6",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "movimento_anormal",
            "label": "Com movimento anormal",
            "descricao": "Tremor, mioclonia, discinesia, gait disorder.",
            "codigo": {
                "dsm5_legacy": "300.11",
                "cid10_cm": "F44.4",
                "cid11_mms": "6B60.8",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "degluticao",
            "label": "Com sintoma de deglutição",
            "descricao": "Predominam dificuldades funcionais de deglutição.",
            "codigo": {
                "dsm5_legacy": "300.11",
                "cid10_cm": "F44.4",
                "cid11_mms": "6B60.Y",
                "regra": "Confirmar o código final conforme o sistema adotado. A CID-11 MMS não oferece subcategoria própria para deglutição; usar outro sintoma especificado quando cabível."
            }
        },
        {
            "id": "fala",
            "label": "Com sintoma de fala",
            "descricao": "Predominam disfonia, fala arrastada ou outro sintoma funcional da fala.",
            "codigo": {
                "dsm5_legacy": "300.11",
                "cid10_cm": "F44.4",
                "cid11_mms": "6B60.5",
                "regra": "Confirmar o código final conforme o sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "crises_nao_epilepticas",
            "label": "Com crises ou convulsões",
            "descricao": "Crises não epilépticas funcionais.",
            "codigo": {
                "dsm5_legacy": "300.11",
                "cid10_cm": "F44.5",
                "cid11_mms": "6B60.4",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "anestesia_sensorial",
            "label": "Com anestesia ou perda sensorial",
            "descricao": "",
            "codigo": {
                "dsm5_legacy": "300.11",
                "cid10_cm": "F44.6",
                "cid11_mms": "6B60.3",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "sintomas_sensoriais_especiais",
            "label": "Com sintoma sensorial especial",
            "descricao": "Visual, olfatório, auditivo.",
            "codigo": {
                "dsm5_legacy": "300.11",
                "cid10_cm": "F44.6",
                "cid11_mms": [
                    "6B60.0",
                    "6B60.1",
                    "6B60.2",
                    "6B60.3"
                ],
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Selecionar visual, auditivo, vertigem/tontura ou outro sintoma sensorial conforme a manifestação predominante."
            }
        },
        {
            "id": "sintomas_mistos",
            "label": "Com sintomas mistos",
            "descricao": "",
            "codigo": {
                "dsm5_legacy": "300.11",
                "cid10_cm": "F44.7",
                "cid11_mms": "6B60.Y",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. A CID-11 MMS não possui subcategoria única de sintomas mistos; confirmar a melhor categoria especificada."
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
            "Episódio agudo",
            "Persistente"
        ],
        "regra_criterial": "Episódio agudo: Sintomas <6 meses.; Persistente: Sintomas ≥6 meses."
    },
    {
        "id": "relacao_estressor_psicologico",
        "nome": "Relação com estressor psicológico",
        "tipo": "enum",
        "ortogonal": false,
        "opcoes": [
            "Com estressor psicológico",
            "Sem estressor psicológico"
        ],
        "regra_criterial": null
    }
],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6B60",
        "equivalencia": "contextual",
        "regra": "A CID-11 denomina o quadro transtorno dissociativo de sintomas neurológicos e codifica vários tipos pelo sintoma predominante.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno de conversão."
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
        "id": "mobilidade",
        "label": "Mobilidade e Independência",
        "icone": "Footprints",
        "relevante_para": "transversal"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "doenca_neurologica",
        "condicao": "Doença neurológica",
        "natureza": "condicao_medica",
        "ponto_distincao": "Conversão: sinais clínicos incompatíveis com doença neurológica reconhecida (sinal de Hoover, etc.).",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno de ansiedade",
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
    "tipo_estimativa": "incidencia_anual",
    "estimativa": "Incidência estimada de 2–5 por 100.000 pessoas-ano; a frequência é maior em serviços neurológicos do que na população geral.",
    "distribuicao_por_sexo": "2–3:1 mulheres:homens",
    "variacoes_contextuais": "Forma de apresentação e procura por cuidado variam com contexto cultural e acesso à neurologia; diferenças observadas não demonstram maior predisposição intrínseca.",
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Pode ocorrer em qualquer idade; muitas amostras clínicas concentram-se em adultos jovens e de meia-idade.",
    "trajetoria": "Variável: apresentações agudas podem remitir, enquanto sintomas persistentes ou recorrentes são comuns em parte dos casos.",
    "prognostico": "Menor duração antes do diagnóstico, formulação compartilhada e menor carga de comorbidades associam-se a melhor evolução; não presumir remissão espontânea rápida.",
    "nota_aplicador": "Início e trajetória são descritores típicos, não critérios isolados; um curso diferente exige reavaliação, mas não exclusão automática."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "qualitativo_descritivo",
        "criteria": [
          "A. Um ou mais sintomas de funcao motora ou sensorial alterada",
          "B. Achados fisicos evidenciam incompatibilidade entre o sintoma e condicoes neurologicas conhecidas",
          "C. NAO e melhor explicado por outro transtorno mental ou medico",
          "D. O sintoma causa sofrimento clinicamente significativo OU prejuizo funcional OU requer avaliacao medica"
        ],
        "diagnostic_rule": "A(sintoma motor/sensorial) + B(incompatibilidade neurologica) + C(exclusoes) + D(sofrimento/prejuizo/avaliacao)",
        "clusters": [],
        "duration": null,
        "age_onset": null,
        "functional_impairment": "Sofrimento clinicamente significativo ou prejuizo funcional",
        "exclusions": [
          "Doenca neurologica explicativa",
          "Facticio/simulacao com evidencias definitivas"
        ],
        "specifiers": [
          "Episodio agudo (<6 meses)",
          "Persistente (≥6 meses)",
          "Com estressor psicologico",
          "Sem estressor psicologico"
        ],
        "operational_profiles": [],
        "critical_differentials": [
          "Doenca neurologica",
          "TSS",
          "Transtorno facticio/simulacao",
          "Transtornos dissociativos",
          "DBC",
          "Panico",
          "Transtornos depressivos"
        ],
        "key_questions": [
          "Que tipo de alteracao voce notou no movimento ou sensacao?",
          "Os sintomas sao consistentes?",
          "Ja houve exame neurologico?",
          "Os sintomas mudam quando voce esta distraido?"
        ],
        "alerts": [
          "Requer avaliacao neurologica previa; diagnostico por incompatibilidade, nao por exames normais"
        ],
        "source_trace": {
          "markdown_section": "3. TRANSTORNO CONVERSIVO - FICHA FULL",
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
    "fonte_capitulo_md": "09_transtorno_sintomas_somaticos_transtornos_relacionados.md",
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
    "estrutura_efetiva": "- **Estrutura efetiva:**",
    "notas_clinicas": "- **Notas:**"
  },
  
});
export type DisorderData = typeof data;
