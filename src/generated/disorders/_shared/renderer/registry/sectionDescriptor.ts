import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { SectionContext } from "../model/sectionContext";

export interface SectionDescriptor {
  readonly kind: "section";
  readonly id: string;
  readonly icon: LucideIcon;
  readonly iconClass?: string;
  readonly title: ReactNode;
  /** entra no valor inicial do Accordion */
  readonly openByDefault: boolean;
  /** entra em allSectionIds → é alcançado pelo botão "Expandir" */
  readonly collapsible: boolean;
  readonly badge?: (ctx: SectionContext) => ReactNode;
  readonly render: (ctx: SectionContext) => ReactNode;
}

/** Conteúdo que vive dentro do <Accordion> mas não é um AccordionItem (a toolbar). */
export interface SlotDescriptor {
  readonly kind: "slot";
  readonly id: string;
  readonly render: (ctx: SectionContext) => ReactNode;
}

export type RendererNode = SectionDescriptor | SlotDescriptor;
