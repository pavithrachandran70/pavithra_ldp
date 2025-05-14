import React from 'react';
import Icon from '../../atoms/Icon';
import Typography from '../../atoms/Typograpghy';
import "../Menu/index.css"

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, className }) => {
  return (
    <div className={`home ${className}`}>
      <Icon>{icon}</Icon>
      <Typography>{label}</Typography>
    </div>
  );
};

export default MenuItem;
