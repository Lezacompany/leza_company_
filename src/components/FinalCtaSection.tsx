import { ArrowRight, Sparkles, Users } from 'lucide-react';
import { ModalityType } from './EnrollmentModal';

interface FinalCtaSectionProps {
  onSelectModality: (modality: ModalityType) => void;
}

export default function FinalCtaSection({ onSelectModality }: FinalCtaSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-[#171044] via-[#40239A] to-[#7652D8] text-white relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        
        {/* Título & Descrição */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-purple-200 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Inscrições Abertas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            A tua próxima habilidade começa aqui.
          </h2>

          <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
            Aprende a utilizar a Inteligência Artificial, melhorar processos comerciais e desenvolver estratégias de vendas para o teu negócio ou actividade profissional.
          </p>
        </div>

        {/* As Duas Opções de Inscrição */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto text-left pt-2">
          
          {/* Opção Semipresencial */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-amber-300/40 hover:border-amber-300 transition duration-200 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-extrabold text-amber-300 uppercase tracking-wider">
                  Semipresencial
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-white/20 px-2.5 py-0.5 rounded-full">
                  <Users className="w-3 h-3" />
                  15 vagas disponíveis
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">
                25.970 Kz
              </div>
              <p className="text-xs text-purple-100">
                Formação online 3 dias + sessão presencial no sábado + certificado.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onSelectModality('semipresencial')}
              className="w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-lg transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Inscrever-me na modalidade semipresencial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Opção 100% Online */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/25 hover:border-white/50 transition duration-200 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-extrabold text-white uppercase tracking-wider">
                  100% Online
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-white/20 px-2.5 py-0.5 rounded-full">
                  <Users className="w-3 h-3" />
                  30 vagas disponíveis
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">
                15.990 Kz
              </div>
              <p className="text-xs text-purple-100">
                Formação online 3 dias + acompanhamento totalmente à distância.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onSelectModality('online')}
              className="w-full py-3.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-[#171044] font-black text-xs sm:text-sm shadow-lg transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Inscrever-me na modalidade online</span>
              <ArrowRight className="w-4 h-4 text-[#40239A]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
