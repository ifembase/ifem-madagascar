import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Photo } from '../components/ui/Photo';
import { IMAGES } from '../images';
import { IFEM_FOAD_PILLARS } from '../data/ifemData';
import {
  BookOpenCheck,
  PhoneCall,
  UsersRound,
  CheckCircle2,
  LucideIcon,
  WifiOff,
} from 'lucide-react';

const pillarIcons: Record<string, LucideIcon> = {
  BookOpenCheck,
  PhoneCall,
  UsersRound,
};

export const FOADSection: React.FC = () => {
  return (
    <section id="foad" className="py-20 lg:py-28 bg-[#112156] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-radial-[at_top_center] from-[#0066B1]/20 via-[#112156] to-[#0a1438]" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#0066B1]/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <SectionTitle
          badge="Modèle Pédagogique Hybride"
          badgeVariant="primary"
          title="Une formation adaptée aux réalités de Madagascar"
          subtitle="Le dispositif de Formation Ouverte et à Distance (FOAD) de l’IFEM est spécifiquement pensé pour surmonter les contraintes matérielles, l’éloignement et les ruptures d’accès aux réseaux."
          light
        />

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {IFEM_FOAD_PILLARS.map((pillar) => {
            const Icon = pillarIcons[pillar.iconName] || BookOpenCheck;
            return (
              <div
                key={pillar.number}
                className="relative rounded-2xl bg-[#0a1438] border border-[#0066B1]/40 p-8 flex flex-col justify-between shadow-xl hover:border-[#0066B1] transition-all duration-300 group"
              >
                <div>
                  {/* Top indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-mono font-extrabold text-[#0066B1] bg-white px-3 py-1 rounded-lg">
                      {pillar.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#112156] text-[#0066B1] border border-[#0066B1]/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0066B1] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-bold text-[#0066B1] mt-1.5 uppercase tracking-wider">
                    {pillar.subtitle}
                  </p>

                  {/* Core Description */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                    {pillar.description}
                  </p>

                  {/* Concrete key items */}
                  <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
                    {pillar.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#0066B1] shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-200 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-slate-400 italic">
                  Pilier indissociable du cursus IFEM
                </div>
              </div>
            );
          })}
        </div>

        {/* La FOAD en images */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Photo
            src={IMAGES.support}
            alt="Livrets didactiques imprimés de l’IFEM posés sur une table"
            category="Supports"
            title="Livrets de cours imprimés"
            aspectRatio="photo"
            className="border-white/15"
          />
          <Photo
            src={IMAGES.regroupement}
            alt="Participants réunis dans une salle lors d’un regroupement présentiel"
            category="Regroupements"
            title="Regroupement présentiel"
            aspectRatio="photo"
            className="border-white/15"
          />
          <Photo
            src={IMAGES.formation}
            alt="Enseignants en situation d’apprentissage dans une salle de classe"
            category="Formations"
            title="Enseignants en session d’apprentissage"
            aspectRatio="photo"
            className="border-white/15"
          />
        </div>

        {/* Note on distance education practicality */}
        <div className="mt-12 p-4 rounded-xl bg-white/10 border border-white/15 text-center text-xs text-slate-200 flex items-center justify-center gap-2">
          <WifiOff className="w-4 h-4 text-[#0066B1] shrink-0" />
          <span>
            Ce dispositif assure une continuité pédagogique totale, même lors des pannes de réseau électrique ou des zones blanches.
          </span>
        </div>
      </Container>
    </section>
  );
};
