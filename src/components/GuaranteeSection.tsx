import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CHECKOUT_URL } from './Hero';

export default function GuaranteeSection() {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-50 via-white to-amber-50/50 rounded-3xl p-8 sm:p-12 border-2 border-emerald-200 shadow-md flex flex-col md:flex-row items-center gap-8">
          {/* Guarantee Badge */}
          <div className="shrink-0 text-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-emerald-600 text-white flex flex-col items-center justify-center p-3 shadow-xl shadow-emerald-600/20 border-4 border-emerald-100 mx-auto">
              <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-amber-300 mb-1" />
              <span className="font-black text-xs sm:text-sm uppercase tracking-wider leading-tight">
                7 DIAS DE
              </span>
              <span className="font-extrabold text-[10px] text-emerald-100 uppercase">
                GARANTIA TOTAL
              </span>
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Seu Risco é Absolutamente Zero!
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Experimente o <strong>Potinho de Oração</strong> com seu filho, neto ou sobrinho por 7 dias inteiros. Se você achar que o material não facilitou a hora de dormir, não trouxe paz ao seu lar ou não gerou as conexões que você sonhava, basta enviar uma mensagem. Devolvemos 100% do seu dinheiro, sem burocracia.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-emerald-900 pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Sem perguntas constrangedoras
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Reembolso rápido e seguro
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Confiança total na qualidade
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
