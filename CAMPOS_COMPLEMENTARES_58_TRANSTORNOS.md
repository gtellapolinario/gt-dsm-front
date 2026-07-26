# Campos Complementares dos 58 Transtornos (DSM-5-TR)

> Mapeamento dos 4 campos complementares em todos os transtornos:

> 1. `subtipos` (Subtipos e Apresentações Clínicas)

> 2. `instrumentos_complementares` (Escalas e Testes Psicológicos)

> 3. `diagnostico_diferencial` (Distinção Psiquiátrica e Médica)

> 4. `dominios_impacto` (Áreas de Prejuízo Funcional)

---

## Agorafobia

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno de Pânico",
      "ponto_distincao": "TP sem agorafobia: ataques inesperados mas sem evitação de situações agorafóbicas; ambos podem coexistir.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Fobia Específica situacional",
      "ponto_distincao": "Fobia específica: limitada a um tipo de situação; agorafobia: múltiplas situações pela razão comum (incapacidade de escape).",
      "pertence_a_classe": true
    },
    {
      "condicao": "TEPT",
      "ponto_distincao": "TEPT: evitação relacionada a lembrança do trauma; agorafobia: evitação por medo de sintomas incapacitantes.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "trabalho",
      "label": "Desempenho Profissional",
      "icone": "Briefcase",
      "relevante_para": "adulto"
    },
    {
      "id": "social",
      "label": "Funcionamento Social e Autonomia",
      "icone": "Users",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Anorexia Nervosa

```json
{
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
  instrumentos_complementares: [],
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
      relevante_para: "adulto"}]
}
```

---

## Bulimia Nervosa

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Anorexia nervosa, tipo compulsão alimentar purgativa",
      "ponto_distincao": "Anorexia tipo purgativa: peso significativamente baixo. Bulimia: peso igual ou acima da faixa mínima normal.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno de compulsão alimentar",
      "ponto_distincao": "TCA: compulsão alimentar sem comportamentos compensatórios inapropriados recorrentes.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Síndrome de Kleine-Levin",
      "ponto_distincao": "Kleine-Levin: comportamento alimentar perturbado sem a preocupação excessiva com forma e peso corporais característica da bulimia.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno depressivo maior, com aspectos atípicos",
      "ponto_distincao": "TDM com aspectos atípicos: hiperfagia sem comportamentos compensatórios indevidos e sem preocupação excessiva com forma/peso.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "saude",
      "label": "Saúde Física e Dental",
      "icone": "HeartPulse",
      "relevante_para": "transversal"
    },
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "trabalho",
      "label": "Desempenho Profissional/Acadêmico",
      "icone": "Briefcase",
      "relevante_para": "adulto"
    }
  ]
}
```

---

## Transtorno da Conduta

```json
{
  "subtipos": {
    "presente": true,
    "nome": "Tipo de início",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "infancia",
        "codigo": {
          "dsm5": "312.81",
          "cid10": "F91.1",
          "cid11": null
        },
        "label": "Tipo com início na infância",
        "descricao": "Pelo menos um sintoma característico antes dos 10 anos de idade.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "adolescencia",
        "codigo": {
          "dsm5": "312.82",
          "cid10": "F91.2",
          "cid11": null
        },
        "label": "Tipo com início na adolescência",
        "descricao": "Nenhum sintoma característico antes dos 10 anos de idade.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "nao_especificado",
        "codigo": {
          "dsm5": "312.89",
          "cid10": "F91.9",
          "cid11": null
        },
        "label": "Início não especificado",
        "descricao": "Critérios preenchidos, porém sem informações suficientes para determinar a idade de início.",
        "sintomas_caracteristicos": []
      }
    ],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno de oposição desafiante",
      "ponto_distincao": "TOD: comportamentos menos graves, sem agressão grave ou destruição de propriedade; inclui desregulação emocional. Ambos podem ser diagnosticados se critérios preenchidos.",
      "pertence_a_classe": true
    },
    {
      "condicao": "TDAH",
      "ponto_distincao": "Comportamento hiperativo/impulsivo no TDAH não viola normas ou direitos alheios por si só.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtornos depressivo e bipolar",
      "ponto_distincao": "Problemas de conduta devem estar presentes fora dos episódios de humor para justificar diagnóstico comórbido.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno explosivo intermitente",
      "ponto_distincao": "TEI: agressão impulsiva não premeditada sem objetivo tangível; conduta inclui agressão proativa/predatória.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtornos de adaptação",
      "ponto_distincao": "Adaptação: problemas de conduta em clara associação com estressor psicossocial e dentro de 6 meses após o término.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": null
    },
    {
      "id": "academico",
      "label": "Desempenho Acadêmico",
      "icone": "GraduationCap",
      "relevante_para": "pediatria"
    },
    {
      "id": "trabalho",
      "label": "Desempenho Profissional",
      "icone": "Briefcase",
      "relevante_para": "adulto"
    },
    {
      "id": "legal",
      "label": "Consequências Legais",
      "icone": "Gavel",
      "relevante_para": null
    }
  ]
}
```

---

## Transtorno do Desenvolvimento Intelectual (Deficiência Intelectual)

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": false,
    "subtipos": [],
      },
  "instrumentos_complementares": [
    {
      "nome": "Escala Vineland de Comportamento Adaptativo",
      "sigla": "Vineland",
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtornos da Comunicação",
      "ponto_distincao": "Pacientes mantêm funcionamento intelectual e adaptativo geral preservado fora da comunicação.",
      "pertence_a_classe": true
    }
  ],
  "dominios_impacto": [
    {
      "id": "academico",
      "label": "Funcionamento Acadêmico",
      "icone": "GraduationCap",
      "relevante_para": "ambos"
    },
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": "ambos"
    },
    {
      "id": "autocuidado",
      "label": "Autocuidado e Vida Prática",
      "icone": "House",
      "relevante_para": "ambos"
    }
  ]
}
```

---

## Delirium

