import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "tp_obsessivo_compulsivo",
  "nome": "Transtorno da Personalidade Obsessivo-Compulsiva",
  "sigla": "TPOC",
  "route": "/capitulo-18/tp_obsessivo_compulsivo",
  "capitulo": "18",
  "capituloNome": "Transtornos da Personalidade",
  "estrutura": "polythetic_monocluster",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "ordinal_simples",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#8B5CF6",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": true,
  "temImpactoFuncional": true,
  "temComorbidades": true,
  "temEspecificadores": false,
  "cid10": "F60.5",
  "cid11": "6D10",
  "dsm5": "301.4"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
