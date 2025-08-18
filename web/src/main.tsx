import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n/i18n'

import { initializeTheme } from '@/hooks/use-appearance'
import { initializeLanguage } from './hooks/use-language.tsx'

initializeTheme()
initializeLanguage

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
