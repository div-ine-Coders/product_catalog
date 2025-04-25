import React from 'react';
import './App.scss';
import { Header } from 'modules/_shared/components/organisms/Header';
import { Footer } from 'modules/_shared/components/organisms/Footer';
import { Outlet } from 'react-router-dom';
import { HomePage } from 'modules/HomePage/HomePage';
import { Breadcrumbs } from 'modules/_shared/components/molecules/Breadcrumbs';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Breadcrumbs />
      <HomePage />

      <div className="main">
        {/* тут більше нічого не пишемо переходьте на сторінку, яка вам потрібна*/}
        <Outlet />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
