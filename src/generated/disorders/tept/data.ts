import { TeptSchema } from "./schema";

export const data = TeptSchema.parse({
  "$schema_version": "1.0.0",
  "meta": {
    "id": "tept",
    "nome_completo": "Transtorno de Estresse Pós-Traumático",
    "sigla": "TEPT",
    "codigo": {
      "dsm5": "309.81",
      "cid10": "F43.10",
      "cid11": "6B40"
    },
    "capitulo": "Transtornos Relacionados a Trauma e a Estressores",
    "capitulo_id": "07",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": true,
    "sinonimos_historicos": [
      "PTSD"
    ]
  },
  "estrutura_geral": "polythetic_clusters_simetricos",
  "clusters_sintomas": [
    {
      "id": "A",
      "nome": "Exposição a Trauma",
      "tipo": "unico_obrigatorio",
      "limiar": null,
      "ancora_obrigatoria": null,
      "sintomas": [
        {
          "id": "A1",
          "rotulo": "Exposição direta a morte, ameaça de morte, ferimento ou v...",
          "desc": "Exposição a morte real ou ameaçada, ferimento grave, ou violência sexual, de uma das formas: exposição direta, testemunhar pessoalmente, tomar conhecimento de evento com familiar/amigo próximo, ou exposição repetida/extrema indireta (profissionais).",
          "pergunta": "Você vivenciou, presenciou ou soube de um evento que envolveu morte, ferimento grave ou violência sexual?",
          "exemplos_clinicos": [
            "Sobrevivente de acidente grave",
            "Socorrista exposto repetidamente a mortes"
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
          "pergunta": "Você tem memórias perturbadoras do trauma que surgem sem querer?",
          "exemplos_clinicos": [
            "Flashbacks de violência sexual"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "B2",
          "rotulo": "Sonhos perturbadores do trauma",
          "desc": "Sonhos angustiantes repetidos com conteúdo e/ou emoções relacionados ao trauma.",
          "pergunta": "Você tem pesadelos frequentes sobre o trauma?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "B3",
          "rotulo": "Reações dissociativas (flashbacks)",
          "desc": "Reações dissociativas em que o indivíduo sente ou age como se o trauma estivesse ocorrendo novamente.",
          "pergunta": "Você tem flashbacks em que sente que o trauma está acontecendo de novo?",
          "exemplos_clinicos": [
            "Flashback com perda de contato com a realidade"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "B4",
          "rotulo": "Sofrimento psicológico intenso a estímulos relacionados",
          "desc": "Sofrimento psicológico intenso ao ser exposto a estímulos internos ou externos que simbolizam/se assemelham ao trauma.",
          "pergunta": "Você fica muito angustiado quando algo lembra o trauma?",
          "exemplos_clinicos": [
            "Pânico ao ouvir barulho de tiros"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "B5",
          "rotulo": "Reações fisiológicas a estímulos relacionados",
          "desc": "Reações fisiológicas marcadas a estímulos que simbolizam o evento traumático.",
          "pergunta": "Você tem reações físicas intensas (coração acelerado, suor) quando algo lembra o trauma?",
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
          "pergunta": "Você evita pensar, sentir ou falar sobre o trauma?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "C2",
          "rotulo": "Evitação de estímulos externos relacionados ao trauma",
          "desc": "Esforços para evitar lembretes externos (pessoas, lugares, conversas, atividades, objetos, situações) que despertem recordações.",
          "pergunta": "Você evita lugares, pessoas ou situações que lembram o trauma?",
          "exemplos_clinicos": [
            "Recusa de usar carro após acidente grave"
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
          "pergunta": "Você tem dificuldade de lembrar detalhes importantes sobre o trauma?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "D2",
          "rotulo": "Crenças ou expectativas negativas persistentes",
          "desc": "Crenças ou expectativas negativas persistentes e exageradas sobre si mesmo, os outros ou o mundo.",
          "pergunta": "Você tem pensamentos negativos persistentes como 'Sou uma pessoa ruim' ou 'O mundo é completamente perigoso'?",
          "exemplos_clinicos": [
            "'Não posso confiar em ninguém'"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "D3",
          "rotulo": "Cognições distorcidas sobre a causa do trauma",
          "desc": "Cognições persistentes e distorcidas sobre a causa ou consequências do trauma que levam o indivíduo a culpar a si mesmo ou aos outros.",
          "pergunta": "Você se culpa ou culpa outros de forma exagerada pelo que aconteceu?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "D4",
          "rotulo": "Estado emocional negativo persistente",
          "desc": "Estado emocional negativo persistente (medo, horror, raiva, culpa, vergonha).",
          "pergunta": "Você se sente persistentemente com medo, horror, culpa ou vergonha desde o trauma?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "D5",
          "rotulo": "Interesse acentuadamente diminuído em atividades",
          "desc": "Interesse ou participação acentuadamente diminuídos em atividades significativas.",
          "pergunta": "Você perdeu o interesse em atividades que gostava antes do trauma?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "D6",
          "rotulo": "Sentimentos de distanciamento dos outros",
          "desc": "Sentimentos de distanciamento ou estranhamento em relação aos outros.",
          "pergunta": "Você se sente distante ou desconectado das pessoas próximas?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "D7",
          "rotulo": "Incapacidade persistente de sentir emoções positivas",
          "desc": "Incapacidade persistente de experimentar emoções positivas (incapacidade de sentir amor, alegria, satisfação).",
          "pergunta": "Você tem dificuldade de sentir alegria, amor ou satisfação desde o trauma?",
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
          "pergunta": "Você está mais irritável ou tem explosões de raiva desde o trauma?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "E2",
          "rotulo": "Comportamento imprudente ou autodestrutivo",
          "desc": "Comportamento imprudente ou autodestrutivo.",
          "pergunta": "Você tem agido de forma imprudente ou arriscada desde o trauma?",
          "exemplos_clinicos": [
            "Direção imprudente",
            "Uso de drogas"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "E3",
          "rotulo": "Hipervigilância",
          "desc": "Hipervigilância.",
          "pergunta": "Você está constantemente em alerta ou com sensação de estar sendo ameaçado?",
          "exemplos_clinicos": [
            "Sentar de costas para a parede em restaurantes"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "E4",
          "rotulo": "Resposta de sobressalto exagerada",
          "desc": "Resposta de sobressalto exagerada.",
          "pergunta": "Você se assusta exageradamente com sons ou movimentos inesperados?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "E5",
          "rotulo": "Problemas de concentração",
          "desc": "Problemas de concentração.",
          "pergunta": "Você tem tido dificuldade de se concentrar desde o trauma?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "E6",
          "rotulo": "Perturbação do sono",
          "desc": "Perturbação do sono (dificuldade em adormecer ou manter o sono, ou sono agitado).",
          "pergunta": "Você tem problemas com o sono desde o trauma?",
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
      "id": "duracao",
      "letra": "F",
      "rotulo": "Duração >1 mês",
      "tipo": "temporal_duracao_minima",
      "ui_widget": "campo_duracao_meses",
      "obrigatorio": true,
      "icone": "Calendar",
      "ddx_sugeridos": [],
      "descricao_completa": "A duração da perturbação (Critérios B, C, D, E) é superior a 1 mês.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "sofrimento_funcional",
      "letra": "G",
      "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
      "tipo": "prejuizo_funcional",
      "ui_widget": "toggle_com_justificativa_obrigatoria",
      "obrigatorio": true,
      "icone": "Frown",
      "ddx_sugeridos": [],
      "descricao_completa": "Causa sofrimento clinicamente significativo ou prejuízo no funcionamento.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_substancia_medica",
      "letra": "H",
      "rotulo": "Não atribuível a substância ou condição médica",
      "tipo": "exclusao_substancia_medica",
      "ui_widget": "toggle_com_justificativa_obrigatoria",
      "obrigatorio": true,
      "icone": "Ban",
      "ddx_sugeridos": [],
      "descricao_completa": "Não atribuível a efeitos fisiológicos de substância ou condição médica.",
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
  "especificadores": [
    {
      "id": "com_sintomas_dissociativos",
      "nome": "Com sintomas dissociativos",
      "tipo": "select_unico",
      "ortogonal": true,
      "opcoes": [
        {
          "id": "despersonalizacao",
          "label": "Com despersonalização",
          "codigo_adicional": null
        },
        {
          "id": "desrealizacao",
          "label": "Com desrealização",
          "codigo_adicional": null
        }
      ],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "inicio_retardado",
      "nome": "Com início retardado",
      "tipo": "booleano",
      "ortogonal": true,
      "opcoes": [],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": "Início ≥6 meses após o evento.",
        "fonte_passada_1": true
      }
    }
  ],
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
      "id": "familiar",
      "label": "Funcionamento Familiar",
      "icone": "House",
      "relevante_para": "transversal"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno de Estresse Agudo",
      "ponto_distincao": "TEA: duração ≤1 mês após trauma; TEPT: >1 mês.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno Depressivo Maior",
      "ponto_distincao": "TDM: não exige trauma específico; TEPT: trauma é critério diagnóstico central.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtornos Dissociativos",
      "ponto_distincao": "Podem coexistir; TEPT especificador com sintomas dissociativos quando presentes.",
      "pertence_a_classe": false
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
      "nome": "PTSD Checklist for DSM-5",
      "sigla": "PCL-5",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Clinician-Administered PTSD Scale",
      "sigla": "CAPS-5",
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ],
  "prevalencia": {
    "populacao_geral": "3,5% (prevalência de 12 meses nos EUA); 0,5–1% internacionalmente",
    "proporcao_sexo": "2:1 mulheres:homens",
    "variacoes_culturais": "Taxas menores em países com renda baixa; expressão varia culturalmente.",
    "notas": "Risco de TEPT condicional (após trauma) ~20%; variaações por tipo de trauma.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Qualquer idade; pode ocorrer em crianças pequenas após trauma",
    "trajetoria": "Altamente variável: ~50% recuperam em 3 meses; outros persistem décadas.",
    "prognostico": "Boa resposta a TCC focada no trauma (CPT, PE) e EMDR.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
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
  "id": "tept",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
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
  "sigla": "TEPT",
  "versao_complementar_existe": true,
  "inventario_clinico": {
    "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 309.81 (F43.10)",
    "estrutura_efetiva": "- **Estrutura efetiva:**",
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
