

import BookList from '../src/components/organisms/BookList';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './theme/styles';
import { Container } from './theme/styles';

const App: React.FC = () => {


return(
    <>
      <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Container>
     
      <BookList />
    </Container>
  </ThemeProvider>
    </>

)


};

export default App;