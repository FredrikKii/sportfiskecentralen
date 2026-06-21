import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'
import ScrollToTop from './components/ScrollToTop'
import CookieBanner from './components/CookieBanner'
import GoogleAnalytics from './components/GoogleAnalytics'
import Home from './pages/Home'
import Waters from './pages/Waters'
import WaterDetail from './pages/WaterDetail'
import Reports from './pages/Reports'
import ReportDetail from './pages/ReportDetail'
import Guides from './pages/Guides'
import GuideDetail from './pages/GuideDetail'
import Contact from './pages/Contact'
import Credits from './pages/Credits'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <SmoothScroll />
      <ScrollToTop />
      <GoogleAnalytics />
      <CookieBanner />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiskevatten" element={<Waters />} />
          <Route path="/fiskevatten/:id" element={<WaterDetail />} />
          <Route path="/rapporter" element={<Reports />} />
          <Route path="/rapporter/:id" element={<ReportDetail />} />
          <Route path="/guider" element={<Guides />} />
          <Route path="/guider/:id" element={<GuideDetail />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/integritet" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
