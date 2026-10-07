import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Photo } from '../components/ui/Photo';
import { IMAGES } from '../images';
import { IFEM_REGIONAL_ROLES } from '../data/ifemData';
import {
  MessagesSquare,
  Network,
  Archive,
  CalendarDays,
  MapPin,
  Compass,
  CheckCircle2,
  LucideIcon,
} from 'lucide-react';

const roleIcons: Record<string, LucideIcon> = {
  MessagesSquare,
  Network,
  Archive,
  CalendarDays,
};

export const RegionalSection: React.FC = () => {
  return (
    <section id="implantation" className="py-20 lg:py-28 bg-white">
      <Container size="xl">
        <SectionTitle
          badge="Maillage Territorial"
          badgeVariant="primary"
          title="Une présence au plus près des professionnels"
          subtitle="Un réseau de proximité conçu pour rapprocher l’enseignement supérieur des enseignants dans leurs districts et régions d’exercice."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Graphic Representation of Madagascar & 16 Regions */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-2xl bg-[#112156] p-6 sm:p-8 text-white shadow-2xl border border-[#0066B1]/40 overflow-hidden">
              {/* Radial glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#0066B1]/20 rounded-full blur-2xl pointer-events-none" />

              {/* Header badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#0066B1]" />
                  <span className="text-xs font-bold tracking-wider uppercase text-white">
                    Territoire National
                  </span>
                </div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#0066B1] text-white">
                  Madagascar
                </span>
              </div>

              {/* Graphic Silhouette & Regional Markers */}
              <div className="relative flex flex-col items-center justify-center py-6">
                {/* SVG Silhouette representation of Madagascar */}
                <svg
                  viewBox="0 0 200 360"
                  className="w-48 sm:w-56 h-auto drop-shadow-[0_4px_12px_rgba(0,102,177,0.3)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Stylized island silhouette */}
                  <path
                    d="M130 15 C138 22 144 38 140 50 C136 62 130 75 135 90 C140 105 152 130 150 160 C148 190 142 220 135 250 C128 280 115 310 100 335 C92 348 82 355 75 350 C70 345 68 335 70 320 C72 300 80 270 82 240 C84 210 78 185 75 160 C72 130 70 100 80 75 C88 55 100 35 115 20 C122 12 126 10 130 15 Z"
                    className="fill-[#0a1438] stroke-[#0066B1]"
                    strokeWidth="2.5"
                  />
                  {/* Central Highlands accent */}
                  <path
                    d="M115 100 C120 120 122 150 118 180 C114 210 108 230 102 240 C98 220 96 190 100 160 C104 130 110 110 115 100 Z"
                    className="fill-[#112156] stroke-[#0066B1]/40"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />

                  {/* Capital: Antananarivo - Central Office Marker */}
                  <g className="filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                    <circle cx="116" cy="145" r="7" className="fill-white" />
                    <circle cx="116" cy="145" r="14" className="stroke-white animate-ping opacity-75" strokeWidth="1" />
                    <text x="128" y="149" fill="#FFFFFF" fontSize="9" fontWeight="bold">
                      Antananarivo (Siège)
                    </text>
                  </g>

                  {/* 16 Regional Liaison points distribution */}
                  <circle cx="132" cy="45" r="3.5" className="fill-[#0066B1]" />
                  <circle cx="120" cy="70" r="3.5" className="fill-[#0066B1]" />
                  <circle cx="138" cy="95" r="3.5" className="fill-[#0066B1]" />
                  <circle cx="95" cy="115" r="3.5" className="fill-[#0066B1]" />
                  <circle cx="140" cy="135" r="3.5" className="fill-[#0066B1]" />
                  <circle cx="90" cy="155" r="3.5" className="fill-[#0066B1]" />
                  <circle cx="136" cy="175" r="3.5" className="fill-[#0066B1]" />
                  <circle cx="112" cy="195" r="3.5" className="fill-[#0066B1]" />
                  <circle cx="130" cy="215" r="3.5" className="fill-[#0066B1]" />
                  <circle cx="86" cy="225" r="3.5" className="fill-[#0066B1]" />
                  <circle cx="125" cy="250" r="3.5" className="fill-[#0066B1]" />
                  <circle cx="88" cy="265" r="3.5" className="fill-[#0066B1]" />
                  <circle cx="115" cy="285" r="3.5" className="fill-[#0066B1]" />
                  <circle cx="98" cy="305" r="3.5" className="fill-[#0066B1]" />
                  <circle cx="106" cy="325" r="3.5" className="fill-[#0066B1]" />
                  <circle cx="82" cy="335" r="3.5" className="fill-[#0066B1]" />
                </svg>

                {/* Big Stat Overlay */}
                <div className="mt-4 text-center">
                  <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    16
                  </div>
                  <div className="text-sm font-bold text-[#EBF4FC] mt-1">
                    Régions couvertes par les bureaux de liaison
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1 max-w-xs leading-normal font-light">
                    Assurant l’équité territoriale et la proximité avec chaque professionnel en formation.
                  </p>
                </div>
              </div>

              {/* Footer notice */}
              <div className="pt-3 border-t border-white/10 text-[10px] text-slate-300 text-center">
                Coordination continue avec le Bureau Central d’Antananarivo
              </div>
            </div>
          </div>

          {/* Right Column: Roles of Regional Liaison Offices */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div>
              <span className="text-xs uppercase font-mono font-bold tracking-wider text-[#0066B1] bg-[#EBF4FC] px-2.5 py-1 rounded border border-[#0066B1]/30">
                Missions Territoriales
              </span>
              <h3 className="text-2xl font-bold text-[#112156] tracking-tight mt-2">
                Le rôle déterminant des bureaux régionaux
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Les bureaux de liaison régionaux constituent le pont vivant entre l’Institut central et les enseignants exerçant dans les différents districts de Madagascar.
              </p>
            </div>

            {/* 4 Roles Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {IFEM_REGIONAL_ROLES.map((role, idx) => {
                const Icon = roleIcons[role.iconName] || MapPin;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#F8FAFC] border border-[#112156]/10 hover:border-[#0066B1] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#EBF4FC] text-[#0066B1] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-[#112156] leading-snug">
                      {role.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bureaux de liaison en images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Photo
                src={IMAGES.bureauLiaison1}
                alt="Bureau de liaison régional de l’IFEM avec bureau, étagères de dossiers et bannière"
                title="Bureau de liaison régional"
                aspectRatio="photo"
              />
              <Photo
                src={IMAGES.bureauLiaison2}
                alt="Poste d’accueil d’un bureau de liaison de l’IFEM avec ordinateur et bannière"
                title="Poste d’accueil et d’information"
                aspectRatio="photo"
              />
            </div>

            {/* Institutional compliance note */}
            <div className="p-4 rounded-xl bg-[#EBF4FC] border border-[#0066B1]/30 text-xs text-[#112156] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0066B1] shrink-0 mt-0.5" />
              <p className="leading-relaxed font-medium">
                Ce maillage décentralisé permet aux professionnels de poursuivre leur activité professionnelle locale tout en préparant sereinement leur diplôme d’État sans avoir à déménager.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
