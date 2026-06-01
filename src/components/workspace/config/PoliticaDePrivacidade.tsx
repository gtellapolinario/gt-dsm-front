import { Link } from '@tanstack/react-router'
import { Shield, FileText, Eye, Lock, Server, Mail, UserX } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import { LazyBackground } from '@/components/ui/LazyBackground'

export default function PoliticaDePrivacidade() {
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
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Documento legal
              </span>
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold font-manrope text-on-surface">
              Política de Privacidade
            </CardTitle>
            <CardDescription className="mt-4 text-lg text-on-surface-variant max-w-2xl">
              Compromisso da GT-Medics com a proteção dos seus dados pessoais e dos dados dos
              pacientes, em total conformidade com a Lei Geral de Proteção de Dados (LGPD).
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
              titulo: 'Introdução',
              texto: 'A GT-Medics valoriza a privacidade e a segurança dos dados de seus usuários e dos pacientes atendidos por meio da plataforma. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos, compartilhamos e protegemos as informações, em estrita observância à LGPD e demais normas aplicáveis.',
            }, {
              num: '2',
              titulo: 'Dados Coletados',
              texto: 'Coletamos diferentes categorias de dados, dependendo do tipo de usuário e do uso da plataforma:',
              cards: [
                { titulo: 'Dados do profissional', texto: 'Nome completo, e-mail, CPF, número de registro profissional (CRM, CRP, etc.), especialidade e dados de contato.' },
                { titulo: 'Dados dos pacientes', texto: 'Nome, data de nascimento, contato de emergência, histórico de aplicação de escalas, respostas e resultados de avaliações psicométricas.' },
                { titulo: 'Dados de uso', texto: 'Endereço IP, logs de acesso, tipo de navegador, páginas visitadas, interações com a plataforma e preferências de configuração.' },
              ],
            }, {
              num: '3',
              titulo: 'Base Legal e Finalidades',
              texto: 'O tratamento de dados pessoais é realizado com base nas hipóteses legais previstas no art. 7º da LGPD, principalmente:',
              lista: [
                'Execução de contrato — para prestação dos serviços da plataforma e funcionalidades contratadas.',
                'Consentimento — quando necessário para finalidades específicas, como envio de comunicações de marketing.',
                'Obrigação legal — para cumprimento de normas regulatórias da saúde e ordens judiciais.',
                'Legítimo interesse — para melhorias na plataforma, prevenção de fraudes e garantia da segurança dos dados.',
              ],
            }, {
              num: '4',
              titulo: 'Compartilhamento de Dados',
              texto: 'Os dados pessoais dos usuários e pacientes não são vendidos a terceiros. O compartilhamento ocorre apenas nas seguintes hipóteses:',
              lista: [
                'Prestadores de serviço — empresas de hospedagem em nuvem, processamento de pagamentos e suporte técnico, sob contrato de confidencialidade.',
                'Obrigação legal — quando exigido por lei, regulamentação ou ordem judicial competente.',
                'Consentimento expresso — quando o titular autorizar previamente o compartilhamento.',
              ],
            }, {
              num: '5',
              titulo: 'Segurança da Informação',
              texto: 'Adotamos medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados, situações destrutivas, acidentais ou ilícitas:',
              lista: [
                'Criptografia ponta-a-ponta (TLS 1.3) para transmissão de dados.',
                'Armazenamento criptografado em repouso (AES-256).',
                'Controle de acesso baseado em papéis (RBAC).',
                'Autenticação multifator (MFA) disponível para contas profissionais.',
                'Backups regulares e plano de recuperação de desastres.',
                'Monitoramento contínuo de segurança e detecção de anomalias.',
              ],
            }, {
              num: '6',
              titulo: 'Direitos do Titular',
              texto: 'Conforme a LGPD, o titular dos dados possui os seguintes direitos:',
              lista: [
                'Confirmação da existência de tratamento de dados.',
                'Acesso aos dados pessoais tratados.',
                'Correção de dados incompletos, inexatos ou desatualizados.',
                'Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.',
                'Portabilidade dos dados para outro fornecedor de serviço.',
                'Revogação do consentimento, quando aplicável.',
                'Informação sobre compartilhamento de dados com terceiros.',
              ],
              extra: 'Para exercer seus direitos, entre em contato pelo e-mail privacidade@gtmedics.com.br. Responderemos em até 15 dias úteis.',
            }, {
              num: '7',
              titulo: 'Retenção e Exclusão',
              texto: 'Os dados pessoais são mantidos pelo período necessário para cumprir as finalidades descritas nesta política ou para atender a obrigações legais (ex.: prazos prescricionais na área da saúde). Após o término do contrato ou desativação da conta, os dados podem ser anonimizados ou excluídos, salvo quando houver obrigação legal de retenção.',
            }, {
              num: '8',
              titulo: 'Encarregado de Dados (DPO)',
              texto: 'A GT-Medics nomeou um Encarregado de Dados Pessoais (Data Protection Officer), responsável por atuar como canal de comunicação entre a empresa, os titulares de dados e a Autoridade Nacional de Proteção de Dados (ANPD).',
              extra: 'E-mail do DPO: privacidade@gtmedics.com.br',
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
                  {artigo.cards && (
                    <div className="space-y-3 mt-4">
                      {artigo.cards.map((c) => (
                        <Card key={c.titulo} className="border-outline-variant/40 bg-surface-container-low/60">
                          <CardContent className="pt-4 pb-4">
                            <h4 className="font-semibold text-sm mb-1">{c.titulo}</h4>
                            <p className="text-sm text-on-surface-variant">{c.texto}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                  {artigo.lista && (
                    <ul className="list-disc list-inside space-y-2 text-on-surface-variant mt-3 ml-1">
                      {artigo.lista.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {artigo.extra && (
                    <p className="text-on-surface-variant mt-3">
                      {artigo.extra}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <Card className="border-outline-variant/60 bg-surface/80 backdrop-blur-sm">
              <CardContent className="pt-6 pb-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  <h3 className="font-bold font-manrope">Transparência</h3>
                </div>
                <p className="text-sm text-on-surface-variant">
                  Todas as operações de tratamento de dados são registradas em nosso livro de
                  registros, disponível para consulta da ANPD quando necessário.
                </p>
              </CardContent>
            </Card>

            <Card className="border-outline-variant/60 bg-surface/80 backdrop-blur-sm">
              <CardContent className="pt-6 pb-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  <h3 className="font-bold font-manrope">Criptografia</h3>
                </div>
                <p className="text-sm text-on-surface-variant">
                  Seus dados e os dos seus pacientes são protegidos com criptografia AES-256 em
                  repouso e TLS 1.3 em trânsito.
                </p>
              </CardContent>
            </Card>

            <Card className="border-outline-variant/60 bg-surface/80 backdrop-blur-sm">
              <CardContent className="pt-6 pb-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" />
                  <h3 className="font-bold font-manrope">Hospedagem</h3>
                </div>
                <p className="text-sm text-on-surface-variant">
                  Nossa infraestrutura é hospedada em datacenters certificados (ISO 27001 e
                  SOC 2), com redundância geográfica e backups automatizados.
                </p>
              </CardContent>
            </Card>

            <Card className="border-outline-variant/60 bg-surface/80 backdrop-blur-sm">
              <CardContent className="pt-6 pb-6 space-y-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <h3 className="font-bold font-manrope">Documentos relacionados</h3>
                </div>
                <Link
                  to="/termos-de-uso"
                  className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4"
                >
                  <FileText className="h-4 w-4" />
                  Termos de Uso
                </Link>
              </CardContent>
            </Card>

            <Card className="border-outline-variant/60 bg-surface/80 backdrop-blur-sm">
              <CardContent className="pt-6 pb-6 space-y-4">
                <div className="flex items-center gap-2">
                  <UserX className="h-5 w-5 text-tertiary" />
                  <h3 className="font-bold font-manrope">Excluir conta</h3>
                </div>
                <p className="text-sm text-on-surface-variant">
                  Deseja encerrar sua conta e solicitar a exclusão dos seus dados? Envie um
                  e-mail para nosso DPO.
                </p>
                <a
                  href="mailto:privacidade@gtmedics.com.br"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
                >
                  <Mail className="h-4 w-4" />
                  privacidade@gtmedics.com.br
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </LazyBackground>
  )
}
