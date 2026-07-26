import { DeficienciaIntelectualSchema } from "./schema";

export const data = DeficienciaIntelectualSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "deficiencia_intelectual",
    "nome_completo": "Transtorno do Desenvolvimento Intelectual (Deficiência Intelectual)",
    "codigo": {
        "dsm5": "",
        "cid10": "F70–F79",
        "cid11": "6A00"
    },
    "capitulo": "Transtornos do Neurodesenvolvimento",
    "capitulo_id": "transtornos_do_neurodesenvolvimento",
    "sigla": "DI",
    "codificacao": {
        "cid10_cm": {
            "referencia_base": "F70–F79",
            "equivalencia": "contextual",
            "regra": "Referência de família ou conjunto de códigos; selecionar o código CID-10-CM específico conforme apresentação, curso, gravidade e regras da versão adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6A00",
            "equivalencia": "contextual",
            "regra": "Selecionar 6A00.0–6A00.4 ou 6A00.Z conforme gravidade e possibilidade de avaliação válida.",
            "versao": "CID-11 MMS 2026-01"
        }
    },
    "agrupamento": {
        "capitulo": {
            "id": "transtornos_do_neurodesenvolvimento",
            "label": "Transtornos do Neurodesenvolvimento"
        },
        "subgrupo": {
            "id": "deficiencia_intelectual",
            "label": "Deficiência Intelectual",
            "natureza": "subgrupo_do_capitulo"
        }
    },
    "faixa_etaria_alvo": "transversal",
    "terminologia_relacionada": [
        {
            "termo": "Retardo mental",
            "status": "obsoleto",
            "equivalencia": "historica",
            "nota": "Substituído por terminologia centrada em desenvolvimento intelectual e funcionamento adaptativo."
        },
        {
            "termo": "Oligofrenia",
            "status": "obsoleto",
            "equivalencia": "historica",
            "nota": null
        }
    ]
},
  "estrutura_geral": "tripartite_funcional",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Déficits nas Funções Intelectuais",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Déficits no raciocínio e solução de problemas",
                "desc": "Comprometimento no raciocínio, resolução de problemas, planejamento, pensamento abstrato, juízo, aprendizagem acadêmica e aprendizagem pela experiência.",
                "pergunta": "A pessoa demonstra dificuldades acentuadas em planejar atividades diárias, compreender conceitos abstratos ou aprender com erros do passado?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Dificuldade em gerenciar finanças",
                    "Dificuldade na tomada de decisões lógicas diárias"
                ]
            }
        ],
        "descricao_qualitativa": "Confirmados por avaliação clínica e testes de inteligência padronizados individualizados (geralmente QI ≥ 2 desvios-padrão abaixo da média, ou seja, ~70 ou menos).",
        "nota": null,
        "regra_temporal": null
    },
    {
        "id": "B",
        "nome": "Déficits no Funcionamento Adaptativo",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "B1",
                "rotulo": "Déficits no funcionamento adaptativo",
                "desc": "Déficits no funcionamento adaptativo resultam em fracasso para atingir padrões de desenvolvimento e socioculturais de independência pessoal e responsabilidade social; sem apoio continuado, limitam uma ou mais atividades da vida diária em múltiplos ambientes.",
                "pergunta": "A pessoa apresenta déficits adaptativos que limitam uma ou mais atividades da vida diária em múltiplos ambientes?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Necessita de ajuda para preencher formulários",
                    "Dificuldade no uso de dinheiro"
                ]
            }
        ],
        "descricao_qualitativa": "Resultam em fracasso para atingir padrões de desenvolvimento e socioculturais de independência e responsabilidade social. Sem suporte, os déficits limitam o funcionamento em uma ou mais atividades diárias.",
        "nota": null,
        "regra_temporal": null
    }
],
  "criterios_condicionais": [
    {
        "id": "inicio_desenvolvimento",
        "letra": "C",
        "rotulo": "Início durante o período do desenvolvimento",
        "tipo": "condicional_etario",
        "ui_widget": "campo_idade",
        "obrigatorio": true,
        "icone": "Clock",
        "descricao_completa": "Início dos déficits intelectuais e adaptativos durante o período do desenvolvimento (infância ou adolescência).",
        "nota": null
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
        "codigo_base": "6A00",
        "equivalencia": "contextual",
        "regra": "Selecionar 6A00.0–6A00.4 ou 6A00.Z conforme gravidade e possibilidade de avaliação válida.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "formal_dimensional",
    "escopo": "funcionamento_adaptativo",
    "tipo": "funcionamento_adaptativo_por_dominio",
    "lembrete_aplicador": "Classifique pelo funcionamento adaptativo nos domínios conceitual, social e prático, não pelo QI.",
    "dominios": [
        {
            "id": "conceitual",
            "label": "Conceitual"
        },
        {
            "id": "social",
            "label": "Social"
        },
        {
            "id": "pratico",
            "label": "Prático"
        }
    ],
    "niveis_referencia": [
        {
            "id": "leve",
            "label": "Leve",
            "descritor": "Necessita apoio em tarefas adaptativas complexas."
        },
        {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "Necessita apoio regular para atividades conceituais, sociais e práticas."
        },
        {
            "id": "grave",
            "label": "Grave",
            "descritor": "Necessita apoio amplo e contínuo para as atividades cotidianas."
        },
        {
            "id": "profunda",
            "label": "Profunda",
            "descritor": "Depende de apoio permanente para participação, segurança e cuidados cotidianos."
        }
    ],
    "regra_atribuicao": "A gravidade global deve refletir o perfil adaptativo e a intensidade de apoio necessária."
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
    },
    {
        "id": "autonomia_autocuidado",
        "label": "Autonomia e autocuidado",
        "icone": "House",
        "relevante_para": "transversal"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "transtornos_da_comunicacao",
        "condicao": "Transtornos da Comunicação",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Pacientes mantêm funcionamento intelectual e adaptativo geral preservado fora da comunicação.",
        "pertence_a_mesma_classe_dsm": true
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "TDAH",
      "frequencia": "alta",
      "nota": "Muito comum em crianças com DI."
    },
    {
      "condicao": "TEA",
      "frequencia": "moderada",
      "nota": "Sintomas de autismo ocorrem frequentemente em indivíduos com deficiência intelectual."
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "vineland_3",
        "nome": "Escalas de Comportamento Adaptativo de Vineland",
        "sigla": "Vineland-3",
        "uso": "avaliacao_funcional",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "teste_inteligencia",
        "nome": "Teste individual padronizado de inteligência",
        "sigla": null,
        "uso": "apoio_diagnostico",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "tipo_estimativa": "prevalencia_pontual",
    "estimativa": "Cerca de 1% na população geral; apresentações graves são menos frequentes.",
    "distribuicao_por_sexo": "Razão de prevalência mais alta em indivíduos do sexo masculino.",
    "variacoes_contextuais": null,
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "No período do desenvolvimento; a idade de reconhecimento varia com a etiologia, a gravidade e as demandas ambientais.",
    "trajetoria": "As limitações são duradouras, mas o funcionamento adaptativo pode mudar com desenvolvimento, saúde, ambiente e suporte.",
    "prognostico": "É influenciado pelo funcionamento adaptativo, etiologia, condições neurológicas ou psiquiátricas associadas, saúde e suporte disponível.",
    "nota_aplicador": "A idade típica é um lembrete clínico; avaliar história do desenvolvimento e demandas atuais, sem usar a faixa etária como exclusão automática."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "monothetic_tripartite",
        "criteria": [
          "A. Deficits em funcoes intelectuais (raciocinio, solucao de problemas, planejamento, pensamento abstrato, juizo, aprendizagem academica, aprendizagem pela experiencia) confirmados por avaliacao clinica e testes de inteligencia padronizados individualizados.",
          "B. Deficits em funcoes adaptativas que resultam em fracasso para atingir padroes de desenvolvimento e socioculturais em relacao a independencia pessoal e responsabilidade social. Sem apoio continuado, os deficits limitam o funcionome_completonto em uma ou mais atividades diarias (comunicacao, participacao social, vida independente) em multiplos ambientes (casa, escola, trabalho, comunidade).",
          "C. Inicio dos deficits intelectuais e adaptativos durante o periodo do desenvolvimento."
        ],
        "diagnostic_rule": "Todos os criterios A, B e C sao obrigatorios (estrutura monotetica tripartite). O diagnostico e clinico, baseado em sintese de avaliacao clinica e testes padronizados. O funcionome_completonto intelectual e tipicamente ~2DP abaixo da media (QI ~65-75 em testes com DP=15, media=100, com margem de erro de medida).",
        "clusters": [],
        "duration": null,
        "age_onset": "** Durante a infancia ou adolescencia; formas graves identificaveis nos primeiros 2 anos; formas leves podem passar despercebidas ate a idade escolar",
        "functional_impairment": "- Funcionome_completonto adaptativo prejudicado em pelo menos 1 dos 3 dominios (conceitual, social, pratico) - Necessidade de apoio continuado para desempenho adequado em 1+ locais (escola, trabalho, casa, comunidade) - Deficits adaptativos devem estar diretamente relacionados aos prejuizos intelectuais do Criterio A",
        "exclusions": [
          "Transtornos neurocognitivos (inicio tardio/perda de funcao)",
          "Transtornos da comunicacao e aprendizagem (sem deficits globais intelectual/adaptativo)",
          "Transtorno do espectro autista (avaliar discrepancia entre habilidades sociais e nao-verbais)"
        ],
        "specifiers": [
          "Com comprometimento intelectual / sem comprometimento intelectual concomitante",
          "Com comprometimento da linguagem / sem comprometimento da linguagem concomitante",
          "Associado a condicao medica ou genetica conhecida ou fator ambiental",
          "Associado a outro transtorno do neurodesenvolvimento, mental ou comportamental",
          "Com catatonia"
        ],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [
          "A crianca atingiu os marcos do desenvolvimento (motor, linguistico, social) na epoca esperada?",
          "Ha dificuldades de aprendizagem academica que exigem apoio especial?",
          "A pessoa consegue realizar atividades de autocuidado adequadas a idade?",
          "Ha independencia na comunicacao, participacao social e vida diaria?",
          "Os deficits estao presentes desde a infancia/periodo do desenvolvimento?",
          "Ha historia de QI testado abaixo de 70-75?",
          "Ha necessidade de apoio continuado em casa, escola, trabalho ou comunidade?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### Deficiencia Intelectual",
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
    "fonte_capitulo_md": "01_transtornos_neurodesenvolvimento.md",
    "fonte_inventario_md": "inventario/01_inventario.md",
    "data_extracao": "2026-05-21",
    "modelo_agente": "antigravity-ide",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "revisao_humana_necessaria": false,
    "notas_agente_globais": null
  },
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "grupo": "Deficiência Intelectual",
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:** Tripartite — **A** déficit intelectual (QI ~70±5) + **B** déficit adaptativo em 3 domínios (conceitual, social, prático) + **C** início no período do desenvolvimento. Gravidade definida por tabela 4×3 (leve/moderada/grave/profunda × conceitual/social/prático), não por QI isoladamente.",
    "notas_clinicas": "- **Notas:** Sem limiar polietético contável. Avaliação adaptativa é o diferenciador principal. Severidade classificada pelo funcionamento adaptativo."
  },
  
});
export type DisorderData = typeof data;
