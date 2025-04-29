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
