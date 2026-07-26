import { TranstornoPorUsoDeEstimulantesSchema } from "./schema";

export const data = TranstornoPorUsoDeEstimulantesSchema.parse({
  "$schema_version": "2.2.0",
  "meta": {
    "id": "transtorno_por_uso_de_estimulantes",
    "nome_completo": "Transtorno por Uso de Estimulantes",
    "sigla": null,
    "codigo": {
      "dsm5": "304.40",
      "cid10": "F15.20",
      "cid11": "6C42"
    },
    "capitulo": "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
    "capitulo_id": "16",
    "grupo": "Estimulantes",
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Dependência de cocaína",
      "Dependência de anfetaminas",
      "Metanfetamina"
    ]
  },
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Critérios de Uso Problemático de estimulante",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 2,
            "pediatria": 2
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Quantidades/periodo maiores que pretendido",
                "desc": "estimulante consumido em maiores quantidades ou por período mais longo do que pretendido.",
                "pergunta": "A pessoa já usou estimulante em quantidades maiores ou por mais tempo do que pretendia?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A2",
                "rotulo": "Desejo persistente ou esforços malsucedidos de reduzir",
                "desc": "Desejo persistente ou esforços malsucedidos para reduzir ou controlar o uso de estimulante.",
                "pergunta": "A pessoa já tentou reduzir ou parar de usar estimulante sem sucesso?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A3",
                "rotulo": "Muito tempo obtendo, usando ou recuperando-se",
                "desc": "Muito tempo gasto em atividades necessárias para obtenção, uso ou recuperação dos efeitos de estimulante.",
                "pergunta": "A pessoa passa muito tempo obtendo, usando ou se recuperando dos efeitos de estimulante?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A4",
                "rotulo": "Fissura ou forte desejo de usar",
                "desc": "Fissura ou forte desejo ou necessidade de usar estimulante.",
                "pergunta": "A pessoa sente forte desejo ou necessidade de usar estimulante?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A5",
                "rotulo": "Fracasso em papéis por uso recorrente",
                "desc": "Uso recorrente resultando em fracasso em cumprir obrigações no trabalho, escola ou casa.",
                "pergunta": "O uso de estimulante já causou problemas no trabalho, na escola ou em casa?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A6",
                "rotulo": "Uso continuado apesar de problemas sociais/interpessoais",
                "desc": "Uso continuado apesar de problemas sociais ou interpessoais persistentes causados ou exacerbados pelos efeitos.",
                "pergunta": "A pessoa continua usando estimulante mesmo tendo problemas com outras pessoas por causa disso?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A7",
                "rotulo": "Abandono de atividades importantes",
                "desc": "Atividades sociais, profissionais ou recreacionais importantes abandonadas ou reduzidas em virtude do uso.",
                "pergunta": "A pessoa deixou de fazer atividades importantes por causa do uso de estimulante?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A8",
                "rotulo": "Uso recorrente em situações perigosas",
                "desc": "Uso recorrente em situações nas quais isso representa perigo para a integridade física.",
                "pergunta": "A pessoa já usou estimulante em situações que poderiam ser perigosas?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A9",
                "rotulo": "Uso mantido apesar de problemas físicos/psicológicos",
                "desc": "Uso mantido apesar da consciência de ter um problema físico ou psicológico persistente provavelmente causado ou exacerbado pela substância.",
                "pergunta": "A pessoa continua usando estimulante mesmo sabendo que isso agrava problemas de saúde?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A10",
                "rotulo": "Tolerância",
                "desc": "Tolerância: necessidade de quantidades progressivamente maiores para obter o efeito desejado, ou efeito acentuadamente menor com a mesma quantidade.",
                "pergunta": "A pessoa precisa de quantidades maiores de estimulante para sentir o mesmo efeito?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A11",
                "rotulo": "Abstinência",
                "desc": "Abstinência: síndrome característica ao cessar/reduzir, ou uso para aliviar/evitar sintomas de abstinência.",
                "pergunta": "A pessoa sente sintomas desagradáveis quando para de usar estimulante, ou o usa para evitar esses sintomas?",
                "faixa_aplicavel": null,
                "nota": null
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": "Um padrão de uso de substância tipo anfetamina, cocaína ou outro estimulante, levando a comprometimento ou sofrimento clinicamente significativo, manifestado por pelo menos dois dos critérios, ocorrendo durante um período de 12 meses."
    }
],
  "criterios_condicionais": [],
  "subtipos": {
    "presente": true,
    "nome": "Classe de estimulante",
    "natureza": "classe_de_estimulante",
    "formal_dsm": true,
    "mutuamente_exclusivos": true,
    "subtipos": [
        {
            "id": "anfetamina",
            "label": "Substância tipo anfetamina (incl. metanfetamina)",
            "descricao": "",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "regra": "Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão.",
                "cid11_mms": "6C46"
            }
        },
        {
            "id": "cocaina",
            "label": "Cocaína",
            "descricao": "",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "regra": "Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão.",
                "cid11_mms": "6C45"
            }
        },
        {
            "id": "outro_estimulante",
            "label": "Outro estimulante",
            "descricao": "",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "regra": "Escolher a família da substância antes de selecionar episódio nocivo, padrão nocivo ou dependência.",
                "cid11_mms": [
                    "6C46",
                    "6C47"
                ]
            }
        }
    ],
    "nota_aplicador": "Selecione somente opções sustentadas pela avaliação clínica."
},
  "especificadores": [
    {
        "id": "estado_remissao",
        "nome": "Estado de remissão",
        "tipo": "enum",
        "ortogonal": false,
        "opcoes": [
            "Em remissão inicial",
            "Em remissão sustentada"
        ],
        "regra_criterial": "Em remissão inicial: 3–12 meses sem critérios (exceto fissura) para estimulante.; Em remissão sustentada: ≥12 meses sem critérios (exceto fissura) para estimulante."
    },
    {
        "id": "ambiente_protegido",
        "nome": "Em ambiente protegido",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    }
],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": [
            "6C45",
            "6C46",
            "6C47"
        ],
        "equivalencia": "contextual",
        "regra": "A CID-11 separa episódio de uso nocivo, padrão nocivo e dependência. Selecionar a subcategoria conforme o padrão clínico; a gravidade DSM não determina conversão automática. Escolher primeiro cocaína, estimulantes anfetamínicos ou catinonas sintéticas.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "transtorno",
    "tipo": "contagem_de_criterios",
    "lembrete_aplicador": "Classifique pela quantidade de critérios diagnósticos preenchidos.",
    "niveis": [
        {
            "id": "leve",
            "label": "Leve",
            "descritor": "2 ou 3 critérios."
        },
        {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "4 ou 5 critérios."
        },
        {
            "id": "grave",
            "label": "Grave",
            "descritor": "6 ou mais critérios."
        }
    ],
    "regra_atribuicao": "Conte os critérios preenchidos no período diagnóstico; remissão e classe do estimulante são registradas separadamente."
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
        "id": "saude_fisica",
        "label": "Saúde física",
        "icone": "HeartPulse",
        "relevante_para": "transversal"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "transtornos_mentais_primarios",
        "condicao": "Transtornos mentais primários",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Efeitos de estimulantes devem ser distinguidos de esquizofrenia, transtornos bipolares/depressivos, Transtorno de Ansiedade Generalizada e Transtorno de Pânico.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno por uso de álcool",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno por uso de Cannabis",
      "frequencia": "moderada",
      "nota": null
    },
    {
      "condicao": "Transtorno de déficit de atenção/hiperatividade",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "assist",
        "nome": "Teste de Triagem do Envolvimento com Álcool, Tabaco e Outras Substâncias",
        "sigla": "ASSIST",
        "uso": "triagem",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "dast_10",
        "nome": "Teste de Triagem para Abuso de Drogas – 10 itens",
        "sigla": "DAST-10",
        "uso": "triagem",
        "faixa_etaria": "adulto",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "populacao_geral": "Anfetamina: 0,2% (12-17a e adultos); Cocaína: 0,2% (12-17a), 0,3% adultos.",
    "proporcao_sexo": "Cocaína: mais em homens (0,4% vs 0,1% adultos).",
    "variacoes_culturais": null,
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "12-25 anos",
    "trajetoria": "Progressão rápida com uso fumado/intravenoso; gradual com uso intranasal/oral.",
    "prognostico": "Reservado para uso crônico; depressão/ideação suicida durante abstinência.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [
          "Dose/tempo excessivo",
          "Tentativas de reducao",
          "Tempo gasto",
          "Fissura",
          "Fracasso em obrigacoes",
          "Problemas sociais",
          "Abandono de atividades",
          "Uso perigoso",
          "Uso apesar de problemas de saude",
          "Tolerancia",
          "Abstinencia (fadiga excessiva, depressao, fome aumentada, pesadelos)"
        ],
        "diagnostic_rule": "pelo menos 2 de 11 criterios em 12 meses",
        "clusters": [
          "Baixo Controle",
          "Prejuizo Social",
          "Uso Arriscado",
          "Farmacologicos"
        ],
        "duration": "12 meses",
        "age_onset": null,
        "functional_impairment": "comprometimento clinicamente significativo",
        "exclusions": [
          "Uso de estimulantes sob supervisao medica adequada (ex: TDAH, narcolepsia) - tolerancia e abstinencia desconsideradas"
        ],
        "specifiers": [
          "em remissao inicial",
          "em remissao sustentada",
          "em ambiente protegido"
        ],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [
          "Usou mais cocaina/anfetamina do que pretendia? Ficou usando por dias sem parar (binges)?",
          "Ja tentou parar ou controlar? Conseguiu?",
          "Quanto tempo investe em conseguir ou usar?",
          "Sentiu necessidade intensa de usar?",
          "O uso atrapalhou trabalho, estudo ou responsabilidades?",
          "Brigou ou perdeu amizades por causa do uso?",
          "Deixou de fazer coisas importantes para usar?",
          "Usou e dirigiu? Usou de formas perigosas (injeccao, desconhecidos)?",
          "Continua usando apesar de dor no peito, perda de peso, problemas nasais?",
          "Precisa de mais para sentir o mesmo efeito?",
          "Quando para, sente fadiga excessiva, depressao, fome aumentada, pesadelos?"
        ],
        "alerts": [
          "Complicacoes agudas: Infarto do miocardio, arritmias, morte subita",
          "AVC, convulsoes",
          "Pneumotorax (manobra Valsalva ao fumar)",
          "Transtorno psicotico induzido (delirios paranoides, alucinacoes tateis)",
          "Risco de suicidio durante abstinencia (repe)",
          "Nota Critica: Criterios de tolerancia e abstinencia sao DESCONSIDERADOS em individuos cujo uso se da unicamente sob supervisao medica adequada."
        ],
        "source_trace": {
          "markdown_section": "## 10. TRANSTORNO POR USO DE ESTIMULANTES (TUEst)",
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
    "fonte_capitulo_md": "16_transtornos_relacionados_substancias_transtornos_aditivos.md",
    "fonte_inventario_md": null,
    "data_extracao": "2026-05-31",
    "modelo_agente": "claude-opus-4",
    "lacunas_globais": [
      "variacoes_culturais"
    ],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "grupo": "Estimulantes",
  "inventario_clinico": {
    "estrutura_efetiva": "",
    "notas_clinicas": "Padrão problemático de uso de cocaína (pó, crack, freebase) com comprometimento significativo. Critérios idênticos aos de anfetamina-type."
  },
  
});
export type DisorderData = typeof data;
