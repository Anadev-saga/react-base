import { ThemeProvider } from 'styled-components';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import { GlobalStyle } from './styles';
import defaultTheme from './themes/defaultTheme';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <div>
      <Header />
      <p>Hello.</p>
      <Footer />
    </div>
  </ThemeProvider>
);

export default App;
