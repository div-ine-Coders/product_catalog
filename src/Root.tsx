import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { RouterEnum } from './constants/RouterEnum';
import React from 'react';
import { ShopingCartPage } from 'modules/ShoppingCartPage';
import { FavouritePage } from 'modules/FavoritesProductsPage';

const placeholderRoute = (title: string) => <div>{title} Placeholder</div>;

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path={RouterEnum.HOME} element={<App />}>
        <Route index element={placeholderRoute('Home')} />
        <Route
          path="/home"
          element={<Navigate to={RouterEnum.HOME} replace={true} />}
        />

        <Route path={RouterEnum.PHONES}>
          <Route index element={placeholderRoute('Phones')} />
          <Route path=":phoneId" element={placeholderRoute('Phone Details')} />
        </Route>

        <Route path={RouterEnum.TABLETS}>
          <Route index element={placeholderRoute('Tablets')} />
          <Route path=":phoneId" element={placeholderRoute('Tablet Details')} />
        </Route>
        <Route path={RouterEnum.ACCESSORIES}>
          <Route index element={placeholderRoute('Accessories')} />
          <Route
            path=":phoneId"
            element={placeholderRoute('Accessory Details')}
          />
        </Route>
        <Route path={RouterEnum.FAVORITES} element={<FavouritePage />} />
        <Route path={RouterEnum.CART} element={<ShopingCartPage />} />

        <Route path="*" element={placeholderRoute('Not Found')} />
      </Route>
    </Routes>
  </HashRouter>
);
