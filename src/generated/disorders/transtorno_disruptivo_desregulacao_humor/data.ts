import { TranstornoDisruptivoDesregulacaoHumorSchema } from "./schema";

export const data = TranstornoDisruptivoDesregulacaoHumorSchema.parse({
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_disruptivo_desregulacao_humor",
    "nome_completo": "Transtorno Disruptivo da Desregulação do Humor",
    "sigla": "TDDH",
    "codigo": {
      "dsm5": "296.99",
      "cid10": "F34.8",
      "cid11": "6A83"
    },
    "capitulo": "Transtornos Depressivos",
    "capitulo_id": "04",
    "grupo": null,
    "faixa_etaria_alvo": "pediatria",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
      "id": "A",
      "nome": "Explosões de Raiva Recorrentes e Graves",
      "tipo": "monothetic_obrigatorio",
      "limiar": null,
      "ancora_obrigatoria": null,
      "sintomas": [
        {
          "id": "A1",
          "rotulo": "Explosões verbais/comportamentais desproporcionais",
          "desc": "Explosões de raiva recorrentes e graves (verbal ou comportamental/agressão física), desproporcionais em intensidade ou duração à situação.",
          "pergunta": "A criança tem explosões de raiva graves que são muito maiores do que a situação justificaria?",
          "exemplos_clinicos": [
            "Violência verbal intensa ante frustrações menores",
            "Destruição de objetos quando contrariada"
          ],
          "faixa_aplicavel": "pediatria"
        },
        {
          "id": "A2",
          "rotulo": "Explosões inconsistentes com nível de desenvolvimento",
          "desc": "As explosões de raiva são inapropriadas para o nível desenvolvimental da criança.",
          "pergunta": "As explosões são muito mais intensas do que seria esperado para a idade da criança?",
          "exemplos_clinicos": [
            "Comportamento de crise típico de criança muito menor"
          ],
          "faixa_aplicavel": "pediatria"
        },
        {
          "id": "A3",
          "rotulo": "Frequência: ≥3 vezes por semana",
          "desc": "As explosões de raiva ocorrem, em média, três ou mais vezes por semana.",
          "pergunta": "As explosões acontecem pelo menos três vezes na semana?",
          "exemplos_clinicos": [
            "Explosões diárias ou quase diárias"
          ],
          "faixa_aplicavel": "pediatria"
        },
        {
          "id": "D1",
          "rotulo": "Humor irritável/zangado persistente entre explosões",
          "desc": "Humor entre as explosões de raiva é persistentemente irritável ou zangado na maior parte do dia, quase todos os dias, observável por outras pessoas.",
          "pergunta": "A criança parece irritável ou zangada durante a maior parte do dia, todos os dias, mesmo quando não está tendo explosões?",
          "exemplos_clinicos": [
            "Professores relatam que a criança parece sempre com raiva"
          ],
          "faixa_aplicavel": "pediatria"
        }
      ],
      "descricao_qualitativa": null,
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
      "id": "duracao_12meses",
      "letra": "E",
      "rotulo": "Duração ≥12 meses sem pausa de 3 meses",
      "tipo": "temporal_duracao_minima",
      "ui_widget": "campo_duracao_meses",
      "obrigatorio": true,
      "icone": "Calendar",
      "ddx_sugeridos": [],
      "descricao_completa": "Os Critérios A-D estão presentes por 12 meses ou mais; sem período de 3 ou mais meses consecutivos sem todos os sintomas.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "multicontexto",
      "letra": "F",
      "rotulo": "Presente em ≥2 ambientes, grave em ≥1",
      "tipo": "multicontexto",
      "ui_widget": "toggle_simples",
      "obrigatorio": true,
      "icone": "House",
      "ddx_sugeridos": [],
      "descricao_completa": "Os Critérios A e D estão presentes em pelo menos dois de três ambientes (em casa, na escola, com os pares) e são graves em pelo menos um deles.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "faixa_etaria_diagnostico",
      "letra": "G",
      "rotulo": "Diagnóstico entre 6 e 18 anos",
      "tipo": "temporal_idade_inicio",
      "ui_widget": "campo_data",
      "obrigatorio": true,
      "icone": "Baby",
      "ddx_sugeridos": [],
      "descricao_completa": "O diagnóstico não deve ser feito pela primeira vez antes dos 6 anos ou após os 18 anos de idade.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "inicio_antes_10anos",
      "letra": "H",
      "rotulo": "Início dos sintomas A-E antes dos 10 anos",
      "tipo": "temporal_idade_inicio",
      "ui_widget": "campo_data",
      "obrigatorio": true,
      "icone": "Baby",
      "ddx_sugeridos": [],
      "descricao_completa": "Por relato ou observação, a idade de início dos Critérios A-E é antes dos 10 anos.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_mania_hipomania",
      "letra": "I",
      "rotulo": "Sem episódio maníaco/hipomaníaco >1 dia",
      "tipo": "exclusao_diagnostica",
      "ui_widget": "toggle_com_justificativa_obrigatoria",
      "obrigatorio": true,
      "icone": "Ban",
      "ddx_sugeridos": [
        "transtorno_bipolar_tipo_1",
        "transtorno_bipolar_tipo_2"
      ],
      "descricao_completa": "Nunca houve período distinto >1 dia com todos os critérios de sintomas (exceto duração) para episódio maníaco ou hipomaníaco.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_diagnostica_outros",
      "letra": "J",
      "rotulo": "Não exclusivamente durante EDM; não TEA, TEPT etc.",
      "tipo": "exclusao_diagnostica",
      "ui_widget": "select_multiplos_ddx",
      "obrigatorio": true,
      "icone": "Ban",
      "ddx_sugeridos": [
        "transtorno_depressivo_maior",
        "transtorno_espectro_autista",
        "tept",
        "transtorno_ansiedade_separacao",
        "transtorno_depressivo_persistente"
      ],
      "descricao_completa": "Não ocorre exclusivamente durante EDM; não é mais bem explicado por TEA, TEPT, ansiedade de separação, TDP. Não coexiste com TOD, transtorno explosivo intermitente ou transtorno bipolar.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_substancias_condicao_medica",
      "letra": "K",
      "rotulo": "Não atribuível a substância ou condição médica",
      "tipo": "exclusao_substancia_medica",
      "ui_widget": "toggle_com_justificativa_obrigatoria",
      "obrigatorio": true,
      "icone": "Ban",
      "ddx_sugeridos": [],
      "descricao_completa": "Os sintomas não são consequência dos efeitos psicológicos de uma substância ou de outra condição médica ou neurológica.",
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
  "especificadores": [],
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno disruptivo da desregulação do humor."
},
  "hierarquia": {
    "presente": true,
    "exclui_se_diagnosticado": [
      "transtorno_bipolar_tipo_1",
      "transtorno_bipolar_tipo_2"
    ],
    "exclui_diagnostico_de": [
      "transtorno_oposicao_desafiante",
      "transtorno_explosivo_intermitente"
    ],
    "notas": "TDDH tem precedência sobre TOD e transtorno explosivo intermitente quando critérios de ambos são satisfeitos. Não pode coexistir com transtorno bipolar.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  "dominios_impacto": [
    {
      "id": "academico",
      "label": "Desempenho Escolar",
      "icone": "GraduationCap",
      "relevante_para": "pediatria"
    },
    {
      "id": "familiar",
      "label": "Funcionamento Familiar",
      "icone": "House",
      "relevante_para": "pediatria"
    },
    {
      "id": "pares",
      "label": "Relações com Pares",
      "icone": "Users",
      "relevante_para": "pediatria"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno Bipolar",
      "ponto_distincao": "TB é episódico com humor elevado/expansivo; TDDH é persistente e não episódico, sem humor elevado.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno de Oposição Desafiante",
      "ponto_distincao": "TDDH requer explosões graves/frequentes E humor persistente entre as explosões; TOD raramente tem o componente de humor entre explosões.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno Explosivo Intermitente",
      "ponto_distincao": "TEI não requer perturbação persistente do humor entre explosões e requer apenas 3 meses (vs. 12 no TDDH).",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno do Espectro Autista",
      "ponto_distincao": "No TEA, explosões são secundárias à perturbação de rotina; TDDH não deve ser adicionado nesse contexto.",
      "pertence_a_classe": false
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "TDAH",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtornos de ansiedade",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno depressivo maior",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "2 a 5% entre crianças e adolescentes na comunidade (estimativa de 6 meses a 1 ano)",
    "proporcao_sexo": "Predominantemente masculino em amostras clínicas e comunitárias",
    "variacoes_culturais": null,
    "notas": "Estimativas baseadas em critério de irritabilidade persistente crônica e grave. Taxas mais elevadas em crianças do sexo masculino e em idade escolar.",
    "metadados": {
      "completo": false,
      "lacunas": [
        "prevalencia_ponto_precisa",
        "variacao_cultural"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Antes dos 10 anos (critério obrigatório); diagnóstico entre 7-18 anos",
    "trajetoria": "Aproximadamente 50% das crianças com irritabilidade grave satisfarão critérios 1 ano depois. Baixas taxas de conversão para transtorno bipolar. Crianças com irritabilidade crônica têm risco aumentado de transtornos depressivos unipolares e/ou ansiedade na idade adulta.",
    "prognostico": "Transtorno bipolar é mais comum antes da adolescência (<1%); TDDH tende a diminuir com a transição para a vida adulta.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  
  "metadados_globais": {
    "fonte_capitulo_md": "04_transtornos_depressivos.md",
    "fonte_inventario_md": "inventario/04_inventario.md",
    "data_extracao": "2026-05-31",
    "modelo_agente": "claude-sonnet-4-6",
    "lacunas_globais": [
      "prevalencia_precisa_comunidade",
      "dados_genetica_molecular"
    ],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "id": "transtorno_disruptivo_desregulacao_humor",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "rendering": {
    "estrutura_diagnostica": "polythetic_monocluster",
    "criteria": [],
    "diagnostic_rule": "- Critérios A (explosões) + B (desproporção) + C (≥3x/semana) + D (humor irritável) + E (≥12 meses) + F (≥2 ambientes) + G (6-18 anos) + H (início <10 anos) + I (sem mania) + J (excluir outros TM) + K (excluir substância/condição médica)",
    "clusters": [],
    "duration": null,
    "age_onset": null,
    "functional_impairment": null,
    "exclusions": [],
    "specifiers": [],
    "operational_profiles": [],
    "critical_differentials": [],
    "key_questions": [
      "A criança tem birras ou explosões de raiva frequentes? Com que frequência?",
      "Essas explosões são desproporcionais ao que aconteceu?",
      "Como é o humor dela entre as explosões? Fica irritada/zangada a maior parte do tempo?",
      "Há quanto tempo isso vem acontecendo? Houve algum período de 3 meses sem esses problemas?",
      "Isso acontece em casa, na escola e com os amigos?",
      "A criança tem idade entre 6 e 18 anos? Os sintomas começaram antes dos 10?",
      "Já teve algum período de mais de 1 dia em que o humor estava muito elevado, com energia aumentada e pouca necessidade de sono?",
      "Os problemas acontecem SÓ quando ela está deprimida ou ansiosa?"
    ],
    "alerts": [],
    "source_trace": {
      "markdown_section": "### Transtorno DISRUPTIVO DA DESREGULAÇÃO DO HUMOR (TDDC)",
      "patches_applied": []
    },
    "category": "FULL",
    "ui_mode": "structured_full",
    "render_structured_interview": true
  },
  "sigla": "TDDH",
  "versao_complementar_existe": false,
  "inventario_clinico": {
    "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 296.99 (F34.8)",
    "estrutura_efetiva": "- **Estrutura efetiva:** Politetico — A (explosões de raiva recorrentes graves, desproporcionais) + B (inconsistentes com nivel de desenvolvimento) + C (>=3 explosões/semana em média) + D (humor persistentemente irritável/zangado entre explosões, maior parte do dia, quase todos os dias) + E (duracao >=12 meses, sem periodo livre >=3 meses) + F (presente em >=2 de 3 ambientes, grave em ao menos 1) + G (idade 6-18 anos) + H (inicio antes dos 10 anos) + I (nunca episodio maníaco/hipomaníaco >1 dia) + J (nao exclusivamente durante TDM, nao melhor explicado por outro transtorno) + K (nao por substancia/condicao médica)",
    "notas_clinicas": "- **Notas:** Diagnostico restrito a crianças/adolescentes (6-18 anos). Inicio antes dos 10. Nao coexiste com transtorno de oposicao desafiante, transtorno explosivo intermitente ou transtorno bipolar. Pode coexistir com TDM, TDAH, transtorno da conduta, transtornos por uso de substancia. Prevalencia estimada 2-5% em criancas/adolescentes. Predominancia masculina. Curso: irritabilidade cronica nao-episodica; risco futuro de transtornos depressivos unipolares e ansiedade (nao bipolar)."
  },
  "hierarquia_exclusao": {
    "exclui": [
      "transtorno_bipolar_tipo_1",
      "transtorno_bipolar_tipo_2"
    ],
    "exclui_de": [
      "transtorno_oposicao_desafiante",
      "transtorno_explosivo_intermitente"
    ],
    "notas_hierarquia": "TDDH tem precedência sobre TOD e transtorno explosivo intermitente quando critérios de ambos são satisfeitos. Não pode coexistir com transtorno bipolar."
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
