import {
  CheckCircle2,
  LockIcon,
  Shield,
  Sparkles,
  Stethoscope,
  Waypoints,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";
import { LandingHero } from "./LandingHero";

const valueProps = [
  {
    icon: Stethoscope,
    title: "Identifique o transtorno",
    description:
      "Busque por nome, sigla, CID-10 ou DSM-5; ou navegue pelos 21 capítulos clínicos.",
  },
  {
    icon: Shield,
    title: "Conduza a entrevista",
    description:
      "Marque os critérios enquanto entrevista. Anote especificadores, gravidade, curso."
  },
  {
    icon: Workflow,
    title: "Exporte para prontuário",
    description:
      "Relatório markdown pré-formatado. Compatível com Obsidian, copie direto.",
  },
];

const carouselImages = [
  "https://pb.gtmedics.com/api/files/pbc_1777022727/olqlu64j86y8tr2/api_transcription4_4p6uccs47w.png?token=",
  "https://pb.gtmedics.com/api/files/pbc_1777022727/vt71e94zdwlfw5g/api_transcription3_9f0fty81tk.png?token=",
  "https://pb.gtmedics.com/api/files/pbc_1777022727/i9kxl75t7nkptk4/api_transcription1_sdpzkjhyk1.png?token=",
  "https://pb.gtmedics.com/api/files/pbc_1777022727/sde2ihmnwdka9ii/api_transcription2_8ekotzyh99.png?token=",
];

const AUDIENCES = [
  { t: "Psiquiatra", b: "Padronize avaliações, registre com rigor, defenda decisões em laudo." },
  { t: "Psicólogos", b: "Focados em avaliação diagnóstica e laudo psicológico." },
  { t: "Residentes", b: "Estruture entrevistas iniciais. Aprenda o DSM-5 enquanto avalia." },
  { t: "Médicos de Família", b: "Identifique e formalize demanda de saúde mental na atenção primária." },
  { t: "Equipes multiprofissionais", b: "CAPS, ambulatórios. Avaliação estruturada." },
];

/* ═══════════════════════ HOME PAGE ═══════════════════════ */
export default function LandingCTA() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((i) => (i + 1) % carouselImages.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col">
      <HeroSection activeSlide={activeSlide} onSlideChange={setActiveSlide} />
      <LandingHero />
      <FeaturesSection />
      <TrustSection />
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━ 1. HERO SECTION ━━━━━━━━━━━━━━━━━━ */
function HeroSection({
  activeSlide,
  onSlideChange,
}: {
  activeSlide: number;
  onSlideChange: (index: number) => void;
}) {
  return (
    <section
      className="w-full px-4 md:px-20"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, #d4e3ff33 0%, transparent 40%)",
        backgroundColor: "#f9f9ff",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(16_55_185/0.12),transparent_32%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-8 lg:py-16">
        <div className="space-y-5">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            <Sparkles className="size-4" />
            Avaliação clínica DSM-5
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="size-14 min-w-14 min-h-14 flex items-center justify-center rounded-full bg-blue-50 p-2 shadow-xl">
                <Waypoints className="h-7 w-7 mt-1 text-sky-900" />
              </div>
              <div>
                <p className="p-2 text-justify max-w-xl font-semibold tracking-tight text-orange-900 md:text-xl">
                  Avaliação estruturada para os 21 grandes grupos do dsm-5.
                </p>
               </div>
            </div>


            <div className="flex items-center gap-4">
              <div className="size-14 min-w-14 min-h-14 flex items-center justify-center rounded-full bg-blue-50 p-2 shadow-xl">
                <Waypoints className="h-7 w-7 mt-1 text-sky-900" />
              </div>
              <div>
                <span className="m-2 p-2 text-justify max-w-xl font-semibold tracking-tight text-orange-900 md:text-xl">
                  O sistema computa limiares, infere subtipos e aplica a hierarquia diagnóstica em tempo real.
                </span>
               </div>
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <div className="size-14 min-w-14 min-h-14 flex items-center justify-center rounded-full bg-blue-50 p-2 shadow-xl">
                <LockIcon className="h-7 w-7 mt-1 text-sky-900" />
              </div>
              <p className="m-2 p-2 text-justify max-w-xl font-semibold tracking-tight text-orange-900 md:text-xl">
                Conduza entrevistas com a estrutura de cada transtorno.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-slate-50 shadow-xl shadow-slate-900/10">
            {carouselImages.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`GT-Medics interface ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
                className={
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out " +
                  (i === activeSlide ? "opacity-80" : "opacity-0")
                }
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-emerald-500/10 via-transparent to-sky-400/10" />
          </div>
          <div className="mt-3 flex items-center justify-center shadow-lg gap-1.5">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => onSlideChange(i)}
                className={
                  "h-2.5 rounded-full p-1 transition-all " +
                  (i === activeSlide
                    ? "w-7 bg-slate-950"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400")
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━ 2. FEATURES BENTO GRID ━━━━━━━━━━━━━━━━━━ */
function FeaturesSection() {
  return (
    <section className="border-y border-slate-200/70 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {valueProps.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl shadow-lg border border-slate-100 bg-white p-5 transition hover:border-slate-300 hover:shadow-lg"
            >
              <div className="mt-3 flex items-center gap-3">
                <div className="mb-3 flex size-9 items-center justify-center rounded-full shadow-xl bg-blue-50">
                  <item.icon className="size-4 text-sky-900" />
                </div>
                <h2 className="m-0 text-sm font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h2>
              </div>
              <p className="mt-1.5 text-xs leading-5 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━ 3. TRUST SECTION ━━━━━━━━━━━━━━━━━━ */
function TrustSection() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="space-y-3">
          <p className="text-[14px] font-semibold uppercase tracking-[0.28em] text-emerald-300">
            Para quem é?
          </p>
          <h2 className="m-0 text-2xl font-semibold tracking-tight md:text-2xl">
            Profissionais que se levam a sério.
          </h2>
          <p className="text-xs leading-5 text-slate-400">
            Esta não é uma ferramenta para leigos, nem para usuários casuais. É feita para quem precisa registrar com precisão o que faz.
          </p>
        </div>

         
          {AUDIENCES.map((a) => (
            <article key={a.t} className="gap-2 rounded-xl bg-white/5 px-3.5 py-2.5">
              <div className="flex items-center gap-2 px-3.5 py-2.5">
                <CheckCircle2 className="size-4 shrink-0 text-emerald-300" />
                <span className="text-xl font-medium text-slate-100 text-shadow-sm text-shadow-slate-900">
                  {a.t}
                </span>
              </div>
              <p className="text-gray-100 text-sm leading-[1.55] m-0">{a.b}</p>
            </article>
          ))}

      </div>
    </section>
  );
}
