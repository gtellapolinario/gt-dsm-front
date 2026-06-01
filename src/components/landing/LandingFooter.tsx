import { Link } from '@tanstack/react-router'

export const EmailLink = () => {
  const email = 'gtmedics@gtmedics.com'

  return (
    <a
      href={`mailto:${email}`}
      className="p-2 rounded-xl shadow-lg hover:bg-green-200/80 text-body-sm text-gray-100/80 text-shadow-xs text-on-surface-variant underline decoration-primary underline-offset-4 transition-colors duration-200 hover:text-primary"
    >
      Contato
    </a>
  )
}

export function LandingFooter() {
  return (
    <footer className="w-full !p-0 border-none bg-gradient-to-r from-blue-800 via-sky-600 to-blue-900 shadow-sm">
      <div className="mx-4 px-4 md:mx-12 md:px-12 flex max-w-content flex-col md:flex-row items-center md:items-center justify-between gap-[24px] py-2">
        {/* Logo + Copyright */}
        <div className="flex flex-col items-center md:items-start gap-[8px]">
          <Link
            to="/"
            className="font-manrope text-gray-100/80 text-xl font-bold text-shadow-xs tracking-tight"
          >
            GT-Medics
          </Link>
          <p className="text-body-sm text-gray-100/80 text-shadow-xs text-on-surface-variant">
            &copy; 2026 GT-Medics Escalas ®. Todos os direitos reservados.
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-[24px]">
          <a
            href="/termos-de-uso"
            className="p-2 rounded-xl shadow-lg hover:bg-green-200/80 text-body-sm text-gray-100/80 text-shadow-xs text-on-surface-variant underline decoration-primary underline-offset-4 transition-colors duration-200 hover:text-primary"
          >
            Termos de Uso
          </a>
          <a
            href="/politica-de-privacidade"
            className="p-2 rounded-xl shadow-lg hover:bg-green-200/80 text-body-sm text-gray-100/80 text-shadow-xs text-on-surface-variant underline decoration-primary underline-offset-4 transition-colors duration-200 hover:text-primary"
          >
            Privacidade
          </a>

          <EmailLink />

          <a
            href="/sobre"
            className="p-2 rounded-xl shadow-lg hover:bg-green-200/80 text-body-sm text-gray-100/80 text-shadow-xs text-on-surface-variant underline decoration-primary underline-offset-4 transition-colors duration-200 hover:text-primary"
          >
            Sobre
          </a>
        </div>
      </div>
    </footer>
  )
}
