import { Tags } from "lucide-react";
import { Badge } from "@ui/badge";
import { GuideCardHeader } from "../../ui/GuideCardHeader";

export function SubtypesCard({
  subtipos,
}: {
  readonly subtipos: readonly string[];
}) {
  return (
    <div className="rounded-xl shadow-md border border-border bg-surface-2/60 p-4">
      <GuideCardHeader icon={Tags} iconClass="text-violet-800 text-shadow-xs">
        Subtipos / Especificadores Clínicos
      </GuideCardHeader>
      <div className="mt-2 flex flex-wrap gap-1.5 mx-3 mb-2">
        {subtipos.map((sub, i) => (
          <Badge key={i} variant="outline">
            {String(sub)}
          </Badge>
        ))}
      </div>
    </div>
  );
}
