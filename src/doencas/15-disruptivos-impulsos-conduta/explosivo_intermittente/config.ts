import { DiseaseConfigSchema, type DiseaseConfig } from "@/infra/schemas/dsm-schemas";

const rawConfig = {
  "id": "explosivo_intermittente",
  "nome": "Transtorno Explosivo Intermitente",
  "sigla": "TEI",
  "route": "/capitulo-15/explosivo_intermittente",
  "capitulo": "15",
  "capituloNome": "Transtornos Disruptivos, do Controle de Impulsos e da Conduta",
  "estrutura": "polythetic_monocluster",
  "uiMode": "structured_full",
  "category": "FULL",
  "severityType": "nao_aplica",
  "renderStructuredInterview": true,
  "icon": "fa-circle-question",
  "corPrimaria": "#EAB308",
  "corSecundaria": "#93C5FD",
  "faixaEtaria": "ambos",
  "temSubtipos": true,
  "temGravidade": false,
  "temImpactoFuncional": true,
  "temComorbidades": true,
  "temEspecificadores": false,
  "cid10": "F63.81",
  "cid11": "6C91",
  "dsm5": "312.34"
} as const;

// Validação na borda — garante consistência com o catálogo e componentes
export const config: DiseaseConfig = DiseaseConfigSchema.parse(rawConfig);
