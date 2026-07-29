import type { GuideView } from "../../adapters/guideView";
import { PrevalenceCard } from "./PrevalenceCard";
import { CourseCard } from "./CourseCard";
import { SeverityBlock } from "./SeverityBlock";
import { SubtypesCard } from "./SubtypesCard";
import { HierarchyCard } from "./HierarchyCard";
import { InstrumentsCard } from "./InstrumentsCard";
import { NosologyCard } from "./NosologyCard";

/** O guia só existe quando há algo para mostrar: campo nulo não renderiza. */
export function ClinicalGuideSection({ view }: { readonly view: GuideView }) {
  // Campos nulos não renderizam: sem dados, sem seção.
  // (duplo gate: este early-return replica o guard do original — linhas
  // 1163–1173 do baseline — além do `clinicalGuideHasData` do registry.)
  if (
    view.codigos.length === 0 &&
    view.prevalencia === null &&
    view.curso.length === 0 &&
    // != null frouxo no original (linha 1160): NÃO usar view.gravidade ===
    // null, que tem semântica falsy (guarda do SeverityBlock, linha 1010).
    !view.temGravidade &&
    view.subtipos.length === 0 &&
    view.hierarquia === null &&
    view.instrumentos.length === 0
  ) {
    return null;
  }

  return (
    <div className="p-5 space-y-4 ">
      {view.prevalencia !== null || view.curso.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
          {view.prevalencia ? (
            <PrevalenceCard prevalencia={view.prevalencia} />
          ) : null}

          {view.curso.length > 0 ? <CourseCard etapas={view.curso} /> : null}
        </div>
      ) : null}

      <SeverityBlock severity={view.gravidade} />

      {view.subtipos.length > 0 ||
      view.instrumentos.length > 0 ||
      view.hierarquia ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
          {view.subtipos.length > 0 ? (
            <SubtypesCard subtipos={view.subtipos} />
          ) : null}

          {view.hierarquia ? (
            <HierarchyCard hierarquia={view.hierarquia} />
          ) : null}

          {view.instrumentos.length > 0 ? (
            <InstrumentsCard instrumentos={view.instrumentos} />
          ) : null}
        </div>
      ) : null}

      {view.codigos.length > 0 ? <NosologyCard codigos={view.codigos} /> : null}
    </div>
  );
}
