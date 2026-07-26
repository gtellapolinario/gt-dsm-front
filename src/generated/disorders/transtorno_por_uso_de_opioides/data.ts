import { TranstornoPorUsoDeOpioidesSchema } from "./schema";

export const data = TranstornoPorUsoDeOpioidesSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "transtorno_por_uso_de_opioides",
    "nome_completo": "Transtorno por Uso de Opioides",
    "codigo": {
        "dsm5": "",
        "cid10": "F11.10 / F11.20",
        "cid11": "6C43"
    },
    "capitulo": "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
    "capitulo_id": "transtornos_relacionados_a_substancias_e_transtornos_aditivos",
    "sigla": null,
    "codificacao": {
        "cid10_cm": {
            "referencia_base": [
                "F11.10",
                "F11.20"
            ],
            "equivalencia": "contextual",
            "regra": "Referência de família ou conjunto de códigos; selecionar o código CID-10-CM específico conforme apresentação, curso, gravidade e regras da versão adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6C43",
            "equivalencia": "contextual",
            "regra": "A CID-11 separa episódio de uso nocivo, padrão nocivo e dependência. Selecionar a subcategoria conforme o padrão clínico; a gravidade DSM não determina conversão automática.",
            "versao": "CID-11 MMS 2026-01"
        }
    },
    "agrupamento": {
        "capitulo": {
            "id": "transtornos_relacionados_a_substancias_e_transtornos_aditivos",
            "label": "Transtornos Relacionados a Substâncias e Transtornos Aditivos"
        },
        "subgrupo": {
            "id": "opioides",
            "label": "Opioides",
            "natureza": "classe_de_substancia"
        }
    },
    "faixa_etaria_alvo": "transversal",
    "terminologia_relacionada": [
        {
            "termo": "Dependência de heroína",
            "status": "historico",
            "equivalencia": "parcial",
            "nota": null
        },
        {
            "termo": "Abuso de opioides",
            "status": "historico",
            "equivalencia": "parcial",
            "nota": null
        }
    ]
},
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Critérios de Uso Problemático de opioides",
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
                "desc": "opioides consumido em maiores quantidades ou por período mais longo do que pretendido.",
                "pergunta": "A pessoa já usou opioides em quantidades maiores ou por mais tempo do que pretendia?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A2",
                "rotulo": "Desejo persistente ou esforços malsucedidos de reduzir",
                "desc": "Desejo persistente ou esforços malsucedidos para reduzir ou controlar o uso de opioides.",
                "pergunta": "A pessoa já tentou reduzir ou parar de usar opioides sem sucesso?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A3",
                "rotulo": "Muito tempo obtendo, usando ou recuperando-se",
                "desc": "Muito tempo gasto em atividades necessárias para obtenção, uso ou recuperação dos efeitos de opioides.",
                "pergunta": "A pessoa passa muito tempo obtendo, usando ou se recuperando dos efeitos de opioides?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A4",
                "rotulo": "Fissura ou forte desejo de usar",
                "desc": "Fissura ou forte desejo ou necessidade de usar opioides.",
                "pergunta": "A pessoa sente forte desejo ou necessidade de usar opioides?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A5",
                "rotulo": "Fracasso em papéis por uso recorrente",
                "desc": "Uso recorrente resultando em fracasso em cumprir obrigações no trabalho, escola ou casa.",
                "pergunta": "O uso de opioides já causou problemas no trabalho, na escola ou em casa?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A6",
                "rotulo": "Uso continuado apesar de problemas sociais/interpessoais",
                "desc": "Uso continuado apesar de problemas sociais ou interpessoais persistentes causados ou exacerbados pelos efeitos.",
                "pergunta": "A pessoa continua usando opioides mesmo tendo problemas com outras pessoas por causa disso?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A7",
                "rotulo": "Abandono de atividades importantes",
                "desc": "Atividades sociais, profissionais ou recreacionais importantes abandonadas ou reduzidas em virtude do uso.",
                "pergunta": "A pessoa deixou de fazer atividades importantes por causa do uso de opioides?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A8",
                "rotulo": "Uso recorrente em situações perigosas",
                "desc": "Uso recorrente em situações nas quais isso representa perigo para a integridade física.",
                "pergunta": "A pessoa já usou opioides em situações que poderiam ser perigosas?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A9",
                "rotulo": "Uso mantido apesar de problemas físicos/psicológicos",
                "desc": "Uso mantido apesar da consciência de ter um problema físico ou psicológico persistente provavelmente causado ou exacerbado pela substância.",
                "pergunta": "A pessoa continua usando opioides mesmo sabendo que isso agrava problemas de saúde?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A10",
                "rotulo": "Tolerância",
                "desc": "Tolerância: necessidade de quantidades progressivamente maiores para obter o efeito desejado, ou efeito acentuadamente menor com a mesma quantidade.",
                "pergunta": "A pessoa precisa de quantidades maiores de opioides para sentir o mesmo efeito?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A11",
                "rotulo": "Abstinência",
                "desc": "Abstinência: síndrome característica ao cessar/reduzir, ou uso para aliviar/evitar sintomas de abstinência.",
                "pergunta": "A pessoa sente sintomas desagradáveis quando para de usar opioides, ou o usa para evitar esses sintomas?",
                "faixa_aplicavel": null,
                "nota": null
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": "Um padrão problemático de uso de opioides, levando a comprometimento ou sofrimento clinicamente significativo, manifestado por pelo menos dois dos critérios, ocorrendo durante um período de 12 meses."
    }
],
  "criterios_condicionais": [],
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
        "id": "estado_remissao",
        "nome": "Estado de remissão",
        "tipo": "enum",
        "ortogonal": false,
        "opcoes": [
            "Em remissão inicial",
            "Em remissão sustentada"
        ],
        "regra_criterial": "Em remissão inicial: 3–12 meses sem critérios (exceto fissura) para opioides.; Em remissão sustentada: ≥12 meses sem critérios (exceto fissura) para opioides."
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
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6C43",
        "equivalencia": "contextual",
        "regra": "A CID-11 separa episódio de uso nocivo, padrão nocivo e dependência. Selecionar a subcategoria conforme o padrão clínico; a gravidade DSM não determina conversão automática.",
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
    "regra_atribuicao": "Conte os critérios preenchidos no período diagnóstico; remissão e tratamento de manutenção são registrados separadamente."
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
        "label": "Saúde Física",
        "icone": "HeartPulse",
        "relevante_para": "transversal"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "transtornos_mentais_induzidos_por_opioides",
        "condicao": "Transtornos mentais induzidos por opioides",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Sintomas específicos de outro transtorno predominam e justificam atenção clínica independente.",
        "pertence_a_mesma_classe_dsm": true
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Hepatite C",
      "frequencia": "alta",
      "nota": "Até 90% em usuários intravenosos."
    },
    {
      "condicao": "HIV",
      "frequencia": "alta",
      "nota": "Alto risco em usuários intravenosos."
    },
    {
      "condicao": "Transtorno depressivo maior",
      "frequencia": "moderada",
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
        "id": "cows",
        "nome": "Escala Clínica de Abstinência de Opioides",
        "sigla": "COWS",
        "uso": "gravidade_monitoramento",
        "faixa_etaria": "adulto",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "toxicologia_urina",
        "nome": "Exame toxicológico de urina",
        "sigla": null,
        "uso": "investigacao_complementar",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Pode corroborar exposição recente; resultado isolado não confirma nem exclui o transtorno."
    }
],
  "prevalencia": {
    "tipo_estimativa": "prevalencia_12_meses",
    "estimativa": "As estimativas variam conforme opioide, faixa etária e período do levantamento; uso de analgésicos e transtorno por uso de opioides não são medidas intercambiáveis.",
    "distribuicao_por_sexo": "Varia conforme opioide, via, idade, período e população; não aplicar uma razão única a todas as exposições.",
    "variacoes_contextuais": "Disponibilidade de substâncias, prescrição, mercado ilícito e acesso a cuidado determinam grande parte da variação entre populações.",
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Frequentemente no fim da adolescência ou início da vida adulta, mas pode surgir em outras idades conforme exposição.",
    "trajetoria": "Pode ser recorrente ou persistente, com períodos de remissão e alto risco de recaída e overdose.",
    "prognostico": "Risco de morte varia com potência, via, tolerância, policonsumo, acesso a cuidado e contexto; não aplicar percentuais antigos ao indivíduo.",
    "nota_aplicador": "Início e trajetória são descritores típicos, não critérios isolados; um curso diferente exige reavaliação, mas não exclusão automática."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [
          "Dose/tempo maior que pretendido",
          "Tentativas malsucedidas de reducao",
          "Tempo gasto obtendo/usando",
          "Fissura",
          "Fracasso em obrigacoes",
          "Uso apesar de problemas sociais",
          "Abandono de atividades",
          "Uso em situacoes perigosas",
          "Uso apesar de problemas de saude",
          "Tolerancia (doses maiores para mesmo efeito)",
          "Abstinencia (sindrome caracteristica ou uso para aliviar)"
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
          "Uso adequado de opioides prescritos (sem compulsao, sem prejuizo funcional)",
          "Dor cronica legitima (uso conforme prescricao, monitoramento medico)"
        ],
        "specifiers": [
          "Em terapia de manutencao",
          "em remissao inicial",
          "em remissao sustentada",
          "em ambiente protegido"
        ],
        "operational_profiles": [],
        "critical_differentials": [
          {
            "condicao": "Uso adequado de opioides prescritos",
            "diferenciador": "Sem compulsao, sem prejuizo funcional"
          },
          {
            "condicao": "Dor cronica legitima",
            "diferenciador": "Uso conforme prescricao, monitoramento medico"
          },
          {
            "condicao": "Abstinencia de sedativos",
            "diferenciador": "Pupilas DILATADAS em abstinencia de opioides; pupilas normais em sedativos"
          },
          {
            "condicao": "Intoxicacao por alcool/sedativos",
            "diferenciador": "Sem miose; sem resposta a naloxona"
          }
        ],
        "key_questions": [
          "Usou mais comprimidos ou injecoes do que planejava?",
          "Ja tentou parar ou diminuir? Conseguiu? Por quanto tempo?",
          "Quanto tempo gasta para conseguir opioides? Ja visitou varios medicos?",
          "Sentiu necessidade intensa de usar?",
          "Faltou ao trabalho ou negligenciou familia por causa dos opioides?",
          "Continuou usando apesar de brigas ou perda de relacionome_completontos?",
          "Deixou hobbies, esportes ou trabalho por causa do uso?",
          "Usou em situacoes de risco (ex: dividindo agulhas, usando sozinho)?",
          "Continua usando apesar de constipacao, overdoses previas ou infeccoes?",
          "Precisa de doses maiores para aliviar a dor ou sentir efeito?",
          "Quando para, sente calafrios, colicas, suores, ansiedade, vomitos?"
        ],
        "alerts": [
          "Overdose: Miose + depressao respiratoria = emergencia. Naloxona reverte em minutos.",
          "Risco de suicidio: TUO associado a 1,5-2% mortalidade/ano; overdose pode ser acidental ou deliberada.",
          "Complicacoes medicas: HIV, hepatite C (ate 90% em usuarios IV), endocardite, tuberculose.",
          "Sindrome neonatal: ~50% dos bebes de maes com TUO desenvolvem abstinencia neonatal.",
          "Nota Critica: Tolerancia e abstinencia desconsiderados em individuos cujo uso se da UNICAMENTE sob supervisao medica adequada."
        ],
        "source_trace": {
          "markdown_section": "## 7. TRANSTORNO POR USO DE OPIOIDES (TUO)",
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
  "grupo": "Opioides",
  "inventario_clinico": {
    "estrutura_efetiva": "",
    "notas_clinicas": "Padrão problemático de uso de opioides (heroína, analgésicos prescritos) com comprometimento significativo (2+ critérios em 12 meses). Autoadministração compulsiva, tolerância, abstinência."
  },
  
});
export type DisorderData = typeof data;
