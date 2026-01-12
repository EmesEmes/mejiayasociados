import React, { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to determine href based on current location
  const getHref = (anchor: string) => {
    return isHome ? anchor : `/${anchor}`;
  };

  const navItems: NavItem[] = [
    { label: 'Inicio', href: isHome ? '#home' : '/' },
    { label: 'Servicios', href: getHref('#services') },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Equipo', href: '/equipo' },
    { label: 'Contacto', href: '/contacto' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // If it's an anchor link on the same page, we might need to manually scroll if behavior is interrupted
    if (href.startsWith('#') && isHome) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !isHome ? 'bg-dark-900/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-gradient-to-tr from-brand-dark to-brand rounded-lg group-hover:shadow-[0_0_15px_rgba(127,255,212,0.5)] transition-shadow duration-300">
                <Scale className="h-6 w-6 text-dark-900" />
              </div>
              <span className="ml-2 text-xl font-serif font-bold text-white tracking-wide">
                Mejía <span className="text-brand">&</span> Asociados
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isAnchor = item.href.startsWith('#');
              return isAnchor ? (
                 <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (isHome) {
                        e.preventDefault();
                        handleNavClick(item.href);
                    }
                  }}
                  className="text-gray-300 hover:text-brand transition-colors duration-300 text-sm font-medium tracking-wider uppercase relative group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-sm font-medium tracking-wider uppercase relative group transition-colors duration-300 ${
                    location.pathname === item.href ? 'text-brand' : 'text-gray-300 hover:text-brand'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand transition-all duration-300 ${
                    location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-dark-900 border-b border-white/10 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
             item.href.startsWith('#') && isHome ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-brand hover:bg-white/5 rounded-md transition-colors"
                >
                  {item.label}
                </a>
             ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium hover:bg-white/5 rounded-md transition-colors ${
                     location.pathname === item.href ? 'text-brand' : 'text-gray-300 hover:text-brand'
                  }`}
                >
                  {item.label}
                </Link>
             )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;