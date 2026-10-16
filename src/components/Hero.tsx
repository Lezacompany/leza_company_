export const CHECKOUT_URL = 'https://app.paygochekout.com/checkout/1c6b541f-cff1-4065-a593-3cfad5854c4f';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-4 pb-14 sm:pt-6 sm:pb-20 bg-gradient-to-b from-[#F3F0FF] via-[#FAF8F5] to-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          {/* Mensagem Principal com Máxima Ênfase (H1 Semântico) */}
          <div className="max-w-3xl mx-auto space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight tracking-tight">
              Aprende a utilizar a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#171044] via-[#40239A] to-[#7652D8]">Inteligência Artificial</span>, automatizar tarefas e dominar <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40239A] to-[#7652D8]">estratégias de vendas</span> para produtos e serviços!
            </h1>
            <p className="text-sm sm:text-base font-semibold text-slate-600 max-w-2xl mx-auto">
              Acelera os resultados do teu negócio com processos modernos e automações comerciais práticas.
            </p>
          </div>

          {/* Frase de Impacto */}
          <div className="p-4 bg-gradient-to-r from-purple-50 via-indigo-50/70 to-purple-50 border-l-4 border-[#7652D8] rounded-r-2xl text-base sm:text-lg font-extrabold text-[#171044] shadow-xs max-w-2xl mx-auto">
            ⚡ Não compres apenas mais um curso. Aprende uma nova habilidade!
          </div>

        </div>
      </div>
    </section>
  );
}
