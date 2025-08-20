import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import './i18n/i18n'; // Import i18n configuration

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HydratedRouter />
  </StrictMode>
);