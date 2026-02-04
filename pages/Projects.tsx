import React, { useState } from 'react';
import { MidBanner } from '../components/MidBanner';
import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ui/ImageGallery';

interface Project {
  id: number;
  category: 'Residenziale' | 'Commerciale' | 'Hotel';
  title: string;
  location: string;
  image: string;
  size: string;
}

const projects: Project[] = [
  {
    id: 1,
    category: 'Residenziale',
    title: 'Villa Liberty Restyling',
    location: 'Bellagio',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    size: '350 mq'
  },
  {
    id: 2,
    category: 'Hotel',
    title: 'Grand Hotel Tremezzo Suite',
    location: 'Tremezzina',
    image: 'https://images.unsplash.com/photo-1590490360182-f33db1395c73?auto=format&fit=crop&w=800&q=80',
    size: '120 mq'
  },
  {
    id: 3,
    category: 'Commerciale',
    title: 'Boutique Showroom Seta',
    location: 'Como Centro',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    size: '200 mq'
  },
  {
    id: 4,
    category: 'Residenziale',
    title: 'Attico Vista Lago',
    location: 'Cernobbio',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80',
    size: '180 mq'
  },
  {
    id: 5,
    category: 'Residenziale',
    title: 'Loft Industriale',
    location: 'Lecco',
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80',
    size: '140 mq'
  },
  {
    id: 6,
    category: 'Hotel',
    title: 'Lounge Bar Resort',
    location: 'Menaggio',
    image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800&q=80',
    size: '300 mq'
  }
];

// High quality detail images
const detailImages = [
    "https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581094741842-7bc49ba47b3b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1599696847727-920002722d84?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1574359411659-15573a21bc2c?auto=format&fit=crop&w=800&q=80"
];

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('Tutti');

  const filteredProjects = filter === 'Tutti' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* Header */}
      <div className="bg-neutral-900 py-24 px-6 text-center">
         <span className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Portfolio</span>
         <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Progetti Realizzati</h1>
         <p className="text-gray-300 max-w-2xl mx-auto font-light text-lg">
            Una selezione dei nostri interventi più significativi sul Lago di Como.
         </p>
      </div>

      {/* Filter */}
      <div className="border-b border-gray-200 sticky top-20 z-30 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap justify-center gap-6 md:gap-12">
           {['Tutti', 'Residenziale', 'Hotel', 'Commerciale'].map((cat) => (
             <button 
               key={cat}
               onClick={() => setFilter(cat)}
               className={`text-xs font-bold uppercase tracking-widest transition-colors ${filter === cat ? 'text-brand-red' : 'text-gray-400 hover:text-gray-900'}`}
             >
               {cat}
             </button>
           ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
               <div key={project.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-gray-100">
                     <img 
                       src={project.image} 
                       alt={project.title} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white border border-white px-6 py-3 text-xs font-bold uppercase tracking-widest">Vedi Dettagli</span>
                     </div>
                  </div>
                  <div className="flex justify-between items-start">
                     <div>
                        <span className="text-brand-red text-[10px] font-bold uppercase tracking-wider mb-1 block">{project.category}</span>
                        <h3 className="font-serif text-xl text-gray-900 group-hover:text-brand-red transition-colors">{project.title}</h3>
                        <p className="text-gray-500 text-sm mt-1">{project.location}</p>
                     </div>
                     <span className="text-gray-400 text-xs font-mono border border-gray-200 px-2 py-1 rounded">{project.size}</span>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* New Gallery Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
         <ImageGallery images={detailImages} title="Dettagli di Cantiere" />
      </div>

      <div className="bg-gray-50 py-16 text-center px-6">
         <h3 className="font-serif text-3xl mb-4">Vuoi vedere altri progetti specifici?</h3>
         <p className="text-gray-600 mb-8 max-w-xl mx-auto">Abbiamo un archivio privato di lavori "chiavi in mano" visionabile su appuntamento.</p>
         <Link to="/progetti-chiavi-in-mano-lago-di-como" className="text-brand-red text-xs font-bold uppercase border-b border-brand-red pb-1 hover:text-rose-800 hover:border-rose-800 transition-colors">
            Scopri il servizio Chiavi in Mano &rarr;
         </Link>
      </div>

      <MidBanner />
    </div>
  );
};