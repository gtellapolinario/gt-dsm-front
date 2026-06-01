import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "tp_antissocial",
  "nome": "Transtorno da Personalidade Antissocial",
  "sigla": "TPA",
  "route": "/capitulo-18/tp_antissocial",
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
  "cid10": "F60.2",
  "cid11": "6D11",
  "dsm5": "301.7"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
