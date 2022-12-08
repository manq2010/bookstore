import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Navbar from './features/Navbar/Navbar';

// Pages
import Homepage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import NotFoundPage from './pages/NotFoundPage';
import CategoriesPage from './pages/CategoriesPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/categories" element={<CategoriesPage />} />

    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
