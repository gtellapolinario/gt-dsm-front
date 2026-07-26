import { TranstornoDepressivoMaiorSchema } from "./schema";

export const data = TranstornoDepressivoMaiorSchema.parse({
  "$schema_version": "1.0.0",
  "meta": {
    "id": "transtorno_depressivo_maior",
    "nome_completo": "Transtorno Depressivo Maior",
    "sigla": "TDM",
    "codigo": {
      "dsm5": "296.21",
      "cid10": "F32.0",
      "cid11": "6A70"
    },
    "capitulo": "Transtornos Depressivos",
    "capitulo_id": "04",
    "grupo": null,
    "faixa_etaria_alvo": "ambos",
    "versao_complementar_existe": false,
    "sinonimos_historicos": [
      "Depressão maior",
      "Depressão unipolar",
      "Episódio depressivo maior"
    ]
  },
  "estrutura_geral": "polythetic_com_ancora",
  "clusters_sintomas": [
    {
      "id": "A",
      "nome": "Episódio Depressivo Maior (5/9 com âncora)",
      "tipo": "polythetic_com_ancora",
      "limiar": {
        "adulto": 5,
        "pediatria": 5
      },
      "ancora_obrigatoria": {
        "descricao": "Ao menos 1 entre: A1 (humor deprimido) ou A2 (anedonia)",
        "ids_obrigatorios": [
          "A1",
          "A2"
        ],
        "n_minimo": 1
      },
      "sintomas": [
        {
          "id": "A1",
          "rotulo": "Humor deprimido na maior parte do dia",
          "desc": "Humor deprimido na maior parte do dia, quase todos os dias (relato subjetivo ou observação). Em crianças/adolescentes pode ser irritável.",
          "pergunta": "Você se sente triste, vazio ou sem esperança na maior parte do dia, quase todos os dias?",
          "exemplos_clinicos": [
            "Parece prestes a chorar",
            "Descreve sentir vazio",
            "Irritabilidade persistente em crianças"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A2",
          "rotulo": "Perda de interesse ou prazer (anedonia)",
          "desc": "Acentuada diminuição do interesse ou prazer em todas ou quase todas as atividades, na maior parte do dia, quase todos os dias.",
          "pergunta": "Você perdeu o interesse ou o prazer em coisas que antes gostava de fazer?",
          "exemplos_clinicos": [
            "Parou de praticar hobbies",
            "Não sente prazer em atividades sociais"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A3",
          "rotulo": "Perda/ganho de peso ou alteração do apetite",
          "desc": "Perda ou ganho significativo de peso sem dieta (>5% do peso corporal em 1 mês) ou redução/aumento do apetite quase todos os dias. Em crianças, insucesso no ganho de peso esperado.",
          "pergunta": "Você notou mudança significativa no seu peso ou apetite sem estar fazendo dieta?",
          "exemplos_clinicos": [
            "Perda de 5kg em um mês",
            "Avidez por carboidratos"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A4",
          "rotulo": "Insônia ou hipersonia",
          "desc": "Insônia (inicial, intermediária ou terminal) ou hipersonia quase todos os dias.",
          "pergunta": "Você tem tido dificuldade para dormir ou está dormindo em excesso?",
          "exemplos_clinicos": [
            "Acorda às 3h e não consegue voltar a dormir",
            "Dorme 12 horas por dia"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A5",
          "rotulo": "Agitação ou retardo psicomotor observável",
          "desc": "Agitação ou retardo psicomotor quase todos os dias, observáveis por outras pessoas (não apenas sensações subjetivas).",
          "pergunta": "Outras pessoas notaram que você está muito agitado ou muito lento nos movimentos e na fala?",
          "exemplos_clinicos": [
            "Andar sem parar de um lado para o outro",
            "Fala lentificada com pausas longas"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A6",
          "rotulo": "Fadiga ou perda de energia",
          "desc": "Fadiga ou perda de energia quase todos os dias, mesmo sem esforço físico prévio.",
          "pergunta": "Você se sente cansado ou sem energia quase todos os dias, mesmo para tarefas simples?",
          "exemplos_clinicos": [
            "Tomar banho e se vestir leva o dobro do tempo habitual"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A7",
          "rotulo": "Inutilidade ou culpa excessiva/inapropriada",
          "desc": "Sentimentos de inutilidade ou culpa excessiva/inapropriada (que podem ser delirantes) quase todos os dias.",
          "pergunta": "Você se sente inútil ou com culpa excessiva por coisas que não são sua responsabilidade?",
          "exemplos_clinicos": [
            "Convicção de ser pessoalmente responsável por problemas alheios"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A8",
          "rotulo": "Dificuldade de concentração ou indecisão",
          "desc": "Capacidade diminuída para pensar, concentrar-se ou tomar decisões quase todos os dias.",
          "pergunta": "Você tem tido dificuldade para se concentrar, pensar claramente ou tomar decisões?",
          "exemplos_clinicos": [
            "Queda no rendimento escolar em crianças",
            "Dificuldade de memória em idosos"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A9",
          "rotulo": "Pensamentos de morte ou ideação suicida",
          "desc": "Pensamentos recorrentes de morte, ideação suicida sem plano específico, tentativa de suicídio ou plano específico.",
          "pergunta": "Você tem pensado em morte, em se machucar ou em suicídio?",
          "exemplos_clinicos": [
            "Desejo passivo de não acordar",
            "Plano específico elaborado"
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
  "criterios_condicionais": [
    {
      "id": "sofrimento_funcional",
      "letra": "B",
      "rotulo": "Sofrimento ou prejuízo funcional clinicamente significativo",
      "tipo": "prejuizo_funcional",
      "ui_widget": "toggle_com_justificativa_obrigatoria",
      "obrigatorio": true,
      "icone": "Frown",
      "ddx_sugeridos": [],
      "descricao_completa": "Os sintomas causam sofrimento clinicamente significativo ou prejuízo no funcionamento social, profissional ou em outras áreas importantes da vida.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_substancia_medica",
      "letra": "C",
      "rotulo": "Não atribuível a substância ou condição médica",
      "tipo": "exclusao_substancia_medica",
      "ui_widget": "toggle_com_justificativa_obrigatoria",
      "obrigatorio": true,
      "icone": "Ban",
      "ddx_sugeridos": [
        "hipotireoidismo",
        "avc",
        "cancer"
      ],
      "descricao_completa": "O episódio não é atribuível aos efeitos fisiológicos de uma substância ou a outra condição médica.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_psicotico",
      "letra": "D",
      "rotulo": "Não melhor explicado por transtorno psicótico",
      "tipo": "exclusao_diagnostica",
      "ui_widget": "select_multiplos_ddx",
      "obrigatorio": true,
      "icone": "Brain",
      "ddx_sugeridos": [
        "transtorno_esquizoafetivo",
        "esquizofrenia",
        "transtorno_esquizofreniforme",
        "transtorno_delirante"
      ],
      "descricao_completa": "A ocorrência do EDM não é mais bem explicada por transtorno esquizoafetivo, esquizofrenia, transtorno esquizofreniforme, transtorno delirante, outro transtorno do espectro da esquizofrenia.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "exclusao_mania_hipomania",
      "letra": "E",
      "rotulo": "Nunca houve episódio maníaco ou hipomaníaco",
      "tipo": "exclusao_diagnostica",
      "ui_widget": "toggle_com_justificativa_obrigatoria",
      "obrigatorio": true,
      "icone": "Ban",
      "ddx_sugeridos": [
        "transtorno_bipolar_tipo_1",
        "transtorno_bipolar_tipo_2"
      ],
      "descricao_completa": "Nunca houve episódio maníaco ou hipomaníaco (exclusão não se aplica se episódios foram induzidos por substância ou condição médica).",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    }
  ],
  "subtipos": {
    "presente": true,
    "nome": "Episodicidade",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "episodio_unico",
        "codigo": {
          "dsm5": "296.2x",
          "cid10": "F32.x",
          "cid11": null
        },
        "label": "Episódio único",
        "descricao": "Primeiro episódio depressivo maior na vida do indivíduo.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "episodio_recorrente",
        "codigo": {
          "dsm5": "296.3x",
          "cid10": "F33.x",
          "cid11": null
        },
        "label": "Episódio recorrente",
        "descricao": "Dois ou mais episódios com intervalo de pelo menos 2 meses entre eles sem critérios para EDM.",
        "sintomas_caracteristicos": []
      }
    ],
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  "especificadores": [
    {
      "id": "com_sintomas_ansiosos",
      "nome": "Com sintomas ansiosos",
      "tipo": "gravidade_ordinal",
      "ortogonal": true,
      "opcoes": [
        {
          "id": "leve",
          "label": "Leve (2 sintomas ansiosos)",
          "codigo_adicional": null
        },
        {
          "id": "moderado",
          "label": "Moderado (3 sintomas ansiosos)",
          "codigo_adicional": null
        },
        {
          "id": "moderado_grave",
          "label": "Moderado-grave (4-5 sintomas)",
          "codigo_adicional": null
        },
        {
          "id": "grave",
          "label": "Grave (4-5 sintomas + agitação motora)",
          "codigo_adicional": null
        }
      ],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "com_caracteristicas_mistas",
      "nome": "Com características mistas",
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
      "id": "com_caracteristicas_melancolicas",
      "nome": "Com características melancólicas",
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
      "id": "com_caracteristicas_atipicas",
      "nome": "Com características atípicas",
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
      "id": "com_caracteristicas_psicoticas",
      "nome": "Com características psicóticas",
      "tipo": "select_unico",
      "ortogonal": true,
      "opcoes": [
        {
          "id": "congruentes_humor",
          "label": "Com características psicóticas congruentes com o humor",
          "codigo_adicional": null
        },
        {
          "id": "incongruentes_humor",
          "label": "Com características psicóticas incongruentes com o humor",
          "codigo_adicional": null
        }
      ],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    },
    {
      "id": "com_catatonia",
      "nome": "Com catatonia",
      "tipo": "booleano",
      "ortogonal": true,
      "opcoes": [],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": "Código adicional 293.89 (F06.1).",
        "fonte_passada_1": true
      }
    },
    {
      "id": "com_inicio_periparto",
      "nome": "Com início no periparto",
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
      "id": "com_padrao_sazonal",
      "nome": "Com padrão sazonal",
      "tipo": "booleano",
      "ortogonal": true,
      "opcoes": [],
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": "Aplica-se somente ao episódio recorrente.",
        "fonte_passada_1": true
      }
    }
  ],
  "gravidade": {
    "classificacao_dsm": "formal_contextual",
    "escopo": "episodio_depressivo_maior_atual",
    "tipo": "sintomas_intensidade_e_prejuizo",
    "lembrete_aplicador": "Classifique o episódio atual pelo número e intensidade dos sintomas e pelo prejuízo funcional.",
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
    ],
    "regra_atribuicao": "Use a apresentação atual do episódio; não trate remissão como nível de gravidade."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [
      "transtorno_bipolar_tipo_1",
      "transtorno_bipolar_tipo_2"
    ],
    "exclui_diagnostico_de": [],
    "notas": "TDM é excluído se houver qualquer episódio maníaco ou hipomaníaco anterior (exceto se induzido por substância/condição médica).",
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
      "id": "academico",
      "label": "Desempenho Acadêmico",
      "icone": "GraduationCap",
      "relevante_para": "ambos"
    },
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "autocuidado",
      "label": "Autocuidado Básico",
      "icone": "Bath",
      "relevante_para": "transversal"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Episódio maníaco com humor irritável ou misto",
      "ponto_distincao": "Distinguir por presença de sintomas maníacos concomitantes; exige avaliação clínica criteriosa.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno do humor devido a condição médica",
      "ponto_distincao": "EDM é diagnóstico correto se a perturbação não for consequência fisiopatológica direta de condição médica específica.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno depressivo/bipolar induzido por substância",
      "ponto_distincao": "Distingue-se por substância etiologicamente relacionada à perturbação de humor.",
      "pertence_a_classe": false
    },
    {
      "condicao": "TDAH",
      "ponto_distincao": "Distratibilidade e baixa tolerância à frustração ocorrem em ambos; se critérios satisfeitos, TDAH pode ser diagnosticado conjuntamente.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno de adaptação com humor deprimido",
      "ponto_distincao": "No transtorno de adaptação não são satisfeitos todos os critérios para EDM.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Tristeza/luto normal",
      "ponto_distincao": "Luto não costuma provocar EDM; quando ocorrem juntos, prognóstico é pior; exige julgamento clínico.",
      "pertence_a_classe": false
    }
  ],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtornos relacionados a substâncias",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno de pânico",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno obsessivo-compulsivo",
      "frequencia": "moderada",
      "nota": null
    },
    {
      "condicao": "Anorexia nervosa e Bulimia nervosa",
      "frequencia": "moderada",
      "nota": null
    },
    {
      "condicao": "Transtorno da personalidade borderline",
      "frequencia": "alta",
      "nota": "Aumenta sensivelmente o risco de tentativas de suicídio."
    }
  ],
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "Aproximadamente 7% (prevalência de 12 meses nos EUA); prevalência em 18-29 anos é 3x maior que em indivíduos acima de 60 anos",
    "proporcao_sexo": "1,5 a 3x mais em mulheres que em homens; disparidade inicia na adolescência",
    "variacoes_culturais": "Diferenças de até 7x nas taxas entre culturas; sintomas somáticos como queixa predominante em muitas culturas; insônia e perda de energia mais uniformemente relatados",
    "notas": "Alta mortalidade associada, em boa parte pelo suicídio. Indivíduos deprimidos em asilos têm probabilidade aumentada de morte no primeiro ano.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Pico na década dos 20 anos; pode surgir em qualquer idade; probabilidade aumenta sensivelmente com a puberdade",
    "trajetoria": "Curso bastante variável. Recuperação começa em 3 meses em 2/5 dos casos; em 1 ano em 4/5. Risco de recorrência aumenta progressivamente com número de episódios. Possível transição para bipolar, especialmente em início na adolescência ou com características psicóticas.",
    "prognostico": "Cronicidade aumenta probabilidade de transtornos de personalidade, ansiedade e abuso de substância. Tempos médios de recuperação estáveis por longos períodos.",
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  
  "metadados_globais": {
    "fonte_capitulo_md": "04_transtornos_depressivos.md",
    "fonte_inventario_md": "inventario/04_inventario.md",
    "data_extracao": "2026-05-31",
    "modelo_agente": "claude-sonnet-4-6",
    "lacunas_globais": [
      "marcadores_laboratoriais_validados"
    ],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "id": "transtorno_depressivo_maior",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "rendering": {
    "estrutura_diagnostica": "polythetic_monocluster",
    "criteria": [],
    "diagnostic_rule": "- Critério A (≥5 de 9 sintomas + 1 obrigatório) **E** Critério B (prejuízo/sofrimento) **E** Critério C (excluir substância/condição médica) **E** Critério D (excluir psicose) **E** Critério E (excluir bipolar)",
    "clusters": [],
    "duration": null,
    "age_onset": null,
    "functional_impairment": null,
    "exclusions": [],
    "specifiers": [
      "| ≥2 de: nervoso/tenso, inquieto, dificuldade de concentração por preocupações, temor, perda de controle. Gravidade: leve=2, moderada=3, moderada-grave=4-5, grave=4-5+agitação |",
      "| ≥3 de: humor elevado, autoestima inflada, mais loquaz, fuga de ideias, aumento de energia, envolvimento em atividades de risco, redução da necessidade de sono. Não satisfaz critérios de mania. |",
      "| A: perda de prazer em quase tudo OU falta de reatividade; B: ≥3 de: humor distinto (prostração), pior pela manhã, despertar precoce ≥2h, agitação/retardo psicomotor, anorexia/perda de peso, culpa excessiva |",
      "| A: reatividade de humor; B: ≥2 de: ganho de peso/aumento do apetite, hipersonia, paralisia de chumbo, sensibilidade à rejeição interpessoal. NÃO satisfaz critérios melancólicos ou catatonia. |",
      "| Delírios e/ou alucinações presentes. Especificar: congruentes com humor (culpa, doença, morte) OU incongruentes |",
      "| Critérios de catatonia presentes durante maior parte do episódio. Código adicional 293.89 (F06.1) |",
      "| Início durante gravidez ou até 4 semanas após parto. Episódios psicóticos no pós-parto: 1 em 500 a 1 em 1.000 partos |",
      "| SÓ episódio recorrente. Relação temporal regular com estação (ex: outono/inverno) por ≥2 anos; remissão em época característica; episódios sazonais superam não-sazonais |"
    ],
    "operational_profiles": [],
    "critical_differentials": [],
    "key_questions": [
      "Nas últimas 2 semanas, você se sentiu deprimido, triste ou sem esperança na maior parte do tempo?",
      "Perdeu o interesse ou prazer em atividades que costumava gostar?",
      "Teve mudanças no apetite ou peso? Dormiu mais ou menos do que o habitual?",
      "Tem se sentido inquieto e agitado, ou muito lento?",
      "Tem se sentido cansado ou sem energia?",
      "Tem se sentido inútil ou com culpa excessiva?",
      "Tem tido dificuldade para se concentrar ou tomar decisões?",
      "Tem tido pensamentos sobre morte ou de ferir a si mesmo?",
      "Isso tem causado problemas no trabalho, nas relações ou em outras áreas?",
      "Já teve algum período de humor anormalmente elevado com energia aumentada?"
    ],
    "alerts": [],
    "source_trace": {
      "markdown_section": "### Transtorno DEPRESSIVO MAIOR (TDM)",
      "patches_applied": [
        "gravidade.tipo: ordinal_simples -> episodio_atual (CRITICAL aprovado)"
      ]
    },
    "category": "FULL",
    "ui_mode": "structured_full",
    "render_structured_interview": true
  },
  "sigla": "TDM",
  "versao_complementar_existe": false,
  "inventario_clinico": {
    "codigo_bruto": "- **Codigo DSM-5 / CID-10:** Episodio unico — 296.21-296.26 (F32.0-F32.5, F32.9); Episodio recorrente — 296.31-296.36 (F33.0-F33.42, F33.9). Com caracteristicas psicoticas: 296.24 (F32.3) / 296.34 (F33.3)",
    "estrutura_efetiva": "- **Estrutura efetiva:** Politetico (5/9 sintomas, ancora em A1 humor deprimido OU A2 perda de interesse/prazer) + B (sofrimento clinicamente significativo ou prejuizo funcional) + C (nao atribuível a substancia/condicao médica) + D (nao melhor explicado por transtorno esquizoafetivo/esquizofrenia/outro psicótico) + E (nunca episodio maníaco/hipomaníaco, exceto se induzido por substancia/condicao médica). Duracao: >=2 semanas. Sintomas presentes na maior parte do dia, quase todos os dias.",
    "notas_clinicas": "- **Notas:**"
  },
  "hierarquia_exclusao": {
    "exclui": [
      "transtorno_bipolar_tipo_1",
      "transtorno_bipolar_tipo_2"
    ],
    "exclui_de": [],
    "notas_hierarquia": "Extraído do índice de hierarquias do capítulo"
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
});
export type DisorderData = typeof data;
