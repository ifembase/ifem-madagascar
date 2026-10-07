import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';
import { Photo } from '../components/ui/Photo';
import { IMAGES } from '../images';
import { IFEM_IDENTITY } from '../data/ifemData';
import {
  Building2,
  ShieldCheck,
  MapPin,
  UserCheck,
  Award,
  ArrowRight,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="a-propos" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <Container size="xl">
        <SectionTitle
          badge="Présentation Institutionnelle"
          badgeVariant="primary"
          title="L’IFEM en quelques mots"
          subtitle="Un établissement spécialisé dans la formation et la professionnalisation des enseignants et autres professionnels de l’éducation à Madagascar."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Descriptive Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
              <p className="text-lg font-medium text-[#112156] leading-snug">
                L’<strong className="text-[#0066B1]">Institut de Formation des Enseignants à Madagascar (IFEM)</strong> est un établissement dédié à l’élévation des compétences pédagogiques, didactiques et managériales des acteurs éducatifs nationaux.
              </p>
              <p className="text-sm sm:text-base mt-3 text-slate-600">
                L’IFEM répond aux défis majeurs de l’éducation en proposant des parcours diplômants conçus pour être compatibles avec l’exercice quotidien du métier d’enseignant, tout en garantissant une rigueur académique certifiée.
              </p>
            </div>

            {/* Official Institutional Facts Cards */}
            <div className="space-y-4 pt-2">
              {/* Statut Juridique */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#112156]/10 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#EBF4FC] text-[#0066B1] border border-[#0066B1]/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#0066B1]">
                    Statut Légal & Habilitations
                  </h4>
                  <p className="text-sm font-semibold text-[#112156] mt-0.5 leading-snug">
                    {IFEM_IDENTITY.status}
                  </p>
                </div>
              </div>

              {/* Siège Social */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#112156]/10 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#EBF4FC] text-[#0066B1] border border-[#0066B1]/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#0066B1]">
                    Siège de l’Institut
                  </h4>
                  <p className="text-sm font-semibold text-[#112156] mt-0.5 leading-snug">
                    {IFEM_IDENTITY.address.full}
                  </p>
                </div>
              </div>

              {/* Fondateur & Responsable */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#112156] text-white shadow-md border border-[#0066B1]/40">
                <div className="w-10 h-10 rounded-lg bg-[#0066B1] text-white flex items-center justify-center shrink-0 font-bold">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#EBF4FC]">
                    Fondateur et Responsable
                  </h4>
                  <p className="text-base font-extrabold text-white mt-0.5">
                    {IFEM_IDENTITY.founder.name}
                  </p>
                  <p className="text-xs text-slate-200 mt-0.5">
                    {IFEM_IDENTITY.founder.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Action button */}
            <div className="pt-2 flex items-center gap-4">
              <Button
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => handleScroll('mission-vision')}
              >
                En savoir plus sur notre mission
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => handleScroll('contact')}
              >
                Nous contacter
              </Button>
            </div>
          </div>

          {/* Right Column: Institutional Photography */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <Photo
              src={IMAGES.siege}
              alt="Membres de l’équipe de l’IFEM au travail dans les bureaux du siège, à Antananarivo"
              category="Siège Central"
              title="Siège de l’Institut IFEM"
              subtitle="Lot III G Ter Est Ambohijanahary, Antananarivo — Centre de coordination académique et pédagogique"
              aspectRatio="photo"
              objectPosition="60% center"
            />
            <div className="p-4 rounded-xl bg-white border border-[#112156]/10 text-xs text-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0066B1]" />
                <span className="font-medium">Enseignement Supérieur & Professionnalisation</span>
              </div>
              <span className="font-bold text-[#112156]">Antananarivo IV</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
