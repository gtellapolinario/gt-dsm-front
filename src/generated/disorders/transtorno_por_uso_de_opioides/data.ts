import { TranstornoPorUsoDeOpioidesSchema } from "./schema";

export const data = TranstornoPorUsoDeOpioidesSchema.parse({
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_por_uso_de_opioides",
    "nome_completo": "Transtorno por Uso de Opioides",
    "sigla": null,
    "codigo": {
      "dsm5": "304.00",
      "cid10": "F11.20",
      "cid11": "6C41"
    },
    "capitulo": "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
    "capitulo_id": "16",
    "grupo": "Opioides",
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Dependência de heroína",
      "Abuso de opioides"
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
          "pergunta": "Você já usou opioides em quantidades maiores ou por mais tempo do que pretendia?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A2",
          "rotulo": "Desejo persistente ou esforços malsucedidos de reduzir",
          "desc": "Desejo persistente ou esforços malsucedidos para reduzir ou controlar o uso de opioides.",
          "pergunta": "Você já tentou reduzir ou parar de usar opioides sem sucesso?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A3",
          "rotulo": "Muito tempo obtendo, usando ou recuperando-se",
          "desc": "Muito tempo gasto em atividades necessárias para obtenção, uso ou recuperação dos efeitos de opioides.",
          "pergunta": "Você passa muito tempo obtendo, usando ou se recuperando dos efeitos de opioides?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A4",
          "rotulo": "Fissura ou forte desejo de usar",
          "desc": "Fissura ou forte desejo ou necessidade de usar opioides.",
          "pergunta": "Você sente forte desejo ou necessidade de usar opioides?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A5",
          "rotulo": "Fracasso em papéis por uso recorrente",
          "desc": "Uso recorrente resultando em fracasso em cumprir obrigações no trabalho, escola ou casa.",
          "pergunta": "O uso de opioides já causou problemas no trabalho, na escola ou em casa?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A6",
          "rotulo": "Uso continuado apesar de problemas sociais/interpessoais",
          "desc": "Uso continuado apesar de problemas sociais ou interpessoais persistentes causados ou exacerbados pelos efeitos.",
          "pergunta": "Você continua usando opioides mesmo tendo problemas com outras pessoas por causa disso?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A7",
          "rotulo": "Abandono de atividades importantes",
          "desc": "Atividades sociais, profissionais ou recreacionais importantes abandonadas ou reduzidas em virtude do uso.",
          "pergunta": "Você deixou de fazer atividades importantes por causa do uso de opioides?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A8",
          "rotulo": "Uso recorrente em situações perigosas",
          "desc": "Uso recorrente em situações nas quais isso representa perigo para a integridade física.",
          "pergunta": "Você já usou opioides em situações que poderiam ser perigosas?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A9",
          "rotulo": "Uso mantido apesar de problemas físicos/psicológicos",
          "desc": "Uso mantido apesar da consciência de ter um problema físico ou psicológico persistente provavelmente causado ou exacerbado pela substância.",
          "pergunta": "Você continua usando opioides mesmo sabendo que isso agrava problemas de saúde?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A10",
          "rotulo": "Tolerância",
          "desc": "Tolerância: necessidade de quantidades progressivamente maiores para obter o efeito desejado, ou efeito acentuadamente menor com a mesma quantidade.",
          "pergunta": "Você precisa de quantidades maiores de opioides para sentir o mesmo efeito?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A11",
          "rotulo": "Abstinência",
          "desc": "Abstinência: síndrome característica ao cessar/reduzir, ou uso para aliviar/evitar sintomas de abstinência.",
          "pergunta": "Você sente sintomas desagradáveis quando para de usar opioides, ou o usa para evitar esses sintomas?",
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
      "descricao_completa": "Um padrão problemático de uso de opioides, levando a comprometimento ou sofrimento clinicamente significativo, manifestado por pelo menos dois dos critérios, ocorrendo durante um período de 12 meses.",
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
        "notas_agente": "3-12 meses sem critérios (exceto fissura) para opioides.",
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
        "notas_agente": "≥12 meses sem critérios (exceto fissura) para opioides.",
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
    "regra_atribuicao": "Conte os critérios preenchidos no período diagnóstico; remissão e tratamento de manutenção são registrados separadamente."
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
      "id": "saude",
      "label": "Saúde Física",
      "icone": "HeartPulse",
      "relevante_para": "transversal"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtornos mentais induzidos por opioides",
      "ponto_distincao": "Sintomas específicos de outro transtorno predominam e justificam atenção clínica independente.",
      "pertence_a_classe": true
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
      "nome": "Exame toxicológico de urina",
      "sigla": null,
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    }
  ],
  "prevalencia": {
    "populacao_geral": "0,37% adultos ≥18a; ~1% (12-17a) para analgésicos.",
    "proporcao_sexo": "1,5:1 homens:mulheres (analgesicos); 3:1 com heroína.",
    "variacoes_culturais": "Maior entre índios norte-americanos (1,25%).",
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Fim da adolescência / início dos 20 anos",
    "trajetoria": "Curso crônico com recaídas frequentes após tratamento.",
    "prognostico": "20-30% alcançam abstinência duradoura; mortalidade 1,5-2%/ano.",
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
  "id": "transtorno_por_uso_de_opioides",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
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
  "grupo": "Opioides",
  "versao_complementar_existe": false,
  "inventario_clinico": {
    "codigo_bruto": "",
    "estrutura_efetiva": "",
    "notas_clinicas": "Padrão problemático de uso de opioides (heroína, analgésicos prescritos) com comprometimento significativo (2+ critérios em 12 meses). Autoadministração compulsiva, tolerância, abstinência."
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
