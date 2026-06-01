import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "transtorno_linguagem",
  "nome": "Transtorno da Linguagem",
  "sigla": "",
  "route": "/capitulo-01/transtorno_linguagem",
  "capitulo": "01",
  "capituloNome": "Transtornos do Neurodesenvolvimento",
  "estrutura": "polythetic_monocluster",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "nao_aplica",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#3B82F6",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": false,
  "temImpactoFuncional": true,
  "temComorbidades": true,
  "temEspecificadores": false,
  "cid10": "F80.2",
  "cid11": "6A01",
  "dsm5": "315.32"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
