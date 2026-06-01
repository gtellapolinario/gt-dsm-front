import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "deficiencia_intelectual",
  "nome": "Transtorno do Desenvolvimento Intelectual (Deficiência Intelectual)",
  "sigla": "DI",
  "route": "/capitulo-01/deficiencia_intelectual",
  "capitulo": "01",
  "capituloNome": "Transtornos do Neurodesenvolvimento",
  "estrutura": "tripartite_funcional",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "ordinal_simples",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#3B82F6",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": true,
  "temImpactoFuncional": true,
  "temComorbidades": true,
  "temEspecificadores": false,
  "cid10": "F79",
  "cid11": "6A00",
  "dsm5": "319"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
