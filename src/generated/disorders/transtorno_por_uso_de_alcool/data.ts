import { TranstornoPorUsoDeAlcoolSchema } from "./schema";

export const data = TranstornoPorUsoDeAlcoolSchema.parse({
  "$schema_version": "2.1.0",
  "meta": {
    "id": "transtorno_por_uso_de_alcool",
    "nome_completo": "Transtorno por Uso de Álcool",
    "sigla": null,
    "codigo": {
      "dsm5": "303.90",
      "cid10": "F10.20",
      "cid11": "6C40"
    },
    "capitulo": "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
    "capitulo_id": "16",
    "grupo": "Álcool",
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Dependência de álcool",
      "Abuso de álcool"
    ]
  },
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Critérios de Uso Problemático de álcool",
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
                "desc": "álcool consumido em maiores quantidades ou por período mais longo do que pretendido.",
                "pergunta": "A pessoa já usou álcool em quantidades maiores ou por mais tempo do que pretendia?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A2",
                "rotulo": "Desejo persistente ou esforços malsucedidos de reduzir",
                "desc": "Desejo persistente ou esforços malsucedidos para reduzir ou controlar o uso de álcool.",
                "pergunta": "A pessoa já tentou reduzir ou parar de usar álcool sem sucesso?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A3",
                "rotulo": "Muito tempo obtendo, usando ou recuperando-se",
                "desc": "Muito tempo gasto em atividades necessárias para obtenção, uso ou recuperação dos efeitos de álcool.",
                "pergunta": "A pessoa passa muito tempo obtendo, usando ou se recuperando dos efeitos de álcool?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A4",
                "rotulo": "Fissura ou forte desejo de usar",
                "desc": "Fissura ou forte desejo ou necessidade de usar álcool.",
                "pergunta": "A pessoa sente forte desejo ou necessidade de usar álcool?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A5",
                "rotulo": "Fracasso em papéis por uso recorrente",
                "desc": "Uso recorrente resultando em fracasso em cumprir obrigações no trabalho, escola ou casa.",
                "pergunta": "O uso de álcool já causou problemas no trabalho, na escola ou em casa?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A6",
                "rotulo": "Uso continuado apesar de problemas sociais/interpessoais",
                "desc": "Uso continuado apesar de problemas sociais ou interpessoais persistentes causados ou exacerbados pelos efeitos.",
                "pergunta": "A pessoa continua usando álcool mesmo tendo problemas com outras pessoas por causa disso?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A7",
                "rotulo": "Abandono de atividades importantes",
                "desc": "Atividades sociais, profissionais ou recreacionais importantes abandonadas ou reduzidas em virtude do uso.",
                "pergunta": "A pessoa deixou de fazer atividades importantes por causa do uso de álcool?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A8",
                "rotulo": "Uso recorrente em situações perigosas",
                "desc": "Uso recorrente em situações nas quais isso representa perigo para a integridade física.",
                "pergunta": "A pessoa já usou álcool em situações que poderiam ser perigosas?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A9",
                "rotulo": "Uso mantido apesar de problemas físicos/psicológicos",
                "desc": "Uso mantido apesar da consciência de ter um problema físico ou psicológico persistente provavelmente causado ou exacerbado pela substância.",
                "pergunta": "A pessoa continua usando álcool mesmo sabendo que isso agrava problemas de saúde?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A10",
                "rotulo": "Tolerância",
                "desc": "Tolerância: necessidade de quantidades progressivamente maiores para obter o efeito desejado, ou efeito acentuadamente menor com a mesma quantidade.",
                "pergunta": "A pessoa precisa de quantidades maiores de álcool para sentir o mesmo efeito?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A11",
                "rotulo": "Abstinência",
                "desc": "Abstinência: síndrome característica ao cessar/reduzir, ou uso para aliviar/evitar sintomas de abstinência.",
                "pergunta": "A pessoa sente sintomas desagradáveis quando para de usar álcool, ou o usa para evitar esses sintomas?",
                "faixa_aplicavel": null,
                "nota": null
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": "Um padrão problemático de uso de álcool, levando a comprometimento ou sofrimento clinicamente significativos, manifestado por pelo menos dois dos critérios, ocorrendo durante um período de 12 meses."
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
        "regra_criterial": "Em remissão inicial: 3–12 meses sem critérios (exceto fissura) para álcool.; Em remissão sustentada: ≥12 meses sem critérios (exceto fissura) para álcool."
    },
    {
        "id": "ambiente_protegido",
        "nome": "Em ambiente protegido",
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
      "id": "saude",
      "label": "Saúde Física",
      "icone": "HeartPulse",
      "relevante_para": "transversal"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Uso não patológico de álcool",
      "ponto_distincao": "Ingestão ocasional ou diária em pequenas doses sem sofrimento/significativo prejuízo funcional.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno por uso de sedativos, hipnóticos ou ansiolíticos",
      "ponto_distincao": "Sintomas semelhantes, mas curso pode ser diferente, especialmente quanto a problemas médicos.",
      "pertence_a_classe": true
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno bipolar",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno depressivo maior",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno da personalidade antissocial",
      "frequencia": "alta",
      "nota": null
    }
  ],
  "instrumentos_complementares": [
    {
      "nome": "AUDIT",
      "sigla": "AUDIT",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ],
  "prevalencia": {
    "populacao_geral": "4,6% (12-17a); 8,5% adultos ≥18a",
    "proporcao_sexo": "12,4% homens vs 4,9% mulheres adultos",
    "variacoes_culturais": "Maior entre índios norte-americanos (12,1%)",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Fim da adolescência / 20-25 anos",
    "trajetoria": "Curso variável com períodos de remissão e recaídas. Primeira intoxicação na adolescência.",
    "prognostico": "Prognóstico promissor para a maioria; casos graves representam parcela minoritária.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [
          "Consumo em maiores quantidades ou por periodo maior que o pretendido",
          "Desejo persistente ou esforcos malsucedidos para reduzir/controlar",
          "Muito tempo gasto obtendo, usando ou se recuperando",
          "Fissura (craving) forte",
          "Fracasso em cumprir obrigacoes (trabalho/escola/casa)",
          "Uso continuado apesar de problemas sociais/interpessoais",
          "Abandono/reducao de atividades importantes",
          "Uso recorrente em situacoes perigosas",
          "Uso continuado apesar de problemas fisicos/psicologicos",
          "Tolerancia (doses maiores para mesmo efeito, ou efeito reduzido)",
          "Abstinencia (sindrome caracteristica ou uso para aliviar sintomas)"
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
          "Uso nao patologico de alcool (intoxicacao ocasional, ingestao social)",
          "Transtorno por uso de sedativos/hipnoticos/ansioliticos (sintomas semelhantes)",
          "Transtorno da conduta / personalidade antissocial (comorbidade comum, diagnosticar ambos)",
          "Transtorno mental induzido por alcool (sintomas devem persistir >1 mes apos abstinencia para ser independente)"
        ],
        "specifiers": [
          "em remissao inicial",
          "em remissao sustentada",
          "em ambiente protegido"
        ],
        "operational_profiles": [],
        "critical_differentials": [
          {
            "condicao": "Uso social",
            "diferenciador": "Nao ha prejuizo funcional ou compulsao"
          },
          {
            "condicao": "Dependencia fisica sem transtorno",
            "diferenciador": "Tolerancia/abstinencia isoladas nao sao suficientes"
          },
          {
            "condicao": "TDM/Tag",
            "diferenciador": "Sintomas de ansiedade/depressao que MELHORAM com abstinencia = induzidos"
          }
        ],
        "key_questions": [
          "Nas ultimas 4 semanas, sentiu necessidade forte de beber? (fissura)",
          "Alguem ja se preocupou ou reclamou do seu consumo de alcool?",
          "Ja tentou diminuir ou parar sem conseguir?",
          "O alcool ja atrapalhou trabalho, estudo ou relacionome_completontos?",
          "Ja dirigiu ou fez algo perigoso apos beber?",
          "Continua bebendo apesar de problemas de saude?"
        ],
        "alerts": [
          "ALERTA: abstinencia de alcool/sedativos pode ser FATAL",
          "Tolerancia e abstinencia decorrentes de tratamento medico adequado NAO contam para o diagnostico"
        ],
        "source_trace": {
          "markdown_section": "## 1. TRANSTORNO POR USO DE ALCOOL (TUA)",
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
  "grupo": "Álcool",
  "inventario_clinico": {
    "estrutura_efetiva": "",
    "notas_clinicas": "Padrão problemático de uso de álcool com comprometimento significativo (2+ critérios em 12 meses). Inclui tolerância, abstinência, fissura e uso continuado apesar de consequências adversas."
  },
  
});
export type DisorderData = typeof data;
