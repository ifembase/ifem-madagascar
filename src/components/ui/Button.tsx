import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  href,
  external,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none cursor-pointer';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2 shadow-xs',
    lg: 'text-base px-6 py-3.5 gap-2.5 shadow-sm',
  };

  const variantClasses = {
    primary:
      'bg-[#0066B1] text-white hover:bg-[#005391] focus:ring-[#0066B1] border border-[#0066B1] hover:shadow-md',
    secondary:
      'bg-[#112156] text-white hover:bg-[#0a1438] focus:ring-[#112156] border border-[#112156] hover:shadow-md',
    accent:
      'bg-[#0066B1] text-white hover:bg-[#005391] focus:ring-[#0066B1] border border-[#0066B1] hover:shadow-md',
    outline:
      'bg-white text-[#112156] border border-[#112156]/30 hover:bg-[#EBF4FC] hover:border-[#0066B1] hover:text-[#0066B1] focus:ring-[#0066B1]',
    ghost:
      'bg-transparent text-[#112156] hover:bg-[#EBF4FC] hover:text-[#0066B1] focus:ring-[#0066B1] border border-transparent',
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};
