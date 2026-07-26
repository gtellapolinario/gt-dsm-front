import { TncAlzheimerSchema } from "./schema";

export const data = TncAlzheimerSchema.parse({
  "$schema_version": "2.2.0",
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
    "nome": "Nível neurocognitivo e certeza etiológica",
    "natureza": "nivel_e_certeza",
    "formal_dsm": true,
    "mutuamente_exclusivos": true,
    "subtipos": [
        {
            "id": "maior_provavel",
            "label": "TNC maior provável",
            "descricao": "Atende às condições de maior certeza etiológica para doença de Alzheimer.",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "cid11_mms": "6D80",
                "regra": "O código final depende do nível, da etiologia documentada e de especificações clínicas; confirmar no sistema de codificação adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "maior_possivel",
            "label": "TNC maior possível",
            "descricao": "A etiologia por doença de Alzheimer é sustentada, mas não atinge o nível de provável.",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "cid11_mms": "6D80",
                "regra": "O código final depende do nível, da etiologia documentada e de especificações clínicas; confirmar no sistema de codificação adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "leve_provavel",
            "label": "TNC leve provável",
            "descricao": "TNC leve com evidência genética causal ou critérios de maior certeza etiológica.",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "cid11_mms": "6D71",
                "regra": "O código final depende do nível, da etiologia documentada e de especificações clínicas; confirmar no sistema de codificação adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "leve_possivel",
            "label": "TNC leve possível",
            "descricao": "TNC leve compatível com doença de Alzheimer, sem evidência suficiente para provável.",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "cid11_mms": "6D71",
                "regra": "O código final depende do nível, da etiologia documentada e de especificações clínicas; confirmar no sistema de codificação adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        }
    ],
    "nota_aplicador": "Escolha uma combinação de nível e certeza; não trate “leve” como terceira categoria paralela a provável/possível."
},
  "especificadores": [],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": [
            "6D80",
            "6D71"
        ],
        "equivalencia": "contextual",
        "regra": "Usar 6D80 para demência por doença de Alzheimer e 6D71 para transtorno neurocognitivo leve; a certeza provável/possível não cria código CID-11 próprio.",
        "versao": "CID-11 MMS 2026-01"
    }
},
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
        "id": "autonomia_autocuidado",
        "label": "Autonomia e autocuidado",
        "icone": "House",
        "relevante_para": "transversal"
    },
    {
        "id": "social",
        "label": "Funcionamento social",
        "icone": "Users",
        "relevante_para": "transversal"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "transtorno_neurocognitivo_vascular",
        "condicao": "Transtorno Neurocognitivo vascular",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno Neurocognitivo vascular: relação temporal com AVC, infartos em neuroimagem; Alzheimer: início insidioso, declínio gradual da memória.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_neurocognitivo_com_corpos_de_lewy",
        "condicao": "Transtorno Neurocognitivo com corpos de Lewy",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Lewy: cognição oscilante, alucinações visuais, parkinsonismo; Alzheimer: memória precoce, sem oscilação.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_neurocognitivo_frontotemporal",
        "condicao": "Transtorno Neurocognitivo frontotemporal",
        "natureza": "transtorno_mental",
        "ponto_distincao": "FTD: mudanças comportamentais/linguísticas precoces, memória preservada inicialmente.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_depressivo_maior",
        "condicao": "Transtorno depressivo maior",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Depressão: pseudodemência, melhora com tratamento antidepressivo.",
        "pertence_a_mesma_classe_dsm": false
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
        "id": "moca",
        "nome": "Avaliação Cognitiva de Montreal",
        "sigla": "MoCA",
        "uso": "triagem",
        "faixa_etaria": "adulto",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "avaliacao_neuropsicologica",
        "nome": "Avaliação neuropsicológica padronizada",
        "sigla": null,
        "uso": "apoio_diagnostico",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Documenta domínios cognitivos e funcionamento; interpretar com escolaridade, cultura e condição sensorial."
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
