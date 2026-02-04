import React from 'react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ui/ImageGallery';

const ServiceCard = ({ title, desc, img }: { title: string, desc: string, img: string }) => (
    <div className="bg-white border border-gray-100 overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500">
        <div className="h-72 overflow-hidden relative">
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
  const beforeAfterImages = [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595515106967-1b07d57077a2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="bg-white min-h-screen">
        
        {/* Header Hero */}
        <div className="bg-neutral-900 pt-32 pb-24 px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Cosa Facciamo</span>
                <h1 className="font-serif text-5xl md:text-7xl text-white mb-8">Soluzioni di Lusso su Misura</h1>
                <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                   Dall'idea al cantiere finito: CO LAKE IM trasforma i vostri spazi con maestria artigianale e design contemporaneo.
                </p>
            </div>
        </div>

        {/* Main Services Grid */}
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <ServiceCard 
                    title="Ristrutturazioni interne"
                    desc="Progetti chiavi in mano per bagni, cucine, interi appartamenti e locali commerciali. Ci occupiamo di ogni fase, dalla demolizione alle pulizie finali."
                    img="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                />
                <ServiceCard 
                    title="Cartongesso & controsoffitti"
                    desc="Soluzioni architettoniche innovative per dividere gli spazi, creare giochi di luce e valorizzare ogni ambiente con precisione millimetrica."
                    img="https://images.unsplash.com/photo-1594422634611-29438cb2c8e1?auto=format&fit=crop&w=800&q=80"
                />
                <ServiceCard 
                    title="Pavimenti e rivestimenti"
                    desc="Specialisti in resine continue, posa parquet di pregio, piastrelle in gres porcellanato e superfici decorative d'avanguardia."
                    img="https://images.unsplash.com/photo-1516455590571-fb25f8569456?auto=format&fit=crop&w=800&q=80"
                />
                <ServiceCard 
                    title="Effetti decorativi e finiture"
                    desc="Pareti moderne e texture materiche (effetto cemento, pietra spaccata) per chi cerca un design distintivo e contemporaneo."
                    img="https://images.unsplash.com/photo-1615529123000-ad69299ebf47?auto=format&fit=crop&w=800&q=80"
                />
            </div>
        </section>

        {/* Before/After Gallery */}
        <section className="bg-gray-50 py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="font-serif text-4xl text-gray-900 mb-4">Evoluzioni: Prima & Dopo</h2>
                    <p className="text-gray-600 font-light">Alcune delle nostre realizzazioni più significative catturate durante il processo di trasformazione.</p>
                </div>
                <ImageGallery images={beforeAfterImages} title="Trasformazioni CO LAKE IM" />
            </div>
        </section>

        {/* Experience Row & CTA */}
        <section className="bg-neutral-900 py-24 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="lg:max-w-2xl">
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
                        Competenza residenziale e professionale per ogni esigenza.
                    </h2>
                    <p className="text-gray-400 text-lg font-light leading-relaxed">
                        Eseguiamo lavorazioni su misura per <span className="text-white">appartamenti, ville, locali commerciali, B&B e hotel</span>. 
                        Che si tratti della tua casa privata o del tuo spazio business, offriamo soluzioni tecniche ed estetiche studiate per massimizzare il valore del tuo immobile.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link to="/contatti">
                        <Button className="!py-6 !px-12 text-sm shadow-2xl">RICHIEDI UNA CONSULENZA &rarr;</Button>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  );
};