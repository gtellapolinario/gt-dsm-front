import type { ClinicalDisorder } from "../../schema";
import type { Assessment } from "./assessmentPort";

export interface SectionContext {
  readonly data: ClinicalDisorder;
  readonly assessment: Assessment;
  readonly liveMarkdown: string;
  readonly onCopy: () => void;
}
