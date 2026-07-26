import { FobiaEspecificaSchema } from "./schema";

export const data = FobiaEspecificaSchema.parse({
  "$schema_version": "2.1.0",
  "meta": {
    "id": "fobia_especifica",
    "nome_completo": "Fobia Específica",
    "sigla": null,
    "codigo": {
      "dsm5": "300.29",
      "cid10": "F40.2",
      "cid11": "6B03"
    },
    "capitulo": "Transtornos de Ansiedade",
    "capitulo_id": "05",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "estrutura_geral": "monothetic_puro",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Medo ou ansiedade acerca de objeto ou situação",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Medo ou ansiedade acentuados sobre objeto/situação",
                "desc": "Medo ou ansiedade acentuados acerca de objeto ou situação específica (p. ex. , voar, alturas, animais, injeção, sangue). Em crianças: pode ser choro, ataques de raiva, imobilidade ou comportamento de agarrar-se.",
                "pergunta": "A pessoa tem medo intenso de alguma coisa específica, como animais, alturas, agulhas ou lugares fechados?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Pânico ao ver cobras",
                    "Terror ao entrar em elevador"
                ]
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    },
    {
        "id": "B",
        "nome": "Resposta imediata ao estímulo fóbico",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "B1",
                "rotulo": "Resposta imediata de medo/ansiedade ao estímulo",
                "desc": "O objeto ou situação fóbica quase invariavelmente provoca uma resposta imediata de medo ou ansiedade.",
                "pergunta": "Quando a pessoa se depara com esse objeto ou situação, sente medo imediatamente?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Ataque de pânico ao ver sangue"
                ]
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    },
    {
        "id": "C",
        "nome": "Esquiva ou tolerância com sofrimento intenso",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "C1",
                "rotulo": "Evitação ativa ou suportação com sofrimento intenso",
                "desc": "O objeto ou situação fóbica é ativamente evitado ou suportado com intensa ansiedade ou sofrimento.",
                "pergunta": "A pessoa evita esse objeto/situação ou suporta com muito sofrimento?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Recusa de viagens aéreas"
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
        "id": "desproporcional_contexto",
        "letra": "D",
        "rotulo": "Medo desproporcional ao perigo real",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Scale",
        "descricao_completa": "O medo ou ansiedade é desproporcional ao perigo real imposto pelo objeto/situação e ao contexto sociocultural.",
        "nota": null
    },
    {
        "id": "duracao_6meses",
        "letra": "E",
        "rotulo": "Duração ≥6 meses",
        "tipo": "temporal_duracao_tipica",
        "ui_widget": "campo_duracao_meses",
        "obrigatorio": true,
        "icone": "CalendarClock",
        "descricao_completa": "O medo, a ansiedade ou a esquiva é persistente, geralmente com duração de seis meses ou mais.",
        "nota": null
    },
    {
        "id": "sofrimento_funcional",
        "letra": "F",
        "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Frown",
        "descricao_completa": "O medo, ansiedade ou esquiva causa sofrimento clinicamente significativo ou prejuízo no funcionamento social, profissional ou outras áreas.",
        "nota": null
    },
    {
        "id": "exclusao_outros",
        "letra": "G",
        "rotulo": "Não melhor explicado por outro transtorno mental",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "A perturbação não é mais bem explicada pelos sintomas de outro transtorno mental, incluindo medo, ansiedade e esquiva de situações associadas a sintomas do tipo pânico ou outros sintomas incapacitantes; objetos ou situações relacionadas a obsessões; evocação de eventos traumáticos; separação de figuras de apego; ou situações sociais.",
        "nota": null,
        "ddx_sugeridos": [
            "agorafobia",
            "transtorno_obsessivo_compulsivo",
            "transtorno_estresse_pos_traumatico",
            "transtorno_ansiedade_separacao",
            "transtorno_ansiedade_social"
        ]
    }
],
  "subtipos": {
    "presente": true,
    "nome": "Tipo de estímulo",
    "mutuamente_exclusivos": false,
    "subtipos": [
      {
        "id": "animal",
        "codigo": {
          "dsm5": "300.29",
          "cid10": "F40.218",
          "cid11": null
        },
        "label": "Tipo animal",
        "descricao": "Medo de animais ou insetos.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "ambiente_natural",
        "codigo": {
          "dsm5": "300.29",
          "cid10": "F40.228",
          "cid11": null
        },
        "label": "Tipo ambiente natural",
        "descricao": "Medo de alturas, tempestades, água.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "sangue_injecao_ferimento",
        "codigo": {
          "dsm5": "300.29",
          "cid10": "F40.23x",
          "cid11": null
        },
        "label": "Tipo sangue-injeção-ferimento",
        "descricao": "Medo de sangue, ferimentos, agulhas, procedimentos médicos.",
        "sintomas_caracteristicos": [
          "Resposta vasovagal — desmaio"
        ]
      },
      {
        "id": "situacional",
        "codigo": {
          "dsm5": "300.29",
          "cid10": "F40.248",
          "cid11": null
        },
        "label": "Tipo situacional",
        "descricao": "Medo de aviões, elevadores, espaços fechados.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "outro",
        "codigo": {
          "dsm5": "300.29",
          "cid10": "F40.298",
          "cid11": null
        },
        "label": "Tipo outro",
        "descricao": "Outros estímulos (engasgar, vomitar, contrair doença, palhaços etc.).",
        "sintomas_caracteristicos": []
      }
    ],
      },
  "especificadores": [],
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "sem_especificador_de_gravidade",
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para fobia específica."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": "Múltiplas fobias específicas devem ser diagnosticadas — cada objeto/situação distinto recebe seu próprio código.",
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
      "relevante_para": "ambos"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Agorafobia",
      "ponto_distincao": "Agorafobia: medo de situações múltiplas por impossibilidade de escapar; fobia específica: objeto/situação único.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno de Ansiedade Social",
      "ponto_distincao": "TAS: situações de avaliação social; fobia específica: objeto/situação específico não vinculado à avaliação.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno de Estresse Pós-Traumático",
      "ponto_distincao": "TEPT: medo surge após trauma; fobia específica: estímulo fóbico não necessariamente relacionado a trauma.",
      "pertence_a_classe": false
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Outros transtornos de ansiedade",
      "frequencia": "alta",
      "nota": "Frequentemente múltiplas fobias coexistem."
    },
    {
      "condicao": "Transtorno Depressivo Maior",
      "frequencia": "moderada",
      "nota": null
    },
    {
      "condicao": "Transtorno por uso de substâncias",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "7–9% (prevalência de 12 meses); 13,2% (prevalência na vida)",
    "proporcao_sexo": "2:1 mulheres:homens; tipo sangue-injeção-ferimento: razão menor",
    "variacoes_culturais": "Taxas variam; medo de magia e espíritos em algumas culturas; não classificar se sancionado culturalmente.",
    "notas": "Prevalência decresce com a idade.",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Infância; tipo situacional: início mais tardio (~20 anos)",
    "trajetoria": "Início na infância frequentemente remite; quando persiste na adultícia raramente remite espontaneamente.",
    "prognostico": "Com tratamento (terapia de exposição), remissão em 80%+ dos casos.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "monothetic_tripartite",
        "criteria": [],
        "diagnostic_rule": "```\n(A OBJETO_ESPECIFICO) + (B QUASE_INVARIAVEL_IMEDIATO) + (C EVITA_OU_INTENSO) + (D DESPROPORCIONAL) + (E >=6M) + (F PREJUIZO) + (G NAO_OUTRO_TX)\n```",
        "clusters": [],
        "duration": "| >= 6 meses |",
        "age_onset": "| 7-11 anos (media ~10 anos); situacionais tem inicio mais tardio |",
        "functional_impairment": null,
        "exclusions": [],
        "specifiers": [],
        "operational_profiles": [],
        "critical_differentials": [],
        "key_questions": [
          "Tem medo intenso de algum objeto ou situacao especifica?",
          "O medo comeca imediatamente quando ve/encontra [estimulo]?",
          "Evita [estimulo] ou suporta com muito sofrimento?",
          "O medo e maior do que o perigo real justificaria?",
          "Ha quanto tempo isso dura?",
          "O medo interfere na sua vida?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### Fobia Especifica",
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
    "fonte_capitulo_md": "05_transtornos_ansiedade.md",
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
    "estrutura_efetiva": "- **Estrutura efetiva:** A (medo/ansiedade) + B (resposta imediata) + C (evitacao/sofrimento) + D (desproporcional) + E duracao + F funcional + G exclusao",
    "notas_clinicas": "- **Notas:**"
  },
  
});
export type DisorderData = typeof data;
