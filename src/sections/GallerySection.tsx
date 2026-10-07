import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { IFEM_GALLERY } from '../data/ifemData';
import { GalleryItem } from '../types';
import {
  Camera,
  X,
  Maximize2,
  Info,
} from 'lucide-react';

const CATEGORIES = [
  'Toutes',
  'L’IFEM',
  'Formations',
  'Regroupements',
  'Soutenances',
  'Diplômes',
  'Professionnels en formation',
  'Équipements',
];

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === 'Toutes'
      ? IFEM_GALLERY
      : IFEM_GALLERY.filter((item) => item.category === selectedCategory);

  return (
    <section id="galerie" className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-[#112156]/10">
      <Container size="xl">
        <SectionTitle
          badge="Photothèque Officielle"
          badgeVariant="primary"
          title="Galerie & Archives Visuelles"
          subtitle="Aperçu des moments forts, des sessions d’apprentissage et des réalisations institutionnelles issues du Livret de Présentation de l’IFEM."
        />

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#112156] text-white shadow-xs border border-[#0066B1]'
                    : 'bg-white text-[#112156] border border-[#112156]/15 hover:bg-[#EBF4FC] hover:text-[#0066B1]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              style={{ animationDelay: `${Math.min(index, 12) * 55}ms` }}
              onClick={() => setActiveModalItem(item)}
              className="animate-pop-in group cursor-pointer rounded-xl overflow-hidden bg-white border border-[#112156]/10 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#0066B1]"
            >
              <div className="relative">
                <div className="aspect-video overflow-hidden bg-[#112156]/5">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#112156]/90 text-white text-[11px] font-semibold border border-[#0066B1]/50 backdrop-blur-xs">
                  {item.category}
                </span>
                <div className="absolute inset-0 bg-[#112156]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white text-[#112156] shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-4 h-4 text-[#0066B1]" />
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                    <span className="font-bold text-[#0066B1]">
                      {item.category}
                    </span>
                    <span>Photothèque IFEM</span>
                  </div>
                  <h4 className="font-bold text-sm text-[#112156] leading-snug group-hover:text-[#0066B1] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compteur */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-[#112156]/10 text-xs text-slate-600 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-[#0066B1]" />
            <span className="font-medium text-[#112156]">
              Cliquez sur une photo pour l’afficher en grand format.
            </span>
          </div>
          <span className="text-[#0066B1] font-mono font-bold text-[11px]">
            {filteredItems.length} {filteredItems.length > 1 ? 'photos' : 'photo'}
          </span>
        </div>
      </Container>

      {/* Lightbox / Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-[#112156]/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#0066B1]/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#112156] text-white flex items-center justify-between border-b border-[#0066B1]/30">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-mono tracking-wider text-white font-bold bg-[#0066B1] px-2 py-0.5 rounded">
                  {activeModalItem.category}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-xs text-slate-200">
                  Archive Institutionnelle
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Fermer la vue détaillée"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="rounded-xl overflow-hidden bg-[#112156]/5 flex items-center justify-center">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.alt}
                  className="w-full max-h-[60vh] object-contain"
                />
              </div>

              <div className="mt-6 space-y-3">
                <h3 className="text-lg font-bold text-[#112156]">
                  {activeModalItem.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeModalItem.description}
                </p>

                <div className="p-3.5 rounded-xl bg-[#EBF4FC] border border-[#0066B1]/20 text-xs text-[#112156] flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-[#0066B1] shrink-0 mt-0.5" />
                  <p>
                    <strong>Texte alternatif d’accessibilité :</strong> « {activeModalItem.alt} »
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Photothèque officielle de l’IFEM
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="px-4 py-2 rounded-lg bg-[#112156] text-white text-xs font-bold hover:bg-[#0066B1] transition-colors cursor-pointer"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
