import { isRecord } from "../../utils/disorderDataAccess";
import { getIcone } from "@/lib/mapear-icones";
import type { LucideIcon } from "lucide-react";

/** Ícone lucide a partir do nome no campo `icone` do payload clínico. */
function itemIcon(raw: unknown): LucideIcon | null {
  return isRecord(raw) && typeof raw.icone === "string"
    ? getIcone(raw.icone)
    : null;
}

export function ItemIcon({ raw }: { readonly raw: unknown }) {
  const Icon = itemIcon(raw);
  return Icon ? <Icon className="mr-1 inline h-4 w-4" /> : null;
}
