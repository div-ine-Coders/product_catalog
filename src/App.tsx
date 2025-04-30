import React from 'react';
import './App.scss';
import { Header } from 'modules/_shared/components/organisms/Header';
import { Footer } from 'modules/_shared/components/organisms/Footer';
import { Outlet } from 'react-router-dom';
// eslint-disable-next-line max-len
import { useSyncSearchParamsWithStore } from '@hooks/effectHooks/useSearchParamsSync';

export const App = () => {
  useSyncSearchParamsWithStore();

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
