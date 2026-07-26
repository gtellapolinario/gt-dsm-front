import { TranstornoLinguagemSchema } from "./schema";

export const data = TranstornoLinguagemSchema.parse({
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_linguagem",
    "nome_completo": "Transtorno da Linguagem",
    "sigla": null,
    "codigo": {
      "dsm5": "315.32",
      "cid10": "F80.2",
      "cid11": "6A01"
    },
    "capitulo": "Transtornos do Neurodesenvolvimento",
    "capitulo_id": "01",
    "grupo": "Transtornos da Comunicação",
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Afasia do desenvolvimento",
      "Disfasia"
    ]
  },
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
      "id": "A",
      "nome": "Dificuldades Persistentes na Aquisição e Uso da Linguagem",
      "tipo": "polythetic_com_limiar",
      "limiar": {
        "adulto": 3,
        "pediatria": 3
      },
      "ancora_obrigatoria": null,
      "sintomas": [
        {
          "id": "A1",
          "rotulo": "Vocabulário reduzido",
          "desc": "Extensão e uso do vocabulário abaixo do esperado para a idade cronológica.",
          "pergunta": "A criança apresenta um vocabulário muito restrito, demonstrando dificuldade em nomear objetos conhecidos ou expressar ideias?",
          "exemplos_clinicos": [
            "Dificuldade em lembrar palavras comuns",
            "Uso excessivo de termos genéricos como 'coisa' ou 'negócio'"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A2",
          "rotulo": "Estrutura frasal limitada",
          "desc": "Dificuldade em combinar palavras para formar frases gramaticalmente corretas e estruturadas.",
          "pergunta": "Há dificuldades evidentes em formar frases longas, omitindo conectivos, verbos ou preposições de forma recorrente?",
          "exemplos_clinicos": [
            "Falar de forma telegráfica",
            "Erros graves na conjugação de verbos infantis comuns"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A3",
          "rotulo": "Prejuízos no discurso",
          "desc": "Dificuldades em conectar frases para explicar ou descrever um tópico ou manter uma conversação.",
          "pergunta": "A pessoa demonstra grande dificuldade em contar uma história simples ou relatar um acontecimento cotidiano de maneira lógica?",
          "exemplos_clinicos": [
            "Discurso desorganizado e sem coesão temporal",
            "Dificuldade extrema em responder perguntas consecutivas sobre o mesmo assunto"
          ],
          "faixa_aplicavel": null
        }
      ],
      "descricao_qualitativa": "Dificuldades persistentes nas modalidades falada, escrita, de sinais ou outras, devido a déficits de compreensão ou produção.",
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
      "id": "habilidades_abaixo",
      "letra": "B",
      "rotulo": "Habilidades de linguagem significativamente abaixo do esperado",
      "tipo": "temporal_idade_inicio",
      "ui_widget": "toggle_simples",
      "obrigatorio": true,
      "icone": "ChartLine",
      "ddx_sugeridos": [],
      "descricao_completa": "As capacidades de linguagem estão substancial e quantificavelmente abaixo do esperado para a idade, resultando em limitações no funcionamento interpessoal e acadêmico.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "inicio_precoce",
      "letra": "C",
      "rotulo": "Início no período inicial do desenvolvimento",
      "tipo": "temporal_idade_inicio",
      "ui_widget": "toggle_simples",
      "obrigatorio": true,
      "icone": "Clock",
      "ddx_sugeridos": [],
      "descricao_completa": "Os sintomas surgem no período inicial do desenvolvimento.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_outros",
      "letra": "D",
      "rotulo": "Dificuldades não atribuíveis a outras condições",
      "tipo": "temporal_idade_inicio",
      "ui_widget": "toggle_simples",
      "obrigatorio": true,
      "icone": "HeartPulse",
      "ddx_sugeridos": [
        "deficiencia_intelectual"
      ],
      "descricao_completa": "As dificuldades não são atribuíveis a deficiência auditiva ou sensorial, disfunção motora ou outra condição médica/neurológica.",
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
    "mutuamente_exclusivos": false,
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
    "lembrete_aplicador": "O DSM-5-TR não estabelece níveis formais de gravidade para transtorno da linguagem."
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
      "id": "comunicacao",
      "label": "Comunicação Efetiva",
      "icone": "Megaphone",
      "relevante_para": "ambos"
    },
    {
      "id": "social",
      "label": "Socialização",
      "icone": "Users",
      "relevante_para": "ambos"
    },
    {
      "id": "academico",
      "label": "Participação Acadêmica/Profissional",
      "icone": "BookOpen",
      "relevante_para": "ambos"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno do Espectro Autista",
      "ponto_distincao": "TEA inclui necessariamente padrões repetitivos e restritivos de comportamento, os quais estão ausentes no Transtorno da Linguagem.",
      "pertence_a_classe": true
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno Específico da Aprendizagem",
      "frequencia": "alta",
      "nota": "Forte associação com dificuldades de leitura e escrita futuras."
    }
  ],
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "Ocorre em aproximadamente 7% a 8% das crianças em idade escolar.",
    "proporcao_sexo": "Mais frequente em meninos.",
    "variacoes_culturais": null,
    "notas": null,
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
    "idade_inicio_tipica": "4 anos (onde o diagnóstico se torna estável)",
    "trajetoria": "Crianças com atrasos puramente expressivos têm melhor prognóstico que aquelas com atrasos mistos (receptivo-expressivos).",
    "prognostico": "Dificuldades que persistem após os 4 anos tendem a ser crônicas na vida adulta.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  
  "metadados_globais": {
    "fonte_capitulo_md": "01_transtornos_neurodesenvolvimento.md",
    "fonte_inventario_md": "inventario/01_inventario.md",
    "data_extracao": "2026-05-21",
    "modelo_agente": "antigravity-ide",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "revisao_humana_necessaria": false,
    "notas_agente_globais": null
  },
  "id": "transtorno_linguagem",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "rendering": {
    "estrutura_diagnostica": "polythetic_monocluster",
    "criteria": [
      "A. Dificuldades persistentes na aquisicao e uso da linguagem (falada, escrita, sinais) devido a deficits na compreensao ou producao:",
      "B. Capacidades linguisticas substancial e quantificavelmente abaixo do esperado para a idade, resultando em limitacoes funcionais na comunicacao efetiva, participacao social, sucesso academico ou desempenho profissional.",
      "C. Inicio precoce no periodo do desenvolvimento.",
      "D. Dificuldades NAO atribuiveis a: deficiencia auditiva/outro prejuizo sensorial, disfuncao motora, outra condicao medica/neurologica, deficiencia intelectual ou atraso global do desenvolvimento."
    ],
    "diagnostic_rule": ">=1 dos 3 subitens de A + B + C + D. Avaliar capacidades expressiva E receptiva (podem diferir em gravidade).",
    "clusters": [],
    "duration": null,
    "age_onset": null,
    "functional_impairment": "- Limitacoes na comunicacao efetiva, participacao social, sucesso academico ou desempenho profissional",
    "exclusions": [],
    "specifiers": [],
    "operational_profiles": [],
    "critical_differentials": [],
    "key_questions": [
      "Houve atraso na aquisicao das primeiras palavras/combinacoes de palavras?",
      "O vocabulario e reduzido ou menos variado que o dos pares?",
      "As frases sao mais curtas, menos complexas, com erros gramaticais?",
      "Ha dificuldades para compreender instrucoes (especialmente com multiplas etapas)?",
      "Ha prejuizo no discurso (narrar, explicar, conversar)?",
      "Ha diferenca entre compreensao (receptiva) e fala (expressiva)?",
      "As dificuldades causam limitacoes funcionais (social, academico, profissional)?",
      "Os sintomas comecaram precoce no desenvolvimento?"
    ],
    "alerts": [],
    "source_trace": {
      "markdown_section": "### Transtorno da Linguagem",
      "patches_applied": []
    },
    "category": "FULL",
    "ui_mode": "structured_full",
    "render_structured_interview": true
  },
  "grupo": "Transtornos da Comunicação",
  "versao_complementar_existe": false,
  "inventario_clinico": {
    "codigo_bruto": "- **Código DSM-5 / CID-10:** 315.32 (F80.2)",
    "estrutura_efetiva": "- **Estrutura efetiva:** **A** polietético monocluster (pelo menos 3 sintomas de dificuldades de aquisição/uso da linguagem entre os listados) + **B** prejuízo funcional + **C** início no desenvolvimento + **D** exclusão (não atribuível a outra condição).",
    "notas_clinicas": "- **Notas:** Não tem subtipos formais. Diferencia-se de transtorno da fala (fonologia) pelo comprometimento mais amplo da linguagem."
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
