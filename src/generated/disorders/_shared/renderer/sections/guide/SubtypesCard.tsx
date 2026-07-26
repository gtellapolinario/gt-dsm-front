import { Tags } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GuideCardHeader } from "../../ui/GuideCardHeader";

export function SubtypesCard({
  subtipos,
}: {
  readonly subtipos: readonly string[];
}) {
  return (
    <div className="rounded-xl border border-border bg-surface-2/40 p-4">
      <GuideCardHeader
        icon={Tags}
        iconClass="text-violet-600 dark:text-violet-400"
      >
        Subtipos / Especificadores Clínicos
      </GuideCardHeader>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {subtipos.map((sub, i) => (
          <Badge key={i} variant="outline">
            {String(sub)}
          </Badge>
        ))}
      </div>
    </div>
  );
}
