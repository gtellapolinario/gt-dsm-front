import { TncAlzheimerSchema } from "./schema";

export const data = TncAlzheimerSchema.parse({
  "$schema_version": "2.1.0",
  "meta": {
    "id": "tnc_alzheimer",
    "nome_completo": "Transtorno Neurocognitivo Maior ou Leve Devido à Doença de Alzheimer",
    "sigla": null,
    "codigo": {
      "dsm5": "294.1x",
      "cid10": "F02.8x",
      "cid11": "6D80.0"
    },
    "capitulo": "Transtornos Neurocognitivos",
    "capitulo_id": "17",
    "grupo": null,
    "faixa_etaria_alvo": "transversal",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Demência de Alzheimer"
    ]
  },
  "estrutura_geral": "monothetic_puro",
  "clusters_sintomas": [],
  "criterios_condicionais": [
    {
        "id": "criterios_tnc",
        "letra": "A",
        "rotulo": "São atendidos os critérios para TNC maior ou leve",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "ClipboardCheck",
        "descricao_completa": "São atendidos os critérios para transtorno neurocognitivo maior ou leve.",
        "nota": null
    },
    {
        "id": "inicio_progressao",
        "letra": "B",
        "rotulo": "Surgimento insidioso e progressão gradual",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "ChartLine",
        "descricao_completa": "Há surgimento insidioso e progressão gradual de prejuízo em um ou mais domínios cognitivos (no caso de TNC maior, pelo menos dois domínios devem estar prejudicados).",
        "nota": null
    },
    {
        "id": "certeza_diagnostica",
        "letra": "C",
        "rotulo": "Critérios para doença de Alzheimer provável ou possível",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Brain",
        "descricao_completa": "Os critérios são atendidos para doença de Alzheimer provável ou possível: provável = evidência de mutação genética causadora OU declínio clássico progressivo sem etiologia mista; possível = ausência de evidência de mutação genética com declínio progressivo na memória/aprendizagem sem etiologia mista (TNC leve).",
        "nota": null
    },
    {
        "id": "exclusao_outras_etiologias",
        "letra": "D",
        "rotulo": "Não mais bem explicado por outra doença ou transtorno",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "A perturbação não é mais bem explicada por doença cerebrovascular, outra doença neurodegenerativa, efeitos de uma substância ou outro transtorno mental, neurológico ou sistêmico.",
        "nota": null,
        "ddx_sugeridos": [
            "tnc_vascular",
            "tnc_corpos_lewy",
            "tnc_frontotemporal"
        ]
    }
],
  "subtipos": {
    "presente": true,
    "nome": "Certeza diagnóstica e gravidade",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "provavel_maior",
        "codigo": {
          "dsm5": "294.1x",
          "cid10": "F02.8x",
          "cid11": null
        },
        "label": "Provável TNC maior",
        "descricao": "Com evidência de mutação genética ou quadro clássico progressivo.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "possivel_maior",
        "codigo": {
          "dsm5": "331.9",
          "cid10": "G31.9",
          "cid11": null
        },
        "label": "Possível TNC maior",
        "descricao": "Sem evidência de mutação genética ou com atípico.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "leve",
        "codigo": {
          "dsm5": "331.83",
          "cid10": "G31.84",
          "cid11": null
        },
        "label": "TNC leve",
        "descricao": "Prejuízo cognitivo leve com critérios de Alzheimer.",
        "sintomas_caracteristicos": []
      }
    ],
      },
  "especificadores": [],
  "gravidade": {
    "classificacao_dsm": "formal_condicional",
    "escopo": "apenas_tnc_maior",
    "tipo": "dependencia_funcional",
    "condicao_aplicabilidade": "Aplicar os níveis somente quando a apresentação for transtorno neurocognitivo maior.",
    "lembrete_aplicador": "No TNC maior, classifique pela perda de independência nas atividades da vida diária.",
    "niveis": [
        {
            "id": "leve",
            "label": "Leve",
            "descritor": "Dificuldade em atividades instrumentais da vida diária."
        },
        {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "Dificuldade em atividades básicas da vida diária."
        },
        {
            "id": "grave",
            "label": "Grave",
            "descritor": "Dependência completa para os cuidados cotidianos."
        }
    ],
    "regra_atribuicao": "Não aplicar esta graduação ao transtorno neurocognitivo leve."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": null,
      },
  "dominios_impacto": [
    {
      "id": "memoria",
      "label": "Memória e Aprendizagem",
      "icone": "Brain",
      "relevante_para": "transversal"
    },
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
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "TNC vascular",
      "ponto_distincao": "TNC vascular: relação temporal com AVC, infartos em neuroimagem; Alzheimer: início insidioso, declínio gradual da memória.",
      "pertence_a_classe": true
    },
    {
      "condicao": "TNC com corpos de Lewy",
      "ponto_distincao": "Lewy: cognição oscilante, alucinações visuais, parkinsonismo; Alzheimer: memória precoce, sem oscilação.",
      "pertence_a_classe": true
    },
    {
      "condicao": "TNC frontotemporal",
      "ponto_distincao": "FTD: mudanças comportamentais/linguísticas precoces, memória preservada inicialmente.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno depressivo maior",
      "ponto_distincao": "Depressão: pseudodemência, melhora com tratamento antidepressivo.",
      "pertence_a_classe": false
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "TNC vascular",
      "frequencia": "alta",
      "nota": "Patologia mista comum em idosos."
    },
    {
      "condicao": "Transtorno depressivo maior",
      "frequencia": "moderada",
      "nota": "Comum nos estágios iniciais."
    }
  ],
  "instrumentos_complementares": [
    {
      "nome": "Avaliação neuropsicológica formal",
      "sigla": null,
      "uso": "neuropsicologico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    }
  ],
  "prevalencia": {
    "populacao_geral": "Cerca de 60–90% das demências em idosos",
    "proporcao_sexo": "Mais frequente em mulheres (devido à maior longevidade)",
    "variacoes_culturais": null,
    "notas": "7% entre 65–74a; 53% entre 75–84a; 40% ≥85a.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Oitava/nona década; formas precoces na quinta/sexta década",
    "trajetoria": "Progressão gradual por cerca de 10 anos em média; platôs curtos possíveis.",
    "prognostico": "Morte geralmente por pneumonia por aspiração no estágio terminal.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "etiologico_interno",
        "criteria": [
          "A. Atendidos os critérios para Transtorno Neurocognitivo Maior ou Leve",
          "B. Início insidioso e progressão gradual de prejuízo em pelo menos um (para TNC leve) ou dois (para TNC maior) domínios cognitivos",
          "C. Critérios atendidos para doença de Alzheimer provável ou possível (evidência de mutação genética causadora ou declínio progressivo sistemático na memória/aprendizagem sem etiologia mista)",
          "D. Perturbação não é mais bem explicada por doença cerebrovascular, outra doença neurodegenerativa, efeitos de substância ou outro transtorno mental ou neurológico"
        ],
        "diagnostic_rule": "Critérios de TNC (Maior ou Leve) + Início insidioso e progressão gradual + Critérios de certeza (provável ou possível) + Exclusão de outras etiologias",
        "clusters": [
          "Aprendizagem e memória",
          "Atenção complexa",
          "Função executiva",
          "Linguagem",
          "Perceptomotor",
          "Cognição social"
        ],
        "duration": "crônico, progressivo",
        "age_onset": "geralmente a partir dos 65 anos (início tardio); formas precoces podem surgir na quinta ou sexta década de vida",
        "functional_impairment": "declínio insidioso que compromete a independência nas atividades instrumentais (TNC Maior) ou exige estratégias compensatórias significativas para mantê-la (TNC Leve)",
        "exclusions": [
          "doença cerebrovascular",
          "outras doenças neurodegenerativas",
          "efeitos de substâncias/medicamentos",
          "transtornos mentais sistêmicos"
        ],
        "specifiers": [
          {
            "id": "sem_perturbacao",
            "nome_completo": "Sem perturbação comportamental"
          },
          {
            "id": "com_perturbacao",
            "nome_completo": "Com perturbação comportamental"
          }
        ],
        "operational_profiles": [],
        "critical_differentials": [
          "TNC Vascular",
          "TNC com corpos de Lewy",
          "TNC Frontotemporal",
          "Transtorno depressivo maior (pseudodemência)"
        ],
        "key_questions": [
          "O início das falhas de memória e raciocínio foi muito gradual e lento, quase imperceptível no começo?",
          "O principal prejuízo inicial observado foi na fixação de informações recentes e no aprendizado de coisas novas?",
          "Há histórico familiar de demência de Alzheimer confirmada ou teste genético conhecido na família?",
          "Foram descartados episódios de AVC ou outras alterações neurológicas focais próximas ao início dos sintomas?"
        ],
        "alerts": [
          "Déficits de memória episódica recente são habitualmente o marcador inicial mais proeminente.",
          "Sintomas neuropsiquiátricos como apatia, irritabilidade e depressão são comuns já nas fases iniciais (TNC Leve)."
        ],
        "source_trace": {
          "markdown_section": "## FICHA 17.6: TRANSTORNO NEUROCOGNITIVO DEVIDO À DOENÇA DE ALZHEIMER",
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
    "estrutura_efetiva": "- **Estrutura efetiva:** Inicio insidioso, progressao gradual. Apresentacao tipica amnestica (memoria/aprendizagem). TNC maior exige 2+ dominios. Diagnostico de provavel exige mutacao genetica ou quadro clinico tipico sem etiologia mista.",
    "notas_clinicas": "- **Notas:** Causa mais comum de TNC (60-90% das demencias). Prevalencia 5-10% aos 65+ anos, >25% acima de 85. Fator de risco: idade, ApoE4, trissomia 21. Biomarcadores: PET amiloide, tau/LCS, RM hipocampo."
  },
  
});
export type DisorderData = typeof data;