```json
{
  "subtipos": {
    "presente": true,
    "nome": "Subtipo etiológico",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "intoxicacao_substancia",
        "codigo": {
          "dsm5": "292.81",
          "cid10": "F19.921",
          "cid11": null
        },
        "label": "Delirium por intoxicação por substância",
        "descricao": "Predominam sintomas de delirium no quadro de intoxicação por substância.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "abstinencia_substancia",
        "codigo": {
          "dsm5": "291.0",
          "cid10": "F10.231",
          "cid11": null
        },
        "label": "Delirium por abstinência de substância",
        "descricao": "Predominam sintomas de delirium no quadro de abstinência de substância.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "induzido_medicamento",
        "codigo": {
          "dsm5": "292.81",
          "cid10": "F19.921",
          "cid11": null
        },
        "label": "Delirium induzido por medicamento",
        "descricao": "Sintomas aparecem como efeito colateral de medicamento tomado conforme prescrição.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "outra_condicao_medica",
        "codigo": {
          "dsm5": "293.0",
          "cid10": "F05",
          "cid11": null
        },
        "label": "Delirium devido a outra condição médica",
        "descricao": "Perturbação atribuível às consequências fisiológicas de outra condição médica.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "multiplas_etiologias",
        "codigo": {
          "dsm5": "293.0",
          "cid10": "F05",
          "cid11": null
        },
        "label": "Delirium devido a múltiplas etiologias",
        "descricao": "Delirium com mais de uma etiologia identificada.",
        "sintomas_caracteristicos": []
      }
    ],
      },
  "instrumentos_complementares": [
    {
      "nome": "Escala de Confusão do Camargo",
      "sigla": "ECC",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Mini-Mental State Examination",
      "sigla": "MMSE",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtornos psicóticos",
      "ponto_distincao": "Delirium: curso agudo, perturbação da atenção/consciência, evidência de etiologia médica; psicoses: sem perturbação da consciência.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno de estresse agudo",
      "ponto_distincao": "Delirium: etiologia fisiológica identificável; TEA: precipitado por evento traumático.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtornos neurocognitivos maiores/leves",
      "ponto_distincao": "Delirium: curso agudo e flutuante; TNC: curso mais gradual, sem perturbação da consciência.",
      "pertence_a_classe": true
    }
  ],
  "dominios_impacto": [
    {
      "id": "saude",
      "label": "Cuidados de Saúde",
      "icone": "Hospital",
      "relevante_para": "transversal"
    },
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Esquizofrenia

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno Esquizoafetivo",
      "ponto_distincao": "Exige que um episódio de humor maior ocorra simultaneamente com sintomas da fase ativa e que os sintomas de humor estejam presentes na maior parte da duração total das fases ativa e residual.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno Delirante",
      "ponto_distincao": "Diferencia-se pela ausência de outros sintomas da esquizofrenia (alucinações severas, discurso desorganizado, sintomas negativos marcantes).",
      "pertence_a_classe": true
    },
    {
      "condicao": "TEA ou Transtornos da Comunicação",
      "ponto_distincao": "Apenas se diagnostica esquizofrenia comorbida se delírios ou alucinações proeminentes durarem pelo menos um mês.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "trabalho",
      "label": "Funcionamento Ocupacional",
      "icone": "Briefcase",
      "relevante_para": "transversal"
    },
    {
      "id": "social",
      "label": "Relações Interpessoais e Sociais",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "autocuidado",
      "label": "Autocuidado e Vida Independente",
      "icone": "House",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno Explosivo Intermitente

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno disruptivo da desregulação do humor",
      "ponto_distincao": "TDDH: humor negativo persistente quase todos os dias; TEI: explosões isoladas sem humor crônico. São mutuamente exclusivos.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno da personalidade antissocial ou borderline",
      "ponto_distincao": "Nesses transtornos, os níveis de agressividade impulsiva são inferiores aos do TEI.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno de adaptação",
      "ponto_distincao": "Em crianças de 6–18 anos, explosões no contexto de adaptação não contam para TEI.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Intoxicação ou abstinência de substâncias",
      "ponto_distincao": "Se as explosões estiverem quase sempre associadas a intoxicação/abstinência, não se faz diagnóstico de TEI.",
      "pertence_a_classe": false
    },
    {
      "condicao": "TDAH, transtorno da conduta, TOD, TEA",
      "ponto_distincao": "TEI pode ser comórbido se as explosões justificarem atenção clínica independente.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": null
    },
    {
      "id": "profissional",
      "label": "Funcionamento Profissional",
      "icone": "Briefcase",
      "relevante_para": "adulto"
    },
    {
      "id": "legal",
      "label": "Consequências Legais",
      "icone": "Gavel",
      "relevante_para": null
    }
  ]
}
```

---

## Fobia Específica

```json
{
  "subtipos": {
    "presente": true,
    "nome": "Tipo de estímulo",
    "mutuamente_exclusivos": false,
    "subtipos": [
      {
        "id": "animal",
        "codigo": {
          "dsm5": "300.29",
          "cid10": "F40.218",
          "cid11": null
        },
        "label": "Tipo animal",
        "descricao": "Medo de animais ou insetos.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "ambiente_natural",
        "codigo": {
          "dsm5": "300.29",
          "cid10": "F40.228",
          "cid11": null
        },
        "label": "Tipo ambiente natural",
        "descricao": "Medo de alturas, tempestades, água.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "sangue_injecao_ferimento",
        "codigo": {
          "dsm5": "300.29",
          "cid10": "F40.23x",
          "cid11": null
        },
        "label": "Tipo sangue-injeção-ferimento",
        "descricao": "Medo de sangue, ferimentos, agulhas, procedimentos médicos.",
        "sintomas_caracteristicos": [
          "Resposta vasovagal — desmaio"
        ]
      },
      {
        "id": "situacional",
        "codigo": {
          "dsm5": "300.29",
          "cid10": "F40.248",
          "cid11": null
        },
        "label": "Tipo situacional",
        "descricao": "Medo de aviões, elevadores, espaços fechados.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "outro",
        "codigo": {
          "dsm5": "300.29",
          "cid10": "F40.298",
          "cid11": null
        },
        "label": "Tipo outro",
        "descricao": "Outros estímulos (engasgar, vomitar, contrair doença, palhaços etc.).",
        "sintomas_caracteristicos": []
      }
    ],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Agorafobia",
      "ponto_distincao": "Agorafobia: medo de situações múltiplas por impossibilidade de escapar; fobia específica: objeto/situação único.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno de Ansiedade Social",
      "ponto_distincao": "TAS: situações de avaliação social; fobia específica: objeto/situação específico não vinculado à avaliação.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno de Estresse Pós-Traumático",
      "ponto_distincao": "TEPT: medo surge após trauma; fobia específica: estímulo fóbico não necessariamente relacionado a trauma.",
      "pertence_a_classe": false
    }
  ],
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
      "relevante_para": "ambos"
    }
  ]
}
```

---

## Mutismo Seletivo

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtornos da comunicação",
      "ponto_distincao": "Mutismo Seletivo: perturbação restrita a situação social específica; transtornos de comunicação: presentes em todos os contextos.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno de Ansiedade Social",
      "ponto_distincao": "Ambos coexistem frequentemente; se satisfeitos os critérios de ambos, ambos os diagnósticos devem ser dados.",
      "pertence_a_classe": true
    }
  ],
  "dominios_impacto": [
    {
      "id": "academico",
      "label": "Desempenho Escolar",
      "icone": "GraduationCap",
      "relevante_para": "pediatria"
    },
    {
      "id": "social",
      "label": "Comunicação Social",
      "icone": "Users",
      "relevante_para": "pediatria"
    }
  ]
}
```

---

## Transtorno de Oposição Desafiante

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
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
  ]
}
```

---

## Transtorno de Estresse Pós-Traumático

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [
    {
      "nome": "PTSD Checklist for DSM-5",
      "sigla": "PCL-5",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Clinician-Administered PTSD Scale",
      "sigla": "CAPS-5",
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno de Estresse Agudo",
      "ponto_distincao": "TEA: duração ≤1 mês após trauma; TEPT: >1 mês.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno Depressivo Maior",
      "ponto_distincao": "TDM: não exige trauma específico; TEPT: trauma é critério diagnóstico central.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtornos Dissociativos",
      "ponto_distincao": "Podem coexistir; TEPT especificador com sintomas dissociativos quando presentes.",
      "pertence_a_classe": false
    }
  ],
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
      "id": "familiar",
      "label": "Funcionamento Familiar",
      "icone": "House",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno Neurocognitivo Maior ou Leve Devido à Doença de Alzheimer

