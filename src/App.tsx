import * as React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Header } from 'modules/_shared/components/organisms/Header';
import { Footer } from 'modules/_shared/components/organisms/Footer';

export const App = () => {
  return (
    <HashRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/phones" element={<div>Phones Page</div>} />
          <Route path="/tablets" element={<div>Tablets Page</div>} />
          <Route path="/accessories" element={<div>Accessories Page</div>} />
          <Route path="/favorites" element={<div>Favorites Page</div>} />
          <Route path="/shopping-bag" element={<div>Shopping Bag Page</div>} />
          {/* замінити рядок на сторітку!!! */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>

      <Footer />
    </HashRouter>
  );
};
