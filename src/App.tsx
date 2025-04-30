import React from 'react';
import './App.scss';
import { Header } from 'modules/_shared/components/organisms/Header';
import { Footer } from 'modules/_shared/components/organisms/Footer';
import { Outlet } from 'react-router-dom';
import { HomePage } from 'modules/HomePage/HomePage';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />

      <main>{<Outlet />}</main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
