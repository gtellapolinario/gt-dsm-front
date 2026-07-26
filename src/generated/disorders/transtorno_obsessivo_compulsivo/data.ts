import { TranstornoObsessivoCompulsivoSchema } from "./schema";

export const data = TranstornoObsessivoCompulsivoSchema.parse({
  "$schema_version": "2.1.0",
  "meta": {
    "id": "transtorno_obsessivo_compulsivo",
    "nome_completo": "Transtorno Obsessivo-Compulsivo",
    "sigla": "TOC",
    "codigo": {
      "dsm5": "300.3",
      "cid10": "F42",
      "cid11": "6B20"
    },
    "capitulo": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
    "capitulo_id": "06",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "estrutura_geral": "polythetic_clusters_assimetricos",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Presença de obsessões, compulsões ou ambas",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 1,
            "pediatria": 1
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Pensamentos/impulsos/imagens intrusivos recorrentes",
                "desc": "Pensamentos, impulsos ou imagens recorrentes e persistentes, experimentados como intrusivos e indesejados, causando ansiedade ou sofrimento acentuados.",
                "pergunta": "A pessoa tem pensamentos, impulsos ou imagens perturbadores que aparecem repetidamente contra sua vontade?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Pensamentos de contaminar alguém",
                    "Impulso de machucar ente querido",
                    "Imagens blasfemas intrusivas"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Tentativas de ignorar/suprimir ou neutralizar obsessões",
                "desc": "O indivíduo tenta ignorar ou suprimir tais pensamentos/impulsos/imagens, ou neutralizá-los com outro pensamento ou ação (i.e., realizando uma compulsão).",
                "pergunta": "A pessoa tenta afastar esses pensamentos ou neutralizá-los fazendo algo repetidamente?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Rezar para neutralizar pensamento blasfemo"
                ]
            },
            {
                "id": "A3",
                "rotulo": "Compulsões repetitivas em resposta a obsessão",
                "desc": "Comportamentos repetitivos (lavar mãos, ordenar, verificar) ou atos mentais (rezar, contar, repetir palavras) que o indivíduo se sente compelido a executar em resposta à obsessão ou conforme regras rígidas.",
                "pergunta": "A pessoa realiza comportamentos repetitivos ou rituais mentais em resposta a esses pensamentos?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Lavar mãos 30x por dia",
                    "Verificar fogão 10 vezes antes de sair"
                ]
            },
            {
                "id": "A4",
                "rotulo": "Comportamentos visam prevenir ansiedade/evento temido",
                "desc": "Os comportamentos ou atos mentais visam prevenir ou reduzir a ansiedade/sofrimento, ou prevenir algum evento temido; contudo, não têm conexão realista com o que visam neutralizar.",
                "pergunta": "Esses rituais têm como objetivo reduzir sua ansiedade ou prevenir algo ruim de acontecer?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Verificar o fogão para prevenir incêndio"
                ]
            }
        ],
        "descricao_qualitativa": "O critério exige obsessões, compulsões ou ambas; cada categoria possui definição interna própria.",
        "nota": null,
        "regra_temporal": null
    }
],
  "criterios_condicionais": [
    {
        "id": "tempo_funcional",
        "letra": "B",
        "rotulo": "Obsessões/compulsões superior a 1h/dia ou causam sofrimento",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Clock",
        "descricao_completa": "As obsessões ou compulsões tomam mais de uma hora por dia OU causam sofrimento clinicamente significativo ou prejuízo no funcionamento.",
        "nota": null
    },
    {
        "id": "exclusao_substancia_medica",
        "letra": "C",
        "rotulo": "Não atribuível a substância ou condição médica",
        "tipo": "exclusao_substancia_medica",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Não atribuível a efeitos fisiológicos de substância ou condição médica.",
        "nota": null
    },
    {
        "id": "exclusao_outros",
        "letra": "D",
        "rotulo": "Não melhor explicado por outro transtorno mental",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Não mais bem explicado por TAG (preocupações), TDC (aparência), acumulação, tricotilomania, escoriação, estereotipias, transtornos alimentares, TB/substâncias, ansiedade de doença, parafílias, transtornos disruptivos, TDM, transtornos psicóticos, TEA.",
        "nota": null,
        "ddx_sugeridos": [
            "transtorno_ansiedade_generalizada",
            "transtorno_dismorffico_corporal",
            "transtorno_espectro_autista",
            "tricotilomania",
            "transtorno_escoriacao"
        ]
    }
],
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "especificadores": [
    {
        "id": "insight_bom",
        "nome": "Com bom insight ou razoável insight",
        "tipo": "enum",
        "ortogonal": false,
        "regra_criterial": null,
        "opcoes": [
            "Com bom ou razoável insight",
            "Com pobre insight",
            "Com ausência de insight/crenças delirantes"
        ]
    },
    {
        "id": "relacionado_tiques",
        "nome": "Relacionado a tiques",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    }
],
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno obsessivo-compulsivo."
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
      "id": "tempo",
      "label": "Uso do Tempo",
      "icone": "Clock",
      "relevante_para": "transversal"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno de Ansiedade Generalizada",
      "ponto_distincao": "TAG: preocupações sobre problemas da vida real; TOC: obsessões são intrusivas/egodistônicas, frequentemente sem base realista.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno Dismórfico Corporal",
      "ponto_distincao": "TDC: obsessões limitadas à aparência física; TOC: obsessões variadas; se preocupações com aparência satisfazem TDC, diagnosticar TDC.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno do Espectro Autista",
      "ponto_distincao": "TEA: comportamentos repetitivos egossintônicos visando regulação sensorial; TOC: compulsões são egodistônicas e visam reduzir ansiedade.",
      "pertence_a_classe": false
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno de ansiedade",
      "frequencia": "alta",
      "nota": "Especialmente TAG e fobia social."
    },
    {
      "condicao": "Transtorno Depressivo Maior",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtornos de tiques",
      "frequencia": "moderada",
      "nota": "Especialmente em homens com início precoce."
    }
  ],
  "instrumentos_complementares": [
    {
      "nome": "Yale-Brown Obsessive Compulsive Scale",
      "sigla": "Y-BOCS",
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ],
  "prevalencia": {
    "populacao_geral": "1,2% (prevalência de 12 meses)",
    "proporcao_sexo": "Levemente mais comum em mulheres adultas; mais em meninos na infância",
    "variacoes_culturais": "Sintomas similares cross-culturalmente; conteúdo das obsessões pode variar.",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Pico bimodal: 9–10 anos (meninos) e início na adolescência/adulto jovem (mulheres); mediana geral ~19–20 anos",
    "trajetoria": "Geralmente crônico com flutuações; 15% curso deteriorante; 5% episódico.",
    "prognostico": "Boa resposta a TCC com exposição e resposta (ERPrev) e ISRSs.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [],
        "diagnostic_rule": "**(Obsessoes(A1+A2) XOR/OR Compulsoes(A1+A2)) AND B(tempo/prejuizo) AND C(exclusao_substancia) AND D(exclusao_outro_TM)**\n\n**Ponto critico:** O individuo pode ter APENAS obsessoes, APENAS compulsoes, ou ambas. O critério B (tempo >1h/dia ou prejuizo) e o diferencial entre subclinico e transtorno.",
        "clusters": [],
        "duration": null,
        "age_onset": "apos 35 incomum",
        "functional_impairment": null,
        "exclusions": [
          "Transtorno de ansiedade generalizada (preocupacoes excessivas vs. intrusoes)",
          "Transtorno dismorfico corporal (foco apenas em aparencia)",
          "Transtorno de acumulacao (dificuldade de descartar vs. acumulacao por obsessoes/compulsoes)",
          "Tricotilomania (arrancar cabelo sem obsessoes)",
          "Transtorno de escoriacao (beliscar pele sem obsessoes)",
          "Transtorno de movimento estereotipado",
          "Transtornos alimentares (rituais alimentares)",
          "Uso de substancia ou jogo",
          "Ansiedade de doença (preocupacao em ter doenca)",
          "Parafilias (impulsos sexuais prazerosos vs. intrusivos angustiantes)",
          "Transtornos disruptivos/impulsos",
          "TDM (ruminacoes de culpa vs. intrusoes)",
          "Esquizofrenia/insercao de pensamento/delirios",
          "TEA (padroes repetitivos de comportamento)"
        ],
        "specifiers": [
          "- Com insight bom ou razoavel: reconhece que as crencas obsessivas sao provavelmente/definitivamente nao verdadeiras ou podem/podem-nao ser verdadeiras",
          "Com insight pobre: acredita que as crencas sao provavelmente verdadeiras",
          "Com insight ausente/crencas delirantes: completamente convencido de que as crencas sao verdadeiras",
          "- Relacionado a tique: historia atual ou passada de transtorno de tique (ate 30% dos casos)"
        ],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [
          "Voce tem pensamentos, imagens ou impulsos que surgem repetidamente na sua cabeca e que voce sente como intrusos e indesejados?",
          "Esses pensamentos causam ansiedade ou sofrimento acentuado?",
          "Voce tenta ignora-los, suprimi-los ou fazer algo para neutraliza-los?",
          "Qual e o conteudo desses pensamentos?",
          "Voce sente compelido a fazer certos comportamentos ou atos mentais repetidamente?",
          "Voce os faz segundo regras rigidas ou em numero especifico?",
          "Eles visam evitar algo ruim ou reduzir ansiedade, mas voce reconhece que sao excessivos ou nao fazem sentido?",
          "Quanto tempo por dia voce gasta com esses pensamentos ou comportamentos? (mais de 1 hora?)",
          "Eles atrapalham seu trabalho, relacionome_completontos ou outras atividades importantes?",
          "Voce acha que seus medos/preocupacoes sao realistas ou razoaveis, ou reconhece que podem ser exagerados?",
          "Voce ja esteve completamente convencido de que seus medos sao verdadeiros?",
          "Voce tem movimentos repetitivos ou sons que faz sem querer (piscar, pigarrear, mover os ombros)?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### TRANSTORNO OBSESSIVO-COMPULSIVO / TOC",
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
    "fonte_capitulo_md": "06_transtorno_obsessivo_compulsivo_transtornos_relacionados.md",
    "fonte_inventario_md": null,
    "data_extracao": "2026-05-31",
    "modelo_agente": "antigravity-gemini",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:**",
    "notas_clinicas": "- **Notas:**"
  },
  
});
export type DisorderData = typeof data;
