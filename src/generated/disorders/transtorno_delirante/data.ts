import { TranstornoDeliranteSchema } from "./schema";

export const data = TranstornoDeliranteSchema.parse({
  "$schema_version": "2.2.0",
  "meta": {
    "id": "transtorno_delirante",
    "nome_completo": "Transtorno Delirante",
    "sigla": null,
    "codigo": {
      "dsm5": "297.1",
      "cid10": "F22",
      "cid11": "6A24"
    },
    "capitulo": "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
    "capitulo_id": "02",
    "grupo": null,
    "faixa_etaria_alvo": "transversal",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "estrutura_geral": "categorico_por_subtipo",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Sintomas Delirantes",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Presença de um ou mais delírios",
                "desc": "Presença de um ou mais delírios com duração de um mês ou mais.",
                "pergunta": "A pessoa tem tido ideias ou crenças muito fortes que as outras pessoas dizem não ser reais, durando pelo menos um mês?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Acreditar estar sendo seguido, envenenado, amado à distância ou traído pelo parceiro"
                ]
            }
        ],
        "descricao_qualitativa": "Presença de um ou mais delírios com duração de um mês ou mais. Alucinações, se presentes, não são proeminentes e relacionam-se ao tema delirante.",
        "nota": null,
        "regra_temporal": null
    }
],
  "criterios_condicionais": [
    {
        "id": "esquizofrenia_nunca_atendida",
        "letra": "B",
        "rotulo": "Critério A de esquizofrenia jamais atendido",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "O Critério A para esquizofrenia nunca foi atendido. Se alucinações estiverem presentes, não são proeminentes e têm relação com o tema delirante.",
        "nota": null,
        "ddx_sugeridos": [
            "esquizofrenia"
        ]
    },
    {
        "id": "funcionamento_preservado",
        "letra": "C",
        "rotulo": "Funcionamento preservado fora do delírio",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "UserCheck",
        "descricao_completa": "Exceto pelo impacto direto dos delírios ou de suas ramificações, o funcionamento não está acentuadamente prejudicado e o comportamento não é claramente bizarro ou esquisito.",
        "nota": null
    },
    {
        "id": "duracao_episodios_humor",
        "letra": "D",
        "rotulo": "Humor breve em relação aos delírios",
        "tipo": "temporal_proporcao",
        "ui_widget": "toggle_simples",
        "obrigatorio": true,
        "icone": "Hourglass",
        "descricao_completa": "Se episódios maníacos ou depressivos maiores ocorreram, sua duração total foi breve em relação à duração dos períodos delirantes ativos.",
        "nota": null
    },
    {
        "id": "exclusao_substancias_outros",
        "letra": "E",
        "rotulo": "Não atribuível a substância ou outra condição",
        "tipo": "exclusao_substancia_medica",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Shield",
        "descricao_completa": "A perturbação não é atribuível aos efeitos fisiológicos de uma substância ou a outra condição médica, nem é mais bem explicada por outro transtorno mental.",
        "nota": null,
        "ddx_sugeridos": [
            "transtorno_obsessivo_compulsivo",
            "transtorno_dismorfico_corporal"
        ]
    }
],
  "subtipos": {
    "presente": true,
    "nome": "Subtipo de delírio predominante",
    "natureza": "tipo_de_delirio",
    "formal_dsm": true,
    "mutuamente_exclusivos": true,
    "subtipos": [
        {
            "id": "erotomanico",
            "label": "Tipo Erotomaníaco",
            "descricao": "Aplica-se quando o tema central do delírio é que outra pessoa está apaixonada pelo indivíduo.",
            "codigo": {
                "dsm5_legacy": "297.1",
                "cid10_cm": "F22",
                "cid11_mms": "6A24",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "grandioso",
            "label": "Tipo Grandioso",
            "descricao": "Aplica-se quando o tema central do delírio é a convicção de ter algum grande talento ou insight (embora não reconhecido) ou de ter feito alguma descoberta importante.",
            "codigo": {
                "dsm5_legacy": "297.1",
                "cid10_cm": "F22",
                "cid11_mms": "6A24",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "ciumento",
            "label": "Tipo Ciumento",
            "descricao": "Aplica-se quando o tema central do delírio do indivíduo é de que seu cônjuge ou parceiro é infiel.",
            "codigo": {
                "dsm5_legacy": "297.1",
                "cid10_cm": "F22",
                "cid11_mms": "6A24",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "persecutorio",
            "label": "Tipo Persecutório",
            "descricao": "Aplica-se quando o tema central do delírio envolve a crença do indivíduo de que está sendo alvo de conspiração, enganado, espiado, seguido, envenenado ou drogado, difamado de forma maliciosa, assediado ou obstruído na busca de metas de longo prazo.",
            "codigo": {
                "dsm5_legacy": "297.1",
                "cid10_cm": "F22",
                "cid11_mms": "6A24",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "somatico",
            "label": "Tipo Somático",
            "descricao": "Aplica-se quando o tema central do delírio envolve funções ou sensações corporais.",
            "codigo": {
                "dsm5_legacy": "297.1",
                "cid10_cm": "F22",
                "cid11_mms": "6A24",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "misto",
            "label": "Tipo Misto",
            "descricao": "Aplica-se quando nenhum tema delirante predomina.",
            "codigo": {
                "dsm5_legacy": "297.1",
                "cid10_cm": "F22",
                "cid11_mms": "6A24",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        },
        {
            "id": "nao_especificado",
            "label": "Tipo Não Especificado",
            "descricao": "Aplica-se quando a crença delirante dominante não pode ser determinada com clareza ou não é descrita nos tipos específicos.",
            "codigo": {
                "dsm5_legacy": "297.1",
                "cid10_cm": "F22",
                "cid11_mms": "6A24.Z",
                "regra": "Não há correspondência CID-11 própria confirmada para esta opção; codificar o diagnóstico no sistema adotado. Correspondência CID-11 MMS aplicável à opção; confirmar especificações adicionais de curso, gravidade ou remissão."
            }
        }
    ],
    "nota_aplicador": "Selecione somente opções sustentadas pela avaliação clínica."
},
  "especificadores": [
    {
        "id": "com_conteudo_bizarro",
        "nome": "Com conteúdo bizarro",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    },
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
    }
],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6A24",
        "equivalencia": "contextual",
        "regra": "A CID-11 codifica curso e remissão, não o conteúdo predominante do delírio.",
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
      "transtorno_esquizoafetivo"
    ],
    "exclui_diagnostico_de": [],
    "notas": "A esquizofrenia e o transtorno esquizoafetivo excluem o diagnóstico de transtorno delirante.",
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
        "id": "transtorno_obsessivo_compulsivo",
        "condicao": "Transtorno Obsessivo-Compulsivo",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Se o indivíduo está totalmente convencido da veracidade das crenças de seu Transtorno Obsessivo-Compulsivo, deve ser diagnosticado Transtorno Obsessivo-Compulsivo com insight ausente/crenças delirantes, em vez de transtorno delirante.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_dismorfico_corporal",
        "condicao": "Transtorno Dismórfico Corporal",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Se o indivíduo está totalmente convencido da veracidade das crenças de seu Transtorno Dismórfico Corporal, deve ser diagnosticado Transtorno Dismórfico Corporal com insight ausente/crenças delirantes, em vez de transtorno delirante.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "esquizofrenia",
        "condicao": "Esquizofrenia",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Diferencia-se pela ausência de outros sintomas característicos da fase ativa da esquizofrenia (ex: discurso desorganizado, sintomas negativos, alucinações auditivas proeminentes).",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtornos_de_humor_com_caracteristicas_psicoticas",
        "condicao": "Transtornos de Humor com Características Psicóticas",
        "natureza": "transtorno_mental",
        "ponto_distincao": "No transtorno delirante, os delírios persistem na ausência de episódios de humor, ou os episódios de humor têm duração total breve em relação à perturbação delirante.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "delirium_ou_condicao_neurologica",
        "condicao": "Delirium ou condição neurológica",
        "natureza": "condicao_medica",
        "ponto_distincao": "Alteração da atenção, flutuação, declínio cognitivo ou sinais neurológicos favorecem causa orgânica.",
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
    "populacao_geral": "Aproximadamente 0,2% ao longo da vida.",
    "proporcao_sexo": "Sem grandes diferenças de gênero na frequência geral, embora o subtipo ciumento seja provavelmente mais comum em indivíduos do sexo masculino.",
    "variacoes_culturais": "Antecedentes culturais e religiosos individuais devem ser levados em conta na avaliação; o conteúdo dos delírios varia conforme os contextos culturais.",
    "notas": "O subtipo mais frequente é o persecutório. A condição pode ser mais prevalente em indivíduos mais velhos.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Idade adulta ou mais tardia",
    "trajetoria": "O diagnóstico costuma ser estável, embora uma parte dos indivíduos possa evoluir no sentido de desenvolver esquizofrenia. A função global é geralmente melhor que a observada na esquizofrenia.",
    "prognostico": "Costuma apresentar prejuízo funcional mais circunscrito do que outros transtornos psicóticos, permitindo funcionamento social e profissional aceitável fora das discussões delirantes.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "monothetic_puro",
        "criteria": [],
        "diagnostic_rule": "- Delírios persistentes ≥1 mês **E** nunca teve critério A de esquizofrenia **E** funcionome_completonto relativamente preservado **E** exclusões.",
        "clusters": [],
        "duration": null,
        "age_onset": null,
        "functional_impairment": null,
        "exclusions": [],
        "specifiers": [
          "**Com conteúdo bizarro**: Delírios claramente implausíveis, incompreensíveis, não originados de experiências comuns da vida.",
          "**Especificadores de curso** (usar SOMENTE após 1 ano):",
          "Primeiro episódio: agudo / remissão parcial / remissão completa",
          "Episódios múltiplos: agudo / remissão parcial / remissão completa",
          "Contínuo"
        ],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [
          "Você tem alguma crença forte que outras pessoas não compartilham ou consideram estranha?",
          "Há quanto tempo você mantém essa crença?",
          "Essa crença interfere em alguma área da sua vida?",
          "Você já ouviu vozes ou teve outras experiências incomuns?",
          "Já teve períodos de humor muito elevado ou muito deprimido?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### TRANSTORNO DELIRANTE",
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
    "estrutura_efetiva": "- **Estrutura efetiva:** Ancora em A (>=1 delírio por >=1 mês) + B (Critério A da esquizofrenia jamais atendido) + C (funcionamento não acentuadamente prejudicado fora dos delírios; comportamento não bizarro) + D (episódios de humor, se presentes, breves vs. duração delirante) + E (exclusão: substância, condição médica, TOC, dismorfismo corporal)",
    "notas_clinicas": "- **Notas:**"
  },
  
});
export type DisorderData = typeof data;
