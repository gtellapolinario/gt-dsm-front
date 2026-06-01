// ═══════════════════════════════════════════════════════════════════════════
// Zustand Store — Estado Global da Consulta
// Compartilha identificação do paciente e dados entre módulos
// ═══════════════════════════════════════════════════════════════════════════

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IdentificacaoPaciente {
  paciente: string;
  dataNascimento: string;
  sexo: string;
  escolaridade: string;
  ocupacao: string;
  queixa: string;
}

export interface ConsultaState {
  // Identificação do paciente (compartilhada entre todos os módulos)
  identificacao: IdentificacaoPaciente;
  setIdentificacao: (identificacao: IdentificacaoPaciente) => void;
  setIdentificacaoField: (field: keyof IdentificacaoPaciente, value: string) => void;

  // Módulo atualmente ativo
  moduloAtual: string | null;
  setModuloAtual: (id: string | null) => void;

  // Payload da última consulta (para exportação/PDF)
  ultimoPayload: string | null;
  setUltimoPayload: (payload: string | null) => void;

  // Flag: dados foram modificados desde último salvamento
  dirty: boolean;
  setDirty: (v: boolean) => void;

  // Reset completo
  reset: () => void;
}

const initialIdentificacao: IdentificacaoPaciente = {
  paciente: "",
  dataNascimento: "",
  sexo: "",
  escolaridade: "",
  ocupacao: "",
  queixa: "",
};

export const useConsultaStore = create<ConsultaState>()(
  persist(
    (set) => ({
      identificacao: { ...initialIdentificacao },
      setIdentificacao: (identificacao) =>
        set({ identificacao, dirty: true }),
      setIdentificacaoField: (field, value) =>
        set((state) => ({
          identificacao: { ...state.identificacao, [field]: value },
          dirty: true,
        })),

      moduloAtual: null,
      setModuloAtual: (moduloAtual) => set({ moduloAtual }),

      ultimoPayload: null,
      setUltimoPayload: (ultimoPayload) => set({ ultimoPayload }),

      dirty: false,
      setDirty: (dirty) => set({ dirty }),

      reset: () =>
        set({
          identificacao: { ...initialIdentificacao },
          ultimoPayload: null,
          dirty: false,
        }),
    }),
    {
      name: "gtmedics-consulta",
      partialize: (state) => ({
        identificacao: state.identificacao,
        moduloAtual: state.moduloAtual,
        ultimoPayload: state.ultimoPayload,
      }),
    }
  )
);
