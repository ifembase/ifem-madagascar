import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { StatCard } from '../components/ui/StatCard';
import { IFEM_STATS } from '../data/ifemData';
import { ShieldCheck } from 'lucide-react';

export const RepèresSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#112156]/10">
      <Container size="xl">
        <SectionTitle
          badge="Données Factuelles du Document Officiel"
          badgeVariant="primary"
          title="L’IFEM en quelques repères"
          subtitle="Les chiffres clés attestant de la réalité du dispositif et de son ancrage au cœur des défis éducatifs de la Grande Île."
        />

        {/* High impact grid with exact statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {IFEM_STATS.map((stat) => (
            <StatCard key={stat.id} stat={stat} variant="card" />
          ))}
        </div>

        {/* Fact check compliance bar */}
        <div className="mt-12 p-4 rounded-xl bg-[#EBF4FC] border border-[#0066B1]/30 flex items-center justify-between flex-wrap gap-4 text-xs text-[#112156]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0066B1]" />
            <span className="font-semibold">
              Données certifiées extraites du livret officiel de présentation de l’IFEM
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#0066B1] font-bold">
            Source : Document officiel d’habilitation
          </span>
        </div>
      </Container>
    </section>
  );
};
