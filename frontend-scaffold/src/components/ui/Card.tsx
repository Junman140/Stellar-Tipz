import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  hover = false,
}) => {
  const paddings: Record<string, string> = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverClass = hover
    ? 'hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-200 hover:shadow-brutalist-lg'
    : '';

  return (
    <div
      className={`bg-white border-3 border-black ${paddings[padding]} ${hoverClass} ${className}`}
      style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
    >
      {children}
    </div>
  );
};

export default Card;
