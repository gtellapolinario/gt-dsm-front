import { TranstornoDoEspectroAutistaSchema } from "./schema";

export const data = TranstornoDoEspectroAutistaSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "transtorno_do_espectro_autista",
    "nome_completo": "Transtorno do Espectro Autista",
    "codigo": {
        "dsm5": "",
        "cid10": "F84.0",
        "cid11": "6A02"
    },
    "capitulo": "Transtornos do Neurodesenvolvimento",
    "capitulo_id": "transtornos_do_neurodesenvolvimento",
    "sigla": "TEA",
    "codificacao": {
        "cid10_cm": {
            "referencia_base": "F84.0",
            "equivalencia": "direta",
            "regra": "Correspondência diagnóstica direta no nível informado; confirmar especificadores e requisitos da versão CID-10-CM adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6A02",
            "equivalencia": "contextual",
            "regra": "Selecionar a subcategoria conforme transtorno do desenvolvimento intelectual e comprometimento da linguagem funcional.",
            "versao": "CID-11 MMS 2026-01"
        }
    },
    "agrupamento": {
        "capitulo": {
            "id": "transtornos_do_neurodesenvolvimento",
            "label": "Transtornos do Neurodesenvolvimento"
        },
        "subgrupo": {
            "id": "transtorno_do_espectro_autista",
            "label": "Transtorno do Espectro Autista",
            "natureza": "subgrupo_do_capitulo"
        }
    },
    "faixa_etaria_alvo": "transversal",
    "terminologia_relacionada": [
        {
            "termo": "Autismo infantil",
            "status": "historico",
            "equivalencia": "parcial",
            "nota": null
        },
        {
            "termo": "Síndrome de Asperger",
            "status": "historico",
            "equivalencia": "parcial",
            "nota": "Categoria anterior incorporada ao espectro; não equivale isoladamente a todo o TEA."
        },
        {
            "termo": "Transtorno invasivo do desenvolvimento",
            "status": "historico",
            "equivalencia": "parcial",
            "nota": "Família classificatória anterior."
        }
    ]
},
  "estrutura_geral": "polythetic_clusters_assimetricos",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Déficits na Comunicação Social e Interação Social",
        "tipo": "monothetic_conjuntivo",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Déficits na reciprocidade socioemocional",
                "desc": "Dificuldade na abordagem social, falha na conversação mútua, compartilhamento reduzido de interesses, emoções ou afeto, e incapacidade de iniciar ou responder a interações sociais.",
                "pergunta": "Há uma clara falta de interesse em iniciar interações, ou dificuldade de manter um diálogo compartilhado sem focar exclusivamente nos próprios interesses?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Dificuldade em compartilhar brincadeiras de faz-de-conta",
                    "Conversação puramente focada em fatos ou tópicos específicos de seu interesse"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Déficits nos comportamentos comunicativos não verbais",
                "desc": "Comunicação verbal e não verbal pouco integrada, anormalidades no contato visual, déficits na linguagem corporal e falta total de expressões faciais ou gestos comunicativos.",
                "pergunta": "A pessoa evita contato visual, tem expressões faciais muito neutras ou rígidas, ou apresenta dificuldades em integrar gestos ao falar?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Não usar gestos para apontar ou demonstrar afeto",
                    "Ausência de expressões de surpresa ou empatia"
                ]
            },
            {
                "id": "A3",
                "rotulo": "Déficits em desenvolver e manter relacionamentos",
                "desc": "Dificuldades em ajustar o comportamento a vários contextos sociais, compartilhar brincadeiras imaginativas, fazer amigos ou demonstrar ausência de interesse por pares.",
                "pergunta": "Demonstra dificuldades significativas em se entrosar com pessoas de mesma idade ou brincar cooperativamente em grupo?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Preferencia marcante por brincar sozinho",
                    "Falta de compreensão sobre o conceito de amizade"
                ]
            }
        ],
        "descricao_qualitativa": "Todos os 3 critérios de comunicação social (A1, A2 e A3) devem estar presentes de forma persistente em múltiplos contextos.",
        "nota": null,
        "regra_temporal": null
    },
    {
        "id": "B",
        "nome": "Padrões Restritivos e Repetitivos de Comportamento",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 2,
            "pediatria": 2
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "B1",
                "rotulo": "Fala ou movimentos motores repetitivos e estereotipados",
                "desc": "Estereotipias motoras simples, alinhamento de brinquedos, girar objetos, ecolalia ou frases idiossincráticas.",
                "pergunta": "Apresenta movimentos corporais repetitivos, como sacudir as mãos (flapping), balançar o corpo, ou repetir frases fora de contexto?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Flapping de mãos sob excitação",
                    "Alinhar carrinhos por cores e protestar se movidos",
                    "Ecolalia imediata"
                ]
            },
            {
                "id": "B2",
                "rotulo": "Insistência na mesma rotina e adesão inflexível a padrões",
                "desc": "Sofrimento extremo frente a pequenas mudanças, dificuldades com transições, padrões rígidos de pensamento, rituais de saudação ou necessidade de fazer o mesmo caminho.",
                "pergunta": "A pessoa reage com extrema irritabilidade ou crises de choro diante de pequenas alterações na rotina diária?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Insistir em comer exatamente a mesma comida nos mesmos pratos",
                    "Ficar desesperado se houver alteração no trajeto para a escola"
                ]
            },
            {
                "id": "B3",
                "rotulo": "Interesses altamente restritos e fixos",
                "desc": "Forte apego ou preocupação com objetos incomuns, interesses excessivamente circunscritos ou perseverantes (hiperfoco).",
                "pergunta": "Possui interesses obsessivos por assuntos específicos de forma que impede outras conversas ou atividades diárias?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Memorizar tabelas de horários de trens",
                    "Conhecimento enciclopédico sobre dinossauros que domina toda interação"
                ]
            },
            {
                "id": "B4",
                "rotulo": "Hiper ou hiporreatividade a estímulos sensoriais",
                "desc": "Indiferença aparente a dor/temperatura, reação adversa a sons ou texturas específicas, cheirar ou tocar objetos de forma excessiva, ou fascinação visual por luzes/movimentos.",
                "pergunta": "Demonstra incômodo extremo com barulhos cotidianos (liquidificador, secador de cabelo) ou texturas de roupas específicas?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Tapar os ouvidos diante de sons urbanos normais",
                    "Fascinação por ventiladores girando",
                    "Insensibilidade extrema a ferimentos físicos"
                ]
            }
        ],
        "descricao_qualitativa": "Pelo menos 2 dos 4 sintomas de comportamento repetitivo/restritivo devem estar presentes.",
        "nota": null,
        "regra_temporal": null
    }
],
  "criterios_condicionais": [
    {
        "id": "inicio_precoce_infancia",
        "letra": "C",
        "rotulo": "Sintomas presentes no início do período do desenvolvimento",
        "tipo": "condicional_etario",
        "ui_widget": "campo_idade",
        "obrigatorio": true,
        "icone": "Clock",
        "descricao_completa": "Os sintomas devem estar presentes no início do período do desenvolvimento (mas podem não se manifestar plenamente até que as demandas sociais ultrapassem o limite de suas capacidades).",
        "nota": null
    },
    {
        "id": "prejuizo_funcional_geral",
        "letra": "D",
        "rotulo": "Prejuízo clinicamente significativo no funcionamento",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "TrendingDown",
        "descricao_completa": "Os sintomas causam prejuízo clinicamente significativo no funcionamento social, profissional ou em outras áreas importantes da vida do indivíduo.",
        "nota": null
    },
    {
        "id": "nao_explicado_por_di",
        "letra": "E",
        "rotulo": "Não são mais bem explicados por deficiência intelectual",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Essas perturbações não são mais bem explicadas por deficiência intelectual ou atraso global do desenvolvimento.",
        "nota": null,
        "ddx_sugeridos": [
            "deficiencia_intelectual",
            "atraso_global_desenvolvimento"
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
        "id": "com_comprometimento_intelectual",
        "nome": "Com comprometimento intelectual associado",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "com_comprometimento_linguagem",
        "nome": "Com comprometimento da linguagem associado",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "associado_condicao_medica",
        "nome": "Associado a alguma condição médica ou genética conhecida ou a fator ambiental",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    }
],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6A02",
        "equivalencia": "contextual",
        "regra": "Selecionar a subcategoria conforme transtorno do desenvolvimento intelectual e comprometimento da linguagem funcional.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "formal_dimensional",
    "escopo": "necessidade_de_suporte_por_dominio",
    "tipo": "niveis_de_suporte",
    "lembrete_aplicador": "Atribua o nível separadamente em cada domínio; não produza um nível global único.",
    "dominios": [
        {
            "id": "comunicacao_social",
            "label": "Comunicação social"
        },
        {
            "id": "comportamentos_restritos_repetitivos",
            "label": "Comportamentos restritos e repetitivos"
        }
    ],
    "niveis_referencia": [
        {
            "id": "nivel_1",
            "label": "Nível 1 — exige apoio",
            "descritores_por_dominio": {
                "comunicacao_social": "Sem apoio, os déficits causam prejuízos perceptíveis na interação social.",
                "comportamentos_restritos_repetitivos": "A inflexibilidade interfere de modo significativo em um ou mais contextos."
            }
        },
        {
            "id": "nivel_2",
            "label": "Nível 2 — exige apoio substancial",
            "descritores_por_dominio": {
                "comunicacao_social": "Déficits acentuados permanecem evidentes mesmo com apoio.",
                "comportamentos_restritos_repetitivos": "Inflexibilidade e dificuldade com mudanças são aparentes em diversos contextos."
            }
        },
        {
            "id": "nivel_3",
            "label": "Nível 3 — exige apoio muito substancial",
            "descritores_por_dominio": {
                "comunicacao_social": "Déficits graves causam prejuízo importante e grande limitação das interações.",
                "comportamentos_restritos_repetitivos": "Inflexibilidade extrema e dificuldade intensa com mudanças interferem amplamente no funcionamento."
            }
        }
    ],
    "regra_atribuicao": "Registre um nível para comunicação social e outro para comportamentos restritos e repetitivos."
},
  "hierarquia": {
    "presente": true,
    "exclui_se_diagnosticado": ["transtorno_comunicacao_social"],
    "exclui_diagnostico_de": ["transtorno_comunicacao_social"],
    "notas": "TEA exclui o diagnóstico de Transtorno da Comunicação Social (Pragmática).",
      },
  "dominios_impacto": [
    {
        "id": "comunicacao_social",
        "label": "Comunicação e Interação Social",
        "icone": "MessageCircle",
        "relevante_para": "transversal"
    },
    {
        "id": "flexibilidade_rotinas",
        "label": "Flexibilidade e rotinas",
        "icone": "RefreshCw",
        "relevante_para": "transversal"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "transtorno_de_deficit_de_atencao_hiperatividade",
        "condicao": "Transtorno de Déficit de Atenção/Hiperatividade",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Dificuldades de atenção e hiperatividade no Transtorno de Déficit de Atenção/Hiperatividade não incluem necessariamente déficits qualitativos intrínsecos na comunicação recíproca ou comportamentos restritivos.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_da_comunicacao_social",
        "condicao": "Transtorno da Comunicação Social",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno da Comunicação Social (Pragmática) não apresenta padrões de comportamento repetitivos ou interesses restritos (Critério B do Transtorno do Espectro Autista).",
        "pertence_a_mesma_classe_dsm": true
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "TDAH",
      "frequencia": "alta",
      "nota": "Ocorre em cerca de 30% a 40% dos casos de TEA."
    },
    {
      "condicao": "Ansiedade e Transtornos Depressivos",
      "frequencia": "alta",
      "nota": "Especialmente comum em adolescentes e adultos com TEA nível 1."
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "ados_2",
        "nome": "Escala de Observação para Diagnóstico de Autismo – segunda edição",
        "sigla": "ADOS-2",
        "uso": "apoio_diagnostico",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "adi_r",
        "nome": "Entrevista Diagnóstica de Autismo – Revisada",
        "sigla": "ADI-R",
        "uso": "apoio_informante",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "tipo_estimativa": "prevalencia_pontual",
    "estimativa": "Cerca de 1% no panorama do DSM-5-TR; estimativas de vigilância posteriores variam conforme população, método e acesso diagnóstico.",
    "distribuicao_por_sexo": "O diagnóstico é mais frequente no sexo masculino; a razão observada é influenciada por sub-reconhecimento de apresentações em meninas e mulheres.",
    "variacoes_contextuais": null,
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Os sintomas estão presentes no período inicial do desenvolvimento, mas podem tornar-se claros apenas quando as demandas excedem as capacidades ou ser reconhecidos tardiamente.",
    "trajetoria": "O padrão é duradouro, com necessidades de suporte e funcionamento variáveis ao longo da vida; não pressupor trajetória fixa.",
    "prognostico": "Linguagem funcional, cognição, condições associadas, saúde, suporte e ambiente influenciam a autonomia; nenhum marcador isolado determina o desfecho individual.",
    "nota_aplicador": "Reconhecimento tardio não contradiz início no período do desenvolvimento."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_com_ancora",
        "criteria": [
          "A. Deficits persistentes na comunicacao social e na interacao social em multiplos contextos, conforme manifestado por TODOS os seguintes (atualmente ou por historia previa):",
          "B. Padroes restritos e repetitivos de comportamento, interesses ou atividades, conforme manifestado por PELO MENOS 2 dos seguintes (atualmente ou por historia previa):",
          "C. Inicio precoce no periodo do desenvolvimento (sintomas podem nao se manifestar plenome_completonte ate demandas sociais excederem capacidades).",
          "D. Prejuizo clinicamente significativo no funcionome_completonto social, profissional ou em outras areas.",
          "E. Nao melhor explicado por deficiencia intelectual ou atraso global do desenvolvimento. DI e TEA podem ser comorbidos; para isso, comunicacao social deve estar abaixo do esperado para o nivel geral de desenvolvimento."
        ],
        "diagnostic_rule": "Criterio A (todos os 3 subitens) + Criterio B (pelo menos 2 dos 4 subitens) + Criterios C, D, E = ANCORA obrigatoria (A completo) + cluster polietico (B, minimo 2/4). Historia retrospectiva valida se houver preenchimento no passado, mesmo que mascarado atualmente.",
        "clusters": [],
        "duration": null,
        "age_onset": "** Tipicamente reconhecido no 2o ano de vida (12-24 meses); pode ser antes dos 12 meses se deficits graves; pode ser apos 24 meses se sintomas sutis",
        "functional_impairment": "- Prejuizo clinicamente significativo no funcionome_completonto social, profissional ou outras areas importantes ATUALMENTE",
        "exclusions": [],
        "specifiers": [
          "Com / sem comprometimento intelectual concomitante",
          "Com / sem comprometimento da linguagem concomitante (com nivel atual: sem fala inteligivel / fala telegrafica / frases completas / fala fluente)",
          "Associado a condicao medica ou genetica conhecida ou fator ambiental",
          "Associado a outro transtorno do neurodesenvolvimento, mental ou comportamental",
          "Com catatonia (codigo adicional 293.89 [F06.1])",
          "Idade da primeira preocupacao",
          "Com / sem perda de habilidades estabelecidas"
        ],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [
          "A crianca/initcia interacoes sociais? Compartilha interesses, emocoes, brincadeiras?",
          "Ha contato visual adequado? Usa gestos (apontar, mostrar) espontaneamente?",
          "Ha interesse por outras criancas/pares? Consegue fazer/manter amizades?",
          "Ha comportamentos repetitivos (abanar maos, alinhar brinquedos, ecolalia)?",
          "Ha insistencia em rotinas, dificuldade com mudancas, rituais?",
          "Ha interesses muito restritos/fixos que sao anormais em intensidade?",
          "Ha hipersensibilidade ou hipossensibilidade sensorial (sons, texturas, luzes, dor)?",
          "Os sintomas comecaram na primeira infancia?",
          "Ha prejuizo atual no funcionome_completonto (social, escolar, profissional)?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### Transtorno do Espectro Autista",
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
    "fonte_capitulo_md": "01_transtornos_neurodesenvolvimento.md",
    "fonte_inventario_md": "inventario/01_inventario.md",
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
  "grupo": "Transtorno do Espectro Autista",
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:** **A** monoético (3/3 obrigatórios em déficits de comunicação social: reciprocidade, comportamentos não-verbais, desenvolvimento de relacionamentos) + **B** polietético (2/4 em padrões restritivos/repetitivos: estereotipias, rigidez, interesses fixos, hiper/hiporreatividade sensorial) + gravidade em tabela dual (nível de apoio necessário em A × B). + 4 especificadores ortogonais: com/sem comprometimento intelectual, com/sem comprometimento de linguagem, associado a condição médica/genética, associado a outro transtorno do neurodesenvolvimento.",
    "notas_clinicas": "- **Notas:** Substitui autismo, síndrome de Asperger e TID-NOS do DSM-IV. Tabela de gravidade é bidimensional (social + restritivo). Prevalência ~1%."
  },
  
});
export type DisorderData = typeof data;
