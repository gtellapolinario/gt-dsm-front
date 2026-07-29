import { TranstornoPsicoticoBreveSchema } from "./schema";

export const data = TranstornoPsicoticoBreveSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "transtorno_psicotico_breve",
    "nome_completo": "Transtorno Psicótico Breve",
    "capitulo": "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
    "capitulo_id": "espectro_da_esquizofrenia_e_outros_transtornos_psicoticos",
    "sigla": null,
    "codificacao": {
        "dsm5_tr": {
            "codigo": "298.8",
            "sistema_origem": "ICD-9-CM",
            "uso": "referencia_editorial_legacy"
        },
        "cid10_cm": {
            "referencia_base": "F23",
            "equivalencia": "direta",
            "regra": "Correspondência diagnóstica direta no nível informado; confirmar especificadores e requisitos da versão CID-10-CM adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6A23",
            "equivalencia": "aproximada",
            "regra": "A CID-11 usa transtorno psicótico agudo e transitório e codifica curso/remissão; confirmar compatibilidade temporal antes da conversão.",
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
        "nome": "Sintomas Psicóticos Ativos",
        "tipo": "polythetic_com_ancora",
        "limiar": {
            "adulto": 1,
            "pediatria": 1
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
                "desc": "Crenças fixas que não são passíveis de mudança à luz de evidências conflitantes.",
                "pergunta": "A pessoa vivenciou ideias ou crenças intensas e irreais que surgiram de forma repentina?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Crenças persecutórias de que está sendo observado ou perseguido repentinamente"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Alucinações",
                "desc": "Experiências semelhantes a percepções que ocorrem sem um estímulo externo.",
                "pergunta": "A pessoa ouviu vozes ou viu coisas que outras pessoas ao seu redor disseram não ouvir ou ver?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Ouvir vozes comentando sobre as ações do paciente de forma nítida"
                ]
            },
            {
                "id": "A3",
                "rotulo": "Discurso desorganizado",
                "desc": "Desorganização do pensamento expressa pela fala de forma incompreensível ou descarrilada.",
                "pergunta": "As pessoas disseram que sua conversa estava confusa, sem nexo ou difícil de acompanhar?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Descarrilamento frequente da conversa ou incoerência marcante"
                ]
            },
            {
                "id": "A4",
                "rotulo": "Comportamento grosseiramente desorganizado ou catatônico",
                "desc": "Inquietação física extrema, comportamento tolo e infantil, ou rigidez e estupor catatônico.",
                "pergunta": "A pessoa ou terceiros perceberam uma agitação incomum ou atitudes bizarras inexplicáveis?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Agitação sem finalidade ou adoção de posturas corporais rígidas e estranhas"
                ]
            }
        ],
        "descricao_qualitativa": "Presença de pelo menos um dos sintomas, com pelo menos um sendo obrigatoriamente A1, A2 ou A3.",
        "nota": null,
        "regra_temporal": null
    }
],
  "criterios_condicionais": [
    {
        "id": "duracao_breve",
        "letra": "B",
        "rotulo": "Duração entre 1 dia e 1 mês",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "ClipboardCheck",
        "descricao_completa": "A duração de um episódio da perturbação é de pelo menos um dia, mas menos de um mês, com retorno completo ao nível de funcionamento pré-mórbido.",
        "nota": null
    },
    {
        "id": "exclusao_outros_transtornos",
        "letra": "C",
        "rotulo": "Não explicado por humor com psicose ou esquizofrenia",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "A perturbação não é mais bem explicada por transtorno depressivo ou bipolar com características psicóticas, por esquizofrenia ou catatonia, nem é atribuível a substância ou condição médica.",
        "nota": null,
        "ddx_sugeridos": [
            "esquizofrenia",
            "transtorno_esquizoafetivo",
            "transtorno_bipolar",
            "transtorno_depressivo_maior"
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
  "especificadores": [
    {
        "id": "relacao_estressor",
        "nome": "Relação com estressor",
        "tipo": "enum",
        "ortogonal": false,
        "opcoes": [
            "Com estressor(es) evidente(s) (psicose reativa breve)",
            "Sem estressor(es) evidente(s)"
        ],
        "regra_criterial": "Com estressor(es) evidente(s) (psicose reativa breve): Sintomas ocorrem em resposta a eventos que causariam estresse acentuado em qualquer pessoa."
    },
    {
        "id": "com_inicio_no_pos_parto",
        "nome": "Com início no pós-parto",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": "Sintomas iniciam-se durante a gestação ou em até 4 semanas após o parto."
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
        "codigo_base": "6A23",
        "equivalencia": "aproximada",
        "regra": "A CID-11 usa transtorno psicótico agudo e transitório e codifica curso/remissão; confirmar compatibilidade temporal antes da conversão.",
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
    "exclui_se_diagnosticado": [
      "esquizofrenia",
      "transtorno_esquizoafetivo",
      "transtorno_esquizofreniforme"
    ],
    "exclui_diagnostico_de": [],
    "notas": "Diagnósticos de esquizofrenia, transtorno esquizoafetivo ou esquizofreniforme têm precedência diagnóstica e excluem o diagnóstico de transtorno psicótico breve caso preencham critérios temporais.",
      },
  "dominios_impacto": [
    {
        "id": "social",
        "label": "Funcionamento social",
        "icone": "Users",
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
        "id": "esquizofrenia_ou_transtorno_esquizofreniforme",
        "condicao": "Esquizofrenia ou Transtorno Esquizofreniforme",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Se os sintomas persistirem por 1 mês ou mais, o diagnóstico deve ser alterado para transtorno esquizofreniforme (até 6 meses) ou esquizofrenia (mais de 6 meses).",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_psicotico_induzido_por_substancia",
        "condicao": "Transtorno Psicótico Induzido por Substância",
        "natureza": "substancia_medicamento",
        "ponto_distincao": "Diferencia-se pela relação cronológica do uso da substância com o aparecimento e a remissão das crenças e sintomas psicóticos.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtornos_de_humor_com_psicose",
        "condicao": "Transtornos de Humor com Psicose",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Nos transtornos de humor, os sintomas psicóticos ocorrem apenas concomitantemente a episódios graves de humor deprimido ou maníaco.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "delirium_ou_condicao_neurologica",
        "condicao": "Delirium ou condição neurológica",
        "natureza": "condicao_medica",
        "ponto_distincao": "Alteração da atenção, flutuação ou sinais neurológicos favorecem causa orgânica.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [],
  "instrumentos_complementares": [
    {
        "id": "bprs",
        "nome": "Escala Breve de Avaliação Psiquiátrica",
        "sigla": "BPRS",
        "uso": "gravidade_monitoramento",
        "faixa_etaria": "adulto",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "tipo_estimativa": "frequencia_em_primeiro_episodio_psicotico",
    "estimativa": "A proporção em amostras de primeiro episódio psicótico não equivale à prevalência na população geral; a frequência populacional é baixa e imprecisa.",
    "distribuicao_por_sexo": "Duas vezes mais comum em indivíduos do sexo feminino do que no masculino.",
    "variacoes_contextuais": null,
    "nota_aplicador": "Amostras de primeiro episódio são selecionadas e não representam a população geral."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Pode ocorrer na vida adulta; a idade de início varia conforme contexto e amostra.",
    "trajetoria": "Início súbito e duração inferior a um mês, com retorno ao funcionamento pré-mórbido exigido para confirmação retrospectiva do diagnóstico.",
    "prognostico": "A recuperação do episódio é exigida pela definição, mas o diagnóstico longitudinal pode mudar; risco de suicídio e recorrência requer acompanhamento.",
    "nota_aplicador": "O retorno completo ao nível pré-mórbido é confirmatório e retrospectivo; antes disso, manter diagnóstico provisório e diferencial longitudinal."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "temporal_topografico",
        "criteria": [],
        "diagnostic_rule": "- Sintomas psicóticos + duração 1 dia a 1 mês + retorno completo ao funcionome_completonto + exclusões",
        "clusters": [],
        "duration": null,
        "age_onset": null,
        "functional_impairment": null,
        "exclusions": [],
        "specifiers": [
          "Com estressor(es) evidente(s) (psicose reativa breve)",
          "Sem estressor(es) evidente(s)",
          "Com início no pós-parto (gestação ou até 4 semanas após parto)",
          "Com catatonia (código adicional 293.89 F06.1)"
        ],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [
          "Quando esses sintomas começaram?",
          "Já passaram? Voltou ao normal?",
          "Houve algum evento estressante que precedeu o início?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### TRANSTORNO PSICÓTICO BREVE",
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
    "estrutura_efetiva": "- **Estrutura efetiva:** Polythetic (>=1 de 4 sintomas; pelo menos 1 dentre delírios, alucinações ou discurso desorganizado) + B (duração >=1 dia e <1 mês, com retorno completo ao funcionamento pré-mórbido) + C (exclusão: transtorno de humor com psicose, esquizofrenia, catatonia, substância, condição médica)",
    "notas_clinicas": "- **Notas:**"
  },
  
});
export type DisorderData = typeof data;
