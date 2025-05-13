import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Cera Pro',
    h6: {
      fontWeight: 800,
      fontSize: '17px',
      lineHeight: '100%',
      letterSpacing: '0%',
      color: '#000000',
      marginTop: '1px'
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '100%',
      color: '#6D787E',
      marginTop: '15px'
    },
    body2: {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '100%',
      color: '#6D787E',
      marginTop: '1px'
    }
  },
  palette: {
    text: {
      primary: '#000000',
      secondary: '#6D787E'
    }
  }
});

export default theme;
