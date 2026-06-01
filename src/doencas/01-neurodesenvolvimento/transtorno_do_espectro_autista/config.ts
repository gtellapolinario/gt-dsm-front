import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "transtorno_do_espectro_autista",
  "nome": "Transtorno do Espectro Autista",
  "sigla": "TEA",
  "route": "/capitulo-01/transtorno_do_espectro_autista",
  "capitulo": "01",
  "capituloNome": "Transtornos do Neurodesenvolvimento",
  "estrutura": "polythetic_clusters_assimetricos",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "ordinal_simples",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#3B82F6",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": true,
  "temImpactoFuncional": true,
  "temComorbidades": true,
  "temEspecificadores": true,
  "cid10": "F84.0",
  "cid11": "6A02",
  "dsm5": "299.00"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
