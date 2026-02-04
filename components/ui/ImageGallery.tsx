import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  title?: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full my-12">
      {title && (
        <h3 className="font-serif text-2xl text-gray-900 mb-6">{title}</h3>
      )}
      
      {/* Scrollable Row / Carousel */}
      <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="relative flex-shrink-0 w-72 h-56 md:w-80 md:h-64 cursor-pointer overflow-hidden group snap-center"
            onClick={() => setSelectedImage(img)}
          >
            <img 
              src={img} 
              alt={`Gallery item ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {/* Overlay hint */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-pointer animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white opacity-70 hover:opacity-100 transition-opacity">
            <X size={32} />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-h-[90vh] max-w-[95vw] object-contain shadow-2xl animate-in zoom-in-95 duration-300"
          />
        </div>
      )}
    </div>
  );
};