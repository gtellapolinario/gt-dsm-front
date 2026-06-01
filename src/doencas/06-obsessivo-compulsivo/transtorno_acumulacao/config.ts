import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "transtorno_acumulacao",
  "nome": "Transtorno de Acumulação",
  "sigla": "",
  "route": "/capitulo-06/transtorno_acumulacao",
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
  "cid10": "F42",
  "cid11": "6B23",
  "dsm5": "300.3"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
