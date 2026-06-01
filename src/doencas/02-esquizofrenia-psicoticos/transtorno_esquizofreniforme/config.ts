import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "transtorno_esquizofreniforme",
  "nome": "Transtorno Esquizofreniforme",
  "sigla": "",
  "route": "/capitulo-02/transtorno_esquizofreniforme",
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
  "cid10": "F20.81",
  "cid11": "6A23",
  "dsm5": "295.40"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
