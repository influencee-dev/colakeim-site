import React from 'react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/1078/1920/1080" 
          alt="Interior Wall Texture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-2xl text-white">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-gray-400 mb-4 uppercase">
            Ristrutturazioni d'interni complete
          </h2>
          <h1 className="font-serif text-6xl md:text-8xl font-medium tracking-tight mb-8">
            COLAKEIM
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg font-light">
            Siamo specializzati nel trasformare ogni ambiente offrendo un servizio curato nei minimi dettagli. 
            Uniamo esperienza, materiali innovativi di qualità e un forte senso estetico per dare nuova vita ai tuoi spazi abitativi e professionali.
          </p>
          
          <div className="inline-block border-b border-white pb-1">
             <a href="#servizi" className="text-white text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:opacity-80 transition-opacity">
                Scopri tutti i servizi &rarr;
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};