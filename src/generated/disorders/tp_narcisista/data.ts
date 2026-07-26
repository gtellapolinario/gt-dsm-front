import { TpNarcisistaSchema } from "./schema";

export const data = TpNarcisistaSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "tp_narcisista",
    "nome_completo": "Transtorno da Personalidade Narcisista",
    "codigo": {
        "dsm5": "",
        "cid10": "F60.81",
        "cid11": "6D10"
    },
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "transtornos_da_personalidade",
    "sigla": "TPN",
    "codificacao": {
        "cid10_cm": {
            "referencia_base": "F60.81",
            "equivalencia": "direta",
            "regra": "Correspondência diagnóstica direta no nível informado; confirmar especificadores e requisitos da versão CID-10-CM adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6D10",
            "equivalencia": "sem_correspondencia_categorial_direta",
            "regra": "A CID-11 não conserva os tipos categóricos do DSM-5-TR. Codificar a gravidade em 6D10.0–6D10.2 ou 6D10.Z e acrescentar qualificadores de traço quando sustentados.",
            "versao": "CID-11 MMS 2026-01"
        }
    },
    "agrupamento": {
        "capitulo": {
            "id": "transtornos_da_personalidade",
            "label": "Transtornos da Personalidade"
        },
        "subgrupo": {
            "id": "cluster_b",
            "label": "Cluster B",
            "natureza": "agrupamento_dsm_de_personalidade"
        }
    },
    "faixa_etaria_alvo": "adulto",
    "terminologia_relacionada": []
},
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Grandiosidade, Necessidade de Admiração e Falta de Empatia",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 5,
            "pediatria": 5
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Sensação grandiosa da própria importância",
                "desc": "Tem uma sensação grandiosa da própria importância (exagera conquistas e talentos, espera ser reconhecido como superior sem conquistas correspondentes).",
                "pergunta": "A pessoa exagera suas conquistas e talentos e espera ser reconhecido como superior, mesmo sem ter as conquistas correspondentes?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A2",
                "rotulo": "Preocupado com fantasias de sucesso ilimitado",
                "desc": "É preocupado com fantasias de sucesso ilimitado, poder, brilho, beleza ou amor ideal.",
                "pergunta": "A pessoa fica preocupado com fantasias de sucesso ilimitado, poder, beleza ou amor ideal?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Ruminar sobre admiração 'há muito devida'"
                ]
            },
            {
                "id": "A3",
                "rotulo": "Acredita ser 'especial' e único",
                "desc": "Acredita ser 'especial' e único e que pode ser somente compreendido por, ou associado a, outras pessoas ou instituições especiais.",
                "pergunta": "A pessoa acredita que é especial ou único e que só pode ser compreendido ou associado a outras pessoas ou instituições de condição elevada?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A4",
                "rotulo": "Demanda admiração excessiva",
                "desc": "Demanda admiração excessiva.",
                "pergunta": "A pessoa exige ou demanda admiração excessiva dos outros, buscando constantemente elogios e atenção?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A5",
                "rotulo": "Sentimento de possuir direitos",
                "desc": "Apresenta um sentimento de possuir direitos (expectativas irracionais de tratamento especialmente favorável ou automático).",
                "pergunta": "A pessoa tem expectativas irracionais de receber tratamento especial ou deferência automática dos outros?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Achar que não precisa esperar em filas"
                ]
            },
            {
                "id": "A6",
                "rotulo": "Explorador em relações interpessoais",
                "desc": "É explorador em relações interpessoais (tira vantagem de outros para atingir os próprios fins).",
                "pergunta": "A pessoa tira vantagem de outras pessoas para atingir seus próprios objetivos, sem considerar o impacto nelas?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A7",
                "rotulo": "Carece de empatia",
                "desc": "Carece de empatia: reluta em reconhecer ou identificar-se com os sentimentos e as necessidades dos outros.",
                "pergunta": "A pessoa tem dificuldade em reconhecer ou se identificar com os sentimentos e necessidades dos outros?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Falta de interesse recíproco",
                    "Desdém pelos problemas alheios"
                ]
            },
            {
                "id": "A8",
                "rotulo": "Invejoso ou acredita ser invejado",
                "desc": "É frequentemente invejoso em relação aos outros ou acredita que os outros o invejam.",
                "pergunta": "A pessoa frequentemente sente inveja dos outros ou acredita que eles o invejam?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Desvalorizar contribuições de outros que recebem reconhecimento"
                ]
            },
            {
                "id": "A9",
                "rotulo": "Comportamentos ou atitudes arrogantes e insolentes",
                "desc": "Demonstra comportamentos ou atitudes arrogantes e insolentes.",
                "pergunta": "A pessoa demonstra comportamentos ou atitudes arrogantemente insolentes, com esnobismo ou desdém?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Queixar-se da 'estupidez' de garçom",
                    "Apreciação condescendente de médico"
                ]
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": null
    }
],
  "criterios_condicionais": [],
  "subtipos": {
    "presente": false,
    "nome": null,
    "natureza": null,
    "formal_dsm": false,
    "mutuamente_exclusivos": null,
    "subtipos": [],
    "nota_aplicador": "O DSM-5-TR não define subtipos formais para este diagnóstico."
},
  "especificadores": [],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6D10",
        "equivalencia": "sem_correspondencia_categorial_direta",
        "regra": "A CID-11 não conserva os tipos categóricos do DSM-5-TR. Codificar a gravidade em 6D10.0–6D10.2 ou 6D10.Z e acrescentar qualificadores de traço quando sustentados.",
        "versao": "CID-11 MMS 2026-01"
    }
},
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
      },
  "dominios_impacto": [
    {
        "id": "relacoes_interpessoais",
        "label": "Relações interpessoais e familiares",
        "icone": "Heart",
        "relevante_para": "transversal"
    },
    {
        "id": "ocupacional",
        "label": "Desempenho ocupacional",
        "icone": "Briefcase",
        "relevante_para": "adulto"
    },
    {
        "id": "social",
        "label": "Funcionamento social",
        "icone": "Users",
        "relevante_para": "transversal"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "mania_ou_hipomania",
        "condicao": "Mania ou hipomania",
        "natureza": "condicao_medica",
        "ponto_distincao": "Mania: grandiosidade associada a mudanças de humor e prejuízo funcional agudo.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_da_personalidade_borderline",
        "condicao": "Transtorno da Personalidade Borderline",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Borderline: instabilidade da autoimagem, autodestrutividade; narcisista: estabilidade relativa da autoimagem.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_da_personalidade_antissocial",
        "condicao": "Transtorno da Personalidade Antissocial",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Antissocial: histórico de conduta, impulsividade, agressão; narcisista: busca admiração.",
        "pertence_a_mesma_classe_dsm": true
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
  "instrumentos_complementares": [
    {
        "id": "scid_5_pd",
        "nome": "Entrevista Clínica Estruturada para os Transtornos da Personalidade do DSM-5",
        "sigla": "SCID-5-PD",
        "uso": "apoio_diagnostico",
        "faixa_etaria": "adulto",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "pid_5",
        "nome": "Inventário de Personalidade para o DSM-5",
        "sigla": "PID-5",
        "uso": "formulacao_dimensional",
        "faixa_etaria": "adulto",
        "obrigatorio_para_diagnostico": false,
        "fonte": "apa_dsm5_secao_iii",
        "nota_aplicador": "Avalia traços dimensionais; não confirma isoladamente um transtorno categórico da personalidade."
    }
],
  "prevalencia": {
    "tipo_estimativa": "prevalencia_pontual",
    "estimativa": "0% a 6,2%",
    "distribuicao_por_sexo": "50 a 75% do sexo masculino entre os diagnosticados",
    "variacoes_contextuais": null,
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "O padrão deve estar estabelecido no início da vida adulta e ocorrer em múltiplos contextos.",
    "trajetoria": "Pode persistir, com expressão variável diante de fracasso, crítica, envelhecimento e mudanças de status.",
    "prognostico": "Fragilidade da autoestima, comorbidades, isolamento e prejuízo interpessoal influenciam a evolução.",
    "nota_aplicador": "Traços antecedentes podem aparecer antes da vida adulta; o diagnóstico requer padrão persistente, pervasivo e não explicado por desenvolvimento, cultura ou outra condição."
},
  
  "_pipeline": {
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
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:** Padrao difuso de grandiosidade, necessidade de admiracao e falta de empatia. Exige 5+ de 9 criterios: (1) sensacao grandiosa da propria importancia, (2) preocupacao com fantasias de sucesso/poder/brilho/beleza/amor ideal, (3) acredita ser \"especial\" e unico, (4) demanda admiracao excessiva, (5) sentimento de possuir direitos (expectativas irracionais de tratamento favoravel), (6) explorador em relacoes interpessoais, (7) carece de empatia, (8) frequentemente invejoso ou acredita que outros o invejam, (9) comportamentos/arrogancia/insolencia.",
    "notas_clinicas": "- **Notas:** Prevalencia: 0-6,2% em amostras de comunidades. 50-75% sao homens. Tracos narcisistas comuns em adolescentes nem sempre evoluem para o transtorno. Autoestima fragil; sensivel a criticas/derrotas. Comorbidade: anorexia nervosa, transtornos por uso de substancia (cocaina); TP histrionica, borderline, antissocial, paranoide; distimia/depressivo maior. Dificuldade de adaptacao ao envelhecimento."
  },
  
});
export type DisorderData = typeof data;
