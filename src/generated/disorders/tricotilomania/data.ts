import { TricotilomaniaSchema } from "./schema";

export const data = TricotilomaniaSchema.parse({
  "$schema_version": "1.0.0",
  "meta": {
    "id": "tricotilomania",
    "nome_completo": "Tricotilomania (Transtorno de Arrancar o Cabelo)",
    "sigla": null,
    "codigo": {
      "dsm5": "312.39",
      "cid10": "F63.3",
      "cid11": "6B25"
    },
    "capitulo": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
    "capitulo_id": "06",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Hair-pulling disorder"
    ]
  },
  "estrutura_geral": "monothetic_puro",
  "clusters_sintomas": [
    {
      "id": "A_B",
      "nome": "Arrancar Cabelos Recorrente com Tentativas Fracassadas de Parar",
      "tipo": "monothetic_obrigatorio",
      "limiar": null,
      "ancora_obrigatoria": null,
      "sintomas": [
        {
          "id": "A1",
          "rotulo": "Arrancar cabelos recorrente resultando em perda",
          "desc": "Arrancar cabelos recorrente resultando em perda de cabelo.",
          "pergunta": "Você arranca repetidamente cabelos (do couro cabeludo, sobrancelhas, cílios ou outras áreas) causando queda visível?",
          "exemplos_clinicos": [
            "Áreas de alopecia no couro cabeludo",
            "Cílios ausentes"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "B1",
          "rotulo": "Tentativas repetidas de parar ou diminuir o comportamento",
          "desc": "O indivíduo fez tentativas repetidas de diminuir ou parar de arrancar cabelos.",
          "pergunta": "Você já tentou parar de arrancar o cabelo sem conseguir?",
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
      "descricao_completa": "O arrancar cabelos causa sofrimento clinicamente significativo ou prejuízo no funcionamento.",
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
      "rotulo": "Não atribuível a condição médica ou outro transtorno mental",
      "tipo": "exclusao_diagnostica",
      "ui_widget": "toggle_simples",
      "obrigatorio": true,
      "icone": "Ban",
      "ddx_sugeridos": [
        "dermatite",
        "toc",
        "transtorno_psicose"
      ],
      "descricao_completa": "Não atribuível a condição dermatológica nem mais bem explicado por outro transtorno mental.",
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
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para tricotilomania."
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
      "label": "Saúde Dermatológica/Capilar",
      "icone": "Hospital",
      "relevante_para": "transversal"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "TOC",
      "ponto_distincao": "TOC: compulsões em resposta a obsessões específicas; tricotilomania: comportamento sem pensamento obsessivo subjacente.",
      "pertence_a_classe": true
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
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "1–2% (prevalência de 12 meses)",
    "proporcao_sexo": "10:1 mulheres:homens em amostras clínicas; mais equilibrado na infância",
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
    "idade_inicio_tipica": "Pico na pré-adolescência (~12–13 anos); pode ser crônico se não tratado",
    "trajetoria": "Crônico com flutuações; pode remitir na gravidez.",
    "prognostico": "Responde a TCC (Habit Reversal Training) e N-acetilcisteína.",
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
  "id": "tricotilomania",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
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
  "versao_complementar_existe": false,
  "inventario_clinico": {
    "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 312.39 (F63.3)",
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
