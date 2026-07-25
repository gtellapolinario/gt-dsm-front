import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface Sintoma {
  id: string;
  rotulo?: string;
  desc?: string;
  pergunta?: string;
}

interface SymptomItemProps {
  sintoma: Sintoma;
  checked: boolean;
  severity: string;
  onToggle: (checked: boolean) => void;
  onSeverityChange: (severity: string) => void;
  clusterId?: string;
}

export function SymptomItem({
  sintoma,
  checked,
  severity,
  onToggle,
  onSeverityChange,
}: SymptomItemProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 p-2.5 rounded-lg transition hover:bg-slate-50"
      )}
    >
      <div className="pt-0.5">
        <Checkbox
          id={sintoma.id}
          checked={checked}
          onCheckedChange={(v) => onToggle(v === true)}
        />
      </div>

      <label htmlFor={sintoma.id} className="flex-1 cursor-pointer select-none">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-[10px] font-semibold tracking-wide uppercase text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded">
            {sintoma.id}
          </span>
          <span className="text-sm font-semibold text-slate-700">
            {sintoma.rotulo}
          </span>
        </div>
        <p className="text-xs text-stone-600 leading-relaxed mb-1">
          {sintoma.desc}
        </p>
        <p className="text-xs text-slate-400 italic leading-relaxed flex items-center gap-1">
          <span className="text-slate-300">&ldquo;</span>
          {sintoma.pergunta}
        </p>
      </label>

      <Select value={severity} onValueChange={onSeverityChange}>
        <SelectTrigger className="w-24 h-7 text-xs bg-slate-50 border-slate-200">
          <SelectValue placeholder="—" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="_none">—</SelectItem>
          <SelectItem value="leve">Leve</SelectItem>
          <SelectItem value="moderado">Moderado</SelectItem>
          <SelectItem value="grave">Grave</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
