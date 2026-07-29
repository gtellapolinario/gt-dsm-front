import { CondutaSchema } from "./schema";

export const data = CondutaSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "conduta",
    "nome_completo": "Transtorno da Conduta",
    "capitulo": "Transtornos Disruptivos, do Controle de Impulsos e da Conduta",
    "capitulo_id": "transtornos_disruptivos_do_controle_de_impulsos_e_da_conduta",
    "sigla": null,
    "codificacao": {
        "dsm5_tr": {
            "codigo": "312.8",
            "sistema_origem": "ICD-9-CM",
            "uso": "referencia_editorial_legacy"
        },
        "cid10_cm": {
            "referencia_base": "F91",
            "equivalencia": "contextual",
            "regra": "Referência de família ou conjunto de códigos; selecionar o código CID-10-CM específico conforme apresentação, curso, gravidade e regras da versão adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6C91",
            "equivalencia": "contextual",
            "regra": "Selecionar a subcategoria de início e, quando aplicável, o qualificador de emoções pró-sociais.",
            "versao": "CID-11 MMS 2026-01"
        }
    },
    "agrupamento": {
        "capitulo": {
            "id": "transtornos_disruptivos_do_controle_de_impulsos_e_da_conduta",
            "label": "Transtornos Disruptivos, do Controle de Impulsos e da Conduta"
        },
        "subgrupo": null
    },
    "faixa_etaria_alvo": "transversal",
    "terminologia_relacionada": []
},
  "estrutura_geral": "polythetic_com_ancora",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Comportamentos de violação de direitos ou normas",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 3,
            "pediatria": 3
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Provoca, ameaça ou intimida outros",
                "desc": "Frequentemente provoca, ameaça ou intimida outros.",
                "pergunta": "A pessoa provoca, ameaça ou intimida outras pessoas com frequência?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A2",
                "rotulo": "Inicia brigas físicas",
                "desc": "Frequentemente inicia brigas físicas.",
                "pergunta": "A pessoa começa brigas físicas com frequência?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A3",
                "rotulo": "Usou arma capaz de causar danos graves",
                "desc": "Usou alguma arma que pode causar danos físicos graves a outros (p. ex. , bastão, tijolo, garrafa quebrada, faca, arma de fogo).",
                "pergunta": "A pessoa já usou alguma arma ou objeto que poderia causar ferimentos graves em outra pessoa?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A4",
                "rotulo": "Fisicamente cruel com pessoas",
                "desc": "Foi fisicamente cruel com pessoas.",
                "pergunta": "A pessoa foi fisicamente cruel ou violentou outras pessoas?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A5",
                "rotulo": "Fisicamente cruel com animais",
                "desc": "Foi fisicamente cruel com animais.",
                "pergunta": "A pessoa foi fisicamente cruel com animais?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A6",
                "rotulo": "Roubou durante confronto com vítima",
                "desc": "Roubou durante o confronto com uma vítima (p. ex. , assalto, roubo de bolsa, extorsão, roubo à mão armada).",
                "pergunta": "A pessoa já roubou algo usando força, ameaça ou confrontando a vítima?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A7",
                "rotulo": "Forçou alguém a atividade sexual",
                "desc": "Forçou alguém a atividade sexual.",
                "pergunta": "A pessoa já forçou ou coagiu alguém a praticar atos sexuais?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A8",
                "rotulo": "Provocou incêndios deliberadamente",
                "desc": "Envolveu-se deliberadamente na provocação de incêndios com a intenção de causar danos graves.",
                "pergunta": "A pessoa já provocou incêndios de forma deliberada para causar danos?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A9",
                "rotulo": "Destruiu deliberadamente propriedade alheia",
                "desc": "Destruiu deliberadamente propriedade de outras pessoas (excluindo provocação de incêndios).",
                "pergunta": "A pessoa já destruiu de propósito propriedade ou bens de outras pessoas?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A10",
                "rotulo": "Invadiu casa, edifício ou carro",
                "desc": "Invadiu a casa, o edifício ou o carro de outra pessoa.",
                "pergunta": "A pessoa já invadiu a casa, um prédio ou o carro de outra pessoa?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A11",
                "rotulo": "Mente para obter bens ou favores (trapaceia)",
                "desc": "Frequentemente mente para obter bens materiais ou favores ou para evitar obrigações (i.e., “trapaceia”).",
                "pergunta": "A pessoa mente frequentemente para conseguir coisas, favores ou para escapar de obrigações?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A12",
                "rotulo": "Furtou itens de valor sem confrontar vítima",
                "desc": "Furtou itens de valores consideráveis sem confrontar a vítima (p. ex. , furto em lojas, mas sem invadir ou forçar a entrada; falsificação).",
                "pergunta": "A pessoa já furtou itens de valor sem confrontar a vítima (furto em lojas, falsificação)?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A13",
                "rotulo": "Fica fora de casa à noite apesar de proibição (<13a)",
                "desc": "Frequentemente fica fora de casa à noite, apesar da proibição dos pais, com início antes dos 13 anos de idade.",
                "pergunta": "Antes dos 13 anos, a pessoa ficava fora de casa à noite contra a vontade dos pais?",
                "faixa_aplicavel": "pediatria",
                "nota": null
            },
            {
                "id": "A14",
                "rotulo": "Fugiu de casa pelo menos duas vezes",
                "desc": "Fugiu de casa, passando a noite fora, pelo menos duas vezes enquanto morando com os pais ou em lar substituto, ou uma vez sem retornar por um longo período.",
                "pergunta": "A pessoa já fugiu de casa e passou a noite fora pelo menos duas vezes?",
                "faixa_aplicavel": "pediatria",
                "nota": null
            },
            {
                "id": "A15",
                "rotulo": "Falta às aulas com frequência (<13a)",
                "desc": "Com frequência falta às aulas, com início antes dos 13 anos de idade.",
                "pergunta": "Antes dos 13 anos, a pessoa faltava às aulas com frequência?",
                "faixa_aplicavel": "pediatria",
                "nota": null
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": "Pelo menos três dos 15 comportamentos devem estar presentes nos últimos 12 meses, com pelo menos um comportamento presente nos últimos seis meses."
    }
],
  "criterios_condicionais": [
    {
        "id": "prejuizo_funcional",
        "letra": "B",
        "rotulo": "Prejuízo clinicamente significativo",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Frown",
        "descricao_completa": "A perturbação comportamental causa prejuízos clinicamente significativos no funcionamento social, acadêmico ou profissional.",
        "nota": null
    },
    {
        "id": "exclusao_tpa",
        "letra": "C",
        "rotulo": "Não preenche critérios para TPA (se ≥18 anos)",
        "tipo": "condicional_etario",
        "ui_widget": "campo_idade",
        "obrigatorio": true,
        "icone": "UserRound",
        "descricao_completa": "Se o indivíduo tem 18 anos ou mais, os critérios para transtorno da personalidade antissocial não são preenchidos.",
        "nota": null,
        "ddx_sugeridos": [
            "transtorno_personalidade_antissocial"
        ]
    }
],
  "subtipos": {
    "presente": true,
    "nome": "Tipo de início",
    "natureza": "tipo_de_inicio",
    "formal_dsm": true,
    "mutuamente_exclusivos": true,
    "subtipos": [
        {
            "id": "infancia",
            "label": "Tipo com início na infância",
            "descricao": "Pelo menos um sintoma característico antes dos 10 anos de idade.",
            "codigo": {
                "dsm5_legacy": "312.81",
                "cid10_cm": "F91.1",
                "cid11_mms": "6C91.0",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "adolescencia",
            "label": "Tipo com início na adolescência",
            "descricao": "Nenhum sintoma característico antes dos 10 anos de idade.",
            "codigo": {
                "dsm5_legacy": "312.82",
                "cid10_cm": "F91.2",
                "cid11_mms": "6C91.1",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "nao_especificado",
            "label": "Início não especificado",
            "descricao": "Critérios preenchidos, porém sem informações suficientes para determinar a idade de início.",
            "codigo": {
                "dsm5_legacy": "312.89",
                "cid10_cm": "F91.9",
                "cid11_mms": "6C91.Z",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        }
    ],
    "nota_aplicador": "Selecione somente opções sustentadas pela avaliação clínica."
},
  "especificadores": [
    {
        "id": "emocoes_prosociais_limitadas",
        "nome": "Com emoções pró-sociais limitadas",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": "Especificador aplicado quando pelo menos duas das quatro características (ausência de remorso, insensível/falta de empatia, despreocupado com desempenho, afeto superficial) estão presentes de forma persistente durante ≥12 meses e em múltiplos contextos."
    }
],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6C91",
        "equivalencia": "contextual",
        "regra": "Selecionar a subcategoria de início e, quando aplicável, o qualificador de emoções pró-sociais.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "transtorno",
    "tipo": "numero_de_problemas_e_magnitude_do_dano",
    "lembrete_aplicador": "Considere os problemas além do mínimo diagnóstico e a magnitude dos danos produzidos.",
    "niveis": [
        {
            "id": "leve",
            "label": "Leve",
            "descritor": "Poucos problemas além do necessário para o diagnóstico e danos relativamente pequenos."
        },
        {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "Número de problemas e efeitos situados entre leve e grave."
        },
        {
            "id": "grave",
            "label": "Grave",
            "descritor": "Muitos problemas além do necessário ou danos consideráveis a outras pessoas."
        }
    ],
    "regra_atribuicao": "Integre quantidade, diversidade e gravidade das condutas, com ênfase no dano causado."
},
  "hierarquia": {
    "presente": true,
    "exclui_se_diagnosticado": [
      "tp_antissocial"
    ],
    "exclui_diagnostico_de": [],
    "notas": "Apenas para indivíduos com 18 anos ou mais: TPA exclui o diagnóstico de transtorno da conduta.",
      },
  "dominios_impacto": [
    {
        "id": "social",
        "label": "Funcionamento social",
        "icone": "Users",
        "relevante_para": "transversal"
    },
    {
        "id": "academico",
        "label": "Aprendizagem e desempenho acadêmico",
        "icone": "GraduationCap",
        "relevante_para": "transversal"
    },
    {
        "id": "ocupacional",
        "label": "Desempenho ocupacional",
        "icone": "Briefcase",
        "relevante_para": "adulto"
    },
    {
        "id": "seguranca_legal",
        "label": "Segurança e repercussões legais",
        "icone": "Scale",
        "relevante_para": "transversal"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "transtorno_de_oposicao_desafiante",
        "condicao": "Transtorno de oposição desafiante",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno de Oposição Desafiante: comportamentos menos graves, sem agressão grave ou destruição de propriedade; inclui desregulação emocional. Ambos podem ser diagnosticados se critérios preenchidos.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_de_deficit_de_atencao_hiperatividade",
        "condicao": "Transtorno de Déficit de Atenção/Hiperatividade",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Comportamento hiperativo/impulsivo no Transtorno de Déficit de Atenção/Hiperatividade não viola normas ou direitos alheios por si só.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtornos_depressivo_e_bipolar",
        "condicao": "Transtornos depressivo e bipolar",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Problemas de conduta devem estar presentes fora dos episódios de humor para justificar diagnóstico comórbido.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_explosivo_intermitente",
        "condicao": "Transtorno explosivo intermitente",
        "natureza": "transtorno_mental",
        "ponto_distincao": "TEI: agressão impulsiva não premeditada sem objetivo tangível; conduta inclui agressão proativa/predatória.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtornos_de_adaptacao",
        "condicao": "Transtornos de adaptação",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Adaptação: problemas de conduta em clara associação com estressor psicossocial e dentro de 6 meses após o término.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "TDAH",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno de oposição desafiante",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtornos por uso de substâncias",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno específico da aprendizagem",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "cbcl",
        "nome": "Inventário de Comportamentos para Crianças e Adolescentes",
        "sigla": "CBCL",
        "uso": "triagem_informante",
        "faixa_etaria": "pediatria",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "ksads_pl",
        "nome": "Entrevista diagnóstica para crianças e adolescentes",
        "sigla": "K-SADS-PL",
        "uso": "apoio_diagnostico",
        "faixa_etaria": "pediatria",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "tipo_estimativa": "prevalencia_12_meses",
    "estimativa": "Entre 2% e 10% em 12 meses, com mediana aproximada de 4% nas estimativas descritas.",
    "distribuicao_por_sexo": "Mais elevado no sexo masculino",
    "variacoes_contextuais": "Contexto ambiental (áreas de alto crime, zonas de guerra) pode levar a aplicação incorreta do diagnóstico.",
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Pode iniciar nos anos pré-escolares até a adolescência; o tipo de início é definido pela presença de sintomas antes ou depois dos 10 anos.",
    "trajetoria": "Heterogênea. Início infantil associa-se, em média, a maior persistência e agressividade; início adolescente pode ter curso mais circunscrito.",
    "prognostico": "Início infantil, emoções pró-sociais limitadas, maior gravidade, TDAH e uso de substâncias associam-se a maior risco de persistência.",
    "nota_aplicador": "Início e trajetória são descritores típicos, não critérios isolados; um curso diferente exige reavaliação, mas não exclusão automática."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_clusters_assimetricos",
        "criteria": [
          "A1-A7. Agressao a Pessoas e Animais (7 criterios)",
          "A8-A9. Destruicao de Propriedade (2 criterios)",
          "A10-A12. Falsidade ou Furto (3 criterios)",
          "A13-A15. Violacoes Graves de Regras (3 criterios)",
          "B. Perturbacao comportamental causa prejuizos clinicamente significativos",
          "C. Se >=18 anos, criterios para TPA NAO preenchidos"
        ],
        "diagnostic_rule": "A (>=3 de 15, sendo >=1 nos ultimos 6 meses) + B(prejuizo) + C(idade>=18 -> nao TAS)",
        "clusters": [
          "Agressao a Pessoas e Animais",
          "Destruicao de Propriedade",
          "Falsidade ou Furto",
          "Violacoes Graves de Regras"
        ],
        "duration": "12 meses (janela de avaliacao); >=1 sintoma nos ultimos 6 meses",
        "age_onset": "subtipo inicio infancia: >=1 sintoma antes dos 10 anos; subtipo inicio adolescencia: nenhum antes dos 10",
        "functional_impairment": "prejuizos clinicamente significativos no funcionome_completonto social, academico ou profissional",
        "exclusions": [
          "transtorno da personalidade antissocial (se >=18 anos)"
        ],
        "specifiers": [
          {
            "id": "emocoes_pro_sociais_limitadas",
            "nome_completo": "Com Emocoes Pro-Sociais Limitadas",
            "criterion": ">=2 caracteristicas persistentes por >=12 meses: ausencia de remorso, insensivel/falta de empata, despreocupado com desempenho, afeto superficial"
          }
        ],
        "operational_profiles": [],
        "critical_differentials": [
          "TOD",
          "TDAH",
          "TDM/Bipolar",
          "transtorno de adaptacao",
          "TEI"
        ],
        "key_questions": [
          "Ja iniciou brigas fisicas? Com que frequencia?",
          "Ja usou arma, foi cruel com animais ou pessoas?",
          "Ja roubou confrontando vitima? Forcou alguem a atividade sexual?",
          "Ja destruiu propriedade ou provocou incendios?",
          "Ja invadiu casa/carro? Trapaceou ou furtou?",
          "Fica fora a noite sem permissao? Faltou as aulas? Fugiu de casa?",
          "Quando esses comportamentos comecaram? (subtipo)",
          "Ha prejuizo significativo na escola, familia ou comunidade?",
          "Demonstra remorso? Preocupa-se com sentimentos dos outros? (especificador pro-social)"
        ],
        "alerts": [
          "Pior prognostico associado ao subtipo de inicio na infancia",
          "Requer multiplas fontes de informacao; nao se basear apenas em autorrelato para especificador pro-social"
        ],
        "source_trace": {
          "markdown_section": "## 3. TRANSTORNO DA CONDUTA (TC) - FICHA FULL",
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
    "estrutura_efetiva": "- **Estrutura efetiva:** Categoria residual para apresentacoes em que sintomas caracteristicos de transtorno disruptivo/controle de impulsos/conduta causam sofrimento clinicamente significativo ou prejuizo funcional mas nao satisfazem todos os criterios para qualquer transtorno especifico da classe. O clinico opta por NAO especificar a razao pela qual os criterios nao sao satisfeitos. Inclui apresentacoes com informacoes insuficientes para diagnostico mais especifico (ex.: salas de emergencia).",
    "notas_clinicas": "- **Notas:**"
  },
  
});
export type DisorderData = typeof data;
