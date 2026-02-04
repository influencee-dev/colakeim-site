import React from 'react';
import { ImageGallery } from '../components/ui/ImageGallery';

export const GalleryPage: React.FC = () => {
  const portfolioImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1590490360182-f33db1395c73?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
  ];

  return (
    <div className="bg-white min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-6 pb-24">
            <div className="mb-16 text-center">
                <span className="text-gray-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Portfolio</span>
                <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6">Fotogallery Realizzazioni</h1>
                <p className="text-gray-600 max-w-2xl mx-auto font-light text-lg">
                    Esplora la nostra cura per il dettaglio attraverso una selezione di progetti portati a termine con successo.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioImages.map((img, i) => (
                    <div key={i} className="group relative aspect-[4/5] overflow-hidden cursor-pointer">
                        <img 
                            src={img} 
                            alt={`Portfolio work ${i + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                    </div>
                ))}
            </div>

            <div className="mt-20">
                <ImageGallery images={portfolioImages.slice(0, 6)} title="I Nostri Cantieri in Dettaglio" />
            </div>
        </div>
    </div>
  );
};