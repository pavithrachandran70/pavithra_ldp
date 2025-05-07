import { styled, createTheme } from '@mui/material/styles';
import { Dialog, TextField } from '@mui/material';

export const StyledDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    backgroundColor: '#262529',
    color: '#fff',
    fontFamily: 'Gilroy',
  },
}));

export const StyledTextField = styled(TextField)(() => ({
  '& .MuiInputBase-input': {
    color: '#fff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff',
    },
    '&:hover fieldset': {
      borderColor: '#90caf9',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#2196f3',
    },
  },
}));

export const customTheme = createTheme({
  typography: {
    fontFamily: 'Gilroy, sans-serif',
  },
});
