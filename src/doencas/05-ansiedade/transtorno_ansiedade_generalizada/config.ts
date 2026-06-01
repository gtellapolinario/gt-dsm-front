import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "transtorno_ansiedade_generalizada",
  "nome": "Transtorno de Ansiedade Generalizada",
  "sigla": "TAG",
  "route": "/capitulo-05/transtorno_ansiedade_generalizada",
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
  "cid10": "F41.1",
  "cid11": "6B00",
  "dsm5": "300.02"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
