import React from 'react';
import { Container } from '../components/ui/Container';
import { Users, MapPin, Award, BookOpen } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  const highlights = [
    {
      value: '95 %',
      label: 'Professionnels en formation enseignants',
      detail: 'Enseignants fonctionnaires et non fonctionnaires',
      icon: Users,
    },
    {
      value: '16',
      label: 'Régions couvertes',
      detail: 'Présence active par bureaux de liaison',
      icon: MapPin,
    },
    {
      value: 'Plusieurs',
      label: 'Promotions accompagnées',
      detail: 'Diplômés qualifiés en exercice',
      icon: Award,
    },
    {
      value: '1',
      label: 'Dispositif FOAD adapté',
      detail: 'Conçu pour le contexte malgache',
      icon: BookOpen,
    },
  ];

  return (
    <div className="relative -mt-10 sm:-mt-12 z-20">
      <Container size="xl">
        <div className="rounded-2xl bg-white shadow-xl border border-[#112156]/15 p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex items-start gap-4 ${
                    index > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EBF4FC] text-[#0066B1] border border-[#0066B1]/20 flex items-center justify-center shrink-0 shadow-xs">
                    <Icon className="w-6 h-6 text-[#0066B1]" />
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#112156] tracking-tight block">
                      {item.value}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-[#112156] leading-snug mt-0.5">
                      {item.label}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};
