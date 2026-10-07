import React from 'react';
import { Badge } from './Badge';

interface SectionTitleProps {
  badge?: string;
  badgeVariant?: 'primary' | 'secondary' | 'accent' | 'subtle';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  badgeVariant = 'primary',
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false,
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl mb-12 lg:mb-16 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <div className={`mb-3.5 flex ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-[#112156]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? 'text-slate-200' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 flex items-center gap-2 ${
          isCenter ? 'justify-center' : 'justify-start'
        }`}
      >
        <span
          className={`h-1 w-12 rounded-full ${
            light ? 'bg-[#0066B1]' : 'bg-[#0066B1]'
          }`}
        />
        <span
          className={`h-1 w-2 rounded-full ${
            light ? 'bg-white/60' : 'bg-[#0066B1]/40'
          }`}
        />
      </div>
    </div>
  );
};
