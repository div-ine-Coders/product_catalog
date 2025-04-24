import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
// import { HomePage } from './pages/HomePage';
// import { PhonesPage } from './pages/PhonesPage';
// import { TabletsPage } from './pages/TabletsPage';
// import { AccessoriesPage } from './pages/AccessoriesPage';
// import { FavoritesPage } from './pages/FavoritesPage';
// import { ShoppingBagPage } from './pages/ShoppingBagPage';
// import { NotFoundPage } from './pages/NotFoundPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Navigate to="/" replace />} />
        {/* <Route index element={<HomePage />} />
        <Route path="phones" element={<PhonesPage />} />
        <Route path="tablets" element={<TabletsPage />} />
        <Route path="accessories" element={<AccessoriesPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="shopping-bag" element={<ShoppingBagPage />} />
        <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  </HashRouter>
);
