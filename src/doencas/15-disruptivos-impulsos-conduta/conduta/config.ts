import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "conduta",
  "nome": "Transtorno da Conduta",
  "sigla": "",
  "route": "/capitulo-15/conduta",
  "capitulo": "15",
  "capituloNome": "Transtornos Disruptivos, do Controle de Impulsos e da Conduta",
  "estrutura": "polythetic_com_ancora",
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
  "temEspecificadores": true,
  "cid10": "F91.x",
  "cid11": "6C91",
  "dsm5": "312.8"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
