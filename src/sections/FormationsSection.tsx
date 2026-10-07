import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { IFEM_FORMATIONS } from '../data/ifemData';
import {
  GraduationCap,
  ArrowRight,
  Check,
  Sparkles,
  HelpCircle,
} from 'lucide-react';

interface FormationsSectionProps {
  onSelectFormation?: (formationTitle: string) => void;
}

export const FormationsSection: React.FC<FormationsSectionProps> = ({
  onSelectFormation,
}) => {
  const handleAskInfo = (title: string) => {
    if (onSelectFormation) {
      onSelectFormation(title);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="formations" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <Container size="xl">
        <SectionTitle
          badge="Cycles & Niveaux Habilités"
          badgeVariant="primary"
          title="Nos Formations"
          subtitle="L’IFEM propose des parcours de formation dans le domaine de l’éducation aux niveaux Bac en Éducation, DTS, Licence et Master."
        />

        {/* Narrative context banner */}
        <div className="max-w-4xl mx-auto -mt-4 mb-14 p-6 rounded-2xl bg-white border border-[#112156]/10 shadow-xs text-center">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Ces parcours permettent aux professionnels de développer leurs compétences et leur qualification tout en tenant compte de leur <strong className="text-[#112156]">expérience préalable</strong> et de leurs <strong className="text-[#112156]">responsabilités professionnelles en poste</strong>.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[#0066B1] font-semibold">
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#0066B1]" />
              Rythme compatible avec le travail
            </span>
            <span className="text-slate-300">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#0066B1]" />
              Validation officielle par l’État malgache
            </span>
            <span className="text-slate-300">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#0066B1]" />
              Encadrement pédagogique de proximité
            </span>
          </div>
        </div>

        {/* 4 Formations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
          {IFEM_FORMATIONS.map((f) => (
            <Card
              key={f.id}
              className="p-7 sm:p-8 flex flex-col justify-between border-[#112156]/10 relative overflow-hidden group hover:border-[#0066B1]"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#EBF4FC] rounded-bl-full -z-0 transition-transform group-hover:scale-110" />

              <div className="relative z-10">
                {/* Header: Code & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-[#112156] text-white font-mono font-bold text-sm flex items-center justify-center shadow-xs">
                      {f.code}
                    </span>
                    <Badge variant="primary">{f.levelBadge}</Badge>
                  </div>
                  <GraduationCap className="w-6 h-6 text-[#0066B1]" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#112156] tracking-tight group-hover:text-[#0066B1] transition-colors">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {f.description}
                </p>

                {/* Objective */}
                <div className="mt-5 p-3.5 rounded-xl bg-[#EBF4FC]/60 border border-[#0066B1]/20 text-xs text-slate-700">
                  <div className="font-bold text-[#112156] flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#0066B1]" />
                    <span>Objectif clé :</span>
                  </div>
                  <p className="leading-relaxed">{f.objective}</p>
                </div>

                {/* Audience note */}
                <div className="mt-3 text-xs text-slate-500 italic">
                  <strong>Public cible :</strong> {f.audienceNote}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between relative z-10">
                <span className="text-xs font-bold text-[#0066B1]">
                  Diplôme Habilité
                </span>
                <Button
                  variant="primary"
                  size="sm"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                  onClick={() => handleAskInfo(f.title)}
                >
                  Demander des informations
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Global CTA Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#112156] text-white shadow-xl border border-[#0066B1]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0066B1] text-white flex items-center justify-center shrink-0 shadow-md">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Besoin d’orientation pour choisir votre parcours ?
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 mt-0.5 font-light">
                Nos conseillers pédagogiques évaluent vos prérequis et votre situation professionnelle.
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="md"
            className="bg-white text-[#112156] hover:bg-[#EBF4FC] hover:text-[#0066B1] border-white shrink-0 font-bold"
            onClick={() => handleAskInfo('Orientation Générale')}
          >
            Contacter un conseiller IFEM
          </Button>
        </div>
      </Container>
    </section>
  );
};
