import { TranstornoAnsiedadeSeparacaoSchema } from "./schema";

export const data = TranstornoAnsiedadeSeparacaoSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "transtorno_ansiedade_separacao",
    "nome_completo": "Transtorno de Ansiedade de Separação",
    "codigo": {
        "dsm5": "",
        "cid10": "F93.0",
        "cid11": "6B05"
    },
    "capitulo": "Transtornos de Ansiedade",
    "capitulo_id": "transtornos_de_ansiedade",
    "sigla": "TAS",
    "codificacao": {
        "cid10_cm": {
            "referencia_base": "F93.0",
            "equivalencia": "direta",
            "regra": "Correspondência diagnóstica direta no nível informado; confirmar especificadores e requisitos da versão CID-10-CM adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6B05",
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
    "terminologia_relacionada": [{
            "termo": "TAS",
            "status": "sigla_ambigua",
            "equivalencia": "nao_equivalente",
            "nota": "Também pode designar transtorno de ansiedade social; não usar a sigla isolada em intercâmbio de dados."
        }, ]
},
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Medo/Ansiedade de Separação (≥3/8)",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 3,
            "pediatria": 3
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Sofrimento com separação antecipada",
                "desc": "Sofrimento excessivo e recorrente ao antecipar ou experienciar separação de figuras de apego.",
                "pergunta": "A pessoa fica muito angustiado quando percebe que vai se separar das pessoas próximas?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Choro intenso ao ser deixado na escola"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Preocupação com dano às figuras de apego",
                "desc": "Medo ou preocupação persistente e excessiva sobre possível dano ou perda das figuras de apego.",
                "pergunta": "A pessoa fica preocupado que algo ruim aconteça com as pessoas que ama quando estão longe?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Medo de que os pais morram num acidente"
                ]
            },
            {
                "id": "A3",
                "rotulo": "Preocupação com evento que cause separação",
                "desc": "Preocupação com eventos que levem à separação (p. ex. , perder-se, ser raptado, acidente, doença).",
                "pergunta": "A pessoa se preocupa muito em ficar perdido ou que algo aconteça com a pessoa e o separe dos seus?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Medo de ser sequestrado"
                ]
            },
            {
                "id": "A4",
                "rotulo": "Relutância em sair por medo de separação",
                "desc": "Relutância persistente ou recusa em sair de casa, escola, trabalho ou outros locais por medo de separação.",
                "pergunta": "A pessoa evita sair de casa ou ir a certos lugares por medo de se separar das pessoas próximas?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Recusa escolar crônica"
                ]
            },
            {
                "id": "A5",
                "rotulo": "Medo excessivo de estar só",
                "desc": "Medo excessivo e persistente de estar só ou sem as figuras de apego em casa ou em outros ambientes.",
                "pergunta": "A pessoa tem muito medo de ficar sozinho, mesmo em casa?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Não consegue dormir em outro quarto"
                ]
            },
            {
                "id": "A6",
                "rotulo": "Relutância em dormir longe de casa",
                "desc": "Relutância persistente ou recusa em dormir fora de casa ou sem estar perto de figura de apego.",
                "pergunta": "A pessoa tem dificuldade para dormir longe de casa ou sem pessoas próximas?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Nunca pernoita na casa de amigos"
                ]
            },
            {
                "id": "A7",
                "rotulo": "Pesadelos com separação",
                "desc": "Pesadelos repetidos com tema de separação.",
                "pergunta": "A pessoa tem pesadelos frequentes sobre se separar de pessoas que ama?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Pesadelos com pais morrendo"
                ]
            },
            {
                "id": "A8",
                "rotulo": "Queixas físicas ao se separar",
                "desc": "Queixas repetidas de sintomas físicos (cefaleia, dor abdominal, náusea, vômito) ao ocorrer ou antecipar separação.",
                "pergunta": "A pessoa sente dores de cabeça, estômago ou mal-estar físico quando vai se separar dos seus?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Dores abdominais nas manhãs de escola"
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
        "id": "duracao",
        "letra": "B",
        "rotulo": "Duração ≥4 semanas (crianças) ou ≥6 meses (adultos)",
        "tipo": "temporal_duracao_tipica",
        "ui_widget": "campo_duracao_meses",
        "obrigatorio": true,
        "icone": "CalendarClock",
        "descricao_completa": "A perturbação tem duração de pelo menos 4 semanas em crianças e adolescentes e tipicamente 6 meses ou mais em adultos.",
        "nota": null
    },
    {
        "id": "sofrimento_funcional",
        "letra": "C",
        "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Frown",
        "descricao_completa": "A perturbação causa sofrimento clinicamente significativo ou prejuízo no funcionamento social, acadêmico/profissional ou em outras áreas importantes.",
        "nota": null
    },
    {
        "id": "exclusao_outros_transtornos",
        "letra": "D",
        "rotulo": "Não melhor explicado por outro transtorno mental",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "A perturbação não é mais bem explicada por outro transtorno mental (ex: TEA, delirante, agorafobia, TAG, TEPT).",
        "nota": null,
        "ddx_sugeridos": [
            "transtorno_espectro_autista",
            "transtorno_delirante",
            "agorafobia",
            "transtorno_ansiedade_generalizada",
            "transtorno_panico",
            "transtorno_estresse_pos_traumatico"
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
        "codigo_base": "6B05",
        "equivalencia": "direta",
        "regra": "Correspondência diagnóstica direta; selecionar eventual subcategoria de curso, gravidade ou remissão quando aplicável.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno de ansiedade de separação."
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
        "id": "social",
        "label": "Funcionamento social",
        "icone": "Users",
        "relevante_para": "transversal"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "transtorno_de_ansiedade_generalizada",
        "condicao": "Transtorno de Ansiedade Generalizada",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno de Ansiedade Generalizada: preocupações múltiplas não focadas em separação; Transtorno de Ansiedade de Separação: medo central é a separação das figuras de apego.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "agorafobia",
        "condicao": "Agorafobia",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Agorafobia: evitação de situações por medo de não conseguir escapar; Transtorno de Ansiedade de Separação: evitação por medo de separação.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_do_espectro_autista",
        "condicao": "Transtorno do Espectro Autista",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno do Espectro Autista: resistência a mudanças de rotina; Transtorno de Ansiedade de Separação: o medo central é a separação, não a perturbação da rotina.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "condicao_medica_do_paciente_ou_da_figura_de_apego",
        "condicao": "Condição médica do paciente ou da figura de apego",
        "natureza": "condicao_medica",
        "ponto_distincao": "Distinguir ansiedade desproporcional de preocupação compatível com risco médico real.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno de Ansiedade Generalizada",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Fobia Específica",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno de Pânico",
      "frequencia": "moderada",
      "nota": "Especialmente em adultos."
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "scas_separacao",
        "nome": "Subescala de Ansiedade de Separação da Escala Spence",
        "sigla": "SCAS",
        "uso": "triagem_monitoramento",
        "faixa_etaria": "pediatria",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "tipo_estimativa": "prevalencia_12_meses",
    "estimativa": "4% em crianças, 1,6% em adolescentes, 0,9–1,9% em adultos (prevalência de 12 meses)",
    "distribuicao_por_sexo": "Mais comum em mulheres na população geral",
    "variacoes_contextuais": null,
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Pode iniciar na infância, adolescência ou vida adulta; na infância é uma das apresentações mais frequentes.",
    "trajetoria": "Pode remitir, recorrer ou persistir até a vida adulta, com expressão ajustada ao estágio do desenvolvimento.",
    "prognostico": "Persistência associa-se a outros transtornos de ansiedade, mas não determina evolução para transtorno de pânico.",
    "nota_aplicador": "Início e trajetória são descritores típicos, não critérios isolados; um curso diferente exige reavaliação, mas não exclusão automática."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [],
        "diagnostic_rule": "```\n(A >=3/8 MANIFESTACOES) + (B DURACAO: >=4sem criancas / >=6m adultos) + (C PREJUIZO) + (D NAO_OUTRO_TX)\n```",
        "clusters": [],
        "duration": "| >= 4 semanas (criancas/adolescentes); >= 6 meses (adultos, guia flexivel) |",
        "age_onset": "| Pre-escolar; pode ocorrer em qualquer momento da infancia |",
        "functional_impairment": null,
        "exclusions": [],
        "specifiers": [
          "Nenhum especificador formal no DSM-5",
          "Nota sobre faixa etaria: em adultos, pode manifestar como preocupacao excessiva com conjuges/filhos"
        ],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [
          "Sofre ou chora quando precisa se afastar de casa ou de [pessoa]?",
          "Fica preocupado que algo de mal aconteca com [pessoa]?",
          "Tem medo de se perder, ser sequestrado ou ter acidente?",
          "Reluta em sair de casa, ir a escola ou trabalhar por medo?",
          "Tem medo de ficar sozinho?",
          "Recusa dormir fora ou sem [pessoa]?",
          "Tem pesadelos sobre separacao?",
          "Sente dores de cabeca ou barriga quando vai se separar?",
          "Ha quanto tempo isso vem acontecendo?",
          "Os sintomas ocorrem mesmo quando [pessoa] esta presente?",
          "Ha preocupacoes que nao envolvem separacao?",
          "E ansioso em situacoes sociais mesmo com [pessoa]?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### Transtorno de Ansiedade de Separacao",
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
    "lacunas_globais": [
      "variacao_cultural",
      "herdabilidade"
    ],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:** Politico (3/8 em A) + B duracao + C funcional + D exclusao",
    "notas_clinicas": "- **Notas:**"
  },
  
});
export type DisorderData = typeof data;
