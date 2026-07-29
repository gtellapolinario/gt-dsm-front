import { TpAntissocialSchema } from "./schema";

export const data = TpAntissocialSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "tp_antissocial",
    "nome_completo": "Transtorno da Personalidade Antissocial",
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "transtornos_da_personalidade",
    "sigla": "TPA",
    "codificacao": {
        "dsm5_tr": {
            "codigo": "301.7",
            "sistema_origem": "ICD-9-CM",
            "uso": "referencia_editorial_legacy"
        },
        "cid10_cm": {
            "referencia_base": "F60.2",
            "equivalencia": "direta",
            "regra": "Correspondência diagnóstica direta no nível informado; confirmar especificadores e requisitos da versão CID-10-CM adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6D10",
            "equivalencia": "sem_correspondencia_categorial_direta",
            "regra": "A CID-11 não conserva os tipos categóricos do DSM-5-TR. Codificar a gravidade em 6D10.0–6D10.2 ou 6D10.Z e acrescentar qualificadores de traço quando sustentados.",
            "versao": "CID-11 MMS 2026-01"
        }
    },
    "agrupamento": {
        "capitulo": {
            "id": "transtornos_da_personalidade",
            "label": "Transtornos da Personalidade"
        },
        "subgrupo": {
            "id": "cluster_b",
            "label": "Cluster B",
            "natureza": "agrupamento_dsm_de_personalidade"
        }
    },
    "faixa_etaria_alvo": "adulto",
    "terminologia_relacionada": [
        {
            "termo": "Psicopatia",
            "status": "termo_relacionado",
            "equivalencia": "nao_equivalente",
            "nota": "Construto sobreposto, mas não sinônimo diagnóstico."
        },
        {
            "termo": "Sociopatia",
            "status": "historico",
            "equivalencia": "nao_equivalente",
            "nota": "Uso variável e não operacionalizado como sinônimo no DSM-5-TR."
        },
        {
            "termo": "Transtorno da personalidade dissocial",
            "status": "sistema_classificatorio_distinto",
            "equivalencia": "aproximada",
            "nota": "Denominação da CID-10; não há equivalência categorial direta na CID-11."
        }
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
            "pediatria": 3
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Fracasso em ajustar-se às normas sociais legais",
                "desc": "Fracasso em ajustar-se às normas sociais relativas a comportamentos legais, conforme indicado pela repetição de atos que constituem motivos de detenção.",
                "pergunta": "A pessoa tem dificuldade recorrente em seguir leis e normas sociais, tendo cometido atos que poderiam levar à prisão?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Destruição de propriedade",
                    "Roubo",
                    "Ocupações ilegais"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Tendência à falsidade",
                "desc": "Tendência à falsidade, conforme indicado por mentiras repetidas, uso de nomes falsos ou de trapaça para ganho ou prazer pessoal.",
                "pergunta": "A pessoa mente repetidamente, usa nomes falsos ou trapaceia para obter ganho ou prazer pessoal?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A3",
                "rotulo": "Impulsividade ou fracasso em planejar o futuro",
                "desc": "Impulsividade ou fracasso em fazer planos para o futuro.",
                "pergunta": "A pessoa age de forma impulsiva ou tem dificuldade em fazer planos para o futuro, tomando decisões no calor do momento?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Mudanças repentinas de emprego",
                    "Mudanças de moradia sem planejamento"
                ]
            },
            {
                "id": "A4",
                "rotulo": "Irritabilidade e agressividade",
                "desc": "Irritabilidade e agressividade, conforme indicado por repetidas lutas corporais ou agressões físicas.",
                "pergunta": "A pessoa é frequentemente irritável e agressivo, se envolvendo em brigas corporais ou agressões físicas repetidas?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Espancamento de cônjuge ou filho"
                ]
            },
            {
                "id": "A5",
                "rotulo": "Descaso pela segurança de si ou de outros",
                "desc": "Descaso pela segurança de si ou de outros.",
                "pergunta": "A pessoa demonstra descaso recorrente pela sua própria segurança ou pela de outras pessoas?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Velocidade excessiva recorrente",
                    "Direção sob intoxicação",
                    "Sexo de risco"
                ]
            },
            {
                "id": "A6",
                "rotulo": "Irresponsabilidade reiterada",
                "desc": "Irresponsabilidade reiterada, conforme indicado por falha repetida em manter uma conduta consistente no trabalho ou honrar obrigações financeiras.",
                "pergunta": "A pessoa tem falhas repetidas em manter empregos ou honrar obrigações financeiras e familiares?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Inadimplência",
                    "Falha em sustentar dependentes"
                ]
            },
            {
                "id": "A7",
                "rotulo": "Ausência de remorso",
                "desc": "Ausência de remorso, conforme indicado pela indiferença ou racionalização em relação a ter ferido, maltratado ou roubado outras pessoas.",
                "pergunta": "A pessoa sente pouco ou nenhum remorso por ter ferido, maltratado ou roubado outras pessoas, racionalizando esses atos?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "'Perdedores merecem perder'",
                    "Culpar vítimas"
                ]
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    }
],
  "criterios_condicionais": [
    {
        "id": "idade_minima",
        "letra": "B",
        "rotulo": "Idade mínima de 18 anos",
        "tipo": "condicional_etario",
        "ui_widget": "campo_idade",
        "obrigatorio": true,
        "icone": "Cake",
        "descricao_completa": "O indivíduo tem no mínimo 18 anos de idade.",
        "nota": null
    },
    {
        "id": "historico_conduta",
        "letra": "C",
        "rotulo": "Evidências de transtorno da conduta antes dos 15 anos",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Baby",
        "descricao_completa": "Há evidências de transtorno da conduta com surgimento anterior aos 15 anos de idade.",
        "nota": null
    },
    {
        "id": "exclusao_psicotico",
        "letra": "D",
        "rotulo": "Não ocorre exclusivamente durante esquizofrenia ou transtorno bipolar",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "A ocorrência de comportamento antissocial não se dá exclusivamente durante o curso de esquizofrenia ou transtorno bipolar.",
        "nota": null,
        "ddx_sugeridos": [
            "esquizofrenia",
            "transtorno_bipolar",
            "transtorno_bipolar_tipo_i"
        ]
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
        "codigo_base": "6D10",
        "equivalencia": "sem_correspondencia_categorial_direta",
        "regra": "A CID-11 não conserva os tipos categóricos do DSM-5-TR. Codificar a gravidade em 6D10.0–6D10.2 ou 6D10.Z e acrescentar qualificadores de traço quando sustentados.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "modelo_categorial_sem_graduacao",
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade antissocial não recebe níveis formais de gravidade."
},
  "hierarquia": {
    "presente": true,
    "exclui_se_diagnosticado": ["conduta"],
    "exclui_diagnostico_de": [],
    "notas": "É essencial histórico infantil e escolar. O próprio paciente pode mentir ou manipular.",
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
        "id": "seguranca_legal",
        "label": "Segurança e repercussões legais",
        "icone": "Scale",
        "relevante_para": "transversal"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "transtorno_da_conduta",
        "condicao": "Transtorno da Conduta",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno de Déficit de Atenção/Hiperatividade/conduta: <18a; antissocial: ≥18a com histórico de conduta.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_da_personalidade_narcisista",
        "condicao": "Transtorno da Personalidade Narcisista",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Narcisista: busca admiração, sem histórico criminoso típico.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_por_uso_de_substancia",
        "condicao": "Transtorno por Uso de Substância",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Comportamento antissocial exclusivo ao contexto de uso de substância não qualifica.",
        "pertence_a_mesma_classe_dsm": false
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
    "tipo_estimativa": "prevalencia_pontual",
    "estimativa": "0,2% a 3,3%",
    "distribuicao_por_sexo": "Muito mais comum no sexo masculino",
    "variacoes_contextuais": "Pobreza, violência, encarceramento e viés de aferição podem alterar as taxas observadas; não converter contexto social em traço de personalidade.",
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "O diagnóstico exige idade mínima de 18 anos e evidência de transtorno da conduta antes dos 15 anos.",
    "trajetoria": "O padrão pode persistir na vida adulta; comportamentos impulsivos e criminosos podem diminuir com a idade, sem implicar remissão global.",
    "prognostico": "Início precoce, violência, uso de substâncias, encarceramento e baixa estabilidade social associam-se a maior prejuízo.",
    "nota_aplicador": "Traços antecedentes podem aparecer antes da vida adulta; o diagnóstico requer padrão persistente, pervasivo e não explicado por desenvolvimento, cultura ou outra condição."
},
  
  "_pipeline": {
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
    "estrutura_efetiva": "- **Estrutura efetiva:** Padrao difuso de desconsideracao e violacao dos direitos dos outros desde os 15 anos. Exige 3+ de 7 criterios: (1) fracasso em ajustar-se a normas sociais legais, (2) falsidade recorrente, (3) impulsividade/fracasso em planejar, (4) irritabilidade e agressividade recorrentes, (5) descaso pela seguranca propria ou de outros, (6) irresponsabilidade reiterada, (7) ausencia de remorso. Requisitos adicionais: idade minima 18 anos; evidencia de transtorno da conduta com inicio anterior aos 15 anos; comportamento nao exclusivo durante esquizofrenia ou TB.",
    "notas_clinicas": "- **Notas:** Prevalencia 12 meses: 0,2-3,3%; ate 70% em amostras forensas graves de homens com uso de alcool. Muito mais comum em homens. Curso cronico, mas tende a remitir ou diminuir apos 4a decada. Comorbidade: TP borderline, histrionica, narcisista; transtornos por uso de substancia; transtorno de sintomas somaticos; transtorno do jogo. Fatores de risco: genetica + ambiente (estudos de adoção). Risco aumentado de morte prematura violenta (suicidio, acidentes, homicidios). Tambem chamado psicopatia, sociopatia ou TP dissocial."
  },
  
});
export type DisorderData = typeof data;
