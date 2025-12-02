import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null); // For Desktop
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null); // For Mobile
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedMobileMenu(null);
    setActiveSubmenu(null);
  }, [location]);

  const navStructure: NavItem[] = [
    { label: 'CHI SIAMO', href: '/chi-siamo' },
    { 
      label: 'SERVIZI', 
      href: '/servizi',
      children: [
        { label: 'Ristrutturazione Interni', href: '/servizi/ristrutturazione-interni-lago-di-como' },
        { label: 'Strutture Ricettive', href: '/servizi/ristrutturazione-strutture-ricettive-lago-di-como' },
        { label: 'Imbiancature & Finiture', href: '/servizi/imbiancature-finiture-pareti-como' },
        { label: 'Cartongesso & Design', href: '/servizi/cartongesso-controsoffitti-como' },
        { label: 'Pavimenti Interni', href: '/servizi/pavimenti-interni-como' },
        { label: 'Rivestimenti Resina', href: '/servizi/rivestimenti-superfici-resina-como' },
        { label: 'Effetti Decorativi', href: '/servizi/effetti-decorativi-pareti-como' },
        { label: 'Restyling Mobili', href: '/servizi/restyling-mobili-resina-como' },
      ]
    },
    { 
      label: 'SETTORI', 
      href: '/destinazioni-target',
      children: [
        { label: 'Privati & Ville', href: '/ristrutturazioni-privati-case-appartamenti-ville-lago-di-como' },
        { label: 'Hotel & Resort', href: '/ristrutturazioni-hotel-resort-lago-di-como' },
        { label: 'B&B & Case Vacanza', href: '/ristrutturazioni-beb-case-vacanza-lago-di-como' },
        { label: 'Locali Commerciali', href: '/ristrutturazioni-locali-commerciali-uffici-como' },
      ]
    },
    {
      label: 'AREE',
      href: '#',
      children: [
        { label: 'Como Centro', href: '/ristrutturazioni-interni-como' },
        { label: 'Bellagio', href: '/ristrutturazioni-interni-bellagio' },
        { label: 'Menaggio', href: '/ristrutturazioni-interni-menaggio' },
        { label: 'Lecco', href: '/ristrutturazioni-interni-lecco' },
      ]
    },
    { 
      label: 'PROGETTI', 
      href: '/progetti-realizzati',
      children: [
         { label: 'Tutti i Progetti', href: '/progetti-realizzati' },
         { label: 'Chiavi in Mano', href: '/progetti-chiavi-in-mano-lago-di-como' },
      ]
    },
    { label: 'BLOG', href: '/blog' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || activeSubmenu ? 'bg-neutral-900 py-3 shadow-lg' : 'bg-black/20 backdrop-blur-sm py-6'}`}
      onMouseLeave={() => setActiveSubmenu(null)}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        
        {/* Logo */}
        <div className="flex-shrink-0 z-50 relative">
          <Link to="/" className="text-white font-serif text-2xl tracking-widest font-bold">
            COLAKEIM
          </Link>
        </div>

        {/* Desktop Mega Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8 items-center h-full">
            {navStructure.map((item) => (
              <li 
                key={item.label} 
                className="relative group h-full flex items-center"
                onMouseEnter={() => setActiveSubmenu(item.children ? item.label : null)}
              >
                <Link 
                  to={item.href} 
                  className={`text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-1 ${activeSubmenu === item.label ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} className="opacity-70" />}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4 pl-4 border-l border-gray-700">
            <Link to="/contatti">
              <Button>PREVENTIVO &rarr;</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center z-50 relative">
           <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>
      </div>

      {/* Desktop Mega Menu Dropdown Panel */}
      <div 
         className={`hidden lg:block absolute left-0 w-full bg-neutral-900 border-t border-gray-800 transition-all duration-300 overflow-hidden ${activeSubmenu ? 'opacity-100 visible max-h-[400px]' : 'opacity-0 invisible max-h-0'}`}
         onMouseEnter={() => setActiveSubmenu(activeSubmenu)} // Keep open when hovering the panel
         onMouseLeave={() => setActiveSubmenu(null)}
      >
          <div className="max-w-7xl mx-auto px-6 py-10">
              {navStructure.map((item) => {
                  if (item.label !== activeSubmenu || !item.children) return null;
                  
                  return (
                      <div key={item.label} className="grid grid-cols-4 gap-8 animate-in fade-in slide-in-from-top-2 duration-300">
                          {/* Description Column */}
                          <div className="col-span-1 border-r border-gray-800 pr-8">
                              <h3 className="font-serif text-2xl text-white mb-4">{item.label}</h3>
                              <p className="text-gray-400 text-sm font-light leading-relaxed">
                                  Esplora la nostra selezione di {item.label.toLowerCase()}. 
                                  Qualità artigianale e design su misura per ogni esigenza.
                              </p>
                              <Link to={item.href} className="text-brand-red text-xs font-bold uppercase mt-6 inline-block hover:underline">
                                  Vai a {item.label} &rarr;
                              </Link>
                          </div>
                          
                          {/* Links Columns */}
                          <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
                              {item.children.map((child) => (
                                  <Link 
                                    key={child.label} 
                                    to={child.href}
                                    className="group flex flex-col"
                                  >
                                      <span className="text-white text-sm font-medium mb-1 group-hover:text-brand-red transition-colors block">
                                          {child.label}
                                      </span>
                                      <span className="text-gray-500 text-xs hidden xl:block">
                                         Scopri di più &rarr;
                                      </span>
                                  </Link>
                              ))}
                          </div>
                      </div>
                  );
              })}
          </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-neutral-900 z-40 transition-transform duration-300 lg:hidden overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col p-8 mt-20 space-y-6 pb-32">
          {navStructure.map((item) => (
            <div key={item.label} className="border-b border-gray-800 pb-4">
              <div className="flex items-center justify-between">
                <Link 
                  to={item.href} 
                  onClick={() => !item.children && setIsMobileMenuOpen(false)}
                  className="text-white text-lg font-serif tracking-wide uppercase"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button 
                    onClick={() => setExpandedMobileMenu(expandedMobileMenu === item.label ? null : item.label)}
                    className="p-2 text-gray-400"
                  >
                    {expandedMobileMenu === item.label ? <ChevronDown /> : <ChevronRight />}
                  </button>
                )}
              </div>
              
              {/* Mobile Submenu */}
              {item.children && (
                 <div className={`mt-4 pl-4 space-y-4 overflow-hidden transition-all duration-300 ${expandedMobileMenu === item.label ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    {item.children.map(child => (
                        <Link 
                           key={child.label}
                           to={child.href}
                           onClick={() => setIsMobileMenuOpen(false)}
                           className="block text-gray-400 text-sm hover:text-brand-red"
                        >
                           {child.label}
                        </Link>
                    ))}
                 </div>
              )}
            </div>
          ))}
          
          <div className="pt-8">
            <Link to="/contatti" onClick={() => setIsMobileMenuOpen(false)}>
              <Button fullWidth>PRENOTA UNA CONSULENZA &rarr;</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};