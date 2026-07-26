import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { SeverityLevel } from "../../utils/disorderDataAccess";

export function SymptomSeveritySelect({
  value,
  onChange,
}: {
  readonly value: SeverityLevel;
  readonly onChange: (value: SeverityLevel) => void;
}) {
  return (
    <Select value={value} onValueChange={(v) => onChange(v as SeverityLevel)}>
      <SelectTrigger size="sm" className="w-[96px]" title="Gravidade">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ausente">—</SelectItem>
        <SelectItem value="leve">Leve</SelectItem>
        <SelectItem value="moderado">Moderado</SelectItem>
        <SelectItem value="grave">Grave</SelectItem>
      </SelectContent>
    </Select>
  );
}
