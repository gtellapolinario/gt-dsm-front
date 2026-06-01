import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "transtornos_adaptacao",
  "nome": "Transtornos de Adaptação",
  "sigla": "",
  "route": "/capitulo-07/transtornos_adaptacao",
  "capitulo": "07",
  "capituloNome": "Transtornos Relacionados a Trauma e a Estressores",
  "estrutura": "etiologico_externo",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "ordinal_simples",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#EF4444",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": true,
  "temImpactoFuncional": true,
  "temComorbidades": true,
  "temEspecificadores": true,
  "cid10": "F43.20",
  "cid11": "6B43",
  "dsm5": "309.0"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
