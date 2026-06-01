import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "transtorno_panico",
  "nome": "Transtorno de Pânico",
  "sigla": "TP",
  "route": "/capitulo-05/transtorno_panico",
  "capitulo": "05",
  "capituloNome": "Transtornos de Ansiedade",
  "estrutura": "polythetic_com_ancora",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "ordinal_simples",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#10B981",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": true,
  "temImpactoFuncional": true,
  "temComorbidades": true,
  "temEspecificadores": false,
  "cid10": "F41.0",
  "cid11": "6B01",
  "dsm5": "300.01"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
