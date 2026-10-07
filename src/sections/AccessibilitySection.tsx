import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import {
  BookOpen,
  PhoneCall,
  UsersRound,
  Plus,
  Equal,
  Sparkles,
} from 'lucide-react';

export const AccessibilitySection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#112156]/10">
      <Container size="xl">
        <SectionTitle
          badge="Accessibilité Territoriale"
          badgeVariant="primary"
          title="Une formation accessible aux professionnels éloignés"
          subtitle="Un choix pédagogique réaliste, pragmatique et inclusif, calibré pour la réalité quotidienne des enseignants de brousse et des localités isolées."
        />

        {/* Big 95% Focus banner */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-[#112156]/15 p-8 sm:p-10 shadow-sm mb-16 text-center">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#EBF4FC] text-[#0066B1] font-extrabold text-5xl sm:text-6xl tracking-tight mb-4 border border-[#0066B1]/30">
            95 %
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#112156] tracking-tight">
            des professionnels en formation sont des enseignants
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Enseignants fonctionnaires ou non fonctionnaires (ENF / FRAM) exerçant quotidiennement dans des zones où l’accès à Internet et à l’électricité peut être difficile, intermittent voire inexistant.
          </p>

          <div className="mt-6 p-4 rounded-xl bg-[#112156] text-white max-w-2xl mx-auto border border-[#0066B1]/40">
            <p className="text-sm sm:text-base font-serif italic text-white">
              « L’IFEM a donc fait le choix d’un dispositif qui ne repose pas exclusivement sur le numérique. »
            </p>
          </div>
        </div>

        {/* Formula Equation Visual Box */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#0066B1] bg-white px-3 py-1 rounded-full border border-[#0066B1]/20">
              La Formule d’Inclusion Éducative IFEM
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
            {/* Element 1 */}
            <div className="md:col-span-2 p-6 rounded-xl bg-white border border-[#112156]/10 shadow-xs text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-[#EBF4FC] text-[#0066B1] flex items-center justify-center mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-[#112156] text-base">Supports imprimés</h4>
              <p className="text-xs text-slate-500 mt-1">
                Livrets didactisés remis physiquement sans besoin de connexion
              </p>
            </div>

            {/* Operator + */}
            <div className="md:col-span-1 flex justify-center py-2 md:py-0">
              <div className="w-9 h-9 rounded-full bg-[#112156] text-white flex items-center justify-center font-bold">
                <Plus className="w-5 h-5" />
              </div>
            </div>

            {/* Element 2 */}
            <div className="md:col-span-2 p-6 rounded-xl bg-white border border-[#112156]/10 shadow-xs text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-[#EBF4FC] text-[#0066B1] flex items-center justify-center mb-3">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-[#112156] text-base">Accompagnement à distance</h4>
              <p className="text-xs text-slate-500 mt-1">
                Suivi téléphonique direct, WhatsApp, email et orientation régulière
              </p>
            </div>

            {/* Operator + */}
            <div className="md:col-span-1 flex justify-center py-2 md:py-0">
              <div className="w-9 h-9 rounded-full bg-[#112156] text-white flex items-center justify-center font-bold">
                <Plus className="w-5 h-5" />
              </div>
            </div>

            {/* Element 3 */}
            <div className="md:col-span-2 md:col-start-2 lg:col-span-2 p-6 rounded-xl bg-white border border-[#112156]/10 shadow-xs text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-[#EBF4FC] text-[#0066B1] flex items-center justify-center mb-3">
                <UsersRound className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-[#112156] text-base">Regroupement présentiel</h4>
              <p className="text-xs text-slate-500 mt-1">
                Ateliers pratiques mensuels, tutorat, échanges et évaluations
              </p>
            </div>

            {/* Operator = */}
            <div className="md:col-span-1 flex justify-center py-2 md:py-0">
              <div className="w-10 h-10 rounded-full bg-[#0066B1] text-white flex items-center justify-center font-bold shadow-sm">
                <Equal className="w-6 h-6" />
              </div>
            </div>

            {/* Result */}
            <div className="md:col-span-2 p-6 rounded-xl bg-[#112156] text-white shadow-md text-center flex flex-col items-center border border-[#0066B1]/40">
              <div className="w-12 h-12 rounded-xl bg-[#0066B1] text-white flex items-center justify-center mb-3 shadow-sm">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-white text-base">Formation Accessible</h4>
              <p className="text-xs text-[#EBF4FC] mt-1 font-light">
                100% adaptée aux réalités malgaches et valorisante pour tous
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
