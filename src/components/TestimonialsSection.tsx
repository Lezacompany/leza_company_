import { Star, CheckCircle } from 'lucide-react';

export default function TestimonialsSection() {
  const purchaseTestimonials = [
    {
      name: 'Mariana Santos',
      role: 'Mãe do Noah (5 anos)',
      location: 'Luanda',
      rating: 5,
      comment:
        'O PDF chegou no meu e-mail em menos de 10 minutos! O meu filho agora não dorme sem antes tirar a cartinha do potinho. Foi a melhor compra que fiz para a nossa casa.',
    },
    {
      name: 'Carlos Mendes',
      role: 'Pai da Beatriz (6 anos)',
      location: 'Lisboa',
      rating: 5,
      comment:
        'Muito fácil de imprimir e recortar. As perguntas no final de cada oração abriram o coração da minha filha. Traz uma paz enorme antes de dormir.',
    },
    {
      name: 'Dona Teresa Gonçalves',
      role: 'Avó de 3 netos',
      location: 'Benguela',
      rating: 5,
      comment:
        'A melhor herança que posso deixar para os meus netos é a fé. Eles adoram meter a mão no potinho para sortear. Um material lindo e muito abençoado!',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#171044] via-[#40239A] to-[#7652D8] text-white py-14 sm:py-18 border-y border-[#40239A]/40 relative overflow-hidden">
      {/* Luz ambiente sutil decorativa */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-9 relative z-10">
        {/* Cabeçalho de Testemunhos de Compra */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider backdrop-blur-xs border border-white/25">
            <CheckCircle className="w-3.5 h-3.5 text-white" />
            <span>Testemunhos Reais de Compra</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-xs">
            O que dizem as famílias que já adquiriram o Ebook
          </h3>
          <p className="text-purple-100 text-xs sm:text-sm font-medium">
            ⭐ Avaliação média de 4.9/5 estrelas com entrega imediata em PDF
          </p>
        </div>

        {/* Grade de Depoimentos de Compra */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {purchaseTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-white/80 flex flex-col justify-between shadow-xl shadow-black/10 hover:-translate-y-0.5 transition duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    Compra Verificada
                  </span>
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <p className="font-extrabold text-slate-900 text-xs sm:text-sm">{t.name}</p>
                <p className="text-[11px] text-slate-500 font-medium">{t.role} · {t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
