import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { IFEM_MISSION, IFEM_VISION } from '../data/ifemData';
import { Target, Compass, CheckCircle2 } from 'lucide-react';

export const MissionVisionSection: React.FC = () => {
  return (
    <section id="mission-vision" className="py-20 lg:py-28 bg-white border-y border-[#112156]/10">
      <Container size="xl">
        <SectionTitle
          badge="Fondements & Ambition"
          badgeVariant="primary"
          title="Mission & Vision"
          subtitle="Un engagement durable pour l’excellence pédagogique, la dignité professorale et l’avenir des enfants de Madagascar."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Mission Block */}
          <div className="relative rounded-2xl bg-[#112156] text-white p-8 sm:p-10 shadow-xl border border-[#0066B1]/40 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#0066B1]/20 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0066B1] text-white flex items-center justify-center shadow-md">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-[#EBF4FC] font-semibold">
                    Notre Engagement
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {IFEM_MISSION.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border-l-4 border-[#0066B1] mb-6">
                <p className="text-base sm:text-lg font-serif italic text-white leading-relaxed">
                  « {IFEM_MISSION.coreText} »
                </p>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed mb-6 font-light">
                Cette mission s’articule autour de la valorisation du métier d’enseignant et de l’amélioration concrète des perspectives professionnelles et socio-économiques de chaque acteur éducatif sur le terrain.
              </p>

              <div className="space-y-3 pt-2">
                {IFEM_MISSION.impactPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0066B1] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-100 leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
              <span>Impact National</span>
              <span className="text-white font-bold bg-[#0066B1] px-2.5 py-0.5 rounded">Éducation de qualité</span>
            </div>
          </div>

          {/* Vision Block */}
          <div className="relative rounded-2xl bg-[#0a1438] text-white p-8 sm:p-10 shadow-xl border border-[#0066B1]/40 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#0066B1]/15 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white text-[#112156] flex items-center justify-center shadow-md">
                  <Compass className="w-6 h-6 text-[#0066B1]" />
                </div>
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-[#0066B1] font-semibold">
                    Notre Horizon
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {IFEM_VISION.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border-l-4 border-white mb-6">
                <p className="text-base sm:text-lg font-serif italic text-white leading-relaxed">
                  « {IFEM_VISION.coreText} »
                </p>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed mb-6 font-light">
                L’IFEM porte l’ambition résolue de participer au renforcement global du système éducatif malgache, en offrant aux enseignants un parcours de progression valorisant et reconnu.
              </p>

              <div className="space-y-3 pt-2">
                {IFEM_VISION.impactPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-100 leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
              <span>Perspective Éducative</span>
              <span className="text-white font-bold bg-[#0066B1] px-2.5 py-0.5 rounded">Reconnaissance & Qualification</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
