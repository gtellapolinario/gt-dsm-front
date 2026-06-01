import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "transtorno_deficit_atencao_hiperatividade",
  "nome": "Transtorno de Déficit de Atenção/Hiperatividade",
  "sigla": "TDAH",
  "route": "/capitulo-01/transtorno_deficit_atencao_hiperatividade",
  "capitulo": "01",
  "capituloNome": "Transtornos do Neurodesenvolvimento",
  "estrutura": "polythetic_clusters_simetricos",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "ordinal_simples",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#3B82F6",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": true,
  "temImpactoFuncional": true,
  "temComorbidades": true,
  "temEspecificadores": true,
  "cid10": "F90.2",
  "cid11": "6A05",
  "dsm5": "314.01"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
