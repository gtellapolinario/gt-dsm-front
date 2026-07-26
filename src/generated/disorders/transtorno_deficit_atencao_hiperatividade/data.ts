import { TranstornoDeficitAtencaoHiperatividadeSchema } from "./schema";

export const data = TranstornoDeficitAtencaoHiperatividadeSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "transtorno_deficit_atencao_hiperatividade",
    "nome_completo": "Transtorno de Déficit de Atenção/Hiperatividade",
    "codigo": {
        "dsm5": "",
        "cid10": "F90.2",
        "cid11": "6A05"
    },
    "capitulo": "Transtornos do Neurodesenvolvimento",
    "capitulo_id": "transtornos_do_neurodesenvolvimento",
    "sigla": "TDAH",
    "codificacao": {
        "cid10_cm": {
            "referencia_base": "F90.2",
            "equivalencia": "direta",
            "regra": "Correspondência diagnóstica direta no nível informado; confirmar especificadores e requisitos da versão CID-10-CM adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6A05",
            "equivalencia": "contextual",
            "regra": "Selecionar 6A05.0–6A05.2, 6A05.Y ou 6A05.Z conforme a apresentação.",
            "versao": "CID-11 MMS 2026-01"
        }
    },
    "agrupamento": {
        "capitulo": {
            "id": "transtornos_do_neurodesenvolvimento",
            "label": "Transtornos do Neurodesenvolvimento"
        },
        "subgrupo": {
            "id": "transtorno_de_deficit_de_atencao_hiperatividade",
            "label": "Transtorno de Déficit de Atenção/Hiperatividade",
            "natureza": "subgrupo_do_capitulo"
        }
    },
    "faixa_etaria_alvo": "transversal",
    "terminologia_relacionada": [
        {
            "termo": "Instabilidade psicomotora",
            "status": "obsoleto",
            "equivalencia": "historica",
            "nota": null
        },
        {
            "termo": "Disfunção cerebral mínima",
            "status": "obsoleto",
            "equivalencia": "historica",
            "nota": null
        }
    ]
},
  "estrutura_geral": "polythetic_clusters_simetricos",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Desatenção e hiperatividade ou impulsividade",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 5,
            "pediatria": 6
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Erros por descuido ou falta de atenção a detalhes",
                "desc": "Frequentemente deixa de prestar atenção a detalhes ou comete erros por descuido em atividades escolares, no trabalho ou durante outras atividades.",
                "pergunta": "A pessoa costuma cometer erros bobos por distração no trabalho ou estudos, ou deixar passar detalhes importantes em tarefas longas?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Ignorar instruções em testes e errar perguntas fáceis",
                    "Trabalho impreciso com dados incorretos por pura distração"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Dificuldade em manter a atenção",
                "desc": "Frequentemente tem dificuldade em manter a atenção em tarefas ou atividades lúdicas (ex: palestras, conversas, leituras longas).",
                "pergunta": "Fica muito difícil se concentrar em conversas demoradas, aulas ou leituras de textos extensos sem que sua mente divague?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Perder o foco rapidamente durante reuniões de 30 minutos",
                    "Não conseguir concluir um livro simples por dispersão"
                ]
            },
            {
                "id": "A3",
                "rotulo": "Parece não escutar quando se fala diretamente",
                "desc": "Frequentemente parece não escutar quando alguém lhe dirige a palavra diretamente, com a mente parecendo estar em outro lugar.",
                "pergunta": "As pessoas costumam reclamar que chamam a pessoa ou falam diretamente com a pessoa e a pessoa parece estar 'no mundo da lua'?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Não ouvir quando o cônjuge fala na mesma sala",
                    "Necessitar que repitam instruções dadas individualmente"
                ]
            },
            {
                "id": "A4",
                "rotulo": "Não segue instruções e não termina tarefas",
                "desc": "Frequentemente não segue instruções até o fim e deixa de concluir tarefas escolares, tarefas domésticas ou deveres no trabalho.",
                "pergunta": "A pessoa costuma iniciar projetos ou tarefas com muito entusiasmo, mas acaba deixando-os pela metade por cansaço ou perda de interesse?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Deixar relatórios profissionais sem a conclusão",
                    "Não seguir receitas de cozinha até o fim, pulando etapas"
                ]
            },
            {
                "id": "A5",
                "rotulo": "Dificuldade para organizar tarefas e atividades",
                "desc": "Frequentemente tem dificuldade para organizar tarefas e atividades (ex: gerenciar materiais, organizar tempo, cumprir prazos).",
                "pergunta": "Como é a sua capacidade de organizar sua rotina, gerenciar o tempo, prazos e manter seu espaço de trabalho arrumado?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Perder prazos profissionais frequentemente por desorganização",
                    "Mesa de trabalho extremamente bagunçada de forma crônica"
                ]
            },
            {
                "id": "A6",
                "rotulo": "Evita tarefas que exigem esforço mental prolongado",
                "desc": "Frequentemente evita, antipatiza ou reluta em envolver-se em tarefas que exijam esforço mental prolongado.",
                "pergunta": "A pessoa costuma procrastinar ou adiar tarefas longas que exigem muito raciocínio e atenção, como relatórios ou burocracias?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Adiar o preenchimento de impostos até o último dia",
                    "Crianças que se recusam enfaticamente a fazer a lição de casa"
                ]
            },
            {
                "id": "A7",
                "rotulo": "Perde coisas necessárias para tarefas ou atividades",
                "desc": "Frequentemente perde objetos necessários para tarefas ou atividades (ex: materiais escolares, carteira, chaves, óculos, celulares).",
                "pergunta": "A pessoa perde chaves, celular, documentos ou ferramentas de trabalho com uma frequência muito maior do que as outras pessoas?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Passar horas procurando chaves ou celular perdidos pela casa",
                    "Esquecer objetos pessoais em táxis ou restaurantes"
                ]
            },
            {
                "id": "A8",
                "rotulo": "Facilmente distraído por estímulos externos",
                "desc": "Frequentemente é facilmente distraído por estímulos externos (inclusive pensamentos não relacionados em adultos).",
                "pergunta": "Qualquer barulho na rua ou passagem de uma pessoa na sala de trabalho faz a pessoa perder a concentração no que estava fazendo?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Olhar pela janela a cada ruído",
                    "Dispersar o raciocínio no meio de um relatório por causa de um email que chegou"
                ]
            },
            {
                "id": "A9",
                "rotulo": "Esquecido em atividades diárias",
                "desc": "Frequentemente é esquecido em atividades diárias (ex: tarefas domésticas, pagar contas, manter compromissos).",
                "pergunta": "A pessoa costuma esquecer compromissos marcados, aniversários importantes ou o pagamento de contas recorrentes no dia a dia?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Pagar juros de contas por esquecimento",
                    "Esquecer de levar o almoço para o trabalho"
                ]
            },
            {
                "id": "A10",
                "rotulo": "Remexer-se na cadeira ou batucar mãos/pés",
                "desc": "Frequentemente remexe as mãos ou os pés ou se contorce na cadeira.",
                "pergunta": "A pessoa tem dificuldade em ficar sentado imóvel, movimentando constantemente as pernas ou batucando os dedos na mesa?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Balançar as pernas sem parar enquanto trabalha",
                    "Batucar caneta na mesa de reuniões de forma irritante"
                ]
            },
            {
                "id": "A11",
                "rotulo": "Levantar-se quando deveria permanecer sentado",
                "desc": "Frequentemente levanta-se da cadeira em sala de aula ou em outras situações nas quais se espera que permaneça sentado.",
                "pergunta": "A pessoa sente necessidade de se levantar ou caminhar em situações em que deveria ficar sentado, como em reuniões ou cinema?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Levantar da mesa de jantar antes de terminar a refeição",
                    "Criança que circula pela sala de aula enquanto o professor explica"
                ]
            },
            {
                "id": "A12",
                "rotulo": "Correr ou subir nas coisas em situações inapropriadas",
                "desc": "Frequentemente corre ou sobe nas coisas em situações em que isso é inapropriado (em adolescentes/adultos pode se limitar a sensações subjetivas de inquietude).",
                "pergunta": "A pessoa sente uma inquietude física interna constante, como se estivesse ligado na tomada, mesmo em momentos de descanso?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Criança subindo em estantes de lojas",
                    "Adulto com sensação de agitação motora interna insuportável ao tentar relaxar"
                ]
            },
            {
                "id": "A13",
                "rotulo": "Dificuldade em brincar ou fazer lazer em silêncio",
                "desc": "Frequentemente tem dificuldade para brincar ou envolver-se em atividades de lazer de forma silenciosa.",
                "pergunta": "Acha difícil aproveitar momentos de lazer de forma silenciosa e calma, preferindo atividades mais barulhentas ou ativas?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Falar alto demais em ambientes calmos",
                    "Crianças que sempre brincam de forma muito barulhenta"
                ]
            },
            {
                "id": "A14",
                "rotulo": "Inquietude motora extrema e sensação de 'motor ligado'",
                "desc": "Frequentemente está 'a mil' ou age como se estivesse 'ligado por um motor' (incapaz de ficar parado ou desconfortável em jantares/reuniões).",
                "pergunta": "As pessoas já disseram que a pessoa parece estar sempre acelerado, ativo demais ou inquieto como se estivesse 'ligado na tomada'?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Não conseguir participar de longos jantares de negócios sem inquietude óbvia",
                    "Falar rápido demais de forma impaciente"
                ]
            },
            {
                "id": "A15",
                "rotulo": "Falar em excesso",
                "desc": "Frequentemente fala em excesso.",
                "pergunta": "A pessoa percebe que costuma falar muito mais que as outras pessoas em interações sociais, monopolizando conversas?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Dominar as conversas em grupos sociais",
                    "Monólogos frequentes sem pausa para ouvir o outro"
                ]
            },
            {
                "id": "A16",
                "rotulo": "Responder a perguntas antes que sejam concluídas",
                "desc": "Frequentemente deixa escapar uma resposta antes que a pergunta tenha sido concluída ou completa frases dos outros.",
                "pergunta": "Costuma responder às pessoas ou completar as frases delas antes mesmo que elas terminem de fazer a pergunta?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Completar de forma impaciente as frases de interlocutores lentos",
                    "Responder antes do término da pergunta de um entrevistador"
                ]
            },
            {
                "id": "A17",
                "rotulo": "Dificuldade em esperar a sua vez",
                "desc": "Frequentemente tem dificuldade para esperar a sua vez (ex: em filas, conversas).",
                "pergunta": "Ficar em filas longas ou esperar sua vez no trânsito ou jogos causa um sofrimento ou impaciência extrema em a pessoa?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Demonstrar irritação visível em filas de supermercado",
                    "Furar a vez em jogos infantis"
                ]
            },
            {
                "id": "A18",
                "rotulo": "Interromper ou intrometer-se nas atividades alheias",
                "desc": "Frequentemente interrompe ou se intromete em conversas, jogos ou atividades de outros, podendo usar coisas dos outros sem pedir.",
                "pergunta": "A pessoa costuma se meter em conversas de colegas de trabalho ou jogos alheios de forma intrusiva?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Criança que invade a brincadeira de outras sem ser convidada",
                    "Interromper a fala de colegas de escritório para colocar sua opinião"
                ]
            }
        ],
        "descricao_qualitativa": "A entrada contém dois grupos independentes de nove sintomas, cada um com limiar próprio.",
        "nota": null,
        "regra_temporal": null
    }
],
  "criterios_condicionais": [
    {
        "id": "inicio_antes_12",
        "letra": "B",
        "rotulo": "Sintomas presentes antes dos 12 anos",
        "tipo": "condicional_etario",
        "ui_widget": "campo_idade",
        "obrigatorio": true,
        "icone": "Baby",
        "descricao_completa": "Vários sintomas de desatenção ou hiperatividade-impulsividade estavam presentes antes dos 12 anos de idade.",
        "nota": null
    },
    {
        "id": "dois_ou_mais_ambientes",
        "letra": "C",
        "rotulo": "Sintomas em dois ou mais ambientes",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "ClipboardCheck",
        "descricao_completa": "Vários sintomas de desatenção ou hiperatividade-impulsividade estão presentes em dois ou mais ambientes (ex: em casa, na escola, no trabalho; com amigos ou parentes).",
        "nota": null
    },
    {
        "id": "prejuizo_social_tdah",
        "letra": "D",
        "rotulo": "Interferência ou redução da qualidade do funcionamento",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "TrendingDown",
        "descricao_completa": "Há evidências claras de que os sintomas interferem no funcionamento social, acadêmico ou profissional ou reduzem sua qualidade.",
        "nota": null
    },
    {
        "id": "exclusao_psicotico",
        "letra": "E",
        "rotulo": "Sintomas não explicados por outro transtorno",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Os sintomas não ocorrem exclusivamente durante o curso de esquizofrenia ou outro transtorno psicótico e não são mais bem explicados por outro transtorno mental.",
        "nota": null,
        "ddx_sugeridos": [
            "esquizofrenia",
            "transtorno_ansiedade",
            "transtorno_dissociativo",
            "transtorno_personalidade",
            "transtorno_intoxicacao_substancia",
            "transtorno_abstinencia_substancia"
        ]
    }
],
  "subtipos": {
    "presente": true,
    "nome": "Apresentação Clínica",
    "natureza": "apresentacao",
    "formal_dsm": true,
    "mutuamente_exclusivos": true,
    "subtipos": [
        {
            "id": "apresentacao_combinada",
            "label": "Apresentação combinada",
            "descricao": "Se tanto o Critério A1 (desatenção) quanto o Critério A2 (hiperatividade-impulsividade) forem preenchidos nos últimos 6 meses.",
            "codigo": {
                "dsm5_legacy": "314.01",
                "cid10_cm": "F90.2",
                "cid11_mms": "6A05.2",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "apresentacao_predominantemente_desatenta",
            "label": "Apresentação predominantemente desatenta",
            "descricao": "Se o Critério A1 (desatenção) for preenchido, mas o Critério A2 (hiperatividade-impulsividade) não for preenchido nos últimos 6 meses.",
            "codigo": {
                "dsm5_legacy": "314.00",
                "cid10_cm": "F90.0",
                "cid11_mms": "6A05.0",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "apresentacao_predominantemente_hiperativa_impulsiva",
            "label": "Apresentação predominantemente hiperativa/impulsiva",
            "descricao": "Se o Critério A2 (hiperatividade-impulsividade) for preenchido, mas o Critério A1 (desatenção) não for preenchido nos últimos 6 meses.",
            "codigo": {
                "dsm5_legacy": "314.01",
                "cid10_cm": "F90.1",
                "cid11_mms": "6A05.1",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        }
    ],
    "nota_aplicador": "Selecione somente opções sustentadas pela avaliação clínica."
},
  "especificadores": [
    {
        "id": "em_remissao_parcial",
        "nome": "Em remissão parcial",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    }
],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6A05",
        "equivalencia": "contextual",
        "regra": "Selecionar 6A05.0–6A05.2, 6A05.Y ou 6A05.Z conforme a apresentação.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "transtorno",
    "tipo": "sintomas_excedentes_e_prejuizo",
    "lembrete_aplicador": "Considere sintomas além do mínimo diagnóstico, intensidade dos sintomas e prejuízo funcional.",
    "niveis": [
        {
            "id": "leve",
            "label": "Leve",
            "descritor": "Poucos sintomas além do mínimo e prejuízo funcional pequeno."
        },
        {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "Sintomas ou prejuízo funcional situados entre leve e grave."
        },
        {
            "id": "grave",
            "label": "Grave",
            "descritor": "Muitos sintomas além do mínimo, vários sintomas particularmente graves ou prejuízo funcional acentuado."
        }
    ],
    "regra_atribuicao": "Integre quantidade e intensidade dos sintomas com o grau de prejuízo funcional."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": null,
      },
  "dominios_impacto": [
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
        "id": "social",
        "label": "Funcionamento social",
        "icone": "Users",
        "relevante_para": "transversal"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "transtorno_opositor_desafiante",
        "condicao": "Transtorno Opositor Desafiante",
        "natureza": "transtorno_mental",
        "ponto_distincao": "A aversão a tarefas no Transtorno de Déficit de Atenção/Hiperatividade é motivada por cansaço mental e distração, enquanto no Transtorno de Oposição Desafiante é por hostilidade atitude opositora direta.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtornos_de_ansiedade",
        "condicao": "Transtornos de Ansiedade",
        "natureza": "transtorno_mental",
        "ponto_distincao": "A desatenção na ansiedade decorre de preocupações e medos, não de déficits atencionais primários permanentes.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "disturbio_do_sono_epilepsia_ou_disfuncao_tireoidiana",
        "condicao": "Distúrbio do sono, epilepsia ou disfunção tireoidiana",
        "natureza": "condicao_medica",
        "ponto_distincao": "Sintomas adquiridos, flutuantes ou ligados ao sono/condição médica não sustentam o padrão neurodesenvolvimental.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "efeito_de_substancia_ou_medicamento",
        "condicao": "Efeito de substância ou medicamento",
        "natureza": "substancia_medicamento",
        "ponto_distincao": "Sintomas adquiridos e temporalmente ligados a exposição ou abstinência não sustentam o curso neurodesenvolvimental.",
        "pertence_a_mesma_classe_dsm": false
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
        "id": "snap_iv",
        "nome": "Escala Swanson, Nolan e Pelham – versão IV",
        "sigla": "SNAP-IV",
        "uso": "triagem_informante",
        "faixa_etaria": "pediatria",
        "obrigatorio_para_diagnostico": false,
        "fonte": "apa_dsm5_secao_iii",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "asrs_v1_1",
        "nome": "Escala de Autorrelato de TDAH em Adultos",
        "sigla": "ASRS-v1.1",
        "uso": "triagem",
        "faixa_etaria": "adulto",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "tipo_estimativa": "prevalencia_pontual",
    "estimativa": "Aproximadamente 5% das crianças e 2,5% dos adultos na maioria das culturas.",
    "distribuicao_por_sexo": "Mais comum em indivíduos do sexo masculino, com uma proporção de cerca de 2:1 em crianças e 1,6:1 em adultos.",
    "variacoes_contextuais": "As taxas observadas variam com método, informantes, acesso diagnóstico e práticas locais; critérios equivalentes não eliminam diferenças de aferição.",
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Os sintomas devem estar presentes antes dos 12 anos, embora o diagnóstico possa ocorrer mais tarde.",
    "trajetoria": "Hiperatividade manifesta pode diminuir ou transformar-se em inquietação; desatenção e impulsividade podem persistir, com expressão dependente das demandas.",
    "prognostico": "Gravidade, comorbidades, suporte e ambiente influenciam resultados acadêmicos, ocupacionais e relacionais; evitar causalidade determinista por idade de intervenção.",
    "nota_aplicador": "O limiar antes dos 12 anos refere-se à presença de sintomas, não à idade do diagnóstico."
},
  
  "_pipeline": {
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
        "specifiers": [
          "**Em remissao parcial:** Critérios preenchidos no passado, nem todos nos ultimos 6 meses, sintomas ainda causam prejuizo"
        ],
        "operational_profiles": [],
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
    "fonte_capitulo_md": "01_transtornos_neurodesenvolvimento.md",
    "fonte_inventario_md": "inventario/01_inventario.md",
    "data_extracao": "2026-05-21",
    "modelo_agente": "antigravity-ide",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "revisao_humana_necessaria": false,
    "notas_agente_globais": null
  },
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "grupo": "Transtorno de Déficit de Atenção/Hiperatividade",
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:** **A1** polietético (limiar: 6/9 para crianças até 16a, 5/9 para adultos ≥17a em desatenção) + **A2** polietético (mesmo limiar etário para hiperatividade/impulsividade) + **B** início <12 anos + **C** presente em ≥2 contextos + **D** prejuízo funcional + **E** exclusão de outras causas.",
    "notas_clinicas": "- **Notas:** 18 sintomas totais (9+9). Remissão parcial possível. Prevalência ~5% crianças, ~2,5% adultos."
  },
  
});
export type DisorderData = typeof data;
