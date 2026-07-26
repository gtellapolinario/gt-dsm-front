import { TranstornoEsquizofreniformeSchema } from "./schema";

export const data = TranstornoEsquizofreniformeSchema.parse({
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_esquizofreniforme",
    "nome_completo": "Transtorno Esquizofreniforme",
    "sigla": null,
    "codigo": {
      "dsm5": "295.40",
      "cid10": "F20.81",
      "cid11": "6A23"
    },
    "capitulo": "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
    "capitulo_id": "02",
    "grupo": null,
    "faixa_etaria_alvo": "transversal",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "estrutura_geral": "polythetic_com_ancora",
  "clusters_sintomas": [
    {
      "id": "A",
      "nome": "Sintomas da Fase Ativa",
      "tipo": "polythetic_com_ancora",
      "limiar": {
        "adulto": 2,
        "pediatria": null
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
          "pergunta": "Você tem tido ideias persistentes que as outras pessoas dizem não fazer sentido ou não ser reais?",
          "exemplos_clinicos": [
            "Crenças persecutórias, de controle ou de referência"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A2",
          "rotulo": "Alucinações",
          "desc": "Percepções sem o estímulo sensorial correspondente.",
          "pergunta": "Você ouviu ruídos, vozes ou viu coisas que outras pessoas disseram não perceber?",
          "exemplos_clinicos": [
            "Vozes discutindo ou conversando entre si na mente/ouvidos"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A3",
          "rotulo": "Discurso desorganizado",
          "desc": "Incoerência ou descarrilamento frequente do pensamento expresso na fala.",
          "pergunta": "Você sentiu dificuldades em manter um raciocínio lógico que as pessoas conseguissem acompanhar?",
          "exemplos_clinicos": [
            "Falar mudando de tema de forma incompreensível"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A4",
          "rotulo": "Comportamento grosseiramente desorganizado ou catatônico",
          "desc": "Comportamento motor anormal que varia de agitação tola e sem sentido à rigidez extrema catatônica.",
          "pergunta": "Você tem agido de forma estranha, excessivamente agitada ou sem controle do seu corpo?",
          "exemplos_clinicos": [
            "Comportamento tolo infantil ou ausência de reatividade motora"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A5",
          "rotulo": "Sintomas negativos",
          "desc": "Expressão emocional diminuída ou avolia marcante.",
          "pergunta": "Você tem se sentido sem motivação para iniciar atividades ou sentiu falta de emoções?",
          "exemplos_clinicos": [
            "Contato visual pobre, afeto embotado, apatia ou avolia marcante"
          ],
          "faixa_aplicavel": null
        }
      ],
      "descricao_qualitativa": "Presença de pelo menos dois sintomas por parte significativa de tempo em 1 mês, com um deles sendo obrigatoriamente A1, A2 ou A3.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    }
  ],
  "criterios_condicionais": [
    {
      "id": "duracao_esquizofreniforme",
      "letra": "B",
      "rotulo": "Duração entre 1 e 6 meses",
      "tipo": "temporal_duracao_janela",
      "ui_widget": "toggle_simples",
      "obrigatorio": true,
      "icone": "History",
      "ddx_sugeridos": [],
      "descricao_completa": "Um episódio da perturbação dura pelo menos um mês, mas menos de seis meses. Quando o diagnóstico deve ser feito sem aguardar a recuperação, deve ser qualificado como 'provisório'.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_esquizoafetivo_humor",
      "letra": "C",
      "rotulo": "Exclusão de esquizoafetivo e humor com psicose",
      "tipo": "exclusao_diagnostica",
      "ui_widget": "select_multiplos_ddx",
      "obrigatorio": true,
      "icone": "Ban",
      "ddx_sugeridos": [
        "transtorno_esquizoafetivo",
        "transtorno_depressivo_maior",
        "transtorno_bipolar"
      ],
      "descricao_completa": "Transtorno esquizoafetivo e transtorno depressivo ou bipolar com características psicóticas foram descartados.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "nao_atribuivel_substancia",
      "letra": "D",
      "rotulo": "Não atribuível a substância ou condição médica",
      "tipo": "exclusao_substancia_medica",
      "ui_widget": "toggle_com_justificativa_obrigatoria",
      "obrigatorio": true,
      "icone": "Pill",
      "ddx_sugeridos": [],
      "descricao_completa": "A perturbação não é atribuível aos efeitos fisiológicos de uma substância ou a outra condição médica.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    }
  ],
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  "especificadores": [
    {
      "id": "com_caracteristicas_bom_prognostico",
      "nome": "Com características de bom prognóstico",
      "tipo": "booleano",
      "ortogonal": true,
      "opcoes": [],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": "Exige >=2 de: início agudo (dentro de 4 semanas); confusão/perplexidade; bom funcionamento pré-mórbido; ausência de afeto plano/embotado.",
        "fonte_passada_1": true
      }
    },
    {
      "id": "sem_caracteristicas_bom_prognostico",
      "nome": "Sem características de bom prognóstico",
      "tipo": "booleano",
      "ortogonal": true,
      "opcoes": [],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "com_catatonia",
      "nome": "Com catatonia",
      "tipo": "booleano",
      "ortogonal": true,
      "opcoes": [],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": "Exige o uso do código adicional 293.89 (F06.1).",
        "fonte_passada_1": true
      }
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
    "exclui_se_diagnosticado": [
      "esquizofrenia",
      "transtorno_esquizoafetivo"
    ],
    "exclui_diagnostico_de": [
      "transtorno_psicotico_breve"
    ],
    "notas": "O transtorno esquizofreniforme é um diagnóstico intermediário; se os sintomas ultrapassarem 6 meses, o diagnóstico é alterado para esquizofrenia.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  "dominios_impacto": [
    {
      "id": "social",
      "label": "Relacionamento Interpessoal",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "trabalho",
      "label": "Desempenho Ocupacional",
      "icone": "Briefcase",
      "relevante_para": "transversal"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Esquizofrenia",
      "ponto_distincao": "A esquizofrenia exige perturbação contínua por pelo menos 6 meses e declínio funcional claro; o esquizofreniforme dura menos de 6 meses e não exige declínio funcional.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno Psicótico Breve",
      "ponto_distincao": "O transtorno psicótico breve dura menos de 1 mês e requer apenas 1 sintoma em vez de 2.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtornos de Humor com Psicose",
      "ponto_distincao": "Diferencia-se pela relação temporal dos sintomas psicóticos com os episódios de humor.",
      "pertence_a_classe": false
    }
  ],
  "comorbidades_frequentes": [],
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "A incidência é cerca de cinco vezes menor que a da esquizofrenia em países desenvolvidos.",
    "proporcao_sexo": "Incidência similar entre os sexos.",
    "variacoes_culturais": null,
    "notas": "Aproximadamente um terço dos indivíduos recupera-se em até 6 meses, mantendo o diagnóstico de esquizofreniforme; os dois terços restantes evoluem para esquizofrenia ou esquizoafetivo.",
    "metadados": {
      "completo": true,
      "lacunas": [
        "prevalencia.variacoes_culturais"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Início da idade adulta",
    "trajetoria": "O curso do transtorno esquizofreniforme é intermediário em termos de duração. Cerca de 60-80% dos diagnósticos provisórios acabam evoluindo para esquizofrenia ao longo de 6 meses.",
    "prognostico": "Depende muito das características de bom prognóstico. Se presentes, a recuperação total é significativamente mais provável.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
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
  "id": "transtorno_esquizofreniforme",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
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
  "versao_complementar_existe": false,
  "inventario_clinico": {
    "codigo_bruto": "- **Código DSM-5 / CID-10:** 295.40 (F20.81)",
    "estrutura_efetiva": "- **Estrutura efetiva:** Polythetic (2/5 sintomas do Critério A da esquizofrenia; >=1 dentre delírios, alucinações ou discurso desorganizado) presente por >=1 mês (ou menos se tratado) + B (duração total >=1 mês e <6 meses; diagnóstico provisório se ainda não recuperado) + C (esquizoafetivo e humor com psicose descartados) + D (exclusão: substância, condição médica). Sem exigência de declínio funcional (diferente da esquizofrenia).",
    "notas_clinicas": "- **Notas:**"
  },
  "hierarquia_exclusao": {
    "exclui": [
      "esquizofrenia",
      "transtorno_esquizoafetivo",
      "transtorno_psicotico_breve"
    ],
    "exclui_de": [
      "transtorno_psicotico_breve"
    ],
    "notas_hierarquia": "O transtorno esquizofreniforme é um diagnóstico intermediário; se os sintomas ultrapassarem 6 meses, o diagnóstico é alterado para esquizofrenia."
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
});
export type DisorderData = typeof data;
