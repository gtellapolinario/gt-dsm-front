import type { ComponentType } from "react";
import type { ClinicalDisorder } from "./_shared/schema";

export interface GeneratedDisorderModule {
  default: ComponentType;
  data?: ClinicalDisorder;
  meta?: {
    id: string;
    nome?: string;
    sigla?: string | null;
    capituloId?: string | null;
  };
}

export type GeneratedDisorderMetadata = (typeof generatedDisorderMetadata)[number];

export const generatedDisorderImports = {
  agorafobia: () => import("./agorafobia"),
  anorexia_nervosa: () => import("./anorexia_nervosa"),
  bulimia_nervosa: () => import("./bulimia_nervosa"),
  conduta: () => import("./conduta"),
  deficiencia_intelectual: () => import("./deficiencia_intelectual"),
  delirium: () => import("./delirium"),
  esquizofrenia: () => import("./esquizofrenia"),
  explosivo_intermittente: () => import("./explosivo_intermittente"),
  fobia_especifica: () => import("./fobia_especifica"),
  mutismo_seletivo: () => import("./mutismo_seletivo"),
  oposicao_desafiante: () => import("./oposicao_desafiante"),
  tept: () => import("./tept"),
  tnc_alzheimer: () => import("./tnc_alzheimer"),
  tnc_leve: () => import("./tnc_leve"),
  tnc_maior: () => import("./tnc_maior"),
  tnc_vascular: () => import("./tnc_vascular"),
  tp_antissocial: () => import("./tp_antissocial"),
  tp_borderline: () => import("./tp_borderline"),
  tp_dependente: () => import("./tp_dependente"),
  tp_esquizoide: () => import("./tp_esquizoide"),
  tp_esquizotipico: () => import("./tp_esquizotipico"),
  tp_evitativo: () => import("./tp_evitativo"),
  tp_histrionico: () => import("./tp_histrionico"),
  tp_narcisista: () => import("./tp_narcisista"),
  tp_obsessivo_compulsivo: () => import("./tp_obsessivo_compulsivo"),
  tp_paranoide: () => import("./tp_paranoide"),
  transtorno_acumulacao: () => import("./transtorno_acumulacao"),
  transtorno_alimentar_restritivo_evitativo: () => import("./transtorno_alimentar_restritivo_evitativo"),
  transtorno_ansiedade_doenca: () => import("./transtorno_ansiedade_doenca"),
  transtorno_ansiedade_generalizada: () => import("./transtorno_ansiedade_generalizada"),
  transtorno_ansiedade_separacao: () => import("./transtorno_ansiedade_separacao"),
  transtorno_ansiedade_social: () => import("./transtorno_ansiedade_social"),
  transtorno_bipolar_tipo_1: () => import("./transtorno_bipolar_tipo_1"),
  transtorno_bipolar_tipo_2: () => import("./transtorno_bipolar_tipo_2"),
  transtorno_compulsao_alimentar: () => import("./transtorno_compulsao_alimentar"),
  transtorno_conversao: () => import("./transtorno_conversao"),
  transtorno_deficit_atencao_hiperatividade: () => import("./transtorno_deficit_atencao_hiperatividade"),
  transtorno_delirante: () => import("./transtorno_delirante"),
  transtorno_depressivo_maior: () => import("./transtorno_depressivo_maior"),
  transtorno_depressivo_persistente: () => import("./transtorno_depressivo_persistente"),
  transtorno_dismorfico_corporal: () => import("./transtorno_dismorfico_corporal"),
  transtorno_disruptivo_desregulacao_humor: () => import("./transtorno_disruptivo_desregulacao_humor"),
  transtorno_do_espectro_autista: () => import("./transtorno_do_espectro_autista"),
  transtorno_escoriacao: () => import("./transtorno_escoriacao"),
  transtorno_especifico_aprendizagem: () => import("./transtorno_especifico_aprendizagem"),
  transtorno_esquizoafetivo: () => import("./transtorno_esquizoafetivo"),
  transtorno_esquizofreniforme: () => import("./transtorno_esquizofreniforme"),
  transtorno_insonia: () => import("./transtorno_insonia"),
  transtorno_linguagem: () => import("./transtorno_linguagem"),
  transtorno_obsessivo_compulsivo: () => import("./transtorno_obsessivo_compulsivo"),
  transtorno_panico: () => import("./transtorno_panico"),
  transtorno_por_uso_de_alcool: () => import("./transtorno_por_uso_de_alcool"),
  transtorno_por_uso_de_estimulantes: () => import("./transtorno_por_uso_de_estimulantes"),
  transtorno_por_uso_de_opioides: () => import("./transtorno_por_uso_de_opioides"),
  transtorno_por_uso_de_tabaco: () => import("./transtorno_por_uso_de_tabaco"),
  transtorno_psicotico_breve: () => import("./transtorno_psicotico_breve"),
  transtornos_adaptacao: () => import("./transtornos_adaptacao"),
  tricotilomania: () => import("./tricotilomania"),
} as const satisfies Record<string, () => Promise<GeneratedDisorderModule>>;

