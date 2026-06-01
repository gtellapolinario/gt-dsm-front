import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import { User, Mail, Lock, ShieldCheck, Info, Shield, UserPlus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SquircleButton } from '@/components/ui/SquircleButton'
import { LazyBackground } from '@/components/ui/LazyBackground'
import { useAuth } from '@/context/AuthContext'
import { getPostAuthPath } from '@/lib/authClient'
import { requestGoogleIdToken, renderGoogleButton } from '@/lib/googleIdentity'
import { GTMedicsLoadingModal } from '@/components/workspace/GTMedicsLoadingModal'

/* ── Google G icon SVG ── */
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  )
}

/* ── Validation helpers ── */
function nomeValidator(value: string) {
  if (!value || value.trim() === '') return 'Nome completo é obrigatório'
  if (value.trim().length < 2) return 'Nome deve ter no mínimo 2 caracteres'
  return undefined
}

function emailValidator(value: string) {
  if (!value || value.trim() === '') return 'E-mail é obrigatório'
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(value)) return 'Informe um e-mail válido'
  return undefined
}

function passwordValidator(value: string) {
  if (!value || value === '') return 'Senha é obrigatória'
  if (value.length < 8) return 'Senha deve ter no mínimo 8 caracteres'
  if (!/\d/.test(value)) return 'Senha deve conter pelo menos um número'
  return undefined
}

function confirmPasswordValidator(value: string, passwordValue: string) {
  if (!value || value === '') return 'Confirmação de senha é obrigatória'
  if (value !== passwordValue) return 'As senhas não coincidem'
  return undefined
}

