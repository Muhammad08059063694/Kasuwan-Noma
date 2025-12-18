import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Globe, Leaf } from 'lucide-react';
import { Language, Translation } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translation;
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t, cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleLang = () => {
    setLang(lang === 'EN' ? 'HA' : 'EN');
  };

  const isActive = (path: string) => location.pathname === path ? 'text-agri-200 font-bold' : 'text-white hover:text-agri-200';

  return (
    <nav className="bg-agri-700 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-agri-300" />
            <span className="font-bold text-lg md:text-xl tracking-wide uppercase">
              Kasuwar Noma
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={isActive('/')}>{t.nav_home}</Link>
            <Link to="/market" className={isActive('/market')}>{t.nav_market}</Link>
            <Link to="/sell" className={isActive('/sell')}>{t.nav_sell}</Link>
            <Link to="/auth" className={isActive('/auth')}>{t.nav_login}</Link>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={toggleLang} 
              className="flex items-center space-x-1 hover:bg-agri-600 px-3 py-1 rounded-full transition"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-semibold">{lang}</span>
            </button>
            
            <Link to="/cart" className="relative hover:text-agri-200">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
             <Link to="/cart" className="relative hover:text-agri-200 mr-2">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-agri-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-agri-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-agri-700"
            >
              {t.nav_home}
            </Link>
            <Link 
              to="/market" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-agri-700"
            >
              {t.nav_market}
            </Link>
            <Link 
              to="/sell" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-agri-700"
            >
              {t.nav_sell}
            </Link>
            <Link 
              to="/auth" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-agri-700"
            >
              {t.nav_login}
            </Link>
            <button 
              onClick={() => { toggleLang(); setIsOpen(false); }}
              className="w-full text-left flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium hover:bg-agri-700 text-amber-400"
            >
              <Globe className="h-5 w-5" />
              <span>Switch Language ({lang === 'EN' ? 'Hausa' : 'English'})</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;