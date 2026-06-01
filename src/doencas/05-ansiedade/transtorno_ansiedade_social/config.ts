import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "transtorno_ansiedade_social",
  "nome": "Transtorno de Ansiedade Social (Fobia Social)",
  "sigla": "TAS",
  "route": "/capitulo-05/transtorno_ansiedade_social",
  "capitulo": "05",
  "capituloNome": "Transtornos de Ansiedade",
  "estrutura": "monothetic_puro",
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
  "temEspecificadores": true,
  "cid10": "F40.10",
  "cid11": "6B04",
  "dsm5": "300.23"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
