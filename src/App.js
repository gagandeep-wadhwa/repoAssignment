import React from 'react';
import { Router } from '@reach/router';

import Repositories from './pages/Repositories';
import ThemeProvider from './components/ThemeProvider';
import Body from './layout/Body';

const App = () => (
  <ThemeProvider>
    <Body>
      <Router>
        <Repositories path="/" />
      </Router>
    </Body>
  </ThemeProvider>
);

export default App;
