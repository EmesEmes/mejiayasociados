import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { servicesData } from '../data/services';
import { ServiceItem } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ServiceCard: React.FC<{ service: ServiceItem; index: number }> = ({ service, index }) => {
  const { elementRef, isVisible } = useIntersectionObserver<HTMLAnchorElement>({ threshold: 0.1 });
  
  // Custom styles for highlighted items
  const isHighlight = service.highlight;
  
  return (
    <Link 
      to={`/servicios/${service.id}`}
      ref={elementRef}
      className={`block p-8 transition-all duration-500 group relative overflow-hidden transform h-full flex flex-col
        ${isHighlight 
          ? 'bg-brand/5 border border-brand shadow-[0_0_15px_rgba(127,255,212,0.1)] hover:shadow-[0_0_25px_rgba(127,255,212,0.2)]' 
          : 'bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:bg-white/[0.05] hover:border-brand/50'}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Decorative background for highlighted items */}
      {isHighlight && (
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand/10 rounded-full blur-2xl group-hover:bg-brand/20 transition-all duration-500"></div>
      )}

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 
            ${isHighlight ? 'bg-brand text-dark-900 shadow-lg shadow-brand/20' : 'bg-dark-800 text-brand border border-white/5 group-hover:border-brand/30'}`}>
            <service.icon className="w-6 h-6" />
          </div>
          {isHighlight && (
            <div className="px-2 py-1 bg-brand/20 rounded text-[10px] font-bold uppercase tracking-wider text-brand border border-brand/30">
              Especialidad
            </div>
          )}
        </div>

        <h3 className={`text-xl font-serif font-bold mb-3 transition-colors ${isHighlight ? 'text-white' : 'text-white group-hover:text-brand'}`}>
          {service.title}
        </h3>
        <p className={`text-sm leading-relaxed mb-6 flex-grow ${isHighlight ? 'text-gray-300' : 'text-gray-400'}`}>
          {service.shortDescription}
        </p>
        
        <div className="flex items-center text-brand text-sm font-medium mt-auto group/link">
          <span className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Leer más</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand font-medium tracking-widest uppercase text-sm mb-2">Nuestras Áreas</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">Práctica Jurídica Especializada</h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Nuestro núcleo de actuación es el Derecho Penal y Constitucional, complementado por un equipo experto en áreas corporativas y civiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;