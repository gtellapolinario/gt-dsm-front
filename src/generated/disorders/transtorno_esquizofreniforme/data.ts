import { TranstornoEsquizofreniformeSchema } from "./schema";

export const data = TranstornoEsquizofreniformeSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "transtorno_esquizofreniforme",
    "nome_completo": "Transtorno Esquizofreniforme",
    "capitulo": "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
    "capitulo_id": "espectro_da_esquizofrenia_e_outros_transtornos_psicoticos",
    "sigla": null,
    "codificacao": {
        "dsm5_tr": {
            "codigo": "295.40",
            "sistema_origem": "ICD-9-CM",
            "uso": "referencia_editorial_legacy"
        },
        "cid10_cm": {
            "referencia_base": "F20.81",
            "equivalencia": "direta",
            "regra": "Correspondência diagnóstica direta no nível informado; confirmar especificadores e requisitos da versão CID-10-CM adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6A2Y",
            "equivalencia": "sem_correspondencia_direta",
            "regra": "A CID-11 não possui categoria equivalente direta ao transtorno esquizofreniforme; 6A2Y é residual e a escolha final depende do curso e da formulação diagnóstica.",
            "versao": "CID-11 MMS 2026-01"
        }
    },
    "agrupamento": {
        "capitulo": {
            "id": "espectro_da_esquizofrenia_e_outros_transtornos_psicoticos",
            "label": "Espectro da Esquizofrenia e Outros Transtornos Psicóticos"
        },
        "subgrupo": null
    },
    "faixa_etaria_alvo": "transversal",
    "terminologia_relacionada": []
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
                "desc": "Crenças fixas não abaláveis pela realidade.",
                "pergunta": "A pessoa tem tido ideias persistentes que as outras pessoas dizem não fazer sentido ou não ser reais?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Crenças persecutórias, de controle ou de referência"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Alucinações",
                "desc": "Percepções sem o estímulo sensorial correspondente.",
                "pergunta": "A pessoa ouviu ruídos, vozes ou viu coisas que outras pessoas disseram não perceber?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Vozes discutindo ou conversando entre si na mente/ouvidos"
                ]
            },
            {
                "id": "A3",
                "rotulo": "Discurso desorganizado",
                "desc": "Incoerência ou descarrilamento frequente do pensamento expresso na fala.",
                "pergunta": "A pessoa sentiu dificuldades em manter um raciocínio lógico que as pessoas conseguissem acompanhar?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Falar mudando de tema de forma incompreensível"
                ]
            },
            {
                "id": "A4",
                "rotulo": "Comportamento grosseiramente desorganizado ou catatônico",
                "desc": "Comportamento motor anormal que varia de agitação tola e sem sentido à rigidez extrema catatônica.",
                "pergunta": "A pessoa tem agido de forma estranha, excessivamente agitada ou sem controle do seu corpo?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Comportamento tolo infantil ou ausência de reatividade motora"
                ]
            },
            {
                "id": "A5",
                "rotulo": "Sintomas negativos",
                "desc": "Expressão emocional diminuída ou avolia marcante.",
                "pergunta": "A pessoa tem se sentido sem motivação para iniciar atividades ou sentiu falta de emoções?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Contato visual pobre, afeto embotado, apatia ou avolia marcante"
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
        "id": "duracao_esquizofreniforme",
        "letra": "B",
        "rotulo": "Duração entre 1 e 6 meses",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "ClipboardCheck",
        "descricao_completa": "Um episódio da perturbação dura pelo menos um mês, mas menos de seis meses. Quando o diagnóstico deve ser feito sem aguardar a recuperação, deve ser qualificado como 'provisório'.",
        "nota": null
    },
    {
        "id": "exclusao_esquizoafetivo_humor",
        "letra": "C",
        "rotulo": "Exclusão de esquizoafetivo e humor com psicose",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Transtorno esquizoafetivo e transtorno depressivo ou bipolar com características psicóticas foram descartados.",
        "nota": null,
        "ddx_sugeridos": [
            "transtorno_esquizoafetivo",
            "transtorno_depressivo_maior",
            "transtorno_bipolar"
        ]
    },
    {
        "id": "nao_atribuivel_substancia",
        "letra": "D",
        "rotulo": "Não atribuível a substância ou condição médica",
        "tipo": "exclusao_substancia_medica",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Pill",
        "descricao_completa": "A perturbação não é atribuível aos efeitos fisiológicos de uma substância ou a outra condição médica.",
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
  "especificadores": [
    {
        "id": "prognostico",
        "nome": "Características de prognóstico",
        "tipo": "enum",
        "ortogonal": false,
        "opcoes": [
            "Com características de bom prognóstico",
            "Sem características de bom prognóstico"
        ],
        "regra_criterial": "Com características de bom prognóstico: Exige ≥2 de: início agudo (dentro de 4 semanas); confusão/perplexidade; bom funcionamento pré-mórbido; ausência de afeto plano/embotado."
    },
    {
        "id": "com_catatonia",
        "nome": "Com catatonia",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": "Exige o uso do código adicional 293.89 (F06.1)."
    }
],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6A2Y",
        "equivalencia": "sem_correspondencia_direta",
        "regra": "A CID-11 não possui categoria equivalente direta ao transtorno esquizofreniforme; 6A2Y é residual e a escolha final depende do curso e da formulação diagnóstica.",
        "versao": "CID-11 MMS 2026-01"
    }
},
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
    "exclui_se_diagnosticado": ["esquizofrenia", "transtorno_esquizoafetivo", "transtorno_psicotico_breve"],
    "exclui_diagnostico_de": ["transtorno_psicotico_breve"],
    "notas": "O transtorno esquizofreniforme é um diagnóstico intermediário; se os sintomas ultrapassarem 6 meses, o diagnóstico é alterado para esquizofrenia.",
      },
  "dominios_impacto": [
    {
        "id": "social",
        "label": "Funcionamento social",
        "icone": "Users",
        "relevante_para": "transversal"
    },
    {
        "id": "ocupacional",
        "label": "Desempenho ocupacional",
        "icone": "Briefcase",
        "relevante_para": "transversal"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "esquizofrenia",
        "condicao": "Esquizofrenia",
        "natureza": "transtorno_mental",
        "ponto_distincao": "A esquizofrenia exige perturbação contínua por pelo menos 6 meses e declínio funcional claro; o esquizofreniforme dura menos de 6 meses e não exige declínio funcional.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_psicotico_breve",
        "condicao": "Transtorno Psicótico Breve",
        "natureza": "transtorno_mental",
        "ponto_distincao": "O transtorno psicótico breve dura menos de 1 mês e requer apenas 1 sintoma em vez de 2.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtornos_de_humor_com_psicose",
        "condicao": "Transtornos de Humor com Psicose",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Diferencia-se pela relação temporal dos sintomas psicóticos com os episódios de humor.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "delirium_ou_condicao_neurologica",
        "condicao": "Delirium ou condição neurológica",
        "natureza": "condicao_medica",
        "ponto_distincao": "Flutuação de atenção, declínio cognitivo ou sinais neurológicos favorecem causa orgânica.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_psicotico_induzido_por_substancia_ou_medicamento",
        "condicao": "Transtorno psicótico induzido por substância ou medicamento",
        "natureza": "substancia_medicamento",
        "ponto_distincao": "Relação temporal com intoxicação, abstinência ou medicamento e remissão compatível favorecem etiologia induzida.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [],
  "instrumentos_complementares": [
    {
        "id": "panss",
        "nome": "Escala das Síndromes Positiva e Negativa",
        "sigla": "PANSS",
        "uso": "gravidade_monitoramento",
        "faixa_etaria": "adulto",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "tipo_estimativa": "incidencia_relativa",
    "estimativa": "A incidência é descrita como menor que a da esquizofrenia em países com sistemas diagnósticos comparáveis; não há estimativa populacional única estável.",
    "distribuicao_por_sexo": "Incidência similar entre os sexos.",
    "variacoes_contextuais": null,
    "nota_aplicador": "Taxa de transição diagnóstica pertence ao curso, não à prevalência."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Mais comum no início da vida adulta.",
    "trajetoria": "Por definição dura de 1 a menos de 6 meses. Cerca de um terço mantém recuperação compatível com esse diagnóstico; a maioria recebe posteriormente diagnóstico de esquizofrenia ou transtorno esquizoafetivo.",
    "prognostico": "Características de bom prognóstico aumentam a probabilidade de recuperação, mas a estabilidade diagnóstica só pode ser avaliada longitudinalmente.",
    "nota_aplicador": "Início e trajetória são descritores típicos, não critérios isolados; um curso diferente exige reavaliação, mas não exclusão automática."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_clusters_assimetricos",
        "criteria": [],
        "diagnostic_rule": "- Critério A (2+ sintomas, 1 obrigatório) **E** Critério B (1-6 meses) **E** Critério C (excluir humor) **E** Critério D (excluir substância/condição médica)",
        "clusters": [],
        "duration": null,
        "age_onset": null,
        "functional_impairment": null,
        "exclusions": [],
        "specifiers": [
          "**Com características de bom prognóstico**: requer ≥2 de:",
          "Início de sintomas psicóticos proeminentes em ≤4 semanas da primeira mudança no comportamento",
          "Confusão ou perplexidade",
          "Bom funcionome_completonto social/profissional pré-morbido",
          "Ausência de afeto embotado ou plano",
          "**Sem características de bom prognóstico**: se ≥2 das anteriores NÃO estiveram presentes",
          "**Com catatonia**: código adicional 293.89 (F06.1)"
        ],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### TRANSTORNO ESQUIZOFRENIFORME",
          "patches_applied": [
            "gravidade: Mesma escala dimensional da esquizofrenia (0-4 por dominio) - uso opcional -> Sim (especificador dimensional OPCIONAL) + tipo=ordinal_por_dominio + escala 0-4 + USO_OPCIONAL=True"
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
    "estrutura_efetiva": "- **Estrutura efetiva:** Polythetic (2/5 sintomas do Critério A da esquizofrenia; >=1 dentre delírios, alucinações ou discurso desorganizado) presente por >=1 mês (ou menos se tratado) + B (duração total >=1 mês e <6 meses; diagnóstico provisório se ainda não recuperado) + C (esquizoafetivo e humor com psicose descartados) + D (exclusão: substância, condição médica). Sem exigência de declínio funcional (diferente da esquizofrenia).",
    "notas_clinicas": "- **Notas:**"
  },
  
});
export type DisorderData = typeof data;
