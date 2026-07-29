import { AnorexiaNervosaSchema } from "./schema";

export const data = AnorexiaNervosaSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "anorexia_nervosa",
    "nome_completo": "Anorexia Nervosa",
    "capitulo": "Transtornos Alimentares",
    "capitulo_id": "transtornos_alimentares",
    "sigla": null,
    "codificacao": {
        "dsm5_tr": {
            "codigo": "307.1",
            "sistema_origem": "ICD-9-CM",
            "uso": "referencia_editorial_legacy"
        },
        "cid10_cm": {
            "referencia_base": [
                "F50.01",
                "F50.02"
            ],
            "equivalencia": "contextual",
            "regra": "Referência de família ou conjunto de códigos; selecionar o código CID-10-CM específico conforme apresentação, curso, gravidade e regras da versão adotada.",
            "sistema": "CID-10-CM"
        },
        "cid11_mms": {
            "codigo_base": "6B80",
            "equivalencia": "contextual",
            "regra": "Selecionar a subcategoria conforme o nível ponderal, o padrão alimentar e a fase de recuperação.",
            "versao": "CID-11 MMS 2026-01"
        }
    },
    "agrupamento": {
        "capitulo": {
            "id": "transtornos_alimentares",
            "label": "Transtornos Alimentares"
        },
        "subgrupo": null
    },
    "faixa_etaria_alvo": "transversal",
    "terminologia_relacionada": []
},
  estrutura_geral: "monothetic_puro",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Restrição Calórica com Peso Significativamente Baixo",
        "tipo": "monothetic_obrigatorio",
        "limiar": null,
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Restrição calórica com peso significativamente baixo",
                "desc": "Restrição da ingesta calórica em relação às necessidades, levando a um peso corporal significativamente baixo no contexto de idade, gênero, trajetória do desenvolvimento e saúde física.",
                "pergunta": "A pessoa restringe a ingesta calórica de forma a manter um peso corporal significativamente abaixo do mínimo normal para sua idade, gênero e desenvolvimento?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "IMC < 17 kg/m² em adultos",
                    "Percentil de IMC abaixo do 5º em crianças/adolescentes",
                    "Insucesso em manter trajetória de crescimento esperada"
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
        "id": "medo_ganho_peso",
        "letra": "B",
        "rotulo": "Medo de ganhar peso ou conduta que impede o ganho",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "ClipboardCheck",
        "descricao_completa": "Medo intenso de ganhar peso ou de engordar, ou comportamento persistente que interfere no ganho de peso, mesmo estando com peso significativamente baixo.",
        "nota": null
    },
    {
        "id": "perturbacao_peso_forma",
        "letra": "C",
        "rotulo": "Perturbação na vivência do peso ou da forma corporal",
        "tipo": "qualitativo_descritivo",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "ClipboardCheck",
        "descricao_completa": "Perturbação no modo como o próprio peso ou a forma corporal são vivenciados, influência indevida do peso ou da forma corporal na autoavaliação, ou ausência persistente de reconhecimento da gravidade do baixo peso corporal atual.",
        "nota": null
    }
],
  "subtipos": {
    "presente": true,
    "nome": "Subtipo",
    "natureza": "subtipo",
    "formal_dsm": true,
    "mutuamente_exclusivos": true,
    "subtipos": [
        {
            "id": "tipo_restritivo",
            "label": "Tipo restritivo",
            "descricao": "Nos últimos três meses, o indivíduo não se envolveu em episódios recorrentes de compulsão alimentar ou comportamento purgativo. A perda de peso é conseguida essencialmente por dieta, jejum e/ou exercício excessivo.",
            "codigo": {
                "dsm5_legacy": "307.1",
                "cid10_cm": [
                    "F50.010",
                    "F50.011",
                    "F50.012",
                    "F50.013",
                    "F50.014",
                    "F50.019"
                ],
                "cid11_mms": [
                    "6B80.00",
                    "6B80.10",
                    "6B80.2"
                ],
                "regra": "Selecionar o código CID-10-CM conforme gravidade ou remissão; F50.01 deixou de ser válido em 01/10/2024. Usar 6B80.00 ou 6B80.10 conforme o nível ponderal; 6B80.2 é usado na fase de recuperação com peso normal."
            }
        },
        {
            "id": "tipo_compulsao_alimentar_purgativa",
            "label": "Tipo compulsão alimentar/purgativo",
            "descricao": "Nos últimos três meses, houve episódios recorrentes de compulsão alimentar ou comportamento purgativo, como vômitos autoinduzidos ou uso indevido de laxantes, diuréticos ou enemas.",
            "codigo": {
                "dsm5_legacy": "307.1",
                "cid10_cm": [
                    "F50.020",
                    "F50.021",
                    "F50.022",
                    "F50.023",
                    "F50.024",
                    "F50.029"
                ],
                "cid11_mms": [
                    "6B80.01",
                    "6B80.11",
                    "6B80.2"
                ],
                "regra": "Selecionar o código CID-10-CM conforme gravidade ou remissão; F50.02 deixou de ser válido em 01/10/2024. Usar 6B80.01 ou 6B80.11 conforme o nível ponderal; 6B80.2 é usado na fase de recuperação com peso normal."
            }
        }
    ],
    "nota_aplicador": "Selecione somente opções sustentadas pela avaliação clínica."
},
  "especificadores": [
    {
        "id": "estado_remissao",
        "nome": "Estado de remissão",
        "tipo": "enum",
        "ortogonal": false,
        "opcoes": [
            "Em remissão parcial",
            "Em remissão completa"
        ],
        "regra_criterial": null
    }
],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6B80",
        "equivalencia": "contextual",
        "regra": "Selecionar a subcategoria conforme o nível ponderal, o padrão alimentar e a fase de recuperação.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "gravidade_atual",
    "tipo": "marcador_biometrico_com_ajuste_clinico",
    "lembrete_aplicador": "Use o IMC atual em adultos e o percentil de IMC em crianças e adolescentes.",
    "niveis": [
        {
            "id": "leve",
            "label": "Leve",
            "descritor": "Adultos: IMC igual ou superior a 17 kg/m²."
        },
        {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "Adultos: IMC entre 16 e 16,99 kg/m²."
        },
        {
            "id": "grave",
            "label": "Grave",
            "descritor": "Adultos: IMC entre 15 e 15,99 kg/m²."
        },
        {
            "id": "extrema",
            "label": "Extrema",
            "descritor": "Adultos: IMC inferior a 15 kg/m²."
        }
    ],
    "regra_atribuicao": "O nível mínimo é definido pelo IMC ou pelo percentil correspondente.",
    "observacao": "O nível pode ser elevado conforme sintomas clínicos, incapacidade funcional e necessidade de supervisão."
},
  hierarquia: {
    presente: true,
    "exclui_se_diagnosticado": ["bulimia_nervosa"],
    "exclui_diagnostico_de": ["bulimia_nervosa"],
    notas:
      "Bulimia nervosa não deve ser diagnosticada durante episódios de anorexia nervosa. A alternância entre subtipos ao longo do curso não é incomum.",
    },
  "dominios_impacto": [
    {
        "id": "saude_fisica",
        "label": "Saúde Física e Nutricional",
        "icone": "HeartPulse",
        "relevante_para": "transversal"
    },
    {
        "id": "social",
        "label": "Funcionamento social",
        "icone": "Users",
        "relevante_para": "transversal"
    },
    {
        "id": "ocupacional_academico",
        "label": "Desempenho ocupacional ou acadêmico",
        "icone": "Briefcase",
        "relevante_para": "transversal"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "bulimia_nervosa",
        "condicao": "Bulimia nervosa",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Bulimia: peso corporal igual ou acima da faixa mínima normal, com episódios recorrentes de compulsão alimentar e compensação; anorexia: peso significativamente baixo.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_alimentar_restritivo_evitativo",
        "condicao": "Transtorno alimentar restritivo/evitativo",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno Alimentar Restritivo/Evitativo: pode haver perda de peso, mas sem medo de ganhar peso ou perturbação na vivência da forma/peso corporal.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "condicoes_medicas_hipertireoidismo_malignidades_hiv_aids",
        "condicao": "Condições médicas (hipertireoidismo, malignidades, HIV/aids)",
        "natureza": "condicao_medica",
        "ponto_distincao": "Condições médicas: geralmente sem medo intenso de ganhar peso nem perturbação na vivência da forma/peso corporal.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_depressivo_maior",
        "condicao": "Transtorno depressivo maior",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno Depressivo Maior: pode haver perda de peso grave, mas geralmente sem desejo de perda excessiva nem medo intenso de ganhar peso.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  comorbidades_frequentes: [
    {
      condicao: "Transtornos de ansiedade",
      frequencia: "alta",
      nota: null},
    {
      condicao: "Transtorno depressivo maior",
      frequencia: "alta",
      nota: null},
    {
      condicao: "Transtornos bipolares",
      frequencia: "alta",
      nota: null},
    {
      condicao: "Transtorno obsessivo-compulsivo",
      frequencia: "moderada",
      nota: "Mais frequente no tipo restritivo."},
    {
      condicao: "Transtorno por uso de álcool ou outras substâncias",
      frequencia: "moderada",
      nota: "Mais frequente no tipo compulsão alimentar purgativa."}],
  "instrumentos_complementares": [
    {
        "id": "ede_q",
        "nome": "Questionário de Exame dos Transtornos Alimentares",
        "sigla": "EDE-Q",
        "uso": "gravidade_monitoramento",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "scoff",
        "nome": "Questionário de triagem para transtornos alimentares",
        "sigla": "SCOFF",
        "uso": "triagem",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "tipo_estimativa": "prevalencia_12_meses",
    "estimativa": "Cerca de 0,4% em 12 meses entre mulheres jovens; estimativas para homens são menos precisas.",
    "distribuicao_por_sexo": "Diagnósticos são muito mais frequentes em mulheres em amostras clínicas; homens e pessoas com apresentações atípicas podem ser sub-reconhecidos.",
    "variacoes_contextuais": "Apresentação e reconhecimento variam culturalmente; ausência de medo verbalizado de ganhar peso não exclui o diagnóstico quando os demais mecanismos estão presentes.",
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Mais comum na adolescência e no início da vida adulta; início antes da puberdade ou após os 40 anos é menos frequente.",
    "trajetoria": "Heterogênea: pode haver episódio único, recorrências ou persistência; remissão e recuperação funcional podem exigir acompanhamento prolongado.",
    "prognostico": "Complicações clínicas e suicídio contribuem para mortalidade elevada; duração, gravidade clínica e comorbidades influenciam o desfecho.",
    "nota_aplicador": "Início e trajetória são descritores típicos, não critérios isolados; um curso diferente exige reavaliação, mas não exclusão automática."
},
  
  "_pipeline": {
    "rendering": {
        estrutura_diagnostica: "monothetic_tripartite",
        criteria: [
          "A. Restricao calorica com peso corporal significativamente baixo (IMC < 17 ou abaixo do 5o percentil em criancas)",
          "B. Medo intenso de ganhar peso ou engordar, ou comportamento persistente que interfere no ganho de peso",
          "C. Dismorfia/perturbacao da imagem corporal: influencia indevida do peso/forma na autoavaliacao ou ausencia de reconhecimento da gravidade do baixo peso"],
        diagnostic_rule: "A AND B AND C (todos obrigatorios)",
        clusters: [],
        duration: null,
        age_onset: "Adolescencia ou idade adulta jovem",
        functional_impairment:
          "Potencialmente fatal; complicacoes medicas; prejuizo social/occupacional",
        exclusions: [
          "Condicoes medicas",
          "TDM",
          "Esquizofrenia",
          "Substancias",
          "ARFID",
          "Bulimia nervosa",
          "Pica"],
        specifiers: ["Remissao parcial", "Remissao completa"],
        operational_profiles: [],
        critical_differentials: [
          "ARFID",
          "TDM com perda de peso",
          "Condicao medica",
          "Bulimia nervosa"],
        key_questions: [
          "Qual e seu peso atual?",
          "Voce tem medo de ganhar peso?",
          "Como voce se ve?"],
        alerts: ["Condicao potencialmente fatal", "Calculadora de IMC obrigatoria"],
        source_trace: {
          markdown_section: "1. ANOREXIA NERVOSA",
          patches_applied: []},
        category: "FULL",
        ui_mode: "structured_full",
        render_structured_interview: true},
    "enrichment_status": {
        has_poor: true,
        has_master: true,
        has_inventory: true,
        has_hierarchy: true,
        has_cid11: true,
            match_notes: {
          poor: "id",
          master: "id",
          inventario: "id",
          hierarquia: "id",
          cid11: "id",
          super: "id"}}
  },
  metadados_globais: {
    fonte_capitulo_md: "10_transtornos_alimentares.md",
    fonte_inventario_md: null,
    data_extracao: "2026-05-31",
    modelo_agente: "antigravity-gemini",
    lacunas_globais: [],
    inconsistencias_detectadas: [],
    notas_agente_globais: null,
    revisao_humana_necessaria: false},
  category: "FULL",
  ui_mode: "structured_full",
  render_structured_interview: true,
  inventario_clinico: {
    estrutura_efetiva: "- **Estrutura efetiva:**",
    notas_clinicas: "- **Notas:**"},
  
});
export type DisorderData = typeof data;
