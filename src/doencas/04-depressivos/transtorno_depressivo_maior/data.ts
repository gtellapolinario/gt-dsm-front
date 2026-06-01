import { TranstornoDSMSchema, type TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import { parseGeneratedDiseaseData } from "@/infra/validation-helpers";

// Dados brutos normalizados da release DSM operacional
const rawData = {
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_depressivo_maior",
    "nome_completo": "Transtorno Depressivo Maior",
    "sigla": "TDM",
    "capitulo_id": "04",
    "capitulo": "Transtornos Depressivos",
    "grupo": null,
    "versao_complementar_existe": false,
    "sinonimos_historicos": [],
    "faixa_etaria_alvo": "ambos",
    "codigo": {
      "cid10": "F32.0",
      "cid11": "6A70",
      "dsm5": "296.21"
    }
  },
  "id": "transtorno_depressivo_maior",
  "item_id": "transtorno_depressivo_maior",
  "name": "Transtorno Depressivo Maior",
  "nome_completo": "Transtorno Depressivo Maior",
  "chapter_id": "04",
  "chapter_name": "Transtornos Depressivos",
  "category": "FULL",
  "estrutura_diagnostica": "polythetic_com_ancora",
  "estrutura_geral": "criterios_sintomaticos",
  "ui_mode": "structured_full",
  "severity_type": "ordinal_simples",
  "has_formal_severity": true,
  "render_structured_interview": true,
  "diagnostic_rule": "",
  "clusters_sintomas": [
    {
      "id": "A",
      "nome": "Episódio Depressivo Maior (5/9 com âncora)",
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
        },
        {
          "id": "A9",
          "texto": "",
          "descricao": ""
        }
      ]
    }
  ],
  "criterios_condicionais": [
    {
      "id": "sofrimento_funcional",
      "letra": "B",
      "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
      "descricao_completa": "Os sintomas causam sofrimento clinicamente significativo ou prejuízo no funcionamento social, profissional ou em outras áreas importantes da vida.",
      "obrigatorio": true
    },
    {
      "id": "exclusao_substancia_medica",
      "letra": "C",
      "rotulo": "Não atribuível a substância ou condição médica",
      "descricao_completa": "O episódio não é atribuível aos efeitos fisiológicos de uma substância ou a outra condição médica.",
      "obrigatorio": true
    },
    {
      "id": "exclusao_psicotico",
      "letra": "D",
      "rotulo": "Não melhor explicado por transtorno psicótico",
      "descricao_completa": "A ocorrência do EDM não é mais bem explicada por transtorno esquizoafetivo, esquizofrenia, transtorno esquizofreniforme, transtorno delirante, outro transtorno do espectro da esquizofrenia.",
      "obrigatorio": true
    },
    {
      "id": "exclusao_mania_hipomania",
      "letra": "E",
      "rotulo": "Nunca houve episódio maníaco ou hipomaníaco",
      "descricao_completa": "Nunca houve episódio maníaco ou hipomaníaco (exclusão não se aplica se episódios foram induzidos por substância ou condição médica).",
      "obrigatorio": true
    }
  ],
  "gravidade": {
    "tipo": "ordinal_simples",
    "presente": true,
    "has_formal_severity": true,
    "regra_atribuicao": "Baseada no número de sintomas dos critérios, na sua gravidade e no grau de incapacitação funcional.",
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
      "id": "trabalho",
      "label": "Desempenho Profissional"
    },
    {
      "id": "academico",
      "label": "Desempenho Acadêmico"
    },
    {
      "id": "social",
      "label": "Funcionamento Social"
    },
    {
      "id": "autocuidado",
      "label": "Autocuidado Básico"
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtornos relacionados a substâncias",
      "frequencia": "alta",
      "nota": "None"
    },
    {
      "condicao": "Transtorno de pânico",
      "frequencia": "alta",
      "nota": "None"
    },
    {
      "condicao": "Transtorno obsessivo-compulsivo",
      "frequencia": "moderada",
      "nota": "None"
    },
    {
      "condicao": "Anorexia nervosa e Bulimia nervosa",
      "frequencia": "moderada",
      "nota": "None"
    },
    {
      "condicao": "Transtorno da personalidade borderline",
      "frequencia": "alta",
      "nota": "Aumenta sensivelmente o risco de tentativas de suicídio."
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Episódio maníaco com humor irritável ou misto",
      "ponto_distincao": "Distinguir por presença de sintomas maníacos concomitantes; exige avaliação clínica criteriosa.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno do humor devido a condição médica",
      "ponto_distincao": "EDM é diagnóstico correto se a perturbação não for consequência fisiopatológica direta de condição médica específica.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno depressivo/bipolar induzido por substância",
      "ponto_distincao": "Distingue-se por substância etiologicamente relacionada à perturbação de humor.",
      "pertence_a_classe": false
    },
    {
      "condicao": "TDAH",
      "ponto_distincao": "Distratibilidade e baixa tolerância à frustração ocorrem em ambos; se critérios satisfeitos, TDAH pode ser diagnosticado conjuntamente.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno de adaptação com humor deprimido",
      "ponto_distincao": "No transtorno de adaptação não são satisfeitos todos os critérios para EDM.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Tristeza/luto normal",
      "ponto_distincao": "Luto não costuma provocar EDM; quando ocorrem juntos, prognóstico é pior; exige julgamento clínico.",
      "pertence_a_classe": false
    }
  ],
  "perguntas_chave": [],
  "key_questions": [],
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Pico na década dos 20 anos; pode surgir em qualquer idade; probabilidade aumenta sensivelmente com a puberdade",
    "trajetoria": "Curso bastante variável. Recuperação começa em 3 meses em 2/5 dos casos; em 1 ano em 4/5. Risco de recorrência aumenta progressivamente com número de episódios. Possível transição para bipolar, especialmente em início na adolescência ou com características psicóticas.",
    "prognostico": "Cronicidade aumenta probabilidade de transtornos de personalidade, ansiedade e abuso de substância. Tempos médios de recuperação estáveis por longos períodos."
  },
  "prevalencia": {
    "populacao_geral": "Aproximadamente 7% (prevalência de 12 meses nos EUA); prevalência em 18-29 anos é 3x maior que em indivíduos acima de 60 anos",
    "proporcao_sexo": "1,5 a 3x mais em mulheres que em homens; disparidade inicia na adolescência",
    "variacoes_culturais": "Diferenças de até 7x nas taxas entre culturas; sintomas somáticos como queixa predominante em muitas culturas; insônia e perda de energia mais uniformemente relatados",
    "notas": "Alta mortalidade associada, em boa parte pelo suicídio. Indivíduos deprimidos em asilos têm probabilidade aumentada de morte no primeiro ano."
  },
  "hierarquia": {
    "presente": false,
    "notas": "TDM é excluído se houver qualquer episódio maníaco ou hipomaníaco anterior (exceto se induzido por substância/condição médica).",
    "exclui_se_diagnosticado": [
      "transtorno_bipolar_tipo_1",
      "transtorno_bipolar_tipo_2"
    ],
    "exclui_diagnostico_de": []
  },
  "subtipos": {
    "presente": true,
    "itens": [
      true,
      "Episodicidade",
      true,
      [
        {
          "id": "episodio_unico",
          "codigo": {
            "dsm5": "296.2x",
            "cid10": "F32.x",
            "cid11": null
          },
          "label": "Episódio único",
          "descricao": "Primeiro episódio depressivo maior na vida do indivíduo.",
          "sintomas_caracteristicos": []
        },
        {
          "id": "episodio_recorrente",
          "codigo": {
            "dsm5": "296.3x",
            "cid10": "F33.x",
            "cid11": null
          },
          "label": "Episódio recorrente",
          "descricao": "Dois ou mais episódios com intervalo de pelo menos 2 meses entre eles sem critérios para EDM.",
          "sintomas_caracteristicos": []
        }
      ],
      {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    ]
  },
  "especificadores": [
    {
      "id": "com_sintomas_ansiosos",
      "nome": "Com sintomas ansiosos",
      "descricao": ""
    },
    {
      "id": "com_caracteristicas_mistas",
      "nome": "Com características mistas",
      "descricao": ""
    },
    {
      "id": "com_caracteristicas_melancolicas",
      "nome": "Com características melancólicas",
      "descricao": ""
    },
    {
      "id": "com_caracteristicas_atipicas",
      "nome": "Com características atípicas",
      "descricao": ""
    },
    {
      "id": "com_caracteristicas_psicoticas",
      "nome": "Com características psicóticas",
      "descricao": ""
    },
    {
      "id": "com_catatonia",
      "nome": "Com catatonia",
      "descricao": ""
    },
    {
      "id": "com_inicio_periparto",
      "nome": "Com início no periparto",
      "descricao": ""
    },
    {
      "id": "com_padrao_sazonal",
      "nome": "Com padrão sazonal",
      "descricao": ""
    }
  ],
  "template_prontuario": {
    "titulo": "",
    "texto": "",
    "campos": []
  },
  "metadados_globais": {
    "fonte_capitulo_md": "04_transtornos_depressivos.md",
    "fonte_inventario_md": "inventario/04_inventario.md",
    "data_extracao": "2026-05-31",
    "modelo_agente": "claude-sonnet-4-6",
    "lacunas_globais": [
      "marcadores_laboratoriais_validados"
    ],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "instrumentos_complementares": [],
  "raw_document": {
    "$schema_version": "1.0.0",
    "meta": {
      "id": "transtorno_depressivo_maior",
      "nome_completo": "Transtorno Depressivo Maior",
      "sigla": "TDM",
      "capitulo_id": "04",
      "capitulo": "Transtornos Depressivos",
      "grupo": null,
      "versao_complementar_existe": false,
      "sinonimos_historicos": [
        "Depressão maior",
        "Depressão unipolar",
        "Episódio depressivo maior"
      ],
      "faixa_etaria_alvo": "ambos",
      "codigo": {
        "cid10": "F32.0",
        "cid11": "6A70",
        "dsm5": "296.21"
      }
    },
    "id": "transtorno_depressivo_maior",
    "item_id": "transtorno_depressivo_maior",
    "name": "Transtorno Depressivo Maior",
    "nome_completo": "Transtorno Depressivo Maior",
    "chapter_id": "04",
    "chapter_name": "Transtornos Depressivos",
    "category": "FULL",
    "estrutura_diagnostica": "polythetic_com_ancora",
    "estrutura_geral": "polythetic_com_ancora",
    "ui_mode": "structured_full",
    "severity_type": "ordinal_simples",
    "has_formal_severity": true,
    "render_structured_interview": true,
    "diagnostic_rule": "",
    "clusters_sintomas": [
      {
        "id": "A",
        "nome": "Episódio Depressivo Maior (5/9 com âncora)",
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
          },
          {
            "id": "A9",
            "texto": "",
            "descricao": ""
          }
        ]
      }
    ],
    "criterios_condicionais": [
      {
        "id": "sofrimento_funcional",
        "letra": "B",
        "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
        "descricao_completa": "Os sintomas causam sofrimento clinicamente significativo ou prejuízo no funcionamento social, profissional ou em outras áreas importantes da vida.",
        "obrigatorio": true
      },
      {
        "id": "exclusao_substancia_medica",
        "letra": "C",
        "rotulo": "Não atribuível a substância ou condição médica",
        "descricao_completa": "O episódio não é atribuível aos efeitos fisiológicos de uma substância ou a outra condição médica.",
        "obrigatorio": true
      },
      {
        "id": "exclusao_psicotico",
        "letra": "D",
        "rotulo": "Não melhor explicado por transtorno psicótico",
        "descricao_completa": "A ocorrência do EDM não é mais bem explicada por transtorno esquizoafetivo, esquizofrenia, transtorno esquizofreniforme, transtorno delirante, outro transtorno do espectro da esquizofrenia.",
        "obrigatorio": true
      },
      {
        "id": "exclusao_mania_hipomania",
        "letra": "E",
        "rotulo": "Nunca houve episódio maníaco ou hipomaníaco",
        "descricao_completa": "Nunca houve episódio maníaco ou hipomaníaco (exclusão não se aplica se episódios foram induzidos por substância ou condição médica).",
        "obrigatorio": true
      }
    ],
    "gravidade": {
      "tipo": "ordinal_simples",
      "presente": true,
      "has_formal_severity": true,
      "regra_atribuicao": "Baseada no número de sintomas dos critérios, na sua gravidade e no grau de incapacitação funcional.",
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
        "id": "trabalho",
        "label": "Desempenho Profissional"
      },
      {
        "id": "academico",
        "label": "Desempenho Acadêmico"
      },
      {
        "id": "social",
        "label": "Funcionamento Social"
      },
      {
        "id": "autocuidado",
        "label": "Autocuidado Básico"
      }
    ],
    "comorbidades_frequentes": [
      {
        "condicao": "Transtornos relacionados a substâncias",
        "frequencia": "alta",
        "nota": "None"
      },
      {
        "condicao": "Transtorno de pânico",
        "frequencia": "alta",
        "nota": "None"
      },
      {
        "condicao": "Transtorno obsessivo-compulsivo",
        "frequencia": "moderada",
        "nota": "None"
      },
      {
        "condicao": "Anorexia nervosa e Bulimia nervosa",
        "frequencia": "moderada",
        "nota": "None"
      },
      {
        "condicao": "Transtorno da personalidade borderline",
        "frequencia": "alta",
        "nota": "Aumenta sensivelmente o risco de tentativas de suicídio."
      }
    ],
    "diagnostico_diferencial": [
      {
        "condicao": "Episódio maníaco com humor irritável ou misto",
        "ponto_distincao": "Distinguir por presença de sintomas maníacos concomitantes; exige avaliação clínica criteriosa.",
        "pertence_a_classe": false
      },
      {
        "condicao": "Transtorno do humor devido a condição médica",
        "ponto_distincao": "EDM é diagnóstico correto se a perturbação não for consequência fisiopatológica direta de condição médica específica.",
        "pertence_a_classe": false
      },
      {
        "condicao": "Transtorno depressivo/bipolar induzido por substância",
        "ponto_distincao": "Distingue-se por substância etiologicamente relacionada à perturbação de humor.",
        "pertence_a_classe": false
      },
      {
        "condicao": "TDAH",
        "ponto_distincao": "Distratibilidade e baixa tolerância à frustração ocorrem em ambos; se critérios satisfeitos, TDAH pode ser diagnosticado conjuntamente.",
        "pertence_a_classe": false
      },
      {
        "condicao": "Transtorno de adaptação com humor deprimido",
        "ponto_distincao": "No transtorno de adaptação não são satisfeitos todos os critérios para EDM.",
        "pertence_a_classe": false
      },
      {
        "condicao": "Tristeza/luto normal",
        "ponto_distincao": "Luto não costuma provocar EDM; quando ocorrem juntos, prognóstico é pior; exige julgamento clínico.",
        "pertence_a_classe": false
      }
    ],
    "perguntas_chave": [],
    "key_questions": [],
    "curso_desenvolvimento": {
      "idade_inicio_tipica": "Pico na década dos 20 anos; pode surgir em qualquer idade; probabilidade aumenta sensivelmente com a puberdade",
      "trajetoria": "Curso bastante variável. Recuperação começa em 3 meses em 2/5 dos casos; em 1 ano em 4/5. Risco de recorrência aumenta progressivamente com número de episódios. Possível transição para bipolar, especialmente em início na adolescência ou com características psicóticas.",
      "prognostico": "Cronicidade aumenta probabilidade de transtornos de personalidade, ansiedade e abuso de substância. Tempos médios de recuperação estáveis por longos períodos."
    },
    "prevalencia": {
      "populacao_geral": "Aproximadamente 7% (prevalência de 12 meses nos EUA); prevalência em 18-29 anos é 3x maior que em indivíduos acima de 60 anos",
      "proporcao_sexo": "1,5 a 3x mais em mulheres que em homens; disparidade inicia na adolescência",
      "variacoes_culturais": "Diferenças de até 7x nas taxas entre culturas; sintomas somáticos como queixa predominante em muitas culturas; insônia e perda de energia mais uniformemente relatados",
      "notas": "Alta mortalidade associada, em boa parte pelo suicídio. Indivíduos deprimidos em asilos têm probabilidade aumentada de morte no primeiro ano."
    },
    "hierarquia": {
      "presente": false,
      "notas": "TDM é excluído se houver qualquer episódio maníaco ou hipomaníaco anterior (exceto se induzido por substância/condição médica).",
      "exclui_se_diagnosticado": [
        "transtorno_bipolar_tipo_1",
        "transtorno_bipolar_tipo_2"
      ],
      "exclui_diagnostico_de": []
    },
    "subtipos": {
      "presente": true,
      "itens": [
        true,
        "Episodicidade",
        true,
        [
          {
            "id": "episodio_unico",
            "codigo": {
              "dsm5": "296.2x",
              "cid10": "F32.x",
              "cid11": null
            },
            "label": "Episódio único",
            "descricao": "Primeiro episódio depressivo maior na vida do indivíduo.",
            "sintomas_caracteristicos": []
          },
          {
            "id": "episodio_recorrente",
            "codigo": {
              "dsm5": "296.3x",
              "cid10": "F33.x",
              "cid11": null
            },
            "label": "Episódio recorrente",
            "descricao": "Dois ou mais episódios com intervalo de pelo menos 2 meses entre eles sem critérios para EDM.",
            "sintomas_caracteristicos": []
          }
        ],
        {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      ]
    },
    "especificadores": [
      {
        "id": "com_sintomas_ansiosos",
        "nome": "Com sintomas ansiosos",
        "descricao": ""
      },
      {
        "id": "com_caracteristicas_mistas",
        "nome": "Com características mistas",
        "descricao": ""
      },
      {
        "id": "com_caracteristicas_melancolicas",
        "nome": "Com características melancólicas",
        "descricao": ""
      },
      {
        "id": "com_caracteristicas_atipicas",
        "nome": "Com características atípicas",
        "descricao": ""
      },
      {
        "id": "com_caracteristicas_psicoticas",
        "nome": "Com características psicóticas",
        "descricao": ""
      },
      {
        "id": "com_catatonia",
        "nome": "Com catatonia",
        "descricao": ""
      },
      {
        "id": "com_inicio_periparto",
        "nome": "Com início no periparto",
        "descricao": ""
      },
      {
        "id": "com_padrao_sazonal",
        "nome": "Com padrão sazonal",
        "descricao": ""
      }
    ],
    "template_prontuario": {
      "titulo": "",
      "texto": "",
      "campos": []
    },
    "metadados_globais": {
      "fonte_capitulo_md": "04_transtornos_depressivos.md",
      "fonte_inventario_md": "inventario/04_inventario.md",
      "data_extracao": "2026-05-31",
      "modelo_agente": "claude-sonnet-4-6",
      "lacunas_globais": [
        "marcadores_laboratoriais_validados"
      ],
      "inconsistencias_detectadas": [],
      "notas_agente_globais": null,
      "revisao_humana_necessaria": false
    },
    "instrumentos_complementares": [],
    "raw_document": {
      "$schema_version": "1.0.0",
      "meta": {
        "id": "transtorno_depressivo_maior",
        "nome_completo": "Transtorno Depressivo Maior",
        "sigla": "TDM",
        "codigo": {
          "dsm5": "296.21",
          "cid10": "F32.0",
          "cid11": "6A70"
        },
        "capitulo": "Transtornos Depressivos",
        "capitulo_id": "04",
        "grupo": null,
        "faixa_etaria_alvo": "ambos",
        "versao_complementar_existe": false,
        "sinonimos_historicos": [
          "Depressão maior",
          "Depressão unipolar",
          "Episódio depressivo maior"
        ]
      },
      "estrutura_geral": "polythetic_com_ancora",
      "clusters_sintomas": [
        {
          "id": "A",
          "nome": "Episódio Depressivo Maior (5/9 com âncora)",
          "tipo": "polythetic_com_ancora",
          "limiar": {
            "adulto": 5,
            "pediatria": 5
          },
          "ancora_obrigatoria": {
            "descricao": "Ao menos 1 entre: A1 (humor deprimido) ou A2 (anedonia)",
            "ids_obrigatorios": [
              "A1",
              "A2"
            ],
            "n_minimo": 1
          },
          "sintomas": [
            {
              "id": "A1",
              "rotulo": "Humor deprimido na maior parte do dia",
              "desc": "Humor deprimido na maior parte do dia, quase todos os dias (relato subjetivo ou observação). Em crianças/adolescentes pode ser irritável.",
              "pergunta": "Você se sente triste, vazio ou sem esperança na maior parte do dia, quase todos os dias?",
              "exemplos_clinicos": [
                "Parece prestes a chorar",
                "Descreve sentir vazio",
                "Irritabilidade persistente em crianças"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A2",
              "rotulo": "Perda de interesse ou prazer (anedonia)",
              "desc": "Acentuada diminuição do interesse ou prazer em todas ou quase todas as atividades, na maior parte do dia, quase todos os dias.",
              "pergunta": "Você perdeu o interesse ou o prazer em coisas que antes gostava de fazer?",
              "exemplos_clinicos": [
                "Parou de praticar hobbies",
                "Não sente prazer em atividades sociais"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A3",
              "rotulo": "Perda/ganho de peso ou alteração do apetite",
              "desc": "Perda ou ganho significativo de peso sem dieta (>5% do peso corporal em 1 mês) ou redução/aumento do apetite quase todos os dias. Em crianças, insucesso no ganho de peso esperado.",
              "pergunta": "Você notou mudança significativa no seu peso ou apetite sem estar fazendo dieta?",
              "exemplos_clinicos": [
                "Perda de 5kg em um mês",
                "Avidez por carboidratos"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A4",
              "rotulo": "Insônia ou hipersonia",
              "desc": "Insônia (inicial, intermediária ou terminal) ou hipersonia quase todos os dias.",
              "pergunta": "Você tem tido dificuldade para dormir ou está dormindo em excesso?",
              "exemplos_clinicos": [
                "Acorda às 3h e não consegue voltar a dormir",
                "Dorme 12 horas por dia"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A5",
              "rotulo": "Agitação ou retardo psicomotor observável",
              "desc": "Agitação ou retardo psicomotor quase todos os dias, observáveis por outras pessoas (não apenas sensações subjetivas).",
              "pergunta": "Outras pessoas notaram que você está muito agitado ou muito lento nos movimentos e na fala?",
              "exemplos_clinicos": [
                "Andar sem parar de um lado para o outro",
                "Fala lentificada com pausas longas"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A6",
              "rotulo": "Fadiga ou perda de energia",
              "desc": "Fadiga ou perda de energia quase todos os dias, mesmo sem esforço físico prévio.",
              "pergunta": "Você se sente cansado ou sem energia quase todos os dias, mesmo para tarefas simples?",
              "exemplos_clinicos": [
                "Tomar banho e se vestir leva o dobro do tempo habitual"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A7",
              "rotulo": "Inutilidade ou culpa excessiva/inapropriada",
              "desc": "Sentimentos de inutilidade ou culpa excessiva/inapropriada (que podem ser delirantes) quase todos os dias.",
              "pergunta": "Você se sente inútil ou com culpa excessiva por coisas que não são sua responsabilidade?",
              "exemplos_clinicos": [
                "Convicção de ser pessoalmente responsável por problemas alheios"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A8",
              "rotulo": "Dificuldade de concentração ou indecisão",
              "desc": "Capacidade diminuída para pensar, concentrar-se ou tomar decisões quase todos os dias.",
              "pergunta": "Você tem tido dificuldade para se concentrar, pensar claramente ou tomar decisões?",
              "exemplos_clinicos": [
                "Queda no rendimento escolar em crianças",
                "Dificuldade de memória em idosos"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A9",
              "rotulo": "Pensamentos de morte ou ideação suicida",
              "desc": "Pensamentos recorrentes de morte, ideação suicida sem plano específico, tentativa de suicídio ou plano específico.",
              "pergunta": "Você tem pensado em morte, em se machucar ou em suicídio?",
              "exemplos_clinicos": [
                "Desejo passivo de não acordar",
                "Plano específico elaborado"
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
          "letra": "B",
          "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
          "tipo": "prejuizo_funcional",
          "ui_widget": "toggle_com_justificativa_obrigatoria",
          "obrigatorio": true,
          "icone_fa": "fa-exclamation-circle",
          "ddx_sugeridos": [],
          "descricao_completa": "Os sintomas causam sofrimento clinicamente significativo ou prejuízo no funcionamento social, profissional ou em outras áreas importantes da vida.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "exclusao_substancia_medica",
          "letra": "C",
          "rotulo": "Não atribuível a substância ou condição médica",
          "tipo": "exclusao_substancia_medica",
          "ui_widget": "toggle_com_justificativa_obrigatoria",
          "obrigatorio": true,
          "icone_fa": "fa-ban",
          "ddx_sugeridos": [
            "hipotireoidismo",
            "avc",
            "cancer"
          ],
          "descricao_completa": "O episódio não é atribuível aos efeitos fisiológicos de uma substância ou a outra condição médica.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "exclusao_psicotico",
          "letra": "D",
          "rotulo": "Não melhor explicado por transtorno psicótico",
          "tipo": "exclusao_diagnostica",
          "ui_widget": "select_multiplos_ddx",
          "obrigatorio": true,
          "icone_fa": "fa-brain",
          "ddx_sugeridos": [
            "transtorno_esquizoafetivo",
            "esquizofrenia",
            "transtorno_esquizofreniforme",
            "transtorno_delirante"
          ],
          "descricao_completa": "A ocorrência do EDM não é mais bem explicada por transtorno esquizoafetivo, esquizofrenia, transtorno esquizofreniforme, transtorno delirante, outro transtorno do espectro da esquizofrenia.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "exclusao_mania_hipomania",
          "letra": "E",
          "rotulo": "Nunca houve episódio maníaco ou hipomaníaco",
          "tipo": "exclusao_diagnostica",
          "ui_widget": "toggle_com_justificativa_obrigatoria",
          "obrigatorio": true,
          "icone_fa": "fa-ban",
          "ddx_sugeridos": [
            "transtorno_bipolar_tipo_1",
            "transtorno_bipolar_tipo_2"
          ],
          "descricao_completa": "Nunca houve episódio maníaco ou hipomaníaco (exclusão não se aplica se episódios foram induzidos por substância ou condição médica).",
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
        "nome": "Episodicidade",
        "mutuamente_exclusivos": true,
        "subtipos": [
          {
            "id": "episodio_unico",
            "codigo": {
              "dsm5": "296.2x",
              "cid10": "F32.x",
              "cid11": null
            },
            "label": "Episódio único",
            "descricao": "Primeiro episódio depressivo maior na vida do indivíduo.",
            "sintomas_caracteristicos": []
          },
          {
            "id": "episodio_recorrente",
            "codigo": {
              "dsm5": "296.3x",
              "cid10": "F33.x",
              "cid11": null
            },
            "label": "Episódio recorrente",
            "descricao": "Dois ou mais episódios com intervalo de pelo menos 2 meses entre eles sem critérios para EDM.",
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
          "id": "com_sintomas_ansiosos",
          "nome": "Com sintomas ansiosos",
          "tipo": "gravidade_ordinal",
          "ortogonal": true,
          "opcoes": [
            {
              "id": "leve",
              "label": "Leve (2 sintomas ansiosos)",
              "codigo_adicional": null
            },
            {
              "id": "moderado",
              "label": "Moderado (3 sintomas ansiosos)",
              "codigo_adicional": null
            },
            {
              "id": "moderado_grave",
              "label": "Moderado-grave (4-5 sintomas)",
              "codigo_adicional": null
            },
            {
              "id": "grave",
              "label": "Grave (4-5 sintomas + agitação motora)",
              "codigo_adicional": null
            }
          ],
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "com_caracteristicas_mistas",
          "nome": "Com características mistas",
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
          "id": "com_caracteristicas_melancolicas",
          "nome": "Com características melancólicas",
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
          "id": "com_caracteristicas_atipicas",
          "nome": "Com características atípicas",
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
          "id": "com_caracteristicas_psicoticas",
          "nome": "Com características psicóticas",
          "tipo": "select_unico",
          "ortogonal": true,
          "opcoes": [
            {
              "id": "congruentes_humor",
              "label": "Com características psicóticas congruentes com o humor",
              "codigo_adicional": null
            },
            {
              "id": "incongruentes_humor",
              "label": "Com características psicóticas incongruentes com o humor",
              "codigo_adicional": null
            }
          ],
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "com_catatonia",
          "nome": "Com catatonia",
          "tipo": "booleano",
          "ortogonal": true,
          "opcoes": [],
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": "Código adicional 293.89 (F06.1).",
            "fonte_passada_1": true
          }
        },
        {
          "id": "com_inicio_periparto",
          "nome": "Com início no periparto",
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
          "id": "com_padrao_sazonal",
          "nome": "Com padrão sazonal",
          "tipo": "booleano",
          "ortogonal": true,
          "opcoes": [],
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": "Aplica-se somente ao episódio recorrente.",
            "fonte_passada_1": true
          }
        }
      ],
      "gravidade": {
        "tipo": "ordinal_simples",
        "niveis": [
          {
            "id": "leve",
            "label": "Leve",
            "descritor": "Sintomas mínimos para preencher critérios; sofrimento manejável; pouco prejuízo funcional."
          },
          {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "Número de sintomas, intensidade e/ou prejuízo funcional entre leve e grave."
          },
          {
            "id": "grave",
            "label": "Grave",
            "descritor": "Número de sintomas substancialmente acima do mínimo; sofrimento intenso não manejável; interferência acentuada no funcionamento."
          }
        ],
        "regra_atribuicao": "Baseada no número de sintomas dos critérios, na sua gravidade e no grau de incapacitação funcional.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "hierarquia": {
        "presente": false,
        "exclui_se_diagnosticado": [
          "transtorno_bipolar_tipo_1",
          "transtorno_bipolar_tipo_2"
        ],
        "exclui_diagnostico_de": [],
        "notas": "TDM é excluído se houver qualquer episódio maníaco ou hipomaníaco anterior (exceto se induzido por substância/condição médica).",
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
          "icone_fa": "fa-briefcase",
          "relevante_para": "adulto"
        },
        {
          "id": "academico",
          "label": "Desempenho Acadêmico",
          "icone_fa": "fa-graduation-cap",
          "relevante_para": "ambos"
        },
        {
          "id": "social",
          "label": "Funcionamento Social",
          "icone_fa": "fa-users",
          "relevante_para": "transversal"
        },
        {
          "id": "autocuidado",
          "label": "Autocuidado Básico",
          "icone_fa": "fa-bath",
          "relevante_para": "transversal"
        }
      ],
      "diagnostico_diferencial": [
        {
          "condicao": "Episódio maníaco com humor irritável ou misto",
          "ponto_distincao": "Distinguir por presença de sintomas maníacos concomitantes; exige avaliação clínica criteriosa.",
          "pertence_a_classe": false
        },
        {
          "condicao": "Transtorno do humor devido a condição médica",
          "ponto_distincao": "EDM é diagnóstico correto se a perturbação não for consequência fisiopatológica direta de condição médica específica.",
          "pertence_a_classe": false
        },
        {
          "condicao": "Transtorno depressivo/bipolar induzido por substância",
          "ponto_distincao": "Distingue-se por substância etiologicamente relacionada à perturbação de humor.",
          "pertence_a_classe": false
        },
        {
          "condicao": "TDAH",
          "ponto_distincao": "Distratibilidade e baixa tolerância à frustração ocorrem em ambos; se critérios satisfeitos, TDAH pode ser diagnosticado conjuntamente.",
          "pertence_a_classe": false
        },
        {
          "condicao": "Transtorno de adaptação com humor deprimido",
          "ponto_distincao": "No transtorno de adaptação não são satisfeitos todos os critérios para EDM.",
          "pertence_a_classe": false
        },
        {
          "condicao": "Tristeza/luto normal",
          "ponto_distincao": "Luto não costuma provocar EDM; quando ocorrem juntos, prognóstico é pior; exige julgamento clínico.",
          "pertence_a_classe": false
        }
      ],
      "comorbidades_frequentes": [
        {
          "condicao": "Transtornos relacionados a substâncias",
          "frequencia": "alta",
          "nota": null
        },
        {
          "condicao": "Transtorno de pânico",
          "frequencia": "alta",
          "nota": null
        },
        {
          "condicao": "Transtorno obsessivo-compulsivo",
          "frequencia": "moderada",
          "nota": null
        },
        {
          "condicao": "Anorexia nervosa e Bulimia nervosa",
          "frequencia": "moderada",
          "nota": null
        },
        {
          "condicao": "Transtorno da personalidade borderline",
          "frequencia": "alta",
          "nota": "Aumenta sensivelmente o risco de tentativas de suicídio."
        }
      ],
      "instrumentos_complementares": [],
      "prevalencia": {
        "populacao_geral": "Aproximadamente 7% (prevalência de 12 meses nos EUA); prevalência em 18-29 anos é 3x maior que em indivíduos acima de 60 anos",
        "proporcao_sexo": "1,5 a 3x mais em mulheres que em homens; disparidade inicia na adolescência",
        "variacoes_culturais": "Diferenças de até 7x nas taxas entre culturas; sintomas somáticos como queixa predominante em muitas culturas; insônia e perda de energia mais uniformemente relatados",
        "notas": "Alta mortalidade associada, em boa parte pelo suicídio. Indivíduos deprimidos em asilos têm probabilidade aumentada de morte no primeiro ano.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "curso_desenvolvimento": {
        "idade_inicio_tipica": "Pico na década dos 20 anos; pode surgir em qualquer idade; probabilidade aumenta sensivelmente com a puberdade",
        "trajetoria": "Curso bastante variável. Recuperação começa em 3 meses em 2/5 dos casos; em 1 ano em 4/5. Risco de recorrência aumenta progressivamente com número de episódios. Possível transição para bipolar, especialmente em início na adolescência ou com características psicóticas.",
        "prognostico": "Cronicidade aumenta probabilidade de transtornos de personalidade, ansiedade e abuso de substância. Tempos médios de recuperação estáveis por longos períodos.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "template_prontuario": {
        "cabecalho": "## Avaliação do Transtorno Depressivo Maior - {nome_paciente}",
        "rodape_metodologico": "Dados obtidos por anamnese clínica estruturada com base nos critérios DSM-5 para Transtorno Depressivo Maior (296.x / F32.x ou F33.x)."
      },
      "metadados_globais": {
        "fonte_capitulo_md": "04_transtornos_depressivos.md",
        "fonte_inventario_md": "inventario/04_inventario.md",
        "data_extracao": "2026-05-31",
        "modelo_agente": "claude-sonnet-4-6",
        "lacunas_globais": [
          "marcadores_laboratoriais_validados"
        ],
        "inconsistencias_detectadas": [],
        "notas_agente_globais": null,
        "revisao_humana_necessaria": false
      },
      "id": "transtorno_depressivo_maior",
      "category": "FULL",
      "ui_mode": "structured_full",
      "render_structured_interview": true,
      "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [],
        "diagnostic_rule": "- Critério A (≥5 de 9 sintomas + 1 obrigatório) **E** Critério B (prejuízo/sofrimento) **E** Critério C (excluir substância/condição médica) **E** Critério D (excluir psicose) **E** Critério E (excluir bipolar)",
        "clusters": [],
        "duration": null,
        "age_onset": null,
        "functional_impairment": null,
        "exclusions": [],
        "subtypes_presentations": [],
        "specifiers": [
          "| ≥2 de: nervoso/tenso, inquieto, dificuldade de concentração por preocupações, temor, perda de controle. Gravidade: leve=2, moderada=3, moderada-grave=4-5, grave=4-5+agitação |",
          "| ≥3 de: humor elevado, autoestima inflada, mais loquaz, fuga de ideias, aumento de energia, envolvimento em atividades de risco, redução da necessidade de sono. Não satisfaz critérios de mania. |",
          "| A: perda de prazer em quase tudo OU falta de reatividade; B: ≥3 de: humor distinto (prostração), pior pela manhã, despertar precoce ≥2h, agitação/retardo psicomotor, anorexia/perda de peso, culpa excessiva |",
          "| A: reatividade de humor; B: ≥2 de: ganho de peso/aumento do apetite, hipersonia, paralisia de chumbo, sensibilidade à rejeição interpessoal. NÃO satisfaz critérios melancólicos ou catatonia. |",
          "| Delírios e/ou alucinações presentes. Especificar: congruentes com humor (culpa, doença, morte) OU incongruentes |",
          "| Critérios de catatonia presentes durante maior parte do episódio. Código adicional 293.89 (F06.1) |",
          "| Início durante gravidez ou até 4 semanas após parto. Episódios psicóticos no pós-parto: 1 em 500 a 1 em 1.000 partos |",
          "| SÓ episódio recorrente. Relação temporal regular com estação (ex: outono/inverno) por ≥2 anos; remissão em época característica; episódios sazonais superam não-sazonais |"
        ],
        "operational_profiles": [],
        "severity": {
          "has_formal_severity": true,
          "type": "episodio_atual",
          "levels": [
            "leve",
            "moderado",
            "grave"
          ],
          "assignment_rule": "Baseada no numero de sintomas, gravidade e incapacitacao funcional do episodio atual",
          "domains": []
        },
        "critical_differentials": [],
        "key_questions": [
          "Nas últimas 2 semanas, você se sentiu deprimido, triste ou sem esperança na maior parte do tempo?",
          "Perdeu o interesse ou prazer em atividades que costumava gostar?",
          "Teve mudanças no apetite ou peso? Dormiu mais ou menos do que o habitual?",
          "Tem se sentido inquieto e agitado, ou muito lento?",
          "Tem se sentido cansado ou sem energia?",
          "Tem se sentido inútil ou com culpa excessiva?",
          "Tem tido dificuldade para se concentrar ou tomar decisões?",
          "Tem tido pensamentos sobre morte ou de ferir a si mesmo?",
          "Isso tem causado problemas no trabalho, nas relações ou em outras áreas?",
          "Já teve algum período de humor anormalmente elevado com energia aumentada?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### Transtorno DEPRESSIVO MAIOR (TDM)",
          "patches_applied": [
            "gravidade.tipo: ordinal_simples -> episodio_atual (CRITICAL aprovado)"
          ]
        },
        "category": "FULL",
        "ui_mode": "structured_full",
        "render_structured_interview": true
      },
      "sigla": "TDM",
      "codigo_dsm5": "296.21",
      "codigo_cid10": "F32.0",
      "faixa_etaria_alvo": "ambos",
      "versao_complementar_existe": false,
      "inventario_clinico": {
        "codigo_bruto": "- **Codigo DSM-5 / CID-10:** Episodio unico — 296.21-296.26 (F32.0-F32.5, F32.9); Episodio recorrente — 296.31-296.36 (F33.0-F33.42, F33.9). Com caracteristicas psicoticas: 296.24 (F32.3) / 296.34 (F33.3)",
        "estrutura_efetiva": "- **Estrutura efetiva:** Politetico (5/9 sintomas, ancora em A1 humor deprimido OU A2 perda de interesse/prazer) + B (sofrimento clinicamente significativo ou prejuizo funcional) + C (nao atribuível a substancia/condicao médica) + D (nao melhor explicado por transtorno esquizoafetivo/esquizofrenia/outro psicótico) + E (nunca episodio maníaco/hipomaníaco, exceto se induzido por substancia/condicao médica). Duracao: >=2 semanas. Sintomas presentes na maior parte do dia, quase todos os dias.",
        "notas_clinicas": "- **Notas:**"
      },
      "hierarquia_exclusao": {
        "exclui": [
          "transtorno_bipolar_tipo_1",
          "transtorno_bipolar_tipo_2"
        ],
        "exclui_de": [],
        "notas_hierarquia": "Extraído do índice de hierarquias do capítulo"
      },
      "codigo_cid11": "6A70",
      "super_enrichment": {
        "id": "transtorno_depressivo_maior",
        "nome_original": "TRANSTORNO DEPRESSIVO MAIOR",
        "comorbidades_frequentes": [
          {
            "condicao": "Transtornos relacionados a substâncias",
            "frequencia": "alta",
            "nota": null
          },
          {
            "condicao": "Transtorno de pânico",
            "frequencia": "alta",
            "nota": null
          },
          {
            "condicao": "Transtorno obsessivo-compulsivo",
            "frequencia": "moderada",
            "nota": null
          },
          {
            "condicao": "Anorexia nervosa e Bulimia nervosa",
            "frequencia": "moderada",
            "nota": null
          },
          {
            "condicao": "Transtorno da personalidade borderline",
            "frequencia": "alta",
            "nota": "Aumenta sensivelmente o risco de tentativas de suicídio."
          }
        ],
        "diagnostico_diferencial": [
          {
            "condicao": "Episódio maníaco com humor irritável ou misto",
            "ponto_distincao": "Distinguir por presença de sintomas maníacos concomitantes; exige avaliação clínica criteriosa.",
            "pertence_a_classe": false
          },
          {
            "condicao": "Transtorno do humor devido a condição médica",
            "ponto_distincao": "EDM é diagnóstico correto se a perturbação não for consequência fisiopatológica direta de condição médica específica.",
            "pertence_a_classe": false
          },
          {
            "condicao": "Transtorno depressivo/bipolar induzido por substância",
            "ponto_distincao": "Distingue-se por substância etiologicamente relacionada à perturbação de humor.",
            "pertence_a_classe": false
          },
          {
            "condicao": "TDAH",
            "ponto_distincao": "Distratibilidade e baixa tolerância à frustração ocorrem em ambos; se critérios satisfeitos, TDAH pode ser diagnosticado conjuntamente.",
            "pertence_a_classe": false
          },
          {
            "condicao": "Transtorno de adaptação com humor deprimido",
            "ponto_distincao": "No transtorno de adaptação não são satisfeitos todos os critérios para EDM.",
            "pertence_a_classe": false
          },
          {
            "condicao": "Tristeza/luto normal",
            "ponto_distincao": "Luto não costuma provocar EDM; quando ocorrem juntos, prognóstico é pior; exige julgamento clínico.",
            "pertence_a_classe": false
          }
        ],
        "hierarquia": {
          "presente": true,
          "exclui_se_diagnosticado": [
            "transtorno_bipolar_tipo_1",
            "transtorno_bipolar_tipo_2"
          ],
          "exclui_diagnostico_de": [],
          "notas": "TDM é excluído se houver qualquer episódio maníaco ou hipomaníaco anterior (exceto se induzido por substância/condição médica)."
        },
        "prevalencia": {
          "populacao_geral": "Aproximadamente 7% (prevalência de 12 meses nos EUA); prevalência em 18-29 anos é 3x maior que em indivíduos acima de 60 anos",
          "proporcao_sexo": "1,5 a 3x mais em mulheres que em homens; disparidade inicia na adolescência",
          "variacoes_culturais": "Diferenças de até 7x nas taxas entre culturas; sintomas somáticos como queixa predominante em muitas culturas; insônia e perda de energia mais uniformemente relatados"
        },
        "curso_desenvolvimento": {
          "idade_inicio_tipica": "Pico na década dos 20 anos; pode surgir em qualquer idade; probabilidade aumenta sensivelmente com a puberdade",
          "trajetoria": "Curso bastante variável. Recuperação começa em 3 meses em 2/5 dos casos; em 1 ano em 4/5. Risco de recorrência aumenta progressivamente com número de episódios. Possível transição para bipolar, especialmente em início na adolescência ou com características psicóticas.",
          "prognostico": "Cronicidade aumenta probabilidade de transtornos de personalidade, ansiedade e abuso de substância. Tempos médios de recuperação estáveis por longos períodos."
        },
        "instrumentos_complementares": [],
        "transtorno_depressivo_maior": "| Campo | Valor |\n|-------|-------|\n| **nome** | Transtorno Depressivo Maior |\n| **categoria_operacional** | FULL |\n| **sigla** | TDM |\n| **codigo_dsm5** | Vários (ver tabela abaixo) |\n| **codigo_cid10** | F32.x / F33.x |\n| **estrutura_diagnostica** | polythetic_monocluster |",
        "criterios_obrigatorios": [
          {
            "id": "A - Cinco (ou mais) dos seguintes sintomas",
            "texto": "presentes durante o mesmo período de 2 semanas, representando mudança do funcionamento anterior; pelo menos 1 dos sintomas é (1) humor deprimido ou (2) perda de interesse/prazer:\n\n1. Humor deprimido na maior parte do dia, quase todos os dias (subjetivo ou observação)\n   - Nota: Em crianças/adolescentes pode ser humor irritável\n2. Acentuada diminuição do interesse ou prazer em quase todas as atividades\n3. Perda ou ganho significativo de peso (>5% em 1 mês) OU redução/aumento do apetite\n   - Nota: Em crianças, insucesso em obter ganho de peso esperado\n4. Insônia ou hipersonia quase todos os dias\n5. Agitação ou retardo psicomotor quase todos os dias (observável por outros)\n6. Fadiga ou perda de energia quase todos os dias\n7. Sentimentos de inutilidade ou culpa excessiva/inapropriada (podem ser delirantes)\n8. Capacidade diminuída de pensar/concentrar OU indecisão\n9. Pensamentos recorrentes de morte, ideação suicida recorrente, tentativa ou plano específico\n\n> Nota: Não incluir sintomas nitidamente devidos a outra condição médica."
          },
          {
            "id": "B",
            "texto": "Sintomas causam sofrimento clinicamente significativo OU prejuízo no funcionamento social, profissional ou outras áreas."
          },
          {
            "id": "C",
            "texto": "Episódio não é atribuível a efeitos fisiológicos de substância ou condição médica."
          },
          {
            "id": "D",
            "texto": "Não explicado por esquizoafetivo, esquizofrenia, esquizofreniforme, delirante ou outro transtorno psicótico especificado/nespecificado."
          },
          {
            "id": "E",
            "texto": "Nunca houve episódio maníaco ou hipomaníaco.\n> Nota: Exclusão não se aplica se episódios maníacos/hipomaníacos foram induzidos por substância ou condição médica."
          }
        ],
        "regra_diagnostica": "- Critério A (≥5 de 9 sintomas + 1 obrigatório) **E** Critério B (prejuízo/sofrimento) **E** Critério C (excluir substância/condição médica) **E** Critério D (excluir psicose) **E** Critério E (excluir bipolar)",
        "tabela_codificacao": [
          {
            "Gravidade/Curso": "Leve",
            "Episódio Único": "296.21 (F32.0)",
            "Episódio Recorrente": "296.31 (F33.0)"
          },
          {
            "Gravidade/Curso": "Moderada",
            "Episódio Único": "296.22 (F32.1)",
            "Episódio Recorrente": "296.32 (F33.1)"
          },
          {
            "Gravidade/Curso": "Grave",
            "Episódio Único": "296.23 (F32.2)",
            "Episódio Recorrente": "296.33 (F33.2)"
          },
          {
            "Gravidade/Curso": "Com psicose",
            "Episódio Único": "296.24 (F32.3)",
            "Episódio Recorrente": "296.34 (F33.3)"
          },
          {
            "Gravidade/Curso": "Em remissão parcial",
            "Episódio Único": "296.25 (F32.4)",
            "Episódio Recorrente": "296.35 (F33.41)"
          },
          {
            "Gravidade/Curso": "Em remissão completa",
            "Episódio Único": "296.26 (F32.5)",
            "Episódio Recorrente": "296.36 (F33.42)"
          },
          {
            "Gravidade/Curso": "Não especificado",
            "Episódio Único": "296.20 (F32.9)",
            "Episódio Recorrente": "296.30 (F33.9)"
          }
        ],
        "especificadores": [
          {
            "Especificador": "Com sintomas ansiosos",
            "Critério Operacional": "≥2 de: nervoso/tenso, inquieto, dificuldade de concentração por preocupações, temor, perda de controle. Gravidade: leve=2, moderada=3, moderada-grave=4-5, grave=4-5+agitação"
          },
          {
            "Especificador": "Com características mistas",
            "Critério Operacional": "≥3 de: humor elevado, autoestima inflada, mais loquaz, fuga de ideias, aumento de energia, envolvimento em atividades de risco, redução da necessidade de sono. Não satisfaz critérios de mania."
          },
          {
            "Especificador": "Com características melancólicas",
            "Critério Operacional": "A: perda de prazer em quase tudo OU falta de reatividade; B: ≥3 de: humor distinto (prostração), pior pela manhã, despertar precoce ≥2h, agitação/retardo psicomotor, anorexia/perda de peso, culpa excessiva"
          },
          {
            "Especificador": "Com características atípicas",
            "Critério Operacional": "A: reatividade de humor; B: ≥2 de: ganho de peso/aumento do apetite, hipersonia, paralisia de chumbo, sensibilidade à rejeição interpessoal. NÃO satisfaz critérios melancólicos ou catatonia."
          },
          {
            "Especificador": "Com características psicóticas",
            "Critério Operacional": "Delírios e/ou alucinações presentes. Especificar: congruentes com humor (culpa, doença, morte) OU incongruentes"
          },
          {
            "Especificador": "Com catatonia",
            "Critério Operacional": "Critérios de catatonia presentes durante maior parte do episódio. Código adicional 293.89 (F06.1)"
          },
          {
            "Especificador": "Com início no periparto",
            "Critério Operacional": "Início durante gravidez ou até 4 semanas após parto. Episódios psicóticos no pós-parto: 1 em 500 a 1 em 1.000 partos"
          },
          {
            "Especificador": "Com padrão sazonal",
            "Critério Operacional": "SÓ episódio recorrente. Relação temporal regular com estação (ex: outono/inverno) por ≥2 anos; remissão em época característica; episódios sazonais superam não-sazonais"
          }
        ],
        "gravidade": {
          "tem_gravidade_formal": "Sim",
          "tipo": "episodio_atual",
          "regra_atribuicao": "Baseada no número de sintomas, gravidade e incapacitação funcional"
        },
        "remissao": "- **Parcial**: sintomas do EDM anterior presentes mas critérios não totalmente satisfeitos; OU período <2 meses sem sintomas após episódio\n- **Completa**: nenhum sinal/sintoma significativo nos últimos 2 meses",
        "diferenciais_criticos": [
          {
            "Condição": "Luto",
            "Distinção Chave": "Afeto de vazio/perda; ocorre em ondas; humor melhora com eventos positivos; autoestima preservada. No EDM: humor persistente, incapacidade de antecipar prazer, auto-depreciação"
          },
          {
            "Condição": "Transtorno bipolar",
            "Distinção Chave": "TDM exclui história de mania/hipomanía; especificador \"com características mistas\" aumenta risco de bipolar futuro"
          },
          {
            "Condição": "Transtorno depressivo persistente (distimia)",
            "Distinção Chave": "Duração ≥2 anos; sintomas menos graves; não satisfaz critérios completos de EDM continuamente"
          },
          {
            "Condição": "Transtorno esquizoafetivo",
            "Distinção Chave": "No esquizoafetivo, delírios/alucinações ≥2 semanas na AUSÊNCIA de episódio de humor"
          },
          {
            "Condição": "Transtorno adaptação com humor deprimido",
            "Distinção Chave": "Não satisfaz todos os critérios do EDM"
          },
          {
            "Condição": "Transtorno depressivo induzido por substância",
            "Distinção Chave": "Relação temporal com uso/cessação de substância"
          },
          {
            "Condição": "Transtorno depressivo por condição médica",
            "Distinção Chave": "Etiologia fisiopatológica direta demonstrável"
          }
        ],
        "perguntas_chave_entrevista": [
          {
            "numero": 1,
            "texto": "Nas últimas 2 semanas, você se sentiu deprimido, triste ou sem esperança na maior parte do tempo?"
          },
          {
            "numero": 2,
            "texto": "Perdeu o interesse ou prazer em atividades que costumava gostar?"
          },
          {
            "numero": 3,
            "texto": "Teve mudanças no apetite ou peso? Dormiu mais ou menos do que o habitual?"
          },
          {
            "numero": 4,
            "texto": "Tem se sentido inquieto e agitado, ou muito lento?"
          },
          {
            "numero": 5,
            "texto": "Tem se sentido cansado ou sem energia?"
          },
          {
            "numero": 6,
            "texto": "Tem se sentido inútil ou com culpa excessiva?"
          },
          {
            "numero": 7,
            "texto": "Tem tido dificuldade para se concentrar ou tomar decisões?"
          },
          {
            "numero": 8,
            "texto": "Tem tido pensamentos sobre morte ou de ferir a si mesmo?"
          },
          {
            "numero": 9,
            "texto": "Isso tem causado problemas no trabalho, nas relações ou em outras áreas?"
          },
          {
            "numero": 10,
            "texto": "Já teve algum período de humor anormalmente elevado com energia aumentada?"
          }
        ],
        "ui": {
          "renderiza_entrevista": true,
          "modo": "structured_full",
          "observacoes": "- Sempre avaliar risco de suicídio (Critério A9)"
        }
      },
      "super_enrichment_source": "dsm/output/json_super_adicionado/transtorno_depressivo_maior.json",
      "enrichment_status": {
        "has_poor": true,
        "has_master": true,
        "has_inventory": true,
        "has_hierarchy": true,
        "has_cid11": true,
        "has_super_enrichment": true,
        "match_notes": {
          "poor": "id",
          "master": "id",
          "inventario": "id",
          "hierarquia": "id",
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
