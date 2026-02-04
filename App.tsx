import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { ServicesPage } from './pages/Services';
import { ContactPage } from './pages/Contact';
import { GalleryPage } from './pages/Gallery';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <div className="bg-neutral-900 min-h-screen text-slate-800 font-sans flex flex-col">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chi-siamo" element={<AboutPage />} />
            <Route path="/servizi" element={<ServicesPage />} />
            <Route path="/fotogallery" element={<GalleryPage />} />
            <Route path="/contatti" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
        <StickyBottomBar />
      </div>
    </BrowserRouter>
  );
}

export default App;