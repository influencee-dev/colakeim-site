import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ title, desc, link, img }: { title: string, desc: string, link: string, img: string }) => (
    <div className="flex flex-col bg-neutral-50 hover:shadow-lg transition-all duration-300 group h-full">
        <div className="h-64 overflow-hidden relative">
            <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
        </div>
        <div className="p-8 flex-1 flex flex-col">
            <h3 className="font-serif text-2xl mb-4 text-gray-900 group-hover:text-brand-red transition-colors">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{desc}</p>
            <Link to={link} className="text-xs font-bold tracking-widest uppercase border-b border-gray-300 pb-1 self-start hover:border-brand-red hover:text-brand-red transition-colors">
                Scopri di più &rarr;
            </Link>
        </div>
    </div>
);

export const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
        <div className="bg-neutral-900 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <span className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Cosa Facciamo</span>
                <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Servizi Esclusivi</h1>
                <p className="text-gray-300 max-w-2xl font-light text-lg">
                    Offriamo una gamma completa di interventi per trasformare i vostri spazi. Dalla demolizione alla finitura di pregio, Colakeim è l'unico interlocutore di cui avete bisogno.
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceItem 
                    title="Ristrutturazioni Chiavi in Mano"
                    desc="Gestione completa del progetto: pratiche burocratiche, demolizioni, impianti e finiture. Il servizio ideale per chi cerca zero pensieri."
                    link="/servizi/ristrutturazione-interni-lago-di-como"
                    img="https://picsum.photos/id/100/600/400"
                />
                <ServiceItem 
                    title="Hotel & Strutture Ricettive"
                    desc="Interventi rapidi e mirati per minimizzare il fermo attività. Restyling di camere, hall e zone comuni per B&B e Hotel di lusso."
                    link="/servizi/ristrutturazione-strutture-ricettive-lago-di-como"
                    img="https://picsum.photos/id/449/600/400"
                />
                 <ServiceItem 
                    title="Imbiancature & Finiture"
                    desc="Tinteggiature di alta qualità, stucchi veneziani, velature ed effetti materici per donare carattere alle pareti."
                    link="/servizi/imbiancature-finiture-pareti-como"
                    img="https://picsum.photos/id/60/600/400"
                />
                 <ServiceItem 
                    title="Cartongesso & Design"
                    desc="Controsoffitti artistici, velette, librerie in cartongesso e pareti divisorie per ridefinire i volumi dei vostri ambienti."
                    link="/servizi/cartongesso-controsoffitti-como"
                    img="https://picsum.photos/id/201/600/400"
                />
                <ServiceItem 
                    title="Pavimenti & Resine"
                    desc="Posa di parquet, grès porcellanato e realizzazioni in resina continua per superfici moderne e senza fughe."
                    link="/servizi/rivestimenti-superfici-resina-como"
                    img="https://picsum.photos/id/1078/600/400"
                />
                <ServiceItem 
                    title="Restyling Mobili"
                    desc="Non buttare il vecchio arredo: lo trasformiamo con tecniche di resinatura e verniciatura innovative."
                    link="/servizi/restyling-mobili-resina-como"
                    img="https://picsum.photos/id/366/600/400"
                />
            </div>
        </div>
    </div>
  );
};