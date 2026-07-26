import { TpObsessivoCompulsivoSchema } from "./schema";

export const data = TpObsessivoCompulsivoSchema.parse({
  "$schema_version": "1.0.0",
  "meta": {
    "id": "tp_obsessivo_compulsivo",
    "nome_completo": "Transtorno da Personalidade Obsessivo-Compulsiva",
    "sigla": "TPOC",
    "codigo": {
      "dsm5": "301.4",
      "cid10": "F60.5",
      "cid11": "6D10"
    },
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "18",
    "grupo": "Cluster C",
    "faixa_etaria_alvo": "adulto",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
      "id": "A",
      "nome": "Preocupação com Ordem, Perfeccionismo e Controle",
      "tipo": "polythetic_com_limiar",
      "limiar": {
        "adulto": 4,
        "pediatria": null
      },
      "ancora_obrigatoria": null,
      "sintomas": [
        {
          "id": "A1",
          "rotulo": "Preocupação excessiva com detalhes, regras e ordem",
          "desc": "É tão preocupado com detalhes, regras, listas, ordem, organização ou horários a ponto de o objetivo principal da atividade ser perdido.",
          "pergunta": "Você é tão preocupado com detalhes, regras, listas e organização que acaba perdendo o objetivo principal das atividades?",
          "exemplos_clinicos": [
            "Gastar tempo excessivo procurando lista em vez de refazê-la"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A2",
          "rotulo": "Perfeccionismo que interfere na conclusão de tarefas",
          "desc": "Demonstra perfeccionismo que interfere na conclusão de tarefas (não consegue completar projeto porque seus padrões rígidos não são atingidos).",
          "pergunta": "Seu perfeccionismo é tão rígido que interfere na conclusão de tarefas ou projetos?",
          "exemplos_clinicos": [
            "Relatório nunca concluído por reescritas infindáveis"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A3",
          "rotulo": "Dedicação excessiva ao trabalho em detrimento do lazer",
          "desc": "É excessivamente dedicado ao trabalho e à produtividade em detrimento de atividades de lazer e amizades (não explicado por necessidade financeira).",
          "pergunta": "Você é excessivamente dedicado ao trabalho e à produtividade, excluindo atividades de lazer e amizades, mesmo sem necessidade financeira?",
          "exemplos_clinicos": [
            "Postergar férias indefinidamente",
            "Transformar brincadeiras em tarefas estruturadas"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A4",
          "rotulo": "Excessivamente consciencioso e inflexível em moralidade",
          "desc": "É excessivamente consciencioso, escrupuloso e inflexível quanto a assuntos de moralidade, ética ou valores (não explicado por identificação cultural ou religiosa).",
          "pergunta": "Você é excessivamente rigoroso e inflexível em questões de moralidade, ética ou valores, além do que seria esperado por sua cultura ou religião?",
          "exemplos_clinicos": [
            "Não emprestar moeda a amigo por 'princípio'"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A5",
          "rotulo": "Incapaz de descartar objetos usados ou sem valor",
          "desc": "É incapaz de descartar objetos usados ou sem valor mesmo quando não têm valor sentimental.",
          "pergunta": "Você tem dificuldade em descartar objetos usados ou sem valor, mesmo quando não têm valor sentimental?",
          "exemplos_clinicos": [
            "Acumular peças e revistas antigas",
            "Objetos estragados"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A6",
          "rotulo": "Reluta em delegar tarefas",
          "desc": "Reluta em delegar tarefas ou trabalhar com outras pessoas a menos que elas se submetam à sua forma exata de fazer as coisas.",
          "pergunta": "Você reluta em delegar tarefas ou trabalhar com outras pessoas a menos que façam exatamente do seu jeito?",
          "exemplos_clinicos": [
            "Dar instruções detalhadas sobre como lavar pratos",
            "Rejeitar ajuda mesmo atrasado"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A7",
          "rotulo": "Estilo miserável de gastos",
          "desc": "Adota um estilo miserável de gastos em relação a si e a outros; o dinheiro é visto como algo a ser acumulado para futuras catástrofes.",
          "pergunta": "Você é excessivamente poupador ou mesquinho consigo mesmo e com outros, acumulando dinheiro para catástrofes futuras?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A8",
          "rotulo": "Rigidez e teimosia",
          "desc": "Exibe rigidez e teimosia.",
          "pergunta": "Você é rígido e teimoso, com dificuldade em concordar com ideias diferentes ou mudar de planos?",
          "exemplos_clinicos": [
            "Recusar ceder mesmo reconhecendo interesse próprio",
            "'É o princípio da coisa'"
          ],
          "faixa_aplicavel": null
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
  "criterios_condicionais": [],
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
    "tipo": "modelo_categorial_sem_graduacao",
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade obsessivo-compulsiva não recebe níveis formais de gravidade."
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
      "id": "trabalho",
      "label": "Desempenho Profissional",
      "icone": "Briefcase",
      "relevante_para": "adulto"
    },
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "relacoes",
      "label": "Relações Íntimas",
      "icone": "Heart",
      "relevante_para": "transversal"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno Obsessivo-Compulsivo (TOC)",
      "ponto_distincao": "TOC: obsessões e compulsões verdadeiras; TPOC: padrão de personalidade de ordem e controle.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno de Acumulação",
      "ponto_distincao": "Acumulação: acúmulo extremo representando perigo; TPOC: dificuldade em descartar sem sentimentalismo.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno da Personalidade Narcisista",
      "ponto_distincao": "Narcisista: acredita ter atingido perfeição; TPOC: autocrítico e perfeccionista.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno da Personalidade Esquizoide",
      "ponto_distincao": "Esquizoide: ausência fundamental de intimidade; TPOC: distanciamento por dedicação ao trabalho.",
      "pertence_a_classe": true
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtornos de ansiedade",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno obsessivo-compulsivo (TOC)",
      "frequencia": "moderada",
      "nota": "A maioria dos com TOC não tem TPOC"
    },
    {
      "condicao": "Transtornos depressivos e bipolares",
      "frequencia": "moderada",
      "nota": null
    },
    {
      "condicao": "Transtornos alimentares",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "2,1% a 7,9%",
    "proporcao_sexo": "Cerca de duas vezes mais em homens",
    "variacoes_culturais": "Culturas que enfatizam trabalho e produtividade não devem ser confundidas.",
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Início da vida adulta",
    "trajetoria": "Crônico; traços moderados podem ser adaptativos em contextos de alto desempenho.",
    "prognostico": "Dificuldade em novas situações que exijam flexibilidade.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  
  "metadados_globais": {
    "fonte_capitulo_md": "18_transtornos_personalidade.md",
    "fonte_inventario_md": null,
    "data_extracao": "2026-05-31",
    "modelo_agente": "claude-opus-4-7",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "id": "tp_obsessivo_compulsivo",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "rendering": {
    "estrutura_diagnostica": "polythetic_monocluster",
    "criteria": [
      "1. Preocupado com detalhes, regras, listas, ordem",
      "2. Perfeccionismo que interfere na conclusao",
      "3. Excessivamente dedicado ao trabalho em detrimento de lazer",
      "4. Consciencioso, escrupuloso, inflexivel quanto a moralidade",
      "5. Incapaz de descartar objetos sem valor",
      "6. Reluta em delegar a menos que submetam a sua forma",
      "7. Estilo miseravel de gastos",
      "8. Rigidez e teimosia"
    ],
    "diagnostic_rule": "Criterios gerais de TP (A-F) + >=4 de 8 criterios",
    "clusters": [
      "Preocupacao com Ordem",
      "Perfeccionismo",
      "Controle Mental e Interpessoal"
    ],
    "duration": "padrao persistente; tende a se tornar menos evidente com envelhecimento",
    "age_onset": "inicio vida adulta",
    "functional_impairment": "dificuldade em tomar decisoes; relacionamentos formais/artificiais; sofrimento quando exige flexibilidade",
    "exclusions": [
      "TOC",
      "transtorno de acumulacao",
      "narcisista",
      "esquizoide"
    ],
    "specifiers": [],
    "operational_profiles": [],
    "critical_differentials": [
      "TOC propriamente dito",
      "acumulacao",
      "narcisista",
      "esquizoide"
    ],
    "key_questions": [
      "Tao envolvido com detalhes que perde o objetivo?",
      "Dificuldade em terminar tarefas por perfeccionismo?",
      "Dedica tanto tempo ao trabalho que negligencia lazer?",
      "Excessivamente rigido com moralidade alem da cultura/religiao?",
      "Dificuldade em jogar fora coisas sem valor?",
      "Dificuldade em deixar outros fazerem do jeito deles?",
      "Poupado/mesquinho demais?",
      "Rigido ou teimoso demais?"
    ],
    "alerts": [
      "Distinguir de TOC: TPOC NAO tem obsessoes nem compulsoes ritualizadas",
      "Contexto cultural/religioso: normativa nao e patologica",
      "Tracos moderados podem ser adaptativos; patologia = inflexibilidade"
    ],
    "source_trace": {
      "markdown_section": "## 10. Transtorno da Personalidade Obsessivo-Compulsiva (TPOC)",
      "patches_applied": []
    },
    "category": "FULL",
    "ui_mode": "structured_full",
    "render_structured_interview": true
  },
  "inventario_clinico": {
    "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 301.4 / F60.5",
    "estrutura_efetiva": "- **Estrutura efetiva:** Padrao difuso de preocupacao com ordem, perfeccionismo e controle mental/interpessoal a custa de flexibilidade, abertura e eficiencia. Exige 4+ de 8 criterios: (1) preocupacao com detalhes/regras/listas/ordem a ponto de perder objetivo principal, (2) perfeccionismo que interfere na conclusao de tarefas, (3) dedicacao excessiva ao trabalho/produtividade em detrimento de lazer/amizades (sem necessidade financeira), (4) excessivamente consciencioso/escrupuloso/inflexivel quanto moralidade/etica/valores (sem explicacao cultural/religiosa), (5) incapaz de descartar objetos sem valor, (6) reluta em delegar tarefas, (7) estilo miseravel de gastos (acumula para catástrofes futuras), (8) rigidez e teimosia.",
    "notas_clinicas": "- **Notas:** Prevalencia: 2,1-7,9% (um dos mais prevalentes). Diagnosticado ~2x mais em homens. Diferenciar de TOC (TOC tem obsessões e compulsões verdadeiras; ambos podem ser diagnosticados simultaneamente). Diferenciar de transtorno de acumulacao (acumulacao extrema merece diagnostico separado; ambos podem coexistir). Comorbidade: transtornos de ansiedade (TAG, fobia social, fobias especificas), TOC, transtornos bipolares/depressivos, alimentares. Tracos tipo A (competitividade, urgencia temporal) podem estar presentes."
  },
  
    "enrichment_status": {
    "has_poor": true,
    "has_master": false,
    "has_inventory": true,
    "has_hierarchy": false,
    "has_cid11": true,
        "match_notes": {
      "poor": "id",
      "master": "missing",
      "inventario": "id",
      "hierarquia": "missing",
      "cid11": "id",
      "super": "id"
    }
  }
});
export type DisorderData = typeof data;
