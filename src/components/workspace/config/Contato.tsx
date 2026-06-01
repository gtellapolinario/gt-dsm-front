import { useForm } from "@tanstack/react-form";
import { CheckCircle2, Loader2, Mail, MessageSquare, Send, User } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LazyBackground } from "@/components/ui/LazyBackground";
import { SquircleButton } from "@/components/ui/SquircleButton";
import { Textarea } from "@/components/ui/textarea";

import { sendContactMessage } from "@/lib/apiClient";
import { toast } from "sonner";

/* ============================================================
   Schema
============================================================ */
const ContactSchema = z.object({
  nomeCompleto: z.string().min(2, "Digite seu nome completo.").max(120, "Máximo de 120 caracteres."),
  email: z.string().min(1, "E-mail obrigatório.").email("E-mail inválido."),
  mensagem: z.string().min(5, "Mensagem muito curta.").max(2000, "Máximo de 2000 caracteres."),
});

type ContactValues = z.infer<typeof ContactSchema>;

/* ============================================================
   Component
============================================================ */
export default function Contato() {
  const [enviado, setEnviado] = useState(false);

  const form = useForm({
    defaultValues: {
      nomeCompleto: "",
      email: "",
      mensagem: "",
    } as ContactValues,
    validators: { onChange: ContactSchema },
    onSubmit: async ({ value }) => {
      try {
        await sendContactMessage(value);
        setEnviado(true);
        toast.success("Mensagem enviada com sucesso!");
      } catch (err: any) {
        toast.error(err?.message || "Erro ao enviar mensagem. Tente novamente.");
      }
    },
  });

  const isSubmitting = form.state.isSubmitting;

  return (
    <LazyBackground
      src="https://firebasestorage.googleapis.com/v0/b/gt-medic-98c72.firebasestorage.app/o/bird.jpg?alt=media&token=0869c5a4-badf-49f7-85cf-2673243a04f0"
      overlayClassName="opacity-50"
      className="flex flex-col text-on-surface"
    >
      <div className="flex items-center justify-center">
        <div className="max-w-4xl px-4 sm:px-6 gap-y-36">
          <Card className="mt-6 mb-8 md:mt-16 md:mb-20 border-outline-variant/60 bg-surface/80 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8">
              <CardHeader className="flex items-center gap-3 pb-0">
                <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 mb-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold font-manrope text-on-surface">
                  Fale conosco
                </CardTitle>
              </CardHeader>
              <CardDescription className="mt-4 text-lg text-on-surface-variant max-w-xl mx-auto">
                Dúvidas ou sugestões? Fale conosco.
              </CardDescription>

              {enviado ? (
                <div className="flex flex-col items-center text-center gap-4 py-8">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="font-manrope text-headline-md font-semibold text-on-surface">
                    Mensagem enviada!
                  </h2>
                  <p className="text-body-md text-on-surface-variant max-w-sm">
                    Obrigado pelo contato. Nossa equipe responderá em breve.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                  }}
                  className="flex flex-col gap-6"
                >
                  {/* Nome */}
                  <form.Field name="nomeCompleto">
                    {(field) => {
                      const errs = field.state.meta.errors;
                      const hasError = field.state.meta.isTouched && errs.length > 0;
                      return (
                        <div className="flex flex-col gap-2">
                          <Label
                            htmlFor={field.name}
                            className="text-label-md text-on-surface-variant"
                          >
                            Nome
                          </Label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-outline h-5 w-5" />
                            <Input
                              id={field.name}
                              name={field.name}
                              type="text"
                              placeholder="Seu nome"
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) => field.handleChange(e.target.value)}
                              className={`pl-12 ${hasError ? "border-red-400 focus-visible:ring-red-200" : ""}`}
                            />
                          </div>
                          {hasError && (
                            <span className="text-[12px] text-red-500">{errs[0]?.message}</span>
                          )}
                        </div>
                      );
                    }}
                  </form.Field>

                  {/* E-mail */}
                  <form.Field name="email">
                    {(field) => {
                      const errs = field.state.meta.errors;
                      const hasError = field.state.meta.isTouched && errs.length > 0;
                      return (
                        <div className="flex flex-col gap-2">
                          <Label
                            htmlFor={field.name}
                            className="text-label-md text-on-surface-variant"
                          >
                            E-mail
                          </Label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-outline h-5 w-5" />
                            <Input
                              id={field.name}
                              name={field.name}
                              type="email"
                              placeholder="seu@email.com"
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) => field.handleChange(e.target.value)}
                              className={`pl-12 ${hasError ? "border-red-400 focus-visible:ring-red-200" : ""}`}
                            />
                          </div>
                          {hasError && (
                            <span className="text-[12px] text-red-500">{errs[0]?.message}</span>
                          )}
                        </div>
                      );
                    }}
                  </form.Field>

                  {/* Mensagem */}
                  <form.Field name="mensagem">
                    {(field) => {
                      const errs = field.state.meta.errors;
                      const hasError = field.state.meta.isTouched && errs.length > 0;
                      return (
                        <div className="flex flex-col gap-2">
                          <Label
                            htmlFor={field.name}
                            className="text-label-md text-on-surface-variant"
                          >
                            Mensagem
                          </Label>
                          <Textarea
                            id={field.name}
                            name={field.name}
                            placeholder="Como podemos ajudar?"
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            rows={5}
                            className={`resize-none ${hasError ? "border-red-400 focus-visible:ring-red-200" : ""}`}
                          />
                          {hasError && (
                            <span className="text-[12px] text-red-500">{errs[0]?.message}</span>
                          )}
                        </div>
                      );
                    }}
                  </form.Field>

                  <SquircleButton
                    type="submit"
                    variant="blue"
                    size="mini"
                    fontWeight={600}
                    label={isSubmitting ? "Enviando..." : "Enviar mensagem"}
                    icon={isSubmitting ? Loader2 : Send}
                    disabled={isSubmitting}
                  />
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </LazyBackground >
  );
}