export default function CriarConta() {
  const navigate = useNavigate()
  const { register, loginWithGoogleToken } = useAuth()
  const [passwordValue, setPasswordValue] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [showGoogleBtn, setShowGoogleBtn] = useState(false)
  const googleBtnRef = useRef<HTMLDivElement>(null)

  const form = useForm({
    defaultValues: {
      nomeCompleto: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: async ({ value }) => {
      setErrorMessage('')
      setIsSubmitting(true)
      try {
        const session = await register({
          nomeCompleto: value.nomeCompleto,
          email: value.email,
          password: value.password,
          telefone: '',
        })
        await navigate({ to: getPostAuthPath(session.user) })
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : 'Falha ao criar conta.')
      } finally {
        setIsSubmitting(false)
      }
    },
  })

  const handleGoogleLogin = async () => {
    setErrorMessage('')
    setIsSubmitting(true)
    try {
      const googleToken = await requestGoogleIdToken()
      const session = await loginWithGoogleToken(googleToken)
      await navigate({ to: getPostAuthPath(session.user) })
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Falha ao continuar com Google.'
      if (msg.includes('GOOGLE_ONE_TAP_BLOCKED')) {
        setIsSubmitting(false)
        setShowGoogleBtn(true)
        return
      }
      setErrorMessage(msg)
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (!showGoogleBtn || !googleBtnRef.current) return
    let cancelled = false
    renderGoogleButton(googleBtnRef.current, { width: '300' })
      .then(async (token) => {
        if (cancelled) return
        setIsSubmitting(true)
        try {
          const session = await loginWithGoogleToken(token)
          await navigate({ to: getPostAuthPath(session.user) })
        } catch (error) {
          setErrorMessage(error instanceof Error ? error.message : 'Falha ao continuar com Google.')
        } finally {
          setIsSubmitting(false)
        }
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [showGoogleBtn])

  return (
    <LazyBackground
      src="https://firebasestorage.googleapis.com/v0/b/gt-medic-98c72.firebasestorage.app/o/bonzai.jpg?alt=media&token=f26fcb5c-d60c-4d22-a74a-feb7d3855d3c"
      overlayClassName="opacity-50"
      className="flex flex-1 items-center justify-center py-12 px-4"
    >
      {/* ── Sign-up Card ── */}
      <div className="w-full max-w-[480px] bg-linear-to-b from-sky-100/70 via-slate-100/70 to-indigo-100/70 rounded-xl shadow-sm border border-outline-variant/30 p-5 md:p-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-[32px]">
          <div className="flex flex-row items-center gap-3">
            <img
              src="/icons/mental2.svg"
              alt="Ícone"
              className="w-14 h-14 md:w-20 md:h-20 bg-gray-100/80 p-2 rounded-full shadow-xl shadow-slate-00"
            />
          </div>
          <h1 className="font-manrope text-headline-md text-slate-900/80 text-shadow-sm mb-[4px]">
            GT-Medics Escalas
          </h1>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
          className="flex flex-col items-center justify-center gap-[24px]"
        >
          <div className="w-full flex flex-col text-slate-900/80 gap-y-6">
            {/* Nome completo */}
            <form.Field
              name="nomeCompleto"
              validators={{
                onChange: ({ value }) => nomeValidator(value),
              }}
            >
              {(field) => (
                <div className="flex flex-col gap-[6px]">
                  <Label className="text-label-md text-slate-900/80 text-shadow-sm ml-1">
                    Nome completo
                  </Label>
                  <div className="relative group">
                    <User
                      className="absolute left-[16px] top-1/2 -translate-y-1/2 text-outline transition-colors duration-200 group-focus-within:text-primary"
                      size={20}
                    />
                    <Input
                      type="text"
                      placeholder="Como deseja ser chamado?"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      className="w-full bg-surface-container-low border-outline-variant rounded-lg pl-[48px] pr-[16px] py-[12px] placeholder:text-outline/60 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all duration-200"
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

            {/* E-mail */}
            <form.Field
              name="email"
              validators={{
                onChange: ({ value }) => emailValidator(value),
              }}
            >
              {(field) => (
                <div className="flex flex-col gap-6">
                  <Label className="text-label-md text-slate-900/80 text-shadow-sm ml-1">
                    E-mail
                  </Label>
                  <div className="relative group">
                    <Mail
                      className="absolute left-[16px] top-1/2 -translate-y-1/2 text-outline transition-colors duration-200 group-focus-within:text-primary"
                      size={20}
                    />
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      className="w-full bg-surface-container-low border-outline-variant rounded-lg pl-[48px] pr-[16px] py-[12px] placeholder:text-outline/60 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all duration-200"
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

            {/* Senha */}
            <form.Field
              name="password"
              validators={{
                onChange: ({ value }) => passwordValidator(value),
              }}
            >
              {(field) => (
                <div className="flex flex-col gap-[6px]">
                  <Label className="text-label-md text-slate-900/80 text-shadow-sm ml-1">
                    Senha
                  </Label>
                  <div className="relative group">
                    <Lock
                      className="absolute left-[16px] top-1/2 -translate-y-1/2 text-outline transition-colors duration-200 group-focus-within:text-primary"
                      size={20}
                    />
                    <Input
                      type="password"
                      placeholder="Crie uma senha forte"
                      value={field.state.value}
                      onChange={(e) => {
                        field.handleChange(e.target.value)
                        setPasswordValue(e.target.value)
                      }}
                      onBlur={field.handleBlur}
                      className="w-full bg-surface-container-low border-outline-variant rounded-lg pl-[48px] pr-[16px] py-[12px] placeholder:text-outline/60 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all duration-200"
                    />
                  </div>
                  {field.state.meta.errors?.[0] && (
                    <p className="text-body-sm text-error ml-1">
                      {field.state.meta.errors[0]}
                    </p>
                  )}
                  {/* Password hint */}
                  <div className="flex items-center gap-[4px] mt-[4px]">
                    <Info className="text-tertiary shrink-0" size={16} />
                    <span className="text-label-sm text-tertiary">
                      Mínimo de 8 caracteres, incluindo números e símbolos.
                    </span>
                  </div>
                </div>
              )}
            </form.Field>

            {/* Confirmar senha */}
            <form.Field
              name="confirmPassword"
              validators={{
                onChange: ({ value }) =>
                  confirmPasswordValidator(value, passwordValue),
              }}
            >
              {(field) => (
                <div className="flex flex-col gap-[6px]">
                  <Label className="text-label-md text-slate-900/80 text-shadow-sm ml-1">
                    Confirmar senha
                  </Label>
                  <div className="relative group">
                    <ShieldCheck
                      className="absolute left-[16px] top-1/2 -translate-y-1/2 text-outline transition-colors duration-200 group-focus-within:text-primary"
                      size={20}
                    />
                    <Input
                      type="password"
                      placeholder="Repita sua senha"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      className="w-full bg-surface-container-low border-outline-variant rounded-lg pl-[48px] pr-[16px] py-[12px] placeholder:text-outline/60 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all duration-200"
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
          </div>

          {/* Submit Button */}
          <SquircleButton
            type="submit"
            variant="blue"
            size="mini"
            fontWeight={700}
            label={isSubmitting ? 'Criando conta...' : 'Criar conta gratuita'}
            icon={UserPlus}
            disabled={isSubmitting}
            className="mt-2 items-center justify-center"
          />
        </form>

        {errorMessage && (
          <div className="mt-[16px] rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {errorMessage}
          </div>
        )}

        {/* Divider */}
        <div className="relative flex items-center my-6 md:my-8">
          <div className="flex-grow border-t border-outline-variant" />
          <span className="mx-[16px] text-label-sm text-on-surface-variant uppercase tracking-widest">
            ou
          </span>
          <div className="flex-grow border-t border-outline-variant" />
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          {!showGoogleBtn && (
            <SquircleButton
              type="button"
              variant="white"
              size="mini"
              fontWeight={700}
              label="Continuar com Google"
              icon={GoogleIcon}
              disabled={isSubmitting}
              onClick={handleGoogleLogin}
            />
          )}
          {showGoogleBtn && (
            <div className="flex flex-col items-center gap-2">
              <div ref={googleBtnRef} />
              <button
                type="button"
                onClick={() => { setShowGoogleBtn(false) }}
                className="text-xs text-muted-foreground hover:underline"
              >
                Voltar
              </button>
            </div>
          )}
        </div>

        {/* Privacy & Security Card */}
        <div className="mt-[24px] bg-surface-container-low rounded-lg p-[16px] flex items-start gap-[16px]">
          <div className="flex gap-4">

            <div className="p-2 bg-gray-50 rounded-full shadow-xl">
              <Shield className="text-slate-800/80 shrink-0 mt-0.5" size={20} />
            </div>

            <div>
              <p className="text-label-md font-semibold text-slate-800/80">
                Criptografia de ponta a ponta
              </p>
            </div>

          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-[24px] pt-[16px] border-t border-outline-variant/30 text-center">
          <span className="text-body-sm text-on-surface-variant">
            Já tem uma conta?{' '}
          </span>
            <Link
              to="/login"
              className="text-body-sm text-primary font-semibold hover:underline transition-all duration-200 ml-[4px]"
            >
              Fazer login
            </Link>
          </div>
        </div>
      <GTMedicsLoadingModal isOpen={isSubmitting} onClose={() => {}} />
    </LazyBackground>
  )
}
