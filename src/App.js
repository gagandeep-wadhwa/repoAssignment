import React from 'react';
import { Router } from '@reach/router';

import Recipes from './pages/Recipes';
import ThemeProvider from './components/ThemeProvider';
import Body from './layout/Body';

const App = () => (
  <ThemeProvider>
    <Body>
      <Router>
        <Recipes path="/" />
      </Router>
    </Body>
  </ThemeProvider>
);

export default App;
