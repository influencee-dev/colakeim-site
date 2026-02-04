import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { MidBanner } from '../components/MidBanner';
import { DetailsSection } from '../components/DetailsSection';
import { Newsletter } from '../components/Newsletter';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* Brand Quote Section */}
      <section className="bg-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="font-serif text-3xl md:text-5xl text-gray-800 italic leading-snug">
            "La casa è lo specchio dell'anima, e sul Lago di Como ogni anima merita una cornice di rara bellezza."
          </h3>
          <div className="mt-8 flex items-center justify-center gap-4">
             <div className="w-12 h-px bg-gray-300"></div>
             <span className="text-gray-400 text-xs uppercase tracking-widest font-bold">CO LAKE IM Team</span>
             <div className="w-12 h-px bg-gray-300"></div>
          </div>
        </div>
      </section>

      <Services />
      <MidBanner />
      <DetailsSection />
      
      {/* Featured Projects Preview (Small grid) */}
      <section className="bg-white py-24">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-4 block">Portfolio</span>
                  <h2 className="font-serif text-4xl text-gray-900">Cantieri Recenti</h2>
               </div>
               <Link to="/fotogallery" className="text-brand-red text-xs font-bold uppercase hover:underline">Vedi tutto &rarr;</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="relative group overflow-hidden h-96">
                  <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Villa Project" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 text-white">
                     <span className="text-xs uppercase font-bold mb-2">Bellagio</span>
                     <h4 className="font-serif text-2xl">Restauro Villa d'Epoca</h4>
                  </div>
               </div>
               <div className="relative group overflow-hidden h-96">
                  <img src="https://images.unsplash.com/photo-1590490360182-f33db1395c73?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Hotel Project" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 text-white">
                     <span className="text-xs uppercase font-bold mb-2">Tremezzina</span>
                     <h4 className="font-serif text-2xl">Luxury Hotel Suite</h4>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <Newsletter />
      
      {/* Simplified Geo-Linking */}
      <div className="bg-neutral-900 py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-wrap justify-center gap-8 text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase">
              <span>Ristrutturazioni Como</span>
              <span>Ristrutturazioni Bellagio</span>
              <span>Menaggio</span>
              <span>Lecco</span>
           </div>
        </div>
      </div>
    </>
  );
};