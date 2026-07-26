import { ExplosivoIntermittenteSchema } from "./schema";

export const data = ExplosivoIntermittenteSchema.parse({
  "$schema_version": "2.1.0",
  "meta": {
    "id": "explosivo_intermittente",
    "nome_completo": "Transtorno Explosivo Intermitente",
    "sigla": "TEI",
    "codigo": {
      "dsm5": "312.34",
      "cid10": "F63.81",
      "cid11": "6C91"
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
        "nome": "Explosões comportamentais recorrentes",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 1,
            "pediatria": 1
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Agressão verbal ou física frequente sem danos graves",
                "desc": "Agressão verbal ou física dirigida a propriedade, animais ou outros indivíduos, ocorrendo em média de duas vezes por semana, durante três meses, sem danos ou destruição de propriedade nem lesões físicas.",
                "pergunta": "Nos últimos 3 meses, houve em média pelo menos duas vezes por semana explosões de agressão verbal ou física que não causaram lesões ou danos graves?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Acessos de raiva",
                    "Injúrias",
                    "Discussões verbais"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Três explosões com danos ou lesões em 12 meses",
                "desc": "Três explosões comportamentais envolvendo danos ou destruição de propriedade e/ou agressão física com lesões contra animais ou outros indivíduos, ocorrendo dentro de 12 meses.",
                "pergunta": "No último ano, houve pelo menos três explosões de agressão que causaram danos a propriedade ou lesões físicas a outras pessoas/animais?",
                "faixa_aplicavel": null,
                "nota": null
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    }
],
  "criterios_condicionais": [
    {
        "id": "desproporcional",
        "letra": "B",
        "rotulo": "Magnitude desproporcional à provocação",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Scale",
        "descricao_completa": "A magnitude da agressividade expressa durante as explosões recorrentes é grosseiramente desproporcional em relação à provocação ou a quaisquer estressores psicossociais precipitantes.",
        "nota": null
    },
    {
        "id": "impulsivo_nao_instrumental",
        "letra": "C",
        "rotulo": "Não premeditado e sem objetivo tangível",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Zap",
        "descricao_completa": "As explosões de agressividade recorrentes não são premeditadas (i.e., são impulsivas e/ou decorrentes de raiva) e não têm por finalidade atingir algum objetivo tangível (p. ex. , dinheiro, poder, intimidação).",
        "nota": null
    },
    {
        "id": "prejuizo_sofrimento",
        "letra": "D",
        "rotulo": "Sofrimento ou prejuízo funcional/consequências",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Frown",
        "descricao_completa": "As explosões de agressividade recorrentes causam sofrimento acentuado ao indivíduo ou prejuízo no funcionamento profissional ou interpessoal, ou estão associadas a consequências financeiras ou legais.",
        "nota": null
    },
    {
        "id": "idade_minima",
        "letra": "E",
        "rotulo": "Idade cronológica ≥6 anos",
        "tipo": "condicional_etario",
        "ui_widget": "campo_idade",
        "obrigatorio": true,
        "icone": "Baby",
        "descricao_completa": "A idade cronológica é de pelo menos 6 anos (ou nível de desenvolvimento equivalente).",
        "nota": null
    },
    {
        "id": "exclusao_outros",
        "letra": "F",
        "rotulo": "Não mais bem explicado por outro transtorno ou condição",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "As explosões de agressividade recorrentes não são mais bem explicadas por outro transtorno mental, condição médica ou efeitos fisiológicos de uma substância. Em crianças de 6 a 18 anos, o comportamento agressivo como parte de transtorno de adaptação não deve ser considerado.",
        "nota": null,
        "ddx_sugeridos": [
            "transtorno_depressivo_maior",
            "transtorno_bipolar",
            "transtorno_desregulacao_humor",
            "transtorno_psicotico",
            "transtorno_personalidade_antissocial",
            "transtorno_personalidade_borderline"
        ]
    }
],
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "especificadores": [],
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno explosivo intermitente."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": "Pode ser diagnosticado comorbidamente com TDAH, conduta, TOD ou TEA se as explosões excederem o usual.",
      },
  "dominios_impacto": [
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": null
    },
    {
      "id": "profissional",
      "label": "Funcionamento Profissional",
      "icone": "Briefcase",
      "relevante_para": "adulto"
    },
    {
      "id": "legal",
      "label": "Consequências Legais",
      "icone": "Gavel",
      "relevante_para": null
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno disruptivo da desregulação do humor",
      "ponto_distincao": "TDDH: humor negativo persistente quase todos os dias; TEI: explosões isoladas sem humor crônico. São mutuamente exclusivos.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno da personalidade antissocial ou borderline",
      "ponto_distincao": "Nesses transtornos, os níveis de agressividade impulsiva são inferiores aos do TEI.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno de adaptação",
      "ponto_distincao": "Em crianças de 6–18 anos, explosões no contexto de adaptação não contam para TEI.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Intoxicação ou abstinência de substâncias",
      "ponto_distincao": "Se as explosões estiverem quase sempre associadas a intoxicação/abstinência, não se faz diagnóstico de TEI.",
      "pertence_a_classe": false
    },
    {
      "condicao": "TDAH, transtorno da conduta, TOD, TEA",
      "ponto_distincao": "TEI pode ser comórbido se as explosões justificarem atenção clínica independente.",
      "pertence_a_classe": false
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtornos depressivos",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtornos de ansiedade",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtornos por uso de substâncias",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno da personalidade antissocial ou borderline",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "2,7% em um ano (definição estrita, EUA)",
    "proporcao_sexo": "1,4–2,3:1 M:F em alguns estudos",
    "variacoes_culturais": "Prevalência mais baixa em Ásia, Oriente Médio, Romênia e Nigéria.",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Fase final da infância ou adolescência",
    "trajetoria": "Características persistentes por muitos anos; curso pode ser episódico ou crônico.",
    "prognostico": "Relativamente comum independentemente de comorbidades.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_com_ancora",
        "criteria": [
          "A1. Agressao verbal ou fisica sem danos: media de 2x/semana durante 3 meses",
          "A2. 3 explosoes com danos/destruicao de propriedade e/ou agressao fisica com lesoes em 12 meses",
          "B. Magnitude desproporcional em relacao a provocacao",
          "C. Explosoes nao premeditadas (impulsivas) e sem objetivo tangivel",
          "D. Causam sofrimento acentuado OU prejuizo profissional/interpessoal OU consequencias financeiras/legais",
          "E. Idade >= 6 anos",
          "F. Exclusoes: nao melhor explicado por TDM, bipolar, psicose, TAS, borderline, condicao medica, substancia"
        ],
        "diagnostic_rule": "A(1 OU 2) + B(desproporcional) + C(impulsiva/nao instrumental) + D(sofrimento/prejuizo) + E(idade>=6) + F(exclusoes)",
        "clusters": [
          "Ancora Frequencia (A1)",
          "Ancora Gravidade (A2)"
        ],
        "duration": "3 meses (A1) ou 12 meses acumulado (A2)",
        "age_onset": ">= 6 anos (diagnostico); tipico fase final infancia/adolescencia; raro apos 40",
        "functional_impairment": "sofrimento acentuado, prejuizo profissional/interpessoal, consequencias financeiras/legais",
        "exclusions": [
          "transtorno depressivo maior",
          "transtorno bipolar",
          "transtorno disruptivo da desregulacao do humor (mutuamente exclusivo)",
          "transtorno psicotico",
          "transtorno da personalidade antissocial",
          "transtorno da personalidade borderline",
          "condicao medica (TCC, Alzheimer, epilepsia)",
          "efeitos fisiologicos de substancia/medicamento",
          "transtorno de adaptacao (criancas 6-18 anos)"
        ],
        "specifiers": [],
        "operational_profiles": [
          {
            "id": "verbal_predominante",
            "description": "A1: agressao verbal recorrente sem danos fisicos"
          },
          {
            "id": "agressao_fisica_grave",
            "description": "A2: explosoes com danos/destruicao ou lesoes"
          },
          {
            "id": "misto",
            "description": "Padrao A1 + A2 coexistentes"
          }
        ],
        "critical_differentials": [
          "TODD (desregulacao do humor)",
          "transtorno da conduta",
          "TAS/Borderline",
          "substancia",
          "TDAH/TEA/TOD"
        ],
        "key_questions": [
          "Com que frequencia tem explosoes de raiva?",
          "Explosoes sao desproporcionais a situacao?",
          "Consegue controlar a raiva antes de explodir?",
          "Sao impulsivas ou planeja agredir?",
          "Ja causou danos a propriedade ou lesoes?",
          "Causaram problemas no trabalho, relacionome_completontos ou justica?",
          "Idade do inicio foi antes dos 6 anos? (exclusao)",
          "Explosoes ocorrem apenas quando intoxicado? (exclusao)",
          "Humor negativo persistente quase todos os dias entre explosoes? (diferenciar TODD)"
        ],
        "alerts": [
          "Mutuamente exclusivo com TODD",
          "Pode ser diagnostico adicional a TDAH, TC, TOD ou TEA se explosoes excedem as normalmente observadas"
        ],
        "source_trace": {
          "markdown_section": "## 2. TRANSTORNO EXPLOSIVO INTERMITENTE (TEI) - FICHA FULL",
          "patches_applied": [
            "HIGH: subtipos movidos para perfis_operacionais (nao aplicado - apply_automatically=false)"
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
    "fonte_capitulo_md": "15_transtornos_disruptivos,_controle_impulsos_da_conduta.md",
    "fonte_inventario_md": null,
    "data_extracao": "2026-05-31",
    "modelo_agente": "claude-opus-4",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:** Explosoes comportamentais recorrentes representando falha em controlar impulsos agressivos, conforme manifestado por UM dos seguintes: (A1) Agressao verbal ou fisica sem dano/destruicao/lesao, ocorrendo em media 2 vezes por semana durante 3 meses; OU (A2) 3 explosoes com danos/destruicao de propriedade e/ou agressao fisica com lesao fisica contra animais/pessoas em 12 meses. A magnitude da agressividade e grosseiramente desproporcional a provocacao (B). Explosoes nao premeditadas, impulsivas/decorrentes de raiva, sem objetivo tangivel (C). Causam sofrimento acentuado ou prejuizo funcional (D). Idade cronologica >= 6 anos (E). Nao melhor explicadas por outro transtorno mental, condicao medica ou substancia (F). Pode ser feito em adicao a TDAH, transtorno da conduta, TOD ou TEA se explosoes excedem o tipico desses transtornos.",
    "notas_clinicas": "- **Notas:**"
  },
  
});
export type DisorderData = typeof data;
