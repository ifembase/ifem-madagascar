import React from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Photo } from '../components/ui/Photo';
import { IFEM_IDENTITY } from '../data/ifemData';
import { IMAGES } from '../images';
import {
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const handleSmoothScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative bg-[#112156] text-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background gradients in deep navy and ifem blue */}
      <div className="absolute inset-0 bg-radial-[at_top_right] from-[#0066B1]/30 via-[#112156] to-[#0a1438] opacity-95" />
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0066B1]/20 rounded-full blur-3xl pointer-events-none animate-blob" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0066B1]/10 rounded-full blur-3xl pointer-events-none animate-blob [animation-delay:-7s]" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start hero-stagger">
            {/* Official Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#0066B1]/60 text-white text-xs sm:text-sm font-semibold mb-6 backdrop-blur-xs shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0066B1] animate-pulse" />
              <span>Institut de Formation des Enseignants à Madagascar</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Contruison la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#EBF4FC] to-[#0066B1] animate-text-shimmer">
                société de demain
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-lg sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl">
              Une formation adaptée aux réalités professionnelles, géographiques et socio-économiques de Madagascar.
            </p>

            {/* Official Slogan Box */}
            <div className="mt-6 p-4 sm:p-5 rounded-xl bg-[#0a1438]/80 border-l-4 border-[#0066B1] border-r border-t border-b border-white/10 backdrop-blur-xs max-w-2xl">
              <p className="text-sm sm:text-base font-serif italic text-white leading-relaxed">
                {IFEM_IDENTITY.slogan}
              </p>
            </div>

            {/* Quick trust bullets */}
            <div className="mt-6 flex flex-wrap gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0066B1] shrink-0" />
                <span className="font-medium">Autorisé par l’État malgache</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0066B1] shrink-0" />
                <span className="font-medium">Parcours Bac, DTS, Licence & Master</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0066B1] shrink-0" />
                <span className="font-medium">16 Régions couvertes</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => handleSmoothScroll('formations')}
              >
                Nos formations
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white/40 hover:bg-white hover:text-[#112156]"
                onClick={() => handleSmoothScroll('a-propos')}
              >
                Découvrir l’IFEM
              </Button>
            </div>
          </div>

          {/* Right Visual Composition / Institutional Photography Placeholder */}
          <div className="lg:col-span-5 hero-visual">
            <div className="relative mx-auto max-w-md lg:max-w-none animate-float">
              {/* Decorative accent backing cards */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#0066B1] to-[#112156] blur-lg opacity-60" />

              <div className="relative rounded-2xl bg-[#0a1438] border border-[#0066B1]/40 p-5 shadow-2xl overflow-hidden">
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#0066B1] flex items-center justify-center text-white">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white uppercase tracking-wider block">
                        Cadre Institutionnel
                      </span>
                      <span className="text-[11px] text-slate-300">
                        Antananarivo & 16 régions
                      </span>
                    </div>
                  </div>
                  <Badge variant="accent">Habilités</Badge>
                </div>

                {/* Photo institutionnelle principale */}
                <Photo
                  src={IMAGES.pdgetautre}
                  alt="Diplômés, responsables et invités de l’IFEM réunis sur scène lors de la cérémonie de remise des diplômes"
                  title="Professionnels de l’Éducation & Diplômés"
                  subtitle="Promotion d’enseignants et cadres éducatifs formés par l’IFEM à travers Madagascar"
                  aspectRatio="photo"
                  className="mt-4 border-[#0066B1]/40"
                  eager
                  kenBurns
                />

                {/* Micro highlights under image */}
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#112156] border border-[#0066B1]/30 text-white">
                    <span className="text-[#0066B1] font-bold text-base block">95 %</span>
                    <span className="text-slate-200 text-[11px] leading-tight block">
                      Enseignants fonctionnaires & ENF
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#112156] border border-[#0066B1]/30 text-white">
                    <span className="text-white font-bold text-base block">100 %</span>
                    <span className="text-slate-200 text-[11px] leading-tight block">
                      Adapté aux zones rurales
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
