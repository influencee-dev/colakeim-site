import React, { useState } from 'react';
import { MidBanner } from '../components/MidBanner';
import { Link } from 'react-router-dom';

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
    image: 'https://picsum.photos/id/1011/800/1200',
    size: '350 mq'
  },
  {
    id: 2,
    category: 'Hotel',
    title: 'Grand Hotel Tremezzo Suite',
    location: 'Tremezzina',
    image: 'https://picsum.photos/id/164/800/600',
    size: '120 mq'
  },
  {
    id: 3,
    category: 'Commerciale',
    title: 'Boutique Showroom Seta',
    location: 'Como Centro',
    image: 'https://picsum.photos/id/180/800/1000',
    size: '200 mq'
  },
  {
    id: 4,
    category: 'Residenziale',
    title: 'Attico Vista Lago',
    location: 'Cernobbio',
    image: 'https://picsum.photos/id/201/800/800',
    size: '180 mq'
  },
  {
    id: 5,
    category: 'Residenziale',
    title: 'Loft Industriale',
    location: 'Lecco',
    image: 'https://picsum.photos/id/366/800/600',
    size: '140 mq'
  },
  {
    id: 6,
    category: 'Hotel',
    title: 'Lounge Bar Resort',
    location: 'Menaggio',
    image: 'https://picsum.photos/id/433/800/1000',
    size: '300 mq'
  }
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