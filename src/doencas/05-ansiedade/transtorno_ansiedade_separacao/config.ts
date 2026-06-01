import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "transtorno_ansiedade_separacao",
  "nome": "Transtorno de Ansiedade de Separação",
  "sigla": "TAS",
  "route": "/capitulo-05/transtorno_ansiedade_separacao",
  "capitulo": "05",
  "capituloNome": "Transtornos de Ansiedade",
  "estrutura": "polythetic_monocluster",
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
  "cid10": "F93.0",
  "cid11": "6B05",
  "dsm5": "309.21"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
