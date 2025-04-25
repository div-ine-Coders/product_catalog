import * as React from 'react';
import './App.scss';
import { Header } from 'modules/_shared/components/organisms/Header';
import { Footer } from 'modules/_shared/components/organisms/Footer';
// eslint-disable-next-line max-len
import { ProductCard } from 'modules/_shared/components/molecules/ProductCard/ProductCard';

export const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="main">
        {/* тут можна тестити поки немає -> <Outlet /> */}
        <ProductCard />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
