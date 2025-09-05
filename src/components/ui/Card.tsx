import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hover = false,
  glass = false
}) => {
  const baseClasses = 'rounded-xl shadow-lg overflow-hidden';
  const hoverClasses = hover ? 'card-hover' : '';
  const glassClasses = glass 
    ? 'glass-effect' 
    : 'bg-black border border-green-900/30';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${glassClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;