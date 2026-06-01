import { useForm } from '@tanstack/react-form'
import { Navigate, useNavigate } from '@tanstack/react-router'
import { z } from 'zod'
import {
  ArrowLeft,
  ShieldCheck,
  Shield,
  Lock,
  ChevronRight,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/context/AuthContext'
import { useState } from 'react'
import { IMaskInput } from 'react-imask'
import { GTMedicsLoadingModal } from '@/components/workspace/GTMedicsLoadingModal'

/* ── Zod schemas for field-level validation ── */
const nomeCompletoSchema = z.string().min(3, 'Nome completo é obrigatório')
const dataNascimentoSchema = z.string().min(1, 'Data de nascimento é obrigatória')
const cpfSchema = z
  .string()
  .refine((value) => onlyDigits(value).length === 11, 'CPF deve conter 11 dígitos')

function onlyDigits(value = '') {
  return String(value).replace(/\D/g, '')
}

function formatCpf(value: string) {
  const digits = onlyDigits(value).slice(0, 11)
  return digits
    .replace(/^(\d{3})(\d)/, '$1.$2')
    .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1-$2')
}

export default function ConfirmarVinculo() {
  const navigate = useNavigate()
  const { requestPatientLink, user, isAuthenticated, isLoading } = useAuth()
  const [errorMessage, setErrorMessage] = useState('')

  const form = useForm({
    defaultValues: {
      nomeCompleto: user?.nomeCompleto || '',
      dataNascimento: '',
      cpf: '',
      telefone: user?.telefone || '',
      email: user?.email || '',
    },
    onSubmit: async ({ value }) => {
      setErrorMessage('')
      try {
        await requestPatientLink({
          ...value,
          nomeCompleto: value.nomeCompleto.trim(),
          cpf: formatCpf(value.cpf),
          telefone: value.telefone?.trim() || '',
          email: value.email?.trim() || user?.email || '',
        })
        await navigate({ to: '/Dashboard' })
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : 'Falha ao solicitar vinculo.')
      }
    },
  })

  const handleGoBack = () => {
    navigate({ to: '..' })
  }

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
    <div className="flex flex-1 items-center justify-center bg-linear-to-b from-background to-surface-container-low py-[48px] px-[16px] md:px-[64px]">
      <div className="w-full max-w-[560px]">

        {/* Back Navigation */}
        <button
          type="button"
          onClick={handleGoBack}
          className="group flex items-center gap-[4px] mb-[24px] text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer"
        >
          <ArrowLeft size={20} />
          <span className="text-label-md">Voltar</span>
        </button>

        {/* Form Card */}
        <div className="bg-surface-container-lowest rounded-xl shadow-[0px_12px_32px_rgba(0,0,0,0.08)] border border-outline-variant/30 p-[24px] md:p-[32px]">

          {/* Card Header */}
          <div className="text-center mb-[32px]">
            <div className="inline-flex items-center justify-center w-[64px] h-[64px] bg-primary-fixed rounded-full mb-[16px]">
              <ShieldCheck size={32} className="text-primary" />
            </div>
            <h1 className="font-manrope text-headline-lg text-on-background mb-[8px]">
              Confirmar vínculo como paciente
            </h1>
            <p className="text-body-md text-on-surface-variant max-w-[360px] mx-auto">
              Informe os dados usados no seu cadastro clínico. A confirmação será feita de forma segura, sem exibir dados sensíveis.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
              void form.handleSubmit()
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">

              {/* Field 1: Nome completo (full width) */}
              <form.Field
                name="nomeCompleto"
                validators={{ onChange: nomeCompletoSchema }}
              >
                {(field) => (
                  <div className="md:col-span-2">
                    <Label className="text-label-md text-on-surface-variant mb-[4px] flex items-center gap-[2px]">
                      Nome completo
                      <span className="text-error">*</span>
                    </Label>
                    <Input
                      type="text"
                      placeholder="Como registrado no consultório"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="bg-surface-bright border-outline-variant rounded-lg px-[16px] py-[8px] focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200"
                    />
                    {field.state.meta.errors.length > 0 && (
                      <p className="text-body-sm text-error mt-[4px]">
                        {field.state.meta.errors[0]?.message}
                      </p>
                    )}
                  </div>
                )}
              </form.Field>

              {/* Field 2: Data de nascimento */}
              <form.Field
                name="dataNascimento"
                validators={{ onChange: dataNascimentoSchema }}
              >
                {(field) => (
                  <div>
                    <Label className="text-label-md text-on-surface-variant mb-[4px] flex items-center gap-[2px]">
                      Data de nascimento
                      <span className="text-error">*</span>
                    </Label>
                    <Input
                      type="date"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="bg-surface-bright border-outline-variant rounded-lg px-[16px] py-[8px] focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200"
                    />
                    {field.state.meta.errors.length > 0 && (
                      <p className="text-body-sm text-error mt-[4px]">
                        {field.state.meta.errors[0]?.message}
                      </p>
                    )}
                  </div>
                )}
              </form.Field>

              {/* Field 3: CPF */}
              <form.Field
                name="cpf"
                validators={{ onChange: cpfSchema }}
              >
                {(field) => (
                  <div>
                    <Label className="text-label-md text-on-surface-variant mb-[4px] flex items-center gap-[2px]">
                      CPF
                      <span className="text-error">*</span>
                    </Label>
                    <IMaskInput
                      mask="000.000.000-00"
                      placeholder="000.000.000-00"
                      value={field.state.value}
                      onAccept={(value) => field.handleChange(formatCpf(String(value)))}
                      onBlur={field.handleBlur}
                      className="bg-surface-bright border border-outline-variant rounded-lg px-[16px] py-[8px] focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200"
                    />
                    {field.state.meta.errors.length > 0 && (
                      <p className="text-body-sm text-error mt-[4px]">
                        {field.state.meta.errors[0]?.message}
                      </p>
                    )}
                  </div>
                )}
              </form.Field>

              {/* Field 4: Telefone */}
              <form.Field name="telefone">
                {(field) => (
                  <div>
                    <Label className="text-label-md text-on-surface-variant mb-[4px]">
                      Telefone
                    </Label>
                    <IMaskInput
                      mask="(00) 00000-0000"
                      placeholder="(00) 00000-0000"
                      value={field.state.value}
                      onAccept={(value) => field.handleChange(String(value))}
                      onBlur={field.handleBlur}
                      className="bg-surface-bright border border-outline-variant rounded-lg px-[16px] py-[8px] focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200"
                    />
                  </div>
                )}
              </form.Field>

              {/* Field 5: E-mail (pre-filled) */}
              <form.Field name="email">
                {(field) => (
                  <div>
                    <Label className="text-label-md text-on-surface-variant mb-[4px]">
                      E-mail
                    </Label>
                    <Input
                      type="email"
                      value={field.state.value}
                      readOnly
                      disabled
                      className="bg-surface-container-high border-outline-variant rounded-lg px-[16px] py-[8px] text-on-surface-variant cursor-not-allowed"
                    />
                  </div>
                )}
              </form.Field>
            </div>

            {/* Security Badge */}
            <div className="flex items-start gap-[16px] bg-secondary-container/20 border border-secondary-container/30 p-[16px] rounded-lg mt-[24px]">
              <Shield size={20} className="text-secondary shrink-0 mt-[2px]" />
              <p className="text-body-sm text-on-secondary-container">
                Seus dados são criptografados de ponta a ponta e usados apenas para validação de identidade junto ao sistema clínico.
              </p>
            </div>

            {errorMessage && (
              <div className="mt-[16px] rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {errorMessage}
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={form.state.isSubmitting}
              className="w-full mt-[24px] py-[16px] bg-primary text-on-primary rounded-xl text-body-lg font-semibold shadow-lg hover:shadow-xl hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-[8px]"
            >
              Confirmar vínculo
              <ChevronRight size={20} />
            </Button>
          </form>

          {/* Manual Review Note */}
          <p className="text-body-sm text-on-surface-variant/70 text-center mt-[16px]">
            Se não for possível confirmar automaticamente, sua solicitação poderá ser revisada manualmente.
          </p>
        </div>

        {/* Supporting Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-[32px] opacity-80">
          {/* Card 1: Privacidade Garantida */}
          <div className="flex items-center gap-[16px] p-[16px] bg-white/50 backdrop-blur-sm rounded-lg border border-white">
            <Lock size={24} className="text-primary-container shrink-0" />
            <span className="text-label-md text-on-surface">
              Privacidade Garantida
            </span>
          </div>

          {/* Card 2: Conexão Profissional */}
          <div className="flex items-center gap-[16px] p-[16px] bg-white/50 backdrop-blur-sm rounded-lg border border-white">
            <ShieldCheck size={24} className="text-secondary shrink-0" />
            <span className="text-label-md text-on-surface">
              Conexão Profissional
            </span>
          </div>
        </div>
      </div>
      <GTMedicsLoadingModal isOpen={form.state.isSubmitting} onClose={() => {}} />
    </div>
  )
}
