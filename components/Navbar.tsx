import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'SERVIZI', href: '/servizi' },
    { label: 'CHI SIAMO', href: '/chi-siamo' },
    { label: 'FOTOGALLERY', href: '/fotogallery' },
    { label: 'CONTATTI', href: '/contatti' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-900 py-4 shadow-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-white font-serif text-2xl tracking-[0.2em] font-bold">
          CO LAKE IM
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          <ul className="flex space-x-8 items-center">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link 
                  to={link.href} 
                  className={`text-[11px] font-bold tracking-widest uppercase transition-colors ${location.pathname === link.href ? 'text-brand-red' : 'text-gray-300 hover:text-white'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contatti">
            <Button variant="primary" className="!py-2 !px-6 text-[10px]">PREVENTIVO</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-neutral-900 z-40 transition-transform duration-500 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              to={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-2xl font-serif tracking-widest uppercase hover:text-brand-red transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contatti" onClick={() => setIsMobileMenuOpen(false)} className="pt-4">
             <Button className="!px-12">PREVENTIVO GRATUITO</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};