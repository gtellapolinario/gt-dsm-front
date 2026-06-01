import type { TranstornoDSM } from "@/infra/types";

export const data: TranstornoDSM = {
  $schema_version: "1.0.0",
  meta: {
    id: "transtorno_deficit_atencao_hiperatividade",
    nome_completo: "Transtorno de Déficit de Atenção/Hiperatividade",
    sigla: "TDAH",
    codigo: {
      dsm5: "314.01",
      cid10: "F90.2",
      cid11: null,
    },
    capitulo: "Transtornos do Neurodesenvolvimento",
    capitulo_id: "01",
    grupo: "Transtorno de Déficit de Atenção/Hiperatividade",
    faixa_etaria_alvo: "ambos",
    versao_complementar_existe: false,
    sinonimos_historicos: [
      "Disfunção cerebral mínima",
      "Reação hipercinética da infância",
      "Transtorno de déficit de atenção (TDA)",
    ],
  },
  estrutura_geral: "polythetic_clusters_simetricos",
  clusters_sintomas: [
    {
      id: "A1",
      nome: "Desatenção",
      tipo: "polythetic_com_limiar",
      limiar: {
        adulto: 5,
        pediatria: 6,
      },
      ancora_obrigatoria: null,
      sintomas: [
        {
          id: "IA1",
          rotulo: "Erros por descuido em detalhes",
          desc: "Frequentemente deixa de prestar atenção a detalhes ou comete erros por descuido em atividades escolares, trabalho ou outras atividades.",
          pergunta: "Você costuma cometer erros por distração ou deixar passar detalhes importantes em tarefas?",
          exemplos_clinicos: [
            "Deixa passar detalhes em tarefas escolares",
            "Trabalho impreciso ou com erros que poderiam ser evitados",
          ],
          faixa_aplicavel: null,
        },
        {
          id: "IA2",
          rotulo: "Dificuldade de manter atenção em tarefas",
          desc: "Frequentemente tem dificuldade de manter a atenção em tarefas ou atividades lúdicas.",
          pergunta: "Você tem dificuldade de manter a concentração em leituras, palestras ou conversas longas?",
          exemplos_clinicos: [
            "Dificuldade em manter foco em aulas",
            "Dificuldade em terminar a leitura de um texto",
          ],
          faixa_aplicavel: null,
        },
        {
          id: "IA3",
          rotulo: "Parece não escutar quando alguém fala diretamente",
          desc: "Frequentemente parece não escutar quando alguém lhe dirige a palavra diretamente.",
          pergunta: "As pessoas comentam que você parece estar com a cabeça em outro lugar quando falam com você?",
          exemplos_clinicos: [
            "Mente parece estar em outro lugar mesmo na ausência de distrações óbvias",
          ],
          faixa_aplicavel: null,
        },
        {
          id: "IA4",
          rotulo: "Não termina o que começa",
          desc: "Frequentemente não segue instruções até o fim e não consegue terminar trabalhos escolares, tarefas ou deveres no local de trabalho.",
          pergunta: "Você costuma começar projetos com entusiasmo mas tem dificuldade de levá-los até o fim?",
          exemplos_clinicos: [
            "Inicia tarefas mas perde o foco rapidamente",
            "Distrai-se facilmente durante a execução",
          ],
          faixa_aplicavel: null,
        },
        {
          id: "IA5",
          rotulo: "Dificuldade de organizar tarefas e atividades",
          desc: "Frequentemente tem dificuldade de organizar tarefas e atividades.",
          pergunta: "Você tem dificuldade de organizar materiais, prazos, planejar etapas de um trabalho?",
          exemplos_clinicos: [
            "Dificuldade de gerenciar tarefas sequenciais",
            "Trabalho desorganizado",
            "Gerenciamento ruim do tempo",
            "Perde prazos",
          ],
          faixa_aplicavel: null,
        },
        {
          id: "IA6",
          rotulo: "Evita tarefas que exigem esforço mental sustentado",
          desc: "Frequentemente evita, não gosta ou reluta em envolver-se em tarefas que exijam esforço mental constante.",
          pergunta: "Você evita tarefas que demandem atenção prolongada, como preencher formulários ou revisar documentos longos?",
          exemplos_clinicos: [
            "Evita trabalhos escolares ou tarefas de casa",
            "Em adolescentes e adultos, evita preparar relatórios ou revisar trabalhos",
          ],
          faixa_aplicavel: null,
        },
        {
          id: "IA7",
          rotulo: "Perde objetos necessários para tarefas",
          desc: "Frequentemente perde objetos necessários para tarefas ou atividades.",
          pergunta: "Você costuma perder chaves, celular, documentos, carteira, óculos?",
          exemplos_clinicos: [
            "Perde materiais escolares, lápis, livros",
            "Em adultos: perde chaves, carteiras, celulares, documentos",
          ],
          faixa_aplicavel: null,
        },
        {
          id: "IA8",
          rotulo: "Distrai-se facilmente com estímulos externos",
          desc: "Frequentemente é facilmente distraído por estímulos externos. Em adolescentes mais velhos e adultos, pode incluir pensamentos não relacionados.",
          pergunta: "Você se distrai com facilidade com barulhos, movimentos ao redor ou com seus próprios pensamentos?",
          exemplos_clinicos: [
            "Em adultos, pensamentos intrusivos também contam",
          ],
          faixa_aplicavel: null,
        },
        {
          id: "IA9",
          rotulo: "Esquece atividades cotidianas",
          desc: "Frequentemente é esquecido em relação a atividades cotidianas.",
          pergunta: "Você esquece compromissos, ligações, pagar contas, retornar mensagens?",
          exemplos_clinicos: [
            "Realizar tarefas",
            "Fazer mandados",
            "Em adolescentes mais velhos e adultos, retornar ligações, pagar contas, manter compromissos",
          ],
          faixa_aplicavel: null,
        },
      ],
      descricao_qualitativa: null,
      metadados: {
        completo: true,
        lacunas: [],
        notas_agente:
          "Limiar 6/9 em pediatria e 5/9 em >=17 anos, conforme DSM-5. Sintomas presentes por >=6 meses em grau inconsistente com nivel de desenvolvimento e com impacto negativo direto em atividades sociais, academicas ou ocupacionais.",
        fonte_passada_1: true,
      },
    },
    {
      id: "A2",
      nome: "Hiperatividade-Impulsividade",
      tipo: "polythetic_com_limiar",
      limiar: {
        adulto: 5,
        pediatria: 6,
      },
      ancora_obrigatoria: null,
      sintomas: [
        {
          id: "HI1",
          rotulo: "Remexe ou batuca as maos/pes",
          desc: "Frequentemente remexe ou batuca as maos ou os pes ou se contorce na cadeira.",
          pergunta: "Você tem dificuldade de ficar fisicamente parado, mexe pernas ou maos durante reunioes ou refeicoes?",
          exemplos_clinicos: [],
          faixa_aplicavel: null,
        },
        {
          id: "HI2",
          rotulo: "Levanta-se em situacoes em que se espera ficar sentado",
          desc: "Frequentemente levanta-se em situacoes em que se espera permanecer sentado.",
          pergunta: "Você tem dificuldade de permanecer sentado em reunioes longas, no cinema ou em outros contextos em que isso e esperado?",
          exemplos_clinicos: [
            "Sai do lugar em sala de aula",
            "Em adultos, sai do posto de trabalho",
          ],
          faixa_aplicavel: null,
        },
        {
          id: "HI3",
          rotulo: "Corre/escala em situacoes improprias ou inquietacao interna",
          desc: "Frequentemente corre ou escala em situacoes em que isso e inapropriado. Em adolescentes ou adultos, pode estar limitado a sentir-se inquieto.",
          pergunta: "Voce se sente inquieto por dentro, com dificuldade de relaxar fisicamente?",
          exemplos_clinicos: [
            "Em criancas, corre ou escala",
            "Em adultos, sensacao subjetiva de inquietacao",
          ],
          faixa_aplicavel: null,
        },
        {
          id: "HI4",
          rotulo: "Incapaz de envolver-se em atividades de lazer calmamente",
          desc: "Frequentemente e incapaz de brincar ou se envolver em atividades de lazer calmamente.",
          pergunta: "Voce tem dificuldade de relaxar em atividades silenciosas como ler, assistir a um filme inteiro ou ouvir musica sem fazer outra coisa?",
          exemplos_clinicos: [],
          faixa_aplicavel: null,
        },
        {
          id: "HI5",
          rotulo: "Esta 'a mil' ou 'a todo vapor'",
          desc: "Frequentemente esta 'a mil' ou age como se estivesse 'a todo vapor'.",
          pergunta: "Voce se sente quase sempre acelerado, com dificuldade de baixar o ritmo mesmo quando quer descansar?",
          exemplos_clinicos: [
            "Incapaz ou desconfortavel em ficar parado por longos periodos",
            "Em ambientes formais, percebido como inquieto ou dificil de acompanhar",
          ],
          faixa_aplicavel: null,
        },
        {
          id: "HI6",
          rotulo: "Fala em excesso",
          desc: "Frequentemente fala demais.",
          pergunta: "Voce fala em excesso, a ponto de outras pessoas comentarem ou interrompe-lo para retomar a palavra?",
          exemplos_clinicos: [],
          faixa_aplicavel: null,
        },
        {
          id: "HI7",
          rotulo: "Responde antes de a pergunta terminar",
          desc: "Frequentemente deixa escapar uma resposta antes que a pergunta tenha sido concluida.",
          pergunta: "Voce termina as frases dos outros ou responde antes de ouvir a pergunta toda?",
          exemplos_clinicos: [
            "Completa frases das pessoas",
            "Em adultos, intromete-se em conversas",
          ],
          faixa_aplicavel: null,
        },
        {
          id: "HI8",
          rotulo: "Dificuldade de esperar a vez",
          desc: "Frequentemente tem dificuldade de esperar a sua vez.",
          pergunta: "Voce tem dificuldade de esperar em filas, em rodas de conversa, no transito?",
          exemplos_clinicos: [
            "Durante espera em filas",
            "Em adultos, impaciencia no transito",
          ],
          faixa_aplicavel: null,
        },
        {
          id: "HI9",
          rotulo: "Interrompe ou se intromete",
          desc: "Frequentemente interrompe ou se intromete (por exemplo, mete-se em conversas, jogos ou atividades; pode comecar a usar coisas de outras pessoas sem pedir).",
          pergunta: "Voce costuma se intrometer em conversas alheias ou usar coisas de outras pessoas sem pedir?",
          exemplos_clinicos: [
            "Em adolescentes e adultos, pode assumir o controle do que outros estao fazendo",
          ],
          faixa_aplicavel: null,
        },
      ],
      descricao_qualitativa: null,
      metadados: {
        completo: true,
        lacunas: [],
        notas_agente: "Limiar simetrico ao cluster A1: 6/9 em pediatria, 5/9 em >=17 anos.",
        fonte_passada_1: true,
      },
    },
  ],
  criterios_condicionais: [
    {
      id: "inicio_antes_12",
      letra: "B",
      rotulo: "Inicio antes dos 12 anos",
      tipo: "temporal_idade_inicio",
      ui_widget: "campo_informante",
      obrigatorio: true,
      icone_fa: "fa-child",
      ddx_sugeridos: [],
      descricao_completa:
        "Varios sintomas de desatencao ou hiperatividade-impulsividade estavam presentes antes dos 12 anos de idade. Em adultos, o diagnostico depende de informante (familiar, registros escolares) ou de historia autobiografica confiavel.",
      metadados: {
        completo: true,
        lacunas: [],
        notas_agente:
          "Em adultos, este criterio e frequentemente o mais dificil de operacionalizar — requer informante ou documentacao escolar.",
        fonte_passada_1: true,
      },
    },
    {
      id: "multicontexto",
      letra: "C",
      rotulo: "Presentes em dois ou mais contextos",
      tipo: "multicontexto",
      ui_widget: "campo_textual_obrigatorio",
      obrigatorio: true,
      icone_fa: "fa-layer-group",
      ddx_sugeridos: [],
      descricao_completa:
        "Varios sintomas de desatencao ou hiperatividade-impulsividade estao presentes em dois ou mais ambientes (em casa, na escola ou no trabalho; com amigos ou parentes; em outras atividades).",
      metadados: {
        completo: true,
        lacunas: [],
        notas_agente: null,
        fonte_passada_1: true,
      },
    },
    {
      id: "prejuizo_funcional",
      letra: "D",
      rotulo: "Prejuizo clinicamente significativo",
      tipo: "prejuizo_funcional",
      ui_widget: "toggle_com_justificativa_obrigatoria",
      obrigatorio: true,
      icone_fa: "fa-triangle-exclamation",
      ddx_sugeridos: [],
      descricao_completa:
        "Ha evidencias claras de que os sintomas interferem no funcionamento social, academico ou profissional ou de que reduzem sua qualidade.",
      metadados: {
        completo: true,
        lacunas: [],
        notas_agente: null,
        fonte_passada_1: true,
      },
    },
    {
      id: "exclusao_psicose_outro_mental",
      letra: "E",
      rotulo: "Nao explicado por outro transtorno mental",
      tipo: "exclusao_diagnostica",
      ui_widget: "select_multiplos_ddx",
      obrigatorio: true,
      icone_fa: "fa-ban",
      ddx_sugeridos: [
        "esquizofrenia",
        "transtorno_psicotico_breve",
        "transtorno_humor",
        "transtorno_ansiedade",
        "transtorno_dissociativo",
        "transtorno_personalidade",
        "intoxicacao_substancia",
        "abstinencia_substancia",
      ],
      descricao_completa:
        "Os sintomas nao ocorrem exclusivamente durante o curso de esquizofrenia ou outro transtorno psicotico e nao sao mais bem explicados por outro transtorno mental (transtornos de humor, de ansiedade, dissociativo, de personalidade, intoxicacao ou abstinencia de substancia).",
      metadados: {
        completo: true,
        lacunas: [],
        notas_agente: null,
        fonte_passada_1: true,
      },
    },
  ],
  subtipos: {
    presente: true,
    nome: "Apresentacao clinica predominante",
    mutuamente_exclusivos: true,
    subtipos: [
      {
        id: "apresentacao_combinada",
        codigo: { dsm5: "314.01", cid10: "F90.2", cid11: null },
        label: "Apresentacao combinada",
        descricao:
          "Se o Criterio A1 (desatencao) e o Criterio A2 (hiperatividade-impulsividade) sao preenchidos nos ultimos 6 meses.",
        sintomas_caracteristicos: [],
      },
      {
        id: "apresentacao_predominantemente_desatenta",
        codigo: { dsm5: "314.00", cid10: "F90.0", cid11: null },
        label: "Apresentacao predominantemente desatenta",
        descricao:
          "Se o Criterio A1 (desatencao) e preenchido, mas o Criterio A2 (hiperatividade-impulsividade) nao, nos ultimos 6 meses.",
        sintomas_caracteristicos: [],
      },
      {
        id: "apresentacao_predominantemente_hiperativa_impulsiva",
        codigo: { dsm5: "314.01", cid10: "F90.1", cid11: null },
        label: "Apresentacao predominantemente hiperativa/impulsiva",
        descricao:
          "Se o Criterio A2 (hiperatividade-impulsividade) e preenchido, mas o Criterio A1 (desatencao) nao, nos ultimos 6 meses.",
        sintomas_caracteristicos: [],
      },
    ],
    metadados: {
      completo: true,
      lacunas: [],
      notas_agente:
        "Os tres subtipos tem codigos DSM proprios — atribuidos com base nos clusters preenchidos nos ultimos 6 meses, nao no historico cumulativo.",
      fonte_passada_1: true,
    },
  },
  especificadores: [
    {
      id: "em_remissao_parcial",
      nome: "Em remissao parcial",
      tipo: "booleano",
      ortogonal: true,
      opcoes: [],
      metadados: {
        completo: true,
        lacunas: [],
        notas_agente:
          "Quando todos os criterios foram previamente preenchidos, menos do limiar de sintomas sao preenchidos nos ultimos 6 meses, e os sintomas ainda causam prejuizo.",
        fonte_passada_1: true,
      },
    },
  ],
  gravidade: {
    tipo: "ordinal_simples",
    niveis: [
      {
        id: "leve",
        label: "Leve",
        descritor:
          "Poucos sintomas, se algum, estao presentes alem daqueles necessarios para o diagnostico, e os sintomas resultam em nao mais que pequenos prejuizos no funcionamento social ou profissional.",
      },
      {
        id: "moderada",
        label: "Moderada",
        descritor:
          "Sintomas ou prejuizo funcional entre 'leve' e 'grave' estao presentes.",
      },
      {
        id: "grave",
        label: "Grave",
        descritor:
          "Muitos sintomas alem daqueles necessarios para o diagnostico estao presentes ou varios sintomas particularmente graves estao presentes ou os sintomas resultam em prejuizo acentuado no funcionamento social ou profissional.",
      },
    ],
    regra_atribuicao:
      "Baseado no numero de sintomas presentes alem do limiar minimo e no nivel de prejuizo funcional resultante.",
    metadados: {
      completo: true,
      lacunas: [],
      notas_agente: null,
      fonte_passada_1: true,
    },
  },
  hierarquia: {
    presente: true,
    exclui_se_diagnosticado: [],
    exclui_diagnostico_de: [],
    notas: "Os sintomas nao devem ocorrer exclusivamente durante o curso de esquizofrenia ou outro transtorno psicotico (Criterio E). TDAH pode coexistir com TEA conforme DSM-5 — nao ha mais exclusao reciproca entre os dois.",
    metadados: {
      completo: true,
      lacunas: [],
      notas_agente:
        "TDAH e TEA podem coexistir desde DSM-5 (essa foi mudanca importante em relacao ao DSM-IV-TR). Hierarquia formal aqui e apenas do tipo exclusao por psicose ativa (ja capturada no criterio E).",
      fonte_passada_1: true,
    },
  },
  dominios_impacto: [
    {
      id: "academico",
      label: "Desempenho academico",
      icone_fa: "fa-graduation-cap",
      relevante_para: "ambos",
    },
    {
      id: "trabalho",
      label: "Desempenho profissional",
      icone_fa: "fa-briefcase",
      relevante_para: "adulto",
    },
    {
      id: "social",
      label: "Funcionamento social e familiar",
      icone_fa: "fa-users",
      relevante_para: null,
    },
    {
      id: "autonomia_executiva",
      label: "Autonomia e funcionamento executivo",
      icone_fa: "fa-list-check",
      relevante_para: "adulto",
    },
  ],
  diagnostico_diferencial: [
    {
      condicao: "Transtorno Opositor Desafiante",
      ponto_distincao:
        "A aversao a tarefas que exigem esforco mental sustentado no TDAH deve ser diferenciada da resistencia opositora ou hostilidade ativa do TOD as demandas alheias.",
      pertence_a_classe: false,
    },
    {
      condicao: "Transtorno Explosivo Intermitente",
      ponto_distincao:
        "TDAH e TEI ambos envolvem comportamento impulsivo, mas o TEI envolve agressividade severa, ausente no quadro tipico de TDAH.",
      pertence_a_classe: false,
    },
    {
      condicao: "Outros transtornos do neurodesenvolvimento",
      ponto_distincao:
        "Estereotipias do transtorno do movimento estereotipado e os sintomas motores do TEA sao distinguiveis da hiperatividade do TDAH.",
      pertence_a_classe: true,
    },
    {
      condicao: "Transtorno Especifico da Aprendizagem",
      ponto_distincao:
        "Criancas com TEA podem parecer desatentas pela frustracao e desinteresse em areas especificas de dificuldade academica, sem o padrao pervasivo de desatencao do TDAH.",
      pertence_a_classe: true,
    },
    {
      condicao: "Deficiencia Intelectual",
      ponto_distincao:
        "Diagnostica-se TDAH adicional quando a desatencao/hiperatividade e excessiva em relacao a idade mental.",
      pertence_a_classe: true,
    },
    {
      condicao: "Transtorno do Espectro Autista",
      ponto_distincao:
        "Criancas com TEA podem ter desatencao e hiperatividade. Diagnostique TDAH adicional se preencher criterios para ambos.",
      pertence_a_classe: true,
    },
    {
      condicao: "Transtorno Reativo de Vinculacao",
      ponto_distincao:
        "Criancas com TRV podem apresentar desinibicao social, mas nao o padrao completo de sintomas do TDAH.",
      pertence_a_classe: false,
    },
    {
      condicao: "Transtornos de Ansiedade",
      ponto_distincao:
        "TDAH compartilha sintomas de desatencao com transtornos de ansiedade. A desatencao do TDAH ocorre por atracao a estimulos externos ou novas atividades; a do quadro ansioso e por ruminacao e preocupacao.",
      pertence_a_classe: false,
    },
    {
      condicao: "Transtornos Depressivos",
      ponto_distincao:
        "Individuos com transtorno depressivo podem ter incapacidade de concentracao, mas apenas durante o episodio depressivo.",
      pertence_a_classe: false,
    },
    {
      condicao: "Transtorno Bipolar",
      ponto_distincao:
        "Pessoas com TB podem ter sintomas de aumento de atividade, fala acelerada, distracao, mas restritos a episodios e acompanhados de sintomas afetivos cardinais (humor elevado/irritavel, grandiosidade, reducao de sono).",
      pertence_a_classe: false,
    },
    {
      condicao: "Transtorno Disruptivo da Desregulacao do Humor",
      ponto_distincao:
        "TDDH se caracteriza por irritabilidade persistente e episodios frequentes de descontrole comportamental — uma populacao em que o TDAH e prevalente. TDDH adicional so se preencher criterios proprios.",
      pertence_a_classe: false,
    },
    {
      condicao: "Transtorno por uso de substancias",
      ponto_distincao:
        "Diferenciar TDAH de transtorno por uso de substancias pode ser dificil se a primeira manifestacao dos sintomas surge concomitantemente ao uso. Evidencia clara de TDAH pre-inicio do uso e o ponto-chave.",
      pertence_a_classe: false,
    },
    {
      condicao: "Transtornos da Personalidade",
      ponto_distincao:
        "Em adolescentes e adultos, pode ser dificil distinguir TDAH dos transtornos de personalidade borderline, narcisista, antissocial e histrionica. Historico de inicio precoce e estabilidade dos sintomas pesam para TDAH.",
      pertence_a_classe: false,
    },
    {
      condicao: "Transtornos Psicoticos",
      ponto_distincao:
        "TDAH nao e diagnosticado se sintomas ocorrem exclusivamente durante curso de transtorno psicotico.",
      pertence_a_classe: false,
    },
    {
      condicao: "Transtorno mental induzido por medicamento",
      ponto_distincao:
        "Sintomas de TDAH atribuiveis ao uso de medicamento (broncodilatadores, isoniazida, neurolepticos com acatisia, terapia tireoidiana de reposicao) sao diagnosticados como transtorno induzido por medicamento.",
      pertence_a_classe: false,
    },
    {
      condicao: "Transtornos Neurocognitivos",
      ponto_distincao:
        "TNC leve precoce e TDAH podem ter sobreposicao, mas o TNC leve apresenta declinio de funcionamento previo, enquanto TDAH e de inicio no desenvolvimento.",
      pertence_a_classe: false,
    },
  ],
  comorbidades_frequentes: [
    {
      condicao: "Transtorno Opositor Desafiante",
      frequencia: "alta",
      nota: "Coexiste com TDAH em cerca de metade das criancas com apresentacao combinada e cerca de um quarto das criancas com apresentacao predominantemente desatenta.",
    },
    {
      condicao: "Transtorno da Conduta",
      frequencia: "moderada",
      nota: "Coexiste em cerca de um quarto das criancas e adolescentes com apresentacao combinada, dependendo da idade e do contexto.",
    },
    {
      condicao: "Transtorno Disruptivo da Desregulacao do Humor",
      frequencia: "moderada",
      nota: null,
    },
    {
      condicao: "Transtorno Especifico da Aprendizagem",
      frequencia: "alta",
      nota: "Comum em coexistencia com TDAH.",
    },
    {
      condicao: "Transtornos de ansiedade",
      frequencia: "alta",
      nota: "Coexistem em uma proporcao minoritaria mas substancial do TDAH na populacao geral.",
    },
    {
      condicao: "Transtorno depressivo maior",
      frequencia: "moderada",
      nota: "Coexiste em minoria de casos.",
    },
    {
      condicao: "Transtorno Explosivo Intermitente",
      frequencia: "moderada",
      nota: "Coexiste em minoria de adultos com TDAH.",
    },
    {
      condicao: "Transtorno por Uso de Substancias",
      frequencia: "moderada",
      nota: "Mais frequente em adolescentes e adultos com TDAH.",
    },
    {
      condicao: "Transtorno do Espectro Autista",
      frequencia: "moderada",
      nota: "Pode coexistir; reconhecido formalmente desde DSM-5.",
    },
    {
      condicao: "Transtornos de tique e Tourette",
      frequencia: "baixa",
      nota: "Tiques co-ocorrem com TDAH; mas Tourette e incomum em TDAH.",
    },
    {
      condicao: "Transtorno da Personalidade Antissocial",
      frequencia: "moderada",
      nota: "Em adultos, ha associacao aumentada com transtorno da personalidade antissocial e outros transtornos de personalidade.",
    },
  ],
  instrumentos_complementares: [
    {
      nome: "Escala SNAP-IV",
      sigla: "SNAP-IV",
      uso: "triagem",
      obrigatorio_para_diagnostico: false,
      fonte: "sugestao_clinica_padrao",
    },
    {
      nome: "Adult ADHD Self-Report Scale",
      sigla: "ASRS-1.1",
      uso: "triagem",
      obrigatorio_para_diagnostico: false,
      fonte: "sugestao_clinica_padrao",
    },
    {
      nome: "Conners Comprehensive Behavior Rating Scales",
      sigla: "Conners",
      uso: "informante",
      obrigatorio_para_diagnostico: false,
      fonte: "sugestao_clinica_padrao",
    },
  ],
  prevalencia: {
    populacao_geral:
      "Aproximadamente 5% das criancas e 2,5% dos adultos.",
    proporcao_sexo:
      "Mais frequente no sexo masculino que no feminino na populacao geral, com razao de aproximadamente 2:1 em criancas e 1,6:1 em adultos. Mulheres tendem a apresentar mais predominantemente sintomas de desatencao.",
    variacoes_culturais:
      "Diferencas de prevalencia entre culturas parecem atribuiveis a variacoes nas praticas diagnosticas e metodologicas mais do que a diferencas clinicas reais. Os mesmos sintomas basicos sao encontrados em diferentes culturas.",
    notas: null,
    metadados: {
      completo: true,
      lacunas: [],
      notas_agente: null,
      fonte_passada_1: true,
    },
  },
  curso_desenvolvimento: {
    idade_inicio_tipica:
      "Sintomas manifestam-se antes dos 12 anos; muitos pais relatam excesso de atividade motora desde os primeiros anos de vida, mas o quadro e dificil de distinguir de variacoes normais antes dos 4 anos. Identificacao mais frequente nos primeiros anos do ensino fundamental.",
    trajetoria:
      "Relativamente estavel ate a adolescencia, embora alguns individuos apresentem curso pior, com aparecimento de comportamentos antissociais. Na maioria, sintomas motores de hiperatividade tornam-se menos obvios na adolescencia e idade adulta, mas dificuldades de inquietao, desatencao, planejamento e impulsividade persistem.",
    prognostico:
      "Persistencia na vida adulta esta associada a piores desfechos ocupacionais, academicos e interpessoais. Risco aumentado para transtorno por uso de substancias, transtorno da conduta, transtorno da personalidade antissocial e suicidio.",
    metadados: {
      completo: true,
      lacunas: [],
      notas_agente: null,
      fonte_passada_1: true,
    },
  },
  template_prontuario: {
    cabecalho:
      "## Avaliacao do Transtorno de Deficit de Atencao/Hiperatividade — {nome_paciente}",
    rodape_metodologico:
      "Avaliacao fundamentada em entrevista clinica estruturada conforme criterios DSM-5/DSM-5-TR (314.01 / F90.2), com aplicacao complementar de escalas de auto-relato e/ou informante quando disponiveis.",
  },
  metadados_globais: {
    fonte_capitulo_md: "01_transtornos_neurodesenvolvimento.md",
    fonte_inventario_md: "output/inventario/01_inventario.md",
    data_extracao: "2026-05-21",
    modelo_agente: "claude-opus-4-7",
    lacunas_globais: [],
    inconsistencias_detectadas: [],
    notas_agente_globais: null,
    revisao_humana_necessaria: false,
  },
};
