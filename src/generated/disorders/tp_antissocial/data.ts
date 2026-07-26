import { TpAntissocialSchema } from "./schema";

export const data = TpAntissocialSchema.parse({
  "$schema_version": "1.0.0",
  "meta": {
    "id": "tp_antissocial",
    "nome_completo": "Transtorno da Personalidade Antissocial",
    "sigla": "TPA",
    "codigo": {
      "dsm5": "301.7",
      "cid10": "F60.2",
      "cid11": "6D11"
    },
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "18",
    "grupo": "Cluster B",
    "faixa_etaria_alvo": "adulto",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Psicopatia",
      "Sociopatia",
      "Transtorno da personalidade dissocial"
    ]
  },
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
      "id": "A",
      "nome": "Desconsideração e Violação dos Direitos dos Outros",
      "tipo": "polythetic_com_limiar",
      "limiar": {
        "adulto": 3,
        "pediatria": null
      },
      "ancora_obrigatoria": null,
      "sintomas": [
        {
          "id": "A1",
          "rotulo": "Fracasso em ajustar-se às normas sociais legais",
          "desc": "Fracasso em ajustar-se às normas sociais relativas a comportamentos legais, conforme indicado pela repetição de atos que constituem motivos de detenção.",
          "pergunta": "Você tem dificuldade recorrente em seguir leis e normas sociais, tendo cometido atos que poderiam levar à prisão?",
          "exemplos_clinicos": [
            "Destruição de propriedade",
            "Roubo",
            "Ocupações ilegais"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A2",
          "rotulo": "Tendência à falsidade",
          "desc": "Tendência à falsidade, conforme indicado por mentiras repetidas, uso de nomes falsos ou de trapaça para ganho ou prazer pessoal.",
          "pergunta": "Você mente repetidamente, usa nomes falsos ou trapaceia para obter ganho ou prazer pessoal?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A3",
          "rotulo": "Impulsividade ou fracasso em planejar o futuro",
          "desc": "Impulsividade ou fracasso em fazer planos para o futuro.",
          "pergunta": "Você age de forma impulsiva ou tem dificuldade em fazer planos para o futuro, tomando decisões no calor do momento?",
          "exemplos_clinicos": [
            "Mudanças repentinas de emprego",
            "Mudanças de moradia sem planejamento"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A4",
          "rotulo": "Irritabilidade e agressividade",
          "desc": "Irritabilidade e agressividade, conforme indicado por repetidas lutas corporais ou agressões físicas.",
          "pergunta": "Você é frequentemente irritável e agressivo, se envolvendo em brigas corporais ou agressões físicas repetidas?",
          "exemplos_clinicos": [
            "Espancamento de cônjuge ou filho"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A5",
          "rotulo": "Descaso pela segurança de si ou de outros",
          "desc": "Descaso pela segurança de si ou de outros.",
          "pergunta": "Você demonstra descaso recorrente pela sua própria segurança ou pela de outras pessoas?",
          "exemplos_clinicos": [
            "Velocidade excessiva recorrente",
            "Direção sob intoxicação",
            "Sexo de risco"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A6",
          "rotulo": "Irresponsabilidade reiterada",
          "desc": "Irresponsabilidade reiterada, conforme indicado por falha repetida em manter uma conduta consistente no trabalho ou honrar obrigações financeiras.",
          "pergunta": "Você tem falhas repetidas em manter empregos ou honrar obrigações financeiras e familiares?",
          "exemplos_clinicos": [
            "Inadimplência",
            "Falha em sustentar dependentes"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A7",
          "rotulo": "Ausência de remorso",
          "desc": "Ausência de remorso, conforme indicado pela indiferença ou racionalização em relação a ter ferido, maltratado ou roubado outras pessoas.",
          "pergunta": "Você sente pouco ou nenhum remorso por ter ferido, maltratado ou roubado outras pessoas, racionalizando esses atos?",
          "exemplos_clinicos": [
            "'Perdedores merecem perder'",
            "Culpar vítimas"
          ],
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
      "id": "idade_minima",
      "letra": "B",
      "rotulo": "Idade mínima de 18 anos",
      "tipo": "temporal_idade_inicio",
      "ui_widget": "campo_data",
      "obrigatorio": true,
      "icone": "Cake",
      "ddx_sugeridos": [],
      "descricao_completa": "O indivíduo tem no mínimo 18 anos de idade.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "historico_conduta",
      "letra": "C",
      "rotulo": "Evidências de transtorno da conduta antes dos 15 anos",
      "tipo": "condicao_associada_obrigatoria",
      "ui_widget": "toggle_com_justificativa_obrigatoria",
      "obrigatorio": true,
      "icone": "Baby",
      "ddx_sugeridos": [],
      "descricao_completa": "Há evidências de transtorno da conduta com surgimento anterior aos 15 anos de idade.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_psicotico",
      "letra": "D",
      "rotulo": "Não ocorre exclusivamente durante esquizofrenia ou transtorno bipolar",
      "tipo": "exclusao_diagnostica",
      "ui_widget": "toggle_simples",
      "obrigatorio": true,
      "icone": "Ban",
      "ddx_sugeridos": [
        "esquizofrenia",
        "transtorno_bipolar"
      ],
      "descricao_completa": "A ocorrência de comportamento antissocial não se dá exclusivamente durante o curso de esquizofrenia ou transtorno bipolar.",
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
  "especificadores": [],
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "modelo_categorial_sem_graduacao",
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade antissocial não recebe níveis formais de gravidade."
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
      "id": "legal",
      "label": "Situação Legal",
      "icone": "Scale",
      "relevante_para": "transversal"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno da Conduta",
      "ponto_distincao": "TDAH/conduta: <18a; antissocial: ≥18a com histórico de conduta.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno da Personalidade Narcisista",
      "ponto_distincao": "Narcisista: busca admiração, sem histórico criminoso típico.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno por Uso de Substância",
      "ponto_distincao": "Comportamento antissocial exclusivo ao contexto de uso de substância não qualifica.",
      "pertence_a_classe": false
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtornos por uso de substância",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno de sintomas somáticos",
      "frequencia": "moderada",
      "nota": null
    },
    {
      "condicao": "Transtornos de ansiedade e depressivos",
      "frequencia": "moderada",
      "nota": null
    },
    {
      "condicao": "Transtorno do jogo",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "0,2% a 3,3%",
    "proporcao_sexo": "Muito mais comum no sexo masculino",
    "variacoes_culturais": "Maior prevalência em contextos de pobreza e urbanos.",
    "notas": "Maior prevalência em ambientes forenses e de abuso de substâncias.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Infância ou início da adolescência (conduta)",
    "trajetoria": "Crônico; pode remitir após a quarta década, especialmente comportamento criminoso.",
    "prognostico": "Remissão parcial com envelhecimento; envolvimento precoce na justiça juvenil é fator de risco.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
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
  "id": "tp_antissocial",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "rendering": {
    "estrutura_diagnostica": "polythetic_monocluster",
    "criteria": [
      "A1. Fracasso em ajustar-se as normas sociais/legais",
      "A2. Tendencia a falsidade (mentiras, trapaça)",
      "A3. Impulsividade ou fracasso em fazer planos",
      "A4. Irritabilidade e agressividade",
      "A5. Descaso pela seguranca de si ou outros",
      "A6. Irresponsabilidade reiterada",
      "A7. Ausencia de remorso",
      "B. No minimo 18 anos",
      "C. Evidencias de TC com inicio anterior aos 15 anos",
      "D. Nao exclusivamente durante esquizofrenia ou bipolar"
    ],
    "diagnostic_rule": "Criterios gerais de TP (A-F) + >=3 de 7 (A) + B(>=18) + C(TC pre-15) + D(exclusao)",
    "clusters": [
      "Desconsideracao",
      "Violacao de Direitos"
    ],
    "duration": "curso cronico; tende a atenuar com envelhecimento (especialmente apos 40)",
    "age_onset": "inicio vida adulta (diagnostico); sintomas desde infancia/adolescencia (TC pre-15 obrigatorio)",
    "functional_impairment": "problemas legais, profissionais, relacionamentais graves; possivel encarceramento",
    "exclusions": [
      "esquizofrenia",
      "transtorno bipolar",
      "TC (em >=18 TPA supera TC)"
    ],
    "specifiers": [],
    "operational_profiles": [
      {
        "id": "tracos_psicopaticos",
        "description": "Com tracos psicopaticos (referencia conceitual, nao especificador formal DSM-5)"
      }
    ],
    "critical_differentials": [
      "transtorno da conduta",
      "substancia",
      "borderline",
      "histriônica",
      "comportamento criminoso sem tracos de personalidade"
    ],
    "key_questions": [
      "Antes dos 15 anos: problemas com brigas, bullying, roubo, fugas? (TC pre-15)",
      "Ja foi detido ou preso? Com que frequencia?",
      "Mentir ou usar trapaça para conseguir o que quer?",
      "Dificuldade em manter emprego ou honrar dividas?",
      "Brigas fisicas repetidas?",
      "Feriu/roubou sem sentir culpa ou remorso?"
    ],
    "alerts": [
      "Historia de TC pre-15 anos obrigatoria - sem evidencia nao e TPA",
      "Nao diagnosticar <18 anos (regra DSM-5)",
      "Comportamento antissocial deve preexistir ao uso de substancia",
      "Contexto socioeconomico: comportamentos podem ser estrategias de sobrevivencia"
    ],
    "source_trace": {
      "markdown_section": "## 4. Transtorno da Personalidade Antissocial (TPA)",
      "patches_applied": [
        "MEDIUM-BLOCKED: nota tecnica vinculacao Cap 15"
      ]
    },
    "category": "FULL",
    "ui_mode": "structured_full",
    "render_structured_interview": true
  },
  "inventario_clinico": {
    "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 301.7 / F60.2",
    "estrutura_efetiva": "- **Estrutura efetiva:** Padrao difuso de desconsideracao e violacao dos direitos dos outros desde os 15 anos. Exige 3+ de 7 criterios: (1) fracasso em ajustar-se a normas sociais legais, (2) falsidade recorrente, (3) impulsividade/fracasso em planejar, (4) irritabilidade e agressividade recorrentes, (5) descaso pela seguranca propria ou de outros, (6) irresponsabilidade reiterada, (7) ausencia de remorso. Requisitos adicionais: idade minima 18 anos; evidencia de transtorno da conduta com inicio anterior aos 15 anos; comportamento nao exclusivo durante esquizofrenia ou TB.",
    "notas_clinicas": "- **Notas:** Prevalencia 12 meses: 0,2-3,3%; ate 70% em amostras forensas graves de homens com uso de alcool. Muito mais comum em homens. Curso cronico, mas tende a remitir ou diminuir apos 4a decada. Comorbidade: TP borderline, histrionica, narcisista; transtornos por uso de substancia; transtorno de sintomas somaticos; transtorno do jogo. Fatores de risco: genetica + ambiente (estudos de adoção). Risco aumentado de morte prematura violenta (suicidio, acidentes, homicidios). Tambem chamado psicopatia, sociopatia ou TP dissocial."
  },
  "hierarquia_exclusao": {
    "exclui": [
      "conduta"
    ],
    "exclui_de": [],
    "notas_hierarquia": "É essencial histórico infantil e escolar. O próprio paciente pode mentir ou manipular."
  },
  
    "enrichment_status": {
    "has_poor": true,
    "has_master": false,
    "has_inventory": true,
    "has_hierarchy": true,
    "has_cid11": true,
        "match_notes": {
      "poor": "id",
      "master": "missing",
      "inventario": "id",
      "hierarquia": "id",
      "cid11": "id",
      "super": "id"
    }
  }
});
export type DisorderData = typeof data;
