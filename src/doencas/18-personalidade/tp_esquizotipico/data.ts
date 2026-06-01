import { TranstornoDSMSchema, type TranstornoDSM } from "@/infra/schemas/dsm-schemas";
import { parseGeneratedDiseaseData } from "@/infra/validation-helpers";

// Dados brutos normalizados da release DSM operacional
const rawData = {
  "$schema_version": "1.0.0",
  "meta": {
    "id": "tp_esquizotipico",
    "nome_completo": "Transtorno da Personalidade Esquizotípica",
    "sigla": "TPET",
    "capitulo_id": "18",
    "capitulo": "Transtornos da Personalidade",
    "grupo": null,
    "versao_complementar_existe": false,
    "sinonimos_historicos": [],
    "faixa_etaria_alvo": "ambos",
    "codigo": {
      "cid10": "F21",
      "cid11": "6A22",
      "dsm5": "301.22"
    }
  },
  "id": "tp_esquizotipico",
  "item_id": "tp_esquizotipico",
  "name": "Transtorno da Personalidade Esquizotípica",
  "nome_completo": "Transtorno da Personalidade Esquizotípica",
  "chapter_id": "18",
  "chapter_name": "Transtornos da Personalidade",
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
      "nome": "Déficits Sociais, Distorções Cognitivas e Excentricidade",
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
      "id": "exclusao_psicotico_autista",
      "letra": "B",
      "rotulo": "Não ocorre exclusivamente durante curso de transtorno psicótico ou TEA",
      "descricao_completa": "Não ocorre exclusivamente durante o curso de esquizofrenia, transtorno bipolar ou depressivo com sintomas psicóticos, outro transtorno psicótico ou transtorno do espectro autista.",
      "obrigatorio": true
    }
  ],
  "gravidade": {
    "tipo": "ordinal_simples",
    "presente": true,
    "has_formal_severity": true,
    "regra_atribuicao": "None",
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
      "id": "trabalho",
      "label": "Desempenho Profissional"
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno Depressivo Maior",
      "frequencia": "alta",
      "nota": "30–50% em contexto clínico"
    },
    {
      "condicao": "Transtornos de ansiedade",
      "frequencia": "moderada",
      "nota": "None"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Esquizofrenia",
      "ponto_distincao": "Esquizofrenia: sintomas psicóticos persistentes; esquizotípica: ideias de referência, não delírios firmes.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno do Espectro Autista",
      "ponto_distincao": "TEA: maior comprometimento da reciprocidade social, comportamentos estereotipados.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno da Personalidade Evitativa",
      "ponto_distincao": "Evitativa: deseja relacionamentos mas teme rejeição; esquizotípica: falta de desejo de contatos íntimos.",
      "pertence_a_classe": true
    }
  ],
  "perguntas_chave": [],
  "key_questions": [],
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Infância e adolescência",
    "trajetoria": "Relativamente estável; pequena parcela desenvolve esquizofrenia.",
    "prognostico": "Episódios psicóticos breves sob estresse."
  },
  "prevalencia": {
    "populacao_geral": "0,6% a 3,9%",
    "proporcao_sexo": "Pouco mais comum no sexo masculino",
    "variacoes_culturais": "Crenças religiosas culturalmente aceitas não devem ser consideradas esquizotípicas.",
    "notas": "None"
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
    "fonte_capitulo_md": "18_transtornos_personalidade.md",
    "fonte_inventario_md": null,
    "data_extracao": "2026-05-31",
    "modelo_agente": "claude-opus-4-7",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "instrumentos_complementares": [],
  "raw_document": {
    "$schema_version": "1.0.0",
    "meta": {
      "id": "tp_esquizotipico",
      "nome_completo": "Transtorno da Personalidade Esquizotípica",
      "sigla": "TPET",
      "capitulo_id": "18",
      "capitulo": "Transtornos da Personalidade",
      "grupo": "Cluster A",
      "versao_complementar_existe": false,
      "sinonimos_historicos": [],
      "faixa_etaria_alvo": "adulto",
      "codigo": {
        "cid10": "F21",
        "cid11": "6A22",
        "dsm5": "301.22"
      }
    },
    "id": "tp_esquizotipico",
    "item_id": "tp_esquizotipico",
    "name": "Transtorno da Personalidade Esquizotípica",
    "nome_completo": "Transtorno da Personalidade Esquizotípica",
    "chapter_id": "18",
    "chapter_name": "Transtornos da Personalidade",
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
        "nome": "Déficits Sociais, Distorções Cognitivas e Excentricidade",
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
        "id": "exclusao_psicotico_autista",
        "letra": "B",
        "rotulo": "Não ocorre exclusivamente durante curso de transtorno psicótico ou TEA",
        "descricao_completa": "Não ocorre exclusivamente durante o curso de esquizofrenia, transtorno bipolar ou depressivo com sintomas psicóticos, outro transtorno psicótico ou transtorno do espectro autista.",
        "obrigatorio": true
      }
    ],
    "gravidade": {
      "tipo": "ordinal_simples",
      "presente": true,
      "has_formal_severity": true,
      "regra_atribuicao": "None",
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
        "id": "trabalho",
        "label": "Desempenho Profissional"
      }
    ],
    "comorbidades_frequentes": [
      {
        "condicao": "Transtorno Depressivo Maior",
        "frequencia": "alta",
        "nota": "30–50% em contexto clínico"
      },
      {
        "condicao": "Transtornos de ansiedade",
        "frequencia": "moderada",
        "nota": "None"
      }
    ],
    "diagnostico_diferencial": [
      {
        "condicao": "Esquizofrenia",
        "ponto_distincao": "Esquizofrenia: sintomas psicóticos persistentes; esquizotípica: ideias de referência, não delírios firmes.",
        "pertence_a_classe": false
      },
      {
        "condicao": "Transtorno do Espectro Autista",
        "ponto_distincao": "TEA: maior comprometimento da reciprocidade social, comportamentos estereotipados.",
        "pertence_a_classe": false
      },
      {
        "condicao": "Transtorno da Personalidade Evitativa",
        "ponto_distincao": "Evitativa: deseja relacionamentos mas teme rejeição; esquizotípica: falta de desejo de contatos íntimos.",
        "pertence_a_classe": true
      }
    ],
    "perguntas_chave": [],
    "key_questions": [],
    "curso_desenvolvimento": {
      "idade_inicio_tipica": "Infância e adolescência",
      "trajetoria": "Relativamente estável; pequena parcela desenvolve esquizofrenia.",
      "prognostico": "Episódios psicóticos breves sob estresse."
    },
    "prevalencia": {
      "populacao_geral": "0,6% a 3,9%",
      "proporcao_sexo": "Pouco mais comum no sexo masculino",
      "variacoes_culturais": "Crenças religiosas culturalmente aceitas não devem ser consideradas esquizotípicas.",
      "notas": "None"
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
      "fonte_capitulo_md": "18_transtornos_personalidade.md",
      "fonte_inventario_md": null,
      "data_extracao": "2026-05-31",
      "modelo_agente": "claude-opus-4-7",
      "lacunas_globais": [],
      "inconsistencias_detectadas": [],
      "notas_agente_globais": null,
      "revisao_humana_necessaria": false
    },
    "instrumentos_complementares": [],
    "raw_document": {
      "$schema_version": "1.0.0",
      "meta": {
        "id": "tp_esquizotipico",
        "nome_completo": "Transtorno da Personalidade Esquizotípica",
        "sigla": "TPET",
        "codigo": {
          "dsm5": "301.22",
          "cid10": "F21",
          "cid11": "6A22"
        },
        "capitulo": "Transtornos da Personalidade",
        "capitulo_id": "18",
        "grupo": "Cluster A",
        "faixa_etaria_alvo": "adulto",
        "versao_complementar_existe": false,
        "sinonimos_historicos": []
      },
      "estrutura_geral": "polythetic_monocluster",
      "clusters_sintomas": [
        {
          "id": "A",
          "nome": "Déficits Sociais, Distorções Cognitivas e Excentricidade",
          "tipo": "polythetic_com_limiar",
          "limiar": {
            "adulto": 5,
            "pediatria": null
          },
          "ancora_obrigatoria": null,
          "sintomas": [
            {
              "id": "A1",
              "rotulo": "Ideias de referência",
              "desc": "Ideias de referência (excluindo delírios de referência).",
              "pergunta": "Você frequentemente sente que eventos casuais ou comentários de outras pessoas têm um significado especial e particular para você?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A2",
              "rotulo": "Crenças estranhas ou pensamento mágico",
              "desc": "Crenças estranhas ou pensamento mágico que influenciam o comportamento e são inconsistentes com as normas subculturais.",
              "pergunta": "Você tem crenças incomuns ou pensamento mágico que influenciam seu comportamento (superstições, clarividência, telepatia)?",
              "exemplos_clinicos": [
                "Crença de controlar outros por pensamento",
                "Rituais mágicos"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A3",
              "rotulo": "Experiências perceptivas incomuns",
              "desc": "Experiências perceptivas incomuns, incluindo ilusões corporais.",
              "pergunta": "Você tem experiências perceptivas incomuns, como sentir a presença de alguém ou ouvir vozes murmurando seu nome?",
              "exemplos_clinicos": [
                "Sentir outra pessoa presente",
                "Ouvir nome murmurado"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A4",
              "rotulo": "Pensamento e discurso estranhos",
              "desc": "Pensamento e discurso estranhos (p. ex., vago, circunstancial, metafórico, excessivamente elaborado ou estereotipado).",
              "pergunta": "Seu modo de pensar ou falar é frequentemente vago, circunstancial, metafórico ou de difícil compreensão para os outros?",
              "exemplos_clinicos": [
                "Respostas excessivamente concretas ou abstratas",
                "Uso idiossincrásico de palavras"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A5",
              "rotulo": "Desconfiança ou ideação paranoide",
              "desc": "Desconfiança ou ideação paranoide.",
              "pergunta": "Você é frequentemente desconfiado ou tem ideias paranoides sobre as intenções dos outros?",
              "exemplos_clinicos": [
                "Crer que colegas tramam contra si"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A6",
              "rotulo": "Afeto inadequado ou constrito",
              "desc": "Afeto inadequado ou constrito.",
              "pergunta": "Você demonstra afeto que parece inadequado à situação ou muito constrito nas interações sociais?",
              "exemplos_clinicos": [
                "Interação formal ou excessivamente contida"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A7",
              "rotulo": "Comportamento ou aparência estranha, excêntrica ou peculiar",
              "desc": "Comportamento ou aparência estranha, excêntrica ou peculiar.",
              "pergunta": "Você tem maneirismos incomuns, forma desleixada de vestir-se ou aparência que os outros consideram estranha ou excêntrica?",
              "exemplos_clinicos": [
                "Evitar contato visual",
                "Roupas manchadas ou inadequadas"
              ],
              "faixa_aplicavel": null
            },
            {
              "id": "A8",
              "rotulo": "Ausência de amigos próximos fora parentes de primeiro grau",
              "desc": "Ausência de amigos próximos ou confidentes que não sejam parentes de primeiro grau.",
              "pergunta": "Você tem poucos ou nenhum amigo próximo ou confidente fora um possível parente de primeiro grau?",
              "exemplos_clinicos": [],
              "faixa_aplicavel": null
            },
            {
              "id": "A9",
              "rotulo": "Ansiedade social excessiva associada a temores paranoides",
              "desc": "Ansiedade social excessiva que não diminui com o convívio e que tende a estar associada mais a temores paranoides do que a julgamentos negativos sobre si mesmo.",
              "pergunta": "Você sente ansiedade social intensa que não diminui mesmo com o tempo, mais ligada a desconfiança das intenções dos outros do que a julgamentos sobre si?",
              "exemplos_clinicos": [
                "Ficar mais tenso durante jantar em vez de relaxar"
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
          "id": "exclusao_psicotico_autista",
          "letra": "B",
          "rotulo": "Não ocorre exclusivamente durante curso de transtorno psicótico ou TEA",
          "tipo": "exclusao_diagnostica",
          "ui_widget": "toggle_simples",
          "obrigatorio": true,
          "icone_fa": "fa-ban",
          "ddx_sugeridos": [
            "esquizofrenia",
            "transtorno_bipolar",
            "tea"
          ],
          "descricao_completa": "Não ocorre exclusivamente durante o curso de esquizofrenia, transtorno bipolar ou depressivo com sintomas psicóticos, outro transtorno psicótico ou transtorno do espectro autista.",
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
            "descritor": "Poucos sintomas; prejuízo leve."
          },
          {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "Sintomas moderados; prejuízo moderado."
          },
          {
            "id": "grave",
            "label": "Grave",
            "descritor": "Muitos sintomas; prejuízo grave."
          }
        ],
        "regra_atribuicao": null,
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
          "id": "social",
          "label": "Funcionamento Social",
          "icone_fa": "fa-users",
          "relevante_para": "transversal"
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
          "condicao": "Esquizofrenia",
          "ponto_distincao": "Esquizofrenia: sintomas psicóticos persistentes; esquizotípica: ideias de referência, não delírios firmes.",
          "pertence_a_classe": false
        },
        {
          "condicao": "Transtorno do Espectro Autista",
          "ponto_distincao": "TEA: maior comprometimento da reciprocidade social, comportamentos estereotipados.",
          "pertence_a_classe": false
        },
        {
          "condicao": "Transtorno da Personalidade Evitativa",
          "ponto_distincao": "Evitativa: deseja relacionamentos mas teme rejeição; esquizotípica: falta de desejo de contatos íntimos.",
          "pertence_a_classe": true
        }
      ],
      "comorbidades_frequentes": [
        {
          "condicao": "Transtorno Depressivo Maior",
          "frequencia": "alta",
          "nota": "30–50% em contexto clínico"
        },
        {
          "condicao": "Transtornos de ansiedade",
          "frequencia": "moderada",
          "nota": null
        }
      ],
      "instrumentos_complementares": [],
      "prevalencia": {
        "populacao_geral": "0,6% a 3,9%",
        "proporcao_sexo": "Pouco mais comum no sexo masculino",
        "variacoes_culturais": "Crenças religiosas culturalmente aceitas não devem ser consideradas esquizotípicas.",
        "notas": null,
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "curso_desenvolvimento": {
        "idade_inicio_tipica": "Infância e adolescência",
        "trajetoria": "Relativamente estável; pequena parcela desenvolve esquizofrenia.",
        "prognostico": "Episódios psicóticos breves sob estresse.",
        "metadados": {
          "completo": true,
          "lacunas": [],
          "notas_agente": null,
          "fonte_passada_1": true
        }
      },
      "template_prontuario": {
        "cabecalho": "## Avaliação do Transtorno da Personalidade Esquizotípica - {nome_paciente}",
        "rodape_metodologico": "Anamnese clínica com base nos critérios DSM-5 (301.22 / F21)."
      },
      "metadados_globais": {
        "fonte_capitulo_md": "18_transtornos_personalidade.md",
        "fonte_inventario_md": null,
        "data_extracao": "2026-05-31",
        "modelo_agente": "claude-opus-4-7",
        "lacunas_globais": [],
        "inconsistencias_detectadas": [],
        "notas_agente_globais": null,
        "revisao_humana_necessaria": false
      },
      "id": "tp_esquizotipico",
      "category": "FULL",
      "ui_mode": "structured_full",
      "render_structured_interview": true,
      "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [
          "A1. Ideias de referencia (excluindo delirios)",
          "A2. Crencas estranhas ou pensamento magico",
          "A3. Experiencias perceptivas incomuns (ilusoes corporais)",
          "A4. Pensamento/discurso estranho (vago, circunstancial)",
          "A5. Desconfianca ou ideacao paranoide",
          "A6. Afeto inadequado ou constrito",
          "A7. Comportamento/aparencia estranha, excentrica",
          "A8. Ausencia de amigos proximos (exceto parentes 1o grau)",
          "A9. Ansiedade social excessiva que NAO diminui com convivio"
        ],
        "diagnostic_rule": "Criterios gerais de TP (A-F) + >=5 de 9 criterios + exclusao",
        "clusters": [
          "Deficits Sociais",
          "Distorcoes Cognitivo-Perceptivas",
          "Comportamento Excentrico"
        ],
        "duration": "padrao relativamente estavel",
        "age_onset": "inicio vida adulta",
        "functional_impairment": "deficits interpessoais marcados; isolamento social; ansiedade social persistente",
        "exclusions": [
          "esquizofrenia",
          "transtorno bipolar/depressivo com psicotico",
          "TEA"
        ],
        "subtypes_presentations": [],
        "specifiers": [],
        "operational_profiles": [],
        "severity": {
          "has_formal_severity": false,
          "type": "nao_aplica",
          "levels": [],
          "assignment_rule": null,
          "domains": []
        },
        "critical_differentials": [
          "paranoide",
          "esquizoide",
          "evitativa",
          "borderline",
          "narcisista"
        ],
        "key_questions": [
          "Eventos cotidianos tem significado especial so para voce?",
          "Crencas que outros consideram estranhas?",
          "Experiencias incomuns (presenca, ouvir nome)?",
          "Jeito de falar ou se vestir e estranho/excentrico?",
          "Desconforto social diminui quando conhece melhor as pessoas? [nao = favorece TPET]"
        ],
        "alerts": [
          "Pequena proporcao pode evoluir para esquizofrenia; avaliar contexto cultural para pensamento magico"
        ],
        "source_trace": {
          "markdown_section": "## 3. Transtorno da Personalidade Esquizotipica (TPET)",
          "patches_applied": []
        },
        "category": "FULL",
        "ui_mode": "structured_full",
        "render_structured_interview": true
      },
      "inventario_clinico": {
        "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 301.22 / F21",
        "estrutura_efetiva": "- **Estrutura efetiva:** Padrao difuso de deficits sociais/interpessoais com desconforto agudo e capacidade reduzida para intimidade, alem de distorcoes cognitivas/perceptivas e comportamento eccentrico. Exige 5+ de 9 criterios: (1) ideias de referencia (nao delirios), (2) crencas estranhas/pensamento magico, (3) experiencias perceptivas incomuns, (4) pensamento e discurso estranhos, (5) desconfianca/ideacao paranoide, (6) afeto inadequado ou constrito, (7) comportamento/aparencia eccentrica, (8) ausencia de amigos proximos (exceto familiares 1o grau), (9) ansiedade social excessiva que nao diminui com convivio (associada a temores paranoides). Exclusao: nao ocorre exclusivamente durante esquizofrenia, TB/depressivo com psicose, outro psicotico ou TEA.",
        "notas_clinicas": "- **Notas:** Prevalencia: 0,6%-4,6% em comunidades; 3,9% (NESARC). Baixa em populacoes clinicas (0-1,9%). Levemente mais comum em homens. Pequena parte evolui para esquizofrenia. 30-50% com TP depressivo maior simultaneo; mais de 50% com historia de episodio depressivo maior. Comorbidade: TP esquizoide, paranoide, evitativa, borderline. Especificador \"pre-morbido\". Agregacao familiar com esquizofrenia."
      },
      "codigo_cid11": "6A22",
      "super_enrichment": {
        "id": "tp_esquizotipico",
        "nome_original": "Transtorno da Personalidade Esquizotipica",
        "comorbidades_frequentes": [
          {
            "condicao": "Transtorno Depressivo Maior",
            "frequencia": "alta",
            "nota": "30–50% em contexto clínico"
          },
          {
            "condicao": "Transtornos de ansiedade",
            "frequencia": "moderada",
            "nota": null
          }
        ],
        "diagnostico_diferencial": [
          {
            "condicao": "Esquizofrenia",
            "ponto_distincao": "Esquizofrenia: sintomas psicóticos persistentes; esquizotípica: ideias de referência, não delírios firmes.",
            "pertence_a_classe": false
          },
          {
            "condicao": "Transtorno do Espectro Autista",
            "ponto_distincao": "TEA: maior comprometimento da reciprocidade social, comportamentos estereotipados.",
            "pertence_a_classe": false
          },
          {
            "condicao": "Transtorno da Personalidade Evitativa",
            "ponto_distincao": "Evitativa: deseja relacionamentos mas teme rejeição; esquizotípica: falta de desejo de contatos íntimos.",
            "pertence_a_classe": true
          }
        ],
        "hierarquia": {
          "presente": false,
          "exclui_se_diagnosticado": [],
          "exclui_diagnostico_de": [],
          "notas": ""
        },
        "prevalencia": {
          "populacao_geral": "0,6% a 3,9%",
          "proporcao_sexo": "Pouco mais comum no sexo masculino",
          "variacoes_culturais": "Crenças religiosas culturalmente aceitas não devem ser consideradas esquizotípicas."
        },
        "curso_desenvolvimento": {
          "idade_inicio_tipica": "Infância e adolescência",
          "trajetoria": "Relativamente estável; pequena parcela desenvolve esquizofrenia.",
          "prognostico": "Episódios psicóticos breves sob estresse."
        },
        "instrumentos_complementares": [],
        "transtorno_da_personalidade_esquizotipica": "```yaml\ncodigo_dsm5: \"301.22\"\ncodigo_cid10: \"F21\"\ncategoria_operacional: FULL\ncluster: A\nestrutura_diagnostica: polythetic_monocluster\n```",
        "criterios_obrigatorios": [
          {
            "id": "completo",
            "texto": "**A.** Padrao difuso de **deficits sociais e interpessoais** marcado por desconforto agudo e capacidade reduzida para relacionamentos intimos, **distorcoes cognitivas ou perceptivas** e **comportamento excentrico**, inicio na vida adulta, presente em varios contextos, indicado por **5+** dos seguintes (9 itens):\n\n| # | Criterio |\n|---|----------|\n| A1 | Ideias de referencia (excluindo delirios de referencia) |\n| A2 | Crencas estranhas ou pensamento magico que influenciam comportamento e sao inconsistentes com normas subculturais |\n| A3 | Experiencias perceptivas incomuns, incluindo ilusoes corporais |\n| A4 | Pensamento e discurso estranhos (vago, circunstancial, metaforico, excessivamente elaborado ou estereotipado) |\n| A5 | Desconfianca ou ideacao paranoide |\n| A6 | Afeto inadequado ou constrito |\n| A7 | Comportamento ou aparencia estranha, excentrica ou peculiar |\n| A8 | Ausencia de amigos proximos ou confidentes que nao sejam parentes de primeiro grau |\n| A9 | Ansiedade social excessiva que nao diminui com convivio e tende a estar associada a temores paranoides mais que a julgamentos negativos sobre si mesmo |\n\n**B.** **Exclusao**: Nao ocorre exclusivamente durante esquizofrenia, transtorno bipolar ou depressivo com sintomas psicoticos, outro transtorno psicotico, ou TEA.\n\n> Nota: Se criterios atendidos antes de esquizofrenia → acrescentar \"pre-morbido\"."
          }
        ],
        "regra_diagnostica": "- Criterios gerais de TP (A-F) + Criterio A acima (5+ de 9) + Criterio B (exclusao)\n- **Liminar**: 5/9 sintomas especificos (maior liminar do Cluster A)",
        "duracao_idade_prejuizo": {
          "idade_de_inicio": "Inicio da vida adulta",
          "duracao": "Padrao relativamente estavel; pequena proporcao evolui para esquizofrenia",
          "prejuizo_funcional": "Deficits interpessoais marcados; isolamento social; ansiedade social persistente; funcionamento profissional e social prejudicado"
        },
        "exclusoes_obrigatorias": [
          "Esquizofrenia / Transtorno psicotico (exclusao formal)",
          "Transtorno bipolar ou depressivo com sintomas psicoticos (exclusao formal)",
          "TEA (exclusao formal)",
          "Transtorno de personalidade paranoide (diferenciar: TPET tem pensamento magico, experiencias perceptivas, discurso estranho)",
          "Transtorno de personalidade esquizoide (diferenciar: TPET tem distorcoes cognitivas/perceptivas; esquizoide nao tem)",
          "Transtorno de personalidade evitativa (diferenciar: ansiedade social da evitativa diminui com convivio; ansiedade da TPET nao diminui e e mais paranode)",
          "Transtorno de personalidade borderline (diferenciar: sintomas \"psicoticos\" breves da borderline sao reativos a estresse interpessoal e dissociativos; da TPET sao mais duradouros)",
          "Transtorno de personalidade narcisista (diferenciar: retraimento por medo de imperfeicao revelada)",
          "Uso de substancia"
        ],
        "gravidade": {
          "tipo": "nao_aplica"
        },
        "subtipos": [
          "Sem subtipos formais"
        ],
        "diferenciais_criticos": [
          {
            "numero": 1,
            "condicao": "Ideias de referencia vs. delírios",
            "chave_diferenciacao": "Ideias de referencia sao suspeitas/interpretacoes incorretas sem conviccao delirante firme"
          },
          {
            "numero": 2,
            "condicao": "Pensamento magico",
            "chave_diferenciacao": "Deve ser avaliado no contexto cultural - distinguir crencas religiosas/culturais normativas de crencas estranhas idiossincraticas"
          },
          {
            "numero": 3,
            "condicao": "Experiencias perceptivas",
            "chave_diferenciacao": "Distinguir ilusoes breves de alucinacoes; ilusoes corporais devem ser idiossincraticas"
          },
          {
            "numero": 4,
            "condicao": "Discurso estranho",
            "chave_diferenciacao": "Distinguir de discurso circunstancial culturalmente normativo; procurar vaguidao, construcoes incomuns"
          },
          {
            "numero": 5,
            "condicao": "Ansiedade social",
            "chave_diferenciacao": "Diferencial chave - ansiedade da TPET NAO diminui com familiarizacao (contrario de evitativa e fobia social)"
          }
        ],
        "perguntas_chave_entrevista": [
          {
            "numero": 1,
            "texto": "Voce ja sentiu que eventos cotidianos ou comentarios das pessoas tinham um significado especial so para voce?"
          },
          {
            "numero": 2,
            "texto": "Tem algumas crencas que outras pessoas consideram estranhas (ex: clarividencia, telepatia, supersticoes fora do comum)?"
          },
          {
            "numero": 3,
            "texto": "Ja teve experiencias incomuns (ex: sentir presenca de alguem, ouvir seu nome sendo chamado)?"
          },
          {
            "numero": 4,
            "texto": "Outras pessoas ja comentaram que seu jeito de falar ou se vestir e estranho ou excentrico?"
          },
          {
            "numero": 5,
            "texto": "Voce se sente desconfortavel em situacoes sociais e esse desconforto diminui quando conhece melhor as pessoas?"
          },
          {
            "numero": 6,
            "texto": "Voce acha dificil confiar nas pessoas ou tem ideias paranoides?"
          },
          {
            "numero": 7,
            "texto": "Como voce descreveria suas expressoes emocionais? As pessoas ja disseram que sao inadequadas?"
          }
        ],
        "ui": {
          "renderiza_entrevista": true,
          "modo": "structured_full",
          "caracteristicas_especiais": "",
          "tracos_egossintonicos": true,
          "necessita_informantes": true,
          "avaliar_contexto_cultural": "essencial",
          "teste_de_fantasia": "pensamento_magico"
        },
        "clusters_sintomaticos": "---"
      },
      "super_enrichment_source": "dsm/output/json_super_adicionado/tp_esquizotipico.json",
      "enrichment_status": {
        "has_poor": true,
        "has_master": false,
        "has_inventory": true,
        "has_hierarchy": false,
        "has_cid11": true,
        "has_super_enrichment": true,
        "match_notes": {
          "poor": "id",
          "master": "missing",
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
