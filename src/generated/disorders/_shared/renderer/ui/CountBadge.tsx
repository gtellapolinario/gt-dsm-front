import { Badge } from "@ui/badge";

export function CountBadge({
  n,
  total,
  met,
}: {
  readonly n: number | string;
  readonly total?: number | string;
  readonly met?: boolean;
}) {
  return (
    <Badge
      variant={met ? "default" : "secondary"}
      className="h-auto px-2.5 py-0.5 text-sm font-semibold"
    >
      {n}
      {total !== undefined ? `/${total}` : ""}
    </Badge>
  );
}
