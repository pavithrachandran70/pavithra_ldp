
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Graphik, sans-serif',
    h6: {
      fontWeight: 400,
    },
    body1: {
      fontWeight: 700,
      fontSize: '16px',
    },
  },
  palette: {
    text: {
      secondary: '#6B6B6B',
    },
  },
});

export default theme;
