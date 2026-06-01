import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "transtorno_alimentar_restritivo_evitativo",
  "nome": "Transtorno Alimentar Restritivo/Evitativo",
  "sigla": "TARE",
  "route": "/capitulo-10/transtorno_alimentar_restritivo_evitativo",
  "capitulo": "10",
  "capituloNome": "Transtornos Alimentares",
  "estrutura": "polythetic_com_ancora",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "nao_aplica",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#D946EF",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": false,
  "temImpactoFuncional": true,
  "temComorbidades": true,
  "temEspecificadores": true,
  "cid10": "F50.8",
  "cid11": "6B83",
  "dsm5": "307.59"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
