import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'teal' | 'navy' | 'neutral';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'teal',
  className = '',
}) => {
  const variantStyles = {
    teal: 'bg-teal-50 text-teal-800 border-teal-100/80',
    navy: 'bg-navy-50 text-navy-800 border-navy-100',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200/80',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
