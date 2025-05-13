import { Typography } from "@mui/material"
import MyLibrary from "./components/templates/library"
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme/theme';


function App() {
 

  return (
    <>
   
   <ThemeProvider theme={theme}>
   <CssBaseline />
    <Typography  sx={{
      marginBottom:'20px',
    fontFamily: 'Cera Pro',
    fontWeight: 700,
    fontSize: '36px',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: 'text.primary'
  }} >MY LIBRARY</Typography>
    <MyLibrary/> 
    </ThemeProvider>
    </>
  )
}

export default App


