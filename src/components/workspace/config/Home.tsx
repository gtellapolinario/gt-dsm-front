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

const valueProps = [
  {
    icon: Stethoscope,
    title: "Aplicação inteligente de escalas",
    description:
      "Acompanhe seu paciente com mais de 60 escalas validadas.",
  },
  {
    icon: Shield,
    title: "Relatórios automatizados",
    description:
      "Resultados padronizados de protocolos validados",
  },
  {
    icon: Workflow,
    title: "Acompanhamento longitudinal",
    description:
      "Visualize a evolução do paciente através de gráficos comparativos.",
  },
];

const securityFeatures = [
  "Segurança de dados",
  "Criptografia de ponta a ponta",
  "Conformidade total com a LGPD",
  "Experiência fluida para o paciente em qualquer dispositivo",
];

const carouselImages = [
  "https://pb.gtmedics.com/api/files/pbc_1777022727/olqlu64j86y8tr2/api_transcription4_4p6uccs47w.png?token=",
  "https://pb.gtmedics.com/api/files/pbc_1777022727/vt71e94zdwlfw5g/api_transcription3_9f0fty81tk.png?token=",
  "https://pb.gtmedics.com/api/files/pbc_1777022727/i9kxl75t7nkptk4/api_transcription1_sdpzkjhyk1.png?token=",
  "https://pb.gtmedics.com/api/files/pbc_1777022727/sde2ihmnwdka9ii/api_transcription2_8ekotzyh99.png?token=",
];

/* ═══════════════════════ HOME PAGE ═══════════════════════ */
export default function Home() {
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
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            <Sparkles className="size-4" />
            Documentação clínica assistida por IA
          </span>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="size-14 min-w-14 min-h-14 flex items-center justify-center rounded-full bg-blue-50 p-2 shadow-xl">
                <Waypoints className="h-7 w-7 mt-1 text-sky-900" />
              </div>
              <div>
                <h1 className="m-0 max-w-xl text-balance text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
                  Saúde mental baseada em evidências
                </h1>
                <h2 className="hidden md:block m-0 max-w-xl text-balance text-xl font-semibold tracking-tight text-slate-950 md:text-xl">
                  Saúde mental baseada em evidências
                </h2>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="size-14 min-w-14 min-h-14 flex items-center justify-center rounded-full bg-blue-50 p-2 shadow-xl">
                <LockIcon className="h-7 w-7 mt-1 text-sky-900" />
              </div>
              <p className="max-w-lg text-md text-justify mt-6 leading-6 text-slate-600">
                A plataforma definitiva para aplicação e monitoramento de
                escalas psicométricas como PHQ-9, GAD-7 e BDI. Transforme dados
                subjetivos em decisões clínicas precisas.
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
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-300">
            Feito para atender as necessidades reais do consultório.
          </p>
          <h2 className="m-0 text-xl font-semibold tracking-tight md:text-2xl">
            Escalas de alto padrão para o profissional de saúde
          </h2>
          {/* <p className="text-xs leading-5 text-slate-400">
            Criptografia bancária para garantir que o sigilo profissional nunca
            seja comprometido. Tranquilidade para você e cuidado para o seu
            paciente.
          </p> */}
        </div>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {securityFeatures.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 rounded-xl bg-white/5 px-3.5 py-2.5"
            >
              <CheckCircle2 className="size-3.5 shrink-0 text-emerald-300" />
              <span className="text-xs font-medium text-slate-100">
                {feature}
              </span>
            </div>
          ))}
         {/* <div className="rounded-xl bg-emerald-400/10 p-3.5 sm:col-span-2">
            <div className="mb-1 flex items-center gap-2 text-emerald-200">
              <Lock className="size-3.5" />
              <span className="text-xs font-semibold">
                Ferramentas validadas e utilizadas por milhares de profissionais
                de saúde mental.
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
