import React from 'react';

const ServiceCard = ({ img, title }: { img: string, title: string }) => (
  <div className="flex flex-col group cursor-pointer">
    <div className="overflow-hidden aspect-[4/5] mb-4">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    <h3 className="text-xs font-bold tracking-widest uppercase text-gray-800 group-hover:text-brand-red transition-colors">
      {title}
    </h3>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="servizi" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Text Content */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <span className="text-gray-400 text-xs font-bold tracking-[0.15em] uppercase mb-6">
              Servizi Certificati
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-8">
              ESPERIENZA.<br />
              MATERIALI.<br />
              ESTETICA.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 font-light">
              Siamo il partner ideale per chi desidera un servizio completo, affidabile e creativo. 
              Ogni progetto è seguito con attenzione, dalla consulenza iniziale alla consegna finale, 
              per risultati all'altezza delle aspettative.
            </p>
            <div>
              <a href="#" className="text-gray-800 text-xs font-bold tracking-widest uppercase border-b border-gray-300 pb-1 hover:border-black transition-colors">
                Richiedi una consulenza &rarr;
              </a>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard 
              img="https://picsum.photos/id/1011/500/700" 
              title="Cartongesso & Ridefinizione Spazi" 
            />
            <ServiceCard 
              img="https://picsum.photos/id/1006/500/700" 
              title="Rivestimenti in Resina & Pavimenti" 
            />
            <ServiceCard 
              img="https://picsum.photos/id/201/500/700" 
              title="Imbiancatura & Effetti Decorativi" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};