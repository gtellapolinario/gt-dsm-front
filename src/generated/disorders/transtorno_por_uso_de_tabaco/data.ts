import { TranstornoPorUsoDeTabacoSchema } from "./schema";

export const data = TranstornoPorUsoDeTabacoSchema.parse({
  "$schema_version": "2.1.0",
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
                "pergunta": "A pessoa já usou tabaco em quantidades maiores ou por mais tempo do que pretendia?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A2",
                "rotulo": "Desejo persistente ou esforços malsucedidos de reduzir",
                "desc": "Desejo persistente ou esforços malsucedidos para reduzir ou controlar o uso de tabaco.",
                "pergunta": "A pessoa já tentou reduzir ou parar de usar tabaco sem sucesso?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A3",
                "rotulo": "Muito tempo obtendo, usando ou recuperando-se",
                "desc": "Muito tempo gasto em atividades necessárias para obtenção, uso ou recuperação dos efeitos de tabaco.",
                "pergunta": "A pessoa passa muito tempo obtendo, usando ou se recuperando dos efeitos de tabaco?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A4",
                "rotulo": "Fissura ou forte desejo de usar",
                "desc": "Fissura ou forte desejo ou necessidade de usar tabaco.",
                "pergunta": "A pessoa sente forte desejo ou necessidade de usar tabaco?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A5",
                "rotulo": "Fracasso em papéis por uso recorrente",
                "desc": "Uso recorrente resultando em fracasso em cumprir obrigações no trabalho, escola ou casa.",
                "pergunta": "O uso de tabaco já causou problemas no trabalho, na escola ou em casa?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A6",
                "rotulo": "Uso continuado apesar de problemas sociais/interpessoais",
                "desc": "Uso continuado apesar de problemas sociais ou interpessoais persistentes causados ou exacerbados pelos efeitos.",
                "pergunta": "A pessoa continua usando tabaco mesmo tendo problemas com outras pessoas por causa disso?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A7",
                "rotulo": "Abandono de atividades importantes",
                "desc": "Atividades sociais, profissionais ou recreacionais importantes abandonadas ou reduzidas em virtude do uso.",
                "pergunta": "A pessoa deixou de fazer atividades importantes por causa do uso de tabaco?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A8",
                "rotulo": "Uso recorrente em situações perigosas",
                "desc": "Uso recorrente em situações nas quais isso representa perigo para a integridade física.",
                "pergunta": "A pessoa já usou tabaco em situações que poderiam ser perigosas?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A9",
                "rotulo": "Uso mantido apesar de problemas físicos/psicológicos",
                "desc": "Uso mantido apesar da consciência de ter um problema físico ou psicológico persistente provavelmente causado ou exacerbado pela substância.",
                "pergunta": "A pessoa continua usando tabaco mesmo sabendo que isso agrava problemas de saúde?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A10",
                "rotulo": "Tolerância",
                "desc": "Tolerância: necessidade de quantidades progressivamente maiores para obter o efeito desejado, ou efeito acentuadamente menor com a mesma quantidade.",
                "pergunta": "A pessoa precisa de quantidades maiores de tabaco para sentir o mesmo efeito?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A11",
                "rotulo": "Abstinência",
                "desc": "Abstinência: síndrome característica ao cessar/reduzir, ou uso para aliviar/evitar sintomas de abstinência.",
                "pergunta": "A pessoa sente sintomas desagradáveis quando para de usar tabaco, ou o usa para evitar esses sintomas?",
                "faixa_aplicavel": null,
                "nota": null
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": "Um padrão problemático de uso de tabaco, levando a comprometimento ou sofrimento clinicamente significativo, manifestado por pelo menos dois dos critérios, ocorrendo durante um período de 12 meses."
    }
],
  "criterios_condicionais": [],
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
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
        "regra_criterial": "Em remissão inicial: 3–12 meses sem critérios (exceto fissura) para tabaco.; Em remissão sustentada: ≥12 meses sem critérios (exceto fissura) para tabaco."
    },
    {
        "id": "ambiente_protegido",
        "nome": "Em ambiente protegido",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "terapia_manutencao",
        "nome": "Em terapia de manutenção",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
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
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Adolescência; início após 21 anos é raro.",
    "trajetoria": ">80% tentam parar; 60% recaem em uma semana; metade alcança abstinência.",
    "prognostico": "50% dos que não param morrem prematuramente de doenças relacionadas ao tabaco.",
      },
  
  "_pipeline": {
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
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "grupo": "Tabaco",
  "inventario_clinico": {
    "estrutura_efetiva": "",
    "notas_clinicas": "Padrão problemático de uso de tabaco com comprometimento significativo (2+ critérios em 12 meses). Fissura, tolerância, uso apesar de problemas, dificuldade de reduzir."
  },
  
});
export type DisorderData = typeof data;