```json
{
  "subtipos": {
    "presente": true,
    "nome": "Certeza diagnóstica e gravidade",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "provavel_maior",
        "codigo": {
          "dsm5": "294.1x",
          "cid10": "F02.8x",
          "cid11": null
        },
        "label": "Provável TNC maior",
        "descricao": "Com evidência de mutação genética ou quadro clássico progressivo.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "possivel_maior",
        "codigo": {
          "dsm5": "331.9",
          "cid10": "G31.9",
          "cid11": null
        },
        "label": "Possível TNC maior",
        "descricao": "Sem evidência de mutação genética ou com atípico.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "leve",
        "codigo": {
          "dsm5": "331.83",
          "cid10": "G31.84",
          "cid11": null
        },
        "label": "TNC leve",
        "descricao": "Prejuízo cognitivo leve com critérios de Alzheimer.",
        "sintomas_caracteristicos": []
      }
    ],
      },
  "instrumentos_complementares": [
    {
      "nome": "Avaliação neuropsicológica formal",
      "sigla": null,
      "uso": "neuropsicologico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "TNC vascular",
      "ponto_distincao": "TNC vascular: relação temporal com AVC, infartos em neuroimagem; Alzheimer: início insidioso, declínio gradual da memória.",
      "pertence_a_classe": true
    },
    {
      "condicao": "TNC com corpos de Lewy",
      "ponto_distincao": "Lewy: cognição oscilante, alucinações visuais, parkinsonismo; Alzheimer: memória precoce, sem oscilação.",
      "pertence_a_classe": true
    },
    {
      "condicao": "TNC frontotemporal",
      "ponto_distincao": "FTD: mudanças comportamentais/linguísticas precoces, memória preservada inicialmente.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno depressivo maior",
      "ponto_distincao": "Depressão: pseudodemência, melhora com tratamento antidepressivo.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "memoria",
      "label": "Memória e Aprendizagem",
      "icone": "Brain",
      "relevante_para": "transversal"
    },
    {
      "id": "avd",
      "label": "Atividades da Vida Diária",
      "icone": "House",
      "relevante_para": "transversal"
    },
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno Neurocognitivo Leve

```json
{
  "subtipos": {
    "presente": true,
    "nome": "Subtipo etiológico",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "alzheimer",
        "codigo": null,
        "label": "Devido à doença de Alzheimer",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "frontotemporal",
        "codigo": null,
        "label": "Devido à degeneração lobar frontotemporal",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "corpos_lewy",
        "codigo": null,
        "label": "Com corpos de Lewy",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "vascular",
        "codigo": null,
        "label": "Vascular",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "lesao_traumatica",
        "codigo": null,
        "label": "Devido a lesão cerebral traumática",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "substancia",
        "codigo": null,
        "label": "Induzido por substância/medicamento",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "hiv",
        "codigo": null,
        "label": "Devido a infecção por HIV",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "prion",
        "codigo": null,
        "label": "Devido à doença do príon",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "parkinson",
        "codigo": null,
        "label": "Devido à doença de Parkinson",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "huntington",
        "codigo": null,
        "label": "Devido à doença de Huntington",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "outra_condicao",
        "codigo": null,
        "label": "Devido a outra condição médica",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "multiplas_etiologias",
        "codigo": null,
        "label": "Devido a múltiplas etiologias",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "nao_especificado",
        "codigo": null,
        "label": "Não especificado",
        "descricao": "",
        "sintomas_caracteristicos": []
      }
    ],
      },
  "instrumentos_complementares": [
    {
      "nome": "Montreal Cognitive Assessment",
      "sigla": "MoCA",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Avaliação neuropsicológica formal",
      "sigla": null,
      "uso": "neuropsicologico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "TNC maior",
      "ponto_distincao": "TNC leve: independência preservada, prejuízo pequeno; TNC maior: prejuízo substancial, interferência na independência.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Cognição normal/envelhecimento",
      "ponto_distincao": "TNC leve: declínio documentado a partir de linha de base anterior; envelhecimento normal: sem declínio significativo.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno depressivo maior",
      "ponto_distincao": "Depressão pode causar queixas cognitivas; melhora com tratamento da depressão.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "avd",
      "label": "Atividades da Vida Diária",
      "icone": "House",
      "relevante_para": "transversal"
    },
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "trabalho",
      "label": "Desempenho Profissional",
      "icone": "Briefcase",
      "relevante_para": "adulto"
    }
  ]
}
```

---

## Transtorno Neurocognitivo Maior

```json
{
  "subtipos": {
    "presente": true,
    "nome": "Subtipo etiológico",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "alzheimer",
        "codigo": null,
        "label": "Devido à doença de Alzheimer",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "frontotemporal",
        "codigo": null,
        "label": "Devido à degeneração lobar frontotemporal",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "corpos_lewy",
        "codigo": null,
        "label": "Com corpos de Lewy",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "vascular",
        "codigo": null,
        "label": "Vascular",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "lesao_traumatica",
        "codigo": null,
        "label": "Devido a lesão cerebral traumática",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "substancia",
        "codigo": null,
        "label": "Induzido por substância/medicamento",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "hiv",
        "codigo": null,
        "label": "Devido a infecção por HIV",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "prion",
        "codigo": null,
        "label": "Devido à doença do príon",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "parkinson",
        "codigo": null,
        "label": "Devido à doença de Parkinson",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "huntington",
        "codigo": null,
        "label": "Devido à doença de Huntington",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "outra_condicao",
        "codigo": null,
        "label": "Devido a outra condição médica",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "multiplas_etiologias",
        "codigo": null,
        "label": "Devido a múltiplas etiologias",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "nao_especificado",
        "codigo": null,
        "label": "Não especificado",
        "descricao": "",
        "sintomas_caracteristicos": []
      }
    ],
      },
  "instrumentos_complementares": [
    {
      "nome": "Mini-Mental State Examination",
      "sigla": "MMSE",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Montreal Cognitive Assessment",
      "sigla": "MoCA",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Avaliação neuropsicológica formal",
      "sigla": null,
      "uso": "neuropsicologico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "TNC leve",
      "ponto_distincao": "TNC maior: prejuízo interfere na independência em AVDs; TNC leve: independência preservada.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Delirium",
      "ponto_distincao": "Delirium: curso agudo, perturbação da atenção/consciência; TNC maior: curso gradual, sem perturbação da consciência.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno depressivo maior",
      "ponto_distincao": "Depressão pode causar pseudodemência; melhora com tratamento da depressão favorece este diagnóstico.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "avd",
      "label": "Atividades da Vida Diária",
      "icone": "House",
      "relevante_para": "transversal"
    },
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "trabalho",
      "label": "Desempenho Profissional",
      "icone": "Briefcase",
      "relevante_para": "adulto"
    }
  ]
}
```

---

## Transtorno Neurocognitivo Vascular Maior ou Leve

```json
{
  "subtipos": {
    "presente": true,
    "nome": "Certeza diagnóstica",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "provavel",
        "codigo": {
          "dsm5": "290.40",
          "cid10": "F01.5x",
          "cid11": null
        },
        "label": "Provável",
        "descricao": "Com neuroimagem de lesão parenquimal significativa, relação temporal com AVC documentado, ou evidências clínicas/genéticas de doença cerebrovascular.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "possivel",
        "codigo": {
          "dsm5": "331.9",
          "cid10": "G31.9",
          "cid11": null
        },
        "label": "Possível",
        "descricao": "Critérios clínicos atendidos sem neuroimagem disponível ou relação temporal não estabelecida.",
        "sintomas_caracteristicos": []
      }
    ],
      },
  "instrumentos_complementares": [
    {
      "nome": "Neuroimagem (TC/RM)",
      "sigla": null,
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": true,
      "fonte": "mencionado_no_dsm"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "TNC Alzheimer",
      "ponto_distincao": "Alzheimer: início insidioso, memória precoce; Vascular: relação com AVC, déficits executivos/atenção.",
      "pertence_a_classe": true
    },
    {
      "condicao": "TNC com corpos de Lewy",
      "ponto_distincao": "Lewy: oscilação, alucinações visuais; Vascular: história de AVC, infartos em imagem.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Depressão vascular",
      "ponto_distincao": "Depressão de início tardio com desaceleração psicomotora pode simular TNC vascular; melhora com tratamento antidepressivo.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "executiva",
      "label": "Função Executiva e Atenção",
      "icone": "Brain",
      "relevante_para": "transversal"
    },
    {
      "id": "motor",
      "label": "Funcionamento Motor",
      "icone": "Footprints",
      "relevante_para": "transversal"
    },
    {
      "id": "avd",
      "label": "Atividades da Vida Diária",
      "icone": "House",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno da Personalidade Antissocial

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno da Conduta",
      "ponto_distincao": "TDAH/conduta: <18a; antissocial: ≥18a com histórico de conduta.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno da Personalidade Narcisista",
      "ponto_distincao": "Narcisista: busca admiração, sem histórico criminoso típico.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno por Uso de Substância",
      "ponto_distincao": "Comportamento antissocial exclusivo ao contexto de uso de substância não qualifica.",
      "pertence_a_classe": false
    }
  ],
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
      "id": "legal",
      "label": "Situação Legal",
      "icone": "Scale",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno da Personalidade Borderline

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [
    {
      "nome": "Zanarini Rating Scale for Borderline Personality Disorder",
      "sigla": "ZAN-BPD",
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno Depressivo Maior",
      "ponto_distincao": "TDM: humor deprimido episódico; TPB: padrão persistente desde início da vida adulta.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno Bipolar",
      "ponto_distincao": "TB: episódios de humor mais prolongados; TPB: reatividade rápida a estresse interpessoal.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno da Personalidade Histriônica",
      "ponto_distincao": "Histriônica: busca atenção sem autodestrutividade nem vazio crônico.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno da Personalidade Narcisista",
      "ponto_distincao": "Narcisista: estabilidade da autoimagem, sem autodestrutividade.",
      "pertence_a_classe": true
    }
  ],
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
  ]
}
```

---

## Transtorno da Personalidade Dependente

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno da Personalidade Borderline",
      "ponto_distincao": "Borderline: reage ao abandono com raiva e vazio; dependente: reage com submissão e busca por novo relacionamento.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno da Personalidade Histriônica",
      "ponto_distincao": "Histriônica: exibicionismo sociável e demanda ativa de atenção; dependente: retraimento e comportamento dócil.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno depressivo ou de pânico",
      "ponto_distincao": "Dependência pode ser decorrente de outro transtorno mental e deve ser diferenciada.",
      "pertence_a_classe": false
    }
  ],
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
  ]
}
```

