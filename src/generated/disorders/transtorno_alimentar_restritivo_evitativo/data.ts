import { TranstornoAlimentarRestritivoEvitativoSchema } from "./schema";

export const data = TranstornoAlimentarRestritivoEvitativoSchema.parse({
  "$schema_version": "2.2.0",
  "meta": {
    "id": "transtorno_alimentar_restritivo_evitativo",
    "nome_completo": "Transtorno Alimentar Restritivo/Evitativo",
    "sigla": "TARE",
    "codigo": {
      "dsm5": "307.59",
      "cid10": "F50.8",
      "cid11": "6B83"
    },
    "capitulo": "Transtornos Alimentares",
    "capitulo_id": "10",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "estrutura_geral": "polythetic_com_ancora",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Perturbação Alimentar com Comprometimento Nutricional ou Psicossocial",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 1,
            "pediatria": 1
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Perda de peso ou insucesso no ganho de peso/crescimento",
                "desc": "Perda de peso significativa, insucesso em obter o ganho de peso esperado ou atraso de crescimento em crianças.",
                "pergunta": "Houve perda de peso significativa, insucesso em ganhar peso adequadamente ou atraso no crescimento?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A2",
                "rotulo": "Deficiência nutricional significativa",
                "desc": "Deficiência nutricional significativa com impacto na saúde física.",
                "pergunta": "Há deficiência nutricional significativa com consequências para a saúde física?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Hipotermia",
                    "Bradicardia",
                    "Anemia"
                ]
            },
            {
                "id": "A3",
                "rotulo": "Dependência de alimentação enteral ou suplementos orais",
                "desc": "Dependência de alimentação enteral ou de suplementos nutricionais orais.",
                "pergunta": "A pessoa depende de alimentação por sonda ou suplementos nutricionais orais para manter a nutrição adequada?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Gastrostomia",
                    "Suplementos nutricionalmente completos"
                ]
            },
            {
                "id": "A4",
                "rotulo": "Interferência marcante no funcionamento psicossocial",
                "desc": "Incapacidade de participar de atividades sociais normais envolvendo alimentação ou prejuízo em relacionamentos devido à perturbação.",
                "pergunta": "A perturbação alimentar interfere de forma marcada no funcionamento social, nas relações ou na participação em refeições com outras pessoas?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Evita jantares sociais",
                    "Conflitos familiares nas refeições"
                ]
            }
        ],
        "descricao_qualitativa": "Falta aparente de interesse na alimentação ou em alimentos; esquiva baseada nas características sensoriais do alimento; ou preocupação acerca de consequências aversivas da alimentação, manifestada por fracasso persistente em satisfazer as necessidades nutricionais e/ou energéticas apropriadas.",
        "nota": null,
        "regra_temporal": null
    }
],
  "criterios_condicionais": [
    {
        "id": "nao_cultural_nao_indisponibilidade",
        "letra": "B",
        "rotulo": "Não ocorre apenas por falta de alimento ou prática cultural",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "ClipboardCheck",
        "descricao_completa": "A perturbação não é mais bem explicada por indisponibilidade de alimento ou por uma prática culturalmente aceita (p. ex. , jejum religioso).",
        "nota": null
    },
    {
        "id": "exclusao_anorexia_bulimia",
        "letra": "C",
        "rotulo": "Não ocorre apenas durante anorexia ou bulimia nervosa",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "A perturbação alimentar não ocorre exclusivamente durante o curso de anorexia nervosa ou bulimia nervosa, e não há evidência de perturbação na maneira como o peso ou a forma corporal é vivenciada.",
        "nota": null,
        "ddx_sugeridos": [
            "anorexia_nervosa",
            "bulimia_nervosa"
        ]
    },
    {
        "id": "exclusao_medica_outro_tm",
        "letra": "D",
        "rotulo": "Excede o esperado para condição médica ou outro transtorno",
        "tipo": "condicional_comorbidade",
        "ui_widget": "toggle_condicional",
        "obrigatorio": true,
        "icone": "GitBranch",
        "descricao_completa": "Quando o transtorno alimentar ocorre no contexto de outra condição médica ou transtorno mental, sua gravidade excede a habitualmente associada à condição ou ao transtorno e justifica atenção clínica adicional.",
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
    "nota_aplicador": "O DSM-5-TR não define subtipos formais. Sensibilidade sensorial, baixo interesse e medo de consequências são vias de apresentação e podem coexistir."
},
  "especificadores": [
    {
        "id": "em_remissao",
        "nome": "Em remissão",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    }
],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6B83",
        "equivalencia": "direta",
        "regra": "Correspondência diagnóstica direta; selecionar eventual subcategoria de curso, gravidade ou remissão quando aplicável.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno alimentar restritivo/evitativo."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": null,
      },
  "dominios_impacto": [
    {
        "id": "saude_fisica",
        "label": "Estado Nutricional",
        "icone": "HeartPulse",
        "relevante_para": "transversal"
    },
    {
        "id": "social",
        "label": "Funcionamento social",
        "icone": "Users",
        "relevante_para": "transversal"
    },
    {
        "id": "desenvolvimento",
        "label": "Desenvolvimento e Crescimento",
        "icone": "Baby",
        "relevante_para": "pediatria"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "anorexia_nervosa",
        "condicao": "Anorexia nervosa",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Anorexia: medo de ganhar peso e perturbação na vivência do peso/forma corporal; Transtorno Alimentar Restritivo/Evitativo: ausência dessas características. Os dois não devem ser diagnosticados concomitantemente.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "condicoes_medicas_gi_alergias_malignidades",
        "condicao": "Condições médicas (GI, alergias, malignidades)",
        "natureza": "condicao_medica",
        "ponto_distincao": "Transtorno Alimentar Restritivo/Evitativo requer que a perturbação da ingesta esteja além daquela diretamente explicada pelos sintomas físicos de uma condição médica e persista após sua resolução.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_do_espectro_autista",
        "condicao": "Transtorno do espectro autista",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno do Espectro Autista: comportamentos alimentares rígidos e sensibilidades sensoriais, mas nem sempre com o nível de comprometimento necessário para Transtorno Alimentar Restritivo/Evitativo. Diagnosticar concomitantemente apenas se todos os critérios forem satisfeitos e a alimentação demandar tratamento específico.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "fobia_especifica_e_transtorno_de_ansiedade_social",
        "condicao": "Fobia específica e transtorno de ansiedade social",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Quando o medo de asfixia ou vômito leva a esquiva alimentar, a distinção pode ser difícil. Se o problema alimentar for o foco primário de atenção clínica, Transtorno Alimentar Restritivo/Evitativo é o diagnóstico apropriado.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtornos de ansiedade",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno obsessivo-compulsivo",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno do espectro autista",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno de déficit de atenção/hiperatividade",
      "frequencia": "moderada",
      "nota": null
    },
    {
      "condicao": "Transtorno do desenvolvimento intelectual",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "pardi",
        "nome": "Entrevista Pica, TARE e Transtorno de Ruminação",
        "sigla": "PARDI",
        "uso": "apoio_diagnostico",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "nias",
        "nome": "Escala de Alimentação Seletiva de Nove Itens",
        "sigla": "NIAS",
        "uso": "triagem",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "populacao_geral": null,
    "proporcao_sexo": "Igualmente comum em ambos os sexos na lactência e primeira infância; comórbido com TEA, é mais comum no sexo masculino.",
    "variacoes_culturais": "Não deve ser diagnosticado quando a evitação estiver relacionada unicamente a práticas religiosas ou culturais específicas.",
    "notas": "Mais comum em crianças do que em adultos; pode haver grande demora entre manifestação inicial e apresentação clínica.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Lactência ou primeira infância (evitação baseada em sensibilidade sensorial tende a surgir na primeira década).",
    "trajetoria": "A evitação/restricão baseada em aspectos sensoriais é relativamente estável e duradoura. Pode persistir na idade adulta com funcionamento relativamente normal.",
    "prognostico": "Pouca evidência associando diretamente TARE e manifestação subsequente de outro transtorno alimentar.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [
          "A. Perturbacao alimentar com fracasso nutricional (≥1 consequencia: perda de peso, deficiencia nutricional, dependencia de sonda/suplementos, interferencia psicossocial marcante)",
          "B. NAO explicada por indisponibilidade de alimento ou pratica culturalmente aceita",
          "C. NAO ocorre exclusivamente durante anorexia/bulimia; NAO ha evidencia de perturbacao na vivencia de peso/forma",
          "D. NAO atribuivel a condicao medica concomitante"
        ],
        "diagnostic_rule": "A(≥1 consequencia) AND B AND C AND D",
        "clusters": [
          "Consequencias nutricionais/funcionais"
        ],
        "duration": null,
        "age_onset": "Fase de lactente, primeira infancia ou qualquer idade",
        "functional_impairment": "Desnutricao potencialmente fatal; prejuizo psicossocial marcante",
        "exclusions": [
          "Anorexia nervosa",
          "Bulimia nervosa",
          "Indisponibilidade de alimento",
          "Pratica cultural",
          "Condicao medica explicativa"
        ],
        "specifiers": [
          "Em remissao"
        ],
        "operational_profiles": [],
        "critical_differentials": [
          "Anorexia nervosa",
          "Crianca exigente",
          "Condicao medica",
          "TEA"
        ],
        "key_questions": [
          "Tem dificuldade com alimentacao?",
          "Perdeu peso recentemente?",
          "Tem medo de ganhar peso?"
        ],
        "alerts": [
          "Desnutricao potencialmente fatal",
          "Excluir Anorexia obrigatorio"
        ],
        "source_trace": {
          "markdown_section": "4. TRANSTORNO ALIMENTAR RESTRITIVO/EVITATIVO (ARFID)",
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
    "fonte_capitulo_md": "10_transtornos_alimentares.md",
    "fonte_inventario_md": null,
    "data_extracao": "2026-05-31",
    "modelo_agente": "antigravity-gemini",
    "lacunas_globais": [
      "epidemiologia"
    ],
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
