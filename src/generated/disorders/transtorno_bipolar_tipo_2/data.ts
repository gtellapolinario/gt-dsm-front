import { TranstornoBipolarTipo2Schema } from "./schema";

export const data = TranstornoBipolarTipo2Schema.parse({
  "$schema_version": "2.1.0",
  "meta": {
    "id": "transtorno_bipolar_tipo_2",
    "nome_completo": "Transtorno Bipolar Tipo II",
    "sigla": "TB2",
    "codigo": {
      "dsm5": "296.89",
      "cid10": "F31.81",
      "cid11": "6A61"
    },
    "capitulo": "Transtorno Bipolar e Transtornos Relacionados",
    "capitulo_id": "03",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "estrutura_geral": "polythetic_clusters_simetricos",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Episódios hipomaníaco e depressivo maior",
        "tipo": "monothetic_conjuntivo",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Pelo menos um episódio hipomaníaco",
                "desc": "Foram satisfeitos os critérios para pelo menos um episódio hipomaníaco.",
                "pergunta": "A pessoa satisfez os critérios para pelo menos um episódio hipomaníaco?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A2",
                "rotulo": "Pelo menos um episódio depressivo maior",
                "desc": "Foram satisfeitos os critérios para pelo menos um episódio depressivo maior.",
                "pergunta": "A pessoa satisfez os critérios para pelo menos um episódio depressivo maior?",
                "faixa_aplicavel": null,
                "nota": null
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    }
],
  "criterios_condicionais": [
    {
        "id": "jamais_episodio_maniaco",
        "letra": "B",
        "rotulo": "Jamais houve episódio maníaco",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "ClipboardCheck",
        "descricao_completa": "Jamais houve um episódio maníaco.",
        "nota": null
    },
    {
        "id": "nao_melhor_explicado_psicose",
        "letra": "C",
        "rotulo": "Não explicado por psicose",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Shield",
        "descricao_completa": "Os episódios de alteração de humor não são explicados de forma mais adequada por esquizofrenia, esquizoafetivo ou outro transtorno psicótico.",
        "nota": null,
        "ddx_sugeridos": [
            "transtorno_esquizoafetivo",
            "esquizofrenia",
            "transtorno_delirante"
        ]
    },
    {
        "id": "sofrimento_prejuizo_clinico",
        "letra": "D",
        "rotulo": "Sofrimento ou prejuízo clínico",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Frown",
        "descricao_completa": "Os sintomas de depressão ou a imprevisibilidade causada por alternância frequente entre períodos de depressão e hipomania causam sofrimento clinicamente significativo ou prejuízo no funcionamento social, profissional ou em outra área importante.",
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
        "id": "com_sintomas_ansiosos",
        "nome": "Com sintomas ansiosos",
        "tipo": "escala_ordinal",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "com_caracteristicas_mistas",
        "nome": "Com características mistas",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "com_ciclagem_rapida",
        "nome": "Com ciclagem rápida",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "com_caracteristicas_psicoticas",
        "nome": "Com características psicóticas",
        "tipo": "enum",
        "ortogonal": true,
        "regra_criterial": null,
        "opcoes": [
            "Com características psicóticas congruentes com o humor",
            "Com características psicóticas incongruentes com o humor"
        ]
    },
    {
        "id": "com_catatonia",
        "nome": "Com catatonia",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "com_inicio_periparto",
        "nome": "Com início no periparto",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "com_padrao_sazonal",
        "nome": "Com padrão sazonal",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": "Aplica-se apenas ao padrão de episódios depressivos maiores."
    }
],
  "gravidade": {
    "classificacao_dsm": "formal_contextual",
    "escopo": "episodio_depressivo_maior_atual",
    "tipo": "gravidade_do_episodio_depressivo",
    "condicao_aplicabilidade": "Aplicar quando os critérios completos de episódio depressivo maior estiverem atualmente presentes.",
    "lembrete_aplicador": "No bipolar II, aplique leve, moderada ou grave ao episódio depressivo maior atual; não gradue o episódio hipomaníaco.",
    "niveis": [
        {
            "id": "leve",
            "label": "Leve",
            "descritor": "Poucos sintomas além do mínimo; sofrimento manejável e pequeno prejuízo funcional."
        },
        {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "Número, intensidade dos sintomas ou prejuízo entre leve e grave."
        },
        {
            "id": "grave",
            "label": "Grave",
            "descritor": "Sintomas substancialmente excedentes, sofrimento não manejável ou prejuízo funcional acentuado."
        }
    ],
    "observacao": "A gravidade descreve o episódio aplicável, não o transtorno bipolar II globalmente."
},
  "hierarquia": {
    "presente": true,
    "exclui_se_diagnosticado": ["transtorno_bipolar_tipo_1", "transtorno_depressivo_maior", "transtorno_depressivo_persistente", "transtorno_disruptivo_desregulacao_humor", "transtorno_ciclotimico"],
    "exclui_diagnostico_de": ["transtorno_ciclotimico"],
    "notas": "A ocorrência de um episódio de mania altera permanentemente o diagnóstico para Bipolar Tipo I. A presença de episódios de humor completos exclui Ciclotimia.",
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
      "label": "Funcionamento Social e Familiar",
      "icone": "Users",
      "relevante_para": "transversal"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno Depressivo Maior",
      "ponto_distincao": "Indivíduos com Bipolar II vivenciam episódios hipomaníacos explícitos adicionais na história, necessitando de atenta investigação retrospectiva.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno Ciclotímico",
      "ponto_distincao": "Ciclotimia apresenta apenas períodos com sintomas sublimiares de depressão e hipomania, sem atingir a totalidade de critérios completos.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno Bipolar Tipo I",
      "ponto_distincao": "Bipolar I requer pelo menos um episódio maníaco na vida; se houver histórico de mania, o diagnóstico é Bipolar I.",
      "pertence_a_classe": true
    },
    {
      "condicao": "TDAH",
      "ponto_distincao": "TDAH compartilha sintomas de impulsividade e distratibilidade, mas seu curso é contínuo e não fásico/episódico como na hipomania.",
      "pertence_a_classe": false
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtornos de ansiedade",
      "frequencia": "alta",
      "nota": "Apresenta alta coocorrência em cerca de 60% dos pacientes."
    },
    {
      "condicao": "Transtornos alimentares",
      "frequencia": "moderada",
      "nota": "Particularmente comum em mulheres com Bipolar II."
    },
    {
      "condicao": "Transtornos por uso de substâncias",
      "frequencia": "alta",
      "nota": "Associação muito frequente, elevando o risco de suicídio consideravelmente."
    }
  ],
  "instrumentos_complementares": [
    {
      "nome": "Questionário de Transtornos do Humor",
      "sigla": "MDQ",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ],
  "prevalencia": {
    "populacao_geral": "0,3% internacionalmente; 0,8% nas estimativas do DSM-5 nos EUA.",
    "proporcao_sexo": "Tendência de maior prevalência de estados depressivos e ciclagens rápidas em mulheres.",
    "variacoes_culturais": "Não há informações robustas de variação cultural bem definida na literatura.",
    "notas": "A prevalência acumulada do transtorno bipolar II ao longo do tempo demonstra grande morbidade.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Cerca de 25 anos",
    "trajetoria": "Geralmente se inicia com um episódio depressivo. 5-15% dos casos evoluem para Transtorno Bipolar Tipo I ao longo da vida com a manifestação de um episódio de mania.",
    "prognostico": "Não deve ser considerado mais leve que o Bipolar I. Pacientes passam longos períodos incapacitados pela cronicidade e depressão recorrente.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "episodico_com_sintomas",
        "criteria": [],
        "diagnostic_rule": "**AND logico:** EpisodioHipomaniaCompleto(A,B,C,D,E,F) AND EpisodioDepressivoMaior AND NUNCA_Mania(B) AND ExclusaoPsicotico(C) AND PrejuizoFuncional(D)",
        "clusters": [
          "Humor alterado (hipomania)",
          "Energia/Atividade (hipomania)",
          "Sintomas hipomaniacos B",
          "Mudanca funcional",
          "Sem gravidade maniaca",
          "Episodio depressivo maior"
        ],
        "duration": null,
        "age_onset": "tipica:** Media ~25 anos (mais tardio que TB I)",
        "functional_impairment": null,
        "exclusions": [
          "**EPISODIO MANIACO na historia exclui TB II** (muda para TB I)",
          "Efeitos fisiologicos de substancia/medicamento",
          "Transtornos do espectro da esquizofrenia",
          "TDAH (sintomas persistentes vs. episodio distinto)",
          "TP Borderline"
        ],
        "specifiers": [
          "Episodio atual/mais recente: hipomaniaco ou depressivo",
          "Com sintomas ansiosos",
          "Com caracteristicas mistas",
          "Com ciclagem rapida (4+ episodios em 12 meses)",
          "Com caracteristicas psicoticas (somente em EDM)",
          "Com catatonia",
          "Com inicio no periparto",
          "Com padrao sazonal (aplica-se ao padrao de EDM)",
          "Remissao parcial/completa",
          "Gravidade: leve/moderada/grave (para episodio atual)",
          "**NAO ha codigos separados para gravidade/psicose no TB II (diferente do TB I)**"
        ],
        "operational_profiles": [],
        "critical_differentials": [
          "----------",
          "TB Tipo I",
          "Transtorno Depressivo Maior",
          "Transtorno Ciclotimico",
          "TDAH"
        ],
        "key_questions": [
          "Alem dos periodos depressivos, voce ja teve periodos de pelo menos 4 dias em que se sentiu com muito mais energia, mais sociavel, ou mais produtivo que o normal, e outras pessoas notaram essa mudanca?",
          "Nesses periodos, voce fazia mais coisas, falava mais, ou tinha ideias mais rapidas, sem que isso causasse problemas graves?",
          "Voce ja teve que ser hospitalizado ou teve consequencias muito serias durante esses periodos de energia alta?",
          "Na sua vida inteira, voce ja teve um periodo em que se sentiu tao cheio de energia que precisou de hospitalizacao, ou teve crencas exageradas sobre suas capacidades, ou fez coisas arriscadas que lhe causaram prejuizos graves?",
          "Voce ja teve periodos de pelo menos 2 semanas se sentindo deprimido, sem vontade de fazer as coisas, com mudancas de sono, apetite ou energia?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### TRANSTORNO BIPOLAR TIPO II",
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
    "fonte_capitulo_md": "03_transtorno_bipolar_transtornos_relacionados.md",
    "fonte_inventario_md": "inventario/03_inventario.md",
    "data_extracao": "2026-05-21",
    "modelo_agente": "antigravity-agent",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:** A (ao menos 1 episodio hipomaníaco: humor elevado/expansivo/irritavel + energia/atividade, >=4 dias consecutivos, 3/7 sintomas ou 4/7 se humor apenas irritavel, mudanca clara no funcionamento, observavel por outros, sem prejuizo acentuado/sem hospitalizacao/sem psicose, nao atribuivel a substancia) + B (jamais houve episodio maniaco) + C (nao melhor explicado por transtorno esquizoafetivo, esquizofrenia, etc.) + D (sofrimento ou prejuizo clinicamente significativo). Requer tambem ao menos 1 episodio depressivo maior na vida (5/9 sintomas em 2 semanas, com ancora em humor deprimido ou perda de interesse/prazer).",
    "notas_clinicas": "- **Notas:**"
  },
  
});
export type DisorderData = typeof data;
