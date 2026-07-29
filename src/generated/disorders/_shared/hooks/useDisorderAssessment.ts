import { useCallback, useMemo, useState } from "react";
import type { ClinicalDisorder } from "../schema";
import { generateClinicalMarkdown } from "../utils/clinicalMarkdown";
import { severityOptions, thresholdNumber, type SeverityLevel } from "../utils/disorderDataAccess";

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

const initialPatient: PatientIdentification = {
  nomeId: "",
  dataNascimento: "",
  sexo: "",
  genero: "",
  escolaridade: "",
  queixaPrincipal: "",
};

function makeInitialState(): DisorderAssessmentState {
  return {
    patient: initialPatient,
    symptomChecked: {},
    symptomSeverity: {},
    symptomNotes: {},
    clusterNotes: {},
    conditionalCriteria: {},
    specifiers: {},
    comorbidities: {},
    ddx: {},
    impactFunctional: "ausente",
    sectionNotes: {},
    markdown: "",
  };
}

export function useDisorderAssessment(data: ClinicalDisorder) {
  const [state, setState] = useState<DisorderAssessmentState>(() => ({
    ...makeInitialState(),
    markdown: generateClinicalMarkdown(makeInitialState(), data),
  }));

  const setPatientField = useCallback(<K extends keyof PatientIdentification>(field: K, value: PatientIdentification[K]) => {
    setState((current) => ({ ...current, patient: { ...current.patient, [field]: value } }));
  }, []);

  const setSymptomChecked = useCallback((id: string, checked: boolean) => {
    setState((current) => ({
      ...current,
      symptomChecked: { ...current.symptomChecked, [id]: checked },
      symptomSeverity: { ...current.symptomSeverity, [id]: checked ? current.symptomSeverity[id] ?? "leve" : "ausente" },
    }));
  }, []);

  const setSymptomSeverity = useCallback((id: string, severity: SeverityLevel) => {
    setState((current) => ({
      ...current,
      symptomSeverity: { ...current.symptomSeverity, [id]: severity },
      symptomChecked: { ...current.symptomChecked, [id]: severity !== "ausente" ? true : current.symptomChecked[id] ?? false },
    }));
  }, []);

  const setSymptomNote = useCallback((id: string, note: string) => {
    setState((current) => ({ ...current, symptomNotes: { ...current.symptomNotes, [id]: note } }));
  }, []);

  const setClusterNote = useCallback((id: string, note: string) => {
    setState((current) => ({ ...current, clusterNotes: { ...current.clusterNotes, [id]: note } }));
  }, []);

  const setToggle = useCallback((group: "conditionalCriteria" | "specifiers" | "comorbidities" | "ddx", id: string, checked: boolean) => {
    setState((current) => ({ ...current, [group]: { ...current[group], [id]: checked } }));
  }, []);

  const setImpactFunctional = useCallback((impact: SeverityLevel) => {
    setState((current) => ({ ...current, impactFunctional: impact }));
  }, []);

  const setSectionNote = useCallback((id: string, note: string) => {
    setState((current) => ({ ...current, sectionNotes: { ...current.sectionNotes, [id]: note } }));
  }, []);

  const refreshMarkdown = useCallback(() => {
    let nextMarkdown = "";
    setState((current) => {
      nextMarkdown = generateClinicalMarkdown(current, data);
      return { ...current, markdown: nextMarkdown };
    });
    return nextMarkdown;
  }, [data]);

  const buildMarkdown = useCallback((currentState: DisorderAssessmentState = state) => {
    return generateClinicalMarkdown(currentState, data);
  }, [data, state]);

  const reset = useCallback(() => {
    const next = makeInitialState();
    setState({ ...next, markdown: generateClinicalMarkdown(next, data) });
  }, [data]);

  const clusterCounters = useMemo<ClusterCounter[]>(() => {
    return (data.clusters_sintomas ?? []).map((cluster, index) => {
      const checked = cluster.sintomas.filter((symptom) => state.symptomChecked[symptom.id]).length;
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
