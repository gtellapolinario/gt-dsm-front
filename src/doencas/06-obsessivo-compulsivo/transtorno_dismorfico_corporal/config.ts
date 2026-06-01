import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "transtorno_dismorfico_corporal",
  "nome": "Transtorno Dismórfico Corporal",
  "sigla": "TDC",
  "route": "/capitulo-06/transtorno_dismorfico_corporal",
  "capitulo": "06",
  "capituloNome": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
  "estrutura": "monothetic_puro",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "ordinal_simples",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#06B6D4",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": true,
  "temImpactoFuncional": true,
  "temComorbidades": true,
  "temEspecificadores": true,
  "cid10": "F45.22",
  "cid11": "6B21",
  "dsm5": "300.7"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
