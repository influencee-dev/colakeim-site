import React from 'react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden">
      {/* Proposed New Background: High-end Architectural Villa with Lake View */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=90" 
          alt="Luxury Architecture Lake Como" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-3xl text-white">
          <div className="overflow-hidden mb-4">
             <span className="inline-block text-brand-red text-xs font-bold tracking-[0.3em] uppercase animate-in slide-in-from-bottom duration-700">
                LAGO DI COMO • ECCELLENZA ARTIGIANA
             </span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter mb-8 leading-[0.9] animate-in slide-in-from-bottom duration-1000 delay-100">
            CO LAKE IM
          </h1>
          <p className="text-gray-100 text-xl md:text-2xl leading-relaxed mb-10 max-w-xl font-light animate-in fade-in duration-1000 delay-300">
            Diamo nuova forma ai tuoi spazi con finiture di pregio e soluzioni su misura per residenze esclusive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in duration-1000 delay-500">
             <Link to="/fotogallery">
               <Button variant="primary" className="!px-10 !py-4 text-sm w-full sm:w-auto">
                  GUARDA I LAVORI &rarr;
               </Button>
             </Link>
             <Link to="/contatti">
               <Button variant="outline" className="!px-10 !py-4 text-sm w-full sm:w-auto">
                  CHIEDI UN PREVENTIVO
               </Button>
             </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce hidden md:flex">
         <span className="text-[10px] uppercase tracking-widest">Scroll</span>
         <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
};