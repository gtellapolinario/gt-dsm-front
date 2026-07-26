import { TpHistrionicoSchema } from "./schema";

export const data = TpHistrionicoSchema.parse({
  "$schema_version": "1.0.0",
  "meta": {
    "id": "tp_histrionico",
    "nome_completo": "Transtorno da Personalidade Histriônica",
    "sigla": "TPH",
    "codigo": {
      "dsm5": "301.50",
      "cid10": "F60.4",
      "cid11": "6D10"
    },
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "18",
    "grupo": "Cluster B",
    "faixa_etaria_alvo": "adulto",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
      "id": "A",
      "nome": "Emocionalidade e Busca de Atenção em Excesso",
      "tipo": "polythetic_com_limiar",
      "limiar": {
        "adulto": 5,
        "pediatria": null
      },
      "ancora_obrigatoria": null,
      "sintomas": [
        {
          "id": "A1",
          "rotulo": "Desconforto quando não é centro das atenções",
          "desc": "Desconforto em situações em que não é o centro das atenções.",
          "pergunta": "Você se sente desconfortável ou não valorizado quando não está no centro das atenções?",
          "exemplos_clinicos": [
            "Criar cena para atrair atenção"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A2",
          "rotulo": "Interação sexualmente sedutora ou provocativa inadequada",
          "desc": "A interação com os outros é frequentemente caracterizada por comportamento sexualmente sedutor inadequado ou provocativo.",
          "pergunta": "Você frequentemente interage com as pessoas de forma sexualmente sedutora ou provocativa, mesmo quando inapropriado ao contexto?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A3",
          "rotulo": "Mudanças rápidas e expressão superficial das emoções",
          "desc": "Exibe mudanças rápidas e expressão superficial das emoções.",
          "pergunta": "Suas emoções mudam rapidamente e parecem superficiais, ligando e desligando com muita velocidade?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A4",
          "rotulo": "Usa reiteradamente a aparência para atrair atenção",
          "desc": "Usa reiteradamente a aparência física para atrair a atenção para si.",
          "pergunta": "Você usa sua aparência física reiteradamente para chamar atenção, dedicando muito tempo a roupas e embelezamento?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A5",
          "rotulo": "Discurso excessivamente impressionista e carente de detalhes",
          "desc": "Tem um estilo de discurso que é excessivamente impressionista e carente de detalhes.",
          "pergunta": "Você tem um estilo de falar excessivamente impressionista, dramático, mas vago e carente de fatos específicos?",
          "exemplos_clinicos": [
            "Opiniões fortes sem exemplos concretos"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A6",
          "rotulo": "Autodramatização e expressão exagerada e teatral das emoções",
          "desc": "Mostra autodramatização, teatralidade e expressão exagerada das emoções.",
          "pergunta": "Você se dramatiza ou exibe emoções de forma teatral e exagerada, chamando a atenção em público?",
          "exemplos_clinicos": [
            "Choro inconsolável em ocasiões menores",
            "Abraços excessivos a conhecidos"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A7",
          "rotulo": "Sugestionável",
          "desc": "É sugestionável (i.e., facilmente influenciado pelos outros ou pelas circunstâncias).",
          "pergunta": "Você é facilmente influenciado por outras pessoas ou pelas circunstâncias, adotando opiniões rapidamente?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A8",
          "rotulo": "Considera relações mais íntimas do que na realidade são",
          "desc": "Considera as relações pessoais mais íntimas do que na realidade são.",
          "pergunta": "Você considera seus relacionamentos mais íntimos do que eles realmente são, tratando conhecidos casuais como amigos próximos?",
          "exemplos_clinicos": [
            "Chamar médico pelo primeiro nome após uma consulta"
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
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade histriônica não recebe níveis formais de gravidade."
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
    },
    {
      "id": "trabalho",
      "label": "Desempenho Profissional",
      "icone": "Briefcase",
      "relevante_para": "adulto"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno da Personalidade Borderline",
      "ponto_distincao": "Borderline: autodestrutividade, raiva nos relacionamentos íntimos, vazio crônico.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno da Personalidade Narcisista",
      "ponto_distincao": "Narcisista: busca admiração por superioridade; histriônico: busca atenção como fragilidade.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno da Personalidade Antissocial",
      "ponto_distincao": "Antissocial: manipulação para lucro/material; histriônico: manipulação para atenção.",
      "pertence_a_classe": true
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno de sintomas somáticos",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno conversivo",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno Depressivo Maior",
      "frequencia": "alta",
      "nota": null
    }
  ],
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "1,84%",
    "proporcao_sexo": "Diagnosticado mais em mulheres em contextos clínicos; taxas similares em estudos estruturados",
    "variacoes_culturais": "Normas culturais de expressão emocional e sedução devem ser consideradas.",
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
    "trajetoria": "Crônico; busca constante de novidades e excitação.",
    "prognostico": "Dificuldade em manter relacionamentos de longo prazo.",
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
  "id": "tp_histrionico",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "rendering": {
    "estrutura_diagnostica": "polythetic_monocluster",
    "criteria": [
      "1. Desconforto quando nao e centro das atencoes",
      "2. Interacao sexualmente sedutor/provocativa inadequada",
      "3. Mudancas rapidas e expressao superficial das emocoes",
      "4. Usa aparencia fisica para atrair atencao",
      "5. Discurso excessivamente impressionista, carente de detalhes",
      "6. Autodramatizacao, teatralidade",
      "7. Suggestionavel",
      "8. Considera relacoes mais intimas do que sao"
    ],
    "diagnostic_rule": "Criterios gerais de TP (A-F) + >=5 de 8 criterios",
    "clusters": [
      "Emocionalidade Excessiva",
      "Busca de Atencao"
    ],
    "duration": "padrao persistente e estavel",
    "age_onset": "inicio vida adulta",
    "functional_impairment": "dificuldade em intimidade emocional; relacionamentos superficiais",
    "exclusions": [
      "borderline",
      "antissocial",
      "narcisista",
      "dependente"
    ],
    "specifiers": [],
    "operational_profiles": [],
    "critical_differentials": [
      "borderline",
      "narcisista",
      "dependente"
    ],
    "key_questions": [
      "Desconfortavel quando nao esta no centro das atencoes?",
      "Comportamento sedutor/provocativo sem interesse romantico?",
      "Emocoes mudam rapidamente e parecem superficiais?",
      "Usa aparencia para chamar atencao?",
      "Dramatico, teatral, exagera nas emocoes?",
      "Facilmente influenciado?",
      "Relacionamentos mais intimos do que as outras pessoas pensam?"
    ],
    "alerts": [
      "Nao confundir extroversao ou estilo comunicativo com TPHist; contexto cultural essencial"
    ],
    "source_trace": {
      "markdown_section": "## 6. Transtorno da Personalidade Histrionica (TPHist)",
      "patches_applied": []
    },
    "category": "FULL",
    "ui_mode": "structured_full",
    "render_structured_interview": true
  },
  "inventario_clinico": {
    "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 301.50 / F60.4",
    "estrutura_efetiva": "- **Estrutura efetiva:** Padrao difuso de emocionalidade e busca de atencao em excesso. Exige 5+ de 8 criterios: (1) desconforto quando nao e centro das atencoes, (2) interacao com comportamento sexualmente sedutor inadequado, (3) mudancas rapidas e expressao superficial das emocoes, (4) usa aparencia fisica para atrair atencao, (5) discurso excessivamente impressionista sem detalhes, (6) autodramatizacao/teatralidade/expressao exagerada, (7) sugestionavel (facilmente influenciavel), (8) considera relacoes mais intimas do que sao.",
    "notas_clinicas": "- **Notas:** Prevalencia: 1,84% (NESARC). Mais diagnosticado em mulheres em contextos clinicos, mas estudos estruturados mostram taxas similares entre sexos. Comorbidade: TP borderline, narcisista, antissocial, dependente; transtorno de sintomas somaticos; transtorno conversivo; depressivo maior. Risco aumentado de gestos e ameacas suicidas para obter atencao."
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
