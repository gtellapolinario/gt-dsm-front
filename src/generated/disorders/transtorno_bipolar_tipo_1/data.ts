import { TranstornoBipolarTipo1Schema } from "./schema";

export const data = TranstornoBipolarTipo1Schema.parse({
  "$schema_version": "2.2.0",
  "meta": {
    "id": "transtorno_bipolar_tipo_1",
    "nome_completo": "Transtorno Bipolar Tipo I",
    "sigla": "TB1",
    "codigo": {
      "dsm5": "296.40",
      "cid10": "F31.9",
      "cid11": "6A60"
    },
    "capitulo": "Transtorno Bipolar e Transtornos Relacionados",
    "capitulo_id": "03",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Psicose maníaco-depressiva",
      "Transtorno maníaco-depressivo clássico"
    ]
  },
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
        "id": "B",
        "nome": "Sintomas de Mania (Episódio Maníaco)",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 3,
            "pediatria": 3
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "B1",
                "rotulo": "Autoestima inflada ou grandiosidade",
                "desc": "Presença de autoconfiança excessiva sem senso crítico ou sentimento acentuado de grandiosidade, podendo alcançar proporções delirantes.",
                "pergunta": "A pessoa tem se sentido extremamente confiante, com a sensação de ter capacidades ou importância muito acima do comum?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Iniciar tarefas complexas sem qualquer treinamento",
                    "Acreditar ter relação especial com celebridades"
                ]
            },
            {
                "id": "B2",
                "rotulo": "Necessidade de sono reduzida",
                "desc": "Sensação de estar plenamente descansado e cheio de energia após dormir uma quantidade de horas significativamente menor que o habitual.",
                "pergunta": "A pessoa sentiu que precisava de muito menos sono para se sentir descansado, como apenas duas ou três horas de sono por noite?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Ficar sem dormir por dias sem se sentir cansado",
                    "Acordar muito cedo cheio de energia"
                ]
            },
            {
                "id": "B3",
                "rotulo": "Discurso loquaz ou pressionado",
                "desc": "Falar de forma mais rápida, volumosa e contínua do que o normal, demonstrando urgência ou pressão para continuar falando.",
                "pergunta": "As pessoas comentaram que a pessoa estava falando muito rápido ou que era difícil interromper a sua fala?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Falar sem parar e de forma invasiva",
                    "Fazer piadas constantes, trocadilhos ou gestos dramáticos"
                ]
            },
            {
                "id": "B4",
                "rotulo": "Fuga de ideias ou pensamentos acelerados",
                "desc": "Experiência subjetiva de que os pensamentos estão ocorrendo em velocidade excessiva, ou fluxo contínuo de fala com mudanças abruptas de tema.",
                "pergunta": "A pessoa sentiu como se sua mente estivesse correndo rápido demais, com os pensamentos atropelando uns aos outros?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Mudanças repentinas de um tópico para outro na fala",
                    "Sensação de mente abarrotada que dificulta a fala"
                ]
            },
            {
                "id": "B5",
                "rotulo": "Distratibilidade",
                "desc": "Incapacidade de ignorar ou filtrar estímulos externos irrelevantes, fazendo com que a atenção seja facilmente desviada de tarefas principais.",
                "pergunta": "Ficou muito difícil manter a atenção nas coisas porque qualquer barulho ou detalhe ao redor chamava sua atenção?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Desviar a conversa por causa de barulhos ao fundo ou objetos na sala",
                    "Não conseguir seguir orientações simples"
                ]
            },
            {
                "id": "B6",
                "rotulo": "Aumento da atividade ou agitação psicomotora",
                "desc": "Aumento marcante em atividades direcionadas a objetivos (sociais, profissionais, acadêmicos ou sexuais) ou agitação psicomotora improdutiva.",
                "pergunta": "A pessoa se envolveu em muito mais projetos ao mesmo tempo, ou sentiu uma agitação física que o impedia de ficar parado?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Assumir múltiplos novos projetos simultaneamente em horários incomuns",
                    "Andar de um lado para o outro de forma inquieta"
                ]
            },
            {
                "id": "B7",
                "rotulo": "Envolvimento em atividades de alto risco",
                "desc": "Engajamento impulsivo em atividades prazerosas com alta probabilidade de consequências prejudiciais ou catastróficas.",
                "pergunta": "A pessoa tomou atitudes impulsivas ou arriscadas, como compras excessivas ou investimentos arriscados, sem pensar nas consequências?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Compras desenfreadas sem fundos para pagamento",
                    "Investimentos financeiros insensatos ou comportamento sexual de risco"
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
        "id": "humor_energia_elevados",
        "letra": "A",
        "rotulo": "Humor e energia elevados",
        "tipo": "temporal_duracao_minima",
        "ui_widget": "campo_duracao_meses",
        "obrigatorio": true,
        "icone": "Zap",
        "descricao_completa": "Período distinto de humor anormal e persistentemente elevado, expansivo ou irritável e aumento persistente da atividade ou energia, durando pelo menos uma semana, na maior parte do dia, quase todos os dias (ou qualquer duração se houver hospitalização).",
        "nota": null
    },
    {
        "id": "prejuizo_grave_hospitalizacao",
        "letra": "C",
        "rotulo": "Prejuízo acentuado ou psicose",
        "tipo": "prejuizo_funcional",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "TriangleAlert",
        "descricao_completa": "A perturbação do humor é grave a ponto de causar prejuízo acentuado no funcionamento social ou profissional, ou necessitar de hospitalização para prevenir danos a si mesmo ou a outros, ou há presença de características psicóticas.",
        "nota": null
    },
    {
        "id": "exclusao_substancias_medicas",
        "letra": "D",
        "rotulo": "Não atribuível a substância/condição médica",
        "tipo": "exclusao_substancia_medica",
        "ui_widget": "toggle_com_justificativa_obrigatoria",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "O episódio não é atribuível aos efeitos fisiológicos diretos de uma substância (droga de abuso, medicamento ou outro tratamento) ou a outra condição médica.",
        "nota": null,
        "ddx_sugeridos": [
            "intoxicacao_estimulantes",
            "hipertireoidismo"
        ]
    },
    {
        "id": "exclusao_espectro_psicotico",
        "letra": "E",
        "rotulo": "Não melhor explicado por psicose",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Brain",
        "descricao_completa": "A ocorrência do episódio maníaco não é mais bem explicada por transtorno esquizoafetivo, esquizofrenia, transtorno esquizofreniforme, transtorno delirante ou outros transtornos do espectro da esquizofrenia.",
        "nota": null,
        "ddx_sugeridos": [
            "transtorno_esquizoafetivo",
            "esquizofrenia",
            "transtorno_delirante",
            "transtorno_esquizofreniforme"
        ]
    }
],
  "subtipos": {
    "presente": false,
    "nome": null,
    "natureza": null,
    "formal_dsm": false,
    "mutuamente_exclusivos": null,
    "subtipos": [],
    "nota_aplicador": "O DSM-5-TR não define subtipos formais para este diagnóstico."
},
  "especificadores": [
    {
        "id": "com_sintomas_ansiosos",
        "nome": "Com sintomas ansiosos",
        "tipo": "escala_ordinal",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "com_caracteristicas_mistas",
        "nome": "Com características mistas",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "com_ciclagem_rapida",
        "nome": "Com ciclagem rápida",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "com_caracteristicas_melancolicas",
        "nome": "Com características melancólicas",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "com_caracteristicas_atipicas",
        "nome": "Com características atípicas",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "com_caracteristicas_psicoticas",
        "nome": "Com características psicóticas",
        "tipo": "enum",
        "ortogonal": true,
        "regra_criterial": null,
        "opcoes": [
            "Com características psicóticas congruentes com o humor",
            "Com características psicóticas incongruentes com o humor"
        ]
    },
    {
        "id": "com_catatonia",
        "nome": "Com catatonia",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": "Exige o uso do código adicional 293.89 (F06.1)."
    },
    {
        "id": "com_inicio_periparto",
        "nome": "Com início no periparto",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    },
    {
        "id": "com_padrao_sazonal",
        "nome": "Com padrão sazonal",
        "tipo": "booleano",
        "ortogonal": true,
        "regra_criterial": null
    }
],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6A60",
        "equivalencia": "contextual",
        "regra": "Selecionar a subcategoria conforme episódio atual ou mais recente, sintomas psicóticos e remissão.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "formal_contextual",
    "escopo": "episodio_atual",
    "tipo": "gravidade_por_tipo_de_episodio",
    "lembrete_aplicador": "Atribua a gravidade ao episódio atual, não ao transtorno bipolar de forma global.",
    "regras_por_episodio": [
        {
            "episodio": "maniaco",
            "label": "Episódio maníaco",
            "niveis": [
                {
                    "id": "leve",
                    "label": "Leve",
                    "descritor": "Estão presentes apenas os sintomas mínimos exigidos para o episódio maníaco."
                },
                {
                    "id": "moderada",
                    "label": "Moderada",
                    "descritor": "Há aumento muito significativo da atividade ou prejuízo do julgamento."
                },
                {
                    "id": "grave",
                    "label": "Grave",
                    "descritor": "É necessária supervisão quase contínua para prevenir dano físico a si ou a terceiros."
                }
            ]
        },
        {
            "episodio": "depressivo_maior",
            "label": "Episódio depressivo maior",
            "niveis": [
                {
                    "id": "leve",
                    "label": "Leve",
                    "descritor": "Poucos sintomas além do mínimo; sofrimento manejável e pequeno prejuízo funcional."
                },
                {
                    "id": "moderada",
                    "label": "Moderada",
                    "descritor": "Número, intensidade dos sintomas ou prejuízo entre leve e grave."
                },
                {
                    "id": "grave",
                    "label": "Grave",
                    "descritor": "Sintomas substancialmente excedentes, sofrimento não manejável ou prejuízo funcional acentuado."
                }
            ]
        }
    ],
    "observacao": "Não aplicar níveis de gravidade ao episódio hipomaníaco."
},
  "hierarquia": {
    "presente": true,
    "exclui_se_diagnosticado": ["transtorno_depressivo_maior", "transtorno_depressivo_persistente", "transtorno_disruptivo_desregulacao_humor", "transtorno_bipolar_tipo_2", "transtorno_ciclotimico"],
    "exclui_diagnostico_de": ["transtorno_bipolar_tipo_2", "transtorno_ciclotimico"],
    "notas": "A ocorrência de um episódio maníaco completo exclui permanentemente o diagnóstico de Transtorno Bipolar Tipo II e de Transtorno Ciclotímico.",
      },
  "dominios_impacto": [
    {
        "id": "ocupacional",
        "label": "Desempenho ocupacional",
        "icone": "Briefcase",
        "relevante_para": "adulto"
    },
    {
        "id": "academico",
        "label": "Aprendizagem e desempenho acadêmico",
        "icone": "GraduationCap",
        "relevante_para": "transversal"
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
        "id": "transtorno_depressivo_maior",
        "condicao": "Transtorno Depressivo Maior",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Pode apresentar sintomas maníacos ou hipomaníacos sublimiares, mas no Bipolar I há presença documentada de pelo menos um episódio maníaco completo na vida.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_bipolar_tipo_ii",
        "condicao": "Transtorno Bipolar Tipo II",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Diferencia-se pela ausência de qualquer episódio maníaco anterior na história de vida.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtornos_de_ansiedade",
        "condicao": "Transtornos de ansiedade",
        "natureza": "transtorno_mental",
        "ponto_distincao": "As ruminações ansiosas podem se assemelhar a pensamentos acelerados, mas a ansiedade não apresenta a natureza episódica clara de mania nem aumento de energia autodirecionada.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_de_deficit_de_atencao_hiperatividade",
        "condicao": "Transtorno de Déficit de Atenção/Hiperatividade",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Apresenta início precoce e curso contínuo, sem a ciclicidade típica de episódios delimitados do transtorno bipolar.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_da_personalidade_borderline",
        "condicao": "Transtorno da Personalidade Borderline",
        "natureza": "transtorno_mental",
        "ponto_distincao": "A labilidade do humor é crônica e reativa a eventos interpessoais, enquanto a mania exige episódios delimitados com mudança inequívoca no comportamento basal.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "hipertireoidismo_ou_condicao_neurologica",
        "condicao": "Hipertireoidismo ou condição neurológica",
        "natureza": "condicao_medica",
        "ponto_distincao": "Sinais sistêmicos, neurológicos ou curso temporal incompatível com episódio de mania favorecem causa médica.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_do_humor_induzido_por_substancia_ou_medicamento",
        "condicao": "Transtorno do humor induzido por substância ou medicamento",
        "natureza": "substancia_medicamento",
        "ponto_distincao": "Início e remissão temporalmente ligados a estimulantes, corticosteroides ou outro agente favorecem etiologia induzida.",
        "pertence_a_mesma_classe_dsm": false
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtornos de ansiedade (pânico, fobia social)",
      "frequencia": "alta",
      "nota": "Ocorrem em cerca de três quartos dos indivíduos."
    },
    {
      "condicao": "TDAH e Transtornos de Conduta",
      "frequencia": "alta",
      "nota": "Ocorrem em mais da metade dos indivíduos."
    },
    {
      "condicao": "Transtorno por uso de álcool e outras substâncias",
      "frequencia": "alta",
      "nota": "Ocorrem em mais da metade dos indivíduos, elevando muito o risco de suicídio."
    },
    {
      "condicao": "Síndrome metabólica e enxaqueca",
      "frequencia": "alta",
      "nota": "Taxas marcadamente elevadas em comparação com a população geral."
    }
  ],
  "instrumentos_complementares": [
    {
        "id": "ymrs",
        "nome": "Escala de Avaliação de Mania de Young",
        "sigla": "YMRS",
        "uso": "gravidade_monitoramento",
        "faixa_etaria": "transversal",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "mdq",
        "nome": "Questionário de Transtornos do Humor",
        "sigla": "MDQ",
        "uso": "triagem",
        "faixa_etaria": "adulto",
        "obrigatorio_para_diagnostico": false,
        "fonte": "pratica_clinica_validada",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    },
    {
        "id": "asrm",
        "nome": "Escala de Autoavaliação de Mania de Altman",
        "sigla": "ASRM",
        "uso": "gravidade_monitoramento",
        "faixa_etaria": "adulto",
        "obrigatorio_para_diagnostico": false,
        "fonte": "apa_dsm5_secao_iii",
        "nota_aplicador": "Complementa a avaliação clínica; não substitui os critérios diagnósticos."
    }
],
  "prevalencia": {
    "populacao_geral": "0,6% nos EUA (estimativa de 12 meses); variando de 0,0% a 0,6% internacionalmente.",
    "proporcao_sexo": "Razão de aproximadamente 1,1:1 (sexo masculino para sexo feminino).",
    "variacoes_culturais": "Prevalência em 12 meses significativamente mais baixa para afro-caribenhos do que para afro-americanos ou brancos nos EUA.",
    "notas": "Mais comum em países com renda elevada do que com renda baixa (1,4% vs. 0,7%).",
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Cerca de 18 anos",
    "trajetoria": "Mais de 90% dos indivíduos com um único episódio de mania apresentam recorrências ao longo da vida. Cerca de 60% dos episódios de mania ocorrem imediatamente antes de um episódio depressivo maior.",
    "prognostico": "Cerca de 30% mostram prejuízo profissional duradouro. Déficits cognitivos podem persistir e comprometer a funcionalidade mesmo em períodos eutímicos.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "episodico_com_sintomas",
        "criteria": [],
        "diagnostic_rule": "**AND logico:** EpisodioManiaCompleto(A,B,C,D) AND ExclusaoPsicotico(B) AND NOT AtribuivelSubstanciaMedica(D)",
        "clusters": [
          "Humor alterado",
          "Energia/Atividade",
          "Sintomas maniacos B",
          "Gravidade funcional"
        ],
        "duration": null,
        "age_onset": "tipica:** Media ~18 anos",
        "functional_impairment": null,
        "exclusions": [
          "Efeitos fisiologicos de substancia (alcool, drogas, medicamentos como corticosteroides, L-dopa, antidepressivos)",
          "Outra condicao medica (hipertireoidismo, doenca de Cushing, esclerose multipla, AVC, lesao cerebral)",
          "Transtornos do espectro da esquizofrenia",
          "Efeitos colaterais de medicamentos psicotropicos (cautela: 1-2 sintomas nao especificos nao bastam)",
          "Transtorno de deficit de atencao/hiperatividade (sintomas persistentes vs. episodio distinto)",
          "Transtorno da personalidade borderline (mudanca de humor deve ser episodio distinto)",
          "Transtorno disruptivo da desregulacao do humor (irritabilidade nao episodica persistente em criancas)"
        ],
        "specifiers": [
          "Tipo do episodio atual/mais recente: maniaco, hipomaniaco, depressivo",
          "Com sintomas ansiosos (leve/moderado/moderado-grave/grave)",
          "Com caracteristicas mistas",
          "Com ciclagem rapida (4+ episodios de humor em 12 meses)",
          "Com caracteristicas melancolicas",
          "Com caracteristicas atipicas",
          "Com caracteristicas psicoticas (congruentes ou incongruentes com humor)",
          "Com catatonia",
          "Com inicio no periparto",
          "Com padrao sazonal",
          "Estado de remissao: parcial/completa"
        ],
        "operational_profiles": [],
        "critical_differentials": [
          "----------",
          "TB Tipo II",
          "Transtorno Depressivo Maior",
          "Transtorno Esquizoafetivo",
          "TDAH",
          "TP Borderline",
          "TDDH (criancas)",
          "Substancia induzida"
        ],
        "key_questions": [
          "Voce ja teve um periodo de pelo menos uma semana em que se sentiu excessivamente bem, cheio de energia, ou extremamente irritavel, de forma diferente do seu normal?",
          "Nesse periodo, voce dormiu muito menos do que o habitual mas se sentia descansado?",
          "Voce falava mais que o normal ou sentia pressao para continuar falando sem parar?",
          "Suas ideias pareciam correr muito rapido, ou voce tinha dificuldade de manter a atencao em uma coisa so?",
          "Voce se envolveu em atividades de forma intensa (trabalho, social, sexual) ou ficava agitado sem conseguir parar?",
          "Tomou decisoes arriscadas ou impulsivas que nao tomaria normalmente (gastar muito, comportamento sexual, investimentos)?",
          "Esse periodo causou problemas graves no trabalho, nas relacoes, ou precisou de hospitalizacao?",
          "Ja teve periodos de 4+ dias com energia e humor elevados, que outras pessoas notaram, mas que nao causaram problemas graves?",
          "Ja teve periodos de pelo menos 2 semanas se sentindo deprimido ou sem interesse nas coisas, com mudancas de sono, apetite, energia ou pensamentos de morte?",
          "Os sintomas de hiperatividade/impulsividade representam uma mudanca clara do comportamento habitual da crianca, ou sao persistentes ao longo do tempo?"
        ],
        "alerts": [],
        "source_trace": {
          "markdown_section": "### TRANSTORNO BIPOLAR TIPO I",
          "patches_applied": []
        },
        "category": "FULL",
        "ui_mode": "structured_full",
        "render_structured_interview": true
      },
    "enrichment_status": {
        "has_poor": true,
        "has_master": true,
        "has_inventory": true,
        "has_hierarchy": true,
        "has_cid11": true,
            "match_notes": {
          "poor": "id",
          "master": "id",
          "inventario": "id",
          "hierarquia": "id",
          "cid11": "id",
          "super": "id"
        }
      }
  },
  "metadados_globais": {
    "fonte_capitulo_md": "03_transtorno_bipolar_transtornos_relacionados.md",
    "fonte_inventario_md": "inventario/03_inventario.md",
    "data_extracao": "2026-05-21",
    "modelo_agente": "antigravity-agent",
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:** Requer ao menos 1 episodio maniaco completo na vida. Episodio maniaco = A (humor elevado/expansivo/irritavel + energia/atividade aumentada, >=7 dias ou hospitalizacao) + B (3/7 sintomas, ou 4/7 se humor apenas irritavel) + C (prejuizo acentuado social/profissional OU hospitalizacao OU caracteristicas psicoticas) + D (nao atribuivel a substancia ou condicao medica). Nao ha exigencia de episodio depressivo maior ou hipomaníaco, embora sejam comuns. Exclusao B: nao melhor explicado por esquizoafetivo, esquizofrenia, transtorno esquizofreniforme, transtorno delirante ou outro transtorno psicótico.",
    "notas_clinicas": "- **Notas:**"
  },
  
});
export type DisorderData = typeof data;
