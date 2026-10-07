import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';
import { IFEM_IDENTITY } from '../data/ifemData';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Send,
  CheckCircle,
} from 'lucide-react';

interface ContactSectionProps {
  preselectedFormation?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedFormation,
}) => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    objet: preselectedFormation ? `Demande d’information : ${preselectedFormation}` : '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitted');
  };

  // Generate WhatsApp message link
  const buildWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Bonjour Dr RAZAFINDRAKOTO (IFEM),\n\nJe suis ${formData.nom || 'un professionnel de l\'éducation'}.\nObjet : ${formData.objet || 'Demande d\'information sur les formations IFEM'}\nTéléphone : ${formData.telephone || ''}\nEmail : ${formData.email || ''}\n\nMessage : ${formData.message || 'Je souhaiterais obtenir des informations sur les parcours de formation IFEM.'}`
    );
    return `https://wa.me/${IFEM_IDENTITY.whatsappRaw}?text=${text}`;
  };

  // Generate mailto link
  const buildMailtoUrl = () => {
    const subject = encodeURIComponent(
      formData.objet || 'Demande d’information - Formations IFEM'
    );
    const body = encodeURIComponent(
      `Nom : ${formData.nom}\nTéléphone : ${formData.telephone}\nEmail : ${formData.email}\n\nMessage :\n${formData.message}`
    );
    return `mailto:${IFEM_IDENTITY.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <Container size="xl">
        <SectionTitle
          badge="Orientation & Inscription"
          badgeVariant="primary"
          title="Parlons de votre projet de formation"
          subtitle="Que vous soyez enseignant fonctionnaire, maître ENF, directeur d’école ou responsable pédagogique, contactez le Dr RAZAFINDRAKOTO et l’équipe de l’IFEM."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Coordinates Column */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#112156] text-white shadow-xl border border-[#0066B1]/40">
              <span className="text-xs font-mono uppercase tracking-wider text-white font-bold bg-[#0066B1] px-2.5 py-0.5 rounded">
                Coordonnées Officielles
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight mt-3">
                {IFEM_IDENTITY.name}
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Sigle officiel : <strong className="text-white">{IFEM_IDENTITY.acronym}</strong>
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 space-y-5 text-sm">
                {/* Adresse */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#0066B1] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Adresse du Siège
                    </h4>
                    <p className="text-xs sm:text-sm text-white mt-0.5 leading-relaxed">
                      {IFEM_IDENTITY.address.full}
                    </p>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#0066B1] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Téléphone
                    </h4>
                    <a
                      href={`tel:${IFEM_IDENTITY.phoneRaw}`}
                      className="text-sm font-bold text-white hover:text-[#0066B1] transition-colors"
                    >
                      {IFEM_IDENTITY.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white text-[#0066B1] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      WhatsApp Officiel
                    </h4>
                    <a
                      href={`https://wa.me/${IFEM_IDENTITY.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white hover:text-[#EBF4FC] transition-colors"
                    >
                      {IFEM_IDENTITY.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#0066B1] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Courrier Électronique
                    </h4>
                    <a
                      href={`mailto:${IFEM_IDENTITY.email}`}
                      className="text-sm font-bold text-white hover:text-[#0066B1] transition-colors"
                    >
                      {IFEM_IDENTITY.email}
                    </a>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#0a1438] text-white border border-[#0066B1]/40 flex items-center justify-center shrink-0">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Contact Facebook
                    </h4>
                    <a
                      href={IFEM_IDENTITY.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white hover:text-[#0066B1] transition-colors"
                    >
                      {IFEM_IDENTITY.facebook}
                    </a>
                  </div>
                </div>
              </div>

              {/* Responsable & Fondateur */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white text-[#112156] flex items-center justify-center font-extrabold text-sm shadow-sm">
                  SJ
                </div>
                <div>
                  <span className="text-[11px] text-slate-300 block">
                    Fondateur et Responsable :
                  </span>
                  <span className="text-sm font-bold text-white block">
                    {IFEM_IDENTITY.founder.name}
                  </span>
                  <span className="text-[11px] text-[#EBF4FC] block">
                    {IFEM_IDENTITY.founder.title}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-5 rounded-2xl bg-[#0066B1] text-white shadow-md border border-white/20 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-white/80 font-semibold">
                  Canal Direct Rapide
                </span>
                <h4 className="text-sm font-bold text-white mt-0.5">
                  Échangez directement sur WhatsApp
                </h4>
                <p className="text-xs text-white/90 mt-0.5">
                  Réponse rapide aux demandes d’information et d’orientation.
                </p>
              </div>
              <a
                href={`https://wa.me/${IFEM_IDENTITY.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white text-[#0066B1] hover:bg-[#EBF4FC] shadow-md transition-colors shrink-0"
                aria-label="Discuter sur WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#112156]/15 p-8 sm:p-10 shadow-sm">
              <h3 className="text-xl font-bold text-[#112156]">
                Formulaire de demande de renseignements
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-6">
                Remplissez vos informations afin de préparer votre dossier pédagogique ou poser vos questions.
              </p>

              {status === 'submitted' ? (
                <div className="p-6 rounded-xl bg-[#EBF4FC] border border-[#0066B1]/40 text-[#112156] space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0066B1] shrink-0" />
                    <div>
                      <h4 className="font-bold text-base text-[#112156]">
                        Votre message est prêt !
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Vous pouvez le transmettre directement via l’un des deux canaux officiels :
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-white border border-[#0066B1]/20 text-xs text-slate-700 space-y-1">
                    <p><strong>Nom :</strong> {formData.nom}</p>
                    <p><strong>Téléphone :</strong> {formData.telephone}</p>
                    <p><strong>Objet :</strong> {formData.objet}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      variant="primary"
                      size="md"
                      href={buildWhatsAppUrl()}
                      external
                      icon={<MessageCircle className="w-4 h-4" />}
                    >
                      Envoyer via WhatsApp ({IFEM_IDENTITY.phone})
                    </Button>
                    <Button
                      variant="outline"
                      size="md"
                      href={buildMailtoUrl()}
                      icon={<Mail className="w-4 h-4" />}
                    >
                      Envoyer par Email ({IFEM_IDENTITY.email})
                    </Button>
                  </div>

                  <div className="pt-2 text-right">
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="text-xs text-[#0066B1] font-semibold hover:underline cursor-pointer"
                    >
                      Modifier les informations
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="nom"
                        className="block text-xs font-bold text-[#112156] uppercase tracking-wider mb-1"
                      >
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Ex : Rabe Jean-Baptiste"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066B1] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="telephone"
                        className="block text-xs font-bold text-[#112156] uppercase tracking-wider mb-1"
                      >
                        Téléphone portable / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        required
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="Ex : +261 34 XX XXX XX"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066B1] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold text-[#112156] uppercase tracking-wider mb-1"
                      >
                        Courrier électronique
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre.email@exemple.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066B1] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="objet"
                        className="block text-xs font-bold text-[#112156] uppercase tracking-wider mb-1"
                      >
                        Objet de la demande *
                      </label>
                      <select
                        id="objet"
                        name="objet"
                        required
                        value={formData.objet}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066B1] focus:border-transparent bg-white font-medium text-[#112156]"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="Bac en Éducation">Renseignements : Bac en Éducation</option>
                        <option value="Diplôme de Technicien Supérieur (DTS)">Renseignements : DTS</option>
                        <option value="Licence en Éducation">Renseignements : Licence</option>
                        <option value="Master en Éducation">Renseignements : Master</option>
                        <option value="Inscription et calendrier">Modalités d’inscription & calendrier</option>
                        <option value="Bureaux régionaux et liaison">Bureaux de liaison en région</option>
                        <option value="Autre demande">Autre demande institutionnelle</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-[#112156] uppercase tracking-wider mb-1"
                    >
                      Message ou situation professionnelle *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Précisez votre établissement scolaire, votre niveau actuel d’enseignement et toute question utile..."
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066B1] focus:border-transparent resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] text-slate-500">
                      Vos coordonnées sont traitées avec stricte confidentialité par l’administration de l’IFEM.
                    </p>
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      icon={<Send className="w-4 h-4" />}
                      className="w-full sm:w-auto"
                    >
                      Envoyer le message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
