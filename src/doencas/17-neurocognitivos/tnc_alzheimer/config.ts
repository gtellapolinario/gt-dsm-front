import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "tnc_alzheimer",
  "nome": "Transtorno Neurocognitivo Maior ou Leve Devido à Doença de Alzheimer",
  "sigla": "",
  "route": "/capitulo-17/tnc_alzheimer",
  "capitulo": "17",
  "capituloNome": "Transtornos Neurocognitivos",
  "estrutura": "monothetic_puro",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "ordinal_simples",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#F43F5E",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": true,
  "temImpactoFuncional": true,
  "temComorbidades": true,
  "temEspecificadores": false,
  "cid10": "F02.8x",
  "cid11": "6D80.0",
  "dsm5": "294.1x"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
