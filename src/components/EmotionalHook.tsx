import bannerImg from '../assets/images/vendas_banner_opt.webp';

export default function EmotionalHook() {
  return (
    <section className="pt-8 pb-6 sm:pt-12 sm:pb-8 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#171044] rounded-3xl overflow-hidden shadow-2xl shadow-purple-950/15 border border-purple-900/10 max-w-2xl mx-auto">
          <img
            src={bannerImg}
            alt="Vendas Automatizadas & Inteligência Artificial - Leza Company"
            width={900}
            height={1200}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-auto object-contain block mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
