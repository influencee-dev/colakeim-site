import React from 'react';
import { ImageGallery } from '../components/ui/ImageGallery';

export const GalleryPage: React.FC = () => {
  // Full list of client images cli1 to cli15 with correct .jpeg extension
  const portfolioImages = [
    "/cli.jpeg",
    "/cli1.jpeg",
    "/cli2.jpeg",
    "/cli3.jpeg",
    "/cli4.jpeg",
    "/cli5.jpeg",
    "/cli6.jpeg",
    "/cli7.jpeg",
    "/cli8.jpeg",
    "/cli9.jpeg",
    "/cli11.jpeg",
    "/cli12.jpeg",
    "/cli13.jpeg",
    "/cli14.jpeg",
    "/cli15.jpeg",
    "/cli10.jpeg"
  ];

  return (
    <div className="bg-white min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-6 pb-24">
            <div className="mb-16 text-center">
                <span className="text-gray-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Portfolio</span>
                <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6">Fotogallery Realizzazioni</h1>
                <p className="text-gray-600 max-w-2xl mx-auto font-light text-lg">
                    Esplora la nostra cura per il dettaglio attraverso una selezione di progetti portati a termine con successo sul territorio.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioImages.map((img, i) => (
                    <div key={i} className="group relative aspect-[4/5] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500">
                        <img 
                            src={img} 
                            alt={`Realizzazione CO LAKE IM ${i + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                    </div>
                ))}
            </div>

            <div className="mt-20">
                <ImageGallery images={portfolioImages.slice(0, 8)} title="Dettagli Materici e Finiture" />
            </div>
        </div>
    </div>
  );
};
