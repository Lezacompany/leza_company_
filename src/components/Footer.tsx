import { ShieldCheck, Sparkles, Lock, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171044] text-purple-200 py-12 border-t border-[#40239A]/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Rodapé com Informações da Formação */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 text-center md:text-left">
          <div className="space-y-2">
            <h4 className="text-xl font-black text-white">
              Vendas Automatizadas & Inteligência Artificial
            </h4>

          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleScrollToTop}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              <span>Voltar ao Topo</span>
              <ArrowRight className="w-3.5 h-3.5 -rotate-90" />
            </button>
          </div>
        </div>

        {/* Informações Complementares e Direitos */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300/80">
          <div>
            © {currentYear} Domingos Leza Armando · Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Inscrições Seguras
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Aprende uma nova habilidade
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
