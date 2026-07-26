import { TranstornoPanicoSchema } from "./schema";

export const data = TranstornoPanicoSchema.parse({
  "$schema_version": "2.2.0",
  "meta": {
    "id": "transtorno_panico",
    "nome_completo": "Transtorno de Pânico",
    "sigla": "TP",
    "codigo": {
      "dsm5": "300.01",
      "cid10": "F41.0",
      "cid11": "6B01"
    },
    "capitulo": "Transtornos de Ansiedade",
    "capitulo_id": "05",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Síndrome do pânico"
    ]
  },
  "estrutura_geral": "polythetic_com_ancora",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Ataque de Pânico Recorrente e Inesperado (âncora) + Sequela",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 4,
            "pediatria": 4
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Palpitações / taquicardia",
                "desc": "Palpitações, coração acelerado ou taquicardia durante o ataque.",
                "pergunta": "Durante o ataque, sente o coração bater forte ou acelerado?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A2",
                "rotulo": "Sudorese",
                "desc": "Sudorese excessiva durante o ataque.",
                "pergunta": "A pessoa transpira muito durante o ataque?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A3",
                "rotulo": "Tremores ou abalos",
                "desc": "Tremores ou abalos durante o ataque.",
                "pergunta": "A pessoa treme durante o ataque?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A4",
                "rotulo": "Falta de ar / sensação de sufocamento",
                "desc": "Sensações de falta de ar ou sufocamento.",
                "pergunta": "A pessoa sente que não consegue respirar ou que vai sufocar durante o ataque?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A5",
                "rotulo": "Sensações de asfixia",
                "desc": "Sensações de asfixia/garganta fechando.",
                "pergunta": "Sente a garganta fechando ou como se fosse engasgar?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A6",
                "rotulo": "Dor ou desconforto no tórax",
                "desc": "Dor ou desconforto torácico durante o ataque.",
                "pergunta": "Sente dor ou pressão no peito durante o ataque?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A7",
                "rotulo": "Náusea ou desconforto abdominal",
                "desc": "Náusea ou desconforto abdominal.",
                "pergunta": "Sente náusea ou mal-estar no estômago durante o ataque?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A8",
                "rotulo": "Tontura, instabilidade ou desmaio",
                "desc": "Sensação de tontura, instabilidade, atordoamento ou desmaio.",
                "pergunta": "A pessoa sente tontura, vertigem ou que vai desmaiar durante o ataque?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A9",
                "rotulo": "Calafrios ou ondas de calor",
                "desc": "Calafrios ou ondas de calor.",
                "pergunta": "Sente calafrios ou ondas de calor intenso durante o ataque?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A10",
                "rotulo": "Parestesias (dormência/formigamento)",
                "desc": "Parestesias — sensações de dormência ou formigamento.",
                "pergunta": "Sente dormência ou formigamento (especialmente nas mãos, pés ou rosto) durante o ataque?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A11",
                "rotulo": "Desrealização ou despersonalização",
                "desc": "Desrealização (sentir que o mundo não é real) ou despersonalização (sentir-se separado de si mesmo).",
                "pergunta": "Durante o ataque, sente que o mundo ao redor não é real ou que está fora do seu corpo?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A12",
                "rotulo": "Medo de perder o controle ou 'enlouquecer'",
                "desc": "Medo de perder o controle ou 'enlouquecer'.",
                "pergunta": "Durante o ataque, a pessoa tem medo de perder o controle ou de ficar louco?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A13",
                "rotulo": "Medo de morrer",
                "desc": "Medo de morrer durante o ataque.",
                "pergunta": "Durante o ataque, a pessoa sente que vai morrer?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Certeza de estar tendo infarto"
                ]
            }
        ],
        "descricao_qualitativa": "Ataques de pânico recorrentes e inesperados: surto abrupto de medo/desconforto intenso que atinge o pico em minutos.",
        "nota": null,
        "regra_temporal": null
    }
],
  "criterios_condicionais": [
    {
        "id": "preocupacao_ou_mudanca",
        "letra": "B",
        "rotulo": "≥1 mês com preocupação/esquiva após ataques",
        "tipo": "temporal_duracao_minima",
        "ui_widget": "campo_duracao_meses",
        "obrigatorio": true,
        "icone": "Calendar",
        "descricao_completa": "Ao menos um ataque foi seguido por ≥1 mês de: (1) preocupação persistente sobre novos ataques ou suas consequências; OU (2) mudança significativa no comportamento (esquivas) relacionada aos ataques.",
        "nota": null
    },
    {
        "id": "exclusao_substancia_medica",
        "letra": "C",
        "rotulo": "Não atribuível a substância ou condição médica",
        "tipo": "exclusao_substancia_medica",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Não atribuível aos efeitos fisiológicos de substância ou condição médica (hipertireoidismo, cardiopatias).",
        "nota": null,
        "ddx_sugeridos": [
            "hipertireoidismo",
            "hiperparatireoidismo",
            "taquiarritmias",
            "feocromocitoma"
        ]
    },
    {
        "id": "exclusao_outros",
        "letra": "D",
        "rotulo": "Não melhor explicado por outro transtorno mental",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Os ataques não são mais bem explicados por TAS, fobia específica, TAS (separação), TEPT, TAG.",
        "nota": null,
        "ddx_sugeridos": [
            "transtorno_ansiedade_social",
            "fobia_especifica",
            "transtorno_estresse_pos_traumatico",
            "transtorno_ansiedade_generalizada"
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
  "especificadores": [],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6B01",
        "equivalencia": "direta",
        "regra": "Correspondência diagnóstica direta; selecionar eventual subcategoria de curso, gravidade ou remissão quando aplicável.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno de pânico."
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
    },
    {
        "id": "saude_fisica",
        "label": "Saúde física",
        "icone": "HeartPulse",
        "relevante_para": "transversal"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "outros_transtornos_de_ansiedade",
        "condicao": "Outros transtornos de ansiedade",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Pânico: ataques inesperados; em outros transtornos, a ansiedade é situacional e previsível.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "outras_condicoes_medicas",
        "condicao": "Outras condições médicas",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Exames laboratoriais para excluir causas orgânicas (tireoide, coração, sistema nervoso).",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_depressivo_maior",
        "condicao": "Transtorno Depressivo Maior",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Ataques de pânico ocorrem frequentemente no Transtorno Depressivo Maior; o diagnóstico de Transtorno de Pânico pode ser dado se satisfeitos todos os critérios.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "arritmia_hipertireoidismo_asma_ou_epilepsia",
        "condicao": "Arritmia, hipertireoidismo, asma ou epilepsia",
        "natureza": "condicao_medica",
        "ponto_distincao": "Sintomas ligados à fisiopatologia, esforço ou achados clínicos favorecem causa médica; ataques de pânico ainda podem coexistir.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "ataques_de_panico_induzidos_por_substancia_ou_medicamento",
        "condicao": "Ataques de pânico induzidos por substância ou medicamento",
        "natureza": "substancia_medicamento",
        "ponto_distincao": "Estimulantes, cafeína, cannabis e abstinência podem provocar ataques ligados temporalmente à exposição.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Outros transtornos de ansiedade",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno Depressivo Maior",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno Bipolar",
      "frequencia": "moderada",
      "nota": null
    },
    {
      "condicao": "Transtorno por uso de álcool",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "pdss",
        "nome": "Escala de Gravidade do Transtorno de Pânico",
        "sigla": "PDSS",
        "uso": "gravidade_monitoramento",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "populacao_geral": "2–3% (prevalência de 12 meses em adultos e adolescentes nos EUA e Europa)",
    "proporcao_sexo": "2:1 mulheres:homens",
    "variacoes_culturais": "Ataque de pânico pode apresentar-se como khyâl cap (cultura cambojana) ou ataque de nervios (latino). Prevalência menor em africanos americanos, asiáticos americanos, latinos.",
    "notas": "Prevalência de ataques de pânico (isolados) é ~11%/ano; critérios plenos do TP não atingidos na maioria.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Adulto jovem; pico 20–24 anos; raro antes dos 14 e após os 45",
    "trajetoria": "Geralmente crônico com flutuações. Episódio mais grave raramente excede 1 ano isoladamente.",
    "prognostico": "Variável; prognóstico pior associado a esquiva fóbica marcada, depressão comórbida.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "episodico_com_sintomas",
        "criteria": [],
        "diagnostic_rule": "```\n(A: >=2 ataques inesperados COM >=4/13 sintomas atingindo pico em minutos) + (B1 OU B2 por >=1 mes) + (C NAO_SUBSTANCIA_MEDICA) + (D NAO_OUTRO_TX)\n```\n\n**Conceito-chave: \"Inesperado\"**\nAtaque sem indicio ou desencadeante obvio no momento — parece \"vir do nada\" (relaxando, emergindo do sono). A presenca de ataques esperados NAO exclui o diagnostico de transtorno de transtorno_panico (aprox. metade dos individuos tem ambos).",
        "clusters": [],
        "duration": null,
        "age_onset": "| 20-24 anos |",
        "functional_impairment": null,
        "exclusions": [
          "→ exames laboratoriais",
          "3. **Outros transtornos de ansiedade** → se ataques ocorrem SOMENTE em contexto do outro transtorno, nao diagnosticar transtorno_panico"
        ],
        "specifiers": [
          "**Com agorafobia** (quando criterios para agorafobia satisfeitos)",
          "Ataque de transtorno_panico como especificador pode ser anotado em outros transtornos"
        ],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [
          "Ja sentiu medo intenso ou desconforto que apareceu de repente e atingiu o maximo em poucos minutos?",
          "Quantas vezes isso aconteceu?",
          "O primeiro ataque pareceu vir 'do nada' ou havia um motivo obvio?",
          "Durante esses surtos, voce sentiu: palpitacoes? falta de ar? tontura? suor? tremores? dor no peito? nausea? calafrios/ondas de calor? formigamento? sensacao de irrealidade? medo de enlouquecer? medo de morrer?",
          "Depois dos ataques, ficou preocupado que pudessem acontecer novamente?",
          "Mudou algum comportamento por causa dos ataques? (evitar exercicios, lugares, situacoes)",
          "Usa cafeina, anfetaminas, cocaina ou outras substancias?",
          "Tem problemas de tireoide, coracao ou respiracao?",
          "Os ataques acontecem SOMENTE em situacoes sociais?",
          "Os ataques acontecem SOMENTE em situacoes ou com objetos especificos?",
          "Evita transporte publico, espacos abertos, espacos fechados, multidoes ou sair de casa sozinho por medo de ter um ataque?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### Transtorno de Panico",
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
    "fonte_capitulo_md": "05_transtornos_ansiedade.md",
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
    "estrutura_efetiva": "- **Estrutura efetiva:** A (ataques recorrentes inesperados) + B (preocupacao/comportamento >=1 mes) + C exclusao substancia + D exclusao outro transtorno",
    "notas_clinicas": "- **Notas:**"
  },
  
});
export type DisorderData = typeof data;
