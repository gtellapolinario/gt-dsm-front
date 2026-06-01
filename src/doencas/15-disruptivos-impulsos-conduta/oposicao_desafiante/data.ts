import { TranstornoDSMSchema, type TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import { parseGeneratedDiseaseData } from "@/infra/validation-helpers";

// Dados brutos normalizados da release DSM operacional
const rawData = {
  "$schema_version": "1.0.0",
  "meta": {
    "id": "oposicao_desafiante",
    "nome_completo": "Transtorno de Oposição Desafiante",
    "sigla": "TOD",
    "capitulo_id": "15",
    "capitulo": "Transtornos Disruptivos, do Controle de Impulsos e da Conduta",
    "grupo": null,
    "versao_complementar_existe": false,
    "sinonimos_historicos": [],
    "faixa_etaria_alvo": "ambos",
    "codigo": {
      "cid10": "F91.3",
      "cid11": "6C90",
      "dsm5": "313.81"
    }
  },
  "id": "oposicao_desafiante",
  "item_id": "oposicao_desafiante",
  "name": "Transtorno de Oposição Desafiante",
  "nome_completo": "Transtorno de Oposição Desafiante",
  "chapter_id": "15",
  "chapter_name": "Transtornos Disruptivos, do Controle de Impulsos e da Conduta",
  "category": "FULL",
  "estrutura_diagnostica": "polythetic_monocluster",
  "estrutura_geral": "criterios_sintomaticos",
  "ui_mode": "structured_full",
  "severity_type": "ordinal_simples",
  "has_formal_severity": true,
  "render_structured_interview": true,
  "diagnostic_rule": "",
  "clusters_sintomas": [
    {
      "id": "A",
      "nome": "Humor raivoso, comportamento questionador ou índole vingativa",
      "descricao": "",
      "sintomas": [
        {
          "id": "A1",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A2",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A3",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A4",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A5",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A6",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A7",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A8",
          "texto": "",
          "descricao": ""
        }
      ]
    }
  ],
  "criterios_condicionais": [
    {
      "id": "duracao_6meses",
      "letra": "A_cont",
      "rotulo": "Duração mínima de 6 meses",
      "descricao_completa": "Padrão de comportamento com duração de pelo menos seis meses. Nota: para <5 anos, na maioria dos dias; para ≥5 anos, pelo menos uma vez por semana.",
      "obrigatorio": true
    },
    {
      "id": "nao_irmao",
      "letra": "A_cont2",
      "rotulo": "Exibido com pelo menos um indivíduo que não seja irmão",
      "descricao_completa": "O comportamento deve ser exibido na interação com pelo menos um indivíduo que não seja um irmão.",
      "obrigatorio": true
    },
    {
      "id": "prejuizo_funcional",
      "letra": "B",
      "rotulo": "Sofrimento ou prejuízo funcional",
      "descricao_completa": "A perturbação no comportamento está associada a sofrimento para o indivíduo ou para os outros em seu contexto social imediato, ou causa impactos negativos no funcionamento social, educacional, profissional ou outras áreas importantes.",
      "obrigatorio": true
    },
    {
      "id": "exclusao_outros",
      "letra": "C",
      "rotulo": "Não ocorre exclusivamente em curso de outro transtorno",
      "descricao_completa": "Os comportamentos não ocorrem exclusivamente durante o curso de um transtorno psicótico, por uso de substância, depressivo ou bipolar. Além disso, os critérios para transtorno disruptivo da desregulação do humor não são preenchidos.",
      "obrigatorio": true
    }
  ],
  "gravidade": {
    "tipo": "ordinal_simples",
    "presente": true,
    "has_formal_severity": true,
    "regra_atribuicao": "Leve = 1 ambiente; Moderada = 2 ambientes; Grave = 3+ ambientes.",
    "niveis": [
      {
        "id": "leve",
        "label": "Leve",
        "descricao": ""
      },
      {
        "id": "moderada",
        "label": "Moderada",
        "descricao": ""
      },
      {
        "id": "grave",
        "label": "Grave",
        "descricao": ""
      }
    ],
    "dominios": []
  },
  "dominios_impacto": [
    {
      "id": "social",
      "label": "Funcionamento Social"
    },
    {
      "id": "academico",
      "label": "Desempenho Acadêmico/Escolar"
    },
    {
      "id": "familiar",
      "label": "Relações Familiares"
    },
    {
      "id": "trabalho",
      "label": "Desempenho Profissional"
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "TDAH",
      "frequencia": "alta",
      "nota": "None"
    },
    {
      "condicao": "Transtorno da conduta",
      "frequencia": "moderada",
      "nota": "None"
    },
    {
      "condicao": "Transtornos de ansiedade",
      "frequencia": "moderada",
      "nota": "None"
    },
    {
      "condicao": "Transtorno depressivo maior",
      "frequencia": "moderada",
      "nota": "None"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno da conduta",
      "ponto_distincao": "TOD não inclui agressão a pessoas/animais, destruição de propriedade ou padrão de roubo/falsidade; inclui desregulação emocional não presente na conduta.",
      "pertence_a_classe": true
    },
    {
      "condicao": "TDAH",
      "ponto_distincao": "A desobediência no TDAH ocorre em situações que demandam esforço sustentado; no TOD é mais generalizada.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtornos depressivo e bipolar",
      "ponto_distincao": "O TOD não deve ser diagnosticado se os sintomas ocorrerem exclusivamente durante o curso de um transtorno do humor.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno explosivo intermitente",
      "ponto_distincao": "TEI envolve agressão grave dirigida a outros; TOD não inclui agressão física grave.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Deficiência intelectual",
      "ponto_distincao": "O comportamento opositor deve ser acentuadamente maior do que o observado em indivíduos com idade mental comparável.",
      "pertence_a_classe": false
    }
  ],
  "perguntas_chave": [],
  "key_questions": [],
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Anos pré-escolares",
    "trajetoria": "Pode preceder transtorno da conduta; maioria das crianças com TOD não desenvolve conduta. Risco aumentado para ansiedade e depressão.",
    "prognostico": "Sintomas desafiantes/questionadores predizem conduta; sintomas de humor predizem transtornos emocionais."
  },
  "prevalencia": {
    "populacao_geral": "1–11%, média estimada de 3,3%",
    "proporcao_sexo": "1,4:1 M:F antes da adolescência",
    "variacoes_culturais": "Prevalência relativamente consistente entre países com diferentes raças e etnias.",
    "notas": "None"
  },
  "hierarquia": {
    "presente": false,
    "notas": "TDDH não modelado no dataset atual; hierarquia pendente.",
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": []
  },
  "subtipos": {
    "presente": true,
    "itens": [
      false,
      null,
      true,
      [],
      {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    ]
  },
  "especificadores": [],
  "template_prontuario": {
    "titulo": "",
    "texto": "",
    "campos": []
  },
  "metadados_globais": {
    "fonte_capitulo_md": "15_transtornos_disruptivos,_controle_impulsos_da_conduta.md",
    "fonte_inventario_md": null,
    "data_extracao": "2026-05-31",
    "modelo_agente": "claude-opus-4",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "instrumentos_complementares": [],
  "raw_document": {
    "$schema_version": "1.0.0",
    "meta": {
      "id": "oposicao_desafiante",
      "nome_completo": "Transtorno de Oposição Desafiante",
      "sigla": "TOD",
      "capitulo_id": "15",
      "capitulo": "Transtornos Disruptivos, do Controle de Impulsos e da Conduta",
      "grupo": null,
      "versao_complementar_existe": false,
      "sinonimos_historicos": [],
      "faixa_etaria_alvo": "ambos",
      "codigo": {
        "cid10": "F91.3",
        "cid11": "6C90",
        "dsm5": "313.81"
      }
    },
    "id": "oposicao_desafiante",
    "item_id": "oposicao_desafiante",
    "name": "Transtorno de Oposição Desafiante",
    "nome_completo": "Transtorno de Oposição Desafiante",
    "chapter_id": "15",
    "chapter_name": "Transtornos Disruptivos, do Controle de Impulsos e da Conduta",
    "category": "FULL",
    "estrutura_diagnostica": "polythetic_monocluster",
    "estrutura_geral": "polythetic_monocluster",
    "ui_mode": "structured_full",
    "severity_type": "ordinal_simples",
    "has_formal_severity": true,
    "render_structured_interview": true,
    "diagnostic_rule": "",
    "clusters_sintomas": [
      {
        "id": "A",
        "nome": "Humor raivoso, comportamento questionador ou índole vingativa",
        "descricao": "",
        "sintomas": [
          {
            "id": "A1",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A2",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A3",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A4",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A5",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A6",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A7",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A8",
            "texto": "",
            "descricao": ""
          }
        ]
      }
    ],
    "criterios_condicionais": [
      {
        "id": "duracao_6meses",
        "letra": "A_cont",
        "rotulo": "Duração mínima de 6 meses",
        "descricao_completa": "Padrão de comportamento com duração de pelo menos seis meses. Nota: para <5 anos, na maioria dos dias; para ≥5 anos, pelo menos uma vez por semana.",
        "obrigatorio": true
      },
      {
        "id": "nao_irmao",
        "letra": "A_cont2",
        "rotulo": "Exibido com pelo menos um indivíduo que não seja irmão",
        "descricao_completa": "O comportamento deve ser exibido na interação com pelo menos um indivíduo que não seja um irmão.",
        "obrigatorio": true
      },
      {
        "id": "prejuizo_funcional",
        "letra": "B",
        "rotulo": "Sofrimento ou prejuízo funcional",
        "descricao_completa": "A perturbação no comportamento está associada a sofrimento para o indivíduo ou para os outros em seu contexto social imediato, ou causa impactos negativos no funcionamento social, educacional, profissional ou outras áreas importantes.",
        "obrigatorio": true
      },
      {
        "id": "exclusao_outros",
        "letra": "C",
        "rotulo": "Não ocorre exclusivamente em curso de outro transtorno",
        "descricao_completa": "Os comportamentos não ocorrem exclusivamente durante o curso de um transtorno psicótico, por uso de substância, depressivo ou bipolar. Além disso, os critérios para transtorno disruptivo da desregulação do humor não são preenchidos.",
        "obrigatorio": true
      }
    ],
    "gravidade": {
      "tipo": "ordinal_simples",
      "presente": true,
      "has_formal_severity": true,
      "regra_atribuicao": "Leve = 1 ambiente; Moderada = 2 ambientes; Grave = 3+ ambientes.",
      "niveis": [
        {
          "id": "leve",
          "label": "Leve",
          "descricao": ""
        },
        {
          "id": "moderada",
          "label": "Moderada",
          "descricao": ""
        },
        {
          "id": "grave",
          "label": "Grave",
          "descricao": ""
        }
      ],
      "dominios": []
    },
    "dominios_impacto": [
      {
        "id": "social",
        "label": "Funcionamento Social"
      },
      {
        "id": "academico",
        "label": "Desempenho Acadêmico/Escolar"
      },
      {
        "id": "familiar",
        "label": "Relações Familiares"
      },
      {
        "id": "trabalho",
        "label": "Desempenho Profissional"
      }
    ],
    "comorbidades_frequentes": [
      {
        "condicao": "TDAH",
        "frequencia": "alta",
        "nota": "None"
      },
      {
        "condicao": "Transtorno da conduta",
        "frequencia": "moderada",
        "nota": "None"
      },
      {
        "condicao": "Transtornos de ansiedade",
        "frequencia": "moderada",
        "nota": "None"
      },
      {
        "condicao": "Transtorno depressivo maior",
        "frequencia": "moderada",
        "nota": "None"
      }
    ],
    "diagnostico_diferencial": [
      {
        "condicao": "Transtorno da conduta",
        "ponto_distincao": "TOD não inclui agressão a pessoas/animais, destruição de propriedade ou padrão de roubo/falsidade; inclui desregulação emocional não presente na conduta.",
        "pertence_a_classe": true
      },
      {
        "condicao": "TDAH",
        "ponto_distincao": "A desobediência no TDAH ocorre em situações que demandam esforço sustentado; no TOD é mais generalizada.",
        "pertence_a_classe": false
      },
      {
        "condicao": "Transtornos depressivo e bipolar",
        "ponto_distincao": "O TOD não deve ser diagnosticado se os sintomas ocorrerem exclusivamente durante o curso de um transtorno do humor.",
        "pertence_a_classe": false
      },
      {
        "condicao": "Transtorno explosivo intermitente",
        "ponto_distincao": "TEI envolve agressão grave dirigida a outros; TOD não inclui agressão física grave.",
        "pertence_a_classe": true
      },
      {
        "condicao": "Deficiência intelectual",
        "ponto_distincao": "O comportamento opositor deve ser acentuadamente maior do que o observado em indivíduos com idade mental comparável.",
        "pertence_a_classe": false
      }
    ],
    "perguntas_chave": [],
    "key_questions": [],
    "curso_desenvolvimento": {
      "idade_inicio_tipica": "Anos pré-escolares",
      "trajetoria": "Pode preceder transtorno da conduta; maioria das crianças com TOD não desenvolve conduta. Risco aumentado para ansiedade e depressão.",
      "prognostico": "Sintomas desafiantes/questionadores predizem conduta; sintomas de humor predizem transtornos emocionais."
    },
    "prevalencia": {
      "populacao_geral": "1–11%, média estimada de 3,3%",
      "proporcao_sexo": "1,4:1 M:F antes da adolescência",
      "variacoes_culturais": "Prevalência relativamente consistente entre países com diferentes raças e etnias.",
      "notas": "None"
    },
    "hierarquia": {
      "presente": false,
      "notas": "TDDH não modelado no dataset atual; hierarquia pendente.",
      "exclui_se_diagnosticado": [],
      "exclui_diagnostico_de": []
    },
    "subtipos": {
      "presente": true,
      "itens": [
        false,
        null,
        true,
        [],
        {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      ]
    },
    "especificadores": [],
    "template_prontuario": {
      "titulo": "",
      "texto": "",
      "campos": []
    },
    "metadados_globais": {
      "fonte_capitulo_md": "15_transtornos_disruptivos,_controle_impulsos_da_conduta.md",
      "fonte_inventario_md": null,
      "data_extracao": "2026-05-31",
      "modelo_agente": "claude-opus-4",
      "lacunas_globais": [],
      "inconsistencias_detectadas": [],
      "notas_agente_globais": null,
      "revisao_humana_necessaria": false
    },
    "instrumentos_complementares": [],
    "raw_document": {
      "$schema_version": "1.0.0",
      "meta": {
        "id": "oposicao_desafiante",
        "nome_completo": "Transtorno de Oposição Desafiante",
        "sigla": "TOD",
        "codigo": {
          "dsm5": "313.81",
          "cid10": "F91.3",
          "cid11": "6C90"
        },
        "capitulo": "Transtornos Disruptivos, do Controle de Impulsos e da Conduta",
        "capitulo_id": "15",
        "grupo": null,
        "faixa_etaria_alvo": "ambos",
        "versao_complementar_existe": false,
        "sinonimos_historicos": []
      },
      "estrutura_geral": "polythetic_monocluster",
      "clusters_sintomas": [
        {
          "id": "A",
          "nome": "Humor raivoso, comportamento questionador ou índole vingativa",
          "tipo": "polythetic_com_limiar",
          "limiar": {
            "adulto": 4,
            "pediatria": 4
          },
          "ancora_obrigatoria": null,
          "sintomas": [
            {
              "id": "A1",
              "rotulo": "Perde a calma com frequência",
              "desc": "Perde a calma com frequência.",
              "pergunta": "Você (ou a criança) perde a calma com frequência, mesmo com estímulos pequenos?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A2",
              "rotulo": "Sensível ou facilmente incomodado",
              "desc": "É sensível ou facilmente incomodado com frequência.",
              "pergunta": "Você se irrita ou se incomoda facilmente com coisas que outras pessoas toleram?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A3",
              "rotulo": "Raivoso e ressentido com frequência",
              "desc": "É raivoso e ressentido com frequência.",
              "pergunta": "Você se sente frequentemente com raiva ou ressentido?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A4",
              "rotulo": "Questiona figuras de autoridade",
              "desc": "Questiona figuras de autoridade ou, no caso de crianças e adolescentes, adultos.",
              "pergunta": "Você questiona ou discute com figuras de autoridade com frequência?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A5",
              "rotulo": "Desafia ou recusa obedecer regras",
              "desc": "Desafia acintosamente ou se recusa a obedecer a regras ou pedidos de figuras de autoridade.",
              "pergunta": "Você desafia ou se recusa a seguir regras ou pedidos de autoridade?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A6",
              "rotulo": "Incomoda deliberadamente outras pessoas",
              "desc": "Incomoda deliberadamente outras pessoas com frequência.",
              "pergunta": "Você incomoda ou provoca outras pessoas de propósito com frequência?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A7",
              "rotulo": "Culpa outros por seus erros",
              "desc": "Culpa outros por seus erros ou mau comportamento com frequência.",
              "pergunta": "Você costuma culpar outras pessoas por seus próprios erros ou comportamento?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A8",
              "rotulo": "Malvado ou vingativo",
              "desc": "Foi malvado ou vingativo pelo menos duas vezes nos últimos seis meses.",
              "pergunta": "Nos últimos seis meses, houve pelo menos duas vezes em que você foi deliberadamente vingativo ou malvado?",
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
          "id": "duracao_6meses",
          "letra": "A_cont",
          "rotulo": "Duração mínima de 6 meses",
          "tipo": "temporal_duracao_minima",
          "ui_widget": "campo_duracao_meses",
          "obrigatorio": true,
          "icone_fa": "fa-calendar",
          "ddx_sugeridos": [],
          "descricao_completa": "Padrão de comportamento com duração de pelo menos seis meses. Nota: para <5 anos, na maioria dos dias; para ≥5 anos, pelo menos uma vez por semana.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "nao_irmao",
          "letra": "A_cont2",
          "rotulo": "Exibido com pelo menos um indivíduo que não seja irmão",
          "tipo": "multicontexto",
          "ui_widget": "toggle_simples",
          "obrigatorio": true,
          "icone_fa": "fa-users",
          "ddx_sugeridos": [],
          "descricao_completa": "O comportamento deve ser exibido na interação com pelo menos um indivíduo que não seja um irmão.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "prejuizo_funcional",
          "letra": "B",
          "rotulo": "Sofrimento ou prejuízo funcional",
          "tipo": "prejuizo_funcional",
          "ui_widget": "toggle_com_justificativa_obrigatoria",
          "obrigatorio": true,
          "icone_fa": "fa-check",
          "ddx_sugeridos": [],
          "descricao_completa": "A perturbação no comportamento está associada a sofrimento para o indivíduo ou para os outros em seu contexto social imediato, ou causa impactos negativos no funcionamento social, educacional, profissional ou outras áreas importantes.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "exclusao_outros",
          "letra": "C",
          "rotulo": "Não ocorre exclusivamente em curso de outro transtorno",
          "tipo": "exclusao_diagnostica",
          "ui_widget": "select_multiplos_ddx",
          "obrigatorio": true,
          "icone_fa": "fa-ban",
          "ddx_sugeridos": [
            "transtorno_psicotico",
            "transtorno_uso_substancia",
            "transtorno_depressivo",
            "transtorno_bipolar",
            "transtorno_desregulacao_humor"
          ],
          "descricao_completa": "Os comportamentos não ocorrem exclusivamente durante o curso de um transtorno psicótico, por uso de substância, depressivo ou bipolar. Além disso, os critérios para transtorno disruptivo da desregulação do humor não são preenchidos.",
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
      "especificadores": [],
      "gravidade": {
        "tipo": "ordinal_simples",
        "niveis": [
          {
            "id": "leve",
            "label": "Leve",
            "descritor": "Sintomas limitam-se a apenas um ambiente."
          },
          {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "Alguns sintomas estão presentes em pelo menos dois ambientes."
          },
          {
            "id": "grave",
            "label": "Grave",
            "descritor": "Alguns sintomas estão presentes em três ou mais ambientes."
          }
        ],
        "regra_atribuicao": "Leve = 1 ambiente; Moderada = 2 ambientes; Grave = 3+ ambientes.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "hierarquia": {
        "presente": false,
        "exclui_se_diagnosticado": [],
        "exclui_diagnostico_de": [],
        "notas": "TDDH não modelado no dataset atual; hierarquia pendente.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "dominios_impacto": [
        {
          "id": "social",
          "label": "Funcionamento Social",
          "icone_fa": "fa-users",
          "relevante_para": null
        },
        {
          "id": "academico",
          "label": "Desempenho Acadêmico/Escolar",
          "icone_fa": "fa-graduation-cap",
          "relevante_para": "pediatria"
        },
        {
          "id": "familiar",
          "label": "Relações Familiares",
          "icone_fa": "fa-home",
          "relevante_para": null
        },
        {
          "id": "trabalho",
          "label": "Desempenho Profissional",
          "icone_fa": "fa-briefcase",
          "relevante_para": "adulto"
        }
      ],
      "diagnostico_diferencial": [
        {
          "condicao": "Transtorno da conduta",
          "ponto_distincao": "TOD não inclui agressão a pessoas/animais, destruição de propriedade ou padrão de roubo/falsidade; inclui desregulação emocional não presente na conduta.",
          "pertence_a_classe": true
        },
        {
          "condicao": "TDAH",
          "ponto_distincao": "A desobediência no TDAH ocorre em situações que demandam esforço sustentado; no TOD é mais generalizada.",
          "pertence_a_classe": false
        },
        {
          "condicao": "Transtornos depressivo e bipolar",
          "ponto_distincao": "O TOD não deve ser diagnosticado se os sintomas ocorrerem exclusivamente durante o curso de um transtorno do humor.",
          "pertence_a_classe": false
        },
        {
          "condicao": "Transtorno explosivo intermitente",
          "ponto_distincao": "TEI envolve agressão grave dirigida a outros; TOD não inclui agressão física grave.",
          "pertence_a_classe": true
        },
        {
          "condicao": "Deficiência intelectual",
          "ponto_distincao": "O comportamento opositor deve ser acentuadamente maior do que o observado em indivíduos com idade mental comparável.",
          "pertence_a_classe": false
        }
      ],
      "comorbidades_frequentes": [
        {
          "condicao": "TDAH",
          "frequencia": "alta",
          "nota": null
        },
        {
          "condicao": "Transtorno da conduta",
          "frequencia": "moderada",
          "nota": null
        },
        {
          "condicao": "Transtornos de ansiedade",
          "frequencia": "moderada",
          "nota": null
        },
        {
          "condicao": "Transtorno depressivo maior",
          "frequencia": "moderada",
          "nota": null
        }
      ],
      "instrumentos_complementares": [],
      "prevalencia": {
        "populacao_geral": "1–11%, média estimada de 3,3%",
        "proporcao_sexo": "1,4:1 M:F antes da adolescência",
        "variacoes_culturais": "Prevalência relativamente consistente entre países com diferentes raças e etnias.",
        "notas": null,
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "curso_desenvolvimento": {
        "idade_inicio_tipica": "Anos pré-escolares",
        "trajetoria": "Pode preceder transtorno da conduta; maioria das crianças com TOD não desenvolve conduta. Risco aumentado para ansiedade e depressão.",
        "prognostico": "Sintomas desafiantes/questionadores predizem conduta; sintomas de humor predizem transtornos emocionais.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "template_prontuario": {
        "cabecalho": "## Avaliação do Transtorno de Oposição Desafiante - {nome_paciente}",
        "rodape_metodologico": "Anamnese clínica com base nos critérios DSM-5 (313.81 / F91.3)."
      },
      "metadados_globais": {
        "fonte_capitulo_md": "15_transtornos_disruptivos,_controle_impulsos_da_conduta.md",
        "fonte_inventario_md": null,
        "data_extracao": "2026-05-31",
        "modelo_agente": "claude-opus-4",
        "lacunas_globais": [],
        "inconsistencias_detectadas": [],
        "notas_agente_globais": null,
        "revisao_humana_necessaria": false
      },
      "id": "oposicao_desafiante",
      "category": "FULL",
      "ui_mode": "structured_full",
      "render_structured_interview": true,
      "rendering": {
        "estrutura_diagnostica": "polythetic_clusters_assimetricos",
        "criteria": [
          "A. Humor raivoso/irritavel (3 sintomas: perde calma, sensivel, raivoso)",
          "B. Comportamento questionador/desafiante (4 sintomas: questiona autoridade, desafia regras, incomoda outros, culpa outros)",
          "C. Indole vingativa (1 sintoma: malvado/vingativo >=2x/6meses)",
          "D. Perturbacao causa sofrimento OU impactos negativos no funcionome_completonto",
          "E. Exclusoes: nao ocorre exclusivamente durante psicotico, uso de substancia, depressivo/bipolar, TODD"
        ],
        "diagnostic_rule": "A (>=4 sintomas de 8, distribuidos em 3 clusters) + B (sofrimento/prejuizo) + C (exclusoes); frequencia minima: <5 anos=na maioria dos dias, >=5 anos=1x/semana (exceto A8=2x/6meses)",
        "clusters": [
          "Humor Raivoso/Irritavel",
          "Comportamento Questionador/Desafiante",
          "Indole Vingativa"
        ],
        "duration": "6+ meses",
        "age_onset": null,
        "functional_impairment": "sofrimento para o individuo ou outros no contexto social, ou impactos negativos no funcionome_completonto social, educacional, profissional",
        "exclusions": [
          "transtorno psicotico",
          "uso de substancia",
          "transtorno depressivo ou bipolar",
          "transtorno disruptivo da desregulacao do humor (mutuamente exclusivo)"
        ],
        "subtypes_presentations": [],
        "specifiers": [],
        "operational_profiles": [],
        "severity": {
          "has_formal_severity": true,
          "type": "pervasividade_contextual",
          "levels": [
            "leve",
            "moderada",
            "grave"
          ],
          "assignment_rule": "leve = 1 ambiente; moderada = 2 ambientes; grave = 3+ ambientes",
          "domains": []
        },
        "critical_differentials": [
          "transtorno da conduta",
          "TDAH",
          "transtorno depressivo/bipolar",
          "transtorno disruptivo da desregulacao do humor",
          "transtorno explosivo intermitente",
          "deficiencia intelectual",
          "transtorno de ansiedade social"
        ],
        "key_questions": [
          "Com que frequencia perde a calma ou tem explosoes de raiva?",
          "Frequentemente irritado, ressentido ou de mau humor?",
          "Questiona regras, desafia adultos ou se recusa a obedecer?",
          "Incomoda propositalmente outras pessoas? Culpa outros por erros?",
          "Ja foi deliberadamente cruel ou vingativo?",
          "Comportamentos em casa, escola, com colegas? (avaliar pervasividade)",
          "Ha sofrimento significativo ou prejuizo no funcionome_completonto?",
          "Sintomas antes dos 5 anos (maioria dos dias) ou depois (1x/semana)?"
        ],
        "alerts": [
          "nao confundir com transtorno da conduta - TOD nao viola direitos fundamentais",
          "TOD e TODD sao mutuamente exclusivos"
        ],
        "source_trace": {
          "markdown_section": "## 1. TRANSTORNO DE OPOSICAO DESAFIANTE (TOD) - FICHA FULL",
          "patches_applied": [
            "CRITICAL: gravidade.tipo ordinal_por_dominio→pervasividade_contextual"
          ]
        },
        "category": "FULL",
        "ui_mode": "structured_full",
        "render_structured_interview": true
      },
      "sigla": "TOD",
      "codigo_dsm5": "313.81",
      "codigo_cid10": "F91.3",
      "faixa_etaria_alvo": "ambos",
      "versao_complementar_existe": false,
      "inventario_clinico": {
        "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 313.81 / F91.3",
        "estrutura_efetiva": "- **Estrutura efetiva:** Padrao de humor raivoso/irritavel, comportamento questionador/desafiante ou indole vingativa com duracao de pelo menos 6 meses. Exigidos pelo menos 4 sintomas de 3 categorias possiveis, em interacao com pelo menos um individuo que nao seja irmao. As 3 categorias sao: (1) Humor Raivoso/Irritavel — perder a calma, ser sensivel/facilmente incomodado, ser raivoso/ressentido; (2) Comportamento Questionador/Desafiante — questionar autoridades, desafiar recusar regras, incomodar deliberadamente, culpar outros; (3) Indole Vingativa — foi malvado/vingativo pelo menos 2 vezes nos ultimos 6 meses. Criterio B exige sofrimento ou impacto negativo em funcionamento social/educacional/profissional. Criterio C exclui curso exclusivo de transtorno psicotico, uso de substancia, depressivo, bipolar e nao preencher criterios de transtorno disruptivo da desregulacao do humor.",
        "notas_clinicas": "- **Notas:**"
      },
      "codigo_cid11": "6C90",
      "super_enrichment": {
        "id": "oposicao_desafiante",
        "nome_original": "TRANSTORNO DE OPOSICAO DESAFIANTE",
        "comorbidades_frequentes": [
          {
            "condicao": "TDAH",
            "frequencia": "alta",
            "nota": null
          },
          {
            "condicao": "Transtorno da conduta",
            "frequencia": "moderada",
            "nota": null
          },
          {
            "condicao": "Transtornos de ansiedade",
            "frequencia": "moderada",
            "nota": null
          },
          {
            "condicao": "Transtorno depressivo maior",
            "frequencia": "moderada",
            "nota": null
          }
        ],
        "diagnostico_diferencial": [
          {
            "condicao": "Transtorno da conduta",
            "ponto_distincao": "TOD não inclui agressão a pessoas/animais, destruição de propriedade ou padrão de roubo/falsidade; inclui desregulação emocional não presente na conduta.",
            "pertence_a_classe": true
          },
          {
            "condicao": "TDAH",
            "ponto_distincao": "A desobediência no TDAH ocorre em situações que demandam esforço sustentado; no TOD é mais generalizada.",
            "pertence_a_classe": false
          },
          {
            "condicao": "Transtornos depressivo e bipolar",
            "ponto_distincao": "O TOD não deve ser diagnosticado se os sintomas ocorrerem exclusivamente durante o curso de um transtorno do humor.",
            "pertence_a_classe": false
          },
          {
            "condicao": "Transtorno explosivo intermitente",
            "ponto_distincao": "TEI envolve agressão grave dirigida a outros; TOD não inclui agressão física grave.",
            "pertence_a_classe": true
          },
          {
            "condicao": "Deficiência intelectual",
            "ponto_distincao": "O comportamento opositor deve ser acentuadamente maior do que o observado em indivíduos com idade mental comparável.",
            "pertence_a_classe": false
          }
        ],
        "hierarquia": {
          "presente": false,
          "exclui_se_diagnosticado": [],
          "exclui_diagnostico_de": [],
          "notas": "TDDH não modelado no dataset atual; hierarquia pendente."
        },
        "prevalencia": {
          "populacao_geral": "1–11%, média estimada de 3,3%",
          "proporcao_sexo": "1,4:1 M:F antes da adolescência",
          "variacoes_culturais": "Prevalência relativamente consistente entre países com diferentes raças e etnias."
        },
        "curso_desenvolvimento": {
          "idade_inicio_tipica": "Anos pré-escolares",
          "trajetoria": "Pode preceder transtorno da conduta; maioria das crianças com TOD não desenvolve conduta. Risco aumentado para ansiedade e depressão.",
          "prognostico": "Sintomas desafiantes/questionadores predizem conduta; sintomas de humor predizem transtornos emocionais."
        },
        "instrumentos_complementares": [],
        "identificacao": {
          "nome": "Transtorno de Oposicao Desafiante",
          "codigo_dsm5": "313.81 (F91.3)",
          "categoria": "Transtornos Disruptivos, Controle de Impulsos e da Conduta",
          "categoria_operacional": "FULL",
          "estrutura_diagnostica": "polythetic_clusters_assimetricos"
        },
        "criterios_obrigatorios": [
          {
            "id": "A",
            "texto": "Padrao de humor raivoso/irritavel, comportamento questionador/desafiante ou indole vingativa com duracao de pelo menos 6 meses, com pelo menos **4 sintomas** de qualquer das categorias seguintes, exibido na interacao com pelo menos um individuo que nao seja um irmao.\n\n**CLUSTER 1: Humor Raivoso/Irritavel (frequência mínima: 1x/semana para ≥5 anos; na maioria dos dias para <5 anos)**\n| # | Sintoma |\n|---|---------|\n| A1 | Perde a calma com frequencia |\n| A2 | Sensivel ou facilmente incomodado com frequencia |\n| A3 | Raivoso e ressentido com frequencia |\n\n**CLUSTER 2: Comportamento Questionador/Desafiante (frequência mínima: 1x/semana para ≥5 anos; na maioria dos dias para <5 anos)**\n| # | Sintoma |\n|---|---------|\n| A4 | Questiona figuras de autoridade/adultos com frequencia |\n| A5 | Desafia acintosamente ou se recusa a obedecer a regras com frequencia |\n| A6 | Incomoda deliberadamente outras pessoas com frequencia |\n| A7 | Culpa outros por seus erros ou mau comportamento com frequencia |\n\n**CLUSTER 3: Indole Vingativa (frequência: pelo menos 2x nos últimos 6 meses)**\n| # | Sintoma |\n|---|---------|\n| A8 | Foi malvado ou vingativo pelo menos duas vezes nos ultimos seis meses |"
          },
          {
            "id": "B",
            "texto": "Perturbacao associada a sofrimento para o individuo ou outros em seu contexto social, OU impactos negativos no funcionamento social, educacional, profissional ou outras areas importantes."
          },
          {
            "id": "C (Exclusoes)",
            "texto": "Comportamentos NAO ocorrem exclusivamente durante: transtorno psicotico, uso de substancia, transtorno depressivo ou bipolar. Critérios para transtorno disruptivo da desregulacao do humor NAO sao preenchidos."
          }
        ],
        "regra_diagnostica": "TOD = A (≥4 sintomas de 8, distribuidos em 3 clusters) + B (sofrimento/prejuizo) + C (exclusoes)",
        "clusters": "| Cluster | Limiar | Itens Disponiveis |\n|---------|--------|-------------------|\n| Humor Raivoso/Irritavel | min 1 (contribui para total) | 3 |\n| Comportamento Questionador/Desafiante | min 1 (contribui para total) | 4 |\n| Indole Vingativa | min 1 (contribui para total) | 1 |\n| **TOTAL** | **≥4 de 8** | **8** |",
        "duracao_idade_prejuizo": {
          "duracao": "≥6 meses",
          "frequencia_minima": "<5 anos: na maioria dos dias; ≥5 anos: ≥1x/semana (exceto A8)",
          "a8_especifico": "≥2x nos ultimos 6 meses"
        },
        "prejuizo_funcional": "- Sofrimento para o individuo OU\n- Sofrimento para outros no contexto social imediato (familia, pares, colegas) OU\n- Impactos negativos no funcionamento social, educacional, profissional",
        "exclusoes_obrigatorias": "1. Transtorno psicotico\n2. Uso de substancia\n3. Transtorno depressivo ou bipolar\n4. Transtorno disruptivo da desregulacao do humor (mutuamente exclusivo)",
        "subtipos_e_especificadores": [
          {
            "gravidade.tipo": "Gravidade",
            "pervasividade_contextual": "Definicao"
          },
          {
            "gravidade.tipo": "Leve",
            "pervasividade_contextual": "Sintomas limitam-se a apenas 1 ambiente"
          },
          {
            "gravidade.tipo": "Moderada",
            "pervasividade_contextual": "Alguns sintomas presentes em ≥2 ambientes"
          },
          {
            "gravidade.tipo": "Grave",
            "pervasividade_contextual": "Alguns sintomas presentes em ≥3 ambientes"
          }
        ],
        "diferenciais_criticos": [
          {
            "Transtorno": "Transtorno da Conduta",
            "Chave de Diferenciacao": "TC = violacao de direitos/normas (agressao, furto, destruicao); TOD = negativismo sem violacao grave. TOD inclui desregulacao emocional (humor raivoso) que nao esta na TC. Ambos podem ser diagnosticados se criterios preenchidos."
          },
          {
            "Transtorno": "TDAH",
            "Chave de Diferenciacao": "TOD ≠ falha em obedecer apenas em situacoes que demandam esforco/atencao sustentados."
          },
          {
            "Transtorno": "Transtornos depressivo/bipolar",
            "Chave de Diferenciacao": "Nao diagnosticar TOD se sintomas ocorrem EXCLUSIVAMENTE durante episodio de humor."
          },
          {
            "Transtorno": "Transtorno disruptivo da desregulacao do humor",
            "Chave de Diferenciacao": "Mutuamente exclusivo. TODD = humor negativo persistente + explosoes graves; TOD = explosoes menos graves/frequentes."
          },
          {
            "Transtorno": "Transtorno explosivo intermitente",
            "Chave de Diferenciacao": "TEI = agressao fisica grave dirigida a outros; TOD = raiva verbal, questionamento, sem agressao grave."
          },
          {
            "Transtorno": "Deficiencia intelectual",
            "Chave de Diferenciacao": "Diagnosticar TOD apenas se comportamento opositor for acentuadamente maior que o esperado para idade mental comparavel."
          },
          {
            "Transtorno": "Transtorno de ansiedade social",
            "Chave de Diferenciacao": "Diferenciar da recusa decorrente do medo de avaliacao negativa."
          }
        ],
        "perguntas_chave_entrevista": [
          {
            "numero": 1,
            "texto": "Com que frequencia [crianca/paciente] perde a calma ou tem explosoes de raiva?"
          },
          {
            "numero": 2,
            "texto": "Ele(a) parece frequentemente irritado, ressentido ou de mau humor?"
          },
          {
            "numero": 3,
            "texto": "Questiona regras, desafia adultos ou se recusa a obedecer com frequencia?"
          },
          {
            "numero": 4,
            "texto": "Incomoda propositalmente outras pessoas? Culpa outros por seus proprios erros?"
          },
          {
            "numero": 5,
            "texto": "Ja foi deliberadamente cruel ou vingativo com alguem nas ultimas semanas?"
          },
          {
            "numero": 6,
            "texto": "Esses comportamentos ocorrem em casa? Na escola? Com colegas?"
          },
          {
            "numero": 7,
            "texto": "Ha sofrimento significativo para a familia ou prejuizo no funcionamento?"
          },
          {
            "numero": 8,
            "texto": "Os sintomas comecaram antes dos 5 anos (maioria dos dias) ou depois (1x/semana)?"
          }
        ],
        "ui": {}
      },
      "super_enrichment_source": "dsm/output/json_super_adicionado/oposicao_desafiante.json",
      "enrichment_status": {
        "has_poor": true,
        "has_master": true,
        "has_inventory": true,
        "has_hierarchy": false,
        "has_cid11": true,
        "has_super_enrichment": true,
        "match_notes": {
          "poor": "id",
          "master": "id",
          "inventario": "id",
          "hierarquia": "missing",
          "cid11": "id",
          "super": "id"
        }
      }
    }
  }
} as const;

// Validação runtime na borda — falha imediatamente se dados estiverem corrompidos
export const data: TranstornoDSM = parseGeneratedDiseaseData(rawData);

// Raw document preservado para depuração — acessado via objeto validado
export const rawDocument = data.raw_document;
