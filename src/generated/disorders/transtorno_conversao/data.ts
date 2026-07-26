import { TranstornoConversaoSchema } from "./schema";

export const data = TranstornoConversaoSchema.parse({
  "$schema_version": "2.1.0",
  "meta": {
    "id": "transtorno_conversao",
    "nome_completo": "Transtorno de Conversão (Transtorno de Sintomas Neurológicos Funcionais)",
    "sigla": null,
    "codigo": {
      "dsm5": "300.11",
      "cid10": "F44.x",
      "cid11": "6B60"
    },
    "capitulo": "Transtorno de Sintomas Somáticos e Transtornos Relacionados",
    "capitulo_id": "09",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Histeria",
      "Transtorno de conversão"
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
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "fraqueza_paralisia",
        "codigo": {
          "dsm5": "300.11",
          "cid10": "F44.4",
          "cid11": null
        },
        "label": "Com fraqueza ou paralisia",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "movimento_anormal",
        "codigo": {
          "dsm5": "300.11",
          "cid10": "F44.4",
          "cid11": null
        },
        "label": "Com movimento anormal",
        "descricao": "Tremor, mioclonia, discinesia, gait disorder.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "crises_nao_epilepticas",
        "codigo": {
          "dsm5": "300.11",
          "cid10": "F44.5",
          "cid11": null
        },
        "label": "Com crises ou convulsões",
        "descricao": "Crises não epilépticas funcionais.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "anestesia_sensorial",
        "codigo": {
          "dsm5": "300.11",
          "cid10": "F44.6",
          "cid11": null
        },
        "label": "Com anestesia ou perda sensorial",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "sintomas_sensoriais_especiais",
        "codigo": {
          "dsm5": "300.11",
          "cid10": "F44.6",
          "cid11": null
        },
        "label": "Com sintoma sensorial especial",
        "descricao": "Visual, olfatório, auditivo.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "sintomas_mistos",
        "codigo": {
          "dsm5": "300.11",
          "cid10": "F44.7",
          "cid11": null
        },
        "label": "Com sintomas mistos",
        "descricao": "",
        "sintomas_caracteristicos": []
      }
    ],
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
      "id": "trabalho",
      "label": "Desempenho Profissional",
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
      "condicao": "Doença neurológica",
      "ponto_distincao": "Conversão: sinais clínicos incompatíveis com doença neurológica reconhecida (sinal de Hoover, etc.).",
      "pertence_a_classe": false
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
    "populacao_geral": "2–5/100.000/ano (incidência estimada); comum em neurology clinics",
    "proporcao_sexo": "2–3:1 mulheres:homens",
    "variacoes_culturais": "Prevalência maior em países com renda baixa e recursos médicos limitados.",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Mediana ~30 anos; pode ocorrer em qualquer faixa etária",
    "trajetoria": "50% remitem espontaneamente em 2 semanas; crônico em alguns.",
    "prognostico": "Intervenção neuropsiquiátrica precoce é fator prognóstico positivo.",
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
