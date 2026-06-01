import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Mail, ArrowLeft, CheckCircle2, KeyRound } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SquircleButton } from '@/components/ui/SquircleButton'
import { GTMedicsLoadingModal } from '@/components/workspace/GTMedicsLoadingModal'

function emailValidator(value: string) {
  if (!value || value.trim() === '') return 'E-mail é obrigatório'
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(value)) return 'Informe um e-mail válido'
  return undefined
}

export default function EsqueciSenha() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const validationError = emailValidator(email)
    if (validationError) {
      setError(validationError)
      return
    }

    setIsSubmitting(true)
    // TODO: Integrar com API de recuperação de senha
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setEnviado(true)
    setIsSubmitting(false)
  }

  return (
    <div
      className="flex flex-1 items-center justify-center py-12 px-4"
      style={{
        background:
          'radial-gradient(circle at 0% 0%, #d4e3ff 0%, transparent 40%), radial-gradient(circle at 100% 100%, #e8f5e9 0%, transparent 40%), #f9f9ff',
      }}
    >
      <div className="w-full max-w-[440px] bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-[32px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-[32px]">
          <div className="w-[64px] h-[64px] rounded-full bg-primary-fixed flex items-center justify-center mb-[16px]">
            <KeyRound className="text-primary" size={32} />
          </div>
          <h1 className="font-manrope text-headline-md text-on-surface mb-[4px]">
            Recuperar senha
          </h1>
          <p className="text-body-sm text-on-surface-variant">
            Informe seu e-mail para receber o link de redefinição
          </p>
        </div>

        {enviado ? (
          /* Success state */
          <div className="flex flex-col items-center text-center gap-4 py-4">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="font-manrope text-headline-sm font-semibold text-on-surface">
              E-mail enviado!
            </h2>
            <p className="text-body-sm text-on-surface-variant max-w-xs">
              Se houver uma conta associada a{' '}
              <strong className="text-on-surface">{email}</strong>, você receberá
              um link para redefinir sua senha em poucos minutos.
            </p>
            <div className="mt-2 w-full">
              <SquircleButton
                variant="blue"
                size="full"
                label="Voltar para o login"
                onClick={() => (window.location.href = '/login')}
              />
            </div>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[6px]">
              <Label className="text-label-md text-on-surface-variant ml-1">
                E-mail
              </Label>
              <div className="relative group">
                <Mail
                  className="absolute left-[16px] top-1/2 -translate-y-1/2 text-outline transition-colors duration-200 group-focus-within:text-outline"
                  size={20}
                />
                <Input
                  type="email"
                  placeholder="nome@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface-container-low border-outline-variant rounded-lg pl-[48px] pr-[16px] py-[12px] placeholder:text-outline/60 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all duration-200"
                />
              </div>
              {error && (
                <p className="text-body-sm text-error ml-1">{error}</p>
              )}
            </div>

            <SquircleButton
              type="submit"
              variant="blue"
              size="full"
              label={isSubmitting ? 'Enviando...' : 'Enviar link de recuperação'}
              icon={Mail}
              disabled={isSubmitting}
            />

            {/* Back to login */}
            <div className="text-center">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 text-body-sm text-primary font-semibold hover:underline transition-all duration-200"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar para o login
              </Link>
            </div>
          </form>
        )}
      </div>
      <GTMedicsLoadingModal isOpen={isSubmitting} onClose={() => {}} />
    </div>
  )
}
