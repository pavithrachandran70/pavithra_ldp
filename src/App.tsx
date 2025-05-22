
import { ThemeProvider } from "@emotion/react";
import theme from '../src/theme/theme';
import BitTable from './components/organisms/DataTable';

function App(){
  return(
    <ThemeProvider theme={theme}>
    <BitTable/>
    </ThemeProvider>
  );
}
export default App;
