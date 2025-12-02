import React from 'react';

export const DetailsSection: React.FC = () => {
  return (
    <section className="bg-neutral-900 py-24 md:py-32 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:w-1/2">
            <span className="text-gray-400 text-xs font-bold tracking-[0.15em] uppercase mb-6 block">
              I Nostri Dettagli
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-8">
              FINITURE <br />
              D'IMPATTO <br />
              E ORIGINALI
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10 font-light max-w-md">
              Offriamo effetti decorativi personalizzati come <span className="text-white font-medium">"effetto cemento, pietra spaccata"</span>, 
              o finiture artistiche realizzate con materiali specifici di alta qualità, inclusi il 
              <span className="text-white font-medium">"restyling e rivestimento di mobili in resina"</span>.
            </p>
            <a href="#" className="text-white text-xs font-bold tracking-widest uppercase border-b border-gray-600 pb-1 hover:border-white transition-colors">
              Esplora tutti gli effetti &rarr;
            </a>
          </div>

          {/* Right Images */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="overflow-hidden h-64">
                <img 
                  src="https://picsum.photos/id/195/600/400" 
                  alt="Detail 1" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
             </div>
             <div className="overflow-hidden h-64 mt-8 md:mt-12">
                <img 
                  src="https://picsum.photos/id/1070/600/400" 
                  alt="Detail 2" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};