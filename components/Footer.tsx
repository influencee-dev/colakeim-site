import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 pt-20 pb-32 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1 - Brand */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">CO LAKE IM</h4>
            <p className="text-sm font-light leading-relaxed mb-6">
               Eccellenza nelle ristrutturazioni d'interni sul Lago di Como. Design su misura e maestria artigianale per ogni tipologia di immobile.
            </p>
             <div className="flex space-x-4 text-white">
                <a href="#" className="hover:text-brand-red transition-colors"><Facebook size={18}/></a>
                <a href="#" className="hover:text-brand-red transition-colors"><Instagram size={18}/></a>
                <a href="#" className="hover:text-brand-red transition-colors"><Linkedin size={18}/></a>
             </div>
          </div>

          {/* Column 2 - Menu */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Menu Rapido</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/servizi" className="hover:text-white transition-colors">Servizi</Link></li>
              <li><Link to="/chi-siamo" className="hover:text-white transition-colors">Chi Siamo</Link></li>
              <li><Link to="/fotogallery" className="hover:text-white transition-colors">Fotogallery</Link></li>
              <li><Link to="/contatti" className="hover:text-white transition-colors">Contatti</Link></li>
            </ul>
          </div>

          {/* Column 3 - Servizi */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">I Nostri Servizi</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link to="/servizi" className="hover:text-white transition-colors">Ristrutturazioni Interni</Link></li>
              <li><Link to="/servizi" className="hover:text-white transition-colors">Cartongesso e Controsoffitti</Link></li>
              <li><Link to="/servizi" className="hover:text-white transition-colors">Pavimenti e Rivestimenti</Link></li>
              <li><Link to="/servizi" className="hover:text-white transition-colors">Effetti Decorativi</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contatti */}
          <div>
             <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Contatti</h4>
             <ul className="space-y-4 text-sm font-light">
                <li>Como, Italia</li>
                <li>info@colakeim.com</li>
                <li>+39 031 000 0000</li>
                <li className="pt-2">
                   <Link to="/contatti">
                      <span className="text-brand-red font-bold hover:underline">RICHIEDI PREVENTIVO &rarr;</span>
                   </Link>
                </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
           <p>&copy; 2025 — CO LAKE IM S.r.l. | P.IVA 0123456789</p>
           <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
           </div>
        </div>
      </div>
    </footer>
  );
};