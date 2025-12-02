import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 pt-20 pb-32 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1 */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Colakeim</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">Chi siamo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Metodo di Lavoro</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Promozioni</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Virtual Tour Cantiere</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Servizi</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Servizi</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">Ristrutturazioni Chiavi in Mano</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Riqualificazione Energetica</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pratiche Edilizie e Catastali</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Progettazione 3D</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Interior Design</a></li>
            </ul>
          </div>

           {/* Column 3 */}
           <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Partner</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">Diventa Fornitore</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investi nel Mattone</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Collabora Architetti</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contratti Commerciali</a></li>
            </ul>
          </div>

          {/* Column 4 - Social & Language */}
          <div>
             <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Seleziona la lingua</h4>
             <div className="flex items-center gap-2 mb-8 text-sm">
                <span className="text-white">🇮🇹 Italiano</span>
             </div>
             
             <div className="flex space-x-4 text-white">
                <a href="#" className="hover:text-brand-red transition-colors"><Facebook size={18}/></a>
                <a href="#" className="hover:text-brand-red transition-colors"><Instagram size={18}/></a>
                <a href="#" className="hover:text-brand-red transition-colors"><Youtube size={18}/></a>
                <a href="#" className="hover:text-brand-red transition-colors"><Linkedin size={18}/></a>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
           <p>&copy; All rights reserved 2025 — Colakeim S.r.l.</p>
           <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
              <a href="#" className="hover:text-white">Rivedi impostazioni cookie</a>
           </div>
        </div>
      </div>
    </footer>
  );
};