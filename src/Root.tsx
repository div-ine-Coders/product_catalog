import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { RouterEnum } from './constants/RouterEnum';
import React from 'react';
import { HomePage } from 'modules/HomePage';
import { ProductCatalogPage } from 'modules/ProductCatalogPage';
import { ProductDetailsPage } from 'modules/ProductDetailsPage';
import { FavoriteProductPage } from 'modules/FavoritesProductsPage';
import { ShoppingCardPage } from 'modules/ShoppingCardPage';
import { NotFoundPage } from 'modules/NotFoundPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path={RouterEnum.HOME} element={<App />}>
        <Route index element={<HomePage />} />
        <Route
          path="/home"
          element={<Navigate to={RouterEnum.HOME} replace={true} />}
        />

        <Route path={RouterEnum.PHONES}>
          <Route index element={<ProductCatalogPage />} />
          <Route path=":phoneId" element={<ProductDetailsPage />} />
          <Route index element={<ProductCatalogPage />} />
          <Route path=":phoneId" element={<ProductDetailsPage />} />
        </Route>

        <Route path={RouterEnum.TABLETS}>
          <Route index element={<ProductCatalogPage />} />
          <Route path=":phoneId" element={<ProductDetailsPage />} />
          <Route index element={<ProductCatalogPage />} />
          <Route path=":phoneId" element={<ProductDetailsPage />} />
        </Route>


        <Route path={RouterEnum.ACCESSORIES}>
          <Route index element={<ProductCatalogPage />} />
          <Route path=":phoneId" element={<ProductDetailsPage />} />
          <Route index element={<ProductCatalogPage />} />
          <Route path=":phoneId" element={<ProductDetailsPage />} />
        </Route>

        <Route path={RouterEnum.FAVORITES} element={<FavoriteProductPage />} />
        <Route path={RouterEnum.CART} element={<ShopingCartPage />} />

        <Route path="*" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
