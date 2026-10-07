import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Photo } from '../components/ui/Photo';
import { IFEM_CURRENT_MEANS } from '../data/ifemData';
import { IMAGES } from '../images';
import {
  Monitor,
  School,
  MapPin,
  Layers,
  Info,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  School,
  MapPin,
  Layers,
};

export const ResourcesSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-[#112156]/10">
      <Container size="xl">
        <SectionTitle
          badge="Infrastructures Réelles"
          badgeVariant="primary"
          title="Des moyens au service de la formation"
          subtitle="Une organisation rationnelle et pragmatique mobilisant des ressources adaptées à chaque étape du parcours pédagogique."
        />

        {/* Realistic Institutional Transparency Disclaimer */}
        <div className="max-w-3xl mx-auto -mt-6 mb-12 p-4 rounded-xl bg-[#EBF4FC] border border-[#0066B1]/30 text-xs text-[#112156] flex items-start gap-3">
          <Info className="w-5 h-5 text-[#0066B1] shrink-0 mt-0.5" />
          <p className="leading-relaxed font-medium">
            L’IFEM s’appuie sur des infrastructures existantes et des partenariats locaux flexibles pour garantir l’effectivité des cours tout en maintenant des coûts de formation accessibles aux enseignants malgaches.
          </p>
        </div>

        {/* 4 Means Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {IFEM_CURRENT_MEANS.map((mean, idx) => {
            const Icon = iconMap[mean.iconName] || Layers;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#112156]/10 shadow-xs flex flex-col justify-between hover:border-[#0066B1] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EBF4FC] text-[#0066B1] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0066B1] bg-[#EBF4FC] px-2.5 py-1 rounded border border-[#0066B1]/30">
                      {mean.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#112156] leading-snug">
                    {mean.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {mean.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-[#0066B1] font-semibold">
                  Ressource mobilisée dans le dispositif actif
                </div>
              </div>
            );
          })}
        </div>
        {/* Les équipements en images */}
        <div className="mt-14">
          <h3 className="text-lg font-bold text-[#112156] mb-6 flex items-center gap-2">
            <Monitor className="w-5 h-5 text-[#0066B1]" />
            <span>Nos équipements en images</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Photo
              src={IMAGES.equipement1}
              alt="Ordinateurs, écrans et imprimante sur un bureau de l’IFEM"
              title="Postes informatiques"
              aspectRatio="photo"
            />
            <Photo
              src={IMAGES.equipement2}
              alt="Photocopieur multifonction installé dans un bureau de l’IFEM"
              title="Photocopieur"
              aspectRatio="photo"
            />
            <Photo
              src={IMAGES.equipement3}
              alt="Box internet Wi-Fi posée dans un bureau de l’IFEM"
              title="Connexion internet"
              aspectRatio="photo"
            />
            <Photo
              src={IMAGES.equipement4}
              alt="Vidéoprojecteur posé sur un bureau de l’IFEM"
              title="Vidéoprojecteur"
              aspectRatio="photo"
            />
            <Photo
              src={IMAGES.bibliotheque}
              alt="Salle de documentation avec grande table, bancs et étagères d’ouvrages"
              title="Salle de documentation"
              aspectRatio="photo"
              className="col-span-2 md:col-span-1"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
