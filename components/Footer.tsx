import React from 'react';
import { Scale, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Scale className="h-6 w-6 text-brand" />
            <span className="text-xl font-serif font-bold text-white tracking-wide">
              Mejía <span className="text-brand">&</span> Asociados
            </span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-brand transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Mejía & Asociados. Todos los derechos reservados.</p>
        </div>
        
        <div className="flex flex-col items-center justify-center mt-8 text-xs text-gray-600 gap-2">
          
          <a 
            href="https://www.linkedin.com/in/emilio-del-hierro-368b66243/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1"
          >
            <span>Desarrollado por <span className="text-gray-400 hover:text-brand transition-colors font-medium">Emilio del Hierro</span></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;