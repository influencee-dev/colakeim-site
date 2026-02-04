import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ img, title, subtitle }: { img: string, title: string, subtitle: string }) => (
  <div className="flex flex-col group cursor-pointer">
    <div className="overflow-hidden aspect-[3/4] mb-6 relative">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
    </div>
    <span className="text-brand-red text-[10px] font-bold tracking-widest uppercase mb-2">{subtitle}</span>
    <h3 className="font-serif text-2xl text-gray-900 group-hover:text-brand-red transition-colors duration-300 leading-tight">
      {title}
    </h3>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="servizi" className="bg-white py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Text Content */}
          <div className="lg:w-1/3 flex flex-col pt-4">
            <span className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase mb-8">
               Design & Eccellenza
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-gray-900 leading-[1.1] mb-10">
              UNA VISIONE <br />
              D'AUTORE PER <br />
              I TUOI SPAZI.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12 font-light">
              Dalla ridefinizione dei volumi in cartongesso alle finiture materiche in resina, 
              ogni nostro intervento è una ricerca ossessiva della perfezione estetica.
            </p>
            <Link to="/servizi" className="group inline-flex items-center gap-4 cursor-pointer w-fit">
              <span className="text-gray-900 text-xs font-bold tracking-widest uppercase border-b-2 border-brand-red pb-1 group-hover:bg-brand-red group-hover:text-white group-hover:px-2 transition-all">
                TUTTI I SERVIZI
              </span>
              <span className="text-brand-red group-hover:translate-x-2 transition-transform">&rarr;</span>
            </Link>
          </div>

          {/* Right Image Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ServiceCard 
              img="/cli15.jpeg" 
              title="Cartongesso & Illuminotecnica" 
              subtitle="Volume"
            />
            <ServiceCard 
              img="/cli12.jpeg" 
              title="Resine e Superfici Continue" 
              subtitle="Materia"
            />
            <ServiceCard 
              // New premium marble/decorative effect image
              img="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80" 
              title="Effetti Decorativi e Marmi" 
              subtitle="Dettaglio"
            />
          </div>

        </div>
      </div>
    </section>
  );
};