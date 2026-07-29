import { TranstornoDisruptivoDesregulacaoHumorSchema } from "./schema";

export const data = TranstornoDisruptivoDesregulacaoHumorSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "transtorno_disruptivo_desregulacao_humor",
    "nome_completo": "Transtorno Disruptivo da Desregulação do Humor",
    "capitulo": "Transtornos Depressivos",
    "capitulo_id": "transtornos_depressivos",
    "sigla": "TDDH",
    "codificacao": {
        "dsm5_tr": {
            "codigo": "296.99",
            "sistema_origem": "ICD-9-CM",
            "uso": "referencia_editorial_legacy"
        },
        "cid10_cm": {
            "referencia_base": "F34.81",
            "equivalencia": "direta",
            "regra": "Correspondência diagnóstica direta no nível informado; confirmar especificadores e requisitos da versão CID-10-CM adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6A8Y",
            "equivalencia": "sem_correspondencia_direta",
            "regra": "A CID-11 MMS não possui categoria equivalente direta; 6A8Y é a categoria residual de outros transtornos do humor e exige julgamento clínico/codificador.",
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
    "faixa_etaria_alvo": "pediatria",
    "terminologia_relacionada": []
},
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Explosões verbais/comportamentais desproporcionais",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Explosões verbais/comportamentais desproporcionais",
                "desc": "Explosões de raiva recorrentes e graves (verbal ou comportamental/agressão física), desproporcionais em intensidade ou duração à situação.",
                "pergunta": "A criança tem explosões de raiva graves que são muito maiores do que a situação justificaria?",
                "faixa_aplicavel": "pediatria",
                "nota": null,
                "exemplos_clinicos": [
                    "Violência verbal intensa ante frustrações menores",
                    "Destruição de objetos quando contrariada"
                ]
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    },
    {
        "id": "B",
        "nome": "Explosões inconsistentes com nível de desenvolvimento",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "B1",
                "rotulo": "Explosões inconsistentes com nível de desenvolvimento",
                "desc": "As explosões de raiva são inapropriadas para o nível desenvolvimental da criança.",
                "pergunta": "As explosões são muito mais intensas do que seria esperado para a idade da criança?",
                "faixa_aplicavel": "pediatria",
                "nota": null,
                "exemplos_clinicos": [
                    "Comportamento de crise típico de criança muito menor"
                ]
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    },
    {
        "id": "C",
        "nome": "Frequência: ≥3 vezes por semana",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "C1",
                "rotulo": "Frequência: ≥3 vezes por semana",
                "desc": "As explosões de raiva ocorrem, em média, três ou mais vezes por semana.",
                "pergunta": "As explosões acontecem pelo menos três vezes na semana?",
                "faixa_aplicavel": "pediatria",
                "nota": null,
                "exemplos_clinicos": [
                    "Explosões diárias ou quase diárias"
                ]
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    },
    {
        "id": "D",
        "nome": "Humor irritável/zangado persistente entre explosões",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "D1",
                "rotulo": "Humor irritável/zangado persistente entre explosões",
                "desc": "Humor entre as explosões de raiva é persistentemente irritável ou zangado na maior parte do dia, quase todos os dias, observável por outras pessoas.",
                "pergunta": "A criança parece irritável ou zangada durante a maior parte do dia, todos os dias, mesmo quando não está tendo explosões?",
                "faixa_aplicavel": "pediatria",
                "nota": null,
                "exemplos_clinicos": [
                    "Professores relatam que a criança parece sempre com raiva"
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
        "id": "duracao_12meses",
        "letra": "E",
        "rotulo": "Duração ≥12 meses sem pausa de 3 meses",
        "tipo": "temporal_duracao_minima",
        "ui_widget": "campo_duracao_meses",
        "obrigatorio": true,
        "icone": "Calendar",
        "descricao_completa": "Os Critérios A-D estão presentes por 12 meses ou mais; sem período de 3 ou mais meses consecutivos sem todos os sintomas.",
        "nota": null
    },
    {
        "id": "multicontexto",
        "letra": "F",
        "rotulo": "Presente em ≥2 ambientes, grave em ≥1",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "House",
        "descricao_completa": "Os Critérios A e D estão presentes em pelo menos dois de três ambientes (em casa, na escola, com os pares) e são graves em pelo menos um deles.",
        "nota": null
    },
    {
        "id": "faixa_etaria_diagnostico",
        "letra": "G",
        "rotulo": "Diagnóstico entre 6 e 18 anos",
        "tipo": "condicional_etario",
        "ui_widget": "campo_idade",
        "obrigatorio": true,
        "icone": "Baby",
        "descricao_completa": "O diagnóstico não deve ser feito pela primeira vez antes dos 6 anos ou após os 18 anos de idade.",
        "nota": null
    },
    {
        "id": "inicio_antes_10anos",
        "letra": "H",
        "rotulo": "Início dos sintomas A-E antes dos 10 anos",
        "tipo": "condicional_etario",
        "ui_widget": "campo_idade",
        "obrigatorio": true,
        "icone": "Baby",
        "descricao_completa": "Por relato ou observação, a idade de início dos Critérios A-E é antes dos 10 anos.",
        "nota": null
    },
    {
        "id": "exclusao_mania_hipomania",
        "letra": "I",
        "rotulo": "Sem episódio maníaco/hipomaníaco superior a 1 dia",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Nunca houve período distinto superior a 1 dia com todos os critérios de sintomas (exceto duração) para episódio maníaco ou hipomaníaco.",
        "nota": null,
        "ddx_sugeridos": [
            "transtorno_bipolar_tipo_1",
            "transtorno_bipolar_tipo_2"
        ]
    },
    {
        "id": "exclusao_diagnostica_outros",
        "letra": "J",
        "rotulo": "Não exclusivamente durante EDM; não TEA, TEPT etc.",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Não ocorre exclusivamente durante EDM; não é mais bem explicado por TEA, TEPT, ansiedade de separação, TDP. Não coexiste com TOD, transtorno explosivo intermitente ou transtorno bipolar.",
        "nota": null,
        "ddx_sugeridos": [
            "transtorno_depressivo_maior",
            "transtorno_espectro_autista",
            "transtorno_estresse_pos_traumatico",
            "transtorno_ansiedade_separacao",
            "transtorno_depressivo_persistente",
            "transtorno_bipolar_tipo_i"
        ]
    },
    {
        "id": "exclusao_substancias_condicao_medica",
        "letra": "K",
        "rotulo": "Não atribuível a substância ou condição médica",
        "tipo": "exclusao_substancia_medica",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Os sintomas não são consequência dos efeitos psicológicos de uma substância ou de outra condição médica ou neurológica.",
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
  "especificadores": [],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6A8Y",
        "equivalencia": "sem_correspondencia_direta",
        "regra": "A CID-11 MMS não possui categoria equivalente direta; 6A8Y é a categoria residual de outros transtornos do humor e exige julgamento clínico/codificador.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno disruptivo da desregulação do humor."
},
  "hierarquia": {
    "presente": true,
    "exclui_se_diagnosticado": [
      "transtorno_bipolar_tipo_1",
      "transtorno_bipolar_tipo_2"
    ],
    "exclui_diagnostico_de": [
      "transtorno_oposicao_desafiante",
      "transtorno_explosivo_intermitente"
    ],
    "notas": "TDDH tem precedência sobre TOD e transtorno explosivo intermitente quando critérios de ambos são satisfeitos. Não pode coexistir com transtorno bipolar.",
      },
  "dominios_impacto": [
    {
        "id": "academico",
        "label": "Aprendizagem e desempenho acadêmico",
        "icone": "GraduationCap",
        "relevante_para": "transversal"
    },
    {
        "id": "relacoes_interpessoais",
        "label": "Relações interpessoais e familiares",
        "icone": "Heart",
        "relevante_para": "pediatria"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "transtorno_bipolar",
        "condicao": "Transtorno Bipolar",
        "natureza": "transtorno_mental",
        "ponto_distincao": "transtorno bipolar é episódico com humor elevado/expansivo; Transtorno Disruptivo da Desregulação do Humor é persistente e não episódico, sem humor elevado.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_de_oposicao_desafiante",
        "condicao": "Transtorno de Oposição Desafiante",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno Disruptivo da Desregulação do Humor requer explosões graves/frequentes E humor persistente entre as explosões; Transtorno de Oposição Desafiante raramente tem o componente de humor entre explosões.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_explosivo_intermitente",
        "condicao": "Transtorno Explosivo Intermitente",
        "natureza": "transtorno_mental",
        "ponto_distincao": "TEI não requer perturbação persistente do humor entre explosões e requer apenas 3 meses (vs. 12 no Transtorno Disruptivo da Desregulação do Humor).",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_do_espectro_autista",
        "condicao": "Transtorno do Espectro Autista",
        "natureza": "transtorno_mental",
        "ponto_distincao": "No Transtorno do Espectro Autista, explosões são secundárias à perturbação de rotina; Transtorno Disruptivo da Desregulação do Humor não deve ser adicionado nesse contexto.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "condicao_neurologica_endocrina_ou_disturbio_do_sono",
        "condicao": "Condição neurológica, endócrina ou distúrbio do sono",
        "natureza": "condicao_medica",
        "ponto_distincao": "Irritabilidade adquirida, episódica ou associada a sinais físicos pede investigação médica.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "TDAH",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtornos de ansiedade",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno depressivo maior",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "ari",
        "nome": "Inventário de Reatividade Afetiva",
        "sigla": "ARI",
        "uso": "gravidade_monitoramento",
        "faixa_etaria": "pediatria",
        "obrigatorio_para_diagnostico": false,
        "fonte": "apa_dsm5_secao_iii",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "tipo_estimativa": "prevalencia_6_a_12_meses",
    "estimativa": "2 a 5% entre crianças e adolescentes na comunidade (estimativa de 6 meses a 1 ano)",
    "distribuicao_por_sexo": "Predominantemente masculino em amostras clínicas e comunitárias",
    "variacoes_contextuais": null,
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "O início dos sintomas deve ocorrer antes dos 10 anos; o diagnóstico não deve ser feito pela primeira vez antes dos 6 nem após os 18 anos.",
    "trajetoria": "A irritabilidade pode persistir por anos e tende a associar-se posteriormente a transtornos depressivos e de ansiedade, mais do que a transtorno bipolar.",
    "prognostico": "A estabilidade diagnóstica é limitada; reavaliar desenvolvimento, contexto, comorbidades e mudança do padrão ao longo do tempo.",
    "nota_aplicador": "Os limites etários são parte do critério formal: início antes dos 10 anos; primeira aplicação diagnóstica entre 6 e 18 anos."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [],
        "diagnostic_rule": "- Critérios A (explosões) + B (desproporção) + C (≥3x/semana) + D (humor irritável) + E (≥12 meses) + F (≥2 ambientes) + G (6-18 anos) + H (início <10 anos) + I (sem mania) + J (excluir outros TM) + K (excluir substância/condição médica)",
        "clusters": [],
        "duration": null,
        "age_onset": null,
        "functional_impairment": null,
        "exclusions": [],
        "specifiers": [],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [
          "A criança tem birras ou explosões de raiva frequentes? Com que frequência?",
          "Essas explosões são desproporcionais ao que aconteceu?",
          "Como é o humor dela entre as explosões? Fica irritada/zangada a maior parte do tempo?",
          "Há quanto tempo isso vem acontecendo? Houve algum período de 3 meses sem esses problemas?",
          "Isso acontece em casa, na escola e com os amigos?",
          "A criança tem idade entre 6 e 18 anos? Os sintomas começaram antes dos 10?",
          "Já teve algum período de mais de 1 dia em que o humor estava muito elevado, com energia aumentada e pouca necessidade de sono?",
          "Os problemas acontecem SÓ quando ela está deprimida ou ansiosa?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### Transtorno DISRUPTIVO DA DESREGULAÇÃO DO HUMOR (TDDC)",
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
      "prevalencia_precisa_comunidade",
      "dados_genetica_molecular"
    ],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:** Politetico — A (explosões de raiva recorrentes graves, desproporcionais) + B (inconsistentes com nivel de desenvolvimento) + C (>=3 explosões/semana em média) + D (humor persistentemente irritável/zangado entre explosões, maior parte do dia, quase todos os dias) + E (duracao >=12 meses, sem periodo livre >=3 meses) + F (presente em >=2 de 3 ambientes, grave em ao menos 1) + G (idade 6-18 anos) + H (inicio antes dos 10 anos) + I (nunca episodio maníaco/hipomaníaco >1 dia) + J (nao exclusivamente durante TDM, nao melhor explicado por outro transtorno) + K (nao por substancia/condicao médica)",
    "notas_clinicas": "- **Notas:** Diagnostico restrito a crianças/adolescentes (6-18 anos). Inicio antes dos 10. Nao coexiste com transtorno de oposicao desafiante, transtorno explosivo intermitente ou transtorno bipolar. Pode coexistir com TDM, TDAH, transtorno da conduta, transtornos por uso de substancia. Prevalencia estimada 2-5% em criancas/adolescentes. Predominancia masculina. Curso: irritabilidade cronica nao-episodica; risco futuro de transtornos depressivos unipolares e ansiedade (nao bipolar)."
  },
  
});
export type DisorderData = typeof data;
