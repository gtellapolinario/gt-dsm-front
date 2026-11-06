import { memo, useMemo } from "react";
import type { ChoiceSlice } from "../model/assessmentPort";
import { normalizeChoiceItems } from "../../utils/disorderDataAccess";
import { ToggleChip } from "../ui/ToggleChip";
import { ItemIcon } from "../ui/ItemIcon";
import { Field, FieldLabel } from "@ui/field";
import { Textarea } from "@ui/textarea";

export const ChoiceChipsSection = memo(
  function ChoiceChipsSection({
    data,
    group,
    hint,
    noteKey,
    noteLabel,
    assessment,
  }: {
    readonly data: unknown;
    readonly group: "specifiers" | "comorbidities";
    readonly hint: string;
    readonly noteKey: string;
    readonly noteLabel: string;
    readonly assessment: ChoiceSlice;
  }) {
    const items = useMemo(() => normalizeChoiceItems(data), [data]);
  if (items.length === 0) return null;
  return (
    <div className="p-5 space-y-3">
      <p className="text-shadow-xs font-serif text-sm font-medium italic leading-relaxed text-stone-500 text-justify text-wrap mx-3">{hint}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <ToggleChip
            key={item.id}
            active={assessment.state[group][item.id] ?? false}
            onClick={() =>
              assessment.setToggle(
                group,
                item.id,
                !(assessment.state[group][item.id] ?? false),
              )
            }
          >
            <ItemIcon raw={item.raw} />
            {item.label}
          </ToggleChip>
        ))}
      </div>
      <Field>
        <FieldLabel htmlFor={`note-${noteKey}`}>{noteLabel}</FieldLabel>
        <Textarea
          id={`note-${noteKey}`}
          rows={2}
          value={assessment.state.sectionNotes[noteKey] ?? ""}
          onChange={(e) => assessment.setSectionNote(noteKey, e.target.value)}
        />
      </Field>
    </div>
  );
  },
  (prev, next) =>
    prev.data === next.data &&
    prev.group === next.group &&
    prev.noteKey === next.noteKey &&
    prev.assessment.state[prev.group] === next.assessment.state[next.group] &&
    (prev.assessment.state.sectionNotes[prev.noteKey] ?? "") ===
      (next.assessment.state.sectionNotes[next.noteKey] ?? "") &&
    prev.assessment.setToggle === next.assessment.setToggle &&
    prev.assessment.setSectionNote === next.assessment.setSectionNote,
);
