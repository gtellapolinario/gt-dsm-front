import { TpNarcisistaSchema } from "./schema";

export const data = TpNarcisistaSchema.parse({
  "$schema_version": "1.0.0",
  "meta": {
    "id": "tp_narcisista",
    "nome_completo": "Transtorno da Personalidade Narcisista",
    "sigla": "TPN",
    "codigo": {
      "dsm5": "301.81",
      "cid10": "F60.81",
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
      "nome": "Grandiosidade, Necessidade de Admiração e Falta de Empatia",
      "tipo": "polythetic_com_limiar",
      "limiar": {
        "adulto": 5,
        "pediatria": null
      },
      "ancora_obrigatoria": null,
      "sintomas": [
        {
          "id": "A1",
          "rotulo": "Sensação grandiosa da própria importância",
          "desc": "Tem uma sensação grandiosa da própria importância (exagera conquistas e talentos, espera ser reconhecido como superior sem conquistas correspondentes).",
          "pergunta": "Você exagera suas conquistas e talentos e espera ser reconhecido como superior, mesmo sem ter as conquistas correspondentes?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A2",
          "rotulo": "Preocupado com fantasias de sucesso ilimitado",
          "desc": "É preocupado com fantasias de sucesso ilimitado, poder, brilho, beleza ou amor ideal.",
          "pergunta": "Você fica preocupado com fantasias de sucesso ilimitado, poder, beleza ou amor ideal?",
          "exemplos_clinicos": [
            "Ruminar sobre admiração 'há muito devida'"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A3",
          "rotulo": "Acredita ser 'especial' e único",
          "desc": "Acredita ser 'especial' e único e que pode ser somente compreendido por, ou associado a, outras pessoas ou instituições especiais.",
          "pergunta": "Você acredita que é especial ou único e que só pode ser compreendido ou associado a outras pessoas ou instituições de condição elevada?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A4",
          "rotulo": "Demanda admiração excessiva",
          "desc": "Demanda admiração excessiva.",
          "pergunta": "Você exige ou demanda admiração excessiva dos outros, buscando constantemente elogios e atenção?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A5",
          "rotulo": "Sentimento de possuir direitos",
          "desc": "Apresenta um sentimento de possuir direitos (expectativas irracionais de tratamento especialmente favorável ou automático).",
          "pergunta": "Você tem expectativas irracionais de receber tratamento especial ou deferência automática dos outros?",
          "exemplos_clinicos": [
            "Achar que não precisa esperar em filas"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A6",
          "rotulo": "Explorador em relações interpessoais",
          "desc": "É explorador em relações interpessoais (tira vantagem de outros para atingir os próprios fins).",
          "pergunta": "Você tira vantagem de outras pessoas para atingir seus próprios objetivos, sem considerar o impacto nelas?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A7",
          "rotulo": "Carece de empatia",
          "desc": "Carece de empatia: reluta em reconhecer ou identificar-se com os sentimentos e as necessidades dos outros.",
          "pergunta": "Você tem dificuldade em reconhecer ou se identificar com os sentimentos e necessidades dos outros?",
          "exemplos_clinicos": [
            "Falta de interesse recíproco",
            "Desdém pelos problemas alheios"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A8",
          "rotulo": "Invejoso ou acredita ser invejado",
          "desc": "É frequentemente invejoso em relação aos outros ou acredita que os outros o invejam.",
          "pergunta": "Você frequentemente sente inveja dos outros ou acredita que eles o invejam?",
          "exemplos_clinicos": [
            "Desvalorizar contribuições de outros que recebem reconhecimento"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A9",
          "rotulo": "Comportamentos ou atitudes arrogantes e insolentes",
          "desc": "Demonstra comportamentos ou atitudes arrogantes e insolentes.",
          "pergunta": "Você demonstra comportamentos ou atitudes arrogantemente insolentes, com esnobismo ou desdém?",
          "exemplos_clinicos": [
            "Queixar-se da 'estupidez' de garçom",
            "Apreciação condescendente de médico"
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
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade narcisista não recebe níveis formais de gravidade."
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
      "condicao": "Mania ou hipomania",
      "ponto_distincao": "Mania: grandiosidade associada a mudanças de humor e prejuízo funcional agudo.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno da Personalidade Borderline",
      "ponto_distincao": "Borderline: instabilidade da autoimagem, autodestrutividade; narcisista: estabilidade relativa da autoimagem.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno da Personalidade Antissocial",
      "ponto_distincao": "Antissocial: histórico de conduta, impulsividade, agressão; narcisista: busca admiração.",
      "pertence_a_classe": true
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno Depressivo Maior",
      "frequencia": "moderada",
      "nota": null
    },
    {
      "condicao": "Transtorno depressivo persistente (distimia)",
      "frequencia": "moderada",
      "nota": null
    },
    {
      "condicao": "Anorexia nervosa",
      "frequencia": "moderada",
      "nota": null
    },
    {
      "condicao": "Transtornos por uso de substância (cocaína)",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "0% a 6,2%",
    "proporcao_sexo": "50 a 75% do sexo masculino entre os diagnosticados",
    "variacoes_culturais": null,
    "notas": null,
    "metadados": {
      "completo": false,
      "lacunas": [
        "variacao_cultural"
      ],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Início da vida adulta",
    "trajetoria": "Crônico; dificuldades de adaptação às limitações do envelhecimento.",
    "prognostico": "Vulnerabilidade da autoestima a críticas pode levar a retraimento ou depressão.",
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
    "lacunas_globais": [
      "variacao_cultural"
    ],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "id": "tp_narcisista",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "rendering": {
    "estrutura_diagnostica": "polythetic_monocluster",
    "criteria": [
      "1. Sensacao grandiosa da propria importancia",
      "2. Fantasias de sucesso ilimitado, poder, brilho",
      "3. Acredita ser 'especial' e unico",
      "4. Demanda admiracao excessiva",
      "5. Sentimento de possuir direitos",
      "6. Explorador em relacoes interpessoais",
      "7. Carece de empatia",
      "8. Frequentemente invejoso",
      "9. Comportamentos ou atitudes arrogantes"
    ],
    "diagnostic_rule": "Criterios gerais de TP (A-F) + >=5 de 9 criterios",
    "clusters": [
      "Grandiosidade",
      "Necessidade de Admiracao",
      "Falta de Empatia"
    ],
    "duration": "padrao persistente",
    "age_onset": "inicio vida adulta",
    "functional_impairment": "relacionamentos prejudicados; trabalho prejudicado; reacoes de furia a feridas narcisicas",
    "exclusions": [
      "mania/hipomania",
      "antissocial",
      "borderline",
      "TOC personalidade"
    ],
    "specifiers": [],
    "operational_profiles": [
      {
        "id": "narcisismo_grandioso",
        "description": "Variante grandiosa (nao formal DSM-5)"
      },
      {
        "id": "narcisismo_vulneravel",
        "description": "Variante vulneravel (nao formal DSM-5)"
      }
    ],
    "critical_differentials": [
      "mania",
      "antissocial",
      "borderline",
      "paranoide",
      "esquizotipica"
    ],
    "key_questions": [
      "Se considera especial ou superior?",
      "Exagera conquistas ou espera reconhecimento sem merecer?",
      "Fantasia sobre sucesso, poder, beleza?",
      "Precisa constantemente de elogios?",
      "Espera tratamento especial?",
      "Tira vantagem de outras pessoas?",
      "Dificuldade em se colocar no lugar dos outros?",
      "Arrogante ou insolente?"
    ],
    "alerts": [
      "Nao confundir alta autoestima, ambicao ou lideranca com TPN; adolescentes podem ter tracos narcisistas normais"
    ],
    "source_trace": {
      "markdown_section": "## 7. Transtorno da Personalidade Narcisista (TPN)",
      "patches_applied": []
    },
    "category": "FULL",
    "ui_mode": "structured_full",
    "render_structured_interview": true
  },
  "inventario_clinico": {
    "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 301.81 / F60.81",
    "estrutura_efetiva": "- **Estrutura efetiva:** Padrao difuso de grandiosidade, necessidade de admiracao e falta de empatia. Exige 5+ de 9 criterios: (1) sensacao grandiosa da propria importancia, (2) preocupacao com fantasias de sucesso/poder/brilho/beleza/amor ideal, (3) acredita ser \"especial\" e unico, (4) demanda admiracao excessiva, (5) sentimento de possuir direitos (expectativas irracionais de tratamento favoravel), (6) explorador em relacoes interpessoais, (7) carece de empatia, (8) frequentemente invejoso ou acredita que outros o invejam, (9) comportamentos/arrogancia/insolencia.",
    "notas_clinicas": "- **Notas:** Prevalencia: 0-6,2% em amostras de comunidades. 50-75% sao homens. Tracos narcisistas comuns em adolescentes nem sempre evoluem para o transtorno. Autoestima fragil; sensivel a criticas/derrotas. Comorbidade: anorexia nervosa, transtornos por uso de substancia (cocaina); TP histrionica, borderline, antissocial, paranoide; distimia/depressivo maior. Dificuldade de adaptacao ao envelhecimento."
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
