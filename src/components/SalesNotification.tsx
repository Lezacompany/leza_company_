import { useState, useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import productMockupImg from '../assets/images/potinho_livro_mockup_1791366049836.jpg';

interface SaleEvent {
  name: string;
  city: string;
  timeAgo: string;
}

const SALE_EVENTS: SaleEvent[] = [
  { name: 'Ana M.', city: 'Luanda, Angola', timeAgo: 'há 4 minutos' },
  { name: 'Paula S.', city: 'Benguela, Angola', timeAgo: 'há 9 minutos' },
  { name: 'Dra. Cristina B.', city: 'Lisboa, Portugal', timeAgo: 'há 16 minutos' },
  { name: 'Nelson K.', city: 'Huambo, Angola', timeAgo: 'há 22 minutos' },
  { name: 'Miriam T.', city: 'Lubango, Angola', timeAgo: 'há 31 minutos' },
  { name: 'Joana F.', city: 'Porto, Portugal', timeAgo: 'há 45 minutos' },
];

export default function SalesNotification() {
  const [currentEvent, setCurrentEvent] = useState<SaleEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    let index = 0;
    const triggerNotification = () => {
      setCurrentEvent(SALE_EVENTS[index % SALE_EVENTS.length]);
      setVisible(true);
      index++;

      // Hide after 5 seconds
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    // First appearance after 6 seconds
    const firstTimeout = setTimeout(triggerNotification, 6000);

    // Repeat every 18 seconds
    const interval = setInterval(triggerNotification, 18000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed || !currentEvent || !visible) return null;

  return (
    <div className="fixed bottom-20 left-4 z-40 max-w-xs sm:max-w-sm bg-white rounded-2xl p-3 shadow-xl border border-emerald-300/60 flex items-center gap-3 transition-all duration-300 animate-slide-up">
      <img
        src={productMockupImg}
        alt="Potinho de Oração"
        className="w-12 h-12 rounded-xl object-cover border border-emerald-200 shrink-0"
        referrerPolicy="no-referrer"
      />

      <div className="flex-1 min-w-0 pr-1">
        <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-800">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span className="truncate">{currentEvent.name} de {currentEvent.city}</span>
        </div>
        <p className="text-xs font-semibold text-slate-800 truncate">
          Acabou de adquirir o Potinho de Oração
        </p>
        <span className="text-[10px] text-slate-500 font-medium">
          {currentEvent.timeAgo} • Envio em menos de 1h
        </span>
      </div>

      <button
        onClick={() => setDismissed(true)}
        className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition"
        title="Fechar notificação"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
