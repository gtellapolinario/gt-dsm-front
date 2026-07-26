import { TpBorderlineSchema } from "./schema";

export const data = TpBorderlineSchema.parse({
  "$schema_version": "2.2.0",
  "meta": {
    "id": "tp_borderline",
    "nome_completo": "Transtorno da Personalidade Borderline",
    "sigla": "TPB",
    "codigo": {
      "dsm5": "301.83",
      "cid10": "F60.3",
      "cid11": "6D11.5"
    },
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "18",
    "grupo": "Cluster B",
    "faixa_etaria_alvo": "adulto",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Instabilidade Interpessoal, Autoimagem, Afetos e Impulsividade",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 5,
            "pediatria": 5
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Esforços desesperados para evitar abandono",
                "desc": "Esforços desesperados para evitar abandono real ou imaginado por pessoas próximas.",
                "pergunta": "A pessoa faz esforços desesperados para evitar que pessoas importantes o abandonem, mesmo diante de separações de curto prazo?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Desespero ao término de consulta",
                    "Fúria por atraso de minutos"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Relacionamentos instáveis e intensos com alternância extrema",
                "desc": "Um padrão de relacionamentos interpessoais instáveis e intensos caracterizado pela alternância entre extremos de idealização e desvalorização.",
                "pergunta": "Seus relacionamentos íntimos são intensos e instáveis, alternando rapidamente entre idealizar e desvalorizar a outra pessoa?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Idealizar em primeiro encontro",
                    "Sentir que outro não se importa o suficiente"
                ]
            },
            {
                "id": "A3",
                "rotulo": "Perturbação da identidade",
                "desc": "Perturbação da identidade: instabilidade acentuada e persistente da autoimagem ou da percepção de si mesmo.",
                "pergunta": "A pessoa tem uma sensação instável de quem é, com mudanças súbitas em metas, valores, aspirações ou identidade sexual?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Mudanças súbitas de carreira",
                    "Sentir que não existe"
                ]
            },
            {
                "id": "A4",
                "rotulo": "Impulsividade em áreas autodestrutivas",
                "desc": "Impulsividade em pelo menos duas áreas potencialmente autodestrutivas (gastos, sexo, abuso de substância, direção irresponsável, compulsão alimentar).",
                "pergunta": "A pessoa se comporta de forma impulsiva em áreas que podem ser prejudiciais, como gastos excessivos, sexo de risco, abuso de substâncias, direção irresponsável ou compulsão alimentar?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A5",
                "rotulo": "Comportamento, gestos ou ameaças suicidas/automutilantes",
                "desc": "Recorrência de comportamento, gestos ou ameaças suicidas ou de comportamento automutilante.",
                "pergunta": "A pessoa já teve recorrência de pensamentos suicidas, gestos, ameaças ou comportamentos de automutilação?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Cortes",
                    "Queimaduras"
                ]
            },
            {
                "id": "A6",
                "rotulo": "Instabilidade afetiva por reatividade acentuada",
                "desc": "Instabilidade afetiva devida a uma acentuada reatividade de humor (disforia episódica, irritabilidade ou ansiedade intensa com duração geralmente de poucas horas).",
                "pergunta": "A pessoa tem mudanças rápidas e intensas de humor (raiva, ansiedade, tristeza) que duram poucas horas ou dias, geralmente em resposta a estresses interpessoais?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A7",
                "rotulo": "Sentimentos crônicos de vazio",
                "desc": "Sentimentos crônicos de vazio.",
                "pergunta": "A pessoa sente vazio crônico ou um vazio interior persistente?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A8",
                "rotulo": "Raiva intensa e inapropriada ou dificuldade em controlá-la",
                "desc": "Raiva intensa e inapropriada ou dificuldade em controlá-la (mostras frequentes de irritação, raiva constante, brigas físicas recorrentes).",
                "pergunta": "A pessoa sente raiva intensa e frequentemente inapropriada, ou tem dificuldade em controlar sua raiva?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Sarcasmo extremo",
                    "Explosões verbais"
                ]
            },
            {
                "id": "A9",
                "rotulo": "Ideação paranoide transitória ou sintomas dissociativos",
                "desc": "Ideação paranoide transitória associada a estresse ou sintomas dissociativos intensos.",
                "pergunta": "Em períodos de estresse extremo, a pessoa tem ideação paranoide transitória ou sintomas dissociativos intensos (despersonalização, desrealização)?",
                "faixa_aplicavel": null,
                "nota": null
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
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
  "especificadores": [],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": [
            "6D10",
            "6D11.5"
        ],
        "equivalencia": "aproximada_com_qualificador",
        "regra": "Codificar primeiro a gravidade em 6D10.0–6D10.2 ou 6D10.Z; acrescentar 6D11.5 quando o padrão borderline estiver presente.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "modelo_categorial_sem_graduacao",
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade borderline não recebe níveis formais de gravidade."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": null,
      },
  "dominios_impacto": [
    {
        "id": "relacoes_interpessoais",
        "label": "Relações interpessoais e familiares",
        "icone": "Heart",
        "relevante_para": "transversal"
    },
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
    }
],
  "diagnostico_diferencial": [
    {
        "id": "transtorno_depressivo_maior",
        "condicao": "Transtorno Depressivo Maior",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno Depressivo Maior: humor deprimido episódico; Transtorno da Personalidade Borderline: padrão persistente desde início da vida adulta.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_bipolar",
        "condicao": "Transtorno Bipolar",
        "natureza": "transtorno_mental",
        "ponto_distincao": "transtorno bipolar: episódios de humor mais prolongados; Transtorno da Personalidade Borderline: reatividade rápida a estresse interpessoal.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_da_personalidade_histrionica",
        "condicao": "Transtorno da Personalidade Histriônica",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Histriônica: busca atenção sem autodestrutividade nem vazio crônico.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_da_personalidade_narcisista",
        "condicao": "Transtorno da Personalidade Narcisista",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Narcisista: estabilidade da autoimagem, sem autodestrutividade.",
        "pertence_a_mesma_classe_dsm": true
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtornos depressivos e bipolares",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtornos por uso de substância",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtornos alimentares (bulimia)",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "TEPT",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "TDAH",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "scid_5_pd",
        "nome": "Entrevista Clínica Estruturada para os Transtornos da Personalidade do DSM-5",
        "sigla": "SCID-5-PD",
        "uso": "apoio_diagnostico",
        "faixa_etaria": "adulto",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "zan_bpd",
        "nome": "Escala Zanarini para Transtorno da Personalidade Borderline",
        "sigla": "ZAN-BPD",
        "uso": "gravidade_monitoramento",
        "faixa_etaria": "adulto",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "pid_5",
        "nome": "Inventário de Personalidade para o DSM-5",
        "sigla": "PID-5",
        "uso": "formulacao_dimensional",
        "faixa_etaria": "adulto",
        "obrigatorio_para_diagnostico": false,
        "fonte": "apa_dsm5_secao_iii",
        "nota_aplicador": "Avalia traços dimensionais; não confirma isoladamente um transtorno categórico da personalidade."
    }
],
  "prevalencia": {
    "populacao_geral": "1,6% a 5,9%",
    "proporcao_sexo": "Cerca de 75% diagnosticados no sexo feminino",
    "variacoes_culturais": null,
    "notas": "Até 20% em pacientes psiquiátricos internados.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Início da vida adulta",
    "trajetoria": "Instabilidade crônica no início; melhora gradual após os 30–50 anos.",
    "prognostico": "Metade não mais preenche critérios após ~10 anos de acompanhamento.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [
          "1. Esforcos desesperados para evitar abandono real ou imaginado",
          "2. Relacionamentos instaveis com alternancia entre idealizacao e desvalorizacao",
          "3. Instabilidade acentuada da autoimagem",
          "4. Impulsividade em 2+ areas autodestrutivas",
          "5. Recorrencia de comportamento suicida ou automutilacao",
          "6. Instabilidade afetiva (reatividade de humor, duracao horas)",
          "7. Sentimentos cronicos de vazio",
          "8. Raiva intensa e inapropriada",
          "9. Ideacao paranoide transitoria ou sintomas dissociativos"
        ],
        "diagnostic_rule": "Criterios gerais de TP (A-F) + >=5 de 9 criterios; exclusao interna: criterios 1 e 4 excluem suicida/automutilador (contado apenas no 5)",
        "clusters": [
          "Instabilidade Relacional",
          "Instabilidade Identitaria",
          "Impulsividade",
          "Disfregulacao Afetiva"
        ],
        "duration": "instabilidade cronica; melhora com envelhecimento (30-50 anos); ate 50% nao mais atende criterios apos ~10 anos",
        "age_onset": "inicio vida adulta",
        "functional_impairment": "prejuizo interpessoal grave; recorrente perda de empregos; separacoes; risco de suicidio 8-10%; automutilacao",
        "exclusions": [
          "transtornos depressivo/bipolar",
          "histriônica",
          "dependente",
          "narcisista",
          "TEP"
        ],
        "specifiers": [],
        "operational_profiles": [
          {
            "id": "descontrolado",
            "description": "Variante com afeto/impulsividade predominantes"
          },
          {
            "id": "quiet_borderline",
            "description": "Variante com retencao, evitacao"
          }
        ],
        "critical_differentials": [
          "transtorno bipolar",
          "histriônica",
          "dependente",
          "narcisista",
          "TEP"
        ],
        "key_questions": [
          "Esforcos desesperados para evitar abandono?",
          "Relacionamentos intensos e instaveis (maravilhosa/terrivel)?",
          "Autoimagem muda muito?",
          "Impulsividade em areas autodestrutivas?",
          "Automutilacao ou gestos/ameacas suicidas?",
          "Humor muda rapidamente (horas)?",
          "Vazio persistente?",
          "Raiva intensa, brigas fisicas?",
          "Sob estresse: sentiu que coisas nao eram reais?"
        ],
        "alerts": [
          "ALTO RISCO DE SUICIDIO (8-10%); avaliar automutilacao em TODA entrevista",
          "Instabilidade afetiva TPB = horas; bipolar = semanas/meses",
          "Melhora com idade mas fase inicial de risco elevado"
        ],
        "source_trace": {
          "markdown_section": "## 5. Transtorno da Personalidade Borderline (TPB)",
          "patches_applied": [
            "LOW-VERIFY: risco suicidio confirmado"
          ]
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
    "fonte_capitulo_md": "18_transtornos_personalidade.md",
    "fonte_inventario_md": null,
    "data_extracao": "2026-05-31",
    "modelo_agente": "claude-opus-4-7",
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
  "grupo": "Cluster B",
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:** Padrao difuso de instabilidade das relacoes interpessoais, autoimagem e afetos, com impulsividade acentuada. Exige 5+ de 9 criterios: (1) esforcos desesperados para evitar abandono real/imaginado, (2) relacionamentos instaveis e intensos (idealizacao/desvalorizacao), (3) perturbacao da identidade, (4) impulsividade em 2+ areas autodestrutivas, (5) recorrencia de comportamento/gestos/ameacas suicidas ou automutilacao, (6) instabilidade afetiva (reatividade de humor, disforia episodica, duracao de poucas horas, raramente > alguns dias), (7) sentimentos cronicos de vazio, (8) raiva intensa inapropriada ou dificuldade de controle, (9) ideacao paranoide transitoria ou sintomas dissociativos associados a estresse.",
    "notas_clinicas": "- **Notas:** Prevalencia: 1,6% (ate 5,9%); ~6% atencao primaria; ~10% ambulatorio saude mental; ~20% internados psiquiatricos. Diagnosticado em ~75% mulheres. Suicidio ocorre em 8-10% dos casos. Apos ~10 anos de seguimento, ate metade nao preenche mais criterios. Comorbidade: transtornos depressivos, bipolares, uso de substancia, alimentares (bulimia), TEPT, TDAH. Risco familiar 5x maior. Instabilidade cronica no inicio da vida adulta; melhora a partir dos 30-50 anos com tratamento."
  },
  
});
export type DisorderData = typeof data;
