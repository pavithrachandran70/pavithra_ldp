
import { styled } from '@mui/material/styles';
import {  Avatar, Chip,Typography } from '@mui/material';
import { Box, TextField as MuiTextField } from '@mui/material';
export const RowContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${theme.spacing(1)} 0`,
  borderBottom: '1px solid #F0F0F0',
}));

export const DateBox = styled(Box)(({ theme }) => ({
  width: '60px',
  textAlign: 'center',
}));

export const NameBox = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

export const CustomChip = styled(Chip)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  marginTop: theme.spacing(3),
  backgroundColor: '#F4F4F6',
  fontWeight: 500,
  height: 20,
}));

export const AmountBox = styled(Box)(({ theme }) => ({
  textAlign: 'right',
}));

export const StyledAvatar = styled(Avatar)<{ bgcolor: string; color: string }>(({ bgcolor, color }) => ({
  backgroundColor: bgcolor,
  color: color,
  width: 32,
  height: 32,
}));

export const Container = styled(Box)(({ theme }) => ({
  maxWidth: 900,
  margin: 'auto',
  padding: theme.spacing(3),
  border: '1px solid #E0E0E0',
  borderRadius: '12px',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
  backgroundColor: '#FFFFFF',
}));


export const StyledWrapper = styled(Box)`
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
`;

export const SearchWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const StyledTextField = styled(MuiTextField)`
  width: 348px;
  height: 40px;
  padding: 4px;
  border-radius: 4px;
  border-width: 1px;
  margin-left: 555px;
  border-color: #E0E0E0;

  .MuiInputBase-root {
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .MuiInputBase-input {
    padding: 0 12px;
  }
`;



export const CaptionText = styled(Typography)(({ theme }) => ({
  lineHeight: 1,
}));

export const DateText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  lineHeight: 1.2,
  color: '#000000',
}));

export const NameText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Graphik',
  fontWeight: 700,
  fontSize: '16px',
}));

export const AmountText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Graphik',
  fontWeight: 700,
  fontSize: '16px',
  color: '#343446',
}));
