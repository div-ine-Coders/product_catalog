import * as React from 'react';
import './App.scss';
import { Header } from 'modules/_shared/components/organisms/Header';
import { Footer } from 'modules/_shared/components/organisms/Footer';
// import { CartItem } from './modules/_shared/components/molecules/CartItem';
import { CatalogList } from 'modules/_shared/components/molecules/CatalogList';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="main">
        <CatalogList />
      </div>
      <main>{<Outlet />}</main>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
