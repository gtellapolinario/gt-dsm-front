import { TncMaiorSchema } from "./schema";

export const data = TncMaiorSchema.parse({
  "$schema_version": "2.1.0",
  "meta": {
    "id": "tnc_maior",
    "nome_completo": "Transtorno Neurocognitivo Maior",
    "sigla": "TNC Maior",
    "codigo": {
      "dsm5": "294.1x",
      "cid10": "F02.8x",
      "cid11": "6D80"
    },
    "capitulo": "Transtornos Neurocognitivos",
    "capitulo_id": "17",
    "grupo": null,
    "faixa_etaria_alvo": "transversal",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Demência"
    ]
  },
  "estrutura_geral": "monothetic_puro",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Declínio Cognitivo Importante",
        "tipo": "monothetic_conjuntivo",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Preocupação com declínio significativo na função cognitiva",
                "desc": "Preocupação do indivíduo, de um informante com conhecimento ou do clínico de que há declínio significativo na função cognitiva.",
                "pergunta": "Há preocupação do paciente, de um informante ou do clínico sobre declínio significativo em algum domínio cognitivo?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Dificuldade de recordar eventos recentes",
                    "Confusão em ambientes familiares"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Prejuízo substancial no desempenho cognitivo documentado",
                "desc": "Prejuízo substancial no desempenho cognitivo, de preferência documentado por teste neuropsicológico padronizado ou, em sua falta, por outra investigação clínica quantificada.",
                "pergunta": "O desempenho cognitivo está substancialmente abaixo do esperado, documentado por testes ou avaliação clínica quantificada?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Desempenho 2+ desvios-padrão abaixo da norma",
                    "Declínio documentado em testes em série"
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
        "id": "prejuizo_independencia",
        "letra": "B",
        "rotulo": "Déficits interferem na independência em AVDs",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Accessibility",
        "descricao_completa": "Os déficits cognitivos interferem na independência em atividades da vida diária (no mínimo, necessita de assistência em atividades instrumentais complexas da vida diária, tais como pagamento de contas ou controle medicamentoso).",
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
    },
    {
        "id": "gravidade_atual",
        "nome": "Gravidade atual",
        "tipo": "enum",
        "ortogonal": false,
        "regra_criterial": null,
        "opcoes": [
            "Leve",
            "Moderada",
            "Grave"
        ]
    }
],
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "tnc_maior",
    "tipo": "dependencia_funcional",
    "lembrete_aplicador": "Classifique pela perda de independência nas atividades da vida diária.",
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
    "regra_atribuicao": "Use o nível de dependência funcional atual."
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
      "condicao": "TNC leve",
      "ponto_distincao": "TNC maior: prejuízo interfere na independência em AVDs; TNC leve: independência preservada.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Delirium",
      "ponto_distincao": "Delirium: curso agudo, perturbação da atenção/consciência; TNC maior: curso gradual, sem perturbação da consciência.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno depressivo maior",
      "ponto_distincao": "Depressão pode causar pseudodemência; melhora com tratamento da depressão favorece este diagnóstico.",
      "pertence_a_classe": false
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Delirium",
      "frequencia": "alta",
      "nota": "TNC aumenta risco de delirium."
    },
    {
      "condicao": "Transtorno depressivo maior",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [
    {
      "nome": "Mini-Mental State Examination",
      "sigla": "MMSE",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
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
    "populacao_geral": "1–2% aos 65 anos; até 30% aos 85 anos",
    "proporcao_sexo": null,
    "variacoes_culturais": null,
    "notas": "Prevalência varia conforme idade e subtipo etiológico.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Geralmente idade avançada; varia por subtipo",
    "trajetoria": "Varia por etiologia: degenerativa = progressão gradual; vascular = início agudo ou gradual.",
    "prognostico": "Varia conforme etiologia subjacente e comorbidades.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [
          "A1. Preocupacao sobre declinio significativo + A2. Prejuizo substancial documentado (2+ DP abaixo, <percentil 3)",
          "B. Deficits interferem na independencia em AVDs (AIVDs complexas comprometidas)",
          "C. Nao ocorre exclusivamente durante delirium",
          "D. Nao melhor explicado por outro transtorno mental"
        ],
        "diagnostic_rule": "A1+A2 + B + C + D todos obrigatorios; limiar neuropsicologico: <percentil 3 ou 2+ DP abaixo",
        "clusters": [
          "Atencao complexa",
          "Funcao executiva",
          "Aprendizagem e memoria",
          "Linguagem",
          "Perceptomotor",
          "Cognicao social"
        ],
        "duration": "cronico, progressivo",
        "age_onset": null,
        "functional_impairment": "dependencia parcial a total em AIVDs complexas (financas, medicamentos) e/ou ABVDs",
        "exclusions": [
          "delirium",
          "depressao maior",
          "esquizofrenia"
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
          "TNC Leve",
          "delirium",
          "transtorno depressivo maior (pseudodemencia)",
          "transtorno do neurodesenvolvimento"
        ],
        "key_questions": [
          "Paciente ou familiares notaram piora na memoria?",
          "Dificuldade para lembrar eventos recentes, nomes, compromissos?",
          "Precisa de mais tempo para tarefas que fazia com facilidade?",
          "Dificuldade para encontrar palavras, se expressar?",
          "Mudancas no julgamento, planejamento ou decisoes?",
          "Consegue gerenciar financas, pagar contas, controlar medicamentos sozinho?",
          "Precisa de ajuda para se alimentar, vestir ou higienizar?",
          "Declinio foi gradual ou abrupto? Historia de AVC ou trauma?"
        ],
        "alerts": [
          "Doenca com Corpos de Lewy: sensibilidade neuroleptica FATAL - evitar neurolépticos",
          "Avaliacao funcional e obrigatoria para distinguir Maior de Leve"
        ],
        "source_trace": {
          "markdown_section": "## FICHA 17.2: TRANSTORNO NEUROCOGNITIVO MAIOR",
          "patches_applied": [
            "HIGH: gravidade.tipo→funcionome_completonto_adaptativo"
          ]
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
    "estrutura_efetiva": "- **Estrutura efetiva:** TNC decorrente de mais de um processo etiologico (excluindo substancias). Ex.: doenca de Alzheimer + doenca vascular; Parkinson + corpos de Lewy.",
    "notas_clinicas": "- **Notas:** Todas as condicoes medicas etiologicas devem ser codificadas separadamente. Comum em idosos pela coexistencia de patologias neurodegenerativas e cerebrovasculares."
  },
  
});
export type DisorderData = typeof data;
