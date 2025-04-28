import * as React from 'react';
import './App.scss';
import { Header } from 'modules/_shared/components/organisms/Header';
import { Footer } from 'modules/_shared/components/organisms/Footer';
import { Outlet } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <Header />

      <main>{<Outlet />}</main>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
