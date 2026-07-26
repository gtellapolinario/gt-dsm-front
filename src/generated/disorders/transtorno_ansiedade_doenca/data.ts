import { TranstornoAnsiedadeDoencaSchema } from "./schema";

export const data = TranstornoAnsiedadeDoencaSchema.parse({
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_ansiedade_doenca",
    "nome_completo": "Transtorno de Ansiedade de Doença",
    "sigla": "TAD",
    "codigo": {
      "dsm5": "300.7",
      "cid10": "F45.21",
      "cid11": "6B24"
    },
    "capitulo": "Transtorno de Sintomas Somáticos e Transtornos Relacionados",
    "capitulo_id": "09",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Hipocondria"
    ]
  },
  "estrutura_geral": "monothetic_puro",
  "clusters_sintomas": [
    {
      "id": "A_B",
      "nome": "Preocupação com Ter Doença Grave",
      "tipo": "monothetic_obrigatorio",
      "limiar": null,
      "ancora_obrigatoria": null,
      "sintomas": [
        {
          "id": "A1",
          "rotulo": "Preocupação em ter ou contrair doença grave",
          "desc": "Preocupação em ter ou contrair doença grave e séria.",
          "pergunta": "Você está constantemente preocupado em ter ou desenvolver uma doença grave (câncer, cardiopatia)?",
          "exemplos_clinicos": [
            "Convicção de ter câncer apesar de exames normais"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "B1",
          "rotulo": "Sintomas somáticos ausentes ou leves",
          "desc": "Sintomas somáticos ausentes ou, se presentes, de intensidade leve. Preocupação com doença, não com sintomas em si.",
          "pergunta": "Você se preocupa com doença mesmo sem sintomas físicos ou quando os sintomas são muito leves?",
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
      "id": "alto_nivel_ansiedade",
      "letra": "C",
      "rotulo": "Alto nível de ansiedade sobre saúde",
      "tipo": "qualitativo_descritivo",
      "ui_widget": "toggle_com_justificativa_obrigatoria",
      "obrigatorio": true,
      "icone": "Check",
      "ddx_sugeridos": [],
      "descricao_completa": "Há alto nível de ansiedade sobre saúde; o indivíduo se alarma facilmente com questões de saúde.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "comportamentos_excessivos",
      "letra": "D",
      "rotulo": "Comportamentos excessivos ou evitação relacionados à saúde",
      "tipo": "qualitativo_descritivo",
      "ui_widget": "toggle_simples",
      "obrigatorio": true,
      "icone": "Check",
      "ddx_sugeridos": [],
      "descricao_completa": "Verifica excessivamente o próprio estado de saúde OU exibe evitação mal adaptativa de consultas médicas.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "duracao_6meses",
      "letra": "E",
      "rotulo": "Duração ≥6 meses (doença específica pode mudar)",
      "tipo": "temporal_duracao_minima",
      "ui_widget": "campo_duracao_meses",
      "obrigatorio": true,
      "icone": "Check",
      "ddx_sugeridos": [],
      "descricao_completa": "A preocupação com a doença dura pelo menos 6 meses, mas a doença temida específica pode mudar.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_outros",
      "letra": "F",
      "rotulo": "Não melhor explicado por outro transtorno mental",
      "tipo": "exclusao_diagnostica",
      "ui_widget": "select_multiplos_ddx",
      "obrigatorio": true,
      "icone": "Check",
      "ddx_sugeridos": [
        "tss",
        "tag",
        "toc"
      ],
      "descricao_completa": "Não mais bem explicado por TSS, TAG, TP, TAG, TDM, TOC ou transtorno delirante.",
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
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [
    {
      "id": "tipo_busca_cuidado",
      "label": "Tipo busca de cuidado"
    },
    {
      "id": "tipo_evitacao_cuidado",
      "label": "Tipo evitação de cuidado"
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
      "id": "tipo_busca_cuidado",
      "nome": "Tipo com busca de cuidado",
      "tipo": "booleano",
      "ortogonal": false,
      "opcoes": [],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "tipo_evitacao",
      "nome": "Tipo com evitação de cuidado",
      "tipo": "booleano",
      "ortogonal": false,
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
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno de ansiedade de doença."
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
      "id": "saude",
      "label": "Uso de Serviços de Saúde",
      "icone": "Hospital",
      "relevante_para": "transversal"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "TSS",
      "ponto_distincao": "TSS: foco nos sintomas físicos; TAD: foco na doença subjacente presumida.",
      "pertence_a_classe": true
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "TAG",
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
    "populacao_geral": "1,3–10% (estimativa em serviços de atenção primária)",
    "proporcao_sexo": "Igual entre sexos",
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
    "idade_inicio_tipica": "Início adulto jovem",
    "trajetoria": "Crônico sem tratamento; bom prognóstico com TCC.",
    "prognostico": "TCC focada em ansiedade de saúde é tratamento de primeira linha.",
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
    "lacunas_globais": [
      "variacao_cultural"
    ],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "id": "transtorno_ansiedade_doenca",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "rendering": {
    "estrutura_diagnostica": "monothetic_tripartite",
    "criteria": [
      "A. Preocupacao com ter ou contrair uma doenca grave",
      "B. Sintomas somaticos NAO presentes ou de intensidade apenas leve; ou preocupacao excessiva se condicao medica presente",
      "C. Alto nivel de ansiedade com relacao a saude; facilmente alarmado",
      "D. Comportamentos excessivos relacionados a saude OU evitacao mal-adaptativa",
      "E. Preocupacao relacionada a doenca presente ha pelo menos 6 meses",
      "F. NAO melhor explicada por TSS, transtorno_panico, TAG, DBC, TOC ou transtorno delirante tipo somatico"
    ],
    "diagnostic_rule": "A + B + C + D + E(≥6 meses) + F(exclusoes)",
    "clusters": [],
    "duration": "≥6 meses",
    "age_onset": null,
    "functional_impairment": "Comprometimento funcional substancial; perdas no funcionome_completonto fisico e qualidade de vida",
    "exclusions": [
      "TSS",
      "Panico",
      "TAG",
      "DBC",
      "TOC",
      "Transtorno delirante tipo somatico"
    ],
    "specifiers": [],
    "operational_profiles": [],
    "critical_differentials": [
      "TSS",
      "TAG",
      "Panico",
      "TOC",
      "TDM",
      "Transtornos psicoticos",
      "Condicao medica",
      "Transtorno de adaptacao"
    ],
    "key_questions": [
      "Voce teme ter ou contrair alguma doenca grave?",
      "Ha quanto tempo essa preocupacao dura?",
      "Voce sente sintomas fisicos significativos?",
      "Verifica o corpo repetidamente?",
      "Evita consultas medicas ou busca excessivamente?"
    ],
    "alerts": [],
    "source_trace": {
      "markdown_section": "2. TRANSTORNO DE ANSIEDADE DE DOENCA - FICHA FULL",
      "patches_applied": []
    },
    "category": "FULL",
    "ui_mode": "structured_full",
    "render_structured_interview": true
  },
  "sigla": "TAD",
  "versao_complementar_existe": false,
  "inventario_clinico": {
    "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 300.7 (F45.21)",
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
