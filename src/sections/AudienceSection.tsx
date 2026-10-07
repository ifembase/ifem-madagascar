import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { IFEM_AUDIENCES } from '../data/ifemData';
import {
  BookMarked,
  GraduationCap,
  Building2,
  Compass,
  Network,
  ShieldCheck,
  UserCheck,
  HeartHandshake,
  MapPinOff,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  BookMarked,
  GraduationCap,
  Building2,
  Compass,
  Network,
  ShieldCheck,
  UserCheck,
};

export const AudienceSection: React.FC = () => {
  return (
    <section id="publics" className="py-20 lg:py-28 bg-white">
      <Container size="xl">
        <SectionTitle
          badge="Bénéficiaires & Acteurs de l’Éducation"
          badgeVariant="primary"
          title="À qui s’adressent nos formations ?"
          subtitle="Des parcours conçus sur mesure pour l’ensemble des acteurs engagés dans le système scolaire et la transmission du savoir à Madagascar."
        />

        {/* Special highlighted priority callout */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#EBF4FC] border-2 border-[#0066B1]/40 shadow-xs relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#0066B1] text-white flex items-center justify-center shrink-0 shadow-md">
              <MapPinOff className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#112156] px-3 py-1 rounded-full inline-block mb-2">
                Priorité Institutionnelle IFEM
              </span>
              <p className="text-base sm:text-lg font-bold text-[#112156] leading-snug">
                « Une attention particulière est accordée aux professionnels exerçant dans les zones rurales, éloignées ou enclavées, où l’accès à la formation demeure difficile. »
              </p>
              <p className="text-xs sm:text-sm text-slate-700 mt-1.5 leading-relaxed">
                Le dispositif de formation est calibré afin de garantir l’égalité des chances pour chaque enseignant, quelle que soit sa localisation géographique.
              </p>
            </div>
          </div>
        </div>

        {/* Audiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IFEM_AUDIENCES.map((item, index) => {
            const Icon = iconMap[item.iconName] || UserCheck;
            return (
              <Card
                key={index}
                className="p-6 flex flex-col border-[#112156]/10 hover:border-[#0066B1] group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EBF4FC] group-hover:bg-[#0066B1] text-[#0066B1] group-hover:text-white transition-all flex items-center justify-center mb-4 shrink-0 shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#112156] group-hover:text-[#0066B1] transition-colors leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-auto">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Additional solidarity banner */}
        <div className="mt-12 p-5 rounded-xl bg-[#F8FAFC] border border-[#112156]/10 flex items-center justify-between flex-wrap gap-4 text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-[#0066B1]" />
            <span className="font-semibold text-[#112156]">Valorisation des acquis de l'expérience et reconnaissance mutuelle</span>
          </div>
          <span className="font-medium text-[#0066B1]">
            Tous les cycles d'enseignement (Primaire, Secondaire I & II, Encadrement)
          </span>
        </div>
      </Container>
    </section>
  );
};
