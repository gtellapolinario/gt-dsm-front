import { Brain } from 'lucide-react'
import type { ReactNode } from 'react'

export type GTMedicsLoadingModalProps = {
  /** Controla visibilidade (alias: isOpen ou open) */
  open?: boolean;
  isOpen?: boolean;
  /** Texto customizado ou array de letras animadas */
  message?: string;
  /** Callback quando solicitado fechar */
  onClose?: () => void;
  /** Ícone central — JSX element */
  icon?: ReactNode;
};

const letters = [
  { char: "G", delay: 0,   className: "text-slate-600" },
  { char: "T", delay: 90,  className: "text-slate-600" },
  { char: "-", delay: 180, className: "text-slate-400" },
  { char: "M", delay: 270, className: "text-slate-600" },
  { char: "E", delay: 360, className: "text-slate-600" },
  { char: "D", delay: 450, className: "text-slate-600" },
  { char: "I", delay: 540, className: "text-slate-600" },
  { char: "C", delay: 630, className: "text-slate-600" },
  {
    char: "S",
    delay: 720,
    className: "text-transparent bg-linear-to-r from-sky-600 to-emerald-500 bg-clip-text",
  },
];

export function GTMedicsLoadingModal({
  open,
  isOpen,
  message,
  onClose,
  icon = <Brain className="text-[22px] text-emerald-700" />,
}: GTMedicsLoadingModalProps) {
  const visible = open ?? isOpen ?? false;

  if (!visible) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-9999 flex items-center justify-center pointer-events-none"
        role="dialog"
        aria-modal="true"
        aria-label="Carregando GT-MEDICS"
        onClick={onClose}
      >
        <div className="flex h-[280px] w-[280px] items-center justify-center rounded-xl bg-radial from-emerald-100 via-blue-100 to-sky-100">
          <div className="relative flex h-[220px] w-[220px] items-center justify-center">
            <div className="absolute h-36 w-36 rounded-full" />

            <div className="relative flex h-24 w-24 items-center justify-center rounded-full shadow-xl">
              <div className="absolute inset-0 animate-spin rounded-full border-[2.5px] border-transparent border-t-sky-500/70 border-l-emerald-400/70 shadow-xl shadow-amber-50" />

              <div className="flex h-16 w-16 items-center justify-center">
                {icon}
              </div>
            </div>

            <div className="gtmedics-loading-text absolute top-[188px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[13px] font-semibold tracking-[0.26em] text-slate-600">
              {message
                ? message.split("").map((char, i) => (
                    <span
                      key={`msg-${i}`}
                      className="gtmedics-loading-char inline-block opacity-0 text-slate-600"
                      style={{ "--gt-d": `${i * 50}ms` } as React.CSSProperties}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))
                : letters.map((item, index) => (
                    <span
                      key={`lt-${item.char}-${index}`}
                      className={`gtmedics-loading-char inline-block opacity-0 ${item.className}`}
                      style={{ "--gt-d": `${item.delay}ms` } as React.CSSProperties}
                    >
                      {item.char}
                    </span>
                  ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .gtmedics-loading-char {
          animation: gtCharLoop 1.3s cubic-bezier(.22,1,.36,1) infinite;
          animation-delay: var(--gt-d);
        }

        @keyframes gtCharLoop {
          0% {
            opacity: 0;
            transform: translateY(10px);
            filter: blur(5px);
          }
          18% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
          70% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
          100% {
            opacity: 0;
            transform: translateY(10px);
            filter: blur(5px);
          }
        }
      `}</style>
    </>
  );
}
