import React from 'react';
import { Link } from 'react-router-dom';
import { Newsletter } from '../components/Newsletter';

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
}

const posts: BlogPost[] = [
  {
    title: 'Guida Completa alle Ristrutturazioni',
    excerpt: 'Quanto costa ristrutturare un appartamento a Como? Una disamina completa dei costi, dei permessi necessari e delle tempistiche.',
    category: 'Guide',
    date: '12 Ott 2024',
    image: 'https://images.unsplash.com/photo-1590490360182-f33db1395c73?auto=format&fit=crop&w=800&q=80',
    slug: '/blog/guida-ristrutturazioni'
  },
  {
    title: 'Idee Arredo e Design d\'Interni',
    excerpt: 'Tendenze 2025: minimalismo materico, colori della terra e illuminazione integrata. Scopri come valorizzare i tuoi spazi.',
    category: 'Inspirazione',
    date: '28 Set 2024',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80',
    slug: '/blog/idee-arredo-interni'
  },
  {
    title: 'Materiali e Finiture: Resina vs Gres',
    excerpt: 'Confronto tecnico tra i due materiali più richiesti del momento. Pro e contro per pavimenti e rivestimenti bagno.',
    category: 'Tecnica',
    date: '15 Set 2024',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    slug: '/blog/materiali-finiture'
  },
  {
    title: 'Ristrutturare sul Lago di Como',
    excerpt: 'Le sfide logistiche e i vincoli paesaggistici del Lario. Perché affidarsi a un\'impresa locale è fondamentale.',
    category: 'Territorio',
    date: '02 Set 2024',
    image: 'https://images.unsplash.com/photo-1516455590571-fb25f8569456?auto=format&fit=crop&w=800&q=80',
    slug: '/blog/ristrutturazioni-lago-di-como'
  }
];

export const BlogPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
       
       <div className="bg-neutral-900 py-20 px-6">
          <div className="max-w-7xl mx-auto">
              <span className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Journal</span>
              <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">News & Approfondimenti</h1>
              <p className="text-gray-300 max-w-2xl font-light text-lg">
                  Condividiamo la nostra esperienza nel mondo dell'edilizia e del design.
              </p>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             {posts.map((post) => (
                <article key={post.slug} className="flex flex-col group">
                   <Link to={post.slug} className="overflow-hidden mb-6 block">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                   </Link>
                   <div className="flex items-center gap-4 text-xs text-gray-500 uppercase tracking-wider mb-3">
                      <span className="text-brand-red font-bold">{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                   </div>
                   <h2 className="font-serif text-3xl mb-4 leading-tight group-hover:text-brand-red transition-colors">
                      <Link to={post.slug}>{post.title}</Link>
                   </h2>
                   <p className="text-gray-600 font-light leading-relaxed mb-6">
                      {post.excerpt}
                   </p>
                   <Link to={post.slug} className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                      Leggi articolo <span className="text-brand-red">&rarr;</span>
                   </Link>
                </article>
             ))}
          </div>
       </div>

       <Newsletter />
    </div>
  );
};