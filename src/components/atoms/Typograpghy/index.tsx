
import React from 'react';
import { Typography} from '@mui/material';
import { type TypographyProps } from '@mui/material/Typography';

interface CustomTypographyProps extends TypographyProps {
  children: React.ReactNode;
}

const CustomTypography: React.FC<CustomTypographyProps> = ({
  children,
  ...props
}) => {
  return <Typography {...props}>{children}</Typography>;
};

export default CustomTypography;
