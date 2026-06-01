import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "transtorno_psicotico_breve",
  "nome": "Transtorno Psicótico Breve",
  "sigla": "TPB",
  "route": "/capitulo-02/transtorno_psicotico_breve",
  "capitulo": "02",
  "capituloNome": "Espectro da Esquizofrenia e Outros Transtornos Psicóticos",
  "estrutura": "polythetic_com_ancora",
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
  "cid10": "F23",
  "cid11": "6A23.0",
  "dsm5": "298.8"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
