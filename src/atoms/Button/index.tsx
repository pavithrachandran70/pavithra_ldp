import React from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const CustomButton: React.FC<ButtonProps> = ({ text, onClick, type = 'button' }) => {
  return (
    <Button variant="contained" onClick={onClick} type={type}>
      {text}
    </Button>
  );
};

export default CustomButton;