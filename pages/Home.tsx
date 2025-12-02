import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { MidBanner } from '../components/MidBanner';
import { DetailsSection } from '../components/DetailsSection';
import { Newsletter } from '../components/Newsletter';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <MidBanner />
      <DetailsSection />
      <Newsletter />
      
      {/* Internal Linking for SEO (Hidden visually but structured) */}
      <div className="bg-neutral-900 py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
           <h3 className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-6">Esplora le nostre specializzazioni</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-400">
              <a href="/ristrutturazioni-interni-como" className="hover:text-white transition-colors">Ristrutturazioni Como</a>
              <a href="/ristrutturazioni-interni-bellagio" className="hover:text-white transition-colors">Ristrutturazioni Bellagio</a>
              <a href="/ristrutturazioni-hotel-lago-di-como" className="hover:text-white transition-colors">Ristrutturazioni Hotel</a>
              <a href="/servizi/restyling-mobili-resina-como" className="hover:text-white transition-colors">Restyling Mobili Resina</a>
           </div>
        </div>
      </div>
    </>
  );
};