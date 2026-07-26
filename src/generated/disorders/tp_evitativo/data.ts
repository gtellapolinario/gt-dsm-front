import { TpEvitativoSchema } from "./schema";

export const data = TpEvitativoSchema.parse({
  "$schema_version": "2.3.0",
  "meta": {
    "id": "tp_evitativo",
    "nome_completo": "Transtorno da Personalidade Evitativa",
    "codigo": {
        "dsm5": "",
        "cid10": "F60.6",
        "cid11": "6D10"
    },
    "capitulo": "Transtornos da Personalidade",
    "capitulo_id": "transtornos_da_personalidade",
    "sigla": "TPEV",
    "codificacao": {
        "cid10_cm": {
            "referencia_base": "F60.6",
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
            "id": "cluster_c",
            "label": "Cluster C",
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
        "nome": "Inibição Social, Inadequação e Hipersensibilidade à Avaliação",
        "tipo": "polythetic_com_limiar",
        "limiar": {
            "adulto": 4,
            "pediatria": 4
        },
        "ancora_obrigatoria": null,
        "sintomas": [
            {
                "id": "A1",
                "rotulo": "Evita atividades profissionais por medo de crítica",
                "desc": "Evita atividades profissionais que envolvam contato interpessoal significativo por medo de crítica, desaprovação ou rejeição.",
                "pergunta": "A pessoa evita atividades no trabalho que exijam contato interpessoal significativo por medo de crítica ou rejeição?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Recusar promoções por medo de críticas"
                ]
            },
            {
                "id": "A2",
                "rotulo": "Só se envolve se tiver certeza de ser recebido positivamente",
                "desc": "Não se dispõe a envolver-se com pessoas, a menos que tenha certeza de que será recebido de forma positiva.",
                "pergunta": "A pessoa só se dispõe a fazer novos amigos ou se envolver com pessoas se tiver certeza de que será aceito sem críticas?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A3",
                "rotulo": "Reservado em relacionamentos íntimos por medo de vergonha",
                "desc": "Mostra-se reservado em relacionamentos íntimos devido a medo de passar vergonha ou de ser ridicularizado.",
                "pergunta": "A pessoa se mostra reservado em relacionamentos íntimos por medo de ser ridicularizado ou passar vergonha?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A4",
                "rotulo": "Preocupação com críticas ou rejeição em situações sociais",
                "desc": "Preocupa-se com críticas ou rejeição em situações sociais.",
                "pergunta": "A pessoa está constantemente preocupado com ser criticado ou rejeitado em situações sociais?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A5",
                "rotulo": "Inibe-se em situações interpessoais novas por inadequação",
                "desc": "Inibe-se em situações interpessoais novas em razão de sentimentos de inadequação.",
                "pergunta": "A pessoa se sente inibido em novas situações sociais por se sentir inadequado ou inferior?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A6",
                "rotulo": "Vê a si mesmo como socialmente incapaz ou inferior",
                "desc": "Vê a si mesmo como socialmente incapaz, sem atrativos pessoais ou inferior aos outros.",
                "pergunta": "A pessoa se vê como socialmente incapaz, sem atrativos ou inferior aos outros?",
                "faixa_aplicavel": null,
                "nota": null
            },
            {
                "id": "A7",
                "rotulo": "Reluta em assumir riscos pessoais por constrangimento",
                "desc": "Reluta de forma incomum em assumir riscos pessoais ou se envolver em quaisquer novas atividades, pois estas podem ser constrangedoras.",
                "pergunta": "A pessoa reluta em assumir riscos pessoais ou tentar novas atividades por medo de se constranger?",
                "faixa_aplicavel": null,
                "nota": null,
                "exemplos_clinicos": [
                    "Cancelar entrevista por medo de vestuário inadequado"
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
    "lembrete_aplicador": "No modelo categorial do DSM-5-TR, o transtorno da personalidade evitativa não recebe níveis formais de gravidade."
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
    },
    {
        "id": "relacoes_interpessoais",
        "label": "Relações interpessoais e familiares",
        "icone": "Heart",
        "relevante_para": "transversal"
    }
],
  "diagnostico_diferencial": [
    {
        "id": "transtorno_de_ansiedade_social_fobia_social",
        "condicao": "Transtorno de Ansiedade Social (Fobia Social)",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Grande sobreposição; podem representar conceitos alternativos da mesma condição.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "agorafobia",
        "condicao": "Agorafobia",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Agorafobia: medo de situações de difícil escape; evitativo: medo de julgamento social.",
        "pertence_a_mesma_classe_dsm": false
    },
    {
        "id": "transtorno_da_personalidade_dependente",
        "condicao": "Transtorno da Personalidade Dependente",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Dependente: foco em ser cuidado; evitativo: foco em evitar humilhação e rejeição.",
        "pertence_a_mesma_classe_dsm": true
    },
    {
        "id": "transtorno_da_personalidade_esquizoide",
        "condicao": "Transtorno da Personalidade Esquizoide",
        "natureza": "transtorno_mental",
        "ponto_distincao": "Esquizoide: falta de desejo de intimidade; evitativo: deseja relacionamentos mas teme rejeição.",
        "pertence_a_mesma_classe_dsm": true
    }
],
  "comorbidades_frequentes": [
    {
      "condicao": "Transtorno de ansiedade social",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtornos depressivos",
      "frequencia": "alta",
      "nota": null
    },
    {
      "condicao": "Transtorno da personalidade dependente",
      "frequencia": "alta",
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
    "estimativa": "2,4%",
    "distribuicao_por_sexo": "Igualmente frequente em ambos os sexos",
    "variacoes_contextuais": "Retraimento pode ser consequência de aculturação após imigração.",
    "nota_aplicador": "Estimativa descritiva dependente de período, população e método; não usar como taxa brasileira atual sem fonte epidemiológica local."
},
  "curso_desenvolvimento": {
    "inicio_tipico": "Timidez e evitação podem anteceder o quadro, mas o diagnóstico requer padrão persistente a partir do início da vida adulta.",
    "trajetoria": "Pode permanecer estável ou variar com demandas interpessoais, experiências de rejeição e comorbidades ansiosas.",
    "prognostico": "Generalização da evitação, isolamento e comorbidades associam-se a maior prejuízo; timidez normativa não define o transtorno.",
    "nota_aplicador": "Traços antecedentes podem aparecer antes da vida adulta; o diagnóstico requer padrão persistente, pervasivo e não explicado por desenvolvimento, cultura ou outra condição."
},
  
  "_pipeline": {
    "rendering": {
        "estrutura_diagnostica": "polythetic_monocluster",
        "criteria": [
          "1. Evita atividades com contato interpessoal por medo de critica",
          "2. Nao se dispoe a envolver-se sem certeza de recepcao positiva",
          "3. Reservado em relacionamentos intimos por medo de vergonha",
          "4. Preocupa-se com criticas ou rejeicao",
          "5. Inibe-se em situacoes novas por inadequacao",
          "6. Ve a si mesmo como socialmente incapaz/inferior",
          "7. Reluta em assumir riscos por medo de constrangimento"
        ],
        "diagnostic_rule": "Criterios gerais de TP (A-F) + >=4 de 7 criterios",
        "clusters": [
          "Inibicao Social",
          "Sentimentos de Inadequacao",
          "Hipersensibilidade a Avaliacao"
        ],
        "duration": "tende a persistir; pode atenuar com envelhecimento",
        "age_onset": "inicio vida adulta",
        "functional_impairment": "isolamento social; rede de apoio restrita; funcionamento profissional prejudicado",
        "exclusions": [
          "fobia social",
          "agorafobia",
          "dependente",
          "esquizoide",
          "esquizotipica"
        ],
        "specifiers": [],
        "operational_profiles": [],
        "critical_differentials": [
          "fobia social",
          "esquizoide",
          "dependente",
          "borderline"
        ],
        "key_questions": [
          "Evita atividades no trabalho por medo de ser criticado?",
          "So se aproxima se tiver certeza de gentileza?",
          "Reservado em intimidade por medo de vergonha?",
          "Preocupado com criticas antes de situacoes sociais?",
          "Inibido por se sentir inadequado?",
          "Ve-se como socialmente incapaz ou inferior?",
          "Evita riscos por medo de constrangimento?"
        ],
        "alerts": [
          "Desejo de relacionamentos deve estar presente (diferencial chave de esquizoide)"
        ],
        "source_trace": {
          "markdown_section": "## 8. Transtorno da Personalidade Evitativa (TPEv)",
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
    "estrutura_efetiva": "- **Estrutura efetiva:** Padrao difuso de inibicao social, sentimentos de inadequacao e hipersensibilidade a avaliacao negativa. Exige 4+ de 7 criterios: (1) evita atividades profissionais com contato interpessoal significativo, (2) nao se envolve com pessoas sem certeza de aceitacao positiva, (3) reservado em relacoes intimas por medo de vergonha, (4) preocupa-se com criticas/rejeicao em situacoes sociais, (5) inibe-se em situacoes interpessoais novas, (6) ve-se como socialmente incapaz/inferior, (7) reluta em assumir riscos ou novas atividades por medo de constrangimento.",
    "notas_clinicas": "- **Notas:** Prevalencia: 2,4% (NESARC). Igualmente frequente em ambos os sexos. Inicio na infancia (timidez, isolamento, medo de estranhos). Tende a remitir com envelhecimento. Grande sobreposicao com transtorno de ansiedade social (fobia social) - podem ser conceitos alternativos da mesma condicao. Comorbidade: TP dependente (particularmente frequente), borderline, Grupo A; transtornos depressivos, bipolares, ansiedade. Cautela em criancas/adolescentes (timidez pode ser adequada ao desenvolvimento)."
  },
  
});
export type DisorderData = typeof data;
