import { useState } from 'react';
import { SAMPLE_PRAYERS, PrayerCard } from '../data/prayers';
import { Sparkles, RefreshCw, Volume2, Heart, BookOpen, MessageCircleQuestion, Compass } from 'lucide-react';
import { CHECKOUT_URL } from './Hero';

export default function PrayerDrawerInteractive() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  const currentPrayer: PrayerCard = SAMPLE_PRAYERS[currentIndex];

  // Play a soft, soothing musical chime with Web Audio API
  const playSoothingChime = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 (sweet chord)
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);
        
        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.1);
        gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + idx * 0.1 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.1 + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(ctx.currentTime + idx * 0.1);
        osc.stop(ctx.currentTime + idx * 0.1 + 1.3);
      });
    } catch {
      // Audio fallback silent
    }
  };

  const drawNextCard = () => {
    setIsAnimating(true);
    playSoothingChime();
    setHasDrawn(true);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % SAMPLE_PRAYERS.length);
      setIsAnimating(false);
    }, 280);
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F2F7F2] to-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>Experimente antes de comprar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tire uma Cartinha do Potinho de Oração Agora Mesmo
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Veja exatamente como as orações e perguntas funcionam na prática para criar conexão real com o seu pequeno:
          </p>
        </div>

        {/* Interactive Jar & Card Area */}
        <div className="max-w-2xl mx-auto">
          {/* Action Trigger Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={drawNextCard}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-base sm:text-lg rounded-2xl shadow-lg shadow-emerald-700/25 transition-all duration-200 cursor-pointer"
            >
              <RefreshCw className={`w-5 h-5 ${isAnimating ? 'animate-spin' : ''}`} />
              <span>{hasDrawn ? 'Tirar Outra Cartinha do Potinho' : 'Sortear uma Oração de Exemplo'}</span>
            </button>

            <button
              onClick={playSoothingChime}
              title="Ouvir som tranquilo"
              className="inline-flex items-center gap-2 px-4 py-3 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-xl border border-slate-200 shadow-xs transition"
            >
              <Volume2 className="w-4 h-4 text-emerald-600" />
              <span>Som de Paz</span>
            </button>
          </div>

          {/* The Drawn Card */}
          <div
            className={`transition-all duration-300 transform ${
              isAnimating ? 'opacity-30 scale-95 -rotate-1' : 'opacity-100 scale-100 rotate-0'
            }`}
          >
            <div className="bg-white rounded-3xl p-6 sm:p-9 shadow-xl border-2 border-emerald-500/30 relative overflow-hidden">
              {/* Decorative Card Top Strip */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${currentPrayer.categoryColor}`}>
                  {currentPrayer.category}
                </span>

                <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  Cartinha {currentPrayer.id} de 60
                </span>
              </div>

              {/* Card Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight flex items-center gap-2">
                <span>{currentPrayer.title}</span>
              </h3>

              {/* Prayer Text */}
              <div className="bg-emerald-50/70 p-4 sm:p-5 rounded-2xl border border-emerald-100 mb-6">
                <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed italic">
                  "{currentPrayer.prayer}"
                </p>
              </div>

              {/* Conversational Question */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-amber-50/80 p-4 rounded-xl border border-amber-200/80">
                  <MessageCircleQuestion className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase font-extrabold tracking-wider text-amber-900 mb-1">
                      💬 Momento de Conversa com a Criança:
                    </h4>
                    <p className="text-slate-800 text-sm sm:text-base font-semibold">
                      {currentPrayer.question}
                    </p>
                  </div>
                </div>

                {/* Bible Verse */}
                <div className="flex items-start gap-3 bg-sky-50/80 p-4 rounded-xl border border-sky-200/80">
                  <BookOpen className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase font-extrabold tracking-wider text-sky-900 mb-1">
                      📖 Palavra de Deus para Guardar no Coração:
                    </h4>
                    <p className="text-slate-700 text-xs sm:text-sm italic">
                      "{currentPrayer.verse}" — <strong className="text-sky-900 font-semibold">{currentPrayer.reference}</strong>
                    </p>
                  </div>
                </div>

                {/* Practical Action */}
                <div className="flex items-start gap-3 bg-emerald-50/60 p-4 rounded-xl border border-emerald-200/60">
                  <Compass className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase font-extrabold tracking-wider text-emerald-900 mb-1">
                      ❤️ Atividade Rápida de Amor:
                    </h4>
                    <p className="text-slate-700 text-xs sm:text-sm font-medium">
                      {currentPrayer.actionPrompt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Under-Card Conversion Prompt */}
          <div className="mt-8 text-center bg-white/80 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <p className="text-slate-800 text-sm sm:text-base font-semibold">
              Imagine viver esse momento de ternura e fé com seu filho todas as noites!
            </p>
            <div>
              <a
                href={CHECKOUT_URL}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition duration-200"
              >
                <span>Garantir as 60 Cartinhas Completas em PDF</span>
              </a>
            </div>
            <p className="text-xs text-slate-500">
              Arquivo em alta definição para imprimir quantas vezes quiser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
