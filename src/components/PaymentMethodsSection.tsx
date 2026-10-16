import { MulticaixaExpressLogo, MulticaixaLogo } from './MulticaixaLogos';
import { Smartphone, Building2, CreditCard, ShieldCheck, Zap, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CHECKOUT_URL } from './Hero';

export default function PaymentMethodsSection() {
  return (
    <section id="pagamento" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-[#F8FAF7] border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 shadow-xs">
            <Lock className="w-4 h-4 text-emerald-700" />
            <span>Pagamento Seguro e Sem Complicações</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Como Pagar via <span className="text-orange-600">Multicaixa Express</span> ou <span className="text-emerald-800">Referência</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Processo 100% automático e seguro. Escolha a forma de pagamento mais conveniente para si e receba o material em menos de 1 hora.
          </p>
        </div>

        {/* 2 Primary Payment Options Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Multicaixa Express */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border-2 border-orange-200 shadow-xl shadow-orange-900/5 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-orange-500 text-white font-black text-xs px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
              Mais Rápido no Telemóvel
            </div>

            <div>
              <div className="mb-6 flex items-center gap-4">
                <MulticaixaExpressLogo className="h-12" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Multicaixa Express
                  </h3>
                  <p className="text-xs text-orange-700 font-semibold">
                    Confirmação instantânea com o seu PIN
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Passo a passo simples:
                </h4>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">Clique em "Eu Quero" e acesse o checkout:</strong>
                    <span className="text-xs text-slate-600">Selecione a opção de pagamento <strong>Multicaixa Express</strong>.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">Digite o seu número de telemóvel:</strong>
                    <span className="text-xs text-slate-600">Insira o número que está associado à sua conta Multicaixa Express.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">Autorize no telemóvel:</strong>
                    <span className="text-xs text-slate-600">Abra a notificação que chegar na sua app Multicaixa Express e insira o seu código PIN secreto.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">Receba o Potinho de Oração:</strong>
                    <span className="text-xs text-slate-600">O PDF chega automaticamente no seu e-mail e WhatsApp em minutos!</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <a
                href={CHECKOUT_URL}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition"
              >
                <Smartphone className="w-4 h-4" />
                <span>Pagar com Multicaixa Express</span>
              </a>
            </div>
          </div>

          {/* Card 2: Pagamento por Referência Multicaixa */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border-2 border-teal-200 shadow-xl shadow-teal-900/5 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-[#002D3D] text-white font-black text-xs px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
              ATM ou Internet Banking
            </div>

            <div>
              <div className="mb-6 flex items-center gap-4">
                <MulticaixaLogo className="h-12" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Pagamento por Referência
                  </h3>
                  <p className="text-xs text-teal-800 font-semibold">
                    Entidade, Referência e Montante automáticos
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Passo a passo simples:
                </h4>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">Selecione "Pagamento por Referência":</strong>
                    <span className="text-xs text-slate-600">No checkout oficial PayGo, escolha a opção de referência bancária.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">Receba os dados de pagamento:</strong>
                    <span className="text-xs text-slate-600">O sistema gera na tela a <strong>Entidade</strong> (ex: 00123), a <strong>Referência</strong> (9 dígitos) e o <strong>Montante exato</strong>.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">Pague no ATM ou App do seu Banco:</strong>
                    <span className="text-xs text-slate-600">Acesse qualquer caixa Multicaixa ou a app do seu banco (BAI, BFA, Atlantico, etc.) em <em>Pagamentos &gt; Pagamentos por Referência</em>.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">Confirmação automática do sistema:</strong>
                    <span className="text-xs text-slate-600">Assim que pagar, o acesso é liberado sem você precisar enviar comprovativo manual!</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <a
                href={CHECKOUT_URL}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#002D3D] hover:bg-[#001D28] text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition"
              >
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>Gerar Referência no Checkout</span>
              </a>
            </div>
          </div>
        </div>

        {/* Also Card/International Payments */}
        <div className="bg-emerald-50/70 rounded-2xl p-6 sm:p-7 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">
                Também aceitamos Cartões Visa e Mastercard
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Se você está em Portugal, Brasil, Moçambique ou no exterior, pague com total comodidade em qualquer moeda.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href={CHECKOUT_URL}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl transition"
            >
              <span>Ir para o Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Security Summary Seals */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Criptografia Bancária SSL de 256 bits
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-500" />
            Acesso Imediato no E-mail e WhatsApp
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Garantia Incondicional de 7 Dias
          </span>
        </div>
      </div>
    </section>
  );
}
