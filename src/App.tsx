import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { StatsBanner } from './sections/StatsBanner';
import { AboutSection } from './sections/AboutSection';
import { MissionVisionSection } from './sections/MissionVisionSection';
import { FormationsSection } from './sections/FormationsSection';
import { AudienceSection } from './sections/AudienceSection';
import { FOADSection } from './sections/FOADSection';
import { AccessibilitySection } from './sections/AccessibilitySection';
import { RegionalSection } from './sections/RegionalSection';
import { QualitySection } from './sections/QualitySection';
import { ImpactSection } from './sections/ImpactSection';
import { ResourcesSection } from './sections/ResourcesSection';
import { PerspectivesSection } from './sections/PerspectivesSection';
import { GallerySection } from './sections/GallerySection';
import { RepèresSection } from './sections/RepèresSection';
import { ContactSection } from './sections/ContactSection';
import { IFEM_IDENTITY } from './data/ifemData';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function App() {
  const [selectedFormation, setSelectedFormation] = useState<string>('');
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#112156] font-sans selection:bg-[#0066B1] selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Key figures banner */}
        <StatsBanner />

        {/* 3. À propos */}
        <AboutSection />

        {/* 4. Mission & Vision */}
        <MissionVisionSection />

        {/* 5. Formations */}
        <FormationsSection onSelectFormation={setSelectedFormation} />

        {/* 6. Publics visés */}
        <AudienceSection />

        {/* 7. Dispositif FOAD */}
        <FOADSection />

        {/* 8. Accessibilité territoriale */}
        <AccessibilitySection />

        {/* 9. Implantation régionale */}
        <RegionalSection />

        {/* 10. Organisation & Assurance qualité (Bureau Central & DAQ) */}
        <QualitySection />

        {/* 11. Impact & Diplômés */}
        <ImpactSection />

        {/* 12. Moyens actuels */}
        <ResourcesSection />

        {/* 13. Perspectives de développement */}
        <PerspectivesSection />

        {/* 14. Galerie d'archives */}
        <GallerySection />

        {/* 15. Repères officiels */}
        <RepèresSection />

        {/* 16. Contact */}
        <ContactSection preselectedFormation={selectedFormation} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Back to top button */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#112156] hover:bg-[#0a1438] text-white shadow-lg backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 cursor-pointer border border-[#0066B1]/40"
            aria-label="Retour en haut de page"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        )}

        {/* Direct WhatsApp Quick Chat Bubble */}
        <a
          href={`https://wa.me/${IFEM_IDENTITY.whatsappRaw}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-[#0066B1] hover:bg-[#005391] text-white shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center cursor-pointer border-2 border-white"
          aria-label="Ouvrir WhatsApp direct IFEM"
          title="WhatsApp direct IFEM"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  );
}
