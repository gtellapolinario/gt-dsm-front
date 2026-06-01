import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "transtorno_por_uso_de_opioides",
  "nome": "Transtorno por Uso de Opioides",
  "sigla": "",
  "route": "/capitulo-16/transtorno_por_uso_de_opioides",
  "capitulo": "16",
  "capituloNome": "Transtornos Relacionados a Substâncias e Transtornos Aditivos",
  "estrutura": "polythetic_monocluster",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "ordinal_simples",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#22C55E",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": true,
  "temImpactoFuncional": true,
  "temComorbidades": true,
  "temEspecificadores": true,
  "cid10": "F11.20",
  "cid11": "6C41",
  "dsm5": "304.00"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
