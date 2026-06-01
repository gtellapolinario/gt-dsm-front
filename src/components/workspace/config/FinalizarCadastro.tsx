import { useForm } from '@tanstack/react-form'
import {
  User,
  Phone,
  ArrowRight,
  ShieldCheck,
  Shield,
  BarChart3,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/context/AuthContext'
import { Navigate, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { IMaskInput } from 'react-imask'
import { GTMedicsLoadingModal } from '@/components/workspace/GTMedicsLoadingModal'

/* ── Validation helpers ── */
function nomeValidator(value: string) {
  if (!value || value.trim() === '') return 'Nome completo é obrigatório'
  if (value.trim().length < 3) return 'Nome deve ter no mínimo 3 caracteres'
  return undefined
}

export default function FinalizarCadastro() {
  const navigate = useNavigate()
  const { completeCommonProfile, user, isAuthenticated, isLoading } = useAuth()
  const [errorMessage, setErrorMessage] = useState('')
  const form = useForm({
    defaultValues: {
      nomeCompleto: user?.nomeCompleto || '',
      telefone: user?.telefone || '',
    },
    onSubmit: async ({ value }) => {
      setErrorMessage('')
      try {
        await completeCommonProfile({
          nomeCompleto: value.nomeCompleto.trim(),
          telefone: value.telefone?.trim() || '',
        })
        await navigate({ to: '/Dashboard' })
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : 'Falha ao finalizar cadastro.')
      }
    },
  })

  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center bg-background p-8 text-on-surface-variant">
        Carregando sessão...
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-start py-12 px-4 bg-background">
      {/* ── Registration Card ── */}
      <div className="w-full max-w-[520px] bg-surface-container-lowest rounded-xl p-[32px] shadow-sm border border-outline-variant/30">
        {/* Header */}
        <div className="text-center mb-[24px] space-y-[8px]">
          <h1 className="font-manrope text-headline-lg text-primary tracking-tight">
            Finalizar cadastro
          </h1>
          <p className="text-body-md text-on-surface-variant">
            Complete suas informações básicas para acessar os recursos gerais da plataforma.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            void form.handleSubmit()
          }}
          className="flex flex-col gap-[24px]"
        >
          {/* Nome completo (required) */}
          <form.Field
            name="nomeCompleto"
            validators={{
              onChange: ({ value }) => nomeValidator(value),
            }}
          >
            {(field) => (
              <div className="flex flex-col gap-[6px]">
                <Label className="text-label-md text-on-surface-variant ml-1">
                  Nome completo
                  <span className="text-error ml-[2px]">*</span>
                </Label>
                <div className="relative group">
                  <User
                    className="absolute left-[16px] top-1/2 -translate-y-1/2 text-outline transition-colors duration-200 group-focus-within:text-primary"
                    size={20}
                  />
                  <Input
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    className="w-full bg-surface border-outline-variant rounded-lg pl-[44px] pr-[16px] py-[12px] placeholder:text-outline/60 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all duration-200"
                  />
                </div>
                {field.state.meta.errors?.[0] && (
                  <p className="text-body-sm text-error ml-1">
                    {field.state.meta.errors[0]}
                  </p>
                )}
              </div>
            )}
          </form.Field>

          {/* Telefone (optional) */}
          <form.Field name="telefone">
            {(field) => (
              <div className="flex flex-col gap-[6px]">
                <Label className="text-label-md text-on-surface-variant ml-1">
                  Telefone (Opcional)
                </Label>
                <div className="relative group">
                  <Phone
                    className="absolute left-[16px] top-1/2 -translate-y-1/2 text-outline transition-colors duration-200 group-focus-within:text-primary"
                    size={20}
                  />
                  <IMaskInput
                    mask="(00) 00000-0000"
                    placeholder="(00) 00000-0000"
                    value={field.state.value}
                    onAccept={(value) => field.handleChange(String(value))}
                    onBlur={field.handleBlur}
                    className="w-full bg-surface border-outline-variant rounded-lg pl-[44px] pr-[16px] py-[12px] placeholder:text-outline/60 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all duration-200"
                  />
                </div>
              </div>
            )}
          </form.Field>

          {errorMessage && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {errorMessage}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={form.state.isSubmitting}
            className="w-full bg-primary text-on-primary rounded-lg py-[12px] shadow-md text-body-lg font-semibold hover:opacity-90 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-[8px] mt-[8px]"
          >
            Finalizar cadastro
            <ArrowRight size={20} />
          </Button>
        </form>

        {/* Security Badge */}
        <div className="mt-[24px] flex items-center gap-[8px] p-[16px] rounded-lg bg-secondary-fixed/20">
          <ShieldCheck className="text-secondary shrink-0" size={20} />
          <p className="text-label-sm text-on-secondary-fixed-variant">
            Seus dados estão protegidos por criptografia de ponta a ponta.
          </p>
        </div>
      </div>

      {/* ── Info Cards Grid ── */}
      <div className="w-full max-w-[520px] mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {/* Card 1: Acompanhe sua evolução */}
        <div className="bg-surface-container-low p-[24px] rounded-xl border border-outline-variant/20 flex flex-col gap-[8px]">
          <BarChart3 className="text-primary" size={24} />
          <p className="text-label-md font-semibold text-on-surface">
            Acompanhe sua evolução
          </p>
          <p className="text-body-sm text-on-surface-variant">
            Visualize gráficos de progresso baseados em suas escalas respondidas.
          </p>
        </div>

        {/* Card 2: Privacidade Total */}
        <div className="bg-surface-container-low p-[24px] rounded-xl border border-outline-variant/20 flex flex-col gap-[8px]">
          <Shield className="text-primary" size={24} />
          <p className="text-label-md font-semibold text-on-surface">
            Privacidade Total
          </p>
          <p className="text-body-sm text-on-surface-variant">
            Você decide quem pode visualizar seu histórico de resultados.
          </p>
        </div>
      </div>
      <GTMedicsLoadingModal isOpen={form.state.isSubmitting} onClose={() => {}} />
    </div>
  )
}
