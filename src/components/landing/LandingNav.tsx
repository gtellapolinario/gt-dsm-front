// src/components/landing/LandingNav.tsx
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { SquircleButton } from "@/components/ui/SquircleButton";
import { useState } from "react";

export function LandingNav() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="shadow-xl shadow-slate-400 flex items-center justify-between px-24 py-7 border-none bg-linear-to-b from-blue-950 to-orange-950 sticky top-0 z-50">

      <nav className="hidden md:flex gap-8 text-sm text-text-2">
        {/* Logo */}
        <div className="ml-24 px-8 flex flex-row items-center gap-2 md:gap-3">
          <img
            src="/src/assets/icon/logo.svg"
            alt="Ícone"
            className="w-10 h-10 md:w-20 md:h-20 bg-gray-100/80 p-1 md:p-2 rounded-full shadow-xl"
          />
          <Link
            to="/"
            className="font-manrope text-lg md:text-4xl font-bold text-shadow-sm text-shadow-blue-700  text-amber-100/80 tracking-tight"
          >
            GT-Medics - Consultas Estruturadas
          </Link>
        </div>

      </nav>
      <div className="flex items-center gap-2">
        {/* Desktop buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <SquircleButton
            variant="blue"
            size="mini"
            fontWeight={600}
            label="Login"
            onClick={() => navigate({ to: '/login' })}
          />
          <SquircleButton
            variant="teal"
            size="mini"
            fontWeight={600}
            label="Criar conta"
            onClick={() => navigate({ to: '/criar-conta' })}
          />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-md text-amber-100/80 hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu className="w-6 h-6" />
        </button>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute inset-y-0 right-0 w-80 bg-white p-6 shadow-2xl">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-md text-slate-900 hover:bg-slate-100"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
              <nav className="flex flex-col gap-4 mt-4">
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 px-3 rounded-md text-slate-900 hover:bg-blue-50"
                >
                  Entrar
                </Link>
                <Link
                  to="/criar-conta"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 px-3 rounded-md text-slate-900 hover:bg-teal-50"
                >
                  Criar conta
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
