import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { CHECKOUT_URL } from './Hero';
import productMockupImg from '../assets/images/regenerated_image_1791370010323.png';

export default function StickyBottomCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past hero
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2.5 sm:p-3 bg-white/95 backdrop-blur-md border-t border-emerald-500/30 shadow-2xl transition-all duration-300 animate-slide-up">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
        {/* Left Thumbnail & Info */}
        <div className="flex items-center gap-3">
          <img
            src={productMockupImg}
            alt="Miniatura Potinho de Oração"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg object-cover border border-emerald-300 shrink-0 shadow-xs"
            referrerPolicy="no-referrer"
          />
          <div className="hidden sm:block">
            <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Oferta de Lançamento Ativa</span>
            </div>
            <p className="text-slate-900 font-extrabold text-sm leading-tight">
              Potinho de Oração Infantil (PDF) + 4 Bónus
            </p>
          </div>
          <div className="sm:hidden">
            <p className="text-slate-900 font-extrabold text-xs leading-tight">
              Potinho de Oração
            </p>
            <span className="text-[10px] text-emerald-700 font-bold">
              Envio em menos de 1h
            </span>
          </div>
        </div>

        {/* Right CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-1 text-[11px] font-semibold text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>7 dias de garantia</span>
          </div>

          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-emerald-700/25 transition duration-200 animate-pulse-cta"
          >
            <span>EU QUERO VIVER ESTE MOMENTO AGORA</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
