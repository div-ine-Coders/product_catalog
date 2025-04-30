import * as React from 'react';
import './App.scss';
import { Header } from 'modules/_shared/components/organisms/Header';
import { Footer } from 'modules/_shared/components/organisms/Footer';
import { CatalogList } from 'modules/_shared/components/molecules/CatalogList';
import { Outlet } from 'react-router-dom';
// eslint-disable-next-line max-len
import { ShopByCategory } from 'modules/HomePage/components/ShopByCategory/ShopByCategory';
import { Slider } from 'modules/_shared/components/organisms/Slider/Slider';

export const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="main">
        <CatalogList />
      </div>
      <main>{<Outlet />}</main>
      <ShopByCategory />
      <Slider />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
