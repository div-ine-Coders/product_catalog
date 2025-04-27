import { createRoot } from 'react-dom/client';
import './App.scss';
import React from 'react';
import { Root } from 'Root';
import { Provider } from 'react-redux';
import store from 'app/store/store';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <Provider store={store}>
    <Root />
  </Provider>,
);
