import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "delirium",
  "nome": "Delirium",
  "sigla": "",
  "route": "/capitulo-17/delirium",
  "capitulo": "17",
  "capituloNome": "Transtornos Neurocognitivos",
  "estrutura": "monothetic_puro",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "nao_aplica",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#F43F5E",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": false,
  "temImpactoFuncional": true,
  "temComorbidades": true,
  "temEspecificadores": true,
  "cid10": "F05",
  "cid11": "6D70",
  "dsm5": "293.0"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
