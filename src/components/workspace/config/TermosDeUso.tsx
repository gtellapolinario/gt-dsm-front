import { Link } from '@tanstack/react-router'
import { FileText, Scale, Shield, AlertTriangle, Mail } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import { LazyBackground } from '@/components/ui/LazyBackground'

export default function TermosDeUso() {
  return (
    <LazyBackground
      src="https://firebasestorage.googleapis.com/v0/b/gt-medic-98c72.firebasestorage.app/o/bird.jpg?alt=media&token=0869c5a4-badf-49f7-85cf-2673243a04f0"
      overlayClassName="opacity-50"
      className="flex flex-col text-on-surface"
    >

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Card className="border-outline-variant/60 bg-surface/80 backdrop-blur-sm mb-8">
          <CardContent className="pt-10 pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-xl bg-primary/10 p-2.5">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Documento legal
              </span>
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold font-manrope text-on-surface">
              Termos de Uso
            </CardTitle>
            <CardDescription className="mt-4 text-lg text-on-surface-variant max-w-2xl">
              Condições gerais de uso da plataforma GT-Medics Escalas. Ao acessar ou utilizar
              nossos serviços, você concorda com os termos descritos abaixo.
            </CardDescription>
            <p className="mt-2 text-sm text-on-surface-variant/70">
              Última atualização: 10 de maio de 2026
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          <div className="space-y-6">
            {[{
              num: '1',
              titulo: 'Aceitação dos Termos',
              texto: 'Ao acessar e utilizar a plataforma GT-Medics Escalas, você (“Usuário”) concorda em cumprir e estar vinculado aos presentes Termos de Uso. Caso não concorde com qualquer disposição deste documento, deve abster-se de utilizar os serviços. Estes termos constituem um contrato vinculante entre você e a GT-Medics.',
            }, {
              num: '2',
              titulo: 'Objeto do Serviço',
              texto: 'A GT-Medics Escalas é uma plataforma digital destinada a profissionais de saúde mental e usuários finais, oferecendo ferramentas para aplicação, gestão e armazenamento de escalas psicométricas e instrumentos de avaliação clínica. O serviço inclui funcionalidades de cadastro de pacientes, aplicação de testes, geração de relatórios e histórico de evolução.',
            }, {
              num: '3',
              titulo: 'Cadastro e Conta',
              texto: 'Para utilizar determinadas funcionalidades, o Usuário deve criar uma conta fornecendo informações verdadeiras, precisas e completas. O Usuário é inteiramente responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta.',
              lista: [
                'O cadastro pode ser realizado via e-mail ou conta Google.',
                'O Usuário deve possuir idade mínima de 18 anos ou estar representado por um responsável legal.',
                'A GT-Medics se reserva o direito de suspender contas com dados falsos ou suspeitas de fraude.',
              ],
            }, {
              num: '4',
              titulo: 'Responsabilidades do Usuário',
              texto: 'O Usuário compromete-se a utilizar a plataforma de forma ética, legal e em conformidade com as normas do Código de Ética Profissional de sua categoria (quando aplicável). É vedado:',
              lista: [
                'Utilizar a plataforma para fins não autorizados ou ilegais.',
                'Compartilhar credenciais de acesso com terceiros.',
                'Violar direitos de propriedade intelectual da GT-Medics ou de terceiros.',
                'Inserir dados de pacientes sem o devido consentimento informado.',
                'Tentar acessar áreas restritas do sistema sem autorização.',
              ],
            }, {
              num: '5',
              titulo: 'Propriedade Intelectual',
              texto: 'Todo o conteúdo disponibilizado na plataforma — incluindo, mas não se limitando a, software, design, textos, gráficos, logotipos, ícones e imagens — é de propriedade exclusiva da GT-Medics ou de seus licenciadores, protegido pelas leis de propriedade intelectual. É concedida ao Usuário uma licença limitada, não exclusiva e intransferível para utilizar a plataforma conforme estes Termos.',
            }, {
              num: '6',
              titulo: 'Limitação de Responsabilidade',
              texto: 'A plataforma GT-Medics Escalas é uma ferramenta de apoio à prática clínica e não substitui o julgamento profissional do usuário. Os resultados das escalas psicométricas devem ser interpretados por profissionais qualificados. A GT-Medics não se responsabiliza por diagnósticos, tratamentos ou decisões clínicas baseadas exclusivamente nos resultados gerados pela plataforma.',
            }, {
              num: '7',
              titulo: 'Modificações e Disponibilidade',
              texto: 'A GT-Medics se reserva o direito de modificar, suspender ou descontinuar, temporária ou permanentemente, qualquer funcionalidade da plataforma, com ou sem aviso prévio. Alterações nos Termos de Uso serão comunicadas com antecedência mínima de 15 (quinze) dias, salvo em casos de força maior ou exigências legais.',
            }, {
              num: '8',
              titulo: 'Lei Aplicável e Foro',
              texto: 'Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Quaisquer controvérsias oriundas destes termos serão dirimidas no foro da comarca de São Paulo/SP, com exclusão de qualquer outro, por mais privilegiado que seja.',
            }].map((artigo) => (
              <Card
                key={artigo.num}
                className="border-outline-variant/60 bg-surface/80 backdrop-blur-sm"
              >
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                      {artigo.num}
                    </span>
                    <h2 className="text-xl font-bold font-manrope text-on-surface">
                      {artigo.titulo}
                    </h2>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed">
                    {artigo.texto}
                  </p>
                  {artigo.lista && (
                    <ul className="list-disc list-inside space-y-2 text-on-surface-variant mt-3 ml-1">
                      {artigo.lista.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <Card className="border-outline-variant/60 bg-surface/80 backdrop-blur-sm">
              <CardContent className="pt-6 pb-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  <h3 className="font-bold font-manrope">Documentos relacionados</h3>
                </div>
                <Link
                  to="/politica-de-privacidade"
                  className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4"
                >
                  <Shield className="h-4 w-4" />
                  Política de Privacidade
                </Link>
              </CardContent>
            </Card>

            <Card className="border-outline-variant/60 bg-surface/80 backdrop-blur-sm">
              <CardContent className="pt-6 pb-6 space-y-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-tertiary" />
                  <h3 className="font-bold font-manrope">Precisa de ajuda?</h3>
                </div>
                <p className="text-sm text-on-surface-variant">
                  Se tiver dúvidas sobre estes termos ou sobre o uso da plataforma, entre em
                  contato com nosso suporte.
                </p>
                <a
                  href="mailto:suporte@gtmedics.com.br"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
                >
                  <Mail className="h-4 w-4" />
                  suporte@gtmedics.com.br
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </LazyBackground>
  )
}
