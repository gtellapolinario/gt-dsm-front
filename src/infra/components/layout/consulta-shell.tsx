import React from "react";

interface ConsultaShellProps {
  titulo: string;
  subtitulo?: string;
  onPrint?: () => void;
  onReset?: () => void;
  acoes?: React.ReactNode;
  children: React.ReactNode;
}

export const ConsultaShell: React.FC<ConsultaShellProps> = ({
  titulo,
  subtitulo,
  onReset,
  acoes,
  children,
}) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-6 font-sans">
      <header className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            {titulo}
          </h1>
          {subtitulo && <p className="text-xs text-slate-400 mt-1">{subtitulo}</p>}
        </div>
        <div className="flex items-center gap-2">
          {onReset && (
            <button
              onClick={onReset}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-all cursor-pointer"
            >
              Resetar
            </button>
          )}
          {acoes}
        </div>
      </header>
      <main className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-6">
        {children}
      </main>
    </div>
  );
};
