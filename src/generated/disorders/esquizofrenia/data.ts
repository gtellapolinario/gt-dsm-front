import { EsquizofreniaSchema } from "./schema";

export const data = EsquizofreniaSchema.parse({
  "$schema_version": "2.1.0",
  "meta": {
    "id": "esquizofrenia",
    "nome_completo": "Esquizofrenia",
    "sigla": null,
    "codigo": {
      "dsm5": "295.90",
      "cid10": "F20.9",
      "cid11": "6A20"
    },
    "capitulo": "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
    "capitulo_id": "02",
    "grupo": null,
    "faixa_etaria_alvo": "transversal",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Dementia praecox"
    ]
  },
  "estrutura_geral": "polythetic_com_ancora",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Sintomas da Fase Ativa",
        "tipo": "polythetic_com_ancora",
        "limiar": {
            "adulto": 2,
            "pediatria": 2
        },
        "ancora_obrigatoria": {
            "descricao": "Pelo menos um dos sintomas no cluster deve ser Delírios (A1), Alucinações (A2) ou Discurso Desorganizado (A3).",
            "ids_obrigatorios": [
                "A1",
                "A2",
                "A3"
            ],
            "n_minimo": 1
        },
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Delírios",
                "desc": "Crenças fixas não abaláveis por evidências contrárias abundantes.",
                "pergunta": "A pessoa tem tido ideias persistentes que as outras pessoas dizem não ser reais ou não fazer sentido?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Crenças de controle externo, paranoia severa, telepatia ou transmissão de pensamento"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Alucinações",
                "desc": "Percepções que ocorrem na ausência de estímulo correspondente, sendo vívidas e claras.",
                "pergunta": "A pessoa tem percebido sons, vozes ou visões que outras pessoas dizem não existir?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Vozes que conversam entre si ou que comentam de forma depreciativa as ações do indivíduo"
                ]
            },
            {
                "id": "A3",
                "rotulo": "Discurso desorganizado",
                "desc": "Pensamento desorganizado manifesto na fala por descarrilamento constante ou incoerência.",
                "pergunta": "Tem sido difícil para a pessoa estruturar as frases ou acompanhar uma conversa de forma lógica?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Respostas tangenciais frequentes, salada de palavras ou afasia pragmática"
                ]
            },
            {
                "id": "A4",
                "rotulo": "Comportamento grosseiramente desorganizado ou catatônico",
                "desc": "Comportamento psicomotor alterado, variando de agitação inadequada à rigidez, estupor e flexibilidade cérea.",
                "pergunta": "A pessoa percebeu uma agitação desmedida ou uma rigidez que o impeça de mover o corpo?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Agitação tola e sem propósito, desleixo extremo com higiene, posturas bizarras repetitivas"
                ]
            },
            {
                "id": "A5",
                "rotulo": "Sintomas negativos",
                "desc": "Diminuição expressiva da expressão emocional, do afeto ou avolia e anedonia acentuadas.",
                "pergunta": "A pessoa sente que perdeu a iniciativa para interagir, trabalhar ou que suas emoções estão enfraquecidas?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Alogia (pobreza de discurso), avolia (falta de iniciativa), afeto embotado e achatamento facial"
                ]
            }
        ],
        "descricao_qualitativa": "Presença de pelo menos dois sintomas por parte significativa de tempo em 1 mês, com um deles sendo obrigatoriamente A1, A2 ou A3.",
        "nota": null,
        "regra_temporal": null
    }
],
  "criterios_condicionais": [
    {
        "id": "declinio_funcional",
        "letra": "B",
        "rotulo": "Déficit ou declínio funcional marcante",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "TrendingDown",
        "descricao_completa": "Por parte significativa do tempo desde o início da perturbação, o nível de funcionamento em uma ou mais áreas principais (trabalho, relações interpessoais ou autocuidado) está acentuadamente abaixo do nível alcançado antes do início.",
        "nota": null
    },
    {
        "id": "duracao_continua",
        "letra": "C",
        "rotulo": "Duração contínua de pelo menos 6 meses",
        "tipo": "temporal_duracao_minima",
        "ui_widget": "campo_duracao_meses",
        "obrigatorio": true,
        "icone": "Hourglass",
        "descricao_completa": "Sinais contínuos da perturbação persistem por pelo menos seis meses. Esse período deve incluir pelo menos um mês de sintomas da fase ativa e pode incluir períodos prodrômicos ou residuais.",
        "nota": null
    },
    {
        "id": "exclusao_esquizoafetivo_humor_esquizofrenia",
        "letra": "D",
        "rotulo": "Exclusão de esquizoafetivo e humor com psicose",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Transtorno esquizoafetivo e transtorno depressivo ou bipolar com características psicóticas foram descartados porque não ocorreram episódios de humor concomitantemente com os sintomas ativos, ou sua duração foi breve.",
        "nota": null,
        "ddx_sugeridos": [
            "transtorno_esquizoafetivo",
            "transtorno_depressivo_maior_com_psicose",
            "transtorno_bipolar_com_psicose"
        ]
    },
    {
        "id": "exclusao_substancia_esquizofrenia",
        "letra": "E",
        "rotulo": "Não atribuível a substância ou condição médica",
        "tipo": "exclusao_substancia_medica",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Pill",
        "descricao_completa": "A perturbação não é atribuível aos efeitos fisiológicos de uma substância ou a outra condição médica.",
        "nota": null
    },
    {
        "id": "relacao_autismo_comunicacao",
        "letra": "F",
        "rotulo": "Relação com autismo ou transtorno da comunicação",
        "tipo": "condicional_comorbidade",
        "ui_widget": "toggle_condicional",
        "obrigatorio": true,
        "icone": "GitBranch",
        "descricao_completa": "Se houver história de transtorno do espectro autista ou de transtorno da comunicação social de início na infância, o diagnóstico adicional de esquizofrenia só é feito se delírios ou alucinações proeminentes estiverem presentes por pelo menos 1 mês.",
        "nota": null
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
        "id": "curso_apos_um_ano",
        "nome": "Especificador de Curso (após 1 ano de duração)",
        "tipo": "enum",
        "ortogonal": true,
        "regra_criterial": null,
        "opcoes": [
            "Primeiro episódio, atualmente em episódio agudo",
            "Primeiro episódio, atualmente em remissão parcial",
            "Primeiro episódio, atualmente em remissão completa",
            "Episódios múltiplos, atualmente em episódio agudo",
            "Episódios múltiplos, atualmente em remissão parcial",
            "Episódios múltiplos, atualmente em remissão completa",
            "Contínuo",
            "Não especificado"
        ]
    },
    {
        "id": "com_catatonia",
        "nome": "Com catatonia",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": "Exige o uso do código adicional 293.89 (F06.1)."
    }
],
  "gravidade": {
    "classificacao_dsm": "formal_dimensional",
    "escopo": "gravidade_atual_por_dominio",
    "tipo": "dimensoes_primarias_da_psicose",
    "uso": "opcional",
    "janela_avaliacao": "ultimos_7_dias",
    "lembrete_aplicador": "Avalie cada domínio separadamente de 0 a 4, considerando os últimos 7 dias.",
    "dominios": [
        {
            "id": "delirios",
            "label": "Delírios"
        },
        {
            "id": "alucinacoes",
            "label": "Alucinações"
        },
        {
            "id": "discurso_desorganizado",
            "label": "Discurso desorganizado"
        },
        {
            "id": "comportamento_psicomotor_anormal",
            "label": "Comportamento psicomotor anormal"
        },
        {
            "id": "sintomas_negativos",
            "label": "Sintomas negativos"
        }
    ],
    "escala": {
        "min": 0,
        "max": 4,
        "niveis": [
            {
                "valor": 0,
                "label": "Ausente"
            },
            {
                "valor": 1,
                "label": "Equívoco"
            },
            {
                "valor": 2,
                "label": "Leve"
            },
            {
                "valor": 3,
                "label": "Moderado"
            },
            {
                "valor": 4,
                "label": "Grave"
            }
        ]
    },
    "observacao": "O diagnóstico pode ser estabelecido sem o uso deste especificador."
},
  "hierarquia": {
    "presente": true,
    "exclui_se_diagnosticado": ["transtorno_esquizoafetivo", "transtorno_esquizofreniforme", "transtorno_psicotico_breve", "transtorno_delirante"],
    "exclui_diagnostico_de": ["transtorno_esquizofreniforme", "transtorno_psicotico_breve", "transtorno_delirante"],
    "notas": "O transtorno esquizoafetivo tem precedência diagnóstica caso atenda todos os critérios; a esquizofrenia tem precedência sobre o esquizofreniforme, delirante e psicótico breve.",
      },
  "dominios_impacto": [
    {
      "id": "trabalho",
      "label": "Funcionamento Ocupacional",
      "icone": "Briefcase",
      "relevante_para": "transversal"
    },
    {
      "id": "social",
      "label": "Relações Interpessoais e Sociais",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "autocuidado",
      "label": "Autocuidado e Vida Independente",
      "icone": "House",
      "relevante_para": "transversal"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno Esquizoafetivo",
      "ponto_distincao": "Exige que um episódio de humor maior ocorra simultaneamente com sintomas da fase ativa e que os sintomas de humor estejam presentes na maior parte da duração total das fases ativa e residual.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno Delirante",
      "ponto_distincao": "Diferencia-se pela ausência de outros sintomas da esquizofrenia (alucinações severas, discurso desorganizado, sintomas negativos marcantes).",
      "pertence_a_classe": true
    },
    {
      "condicao": "TEA ou Transtornos da Comunicação",
      "ponto_distincao": "Apenas se diagnostica esquizofrenia comorbida se delírios ou alucinações proeminentes durarem pelo menos um mês.",
      "pertence_a_classe": false
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtornos por uso de substâncias",
      "frequencia": "alta",
      "nota": "A comorbidade com o transtorno por uso de tabaco e outras drogas é marcadamente elevada."
    },
    {
      "condicao": "Transtornos de ansiedade",
      "frequencia": "alta",
      "nota": "Coocorrência frequente de pânico e transtorno obsessivo-compulsivo."
    }
  ],
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "Entre 0,3% e 0,7% ao longo da vida.",
    "proporcao_sexo": "Similar entre os sexos, embora com início ligeiramente mais precoce e prognóstico mais grave no sexo masculino.",
    "variacoes_culturais": "Ideias delirantes que parecem bizarras em uma cultura (ex: feitiçaria) podem ser comumente aceitas em outra, necessitando avaliação atenta.",
    "notas": "O risco de suicídio é elevado, com 5% a 6% dos indivíduos morrendo por autoextermínio e cerca de 20% realizando tentativas.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Início/meados dos 20 anos (homens); fim dos 20 anos (mulheres)",
    "trajetoria": "O início pode ser abrupto ou gradual, mas a maioria exibe curso flutuante ou crônico com exacerbações agudas e declínio progressivo da funcionalidade social e cognitiva.",
    "prognostico": "Geralmente crônico e com prejuízos funcionais residuais em grande parte dos indivíduos, necessitando de suporte medicamentoso e psicossocial contínuo.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_clusters_assimetricos",
        "criteria": [],
        "diagnostic_rule": "- Critério A (2+ sintomas, 1 sendo delírios/alucinações/discurso) **E**\n- Critério B (prejuízo funcional) **E**\n- Critério C (6 meses totais, incluindo 1 mês ativo) **E**\n- Critério D (excluir esquizoafetivo e humor psicótico) **E**\n- Critério E (excluir substância/condição médica) **E**\n- Critério F (regra para comorbidade com TEA)",
        "clusters": [
          "Psicóticos positivos",
          "Desorganização",
          "Sintomas negativos",
          "**Total**"
        ],
        "duration": null,
        "age_onset": null,
        "functional_impairment": null,
        "exclusions": [],
        "specifiers": [],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [
          "Você já teve a experiência de acreditar em coisas que outras pessoas consideravam estranhas ou impossíveis?",
          "Você já ouviu vozes ou sons que outras pessoas não conseguiam ouvir?",
          "Você já sentiu que seus pensamentos estavam confusos ou que as palavras não saíam como deveriam?",
          "Você já agiu de maneira que outras pessoas consideraram muito estranha ou incompreensível?",
          "Você sente que expressa menos emoções do que antes?",
          "Você perdeu o interesse ou a vontade de fazer coisas?",
          "Como está seu funcionome_completonto em comparação com antes do início desses sintomas?",
          "Esses sintomas começaram há quanto tempo?",
          "Houve períodos em que você teve humor anormalmente elevado ou deprimido que durou semanas?",
          "Usa alguma substância ou faz algum tratamento médico que possa estar relacionado?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### ESQUIZOFRENIA",
          "patches_applied": [
            "gravidade.tem_gravidade_formal: Sim + tipo=ordinal_por_dominio + escala 0-4 (opcional) -> Sim (especificador dimensional OPCIONAL) + tipo=ordinal_por_dominio + escala 0-4 + USO_OPCIONAL=True"
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
        "has_hierarchy": true,
        "has_cid11": true,
            "match_notes": {
          "poor": "id",
          "master": "id",
          "inventario": "id",
          "hierarquia": "id",
          "cid11": "id",
          "super": "id"
        }
      }
  },
  "metadados_globais": {
    "fonte_capitulo_md": "02_espectro_esquizofrenia_outros_transtornos_psicoticos.md",
    "fonte_inventario_md": "inventario/02_inventario.md",
    "data_extracao": "2026-05-21",
    "modelo_agente": "antigravity-ide",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:** Sintomas característicos do espectro causando sofrimento/prejuízo significativo, não satisfazendo critérios para transtorno específico, sem especificação da razão. Inclui apresentações com informação insuficiente.",
    "notas_clinicas": "- **Notas:**"
  },
  
});
export type DisorderData = typeof data;
