import React from 'react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ui/ImageGallery';

const ServiceCard = ({ title, desc, img }: { title: string, desc: string, img: string }) => (
    <div className="bg-white border border-gray-100 overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500">
        <div className="h-80 overflow-hidden relative">
            <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
        </div>
        <div className="p-8 flex flex-col flex-1">
            <h3 className="font-serif text-2xl text-gray-900 mb-4 group-hover:text-brand-red transition-colors">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{desc}</p>
        </div>
    </div>
);

export const ServicesPage: React.FC = () => {
  // Before/After selection using client images
  const beforeAfterImages = [
      "/cli7.jpg",
      "/cli8.jpg",
      "/cli9.jpg",
      "/cli11.jpg",
      "/cli12.jpg",
      "/cli13.jpg"
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
        
        {/* Header Hero */}
        <div className="bg-neutral-900 pt-24 pb-20 px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Cosa Facciamo</span>
                <h1 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-tight">Servizi Edili d'Eccellenza</h1>
                <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                   Dall'idea al cantiere finito: CO LAKE IM trasforma i vostri spazi con maestria artigianale e soluzioni tecnologiche innovative.
                </p>
            </div>
        </div>

        {/* 4 Main Services Grid - Using client samples for cards */}
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <ServiceCard 
                    title="Ristrutturazioni interne"
                    desc="Bagni, cucine, appartamenti e locali commerciali chiavi in mano. Gestiamo l'intero processo per garantirti un risultato perfetto senza stress."
                    img="/cli14.jpg"
                />
                <ServiceCard 
                    title="Cartongesso & controsoffitti"
                    desc="Soluzioni su misura per dividere, illuminare e valorizzare gli spazi. Creiamo volumi architettonici che trasformano l'estetica degli ambienti."
                    img="/cli15.jpg"
                />
                <ServiceCard 
                    title="Pavimenti e rivestimenti"
                    desc="Resina, parquet, piastrelle e superfici decorative. Selezioniamo solo i migliori materiali per superfici durature e di alto design."
                    img="/cli12.jpg"
                />
                <ServiceCard 
                    title="Effetti decorativi e finiture"
                    desc="Pareti moderne, texture materiche e design contemporaneo. Diamo carattere ai tuoi muri con tecniche artigianali d'avanguardia."
                    img="/cli11.jpg"
                />
            </div>
        </section>

        {/* Before/After Gallery */}
        <section className="bg-gray-50 py-24 px-6 border-y border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-4 block">Portfolio</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Realizzazioni: Prima & Dopo</h2>
                    <p className="text-gray-600 font-light max-w-xl mx-auto">La prova tangibile della nostra capacità di trasformare spazi obsoleti in ambienti moderni e accoglienti.</p>
                </div>
                <ImageGallery images={beforeAfterImages} />
            </div>
        </section>

        {/* Experience Row & CTA */}
        <section className="bg-neutral-900 py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
                <div className="lg:max-w-3xl">
                    <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 leading-tight">
                        Soluzioni su misura per il tuo business e la tua casa.
                    </h2>
                    <p className="text-gray-400 text-lg font-light leading-relaxed">
                        Co La Ke esegue lavorazioni su misura su <span className="text-white">appartamenti, ville, locali commerciali, B&B e hotel</span>, offrendo soluzioni tecniche ed estetiche studiate sia per ambienti residenziali che professionali. Valorizziamo il tuo investimento immobiliare con qualità garantita.
                    </p>
                </div>
                <div className="flex-shrink-0 w-full lg:w-auto text-center">
                    <Link to="/contatti">
                        <Button className="!py-6 !px-16 text-sm shadow-2xl w-full sm:w-auto">PARLA CON UN ESPERTO &rarr;</Button>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  );
};