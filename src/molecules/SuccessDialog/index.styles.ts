
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const StyledDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    backgroundColor: '#262529',
    color: '#fff',
    fontFamily: 'Gilroy, sans-serif',
  },
});

export const CenteredImageBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '24px',
  marginBottom: '24px',
});

export const CenteredText = styled(Typography)({
  textAlign: 'center',
});

export const CustomDialogActions = styled(DialogActions)({
  justifyContent: 'center',
  paddingBottom: '24px',
});
