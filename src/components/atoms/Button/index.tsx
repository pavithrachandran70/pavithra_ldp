import React from 'react';
import { Button } from '@mui/material';

interface BookButtonProps {
  onClick: () => void;
  label: string;
}

const BookButton: React.FC<BookButtonProps> = ({ onClick, label }) => (
  <Button variant="text" color="primary" onClick={onClick} sx={{ mt: 2 }}>
    {label}
  </Button>
);

export default BookButton;