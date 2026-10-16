import instructorPhoto from '../assets/images/instructor_opt.webp';
import { UserCheck, Sparkles, Award, ShieldCheck } from 'lucide-react';

export default function InstructorSection() {
  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-purple-900/15 shadow-xl flex flex-col md:flex-row items-center gap-8 lg:gap-10">
          
          {/* Fotografia Pessoal do Formador */}
          <div className="w-full md:w-5/12 shrink-0">
            <div className="relative rounded-2xl overflow-hidden border-3 border-[#7652D8]/40 shadow-lg bg-[#171044] aspect-3/4 max-w-xs mx-auto">
              <img
                src={instructorPhoto}
                alt="Domingos Leza Armando - Formador de Vendas Automatizadas & Inteligência Artificial"
                width={400}
                height={530}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />

            </div>
          </div>

          {/* Apresentação Fiel aos Requisitos */}
          <div className="w-full md:w-7/12 space-y-4 text-slate-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[#40239A] text-xs font-bold uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5 text-[#7652D8]" />
              <span>Conhece o teu Formador</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Domingos Leza Armando
            </h3>

            <div className="border-l-4 border-[#7652D8] pl-3.5 py-2 bg-purple-50/60 rounded-r-xl font-medium text-slate-800 text-sm sm:text-base leading-relaxed">
              Formação orientada para a aplicação prática da Inteligência Artificial, das estratégias de vendas e da automatização de tarefas comerciais.
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              O foco do programa é ensinar habilidades reais que podes implementar de imediato no teu dia a dia: desde a criação de campanhas e conteúdos com IA até à automação do teu WhatsApp Business e funis comerciais.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                <Sparkles className="w-4 h-4 text-[#7652D8] shrink-0" />
                <span>Método 100% Prático</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Acompanhamento Próximo</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
