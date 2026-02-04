import React from 'react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

export const StickyBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#E5E5E5] z-[60] py-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-800 text-sm font-medium">
          <span className="hidden sm:inline text-xl leading-none text-brand-red">•</span>
          <span>Richiedi un preventivo gratuito e fissa un sopralluogo con i nostri tecnici.</span>
        </div>
        <div>
          <Link to="/contatti">
            <Button className="!py-2 !px-4 text-xs">PRENOTA UNA CONSULENZA &rarr;</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};