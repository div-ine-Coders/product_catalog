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

      <main>{<Outlet />}</main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
