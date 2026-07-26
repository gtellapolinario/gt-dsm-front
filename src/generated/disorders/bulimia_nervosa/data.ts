import { BulimiaNervosaSchema } from "./schema";

export const data = BulimiaNervosaSchema.parse({
  "$schema_version": "2.2.0",
  "meta": {
    "id": "bulimia_nervosa",
    "nome_completo": "Bulimia Nervosa",
    "sigla": null,
    "codigo": {
      "dsm5": "307.51",
      "cid10": "F50.2",
      "cid11": "6B81"
    },
    "capitulo": "Transtornos Alimentares",
    "capitulo_id": "10",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "estrutura_geral": "monothetic_puro",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Episódios recorrentes de compulsão alimentar",
        "tipo": "monothetic_conjuntivo",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Episódios recorrentes de compulsão com ingestão excessiva",
                "desc": "Ingestão, em um período de tempo determinado (geralmente < 2 horas), de uma quantidade de alimento definitivamente maior do que a maioria dos indivíduos consumiria no mesmo período sob circunstâncias semelhantes.",
                "pergunta": "A pessoa tem episódios nos quais come uma quantidade de alimento definitivamente maior do que a maioria das pessoas comeria em um período similar?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Ingestão excessiva em festas ou celebrações deve ser contextualizada"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Sensação de falta de controle durante a compulsão",
                "desc": "Sensação de falta de controle sobre a ingestão durante o episódio, como sentimento de não conseguir parar de comer ou controlar o que e o quanto se está ingerindo.",
                "pergunta": "Durante esses episódios, a pessoa sente que não consegue parar de comer ou controlar o que e quanto está ingerindo?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Incapacidade de abster-se de comer",
                    "Parar apenas quando desconfortavelmente cheio"
                ]
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    },
    {
        "id": "B",
        "nome": "Comportamentos compensatórios inapropriados recorrentes",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "B1",
                "rotulo": "Comportamentos compensatórios inapropriados recorrentes",
                "desc": "Comportamentos compensatórios inapropriados recorrentes a fim de impedir o ganho de peso, como vômitos autoinduzidos, uso indevido de laxantes, diuréticos ou outros medicamentos, jejum ou exercício em excesso.",
                "pergunta": "A pessoa adota comportamentos compensatórios inapropriados de forma recorrente para impedir o ganho de peso após episódios de compulsão?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Vômitos autoinduzidos",
                    "Uso indevido de laxantes ou diuréticos",
                    "Jejum",
                    "Exercício excessivo"
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
        "id": "frequencia_minima",
        "letra": "C",
        "rotulo": "Frequência mínima: ≥1 vez por semana durante 3 meses",
        "tipo": "temporal_frequencia",
        "ui_widget": "campo_frequencia_semanal",
        "obrigatorio": true,
        "icone": "Repeat",
        "descricao_completa": "A compulsão alimentar e os comportamentos compensatórios inapropriados ocorrem, em média, no mínimo uma vez por semana durante três meses.",
        "nota": null
    },
    {
        "id": "autoavaliacao_peso_forma",
        "letra": "D",
        "rotulo": "Autoavaliação indevidamente influenciada por forma e peso corporais",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "ClipboardCheck",
        "descricao_completa": "A autoavaliação é indevidamente influenciada pela forma e pelo peso corporais.",
        "nota": null
    },
    {
        "id": "exclusao_anorexia",
        "letra": "E",
        "rotulo": "Não ocorre exclusivamente durante episódios de anorexia nervosa",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "A perturbação não ocorre exclusivamente durante episódios de anorexia nervosa.",
        "nota": null,
        "ddx_sugeridos": [
            "anorexia_nervosa"
        ]
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
        "id": "estado_remissao",
        "nome": "Estado de remissão",
        "tipo": "enum",
        "ortogonal": false,
        "opcoes": [
            "Em remissão parcial",
            "Em remissão completa"
        ],
        "regra_criterial": null
    }
],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6B81",
        "equivalencia": "direta",
        "regra": "Correspondência diagnóstica direta; selecionar eventual subcategoria de curso, gravidade ou remissão quando aplicável.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "gravidade_atual",
    "tipo": "frequencia_semanal_de_eventos",
    "lembrete_aplicador": "Classifique pela média semanal de comportamentos compensatórios inapropriados.",
    "niveis": [
        {
            "id": "leve",
            "label": "Leve",
            "descritor": "1 a 3 episódios por semana."
        },
        {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "4 a 7 episódios por semana."
        },
        {
            "id": "grave",
            "label": "Grave",
            "descritor": "8 a 13 episódios por semana."
        },
        {
            "id": "extrema",
            "label": "Extrema",
            "descritor": "14 ou mais episódios por semana."
        }
    ],
    "regra_atribuicao": "Use a frequência média semanal dos comportamentos compensatórios.",
    "observacao": "O nível pode ser elevado conforme outros sintomas e o grau de incapacidade funcional."
},
  "hierarquia": {
    "presente": true,
    "exclui_se_diagnosticado": [
      "anorexia_nervosa"
    ],
    "exclui_diagnostico_de": [],
    "notas": "Não ocorre exclusivamente durante episódios de anorexia nervosa. Indivíduos que evoluem de anorexia para bulimia comumente alternam entre os dois transtornos.",
      },
  "dominios_impacto": [
    {
        "id": "saude_fisica",
        "label": "Saúde Física e Dental",
        "icone": "HeartPulse",
        "relevante_para": "transversal"
    },
    {
        "id": "social",
        "label": "Funcionamento social",
        "icone": "Users",
        "relevante_para": "transversal"
    },
    {
        "id": "ocupacional_academico",
        "label": "Desempenho ocupacional ou acadêmico",
        "icone": "Briefcase",
        "relevante_para": "transversal"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "anorexia_nervosa_tipo_compulsao_alimentar_purgativo",
        "condicao": "Anorexia nervosa, tipo compulsão alimentar/purgativo",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Anorexia tipo purgativa: peso significativamente baixo. Bulimia: peso igual ou acima da faixa mínima normal.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_de_compulsao_alimentar",
        "condicao": "Transtorno de compulsão alimentar",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno de Compulsão Alimentar: compulsão alimentar sem comportamentos compensatórios inapropriados recorrentes.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "sindrome_de_kleine_levin",
        "condicao": "Síndrome de Kleine-Levin",
        "natureza": "condicao_medica",
        "ponto_distincao": "Kleine-Levin: comportamento alimentar perturbado sem a preocupação excessiva com forma e peso corporais característica da bulimia.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_depressivo_maior_com_aspectos_atipicos",
        "condicao": "Transtorno depressivo maior, com aspectos atípicos",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno Depressivo Maior com aspectos atípicos: hiperfagia sem comportamentos compensatórios indevidos e sem preocupação excessiva com forma/peso.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno depressivo maior",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtornos bipolares",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtornos de ansiedade",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno por uso de substância",
      "frequencia": "moderada",
      "nota": "Especialmente álcool ou estimulantes; prevalência ao longo da vida de pelo menos 30%."
    },
    {
      "condicao": "Transtorno da personalidade borderline",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "ede_q",
        "nome": "Questionário de Exame dos Transtornos Alimentares",
        "sigla": "EDE-Q",
        "uso": "gravidade_monitoramento",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "scoff",
        "nome": "Questionário de triagem para transtornos alimentares",
        "sigla": "SCOFF",
        "uso": "triagem",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "populacao_geral": "1 a 1,5% (prevalência de 12 meses entre jovens do sexo feminino).",
    "proporcao_sexo": "Aproximadamente 10:1 feminino:masculino.",
    "variacoes_culturais": "Ocorrência relatada em frequências relativamente similares na maioria dos países industrializados.",
    "notas": "A prevalência-ponto é maior entre adultos, já que o transtorno atinge seu pico no fim da adolescência e início da idade adulta.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Adolescência ou idade adulta jovem; incomum antes da puberdade ou após os 40 anos.",
    "trajetoria": "Curso crônico ou intermitente com períodos de remissão e recorrência. Sintomas tendem a diminuir ao longo do tempo, especialmente com tratamento.",
    "prognostico": "Períodos de remissão acima de um ano estão associados a evolução de longo prazo mais favorável. Taxa bruta de mortalidade de aproximadamente 2% por década.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "monothetic_tripartite",
        "criteria": [
          "A. Episodios recorrentes de compulsao alimentar (quantidade excessiva + perda de controle)",
          "B. Comportamentos compensatorios inapropriados recorrentes (vomito, laxantes, diureticos, jejum, exercicio excessivo)",
          "C. Frequencia minima: ≥1x/semana durante 3 meses",
          "D. Autoavaliacao indevidamente influenciada por peso/forma",
          "E. NAO ocorre exclusivamente durante anorexia nervosa"
        ],
        "diagnostic_rule": "A AND B AND C(≥1x/semana_3meses) AND D AND E",
        "clusters": [],
        "duration": "≥3 meses de frequencia ≥1x/semana",
        "age_onset": "Adolescencia ou idade adulta jovem",
        "functional_impairment": "Complicacoes eletroliticas possiveis; prejuizo funcional significativo",
        "exclusions": [
          "Anorexia nervosa (quando AN ativa)",
          "Sindrome de Kleine-Levin",
          "TDM atipico"
        ],
        "specifiers": [
          "Remissao parcial",
          "Remissao completa"
        ],
        "operational_profiles": [],
        "critical_differentials": [
          "Anorexia tipo compulsao-purgativa",
          "TCA",
          "TDM atipico"
        ],
        "key_questions": [
          "Ja teve momentos de comer muito com perda de controle?",
          "Faz algo para compensar?",
          "Qual seu peso atual?"
        ],
        "alerts": [
          "Complicacoes eletroliticas possiveis",
          "Mutuamente exclusivo com Anorexia"
        ],
        "source_trace": {
          "markdown_section": "2. BULIMIA NERVOSA",
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
    "fonte_capitulo_md": "10_transtornos_alimentares.md",
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
