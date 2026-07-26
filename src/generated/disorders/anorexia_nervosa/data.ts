import { AnorexiaNervosaSchema } from "./schema";

export const data = AnorexiaNervosaSchema.parse({
  "$schema_version": "2.1.0",
  meta: {
    id: "anorexia_nervosa",
    nome_completo: "Anorexia Nervosa",
    sigla: null,
    codigo: {
      dsm5: "307.1",
      cid10: "F50.0x",
      cid11: "6B80"},
    capitulo: "Transtornos Alimentares",
    capitulo_id: "10",
    grupo: null,
    faixa_etaria_alvo: "ambos",
    versao_complementar_existe: false,
    sinonimos_historicos: []},
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
  subtipos: {
    presente: true,
    nome: "Subtipo",
    mutuamente_exclusivos: true,
    subtipos: [
      {
        id: "tipo_restritivo",
        codigo: {
          dsm5: "307.1",
          cid10: "F50.01",
          cid11: null},
        label: "Tipo restritivo",
        descricao:
          "Nos últimos três meses, o indivíduo não se envolveu em episódios recorrentes de compulsão alimentar ou comportamento purgativo. A perda de peso é conseguida essencialmente por dieta, jejum e/ou exercício excessivo.",
        sintomas_caracteristicos: []},
      {
        id: "tipo_compulsao_alimentar_purgativa",
        codigo: {
          dsm5: "307.1",
          cid10: "F50.02",
          cid11: null},
        label: "Tipo compulsão alimentar purgativa",
        descricao:
          "Nos últimos três meses, o indivíduo se envolveu em episódios recorrentes de compulsão alimentar purgativa (vômitos autoinduzidos ou uso indevido de laxantes, diuréticos ou enemas).",
        sintomas_caracteristicos: []}],
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
  dominios_impacto: [
    {
      id: "saude",
      label: "Saúde Física e Nutricional",
      icone: "HeartPulse",
      relevante_para: "transversal"},
    {
      id: "social",
      label: "Funcionamento Social",
      icone: "Users",
      relevante_para: "transversal"},
    {
      id: "trabalho",
      label: "Desempenho Profissional/Acadêmico",
      icone: "Briefcase",
      relevante_para: "adulto"}],
  diagnostico_diferencial: [
    {
      condicao: "Bulimia nervosa",
      ponto_distincao:
        "Bulimia: peso corporal igual ou acima da faixa mínima normal, com episódios recorrentes de compulsão alimentar e compensação; anorexia: peso significativamente baixo.",
      pertence_a_classe: true},
    {
      condicao: "Transtorno alimentar restritivo/evitativo",
      ponto_distincao:
        "TARE: pode haver perda de peso, mas sem medo de ganhar peso ou perturbação na vivência da forma/peso corporal.",
      pertence_a_classe: true},
    {
      condicao: "Condições médicas (hipertireoidismo, malignidades, SIDA)",
      ponto_distincao:
        "Condições médicas: geralmente sem medo intenso de ganhar peso nem perturbação na vivência da forma/peso corporal.",
      pertence_a_classe: false},
    {
      condicao: "Transtorno depressivo maior",
      ponto_distincao:
        "TDM: pode haver perda de peso grave, mas geralmente sem desejo de perda excessiva nem medo intenso de ganhar peso.",
      pertence_a_classe: false}],
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
  instrumentos_complementares: [],
  prevalencia: {
    populacao_geral:
      "0,4% (prevalência de 12 meses entre jovens do sexo feminino).",
    proporcao_sexo:
      "Aproximadamente 10:1 feminino:masculino em populações clínicas.",
    variacoes_culturais:
      "Possivelmente mais prevalente em países ricos pós-industrializados. A ausência de medo intenso manifesto de ganhar peso parece relativamente mais comum na Ásia e entre grupos latinos nos EUA.",
    notas: "Pouco se sabe sobre a prevalência no sexo masculino.",
    },
  curso_desenvolvimento: {
    idade_inicio_tipica:
      "Adolescência ou idade adulta jovem; raramente antes da puberdade ou após os 40 anos.",
    trajetoria:
      "Altamente variável. Alguns se recuperam após um único episódio; outros apresentam curso crônico. A maioria entra em remissão dentro de cinco anos.",
    prognostico:
      "Taxa bruta de mortalidade de cerca de 5% por década. Morte mais comum por complicações clínicas ou suicídio.",
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
