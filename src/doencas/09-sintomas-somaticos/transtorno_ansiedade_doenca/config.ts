import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "transtorno_ansiedade_doenca",
  "nome": "Transtorno de Ansiedade de Doença",
  "sigla": "TAD",
  "route": "/capitulo-09/transtorno_ansiedade_doenca",
  "capitulo": "09",
  "capituloNome": "Transtorno de Sintomas Somáticos e Transtornos Relacionados",
  "estrutura": "monothetic_puro",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "ordinal_simples",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#84CC16",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": true,
  "temImpactoFuncional": true,
  "temComorbidades": true,
  "temEspecificadores": true,
  "cid10": "F45.21",
  "cid11": "6B24",
  "dsm5": "300.7"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
