import { TranstornoCompulsaoAlimentarSchema } from "./schema";

export const data = TranstornoCompulsaoAlimentarSchema.parse({
  "$schema_version": "2.2.0",
  "meta": {
    "id": "transtorno_compulsao_alimentar",
    "nome_completo": "Transtorno de Compulsão Alimentar",
    "sigla": "TCA",
    "codigo": {
      "dsm5": "307.51",
      "cid10": "F50.8",
      "cid11": "6B82"
    },
    "capitulo": "Transtornos Alimentares",
    "capitulo_id": "10",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "estrutura_geral": "polythetic_clusters_assimetricos",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Episódios Recorrentes de Compulsão Alimentar",
        "tipo": "monothetic_conjuntivo",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Ingestão excessiva de alimento em período determinado",
                "desc": "Ingestão, em um período determinado (geralmente inferior a duas horas), de uma quantidade de alimento definitivamente maior do que a maioria das pessoas consumiria no mesmo período sob circunstâncias semelhantes.",
                "pergunta": "A pessoa tem episódios nos quais come uma quantidade de alimento definitivamente maior do que a maioria das pessoas comeria em um período similar?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "A quantidade deve ser contextualizada às circunstâncias (p. ex. , refeições comemorativas)."
                ]
            },
            {
                "id": "A2",
                "rotulo": "Sensação de falta de controle durante a ingestão",
                "desc": "Sensação de falta de controle sobre a ingestão durante o episódio, como sentimento de não conseguir parar de comer ou controlar o que e o quanto se está ingerindo.",
                "pergunta": "Durante esses episódios, a pessoa sente que não consegue parar de comer ou controlar o que e quanto está ingerindo?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Incapacidade de evitar comer",
                    "Desistiu de tentar controlar a ingesta"
                ]
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    },
    {
        "id": "B",
        "nome": "Características Associadas à Compulsão Alimentar",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 3,
            "pediatria": 3
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "B1",
                "rotulo": "Comer mais rapidamente do que o normal",
                "desc": "Comer mais rapidamente do que o normal durante os episódios de compulsão.",
                "pergunta": "Durante os episódios, a pessoa come mais rápido do que o habitual?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "B2",
                "rotulo": "Comer até se sentir desconfortavelmente cheio",
                "desc": "Comer até se sentir desconfortavelmente cheio.",
                "pergunta": "A pessoa continua comendo até ficar desconfortavelmente cheia?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "B3",
                "rotulo": "Comer grandes quantidades na ausência de fome física",
                "desc": "Comer grandes quantidades de alimento na ausência da sensação física de fome.",
                "pergunta": "A pessoa come grandes quantidades mesmo quando não está fisicamente com fome?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "B4",
                "rotulo": "Comer sozinho por vergonha",
                "desc": "Comer sozinho por vergonha do quanto se está comendo.",
                "pergunta": "A pessoa come sozinha ou esconde a alimentação por vergonha da quantidade ingerida?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "B5",
                "rotulo": "Sentir-se desgostoso, deprimido ou culpado após a compulsão",
                "desc": "Sentir-se desgostoso de si mesmo, deprimido ou muito culpado em seguida ao episódio.",
                "pergunta": "Após os episódios de compulsão, a pessoa se sente envergonhada, deprimida ou muito culpada?",
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
        "id": "sofrimento_marcante",
        "letra": "C",
        "rotulo": "Sofrimento marcante em virtude da compulsão alimentar",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Frown",
        "descricao_completa": "Sofrimento marcante em virtude da compulsão alimentar.",
        "nota": null
    },
    {
        "id": "frequencia_minima",
        "letra": "D",
        "rotulo": "Frequência mínima: ≥1 vez por semana durante 3 meses",
        "tipo": "temporal_frequencia",
        "ui_widget": "campo_frequencia_semanal",
        "obrigatorio": true,
        "icone": "Repeat",
        "descricao_completa": "Os episódios de compulsão alimentar ocorrem, em média, ao menos uma vez por semana durante três meses.",
        "nota": null
    },
    {
        "id": "exclusao_compensacao_bulimia_anorexia",
        "letra": "E",
        "rotulo": "Sem compensação recorrente e não exclusivo de outro transtorno",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "A compulsão alimentar não está associada ao uso recorrente de comportamento compensatório inapropriado como na bulimia nervosa e não ocorre exclusivamente durante o curso de bulimia nervosa ou anorexia nervosa.",
        "nota": null,
        "ddx_sugeridos": [
            "bulimia_nervosa",
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
        "codigo_base": "6B82",
        "equivalencia": "direta",
        "regra": "Correspondência diagnóstica direta; selecionar eventual subcategoria de curso, gravidade ou remissão quando aplicável.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "gravidade_atual",
    "tipo": "frequencia_semanal_de_eventos",
    "lembrete_aplicador": "Classifique pela média semanal de episódios de compulsão alimentar.",
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
    "regra_atribuicao": "Use a frequência média semanal dos episódios de compulsão alimentar.",
    "observacao": "O nível pode ser elevado conforme outros sintomas e o grau de incapacidade funcional."
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
        "label": "Saúde Física e Peso",
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
        "id": "bulimia_nervosa",
        "condicao": "Bulimia nervosa",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Bulimia: comportamento compensatório inapropriado recorrente (purgação, exercício excessivo) e restrição dietética marcada entre episódios. Transtorno de Compulsão Alimentar: ausência de compensação recorrente.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "obesidade",
        "condicao": "Obesidade",
        "natureza": "condicao_medica",
        "ponto_distincao": "Transtorno de Compulsão Alimentar: episódios de compulsão com perda de controle e sofrimento marcante. A maioria dos indivíduos obesos não se envolve em compulsão alimentar recorrente.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_depressivo_maior_e_transtorno_bipolar",
        "condicao": "Transtorno depressivo maior e transtorno bipolar",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Aumento do apetite pode ocorrer em episódios depressivos maiores com aspectos atípicos ou em transtorno bipolar. Se todos os critérios de ambos forem satisfeitos, ambos os diagnósticos podem ser dados.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtornos bipolares",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtornos depressivos",
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
      "nota": null
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "binge_eating_scale",
        "nome": "Escala de Compulsão Alimentar Periódica",
        "sigla": "BES",
        "uso": "gravidade_monitoramento",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "ede_q",
        "nome": "Questionário de Exame dos Transtornos Alimentares",
        "sigla": "EDE-Q",
        "uso": "gravidade_monitoramento",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "populacao_geral": "1,6% (mulheres adultas norte-americanas); 0,8% (homens adultos norte-americanos) — prevalência de 12 meses.",
    "proporcao_sexo": "Bem menos assimétrico do que na bulimia nervosa. Tão prevalente entre mulheres de minorias raciais e étnicas quanto em mulheres brancas.",
    "variacoes_culturais": "Prevalência comparável entre brancos não latinos, latinos, asiáticos e afro-americanos nos Estados Unidos.",
    "notas": "Mais prevalente entre indivíduos que buscam tratamento para emagrecer do que na população em geral.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Adolescência ou idade adulta jovem; pode ter início posterior na idade adulta.",
    "trajetoria": "Relativamente persistente. O curso é comparável à bulimia nervosa em termos de gravidade e duração. Taxas de remissão maiores do que para bulimia ou anorexia.",
    "prognostico": "Mudança diagnóstica de TCA para outros transtornos alimentares é incomum.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "monothetic_tripartite",
        "criteria": [
          "A. Episodios recorrentes de compulsao alimentar (quantidade excessiva + perda de controle)",
          "B. Caracteristicas associadas (≥3 de 5): comer rapido, ate desconforto, sem fome, sozinho por vergonha, sentir-se desgostoso/culpado",
          "C. Sofrimento marcante",
          "D. Frequencia minima: ≥1x/semana durante 3 meses",
          "E. Sem compensacao inapropriada recorrente"
        ],
        "diagnostic_rule": "A AND B(≥3/5) AND C AND D(≥1x/semana_3meses) AND E",
        "clusters": [],
        "duration": "≥3 meses de frequencia ≥1x/semana",
        "age_onset": "Adolescencia ou idade adulta jovem",
        "functional_impairment": "Associado a sobrepeso/obesidade; prejuizo funcional significativo",
        "exclusions": [
          "Bulimia nervosa",
          "Anorexia nervosa",
          "Obesidade",
          "TDM atipico"
        ],
        "specifiers": [
          "Remissao parcial",
          "Remissao completa"
        ],
        "operational_profiles": [],
        "critical_differentials": [
          "Bulimia",
          "Obesidade",
          "TDM atipico"
        ],
        "key_questions": [
          "Come rapido ate ficar desconfortavelmente cheio?",
          "Come sozinho por vergonha?",
          "Faz algo para compensar?"
        ],
        "alerts": [
          "Verificar compensacao obrigatorio (diferenciar de Bulimia)"
        ],
        "source_trace": {
          "markdown_section": "3. TRANSTORNO DE COMPULSAO ALIMENTAR (TCA)",
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
