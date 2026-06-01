import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "transtorno_esquizoafetivo",
  "nome": "Transtorno Esquizoafetivo",
  "sigla": "",
  "route": "/capitulo-02/transtorno_esquizoafetivo",
  "capitulo": "02",
  "capituloNome": "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
  "estrutura": "conjuncao_temporal_complexa",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "dimensional_psicose",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#8B5CF6",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": true,
  "temImpactoFuncional": true,
  "temComorbidades": false,
  "temEspecificadores": true,
  "cid10": "F25.9",
  "cid11": "6A21",
  "dsm5": "295.70"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
