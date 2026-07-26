import { TranstornoEscoriacaoSchema } from "./schema";

export const data = TranstornoEscoriacaoSchema.parse({
  "$schema_version": "2.1.0",
  "meta": {
    "id": "transtorno_escoriacao",
    "nome_completo": "Transtorno de Escoriação (Skin-Picking)",
    "sigla": null,
    "codigo": {
      "dsm5": "698.4",
      "cid10": "L98.1",
      "cid11": "6B26"
    },
    "capitulo": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
    "capitulo_id": "06",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Excoriação neurótica",
      "Dermatillomania"
    ]
  },
  "estrutura_geral": "monothetic_puro",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Beliscar a pele de forma recorrente",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Beliscar a pele de forma recorrente causando lesões",
                "desc": "Beliscar ou escoriar a pele de forma recorrente, resultando em lesões cutâneas.",
                "pergunta": "A pessoa belisca repetidamente a pele (rosto, mãos, braços) causando feridas ou cicatrizes?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Feridas abertas no rosto",
                    "Cicatrizes nos braços"
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
                "rotulo": "Tentativas repetidas de parar o comportamento",
                "desc": "Tentativas repetidas de parar ou diminuir o comportamento de beliscar a pele.",
                "pergunta": "A pessoa já tentou parar de beliscar a pele sem conseguir?",
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
        "descricao_completa": "Causa sofrimento clinicamente significativo ou prejuízo funcional.",
        "nota": null
    },
    {
        "id": "exclusao_medica_outros",
        "letra": "D",
        "rotulo": "Não atribuível a substância, CMG ou outro transtorno",
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
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "especificadores": [],
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno de escoriação."
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
      "label": "Funcionamento Social (vergonha)",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "saude",
      "label": "Saúde Dermatológica",
      "icone": "Hospital",
      "relevante_para": "transversal"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "TOC",
      "ponto_distincao": "TOC: beliscar em resposta a obsessões específicas; escoriação: comportamento sem obsessão subjacente típica.",
      "pertence_a_classe": true
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Tricotilomania",
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
    "populacao_geral": "1,4% (estimativa adultos)",
    "proporcao_sexo": "Mais comum em mulheres (~75%)",
    "variacoes_culturais": null,
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Bimodal: ~10 anos e início na adolescência/adulto jovem",
    "trajetoria": "Crônico; pode flutuar com estresse.",
    "prognostico": "Habit Reversal Training eficaz; N-acetilcisteína como adjuvante.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [],
        "diagnostic_rule": "Criterios descritivos para TRANSTORNO DE ESCORIACAO / SKIN-PICKING conforme DSM-5",
        "clusters": [],
        "duration": null,
        "age_onset": null,
        "functional_impairment": null,
        "exclusions": [],
        "specifiers": [],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [
          "Voce belisca sua pele de forma recorrente, deixando marcas ou lesoes?",
          "Quais areas do corpo voce belisca mais?",
          "Voce ja tentou parar ou reduzir e nao conseguiu?",
          "Voce belisca por ansiedade, tedio, ou sem perceber?",
          "Voce belisca para melhorar algum defeito da pele?",
          "Ja teve infeccoes ou cicatrizes por causa do beliscar?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### TRANSTORNO DE ESCORIACAO / SKIN-PICKING",
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
