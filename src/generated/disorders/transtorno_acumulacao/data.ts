import { TranstornoAcumulacaoSchema } from "./schema";

export const data = TranstornoAcumulacaoSchema.parse({
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_acumulacao",
    "nome_completo": "Transtorno de Acumulação",
    "sigla": null,
    "codigo": {
      "dsm5": "300.3",
      "cid10": "F42",
      "cid11": "6B23"
    },
    "capitulo": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
    "capitulo_id": "06",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Hoarding disorder"
    ]
  },
  "estrutura_geral": "monothetic_puro",
  "clusters_sintomas": [
    {
      "id": "A_C",
      "nome": "Dificuldade Persistente de Descartar Pertences com Acumulação",
      "tipo": "monothetic_obrigatorio",
      "limiar": null,
      "ancora_obrigatoria": null,
      "sintomas": [
        {
          "id": "A1",
          "rotulo": "Dificuldade persistente de descartar pertences",
          "desc": "Dificuldade persistente de descartar ou se desfazer de pertences, independentemente de seu valor real.",
          "pergunta": "Você tem muita dificuldade de se desfazer de objetos, mesmo quando não têm valor?",
          "exemplos_clinicos": [
            "Pilhas de jornais antigos",
            "Dezenas de embalagens guardadas"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "B1",
          "rotulo": "Necessidade percebida de guardar e sofrimento ao descartar",
          "desc": "A dificuldade se deve a uma necessidade percebida de guardar os itens e ao sofrimento associado a descartá-los.",
          "pergunta": "Você sente que precisa guardar as coisas e fica angustiado quando tenta se desfazer delas?",
          "exemplos_clinicos": [
            "'Posso precisar disso algum dia'"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "C1",
          "rotulo": "Acúmulo congestionando áreas de estar",
          "desc": "A dificuldade resulta em acumulação de itens que congestionam áreas de uso e comprometem seu uso pretendido.",
          "pergunta": "Os objetos acumulados impedem o uso normal de cômodos da casa (cozinha, banheiro, quarto)?",
          "exemplos_clinicos": [
            "Cozinha inutilizável por acúmulo de itens"
          ],
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
      "letra": "D",
      "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
      "tipo": "prejuizo_funcional",
      "ui_widget": "toggle_com_justificativa_obrigatoria",
      "obrigatorio": true,
      "icone": "Frown",
      "ddx_sugeridos": [],
      "descricao_completa": "Causa sofrimento clinicamente significativo ou prejuízo no funcionamento.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_outros",
      "letra": "E",
      "rotulo": "Não atribuível a condição médica ou outro transtorno mental",
      "tipo": "exclusao_diagnostica",
      "ui_widget": "select_multiplos_ddx",
      "obrigatorio": true,
      "icone": "Ban",
      "ddx_sugeridos": [
        "lesao_cerebral",
        "toc",
        "transtorno_depressivo_maior",
        "esquizofrenia"
      ],
      "descricao_completa": "Não atribuível a outra condição médica (lesão cerebral, Prader-Willi, síndrome de Prada-Willi) nem mais bem explicado por TOC, TDM, esquizofrenia, TEA, TND.",
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
  "especificadores": [
    {
      "id": "aquisicao_excessiva",
      "nome": "Com aquisição excessiva",
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
      "id": "insight",
      "nome": "Nível de insight",
      "tipo": "select_unico",
      "ortogonal": false,
      "opcoes": [
        {
          "id": "bom",
          "label": "Com bom ou razoável insight",
          "codigo_adicional": null
        },
        {
          "id": "pobre",
          "label": "Com pobre insight",
          "codigo_adicional": null
        },
        {
          "id": "ausente",
          "label": "Com ausência de insight/crenças delirantes",
          "codigo_adicional": null
        }
      ],
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
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno de acumulação."
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
      "id": "habitacao",
      "label": "Habitabilidade do Domicílio",
      "icone": "House",
      "relevante_para": "transversal"
    },
    {
      "id": "social",
      "label": "Relações Sociais e Familiares",
      "icone": "Users",
      "relevante_para": "transversal"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "TOC",
      "ponto_distincao": "No TOC, o acúmulo é secundário a obsessões; no acumulação primário, os itens são guardados por valor percebido.",
      "pertence_a_classe": true
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno Depressivo Maior",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "TAG",
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
    "populacao_geral": "2–6% (estimativa populacao geral)",
    "proporcao_sexo": "Levemente mais frequente em homens; mulheres mais frequentemente tratam",
    "variacoes_culturais": null,
    "notas": "Prevalência aumenta com a idade.",
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
    "idade_inicio_tipica": "Sintomas observáveis na infância/adolescência; apresentação clínica ~30s-40s; piora progressiva sem tratamento",
    "trajetoria": "Crônico e progressivo; raramente remite espontaneamente.",
    "prognostico": "Resposta moderada à TCC especializada; pior prognóstico que TOC.",
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
  "id": "transtorno_acumulacao",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "rendering": {
    "estrutura_diagnostica": "polythetic_monocluster",
    "criteria": [],
    "diagnostic_rule": "**A(dificuldade_descartar) AND B(necessidade_guardar+sofrimento) AND C(obstrucao) AND D(sofrimento/prejuizo) AND E(exclusao_medica) AND F(exclusao_outro_TM)**",
    "clusters": [],
    "duration": null,
    "age_onset": null,
    "functional_impairment": null,
    "exclusions": [
      "- Lesao cerebral traumatica, resseccao cirurgica, doenca cerebrovascular",
      "Infeccoes do SNC (encefalite por herpes simples)",
      "Sindrome de Prader-Willi",
      "- TOC (acumulacao por obsessoes: medo de contaminacao/danos/incompletude)",
      "TDM (acumulacao por fadiga/retardo)",
      "Esquizofrenia (acumulacao por delirios/sintomas negativos)",
      "Demencia/neurocognitivo (acumulacao por deficits cognitivos + desinibicao)",
      "TEA (acumulacao por interesses restritos)",
      "**Pode coexistir:** Se acumulacao grave aparece concomitantemente a TOC mas e considerada INDEPENDENTE dos sintomas típicos de TOC, ambos sao diagnosticados."
    ],
    "specifiers": [
      "Com aquisicao excessiva: 80-90% dos casos; compras excessivas, roubo, itens gratuitos",
      "Sem aquisicao excessiva: raro",
      "- Com insight bom ou razoavel: reconhece que acumulacao e problematica",
      "Com insight pobre: acredita que nao e problematica apesar de evidencias",
      "Com insight ausente/crencas delirantes: completamente convencido de que nao e problematica"
    ],
    "operational_profiles": [],
    "critical_differentials": [],
    "key_questions": [
      "Voce tem dificuldade persistente de jogar fora, vender, doar ou reciclar seus pertences?",
      "Essa dificuldade existe mesmo para itens que outras pessoas considerariam sem valor?",
      "Voce sente uma necessidade forte de guardar os itens?",
      "Voce sente sofrimento ou angustia quando precisa se desfazer de alguma coisa?",
      "A acumulacao de itens esta congestionando ou obstruindo areas da sua casa (cozinha, quarto, sala)?",
      "Voce consegue usar sua cama para dormir, a mesa para comer, o chuveiro para se banhar?",
      "Se sua casa nao esta obstruida, e porque outras pessoas (familia, funcionarios, autoridades) limparam por voce?",
      "A acumulacao esta causando problemas de seguranca (risco de incendio, queda) ou conflitos com familiares?",
      "Voce compra, rouba ou pega itens excessivamente mesmo sem necessidade ou espaco?",
      "Essa dificuldade comecou apos uma lesao cerebral, AVC, ou problema neurologico?",
      "Voce acumula porque tem medo de que algo ruim aconteca se jogar fora, ou porque sente que as coisas estao 'incompletas'?",
      "Voce reconhece que a acumulacao e um problema, ou acha que esta tudo bem do jeito que esta?"
    ],
    "alerts": [],
    "source_trace": {
      "markdown_section": "### TRANSTORNO DE ACUMULACAO / HOARDING",
      "patches_applied": []
    },
    "category": "FULL",
    "ui_mode": "structured_full",
    "render_structured_interview": true
  },
  "versao_complementar_existe": false,
  "inventario_clinico": {
    "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 300.3 (F42)",
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