---

## Transtorno da Personalidade Esquizoide

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Esquizofrenia",
      "ponto_distincao": "Esquizofrenia: sintomas psicóticos persistentes; TPE deve ter estado presente antes.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno do Espectro Autista",
      "ponto_distincao": "TEA: interação social mais gravemente comprometida, comportamentos estereotipados.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno da Personalidade Evitativa",
      "ponto_distincao": "Evitativa: deseja relacionamentos mas teme rejeição; esquizoide: falta de desejo de intimidade.",
      "pertence_a_classe": true
    }
  ],
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
    }
  ]
}
```

---

## Transtorno da Personalidade Esquizotípica

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Esquizofrenia",
      "ponto_distincao": "Esquizofrenia: sintomas psicóticos persistentes; esquizotípica: ideias de referência, não delírios firmes.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno do Espectro Autista",
      "ponto_distincao": "TEA: maior comprometimento da reciprocidade social, comportamentos estereotipados.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno da Personalidade Evitativa",
      "ponto_distincao": "Evitativa: deseja relacionamentos mas teme rejeição; esquizotípica: falta de desejo de contatos íntimos.",
      "pertence_a_classe": true
    }
  ],
  "dominios_impacto": [
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "trabalho",
      "label": "Desempenho Profissional",
      "icone": "Briefcase",
      "relevante_para": "adulto"
    }
  ]
}
```

---

## Transtorno da Personalidade Evitativa

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno de Ansiedade Social (Fobia Social)",
      "ponto_distincao": "Grande sobreposição; podem representar conceitos alternativos da mesma condição.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Agorafobia",
      "ponto_distincao": "Agorafobia: medo de situações de difícil escape; evitativo: medo de julgamento social.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno da Personalidade Dependente",
      "ponto_distincao": "Dependente: foco em ser cuidado; evitativo: foco em evitar humilhação e rejeição.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno da Personalidade Esquizoide",
      "ponto_distincao": "Esquizoide: falta de desejo de intimidade; evitativo: deseja relacionamentos mas teme rejeição.",
      "pertence_a_classe": true
    }
  ],
  "dominios_impacto": [
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "trabalho",
      "label": "Desempenho Profissional",
      "icone": "Briefcase",
      "relevante_para": "adulto"
    },
    {
      "id": "relacoes",
      "label": "Relações Íntimas",
      "icone": "Heart",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno da Personalidade Histriônica

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno da Personalidade Borderline",
      "ponto_distincao": "Borderline: autodestrutividade, raiva nos relacionamentos íntimos, vazio crônico.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno da Personalidade Narcisista",
      "ponto_distincao": "Narcisista: busca admiração por superioridade; histriônico: busca atenção como fragilidade.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno da Personalidade Antissocial",
      "ponto_distincao": "Antissocial: manipulação para lucro/material; histriônico: manipulação para atenção.",
      "pertence_a_classe": true
    }
  ],
  "dominios_impacto": [
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
    },
    {
      "id": "trabalho",
      "label": "Desempenho Profissional",
      "icone": "Briefcase",
      "relevante_para": "adulto"
    }
  ]
}
```

---

## Transtorno da Personalidade Narcisista

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
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
  ]
}
```

---

## Transtorno da Personalidade Obsessivo-Compulsiva

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno Obsessivo-Compulsivo (TOC)",
      "ponto_distincao": "TOC: obsessões e compulsões verdadeiras; TPOC: padrão de personalidade de ordem e controle.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno de Acumulação",
      "ponto_distincao": "Acumulação: acúmulo extremo representando perigo; TPOC: dificuldade em descartar sem sentimentalismo.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno da Personalidade Narcisista",
      "ponto_distincao": "Narcisista: acredita ter atingido perfeição; TPOC: autocrítico e perfeccionista.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno da Personalidade Esquizoide",
      "ponto_distincao": "Esquizoide: ausência fundamental de intimidade; TPOC: distanciamento por dedicação ao trabalho.",
      "pertence_a_classe": true
    }
  ],
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
  ]
}
```

---

## Transtorno da Personalidade Paranóide

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
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
  ]
}
```

---

