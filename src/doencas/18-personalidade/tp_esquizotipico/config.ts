import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "tp_esquizotipico",
  "nome": "Transtorno da Personalidade Esquizotípica",
  "sigla": "TPET",
  "route": "/capitulo-18/tp_esquizotipico",
  "capitulo": "18",
  "capituloNome": "Transtornos da Personalidade",
  "estrutura": "polythetic_monocluster",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "ordinal_simples",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#8B5CF6",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": true,
  "temImpactoFuncional": true,
  "temComorbidades": true,
  "temEspecificadores": false,
  "cid10": "F21",
  "cid11": "6A22",
  "dsm5": "301.22"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
