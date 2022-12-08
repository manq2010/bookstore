import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './Routes';

const App = () => (
  <HashRouter>
    <AppRoutes />
  </HashRouter>
);

export default App;
