import React from 'react';
import './App.scss';
import { Header } from 'modules/_shared/components/organisms/Header';
import { Footer } from 'modules/_shared/components/organisms/Footer';
// eslint-disable-next-line max-len
import { useSyncSearchParamsWithStore } from '@hooks/effectHooks/useSearchParamsSync';
import { Outlet } from 'react-router-dom';

export const App = () => {
  useSyncSearchParamsWithStore();

  return (
    <div className="App">
      <Header />
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
