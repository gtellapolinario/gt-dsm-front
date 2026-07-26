import { TranstornoPorUsoDeTabacoSchema } from "./schema";

export const data = TranstornoPorUsoDeTabacoSchema.parse({
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_por_uso_de_tabaco",
    "nome_completo": "Transtorno por Uso de Tabaco",
    "sigla": null,
    "codigo": {
      "dsm5": "305.1",
      "cid10": "F17.200",
      "cid11": "6C4A"
    },
    "capitulo": "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
    "capitulo_id": "16",
    "grupo": "Tabaco",
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Dependência de nicotina"
    ]
  },
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
      "id": "A",
      "nome": "Critérios de Uso Problemático de tabaco",
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
          "desc": "tabaco consumido em maiores quantidades ou por período mais longo do que pretendido.",
          "pergunta": "Você já usou tabaco em quantidades maiores ou por mais tempo do que pretendia?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A2",
          "rotulo": "Desejo persistente ou esforços malsucedidos de reduzir",
          "desc": "Desejo persistente ou esforços malsucedidos para reduzir ou controlar o uso de tabaco.",
          "pergunta": "Você já tentou reduzir ou parar de usar tabaco sem sucesso?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A3",
          "rotulo": "Muito tempo obtendo, usando ou recuperando-se",
          "desc": "Muito tempo gasto em atividades necessárias para obtenção, uso ou recuperação dos efeitos de tabaco.",
          "pergunta": "Você passa muito tempo obtendo, usando ou se recuperando dos efeitos de tabaco?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A4",
          "rotulo": "Fissura ou forte desejo de usar",
          "desc": "Fissura ou forte desejo ou necessidade de usar tabaco.",
          "pergunta": "Você sente forte desejo ou necessidade de usar tabaco?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A5",
          "rotulo": "Fracasso em papéis por uso recorrente",
          "desc": "Uso recorrente resultando em fracasso em cumprir obrigações no trabalho, escola ou casa.",
          "pergunta": "O uso de tabaco já causou problemas no trabalho, na escola ou em casa?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A6",
          "rotulo": "Uso continuado apesar de problemas sociais/interpessoais",
          "desc": "Uso continuado apesar de problemas sociais ou interpessoais persistentes causados ou exacerbados pelos efeitos.",
          "pergunta": "Você continua usando tabaco mesmo tendo problemas com outras pessoas por causa disso?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A7",
          "rotulo": "Abandono de atividades importantes",
          "desc": "Atividades sociais, profissionais ou recreacionais importantes abandonadas ou reduzidas em virtude do uso.",
          "pergunta": "Você deixou de fazer atividades importantes por causa do uso de tabaco?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A8",
          "rotulo": "Uso recorrente em situações perigosas",
          "desc": "Uso recorrente em situações nas quais isso representa perigo para a integridade física.",
          "pergunta": "Você já usou tabaco em situações que poderiam ser perigosas?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A9",
          "rotulo": "Uso mantido apesar de problemas físicos/psicológicos",
          "desc": "Uso mantido apesar da consciência de ter um problema físico ou psicológico persistente provavelmente causado ou exacerbado pela substância.",
          "pergunta": "Você continua usando tabaco mesmo sabendo que isso agrava problemas de saúde?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A10",
          "rotulo": "Tolerância",
          "desc": "Tolerância: necessidade de quantidades progressivamente maiores para obter o efeito desejado, ou efeito acentuadamente menor com a mesma quantidade.",
          "pergunta": "Você precisa de quantidades maiores de tabaco para sentir o mesmo efeito?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A11",
          "rotulo": "Abstinência",
          "desc": "Abstinência: síndrome característica ao cessar/reduzir, ou uso para aliviar/evitar sintomas de abstinência.",
          "pergunta": "Você sente sintomas desagradáveis quando para de usar tabaco, ou o usa para evitar esses sintomas?",
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
      "id": "periodo_12meses",
      "letra": "A",
      "rotulo": "Padrão problemático em 12 meses",
      "tipo": "temporal_duracao_minima",
      "ui_widget": "campo_duracao_meses",
      "obrigatorio": true,
      "icone": "Calendar",
      "ddx_sugeridos": [],
      "descricao_completa": "Um padrão problemático de uso de tabaco, levando a comprometimento ou sofrimento clinicamente significativo, manifestado por pelo menos dois dos critérios, ocorrendo durante um período de 12 meses.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_substancia_medica",
      "letra": "D",
      "rotulo": "Não atribuível a outra condição médica ou substância",
      "tipo": "exclusao_substancia_medica",
      "ui_widget": "toggle_com_justificativa_obrigatoria",
      "obrigatorio": true,
      "icone": "Ban",
      "ddx_sugeridos": [],
      "descricao_completa": "Os sinais ou sintomas não são atribuíveis a outra condição médica nem são mais bem explicados por outro transtorno mental, incluindo intoxicação por ou abstinência de outra substância.",
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
      "id": "remissao_inicial",
      "nome": "Em remissão inicial",
      "tipo": "booleano",
      "ortogonal": false,
      "opcoes": [],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": "3-12 meses sem critérios (exceto fissura) para tabaco.",
        "fonte_passada_1": true
      }
    },
    {
      "id": "remissao_sustentada",
      "nome": "Em remissão sustentada",
      "tipo": "booleano",
      "ortogonal": false,
      "opcoes": [],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": "≥12 meses sem critérios (exceto fissura) para tabaco.",
        "fonte_passada_1": true
      }
    },
    {
      "id": "ambiente_protegido",
      "nome": "Em ambiente protegido",
      "tipo": "booleano",
      "ortogonal": true,
      "opcoes": [],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "terapia_manutencao",
      "nome": "Em terapia de manutenção",
      "tipo": "booleano",
      "ortogonal": true,
      "opcoes": [],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    }
  ],
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
    "regra_atribuicao": "Conte os critérios preenchidos no período diagnóstico; remissão é registrada separadamente."
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
      "id": "saude",
      "label": "Saúde Física",
      "icone": "HeartPulse",
      "relevante_para": "transversal"
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
      "condicao": "Uso não diário de tabaco",
      "ponto_distincao": "~20% dos fumantes atuais não fumam diariamente; critérios podem não ser preenchidos.",
      "pertence_a_classe": false
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno por uso de álcool",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno depressivo maior",
      "frequencia": "moderada",
      "nota": null
    },
    {
      "condicao": "Transtorno de ansiedade",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [
    {
      "nome": "Monóxido de carbono no ar expirado",
      "sigla": null,
      "uso": "monitoramento",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    },
    {
      "nome": "Cotinina no sangue/saliva/urina",
      "sigla": null,
      "uso": "monitoramento",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    }
  ],
  "prevalencia": {
    "populacao_geral": "~13% adultos ≥18a (dependência de nicotina DSM-IV); ~21% fumantes atuais.",
    "proporcao_sexo": "14% homens vs 12% mulheres adultos.",
    "variacoes_culturais": "Maior em índios norte-americanos (23%); maior em países em desenvolvimento.",
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Adolescência; início após 21 anos é raro.",
    "trajetoria": ">80% tentam parar; 60% recaem em uma semana; metade alcança abstinência.",
    "prognostico": "50% dos que não param morrem prematuramente de doenças relacionadas ao tabaco.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  
  "metadados_globais": {
    "fonte_capitulo_md": "16_transtornos_relacionados_substancias_transtornos_aditivos.md",
    "fonte_inventario_md": null,
    "data_extracao": "2026-05-31",
    "modelo_agente": "claude-opus-4",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "id": "transtorno_por_uso_de_tabaco",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "rendering": {
    "estrutura_diagnostica": "polythetic_monocluster",
    "criteria": [
      "Quantidade/tempo maior",
      "Tentativas de reducao",
      "Tempo gasto",
      "Fissura",
      "Fracasso em obrigacoes",
      "Problemas sociais",
      "Abandono de atividades",
      "Uso perigoso",
      "Uso apesar de problemas de saude",
      "Tolerancia",
      "Abstinencia (irritabilidade, ansiedade, dificuldade de concentracao, aumento do apetite)"
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
    "exclusions": [],
    "specifiers": [
      "Em terapia de manutencao",
      "em remissao inicial",
      "em remissao sustentada",
      "em ambiente protegido"
    ],
    "operational_profiles": [],
    "critical_differentials": [],
    "key_questions": [
      "Fuma mais do que pretendia? Tenta fumar menos e nao consegue?",
      "Ja tentou parar? Quantas vezes? Por quanto tempo ficou?",
      "Gasta muito tempo comprando cigarros ou organizando o momento de fumar?",
      "Sente vontade intensa de fumar quando nao pode (ex: em reunioes, aviao)?",
      "O tabaco ja causou problemas no trabalho ou em casa? (ex: faltar para comprar)",
      "Brigou ou incomodou outros por causa da fumaca?",
      "Evita lugares onde nao pode fumar?",
      "Fuma na cama? Proximo a materiais inflamaveis?",
      "Continua fumando apesar de problemas respiratorios, tosse, ou doenca?",
      "O primeiro cigarro do dia e o que mais satisfaz? Precisa de mais?",
      "Quando para de fumar, sente irritabilidade, ansiedade, dificuldade de concentracao, aumento do apetite?"
    ],
    "alerts": [
      "Nota de codificacao: Tabaco NAO tem codigo leve com CID-10 para transtornos induzidos. Abstinencia de tabaco so ocorre com TUT moderado/grave."
    ],
    "source_trace": {
      "markdown_section": "## 13. TRANSTORNO POR USO DE TABACO (TUT)",
      "patches_applied": []
    },
    "category": "FULL",
    "ui_mode": "structured_full",
    "render_structured_interview": true
  },
  "grupo": "Tabaco",
  "versao_complementar_existe": false,
  "inventario_clinico": {
    "codigo_bruto": "",
    "estrutura_efetiva": "",
    "notas_clinicas": "Padrão problemático de uso de tabaco com comprometimento significativo (2+ critérios em 12 meses). Fissura, tolerância, uso apesar de problemas, dificuldade de reduzir."
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
