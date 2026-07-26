import { TranstornoEspecificoAprendizagemSchema } from "./schema";

export const data = TranstornoEspecificoAprendizagemSchema.parse({
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_especifico_aprendizagem",
    "nome_completo": "Transtorno Específico da Aprendizagem",
    "sigla": null,
    "codigo": {
      "dsm5": "315.00",
      "cid10": "F81.0",
      "cid11": "6A03"
    },
    "capitulo": "Transtornos do Neurodesenvolvimento",
    "capitulo_id": "01",
    "grupo": "Transtorno Específico da Aprendizagem",
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Dislexia",
      "Discalculia",
      "Disgrafia"
    ]
  },
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
      "id": "A",
      "nome": "Dificuldades na Aprendizagem e no Uso de Habilidades Acadêmicas",
      "tipo": "polythetic_com_limiar",
      "limiar": {
        "adulto": 1,
        "pediatria": 1
      },
      "ancora_obrigatoria": null,
      "sintomas": [
        {
          "id": "A1",
          "rotulo": "Leitura de palavras imprecisa ou lenta",
          "desc": "Dificuldade na leitura de palavras de forma imprecisa ou lenta e hesitante (lê palavras isoladas em voz alta incorretamente ou de forma lenta e hesitante).",
          "pergunta": "Você ou a criança lê de forma silabada, hesitante ou comete erros frequentes trocando letras na leitura de palavras?",
          "exemplos_clinicos": [
            "Leitura excessivamente lenta para a idade",
            "Adivinhar palavras pelo contexto gráfico"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A2",
          "rotulo": "Dificuldade para compreender o sentido do que é lido",
          "desc": "Dificuldade para compreender o sentido da leitura (lê o texto com precisão, mas não compreende a sequência, a lógica ou o significado do texto).",
          "pergunta": "Ao terminar de ler uma página, é difícil lembrar ou explicar o que acabou de ler?",
          "exemplos_clinicos": [
            "Ler um parágrafo e não conseguir responder perguntas sobre ele",
            "Dificuldade em reter detalhes lidos"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A3",
          "rotulo": "Dificuldades com a ortografia",
          "desc": "Dificuldade com a ortografia (pode omitir, acrescentar ou substituir letras de forma inadequada).",
          "pergunta": "A escrita apresenta muitos erros ortográficos primários, mesmo após anos de treinamento escolar?",
          "exemplos_clinicos": [
            "Trocar 'v' por 'f' ou 'b' por 'p' de forma persistente na adolescência",
            "Escrita sem regras ortográficas básicas"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A4",
          "rotulo": "Dificuldades com a expressão escrita",
          "desc": "Erros graves de gramática, pontuação, organização frasal de parágrafos pobre ou falta de clareza na expressão de ideias por escrito.",
          "pergunta": "Há sérias dificuldades em estruturar um texto escrito, com erros de pontuação graves ou ideias desorganizadas?",
          "exemplos_clinicos": [
            "Parágrafos sem coesão gramatical",
            "Incômodo grave em realizar redações de qualquer tipo"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A5",
          "rotulo": "Dificuldades em dominar o sentido numérico",
          "desc": "Pobre compreensão de números, sua magnitude e relações, conta nos dedos para somar um dígito só.",
          "pergunta": "Fazer cálculos matemáticos simples de cabeça ou compreender conceitos numéricos básicos é extremamente difícil?",
          "exemplos_clinicos": [
            "Uso de dedos para somas triviais na adolescência",
            "Incompreensão de estimativas de valores numéricos"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A6",
          "rotulo": "Dificuldades no raciocínio matemático",
          "desc": "Dificuldade extrema em aplicar conceitos, fatos ou fórmulas matemáticas para resolver problemas quantitativos.",
          "pergunta": "Problemas matemáticos de lógica ou situações cotidianas com cálculos causam grande bloqueio?",
          "exemplos_clinicos": [
            "Incapacidade de resolver problemas matemáticos básicos de livros escolares",
            "Bloqueio completo com equações simples"
          ],
          "faixa_aplicavel": null
        }
      ],
      "descricao_qualitativa": "Presença de pelo menos 1 dos 6 sintomas por no mínimo 6 meses, a despeito da provisão de intervenções dirigidas.",
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
      "id": "abaixo_da_media",
      "letra": "B",
      "rotulo": "Habilidades muito abaixo do esperado",
      "tipo": "temporal_idade_inicio",
      "ui_widget": "toggle_simples",
      "obrigatorio": true,
      "icone": "ChartColumn",
      "ddx_sugeridos": [],
      "descricao_completa": "As habilidades acadêmicas afetadas estão substancial e quantificavelmente abaixo do esperado para a idade cronológica e causam interferência no desempenho.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "manifesto_escolar",
      "letra": "C",
      "rotulo": "Início nos anos escolares",
      "tipo": "temporal_idade_inicio",
      "ui_widget": "toggle_simples",
      "obrigatorio": true,
      "icone": "GraduationCap",
      "ddx_sugeridos": [],
      "descricao_completa": "As dificuldades de aprendizagem iniciam-se durante os anos escolares, mas podem não se manifestar plenamente até que as exigências ultrapassem a capacidade limitada.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "nao_explicado_neurologico",
      "letra": "D",
      "rotulo": "Não explicado por outras causas",
      "tipo": "temporal_idade_inicio",
      "ui_widget": "toggle_simples",
      "obrigatorio": true,
      "icone": "EyeOff",
      "ddx_sugeridos": [
        "deficiencia_intelectual"
      ],
      "descricao_completa": "Não são mais bem explicadas por deficiências intelectuais, acuidade visual ou auditiva não corrigida, outros transtornos mentais ou neurológicos.",
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
  "especificadores": [
    {
      "id": "com_prejuizo_leitura",
      "nome": "Com prejuízo na leitura (Dislexia)",
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
      "id": "com_prejuizo_expressao_escrita",
      "nome": "Com prejuízo na expressão escrita",
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
      "id": "com_prejuizo_matematica",
      "nome": "Com prejuízo na matemática (Discalculia)",
      "tipo": "booleano",
      "ortogonal": true,
      "opcoes": [],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    }
  ],
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "transtorno",
    "tipo": "extensao_das_dificuldades_e_necessidade_de_apoio",
    "lembrete_aplicador": "Considere a extensão das dificuldades acadêmicas e a intensidade do apoio necessário.",
    "niveis": [
        {
            "id": "leve",
            "label": "Leve",
            "descritor": "Algumas dificuldades em uma ou duas áreas acadêmicas, compensáveis com adaptações ou apoio."
        },
        {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "Dificuldades acentuadas em uma ou mais áreas, exigindo ensino intensivo e apoio durante parte do tempo."
        },
        {
            "id": "grave",
            "label": "Grave",
            "descritor": "Dificuldades graves em várias áreas, exigindo ensino individualizado, especializado e contínuo."
        }
    ],
    "regra_atribuicao": "Integre extensão das dificuldades, resposta às intervenções e necessidade de apoio especializado."
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
      "id": "leitura",
      "label": "Habilidade de Leitura",
      "icone": "BookOpen",
      "relevante_para": "ambos"
    },
    {
      "id": "escrita",
      "label": "Habilidade de Escrita",
      "icone": "PenTool",
      "relevante_para": "ambos"
    },
    {
      "id": "calculo",
      "label": "Cálculo e Matemática",
      "icone": "Calculator",
      "relevante_para": "ambos"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Deficiência Intelectual",
      "ponto_distincao": "Na DI, as dificuldades são globais e proporcionais ao QI baixo, enquanto no Transtorno da Aprendizagem as dificuldades ocorrem em áreas acadêmicas específicas, estando o QI geral preservado.",
      "pertence_a_classe": true
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "TDAH",
      "frequencia": "alta",
      "nota": "Frequente em crianças que demonstram tanto impulsividade escolar quanto atrasos específicos."
    }
  ],
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "5% a 15% entre crianças em idade escolar e aproximadamente 4% em adultos.",
    "proporcao_sexo": "Mais comum em indivíduos do sexo masculino.",
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
    "idade_inicio_tipica": "Anos escolares (frequentemente 6 a 8 anos)",
    "trajetoria": "Persiste até a idade adulta com dificuldades na velocidade de leitura, escrita acadêmica ou cálculos práticos, embora estratégias adaptativas amenizem o impacto prático.",
    "prognostico": "Altamente dependente de diagnóstico precoce e intervenção psicopedagógica intensiva.",
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
  "id": "transtorno_especifico_aprendizagem",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "rendering": {
    "estrutura_diagnostica": "polythetic_monocluster",
    "criteria": [
      "A. Dificuldades na aprendizagem e no uso de habilidades academicas, com pelo menos 1 dos seguintes sintomas por pelo menos 6 meses, apesar de intervencoes:",
      "B. Habilidades academicas afetadas substancial e quantitativamente abaixo do esperado para a idade, causando interferencia significativa no desempenho academico/profissional ou atividades diarias, confirmado por medidas padronizadas e avaliacao clinica. (Para 17+ anos, historia documentada pode substituir avaliacao padronizada.)",
      "C. Dificuldades iniciam-se durante os anos escolares (podem nao se manifestar ate demandas excederem capacidades).",
      "D. Dificuldades NAO explicadas por: deficiencia intelectual, acuidade visual/auditiva nao corrigida, outros transtornos mentais/neurologicos, adversidade psicossocial, falta de proficiencia na lingua de instrucao, ou instrucao educacional inadequada."
    ],
    "diagnostic_rule": ">=1 sintoma do Criterio A (A1-A6) + B + C + D. Todos os 4 criterios obrigatorios. Síntese clinica baseada em historia, relatos escolares e avaliacao psicoeducacional.",
    "clusters": [],
    "duration": null,
    "age_onset": null,
    "functional_impairment": null,
    "exclusions": [],
    "specifiers": [],
    "operational_profiles": [],
    "critical_differentials": [],
    "key_questions": [
      "Ha dificuldades persistentes em ler (precisao, fluencia, compreensao)?",
      "Ha dificuldades de ortografia/escrita (erros gramaticais, organizacao fraca)?",
      "Ha dificuldades com numeros, calculos, matematica?",
      "O desempenho esta substancialmente abaixo do esperado para a idade?",
      "As dificuldades comecaram nos anos escolares?",
      "Ha evidencia de testes padronizados confirmando desempenho baixo?",
      "As dificuldades persistem apesar de intervencoes adequadas?",
      "Nao sao explicadas por QI baixo, problemas sensoriais, ou falta de educacao?"
    ],
    "alerts": [],
    "source_trace": {
      "markdown_section": "### Transtorno Especifico da Aprendizagem",
      "patches_applied": []
    },
    "category": "FULL",
    "ui_mode": "structured_full",
    "render_structured_interview": true
  },
  "grupo": "Transtorno Específico da Aprendizagem",
  "versao_complementar_existe": false,
  "inventario_clinico": {
    "codigo_bruto": "- **Código DSM-5 / CID-10:** 315.00 (F81.0) Leitura / 315.2 (F81.81) Expressão escrita / 315.1 (F81.2) Matemática",
    "estrutura_efetiva": "- **Estrutura efetiva:** **A** polietético monocluster (≥1 de 6 sintomas em dificuldades acadêmicas: leitura imprecisa/lenta, compreensão deficiente, ortografia, expressão escrita, números, raciocínio matemático) + **B** performance acadêmica abaixo do esperado (teste padronizado) + **C** início no desenvolvimento + **D** exclusão. Especificadores de domínio: leitura, expressão escrita, matemática — cada um com sub-habilidades.",
    "notas_clinicas": "- **Notas:** Um mesmo indivíduo pode ter todos os 3 domínios. Prevalência 5-15% crianças. \"Dislexia\" e \"discalculia\" são termos alternativos. Domínios não são mutuamente exclusivos."
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
