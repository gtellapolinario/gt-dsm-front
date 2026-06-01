import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "transtorno_disruptivo_desregulacao_humor",
  "nome": "Transtorno Disruptivo da Desregulação do Humor",
  "sigla": "TDDH",
  "route": "/capitulo-04/transtorno_disruptivo_desregulacao_humor",
  "capitulo": "04",
  "capituloNome": "Transtornos Depressivos",
  "estrutura": "polythetic_monocluster",
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
  "temEspecificadores": false,
  "cid10": "F34.8",
  "cid11": "6A83",
  "dsm5": "296.99"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
