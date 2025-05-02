import React from 'react';
import './App.scss';
import { Header } from 'modules/_shared/components/organisms/Header';
import { Footer } from 'modules/_shared/components/organisms/Footer';
import { Outlet } from 'react-router-dom';
// eslint-disable-next-line max-len
import { useSyncSearchParamsWithStore } from '@hooks/effectHooks/useSearchParamsSync';
// eslint-disable-next-line max-len
import { Loader } from './modules/_shared/components/atoms/Loader/Loader';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';

export const App = () => {
  useSyncSearchParamsWithStore();
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main className="main">
        {isLoading && (
          <div>
            <Loader />
          </div>
        )}
        <Outlet />
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
