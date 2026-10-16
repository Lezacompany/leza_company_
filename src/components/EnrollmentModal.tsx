import { useState, useEffect } from 'react';
import { X, Check, ShieldCheck, Zap, MessageCircle, Send } from 'lucide-react';

export type ModalityType = 'semipresencial' | 'online';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialModality: ModalityType;
}

export default function EnrollmentModal({ isOpen, onClose, initialModality }: EnrollmentModalProps) {
  const [modality, setModality] = useState<ModalityType>(initialModality);
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setModality(initialModality);
  }, [initialModality]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isSemipresencial = modality === 'semipresencial';
  const price = isSemipresencial ? '25.990 Kz' : '15.990 Kz';
  const vagas = isSemipresencial ? '15 vagas disponíveis' : '30 vagas disponíveis';

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim().slice(0, 100);
    const cleanPhone = whatsapp.trim().slice(0, 30);
    const cleanEmail = email.trim().slice(0, 100);
    const message = encodeURIComponent(
      `Olá Domingos Leza Armando! Quero inscrever-me na formação Vendas Automatizadas & Inteligência Artificial.\n\n` +
      `*Modalidade:* ${isSemipresencial ? 'Semipresencial (25.990 Kz)' : '100% Online (15.990 Kz)'}\n` +
      `*Nome:* ${cleanName || 'Não informado'}\n` +
      `*WhatsApp:* ${cleanPhone || 'Não informado'}\n` +
      `*E-mail:* ${cleanEmail || 'Não informado'}\n\n` +
      `Por favor, envie-me as coordenadas para formalizar a inscrição.`
    );
    // WhatsApp redirect to advisor/trainer with secure rel
    window.open(`https://wa.me/?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-purple-900/20 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header com degradê oficial */}
        <div className="bg-gradient-to-r from-[#171044] via-[#40239A] to-[#7652D8] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-purple-200 text-xs font-bold uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5 text-amber-300" />
            <span>Inscrição na Formação</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Vendas Automatizadas & IA
          </h3>
          <p className="text-purple-100 text-xs sm:text-sm mt-1">
            Formador: Domingos Leza Armando
          </p>
        </div>

        {/* Conteúdo com scroll */}
        <form onSubmit={handleConfirm} className="p-6 overflow-y-auto space-y-5">
          {/* Seletor de Modalidade */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Selecione a Modalidade:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setModality('semipresencial')}
                className={`p-3.5 rounded-2xl border-2 text-left transition cursor-pointer flex flex-col justify-between ${
                  isSemipresencial
                    ? 'border-[#7652D8] bg-purple-50/70 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-slate-900">Semipresencial</span>
                  {isSemipresencial && (
                    <span className="w-4 h-4 rounded-full bg-[#40239A] text-white flex items-center justify-center text-[10px]">
                      ✓
                    </span>
                  )}
                </div>
                <div className="text-base font-black text-[#40239A]">25.990 Kz</div>
                <div className="text-[11px] text-slate-500 font-medium">15 vagas</div>
              </button>

              <button
                type="button"
                onClick={() => setModality('online')}
                className={`p-3.5 rounded-2xl border-2 text-left transition cursor-pointer flex flex-col justify-between ${
                  !isSemipresencial
                    ? 'border-[#7652D8] bg-purple-50/70 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-slate-900">100% Online</span>
                  {!isSemipresencial && (
                    <span className="w-4 h-4 rounded-full bg-[#40239A] text-white flex items-center justify-center text-[10px]">
                      ✓
                    </span>
                  )}
                </div>
                <div className="text-base font-black text-[#40239A]">15.990 Kz</div>
                <div className="text-[11px] text-slate-500 font-medium">30 vagas</div>
              </button>
            </div>
          </div>

          {/* Resumo dos Benefícios Inclusos */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 text-xs text-slate-700 space-y-2">
            <div className="font-bold text-slate-900 flex items-center justify-between">
              <span>Incluído no plano {isSemipresencial ? 'Semipresencial' : '100% Online'}:</span>
              <span className="text-[#40239A] font-black">{vagas}</span>
            </div>
            <ul className="space-y-1.5 text-slate-600">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#40239A] shrink-0" />
                <span>Formação online durante 3 dias</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#40239A] shrink-0" />
                <span>E-book de apoio completo</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#40239A] shrink-0" />
                <span>Acompanhamento {isSemipresencial ? 'online' : '100% online'}</span>
              </li>
              {isSemipresencial ? (
                <li className="flex items-center gap-2 font-semibold text-slate-800">
                  <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Sessão presencial para esclarecimento de dúvidas (sábado)</span>
                </li>
              ) : (
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#40239A] shrink-0" />
                  <span>Certificado digital enviado por e-mail ou WhatsApp</span>
                </li>
              )}
              {isSemipresencial && (
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#40239A] shrink-0" />
                  <span>Certificado de participação oficial</span>
                </li>
              )}
            </ul>
          </div>

          {/* Dados do Participante */}
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nome Completo *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Manuel Silva"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#7652D8] focus:ring-2 focus:ring-[#7652D8]/20 text-sm outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                WhatsApp / Telefone *
              </label>
              <input
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="Ex: 923 456 789"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#7652D8] focus:ring-2 focus:ring-[#7652D8]/20 text-sm outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                E-mail (opcional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ex: seuemail@exemplo.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#7652D8] focus:ring-2 focus:ring-[#7652D8]/20 text-sm outline-none transition"
              />
            </div>
          </div>

          {/* Resumo Financeiro */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-sm font-bold text-slate-700">Total do Investimento:</span>
            <span className="text-2xl font-black text-[#171044]">{price}</span>
          </div>

          {/* Botão de Submissão */}
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#171044] via-[#40239A] to-[#7652D8] hover:brightness-110 text-white font-black text-base shadow-xl shadow-[#40239A]/25 transition duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-amber-300" />
            <span>Confirmar Inscrição na Modalidade {isSemipresencial ? 'Semipresencial' : 'Online'}</span>
          </button>

          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Atendimento direto com a equipa do formador Domingos Leza Armando</span>
          </div>
        </form>
      </div>
    </div>
  );
}
