import type { useDisorderAssessment, ClusterCounter } from "../../hooks/useDisorderAssessment";

export type Assessment = ReturnType<typeof useDisorderAssessment>;
export type AssessmentState = Assessment["state"];
export type { ClusterCounter };

/** Fatias mínimas consumidas por cada seção (ISP). */
export type PatientSlice   = Pick<Assessment, "state" | "setPatientField">;
export type CriteriaSlice  = Pick<Assessment, "state" | "setToggle">;
export type SymptomSlice   = Pick<Assessment, "state" | "setSymptomChecked" | "setSymptomSeverity" | "setClusterNote">;
export type ChoiceSlice    = Pick<Assessment, "state" | "setToggle" | "setSectionNote">;
export type ImpactSlice    = Pick<Assessment, "state" | "setImpactFunctional" | "setSectionNote">;
export type CountersSlice  = Pick<Assessment, "state" | "clusterCounters">;
