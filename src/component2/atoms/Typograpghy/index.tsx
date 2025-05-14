import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({ children, className }) => {
  return <span className={className}>{children}</span>;
};

export default Typography;

