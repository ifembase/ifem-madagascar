import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  borderAccent?: 'none' | 'slate' | 'blue' | 'navy';
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
  borderAccent = 'none',
  onClick,
}) => {
  const accentStyles = {
    none: 'border-[#112156]/10',
    slate: 'border-slate-200 hover:border-[#0066B1]/40',
    blue: 'border-[#0066B1]/30 hover:border-[#0066B1]',
    navy: 'border-[#112156]/30 hover:border-[#112156]',
  };

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl border ${accentStyles[borderAccent]} shadow-xs transition-all duration-300 ${
        hoverable ? 'hover:shadow-md hover:-translate-y-0.5 hover:border-[#0066B1]/50' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
