import React from 'react';
import { MidBanner } from '../components/MidBanner';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* Header Section */}
      <div className="relative bg-neutral-900 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
           <span className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase mb-4 block">La Nostra Storia</span>
           <h1 className="font-serif text-5xl md:text-6xl mb-8">Artigiani del Bello sul Lago di Como</h1>
           <p className="text-gray-300 text-lg font-light leading-relaxed max-w-2xl mx-auto">
             Colakeim nasce dalla passione per l'architettura d'interni e dalla volontà di portare l'eccellenza artigianale nelle dimore più esclusive del Lario.
           </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <img src="https://picsum.photos/id/433/800/1000" alt="Il nostro team al lavoro" className="w-full h-auto shadow-xl" />
            </div>
            <div>
               <h2 className="font-serif text-4xl text-gray-900 mb-6">Tradizione e Innovazione</h2>
               <p className="text-gray-600 mb-6 leading-relaxed">
                 Operiamo nel settore delle ristrutturazioni d’interni di alto profilo, specializzandoci in interventi per <strong>ville private, hotel di lusso e residenze storiche</strong>. Il nostro approccio combina le tecniche tradizionali della manodopera italiana con i materiali più innovativi del mercato, come le resine cementizie e i rivestimenti ecologici.
               </p>
               <p className="text-gray-600 mb-6 leading-relaxed">
                 Ogni progetto è un viaggio che intraprendiamo con il cliente: dall'ascolto delle esigenze alla progettazione 3D, fino alla consegna "chiavi in mano". La nostra forza risiede nella gestione completa del cantiere, garantendo tempi certi e finiture impeccabili.
               </p>
               
               <h3 className="font-serif text-2xl text-gray-900 mt-8 mb-4">I Nostri Valori</h3>
               <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Eccellenza:</strong> Non accettiamo compromessi sulla qualità.</li>
                  <li><strong>Trasparenza:</strong> Preventivi chiari e comunicazione costante.</li>
                  <li><strong>Sostenibilità:</strong> Utilizzo di materiali a basso impatto ambientale.</li>
                  <li><strong>Territorialità:</strong> Profonda conoscenza del tessuto architettonico del Lago di Como.</li>
               </ul>
            </div>
        </div>
      </div>

      <MidBanner />
    </div>
  );
};