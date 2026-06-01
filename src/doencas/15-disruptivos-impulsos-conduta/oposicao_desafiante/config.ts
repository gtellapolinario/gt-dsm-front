import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "oposicao_desafiante",
  "nome": "Transtorno de Oposição Desafiante",
  "sigla": "TOD",
  "route": "/capitulo-15/oposicao_desafiante",
  "capitulo": "15",
  "capituloNome": "Transtornos Disruptivos, do Controle de Impulsos e da Conduta",
  "estrutura": "polythetic_monocluster",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "ordinal_simples",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#EAB308",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": true,
  "temImpactoFuncional": true,
  "temComorbidades": true,
  "temEspecificadores": false,
  "cid10": "F91.3",
  "cid11": "6C90",
  "dsm5": "313.81"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
