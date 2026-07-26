import { TranstornoAnsiedadeSocialSchema } from "./schema";

export const data = TranstornoAnsiedadeSocialSchema.parse({
  "$schema_version": "2.1.0",
  "meta": {
    "id": "transtorno_ansiedade_social",
    "nome_completo": "Transtorno de Ansiedade Social (Fobia Social)",
    "sigla": "TAS",
    "codigo": {
      "dsm5": "300.23",
      "cid10": "F40.10",
      "cid11": "6B04"
    },
    "capitulo": "Transtornos de Ansiedade",
    "capitulo_id": "05",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Fobia Social"
    ]
  },
  "estrutura_geral": "monothetic_puro",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Medo Acentuado em Situações Sociais",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Medo de avaliação negativa em situações sociais",
                "desc": "Medo ou ansiedade acentuados de situações sociais em que pode ser exposto ao exame minucioso dos outros (p. ex. , conversas, encontros com pessoas estranhas, ser observado a comer, apresentações em público). Em crianças: pode ocorrer com pares, não apenas adultos.",
                "pergunta": "A pessoa sente ansiedade intensa quando está em situações sociais onde pode ser observado ou avaliado pelos outros?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Pavor de falar em público",
                    "Terror ao comer em restaurantes"
                ]
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    },
    {
        "id": "B",
        "nome": "Temor de avaliação negativa",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "B1",
                "rotulo": "Medo de agir de forma constrangedora/humilhante",
                "desc": "O indivíduo teme que agirá de uma maneira ou mostrará sintomas de ansiedade que serão avaliados negativamente (humilhação, constrangimento, rejeição).",
                "pergunta": "A pessoa teme humilhar a si mesmo ou ser rejeitado nas situações sociais?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Medo de suar em público e ser julgado"
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
        "id": "situacao_provoca_ansiedade",
        "letra": "C",
        "rotulo": "Situação social quase sempre provoca ansiedade",
        "tipo": "temporal_proporcao",
        "ui_widget": "toggle_simples",
        "obrigatorio": true,
        "icone": "CircleAlert",
        "descricao_completa": "As situações sociais quase sempre provocam medo ou ansiedade. Em crianças: choro, ataques de raiva, imobilidade, apego excessivo.",
        "nota": null
    },
    {
        "id": "evitacao_sofrimento",
        "letra": "D",
        "rotulo": "Situações evitadas ou suportadas com sofrimento intenso",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "EyeOff",
        "descricao_completa": "As situações sociais são evitadas ou suportadas com intenso medo ou ansiedade.",
        "nota": null
    },
    {
        "id": "desproporcional",
        "letra": "E",
        "rotulo": "Medo desproporcional ao perigo real",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Scale",
        "descricao_completa": "O medo ou ansiedade é desproporcional à ameaça real e ao contexto sociocultural.",
        "nota": null
    },
    {
        "id": "duracao_6meses",
        "letra": "F",
        "rotulo": "Duração ≥6 meses",
        "tipo": "temporal_duracao_tipica",
        "ui_widget": "campo_duracao_meses",
        "obrigatorio": true,
        "icone": "CalendarClock",
        "descricao_completa": "O medo, a ansiedade ou a esquiva é persistente, geralmente com duração de seis meses ou mais.",
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
        "descricao_completa": "O medo, ansiedade ou esquiva causa sofrimento clinicamente significativo ou prejuízo no funcionamento.",
        "nota": null
    },
    {
        "id": "comorbidade_condicao_medica",
        "letra": "H",
        "rotulo": "Se houver condição médica, medo, ansiedade ou esquiva são excessivos",
        "tipo": "condicional_comorbidade",
        "ui_widget": "toggle_condicional",
        "obrigatorio": true,
        "icone": "GitBranch",
        "descricao_completa": "Se outra condição médica estiver presente, o medo, a ansiedade ou a esquiva são claramente não relacionados ou excessivos.",
        "nota": null
    },
    {
        "id": "exclusao_outros_transtornos",
        "letra": "I",
        "rotulo": "Não melhor explicado por outro transtorno mental",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "O medo, a ansiedade ou a esquiva não são mais bem explicados pelos sintomas de outro transtorno mental, como transtorno de pânico, transtorno dismórfico corporal ou transtorno do espectro autista.",
        "nota": null,
        "ddx_sugeridos": [
            "transtorno_panico",
            "transtorno_dismorfico_corporal",
            "transtorno_espectro_autista"
        ]
    }
],
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "especificadores": [
    {
        "id": "apenas_desempenho",
        "nome": "Somente de desempenho",
        "tipo": "booleano",
        "ortogonal": false,
        "regra_criterial": "Para quando o medo é limitado a falar ou realizar em público."
    }
],
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno de ansiedade social."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": null,
      },
  "dominios_impacto": [
    {
      "id": "trabalho",
      "label": "Desempenho Profissional",
      "icone": "Briefcase",
      "relevante_para": "adulto"
    },
    {
      "id": "academico",
      "label": "Desempenho Acadêmico",
      "icone": "GraduationCap",
      "relevante_para": "ambos"
    },
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": "transversal"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Timidez/ansiedade social normativa",
      "ponto_distincao": "Timidez normal: não causa prejuízo funcional significativo; TAS: prejuízo clinicamente significativo.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Agorafobia",
      "ponto_distincao": "Agorafobia: medo de situações por impossibilidade de escape; TAS: medo de avaliação social.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno de Pânico",
      "ponto_distincao": "Pânico: medo de ataques de pânico futuros; TAS: medo de situações sociais especificamente.",
      "pertence_a_classe": true
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Outros transtornos de ansiedade",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno Depressivo Maior",
      "frequencia": "alta",
      "nota": "Frequentemente secundário ao TAS."
    },
    {
      "condicao": "Transtorno por uso de álcool",
      "frequencia": "alta",
      "nota": "Álcool como automedicação."
    }
  ],
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "7% (prevalência de 12 meses nos EUA); 2–3% em outros países",
    "proporcao_sexo": "1,5–2:1 mulheres:homens na população geral; sem diferença em amostras clínicas",
    "variacoes_culturais": "Taijin kyofusho (Japão): variante com medo de ofender os outros; taxas mais baixas em Ásia.",
    "notas": "Segundo transtorno de ansiedade mais prevalente após fobia específica.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Mediana de início: ~13 anos; raro início após 25 anos",
    "trajetoria": "Geralmente crônico sem tratamento; pode deteriorar com responsabilidades sociais crescentes.",
    "prognostico": "Boa resposta à TCC; remissão menor que em outros transtornos de ansiedade sem tratamento.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "monothetic_tripartite",
        "criteria": [],
        "diagnostic_rule": "```\n(A SITUACAO_SOCIAL_1+) + (B MEDO_DEMONSTRAR_ANSIEDADE) + (C QUASE_SEMPRE) + (D EVITA_OU_INTENSO) + (E DESPROPORCIONAL) + (F >=6_MESES) + (G PREJUIZO) + (H NAO_SUBSTANCIA_MEDICA) + (I NAO_OUTRO_TX) + (J NAO_CONDICAO_MEDICA)\n```",
        "clusters": [],
        "duration": "| 6 meses |",
        "age_onset": "| 13 anos (75% entre 8-15 anos) |",
        "functional_impairment": null,
        "exclusions": [],
        "specifiers": [],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [
          "Sente medo ou ansiedade quando precisa interagir com pessoas que nao conhece?",
          "Fica ansioso quando e observado comendo ou bebendo?",
          "Tem medo de falar ou se apresentar em publico?",
          "A ansiedade ocorre com seus pares/na escola?",
          "Tem medo de que as pessoas percebam que voce esta ansioso?",
          "Tem medo de ruborizar, tremer, suar ou tropecar nas palavras?",
          "Tem medo de ser humilhado, rejeitado ou de ofender os outros?",
          "ESSAS situacoes SEMPRE causam ansiedade?",
          "Em criancas: chora, tem raiva, fica imovel ou se agarra?",
          "Evita essas situacoes ou as suporta com muito medo?",
          "O medo e APENAS em situacoes de falar ou atuar em publico, ou tambem em interacoes sociais casuais?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### Transtorno de Ansiedade Social (Fobia Social)",
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
    "fonte_capitulo_md": "05_transtornos_ansiedade.md",
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
    "estrutura_efetiva": "- **Estrutura efetiva:** Politico (A-J; 10 criterios)",
    "notas_clinicas": "- **Notas:**"
  },
  
});
export type DisorderData = typeof data;
