import React from 'react';

export const DetailsSection: React.FC = () => {
  return (
    <section className="bg-neutral-900 py-24 md:py-40 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          
          {/* Left Text */}
          <div className="lg:w-1/2">
            <div className="w-12 h-1 bg-brand-red mb-10"></div>
            <span className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
              La nostra firma
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] mb-10">
              L'ARTE DEL <br />
              RESTYLING.
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-12 font-light max-w-lg">
              Siamo specializzati nel <span className="text-white">restyling di mobili d'epoca</span> e cucine di design attraverso l'applicazione di resine cementizie e polimeri innovativi. 
              Diamo nuova anima ai tuoi arredi senza necessità di sostituzione.
            </p>
            <a href="#" className="text-white text-xs font-bold tracking-widest uppercase border-b border-gray-700 pb-2 hover:border-brand-red hover:text-brand-red transition-all">
              ESPLORA GLI EFFETTI MATERICI &rarr;
            </a>
          </div>

          {/* Right Images (Overlapping effect) */}
          <div className="lg:w-1/2 relative flex justify-center">
             <div className="w-4/5 aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&w=1000&q=80" 
                  alt="Interior Detail" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
             </div>
             <div className="absolute -bottom-10 -right-4 w-1/2 aspect-square overflow-hidden border-8 border-neutral-900 shadow-2xl hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80" 
                  alt="Marble texture" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};