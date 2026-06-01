import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "transtorno_bipolar_tipo_2",
  "nome": "Transtorno Bipolar Tipo II",
  "sigla": "TB2",
  "route": "/capitulo-03/transtorno_bipolar_tipo_2",
  "capitulo": "03",
  "capituloNome": "Transtorno Bipolar e Transtornos Relacionados",
  "estrutura": "polythetic_clusters_simetricos",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "ordinal_simples",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#EC4899",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": true,
  "temImpactoFuncional": true,
  "temComorbidades": true,
  "temEspecificadores": true,
  "cid10": "F31.81",
  "cid11": "6A61",
  "dsm5": "296.89"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
