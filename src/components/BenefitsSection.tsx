import { CheckCircle2, Target } from 'lucide-react';

export default function BenefitsSection() {
  const targetAudience = [
    {
      title: 'Empreendedores',
      description: 'Que querem escalar as suas operações e multiplicar vendas sem aumentar custos com equipas.',
    },
    {
      title: 'Comerciantes e Vendedores',
      description: 'Que procuram acelerar o fecho de negócios e responder clientes com rapidez e profissionalismo.',
    },
    {
      title: 'Prestadores de Serviços',
      description: 'Que pretendem automatizar o atendimento, agendamentos e prospecção de novos contratos.',
    },
    {
      title: 'Criadores e Vendedores de Produtos Digitais',
      description: 'Que querem criar conteúdos de alta conversão, gerir campanhas e automatizar lançamentos.',
    },
    {
      title: 'Pessoas Interessadas em IA, Marketing e Vendas',
      description: 'Que desejam dominar a habilidade mais valorizada do mercado actual para se destacar.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PARA QUEM É ESTA FORMAÇÃO? */}
        <div className="bg-gradient-to-br from-[#171044] via-[#40239A] to-[#7652D8] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-purple-200 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
              <Target className="w-4 h-4 text-amber-300" />
              <span>Público-Alvo</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Para quem é esta formação?
            </h3>
            <p className="text-purple-100 text-sm sm:text-base">
              Desenvolvida especialmente para quem procura resultados rápidos no mundo dos negócios e serviços.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {targetAudience.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 hover:bg-white/15 backdrop-blur-xs p-5 rounded-2xl border border-white/20 transition duration-200 flex flex-col justify-between"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-white text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-purple-100 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
