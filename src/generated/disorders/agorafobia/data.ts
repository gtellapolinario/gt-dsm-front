import { AgorafobiaSchema } from "./schema";

export const data = AgorafobiaSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "agorafobia",
    "nome_completo": "Agorafobia",
    "capitulo": "Transtornos de Ansiedade",
    "capitulo_id": "transtornos_de_ansiedade",
    "sigla": null,
    "codificacao": {
        "dsm5_tr": {
            "codigo": "300.22",
            "sistema_origem": "ICD-9-CM",
            "uso": "referencia_editorial_legacy"
        },
        "cid10_cm": {
            "referencia_base": "F40.00",
            "equivalencia": "direta",
            "regra": "Correspondência diagnóstica direta no nível informado; confirmar especificadores e requisitos da versão CID-10-CM adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6B02",
            "equivalencia": "direta",
            "regra": "Correspondência diagnóstica direta; selecionar eventual subcategoria de curso, gravidade ou remissão quando aplicável.",
            "versao": "CID-11 MMS 2026-01"
        }
    },
    "agrupamento": {
        "capitulo": {
            "id": "transtornos_de_ansiedade",
            "label": "Transtornos de Ansiedade"
        },
        "subgrupo": null
    },
    "faixa_etaria_alvo": "transversal",
    "terminologia_relacionada": []
},
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Medo/Ansiedade em ≥2 de 5 Situações Agorafóbicas",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 2,
            "pediatria": 2
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Uso de transporte público",
                "desc": "Medo ou ansiedade acentuados de uso de transporte público (ônibus, metrô, trens, barcos, aviões).",
                "pergunta": "A pessoa sente medo intenso ao usar transporte público (ônibus, metrô, avião)?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A2",
                "rotulo": "Estar em espaços abertos",
                "desc": "Medo ou ansiedade de estar em espaços abertos (estacionamentos, feiras, pontes).",
                "pergunta": "A pessoa sente medo em espaços abertos como estacionamentos ou praças?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A3",
                "rotulo": "Estar em locais fechados",
                "desc": "Medo ou ansiedade de estar em locais fechados (lojas, cinemas, teatros).",
                "pergunta": "A pessoa sente medo em lugares fechados como shoppings ou cinemas?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A4",
                "rotulo": "Estar em fila ou multidão",
                "desc": "Medo ou ansiedade de estar em fila ou no meio de uma multidão.",
                "pergunta": "A pessoa evita filas ou aglomerações?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A5",
                "rotulo": "Estar fora de casa sozinho",
                "desc": "Medo ou ansiedade de estar fora de casa sozinho.",
                "pergunta": "A pessoa tem medo de sair de casa sozinho?",
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
        "id": "natureza_medo",
        "letra": "B",
        "rotulo": "Medo por dificuldade de escapar/sem socorro se incapacitado",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "LifeBuoy",
        "descricao_completa": "O indivíduo teme ou evita essas situações por pensar que escapar seria difícil ou que ajuda não estaria disponível se desenvolver sintomas de pânico ou outros sintomas incapacitantes/embaraçosos.",
        "nota": null
    },
    {
        "id": "evitacao_sofrimento",
        "letra": "C",
        "rotulo": "Situações agorafóbicas quase sempre provocam medo/ansiedade",
        "tipo": "temporal_proporcao",
        "ui_widget": "toggle_simples",
        "obrigatorio": true,
        "icone": "CircleAlert",
        "descricao_completa": "As situações agorafóbicas quase sempre provocam medo ou ansiedade.",
        "nota": null
    },
    {
        "id": "evitacao_ativa",
        "letra": "D",
        "rotulo": "Situações evitadas, acompanhadas ou suportadas com medo intenso",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "EyeOff",
        "descricao_completa": "As situações agorafóbicas são ativamente evitadas, requerem presença de companheiro, ou são suportadas com intenso medo/ansiedade.",
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
        "descricao_completa": "O medo ou ansiedade é desproporcional ao perigo real imposto pelas situações agorafóbicas e ao contexto sociocultural.",
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
        "descricao_completa": "Causa sofrimento clinicamente significativo ou prejuízo funcional.",
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
        "descricao_completa": "Se outra condição médica estiver presente, o medo, a ansiedade ou a esquiva são claramente excessivos.",
        "nota": null
    },
    {
        "id": "exclusao_outros",
        "letra": "I",
        "rotulo": "Não melhor explicado por outro transtorno mental",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "O medo, a ansiedade ou a esquiva não são mais bem explicados pelos sintomas de outro transtorno mental, como fobia específica do tipo situacional, transtorno de ansiedade social, transtorno obsessivo-compulsivo, transtorno de estresse pós-traumático ou transtorno de ansiedade de separação.",
        "nota": null,
        "ddx_sugeridos": [
            "fobia_especifica",
            "transtorno_ansiedade_social",
            "transtorno_obsessivo_compulsivo",
            "transtorno_estresse_pos_traumatico",
            "transtorno_ansiedade_separacao"
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
  "especificadores": [],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6B02",
        "equivalencia": "direta",
        "regra": "Correspondência diagnóstica direta; selecionar eventual subcategoria de curso, gravidade ou remissão quando aplicável.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para agorafobia."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": "Agorafobia e transtorno de pânico são diagnósticos independentes — ambos podem ser dados se critérios satisfeitos.",
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
        "label": "Funcionamento social e autonomia",
        "icone": "Users",
        "relevante_para": "transversal"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "transtorno_de_panico",
        "condicao": "Transtorno de Pânico",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno de Pânico sem agorafobia: ataques inesperados mas sem evitação de situações agorafóbicas; ambos podem coexistir.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "fobia_especifica_situacional",
        "condicao": "Fobia Específica situacional",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Fobia específica: limitada a um tipo de situação; agorafobia: múltiplas situações pela razão comum (incapacidade de escape).",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_de_estresse_pos_traumatico",
        "condicao": "Transtorno de Estresse Pós-Traumático",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno de Estresse Pós-Traumático: evitação relacionada a lembrança do trauma; agorafobia: evitação por medo de sintomas incapacitantes.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "condicoes_cardiopulmonares_vestibulares_ou_neurologicas",
        "condicao": "Condições cardiopulmonares, vestibulares ou neurológicas",
        "natureza": "condicao_medica",
        "ponto_distincao": "Sintomas situacionais devem acompanhar a condição médica, sem padrão agorafóbico autônomo.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno de Pânico",
      "frequencia": "alta",
      "nota": "Frequentemente comórbidos."
    },
    {
      "condicao": "Outros transtornos de ansiedade",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno Depressivo Maior",
      "frequencia": "alta",
      "nota": null
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "mia",
        "nome": "Inventário de Mobilidade para Agorafobia",
        "sigla": "MIA",
        "uso": "gravidade_monitoramento",
        "faixa_etaria": "adulto",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "tipo_estimativa": "prevalencia_12_meses",
    "estimativa": "Cerca de 1,7% em 12 meses entre adolescentes e adultos, na estimativa descrita pelo DSM-5-TR.",
    "distribuicao_por_sexo": "2:1 mulheres:homens",
    "variacoes_contextuais": null,
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Pode iniciar em qualquer idade; é comum o início na adolescência tardia ou no começo da vida adulta.",
    "trajetoria": "O curso pode ser persistente ou flutuante, com períodos de maior evitação; cronicidade e prejuízo funcional variam.",
    "prognostico": "Maior extensão da evitação, comorbidades e restrição de autonomia associam-se a maior prejuízo; não comparar prognóstico de forma automática ao transtorno de pânico.",
    "nota_aplicador": "Início e trajetória são descritores típicos, não critérios isolados; um curso diferente exige reavaliação, mas não exclusão automática."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [],
        "diagnostic_rule": "```\n(A >=2/5 SITUACOES) + (B COGNICAO_FUGA_AUXILIO) + (C QUASE_SEMPRE) + (D EVITA_OU_ACOMPANHADO) + (E DESPROPORCIONAL) + (F >=6_MESES) + (G PREJUIZO) + (H NAO_EXCESSO_MEDICO) + (I NAO_OUTRO_TX)\n```",
        "clusters": [],
        "duration": "| 6 meses |",
        "age_onset": "| 17 anos (2/3 dos casos antes dos 35) |",
        "functional_impairment": null,
        "exclusions": [],
        "specifiers": [
          "Nenhum especificador formal no DSM-5"
        ],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [
          "Tem medo ou ansiedade em transporte publico?",
          "Sente ansiedade em espacos abertos como pracas ou estacionome_completontos?",
          "Sente ansiedade em lugares fechados como lojas ou cinemas?",
          "Fica ansioso em filas ou multidoes?",
          "Tem medo de sair de casa sozinho?",
          "O que voce pensa poderia acontecer nessas situacoes?",
          "Essas situacoes SEMPRE lhe causam ansiedade?",
          "Voce as evita, precisa de alguem acompanhando, ou suporta com muito medo?",
          "Ja teve ataques de transtorno_panico inesperados?",
          "Se tem agorafobia + transtorno_panico, ambos devem ser diagnosticados"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### Agorafobia",
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
    "fonte_capitulo_md": "05_transtornos_ansiedade.md",
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
    "estrutura_efetiva": "- **Estrutura efetiva:** Politico (A: 2/5 situacoes) + B (cognicao de escape/auxilio) + C (resposta consistente) + D (evitacao/acompanhante/sofrimento) + E (desproporcional) + F duracao + G funcional + H condicao medica + I exclusao",
    "notas_clinicas": "- **Notas:**"
  },
  
});
export type DisorderData = typeof data;
