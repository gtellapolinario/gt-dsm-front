import { TncVascularSchema } from "./schema";

export const data = TncVascularSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "tnc_vascular",
    "nome_completo": "Transtorno Neurocognitivo Vascular Maior ou Leve",
    "capitulo": "Transtornos Neurocognitivos",
    "capitulo_id": "transtornos_neurocognitivos",
    "sigla": null,
    "codificacao": {
        "dsm5_tr": {
            "codigo": "290.40",
            "sistema_origem": "ICD-9-CM",
            "uso": "referencia_editorial_legacy"
        },
        "cid10_cm": {
            "referencia_base": "F01",
            "equivalencia": "contextual",
            "regra": "Referência de família ou conjunto de códigos; selecionar o código CID-10-CM específico conforme apresentação, curso, gravidade e regras da versão adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": [
                "6D81",
                "6D71"
            ],
            "equivalencia": "contextual",
            "regra": "Usar 6D81 para demência por doença cerebrovascular e 6D71 para transtorno neurocognitivo leve; provável/possível não cria código próprio.",
            "versao": "CID-11 MMS 2026-01"
        }
    },
    "agrupamento": {
        "capitulo": {
            "id": "transtornos_neurocognitivos",
            "label": "Transtornos Neurocognitivos"
        },
        "subgrupo": null
    },
    "faixa_etaria_alvo": "transversal",
    "terminologia_relacionada": [
        {
            "termo": "Demência vascular",
            "status": "termo_relacionado",
            "equivalencia": "parcial",
            "nota": "Corresponde à apresentação maior, não à leve."
        }
    ]
},
  "estrutura_geral": "monothetic_puro",
  "clusters_sintomas": [],
  "criterios_condicionais": [
    {
        "id": "criterios_tnc",
        "letra": "A",
        "rotulo": "São atendidos os critérios para TNC maior ou leve",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "ClipboardCheck",
        "descricao_completa": "São atendidos os critérios para transtorno neurocognitivo maior ou leve.",
        "nota": null
    },
    {
        "id": "etiologia_vascular",
        "letra": "B",
        "rotulo": "Aspectos clínicos consistentes com etiologia vascular",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "HeartPulse",
        "descricao_completa": "O surgimento de déficits cognitivos está temporariamente relacionado com um ou mais eventos cerebrovasculares, OU evidências de declínio destacadas na atenção complexa e na função executiva frontal.",
        "nota": null
    },
    {
        "id": "evidencia_doenca_cerebrovascular",
        "letra": "C",
        "rotulo": "Evidências de doença cerebrovascular",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Brain",
        "descricao_completa": "Há evidências da presença de doença cerebrovascular a partir da história, do exame físico e/ou de neuroimagem consideradas suficientes para responder pelos déficits cognitivos.",
        "nota": null
    },
    {
        "id": "exclusao_outras_etiologias",
        "letra": "D",
        "rotulo": "Não mais bem explicado por outra doença cerebral ou sistêmica",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Os sintomas não são mais bem explicados por outra doença cerebral ou transtorno sistêmico.",
        "nota": null,
        "ddx_sugeridos": [
            "tnc_alzheimer",
            "tnc_corpos_lewy",
            "delirium"
        ]
    }
],
  "subtipos": {
    "presente": true,
    "nome": "Nível neurocognitivo e certeza etiológica",
    "natureza": "nivel_e_certeza",
    "formal_dsm": true,
    "mutuamente_exclusivos": true,
    "subtipos": [
        {
            "id": "maior_provavel",
            "label": "TNC vascular maior provável",
            "descricao": "TNC maior com evidência clínica ou genética suficiente para etiologia vascular provável.",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "cid11_mms": "6D81",
                "regra": "O código final depende do nível, da etiologia e de especificações clínicas; confirmar no sistema de codificação adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "maior_possivel",
            "label": "TNC vascular maior possível",
            "descricao": "TNC maior com vínculo vascular plausível, sem evidência suficiente para provável.",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "cid11_mms": "6D81",
                "regra": "O código final depende do nível, da etiologia e de especificações clínicas; confirmar no sistema de codificação adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "leve_provavel",
            "label": "TNC vascular leve provável",
            "descricao": "TNC leve com evidência clínica ou genética suficiente para etiologia vascular provável.",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "cid11_mms": "6D71",
                "regra": "O código final depende do nível, da etiologia e de especificações clínicas; confirmar no sistema de codificação adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "leve_possivel",
            "label": "TNC vascular leve possível",
            "descricao": "TNC leve com vínculo vascular plausível, sem evidência suficiente para provável.",
            "codigo": {
                "dsm5_legacy": null,
                "cid10_cm": null,
                "cid11_mms": "6D71",
                "regra": "O código final depende do nível, da etiologia e de especificações clínicas; confirmar no sistema de codificação adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        }
    ],
    "nota_aplicador": "Registre conjuntamente o nível neurocognitivo e a certeza etiológica."
},
  "especificadores": [],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": [
            "6D81",
            "6D71"
        ],
        "equivalencia": "contextual",
        "regra": "Usar 6D81 para demência por doença cerebrovascular e 6D71 para transtorno neurocognitivo leve; provável/possível não cria código próprio.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "formal_condicional",
    "escopo": "apenas_tnc_maior",
    "tipo": "dependencia_funcional",
    "condicao_aplicabilidade": "Aplicar os níveis somente quando a apresentação for transtorno neurocognitivo maior.",
    "lembrete_aplicador": "No TNC vascular maior, classifique pela perda de independência nas atividades da vida diária.",
    "niveis": [
        {
            "id": "leve",
            "label": "Leve",
            "descritor": "Dificuldade em atividades instrumentais da vida diária."
        },
        {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "Dificuldade em atividades básicas da vida diária."
        },
        {
            "id": "grave",
            "label": "Grave",
            "descritor": "Dependência completa para os cuidados cotidianos."
        }
    ],
    "regra_atribuicao": "Não aplicar esta graduação ao transtorno neurocognitivo leve."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": null,
      },
  "dominios_impacto": [
    {
        "id": "funcoes_executivas",
        "label": "Funções executivas",
        "icone": "Brain",
        "relevante_para": "transversal"
    },
    {
        "id": "funcionamento_motor",
        "label": "Funcionamento motor",
        "icone": "Footprints",
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
        "id": "transtorno_neurocognitivo_alzheimer",
        "condicao": "Transtorno Neurocognitivo Alzheimer",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Alzheimer: início insidioso, memória precoce; Vascular: relação com AVC, déficits executivos/atenção.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_neurocognitivo_com_corpos_de_lewy",
        "condicao": "Transtorno Neurocognitivo com corpos de Lewy",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Lewy: oscilação, alucinações visuais; Vascular: história de AVC, infartos em imagem.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "depressao_vascular",
        "condicao": "Depressão vascular",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Depressão de início tardio com desaceleração psicomotora pode simular Transtorno Neurocognitivo vascular; melhora com tratamento antidepressivo.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "TNC Alzheimer",
      "frequencia": "alta",
      "nota": "Patologia mista comum em idosos."
    },
    {
      "condicao": "Depressão",
      "frequencia": "alta",
      "nota": "Depressão vascular comum."
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "avaliacao_neuropsicologica",
        "nome": "Avaliação neuropsicológica padronizada",
        "sigla": null,
        "uso": "apoio_diagnostico",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Documenta domínios cognitivos e funcionamento; interpretar com escolaridade, cultura e condição sensorial."
    },
    {
        "id": "neuroimagem",
        "nome": "Neuroimagem estrutural",
        "sigla": "TC/RM",
        "uso": "investigacao_etiologica",
        "faixa_etaria": "adulto",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Pode apoiar a etiologia vascular; não é obrigatória em todos os casos e não substitui a avaliação clínica."
    }
],
  "prevalencia": {
    "tipo_estimativa": "multiplas_estimativas",
    "estimativa": "A frequência aumenta com a idade e após doença cerebrovascular; as estimativas variam conforme definição de comprometimento vascular e população estudada.",
    "distribuicao_por_sexo": "Mais em homens",
    "variacoes_contextuais": "Diferenças entre grupos podem refletir carga vascular, acesso a cuidado, sobrevivência e critérios de aferição; evitar atribuição étnica essencialista.",
    "nota_aplicador": "Distinguir prevalência populacional, frequência pós-AVC e proporção entre demências."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Pode ocorrer após eventos cerebrovasculares em diferentes idades, mas a frequência aumenta com a idade e a carga vascular.",
    "trajetoria": "Pode ser aguda, em degraus, flutuante ou gradualmente progressiva, conforme o mecanismo vascular e eventos subsequentes.",
    "prognostico": "Depende da extensão e localização das lesões, recorrência vascular, reserva cognitiva, funcionalidade e comorbidades.",
    "nota_aplicador": "Idade e trajetória dependem da etiologia; mudança em relação ao nível prévio e curso temporal têm prioridade sobre a faixa típica."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "etiologico_interno",
        "criteria": [
          "A. Atendidos os critérios para Transtorno Neurocognitivo Maior ou Leve",
          "B. Aspectos clínicos consistentes com etiologia vascular (relação temporal com eventos cerebrovasculares ou declínio proeminente na atenção complexa e velocidade de processamento/função executiva)",
          "C. Evidências da presença de doença cerebrovascular pela história, exame físico e/ou exames de neuroimagem considerados suficientes para responder pelos déficits cognitivos",
          "D. Os sintomas não são mais bem explicados por outra doença cerebral ou transtorno sistêmico"
        ],
        "diagnostic_rule": "Critérios de TNC (Maior ou Leve) + Relação temporal com AVC ou perfil cognitivo executivo típico + Evidência objetiva de doença cerebrovascular (imagem/clínica) + Exclusão de outras etiologias",
        "clusters": [
          "Atenção complexa",
          "Função executiva",
          "Velocidade de processamento"
        ],
        "duration": "variável (início agudo, progressão em degraus, flutuante ou platôs de estabilização)",
        "age_onset": "geralmente em idade avançada, correlacionando-se com fatores de risco cardiovascular (hipertensão, diabetes, dislipidemia)",
        "functional_impairment": "prejuízo funcional correlacionado com déficits executivos (dificuldade de planejamento, tomada de decisões) e comumente associado a sintomas motores ou neurológicos focais",
        "exclusions": [
          "Doença de Alzheimer",
          "TNC com corpos de Lewy",
          "Delirium",
          "Depressão vascular"
        ],
        "specifiers": [
          {
            "id": "sem_perturbacao",
            "nome_completo": "Sem perturbação comportamental"
          },
          {
            "id": "com_perturbacao",
            "nome_completo": "Com perturbação comportamental"
          }
        ],
        "operational_profiles": [],
        "critical_differentials": [
          "TNC devido à doença de Alzheimer",
          "TNC com corpos de Lewy",
          "Depressão maior",
          "Delirium"
        ],
        "key_questions": [
          "Houve início abrupto dos déficits ou piora nítida em degraus após um infarto cerebral ou derrame?",
          "As principais queixas referem-se à lentidão para pensar, dificuldade para planejar tarefas e desatenção, mais do que perda de memória pura?",
          "Existem exames de neuroimagem (RM ou TC) mostrando lesões vasculares, infartos lacunares ou doença difusa da substância branca substanciais?",
          "O paciente apresenta sintomas físicos como marcha magnética/instável, incontinência urinária precoce ou paralisia pseudobulbar?"
        ],
        "alerts": [
          "A neuroimagem estrutural (RM ou TC) é essencial para fundamentar a classificação como 'Provável'.",
          "Comumente coexiste com patologia de Alzheimer (quadros mistos)."
        ],
        "source_trace": {
          "markdown_section": "## FICHA 17.9: TRANSTORNO NEUROCOGNITIVO VASCULAR",
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
    "fonte_capitulo_md": "17_transtornos_neurocognitivos.md",
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
    "estrutura_efetiva": "- **Estrutura efetiva:** Deficits cognitivos temporalmente relacionados a evento cerebrovascular ou com declinio em atencao complexa/funcao executiva. Evidencia de doenca cerebrovascular em historia/exame/neuroimagem suficiente para explicar deficits.",
    "notas_clinicas": "- **Notas:** Segunda causa mais comum de TNC. Curso variavel: inicio agudo com melhora parcial a declinio gradual. Fatores de risco: hipertensao, diabetes, tabagismo, fibrilacao atrial. CADASIL como fator genetico. Prevalencia 0,2-16% apos 65 anos."
  },
  
});
export type DisorderData = typeof data;