## Transtorno de Acumulação

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "TOC",
      "ponto_distincao": "No TOC, o acúmulo é secundário a obsessões; no acumulação primário, os itens são guardados por valor percebido.",
      "pertence_a_classe": true
    }
  ],
  "dominios_impacto": [
    {
      "id": "habitacao",
      "label": "Habitabilidade do Domicílio",
      "icone": "House",
      "relevante_para": "transversal"
    },
    {
      "id": "social",
      "label": "Relações Sociais e Familiares",
      "icone": "Users",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno Alimentar Restritivo/Evitativo

```json
{
  "subtipos": {
    "presente": true,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [
    {
      "id": "evitacao_sensorial",
      "label": "Evitação baseada em sensorial"
    },
    {
      "id": "falta_interesse",
      "label": "Falta de interesse"
    },
    {
      "id": "preocupacao_consequencias_aversivas",
      "label": "Preocupação com consequências aversivas"
    }
  ],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Anorexia nervosa",
      "ponto_distincao": "Anorexia: medo de ganhar peso e perturbação na vivência do peso/forma corporal; TARE: ausência dessas características. Os dois não devem ser diagnosticados concomitantemente.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Condições médicas (GI, alergias, malignidades)",
      "ponto_distincao": "TARE requer que a perturbação da ingesta esteja além daquela diretamente explicada pelos sintomas físicos de uma condição médica e persista após sua resolução.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno do espectro autista",
      "ponto_distincao": "TEA: comportamentos alimentares rígidos e sensibilidades sensoriais, mas nem sempre com o nível de comprometimento necessário para TARE. Diagnosticar concomitantemente apenas se todos os critérios forem satisfeitos e a alimentação demandar tratamento específico.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Fobia específica e transtorno de ansiedade social",
      "ponto_distincao": "Quando o medo de asfixia ou vômito leva a esquiva alimentar, a distinção pode ser difícil. Se o problema alimentar for o foco primário de atenção clínica, TARE é o diagnóstico apropriado.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "nutricao",
      "label": "Estado Nutricional",
      "icone": "HeartPulse",
      "relevante_para": "transversal"
    },
    {
      "id": "social",
      "label": "Funcionamento Social e Familiar",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "desenvolvimento",
      "label": "Desenvolvimento e Crescimento",
      "icone": "Baby",
      "relevante_para": "pediatria"
    }
  ]
}
```

---

## Transtorno de Ansiedade de Doença

```json
{
  "subtipos": {
    "presente": true,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [
    {
      "id": "tipo_busca_cuidado",
      "label": "Tipo busca de cuidado"
    },
    {
      "id": "tipo_evitacao_cuidado",
      "label": "Tipo evitação de cuidado"
    }
  ],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "TSS",
      "ponto_distincao": "TSS: foco nos sintomas físicos; TAD: foco na doença subjacente presumida.",
      "pertence_a_classe": true
    }
  ],
  "dominios_impacto": [
    {
      "id": "saude",
      "label": "Uso de Serviços de Saúde",
      "icone": "Hospital",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno de Ansiedade Generalizada

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [
    {
      "nome": "Generalized Anxiety Disorder 7-item Scale",
      "sigla": "GAD-7",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Ansiedade situacional normativa",
      "ponto_distincao": "TAG: preocupações excessivas, incontroláveis, em múltiplos domínios por ≥6 meses com sintomas físicos.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno de Pânico",
      "ponto_distincao": "TP: ansiedade focalizada em ataques de pânico; TAG: preocupações difusas e múltiplas.",
      "pertence_a_classe": true
    },
    {
      "condicao": "TOC",
      "ponto_distincao": "TOC: pensamentos intrusivos indesejados e egodistônicos; TAG: preocupações sobre problemas reais da vida, mais egossintônicas.",
      "pertence_a_classe": false
    }
  ],
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
      "id": "saude",
      "label": "Uso de Serviços de Saúde",
      "icone": "Hospital",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno de Ansiedade de Separação

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno de Ansiedade Generalizada",
      "ponto_distincao": "TAG: preocupações múltiplas não focadas em separação; TAS: medo central é a separação das figuras de apego.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Agorafobia",
      "ponto_distincao": "Agorafobia: evitação de situações por medo de não conseguir escapar; TAS: evitação por medo de separação.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno do Espectro Autista",
      "ponto_distincao": "TEA: resistência a mudanças de rotina; TAS: o medo central é a separação, não a perturbação da rotina.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "academico",
      "label": "Frequência Escolar",
      "icone": "School",
      "relevante_para": "pediatria"
    },
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": "ambos"
    }
  ]
}
```

---

## Transtorno de Ansiedade Social (Fobia Social)

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Timidez/ansiedade social normativa",
      "ponto_distincao": "Timidez normal: não causa prejuízo funcional significativo; TAS: prejuízo clinicamente significativo.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Agorafobia",
      "ponto_distincao": "Agorafobia: medo de situações por impossibilidade de escape; TAS: medo de avaliação social.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno de Pânico",
      "ponto_distincao": "Pânico: medo de ataques de pânico futuros; TAS: medo de situações sociais especificamente.",
      "pertence_a_classe": true
    }
  ],
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
    }
  ]
}
```

---

## Transtorno Bipolar Tipo I

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [
    {
      "nome": "Escala de Mania de Young",
      "sigla": "YMRS",
      "uso": "monitoramento",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Questionário de Transtornos do Humor",
      "sigla": "MDQ",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno Depressivo Maior",
      "ponto_distincao": "Pode apresentar sintomas maníacos ou hipomaníacos sublimiares, mas no Bipolar I há presença documentada de pelo menos um episódio maníaco completo na vida.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno Bipolar Tipo II",
      "ponto_distincao": "Diferencia-se pela ausência de qualquer episódio maníaco anterior na história de vida.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtornos de ansiedade",
      "ponto_distincao": "As ruminações ansiosas podem se assemelhar a pensamentos acelerados, mas a ansiedade não apresenta a natureza episódica clara de mania nem aumento de energia autodirecionada.",
      "pertence_a_classe": false
    },
    {
      "condicao": "TDAH",
      "ponto_distincao": "Apresenta início precoce e curso contínuo, sem a ciclicidade típica de episódios delimitados do transtorno bipolar.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno da Personalidade Borderline",
      "ponto_distincao": "A labilidade do humor é crônica e reativa a eventos interpessoais, enquanto a mania exige episódios delimitados com mudança inequívoca no comportamento basal.",
      "pertence_a_classe": false
    }
  ],
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
      "label": "Funcionamento Social e Interpessoal",
      "icone": "Users",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno Bipolar Tipo II

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [
    {
      "nome": "Questionário de Transtornos do Humor",
      "sigla": "MDQ",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno Depressivo Maior",
      "ponto_distincao": "Indivíduos com Bipolar II vivenciam episódios hipomaníacos explícitos adicionais na história, necessitando de atenta investigação retrospectiva.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno Ciclotímico",
      "ponto_distincao": "Ciclotimia apresenta apenas períodos com sintomas sublimiares de depressão e hipomania, sem atingir a totalidade de critérios completos.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno Bipolar Tipo I",
      "ponto_distincao": "Bipolar I requer pelo menos um episódio maníaco na vida; se houver histórico de mania, o diagnóstico é Bipolar I.",
      "pertence_a_classe": true
    },
    {
      "condicao": "TDAH",
      "ponto_distincao": "TDAH compartilha sintomas de impulsividade e distratibilidade, mas seu curso é contínuo e não fásico/episódico como na hipomania.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "trabalho",
      "label": "Desempenho Profissional",
      "icone": "Briefcase",
      "relevante_para": "adulto"
    },
    {
      "id": "social",
      "label": "Funcionamento Social e Familiar",
      "icone": "Users",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno de Compulsão Alimentar

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Bulimia nervosa",
      "ponto_distincao": "Bulimia: comportamento compensatório inapropriado recorrente (purgação, exercício excessivo) e restrição dietética marcada entre episódios. TCA: ausência de compensação recorrente.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Obesidade",
      "ponto_distincao": "TCA: episódios de compulsão com perda de controle e sofrimento marcante. A maioria dos indivíduos obesos não se envolve em compulsão alimentar recorrente.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno depressivo maior e transtorno bipolar",
      "ponto_distincao": "Aumento do apetite pode ocorrer em episódios depressivos maiores com aspectos atípicos ou em transtorno bipolar. Se todos os critérios de ambos forem satisfeitos, ambos os diagnósticos podem ser dados.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "saude",
      "label": "Saúde Física e Peso",
      "icone": "HeartPulse",
      "relevante_para": "transversal"
    },
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "trabalho",
      "label": "Desempenho Profissional/Acadêmico",
      "icone": "Briefcase",
      "relevante_para": "adulto"
    }
  ]
}
```

---

## Transtorno de Conversão (Transtorno de Sintomas Neurológicos Funcionais)

