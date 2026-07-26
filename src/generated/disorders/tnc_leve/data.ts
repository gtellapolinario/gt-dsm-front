import { TncLeveSchema } from "./schema";

export const data = TncLeveSchema.parse({
  "$schema_version": "2.1.0",
  "meta": {
    "id": "tnc_leve",
    "nome_completo": "Transtorno Neurocognitivo Leve",
    "sigla": "TNC Leve",
    "codigo": {
      "dsm5": "331.83",
      "cid10": "G31.84",
      "cid11": "6D81"
    },
    "capitulo": "Transtornos Neurocognitivos",
    "capitulo_id": "17",
    "grupo": null,
    "faixa_etaria_alvo": "transversal",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Transtorno cognitivo sem outra especificação (DSM-IV, parcial)"
    ]
  },
  "estrutura_geral": "monothetic_puro",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Declínio Cognitivo Pequeno",
        "tipo": "monothetic_conjuntivo",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Preocupação com declínio na função cognitiva",
                "desc": "Preocupação do indivíduo, de um informante com conhecimento ou do clínico de que ocorreu declínio na função cognitiva.",
                "pergunta": "Há preocupação do paciente, de um informante ou do clínico sobre declínio em algum domínio cognitivo?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Precisa de mais esforço para tarefas cognitivas",
                    "Uso de estratégias compensatórias"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Prejuízo pequeno no desempenho cognitivo documentado",
                "desc": "Prejuízo pequeno no desempenho cognitivo, de preferência documentado por teste neuropsicológico padronizado ou, em sua falta, outra avaliação quantificada.",
                "pergunta": "O desempenho cognitivo está levemente abaixo do esperado, documentado por testes ou avaliação clínica quantificada?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Desempenho 1–2 desvios-padrão abaixo da norma"
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
        "id": "independencia_preservada",
        "letra": "B",
        "rotulo": "Independência preservada nas AVDs",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Frown",
        "descricao_completa": "Os déficits cognitivos não interferem na capacidade de ser independente nas atividades cotidianas (atividades instrumentais complexas da vida diária preservadas, mas pode haver necessidade de mais esforço, estratégias compensatórias ou acomodação).",
        "nota": null
    },
    {
        "id": "exclusao_delirium",
        "letra": "C",
        "rotulo": "Déficits não ocorrem exclusivamente no contexto de delirium",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Os déficits cognitivos não ocorrem exclusivamente no contexto de delirium.",
        "nota": null,
        "ddx_sugeridos": [
            "delirium"
        ]
    },
    {
        "id": "exclusao_outro_mental",
        "letra": "D",
        "rotulo": "Não mais bem explicado por outro transtorno mental",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Os déficits cognitivos não são mais bem explicados por outro transtorno mental (p. ex. , transtorno depressivo maior, esquizofrenia).",
        "nota": null,
        "ddx_sugeridos": [
            "transtorno_depressivo_maior",
            "esquizofrenia"
        ]
    }
],
  "subtipos": {
    "presente": true,
    "nome": "Subtipo etiológico",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "alzheimer",
        "codigo": null,
        "label": "Devido à doença de Alzheimer",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "frontotemporal",
        "codigo": null,
        "label": "Devido à degeneração lobar frontotemporal",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "corpos_lewy",
        "codigo": null,
        "label": "Com corpos de Lewy",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "vascular",
        "codigo": null,
        "label": "Vascular",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "lesao_traumatica",
        "codigo": null,
        "label": "Devido a lesão cerebral traumática",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "substancia",
        "codigo": null,
        "label": "Induzido por substância/medicamento",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "hiv",
        "codigo": null,
        "label": "Devido a infecção por HIV",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "prion",
        "codigo": null,
        "label": "Devido à doença do príon",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "parkinson",
        "codigo": null,
        "label": "Devido à doença de Parkinson",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "huntington",
        "codigo": null,
        "label": "Devido à doença de Huntington",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "outra_condicao",
        "codigo": null,
        "label": "Devido a outra condição médica",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "multiplas_etiologias",
        "codigo": null,
        "label": "Devido a múltiplas etiologias",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "nao_especificado",
        "codigo": null,
        "label": "Não especificado",
        "descricao": "",
        "sintomas_caracteristicos": []
      }
    ],
      },
  "especificadores": [
    {
        "id": "perturbacao_comportamental",
        "nome": "Perturbação comportamental",
        "tipo": "enum",
        "ortogonal": false,
        "regra_criterial": null,
        "opcoes": [
            "Sem perturbação comportamental",
            "Com perturbação comportamental"
        ]
    }
],
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "graduacao_nao_aplicavel_ao_tnc_leve",
    "lembrete_aplicador": "O diagnóstico já corresponde à forma leve; os níveis leve, moderado e grave aplicam-se ao transtorno neurocognitivo maior."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": null,
      },
  "dominios_impacto": [
    {
      "id": "avd",
      "label": "Atividades da Vida Diária",
      "icone": "House",
      "relevante_para": "transversal"
    },
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "trabalho",
      "label": "Desempenho Profissional",
      "icone": "Briefcase",
      "relevante_para": "adulto"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "TNC maior",
      "ponto_distincao": "TNC leve: independência preservada, prejuízo pequeno; TNC maior: prejuízo substancial, interferência na independência.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Cognição normal/envelhecimento",
      "ponto_distincao": "TNC leve: declínio documentado a partir de linha de base anterior; envelhecimento normal: sem declínio significativo.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno depressivo maior",
      "ponto_distincao": "Depressão pode causar queixas cognitivas; melhora com tratamento da depressão.",
      "pertence_a_classe": false
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Delirium",
      "frequencia": "moderada",
      "nota": "TNC leve aumenta vulnerabilidade a delirium."
    },
    {
      "condicao": "Transtorno depressivo maior",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [
    {
      "nome": "Montreal Cognitive Assessment",
      "sigla": "MoCA",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Avaliação neuropsicológica formal",
      "sigla": null,
      "uso": "neuropsicologico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    }
  ],
  "prevalencia": {
    "populacao_geral": "2–10% aos 65 anos; 5–25% aos 85 anos",
    "proporcao_sexo": null,
    "variacoes_culturais": null,
    "notas": "Estimativas variam conforme definição utilizada.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Varia por subtipo etiológico",
    "trajetoria": "Varia por etiologia; pode progredir para TNC maior ou estabilizar.",
    "prognostico": "Varia conforme etiologia subjacente.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [
          "A1. Preocupacao sobre declinio + A2. Prejuizo pequeno documentado (1-2 DP abaixo, percentil 3-16)",
          "B. Deficits NAO interferem na independencia em AVDs",
          "C. Nao ocorre exclusivamente durante delirium",
          "D. Nao melhor explicado por outro transtorno mental"
        ],
        "diagnostic_rule": "A1+A2 + B + C + D todos obrigatorios; limiar: 1-2 DP abaixo (percentil 3-16)",
        "clusters": [],
        "duration": "cronico",
        "age_onset": null,
        "functional_impairment": "independencia preservada (com esforco adicional ou estrategias compensatorias)",
        "exclusions": [
          "delirium",
          "depressao maior",
          "envelhecimento normal"
        ],
        "specifiers": [
          {
            "id": "sem_perturbacao",
            "nome_completo": "Sem perturbacao comportamental"
          },
          {
            "id": "com_perturbacao",
            "nome_completo": "Com perturbacao comportamental"
          }
        ],
        "operational_profiles": [],
        "critical_differentials": [
          "envelhecimento normal",
          "transtorno depressivo maior",
          "delirium"
        ],
        "key_questions": [
          "Dificuldade para lembrar coisas que antes lembrava?",
          "Necessidade de listas ou lembretes mais frequentes?",
          "Tarefas complexas exigem mais esforco?",
          "Evita situacoes que exigem processamento rapido?",
          "Independencia funcional preservada?"
        ],
        "alerts": [
          "Reavaliacao longitudinal recomendada; monitorar progressao para TNC Maior"
        ],
        "source_trace": {
          "markdown_section": "## FICHA 17.3: TRANSTORNO NEUROCOGNITIVO LEVE",
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
    "fonte_capitulo_md": "17_transtornos_neurocognitivos.md",
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
    "estrutura_efetiva": "- **Estrutura efetiva:** Declinio cognitivo modesto em 1+ dominios, sem interferir na independencia (pode exigir mais esforco/estrategias compensatorias). Prejuizo de 1-2 desvios-padrao.",
    "notas_clinicas": "- **Notas:** Mesmos subtipos etiologicos do TNC maior. Distincao com TNC maior e inerentemente arbitrarria. Prevalencia estimada 2-25% em maiores de 65 anos."
  },
  
});
export type DisorderData = typeof data;
