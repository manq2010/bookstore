import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import styled from 'styled-components';
import AppRoutes from './Routes';

// AppRoutes = styled.body`
// margin: 0;
// background-color: #f5f6fa;
// margin: 0;
// `;

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