export const generatedDisorderMetadata = [
  {
    "id": "agorafobia",
    "nome": "Agorafobia",
    "capitulo_id": "05",
    "route_path": "/app/assess/agorafobia"
  },
  {
    "id": "anorexia_nervosa",
    "nome": "Anorexia Nervosa",
    "capitulo_id": "10",
    "route_path": "/app/assess/anorexia_nervosa"
  },
  {
    "id": "bulimia_nervosa",
    "nome": "Bulimia Nervosa",
    "capitulo_id": "10",
    "route_path": "/app/assess/bulimia_nervosa"
  },
  {
    "id": "conduta",
    "nome": "Transtorno da Conduta",
    "capitulo_id": "15",
    "route_path": "/app/assess/conduta"
  },
  {
    "id": "deficiencia_intelectual",
    "nome": "Transtorno do Desenvolvimento Intelectual (Deficiência Intelectual)",
    "capitulo_id": "01",
    "route_path": "/app/assess/deficiencia_intelectual"
  },
  {
    "id": "delirium",
    "nome": "Delirium",
    "capitulo_id": "17",
    "route_path": "/app/assess/delirium"
  },
  {
    "id": "esquizofrenia",
    "nome": "Esquizofrenia",
    "capitulo_id": "02",
    "route_path": "/app/assess/esquizofrenia"
  },
  {
    "id": "explosivo_intermittente",
    "nome": "Transtorno Explosivo Intermitente",
    "capitulo_id": "15",
    "route_path": "/app/assess/explosivo_intermittente"
  },
  {
    "id": "fobia_especifica",
    "nome": "Fobia Específica",
    "capitulo_id": "05",
    "route_path": "/app/assess/fobia_especifica"
  },
  {
    "id": "mutismo_seletivo",
    "nome": "Mutismo Seletivo",
    "capitulo_id": "05",
    "route_path": "/app/assess/mutismo_seletivo"
  },
  {
    "id": "oposicao_desafiante",
    "nome": "Transtorno de Oposição Desafiante",
    "capitulo_id": "15",
    "route_path": "/app/assess/oposicao_desafiante"
  },
  {
    "id": "tept",
    "nome": "Transtorno de Estresse Pós-Traumático",
    "capitulo_id": "07",
    "route_path": "/app/assess/tept"
  },
  {
    "id": "tnc_alzheimer",
    "nome": "Transtorno Neurocognitivo Maior ou Leve Devido à Doença de Alzheimer",
    "capitulo_id": "17",
    "route_path": "/app/assess/tnc_alzheimer"
  },
  {
    "id": "tnc_leve",
    "nome": "Transtorno Neurocognitivo Leve",
    "capitulo_id": "17",
    "route_path": "/app/assess/tnc_leve"
  },
  {
    "id": "tnc_maior",
    "nome": "Transtorno Neurocognitivo Maior",
    "capitulo_id": "17",
    "route_path": "/app/assess/tnc_maior"
  },
  {
    "id": "tnc_vascular",
    "nome": "Transtorno Neurocognitivo Vascular Maior ou Leve",
    "capitulo_id": "17",
    "route_path": "/app/assess/tnc_vascular"
  },
  {
    "id": "tp_antissocial",
    "nome": "Transtorno da Personalidade Antissocial",
    "capitulo_id": "18",
    "route_path": "/app/assess/tp_antissocial"
  },
  {
    "id": "tp_borderline",
    "nome": "Transtorno da Personalidade Borderline",
    "capitulo_id": "18",
    "route_path": "/app/assess/tp_borderline"
  },
  {
    "id": "tp_dependente",
    "nome": "Transtorno da Personalidade Dependente",
    "capitulo_id": "18",
    "route_path": "/app/assess/tp_dependente"
  },
  {
    "id": "tp_esquizoide",
    "nome": "Transtorno da Personalidade Esquizoide",
    "capitulo_id": "18",
    "route_path": "/app/assess/tp_esquizoide"
  },
  {
    "id": "tp_esquizotipico",
    "nome": "Transtorno da Personalidade Esquizotípica",
    "capitulo_id": "18",
    "route_path": "/app/assess/tp_esquizotipico"
  },
  {
    "id": "tp_evitativo",
    "nome": "Transtorno da Personalidade Evitativa",
    "capitulo_id": "18",
    "route_path": "/app/assess/tp_evitativo"
  },
  {
    "id": "tp_histrionico",
    "nome": "Transtorno da Personalidade Histriônica",
    "capitulo_id": "18",
    "route_path": "/app/assess/tp_histrionico"
  },
  {
    "id": "tp_narcisista",
    "nome": "Transtorno da Personalidade Narcisista",
    "capitulo_id": "18",
    "route_path": "/app/assess/tp_narcisista"
  },
  {
    "id": "tp_obsessivo_compulsivo",
    "nome": "Transtorno da Personalidade Obsessivo-Compulsiva",
    "capitulo_id": "18",
    "route_path": "/app/assess/tp_obsessivo_compulsivo"
  },
  {
    "id": "tp_paranoide",
    "nome": "Transtorno da Personalidade Paranóide",
    "capitulo_id": "18",
    "route_path": "/app/assess/tp_paranoide"
  },
  {
    "id": "transtorno_acumulacao",
    "nome": "Transtorno de Acumulação",
    "capitulo_id": "06",
    "route_path": "/app/assess/transtorno_acumulacao"
  },
  {
    "id": "transtorno_alimentar_restritivo_evitativo",
    "nome": "Transtorno Alimentar Restritivo/Evitativo",
    "capitulo_id": "10",
    "route_path": "/app/assess/transtorno_alimentar_restritivo_evitativo"
  },
  {
    "id": "transtorno_ansiedade_doenca",
    "nome": "Transtorno de Ansiedade de Doença",
    "capitulo_id": "09",
    "route_path": "/app/assess/transtorno_ansiedade_doenca"
  },
  {
    "id": "transtorno_ansiedade_generalizada",
    "nome": "Transtorno de Ansiedade Generalizada",
    "capitulo_id": "05",
    "route_path": "/app/assess/transtorno_ansiedade_generalizada"
  },
  {
    "id": "transtorno_ansiedade_separacao",
    "nome": "Transtorno de Ansiedade de Separação",
    "capitulo_id": "05",
    "route_path": "/app/assess/transtorno_ansiedade_separacao"
  },
  {
    "id": "transtorno_ansiedade_social",
    "nome": "Transtorno de Ansiedade Social (Fobia Social)",
    "capitulo_id": "05",
    "route_path": "/app/assess/transtorno_ansiedade_social"
  },
  {
    "id": "transtorno_bipolar_tipo_1",
    "nome": "Transtorno Bipolar Tipo I",
    "capitulo_id": "03",
    "route_path": "/app/assess/transtorno_bipolar_tipo_1"
  },
  {
    "id": "transtorno_bipolar_tipo_2",
    "nome": "Transtorno Bipolar Tipo II",
    "capitulo_id": "03",
    "route_path": "/app/assess/transtorno_bipolar_tipo_2"
  },
  {
    "id": "transtorno_compulsao_alimentar",
    "nome": "Transtorno de Compulsão Alimentar",
    "capitulo_id": "10",
    "route_path": "/app/assess/transtorno_compulsao_alimentar"
  },
  {
    "id": "transtorno_conversao",
    "nome": "Transtorno de Conversão (Transtorno de Sintomas Neurológicos Funcionais)",
    "capitulo_id": "09",
    "route_path": "/app/assess/transtorno_conversao"
  },
  {
    "id": "transtorno_deficit_atencao_hiperatividade",
    "nome": "Transtorno de Déficit de Atenção/Hiperatividade",
    "capitulo_id": "01",
    "route_path": "/app/assess/transtorno_deficit_atencao_hiperatividade"
  },
  {
    "id": "transtorno_delirante",
    "nome": "Transtorno Delirante",
    "capitulo_id": "02",
    "route_path": "/app/assess/transtorno_delirante"
  },
  {
    "id": "transtorno_depressivo_maior",
    "nome": "Transtorno Depressivo Maior",
    "capitulo_id": "04",
    "route_path": "/app/assess/transtorno_depressivo_maior"
  },
  {
    "id": "transtorno_depressivo_persistente",
    "nome": "Transtorno Depressivo Persistente (Distimia)",
    "capitulo_id": "04",
    "route_path": "/app/assess/transtorno_depressivo_persistente"
  },
  {
    "id": "transtorno_dismorfico_corporal",
    "nome": "Transtorno Dismórfico Corporal",
    "capitulo_id": "06",
    "route_path": "/app/assess/transtorno_dismorfico_corporal"
  },
  {
    "id": "transtorno_disruptivo_desregulacao_humor",
    "nome": "Transtorno Disruptivo da Desregulação do Humor",
    "capitulo_id": "04",
    "route_path": "/app/assess/transtorno_disruptivo_desregulacao_humor"
  },
  {
    "id": "transtorno_do_espectro_autista",
    "nome": "Transtorno do Espectro Autista",
    "capitulo_id": "01",
    "route_path": "/app/assess/transtorno_do_espectro_autista"
  },
  {
    "id": "transtorno_escoriacao",
    "nome": "Transtorno de Escoriação (Skin-Picking)",
    "capitulo_id": "06",
    "route_path": "/app/assess/transtorno_escoriacao"
  },
  {
    "id": "transtorno_especifico_aprendizagem",
    "nome": "Transtorno Específico da Aprendizagem",
    "capitulo_id": "01",
    "route_path": "/app/assess/transtorno_especifico_aprendizagem"
  },
  {
    "id": "transtorno_esquizoafetivo",
    "nome": "Transtorno Esquizoafetivo",
    "capitulo_id": "02",
    "route_path": "/app/assess/transtorno_esquizoafetivo"
  },
  {
    "id": "transtorno_esquizofreniforme",
    "nome": "Transtorno Esquizofreniforme",
    "capitulo_id": "02",
    "route_path": "/app/assess/transtorno_esquizofreniforme"
  },
  {
    "id": "transtorno_insonia",
    "nome": "Transtorno de Insônia",
    "capitulo_id": "12",
    "route_path": "/app/assess/transtorno_insonia"
  },
  {
    "id": "transtorno_linguagem",
    "nome": "Transtorno da Linguagem",
    "capitulo_id": "01",
    "route_path": "/app/assess/transtorno_linguagem"
  },
  {
    "id": "transtorno_obsessivo_compulsivo",
    "nome": "Transtorno Obsessivo-Compulsivo",
    "capitulo_id": "06",
    "route_path": "/app/assess/transtorno_obsessivo_compulsivo"
  },
  {
    "id": "transtorno_panico",
    "nome": "Transtorno de Pânico",
    "capitulo_id": "05",
    "route_path": "/app/assess/transtorno_panico"
  },
  {
    "id": "transtorno_por_uso_de_alcool",
    "nome": "Transtorno por Uso de Álcool",
    "capitulo_id": "16",
    "route_path": "/app/assess/transtorno_por_uso_de_alcool"
  },
  {
    "id": "transtorno_por_uso_de_estimulantes",
    "nome": "Transtorno por Uso de Estimulantes",
    "capitulo_id": "16",
    "route_path": "/app/assess/transtorno_por_uso_de_estimulantes"
  },
  {
    "id": "transtorno_por_uso_de_opioides",
    "nome": "Transtorno por Uso de Opioides",
    "capitulo_id": "16",
    "route_path": "/app/assess/transtorno_por_uso_de_opioides"
  },
  {
    "id": "transtorno_por_uso_de_tabaco",
    "nome": "Transtorno por Uso de Tabaco",
    "capitulo_id": "16",
    "route_path": "/app/assess/transtorno_por_uso_de_tabaco"
  },
  {
    "id": "transtorno_psicotico_breve",
    "nome": "Transtorno Psicótico Breve",
    "capitulo_id": "02",
    "route_path": "/app/assess/transtorno_psicotico_breve"
  },
  {
    "id": "transtornos_adaptacao",
    "nome": "Transtornos de Adaptação",
    "capitulo_id": "07",
    "route_path": "/app/assess/transtornos_adaptacao"
  },
  {
    "id": "tricotilomania",
    "nome": "Tricotilomania (Transtorno de Arrancar o Cabelo)",
    "capitulo_id": "06",
    "route_path": "/app/assess/tricotilomania"
  }
] as const;
export type GeneratedDisorderId = keyof typeof generatedDisorderImports;
