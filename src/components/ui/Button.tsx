import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 touch-target focus-visible:ring-2 focus-visible:ring-offset-2';
  
  const sizeStyles = {
    sm: 'px-3.5 py-2 text-xs min-h-[40px]',
    md: 'px-5 py-3 text-sm min-h-[46px]',
    lg: 'px-6 py-3.5 text-base min-h-[50px]',
  };

  const variantStyles = {
    primary: 'bg-teal-600 hover:bg-teal-700 text-white shadow-sm hover:shadow active:scale-[0.99] focus-visible:ring-teal-600',
    secondary: 'bg-navy-900 hover:bg-navy-800 text-white shadow-sm hover:shadow active:scale-[0.99] focus-visible:ring-navy-900',
    outline: 'bg-white hover:bg-teal-50/50 text-navy-900 border border-slate-200 hover:border-teal-300 active:scale-[0.99] focus-visible:ring-teal-600',
    white: 'bg-white hover:bg-slate-50 text-navy-950 shadow-sm active:scale-[0.99] focus-visible:ring-white',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (asLink && href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
