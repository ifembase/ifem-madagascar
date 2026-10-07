import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'subtle';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
  icon,
}) => {
  const variantStyles = {
    primary: 'bg-[#EBF4FC] text-[#0066B1] border-[#0066B1]/30',
    secondary: 'bg-white text-[#112156] border-[#112156]/20',
    accent: 'bg-[#0066B1] text-white border-[#0066B1]',
    outline: 'bg-transparent text-[#112156] border-[#112156]/30',
    subtle: 'bg-[#112156]/5 text-[#112156] border-[#112156]/15',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border transition-colors ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
