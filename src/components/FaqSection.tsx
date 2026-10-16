import { CheckCircle2, Sparkles, MessageSquareQuote, ShieldCheck, UserCheck } from 'lucide-react';

import avatarMateus from '../assets/images/avatar_mateus_opt.webp';
import avatarAna from '../assets/images/avatar_ana_opt.webp';
import avatarClaudio from '../assets/images/avatar_claudio_opt.webp';
import avatarEdmilson from '../assets/images/avatar_edmilson_opt.webp';
import avatarHelena from '../assets/images/avatar_helena_opt.webp';
import avatarRui from '../assets/images/avatar_rui_opt.webp';

export default function FaqSection() {
  const expectantParticipants = [
    {
      name: 'Mateus Benguela',
      role: 'Comerciante & Empreendedor',
      location: 'Luanda',
      modality: 'Semipresencial',
      price: '25.990 Kz',
      badgeColor: 'border-amber-400 bg-amber-50 text-amber-900',
      avatarUrl: avatarMateus,
      comment:
        'Comprovativo enviado e vaga garantida! Trabalho com comércio e perco imenso tempo a responder clientes um a um no WhatsApp. Mal posso esperar pelo módulo de chatbots e automação comercial no sábado presencial!',
    },
    {
      name: 'Ana Beatriz Silva',
      role: 'Prestadora de Serviços',
      location: 'Benguela',
      modality: '100% Online',
      price: '15.990 Kz',
      badgeColor: 'border-[#7652D8]/30 bg-purple-50 text-[#40239A]',
      avatarUrl: avatarAna,
      comment:
        'Inscrição feita no 100% Online! Estou muito ansiosa para aprender a usar o ChatGPT e Claude para criar campanhas, copywriting persuasivo e anúncios para os meus serviços. Excelente iniciativa do formador!',
    },
    {
      name: 'Eng. Cláudio Kalufe',
      role: 'Gestor & Empresário',
      location: 'Huambo',
      modality: 'Semipresencial',
      price: '25.990 Kz',
      badgeColor: 'border-amber-400 bg-amber-50 text-amber-900',
      avatarUrl: avatarClaudio,
      comment:
        'Transferência bancária concluída com sucesso! O mercado atual exige dominar automação e Inteligência Artificial. Expectativa total para as aulas práticas de Google AI Studio e funis de conversão.',
    },
    {
      name: 'Edmilson Tomás',
      role: 'Criador de Conteúdos Digitais',
      location: 'Luanda',
      modality: '100% Online',
      price: '15.990 Kz',
      badgeColor: 'border-[#7652D8]/30 bg-purple-50 text-[#40239A]',
      avatarUrl: avatarEdmilson,
      comment:
        'Vaga garantida! Já acompanho o Domingos Leza Armando e conheço a sua visão prática. Pronto para colocar as ferramentas de IA a acelerar o meu negócio digital logo após estes 3 dias intensivos.',
    },
    {
      name: 'Helena Garcia',
      role: 'Responsável Comercial',
      location: 'Lubango',
      modality: 'Semipresencial',
      price: '25.990 Kz',
      badgeColor: 'border-amber-400 bg-amber-50 text-amber-900',
      avatarUrl: avatarHelena,
      comment:
        'Pagamento formalizado e confirmado pela equipa no WhatsApp! O plano semipresencial com a sessão de esclarecimento num sábado foi a melhor escolha para tirar dúvidas práticas diretamente com o formador.',
    },
    {
      name: 'Rui dos Santos',
      role: 'Lojista & Distribuidor',
      location: 'Caxito',
      modality: '100% Online',
      price: '15.990 Kz',
      badgeColor: 'border-[#7652D8]/30 bg-purple-50 text-[#40239A]',
      avatarUrl: avatarRui,
      comment:
        'Inscrição rápida e 100% transparente. O meu objetivo é automatizar o atendimento da minha loja e aprender engenharia de prompts avançada. Ansioso para o início da primeira sessão online!',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Cabeçalho da Secção */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-100 text-[#40239A] text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Inscrições Confirmadas • Vagas Garantidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Quem já garantiu a sua vaga <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40239A] to-[#7652D8]">na formação</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Comentários e expectativas reais de participantes que já realizaram o pagamento e estão prontos para dominar Vendas Automatizadas & Inteligência Artificial.
          </p>
        </div>

        {/* Grelha de Comentários / Testemunhos de Inscritos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expectantParticipants.map((p, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-[#7652D8]/50 hover:shadow-xl hover:shadow-[#40239A]/10 transition duration-300 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                {/* Cabeçalho do Card com Modalidade e Selo de Pagamento */}
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/60">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-extrabold border ${p.badgeColor}`}>
                    <Sparkles className="w-3 h-3 shrink-0" />
                    <span>{p.modality} ({p.price})</span>
                  </span>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 shrink-0">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>Pago</span>
                  </span>
                </div>

                {/* Comentário do Participante */}
                <div className="relative">
                  <MessageSquareQuote className="w-6 h-6 text-[#7652D8]/20 absolute -top-1 -left-1" />
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic pl-5">
                    "{p.comment}"
                  </p>
                </div>
              </div>

              {/* Informações do Participante com Fotografia Real de acordo ao Género */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#7652D8]/30 shadow-xs shrink-0 bg-slate-100">
                  <img
                    src={p.avatarUrl}
                    alt={p.name}
                    width={44}
                    height={44}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                    <span>{p.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {p.role} · {p.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé da Secção com Aviso de Vagas */}
        <div className="p-4 bg-gradient-to-r from-purple-50 via-indigo-50/70 to-purple-50 rounded-2xl border border-purple-200/70 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-[#171044] font-bold">
          <UserCheck className="w-5 h-5 text-[#40239A] shrink-0" />
          <span>Vagas a preencher rapidamente: 15 para Semipresencial e 30 para 100% Online.</span>
        </div>
      </div>
    </section>
  );
}
