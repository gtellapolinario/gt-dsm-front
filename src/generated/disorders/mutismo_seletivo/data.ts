import { MutismoSeletivoSchema } from "./schema";

export const data = MutismoSeletivoSchema.parse({
  "$schema_version": "1.0.0",
  "meta": {
    "id": "mutismo_seletivo",
    "nome_completo": "Mutismo Seletivo",
    "sigla": null,
    "codigo": {
      "dsm5": "312.23",
      "cid10": "F94.0",
      "cid11": "6B06"
    },
    "capitulo": "Transtornos de Ansiedade",
    "capitulo_id": "05",
    "grupo": null,
    "faixa_etaria_alvo": "pediatria",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Afasia voluntária",
      "Mudismo eletivo"
    ]
  },
  "estrutura_geral": "monothetic_puro",
  "clusters_sintomas": [
    {
      "id": "A",
      "nome": "Falha Consistente em Falar em Situações Sociais",
      "tipo": "monothetic_obrigatorio",
      "limiar": null,
      "ancora_obrigatoria": null,
      "sintomas": [
        {
          "id": "A1",
          "rotulo": "Falha consistente em falar em situações sociais específicas",
          "desc": "Falha consistente em falar em situações sociais específicas nas quais é esperado falar (p.ex., escola), embora fale em outras situações.",
          "pergunta": "A criança fala normalmente em casa mas se recusa ou falha em falar na escola ou com outros adultos?",
          "exemplos_clinicos": [
            "Fala em casa mas não na escola",
            "Usa gestos e sinais na escola"
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
      "id": "interferencia_educacional_social",
      "letra": "B",
      "rotulo": "Interfere em realizações educacionais/sociais",
      "tipo": "prejuizo_funcional",
      "ui_widget": "toggle_com_justificativa_obrigatoria",
      "obrigatorio": true,
      "icone": "CircleAlert",
      "ddx_sugeridos": [],
      "descricao_completa": "A perturbação interfere nas realizações educacionais ou profissionais ou na comunicação social.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "duracao_1mes",
      "letra": "C",
      "rotulo": "Duração ≥1 mês (não apenas o 1º mês de escola)",
      "tipo": "temporal_duracao_minima",
      "ui_widget": "campo_duracao_meses",
      "obrigatorio": true,
      "icone": "Calendar",
      "ddx_sugeridos": [],
      "descricao_completa": "A duração é de pelo menos 1 mês (não limitada ao primeiro mês de escola).",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_idioma",
      "letra": "D",
      "rotulo": "Não devido a desconhecimento da língua",
      "tipo": "exclusao_diagnostica",
      "ui_widget": "toggle_simples",
      "obrigatorio": true,
      "icone": "Ban",
      "ddx_sugeridos": [],
      "descricao_completa": "A falha em falar não se deve ao fato de o indivíduo não conhecer ou estar confortável com a língua falada nas situações sociais.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_transtorno_comunicacao",
      "letra": "E",
      "rotulo": "Não melhor explicado por transtorno de comunicação ou psi...",
      "tipo": "exclusao_diagnostica",
      "ui_widget": "select_multiplos_ddx",
      "obrigatorio": true,
      "icone": "Ban",
      "ddx_sugeridos": [
        "transtorno_linguagem",
        "gagueira",
        "tea",
        "esquizofrenia"
      ],
      "descricao_completa": "Não é mais bem explicado por transtorno de comunicação, nem ocorre exclusivamente em TEA, esquizofrenia ou outro transtorno psicótico.",
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
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para mutismo seletivo."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": null,
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
      "id": "social",
      "label": "Comunicação Social",
      "icone": "Users",
      "relevante_para": "pediatria"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtornos da comunicação",
      "ponto_distincao": "Mutismo Seletivo: perturbação restrita a situação social específica; transtornos de comunicação: presentes em todos os contextos.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno de Ansiedade Social",
      "ponto_distincao": "Ambos coexistem frequentemente; se satisfeitos os critérios de ambos, ambos os diagnósticos devem ser dados.",
      "pertence_a_classe": true
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno de Ansiedade Social",
      "frequencia": "alta",
      "nota": "Comorbidade mais frequente."
    },
    {
      "condicao": "Transtorno de Ansiedade de Separação",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Fobia Específica",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "0,03–1% (estimativa variável por contexto clínico vs. escolar vs. comunitário)",
    "proporcao_sexo": "Sem variação significativa por sexo ou raça/etnia documentada",
    "variacoes_culturais": "Crianças de famílias imigrantes podem se recusar a falar em nova língua — avaliar antes de diagnosticar.",
    "notas": "Mais frequente em crianças menores que em adolescentes/adultos.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Usualmente antes dos 5 anos; atenção clínica surge na entrada escolar",
    "trajetoria": "Muitos superam o mutismo seletivo; ansiedade social pode persistir mesmo após remissão.",
    "prognostico": "Variável; história natural pouco estudada.",
    "metadados": {
      "completo": false,
      "lacunas": [
        "dados_prognostico_longo_prazo"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  
  "metadados_globais": {
    "fonte_capitulo_md": "05_transtornos_ansiedade.md",
    "fonte_inventario_md": null,
    "data_extracao": "2026-05-31",
    "modelo_agente": "antigravity-gemini",
    "lacunas_globais": [
      "herdabilidade",
      "prognostico_longo_prazo"
    ],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "id": "mutismo_seletivo",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "rendering": {
    "estrutura_diagnostica": "monothetic_puro",
    "criteria": [],
    "diagnostic_rule": "```\n(A FALHA_FALA_SITUACOES_ESPECIFICAS) + (B INTERFERENCIA) + (C >=1_MES) + (D NAO_IDIOMA) + (E NAO_OUTRO_TX)\n```",
    "clusters": [],
    "duration": "| >= 1 mes |",
    "age_onset": "| Parametro | Valor |",
    "functional_impairment": null,
    "exclusions": [],
    "specifiers": [],
    "operational_profiles": [],
    "critical_differentials": [],
    "key_questions": [
      "A crianca fala em casa com a familia?",
      "Fala com amigos da escola ou professores?",
      "O fracasso em falar dura mais de um mes?",
      "Nao se deve a desconhecimento do idioma?",
      "Nao e explicado por gagueira, atraso de linguagem ou autismo?",
      "A crianca usa outros meios para se comunicar? (gestos, apontar, escrever)"
    ],
    "alerts": [],
    "source_trace": {
      "markdown_section": "### Mutismo Seletivo",
      "patches_applied": []
    },
    "category": "FULL",
    "ui_mode": "structured_full",
    "render_structured_interview": true
  },
  "versao_complementar_existe": false,
  "inventario_clinico": {
    "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 313.23 (F94.0)",
    "estrutura_efetiva": "- **Estrutura efetiva:** A (fracao persistente em falar) + B funcional + C duracao + D exclusao idioma + E exclusao outro transtorno",
    "notas_clinicas": "- **Notas:**"
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
});
export type DisorderData = typeof data;
