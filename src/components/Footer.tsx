import React from 'react';
import { Container } from './ui/Container';
import { IFEM_IDENTITY } from '../data/ifemData';
import { LOGOS } from '../images';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#112156] text-slate-200 border-t border-[#0066B1]/40">
      {/* Upper footer */}
      <div className="py-14 lg:py-16 border-b border-white/10">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="mb-4">
                <div className="inline-block rounded-xl bg-white p-2.5 shadow-md">
                  <img
                    src={LOGOS.withBackground}
                    alt="IFEM — Institut de Formation des Enseignants à Madagascar"
                    className="h-14 sm:h-16 w-auto object-contain"
                    width={2172}
                    height={724}
                    loading="lazy"
                  />
                </div>
              </div>

              <p className="text-white text-sm leading-relaxed italic border-l-3 border-[#0066B1] pl-3 py-1 my-3 bg-white/5 rounded-r">
                {IFEM_IDENTITY.slogan}
              </p>

              <div className="mt-4 flex items-start gap-2.5 text-xs text-slate-300 bg-[#0a1438] p-3 rounded-lg border border-[#0066B1]/30">
                <ShieldCheck className="w-4 h-4 text-[#0066B1] shrink-0 mt-0.5" />
                <span>
                  {IFEM_IDENTITY.status}
                </span>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={`https://wa.me/${IFEM_IDENTITY.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#0066B1] text-white hover:bg-[#005391] transition-colors border border-white/20 shadow-sm"
                  aria-label="Contacter via WhatsApp"
                  title="WhatsApp IFEM"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={IFEM_IDENTITY.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#0a1438] text-white hover:bg-[#0066B1] transition-colors border border-[#0066B1]/40 shadow-sm"
                  aria-label="Profil Facebook officiel"
                  title="Facebook du Fondateur"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${IFEM_IDENTITY.email}`}
                  className="p-2.5 rounded-lg bg-[#0a1438] text-white hover:bg-[#0066B1] transition-colors border border-[#0066B1]/40 shadow-sm"
                  aria-label="Envoyer un courriel"
                  title="Email IFEM"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Navigation links */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0066B1]" />
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: 'Accueil', id: 'accueil' },
                  { label: 'À propos', id: 'a-propos' },
                  { label: 'Formations', id: 'formations' },
                  { label: 'Publics visés', id: 'publics' },
                  { label: 'Dispositif FOAD', id: 'foad' },
                  { label: 'Implantation', id: 'implantation' },
                  { label: 'Galerie', id: 'galerie' },
                  { label: 'Contact', id: 'contact' },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleSmoothScroll(item.id)}
                      className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left font-medium"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#0066B1]" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Formations */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0066B1]" />
                Formations Habilitées
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => handleSmoothScroll('formations')}
                    className="text-left group cursor-pointer"
                  >
                    <span className="text-white group-hover:text-[#0066B1] font-semibold block transition-colors">
                      Bac en Éducation
                    </span>
                    <span className="text-xs text-slate-300 block">
                      Socle fondamental de pratique pédagogique
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleSmoothScroll('formations')}
                    className="text-left group cursor-pointer"
                  >
                    <span className="text-white group-hover:text-[#0066B1] font-semibold block transition-colors">
                      Diplôme de Technicien Supérieur (DTS)
                    </span>
                    <span className="text-xs text-slate-300 block">
                      Qualification technique supérieure appliquée
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleSmoothScroll('formations')}
                    className="text-left group cursor-pointer"
                  >
                    <span className="text-white group-hover:text-[#0066B1] font-semibold block transition-colors">
                      Licence en Éducation
                    </span>
                    <span className="text-xs text-slate-300 block">
                      Grade universitaire & expertise didactique
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleSmoothScroll('formations')}
                    className="text-left group cursor-pointer"
                  >
                    <span className="text-white group-hover:text-[#0066B1] font-semibold block transition-colors">
                      Master en Éducation
                    </span>
                    <span className="text-xs text-slate-300 block">
                      Haute qualification, encadrement & recherche
                    </span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact coordinates */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0066B1]" />
                Siège & Contact
              </h4>
              <div className="space-y-3.5 text-xs text-slate-200">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#0066B1] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {IFEM_IDENTITY.address.full}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#0066B1] shrink-0" />
                  <a
                    href={`tel:${IFEM_IDENTITY.phoneRaw}`}
                    className="hover:text-white transition-colors font-medium"
                  >
                    {IFEM_IDENTITY.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-[#0066B1] shrink-0" />
                  <a
                    href={`https://wa.me/${IFEM_IDENTITY.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors font-medium"
                  >
                    WhatsApp : {IFEM_IDENTITY.whatsapp}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#0066B1] shrink-0" />
                  <a
                    href={`mailto:${IFEM_IDENTITY.email}`}
                    className="hover:text-white transition-colors font-medium"
                  >
                    {IFEM_IDENTITY.email}
                  </a>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <span className="text-slate-300 block text-[11px]">
                    Responsable & Chercheur :
                  </span>
                  <span className="text-white font-bold block">
                    {IFEM_IDENTITY.founder.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom copyright bar */}
      <div className="py-6 bg-[#0a1438] text-xs text-slate-300">
        <Container size="xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p>
              © {currentYear} IFEM — Institut de Formation des Enseignants à Madagascar. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4 text-[11px] text-slate-300">
              <span className="text-white font-medium">Habilitations de l’État Malgache</span>
              <span>•</span>
              <span>Antananarivo, Madagascar</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
