import { Check, Sparkles, Zap, ShieldCheck, ArrowRight, Calendar, Users } from 'lucide-react';
import { ModalityType } from './EnrollmentModal';

interface PricingBoxProps {
  onSelectModality: (modality: ModalityType) => void;
}

export default function PricingBox({ onSelectModality }: PricingBoxProps) {
  const semipresencialItems = [
    'Formação online durante 3 dias.',
    'E-book de apoio.',
    'Acompanhamento online.',
    'Sessão presencial para esclarecimento de dúvidas.',
    'Certificado de participação.',
  ];

  const onlineItems = [
    'Formação online durante 3 dias.',
    'E-book de apoio.',
    'Acompanhamento 100% online.',
    'Certificado digital enviado por e-mail ou WhatsApp.',
  ];

  return (
    <section id="modalidades" className="py-16 sm:py-24 bg-gradient-to-b from-[#F3F0FF] via-[#FAF8F5] to-white scroll-mt-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Secção */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-[#40239A] text-xs sm:text-sm font-bold tracking-wide uppercase">
            <Sparkles className="w-4 h-4 text-[#7652D8]" />
            <span>Investimento & Modalidades</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Escolhe a Tua <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40239A] to-[#7652D8]">Modalidade Ideal</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Aprende a automatizar vendas e a utilizar a Inteligência Artificial no formato que melhor se adapta à tua rotina.
          </p>
        </div>

        {/* Grade com os 2 Cartões de Preços */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* CARTÃO 1: SEMIPRESENCIAL */}
          <div className="bg-white rounded-3xl border-3 border-amber-400 shadow-2xl shadow-purple-950/10 flex flex-col justify-between relative overflow-hidden transform hover:-translate-y-1 transition duration-300">
            {/* Faixa de Destaque Dourada / Especial */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-4 py-2 text-center text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Acompanhamento Mais Completo</span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black text-slate-900">
                    Semipresencial
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs font-black text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                    <Users className="w-3.5 h-3.5" />
                    15 vagas disponíveis
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Participa na formação online e beneficia de acompanhamento adicional com uma sessão presencial para esclarecimento de dúvidas.
                </p>

                {/* Preço de Destaque */}
                <div className="pt-2 pb-3 border-y border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Investimento total
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl sm:text-4xl font-black text-[#171044]">
                      25.990 Kz
                    </span>
                  </div>
                </div>

                {/* O que está incluído */}
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    O que está incluído:
                  </span>
                  <ul className="space-y-2.5">
                    {semipresencialItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className={idx === 3 ? 'font-bold text-slate-900' : ''}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Informação Complementar */}
                <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/80 text-[11px] text-amber-950 flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>A sessão presencial está prevista para um sábado, com data e local a confirmar.</span>
                </div>
              </div>

              {/* Botão de Inscrição */}
              <div className="pt-2">
                <button
                  type="button"
                  aria-label="Escolher modalidade Semipresencial por 25.990 Kz"
                  onClick={() => {
                    window.location.href = 'https://app.paygochekout.com/checkout/738bdc3f-4e31-4c28-bfcd-f0e751fd80eb';
                  }}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#171044] via-[#40239A] to-[#7652D8] hover:brightness-110 text-white font-black text-base shadow-xl shadow-[#40239A]/25 transition duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Escolher Semipresencial</span>
                  <ArrowRight className="w-5 h-5 text-amber-300" />
                </button>
              </div>
            </div>
          </div>

          {/* CARTÃO 2: 100% ONLINE */}
          <div className="bg-white rounded-3xl border-3 border-[#7652D8] shadow-2xl shadow-purple-950/10 flex flex-col justify-between relative overflow-hidden transform hover:-translate-y-1 transition duration-300">
            {/* Faixa de Topo */}
            <div className="bg-gradient-to-r from-[#40239A] to-[#7652D8] text-white px-4 py-2 text-center text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>Flexibilidade Total</span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black text-slate-900">
                    100% Online
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs font-black text-[#40239A] bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
                    <Users className="w-3.5 h-3.5" />
                    30 vagas disponíveis
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Aprende online, onde estiveres, com formação e acompanhamento totalmente à distância.
                </p>

                {/* Preço de Destaque */}
                <div className="pt-2 pb-3 border-y border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Investimento total
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl sm:text-4xl font-black text-[#171044]">
                      15.990 Kz
                    </span>
                  </div>
                </div>

                {/* O que está incluído */}
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    O que está incluído:
                  </span>
                  <ul className="space-y-2.5">
                    {onlineItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-purple-100 text-[#40239A] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Botão de Inscrição */}
              <div className="pt-2">
                <button
                  type="button"
                  aria-label="Escolher modalidade 100% Online por 15.990 Kz"
                  onClick={() => {
                    window.location.href = 'https://app.paygochekout.com/checkout/41e82a3e-ec6d-4259-b926-2a3aeaad219f';
                  }}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#171044] via-[#40239A] to-[#7652D8] hover:brightness-110 text-white font-black text-base shadow-xl shadow-[#40239A]/25 transition duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Escolher 100% Online</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Garantia e Segurança do Pagamento */}
        <div className="mt-12 text-center text-xs text-slate-500 flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Processo de inscrição transparente e direto
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-purple-600" />
            Material de apoio em PDF incluso
          </span>
        </div>

      </div>
    </section>
  );
}
