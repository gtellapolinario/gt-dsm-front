import { TranstornoConversaoSchema } from "./schema";

export const data = TranstornoConversaoSchema.parse({
  "$schema_version": "1.0.0",
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
      "id": "A_B",
      "nome": "Sintoma Motor/Sensorial Incompatível com Condição Neurológica",
      "tipo": "monothetic_obrigatorio",
      "limiar": null,
      "ancora_obrigatoria": null,
      "sintomas": [
        {
          "id": "A1",
          "rotulo": "Sintoma(s) motor ou sensorial alterados",
          "desc": "Um ou mais sintomas de função motora ou sensorial voluntária alteradas.",
          "pergunta": "Você tem fraqueza, paralisia, tremores ou perda sensorial que os médicos dizem não ter causa neurológica identificável?",
          "exemplos_clinicos": [
            "Fraqueza funcional de membros",
            "Crises não epilépticas",
            "Cegueira funcional"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "B1",
          "rotulo": "Incompatibilidade com doença neurológica conhecida",
          "desc": "Achados clínicos fornecem evidências de incompatibilidade entre o sintoma e condições neurológicas ou médicas reconhecidas.",
          "pergunta": "O médico confirmou que seus sintomas não são explicados por doença neurológica ou médica conhecida?",
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
      "id": "exclusao_facticio",
      "letra": "C",
      "rotulo": "Não melhor explicado por transtorno factício ou simulação",
      "tipo": "exclusao_diagnostica",
      "ui_widget": "toggle_simples",
      "obrigatorio": true,
      "icone": "Check",
      "ddx_sugeridos": [
        "transtorno_facticio"
      ],
      "descricao_completa": "Não melhor explicado por outro transtorno médico, transtorno factício ou simulação.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "sofrimento_funcional",
      "letra": "D",
      "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
      "tipo": "prejuizo_funcional",
      "ui_widget": "toggle_com_justificativa_obrigatoria",
      "obrigatorio": true,
      "icone": "Frown",
      "ddx_sugeridos": [],
      "descricao_completa": "Causa sofrimento clinicamente significativo ou prejuízo.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
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
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  "especificadores": [
    {
      "id": "episodio_agudo",
      "nome": "Episódio agudo",
      "tipo": "booleano",
      "ortogonal": false,
      "opcoes": [],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": "Sintomas <6 meses.",
        "fonte_passada_1": true
      }
    },
    {
      "id": "persistente",
      "nome": "Persistente",
      "tipo": "booleano",
      "ortogonal": false,
      "opcoes": [],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": "Sintomas ≥6 meses.",
        "fonte_passada_1": true
      }
    },
    {
      "id": "estressor_psicologico",
      "nome": "Com estressor psicológico",
      "tipo": "booleano",
      "ortogonal": true,
      "opcoes": [],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "sem_estressor",
      "nome": "Sem estressor psicológico",
      "tipo": "booleano",
      "ortogonal": true,
      "opcoes": [],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
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
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
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
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Mediana ~30 anos; pode ocorrer em qualquer faixa etária",
    "trajetoria": "50% remitem espontaneamente em 2 semanas; crônico em alguns.",
    "prognostico": "Intervenção neuropsiquiátrica precoce é fator prognóstico positivo.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
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
  "id": "transtorno_conversao",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
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
  "versao_complementar_existe": false,
  "inventario_clinico": {
    "codigo_bruto": "- **Codigo DSM-5 / CID-10:** CID-9-MC 300.11 (independentemente do tipo de sintoma); CID-10-MC varia por tipo de sintoma (ver subtipos abaixo).",
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
