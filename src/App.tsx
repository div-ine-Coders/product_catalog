import * as React from 'react';
import './App.scss';
import { Header } from 'modules/_shared/components/organisms/Header';
import { Footer } from 'modules/_shared/components/organisms/Footer';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <h1>lorem200</h1>
        {/* <Outlet /> */}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
