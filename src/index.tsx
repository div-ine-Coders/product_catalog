import { createRoot } from 'react-dom/client';
import './App.scss';
import { App } from './App';
import React from 'react';

createRoot(document.getElementById('root') as HTMLDivElement).render(<App />);
