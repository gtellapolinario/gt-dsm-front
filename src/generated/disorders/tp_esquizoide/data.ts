import { TpEsquizoideSchema } from "./schema";

export const data = TpEsquizoideSchema.parse({
  "$schema_version": "2.1.0",
  "meta": {
    "id": "tp_esquizoide",
    "nome_completo": "Transtorno da Personalidade Esquizoide",
    "sigla": "TPE",
    "codigo": {
      "dsm5": "301.20",
      "cid10": "F60.1",
      "cid11": "6D10"
    },
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "18",
    "grupo": "Cluster A",
    "faixa_etaria_alvo": "adulto",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
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
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "especificadores": [],
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
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Esquizofrenia",
      "ponto_distincao": "Esquizofrenia: sintomas psicóticos persistentes; TPE deve ter estado presente antes.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno do Espectro Autista",
      "ponto_distincao": "TEA: interação social mais gravemente comprometida, comportamentos estereotipados.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno da Personalidade Evitativa",
      "ponto_distincao": "Evitativa: deseja relacionamentos mas teme rejeição; esquizoide: falta de desejo de intimidade.",
      "pertence_a_classe": true
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno Depressivo Maior",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "3,1% a 4,9%",
    "proporcao_sexo": "Diagnosticado um pouco mais em homens",
    "variacoes_culturais": "Imigrantes podem ser incorretamente vistos como frios ou indiferentes.",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Infância e adolescência (solidão, relacionamento ruim com colegas)",
    "trajetoria": "Crônico; pode preceder esquizofrenia.",
    "prognostico": "Funcionamento profissional pode ser adequado em isolamento social.",
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
