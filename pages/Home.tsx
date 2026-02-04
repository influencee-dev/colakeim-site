import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Newsletter } from '../components/Newsletter';
import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ui/ImageGallery';
import { Button } from '../components/ui/Button';

export const HomePage: React.FC = () => {
  const previewGallery = [
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1590490360182-f33db1395c73?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero */}
      <Hero />
      
      {/* 2. Frase d'ispirazione */}
      <section className="bg-white py-24 text-center border-b border-gray-100">
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

      {/* 3. Servizi (Anteprima) */}
      <Services />

      {/* 4. Row Chi Siamo (Anteprima) */}
      <section className="bg-neutral-900 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <span className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Chi Siamo</span>
                 <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight">
                    Artigiani del Bello, <br />Esperti del Territorio.
                 </h2>
                 <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                    CO LAKE IM nasce dalla passione per l'architettura d'interni e dalla volontà di portare l'eccellenza artigianale nelle dimore più esclusive del Lario. Uniamo tradizione italiana e innovazione tecnica.
                 </p>
                 <Link to="/chi-siamo">
                    <Button variant="outline">SCOPRI LA NOSTRA STORIA &rarr;</Button>
                 </Link>
              </div>
              <div className="relative">
                 <img src="https://images.unsplash.com/photo-1542626040-27a3c737841f?auto=format&fit=crop&w=1000&q=80" alt="Team at work" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000" />
                 <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-red hidden lg:flex items-center justify-center p-4 text-center">
                    <span className="text-white text-[10px] font-bold tracking-tighter uppercase leading-none">Qualità Certificata</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. Fotogallery Semplificata (Carosello) */}
      <section className="bg-white py-24">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-4 block">Portfolio</span>
                  <h2 className="font-serif text-4xl text-gray-900">Ultimi Cantieri</h2>
               </div>
               <Link to="/fotogallery" className="text-brand-red text-xs font-bold uppercase hover:underline">Vedi Fotogallery &rarr;</Link>
            </div>
            <ImageGallery images={previewGallery} />
         </div>
      </section>

      {/* 6. Row CTA Preventivo */}
      <section className="bg-neutral-800 py-24 px-6 border-t border-gray-700">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-8">Hai un progetto in mente?</h2>
            <p className="text-gray-300 text-lg mb-12 font-light">
               Contattaci oggi stesso per un sopralluogo gratuito e un preventivo dettagliato. 
               Diamo forma ai tuoi sogni con serietà e precisione.
            </p>
            <Link to="/contatti">
               <Button className="!py-6 !px-16 text-sm">RICHIEDI PREVENTIVO GRATUITO &rarr;</Button>
            </Link>
         </div>
      </section>

      <Newsletter />
    </div>
  );
};