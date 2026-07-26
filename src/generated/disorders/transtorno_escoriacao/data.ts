import { TranstornoEscoriacaoSchema } from "./schema";

export const data = TranstornoEscoriacaoSchema.parse({
  "$schema_version": "1.0.0",
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
      "id": "A_B",
      "nome": "Beliscar Pele Recorrente com Lesões e Tentativas Fracassadas",
      "tipo": "monothetic_obrigatorio",
      "limiar": null,
      "ancora_obrigatoria": null,
      "sintomas": [
        {
          "id": "A1",
          "rotulo": "Beliscar a pele de forma recorrente causando lesões",
          "desc": "Beliscar ou escoriar a pele de forma recorrente, resultando em lesões cutâneas.",
          "pergunta": "Você belisca repetidamente a pele (rosto, mãos, braços) causando feridas ou cicatrizes?",
          "exemplos_clinicos": [
            "Feridas abertas no rosto",
            "Cicatrizes nos braços"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "B1",
          "rotulo": "Tentativas repetidas de parar o comportamento",
          "desc": "Tentativas repetidas de parar ou diminuir o comportamento de beliscar a pele.",
          "pergunta": "Você já tentou parar de beliscar a pele sem conseguir?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        }
      ],
      "descricao_qualitativa": null,
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
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
      "ddx_sugeridos": [],
      "descricao_completa": "Causa sofrimento clinicamente significativo ou prejuízo funcional.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_medica_outros",
      "letra": "D",
      "rotulo": "Não atribuível a substância, CMG ou outro transtorno",
      "tipo": "exclusao_diagnostica",
      "ui_widget": "toggle_simples",
      "obrigatorio": true,
      "icone": "Ban",
      "ddx_sugeridos": [
        "scabiose",
        "psoriase",
        "toc"
      ],
      "descricao_completa": "Não atribuível a efeitos de substância ou condição médica dermatológica; não mais bem explicado por outro transtorno mental.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    }
  ],
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
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
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
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
    "metadados": {
      "completo": false,
      "lacunas": [
        "variacao_cultural"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Bimodal: ~10 anos e início na adolescência/adulto jovem",
    "trajetoria": "Crônico; pode flutuar com estresse.",
    "prognostico": "Habit Reversal Training eficaz; N-acetilcisteína como adjuvante.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
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
  "id": "transtorno_escoriacao",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
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
  "versao_complementar_existe": false,
  "inventario_clinico": {
    "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 698.4 (L98.1)",
    "estrutura_efetiva": "- **Estrutura efetiva:**",
    "notas_clinicas": "- **Notas:**"
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
});
export type DisorderData = typeof data;
