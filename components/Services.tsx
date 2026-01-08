import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';
import { ServiceItem } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ServiceCard: React.FC<{ service: ServiceItem; index: number }> = ({ service, index }) => {
  const { elementRef, isVisible } = useIntersectionObserver<HTMLAnchorElement>({ threshold: 0.1 });
  
  return (
    <Link 
      to={`/servicios/${service.id}`}
      ref={elementRef}
      className={`block p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-brand/50 transition-all duration-500 group relative overflow-hidden transform h-full ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center mb-6 text-brand group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-brand/30 group-hover:shadow-[0_0_15px_rgba(127,255,212,0.2)]">
          <service.icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-brand transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
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
          <h2 className="text-brand font-medium tracking-widest uppercase text-sm mb-2">Áreas de Práctica</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">Soluciones Jurídicas Expertas</h3>
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