```json
{
  "subtipos": {
    "presente": true,
    "nome": "Tipo de sintoma",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "fraqueza_paralisia",
        "codigo": {
          "dsm5": "300.11",
          "cid10": "F44.4",
          "cid11": null
        },
        "label": "Com fraqueza ou paralisia",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "movimento_anormal",
        "codigo": {
          "dsm5": "300.11",
          "cid10": "F44.4",
          "cid11": null
        },
        "label": "Com movimento anormal",
        "descricao": "Tremor, mioclonia, discinesia, gait disorder.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "crises_nao_epilepticas",
        "codigo": {
          "dsm5": "300.11",
          "cid10": "F44.5",
          "cid11": null
        },
        "label": "Com crises ou convulsões",
        "descricao": "Crises não epilépticas funcionais.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "anestesia_sensorial",
        "codigo": {
          "dsm5": "300.11",
          "cid10": "F44.6",
          "cid11": null
        },
        "label": "Com anestesia ou perda sensorial",
        "descricao": "",
        "sintomas_caracteristicos": []
      },
      {
        "id": "sintomas_sensoriais_especiais",
        "codigo": {
          "dsm5": "300.11",
          "cid10": "F44.6",
          "cid11": null
        },
        "label": "Com sintoma sensorial especial",
        "descricao": "Visual, olfatório, auditivo.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "sintomas_mistos",
        "codigo": {
          "dsm5": "300.11",
          "cid10": "F44.7",
          "cid11": null
        },
        "label": "Com sintomas mistos",
        "descricao": "",
        "sintomas_caracteristicos": []
      }
    ],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Doença neurológica",
      "ponto_distincao": "Conversão: sinais clínicos incompatíveis com doença neurológica reconhecida (sinal de Hoover, etc.).",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "trabalho",
      "label": "Desempenho Profissional",
      "icone": "Briefcase",
      "relevante_para": "adulto"
    },
    {
      "id": "mobilidade",
      "label": "Mobilidade e Independência",
      "icone": "Footprints",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno de Déficit de Atenção/Hiperatividade

```json
{
  "subtipos": {
    "presente": true,
    "nome": "Apresentação Clínica",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "apresentacao_combinada",
        "codigo": {
          "dsm5": "314.01",
          "cid10": "F90.2",
          "cid11": null
        },
        "label": "Apresentação combinada",
        "descricao": "Se tanto o Critério A1 (desatenção) quanto o Critério A2 (hiperatividade-impulsividade) forem preenchidos nos últimos 6 meses.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "apresentacao_predominantemente_desatenta",
        "codigo": {
          "dsm5": "314.00",
          "cid10": "F90.0",
          "cid11": null
        },
        "label": "Apresentação predominantemente desatenta",
        "descricao": "Se o Critério A1 (desatenção) for preenchido, mas o Critério A2 (hiperatividade-impulsividade) não for preenchido nos últimos 6 meses.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "apresentacao_predominantemente_hiperativa_impulsiva",
        "codigo": {
          "dsm5": "314.01",
          "cid10": "F90.1",
          "cid11": null
        },
        "label": "Apresentação predominantemente hiperativa/impulsiva",
        "descricao": "Se o Critério A2 (hiperatividade-impulsividade) for preenchido, mas o Critério A1 (desatenção) não for preenchido nos últimos 6 meses.",
        "sintomas_caracteristicos": []
      }
    ],
      },
  "instrumentos_complementares": [
    {
      "nome": "Questionário de Sintomas de TDAH SNAP-IV",
      "sigla": "SNAP-IV",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Escala de TDAH para Adultos ASRS-v1.1",
      "sigla": "ASRS-v1.1",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno Opositor Desafiante",
      "ponto_distincao": "A aversão a tarefas no TDAH é motivada por cansaço mental e distração, enquanto no TOD é por hostilidade atitude opositora direta.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtornos de Ansiedade",
      "ponto_distincao": "A desatenção na ansiedade decorre de preocupações e medos, não de déficits atencionais primários permanentes.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "academico",
      "label": "Funcionamento Acadêmico/Aprendizado",
      "icone": "School",
      "relevante_para": "ambos"
    },
    {
      "id": "laboral",
      "label": "Funcionamento Profissional",
      "icone": "Laptop",
      "relevante_para": "adulto"
    },
    {
      "id": "social",
      "label": "Relações Interpessoais e Familiares",
      "icone": "Heart",
      "relevante_para": "ambos"
    }
  ]
}
```

---

## Transtorno Delirante

```json
{
  "subtipos": {
    "presente": true,
    "nome": "Subtipo de delírio predominante",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "erotomanico",
        "codigo": {
          "dsm5": "297.1",
          "cid10": "F22",
          "cid11": null
        },
        "label": "Tipo Erotomaníaco",
        "descricao": "Aplica-se quando o tema central do delírio é que outra pessoa está apaixonada pelo indivíduo.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "grandioso",
        "codigo": {
          "dsm5": "297.1",
          "cid10": "F22",
          "cid11": null
        },
        "label": "Tipo Grandioso",
        "descricao": "Aplica-se quando o tema central do delírio é a convicção de ter algum grande talento ou insight (embora não reconhecido) ou de ter feito alguma descoberta importante.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "ciumento",
        "codigo": {
          "dsm5": "297.1",
          "cid10": "F22",
          "cid11": null
        },
        "label": "Tipo Ciumento",
        "descricao": "Aplica-se quando o tema central do delírio do indivíduo é de que seu cônjuge ou parceiro é infiel.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "persecutorio",
        "codigo": {
          "dsm5": "297.1",
          "cid10": "F22",
          "cid11": null
        },
        "label": "Tipo Persecutório",
        "descricao": "Aplica-se quando o tema central do delírio envolve a crença do indivíduo de que está sendo alvo de conspiração, enganado, espiado, seguido, envenenado ou drogado, difamado de forma maliciosa, assediado ou obstruído na busca de metas de longo prazo.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "somatico",
        "codigo": {
          "dsm5": "297.1",
          "cid10": "F22",
          "cid11": null
        },
        "label": "Tipo Somático",
        "descricao": "Aplica-se quando o tema central do delírio envolve funções ou sensações corporais.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "misto",
        "codigo": {
          "dsm5": "297.1",
          "cid10": "F22",
          "cid11": null
        },
        "label": "Tipo Misto",
        "descricao": "Aplica-se quando nenhum tema delirante predomina.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "nao_especificado",
        "codigo": {
          "dsm5": "297.1",
          "cid10": "F22",
          "cid11": null
        },
        "label": "Tipo Não Especificado",
        "descricao": "Aplica-se quando a crença delirante dominante não pode ser determinada com clareza ou não é descrita nos tipos específicos.",
        "sintomas_caracteristicos": []
      }
    ],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno Obsessivo-Compulsivo",
      "ponto_distincao": "Se o indivíduo está totalmente convencido da veracidade das crenças de seu TOC, deve ser diagnosticado TOC com insight ausente/crenças delirantes, em vez de transtorno delirante.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno Dismórfico Corporal",
      "ponto_distincao": "Se o indivíduo está totalmente convencido da veracidade das crenças de seu TDC, deve ser diagnosticado TDC com insight ausente/crenças delirantes, em vez de transtorno delirante.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Esquizofrenia",
      "ponto_distincao": "Diferencia-se pela ausência de outros sintomas característicos da fase ativa da esquizofrenia (ex: discurso desorganizado, sintomas negativos, alucinações auditivas proeminentes).",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtornos de Humor com Características Psicóticas",
      "ponto_distincao": "No transtorno delirante, os delírios persistem na ausência de episódios de humor, ou os episódios de humor têm duração total breve em relação à perturbação delirante.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "social",
      "label": "Relacionamento Social e Familiar",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "trabalho",
      "label": "Desempenho Profissional",
      "icone": "Briefcase",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno Depressivo Maior

```json
{
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
      },
  "instrumentos_complementares": [],
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
  ]
}
```

---

## Transtorno Depressivo Persistente (Distimia)

```json
{
  "subtipos": {
    "presente": true,
    "nome": "Padrão nos últimos 2 anos",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "tdp_sindrome_distimica_pura",
        "codigo": {
          "dsm5": "300.4",
          "cid10": "F34.1",
          "cid11": null
        },
        "label": "Com síndrome distímica pura",
        "descricao": "Não satisfeitos critérios para EDM pelos últimos 2 anos.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "tdp_edm_persistente",
        "codigo": {
          "dsm5": "300.4",
          "cid10": "F34.1",
          "cid11": null
        },
        "label": "Com episódio depressivo maior persistente",
        "descricao": "Critérios para EDM satisfeitos durante todo o período dos últimos 2 anos.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "tdp_edm_intermitente_com_atual",
        "codigo": {
          "dsm5": "300.4",
          "cid10": "F34.1",
          "cid11": null
        },
        "label": "Com EDM intermitentes, com episódio atual",
        "descricao": "Critérios atuais para EDM satisfeitos; houve períodos ≥8 sem. abaixo do limiar nos 2 anos anteriores.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "tdp_edm_intermitente_sem_atual",
        "codigo": {
          "dsm5": "300.4",
          "cid10": "F34.1",
          "cid11": null
        },
        "label": "Com EDM intermitentes, sem episódio atual",
        "descricao": "Critérios atuais para EDM não satisfeitos; houve ≥1 EDM nos 2 anos anteriores.",
        "sintomas_caracteristicos": []
      }
    ],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno Depressivo Maior",
      "ponto_distincao": "TDP requer 2 anos de humor deprimido; se EDM satisfeito, é especificador — não diagnóstico separado.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtornos psicóticos",
      "ponto_distincao": "TDP não diagnosticado se sintomas ocorrem somente durante transtorno psicótico.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno depressivo/bipolar devido a condição médica",
      "ponto_distincao": "Se condição médica crônica é causa fisiopatológica direta, usar diagnóstico específico.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno da personalidade",
      "ponto_distincao": "Podem coexistir; se critérios de ambos satisfeitos, ambos os diagnósticos são dados.",
      "pertence_a_classe": false
    }
  ],
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
    }
  ]
}
```

---

## Transtorno Dismórfico Corporal

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "TOC",
      "ponto_distincao": "TOC: obsessões não focadas em aparência; TDC: preocupação exclusiva com aparência física.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno Alimentar",
      "ponto_distincao": "Anorexia: preocupação com gordura/peso; TDC: outras características físicas.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "trabalho",
      "label": "Desempenho Profissional",
      "icone": "Briefcase",
      "relevante_para": "adulto"
    }
  ]
}
```

---

## Transtorno Disruptivo da Desregulação do Humor

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno Bipolar",
      "ponto_distincao": "TB é episódico com humor elevado/expansivo; TDDH é persistente e não episódico, sem humor elevado.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno de Oposição Desafiante",
      "ponto_distincao": "TDDH requer explosões graves/frequentes E humor persistente entre as explosões; TOD raramente tem o componente de humor entre explosões.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno Explosivo Intermitente",
      "ponto_distincao": "TEI não requer perturbação persistente do humor entre explosões e requer apenas 3 meses (vs. 12 no TDDH).",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno do Espectro Autista",
      "ponto_distincao": "No TEA, explosões são secundárias à perturbação de rotina; TDDH não deve ser adicionado nesse contexto.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "academico",
      "label": "Desempenho Escolar",
      "icone": "GraduationCap",
      "relevante_para": "pediatria"
    },
    {
      "id": "familiar",
      "label": "Funcionamento Familiar",
      "icone": "House",
      "relevante_para": "pediatria"
    },
    {
      "id": "pares",
      "label": "Relações com Pares",
      "icone": "Users",
      "relevante_para": "pediatria"
    }
  ]
}
```

