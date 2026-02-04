import React, { useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { Link, useLocation } from 'react-router-dom';
import { ImageGallery } from '../components/ui/ImageGallery';

interface SEOContentProps {
  title: string;
  subtitle: string;
  description: string;
  keywords: string[];
  location?: string;
  image: string;
  isArticle?: boolean;
}

export const SEOContent: React.FC<SEOContentProps> = ({ 
  title, 
  subtitle, 
  description, 
  keywords, 
  location, 
  image,
  isArticle = false 
}) => {
  const { pathname } = useLocation();

  // Dynamic SEO Metadata Update
  useEffect(() => {
    document.title = `${title} | CO LAKE IM Ristrutturazioni`;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description.substring(0, 160) + '...');
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [title, description, pathname]);

  // Generate Breadcrumbs
  const pathSegments = pathname.split('/').filter(Boolean);
  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const label = segment.replace(/-/g, ' ');
    return { path, label };
  });

  // Real interior design gallery images
  const galleryImages = [
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1595515106967-1b07d57077a2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* Hero Section Specific */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img src={image} alt={title} className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6 animate-in fade-in zoom-in duration-700">
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight capitalize">
                {title}
            </h1>
            <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
                {subtitle}
            </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200 py-3 px-6">
        <div className="max-w-4xl mx-auto flex items-center text-xs uppercase tracking-wider text-gray-500 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-brand-red transition-colors flex-shrink-0">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={crumb.path}>
                    <span className="mx-2 text-gray-400">/</span>
                    <Link 
                        to={crumb.path} 
                        className={`hover:text-brand-red transition-colors capitalize flex-shrink-0 ${idx === breadcrumbs.length - 1 ? 'text-gray-800 font-bold' : ''}`}
                    >
                        {crumb.label}
                    </Link>
                </React.Fragment>
            ))}
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
         <div className="flex flex-col md:flex-row gap-12">
             <div className="flex-1">
                <span className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                    {isArticle ? 'Articolo Blog' : 'Servizio Esclusivo'}
                </span>
                <h2 className="font-serif text-3xl text-gray-900 mb-8 border-l-4 border-brand-red pl-6 leading-tight">
                    {isArticle ? title : `L'Eccellenza CO LAKE IM ${location ? `a ${location}` : ''}`}
                </h2>
                
                <article className="prose prose-lg text-gray-600 font-light leading-relaxed text-justify">
                    <p className="mb-6 text-lg first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-gray-900">
                        {description}
                    </p>
                    
                    <p className="mb-6">
                        In un contesto come quello del {location || 'Lago di Como'}, dove l'estetica si fonde con la storia, ogni intervento di ristrutturazione deve rispettare canoni precisi. 
                        Noi di <strong>CO LAKE IM</strong> uniamo la maestria artigiana alle più moderne tecnologie edili per offrire risultati che durano nel tempo.
                    </p>

                    {!isArticle && (
                        <>
                            <h3 className="font-bold text-gray-800 text-xl mt-12 mb-4">I vantaggi del nostro metodo</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 mb-10">
                                {[
                                    "Preventivi chiari e senza sorprese",
                                    "Team dedicato di architetti e geometri",
                                    "Materiali eco-sostenibili e certificati",
                                    "Gestione completa delle pratiche edilizie",
                                    "Pulizia finale e smaltimento macerie",
                                    "Garanzia post-intervento"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-base">
                                        <span className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* New Gallery Component */}
                            <div className="mt-12 border-t border-gray-100 pt-12">
                                <ImageGallery images={galleryImages} title="Dettagli e Ispirazioni" />
                            </div>
                        </>
                    )}

                    {isArticle && (
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8 text-sm text-gray-700 italic">
                            💡 <strong>Lo sapevi?</strong> Una ristrutturazione ben progettata può aumentare il valore del tuo immobile fino al 20%. Leggi le altre guide per scoprire come massimizzare il tuo investimento.
                        </div>
                    )}

                    <div className="bg-gray-50 p-8 mt-12 rounded-sm border border-gray-100 text-center md:text-left">
                        <h4 className="font-serif text-2xl text-gray-900 mb-4">
                            {isArticle ? 'Vuoi approfondire l\'argomento?' : 'Pronto a trasformare i tuoi spazi?'}
                        </h4>
                        <p className="mb-6 text-sm">
                            {isArticle 
                                ? 'I nostri esperti sono a disposizione per una consulenza personalizzata sul tuo caso specifico.' 
                                : 'Richiedi oggi un sopralluogo gratuito. I nostri tecnici valuteranno insieme a te la soluzione migliore.'}
                        </p>
                        <Link to="/contatti">
                            <Button>{isArticle ? 'CONTATTACI ORA' : 'RICHIEDI PREVENTIVO ORA'} &rarr;</Button>
                        </Link>
                    </div>
                </article>
             </div>
             
             {/* Sidebar (Visual only for layout balance) */}
             <aside className="w-full md:w-64 flex-shrink-0 space-y-8 hidden lg:block">
                 <div className="bg-neutral-900 p-6 text-white text-center">
                     <h5 className="font-serif text-xl mb-4">Hai un progetto?</h5>
                     <p className="text-sm text-gray-400 mb-6">Raccontaci la tua idea, la realizzeremo insieme.</p>
                     <Link to="/contatti" className="text-brand-red text-xs font-bold uppercase hover:underline">Scrivici &rarr;</Link>
                 </div>
                 <div className="border border-gray-200 p-6">
                     <h5 className="font-bold text-gray-900 text-xs uppercase tracking-widest mb-4">Aree Coperte</h5>
                     <ul className="text-sm text-gray-600 space-y-2">
                         <li><Link to="/ristrutturazioni-interni-como" className="hover:text-brand-red">Como Centro</Link></li>
                         <li><Link to="/ristrutturazioni-interni-bellagio" className="hover:text-brand-red">Bellagio</Link></li>
                         <li><Link to="/ristrutturazioni-interni-menaggio" className="hover:text-brand-red">Menaggio</Link></li>
                         <li><Link to="/ristrutturazioni-interni-lecco" className="hover:text-brand-red">Lecco</Link></li>
                     </ul>
                 </div>
             </aside>
         </div>
      </section>

      {/* SEO Keywords Footer */}
      <section className="bg-neutral-900 py-12 px-6 border-t border-gray-800">
         <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Keyword Focus</p>
            <div className="flex flex-wrap justify-center gap-3">
                {keywords.map(k => (
                    <span key={k} className="text-gray-600 text-xs px-2 py-1 border border-gray-800 rounded-full hover:border-gray-600 hover:text-gray-400 transition-colors cursor-default">
                        {k}
                    </span>
                ))}
            </div>
         </div>
      </section>
    </div>
  );
};