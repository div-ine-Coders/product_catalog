import React from 'react';
import './App.scss';
import { Header } from 'modules/_shared/components/organisms/Header';
import { Footer } from 'modules/_shared/components/organisms/Footer';
// eslint-disable-next-line max-len
import { useSyncSearchParamsWithStore } from '@hooks/effectHooks/useSearchParamsSync';
import { Breadcrumbs } from 'modules/_shared/components/molecules/Breadcrumbs';
import { HomePage } from 'modules/HomePage';
import { Outlet } from 'react-router-dom';

import { HomePage } from 'modules/HomePage/HomePage';

export const App = () => {
  useSyncSearchParamsWithStore();

  return (
    <div className="App">
      <Header />
      <Breadcrumbs />
      <HomePage />
      <main>
        {/* тут більше нічого не пишемо переходьте на сторінку, яка вам потрібна*/}
        <Outlet />
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
