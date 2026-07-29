import { TricotilomaniaSchema } from "./schema";

export const data = TricotilomaniaSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "tricotilomania",
    "nome_completo": "Tricotilomania (Transtorno de Arrancar o Cabelo)",
    "capitulo": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
    "capitulo_id": "transtorno_obsessivo_compulsivo_e_transtornos_relacionados",
    "sigla": null,
    "codificacao": {
        "dsm5_tr": {
            "codigo": "312.39",
            "sistema_origem": "ICD-9-CM",
            "uso": "referencia_editorial_legacy"
        },
        "cid10_cm": {
            "referencia_base": "F63.3",
            "equivalencia": "direta",
            "regra": "Correspondência diagnóstica direta no nível informado; confirmar especificadores e requisitos da versão CID-10-CM adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6B25.0",
            "equivalencia": "direta",
            "regra": "Correspondência diagnóstica direta; selecionar eventual subcategoria de curso, gravidade ou remissão quando aplicável.",
            "versao": "CID-11 MMS 2026-01"
        }
    },
    "agrupamento": {
        "capitulo": {
            "id": "transtorno_obsessivo_compulsivo_e_transtornos_relacionados",
            "label": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados"
        },
        "subgrupo": null
    },
    "faixa_etaria_alvo": "transversal",
    "terminologia_relacionada": [
        {
            "termo": "Hair-pulling disorder",
            "status": "nome_em_ingles",
            "equivalencia": "equivalente",
            "nota": "Não é termo histórico."
        }
    ]
},
  "estrutura_geral": "monothetic_puro",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Arrancar cabelo de forma recorrente",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Arrancar cabelos recorrente resultando em perda",
                "desc": "Arrancar cabelos recorrente resultando em perda de cabelo.",
                "pergunta": "A pessoa arranca repetidamente cabelos (do couro cabeludo, sobrancelhas, cílios ou outras áreas) causando queda visível?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Áreas de alopecia no couro cabeludo",
                    "Cílios ausentes"
                ]
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    },
    {
        "id": "B",
        "nome": "Tentativas repetidas de reduzir ou parar",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "B1",
                "rotulo": "Tentativas repetidas de parar ou diminuir o comportamento",
                "desc": "O indivíduo fez tentativas repetidas de diminuir ou parar de arrancar cabelos.",
                "pergunta": "A pessoa já tentou parar de arrancar o cabelo sem conseguir?",
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
        "id": "sofrimento_funcional",
        "letra": "C",
        "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Frown",
        "descricao_completa": "O arrancar cabelos causa sofrimento clinicamente significativo ou prejuízo no funcionamento.",
        "nota": null
    },
    {
        "id": "exclusao_medica_outros",
        "letra": "D",
        "rotulo": "Não atribuível a condição médica ou outro transtorno mental",
        "tipo": "exclusao_substancia_medica",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "A condição não é atribuível aos efeitos fisiológicos de uma substância ou a outra condição médica.",
        "nota": null
    },
    {
        "id": "exclusao_outro_transtorno_mental",
        "letra": "E",
        "rotulo": "Não é mais bem explicada por outro transtorno mental",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "ddx_sugeridos": [
            "transtorno_dismorfico_corporal"
        ],
        "descricao_completa": "A condição não é mais bem explicada pelos sintomas de outro transtorno mental.",
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
        "codigo_base": "6B25.0",
        "equivalencia": "direta",
        "regra": "Correspondência diagnóstica direta; selecionar eventual subcategoria de curso, gravidade ou remissão quando aplicável.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para tricotilomania."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": null,
      },
  "dominios_impacto": [
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
        "id": "transtorno_obsessivo_compulsivo",
        "condicao": "Transtorno Obsessivo-Compulsivo",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno Obsessivo-Compulsivo: compulsões em resposta a obsessões específicas; tricotilomania: comportamento sem pensamento obsessivo subjacente.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "condicao_dermatologica_com_alopecia",
        "condicao": "Condição dermatológica com alopecia",
        "natureza": "condicao_medica",
        "ponto_distincao": "A perda capilar decorre primariamente da condição médica quando não há arrancamento recorrente.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno de Escoriação",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "TOC",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "mgh_hps",
        "nome": "Escala de Arrancamento de Cabelo do Massachusetts General Hospital",
        "sigla": "MGH-HPS",
        "uso": "gravidade_monitoramento",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "tipo_estimativa": "prevalencia_12_meses",
    "estimativa": "Cerca de 1–2% em 12 meses.",
    "distribuicao_por_sexo": "10:1 mulheres:homens em amostras clínicas; mais equilibrado na infância",
    "variacoes_contextuais": null,
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Frequentemente no período peripuberal, mas pode iniciar em outras idades.",
    "trajetoria": "Pode ser persistente ou flutuante, com períodos de redução e exacerbação; não há base para tratar gravidez como remissão típica.",
    "prognostico": "Gravidade, comorbidades, dano físico e automatismo do comportamento influenciam a persistência e o prejuízo.",
    "nota_aplicador": "Início e trajetória são descritores típicos, não critérios isolados; um curso diferente exige reavaliação, mas não exclusão automática."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [],
        "diagnostic_rule": "Criterios descritivos para TRICOTILOMANIA / TRANSTORNO DE ARRANCAR O CABELO conforme DSM-5",
        "clusters": [],
        "duration": null,
        "age_onset": null,
        "functional_impairment": null,
        "exclusions": [],
        "specifiers": [],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [
          "Voce arranca seus cabelos de forma recorrente?",
          "Isso ja causou perda visivel de cabelo ou calvicie em areas?",
          "Voce ja tentou parar ou reduzir e nao conseguiu?",
          "Voce arranca por ansiedade, tedio, ou sem perceber?",
          "Voce sente alivio ou prazer quando arranca?",
          "Voce engole os cabelos depois de arranca-los (tricofagia)?",
          "O arrancar e para melhorar algum defeito que voce percebe?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### TRICOTILOMANIA / TRANSTORNO DE ARRANCAR O CABELO",
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
    "fonte_capitulo_md": "06_transtorno_obsessivo_compulsivo_transtornos_relacionados.md",
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
