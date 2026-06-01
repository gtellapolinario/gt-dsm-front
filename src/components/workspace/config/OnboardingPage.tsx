import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { z } from "zod/v4";

import { useAuth } from "@/context/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  User,
  Stethoscope,
  HeartPulse,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

import { ROLES } from "@/domain/schemas";

const crmSchema = z.string().regex(/^CRM-[A-Z]{2}\s?\d+$/, "CRM inválido");

const ROLE_OPTIONS = [
  {
    role: ROLES.COMMON,
    title: "Quero fazer escalas para mim mesmo",
    description: "Acompanho minha saúde mental sozinho",
    icon: User,
  },
  {
    role: ROLES.PATIENT,
    title: "Tenho um profissional que me acompanha",
    description: "Já recebi convite ou tenho profissional",
    icon: HeartPulse,
  },
  {
    role: ROLES.PROFESSIONAL,
    title: "Sou profissional de saúde",
    description: "Atendo pacientes e aplico escalas",
    icon: Stethoscope,
  },
];

function parseCrm(crm: string) {
  const match = crm.match(/^CRM-([A-Z]{2})\s?(\d+)$/);
  if (!match) return null;
  return { conselho: "CRM", ufConselho: match[1], registro: match[2] };
}

export default function OnboardingPage() {
  const { user, completeCommonProfile, requestPatientLink, requestProfessionalAccess } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedRole, setSelectedRole] = useState<number | null>(null);
  const [professionalEmail, setProfessionalEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [crm, setCrm] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [crmError, setCrmError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContinue = () => {
    if (selectedRole === null) return;
    if (selectedRole === ROLES.COMMON) {
      handleFinish();
      return;
    }
    setStep(2);
  };

  const handleFinish = async () => {
    if (selectedRole === null) return;

    if (selectedRole === ROLES.PROFESSIONAL) {
      const result = crmSchema.safeParse(crm);
      if (!result.success) {
        setCrmError("CRM inválido. Formato esperado: CRM-XX 12345");
        return;
      }
    }

    setIsSubmitting(true);
    try {
      if (selectedRole === ROLES.COMMON) {
        await completeCommonProfile({ nomeCompleto: user?.nomeCompleto ?? "" });
      } else if (selectedRole === ROLES.PATIENT) {
        await requestPatientLink({
          nomeCompleto: user?.nomeCompleto ?? "",
          dataNascimento: dataNascimento || new Date().toISOString().split("T")[0],
          cpf: cpf || "00000000000",
          email: professionalEmail.trim() || undefined,
        });
      } else if (selectedRole === ROLES.PROFESSIONAL) {
        const parsed = parseCrm(crm.trim());
        await requestProfessionalAccess({
          nomeCompleto: user?.nomeCompleto ?? "",
          profissao: specialty.trim() || "Profissional de Saúde",
          conselho: parsed?.conselho,
          registro: parsed?.registro,
          ufConselho: parsed?.ufConselho,
        });
      }

      toast.success("Perfil configurado com sucesso!");
      navigate({ to: "/Dashboard" });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Erro ao finalizar onboarding";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate({ to: "/login" });
  };

  const handleBack = () => {
    setStep(1);
    setCrmError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen !bg-slate-50 px-4 py-8">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-xl font-bold text-slate-900">
            Bem-vindo. Como você usará a aplicação?
          </CardTitle>
          <CardDescription className="text-slate-500">
            Escolha o perfil que melhor descreve seu uso
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 pt-4">
          {step === 1 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ROLE_OPTIONS.map((option) => {
                  const Icon = option.icon;
                  const isSelected = selectedRole === option.role;
                  return (
                    <button
                      key={option.role}
                      type="button"
                      onClick={() => setSelectedRole(option.role)}
                      className={cn(
                        "relative flex flex-col items-center gap-3 rounded-xl border p-5 text-left transition-all",
                        isSelected
                          ? "border-blue-500 bg-blue-50/60 ring-1 ring-blue-500"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                      )}
                    >
                      <div
                        className={cn(
                          "rounded-full p-3",
                          isSelected ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-500"
                        )}
                      >
                        <Icon className="size-6" />
                      </div>
                      <div className="text-center">
                        <p
                          className={cn(
                            "text-sm font-semibold",
                            isSelected ? "text-blue-900" : "text-slate-900"
                          )}
                        >
                          {option.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                          {option.description}
                        </p>
                      </div>
                      <span
                        className={cn(
                          "absolute top-3 right-3 size-4 rounded-full border",
                          isSelected
                            ? "border-blue-500 bg-blue-500"
                            : "border-slate-300 bg-white"
                        )}
                      >
                        {isSelected && (
                          <svg viewBox="0 0 14 14" className="size-3.5 text-white m-px">
                            <path
                              d="M2 7l4 4 6-6"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                >
                  <ChevronLeft className="size-4 mr-1.5" />
                  Cancelar
                </Button>
                <Button
                  type="button"
                  onClick={handleContinue}
                  disabled={selectedRole === null}
                >
                  Continuar
                  <ArrowRight className="size-4 ml-1.5" />
                </Button>
              </div>
            </>
          )}

          {step === 2 && selectedRole === ROLES.PATIENT && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="dataNascimento">Data de nascimento</Label>
                <Input
                  id="dataNascimento"
                  type="date"
                  value={dataNascimento}
                  onChange={(e) => setDataNascimento(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cpf">CPF</Label>
                <Input
                  id="cpf"
                  placeholder="000.000.000-00"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="professionalEmail">Email do profissional (opcional)</Label>
                <Input
                  id="professionalEmail"
                  type="email"
                  placeholder="profissional@exemplo.com"
                  value={professionalEmail}
                  onChange={(e) => setProfessionalEmail(e.target.value)}
                />
                <p className="text-xs text-slate-500">
                  Se preencher, enviaremos uma solicitação de vínculo para o profissional.
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <Button type="button" variant="outline" onClick={handleBack}>
                  <ChevronLeft className="size-4 mr-1.5" />
                  Voltar
                </Button>
                <Button type="button" onClick={handleFinish} disabled={isSubmitting}>
                  {isSubmitting ? "Finalizando..." : "Finalizar"}
                </Button>
              </div>
            </div>
          )}

          {step === 2 && selectedRole === ROLES.PROFESSIONAL && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="crm">CRM</Label>
                <Input
                  id="crm"
                  placeholder="CRM-SP 12345"
                  value={crm}
                  onChange={(e) => {
                    setCrm(e.target.value);
                    setCrmError("");
                  }}
                  className={cn(crmError && "border-rose-500 focus-visible:ring-rose-500")}
                />
                {crmError && (
                  <p className="text-xs text-rose-600">{crmError}</p>
                )}
                <p className="text-xs text-slate-500">
                  Formato: CRM-XX 12345 (ex: CRM-SP 12345)
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialty">Especialidade</Label>
                <Input
                  id="specialty"
                  placeholder="Psiquiatria, Psicologia..."
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <Button type="button" variant="outline" onClick={handleBack}>
                  <ChevronLeft className="size-4 mr-1.5" />
                  Voltar
                </Button>
                <Button type="button" onClick={handleFinish} disabled={isSubmitting}>
                  {isSubmitting ? "Finalizando..." : "Finalizar"}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
