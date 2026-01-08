import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-24 bg-dark-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div 
            ref={elementRef}
            className={`lg:w-1/2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-brand font-medium tracking-widest uppercase text-sm mb-4">Sobre Nosotros</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Compromiso, Integridad y <br/><span className="text-brand">Resultados Reales</span>.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Fundado en el corazón de Quito, Mejía & Asociados ha crecido hasta convertirse en un referente de la abogacía en Ecuador. Nuestro equipo multidisciplinario combina décadas de experiencia con un enfoque ágil y moderno.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Entendemos que detrás de cada caso hay una historia y una necesidad humana o empresarial. Por eso, nuestra prioridad es brindar tranquilidad a través de estrategias legales sólidas y transparentes.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <span className="block text-4xl font-bold text-white mb-1">+15</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Años de Experiencia</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-white mb-1">+500</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Casos Exitosos</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-sm overflow-hidden border border-white/10">
               {/* Using placeholder as requested in guidelines */}
              <img 
                src="https://picsum.photos/800/600" 
                alt="Oficina moderna en Quito" 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand/20 -z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;