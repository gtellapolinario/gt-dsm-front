import { TpEsquizoideSchema } from "./schema";

export const data = TpEsquizoideSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "tp_esquizoide",
    "nome_completo": "Transtorno da Personalidade Esquizoide",
    "codigo": {
        "dsm5": "",
        "cid10": "F60.1",
        "cid11": "6D10"
    },
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "transtornos_da_personalidade",
    "sigla": "TPE",
    "codificacao": {
        "cid10_cm": {
            "referencia_base": "F60.1",
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
            "id": "cluster_a",
            "label": "Cluster A",
            "natureza": "agrupamento_dsm_de_personalidade"
        }
    },
    "faixa_etaria_alvo": "adulto",
    "terminologia_relacionada": []
},
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Distanciamento Social e Afeto Restrito",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 4,
            "pediatria": 4
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Não deseja nem desfruta de relações íntimas",
                "desc": "Não deseja nem desfruta de relações íntimas, inclusive ser parte de uma família.",
                "pergunta": "A pessoa não sente desejo ou prazer em ter relações íntimas ou fazer parte de uma família?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A2",
                "rotulo": "Quase sempre opta por atividades solitárias",
                "desc": "Quase sempre opta por atividades solitárias.",
                "pergunta": "A pessoa quase sempre prefere atividades ou passatempos que pode fazer sozinho?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Jogos matemáticos",
                    "Computador"
                ]
            },
            {
                "id": "A3",
                "rotulo": "Pouco ou nenhum interesse em experiências sexuais",
                "desc": "Manifesta pouco ou nenhum interesse em ter experiências sexuais com outra pessoa.",
                "pergunta": "A pessoa tem pouco ou nenhum interesse em ter experiências sexuais com outra pessoa?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A4",
                "rotulo": "Tem prazer em poucas atividades",
                "desc": "Tem prazer em poucas atividades, por vezes em nenhuma.",
                "pergunta": "A pessoa sente prazer em pouquíssimas atividades, ou em nenhuma?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Reduzido prazer sensorial ou interpessoal"
                ]
            },
            {
                "id": "A5",
                "rotulo": "Não tem amigos próximos além de parentes de primeiro grau",
                "desc": "Não tem amigos próximos ou confidentes que não sejam os familiares de primeiro grau.",
                "pergunta": "A pessoa não tem amigos próximos ou confidentes fora um possível parente de primeiro grau?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A6",
                "rotulo": "Indiferente a elogio ou crítica",
                "desc": "Mostra-se indiferente ao elogio ou à crítica de outros.",
                "pergunta": "A pessoa se mostra indiferente ao que os outros pensam de a pessoa, seja elogio ou crítica?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A7",
                "rotulo": "Frieza emocional, distanciamento ou embotamento afetivo",
                "desc": "Demonstra frieza emocional, distanciamento ou embotamento afetivo.",
                "pergunta": "A pessoa demonstra frieza emocional, distanciamento ou pouca reatividade afetiva nas interações?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Afeto constrito",
                    "Exterior insípido"
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
        "id": "exclusao_psicotico_autista_medico",
        "letra": "B",
        "rotulo": "Não ocorre apenas em psicose, autismo ou condição médica",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Não ocorre exclusivamente durante o curso de esquizofrenia, transtorno bipolar ou depressivo com sintomas psicóticos, outro transtorno psicótico ou transtorno do espectro autista e não é atribuível aos efeitos fisiológicos de outra condição médica.",
        "nota": null,
        "ddx_sugeridos": [
            "esquizofrenia",
            "transtorno_bipolar",
            "transtorno_espectro_autista",
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
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade esquizoide não recebe níveis formais de gravidade."
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
    }
],
  "diagnostico_diferencial": [
    {
        "id": "esquizofrenia",
        "condicao": "Esquizofrenia",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Esquizofrenia: sintomas psicóticos persistentes; TPE deve ter estado presente antes.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_do_espectro_autista",
        "condicao": "Transtorno do Espectro Autista",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno do Espectro Autista: interação social mais gravemente comprometida, comportamentos estereotipados.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_da_personalidade_evitativa",
        "condicao": "Transtorno da Personalidade Evitativa",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Evitativa: deseja relacionamentos mas teme rejeição; esquizoide: falta de desejo de intimidade.",
        "pertence_a_mesma_classe_dsm": true
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno Depressivo Maior",
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
    "estimativa": "3,1% a 4,9%",
    "distribuicao_por_sexo": "Diagnosticado um pouco mais em homens",
    "variacoes_contextuais": "Imigrantes podem ser incorretamente vistos como frios ou indiferentes.",
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Traços podem ser percebidos antes, mas o padrão diagnóstico deve estar estabelecido no início da vida adulta.",
    "trajetoria": "Tende a ser persistente; grau de isolamento e prejuízo varia conforme demandas sociais e ocupacionais.",
    "prognostico": "Funcionamento pode ser preservado em ambientes com baixa demanda interpessoal; reavaliar diferenciais se surgirem psicose ou declínio.",
    "nota_aplicador": "Traços antecedentes podem aparecer antes da vida adulta; o diagnóstico requer padrão persistente, pervasivo e não explicado por desenvolvimento, cultura ou outra condição."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [
          "A1. Nao deseja nem desfruta de relacoes intimas",
          "A2. Quase sempre opta por atividades solitarias",
          "A3. Pouco ou nenhum interesse em experiencias sexuais",
          "A4. Tem prazer em poucas atividades",
          "A5. Nao tem amigos proximos (exceto familiares 1o grau)",
          "A6. Indiferente a elogio ou critica",
          "A7. Frieza emocional, distanciamento ou embotamento afetivo"
        ],
        "diagnostic_rule": "Criterios gerais de TP (A-F) + >=4 de 7 criterios + exclusao",
        "clusters": [
          "Distanciamento Social",
          "Restricao Afetiva"
        ],
        "duration": "padrao persistente e estavel",
        "age_onset": "inicio vida adulta",
        "functional_impairment": "isolamento social profundo; poucos relacionamentos intimos; funcionamento profissional pode ser preservado em trabalho isolado",
        "exclusions": [
          "esquizofrenia",
          "transtorno bipolar/depressivo com psicotico",
          "TEA",
          "condicao medica"
        ],
        "specifiers": [],
        "operational_profiles": [],
        "critical_differentials": [
          "esquizotipica",
          "paranoide",
          "evitativa",
          "TOC personalidade",
          "depressao maior"
        ],
        "key_questions": [
          "Prefere passar o tempo sozinho?",
          "Sente pouco prazer nas coisas?",
          "Pouco interesse em relacionamentos intimos ou sexuais?",
          "Criticas ou elogios nao o afetam?",
          "Se descreve como frio ou distante emocionalmente?",
          "Tem amigos proximos alem de familia?"
        ],
        "alerts": [
          "Distinguir isolamento preferido (TPEsq) de isolamento por medo (evitativa)"
        ],
        "source_trace": {
          "markdown_section": "## 2. Transtorno da Personalidade Esquizoide (TPEsq)",
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
    "estrutura_efetiva": "- **Estrutura efetiva:** Padrao difuso de distanciamento das relacoes sociais e faixa restrita de expressao emocional. Exige 4+ de 7 criterios: (1) nao deseja nem desfruta relacoes intimas, (2) opta por atividades solitarias, (3) pouco interesse em experiencias sexuais, (4) prazer em poucas/nenhuma atividades, (5) nao tem amigos proximos alem de familiares de 1o grau, (6) indiferente a elogio ou critica, (7) frieza emocional/distantamento/embotamento afetivo. Exclusao: nao ocorre exclusivamente durante esquizofrenia, TB/depressivo com psicose, outro psicotico ou TEA; nao atribuivel a condicao medica.",
    "notas_clinicas": "- **Notas:** Prevalencia: 3,1% (NESARC) a 4,9% (NCS-R). Incomum em contextos clinicos. Mais diagnosticado em homens. Pode ter episodios psicoticos breves sob estresse. Comorbidade: TP esquizotipica, paranoide, evitativa; transtorno depressivo maior. Especificador \"pre-morbido\". Diferenciar de TEA (TEA tem interacao social mais comprometida e comportamentos estereotipados)."
  },
  
});
export type DisorderData = typeof data;
