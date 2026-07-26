import { TpDependenteSchema } from "./schema";

export const data = TpDependenteSchema.parse({
  "$schema_version": "1.0.0",
  "meta": {
    "id": "tp_dependente",
    "nome_completo": "Transtorno da Personalidade Dependente",
    "sigla": "TPD",
    "codigo": {
      "dsm5": "301.6",
      "cid10": "F60.7",
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
      "nome": "Necessidade Excessiva de Ser Cuidado",
      "tipo": "polythetic_com_limiar",
      "limiar": {
        "adulto": 5,
        "pediatria": null
      },
      "ancora_obrigatoria": null,
      "sintomas": [
        {
          "id": "A1",
          "rotulo": "Dificuldade em tomar decisões sem conselhos excessivos",
          "desc": "Tem dificuldades em tomar decisões cotidianas sem uma quantidade excessiva de conselhos e reasseguramento de outros.",
          "pergunta": "Você tem grande dificuldade em tomar decisões cotidianas sem conselhos e reasseguramentos excessivos de outras pessoas?",
          "exemplos_clinicos": [
            "Dúvida sobre cor de camisa ou levar guarda-chuva"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A2",
          "rotulo": "Precisa que outros assumam responsabilidade por sua vida",
          "desc": "Precisa que outros assumam responsabilidade pela maior parte das principais áreas de sua vida.",
          "pergunta": "Você precisa que outras pessoas assumam a responsabilidade pela maior parte das áreas importantes da sua vida?",
          "exemplos_clinicos": [
            "Dependência de pai/mãe ou cônjuge para decisões de moradia e trabalho"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A3",
          "rotulo": "Dificuldade em manifestar desacordo por medo de perder apoio",
          "desc": "Tem dificuldades em manifestar desacordo com outros devido a medo de perder apoio ou aprovação.",
          "pergunta": "Você tem dificuldade em discordar de outras pessoas por medo de perder o apoio ou aprovação delas?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A4",
          "rotulo": "Dificuldade em iniciar projetos por falta de autoconfiança",
          "desc": "Apresenta dificuldade em iniciar projetos ou fazer coisas por conta própria devido mais a falta de autoconfiança do que a falta de motivação.",
          "pergunta": "Você tem dificuldade para iniciar projetos ou fazer coisas sozinho por falta de confiança em seu julgamento ou capacidades?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A5",
          "rotulo": "Vai a extremos para obter carinho e apoio",
          "desc": "Vai a extremos para obter carinho e apoio de outros, a ponto de voluntariar-se para fazer coisas desagradáveis.",
          "pergunta": "Você vai a extremos para conseguir carinho e apoio, chegando a se voluntariar para tarefas desagradáveis?",
          "exemplos_clinicos": [
            "Tolerar abuso para manter vínculo"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A6",
          "rotulo": "Desconfortável ou desamparado quando sozinho",
          "desc": "Sente-se desconfortável ou desamparado quando sozinho devido a temores exagerados de ser incapaz de cuidar de si mesmo.",
          "pergunta": "Você se sente desconfortável ou desamparado quando está sozinho por medo excessivo de não conseguir cuidar de si?",
          "exemplos_clinicos": [
            "Grudar-se em outros apenas para evitar solidão"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A7",
          "rotulo": "Busca urgentemente novo relacionamento após término",
          "desc": "Busca com urgência outro relacionamento como fonte de cuidado e amparo logo após o término de um relacionamento íntimo.",
          "pergunta": "Logo após o término de um relacionamento íntimo, você busca urgentemente outro relacionamento para obter cuidado e apoio?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A8",
          "rotulo": "Preocupações irreais com medos de ser abandonado",
          "desc": "Tem preocupações irreais com medos de ser abandonado à própria sorte.",
          "pergunta": "Você tem preocupações excessivas e irreais com o medo de ser abandonado à própria sorte?",
          "exemplos_clinicos": [],
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
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade dependente não recebe níveis formais de gravidade."
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
    },
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": "transversal"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno da Personalidade Borderline",
      "ponto_distincao": "Borderline: reage ao abandono com raiva e vazio; dependente: reage com submissão e busca por novo relacionamento.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno da Personalidade Histriônica",
      "ponto_distincao": "Histriônica: exibicionismo sociável e demanda ativa de atenção; dependente: retraimento e comportamento dócil.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno depressivo ou de pânico",
      "ponto_distincao": "Dependência pode ser decorrente de outro transtorno mental e deve ser diferenciada.",
      "pertence_a_classe": false
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtornos depressivos",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtornos de ansiedade",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno de adaptação",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "0,49% a 0,6%",
    "proporcao_sexo": "Diagnosticado mais em mulheres em contextos clínicos; alguns estudos mostram taxas similares",
    "variacoes_culturais": "Ênfase em passividade e deferência em algumas culturas não deve ser confundida com TPD.",
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
    "trajetoria": "Crônico; comportamento dependente pode ser apropriado ao desenvolvimento em crianças/adolescentes.",
    "prognostico": "Cautela no diagnóstico em jovens.",
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
  "id": "tp_dependente",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "rendering": {
    "estrutura_diagnostica": "polythetic_monocluster",
    "criteria": [
      "1. Dificuldade em tomar decisoes sem conselhos excessivos",
      "2. Precisa que outros assumam responsabilidade",
      "3. Dificuldade em discordar por medo de perder apoio",
      "4. Dificuldade em iniciar projetos por falta de autoconfianca",
      "5. Vai a extremos para obter carinho e apoio",
      "6. Desconfortavel/desamparado quando sozinho",
      "7. Busca urgentemente outro relacionamento apos termino",
      "8. Preocupacoes irreais com medo de abandono"
    ],
    "diagnostic_rule": "Criterios gerais de TP (A-F) + >=5 de 8 criterios",
    "clusters": [
      "Necessidade Excessiva de Cuidado",
      "Submissao",
      "Medo de Abandono"
    ],
    "duration": "padrao persistente",
    "age_onset": "inicio vida adulta",
    "functional_impairment": "funcionamento profissional prejudicado; relacoes limitadas; vulnerabilidade a relacionamentos abusivos",
    "exclusions": [
      "borderline",
      "evitativa",
      "histriônica",
      "TOC personalidade",
      "depressao"
    ],
    "specifiers": [],
    "operational_profiles": [],
    "critical_differentials": [
      "borderline",
      "evitativa",
      "histriônica",
      "depressao"
    ],
    "key_questions": [
      "Dificuldade em tomar decisoes simples sem conselho?",
      "Depende que outros decidam por voce?",
      "Dificuldade em discordar por medo de perder pessoas?",
      "Evita comecar projetos por falta de autoconfianca?",
      "Fez coisas desagradaveis so para agradar e manter alguem?",
      "Ansioso/desamparado quando sozinho?",
      "Busca desesperadamente outro relacionamento apos termino?",
      "Medo excessivo de ser abandonado?"
    ],
    "alerts": [
      "Nao confundir submissao a abusador por medo real de retaliacao com traco dependente; contexto cultural e essencial"
    ],
    "source_trace": {
      "markdown_section": "## 9. Transtorno da Personalidade Dependente (TPDep)",
      "patches_applied": []
    },
    "category": "FULL",
    "ui_mode": "structured_full",
    "render_structured_interview": true
  },
  "inventario_clinico": {
    "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 301.6 / F60.7",
    "estrutura_efetiva": "- **Estrutura efetiva:** Necessidade difusa e excessiva de ser cuidado, levando a comportamento submisso e apego. Exige 5+ de 8 criterios: (1) dificuldade em tomar decisoes cotidianas sem conselhos/reasseguramento excessivo, (2) precisa que outros assumam responsabilidade por areas principais da vida, (3) dificuldade em expressar desacordo por medo de perder apoio, (4) dificuldade em iniciar projetos sozinho (falta de autoconfianca), (5) vai a extremos para obter carinho/apoio (voluntariar-se para tarefas desagradaveis), (6) desconfortavel/desamparado quando sozinho, (7) busca urgentemente novo relacionamento apos terminio, (8) preocupacoes irreaeis com medo de ser abandonado.",
    "notas_clinicas": "- **Notas:** Prevalencia: 0,49% (NESARC) a 0,6% (NCS-R). Mais diagnosticado em mulheres em contextos clinicos, mas alguns estudos mostram taxas similares entre sexos. Cautela/extrema cautela em criancas e adolescentes (comportamento dependente pode ser adequado ao desenvolvimento). Comorbidade: TP borderline, evitativa, histrionica; transtornos depressivos, ansiedade, adaptacao. Doenca fisica cronica ou transtorno de ansiedade de separacao na infancia podem predispor."
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
