/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Hero from './components/Hero';
import EmotionalHook from './components/EmotionalHook';
import BenefitsSection from './components/BenefitsSection';
import InstructorSection from './components/InstructorSection';
import PricingBox from './components/PricingBox';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import EnrollmentModal, { ModalityType } from './components/EnrollmentModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModality, setSelectedModality] = useState<ModalityType>('semipresencial');

  const handleOpenEnrollment = (modality: ModalityType) => {
    setSelectedModality(modality);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF7] text-slate-800 flex flex-col antialiased selection:bg-purple-200 selection:text-[#171044]">
      {/* Conteúdo Principal Semântico */}
      <main className="flex-1">
        {/* 1. Flyer Oficial da Formação */}
        <EmotionalHook />

        {/* 2. Hero Principal com Título, Frase de Impacto e Botão */}
        <Hero />

        {/* 3. Para Quem É Esta Formação (5 públicos) */}
        <BenefitsSection />

        {/* 4. Apresentação do Formador Domingos Leza Armando */}
        <InstructorSection />

        {/* 5. Preços e Modalidades (Semipresencial: 25.990 Kz | 100% Online: 15.990 Kz) */}
        <PricingBox onSelectModality={handleOpenEnrollment} />

        {/* 6. Participantes Confirmados */}
        <FaqSection />
      </main>

      {/* Rodapé Semântico */}
      <Footer />

      {/* Modal de Inscrição com modalidade pré-selecionada */}
      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialModality={selectedModality}
      />
    </div>
  );
}
