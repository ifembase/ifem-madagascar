import React from 'react';

interface PhotoProps {
  src: string;
  alt: string;
  /** Légende affichée en bas de la photo (sur un dégradé sombre). */
  title?: string;
  subtitle?: string;
  /** Petit libellé de catégorie au-dessus du titre. */
  category?: string;
  aspectRatio?: 'video' | 'photo' | 'square' | 'wide' | 'tall';
  /** Cadrage de l'image quand elle est recadrée (ex : 'center 30%'). */
  objectPosition?: string;
  className?: string;
  eager?: boolean;
}

const aspectClasses: Record<NonNullable<PhotoProps['aspectRatio']>, string> = {
  video: 'aspect-video',
  photo: 'aspect-4/3',
  square: 'aspect-square',
  wide: 'aspect-21/9',
  tall: 'aspect-4/5',
};

export const Photo: React.FC<PhotoProps> = ({
  src,
  alt,
  title,
  subtitle,
  category,
  aspectRatio = 'video',
  objectPosition = 'center',
  className = '',
  eager = false,
}) => {
  const hasCaption = Boolean(title || subtitle || category);

  return (
    <figure
      className={`relative overflow-hidden rounded-xl border border-[#112156]/10 bg-[#112156]/5 shadow-sm ${aspectClasses[aspectRatio]} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition }}
      />

      {hasCaption && (
        <figcaption className="absolute inset-x-0 bottom-0 p-3 sm:p-4 pt-12 bg-gradient-to-t from-[#0a1438]/90 via-[#0a1438]/55 to-transparent text-white">
          {category && (
            <span className="inline-block mb-1 px-2 py-0.5 rounded-full bg-[#0066B1] text-[10px] font-bold uppercase tracking-wider">
              {category}
            </span>
          )}
          {title && (
            <span className="block text-sm font-bold leading-snug">{title}</span>
          )}
          {subtitle && (
            <span className="block mt-0.5 text-xs text-slate-200 font-light leading-relaxed line-clamp-2">
              {subtitle}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
};
