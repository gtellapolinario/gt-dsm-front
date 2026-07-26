import { TpEsquizotipicoSchema } from "./schema";

export const data = TpEsquizotipicoSchema.parse({
  "$schema_version": "2.2.0",
  "meta": {
    "id": "tp_esquizotipico",
    "nome_completo": "Transtorno da Personalidade Esquizotípica",
    "sigla": "TPET",
    "codigo": {
      "dsm5": "301.22",
      "cid10": "F21",
      "cid11": "6A22"
    },
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "18",
    "grupo": "Cluster A",
    "faixa_etaria_alvo": "adulto",
    "versao_complementar_existe": false,
    "sinonimos_historicos": []
  },
  "estrutura_geral": "polythetic_monocluster",
  "clusters_sintomas": [
    {
        "id": "A",
        "nome": "Déficits Sociais, Distorções Cognitivas e Excentricidade",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 5,
            "pediatria": 5
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Ideias de referência",
                "desc": "Ideias de referência (excluindo delírios de referência).",
                "pergunta": "A pessoa frequentemente sente que eventos casuais ou comentários de outras pessoas têm um significado especial e particular para a pessoa?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A2",
                "rotulo": "Crenças estranhas ou pensamento mágico",
                "desc": "Crenças estranhas ou pensamento mágico que influenciam o comportamento e são inconsistentes com as normas subculturais.",
                "pergunta": "A pessoa tem crenças incomuns ou pensamento mágico que influenciam seu comportamento (superstições, clarividência, telepatia)?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Crença de controlar outros por pensamento",
                    "Rituais mágicos"
                ]
            },
            {
                "id": "A3",
                "rotulo": "Experiências perceptivas incomuns",
                "desc": "Experiências perceptivas incomuns, incluindo ilusões corporais.",
                "pergunta": "A pessoa tem experiências perceptivas incomuns, como sentir a presença de alguém ou ouvir vozes murmurando seu nome?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Sentir outra pessoa presente",
                    "Ouvir nome murmurado"
                ]
            },
            {
                "id": "A4",
                "rotulo": "Pensamento e discurso estranhos",
                "desc": "Pensamento e discurso estranhos (p. ex. , vago, circunstancial, metafórico, excessivamente elaborado ou estereotipado).",
                "pergunta": "Seu modo de pensar ou falar é frequentemente vago, circunstancial, metafórico ou de difícil compreensão para os outros?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Respostas excessivamente concretas ou abstratas",
                    "Uso idiossincrásico de palavras"
                ]
            },
            {
                "id": "A5",
                "rotulo": "Desconfiança ou ideação paranoide",
                "desc": "Desconfiança ou ideação paranoide.",
                "pergunta": "A pessoa é frequentemente desconfiado ou tem ideias paranoides sobre as intenções dos outros?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Crer que colegas tramam contra si"
                ]
            },
            {
                "id": "A6",
                "rotulo": "Afeto inadequado ou constrito",
                "desc": "Afeto inadequado ou constrito.",
                "pergunta": "A pessoa demonstra afeto que parece inadequado à situação ou muito constrito nas interações sociais?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Interação formal ou excessivamente contida"
                ]
            },
            {
                "id": "A7",
                "rotulo": "Comportamento ou aparência estranha, excêntrica ou peculiar",
                "desc": "Comportamento ou aparência estranha, excêntrica ou peculiar.",
                "pergunta": "A pessoa tem maneirismos incomuns, forma desleixada de vestir-se ou aparência que os outros consideram estranha ou excêntrica?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Evitar contato visual",
                    "Roupas manchadas ou inadequadas"
                ]
            },
            {
                "id": "A8",
                "rotulo": "Ausência de amigos próximos fora parentes de primeiro grau",
                "desc": "Ausência de amigos próximos ou confidentes que não sejam parentes de primeiro grau.",
                "pergunta": "A pessoa tem poucos ou nenhum amigo próximo ou confidente fora um possível parente de primeiro grau?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A9",
                "rotulo": "Ansiedade social excessiva associada a temores paranoides",
                "desc": "Ansiedade social excessiva que não diminui com o convívio e que tende a estar associada mais a temores paranoides do que a julgamentos negativos sobre si mesmo.",
                "pergunta": "A pessoa sente ansiedade social intensa que não diminui mesmo com o tempo, mais ligada a desconfiança das intenções dos outros do que a julgamentos sobre si?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Ficar mais tenso durante jantar em vez de relaxar"
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
        "id": "exclusao_psicotico_autista",
        "letra": "B",
        "rotulo": "Não ocorre exclusivamente durante curso de transtorno psicótico ou TEA",
        "tipo": "exclusao_diagnostica",
        "ui_widget": "select_multiplos_ddx",
        "obrigatorio": true,
        "icone": "Ban",
        "descricao_completa": "Não ocorre exclusivamente durante o curso de esquizofrenia, transtorno bipolar ou depressivo com sintomas psicóticos, outro transtorno psicótico ou transtorno do espectro autista.",
        "nota": null,
        "ddx_sugeridos": [
            "esquizofrenia",
            "transtorno_bipolar",
            "transtorno_espectro_autista",
            "transtorno_bipolar_tipo_i"
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
  "especificadores": [],
  "codificacao": {
    "cid11_mms": {
        "codigo_base": "6A22",
        "equivalencia": "aproximada",
        "regra": "A CID-11 classifica o transtorno esquizotípico entre os transtornos psicóticos primários, não como transtorno da personalidade.",
        "versao": "CID-11 MMS 2026-01"
    }
},
  "gravidade": {
    "classificacao_dsm": "sem_niveis_formais",
    "tipo": "modelo_categorial_sem_graduacao",
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade esquizotípica não recebe níveis formais de gravidade."
},
  "hierarquia": {
    "presente": false,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [],
    "notas": null,
      },
  "dominios_impacto": [
    {
        "id": "social",
        "label": "Funcionamento social",
        "icone": "Users",
        "relevante_para": "transversal"
    },
    {
        "id": "ocupacional",
        "label": "Desempenho ocupacional",
        "icone": "Briefcase",
        "relevante_para": "adulto"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "esquizofrenia",
        "condicao": "Esquizofrenia",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Esquizofrenia: sintomas psicóticos persistentes; esquizotípica: ideias de referência, não delírios firmes.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_do_espectro_autista",
        "condicao": "Transtorno do Espectro Autista",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Transtorno do Espectro Autista: maior comprometimento da reciprocidade social, comportamentos estereotipados.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_da_personalidade_evitativa",
        "condicao": "Transtorno da Personalidade Evitativa",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Evitativa: deseja relacionamentos mas teme rejeição; esquizotípica: falta de desejo de contatos íntimos.",
        "pertence_a_mesma_classe_dsm": true
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno Depressivo Maior",
      "frequencia": "alta",
      "nota": "30–50% em contexto clínico"
    },
    {
      "condicao": "Transtornos de ansiedade",
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
    "populacao_geral": "0,6% a 3,9%",
    "proporcao_sexo": "Pouco mais comum no sexo masculino",
    "variacoes_culturais": "Crenças religiosas culturalmente aceitas não devem ser consideradas esquizotípicas.",
    "notas": null,
      },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Infância e adolescência",
    "trajetoria": "Relativamente estável; pequena parcela desenvolve esquizofrenia.",
    "prognostico": "Episódios psicóticos breves sob estresse.",
      },
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [
          "A1. Ideias de referencia (excluindo delirios)",
          "A2. Crencas estranhas ou pensamento magico",
          "A3. Experiencias perceptivas incomuns (ilusoes corporais)",
          "A4. Pensamento/discurso estranho (vago, circunstancial)",
          "A5. Desconfianca ou ideacao paranoide",
          "A6. Afeto inadequado ou constrito",
          "A7. Comportamento/aparencia estranha, excentrica",
          "A8. Ausencia de amigos proximos (exceto parentes 1o grau)",
          "A9. Ansiedade social excessiva que NAO diminui com convivio"
        ],
        "diagnostic_rule": "Criterios gerais de TP (A-F) + >=5 de 9 criterios + exclusao",
        "clusters": [
          "Deficits Sociais",
          "Distorcoes Cognitivo-Perceptivas",
          "Comportamento Excentrico"
        ],
        "duration": "padrao relativamente estavel",
        "age_onset": "inicio vida adulta",
        "functional_impairment": "deficits interpessoais marcados; isolamento social; ansiedade social persistente",
        "exclusions": [
          "esquizofrenia",
          "transtorno bipolar/depressivo com psicotico",
          "TEA"
        ],
        "specifiers": [],
        "operational_profiles": [],
        "critical_differentials": [
          "paranoide",
          "esquizoide",
          "evitativa",
          "borderline",
          "narcisista"
        ],
        "key_questions": [
          "Eventos cotidianos tem significado especial so para voce?",
          "Crencas que outros consideram estranhas?",
          "Experiencias incomuns (presenca, ouvir nome)?",
          "Jeito de falar ou se vestir e estranho/excentrico?",
          "Desconforto social diminui quando conhece melhor as pessoas? [nao = favorece TPET]"
        ],
        "alerts": [
          "Pequena proporcao pode evoluir para esquizofrenia; avaliar contexto cultural para pensamento magico"
        ],
        "source_trace": {
          "markdown_section": "## 3. Transtorno da Personalidade Esquizotipica (TPET)",
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
    "lacunas_globais": [],
    "inconsistencias_detectadas": [],
    "notas_agente_globais": null,
    "revisao_humana_necessaria": false
  },
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "inventario_clinico": {
    "estrutura_efetiva": "- **Estrutura efetiva:** Padrao difuso de deficits sociais/interpessoais com desconforto agudo e capacidade reduzida para intimidade, alem de distorcoes cognitivas/perceptivas e comportamento eccentrico. Exige 5+ de 9 criterios: (1) ideias de referencia (nao delirios), (2) crencas estranhas/pensamento magico, (3) experiencias perceptivas incomuns, (4) pensamento e discurso estranhos, (5) desconfianca/ideacao paranoide, (6) afeto inadequado ou constrito, (7) comportamento/aparencia eccentrica, (8) ausencia de amigos proximos (exceto familiares 1o grau), (9) ansiedade social excessiva que nao diminui com convivio (associada a temores paranoides). Exclusao: nao ocorre exclusivamente durante esquizofrenia, TB/depressivo com psicose, outro psicotico ou TEA.",
    "notas_clinicas": "- **Notas:** Prevalencia: 0,6%-4,6% em comunidades; 3,9% (NESARC). Baixa em populacoes clinicas (0-1,9%). Levemente mais comum em homens. Pequena parte evolui para esquizofrenia. 30-50% com TP depressivo maior simultaneo; mais de 50% com historia de episodio depressivo maior. Comorbidade: TP esquizoide, paranoide, evitativa, borderline. Especificador \"pre-morbido\". Agregacao familiar com esquizofrenia."
  },
  
});
export type DisorderData = typeof data;
