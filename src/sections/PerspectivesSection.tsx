import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { IFEM_PERSPECTIVES } from '../data/ifemData';
import {
  Laptop,
  Building,
  Library,
  Wifi,
  Sun,
  CheckCircle2,
  Hourglass,
  LucideIcon,
} from 'lucide-react';

const perspectiveIcons: Record<string, LucideIcon> = {
  Laptop,
  Building,
  Library,
  Wifi,
  Sun,
};

export const PerspectivesSection: React.FC = () => {
  return (
    <section id="perspectives" className="py-20 lg:py-28 bg-white">
      <Container size="xl">
        <SectionTitle
          badge="Projets & Avenir"
          badgeVariant="primary"
          title="Les perspectives de développement de l’IFEM"
          subtitle="Des axes prioritaires d’investissements et d’équipements structurants pour amplifier l’autonomie et la qualité d’apprentissage des enseignants."
        />

        {/* Development Notice */}
        <div className="max-w-4xl mx-auto -mt-6 mb-14 p-5 rounded-2xl bg-[#EBF4FC] border border-[#0066B1]/30 flex items-start gap-3.5 text-xs sm:text-sm text-[#112156]">
          <Hourglass className="w-5 h-5 text-[#0066B1] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="font-bold">Précision institutionnelle :</strong> Les axes détaillés ci-dessous constituent le <em>plan de développement prospectif</em> de l’IFEM. Ils orientent la recherche de partenariats techniques et de renforcements matériels progressifs pour les années à venir.
          </p>
        </div>

        {/* 5 Axes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {IFEM_PERSPECTIVES.map((axis) => {
            const Icon = perspectiveIcons[axis.iconName] || Laptop;
            return (
              <div
                key={axis.number}
                className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#112156]/10 hover:border-[#0066B1] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-extrabold text-[#0066B1] bg-[#EBF4FC] px-2.5 py-0.5 rounded-lg border border-[#0066B1]/20">
                      Axe {axis.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white text-[#112156] border border-[#112156]/15 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                      <Icon className="w-5 h-5 text-[#0066B1]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#112156] group-hover:text-[#0066B1] transition-colors leading-snug">
                    {axis.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {axis.summary}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#112156]/10 space-y-2">
                    {axis.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0066B1] shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#112156]/10 text-[11px] text-[#0066B1] font-bold">
                  Projet de renforcement en cours
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
