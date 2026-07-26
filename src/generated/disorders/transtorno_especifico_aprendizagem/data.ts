import { TranstornoEspecificoAprendizagemSchema } from "./schema";

export const data = TranstornoEspecificoAprendizagemSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "transtorno_especifico_aprendizagem",
    "nome_completo": "Transtorno Específico da Aprendizagem",
    "codigo": {
        "dsm5": "",
        "cid10": "F81.0",
        "cid11": "6A03"
    },
    "capitulo": "Transtornos do Neurodesenvolvimento",
    "capitulo_id": "transtornos_do_neurodesenvolvimento",
    "sigla": null,
    "codificacao": {
        "cid10_cm": {
            "referencia_base": "F81.0",
            "equivalencia": "direta",
            "regra": "Correspondência diagnóstica direta no nível informado; confirmar especificadores e requisitos da versão CID-10-CM adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6A03",
            "equivalencia": "contextual",
            "regra": "Selecionar 6A03.0–6A03.2 para leitura, expressão escrita ou matemática; codificar cada domínio documentado.",
            "versao": "CID-11 MMS 2026-01"
        }
    },
    "agrupamento": {
        "capitulo": {
            "id": "transtornos_do_neurodesenvolvimento",
            "label": "Transtornos do Neurodesenvolvimento"
        },
        "subgrupo": {
            "id": "transtorno_especifico_da_aprendizagem",
            "label": "Transtorno Específico da Aprendizagem",
            "natureza": "subgrupo_do_capitulo"
        }
    },
    "faixa_etaria_alvo": "transversal",
    "terminologia_relacionada": [
        {
            "termo": "Dislexia",
            "status": "termo_de_dominio",
            "equivalencia": "parcial",
            "nota": "Usado para o padrão de prejuízo em leitura; não é sinônimo da categoria inteira."
        },
        {
            "termo": "Discalculia",
            "status": "termo_de_dominio",
            "equivalencia": "parcial",
            "nota": "Usado para o padrão de prejuízo em matemática; não é sinônimo da categoria inteira."
        },
        {
            "termo": "Disgrafia",
            "status": "termo_de_dominio",
            "equivalencia": "parcial",
            "nota": "Uso variável; não substitui a especificação formal do domínio prejudicado."
        }
    ]
},
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Dificuldades na Aprendizagem e no Uso de Habilidades Acadêmicas",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 1,
            "pediatria": 1
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Leitura de palavras imprecisa ou lenta",
                "desc": "Dificuldade na leitura de palavras de forma imprecisa ou lenta e hesitante (lê palavras isoladas em voz alta incorretamente ou de forma lenta e hesitante).",
                "pergunta": "A pessoa ou a criança lê de forma silabada, hesitante ou comete erros frequentes trocando letras na leitura de palavras?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Leitura excessivamente lenta para a idade",
                    "Adivinhar palavras pelo contexto gráfico"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Dificuldade para compreender o sentido do que é lido",
                "desc": "Dificuldade para compreender o sentido da leitura (lê o texto com precisão, mas não compreende a sequência, a lógica ou o significado do texto).",
                "pergunta": "Ao terminar de ler uma página, é difícil lembrar ou explicar o que acabou de ler?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Ler um parágrafo e não conseguir responder perguntas sobre ele",
                    "Dificuldade em reter detalhes lidos"
                ]
            },
            {
                "id": "A3",
                "rotulo": "Dificuldades com a ortografia",
                "desc": "Dificuldade com a ortografia (pode omitir, acrescentar ou substituir letras de forma inadequada).",
                "pergunta": "A escrita apresenta muitos erros ortográficos primários, mesmo após anos de treinamento escolar?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Trocar 'v' por 'f' ou 'b' por 'p' de forma persistente na adolescência",
                    "Escrita sem regras ortográficas básicas"
                ]
            },
            {
                "id": "A4",
                "rotulo": "Dificuldades com a expressão escrita",
                "desc": "Erros graves de gramática, pontuação, organização frasal de parágrafos pobre ou falta de clareza na expressão de ideias por escrito.",
                "pergunta": "Há sérias dificuldades em estruturar um texto escrito, com erros de pontuação graves ou ideias desorganizadas?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Parágrafos sem coesão gramatical",
                    "Incômodo grave em realizar redações de qualquer tipo"
                ]
            },
            {
                "id": "A5",
                "rotulo": "Dificuldades em dominar o sentido numérico",
                "desc": "Pobre compreensão de números, sua magnitude e relações, conta nos dedos para somar um dígito só.",
                "pergunta": "Fazer cálculos matemáticos simples de cabeça ou compreender conceitos numéricos básicos é extremamente difícil?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Uso de dedos para somas triviais na adolescência",
                    "Incompreensão de estimativas de valores numéricos"
                ]
            },
            {
                "id": "A6",
                "rotulo": "Dificuldades no raciocínio matemático",
                "desc": "Dificuldade extrema em aplicar conceitos, fatos ou fórmulas matemáticas para resolver problemas quantitativos.",
                "pergunta": "Problemas matemáticos de lógica ou situações cotidianas com cálculos causam grande bloqueio?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Incapacidade de resolver problemas matemáticos básicos de livros escolares",
                    "Bloqueio completo com equações simples"
                ]
            }
        ],
        "descricao_qualitativa": "Presença de pelo menos 1 dos 6 sintomas por no mínimo 6 meses, a despeito da provisão de intervenções dirigidas.",
        "nota": null,
        "regra_temporal": null
    }
],
  "criterios_condicionais": [
    {
        "id": "abaixo_da_media",
        "letra": "B",
        "rotulo": "Habilidades muito abaixo do esperado",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "ChartColumn",
        "descricao_completa": "As habilidades acadêmicas afetadas estão substancial e quantificavelmente abaixo do esperado para a idade cronológica e causam interferência no desempenho.",
        "nota": null
    },
    {
        "id": "manifesto_escolar",
        "letra": "C",
        "rotulo": "Início nos anos escolares",
        "tipo": "condicional_etario",
        "ui_widget": "campo_idade",
        "obrigatorio": true,
        "icone": "GraduationCap",
        "descricao_completa": "As dificuldades de aprendizagem iniciam-se durante os anos escolares, mas podem não se manifestar plenamente até que as exigências ultrapassem a capacidade limitada.",
        "nota": null
    },
    {
        "id": "nao_explicado_neurologico",
        "letra": "D",
        "rotulo": "Não explicado por outras causas",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Não são mais bem explicadas por deficiências intelectuais, acuidade visual ou auditiva não corrigida, outros transtornos mentais ou neurológicos.",
        "nota": null,
        "ddx_sugeridos": [
            "deficiencia_intelectual",
            "deficiencia_visual_nao_corrigida",
            "deficiencia_auditiva_nao_corrigida",
            "transtorno_neurologico",
            "adversidade_psicossocial",
            "instrucao_educacional_inadequada"
        ]
    }
],
  "subtipos": {
    "presente": true,
    "nome": "Domínio acadêmico prejudicado",
    "natureza": "dominio_prejudicado",
    "formal_dsm": true,
    "mutuamente_exclusivos": false,
    "subtipos": [
        {
            "id": "prejuizo_leitura",
            "label": "Com prejuízo na leitura",
            "descricao": "Registrar habilidades afetadas, como precisão, fluência e compreensão.",
            "codigo": {
                "dsm5_legacy": "315.00",
                "cid10_cm": "F81.0",
                "cid11_mms": "6A03.0",
                "regra": "Os domínios não são mutuamente exclusivos; codificar cada prejuízo documentado conforme o sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "prejuizo_expressao_escrita",
            "label": "Com prejuízo na expressão escrita",
            "descricao": "Registrar habilidades afetadas, como ortografia, gramática, pontuação, clareza e organização.",
            "codigo": {
                "dsm5_legacy": "315.2",
                "cid10_cm": "F81.81",
                "cid11_mms": "6A03.1",
                "regra": "Os domínios não são mutuamente exclusivos; codificar cada prejuízo documentado conforme o sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "prejuizo_matematica",
            "label": "Com prejuízo na matemática",
            "descricao": "Registrar habilidades afetadas, como senso numérico, memorização de fatos, cálculo e raciocínio.",
            "codigo": {
                "dsm5_legacy": "315.1",
                "cid10_cm": "F81.2",
                "cid11_mms": "6A03.2",
                "regra": "Os domínios não são mutuamente exclusivos; codificar cada prejuízo documentado conforme o sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        }
    ],
    "nota_aplicador": "Marque todos os domínios acadêmicos com prejuízo confirmado."
},
  "especificadores": [
    {
        "id": "com_prejuizo_leitura",
        "nome": "Com prejuízo na leitura (Dislexia)",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "com_prejuizo_expressao_escrita",
        "nome": "Com prejuízo na expressão escrita",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "com_prejuizo_matematica",
        "nome": "Com prejuízo na matemática (Discalculia)",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    }
],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6A03",
        "equivalencia": "contextual",
        "regra": "Selecionar 6A03.0–6A03.2 para leitura, expressão escrita ou matemática; codificar cada domínio documentado.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "transtorno",
    "tipo": "extensao_das_dificuldades_e_necessidade_de_apoio",
    "lembrete_aplicador": "Considere a extensão das dificuldades acadêmicas e a intensidade do apoio necessário.",
    "niveis": [
        {
            "id": "leve",
            "label": "Leve",
            "descritor": "Algumas dificuldades em uma ou duas áreas acadêmicas, compensáveis com adaptações ou apoio."
        },
        {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "Dificuldades acentuadas em uma ou mais áreas, exigindo ensino intensivo e apoio durante parte do tempo."
        },
        {
            "id": "grave",
            "label": "Grave",
            "descritor": "Dificuldades graves em várias áreas, exigindo ensino individualizado, especializado e contínuo."
        }
    ],
    "regra_atribuicao": "Integre extensão das dificuldades, resposta às intervenções e necessidade de apoio especializado."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": null,
      },
  "dominios_impacto": [
    {
        "id": "leitura",
        "label": "Habilidade de Leitura",
        "icone": "BookOpen",
        "relevante_para": "transversal"
    },
    {
        "id": "escrita",
        "label": "Habilidade de Escrita",
        "icone": "PenTool",
        "relevante_para": "transversal"
    },
    {
        "id": "matematica",
        "label": "Matemática",
        "icone": "Calculator",
        "relevante_para": "transversal"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "deficiencia_intelectual",
        "condicao": "Deficiência Intelectual",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Na DI, as dificuldades são globais e proporcionais ao QI baixo, enquanto no Transtorno da Aprendizagem as dificuldades ocorrem em áreas acadêmicas específicas, estando o QI geral preservado.",
        "pertence_a_mesma_classe_dsm": true
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "TDAH",
      "frequencia": "alta",
      "nota": "Frequente em crianças que demonstram tanto impulsividade escolar quanto atrasos específicos."
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "desempenho_academico",
        "nome": "Teste padronizado de desempenho acadêmico",
        "sigla": null,
        "uso": "apoio_diagnostico",
        "faixa_etaria": "pediatria",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "avaliacao_neuropsicologica",
        "nome": "Avaliação neuropsicológica padronizada",
        "sigla": null,
        "uso": "apoio_diagnostico",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Documenta domínios cognitivos e funcionamento; interpretar com escolaridade, cultura e condição sensorial."
    }
],
  "prevalencia": {
    "tipo_estimativa": "prevalencia_pontual",
    "estimativa": "5% a 15% entre crianças em idade escolar e aproximadamente 4% em adultos.",
    "distribuicao_por_sexo": "Mais comum em indivíduos do sexo masculino.",
    "variacoes_contextuais": null,
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Manifesta-se nos anos escolares, embora possa ficar evidente apenas quando as demandas acadêmicas aumentam.",
    "trajetoria": "As dificuldades podem persistir na vida adulta, com expressão modificada por demandas, compensações e suporte.",
    "prognostico": "Domínio afetado, gravidade, comorbidades e acesso a suporte influenciam o funcionamento; evitar promessas deterministas ligadas à idade do diagnóstico.",
    "nota_aplicador": "A idade típica é um lembrete clínico; avaliar história do desenvolvimento e demandas atuais, sem usar a faixa etária como exclusão automática."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [
          "A. Dificuldades na aprendizagem e no uso de habilidades academicas, com pelo menos 1 dos seguintes sintomas por pelo menos 6 meses, apesar de intervencoes:",
          "B. Habilidades academicas afetadas substancial e quantitativamente abaixo do esperado para a idade, causando interferencia significativa no desempenho academico/profissional ou atividades diarias, confirmado por medidas padronizadas e avaliacao clinica. (Para 17+ anos, historia documentada pode substituir avaliacao padronizada.)",
          "C. Dificuldades iniciam-se durante os anos escolares (podem nao se manifestar ate demandas excederem capacidades).",
          "D. Dificuldades NAO explicadas por: deficiencia intelectual, acuidade visual/auditiva nao corrigida, outros transtornos mentais/neurologicos, adversidade psicossocial, falta de proficiencia na lingua de instrucao, ou instrucao educacional inadequada."
        ],
        "diagnostic_rule": ">=1 sintoma do Criterio A (A1-A6) + B + C + D. Todos os 4 criterios obrigatorios. Síntese clinica baseada em historia, relatos escolares e avaliacao psicoeducacional.",
        "clusters": [],
        "duration": null,
        "age_onset": null,
        "functional_impairment": null,
        "exclusions": [],
        "specifiers": [],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [
          "Ha dificuldades persistentes em ler (precisao, fluencia, compreensao)?",
          "Ha dificuldades de ortografia/escrita (erros gramaticais, organizacao fraca)?",
          "Ha dificuldades com numeros, calculos, matematica?",
          "O desempenho esta substancialmente abaixo do esperado para a idade?",
          "As dificuldades comecaram nos anos escolares?",
          "Ha evidencia de testes padronizados confirmando desempenho baixo?",
          "As dificuldades persistem apesar de intervencoes adequadas?",
          "Nao sao explicadas por QI baixo, problemas sensoriais, ou falta de educacao?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### Transtorno Especifico da Aprendizagem",
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
  "grupo": "Transtorno Específico da Aprendizagem",
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:** **A** polietético monocluster (≥1 de 6 sintomas em dificuldades acadêmicas: leitura imprecisa/lenta, compreensão deficiente, ortografia, expressão escrita, números, raciocínio matemático) + **B** performance acadêmica abaixo do esperado (teste padronizado) + **C** início no desenvolvimento + **D** exclusão. Especificadores de domínio: leitura, expressão escrita, matemática — cada um com sub-habilidades.",
    "notas_clinicas": "- **Notas:** Um mesmo indivíduo pode ter todos os 3 domínios. Prevalência 5-15% crianças. \"Dislexia\" e \"discalculia\" são termos alternativos. Domínios não são mutuamente exclusivos."
  },
  
});
export type DisorderData = typeof data;
