import { useCallback, useEffect, useMemo } from "react";
import type { ClinicalDisorder } from "../schema";
import { generateClinicalMarkdown } from "../utils/clinicalMarkdown";
import {
  severityOptions,
  thresholdNumber,
  type SeverityLevel,
} from "../utils/disorderDataAccess";
import {
  createInitialAssessmentState,
  useAssessmentStore,
} from "@/infra/persistence/assessment-store";

export interface PatientIdentification {
  nomeId: string;
  dataNascimento: string;
  sexo: string;
  genero: string;
  escolaridade: string;
  queixaPrincipal: string;
}

export interface DisorderAssessmentState {
  patient: PatientIdentification;
  symptomChecked: Record<string, boolean>;
  symptomSeverity: Record<string, SeverityLevel>;
  symptomNotes: Record<string, string>;
  clusterNotes: Record<string, string>;
  conditionalCriteria: Record<string, boolean>;
  specifiers: Record<string, boolean>;
  comorbidities: Record<string, boolean>;
  ddx: Record<string, boolean>;
  impactFunctional: SeverityLevel;
  sectionNotes: Record<string, string>;
  markdown: string;
}

export interface ClusterCounter {
  id: string;
  label: string;
  checked: number;
  total: number;
  threshold: number;
  met: boolean;
}

export function useDisorderAssessment(data: ClinicalDisorder) {
  const disorderId = data.meta.id;

  const storedState = useAssessmentStore(
    (s) => s.assessmentsByDisorder[disorderId],
  );
  const sharedPatient = useAssessmentStore((s) => s.sharedPatient);
  const hydrateDisorder = useAssessmentStore((s) => s.hydrateDisorder);
  const storeSetPatientField = useAssessmentStore((s) => s.setPatientField);
  const storeSetSymptomChecked = useAssessmentStore((s) => s.setSymptomChecked);
  const storeSetSymptomSeverity = useAssessmentStore(
    (s) => s.setSymptomSeverity,
  );
  const storeSetSymptomNote = useAssessmentStore((s) => s.setSymptomNote);
  const storeSetClusterNote = useAssessmentStore((s) => s.setClusterNote);
  const storeSetToggle = useAssessmentStore((s) => s.setToggle);
  const storeSetImpactFunctional = useAssessmentStore(
    (s) => s.setImpactFunctional,
  );
  const storeSetSectionNote = useAssessmentStore((s) => s.setSectionNote);
  const storeRefreshMarkdown = useAssessmentStore((s) => s.refreshMarkdown);
  const storeResetDisorder = useAssessmentStore((s) => s.resetDisorder);

  useEffect(() => {
    void hydrateDisorder(disorderId, []);
  }, [disorderId, hydrateDisorder]);

  const fallbackState = useMemo<DisorderAssessmentState>(() => {
    const initial = createInitialAssessmentState(sharedPatient);
    return {
      ...initial,
      markdown: generateClinicalMarkdown(initial, data),
    };
  }, [data, sharedPatient]);

  const state = storedState ?? fallbackState;

  const setPatientField = useCallback(
    <K extends keyof PatientIdentification>(
      field: K,
      value: PatientIdentification[K],
    ) => {
      storeSetPatientField(disorderId, field, value);
    },
    [disorderId, storeSetPatientField],
  );

  const setSymptomChecked = useCallback(
    (id: string, checked: boolean) => {
      storeSetSymptomChecked(disorderId, id, checked);
    },
    [disorderId, storeSetSymptomChecked],
  );

  const setSymptomSeverity = useCallback(
    (id: string, severity: SeverityLevel) => {
      storeSetSymptomSeverity(disorderId, id, severity);
    },
    [disorderId, storeSetSymptomSeverity],
  );

  const setSymptomNote = useCallback(
    (id: string, note: string) => {
      storeSetSymptomNote(disorderId, id, note);
    },
    [disorderId, storeSetSymptomNote],
  );

  const setClusterNote = useCallback(
    (id: string, note: string) => {
      storeSetClusterNote(disorderId, id, note);
    },
    [disorderId, storeSetClusterNote],
  );

  const setToggle = useCallback(
    (
      group: "conditionalCriteria" | "specifiers" | "comorbidities" | "ddx",
      id: string,
      checked: boolean,
    ) => {
      storeSetToggle(disorderId, group, id, checked);
    },
    [disorderId, storeSetToggle],
  );

  const setImpactFunctional = useCallback(
    (impact: SeverityLevel) => {
      storeSetImpactFunctional(disorderId, impact);
    },
    [disorderId, storeSetImpactFunctional],
  );

  const setSectionNote = useCallback(
    (id: string, note: string) => {
      storeSetSectionNote(disorderId, id, note);
    },
    [disorderId, storeSetSectionNote],
  );

  const refreshMarkdown = useCallback(() => {
    return storeRefreshMarkdown(disorderId, data);
  }, [data, disorderId, storeRefreshMarkdown]);

  const buildMarkdown = useCallback(
    (currentState: DisorderAssessmentState = state) => {
      return generateClinicalMarkdown(currentState, data);
    },
    [data, state],
  );

  const reset = useCallback(() => {
    storeResetDisorder(disorderId, data);
  }, [data, disorderId, storeResetDisorder]);

  const clusterCounters = useMemo<ClusterCounter[]>(() => {
    return (data.clusters_sintomas ?? []).map((cluster, index) => {
      const checked = cluster.sintomas.filter(
        (symptom) => state.symptomChecked[symptom.id],
      ).length;
      const total = cluster.sintomas.length;
      const threshold = thresholdNumber(cluster.limiar, total);
      return {
        id: cluster.id,
        label: cluster.nome ?? `Cluster ${index + 1}`,
        checked,
        total,
        threshold,
        met: checked >= threshold,
      };
    });
  }, [data.clusters_sintomas, state.symptomChecked]);

  return {
    state,
    severityOptions,
    clusterCounters,
    setPatientField,
    setSymptomChecked,
    setSymptomSeverity,
    setSymptomNote,
    setClusterNote,
    setToggle,
    setImpactFunctional,
    setSectionNote,
    refreshMarkdown,
    buildMarkdown,
    reset,
  };
}
