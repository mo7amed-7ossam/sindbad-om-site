/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { ConsultationSection } from './components/ConsultationSection';
import { AboutSection } from './components/AboutSection';
import { WhySindbadSection } from './components/WhySindbadSection';
import { ProductsSection } from './components/ProductsSection';
import { StatsSection } from './components/StatsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationsSection } from './components/LocationsSection';
import { CatalogSection } from './components/CatalogSection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<string | undefined>();
  const [selectedBranchForModal, setSelectedBranchForModal] = useState<string | undefined>();

  // Synchronize document direction and lang attribute
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleOpenConsultation = (productId?: string, branchId?: string) => {
    setSelectedProductForModal(productId);
    setSelectedBranchForModal(branchId);
    setModalOpen(true);
  };

  const handleScrollToCatalog = () => {
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFB] text-[#0A2E36] font-sans selection:bg-[#009AA6] selection:text-white">
      {/* Top Navigation Bar with Contact Ribbon */}
      <TopBar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      <main className="flex-1">
        {/* 1. Light Premium Hero Section */}
        <HeroSection
          lang={lang}
          onOpenConsultation={() => handleOpenConsultation()}
          onExploreCatalog={handleScrollToCatalog}
        />

        {/* 2. Free 3D Architectural Consultation Section (Lead Capture) */}
        <ConsultationSection lang={lang} />

        {/* 3. About Sindbad & OPPEIN Partnership Section */}
        <AboutSection lang={lang} />

        {/* 4. Why Choose Sindbad (4 Pillars with Controlled Orange Micro-Accents) */}
        <WhySindbadSection lang={lang} />

        {/* 5. Products & Collections Interactive Showcase */}
        <ProductsSection
          lang={lang}
          onSelectProductForConsultation={(prodId) => handleOpenConsultation(prodId)}
        />

        {/* 6. Our Expertise & Numbers (Sindbad Teal Section Break) */}
        <StatsSection lang={lang} />

        {/* 7. Customer Reviews (Verified Google Reviews) */}
        <ReviewsSection lang={lang} />

        {/* 8. Showrooms & Oman Locations Finder */}
        <LocationsSection
          lang={lang}
          onBookBranchVisit={(branchId) => handleOpenConsultation(undefined, branchId)}
        />

        {/* 9. Interactive 2026 Digital Catalog Viewer */}
        <CatalogSection
          lang={lang}
          onOpenConsultation={() => handleOpenConsultation()}
        />
      </main>

      {/* 10. Deep Sindbad Teal Footer */}
      <Footer lang={lang} />

      {/* Persistent WhatsApp Floating Button */}
      <WhatsAppFloat lang={lang} />

      {/* Global Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        lang={lang}
        initialProductId={selectedProductForModal}
        initialBranchId={selectedBranchForModal}
      />
    </div>
  );
}
