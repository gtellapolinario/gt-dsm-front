import { DeliriumSchema } from "./schema";

export const data = DeliriumSchema.parse({
  "$schema_version": "2.1.0",
  "meta": {
    "id": "delirium",
    "nome_completo": "Delirium",
    "sigla": null,
    "codigo": {
      "dsm5": "293.0",
      "cid10": "F05",
      "cid11": "6D70"
    },
    "capitulo": "Transtornos Neurocognitivos",
    "capitulo_id": "17",
    "grupo": null,
    "faixa_etaria_alvo": "transversal",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "estrutura_geral": "monothetic_puro",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Perturbação da Atenção e Consciência",
        "tipo": "monothetic_conjuntivo",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Capacidade reduzida de direcionar e manter a atenção",
                "desc": "Perturbação da atenção evidenciada por capacidade reduzida de direcionar, focalizar, manter e mudar a atenção.",
                "pergunta": "A pessoa apresenta dificuldade para manter a atenção, sendo facilmente distraída ou precisando que as perguntas sejam repetidas?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Perguntas precisam ser repetidas",
                    "Perseveração em respostas anteriores",
                    "Distração por estímulos irrelevantes"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Menor orientação para o ambiente (consciência)",
                "desc": "Perturbação da consciência manifestada por menor orientação ao ambiente ou, por vezes, até para si mesmo.",
                "pergunta": "A pessoa está desorientada em relação ao ambiente ou a si mesma?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Desorientação para tempo e lugar"
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
        "id": "curso_temporal",
        "letra": "B",
        "rotulo": "Surge em período breve e tende a oscilar",
        "tipo": "temporal_duracao_tipica",
        "ui_widget": "campo_duracao_meses",
        "obrigatorio": true,
        "icone": "CalendarClock",
        "descricao_completa": "A perturbação se desenvolve em um período breve de tempo (normalmente de horas a poucos dias), representa uma mudança da atenção e da consciência basais e tende a oscilar quanto à gravidade ao longo de um dia.",
        "nota": null
    },
    {
        "id": "perturbacao_adicional_cognicao",
        "letra": "C",
        "rotulo": "Perturbação adicional na cognição",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Brain",
        "descricao_completa": "Perturbação adicional na cognição (p. ex. , déficit de memória, desorientação, linguagem, capacidade visuoespacial ou percepção).",
        "nota": null
    },
    {
        "id": "exclusao_outro_tnc_coma",
        "letra": "D",
        "rotulo": "Não explicado por outro TNC preexistente nem ocorre em coma",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "As perturbações dos Critérios A e C não são mais bem explicadas por outro transtorno neurocognitivo preexistente, estabelecido ou em desenvolvimento e não ocorrem no contexto de um nível gravemente diminuído de estimulação, como no coma.",
        "nota": null,
        "ddx_sugeridos": [
            "tnc_maior",
            "tnc_leve"
        ]
    },
    {
        "id": "etiologia_fisiologica",
        "letra": "E",
        "rotulo": "Evidências de etiologia fisiológica",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Stethoscope",
        "descricao_completa": "Há evidências a partir da história, do exame físico ou de achados laboratoriais de que a perturbação é uma consequência fisiológica direta de outra condição médica, intoxicação ou abstinência de substância, de exposição a uma toxina ou de que ela se deva a múltiplas etiologias.",
        "nota": null
    }
],
  "subtipos": {
    "presente": true,
    "nome": "Subtipo etiológico",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "intoxicacao_substancia",
        "codigo": {
          "dsm5": "292.81",
          "cid10": "F19.921",
          "cid11": null
        },
        "label": "Delirium por intoxicação por substância",
        "descricao": "Predominam sintomas de delirium no quadro de intoxicação por substância.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "abstinencia_substancia",
        "codigo": {
          "dsm5": "291.0",
          "cid10": "F10.231",
          "cid11": null
        },
        "label": "Delirium por abstinência de substância",
        "descricao": "Predominam sintomas de delirium no quadro de abstinência de substância.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "induzido_medicamento",
        "codigo": {
          "dsm5": "292.81",
          "cid10": "F19.921",
          "cid11": null
        },
        "label": "Delirium induzido por medicamento",
        "descricao": "Sintomas aparecem como efeito colateral de medicamento tomado conforme prescrição.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "outra_condicao_medica",
        "codigo": {
          "dsm5": "293.0",
          "cid10": "F05",
          "cid11": null
        },
        "label": "Delirium devido a outra condição médica",
        "descricao": "Perturbação atribuível às consequências fisiológicas de outra condição médica.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "multiplas_etiologias",
        "codigo": {
          "dsm5": "293.0",
          "cid10": "F05",
          "cid11": null
        },
        "label": "Delirium devido a múltiplas etiologias",
        "descricao": "Delirium com mais de uma etiologia identificada.",
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
        "regra_criterial": null,
        "opcoes": [
            "Agudo",
            "Persistente"
        ]
    },
    {
        "id": "nivel_atividade",
        "nome": "Nível de atividade psicomotora",
        "tipo": "enum",
        "ortogonal": false,
        "regra_criterial": null,
        "opcoes": [
            "Hiperativo",
            "Hipoativo",
            "Misto"
        ]
    }
],
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para delirium."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": null,
      },
  "dominios_impacto": [
    {
      "id": "saude",
      "label": "Cuidados de Saúde",
      "icone": "Hospital",
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
      "condicao": "Transtornos psicóticos",
      "ponto_distincao": "Delirium: curso agudo, perturbação da atenção/consciência, evidência de etiologia médica; psicoses: sem perturbação da consciência.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno de estresse agudo",
      "ponto_distincao": "Delirium: etiologia fisiológica identificável; TEA: precipitado por evento traumático.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtornos neurocognitivos maiores/leves",
      "ponto_distincao": "Delirium: curso agudo e flutuante; TNC: curso mais gradual, sem perturbação da consciência.",
      "pertence_a_classe": true
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno neurocognitivo maior ou leve",
      "frequencia": "alta",
      "nota": "Delirium comumente ocorre sobre TNC preexistente."
    }
  ],
  "instrumentos_complementares": [
    {
      "nome": "Escala de Confusão do Camargo",
      "sigla": "ECC",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Mini-Mental State Examination",
      "sigla": "MMSE",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ],
  "prevalencia": {
    "populacao_geral": "1–2% na comunidade; 14–24% em admissões hospitalares; 70–87% em UTI",
    "proporcao_sexo": null,
    "variacoes_culturais": null,
    "notas": "Prevalência muito alta em idosos hospitalizados e pós-operatórios.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Qualquer idade; mais comum em idosos",
    "trajetoria": "Recuperação completa com tratamento da causa subjacente; pode progredir para coma ou morte se não tratado.",
    "prognostico": "Mortalidade alta em hospitalizados; até 40% morrem dentro de um ano.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "etiologico_externo",
        "criteria": [
          "A. Perturbacao da atencao E da consciencia",
          "B. Desenvolvimento em periodo breve (horas a poucos dias), com oscilacao",
          "C. Perturbacao adicional na cognicao (memoria, desorientacao, linguagem, visuoespacial)",
          "D. Nao melhor explicada por outro TNC preexistente; nao ocorre em coma",
          "E. Evidencias de consequencia fisiologica direta (condicao medica, intoxicacao, abstinencia, toxina, multiplas etiologias)"
        ],
        "diagnostic_rule": "Todos A, B, C, D, E obrigatorios",
        "clusters": [],
        "duration": "horas a dias (agudo) ou semanas/meses (persistente)",
        "age_onset": null,
        "functional_impairment": "oscilacao do nivel de consciencia, deficit cognitivo, prejuizo funcional significativo",
        "exclusions": [
          "TNC preexistente",
          "coma"
        ],
        "specifiers": [
          {
            "id": "agudo",
            "nome_completo": "Agudo"
          },
          {
            "id": "persistente",
            "nome_completo": "Persistente"
          },
          {
            "id": "hiperativo",
            "nome_completo": "Hiperativo"
          },
          {
            "id": "hipoativo",
            "nome_completo": "Hipoativo"
          },
          {
            "id": "misto",
            "nome_completo": "Nivel misto de atividade"
          }
        ],
        "operational_profiles": [],
        "critical_differentials": [
          "TNC Maior (demencia)",
          "transtornos psicoticos",
          "transtorno de estresse agudo"
        ],
        "key_questions": [
          "Mudanca aguda no estado mental nas ultimas horas ou dias?",
          "Ha oscilacao do nivel de consciencia ao longo do dia?",
          "Consegue manter a atencao em uma conversa?",
          "Ha desorientacao para tempo, lugar ou pessoa?",
          "Ha evidencias de alucinacoes ou ilusoes (especialmente visuais)?",
          "Historia de infeccao, novo medicamento, abstinencia, toxina?"
        ],
        "alerts": [
          "NAO diagnosticar delirium no contexto de coma",
          "Avaliacao diaria recomendada; usar CAM ou 4AT",
          "Requer investigacao etiologica sistematica"
        ],
        "source_trace": {
          "markdown_section": "## FICHA 17.1: DELIRIUM",
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
    "estrutura_efetiva": "- **Estrutura efetiva:** Sintomas de delirium sem satisfazer criterios completos, quando o clinico opta por nao especificar a razao ou ha informacoes insuficientes.",
    "notas_clinicas": "- **Notas:** Usado em contextos como salas de emergencia."
  },
  
});
export type DisorderData = typeof data;
