import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { initGA } from './utils/analytics'
import { hasAnalyticsConsent } from './utils/cookieConsent'
import 'lenis/dist/lenis.css'
import './index.css'

if (hasAnalyticsConsent()) {
  initGA()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
