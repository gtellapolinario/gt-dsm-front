import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "transtorno_depressivo_persistente",
  "nome": "Transtorno Depressivo Persistente (Distimia)",
  "sigla": "TDP",
  "route": "/capitulo-04/transtorno_depressivo_persistente",
  "capitulo": "04",
  "capituloNome": "Transtornos Depressivos",
  "estrutura": "polythetic_com_ancora",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "ordinal_simples",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#F59E0B",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": true,
  "temImpactoFuncional": true,
  "temComorbidades": true,
  "temEspecificadores": true,
  "cid10": "F34.1",
  "cid11": "6A71",
  "dsm5": "300.4"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
