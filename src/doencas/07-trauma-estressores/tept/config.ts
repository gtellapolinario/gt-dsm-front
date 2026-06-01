import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "tept",
  "nome": "Transtorno de Estresse Pós-Traumático",
  "sigla": "TEPT",
  "route": "/capitulo-07/tept",
  "capitulo": "07",
  "capituloNome": "Transtornos Relacionados a Trauma e a Estressores",
  "estrutura": "polythetic_clusters_simetricos",
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
  "cid10": "F43.10",
  "cid11": "6B40",
  "dsm5": "309.81"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
