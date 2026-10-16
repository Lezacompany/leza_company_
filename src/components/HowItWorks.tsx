import { FileDown, Scissors, Sparkles, CheckCircle } from 'lucide-react';
import { CHECKOUT_URL } from './Hero';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: FileDown,
      title: 'Acesso Imediato ao Arquivo',
      description:
        'Após a confirmação segura do pagamento, você recebe imediatamente o PDF completo de alta definição no seu e-mail e WhatsApp.',
      badge: 'Menos de 1 Hora',
    },
    {
      number: '02',
      icon: Scissors,
      title: 'Imprima e Recorte em Família',
      description:
        'Imprima na sua impressora ou gráfica rápida. Convide a criança para ajudar a cortar as cartinhas e colar o rótulo no potinho escolhido.',
      badge: 'Atividade Divertida',
    },
    {
      number: '03',
      icon: Sparkles,
      title: 'Comece Hoje Mesmo o Ritual',
      description:
        'Todas as noites antes de dormir, tirem 10 minutos. A criança sorteia a cartinha, vocês oram, conversam e se abraçam em paz.',
      badge: 'Memórias Eternas',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Simples e Prático</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Como Funciona em Apenas 3 Passos
          </h2>

          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Sem complicações: em poucos minutos você já tem o material pronto para transformar o ambiente da sua casa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-3xl p-7 sm:p-8 border border-slate-200/80 relative flex flex-col justify-between hover:shadow-lg transition duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-emerald-600/30">
                      {step.number}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                      {step.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-5 shadow-md shadow-emerald-600/20">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4">
            Você não precisa esperar dias pelos correios. É digital, prático e instantâneo!
          </p>
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-xl shadow-md transition"
          >
            <span>QUERO COMEÇAR AINDA HOJE</span>
          </a>
        </div>
      </div>
    </section>
  );
}
