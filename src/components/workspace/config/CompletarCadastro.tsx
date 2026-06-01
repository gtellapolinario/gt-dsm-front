import { SquircleButton } from '@/components/ui/SquircleButton'
import { cn } from '@/lib/utils'
import { useNavigate } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Globe, ShieldCheck, Stethoscope, UserCheck } from 'lucide-react'
import { useState } from 'react'

type SelectionValue = 'patient' | 'professional' | 'common' | null

interface CardOption {
  value: Exclude<SelectionValue, null>
  icon: typeof UserCheck
  iconBgClass: string
  iconBgHoverClass: string
  title: string
  description: string
}

const cards: CardOption[] = [
  {
    value: 'patient',
    icon: UserCheck,
    iconBgClass: 'bg-primary-container/10',
    iconBgHoverClass: 'group-hover:bg-primary-container/20',
    title: 'Sou paciente do Dr. Guilherme',
    description: 'Vincular meu acesso ao meu cadastro clínico já existente.',
  },
  {
    value: 'professional',
    icon: Stethoscope,
    iconBgClass: 'bg-secondary-container/10',
    iconBgHoverClass: 'group-hover:bg-secondary-container/20',
    title: 'Sou profissional de saúde',
    description: 'Solicitar acesso profissional à plataforma.',
  },
  {
    value: 'common',
    icon: Globe,
    iconBgClass: 'bg-tertiary-fixed-dim/20',
    iconBgHoverClass: 'group-hover:bg-tertiary-fixed-dim/30',
    title: 'Sou usuário comum',
    description: 'Usar recursos gerais sem vínculo clínico ou profissional.',
  },
]

const easeEntrance = [0.16, 1, 0.3, 1] as [number, number, number, number]

export default function CompletarCadastro() {
  const [selected, setSelected] = useState<SelectionValue>(null)
  const navigate = useNavigate()

  const handleContinue = () => {
    if (!selected) return

    switch (selected) {
      case 'patient':
        navigate({ to: '/confirmar-vinculo' })
        break
      case 'professional':
        navigate({ to: '/solicitar-acesso' })
        break
      case 'common':
        navigate({ to: '/finalizar-cadastro' })
        break
    }
  }

  const handleSkip = () => {
    navigate({ to: '/' })
  }

  return (
    <div className="flex flex-1 items-center justify-center bg-gray-50 p-4 py-[48px] px-[16px]">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <motion.div
          className="text-center mb-[32px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeEntrance }}
        >
          <h1 className="font-manrope text-headline-lg-mobile md:text-headline-lg font-semibold text-on-surface mb-[8px]">
            Complete seu cadastro
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Para configurar seu acesso ao GT-Medic, selecione como você pretende usar a plataforma.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full mb-[48px]">
          {cards.map((card, index) => {
            const Icon = card.icon
            const isSelected = selected === card.value

            return (
              <motion.button
                key={card.value}
                onClick={() => setSelected(card.value)}
                className={cn(
                  'group relative flex flex-col items-start text-left p-[32px] rounded-xl border-2 transition-all duration-300 ease-out active:scale-[0.98] cursor-pointer',
                  isSelected
                    ? 'border-primary bg-surface-container-low shadow-lg'
                    : 'border-outline-variant bg-surface-container-lowest hover:border-primary/50 hover:shadow-lg'
                )}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  ease: easeEntrance,
                  delay: 0.1 * (index + 1),
                }}
              >
                {isSelected && (
                  <div className="absolute top-[16px] right-[16px] flex items-center justify-center w-[24px] h-[24px] rounded-full bg-primary">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2.91675 7.00004L5.83341 9.91671L11.0834 4.08337"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}

                <div
                  className={cn(
                    'flex items-center justify-center w-[48px] h-[48px] rounded-lg transition-colors duration-300 mb-[16px]',
                    card.iconBgClass,
                    card.iconBgHoverClass,
                    isSelected && card.value === 'patient' && 'bg-primary-container/20',
                    isSelected && card.value === 'professional' && 'bg-secondary-container/20',
                    isSelected && card.value === 'common' && 'bg-tertiary-fixed-dim/30',
                  )}
                >
                  <Icon className="w-[32px] h-[32px] text-black" strokeWidth={1.5} />
                </div>

                <h2 className="font-manrope text-headline-md font-semibold text-on-surface mb-[8px]">
                  {card.title}
                </h2>

                <p className="text-body-sm text-on-surface-variant">
                  {card.description}
                </p>
              </motion.button>
            )
          })}
        </div>

        <motion.div
          className="flex flex-col items-center gap-[16px] w-full max-w-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: easeEntrance, delay: 0.4 }}
        >
          <SquircleButton
            onClick={handleContinue}
            disabled={!selected}
            variant="green"
            size="palette"
            fontWeight={700}
            label="Continuar"
          />

          <button
            onClick={handleSkip}
            className="text-on-surface-variant hover:text-primary underline decoration-outline-variant underline-offset-4 transition-colors duration-200 text-label-sm font-semibold tracking-[0.05em]"
          >
            Pular por enquanto
          </button>
        </motion.div>

        <motion.div
          className="inline-flex items-center gap-[8px] px-[24px] py-[8px] mt-[48px] bg-surface-container-low rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: easeEntrance, delay: 0.5 }}
        >
          <ShieldCheck className="w-[18px] h-[18px] text-black" strokeWidth={1.5} />
          <span className="text-body-sm text-on-surface-variant">
            Conexão segura e criptografada com GT-Medic
          </span>
        </motion.div>
      </div>
    </div>
  )
}
