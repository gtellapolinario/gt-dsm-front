import { DeliriumSchema } from "./schema";

export const data = DeliriumSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "delirium",
    "nome_completo": "Delirium",
    "capitulo": "Transtornos Neurocognitivos",
    "capitulo_id": "transtornos_neurocognitivos",
    "sigla": null,
    "codificacao": {
        "dsm5_tr": {
            "codigo": "293.0",
            "sistema_origem": "ICD-9-CM",
            "uso": "referencia_editorial_legacy"
        },
        "cid10_cm": {
            "referencia_base": "F05",
            "equivalencia": "contextual",
            "regra": "Referência de família ou conjunto de códigos; selecionar o código CID-10-CM específico conforme apresentação, curso, gravidade e regras da versão adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6D70",
            "equivalencia": "contextual",
            "regra": "Selecionar 6D70.0–6D70.2, 6D70.Y ou 6D70.Z conforme a etiologia; delirium induzido por substância também admite códigos específicos do bloco 6C4.",
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
    "terminologia_relacionada": []
},
  "estrutura_geral": "monothetic_puro",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Perturbação da Atenção e Consciência",
        "tipo": "monothetic_conjuntivo",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Capacidade reduzida de direcionar e manter a atenção",
                "desc": "Perturbação da atenção evidenciada por capacidade reduzida de direcionar, focalizar, manter e mudar a atenção.",
                "pergunta": "A pessoa apresenta dificuldade para manter a atenção, sendo facilmente distraída ou precisando que as perguntas sejam repetidas?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Perguntas precisam ser repetidas",
                    "Perseveração em respostas anteriores",
                    "Distração por estímulos irrelevantes"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Menor orientação para o ambiente (consciência)",
                "desc": "Perturbação da consciência manifestada por menor orientação ao ambiente ou, por vezes, até para si mesmo.",
                "pergunta": "A pessoa está desorientada em relação ao ambiente ou a si mesma?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Desorientação para tempo e lugar"
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
        "id": "curso_temporal",
        "letra": "B",
        "rotulo": "Surge em período breve e tende a oscilar",
        "tipo": "temporal_duracao_tipica",
        "ui_widget": "campo_duracao_meses",
        "obrigatorio": true,
        "icone": "CalendarClock",
        "descricao_completa": "A perturbação se desenvolve em um período breve de tempo (normalmente de horas a poucos dias), representa uma mudança da atenção e da consciência basais e tende a oscilar quanto à gravidade ao longo de um dia.",
        "nota": null
    },
    {
        "id": "perturbacao_adicional_cognicao",
        "letra": "C",
        "rotulo": "Perturbação adicional na cognição",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Brain",
        "descricao_completa": "Perturbação adicional na cognição (p. ex. , déficit de memória, desorientação, linguagem, capacidade visuoespacial ou percepção).",
        "nota": null
    },
    {
        "id": "exclusao_outro_tnc_coma",
        "letra": "D",
        "rotulo": "Não explicado por outro TNC preexistente nem ocorre em coma",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "As perturbações dos Critérios A e C não são mais bem explicadas por outro transtorno neurocognitivo preexistente, estabelecido ou em desenvolvimento e não ocorrem no contexto de um nível gravemente diminuído de estimulação, como no coma.",
        "nota": null,
        "ddx_sugeridos": [
            "tnc_maior",
            "tnc_leve"
        ]
    },
    {
        "id": "etiologia_fisiologica",
        "letra": "E",
        "rotulo": "Evidências de etiologia fisiológica",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Stethoscope",
        "descricao_completa": "Há evidências a partir da história, do exame físico ou de achados laboratoriais de que a perturbação é uma consequência fisiológica direta de outra condição médica, intoxicação ou abstinência de substância, de exposição a uma toxina ou de que ela se deva a múltiplas etiologias.",
        "nota": null
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
            "id": "intoxicacao_substancia",
            "label": "Delirium por intoxicação por substância",
            "descricao": "Predominam sintomas de delirium no quadro de intoxicação por substância.",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "cid11_mms": "6D70.1",
                "regra": "Selecionar o código conforme a substância ou medicamento e o contexto de intoxicação/abstinência. A substância pode exigir código específico do bloco 6C4; 6D70.1 é a categoria etiológica geral."
            }
        },
        {
            "id": "abstinencia_substancia",
            "label": "Delirium por abstinência de substância",
            "descricao": "Predominam sintomas de delirium no quadro de abstinência de substância.",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "cid11_mms": "6D70.1",
                "regra": "Selecionar o código conforme a substância ou medicamento e o contexto de intoxicação/abstinência. A substância pode exigir código específico do bloco 6C4; 6D70.1 é a categoria etiológica geral."
            }
        },
        {
            "id": "induzido_medicamento",
            "label": "Delirium induzido por medicamento",
            "descricao": "Sintomas aparecem como efeito colateral de medicamento tomado conforme prescrição.",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "cid11_mms": "6D70.1",
                "regra": "Selecionar o código conforme a substância ou medicamento e o contexto de intoxicação/abstinência. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "outra_condicao_medica",
            "label": "Delirium devido a outra condição médica",
            "descricao": "Perturbação atribuível às consequências fisiológicas de outra condição médica.",
            "codigo": {
                "dsm5_legacy": "293.0",
                "cid10_cm": "F05",
                "cid11_mms": "6D70.0",
                "regra": "Em delirium por substância, medicamento ou abstinência, o código depende do agente e do contexto; não reutilizar um código genérico fixo. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "multiplas_etiologias",
            "label": "Delirium devido a múltiplas etiologias",
            "descricao": "Delirium com mais de uma etiologia identificada.",
            "codigo": {
                "dsm5_legacy": "293.0",
                "cid10_cm": "F05",
                "cid11_mms": "6D70.2",
                "regra": "Em delirium por substância, medicamento ou abstinência, o código depende do agente e do contexto; não reutilizar um código genérico fixo. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
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
        "regra_criterial": null,
        "opcoes": [
            "Agudo",
            "Persistente"
        ]
    },
    {
        "id": "nivel_atividade",
        "nome": "Nível de atividade psicomotora",
        "tipo": "enum",
        "ortogonal": false,
        "regra_criterial": null,
        "opcoes": [
            "Hiperativo",
            "Hipoativo",
            "Misto"
        ]
    }
],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6D70",
        "equivalencia": "contextual",
        "regra": "Selecionar 6D70.0–6D70.2, 6D70.Y ou 6D70.Z conforme a etiologia; delirium induzido por substância também admite códigos específicos do bloco 6C4.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para delirium."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": null,
      },
  "dominios_impacto": [
    {
        "id": "saude_fisica",
        "label": "Saúde física",
        "icone": "HeartPulse",
        "relevante_para": "transversal"
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
        "id": "transtornos_psicoticos",
        "condicao": "Transtornos psicóticos",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Delirium: curso agudo, perturbação da atenção/consciência, evidência de etiologia médica; psicoses: sem perturbação da consciência.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_de_estresse_agudo",
        "condicao": "Transtorno de estresse agudo",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Delirium: etiologia fisiológica identificável; Transtorno de Estresse Agudo: precipitado por evento traumático.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtornos_neurocognitivos_maiores_leves",
        "condicao": "Transtornos neurocognitivos maiores/leves",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Delirium: curso agudo e flutuante; Transtorno Neurocognitivo: curso mais gradual, sem perturbação da consciência.",
        "pertence_a_mesma_classe_dsm": true
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno neurocognitivo maior ou leve",
      "frequencia": "alta",
      "nota": "Delirium comumente ocorre sobre TNC preexistente."
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "cam",
        "nome": "Método de Avaliação da Confusão",
        "sigla": "CAM",
        "uso": "triagem",
        "faixa_etaria": "adulto",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "four_at",
        "nome": "Teste de avaliação rápida para delirium e comprometimento cognitivo",
        "sigla": "4AT",
        "uso": "triagem",
        "faixa_etaria": "adulto",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "tipo_estimativa": "multiplas_estimativas",
    "estimativa": "A frequência depende fortemente do cenário: baixa na comunidade, maior na admissão hospitalar e muito elevada em grupos críticos ou pós-operatórios de alto risco.",
    "distribuicao_por_sexo": null,
    "variacoes_contextuais": null,
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Pode ocorrer em qualquer idade; é mais frequente em pessoas idosas, gravemente enfermas ou com vulnerabilidade neurocognitiva.",
    "trajetoria": "Instalação aguda e curso flutuante. Pode resolver, persistir ou deixar declínio residual mesmo após correção dos fatores precipitantes.",
    "prognostico": "Associa-se a maior mortalidade, internação prolongada, institucionalização e declínio cognitivo; o desfecho depende da vulnerabilidade e da etiologia.",
    "nota_aplicador": "Idade e trajetória dependem da etiologia; mudança em relação ao nível prévio e curso temporal têm prioridade sobre a faixa típica."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "etiologico_externo",
        "criteria": [
          "A. Perturbacao da atencao E da consciencia",
          "B. Desenvolvimento em periodo breve (horas a poucos dias), com oscilacao",
          "C. Perturbacao adicional na cognicao (memoria, desorientacao, linguagem, visuoespacial)",
          "D. Nao melhor explicada por outro TNC preexistente; nao ocorre em coma",
          "E. Evidencias de consequencia fisiologica direta (condicao medica, intoxicacao, abstinencia, toxina, multiplas etiologias)"
        ],
        "diagnostic_rule": "Todos A, B, C, D, E obrigatorios",
        "clusters": [],
        "duration": "horas a dias (agudo) ou semanas/meses (persistente)",
        "age_onset": null,
        "functional_impairment": "oscilacao do nivel de consciencia, deficit cognitivo, prejuizo funcional significativo",
        "exclusions": [
          "TNC preexistente",
          "coma"
        ],
        "specifiers": [
          {
            "id": "agudo",
            "nome_completo": "Agudo"
          },
          {
            "id": "persistente",
            "nome_completo": "Persistente"
          },
          {
            "id": "hiperativo",
            "nome_completo": "Hiperativo"
          },
          {
            "id": "hipoativo",
            "nome_completo": "Hipoativo"
          },
          {
            "id": "misto",
            "nome_completo": "Nivel misto de atividade"
          }
        ],
        "operational_profiles": [],
        "critical_differentials": [
          "TNC Maior (demencia)",
          "transtornos psicoticos",
          "transtorno de estresse agudo"
        ],
        "key_questions": [
          "Mudanca aguda no estado mental nas ultimas horas ou dias?",
          "Ha oscilacao do nivel de consciencia ao longo do dia?",
          "Consegue manter a atencao em uma conversa?",
          "Ha desorientacao para tempo, lugar ou pessoa?",
          "Ha evidencias de alucinacoes ou ilusoes (especialmente visuais)?",
          "Historia de infeccao, novo medicamento, abstinencia, toxina?"
        ],
        "alerts": [
          "NAO diagnosticar delirium no contexto de coma",
          "Avaliacao diaria recomendada; usar CAM ou 4AT",
          "Requer investigacao etiologica sistematica"
        ],
        "source_trace": {
          "markdown_section": "## FICHA 17.1: DELIRIUM",
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
    "estrutura_efetiva": "- **Estrutura efetiva:** Sintomas de delirium sem satisfazer criterios completos, quando o clinico opta por nao especificar a razao ou ha informacoes insuficientes.",
    "notas_clinicas": "- **Notas:** Usado em contextos como salas de emergencia."
  },
  
});
export type DisorderData = typeof data;
