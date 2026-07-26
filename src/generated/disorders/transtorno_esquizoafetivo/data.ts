import { TranstornoEsquizoafetivoSchema } from "./schema";

export const data = TranstornoEsquizoafetivoSchema.parse({
  "$schema_version": "2.1.0",
  "meta": {
    "id": "transtorno_esquizoafetivo",
    "nome_completo": "Transtorno Esquizoafetivo",
    "sigla": null,
    "codigo": {
      "dsm5": "295.70",
      "cid10": "F25.9",
      "cid11": "6A21"
    },
    "capitulo": "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
    "capitulo_id": "02",
    "grupo": null,
    "faixa_etaria_alvo": "transversal",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "estrutura_geral": "conjuncao_temporal_complexa",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Sintomas da Fase Ativa (Critério A Esquizofrenia)",
        "tipo": "polythetic_com_ancora",
        "limiar": {
            "adulto": 2,
            "pediatria": 2
        },
        "ancora_obrigatoria": {
            "descricao": "Pelo menos um dos sintomas no cluster deve ser Delírios (A1), Alucinações (A2) ou Discurso Desorganizado (A3).",
            "ids_obrigatorios": [
                "A1",
                "A2",
                "A3"
            ],
            "n_minimo": 1
        },
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Delírios",
                "desc": "Crenças fixas e falsas não abaláveis.",
                "pergunta": "A pessoa vivenciou ideias ou crenças persistentes e irracionais?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Crenças de perseguição ou grandiosidade marcantes"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Alucinações",
                "desc": "Percepções reais sem estímulos físicos.",
                "pergunta": "A pessoa ouviu ou viu coisas que pareciam reais mas que os outros não percebiam?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Ouvir vozes nítidas na ausência de pessoas"
                ]
            },
            {
                "id": "A3",
                "rotulo": "Discurso desorganizado",
                "desc": "Pensamento e fala desorganizados.",
                "pergunta": "Ficou difícil para a pessoa organizar as palavras de modo coerente?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Incoerência ou descarrilamento frequente da fala"
                ]
            },
            {
                "id": "A4",
                "rotulo": "Comportamento grosseiramente desorganizado ou catatônico",
                "desc": "Comportamento motor tolo, agressivo ou catatônico.",
                "pergunta": "A pessoa apresentou movimentos involuntários, rigidez extrema ou agitação sem motivo?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Posturas rígidas e bizarras ou agitação incontrolável"
                ]
            },
            {
                "id": "A5",
                "rotulo": "Sintomas negativos",
                "desc": "Expressão emocional diminuída ou avolia.",
                "pergunta": "Sentiu falta de motivação, apatia ou diminuição das expressões faciais?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Alogia ou expressão facial inalterada e pobre de reatividade"
                ]
            }
        ],
        "descricao_qualitativa": "Um período ininterrupto de doença durante o qual há um episódio de humor maior concomitante com o Critério A da esquizofrenia.",
        "nota": null,
        "regra_temporal": null
    }
],
  "criterios_condicionais": [
    {
        "id": "delirios_sem_humor",
        "letra": "B",
        "rotulo": "Psicose sem humor ≥ 2 semanas",
        "tipo": "temporal_duracao_minima",
        "ui_widget": "campo_duracao_meses",
        "obrigatorio": true,
        "icone": "Clock",
        "descricao_completa": "Delírios ou alucinações na ausência de um episódio de humor maior (depressivo ou maníaco) por pelo menos duas semanas em algum momento durante a duração total da doença ao longo da vida.",
        "nota": null
    },
    {
        "id": "proporcao_humor",
        "letra": "C",
        "rotulo": "Humor presente na maior parte da doença",
        "tipo": "temporal_proporcao",
        "ui_widget": "toggle_simples",
        "obrigatorio": true,
        "icone": "Percent",
        "descricao_completa": "Os sintomas que satisfazem os critérios para um episódio de humor maior estão presentes na maior parte da duração total das fases ativa e residual do período de doença.",
        "nota": null
    },
    {
        "id": "exclusao_substancia_esquizoafetivo",
        "letra": "D",
        "rotulo": "Não atribuível a substância ou condição médica",
        "tipo": "exclusao_substancia_medica",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "A perturbação não é atribuível aos efeitos de uma substância (droga de abuso, medicamento) ou a outra condição médica.",
        "nota": null
    }
],
  "subtipos": {
    "presente": true,
    "nome": "Subtipo baseado no episódio de humor",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "tipo_bipolar",
        "codigo": {
          "dsm5": "295.70",
          "cid10": "F25.0",
          "cid11": null
        },
        "label": "Tipo Bipolar",
        "descricao": "Aplica-se se um episódio maníaco faz parte da apresentação. Episódios depressivos maiores também podem ocorrer.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "tipo_depressivo",
        "codigo": {
          "dsm5": "295.70",
          "cid10": "F25.1",
          "cid11": null
        },
        "label": "Tipo Depressivo",
        "descricao": "Aplica-se se apenas episódios depressivos maiores fazem parte da apresentação.",
        "sintomas_caracteristicos": []
      }
    ],
      },
  "especificadores": [
    {
        "id": "curso_apos_um_ano",
        "nome": "Especificador de Curso (após 1 ano de duração)",
        "tipo": "enum",
        "ortogonal": true,
        "regra_criterial": null,
        "opcoes": [
            "Primeiro episódio, atualmente em episódio agudo",
            "Primeiro episódio, atualmente em remissão parcial",
            "Primeiro episódio, atualmente em remissão completa",
            "Episódios múltiplos, atualmente em episódio agudo",
            "Episódios múltiplos, atualmente em remissão parcial",
            "Episódios múltiplos, atualmente em remissão completa",
            "Contínuo",
            "Não especificado"
        ]
    },
    {
        "id": "com_catatonia",
        "nome": "Com catatonia",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": "Exige o uso do código adicional 293.89 (F06.1)."
    }
],
  "gravidade": {
    "classificacao_dsm": "formal_dimensional",
    "escopo": "gravidade_atual_por_dominio",
    "tipo": "dimensoes_primarias_da_psicose",
    "uso": "opcional",
    "janela_avaliacao": "ultimos_7_dias",
    "lembrete_aplicador": "Avalie cada domínio separadamente de 0 a 4, considerando os últimos 7 dias.",
    "dominios": [
        {
            "id": "delirios",
            "label": "Delírios"
        },
        {
            "id": "alucinacoes",
            "label": "Alucinações"
        },
        {
            "id": "discurso_desorganizado",
            "label": "Discurso desorganizado"
        },
        {
            "id": "comportamento_psicomotor_anormal",
            "label": "Comportamento psicomotor anormal"
        },
        {
            "id": "sintomas_negativos",
            "label": "Sintomas negativos"
        }
    ],
    "escala": {
        "min": 0,
        "max": 4,
        "niveis": [
            {
                "valor": 0,
                "label": "Ausente"
            },
            {
                "valor": 1,
                "label": "Equívoco"
            },
            {
                "valor": 2,
                "label": "Leve"
            },
            {
                "valor": 3,
                "label": "Moderado"
            },
            {
                "valor": 4,
                "label": "Grave"
            }
        ]
    },
    "observacao": "O diagnóstico pode ser estabelecido sem o uso deste especificador."
},
  "hierarquia": {
    "presente": true,
    "exclui_se_diagnosticado": ["esquizofrenia", "transtorno_esquizofreniforme", "transtorno_psicotico_breve", "transtorno_delirante"],
    "exclui_diagnostico_de": ["esquizofrenia", "transtorno_esquizofreniforme", "transtorno_psicotico_breve", "transtorno_delirante"],
    "notas": "O transtorno esquizoafetivo é uma entidade complexa que engloba sintomas de humor de forma proeminente. Sua presença exclui esquizofrenia e variantes mais breves se os sintomas de humor dominarem.",
      },
  "dominios_impacto": [
    {
      "id": "social",
      "label": "Funcionamento Social e Interpessoal",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "trabalho",
      "label": "Desempenho Ocupacional",
      "icone": "Briefcase",
      "relevante_para": "transversal"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Esquizofrenia",
      "ponto_distincao": "Na esquizofrenia, os sintomas de humor não estão presentes na maior parte da duração total da doença ou a psicose sem humor dura menos de 2 semanas.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno Depressivo ou Bipolar com Características Psicóticas",
      "ponto_distincao": "Diferencia-se pela ausência de delírios ou alucinações na ausência de episódios de humor por pelo menos duas semanas.",
      "pertence_a_classe": false
    }
  ],
  "comorbidades_frequentes": [],
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "Aproximadamente 0,3% ao longo da vida.",
    "proporcao_sexo": "Mais comum em indivíduos do sexo feminino, impulsionado pelo tipo depressivo.",
    "variacoes_culturais": null,
    "notas": "O risco de suicídio ao longo da vida é de 5%, similar ao da esquizofrenia.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Início no jovem adulto",
    "trajetoria": "A proporção relativa de sintomas de humor e psicose pode mudar ao longo do tempo. O prognóstico é ligeiramente melhor que o da esquizofrenia, mas geralmente pior que o de transtornos de humor isolados.",
    "prognostico": "O prejuízo ocupacional e social é frequente, necessitando intervenção de longo prazo.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_com_ancora",
        "criteria": [],
        "diagnostic_rule": "- Critério A (sobreposição humor + psicose) **E** Critério B (psicose isolada ≥2 semanas) **E** Critério C (humor dominante ao longo do tempo) **E** Critério D",
        "clusters": [],
        "duration": null,
        "age_onset": null,
        "functional_impairment": null,
        "exclusions": [],
        "specifiers": [
          "Com catatonia (código adicional 293.89 F06.1)",
          "Especificadores de curso (mesmos da esquizofrenia; usar após 1 ano)",
          "Gravidade dimensional (opcional)"
        ],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [
          "Você já teve períodos de humor muito deprimido ou muito elevado que duraram semanas?",
          "Durante esses períodos, você também teve experiências estranhas (ouvir vozes, crenças incomuns)?",
          "Já houve momentos em que você ouvia vozes ou tinha crenças estranhas SEM estar deprimido ou eufórico?",
          "Ao longo de toda a doença, quanto tempo você passou com alterações de humor versus sem elas?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### TRANSTORNO ESQUIZOAFE TIVO",
          "patches_applied": [
            "gravidade.tem_gravidade_formal: adicionado USO_OPCIONAL=True"
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
        "has_hierarchy": true,
        "has_cid11": true,
            "match_notes": {
          "poor": "id",
          "master": "id",
          "inventario": "id",
          "hierarquia": "id",
          "cid11": "id",
          "super": "id"
        }
      }
  },
  "metadados_globais": {
    "fonte_capitulo_md": "02_espectro_esquizofrenia_outros_transtornos_psicoticos.md",
    "fonte_inventario_md": "inventario/02_inventario.md",
    "data_extracao": "2026-05-21",
    "modelo_agente": "antigravity-ide",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:** A (período ininterrupto de doença com episódio depressivo maior [com humor deprimido, não só anedonia] ou maníaco concomitante ao Critério A da esquizofrenia) + B (delírios ou alucinações por >=2 semanas sem episódio de humor durante a doença ao longo da vida) + C (sintomas de humor presentes na maior parte da duração total das fases ativa e residual) + D (exclusão: substância, condição médica)",
    "notas_clinicas": "- **Notas:**"
  },
  
});
export type DisorderData = typeof data;
