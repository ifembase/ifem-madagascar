import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Photo } from '../components/ui/Photo';
import { IMAGES } from '../images';
import {
  GraduationCap,
  TrendingUp,
  Award,
  CheckCircle2,
} from 'lucide-react';

export const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-20 lg:py-28 bg-white">
      <Container size="xl">
        <SectionTitle
          badge="Rayonnement & Reconnaissance"
          badgeVariant="primary"
          title="Des diplômés et un impact professionnel"
          subtitle="L’IFEM compte déjà plusieurs promotions de diplômés issus de ses différents parcours de formation, contribuant concrètement à transformer l’école malgache."
        />

        {/* Two Dimensions of Impact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Dimension 1: Pour l'Éducation */}
          <div className="p-8 rounded-2xl bg-[#112156] text-white shadow-xl border border-[#0066B1]/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0066B1] text-white flex items-center justify-center shadow-md">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-[#EBF4FC] font-semibold">
                    Dimension Institutionnelle
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Pour l’Éducation à Madagascar
                  </h3>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border-l-4 border-[#0066B1] my-4">
                <p className="text-base font-semibold text-white">
                  Des professionnels mieux formés et des compétences renforcées.
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0066B1] shrink-0 mt-0.5" />
                  <span>Amélioration concrète des résultats d’apprentissage des élèves dans les classes.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0066B1] shrink-0 mt-0.5" />
                  <span>Maîtrise didactique des disciplines scolaires et pédagogie active.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0066B1] shrink-0 mt-0.5" />
                  <span>Diffusion de pratiques éducatives structurées même dans les zones isolées.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white font-semibold">
              Impact Direct sur la Société
            </div>
          </div>

          {/* Dimension 2: Pour les Professionnels */}
          <div className="p-8 rounded-2xl bg-[#0a1438] text-white shadow-xl border border-[#0066B1]/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white text-[#112156] flex items-center justify-center shadow-md">
                  <TrendingUp className="w-6 h-6 text-[#0066B1]" />
                </div>
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-[#0066B1] font-semibold">
                    Dimension Individuelle & Carrière
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Pour les Professionnels de l’Éducation
                  </h3>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border-l-4 border-white my-4">
                <p className="text-base font-semibold text-white">
                  Une qualification et de meilleures perspectives professionnelles.
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>Accès à un grade supérieur (Bac en Éducation, DTS, Licence, Master).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>Opportunités accrues d’évolution salariale et de titularisation professionnelle.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>Valorisation de la dignité et fierté du métier d’enseignant.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white font-semibold">
              Reconnaissance Académique & Sociale
            </div>
          </div>
        </div>

        {/* Visual Showcase: 3 Institutional Photographic Holders */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-[#112156] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#0066B1]" />
              <span>Moments Clés du Parcours Diplômant IFEM</span>
            </h3>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Photothèque Officielle des Promotions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Photo
              src={IMAGES.souten}
              alt="Candidate présentant son mémoire devant le jury, diaporama projeté derrière elle"
              category="Soutenances"
              title="Photo de Soutenance"
              subtitle="Présentation des travaux de recherche pédagogique devant un jury universitaire"
              aspectRatio="photo"
              objectPosition="center 35%"
            />
            <Photo
              src={IMAGES.remiseDiplome1}
              alt="Deux diplômés de l’IFEM en toge et toque présentant leur diplôme"
              category="Cérémonies"
              title="Remise des Diplômes"
              subtitle="Consécration solennelle des lauréats des parcours de formation autorisés"
              aspectRatio="photo"
              objectPosition="center 30%"
            />
            <Photo
              src={IMAGES.promotion}
              alt="Promotion de diplômés de l’IFEM en toges jaunes tenant leur diplôme"
              category="Promotions"
              title="Photo de Promotion"
              subtitle="Promotion d’enseignants diplômés au service des écoles de Madagascar"
              aspectRatio="photo"
              objectPosition="center 40%"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
