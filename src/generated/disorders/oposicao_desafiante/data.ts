import { OposicaoDesafianteSchema } from "./schema";

export const data = OposicaoDesafianteSchema.parse({
  "$schema_version": "2.1.0",
  "meta": {
    "id": "oposicao_desafiante",
    "nome_completo": "Transtorno de Oposição Desafiante",
    "sigla": "TOD",
    "codigo": {
      "dsm5": "313.81",
      "cid10": "F91.3",
      "cid11": "6C90"
    },
    "capitulo": "Transtornos Disruptivos, do Controle de Impulsos e da Conduta",
    "capitulo_id": "15",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Humor raivoso, comportamento questionador ou índole vingativa",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 4,
            "pediatria": 4
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Perde a calma com frequência",
                "desc": "Perde a calma com frequência.",
                "pergunta": "A pessoa (ou a criança) perde a calma com frequência, mesmo com estímulos pequenos?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A2",
                "rotulo": "Sensível ou facilmente incomodado",
                "desc": "É sensível ou facilmente incomodado com frequência.",
                "pergunta": "A pessoa se irrita ou se incomoda facilmente com coisas que outras pessoas toleram?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A3",
                "rotulo": "Raivoso e ressentido com frequência",
                "desc": "É raivoso e ressentido com frequência.",
                "pergunta": "A pessoa se sente frequentemente com raiva ou ressentido?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A4",
                "rotulo": "Questiona figuras de autoridade",
                "desc": "Questiona figuras de autoridade ou, no caso de crianças e adolescentes, adultos.",
                "pergunta": "A pessoa questiona ou discute com figuras de autoridade com frequência?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A5",
                "rotulo": "Desafia ou recusa obedecer regras",
                "desc": "Desafia acintosamente ou se recusa a obedecer a regras ou pedidos de figuras de autoridade.",
                "pergunta": "A pessoa desafia ou se recusa a seguir regras ou pedidos de autoridade?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A6",
                "rotulo": "Incomoda deliberadamente outras pessoas",
                "desc": "Incomoda deliberadamente outras pessoas com frequência.",
                "pergunta": "A pessoa incomoda ou provoca outras pessoas de propósito com frequência?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A7",
                "rotulo": "Culpa outros por seus erros",
                "desc": "Culpa outros por seus erros ou mau comportamento com frequência.",
                "pergunta": "A pessoa costuma culpar outras pessoas por seus próprios erros ou comportamento?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A8",
                "rotulo": "Malvado ou vingativo",
                "desc": "Foi malvado ou vingativo pelo menos duas vezes nos últimos seis meses.",
                "pergunta": "Nos últimos seis meses, houve pelo menos duas vezes em que a pessoa foi deliberadamente vingativo ou malvado?",
                "faixa_aplicavel": null,
                "nota": null
            }
        ],
        "descricao_qualitativa": null,
        "nota": null,
        "regra_temporal": "Padrão de comportamento com duração de pelo menos seis meses. Nota: para <5 anos, na maioria dos dias; para ≥5 anos, pelo menos uma vez por semana. O comportamento deve ser exibido na interação com pelo menos um indivíduo que não seja um irmão."
    }
],
  "criterios_condicionais": [
    {
        "id": "prejuizo_funcional",
        "letra": "B",
        "rotulo": "Sofrimento ou prejuízo funcional",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Frown",
        "descricao_completa": "A perturbação no comportamento está associada a sofrimento para o indivíduo ou para os outros em seu contexto social imediato, ou causa impactos negativos no funcionamento social, educacional, profissional ou outras áreas importantes.",
        "nota": null
    },
    {
        "id": "exclusao_outros",
        "letra": "C",
        "rotulo": "Não ocorre exclusivamente em curso de outro transtorno",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Os comportamentos não ocorrem exclusivamente durante o curso de um transtorno psicótico, por uso de substância, depressivo ou bipolar. Além disso, os critérios para transtorno disruptivo da desregulação do humor não são preenchidos.",
        "nota": null,
        "ddx_sugeridos": [
            "transtorno_psicotico",
            "transtorno_uso_substancia",
            "transtorno_depressivo",
            "transtorno_bipolar",
            "transtorno_desregulacao_humor"
        ]
    }
],
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "especificadores": [],
  "gravidade": {
    "classificacao_dsm": "formal_categorica",
    "escopo": "transtorno",
    "tipo": "numero_de_ambientes",
    "lembrete_aplicador": "Classifique pelo número de ambientes em que os sintomas estão presentes.",
    "niveis": [
        {
            "id": "leve",
            "label": "Leve",
            "descritor": "Sintomas limitados a um ambiente."
        },
        {
            "id": "moderada",
            "label": "Moderada",
            "descritor": "Alguns sintomas presentes em pelo menos dois ambientes."
        },
        {
            "id": "grave",
            "label": "Grave",
            "descritor": "Alguns sintomas presentes em três ou mais ambientes."
        }
    ],
    "regra_atribuicao": "Leve: 1 ambiente; moderada: 2 ambientes; grave: 3 ou mais ambientes."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": "TDDH não modelado no dataset atual; hierarquia pendente.",
      },
  "dominios_impacto": [
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": null
    },
    {
      "id": "academico",
      "label": "Desempenho Acadêmico/Escolar",
      "icone": "GraduationCap",
      "relevante_para": "pediatria"
    },
    {
      "id": "familiar",
      "label": "Relações Familiares",
      "icone": "House",
      "relevante_para": null
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
      "condicao": "Transtorno da conduta",
      "ponto_distincao": "TOD não inclui agressão a pessoas/animais, destruição de propriedade ou padrão de roubo/falsidade; inclui desregulação emocional não presente na conduta.",
      "pertence_a_classe": true
    },
    {
      "condicao": "TDAH",
      "ponto_distincao": "A desobediência no TDAH ocorre em situações que demandam esforço sustentado; no TOD é mais generalizada.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtornos depressivo e bipolar",
      "ponto_distincao": "O TOD não deve ser diagnosticado se os sintomas ocorrerem exclusivamente durante o curso de um transtorno do humor.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno explosivo intermitente",
      "ponto_distincao": "TEI envolve agressão grave dirigida a outros; TOD não inclui agressão física grave.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Deficiência intelectual",
      "ponto_distincao": "O comportamento opositor deve ser acentuadamente maior do que o observado em indivíduos com idade mental comparável.",
      "pertence_a_classe": false
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "TDAH",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno da conduta",
      "frequencia": "moderada",
      "nota": null
    },
    {
      "condicao": "Transtornos de ansiedade",
      "frequencia": "moderada",
      "nota": null
    },
    {
      "condicao": "Transtorno depressivo maior",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "1–11%, média estimada de 3,3%",
    "proporcao_sexo": "1,4:1 M:F antes da adolescência",
    "variacoes_culturais": "Prevalência relativamente consistente entre países com diferentes raças e etnias.",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Anos pré-escolares",
    "trajetoria": "Pode preceder transtorno da conduta; maioria das crianças com TOD não desenvolve conduta. Risco aumentado para ansiedade e depressão.",
    "prognostico": "Sintomas desafiantes/questionadores predizem conduta; sintomas de humor predizem transtornos emocionais.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_clusters_assimetricos",
        "criteria": [
          "A. Humor raivoso/irritavel (3 sintomas: perde calma, sensivel, raivoso)",
          "B. Comportamento questionador/desafiante (4 sintomas: questiona autoridade, desafia regras, incomoda outros, culpa outros)",
          "C. Indole vingativa (1 sintoma: malvado/vingativo >=2x/6meses)",
          "D. Perturbacao causa sofrimento OU impactos negativos no funcionome_completonto",
          "E. Exclusoes: nao ocorre exclusivamente durante psicotico, uso de substancia, depressivo/bipolar, TODD"
        ],
        "diagnostic_rule": "A (>=4 sintomas de 8, distribuidos em 3 clusters) + B (sofrimento/prejuizo) + C (exclusoes); frequencia minima: <5 anos=na maioria dos dias, >=5 anos=1x/semana (exceto A8=2x/6meses)",
        "clusters": [
          "Humor Raivoso/Irritavel",
          "Comportamento Questionador/Desafiante",
          "Indole Vingativa"
        ],
        "duration": "6+ meses",
        "age_onset": null,
        "functional_impairment": "sofrimento para o individuo ou outros no contexto social, ou impactos negativos no funcionome_completonto social, educacional, profissional",
        "exclusions": [
          "transtorno psicotico",
          "uso de substancia",
          "transtorno depressivo ou bipolar",
          "transtorno disruptivo da desregulacao do humor (mutuamente exclusivo)"
        ],
        "specifiers": [],
        "operational_profiles": [],
        "critical_differentials": [
          "transtorno da conduta",
          "TDAH",
          "transtorno depressivo/bipolar",
          "transtorno disruptivo da desregulacao do humor",
          "transtorno explosivo intermitente",
          "deficiencia intelectual",
          "transtorno de ansiedade social"
        ],
        "key_questions": [
          "Com que frequencia perde a calma ou tem explosoes de raiva?",
          "Frequentemente irritado, ressentido ou de mau humor?",
          "Questiona regras, desafia adultos ou se recusa a obedecer?",
          "Incomoda propositalmente outras pessoas? Culpa outros por erros?",
          "Ja foi deliberadamente cruel ou vingativo?",
          "Comportamentos em casa, escola, com colegas? (avaliar pervasividade)",
          "Ha sofrimento significativo ou prejuizo no funcionome_completonto?",
          "Sintomas antes dos 5 anos (maioria dos dias) ou depois (1x/semana)?"
        ],
        "alerts": [
          "nao confundir com transtorno da conduta - TOD nao viola direitos fundamentais",
          "TOD e TODD sao mutuamente exclusivos"
        ],
        "source_trace": {
          "markdown_section": "## 1. TRANSTORNO DE OPOSICAO DESAFIANTE (TOD) - FICHA FULL",
          "patches_applied": [
            "CRITICAL: gravidade.tipo ordinal_por_dominio→pervasividade_contextual"
          ]
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
    "fonte_capitulo_md": "15_transtornos_disruptivos,_controle_impulsos_da_conduta.md",
    "fonte_inventario_md": null,
    "data_extracao": "2026-05-31",
    "modelo_agente": "claude-opus-4",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:** Padrao de humor raivoso/irritavel, comportamento questionador/desafiante ou indole vingativa com duracao de pelo menos 6 meses. Exigidos pelo menos 4 sintomas de 3 categorias possiveis, em interacao com pelo menos um individuo que nao seja irmao. As 3 categorias sao: (1) Humor Raivoso/Irritavel — perder a calma, ser sensivel/facilmente incomodado, ser raivoso/ressentido; (2) Comportamento Questionador/Desafiante — questionar autoridades, desafiar recusar regras, incomodar deliberadamente, culpar outros; (3) Indole Vingativa — foi malvado/vingativo pelo menos 2 vezes nos ultimos 6 meses. Criterio B exige sofrimento ou impacto negativo em funcionamento social/educacional/profissional. Criterio C exclui curso exclusivo de transtorno psicotico, uso de substancia, depressivo, bipolar e nao preencher criterios de transtorno disruptivo da desregulacao do humor.",
    "notas_clinicas": "- **Notas:**"
  },
  
});
export type DisorderData = typeof data;
