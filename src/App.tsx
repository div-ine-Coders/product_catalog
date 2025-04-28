import * as React from 'react';
import './App.scss';
import { Header } from 'modules/_shared/components/organisms/Header';
import { Footer } from 'modules/_shared/components/organisms/Footer';
import { Outlet } from 'react-router-dom';
// eslint-disable-next-line max-len
import { ShopByCategory } from 'modules/HomePage/components/ShopByCategory/ShopByCategory';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <main>{<Outlet />}</main>
      <ShopByCategory />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
