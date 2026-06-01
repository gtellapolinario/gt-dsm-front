import { TranstornoDSMSchema, type TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import { parseGeneratedDiseaseData } from "@/infra/validation-helpers";

// Dados brutos normalizados da release DSM operacional
const rawData = {
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_deficit_atencao_hiperatividade",
    "nome_completo": "Transtorno de Déficit de Atenção/Hiperatividade",
    "sigla": "TDAH",
    "capitulo_id": "01",
    "capitulo": "Transtornos do Neurodesenvolvimento",
    "grupo": null,
    "versao_complementar_existe": false,
    "sinonimos_historicos": [],
    "faixa_etaria_alvo": "ambos",
    "codigo": {
      "cid10": "F90.2",
      "cid11": "6A05",
      "dsm5": "314.01"
    }
  },
  "id": "transtorno_deficit_atencao_hiperatividade",
  "item_id": "transtorno_deficit_atencao_hiperatividade",
  "name": "Transtorno de Déficit de Atenção/Hiperatividade",
  "nome_completo": "Transtorno de Déficit de Atenção/Hiperatividade",
  "chapter_id": "01",
  "chapter_name": "Transtornos do Neurodesenvolvimento",
  "category": "FULL",
  "estrutura_diagnostica": "polythetic_clusters_simetricos",
  "estrutura_geral": "criterios_sintomaticos",
  "ui_mode": "structured_full",
  "severity_type": "ordinal_simples",
  "has_formal_severity": true,
  "render_structured_interview": true,
  "diagnostic_rule": "",
  "clusters_sintomas": [
    {
      "id": "A1",
      "nome": "Sintomas de Desatenção",
      "descricao": "",
      "sintomas": [
        {
          "id": "A1a",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A1b",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A1c",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A1d",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A1e",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A1f",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A1g",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A1h",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A1i",
          "texto": "",
          "descricao": ""
        }
      ]
    },
    {
      "id": "A2",
      "nome": "Sintomas de Hiperatividade e Impulsividade",
      "descricao": "",
      "sintomas": [
        {
          "id": "A2a",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A2b",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A2c",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A2d",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A2e",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A2f",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A2g",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A2h",
          "texto": "",
          "descricao": ""
        },
        {
          "id": "A2i",
          "texto": "",
          "descricao": ""
        }
      ]
    }
  ],
  "criterios_condicionais": [
    {
      "id": "inicio_antes_12",
      "letra": "B",
      "rotulo": "Sintomas presentes antes dos 12 anos",
      "descricao_completa": "Vários sintomas de desatenção ou hiperatividade-impulsividade estavam presentes antes dos 12 anos de idade.",
      "obrigatorio": true
    },
    {
      "id": "dois_ou_mais_ambientes",
      "letra": "C",
      "rotulo": "Sintomas em dois ou mais ambientes",
      "descricao_completa": "Vários sintomas de desatenção ou hiperatividade-impulsividade estão presentes em dois ou mais ambientes (ex: em casa, na escola, no trabalho; com amigos ou parentes).",
      "obrigatorio": true
    },
    {
      "id": "prejuizo_social_tdah",
      "letra": "D",
      "rotulo": "Interferência ou redução da qualidade do funcionamento",
      "descricao_completa": "Há evidências claras de que os sintomas interferem no funcionamento social, acadêmico ou profissional ou reduzem sua qualidade.",
      "obrigatorio": true
    },
    {
      "id": "exclusao_psicotico",
      "letra": "E",
      "rotulo": "Sintomas não explicados por outro transtorno",
      "descricao_completa": "Os sintomas não ocorrem exclusivamente durante o curso de esquizofrenia ou outro transtorno psicótico e não são mais bem explicados por outro transtorno mental.",
      "obrigatorio": true
    }
  ],
  "gravidade": {
    "tipo": "ordinal_simples",
    "presente": true,
    "has_formal_severity": true,
    "regra_atribuicao": "Baseado no número de sintomas acima do limiar clínico e na intensidade do prejuízo funcional.",
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
      "id": "academico",
      "label": "Funcionamento Acadêmico/Aprendizado"
    },
    {
      "id": "laboral",
      "label": "Funcionamento Profissional"
    },
    {
      "id": "social",
      "label": "Relações Interpessoais e Familiares"
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno Opositor Desafiante",
      "frequencia": "alta",
      "nota": "Ocorre em aproximadamente 50% das crianças com apresentação combinada."
    },
    {
      "condicao": "Transtorno da Conduta",
      "frequencia": "moderada",
      "nota": "Associação significativa em crianças, elevando risco de transtorno da personalidade antissocial."
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno Opositor Desafiante",
      "ponto_distincao": "A aversão a tarefas no TDAH é motivada por cansaço mental e distração, enquanto no TOD é por hostilidade atitude opositora direta.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtornos de Ansiedade",
      "ponto_distincao": "A desatenção na ansiedade decorre de preocupações e medos, não de déficits atencionais primários permanentes.",
      "pertence_a_classe": false
    }
  ],
  "perguntas_chave": [],
  "key_questions": [],
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Infância (antes dos 12 anos)",
    "trajetoria": "A hiperatividade física costuma declinar com a idade cronológica, transformando-se em inquietude subjetiva interna na adolescência e idade adulta, enquanto os sintomas de desatenção costumam persistir de forma crônica.",
    "prognostico": "Elevado risco de abandono acadêmico, instabilidade profissional e dificuldades de relacionamento se não tratado precocemente."
  },
  "prevalencia": {
    "populacao_geral": "Aproximadamente 5% das crianças e 2,5% dos adultos na maioria das culturas.",
    "proporcao_sexo": "Mais comum em indivíduos do sexo masculino, com uma proporção de cerca de 2:1 em crianças e 1,6:1 em adultos.",
    "variacoes_culturais": "None",
    "notas": "Prevalência constante entre diferentes países e culturas se aplicados os mesmos critérios diagnósticos estritos."
  },
  "hierarquia": {
    "presente": false,
    "notas": "None",
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": []
  },
  "subtipos": {
    "presente": true,
    "itens": [
      true,
      "Apresentação Clínica",
      true,
      [
        {
          "id": "apresentacao_combinada",
          "codigo": {
            "dsm5": "314.01",
            "cid10": "F90.2",
            "cid11": null
          },
          "label": "Apresentação combinada",
          "descricao": "Se tanto o Critério A1 (desatenção) quanto o Critério A2 (hiperatividade-impulsividade) forem preenchidos nos últimos 6 meses.",
          "sintomas_caracteristicos": []
        },
        {
          "id": "apresentacao_predominantemente_desatenta",
          "codigo": {
            "dsm5": "314.00",
            "cid10": "F90.0",
            "cid11": null
          },
          "label": "Apresentação predominantemente desatenta",
          "descricao": "Se o Critério A1 (desatenção) for preenchido, mas o Critério A2 (hiperatividade-impulsividade) não for preenchido nos últimos 6 meses.",
          "sintomas_caracteristicos": []
        },
        {
          "id": "apresentacao_predominantemente_hiperativa_impulsiva",
          "codigo": {
            "dsm5": "314.01",
            "cid10": "F90.1",
            "cid11": null
          },
          "label": "Apresentação predominantemente hiperativa/impulsiva",
          "descricao": "Se o Critério A2 (hiperatividade-impulsividade) for preenchido, mas o Critério A1 (desatenção) não for preenchido nos últimos 6 meses.",
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
      "id": "em_remissao_parcial",
      "nome": "Em remissão parcial",
      "descricao": ""
    }
  ],
  "template_prontuario": {
    "titulo": "",
    "texto": "",
    "campos": []
  },
  "metadados_globais": {
    "fonte_capitulo_md": "01_transtornos_neurodesenvolvimento.md",
    "fonte_inventario_md": "inventario/01_inventario.md",
    "data_extracao": "2026-05-21",
    "modelo_agente": "antigravity-ide",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "revisao_humana_necessaria": false,
    "notas_agente_globais": null
  },
  "instrumentos_complementares": [
    {
      "nome": "Questionário de Sintomas de TDAH SNAP-IV",
      "sigla": "SNAP-IV",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Escala de TDAH para Adultos ASRS-v1.1",
      "sigla": "ASRS-v1.1",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ],
  "raw_document": {
    "$schema_version": "1.0.0",
    "meta": {
      "id": "transtorno_deficit_atencao_hiperatividade",
      "nome_completo": "Transtorno de Déficit de Atenção/Hiperatividade",
      "sigla": "TDAH",
      "capitulo_id": "01",
      "capitulo": "Transtornos do Neurodesenvolvimento",
      "grupo": "Transtorno de Déficit de Atenção/Hiperatividade",
      "versao_complementar_existe": false,
      "sinonimos_historicos": [
        "Instabilidade Psicomotora",
        "Disfunção Cerebral Mínima"
      ],
      "faixa_etaria_alvo": "ambos",
      "codigo": {
        "cid10": "F90.2",
        "cid11": "6A05",
        "dsm5": "314.01"
      }
    },
    "id": "transtorno_deficit_atencao_hiperatividade",
    "item_id": "transtorno_deficit_atencao_hiperatividade",
    "name": "Transtorno de Déficit de Atenção/Hiperatividade",
    "nome_completo": "Transtorno de Déficit de Atenção/Hiperatividade",
    "chapter_id": "01",
    "chapter_name": "Transtornos do Neurodesenvolvimento",
    "category": "FULL",
    "estrutura_diagnostica": "polythetic_clusters_simetricos",
    "estrutura_geral": "polythetic_clusters_simetricos",
    "ui_mode": "structured_full",
    "severity_type": "ordinal_simples",
    "has_formal_severity": true,
    "render_structured_interview": true,
    "diagnostic_rule": "",
    "clusters_sintomas": [
      {
        "id": "A1",
        "nome": "Sintomas de Desatenção",
        "descricao": "",
        "sintomas": [
          {
            "id": "A1a",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A1b",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A1c",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A1d",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A1e",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A1f",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A1g",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A1h",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A1i",
            "texto": "",
            "descricao": ""
          }
        ]
      },
      {
        "id": "A2",
        "nome": "Sintomas de Hiperatividade e Impulsividade",
        "descricao": "",
        "sintomas": [
          {
            "id": "A2a",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A2b",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A2c",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A2d",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A2e",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A2f",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A2g",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A2h",
            "texto": "",
            "descricao": ""
          },
          {
            "id": "A2i",
            "texto": "",
            "descricao": ""
          }
        ]
      }
    ],
    "criterios_condicionais": [
      {
        "id": "inicio_antes_12",
        "letra": "B",
        "rotulo": "Sintomas presentes antes dos 12 anos",
        "descricao_completa": "Vários sintomas de desatenção ou hiperatividade-impulsividade estavam presentes antes dos 12 anos de idade.",
        "obrigatorio": true
      },
      {
        "id": "dois_ou_mais_ambientes",
        "letra": "C",
        "rotulo": "Sintomas em dois ou mais ambientes",
        "descricao_completa": "Vários sintomas de desatenção ou hiperatividade-impulsividade estão presentes em dois ou mais ambientes (ex: em casa, na escola, no trabalho; com amigos ou parentes).",
        "obrigatorio": true
      },
      {
        "id": "prejuizo_social_tdah",
        "letra": "D",
        "rotulo": "Interferência ou redução da qualidade do funcionamento",
        "descricao_completa": "Há evidências claras de que os sintomas interferem no funcionamento social, acadêmico ou profissional ou reduzem sua qualidade.",
        "obrigatorio": true
      },
      {
        "id": "exclusao_psicotico",
        "letra": "E",
        "rotulo": "Sintomas não explicados por outro transtorno",
        "descricao_completa": "Os sintomas não ocorrem exclusivamente durante o curso de esquizofrenia ou outro transtorno psicótico e não são mais bem explicados por outro transtorno mental.",
        "obrigatorio": true
      }
    ],
    "gravidade": {
      "tipo": "ordinal_simples",
      "presente": true,
      "has_formal_severity": true,
      "regra_atribuicao": "Baseado no número de sintomas acima do limiar clínico e na intensidade do prejuízo funcional.",
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
        "id": "academico",
        "label": "Funcionamento Acadêmico/Aprendizado"
      },
      {
        "id": "laboral",
        "label": "Funcionamento Profissional"
      },
      {
        "id": "social",
        "label": "Relações Interpessoais e Familiares"
      }
    ],
    "comorbidades_frequentes": [
      {
        "condicao": "Transtorno Opositor Desafiante",
        "frequencia": "alta",
        "nota": "Ocorre em aproximadamente 50% das crianças com apresentação combinada."
      },
      {
        "condicao": "Transtorno da Conduta",
        "frequencia": "moderada",
        "nota": "Associação significativa em crianças, elevando risco de transtorno da personalidade antissocial."
      }
    ],
    "diagnostico_diferencial": [
      {
        "condicao": "Transtorno Opositor Desafiante",
        "ponto_distincao": "A aversão a tarefas no TDAH é motivada por cansaço mental e distração, enquanto no TOD é por hostilidade atitude opositora direta.",
        "pertence_a_classe": false
      },
      {
        "condicao": "Transtornos de Ansiedade",
        "ponto_distincao": "A desatenção na ansiedade decorre de preocupações e medos, não de déficits atencionais primários permanentes.",
        "pertence_a_classe": false
      }
    ],
    "perguntas_chave": [],
    "key_questions": [],
    "curso_desenvolvimento": {
      "idade_inicio_tipica": "Infância (antes dos 12 anos)",
      "trajetoria": "A hiperatividade física costuma declinar com a idade cronológica, transformando-se em inquietude subjetiva interna na adolescência e idade adulta, enquanto os sintomas de desatenção costumam persistir de forma crônica.",
      "prognostico": "Elevado risco de abandono acadêmico, instabilidade profissional e dificuldades de relacionamento se não tratado precocemente."
    },
    "prevalencia": {
      "populacao_geral": "Aproximadamente 5% das crianças e 2,5% dos adultos na maioria das culturas.",
      "proporcao_sexo": "Mais comum em indivíduos do sexo masculino, com uma proporção de cerca de 2:1 em crianças e 1,6:1 em adultos.",
      "variacoes_culturais": "None",
      "notas": "Prevalência constante entre diferentes países e culturas se aplicados os mesmos critérios diagnósticos estritos."
    },
    "hierarquia": {
      "presente": false,
      "notas": "None",
      "exclui_se_diagnosticado": [],
      "exclui_diagnostico_de": []
    },
    "subtipos": {
      "presente": true,
      "itens": [
        true,
        "Apresentação Clínica",
        true,
        [
          {
            "id": "apresentacao_combinada",
            "codigo": {
              "dsm5": "314.01",
              "cid10": "F90.2",
              "cid11": null
            },
            "label": "Apresentação combinada",
            "descricao": "Se tanto o Critério A1 (desatenção) quanto o Critério A2 (hiperatividade-impulsividade) forem preenchidos nos últimos 6 meses.",
            "sintomas_caracteristicos": []
          },
          {
            "id": "apresentacao_predominantemente_desatenta",
            "codigo": {
              "dsm5": "314.00",
              "cid10": "F90.0",
              "cid11": null
            },
            "label": "Apresentação predominantemente desatenta",
            "descricao": "Se o Critério A1 (desatenção) for preenchido, mas o Critério A2 (hiperatividade-impulsividade) não for preenchido nos últimos 6 meses.",
            "sintomas_caracteristicos": []
          },
          {
            "id": "apresentacao_predominantemente_hiperativa_impulsiva",
            "codigo": {
              "dsm5": "314.01",
              "cid10": "F90.1",
              "cid11": null
            },
            "label": "Apresentação predominantemente hiperativa/impulsiva",
            "descricao": "Se o Critério A2 (hiperatividade-impulsividade) for preenchido, mas o Critério A1 (desatenção) não for preenchido nos últimos 6 meses.",
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
        "id": "em_remissao_parcial",
        "nome": "Em remissão parcial",
        "descricao": ""
      }
    ],
    "template_prontuario": {
      "titulo": "",
      "texto": "",
      "campos": []
    },
    "metadados_globais": {
      "fonte_capitulo_md": "01_transtornos_neurodesenvolvimento.md",
      "fonte_inventario_md": "inventario/01_inventario.md",
      "data_extracao": "2026-05-21",
      "modelo_agente": "antigravity-ide",
      "lacunas_globais": [],
      "inconsistencias_detectadas": [],
      "revisao_humana_necessaria": false,
      "notas_agente_globais": null
    },
    "instrumentos_complementares": [
      {
        "nome": "Questionário de Sintomas de TDAH SNAP-IV",
        "sigla": "SNAP-IV",
        "uso": "triagem",
        "obrigatorio_para_diagnostico": false,
        "fonte": "sugestao_clinica_padrao"
      },
      {
        "nome": "Escala de TDAH para Adultos ASRS-v1.1",
        "sigla": "ASRS-v1.1",
        "uso": "triagem",
        "obrigatorio_para_diagnostico": false,
        "fonte": "sugestao_clinica_padrao"
      }
    ],
    "raw_document": {
      "$schema_version": "1.0.0",
      "meta": {
        "id": "transtorno_deficit_atencao_hiperatividade",
        "nome_completo": "Transtorno de Déficit de Atenção/Hiperatividade",
        "sigla": "TDAH",
        "codigo": {
          "dsm5": "314.01",
          "cid10": "F90.2",
          "cid11": "6A05"
        },
        "capitulo": "Transtornos do Neurodesenvolvimento",
        "capitulo_id": "01",
        "grupo": "Transtorno de Déficit de Atenção/Hiperatividade",
        "faixa_etaria_alvo": "ambos",
        "versao_complementar_existe": false,
        "sinonimos_historicos": [
          "Instabilidade Psicomotora",
          "Disfunção Cerebral Mínima"
        ]
      },
      "estrutura_geral": "polythetic_clusters_simetricos",
      "clusters_sintomas": [
        {
          "id": "A1",
          "nome": "Sintomas de Desatenção",
          "tipo": "polythetic_com_limiar",
          "limiar": {
            "adulto": 5,
            "pediatria": 6
          },
          "ancora_obrigatoria": null,
          "sintomas": [
            {
              "id": "A1a",
              "rotulo": "Erros por descuido ou falta de atenção a detalhes",
              "desc": "Frequentemente deixa de prestar atenção a detalhes ou comete erros por descuido em atividades escolares, no trabalho ou durante outras atividades.",
              "pergunta": "Você costuma cometer erros bobos por distração no trabalho ou estudos, ou deixar passar detalhes importantes em tarefas longas?",
              "exemplos_clinicos": [
                "Ignorar instruções em testes e errar perguntas fáceis",
                "Trabalho impreciso com dados incorretos por pura distração"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A1b",
              "rotulo": "Dificuldade em manter a atenção",
              "desc": "Frequentemente tem dificuldade em manter a atenção em tarefas ou atividades lúdicas (ex: palestras, conversas, leituras longas).",
              "pergunta": "Fica muito difícil se concentrar em conversas demoradas, aulas ou leituras de textos extensos sem que sua mente divague?",
              "exemplos_clinicos": [
                "Perder o foco rapidamente durante reuniões de 30 minutos",
                "Não conseguir concluir um livro simples por dispersão"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A1c",
              "rotulo": "Parece não escutar quando se fala diretamente",
              "desc": "Frequentemente parece não escutar quando alguém lhe dirige a palavra diretamente, com a mente parecendo estar em outro lugar.",
              "pergunta": "As pessoas costumam reclamar que chamam você ou falam diretamente com você e você parece estar 'no mundo da lua'?",
              "exemplos_clinicos": [
                "Não ouvir quando o cônjuge fala na mesma sala",
                "Necessitar que repitam instruções dadas individualmente"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A1d",
              "rotulo": "Não segue instruções e não termina tarefas",
              "desc": "Frequentemente não segue instruções até o fim e deixa de concluir tarefas escolares, tarefas domésticas ou deveres no trabalho.",
              "pergunta": "Você costuma iniciar projetos ou tarefas com muito entusiasmo, mas acaba deixando-os pela metade por cansaço ou perda de interesse?",
              "exemplos_clinicos": [
                "Deixar relatórios profissionais sem a conclusão",
                "Não seguir receitas de cozinha até o fim, pulando etapas"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A1e",
              "rotulo": "Dificuldade para organizar tarefas e atividades",
              "desc": "Frequentemente tem dificuldade para organizar tarefas e atividades (ex: gerenciar materiais, organizar tempo, cumprir prazos).",
              "pergunta": "Como é a sua capacidade de organizar sua rotina, gerenciar o tempo, prazos e manter seu espaço de trabalho arrumado?",
              "exemplos_clinicos": [
                "Perder prazos profissionais frequentemente por desorganização",
                "Mesa de trabalho extremamente bagunçada de forma crônica"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A1f",
              "rotulo": "Evita tarefas que exigem esforço mental prolongado",
              "desc": "Frequentemente evita, antipatiza ou reluta em envolver-se em tarefas que exijam esforço mental prolongado.",
              "pergunta": "Você costuma procrastinar ou adiar tarefas longas que exigem muito raciocínio e atenção, como relatórios ou burocracias?",
              "exemplos_clinicos": [
                "Adiar o preenchimento de impostos até o último dia",
                "Crianças que se recusam enfaticamente a fazer a lição de casa"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A1g",
              "rotulo": "Perde coisas necessárias para tarefas ou atividades",
              "desc": "Frequentemente perde objetos necessários para tarefas ou atividades (ex: materiais escolares, carteira, chaves, óculos, celulares).",
              "pergunta": "Você perde chaves, celular, documentos ou ferramentas de trabalho com uma frequência muito maior do que as outras pessoas?",
              "exemplos_clinicos": [
                "Passar horas procurando chaves ou celular perdidos pela casa",
                "Esquecer objetos pessoais em táxis ou restaurantes"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A1h",
              "rotulo": "Facilmente distraído por estímulos externos",
              "desc": "Frequentemente é facilmente distraído por estímulos externos (inclusive pensamentos não relacionados em adultos).",
              "pergunta": "Qualquer barulho na rua ou passagem de uma pessoa na sala de trabalho faz você perder a concentração no que estava fazendo?",
              "exemplos_clinicos": [
                "Olhar pela janela a cada ruído",
                "Dispersar o raciocínio no meio de um relatório por causa de um email que chegou"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A1i",
              "rotulo": "Esquecido em atividades diárias",
              "desc": "Frequentemente é esquecido em atividades diárias (ex: tarefas domésticas, pagar contas, manter compromissos).",
              "pergunta": "Você costuma esquecer compromissos marcados, aniversários importantes ou o pagamento de contas recorrentes no dia a dia?",
              "exemplos_clinicos": [
                "Pagar juros de contas por esquecimento",
                "Esquecer de levar o almoço para o trabalho"
              ],
              "faixa_aplicavel": null
            }
          ],
          "descricao_qualitativa": "Os sintomas devem persistir por pelo menos 6 meses, em um grau inconsistente com o nível do desenvolvimento e que causa impacto negativo nas atividades sociais e acadêmicas/profissionais.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "A2",
          "nome": "Sintomas de Hiperatividade e Impulsividade",
          "tipo": "polythetic_com_limiar",
          "limiar": {
            "adulto": 5,
            "pediatria": 6
          },
          "ancora_obrigatoria": null,
          "sintomas": [
            {
              "id": "A2a",
              "rotulo": "Remexer-se na cadeira ou batucar mãos/pés",
              "desc": "Frequentemente remexe as mãos ou os pés ou se contorce na cadeira.",
              "pergunta": "Você tem dificuldade em ficar sentado imóvel, movimentando constantemente as pernas ou batucando os dedos na mesa?",
              "exemplos_clinicos": [
                "Balançar as pernas sem parar enquanto trabalha",
                "Batucar caneta na mesa de reuniões de forma irritante"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A2b",
              "rotulo": "Levantar-se quando deveria permanecer sentado",
              "desc": "Frequentemente levanta-se da cadeira em sala de aula ou em outras situações nas quais se espera que permaneça sentado.",
              "pergunta": "Você sente necessidade de se levantar ou caminhar em situações em que deveria ficar sentado, como em reuniões ou cinema?",
              "exemplos_clinicos": [
                "Levantar da mesa de jantar antes de terminar a refeição",
                "Criança que circula pela sala de aula enquanto o professor explica"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A2c",
              "rotulo": "Correr ou subir nas coisas em situações inapropriadas",
              "desc": "Frequentemente corre ou sobe nas coisas em situações em que isso é inapropriado (em adolescentes/adultos pode se limitar a sensações subjetivas de inquietude).",
              "pergunta": "Você sente uma inquietude física interna constante, como se estivesse ligado na tomada, mesmo em momentos de descanso?",
              "exemplos_clinicos": [
                "Criança subindo em estantes de lojas",
                "Adulto com sensação de agitação motora interna insuportável ao tentar relaxar"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A2d",
              "rotulo": "Dificuldade em brincar ou fazer lazer em silêncio",
              "desc": "Frequentemente tem dificuldade para brincar ou envolver-se em atividades de lazer de forma silenciosa.",
              "pergunta": "Acha difícil aproveitar momentos de lazer de forma silenciosa e calma, preferindo atividades mais barulhentas ou ativas?",
              "exemplos_clinicos": [
                "Falar alto demais em ambientes calmos",
                "Crianças que sempre brincam de forma muito barulhenta"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A2e",
              "rotulo": "Inquietude motora extrema e sensação de 'motor ligado'",
              "desc": "Frequentemente está 'a mil' ou age como se estivesse 'ligado por um motor' (incapaz de ficar parado ou desconfortável em jantares/reuniões).",
              "pergunta": "As pessoas já disseram que você parece estar sempre acelerado, ativo demais ou inquieto como se estivesse 'ligado na tomada'?",
              "exemplos_clinicos": [
                "Não conseguir participar de longos jantares de negócios sem inquietude óbvia",
                "Falar rápido demais de forma impaciente"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A2f",
              "rotulo": "Falar em excesso",
              "desc": "Frequentemente fala em excesso.",
              "pergunta": "Você percebe que costuma falar muito mais que as outras pessoas em interações sociais, monopolizando conversas?",
              "exemplos_clinicos": [
                "Dominar as conversas em grupos sociais",
                "Monólogos frequentes sem pausa para ouvir o outro"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A2g",
              "rotulo": "Responder a perguntas antes que sejam concluídas",
              "desc": "Frequentemente deixa escapar uma resposta antes que a pergunta tenha sido concluída ou completa frases dos outros.",
              "pergunta": "Costuma responder às pessoas ou completar as frases delas antes mesmo que elas terminem de fazer a pergunta?",
              "exemplos_clinicos": [
                "Completar de forma impaciente as frases de interlocutores lentos",
                "Responder antes do término da pergunta de um entrevistador"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A2h",
              "rotulo": "Dificuldade em esperar a sua vez",
              "desc": "Frequentemente tem dificuldade para esperar a sua vez (ex: em filas, conversas).",
              "pergunta": "Ficar em filas longas ou esperar sua vez no trânsito ou jogos causa um sofrimento ou impaciência extrema em você?",
              "exemplos_clinicos": [
                "Demonstrar irritação visível em filas de supermercado",
                "Furar a vez em jogos infantis"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A2i",
              "rotulo": "Interromper ou intrometer-se nas atividades alheias",
              "desc": "Frequentemente interrompe ou se intromete em conversas, jogos ou atividades de outros, podendo usar coisas dos outros sem pedir.",
              "pergunta": "Você costuma se meter em conversas de colegas de trabalho ou jogos alheios de forma intrusiva?",
              "exemplos_clinicos": [
                "Criança que invade a brincadeira de outras sem ser convidada",
                "Interromper a fala de colegas de escritório para colocar sua opinião"
              ],
              "faixa_aplicavel": null
            }
          ],
          "descricao_qualitativa": "Os sintomas devem persistir por pelo menos 6 meses de forma desadaptativa.",
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
          "id": "inicio_antes_12",
          "letra": "B",
          "rotulo": "Sintomas presentes antes dos 12 anos",
          "tipo": "temporal_idade_inicio",
          "ui_widget": "toggle_simples",
          "obrigatorio": true,
          "icone_fa": "fa-baby-carriage",
          "ddx_sugeridos": [],
          "descricao_completa": "Vários sintomas de desatenção ou hiperatividade-impulsividade estavam presentes antes dos 12 anos de idade.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "dois_ou_mais_ambientes",
          "letra": "C",
          "rotulo": "Sintomas em dois ou mais ambientes",
          "tipo": "temporal_idade_inicio",
          "ui_widget": "toggle_simples",
          "obrigatorio": true,
          "icone_fa": "fa-map-marker-alt",
          "ddx_sugeridos": [],
          "descricao_completa": "Vários sintomas de desatenção ou hiperatividade-impulsividade estão presentes em dois ou mais ambientes (ex: em casa, na escola, no trabalho; com amigos ou parentes).",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "prejuizo_social_tdah",
          "letra": "D",
          "rotulo": "Interferência ou redução da qualidade do funcionamento",
          "tipo": "temporal_idade_inicio",
          "ui_widget": "toggle_simples",
          "obrigatorio": true,
          "icone_fa": "fa-graduation-cap",
          "ddx_sugeridos": [],
          "descricao_completa": "Há evidências claras de que os sintomas interferem no funcionamento social, acadêmico ou profissional ou reduzem sua qualidade.",
          "metadados": {
            "completo": true,
            "lacunas": [],
            "notas_agente": null,
            "fonte_passada_1": true
          }
        },
        {
          "id": "exclusao_psicotico",
          "letra": "E",
          "rotulo": "Sintomas não explicados por outro transtorno",
          "tipo": "temporal_idade_inicio",
          "ui_widget": "toggle_simples",
          "obrigatorio": true,
          "icone_fa": "fa-ban",
          "ddx_sugeridos": [
            "esquizofrenia",
            "transtorno_bipolar_tipo_1"
          ],
          "descricao_completa": "Os sintomas não ocorrem exclusivamente durante o curso de esquizofrenia ou outro transtorno psicótico e não são mais bem explicados por outro transtorno mental.",
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
        "nome": "Apresentação Clínica",
        "mutuamente_exclusivos": true,
        "subtipos": [
          {
            "id": "apresentacao_combinada",
            "codigo": {
              "dsm5": "314.01",
              "cid10": "F90.2",
              "cid11": null
            },
            "label": "Apresentação combinada",
            "descricao": "Se tanto o Critério A1 (desatenção) quanto o Critério A2 (hiperatividade-impulsividade) forem preenchidos nos últimos 6 meses.",
            "sintomas_caracteristicos": []
          },
          {
            "id": "apresentacao_predominantemente_desatenta",
            "codigo": {
              "dsm5": "314.00",
              "cid10": "F90.0",
              "cid11": null
            },
            "label": "Apresentação predominantemente desatenta",
            "descricao": "Se o Critério A1 (desatenção) for preenchido, mas o Critério A2 (hiperatividade-impulsividade) não for preenchido nos últimos 6 meses.",
            "sintomas_caracteristicos": []
          },
          {
            "id": "apresentacao_predominantemente_hiperativa_impulsiva",
            "codigo": {
              "dsm5": "314.01",
              "cid10": "F90.1",
              "cid11": null
            },
            "label": "Apresentação predominantemente hiperativa/impulsiva",
            "descricao": "Se o Critério A2 (hiperatividade-impulsividade) for preenchido, mas o Critério A1 (desatenção) não for preenchido nos últimos 6 meses.",
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
          "id": "em_remissao_parcial",
          "nome": "Em remissão parcial",
          "tipo": "booleano",
          "ortogonal": true,
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
        "tipo": "ordinal_simples",
        "niveis": [
          {
            "id": "leve",
            "label": "Leve",
            "descritor": "Poucos, se algum, sintomas além daqueles necessários para o diagnóstico estão presentes, e os sintomas resultam em não mais do que prejuízos mínimos no funcionamento social ou profissional."
          },
          {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "Sintomas ou prejuízo funcional entre 'leve' e 'grave' estão presentes."
          },
          {
            "id": "grave",
            "label": "Grave",
            "descritor": "Muitos sintomas além daqueles necessários para o diagnóstico estão presentes, ou vários sintomas que são particularmente graves estão presentes, ou os sintomas resultam em prejuízo social, acadêmico ou profissional acentuado."
          }
        ],
        "regra_atribuicao": "Baseado no número de sintomas acima do limiar clínico e na intensidade do prejuízo funcional.",
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
          "id": "academico",
          "label": "Funcionamento Acadêmico/Aprendizado",
          "icone_fa": "fa-school",
          "relevante_para": "ambos"
        },
        {
          "id": "laboral",
          "label": "Funcionamento Profissional",
          "icone_fa": "fa-laptop",
          "relevante_para": "adulto"
        },
        {
          "id": "social",
          "label": "Relações Interpessoais e Familiares",
          "icone_fa": "fa-heart",
          "relevante_para": "ambos"
        }
      ],
      "diagnostico_diferencial": [
        {
          "condicao": "Transtorno Opositor Desafiante",
          "ponto_distincao": "A aversão a tarefas no TDAH é motivada por cansaço mental e distração, enquanto no TOD é por hostilidade atitude opositora direta.",
          "pertence_a_classe": false
        },
        {
          "condicao": "Transtornos de Ansiedade",
          "ponto_distincao": "A desatenção na ansiedade decorre de preocupações e medos, não de déficits atencionais primários permanentes.",
          "pertence_a_classe": false
        }
      ],
      "comorbidades_frequentes": [
        {
          "condicao": "Transtorno Opositor Desafiante",
          "frequencia": "alta",
          "nota": "Ocorre em aproximadamente 50% das crianças com apresentação combinada."
        },
        {
          "condicao": "Transtorno da Conduta",
          "frequencia": "moderada",
          "nota": "Associação significativa em crianças, elevando risco de transtorno da personalidade antissocial."
        }
      ],
      "instrumentos_complementares": [
        {
          "nome": "Questionário de Sintomas de TDAH SNAP-IV",
          "sigla": "SNAP-IV",
          "uso": "triagem",
          "obrigatorio_para_diagnostico": false,
          "fonte": "sugestao_clinica_padrao"
        },
        {
          "nome": "Escala de TDAH para Adultos ASRS-v1.1",
          "sigla": "ASRS-v1.1",
          "uso": "triagem",
          "obrigatorio_para_diagnostico": false,
          "fonte": "sugestao_clinica_padrao"
        }
      ],
      "prevalencia": {
        "populacao_geral": "Aproximadamente 5% das crianças e 2,5% dos adultos na maioria das culturas.",
        "proporcao_sexo": "Mais comum em indivíduos do sexo masculino, com uma proporção de cerca de 2:1 em crianças e 1,6:1 em adultos.",
        "variacoes_culturais": null,
        "notas": "Prevalência constante entre diferentes países e culturas se aplicados os mesmos critérios diagnósticos estritos.",
        "metadados": {
          "completo": true,
          "lacunas": [
            "prevalencia.variacoes_culturais"
          ],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "curso_desenvolvimento": {
        "idade_inicio_tipica": "Infância (antes dos 12 anos)",
        "trajetoria": "A hiperatividade física costuma declinar com a idade cronológica, transformando-se em inquietude subjetiva interna na adolescência e idade adulta, enquanto os sintomas de desatenção costumam persistir de forma crônica.",
        "prognostico": "Elevado risco de abandono acadêmico, instabilidade profissional e dificuldades de relacionamento se não tratado precocemente.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "template_prontuario": {
        "cabecalho": "### Avaliação Neuropsicológica e Comportamental - TDAH",
        "rodape_metodologico": "Diagnóstico estabelecido com base em escala SNAP-IV/ASRS, histórico escolar, avaliação do desenvolvimento e múltiplos relatos (pais, professores)."
      },
      "metadados_globais": {
        "fonte_capitulo_md": "01_transtornos_neurodesenvolvimento.md",
        "fonte_inventario_md": "inventario/01_inventario.md",
        "data_extracao": "2026-05-21",
        "modelo_agente": "antigravity-ide",
        "lacunas_globais": [],
        "inconsistencias_detectadas": [],
        "revisao_humana_necessaria": false,
        "notas_agente_globais": null
      },
      "id": "transtorno_deficit_atencao_hiperatividade",
      "category": "FULL",
      "ui_mode": "structured_full",
      "render_structured_interview": true,
      "rendering": {
        "estrutura_diagnostica": "polythetic_clusters_simetricos",
        "criteria": [
          "A. Padrao persistente de desatencao e/ou hiperatividade-impulsividade que interfere no funcionome_completonto e desenvolvimento:",
          "B. Varios sintomas de desatencao ou hiperatividade-impulsividade presentes antes dos 12 anos de idade.",
          "C. Varios sintomas presentes em DOIS ou mais ambientes (casa, escola, trabalho, com amigos/parentes).",
          "D. Evidencias claras de que os sintomas interferem no funcionome_completonto social, academico ou profissional, ou reduzem qualidade de vida.",
          "E. Sintomas nao ocorrem exclusivamente durante esquizofrenia ou outro transtorno psicotico, e nao sao melhor explicados por outro transtorno mental."
        ],
        "diagnostic_rule": "(A1 com >=6 sintomas [>=5 para 17+ anos] OU A2 com >=6 sintomas [>=5 para 17+ anos]) + B + C + D + E. Para apresentacao combinada, A1 E A2 ambos preenchidos. Sintomas em mais de 1 ambiente.",
        "clusters": [],
        "duration": null,
        "age_onset": "** Varios sintomas antes dos 12 anos",
        "functional_impairment": "- Interferencia no funcionome_completonto social, academico ou profissional, ou reducao da qualidade de vida",
        "exclusions": [],
        "subtypes_presentations": [],
        "specifiers": [
          "**Em remissao parcial:** Critérios preenchidos no passado, nem todos nos ultimos 6 meses, sintomas ainda causam prejuizo"
        ],
        "operational_profiles": [],
        "severity": {
          "has_formal_severity": true,
          "type": "contagem_sintomas_e_prejuizo",
          "levels": [
            "Grave",
            "Leve",
            "Moderada"
          ],
          "assignment_rule": null,
          "domains": []
        },
        "critical_differentials": [],
        "key_questions": [
          "Ha dificuldade em manter atencao em tarefas? Comete erros por descuido?",
          "Esquece de fazer tarefas, perde objetos, e distraido facilmente?",
          "Tem dificuldade para organizar tarefas e atividades?",
          "Evita tarefas que exigem esforco mental prolongado?",
          "E inquieto, nao consegue ficar parado, remexe maos/pes?",
          "Fala demais, interrompe, tem dificuldade para esperar a vez?",
          "Age impulsivamente (intromete-se, responde antes da pergunta acabar)?",
          "Esses sintomas comecaram antes dos 12 anos?",
          "Estao presentes em pelo menos 2 ambientes (casa, escola, trabalho)?",
          "Causam prejuizo no funcionome_completonto atual?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### Transtorno de Deficit de Atencao/Hiperatividade",
          "patches_applied": []
        },
        "category": "FULL",
        "ui_mode": "structured_full",
        "render_structured_interview": true
      },
      "sigla": "TDAH",
      "codigo_dsm5": "314.01",
      "codigo_cid10": "F90.2",
      "grupo": "Transtorno de Déficit de Atenção/Hiperatividade",
      "faixa_etaria_alvo": "ambos",
      "versao_complementar_existe": false,
      "inventario_clinico": {
        "codigo_bruto": "- **Código DSM-5 / CID-10:** 314.01 (F90.2) Combinado / 314.00 (F90.0) Pred. desatento / 314.01 (F90.1) Pred. hiperativo-impulsivo",
        "estrutura_efetiva": "- **Estrutura efetiva:** **A1** polietético (limiar: 6/9 para crianças até 16a, 5/9 para adultos ≥17a em desatenção) + **A2** polietético (mesmo limiar etário para hiperatividade/impulsividade) + **B** início <12 anos + **C** presente em ≥2 contextos + **D** prejuízo funcional + **E** exclusão de outras causas.",
        "notas_clinicas": "- **Notas:** 18 sintomas totais (9+9). Remissão parcial possível. Prevalência ~5% crianças, ~2,5% adultos."
      },
      "codigo_cid11": "6A05",
      "super_enrichment": {
        "id": "transtorno_deficit_atencao_hiperatividade",
        "nome_original": "Transtorno de Deficit de Atencao/Hiperatividade",
        "comorbidades_frequentes": [
          {
            "condicao": "Transtorno Opositor Desafiante",
            "frequencia": "alta",
            "nota": "Ocorre em aproximadamente 50% das crianças com apresentação combinada."
          },
          {
            "condicao": "Transtorno da Conduta",
            "frequencia": "moderada",
            "nota": "Associação significativa em crianças, elevando risco de transtorno da personalidade antissocial."
          }
        ],
        "diagnostico_diferencial": [
          {
            "condicao": "Transtorno Opositor Desafiante",
            "ponto_distincao": "A aversão a tarefas no TDAH é motivada por cansaço mental e distração, enquanto no TOD é por hostilidade atitude opositora direta.",
            "pertence_a_classe": false
          },
          {
            "condicao": "Transtornos de Ansiedade",
            "ponto_distincao": "A desatenção na ansiedade decorre de preocupações e medos, não de déficits atencionais primários permanentes.",
            "pertence_a_classe": false
          }
        ],
        "hierarquia": {
          "presente": false,
          "exclui_se_diagnosticado": [],
          "exclui_diagnostico_de": [],
          "notas": ""
        },
        "prevalencia": {
          "populacao_geral": "Aproximadamente 5% das crianças e 2,5% dos adultos na maioria das culturas.",
          "proporcao_sexo": "Mais comum em indivíduos do sexo masculino, com uma proporção de cerca de 2:1 em crianças e 1,6:1 em adultos.",
          "variacoes_culturais": null
        },
        "curso_desenvolvimento": {
          "idade_inicio_tipica": "Infância (antes dos 12 anos)",
          "trajetoria": "A hiperatividade física costuma declinar com a idade cronológica, transformando-se em inquietude subjetiva interna na adolescência e idade adulta, enquanto os sintomas de desatenção costumam persistir de forma crônica.",
          "prognostico": "Elevado risco de abandono acadêmico, instabilidade profissional e dificuldades de relacionamento se não tratado precocemente."
        },
        "instrumentos_complementares": [
          {
            "nome": "Questionário de Sintomas de TDAH SNAP-IV",
            "sigla": "SNAP-IV",
            "uso": "triagem",
            "obrigatorio_para_diagnostico": false,
            "fonte": "sugestao_clinica_padrao"
          },
          {
            "nome": "Escala de TDAH para Adultos ASRS-v1.1",
            "sigla": "ASRS-v1.1",
            "uso": "triagem",
            "obrigatorio_para_diagnostico": false,
            "fonte": "sugestao_clinica_padrao"
          }
        ],
        "transtorno_de_deficit_de_atencao_hiperatividade": "| Campo | Conteudo |\n|-------|----------|\n| **codigo_dsm5** | 314.01 (F90.2) Combinada / 314.00 (F90.0) Pred. Desatenta / 314.01 (F90.1) Pred. Hiperativa |\n| **categoria_operacional** | FULL |\n| **estrutura_diagnostica** | polythetic_clusters_simetricos |",
        "criterios_obrigatorios": [
          {
            "id": "completo",
            "texto": "**A.** Padrao persistente de desatencao e/ou hiperatividade-impulsividade que interfere no funcionamento e desenvolvimento:\n\n**A1. DESATENCAO:** Seis (ou mais) dos seguintes sintomas por pelo menos 6 meses, em grau inconsistente com nivel de desenvolvimento e com impacto negativo direto:\n\nNota: Para adolescentes e adultos (17+ anos), pelo menos 5 sintomas.\nNota: Sintomas nao sao apenas manifestacao de comportamento opositor.\n\n| # | Sintoma |\n|---|---------|\n| a | Nao presta atencao em detalhes ou comete erros por descuido em tarefas escolares, trabalho ou outras atividades |\n| b | Dificuldade de manter atencao em tarefas ou atividades ludicas |\n| c | Parece nao escutar quando alguem lhe dirige a palavra diretamente |\n| d | Nao segue instrucoes ate o fim e nao consegue terminar trabalhos/tarefas/deveres |\n| e | Dificuldade para organizar tarefas e atividades |\n| f | Evita, nao gosta ou reluta em se envolver em tarefas que exijam esforco mental prolongado |\n| g | Perde coisas necessarias para tarefas ou atividades |\n| h | Facilmente distraido por estimulos externos (ou pensamentos nao relacionados, em adultos) |\n| i | Esquecido em relacao a atividades cotidianas |\n\n**A2. HIPERATIVIDADE-IMPULSIVIDADE:** Seis (ou mais) dos seguintes sintomas por pelo menos 6 meses, em grau inconsistente com nivel de desenvolvimento e com impacto negativo direto:\n\nNota: Para adolescentes e adultos (17+ anos), pelo menos 5 sintomas.\n\n| # | Sintoma |\n|---|---------|\n| a | Remexe ou batuca maos/pes ou se contorce na cadeira |\n| b | Levanta da cadeira em situacoes em que se espera que permaneca sentado |\n| c | Corre ou sobe nas coisas em situacoes inapropriadas (adolescentes/adultos: sensacao de inquietude) |\n| d | Incapaz de brincar ou se envolver em atividades de lazer calmamente |\n| e | \"Nao para\", age como se estivesse \"com o motor ligado\" |\n| f | Fala demais |\n| g | Deixa escapar resposta antes da pergunta ser concluida |\n| h | Dificuldade para esperar sua vez |\n| i | Interrompe ou se intromete em conversas, jogos, atividades; usa coisas de outros sem permissao |\n\n**B.** Varios sintomas de desatencao ou hiperatividade-impulsividade presentes antes dos 12 anos de idade.\n\n**C.** Varios sintomas presentes em DOIS ou mais ambientes (casa, escola, trabalho, com amigos/parentes).\n\n**D.** Evidencias claras de que os sintomas interferem no funcionamento social, academico ou profissional, ou reduzem qualidade de vida.\n\n**E.** Sintomas nao ocorrem exclusivamente durante esquizofrenia ou outro transtorno psicotico, e nao sao melhor explicados por outro transtorno mental."
          }
        ],
        "regra_diagnostica": "(A1 com >=6 sintomas [>=5 para 17+ anos] OU A2 com >=6 sintomas [>=5 para 17+ anos]) + B + C + D + E. Para apresentacao combinada, A1 E A2 ambos preenchidos. Sintomas em mais de 1 ambiente.",
        "subtipos": [
          {
            "Apresentacao": "Combinada",
            "Regra": "A1 (desatencao) E A2 (hiperatividade) preenchidos nos ultimos 6 meses",
            "Codigo": "314.01 (F90.2)"
          },
          {
            "Apresentacao": "Predominantemente Desatenta",
            "Regra": "A1 preenchido, A2 NAO preenchido",
            "Codigo": "314.00 (F90.0)"
          },
          {
            "Apresentacao": "Predominantemente Hiperativa/Impulsiva",
            "Regra": "A2 preenchido, A1 NAO preenchido",
            "Codigo": "314.01 (F90.1)"
          }
        ],
        "especificadores": [
          "Em remissao parcial:"
        ],
        "clusters": "| Cluster | Itens | Limiar | Nota |\n|---------|-------|--------|------|\n| Desatencao | a-i (9 sintomas) | >=6 (>=5 para 17+) | Pelo menos 1 cluster obrigatorio |\n| Hiperatividade-Impulsividade | a-i (9 sintomas) | >=6 (>=5 para 17+) | Pelo menos 1 cluster obrigatorio |",
        "duracao_idade_prejuizo": {
          "notas": [
            "**Duracao sintomas:** Pelo menos 6 meses",
            "**Idade de inicio:** Varios sintomas antes dos 12 anos",
            "**Ambientes:** 2 ou mais"
          ]
        },
        "prejuizo_funcional": "- Interferencia no funcionamento social, academico ou profissional, ou reducao da qualidade de vida",
        "gravidade": {
          "tem_gravidade_formal": "SIM",
          "tipo": "contagem_sintomas_e_prejuizo",
          "leve": "Poucos sintomas alem dos necessarios para o diagnostico; prejuizos pequenos no funcionamento",
          "moderada": "Sintomas ou prejuizo entre leve e grave",
          "grave": "Muitos sintomas alem dos necessarios; varios sintomas particularmente graves; ou prejuizo acentuado no funcionamento"
        },
        "diferenciais_criticos": [
          "**Transtorno de oposicao desafiante:** Negatividade/hostilidade vs. dificuldade em manter esforco mental",
          "**Transtorno do espectro autista:** Diferenciar desatencao do TDAH de falta de envolvimento social/isolamento do TEA",
          "**Transtornos de ansiedade:** Desatencao por preocupacao/ruminacao (ansiedade) vs. atracao por estimulos externos/novos (TDAH)",
          "**Transtorno bipolar:** Episodico (4+ dias), com humor elevado e grandiosidade; TDAH = cronico, labilidade diaria",
          "**Transtorno depressivo:** Dificuldade de concentracao apenas durante episodio depressivo",
          "**Deficiencia intelectual:** Sintomas de TDAH devem ser excessivos para idade mental",
          "**Transtorno especifico da aprendizagem:** Desatencao no TDAH gera prejuizos fora do academico"
        ],
        "perguntas_chave_entrevista": [
          {
            "numero": 1,
            "texto": "Ha dificuldade em manter atencao em tarefas? Comete erros por descuido?"
          },
          {
            "numero": 2,
            "texto": "Esquece de fazer tarefas, perde objetos, e distraido facilmente?"
          },
          {
            "numero": 3,
            "texto": "Tem dificuldade para organizar tarefas e atividades?"
          },
          {
            "numero": 4,
            "texto": "Evita tarefas que exigem esforco mental prolongado?"
          },
          {
            "numero": 5,
            "texto": "E inquieto, nao consegue ficar parado, remexe maos/pes?"
          },
          {
            "numero": 6,
            "texto": "Fala demais, interrompe, tem dificuldade para esperar a vez?"
          },
          {
            "numero": 7,
            "texto": "Age impulsivamente (intromete-se, responde antes da pergunta acabar)?"
          },
          {
            "numero": 8,
            "texto": "Esses sintomas comecaram antes dos 12 anos?"
          },
          {
            "numero": 9,
            "texto": "Estao presentes em pelo menos 2 ambientes (casa, escola, trabalho)?"
          },
          {
            "numero": 10,
            "texto": "Causam prejuizo no funcionamento atual?"
          }
        ],
        "ui": {}
      },
      "super_enrichment_source": "dsm/output/json_super_adicionado/transtorno_deficit_atencao_hiperatividade.json",
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
