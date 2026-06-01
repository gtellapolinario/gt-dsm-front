import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "tnc_leve",
  "nome": "Transtorno Neurocognitivo Leve",
  "sigla": "TNC Leve",
  "route": "/capitulo-17/tnc_leve",
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
  "cid10": "G31.84",
  "cid11": "6D81",
  "dsm5": "331.83"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
