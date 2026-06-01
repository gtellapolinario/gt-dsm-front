// ═══════════════════════════════════════════════════════════════════════════
// Configuração do Módulo — TDAH
// ═══════════════════════════════════════════════════════════════════════════

import type { EstruturaGeral } from "@/infra/types";

export const config = {
  // Identificação
  id: "transtorno_deficit_atencao_hiperatividade" as const,
  nome: "Transtorno de Déficit de Atenção/Hiperatividade",
  sigla: "TDAH",

  // Roteamento
  route: "/capitulo-01/transtorno-deficit-atencao-hiperatividade",
  capitulo: "01",
  capituloNome: "Transtornos do Neurodesenvolvimento",

  // Estrutura diagnóstica (determina qual hook usar)
  estrutura: "polythetic_clusters_simetricos" as EstruturaGeral,

  // UI
  icon: "fa-brain",
  corPrimaria: "#2563eb", // blue-600
  corSecundaria: "#f59e0b", // amber-500

  // Metadados clínicos
  faixaEtaria: "ambos" as const,
  limiarAdulto: 5,
  limiarPediatria: 6,
  minClustersAtingidos: 1, // pelo menos 1 dos 2 clusters precisa atingir limiar

  // Flags de funcionalidade
  temSubtipos: true,
  temGravidade: true,
  temImpactoFuncional: true,
  temComorbidades: true,
  temEspecificadores: true,

  // Templates de relatório
  templateCabecalho: "### Avaliação Neuropsicológica e Comportamental - TDAH",
  templateRodape:
    "Diagnóstico estabelecido com base em escala SNAP-IV/ASRS, histórico escolar, avaliação do desenvolvimento e múltiplos relatos (pais, professores).",

  // Referências
  cid10: "F90.2",
  cid11: null,
  dsm5: "314.01",
} as const;

export type TDAHConfig = typeof config;