---

## Transtorno do Espectro Autista

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": false,
    "subtipos": [],
      },
  "instrumentos_complementares": [
    {
      "nome": "Escala de Observação para o Diagnóstico do Autismo",
      "sigla": "ADOS-2",
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    },
    {
      "nome": "Entrevista de Diagnóstico de Autismo Revisada",
      "sigla": "ADI-R",
      "uso": "informante",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "TDAH",
      "ponto_distincao": "Dificuldades de atenção e hiperatividade no TDAH não incluem necessariamente déficits qualitativos intrínsecos na comunicação recíproca ou comportamentos restritivos.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno da Comunicação Social",
      "ponto_distincao": "TCSP não apresenta padrões de comportamento repetitivos ou interesses restritos (Critério B do TEA).",
      "pertence_a_classe": true
    }
  ],
  "dominios_impacto": [
    {
      "id": "comunicacao_social",
      "label": "Comunicação e Interação Social",
      "icone": "MessageCircle",
      "relevante_para": "ambos"
    },
    {
      "id": "rotinas",
      "label": "Adaptação a Rotinas e Mudanças",
      "icone": "RefreshCw",
      "relevante_para": "ambos"
    }
  ]
}
```

---

## Transtorno de Escoriação (Skin-Picking)

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "TOC",
      "ponto_distincao": "TOC: beliscar em resposta a obsessões específicas; escoriação: comportamento sem obsessão subjacente típica.",
      "pertence_a_classe": true
    }
  ],
  "dominios_impacto": [
    {
      "id": "social",
      "label": "Funcionamento Social (vergonha)",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "saude",
      "label": "Saúde Dermatológica",
      "icone": "Hospital",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno Específico da Aprendizagem

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": false,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Deficiência Intelectual",
      "ponto_distincao": "Na DI, as dificuldades são globais e proporcionais ao QI baixo, enquanto no Transtorno da Aprendizagem as dificuldades ocorrem em áreas acadêmicas específicas, estando o QI geral preservado.",
      "pertence_a_classe": true
    }
  ],
  "dominios_impacto": [
    {
      "id": "leitura",
      "label": "Habilidade de Leitura",
      "icone": "BookOpen",
      "relevante_para": "ambos"
    },
    {
      "id": "escrita",
      "label": "Habilidade de Escrita",
      "icone": "PenTool",
      "relevante_para": "ambos"
    },
    {
      "id": "calculo",
      "label": "Cálculo e Matemática",
      "icone": "Calculator",
      "relevante_para": "ambos"
    }
  ]
}
```

---

## Transtorno Esquizoafetivo

```json
{
  "subtipos": {
    "presente": true,
    "nome": "Subtipo baseado no episódio de humor",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "tipo_bipolar",
        "codigo": {
          "dsm5": "295.70",
          "cid10": "F25.0",
          "cid11": null
        },
        "label": "Tipo Bipolar",
        "descricao": "Aplica-se se um episódio maníaco faz parte da apresentação. Episódios depressivos maiores também podem ocorrer.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "tipo_depressivo",
        "codigo": {
          "dsm5": "295.70",
          "cid10": "F25.1",
          "cid11": null
        },
        "label": "Tipo Depressivo",
        "descricao": "Aplica-se se apenas episódios depressivos maiores fazem parte da apresentação.",
        "sintomas_caracteristicos": []
      }
    ],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Esquizofrenia",
      "ponto_distincao": "Na esquizofrenia, os sintomas de humor não estão presentes na maior parte da duração total da doença ou a psicose sem humor dura menos de 2 semanas.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno Depressivo ou Bipolar com Características Psicóticas",
      "ponto_distincao": "Diferencia-se pela ausência de delírios ou alucinações na ausência de episódios de humor por pelo menos duas semanas.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "social",
      "label": "Funcionamento Social e Interpessoal",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "trabalho",
      "label": "Desempenho Ocupacional",
      "icone": "Briefcase",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno Esquizofreniforme

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Esquizofrenia",
      "ponto_distincao": "A esquizofrenia exige perturbação contínua por pelo menos 6 meses e declínio funcional claro; o esquizofreniforme dura menos de 6 meses e não exige declínio funcional.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno Psicótico Breve",
      "ponto_distincao": "O transtorno psicótico breve dura menos de 1 mês e requer apenas 1 sintoma em vez de 2.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtornos de Humor com Psicose",
      "ponto_distincao": "Diferencia-se pela relação temporal dos sintomas psicóticos com os episódios de humor.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "social",
      "label": "Relacionamento Interpessoal",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "trabalho",
      "label": "Desempenho Ocupacional",
      "icone": "Briefcase",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno de Insônia

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [
    {
      "nome": "Polissonografia",
      "sigla": "PSG",
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    },
    {
      "nome": "Diário do Sono",
      "sigla": null,
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    },
    {
      "nome": "Actigrafia",
      "sigla": null,
      "uso": "monitoramento",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Variações normais do sono",
      "ponto_distincao": "Pessoas com sono curto não apresentam dificuldade para conciliar ou manter o sono nem sintomas diurnos típicos.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno do sono-vigília do ritmo circadiano",
      "ponto_distincao": "Ritmo circadiano: insônia apenas quando há descompasso entre horário de dormir e ritmo endógeno.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Síndrome das pernas inquietas",
      "ponto_distincao": "SPI distingue-se pela necessidade de movimentar as pernas acompanhada de sensações desconfortáveis.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtornos do sono relacionados à respiração",
      "ponto_distincao": "Apneia do sono: história de roncos altos, pausas respiratórias e sonolência diurna excessiva.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Narcolepsia",
      "ponto_distincao": "Narcolepsia distingue-se pela predominância de sonolência diurna excessiva, cataplexia, paralisia do sono e alucinações.",
      "pertence_a_classe": true
    }
  ],
  "dominios_impacto": [
    {
      "id": "sono",
      "label": "Qualidade do Sono",
      "icone": "Bed",
      "relevante_para": "transversal"
    },
    {
      "id": "cognitivo",
      "label": "Desempenho Cognitivo Diurno",
      "icone": "Brain",
      "relevante_para": "transversal"
    },
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "trabalho",
      "label": "Desempenho Profissional/Escolar",
      "icone": "Briefcase",
      "relevante_para": "adulto"
    }
  ]
}
```

---

