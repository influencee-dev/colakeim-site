import React from 'react';
import { Button } from './ui/Button';

export const MidBanner: React.FC = () => {
  return (
    <section className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/155/1920/1080" 
          alt="Renovation Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <span className="block text-gray-400 text-xs font-bold tracking-[0.2em] uppercase mb-6">
          Il Tuo Progetto
        </span>
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight">
          Iniziamo la Tua <br /> Ristrutturazione
        </h2>
        <p className="text-gray-300 text-lg font-light mb-10 max-w-2xl mx-auto">
          Siamo il partner ideale per un servizio completo e affidabile. 
          Contattaci per una consulenza e per trasformare le tue idee in realtà.
        </p>
        <div className="flex justify-center">
            <Button>RICHIEDI UN PREVENTIVO GRATUITO &rarr;</Button>
        </div>
      </div>
    </section>
  );
};