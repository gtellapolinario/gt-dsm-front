// src/routes/app.assess.$assessmentId.tsx
// Route page that loads the structured clinical evaluation form
// dynamically based on the disorder ID using the centralized disease registry.

import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { lazy, Suspense, useMemo } from "react";
import { diseaseImportMap as diseaseImports } from "@/infra/disease-registry";

const Params = z.object({ assessmentId: z.string() });

export const Route = createFileRoute("/app/assess/$assessmentId")({
  parseParams: (raw) => Params.parse(raw),
  component: AssessmentRoute,
});

function AssessmentRoute() {
  const { assessmentId } = Route.useParams();

  // Resolve the clinical evaluation component from the official registry
  // supporting compatibility aliases for legacy catalog and knowledge-graph IDs.
  const DiseaseComponent = useMemo(() => {
    // Dicionário de aliases de compatibilidade de IDs (Mapeia catálogo/gráfico -> físico)
    const idAliases: Record<string, string> = {
      // Capítulo 1
      "transtorno_da_linguagem": "transtorno_linguagem",
      "transtorno_da_fala": "transtorno_fala",
      "deficit_de_atencao_hiperatividade": "transtorno_deficit_atencao_hiperatividade",
      "espectro_autista": "transtorno_do_espectro_autista",
      "transtorno_especifico_da_aprendizagem": "transtorno_especifico_aprendizagem",
      "desenvolvimento_da_coordenacao": "transtorno_desenvolvimento_coordenacao",
      "transtorno_da_comunicacao_social": "transtorno_comunicacao_social",
      "tourette": "transtorno_tourette",
      "tique_transitorio": "transtorno_tique_transitorio",
      "tique_motor_ou_vocal_persistente": "transtorno_tique_persistente",
      "transtorno_da_fluencia_com_inicio_na_infancia": "transtorno_da_fluencia_com_inicio_na_infancia",

      // Capítulo 2
      "catatonia_transtorno_catatônico": "especificador_catatonia",
      "transtorno_psicótico_breve": "transtorno_psicotico_breve",
      "transtorno_psicótico_induzido_por_substância_medicamento": "psicotico_induzido_substancia",
      "transtorno_psicótico_devido_a_outra_condição_médica": "psicotico_devido_condicao_medica",
      "transtorno_esquizoafe_tivo": "transtorno_esquizoafetivo",

      // Capítulo 3
      "transtorno_bipolar_tipo_i": "transtorno_bipolar_tipo_1",
      "transtorno_bipolar_tipo_ii": "transtorno_bipolar_tipo_2",
      "transtorno_bipolar_e_relacionado_induzido_por_substancia_medicamento": "transtorno_bipolar_induzido_substancia_medicamento",
      "transtorno_bipolar_e_relacionado_devido_a_outra_condicao_medica": "transtorno_bipolar_devido_outra_condicao_medica",

      // Capítulo 4
      "transtorno_disruptivo_da_desregulação_do_humor_tddc": "transtorno_disruptivo_desregulacao_humor",
      "transtorno_depressivo_maior_tdm": "transtorno_depressivo_maior",
      "transtorno_depressivo_persistente_distimia": "transtorno_depressivo_persistente",
      "transtorno_disfórico_pré_menstrual_tdpm": "transtorno_disforico_pre_menstrual",
      "transtorno_depressivo_induzido_por_substância_medicamento": "transtorno_depressivo_induzido_substancia_medicamento",
      "transtorno_depressivo_devido_a_outra_condição_médica": "transtorno_depressivo_devido_outra_condicao_medica",

      // Capítulo 5
      "ansiedade_generalizada_tag": "transtorno_ansiedade_generalizada",
      "panico": "transtorno_panico",
      "ansiedade_social_fobia_social": "transtorno_ansiedade_social",
      "ansiedade_de_separacao": "transtorno_ansiedade_separacao",
      "ansiedade_induzido_por_substancia_medicamento": "transtorno_ansiedade_induzido_substancia",
      "ansiedade_devido_a_outra_condicao_medica": "transtorno_ansiedade_devido_outra_condicao_medica",

      // Capítulo 6
      "transtorno_obsessivo_compulsivo_toc": "transtorno_obsessivo_compulsivo",
      "transtorno_dismorfico_corporal_bdd": "transtorno_dismorfico_corporal",
      "acumulacao_hoarding": "transtorno_acumulacao",
      "tricotilomania_arrancar_o_cabelo": "tricotilomania",
      "escoriacao_skin_picking": "transtorno_escoriacao",

      // Capítulo 7
      "estresse_pos_traumatico_tept_30981_f4310": "tept",
      "estresse_agudo_3083_f430": "transtorno_estresse_agudo",
      "ajustamento_varios_codigos_f432x": "transtornos_adaptacao",
      "apego_reativo_31389_f941": "transtorno_apego_reativo",
      "interacao_social_desinibida_31389_f942": "transtorno_interacao_social_desinibida",

      // Outros Capítulos
      "transtorno_conversivo": "transtorno_conversao",
      "transtorno_de_rumincao": "transtorno_ruminacao",
      "disfuncao_eretil": "transtorno_eretil",
      "ejaculacao_precoce": "ejaculacao_prematura",
      "transtorno_desejo_sexual_hipoativo_masculino": "transtorno_desejo_sexual_masculino_hipoativo",
      "transtorno_personalidade_borderline": "tp_borderline",
      "transtorno_personalidade_dependente": "tp_dependente",
      "transtorno_personalidade_esquizoide": "tp_esquizoide",
      "transtorno_personalidade_esquizotipica": "tp_esquizotipico",
      "transtorno_personalidade_evitativa": "tp_evitativo",
      "transtorno_personalidade_narcisista": "tp_narcisista",
      "transtorno_personalidade_paranoide": "tp_paran_oide",
      "transtorno_personalidade_antissocial": "tp_antissocial",
      "transtorno_personalidade_histrionica": "tp_histrionico",
      "transtorno_personalidade_obsessivo_compulsiva": "tp_obsessivo_compulsivo",
    };

    const targetId = idAliases[assessmentId] || assessmentId;
    const importer = diseaseImports[targetId as keyof typeof diseaseImports];

    if (!importer) {
      return () => (
        <div className="flex h-full items-center justify-center text-muted-foreground p-8">
          Doença ({assessmentId}) não encontrada ou módulo ainda não gerado.
        </div>
      );
    }

    // Dynamic lazy loading of the generated react component with strict typing
    return lazy(importer as unknown as () => Promise<{ default: React.ComponentType }>);
  }, [assessmentId]);

  return (
    <Suspense
      fallback={
        <div className="flex h-full items-center justify-center p-8 text-muted-foreground">
          Carregando formulário de avaliação...
        </div>
      }
    >
      <DiseaseComponent />
    </Suspense>
  );
}
