import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-[1280px] mx-auto px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
};
