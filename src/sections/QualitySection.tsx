import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { IFEM_CENTRAL_FUNCTIONS } from '../data/ifemData';
import {
  ShieldCheck,
  Building2,
  FileCheck2,
  CheckCircle,
} from 'lucide-react';

export const QualitySection: React.FC = () => {
  return (
    <section id="qualite" className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-[#112156]/10">
      <Container size="xl">
        <SectionTitle
          badge="Gouvernance Académique"
          badgeVariant="primary"
          title="Organisation & Assurance Qualité"
          subtitle="Une chaîne rigoureuse de supervision académique assurant la conformité des diplômes et la haute compétence du corps des formateurs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bureau Central - 6 Fonctions */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#112156] text-white flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#0066B1] font-semibold">
                  Antananarivo (Siège)
                </span>
                <h3 className="text-xl font-bold text-[#112156]">
                  Attributions du Bureau Central
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Le Bureau Central de l’IFEM assure le pilotage scientifique, administratif et réglementaire des formations dispensées sur tout le territoire national.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {IFEM_CENTRAL_FUNCTIONS.map((f, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white border border-[#112156]/10 shadow-xs flex flex-col justify-between"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#EBF4FC] text-[#0066B1] text-xs font-bold flex items-center justify-center shrink-0 border border-[#0066B1]/30">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-[#112156] leading-snug">
                        {f.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Direction de l'Assurance Qualité (DAQ) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="rounded-2xl bg-[#112156] text-white p-7 sm:p-8 shadow-xl border border-[#0066B1]/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#0066B1]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#0066B1] text-white flex items-center justify-center font-bold shadow-md">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-mono tracking-widest text-[#EBF4FC] font-semibold">
                    Organe Régulateur Interne
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Direction de l’Assurance Qualité (DAQ)
                  </h3>
                </div>
              </div>

              {/* Exact official sentence from booklet */}
              <div className="p-4 rounded-xl bg-white/10 border-l-4 border-[#0066B1] mb-6">
                <p className="text-sm sm:text-base font-serif italic text-white leading-relaxed">
                  « La Direction de l’Assurance Qualité (DAQ) assure le suivi et la validation des formateurs intervenant dans le dispositif. »
                </p>
              </div>

              <div className="space-y-3 text-xs text-slate-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#0066B1] shrink-0 mt-0.5" />
                  <span>Validation préalable des profils académiques et pédagogiques des formateurs.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#0066B1] shrink-0 mt-0.5" />
                  <span>Évaluation continue de la pertinence des livrets et des épreuves.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#0066B1] shrink-0 mt-0.5" />
                  <span>Conformité absolue aux directives officielles du Ministère de tutelle.</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                <span>Contrôle Qualité Continu</span>
                <span className="text-white font-bold bg-[#0066B1] px-2 py-0.5 rounded">Garantie d’Excellence</span>
              </div>
            </div>

            {/* Ministry coordination reminder */}
            <div className="p-4 rounded-xl bg-white border border-[#112156]/10 text-xs text-slate-700 flex items-center gap-3">
              <FileCheck2 className="w-5 h-5 text-[#0066B1] shrink-0" />
              <p>
                Sujets d’évaluation et d’examen systématiquement soumis pour approbation aux autorités éducatives compétentes.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
