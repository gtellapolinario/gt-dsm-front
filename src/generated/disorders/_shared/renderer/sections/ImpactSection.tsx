import type { ClinicalDisorder } from "../../schema";
import type { ImpactSlice } from "../model/assessmentPort";
import {
  sectionHasData,
  type SeverityLevel,
} from "../../utils/disorderDataAccess";
import { CompactClinicalValue } from "../ui/CompactClinicalValue";
import { Field, FieldLabel } from "@ui/field";
import { Textarea } from "@ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/select";

export function ImpactSection({
  data,
  assessment,
}: {
  readonly data: ClinicalDisorder;
  readonly assessment: ImpactSlice;
}) {
  return (
    <div className="p-5 space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-[12rem_1fr] gap-3 items-start">
        <Field>
          <FieldLabel htmlFor="impacto-global">
            Impacto funcional global
          </FieldLabel>
          <Select
            value={assessment.state.impactFunctional}
            onValueChange={(v) =>
              assessment.setImpactFunctional(v as SeverityLevel)
            }
          >
            <SelectTrigger id="impacto-global" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ausente">Sem prejuízo</SelectItem>
              <SelectItem value="leve">Leve</SelectItem>
              <SelectItem value="moderado">Moderado</SelectItem>
              <SelectItem value="grave">Grave</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor="impacto-obs">
            Observações sobre impacto funcional
          </FieldLabel>
          <Textarea
            id="impacto-obs"
            rows={2}
            placeholder="Prejuízo acadêmico, ocupacional, familiar, social, autocuidado, segurança..."
            value={assessment.state.sectionNotes.impacto_funcional ?? ""}
            onChange={(e) =>
              assessment.setSectionNote("impacto_funcional", e.target.value)
            }
          />
        </Field>
      </div>
      {sectionHasData(data.dominios_impacto) ? (
        <CompactClinicalValue value={data.dominios_impacto} />
      ) : null}
    </div>
  );
}
