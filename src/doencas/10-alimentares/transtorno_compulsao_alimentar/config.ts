import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "transtorno_compulsao_alimentar",
  "nome": "Transtorno de Compulsão Alimentar",
  "sigla": "TCA",
  "route": "/capitulo-10/transtorno_compulsao_alimentar",
  "capitulo": "10",
  "capituloNome": "Transtornos Alimentares",
  "estrutura": "polythetic_clusters_assimetricos",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "ordinal_simples",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#D946EF",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": true,
  "temImpactoFuncional": true,
  "temComorbidades": true,
  "temEspecificadores": true,
  "cid10": "F50.8",
  "cid11": "6B82",
  "dsm5": "307.51"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
