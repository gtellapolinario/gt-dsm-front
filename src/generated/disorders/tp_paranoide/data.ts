import { TpParanoideSchema } from "./schema";

export const data = TpParanoideSchema.parse({
  "$schema_version": "1.0.0",
  "meta": {
    "id": "tp_paranoide",
    "nome_completo": "Transtorno da Personalidade Paranóide",
    "sigla": "TPP",
    "codigo": {
      "dsm5": "301.0",
      "cid10": "F60.0",
      "cid11": "6D10"
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
      "nome": "Padrão de Desconfiança e Suspeita",
      "tipo": "polythetic_com_limiar",
      "limiar": {
        "adulto": 4,
        "pediatria": null
      },
      "ancora_obrigatoria": null,
      "sintomas": [
        {
          "id": "A1",
          "rotulo": "Suspeita de ser explorado, maltratado ou enganado",
          "desc": "Suspeita, sem embasamento suficiente, de estar sendo explorado, maltratado ou enganado por outros.",
          "pergunta": "Você frequentemente suspeita que as pessoas estão tentando enganá-lo, prejudicá-lo ou explorá-lo, mesmo sem evidências claras?",
          "exemplos_clinicos": [
            "Acha que colegas tramam contra si",
            "Desconfia de troco em lojas"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A2",
          "rotulo": "Dúvidas injustificadas sobre lealdade de amigos",
          "desc": "Preocupa-se com dúvidas injustificadas acerca da lealdade ou da confiabilidade de amigos e sócios.",
          "pergunta": "Você tem dúvidas persistentes sobre a lealdade ou confiança de seus amigos, examinando minuciosamente suas ações em busca de hostilidade?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A3",
          "rotulo": "Relutância em confiar por medo de retaliação",
          "desc": "Reluta em confiar nos outros devido a medo infundado de que as informações serão usadas maldosamente contra si.",
          "pergunta": "Você reluta em confiar nas pessoas ou tornar-se íntimo por medo de que suas informações pessoais sejam usadas contra você?",
          "exemplos_clinicos": [
            "Recusa responder perguntas pessoais"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A4",
          "rotulo": "Percebe significados ocultos ameaçadores em eventos benignos",
          "desc": "Percebe significados ocultos humilhantes ou ameaçadores em comentários ou eventos benignos.",
          "pergunta": "Você frequentemente interpreta comentários casuais ou eventos neutros como contendo críticas ou ameaças ocultas?",
          "exemplos_clinicos": [
            "Elogio interpretado como coerção",
            "Erro de funcionário visto como deliberado"
          ],
          "faixa_aplicavel": null
        },
        {
          "id": "A5",
          "rotulo": "Guarda rancores persistentemente",
          "desc": "Guarda rancores de forma persistente (i.e., não perdoa insultos, injúrias ou desprezo).",
          "pergunta": "Você guarda rancor por muito tempo e tem dificuldade em perdoar insultos ou desprezos, mesmo que leves?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A6",
          "rotulo": "Percebe ataques ao caráter e reage com raiva",
          "desc": "Percebe ataques a seu caráter ou reputação que não são percebidos pelos outros e reage com raiva ou contra-ataca rapidamente.",
          "pergunta": "Você sente que seu caráter ou reputação são atacados com frequência e reage com raiva ou contra-ataque rápido?",
          "exemplos_clinicos": [],
          "faixa_aplicavel": null
        },
        {
          "id": "A7",
          "rotulo": "Suspeitas injustificadas de infidelidade do parceiro",
          "desc": "Tem suspeitas recorrentes e injustificadas acerca da fidelidade do cônjuge ou parceiro sexual.",
          "pergunta": "Você tem suspeitas recorrentes e sem fundamento sobre a fidelidade de seu cônjuge ou parceiro?",
          "exemplos_clinicos": [
            "Reúne evidências triviais de ciúme",
            "Questiona constantemente paradeiro"
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
      "id": "exclusao_psicotico_medico",
      "letra": "B",
      "rotulo": "Não ocorre exclusivamente durante curso de outro transtorno psicótico ou condição médica",
      "tipo": "exclusao_diagnostica",
      "ui_widget": "toggle_simples",
      "obrigatorio": true,
      "icone": "Ban",
      "ddx_sugeridos": [
        "esquizofrenia",
        "transtorno_bipolar",
        "transtorno_depressivo_com_psicose"
      ],
      "descricao_completa": "Não ocorre exclusivamente durante o curso de esquizofrenia, transtorno bipolar ou depressivo com sintomas psicóticos ou outro transtorno psicótico e não é atribuível aos efeitos fisiológicos de outra condição médica.",
      "metadados": {
        "completo": true,
        "lacunas": [],
        "notas_agente": null,
        "fonte_passada_1": true
      }
    }
  ],
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
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade paranoide não recebe níveis formais de gravidade."
},
  "hierarquia": {
    "presente": true,
    "exclui_se_diagnosticado": [],
    "exclui_diagnostico_de": [
      "conduta"
    ],
    "notas": "TPA exclui o diagnóstico de transtorno da conduta em indivíduos com 18 anos ou mais.",
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
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno Delirante",
      "ponto_distincao": "TDP: delírios persistentes; TPP: desconfiança difusa sem delírios fixos.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Esquizofrenia",
      "ponto_distincao": "Esquizofrenia: período de sintomas psicóticos persistentes; TPP deve ter estado presente antes.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno da Personalidade Esquizotípica",
      "ponto_distincao": "Esquizotípica inclui pensamento mágico, experiências perceptivas incomuns e discurso estranho.",
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
      "condicao": "Agorafobia",
      "frequencia": "moderada",
      "nota": null
    },
    {
      "condicao": "Transtorno Obsessivo-Compulsivo",
      "frequencia": "moderada",
      "nota": null
    },
    {
      "condicao": "Uso de álcool e outras substâncias",
      "frequencia": "moderada",
      "nota": null
    }
  ],
  "instrumentos_complementares": [],
  "prevalencia": {
    "populacao_geral": "2,3% a 4,4%",
    "proporcao_sexo": "Mais comumente diagnosticado no sexo masculino (amostras clínicas)",
    "variacoes_culturais": "Comportamentos defensivos de minorias não devem ser confundidos com TPP.",
    "notas": null,
    "metadados": {
      "completo": true,
      "lacunas": [],
      "notas_agente": null,
      "fonte_passada_1": true
    }
  },
  "curso_desenvolvimento": {
    "idade_inicio_tipica": "Infância e adolescência (solidão, relacionamento ruim com colegas)",
    "trajetoria": "Crônico; pode preceder transtorno delirante ou esquizofrenia.",
    "prognostico": "Difícil convivência; episódios psicóticos breves sob estresse.",
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
  "id": "tp_paranoide",
  "category": "FULL",
  "ui_mode": "structured_full",
  "render_structured_interview": true,
  "rendering": {
    "estrutura_diagnostica": "polythetic_monocluster",
    "criteria": [
      "A1. Suspeita sem embasamento de ser explorado/maltratado/enganado",
      "A2. Preocupacao com duvidas sobre lealdade/confiabilidade",
      "A3. Relutancia em confiar devido a medo infundado",
      "A4. Percepcao de significados ocultos humilhantes/ameacadores",
      "A5. Guarda rancores persistentes",
      "A6. Percebe ataques ao carater nao percebidos por outros",
      "A7. Suspeitas recorrentes sobre fidelidade do conjuge"
    ],
    "diagnostic_rule": "Criterios gerais de TP (A-F) + >=4 de 7 criterios especificos + exclusao",
    "clusters": [
      "Desconfianca e Suspeita"
    ],
    "duration": "padrao persistente, estavel, de longa duracao",
    "age_onset": "inicio vida adulta (desde adolescencia/inicio adulto)",
    "functional_impairment": "problemas nos relacionamentos interpessoais; isolamento social; implicacoes legais",
    "exclusions": [
      "esquizofrenia",
      "transtorno bipolar/depressivo com psicotico",
      "condicao medica"
    ],
    "specifiers": [],
    "operational_profiles": [],
    "critical_differentials": [
      "transtorno delirante",
      "esquizotipica",
      "esquizoide",
      "borderline",
      "evitativa",
      "antissocial",
      "narcisista"
    ],
    "key_questions": [
      "Desde a juventude, desconfia das intencoes das pessoas sem motivo?",
      "Dificil confiar por medo de informacoes serem usadas contra voce?",
      "Encontra significados ocultos em comentarios normais?",
      "Dificuldade em perdoar quando se sente desrespeitado?",
      "Sente que carater/reputacao sao atacados?",
      "Duvidas sobre fidelidade sem evidencias?"
    ],
    "alerts": [
      "Nao confundir desconfianca justificada por contexto sociocultural com paranoia patologica"
    ],
    "source_trace": {
      "markdown_section": "## 1. Transtorno da Personalidade Paranoide (TPP)",
      "patches_applied": []
    },
    "category": "FULL",
    "ui_mode": "structured_full",
    "render_structured_interview": true
  },
  "inventario_clinico": {
    "codigo_bruto": "- **Codigo DSM-5 / CID-10:** 301.0 / F60.0",
    "estrutura_efetiva": "- **Estrutura efetiva:** Padrao de desconfianca e suspeita difusa, motivacoes interpretadas como malevolas, inicio na vida adulta, presente em varios contextos. Exige 4+ de 7 criterios: (1) suspeita sem embasamento de exploracao/enganacao, (2) duvidas injustificadas sobre lealdade de amigos, (3) relutancia em confiar, (4) percebe significados ocultos ameacadores em eventos benignos, (5) guarda rancores persistentes, (6) percebe ataques ao carater e reage com raiva, (7) suspeitas injustificadas de infidelidade. Exclusao: nao ocorre exclusivamente durante esquizofrenia, transtorno bipolar/depressivo com sintomas psicoticos ou outro transtorno psicotico; nao atribuivel a condicao medica.",
    "notas_clinicas": "- **Notas:** Prevalencia: 2,3% (NCS-R) a 4,4% (NESARC). Mais comum em homens. Pode apresentar episodios psicoticos breves sob estresse. Comorbidade frequente: TP esquizotipica, esquizoide, narcisista, evitativa, borderline; transtornos por uso de substancia; TOC; agorafobia. Especificador \"pre-morbido\" se criterios atendidos antes de esquizofrenia."
  },
  "hierarquia_exclusao": {
    "exclui": [],
    "exclui_de": [
      "conduta"
    ],
    "notas_hierarquia": "TPA exclui o diagnóstico de transtorno da conduta em indivíduos com 18 anos ou mais."
  },
  
    "enrichment_status": {
    "has_poor": true,
    "has_master": false,
    "has_inventory": true,
    "has_hierarchy": true,
    "has_cid11": true,
        "match_notes": {
      "poor": "id",
      "master": "missing",
      "inventario": "id",
      "hierarquia": "id",
      "cid11": "id",
      "super": "id"
    }
  }
});
export type DisorderData = typeof data;
