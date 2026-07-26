import { TranstornoAnsiedadeGeneralizadaSchema } from "./schema";

export const data = TranstornoAnsiedadeGeneralizadaSchema.parse({
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_ansiedade_generalizada",
    "nome_completo": "Transtorno de Ansiedade Generalizada",
    "sigla": "TAG",
    "codigo": {
      "dsm5": "300.02",
      "cid10": "F41.1",
      "cid11": "6B00"
    },
    "capitulo": "Transtornos de Ansiedade",
    "capitulo_id": "05",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "estrutura_geral": "polythetic_com_ancora",
  "clusters_sintomas": [
    {
      "id": "A_C",
      "nome": "Ansiedade Excessiva + ≥3/6 Sintomas Associados (adultos) / ≥1/6 (crianças)",
      "tipo": "polythetic_com_ancora",
      "limiar": {
        "adulto": 3,
        "pediatria": 1
      },
      "ancora_obrigatoria": {
        "descricao": "A1 (ansiedade e preocupação excessivas) é obrigatório",
        "ids_obrigatorios": [
          "A1"
        ],
        "n_minimo": 1
      },
      "sintomas": [
        {
          "id": "A1",
          "rotulo": "Ansiedade e preocupação excessivas e incontroláveis",
          "desc": "Ansiedade e preocupação excessivas (expectativa apreensiva), ocorrendo na maioria dos dias por pelo menos 6 meses, sobre vários eventos/atividades, difíceis de controlar.",
          "pergunta": "Você se preocupa excessivamente com muitas coisas diferentes na maior parte dos dias, e tem dificuldade em parar de se preocupar?",
          "exemplos_clinicos": [
            "Preocupações com saúde, dinheiro, trabalho e família simultaneamente"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "C1",
          "rotulo": "Inquietação ou nervos à flor da pele",
          "desc": "Inquietação ou sensação de estar com os nervos à flor da pele ou tenso.",
          "pergunta": "Você se sente inquieto, tenso ou com os nervos à flor da pele a maior parte do tempo?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "C2",
          "rotulo": "Fatigabilidade (cansa-se facilmente)",
          "desc": "Fatigabilidade — cansa-se facilmente.",
          "pergunta": "Você se cansa facilmente, mesmo sem fazer muito esforço?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "C3",
          "rotulo": "Dificuldade de concentrar ou mente em branco",
          "desc": "Dificuldade em concentrar-se ou brancos na mente.",
          "pergunta": "Você tem dificuldade de concentração ou fica com a mente em branco com frequência?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "C4",
          "rotulo": "Irritabilidade",
          "desc": "Irritabilidade.",
          "pergunta": "Você está mais irritável do que o normal?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "C5",
          "rotulo": "Tensão muscular",
          "desc": "Tensão muscular.",
          "pergunta": "Você sente tensão muscular frequente (pescoço, ombros, mandíbula)?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "C6",
          "rotulo": "Perturbação do sono",
          "desc": "Perturbação do sono: dificuldade em adormecer ou manter o sono, ou sono agitado e insatisfatório.",
          "pergunta": "Você tem dificuldade para dormir ou acordar no meio da noite por preocupações?",
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
      "letra": "B",
      "rotulo": "Duração ≥6 meses na maioria dos dias",
      "tipo": "temporal_duracao_minima",
      "ui_widget": "campo_duracao_meses",
      "obrigatorio": true,
      "icone": "Calendar",
      "ddx_sugeridos": [],
      "descricao_completa": "Ansiedade e preocupação excessivas ocorrendo na maioria dos dias por pelo menos 6 meses.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "sofrimento_funcional",
      "letra": "D",
      "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
      "tipo": "prejuizo_funcional",
      "ui_widget": "toggle_com_justificativa_obrigatoria",
      "obrigatorio": true,
      "icone": "Frown",
      "ddx_sugeridos": [],
      "descricao_completa": "A ansiedade, preocupação ou sintomas físicos causam sofrimento clinicamente significativo ou prejuízo no funcionamento.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_substancia_medica",
      "letra": "E",
      "rotulo": "Não atribuível a substância ou condição médica",
      "tipo": "exclusao_substancia_medica",
      "ui_widget": "toggle_com_justificativa_obrigatoria",
      "obrigatorio": true,
      "icone": "Ban",
      "ddx_sugeridos": [
        "hipertireoidismo"
      ],
      "descricao_completa": "Não atribuível a efeitos fisiológicos de substância ou condição médica (ex: hipertireoidismo).",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_outros",
      "letra": "F",
      "rotulo": "Não melhor explicado por outro transtorno mental",
      "tipo": "exclusao_diagnostica",
      "ui_widget": "select_multiplos_ddx",
      "obrigatorio": true,
      "icone": "Ban",
      "ddx_sugeridos": [
        "transtorno_panico",
        "tas",
        "agorafobia",
        "tept",
        "toc"
      ],
      "descricao_completa": "Não mais bem explicado por TP, TAS, agorafobia, TEPT, TOC; se durante TDM/psicose, diagnosticar separadamente.",
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
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno de ansiedade generalizada."
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
      "id": "trabalho",
      "label": "Desempenho Profissional",
      "icone": "Briefcase",
      "relevante_para": "adulto"
    },
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "saude",
      "label": "Uso de Serviços de Saúde",
      "icone": "Hospital",
      "relevante_para": "transversal"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Ansiedade situacional normativa",
      "ponto_distincao": "TAG: preocupações excessivas, incontroláveis, em múltiplos domínios por ≥6 meses com sintomas físicos.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno de Pânico",
      "ponto_distincao": "TP: ansiedade focalizada em ataques de pânico; TAG: preocupações difusas e múltiplas.",
      "pertence_a_classe": true
    },
    {
      "condicao": "TOC",
      "ponto_distincao": "TOC: pensamentos intrusivos indesejados e egodistônicos; TAG: preocupações sobre problemas reais da vida, mais egossintônicas.",
      "pertence_a_classe": false
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno Depressivo Maior",
      "frequencia": "alta",
      "nota": "Ocorrem juntos na maioria dos casos de TAG."
    },
    {
      "condicao": "Transtorno de Pânico",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtornos relacionados a substâncias",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [
    {
      "nome": "Generalized Anxiety Disorder 7-item Scale",
      "sigla": "GAD-7",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ],
  "prevalencia": {
    "populacao_geral": "0,9% em adolescentes; 2,9% em adultos (prevalência de 12 meses nos EUA); 0,4–3,6% internacionalmente",
    "proporcao_sexo": "2:1 mulheres:homens",
    "variacoes_culturais": "Sintomas somáticos predominam em países com menor renda; taxas menores na Ásia e África.",
    "notas": "Segundo transtorno de ansiedade mais comum em atenção primária.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Relativamente precoce, porém sintomas na vida inteira; mediana de início: ~30 anos; início mais precoce que outros transtornos",
    "trajetoria": "Crônico, com exacerbações em estresse. Pode apresentar-se de forma flutuante.",
    "prognostico": "Remissão completa incomum sem tratamento; respondem bem a TCC e farmacoterapia.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  
  "metadados_globais": {
    "fonte_capitulo_md": "05_transtornos_ansiedade.md",
    "fonte_inventario_md": null,
    "data_extracao": "2026-05-31",
    "modelo_agente": "antigravity-gemini",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "id": "transtorno_ansiedade_generalizada",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "rendering": {
    "estrutura_diagnostica": "polythetic_monocluster",
    "criteria": [],
    "diagnostic_rule": "```\n(A MAJORITY_DAYS_6M) + (B DIFICIL_CONTROLAR) + (C >=3/6 [ou >=1/6 em criancas]) + (D PREJUIZO) + (E NAO_SUBSTANCIA_MEDICA) + (F NAO_OUTRO_TX)\n```",
    "clusters": [],
    "duration": "| 6 meses (na maioria dos dias) |",
    "age_onset": "| 30 anos (mais tardio entre os transtornos de ansiedade) |",
    "functional_impairment": null,
    "exclusions": [
      "→ exames laboratoriais",
      "→ preocupacao focada em avaliacao social, nao generalizada",
      "→ preocupacoes sao obsessoes intrusivas, nao excesso de preocupacao futura",
      "→ ansiedade vinculada a evento traumatico especifico",
      "→ ansiedade em resposta a estressor identificavel, dentro de 3 meses",
      "→ nao diagnosticar se ocorreu exclusivamente durante curso desses transtornos",
      "→ preocupacao centrada em separacao de figuras de apego"
    ],
    "specifiers": [
      "Nenhum especificador formal definido no DSM-5 para TAG"
    ],
    "operational_profiles": [],
    "critical_differentials": [],
    "key_questions": [
      "Nas ultimas semanas, voce tem se sentido preocupado ou ansioso na maioria dos dias?",
      "Quais sao as areas sobre as quais voce mais se preocupa? (trabalho, saude, financas, familia, outros)",
      "As preocupacoes parecem maiores ou mais frequentes do que a maioria das pessoas teria?",
      "Voce consegue controlar ou parar de se preocupar quando quer?",
      "Voce se sente inquieto ou com os nervos a flor da pele?",
      "Se sente facilmente cansado?",
      "Tem dificuldade de concentracao ou sensacao de branco na mente?",
      "Tem se sentido irritavel?",
      "Sente tensao muscular ou dores?",
      "Tem problemas de sono?",
      "Essa preocupacao tem afetado seu trabalho, relacionome_completontos ou outras areas da vida?",
      "As preocupacoes sao principalmente sobre sua saude?",
      "As preocupacoes sao sobre situacoes sociais?",
      "As preocupacoes sao sobre separacao de pessoas queridas?",
      "Voce tem pensamentos intrusivos repetidos?"
    ],
    "alerts": [],
    "source_trace": {
      "markdown_section": "### Transtorno de Ansiedade Generalizada (TAG)",
      "patches_applied": []
    },
    "category": "FULL",
    "ui_mode": "structured_full",
    "render_structured_interview": true
  },
  "sigla": "TAG",
  "versao_complementar_existe": false,
  "inventario_clinico": {
    "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 300.02 (F41.1)",
    "estrutura_efetiva": "- **Estrutura efetiva:** A (ansiedade/preocupacao >=6 meses) + B (controle dificil) + C (3/6 sintomas; 1/6 criancas) + D funcional + E exclusao substancia + F exclusao outro transtorno",
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
