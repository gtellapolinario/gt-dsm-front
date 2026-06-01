import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import {
  FileText,
  Lock,
  Send,
  ShieldCheck,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useAuth } from '@/context/AuthContext'
import { Navigate, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { IMaskInput } from 'react-imask'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { GTMedicsLoadingModal } from '@/components/workspace/GTMedicsLoadingModal'

/* ── Zod schemas for field-level validation ── */
const nomeSchema = z.string().min(3, 'Nome completo é obrigatório')
const profissaoSchema = z.string().min(1, 'Selecione sua profissão')

/* ── Brazilian states ── */
const estadosBrasileiros = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
]

const profissoes = ['Médico', 'Enfermeiro', 'Psicólogo', 'ACS', 'Outro']

export default function SolicitarAcesso() {
  const navigate = useNavigate()
  const { requestProfessionalAccess, user, isAuthenticated, isLoading } = useAuth()
  const [errorMessage, setErrorMessage] = useState('')

  const form = useForm({
    defaultValues: {
      nomeCompleto: user?.nomeCompleto || '',
      profissao: '',
      telefone: user?.telefone || '',
      conselho: '',
      registro: '',
      ufConselho: '',
      instituicao: '',
      mensagem: '',
    },
    onSubmit: async ({ value }) => {
      setErrorMessage('')
      try {
        await requestProfessionalAccess({
          ...value,
          nomeCompleto: value.nomeCompleto.trim(),
          telefone: value.telefone?.trim() || '',
        })
        await navigate({ to: '/Dashboard' })
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : 'Falha ao solicitar acesso profissional.')
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
    <div className="flex flex-1 items-center justify-center bg-linear-to-b from-background to-surface-container-low py-[48px] px-[16px] md:px-[64px]">
      {/* Two-Column Card */}
      <div className="w-full max-w-[800px] flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-xl border-none">

        {/* ── Left Sidebar ── */}
        <div className="hidden lg:flex lg:w-1/3 bg-linear-to-b from-blue-400 via-sky-400 to-blue-700 p-[32px] flex-col justify-between relative overflow-hidden rounded-l-xl">
          {/* Top content */}
          <div>
            <FileText className="text-on-primary-container mb-[16px]" size={48} strokeWidth={1.5} />
            <h2 className="font-manrope text-headline-lg text-on-primary-container mb-[16px]">
              Área do Profissional
            </h2>
            <p className="text-body-md text-on-primary-container/80">
              Junte-se à nossa rede de cuidado especializado e tenha acesso a ferramentas avançadas de triagem e acompanhamento.
            </p>
          </div>

          {/* Bottom content */}
          <div className="flex items-center gap-[8px] mt-[24px]">
            <Lock size={14} className="text-secondary-fixed" />
            <span className="text-label-sm text-on-primary-container/70 uppercase tracking-widest">
              End-to-End Encrypted
            </span>
          </div>

          {/* Decorative circle */}
          <div className="absolute -bottom-20 -right-20 w-[256px] h-[256px] rounded-full bg-white/10 blur-3xl pointer-events-none" />
        </div>

        {/* ── Right Side — Form ── */}
        <div className="flex-1 p-[24px] md:p-[32px] bg-surface-container-lowest">
          {/* Form header */}
          <div className="mb-[24px]">
            <h1 className="font-manrope text-headline-lg text-primary mb-[4px]">
              Solicitar acesso profissional
            </h1>
            <p className="text-body-md text-on-surface-variant">
              Seu cadastro será enviado para análise. O acesso profissional só será liberado após aprovação.
            </p>
          </div>

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
                validators={{ onChange: nomeSchema }}
              >
                {(field) => (
                  <div className="md:col-span-2">
                    <Label className="text-label-md text-on-surface mb-[4px] flex items-center gap-[2px]">
                      Nome completo
                      <span className="text-error">*</span>
                    </Label>
                    <Input
                      type="text"
                      placeholder="Ex: Dr. Roberto Silva"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="bg-surface-bright border-outline-variant rounded-lg px-[16px] py-[8px] focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    />
                    {field.state.meta.errors.length > 0 && (
                      <p className="text-body-sm text-error mt-[4px]">
                        {field.state.meta.errors[0]?.message}
                      </p>
                    )}
                  </div>
                )}
              </form.Field>

              {/* Field 2: Profissão */}
              <form.Field
                name="profissao"
                validators={{ onChange: profissaoSchema }}
              >
                {(field) => (
                  <div>
                    <Label className="text-label-md text-on-surface mb-[4px] flex items-center gap-[2px]">
                      Profissão
                      <span className="text-error">*</span>
                    </Label>
                    <Select
                      value={field.state.value}
                      onValueChange={(value) => field.handleChange(value)}
                    >
                      <SelectTrigger className="bg-surface-bright border-outline-variant rounded-lg px-[16px] py-[8px] w-full focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        {profissoes.map((p) => (
                          <SelectItem key={p} value={p}>
                            {p}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {field.state.meta.errors.length > 0 && (
                      <p className="text-body-sm text-error mt-[4px]">
                        {field.state.meta.errors[0]?.message}
                      </p>
                    )}
                  </div>
                )}
              </form.Field>

              {/* Field 3: Telefone */}
              <form.Field name="telefone">
                {(field) => (
                  <div>
                    <Label className="text-label-md text-on-surface mb-[4px]">
                      Telefone
                    </Label>
                    <IMaskInput
                      mask="(00) 00000-0000"
                      placeholder="(00) 00000-0000"
                      value={field.state.value}
                      onAccept={(value) => field.handleChange(String(value))}
                      onBlur={field.handleBlur}
                      className="bg-surface-bright border border-outline-variant rounded-lg px-[16px] py-[8px] focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    />
                  </div>
                )}
              </form.Field>

              {/* Field 4: Conselho profissional */}
              <form.Field name="conselho">
                {(field) => (
                  <div>
                    <Label className="text-label-md text-on-surface mb-[4px]">
                      Conselho profissional
                    </Label>
                    <Input
                      type="text"
                      placeholder="CRM, CRP, etc."
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="bg-surface-bright border-outline-variant rounded-lg px-[16px] py-[8px] focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    />
                  </div>
                )}
              </form.Field>

              {/* Field 5: Número do registro */}
              <form.Field name="registro">
                {(field) => (
                  <div>
                    <Label className="text-label-md text-on-surface mb-[4px]">
                      Número do registro
                    </Label>
                    <Input
                      type="text"
                      placeholder="000000"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="bg-surface-bright border-outline-variant rounded-lg px-[16px] py-[8px] focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    />
                  </div>
                )}
              </form.Field>

              {/* Field 6: UF do conselho */}
              <form.Field name="ufConselho">
                {(field) => (
                  <div>
                    <Label className="text-label-md text-on-surface mb-[4px]">
                      UF do conselho
                    </Label>
                    <Select
                      value={field.state.value}
                      onValueChange={(value) => field.handleChange(value)}
                    >
                      <SelectTrigger className="bg-surface-bright border-outline-variant rounded-lg px-[16px] py-[8px] w-full focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200">
                        <SelectValue placeholder="UF" />
                      </SelectTrigger>
                      <SelectContent>
                        {estadosBrasileiros.map((uf) => (
                          <SelectItem key={uf} value={uf}>
                            {uf}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </form.Field>

              {/* Field 7: Instituição / serviço */}
              <form.Field name="instituicao">
                {(field) => (
                  <div>
                    <Label className="text-label-md text-on-surface mb-[4px]">
                      Instituição / serviço
                    </Label>
                    <Input
                      type="text"
                      placeholder="Nome do hospital ou clínica"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="bg-surface-bright border-outline-variant rounded-lg px-[16px] py-[8px] focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    />
                  </div>
                )}
              </form.Field>

              {/* Field 8: Mensagem opcional (full width) */}
              <form.Field name="mensagem">
                {(field) => (
                  <div className="md:col-span-2">
                    <Label className="text-label-md text-on-surface mb-[4px]">
                      Mensagem opcional
                    </Label>
                    <Textarea
                      placeholder="Fale brevemente sobre sua atuação..."
                      rows={3}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="bg-surface-bright border-outline-variant rounded-lg px-[16px] py-[8px] focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 resize-none"
                    />
                  </div>
                )}
              </form.Field>

              {/* Submit button */}
              <div className="md:col-span-2">
                {errorMessage && (
                  <div className="mb-[16px] rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    {errorMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={form.state.isSubmitting}
                  className="w-full py-[16px] bg-primary text-on-primary rounded-lg text-body-lg font-semibold hover:brightness-110 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-[8px]"
                >
                  <Send size={20} />
                  Enviar solicitação
                </Button>
              </div>
            </div>
          </form>

          {/* LGPD Security Notice */}
          <div className="flex items-start gap-[8px] bg-secondary-container/20 p-[16px] rounded-lg mt-[16px]">
            <ShieldCheck size={20} className="text-secondary shrink-0 mt-[2px]" />
            <p className="text-body-sm text-on-secondary-container">
              Suas informações são tratadas com sigilo absoluto de acordo com as normas da LGPD e regulamentações de saúde.
            </p>
          </div>
        </div>
      </div>
      <GTMedicsLoadingModal isOpen={form.state.isSubmitting} onClose={() => {}} />
    </div>
  )
}
