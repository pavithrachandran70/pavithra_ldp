import React from 'react';

interface IconProps {
  children: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({ children }) => {
  return <span>{children}</span>;
};

export default Icon;
