import { TranstornoDismorficoCorporalSchema } from "./schema";

export const data = TranstornoDismorficoCorporalSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "transtorno_dismorfico_corporal",
    "nome_completo": "Transtorno Dismórfico Corporal",
    "capitulo": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
    "capitulo_id": "transtorno_obsessivo_compulsivo_e_transtornos_relacionados",
    "sigla": "TDC",
    "codificacao": {
        "dsm5_tr": {
            "codigo": "300.7",
            "sistema_origem": "ICD-9-CM",
            "uso": "referencia_editorial_legacy"
        },
        "cid10_cm": {
            "referencia_base": "F45.22",
            "equivalencia": "direta",
            "regra": "Correspondência diagnóstica direta no nível informado; confirmar especificadores e requisitos da versão CID-10-CM adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6B21",
            "equivalencia": "contextual",
            "regra": "Selecionar 6B21.0, 6B21.1 ou 6B21.Z conforme o grau de insight.",
            "versao": "CID-11 MMS 2026-01"
        }
    },
    "agrupamento": {
        "capitulo": {
            "id": "transtorno_obsessivo_compulsivo_e_transtornos_relacionados",
            "label": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados"
        },
        "subgrupo": null
    },
    "faixa_etaria_alvo": "transversal",
    "terminologia_relacionada": [
        {
            "termo": "Dismorfofobia",
            "status": "historico",
            "equivalencia": "parcial",
            "nota": null
        }
    ]
},
  "estrutura_geral": "monothetic_puro",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Preocupação com Defeito Percebido na Aparência",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Preocupação com defeito físico imperceptível/leve",
                "desc": "Preocupação com um ou mais defeitos ou falhas percebidas na aparência física que não são observáveis ou que parecem leves para os outros.",
                "pergunta": "A pessoa se preocupa intensamente com alguma falha na sua aparência que outros dizem não enxergar ou ser mínima?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Convicção de nariz torto não visto por outros",
                    "Preocupação obsessiva com acne mínima"
                ]
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    },
    {
        "id": "B",
        "nome": "Comportamentos repetitivos ou atos mentais",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "B1",
                "rotulo": "Comportamentos repetitivos ou atos mentais em resposta",
                "desc": "Em algum momento, o indivíduo executou comportamentos repetitivos (verificar-se no espelho, arrumar-se, beliscar a pele, buscar tranquilização) ou atos mentais (comparar aparência com a de outros) em resposta às preocupações.",
                "pergunta": "A pessoa verifica repetidamente a aparência no espelho, se arruma excessivamente ou compara sua aparência com a de outros?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "2–3h/dia no espelho",
                    "Cirurgias estéticas recorrentes"
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
        "id": "sofrimento_funcional",
        "letra": "C",
        "rotulo": "Causa sofrimento ou prejuízo funcional significativo",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Frown",
        "descricao_completa": "A preocupação causa sofrimento clinicamente significativo ou prejuízo no funcionamento.",
        "nota": null
    },
    {
        "id": "exclusao_transtorno_alimentar",
        "letra": "D",
        "rotulo": "Não melhor explicado por transtorno alimentar",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "A preocupação com a aparência não é mais bem explicada por preocupações com gordura/peso em transtorno alimentar.",
        "nota": null,
        "ddx_sugeridos": [
            "anorexia_nervosa",
            "bulimia_nervosa",
            "transtorno_compulsao_alimentar"
        ]
    }
],
  "subtipos": {
    "presente": false,
    "nome": null,
    "natureza": null,
    "formal_dsm": false,
    "mutuamente_exclusivos": null,
    "subtipos": [],
    "nota_aplicador": "O DSM-5-TR não define subtipos formais para este diagnóstico."
},
  "especificadores": [
    {
        "id": "com_dismorfia_muscular",
        "nome": "Com dismorfia muscular",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "insight",
        "nome": "Nível de insight",
        "tipo": "enum",
        "ortogonal": false,
        "regra_criterial": null,
        "opcoes": [
            "Com bom ou razoável insight",
            "Com pobre insight",
            "Com ausência de insight/crenças delirantes"
        ]
    }
],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6B21",
        "equivalencia": "contextual",
        "regra": "Selecionar 6B21.0, 6B21.1 ou 6B21.Z conforme o grau de insight.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno dismórfico corporal."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": null,
      },
  "dominios_impacto": [
    {
        "id": "social",
        "label": "Funcionamento social",
        "icone": "Users",
        "relevante_para": "transversal"
    },
    {
        "id": "ocupacional",
        "label": "Desempenho ocupacional",
        "icone": "Briefcase",
        "relevante_para": "adulto"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "transtorno_obsessivo_compulsivo",
        "condicao": "Transtorno Obsessivo-Compulsivo",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno Obsessivo-Compulsivo: obsessões não focadas em aparência; Transtorno Dismórfico Corporal: preocupação exclusiva com aparência física.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_alimentar",
        "condicao": "Transtorno Alimentar",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Anorexia: preocupação com gordura/peso; Transtorno Dismórfico Corporal: outras características físicas.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "condicao_dermatologica_ou_alteracao_corporal_objetiva",
        "condicao": "Condição dermatológica ou alteração corporal objetiva",
        "natureza": "condicao_medica",
        "ponto_distincao": "Avaliar se a preocupação e os comportamentos são desproporcionais à alteração observável.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno Depressivo Maior",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "TOC",
      "frequencia": "alta",
      "nota": null
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "bdd_ybocs",
        "nome": "Escala Yale-Brown para Transtorno Dismórfico Corporal",
        "sigla": "BDD-YBOCS",
        "uso": "gravidade_monitoramento",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "tipo_estimativa": "prevalencia_pontual",
    "estimativa": "2,4% em adultos (EUA); maior em pacientes de dermatologia e cirurgia estética",
    "distribuicao_por_sexo": "Levemente mais comum em mulheres na população geral",
    "variacoes_contextuais": null,
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Frequentemente na adolescência, com início gradual ou menos reconhecido.",
    "trajetoria": "Pode ser persistente e flutuante, com prejuízo variável e risco elevado de ideação ou comportamento suicida.",
    "prognostico": "Maior prejuízo, insight ausente, comorbidades e suicidabilidade associam-se a maior gravidade e persistência.",
    "nota_aplicador": "Início e trajetória são descritores típicos, não critérios isolados; um curso diferente exige reavaliação, mas não exclusão automática."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [],
        "diagnostic_rule": "**A(preocupacao_aparencia_defeito_percebido) AND B(comportamentos_repetitivos) AND C(sofrimento/prejuizo) AND D(exclusao_TA)**",
        "clusters": [],
        "duration": null,
        "age_onset": "** Media 16-17 anos; 2/3 iniciam antes dos 18; mediana 15 anos",
        "functional_impairment": null,
        "exclusions": [
          "Transtornos alimentares (foco em peso/gordura = TA, nao BDD; ambos podem ser comorbidos)",
          "TOC (no TOC, obsessoes/compulsoes nao se limitam a aparencia)",
          "Transtorno de escoriacao (se beliscar e para melhorar aparencia = BDD; se sem intencao = escoriacao)",
          "Tricotilomania (se arrancar pelo e para melhorar defeito = BDD; se sem intencao = trico)",
          "Ansiedade de doenca (BDD: foco em aparencia; ansiedade de doenca: medo de ter doenca)",
          "TDM (em TDM, preocupacao nao e proeminente; comportamentos repetitivos nao estao presentes)",
          "Transtorno psicotico (BDD com insight ausente = BDD, NAO delirium/esquizofrenia)",
          "Disforia de genero (foco: desconforto com caracteristicas sexuais)"
        ],
        "specifiers": [
          "- Com dismorfia muscular: preocupacao de que a estrutura corporal e muito pequena ou insuficientemente musculosa. Usado mesmo se houver outras preocupacoes corporais.",
          "- Com insight bom ou razoavel: reconhece que as crencas sao provavelmente/definitivamente nao verdadeiras",
          "Com insight pobre: acredita que as crencas sao provavelmente verdadeiras",
          "Com insight ausente/crencas delirantes: completamente convencido de que as crencas sao verdadeiras",
          "Para individuos com insight ausente/crencas delirantes, os sintomas NAO devem ser diagnosticados como transtorno psicotico (e BDD com especificador)."
        ],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [
          "Voce tem preocupacoes intensas com algum aspecto da sua aparencia fisica que considera defeituoso ou feio?",
          "Outras pessoas dizem que esse defeito e leve ou nem percebem?",
          "Essa preocupacao ocupa muito do seu tempo ou causa sofrimento significativo?",
          "Voce se verifica frequentemente no espelho, se arruma excessivamente, ou belisca a pele por causa dessa preocupacao?",
          "Voce compara sua aparencia com a de outras pessoas com frequencia?",
          "Voce busca tranquilizacao de outras pessoas sobre sua aparencia?",
          "Essa preocupacao ja interferiu no trabalho, nos relacionome_completontos ou fez voce evitar situacoes sociais?",
          "Sua preocupacao e principalmente sobre peso ou gordura corporal?",
          "Voce ja procurou tratamento estetico/cirurgico por causa dessa preocupacao?",
          "Voce acha que sua percepcao sobre esses defeitos pode estar exagerada ou distorcida?",
          "Voce ja esteve completamente convencido de que os outros veem o mesmo defeito que voce?",
          "Voce se preocupa em ser muito pequeno ou ter pouca musculatura, apesar de ter aparentemente um corpo normal ou musculoso?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### TRANSTORNO DISMORFICO CORPORAL / BDD",
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
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:**",
    "notas_clinicas": "- **Notas:**"
  },
  
});
export type DisorderData = typeof data;
