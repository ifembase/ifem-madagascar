import React from 'react';
import {
  Building2,
  Users,
  BookOpen,
  UsersRound,
  MapPin,
  Monitor,
  Award,
  GraduationCap,
  Sun,
  Camera,
  LucideIcon,
} from 'lucide-react';

interface ImagePlaceholderProps {
  title: string;
  subtitle?: string;
  category?: string;
  aspectRatio?: 'video' | 'square' | 'wide' | 'tall';
  theme?: 'campus' | 'formation' | 'regroupement' | 'soutenance' | 'diplome' | 'etudiants' | 'materiel' | 'solaire' | 'general';
  className?: string;
  badgeLabel?: string;
}

const themeIcons: Record<string, LucideIcon> = {
  campus: Building2,
  formation: BookOpen,
  regroupement: UsersRound,
  soutenance: Award,
  diplome: GraduationCap,
  etudiants: Users,
  materiel: Monitor,
  solaire: Sun,
  general: Camera,
};

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  title,
  subtitle,
  category,
  aspectRatio = 'video',
  theme = 'general',
  className = '',
  badgeLabel = 'Emplacement Photo IFEM',
}) => {
  const IconComponent: LucideIcon = themeIcons[theme] || Camera;

  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    wide: 'aspect-21/9',
    tall: 'aspect-4/5',
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-[#0066B1]/30 bg-gradient-to-br from-[#112156] via-[#162a6b] to-[#0a1438] ${aspectClasses[aspectRatio]} flex flex-col items-center justify-center p-6 text-center select-none shadow-sm ${className}`}
    >
      {/* Background architectural grid pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Decorative corner framing marks */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#0066B1]/70" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#0066B1]/70" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#0066B1]/70" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#0066B1]/70" />

      {/* Top Tag */}
      <div className="absolute top-3.5 left-0 right-0 flex justify-center px-4">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#112156]/90 text-white border border-[#0066B1]/50 backdrop-blur-xs">
          <Camera className="w-3 h-3 text-[#0066B1]" />
          <span>{category ? `${category} • ` : ''}{badgeLabel}</span>
        </span>
      </div>

      {/* Central Icon Illustration */}
      <div className="relative mb-3 flex items-center justify-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0066B1]/20 border border-[#0066B1]/40 backdrop-blur-xs flex items-center justify-center text-white shadow-inner">
          <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </div>
      </div>

      {/* Title & Description */}
      <div className="relative z-10 max-w-sm px-2">
        <h4 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
          {title}
        </h4>
        {subtitle && (
          <p className="mt-1.5 text-xs text-slate-200 line-clamp-2 leading-relaxed font-light">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom Subtitle Indicator */}
      <div className="absolute bottom-3 text-[10px] text-[#0066B1] font-mono tracking-wider font-semibold">
        ARCHIVES LIVRET IFEM
      </div>
    </div>
  );
};