## Transtorno da Linguagem

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": false,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno do Espectro Autista",
      "ponto_distincao": "TEA inclui necessariamente padrões repetitivos e restritivos de comportamento, os quais estão ausentes no Transtorno da Linguagem.",
      "pertence_a_classe": true
    }
  ],
  "dominios_impacto": [
    {
      "id": "comunicacao",
      "label": "Comunicação Efetiva",
      "icone": "Megaphone",
      "relevante_para": "ambos"
    },
    {
      "id": "social",
      "label": "Socialização",
      "icone": "Users",
      "relevante_para": "ambos"
    },
    {
      "id": "academico",
      "label": "Participação Acadêmica/Profissional",
      "icone": "BookOpen",
      "relevante_para": "ambos"
    }
  ]
}
```

---

## Transtorno Obsessivo-Compulsivo

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [
    {
      "nome": "Yale-Brown Obsessive Compulsive Scale",
      "sigla": "Y-BOCS",
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtorno de Ansiedade Generalizada",
      "ponto_distincao": "TAG: preocupações sobre problemas da vida real; TOC: obsessões são intrusivas/egodistônicas, frequentemente sem base realista.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno Dismórfico Corporal",
      "ponto_distincao": "TDC: obsessões limitadas à aparência física; TOC: obsessões variadas; se preocupações com aparência satisfazem TDC, diagnosticar TDC.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno do Espectro Autista",
      "ponto_distincao": "TEA: comportamentos repetitivos egossintônicos visando regulação sensorial; TOC: compulsões são egodistônicas e visam reduzir ansiedade.",
      "pertence_a_classe": false
    }
  ],
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
      "id": "tempo",
      "label": "Uso do Tempo",
      "icone": "Clock",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno de Pânico

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Outros transtornos de ansiedade",
      "ponto_distincao": "Pânico: ataques inesperados; em outros transtornos, a ansiedade é situacional e previsível.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Outras condições médicas",
      "ponto_distincao": "Exames laboratoriais para excluir causas orgânicas (tireoide, coração, sistema nervoso).",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno de depressão maior",
      "ponto_distincao": "Ataques de pânico ocorrem frequentemente no TDM; o diagnóstico de TP pode ser dado se satisfeitos todos os critérios.",
      "pertence_a_classe": false
    }
  ],
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
      "id": "saude",
      "label": "Uso de Serviços de Saúde",
      "icone": "Hospital",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno por Uso de Álcool

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [
    {
      "nome": "AUDIT",
      "sigla": "AUDIT",
      "uso": "triagem",
      "obrigatorio_para_diagnostico": false,
      "fonte": "sugestao_clinica_padrao"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Uso não patológico de álcool",
      "ponto_distincao": "Ingestão ocasional ou diária em pequenas doses sem sofrimento/significativo prejuízo funcional.",
      "pertence_a_classe": false
    },
    {
      "condicao": "Transtorno por uso de sedativos, hipnóticos ou ansiolíticos",
      "ponto_distincao": "Sintomas semelhantes, mas curso pode ser diferente, especialmente quanto a problemas médicos.",
      "pertence_a_classe": true
    }
  ],
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
      "id": "saude",
      "label": "Saúde Física",
      "icone": "HeartPulse",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno por Uso de Estimulantes

```json
{
  "subtipos": {
    "presente": true,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [
    {
      "id": "anfetamina",
      "label": "Substância tipo anfetamina (incl. metanfetamina)"
    },
    {
      "id": "cocaina",
      "label": "Cocaína"
    },
    {
      "id": "outro_estimulante",
      "label": "Outro estimulante"
    }
  ],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtornos mentais primários",
      "ponto_distincao": "Efeitos de estimulantes devem ser distinguidos de esquizofrenia, transtornos bipolares/depressivos, TAG e TP.",
      "pertence_a_classe": false
    }
  ],
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
      "id": "saude",
      "label": "Saúde Cardiopulmonar",
      "icone": "HeartPulse",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno por Uso de Opioides

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [
    {
      "nome": "Exame toxicológico de urina",
      "sigla": null,
      "uso": "diagnostico",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Transtornos mentais induzidos por opioides",
      "ponto_distincao": "Sintomas específicos de outro transtorno predominam e justificam atenção clínica independente.",
      "pertence_a_classe": true
    }
  ],
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
      "id": "saude",
      "label": "Saúde Física",
      "icone": "HeartPulse",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno por Uso de Tabaco

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [
    {
      "nome": "Monóxido de carbono no ar expirado",
      "sigla": null,
      "uso": "monitoramento",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    },
    {
      "nome": "Cotinina no sangue/saliva/urina",
      "sigla": null,
      "uso": "monitoramento",
      "obrigatorio_para_diagnostico": false,
      "fonte": "mencionado_no_dsm"
    }
  ],
  "diagnostico_diferencial": [
    {
      "condicao": "Uso não diário de tabaco",
      "ponto_distincao": "~20% dos fumantes atuais não fumam diariamente; critérios podem não ser preenchidos.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "saude",
      "label": "Saúde Física",
      "icone": "HeartPulse",
      "relevante_para": "transversal"
    },
    {
      "id": "social",
      "label": "Funcionamento Social",
      "icone": "Users",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtorno Psicótico Breve

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "Esquizofrenia ou Transtorno Esquizofreniforme",
      "ponto_distincao": "Se os sintomas persistirem por 1 mês ou mais, o diagnóstico deve ser alterado para transtorno esquizofreniforme (até 6 meses) ou esquizofrenia (mais de 6 meses).",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno Psicótico Induzido por Substância",
      "ponto_distincao": "Diferencia-se pela relação cronológica do uso da substância com o aparecimento e a remissão das crenças e sintomas psicóticos.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtornos de Humor com Psicose",
      "ponto_distincao": "Nos transtornos de humor, os sintomas psicóticos ocorrem apenas concomitantemente a episódios graves de humor deprimido ou maníaco.",
      "pertence_a_classe": false
    }
  ],
  "dominios_impacto": [
    {
      "id": "social",
      "label": "Relacionamentos Interpessoais",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "autocuidado",
      "label": "Autocuidado e Independência",
      "icone": "House",
      "relevante_para": "transversal"
    }
  ]
}
```

---

## Transtornos de Adaptação

```json
{
  "subtipos": {
    "presente": true,
    "nome": "Subtipo clínico",
    "mutuamente_exclusivos": true,
    "subtipos": [
      {
        "id": "humor_deprimido",
        "codigo": {
          "dsm5": "309.0",
          "cid10": "F43.21",
          "cid11": null
        },
        "label": "Com humor deprimido",
        "descricao": "Baixo astral, choro e sentimentos de desesperança predominam.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "ansiedade",
        "codigo": {
          "dsm5": "309.24",
          "cid10": "F43.22",
          "cid11": null
        },
        "label": "Com ansiedade",
        "descricao": "Nervosismo, preocupação, agitação ou ansiedade de separação predominam.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "misto_depressivo_ansioso",
        "codigo": {
          "dsm5": "309.28",
          "cid10": "F43.23",
          "cid11": null
        },
        "label": "Com humor deprimido e ansiedade mistos",
        "descricao": "Combinação de depressão e ansiedade predomina.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "perturbacao_conduta",
        "codigo": {
          "dsm5": "309.3",
          "cid10": "F43.24",
          "cid11": null
        },
        "label": "Com perturbação de conduta",
        "descricao": "Perturbação de conduta predomina.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "misto_emocoes_conduta",
        "codigo": {
          "dsm5": "309.4",
          "cid10": "F43.25",
          "cid11": null
        },
        "label": "Com perturbação mista de emoções e conduta",
        "descricao": "Sintomas emocionais e de conduta.",
        "sintomas_caracteristicos": []
      },
      {
        "id": "nao_especificado",
        "codigo": {
          "dsm5": "309.9",
          "cid10": "F43.20",
          "cid11": null
        },
        "label": "Não especificado",
        "descricao": "Reações mal adaptativas não classificáveis em outros subtipos.",
        "sintomas_caracteristicos": []
      }
    ],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "TEPT / TEA",
      "ponto_distincao": "TEPT/TEA: exigem trauma com risco de vida; transtorno de adaptação: qualquer estressor.",
      "pertence_a_classe": true
    },
    {
      "condicao": "Transtorno Depressivo Maior",
      "ponto_distincao": "TDM: pode ser diagnosticado mesmo sem estressor identificável; satisfeitos critérios formais A-E do TDM.",
      "pertence_a_classe": false
    }
  ],
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
    }
  ]
}
```

---

## Tricotilomania (Transtorno de Arrancar o Cabelo)

```json
{
  "subtipos": {
    "presente": false,
    "nome": null,
    "mutuamente_exclusivos": true,
    "subtipos": [],
      },
  "instrumentos_complementares": [],
  "diagnostico_diferencial": [
    {
      "condicao": "TOC",
      "ponto_distincao": "TOC: compulsões em resposta a obsessões específicas; tricotilomania: comportamento sem pensamento obsessivo subjacente.",
      "pertence_a_classe": true
    }
  ],
  "dominios_impacto": [
    {
      "id": "social",
      "label": "Funcionamento Social (vergonha)",
      "icone": "Users",
      "relevante_para": "transversal"
    },
    {
      "id": "saude",
      "label": "Saúde Dermatológica/Capilar",
      "icone": "Hospital",
      "relevante_para": "transversal"
    }
  ]
}
```

---
