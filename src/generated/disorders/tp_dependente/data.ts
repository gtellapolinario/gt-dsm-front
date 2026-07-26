import { TpDependenteSchema } from "./schema";

export const data = TpDependenteSchema.parse({
  "$schema_version": "2.2.0",
  "meta": {
    "id": "tp_dependente",
    "nome_completo": "Transtorno da Personalidade Dependente",
    "sigla": "TPD",
    "codigo": {
      "dsm5": "301.6",
      "cid10": "F60.7",
      "cid11": "6D10"
    },
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "18",
    "grupo": "Cluster C",
    "faixa_etaria_alvo": "adulto",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Necessidade Excessiva de Ser Cuidado",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 5,
            "pediatria": 5
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Dificuldade em tomar decisões sem conselhos excessivos",
                "desc": "Tem dificuldades em tomar decisões cotidianas sem uma quantidade excessiva de conselhos e reasseguramento de outros.",
                "pergunta": "A pessoa tem grande dificuldade em tomar decisões cotidianas sem conselhos e reasseguramentos excessivos de outras pessoas?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Dúvida sobre cor de camisa ou levar guarda-chuva"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Precisa que outros assumam responsabilidade por sua vida",
                "desc": "Precisa que outros assumam responsabilidade pela maior parte das principais áreas de sua vida.",
                "pergunta": "A pessoa precisa que outras pessoas assumam a responsabilidade pela maior parte das áreas importantes da sua vida?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Dependência de pai/mãe ou cônjuge para decisões de moradia e trabalho"
                ]
            },
            {
                "id": "A3",
                "rotulo": "Dificuldade em manifestar desacordo por medo de perder apoio",
                "desc": "Tem dificuldades em manifestar desacordo com outros devido a medo de perder apoio ou aprovação.",
                "pergunta": "A pessoa tem dificuldade em discordar de outras pessoas por medo de perder o apoio ou aprovação delas?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A4",
                "rotulo": "Dificuldade em iniciar projetos por falta de autoconfiança",
                "desc": "Apresenta dificuldade em iniciar projetos ou fazer coisas por conta própria devido mais a falta de autoconfiança do que a falta de motivação.",
                "pergunta": "A pessoa tem dificuldade para iniciar projetos ou fazer coisas sozinho por falta de confiança em seu julgamento ou capacidades?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A5",
                "rotulo": "Vai a extremos para obter carinho e apoio",
                "desc": "Vai a extremos para obter carinho e apoio de outros, a ponto de voluntariar-se para fazer coisas desagradáveis.",
                "pergunta": "A pessoa vai a extremos para conseguir carinho e apoio, chegando a se voluntariar para tarefas desagradáveis?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Tolerar abuso para manter vínculo"
                ]
            },
            {
                "id": "A6",
                "rotulo": "Desconfortável ou desamparado quando sozinho",
                "desc": "Sente-se desconfortável ou desamparado quando sozinho devido a temores exagerados de ser incapaz de cuidar de si mesmo.",
                "pergunta": "A pessoa se sente desconfortável ou desamparado quando está sozinho por medo excessivo de não conseguir cuidar de si?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Grudar-se em outros apenas para evitar solidão"
                ]
            },
            {
                "id": "A7",
                "rotulo": "Busca urgentemente novo relacionamento após término",
                "desc": "Busca com urgência outro relacionamento como fonte de cuidado e amparo logo após o término de um relacionamento íntimo.",
                "pergunta": "Logo após o término de um relacionamento íntimo, a pessoa busca urgentemente outro relacionamento para obter cuidado e apoio?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A8",
                "rotulo": "Preocupações irreais com medos de ser abandonado",
                "desc": "Tem preocupações irreais com medos de ser abandonado à própria sorte.",
                "pergunta": "A pessoa tem preocupações excessivas e irreais com o medo de ser abandonado à própria sorte?",
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
        "codigo_base": "6D10",
        "equivalencia": "sem_correspondencia_categorial_direta",
        "regra": "A CID-11 não conserva os tipos categóricos do DSM-5-TR. Codificar a gravidade em 6D10.0–6D10.2 ou 6D10.Z e acrescentar qualificadores de traço quando sustentados.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "modelo_categorial_sem_graduacao",
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade dependente não recebe níveis formais de gravidade."
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
        "id": "transtorno_da_personalidade_borderline",
        "condicao": "Transtorno da Personalidade Borderline",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Borderline: reage ao abandono com raiva e vazio; dependente: reage com submissão e busca por novo relacionamento.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_da_personalidade_histrionica",
        "condicao": "Transtorno da Personalidade Histriônica",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Histriônica: exibicionismo sociável e demanda ativa de atenção; dependente: retraimento e comportamento dócil.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_depressivo_ou_de_panico",
        "condicao": "Transtorno depressivo ou de pânico",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Dependência pode ser decorrente de outro transtorno mental e deve ser diferenciada.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtornos depressivos",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtornos de ansiedade",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno de adaptação",
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
    "populacao_geral": "0,49% a 0,6%",
    "proporcao_sexo": "Diagnosticado mais em mulheres em contextos clínicos; alguns estudos mostram taxas similares",
    "variacoes_culturais": "Ênfase em passividade e deferência em algumas culturas não deve ser confundida com TPD.",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Início da vida adulta",
    "trajetoria": "Crônico; comportamento dependente pode ser apropriado ao desenvolvimento em crianças/adolescentes.",
    "prognostico": "Cautela no diagnóstico em jovens.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [
          "1. Dificuldade em tomar decisoes sem conselhos excessivos",
          "2. Precisa que outros assumam responsabilidade",
          "3. Dificuldade em discordar por medo de perder apoio",
          "4. Dificuldade em iniciar projetos por falta de autoconfianca",
          "5. Vai a extremos para obter carinho e apoio",
          "6. Desconfortavel/desamparado quando sozinho",
          "7. Busca urgentemente outro relacionamento apos termino",
          "8. Preocupacoes irreais com medo de abandono"
        ],
        "diagnostic_rule": "Criterios gerais de TP (A-F) + >=5 de 8 criterios",
        "clusters": [
          "Necessidade Excessiva de Cuidado",
          "Submissao",
          "Medo de Abandono"
        ],
        "duration": "padrao persistente",
        "age_onset": "inicio vida adulta",
        "functional_impairment": "funcionamento profissional prejudicado; relacoes limitadas; vulnerabilidade a relacionamentos abusivos",
        "exclusions": [
          "borderline",
          "evitativa",
          "histriônica",
          "TOC personalidade",
          "depressao"
        ],
        "specifiers": [],
        "operational_profiles": [],
        "critical_differentials": [
          "borderline",
          "evitativa",
          "histriônica",
          "depressao"
        ],
        "key_questions": [
          "Dificuldade em tomar decisoes simples sem conselho?",
          "Depende que outros decidam por voce?",
          "Dificuldade em discordar por medo de perder pessoas?",
          "Evita comecar projetos por falta de autoconfianca?",
          "Fez coisas desagradaveis so para agradar e manter alguem?",
          "Ansioso/desamparado quando sozinho?",
          "Busca desesperadamente outro relacionamento apos termino?",
          "Medo excessivo de ser abandonado?"
        ],
        "alerts": [
          "Nao confundir submissao a abusador por medo real de retaliacao com traco dependente; contexto cultural e essencial"
        ],
        "source_trace": {
          "markdown_section": "## 9. Transtorno da Personalidade Dependente (TPDep)",
          "patches_applied": []
        },
        "category": "FULL",
        "ui_mode": "structured_full",
        "render_structured_interview": true
      },
    "enrichment_status": {
        "has_poor": true,
        "has_master": false,
        "has_inventory": true,
        "has_hierarchy": false,
        "has_cid11": true,
            "match_notes": {
          "poor": "id",
          "master": "missing",
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
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:** Necessidade difusa e excessiva de ser cuidado, levando a comportamento submisso e apego. Exige 5+ de 8 criterios: (1) dificuldade em tomar decisoes cotidianas sem conselhos/reasseguramento excessivo, (2) precisa que outros assumam responsabilidade por areas principais da vida, (3) dificuldade em expressar desacordo por medo de perder apoio, (4) dificuldade em iniciar projetos sozinho (falta de autoconfianca), (5) vai a extremos para obter carinho/apoio (voluntariar-se para tarefas desagradaveis), (6) desconfortavel/desamparado quando sozinho, (7) busca urgentemente novo relacionamento apos terminio, (8) preocupacoes irreaeis com medo de ser abandonado.",
    "notas_clinicas": "- **Notas:** Prevalencia: 0,49% (NESARC) a 0,6% (NCS-R). Mais diagnosticado em mulheres em contextos clinicos, mas alguns estudos mostram taxas similares entre sexos. Cautela/extrema cautela em criancas e adolescentes (comportamento dependente pode ser adequado ao desenvolvimento). Comorbidade: TP borderline, evitativa, histrionica; transtornos depressivos, ansiedade, adaptacao. Doenca fisica cronica ou transtorno de ansiedade de separacao na infancia podem predispor."
  },
  
});
export type DisorderData = typeof data;
