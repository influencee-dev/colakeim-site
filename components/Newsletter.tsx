import React from 'react';

export const Newsletter: React.FC = () => {
  return (
    <section className="relative py-32 bg-neutral-800 overflow-hidden">
       {/* Subtle background texture/image overlay */}
       <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src="https://picsum.photos/id/249/1920/1080" className="w-full h-full object-cover grayscale" />
       </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
         <div className="max-w-3xl">
            <span className="text-gray-500 text-xs font-bold tracking-[0.15em] uppercase mb-4 block">
              Newsletter
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-8">
              RIMANI AGGIORNATO SUI NUOVI MATERIALI
            </h2>

            <form className="mt-8 max-w-xl">
                <div className="relative mb-6">
                    <input 
                      type="email" 
                      placeholder="Email*" 
                      className="w-full bg-white/10 border-b border-gray-600 text-white p-4 focus:outline-none focus:border-white placeholder-gray-400 transition-colors"
                    />
                </div>
                
                <button 
                  type="submit" 
                  className="text-white text-xs font-bold tracking-widest uppercase mb-8 hover:text-brand-red transition-colors flex items-center"
                >
                  ISCRIVITI &rarr;
                </button>

                <div className="flex items-start gap-3">
                   <input type="checkbox" id="privacy" className="mt-1 accent-brand-red" />
                   <label htmlFor="privacy" className="text-xs text-gray-500 leading-relaxed">
                      Con l'invio della presente richiesta dichiaro di essere maggiorenne e di aver preso visione 
                      dell'informativa sul trattamento dei dati personali...<br/>
                      Inoltre acconsento al trattamento dei miei dati personali per elaborare un mio profilo...
                   </label>
                </div>
            </form>
         </div>
      </div>
    </section>
  );
};