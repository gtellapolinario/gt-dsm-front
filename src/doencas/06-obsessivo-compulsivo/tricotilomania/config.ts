import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "tricotilomania",
  "nome": "Tricotilomania (Transtorno de Arrancar o Cabelo)",
  "sigla": "",
  "route": "/capitulo-06/tricotilomania",
  "capitulo": "06",
  "capituloNome": "Transtorno Obsessivo-Compulsivo e Transtornos Relacionados",
  "estrutura": "monothetic_puro",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "ordinal_simples",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#06B6D4",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": true,
  "temImpactoFuncional": true,
  "temComorbidades": true,
  "temEspecificadores": false,
  "cid10": "F63.3",
  "cid11": "6B25",
  "dsm5": "312.39"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
