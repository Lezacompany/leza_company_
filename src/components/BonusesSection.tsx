import { Gift, Sparkles, Check, Download } from 'lucide-react';
import { CHECKOUT_URL } from './Hero';

export default function BonusesSection() {
  const bonuses = [
    {
      badge: 'BÓNUS #1',
      title: 'Livro de Colorir: Pequenos Heróis da Fé',
      originalPrice: 'Gratuito Hoje',
      description:
        'Desenhos bíblicos infantis com Davi, Daniel, Ester e a Arca de Noé para a criança pintar e relaxar antes de dormir, estimulando a criatividade.',
    },
    {
      badge: 'BÓNUS #2',
      title: '12 Marcadores de Livro com Versículos',
      originalPrice: 'Gratuito Hoje',
      description:
        'Marcadores lindos e coloridos para a criança usar na sua própria Bíblia, livros de histórias ou materiais escolares, lembrando-se do amor de Deus.',
    },
    {
      badge: 'BÓNUS #3',
      title: 'Rótulos Decorativos Personalizáveis para o Pote',
      originalPrice: 'Gratuito Hoje',
      description:
        'Vários modelos de rótulos com espaço para escrever o nome da criança: "Potinho de Oração do Noah", "Potinho da Beatriz", prontos para colar.',
    },
    {
      badge: 'BÓNUS #4',
      title: 'Guia Rápido dos Pais: Rotina da Noite sem Brigas',
      originalPrice: 'Gratuito Hoje',
      description:
        'Dicas práticas de psicopedagogia cristã para acalmar a mente da criança, diminuir o apego aos ecrãs e criar um ambiente acolhedor.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-amber-900/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 shadow-xs">
            <Gift className="w-4 h-4 text-amber-700" />
            <span>Presentes Especiais de Lançamento</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Garantindo Hoje, Você Leva <span className="text-emerald-700">4 Bónus Exclusivos</span> Sem Pagar Nada a Mais
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Preparamos um pacote completo para enriquecer ainda mais os momentos espirituais da sua família.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {bonuses.map((bonus, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200/60 shadow-lg shadow-amber-950/5 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 font-black text-xs px-4 py-1.5 rounded-bl-2xl">
                {bonus.badge}
              </div>

              <div>
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Incluso no seu pacote</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 pr-16">
                  {bonus.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {bonus.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  Disponível para download imediato
                </span>
                <span className="font-extrabold text-amber-600 text-sm">
                  {bonus.originalPrice}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action inside bonus section */}
        <div className="mt-12 text-center">
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center justify-center gap-3 px-8 py-4.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base sm:text-lg rounded-2xl shadow-xl shadow-emerald-700/25 transition duration-200"
          >
            <Download className="w-5 h-5" />
            <span>QUERO O POTINHO + TODOS OS 4 BÓNUS</span>
          </a>
        </div>
      </div>
    </section>
  );
}
