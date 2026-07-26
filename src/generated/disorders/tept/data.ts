import { TeptSchema } from "./schema";

export const data = TeptSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "tept",
    "nome_completo": "Transtorno de Estresse Pós-Traumático",
    "codigo": {
        "dsm5": "",
        "cid10": "F43.10",
        "cid11": "6B40"
    },
    "capitulo": "Transtornos Relacionados a Trauma e a Estressores",
    "capitulo_id": "transtornos_relacionados_a_trauma_e_a_estressores",
    "sigla": "TEPT",
    "codificacao": {
        "cid10_cm": {
            "referencia_base": "F43.10",
            "equivalencia": "direta",
            "regra": "Correspondência diagnóstica direta no nível informado; confirmar especificadores e requisitos da versão CID-10-CM adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6B40",
            "equivalencia": "direta",
            "regra": "Correspondência diagnóstica direta; selecionar eventual subcategoria de curso, gravidade ou remissão quando aplicável.",
            "versao": "CID-11 MMS 2026-01"
        }
    },
    "agrupamento": {
        "capitulo": {
            "id": "transtornos_relacionados_a_trauma_e_a_estressores",
            "label": "Transtornos Relacionados a Trauma e a Estressores"
        },
        "subgrupo": null
    },
    "faixa_etaria_alvo": "transversal",
    "terminologia_relacionada": [
        {
            "termo": "PTSD",
            "status": "sigla_em_ingles",
            "equivalencia": "equivalente",
            "nota": "Não é termo histórico; é a sigla inglesa corrente."
        }
    ]
},
  "estrutura_geral": "polythetic_clusters_simetricos",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Exposição a Trauma",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Exposição a morte, ferimento grave ou violência sexual",
                "desc": "Exposição a morte real ou ameaçada, ferimento grave, ou violência sexual, de uma das formas: exposição direta, testemunhar pessoalmente, tomar conhecimento de evento com familiar/amigo próximo, ou exposição repetida/extrema indireta (profissionais).",
                "pergunta": "A pessoa vivenciou, presenciou ou soube de um evento que envolveu morte, ferimento grave ou violência sexual?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Sobrevivente de acidente grave",
                    "Socorrista exposto repetidamente a mortes"
                ]
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    },
    {
        "id": "B",
        "nome": "Sintomas de Intrusão (≥1/5)",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 1,
            "pediatria": 1
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "B1",
                "rotulo": "Memórias intrusivas involuntárias do trauma",
                "desc": "Memórias angustiantes e intrusivas recorrentes e involuntárias do evento traumático.",
                "pergunta": "A pessoa tem memórias perturbadoras do trauma que surgem sem querer?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Flashbacks de violência sexual"
                ]
            },
            {
                "id": "B2",
                "rotulo": "Sonhos perturbadores do trauma",
                "desc": "Sonhos angustiantes repetidos com conteúdo e/ou emoções relacionados ao trauma.",
                "pergunta": "A pessoa tem pesadelos frequentes sobre o trauma?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "B3",
                "rotulo": "Reações dissociativas (flashbacks)",
                "desc": "Reações dissociativas em que o indivíduo sente ou age como se o trauma estivesse ocorrendo novamente.",
                "pergunta": "A pessoa tem flashbacks em que sente que o trauma está acontecendo de novo?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Flashback com perda de contato com a realidade"
                ]
            },
            {
                "id": "B4",
                "rotulo": "Sofrimento psicológico intenso a estímulos relacionados",
                "desc": "Sofrimento psicológico intenso ao ser exposto a estímulos internos ou externos que simbolizam/se assemelham ao trauma.",
                "pergunta": "A pessoa fica muito angustiado quando algo lembra o trauma?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Pânico ao ouvir barulho de tiros"
                ]
            },
            {
                "id": "B5",
                "rotulo": "Reações fisiológicas a estímulos relacionados",
                "desc": "Reações fisiológicas marcadas a estímulos que simbolizam o evento traumático.",
                "pergunta": "A pessoa tem reações físicas intensas (coração acelerado, suor) quando algo lembra o trauma?",
                "faixa_aplicavel": null,
                "nota": null
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    },
    {
        "id": "C",
        "nome": "Evitação Persistente (≥1/2)",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 1,
            "pediatria": 1
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "C1",
                "rotulo": "Evitação de pensamentos/sentimentos sobre o trauma",
                "desc": "Esforços para evitar pensamentos, sentimentos ou sensações angustiantes associados ao evento traumático.",
                "pergunta": "A pessoa evita pensar, sentir ou falar sobre o trauma?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "C2",
                "rotulo": "Evitação de estímulos externos relacionados ao trauma",
                "desc": "Esforços para evitar lembretes externos (pessoas, lugares, conversas, atividades, objetos, situações) que despertem recordações.",
                "pergunta": "A pessoa evita lugares, pessoas ou situações que lembram o trauma?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Recusa de usar carro após acidente grave"
                ]
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    },
    {
        "id": "D",
        "nome": "Alterações Negativas em Cognições e Humor (≥2/7)",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 2,
            "pediatria": 2
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "D1",
                "rotulo": "Incapacidade de recordar aspecto importante do trauma",
                "desc": "Incapacidade de recordar um aspecto importante do evento traumático (amnésia dissociativa, não outro fator).",
                "pergunta": "A pessoa tem dificuldade de lembrar detalhes importantes sobre o trauma?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "D2",
                "rotulo": "Crenças ou expectativas negativas persistentes",
                "desc": "Crenças ou expectativas negativas persistentes e exageradas sobre si mesmo, os outros ou o mundo.",
                "pergunta": "A pessoa tem pensamentos negativos persistentes como 'Sou uma pessoa ruim' ou 'O mundo é completamente perigoso'?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "'Não posso confiar em ninguém'"
                ]
            },
            {
                "id": "D3",
                "rotulo": "Cognições distorcidas sobre a causa do trauma",
                "desc": "Cognições persistentes e distorcidas sobre a causa ou consequências do trauma que levam o indivíduo a culpar a si mesmo ou aos outros.",
                "pergunta": "A pessoa se culpa ou culpa outros de forma exagerada pelo que aconteceu?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "D4",
                "rotulo": "Estado emocional negativo persistente",
                "desc": "Estado emocional negativo persistente (medo, horror, raiva, culpa, vergonha).",
                "pergunta": "A pessoa se sente persistentemente com medo, horror, culpa ou vergonha desde o trauma?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "D5",
                "rotulo": "Interesse acentuadamente diminuído em atividades",
                "desc": "Interesse ou participação acentuadamente diminuídos em atividades significativas.",
                "pergunta": "A pessoa perdeu o interesse em atividades que gostava antes do trauma?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "D6",
                "rotulo": "Sentimentos de distanciamento dos outros",
                "desc": "Sentimentos de distanciamento ou estranhamento em relação aos outros.",
                "pergunta": "A pessoa se sente distante ou desconectado das pessoas próximas?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "D7",
                "rotulo": "Incapacidade persistente de sentir emoções positivas",
                "desc": "Incapacidade persistente de experimentar emoções positivas (incapacidade de sentir amor, alegria, satisfação).",
                "pergunta": "A pessoa tem dificuldade de sentir alegria, amor ou satisfação desde o trauma?",
                "faixa_aplicavel": null,
                "nota": null
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    },
    {
        "id": "E",
        "nome": "Alterações em Excitabilidade e Reatividade (≥2/6)",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 2,
            "pediatria": 2
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "E1",
                "rotulo": "Comportamento irritável e explosões de raiva",
                "desc": "Comportamento irritável e explosões de raiva (com pouca ou nenhuma provocação).",
                "pergunta": "A pessoa está mais irritável ou tem explosões de raiva desde o trauma?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "E2",
                "rotulo": "Comportamento imprudente ou autodestrutivo",
                "desc": "Comportamento imprudente ou autodestrutivo.",
                "pergunta": "A pessoa tem agido de forma imprudente ou arriscada desde o trauma?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Direção imprudente",
                    "Uso de drogas"
                ]
            },
            {
                "id": "E3",
                "rotulo": "Hipervigilância",
                "desc": "Hipervigilância.",
                "pergunta": "A pessoa está constantemente em alerta ou com sensação de estar sendo ameaçado?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Sentar de costas para a parede em restaurantes"
                ]
            },
            {
                "id": "E4",
                "rotulo": "Resposta de sobressalto exagerada",
                "desc": "Resposta de sobressalto exagerada.",
                "pergunta": "A pessoa se assusta exageradamente com sons ou movimentos inesperados?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "E5",
                "rotulo": "Problemas de concentração",
                "desc": "Problemas de concentração.",
                "pergunta": "A pessoa tem tido dificuldade de se concentrar desde o trauma?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "E6",
                "rotulo": "Perturbação do sono",
                "desc": "Perturbação do sono (dificuldade em adormecer ou manter o sono, ou sono agitado).",
                "pergunta": "A pessoa tem problemas com o sono desde o trauma?",
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
        "id": "duracao",
        "letra": "F",
        "rotulo": "Duração superior a 1 mês",
        "tipo": "temporal_duracao_minima",
        "ui_widget": "campo_duracao_meses",
        "obrigatorio": true,
        "icone": "Calendar",
        "descricao_completa": "A duração da perturbação (Critérios B, C, D, E) é superior a 1 mês.",
        "nota": null
    },
    {
        "id": "sofrimento_funcional",
        "letra": "G",
        "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Frown",
        "descricao_completa": "Causa sofrimento clinicamente significativo ou prejuízo no funcionamento.",
        "nota": null
    },
    {
        "id": "exclusao_substancia_medica",
        "letra": "H",
        "rotulo": "Não atribuível a substância ou condição médica",
        "tipo": "exclusao_substancia_medica",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Não atribuível a efeitos fisiológicos de substância ou condição médica.",
        "nota": null
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
        "id": "com_sintomas_dissociativos",
        "nome": "Com sintomas dissociativos",
        "tipo": "enum",
        "ortogonal": true,
        "regra_criterial": null,
        "opcoes": [
            "Com despersonalização",
            "Com desrealização"
        ]
    },
    {
        "id": "inicio_retardado",
        "nome": "Com início retardado",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": "Início ≥6 meses após o evento."
    }
],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6B40",
        "equivalencia": "direta",
        "regra": "Correspondência diagnóstica direta; selecionar eventual subcategoria de curso, gravidade ou remissão quando aplicável.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno de estresse pós-traumático."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": null,
      },
  "dominios_impacto": [
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
    },
    {
        "id": "relacoes_interpessoais",
        "label": "Relações interpessoais e familiares",
        "icone": "Heart",
        "relevante_para": "transversal"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "transtorno_de_estresse_agudo",
        "condicao": "Transtorno de Estresse Agudo",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno de Estresse Agudo: duração ≤1 mês após trauma; Transtorno de Estresse Pós-Traumático: >1 mês.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_depressivo_maior",
        "condicao": "Transtorno Depressivo Maior",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno Depressivo Maior: não exige trauma específico; Transtorno de Estresse Pós-Traumático: trauma é critério diagnóstico central.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtornos_dissociativos",
        "condicao": "Transtornos Dissociativos",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Podem coexistir; Transtorno de Estresse Pós-Traumático especificador com sintomas dissociativos quando presentes.",
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
      "condicao": "Transtornos por uso de substâncias",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtornos de ansiedade",
      "frequencia": "alta",
      "nota": null
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "pcl_5",
        "nome": "Lista de Verificação de TEPT para o DSM-5",
        "sigla": "PCL-5",
        "uso": "triagem_monitoramento",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "caps_5",
        "nome": "Escala de TEPT Administrada pelo Clínico para o DSM-5",
        "sigla": "CAPS-5",
        "uso": "apoio_diagnostico",
        "faixa_etaria": "adulto",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "tipo_estimativa": "prevalencia_12_meses",
    "estimativa": "Cerca de 3,5% em 12 meses nos Estados Unidos no panorama do DSM-5-TR; estimativas internacionais são menores e variam amplamente por exposição e contexto.",
    "distribuicao_por_sexo": "2:1 mulheres:homens",
    "variacoes_contextuais": "A exposição a traumas, o contexto social e a expressão dos sintomas variam entre populações; taxas nacionais não devem ser generalizadas sem ajustar a exposição.",
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Pode surgir em qualquer idade após exposição traumática; a expressão varia ao longo do desenvolvimento.",
    "trajetoria": "Altamente variável: parte apresenta remissão em meses, enquanto outra mantém sintomas persistentes ou de expressão tardia.",
    "prognostico": "Exposição repetida, dissociação, comorbidades, apoio social e estressores contínuos influenciam o curso.",
    "nota_aplicador": "Início e trajetória são descritores típicos, não critérios isolados; um curso diferente exige reavaliação, mas não exclusão automática."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_clusters_assimetricos",
        "criteria": [],
        "diagnostic_rule": "A ≥ 1 AND B ≥ 1 AND C ≥ 1 AND D ≥ 2 AND E ≥ 2 AND F > 1_mes AND G = true AND H = true",
        "clusters": [],
        "duration": null,
        "age_onset": null,
        "functional_impairment": null,
        "exclusions": [
          "Efeito fisiologico de substancia/medicamento",
          "Outra condicao medica (ex: lesao cerebral traumatica)",
          "Transtorno de estresse agudo (duracao < 1 mes)",
          "Transtorno de adaptacao (estressor nao atende criterio A)",
          "TOC (obsessoes nao ligadas a trauma + compulsoes presentes)",
          "Transtorno depressivo maior (nao inclui sintomas dos criterios B ou C do TEPT)",
          "Transtornos da personalidade (dificuldades pre-existentes ao trauma)",
          "Transtornos dissociativos (amnesia dissociativa sem outros sintomas de TEPT)",
          "Transtorno conversivo",
          "Transtornos psicoticos (distinguir flashbacks de delirios/alucinacoes)",
          "Lesao cerebral traumatica (desorientacao/confusao persistente mais especifica de LCT)"
        ],
        "specifiers": [],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### TRANSTORNO DE ESTRESSE POS-TRAUMATICO (TEPT) - 309.81 (F43.10)",
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
    "fonte_capitulo_md": "07_transtornos_relacionados_trauma_a_estressores.md",
    "fonte_inventario_md": null,
    "data_extracao": "2026-05-31",
    "modelo_agente": "antigravity-gemini",
    "lacunas_globais": [],
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
