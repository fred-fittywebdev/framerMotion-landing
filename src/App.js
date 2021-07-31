import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import California from './pages/California';
import Bali from './pages/Bali';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './globalStyle';
import styled from 'styled-components';

const Section = styled.section`
  overflow-x: hidden;
  overflow-y: hidden;
`;

function App() {
  let location = useLocation();
  return (
    <Section>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route path="/california" component={California} />
          <Route path="/bali" component={Bali} />
        </Switch>
      </AnimatePresence>
    </Section>
  );
}

export default App;
