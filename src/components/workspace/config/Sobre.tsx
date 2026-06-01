import {
  Activity,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  ClipboardCheck,
  HeartPulse,
  Lock,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { LazyBackground } from '@/components/ui/LazyBackground'

/* ──────────────────── DATA ──────────────────── */

const ESCALAS_POR_CATEGORIA = [
  {
    titulo: 'Ansiedade',
    icone: Activity,
    cor: 'bg-rose-50 text-rose-600 border-rose-200',
    escalas: [
      'GAD-7 (Generalized Anxiety Disorder)',
      'Hamilton Anxiety Scale (HAMA)',
      'LSAS (Liebowitz Social Anxiety Scale)',
      'ASRS (ADHD Self-Report Scale)',
      'SCARED (Screen for Child Anxiety)',
      'RAADS-R (Ritvo Autism Asperger)',
    ],
  },
  {
    titulo: 'Depressão & Humor',
    icone: HeartPulse,
    cor: 'bg-blue-50 text-blue-600 border-blue-200',
    escalas: [
      'PHQ-9 (Patient Health Questionnaire)',
      'Beck Depression Inventory (BDI)',
      'BDRS (Bipolar Depression Rating Scale)',
      'EPDS (Edinburgh Postnatal Depression)',
      'MFQ (Mood and Feelings Questionnaire)',
      'McLean Screening Instrument (MSI-BPD)',
      'YMRS (Young Mania Rating Scale)',
    ],
  },
  {
    titulo: 'Sono',
    icone: Zap,
    cor: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    escalas: [
      'ISI (Insomnia Severity Index)',
      'Epworth Sleepiness Scale (ESS)',
      'STOP-BANG (Apneia do Sono)',
    ],
  },
  {
    titulo: 'Dependência & Comportamento',
    icone: ShieldCheck,
    cor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    escalas: [
      'AUDIT (Alcohol Use Disorders)',
      'DAST-10 (Drug Abuse Screening)',
      'ASSIST (Alcohol, Smoking, Substance)',
      'Fagerström (Dependência de Nicotina)',
      'YBOCS (Obsessive-Compulsive)',
      'OBQ-44 (Obsessive Beliefs)',
      'OCIR (Obsessive-Compulsive Inventory)',
    ],
  },
  {
    titulo: 'Trauma & Estresse',
    icone: Users,
    cor: 'bg-amber-50 text-amber-600 border-amber-200',
    escalas: [
      'PCL-5 (PTSD Checklist)',
      'CAPS-5 (Clinician-Administered PTSD)',
      'DES-II (Dissociative Experiences)',
      'DAS (Differential Appraisal Scale)',
      'PSS-10 (Perceived Stress Scale)',
      'PSWQ (Penn State Worry Questionnaire)',
    ],
  },
  {
    titulo: 'Saúde Mental Geral',
    icone: Brain,
    cor: 'bg-purple-50 text-purple-600 border-purple-200',
    escalas: [
      'WHO-5 (Well-Being Index)',
      'WHODAS 2.0 (Disability Assessment)',
      'GAF (Global Assessment of Functioning)',
      'GAF-PS (Glossário Anexo para Funcionamento)',
      'CGI-S / CGI-I (Clinical Global Impressions)',
      'UKU (Side Effect Rating Scale)',
    ],
  },
  {
    titulo: 'Infantojuvenil',
    icone: BookOpen,
    cor: 'bg-sky-50 text-sky-600 border-sky-200',
    escalas: [
      'SDQ (Strengths and Difficulties)',
      'M-CHAT-R (Autism Toddler)',
      'CBI (Childhood Bipolarity)',
      'CARS (Childhood Autism Rating)',
    ],
  },
  {
    titulo: 'Cognição & Outros',
    icone: BarChart3,
    cor: 'bg-slate-50 text-slate-600 border-slate-200',
    escalas: [
      'MMSE (Mini Mental State Examination)',
      'IQCODE (Informant Questionnaire)',
      'BPRS (Brief Psychiatric Rating Scale)',
      'BSL-23 (Borderline Symptom List)',
      'PID-5 (Personality Inventory DSM-5)',
      'Big Five (Personalidade)',
      'IQ Test (Raven & Wechsler)',
      'TypeIQ (Tipologia Intelectual)',
    ],
  },
]

const DIFERENCIAIS = [
  {
    icone: ClipboardCheck,
    titulo: '70+ Escalas Validadas',
    descricao:
      'Biblioteca completa com as principais escalas psicométricas nacionais e internacionais, todas revisadas e validadas para uso clínico.',
  },
  {
    icone: Lock,
    titulo: 'Conformidade LGPD & HIPAA',
    descricao:
      'Criptografia ponta-a-ponta, dados hospedados em datacenters certificados e total conformidade com a Lei Geral de Proteção de Dados.',
  },
  {
    icone: TrendingUp,
    titulo: 'Monitoramento em Tempo Real',
    descricao:
      'Acompanhamento da evolução do paciente com gráficos interativos, histórico completo e alertas automáticos de sinais de risco.',
  },
  {
    icone: Users,
    titulo: 'Multiusuário & Colaboração',
    descricao:
      'Gestão de múltiplos profissionais, supervisão de equipes e compartilhamento seguro de prontuários entre membros da equipe.',
  },
  {
    icone: Award,
    titulo: 'Relatórios Automatizados',
    descricao:
      'Geração de relatórios clínicos completos em PDF com interpretação baseada em evidências, prontos para anexar ao prontuário.',
  },
  {
    icone: Zap,
    titulo: 'Aplicação Remota',
    descricao:
      'Envie links personalizados para seus pacientes aplicarem as escalas no próprio celular ou computador, sem necessidade de instalação.',
  },
]

/* ═══════════════════════ SOBRE PAGE ═══════════════════════ */

export default function Sobre() {
  return (
    <LazyBackground
      src="https://firebasestorage.googleapis.com/v0/b/gt-medic-98c72.firebasestorage.app/o/bird2.jpg?alt=media&token=abe94d40-ce47-4ab0-bede-faffe9e393e4"
      overlayClassName="opacity-40"
      className="flex flex-col text-on-surface"
    >

      {/* HERO CARD */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Card className="border-none bg-white/40 backdrop-blur-xs shadow-xl">
          <CardContent className="flex flex-col items-center text-center pt-10 pb-10">
            <img
              src="/icons/mental3.svg"
              alt="Mental Health"
              className="w-32 h-32 md:w-40 md:h-40 mb-4"
            />
            <CardTitle className="font-manrope text-3xl md:text-4xl font-bold text-on-surface max-w-2xl">
              A ciência por trás de cada avaliação
            </CardTitle>
            <CardDescription className="mt-4 text-lg text-on-surface-variant max-w-xl">
              A GT-Medics Escalas reúne mais de 70 instrumentos psicométricos validados em
              uma única plataforma, projetada para profissionais de saúde mental.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* ESTATÍSTICAS CARDS */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 md:pb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { valor: '70+', label: 'Escalas disponíveis' },
            { valor: '15+', label: 'Categorias clínicas' },
            { valor: '100%', label: 'Conformidade LGPD' },
            { valor: '24/7', label: 'Acesso remoto' },
          ].map((stat) => (
            <Card
              key={stat.label}
              className="border-none bg-white/40 backdrop-blur-xs shadow-xl"
            >
              <CardContent className="text-center pt-6 pb-6">
                <p className="font-manrope text-headline-lg font-bold text-primary">
                  {stat.valor}
                </p>
                <p className="mt-1 text-body-sm text-on-surface-variant">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* DIFERENCIAIS CARDS */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Card className="mb-10 border-none bg-white/40 backdrop-blur-xs shadow-xl">
          <CardContent className="text-center pt-8 pb-8">
            <CardTitle className="font-manrope text-headline-lg-mobile md:text-headline-lg font-semibold text-on-surface">
              Por que escolher a GT-Medics?
            </CardTitle>
            <CardDescription className="mt-3 text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Ferramentas desenvolvidas por e para profissionais de saúde mental,
              combinando rigor científico com experiência digital intuitiva.
            </CardDescription>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIFERENCIAIS.map((item) => (
            <Card
              key={item.titulo}
              className="border-none bg-white/40 backdrop-blur-xs shadow-xl transition-shadow hover:shadow-md"
            >
              <CardContent className="pt-6 pb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-fixed mb-4">
                  <item.icone className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-manrope text-headline-sm font-semibold text-on-surface mb-2">
                  {item.titulo}
                </h3>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  {item.descricao}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* ESCALAS POR CATEGORIA CARDS */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ESCALAS_POR_CATEGORIA.map((cat) => (
            <Card
              key={cat.titulo}
              className="border-none bg-white/40 backdrop-blur-xs shadow-xl"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border ${cat.cor}`}
                  >
                    <cat.icone className="h-5 w-5" />
                  </div>
                  <CardTitle className="font-manrope text-headline-sm font-semibold text-on-surface">
                    {cat.titulo}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-shadow-xs font-medium">
                  {cat.escalas.map((escala) => (
                    <li
                      key={escala}
                      className="flex items-start gap-2 text-body-sm text-on-surface-variant"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      {escala}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* COMO FUNCIONA CARDS */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              passo: '',
              titulo: 'Profissionais',
              descricao:
                'Todos os profissionais de saúde são bem-vindos.',
            },
            {
              passo: '',
              titulo: 'Cadastre seus pacientes',
              descricao:
                'Envie para seus pacientes, dados mínimos, sigilo e segurança.',
            },
            {
              passo: '',
              titulo: 'Aplicação e acompanhamento',
              descricao:
                'Escolha a escala, aplique e acompanhe a evolução do seu paciente.',
            },
          ].map((etapa) => (
            <Card
              key={etapa.passo}
              className="border-none bg-white/40 backdrop-blur-xs shadow-xl text-center"
            >
              <CardContent className="pt-8 pb-8">
                <span className="font-manrope text-display-lg font-bold text-primary/20">
                  {etapa.passo}
                </span>
                <h3 className="font-manrope text-headline-sm font-semibold text-on-surface mt-2">
                  {etapa.titulo}
                </h3>
                <p className="mt-2 text-body-sm text-on-surface-variant leading-relaxed">
                  {etapa.descricao}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </LazyBackground>
  )
}
