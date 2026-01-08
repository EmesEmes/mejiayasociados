import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { CheckCircle2, ArrowLeft, Calendar } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (service) {
      document.title = `${service.title} | Mejía & Asociados`;
    }
    return () => {
      document.title = 'Mejía & Asociados | Estudio Jurídico';
    };
  }, [id, service]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-900 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-serif mb-4">Servicio no encontrado</h2>
          <Link to="/" className="text-brand hover:underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-12">
      {/* Header Section */}
      <div className="bg-dark-800 border-b border-white/5 py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/#services" className="inline-flex items-center text-gray-400 hover:text-brand transition-colors mb-6 text-sm uppercase tracking-wide group">
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Volver a Servicios
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-brand/10 rounded-xl border border-brand/20">
              <service.icon className="w-8 h-8 text-brand" />
            </div>
            <h2 className="text-brand font-medium tracking-widest uppercase text-sm">Área de Práctica</h2>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert prose-lg max-w-none mb-16">
          <p className="text-gray-400 leading-loose text-lg">
            {service.fullDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Features */}
          <div className="bg-white/[0.02] border border-white/10 rounded-sm p-8">
            <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-1 bg-brand mr-3"></span>
              Nuestros Servicios
            </h3>
            <ul className="space-y-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-gray-300">
                  <div className="mt-1 mr-3 min-w-[20px]">
                    <div className="w-2 h-2 rounded-full bg-brand"></div>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-br from-brand/5 to-transparent border border-brand/20 rounded-sm p-8">
             <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-1 bg-white mr-3"></span>
              Beneficios Clave
            </h3>
            <ul className="space-y-4">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-brand mr-3 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark-800 p-8 md:p-12 rounded-sm border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
              ¿Necesita asesoría en {service.title}?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de especialistas está listo para analizar su caso y ofrecerle la mejor estrategia legal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-brand text-dark-900 font-bold hover:bg-brand-light transition-all duration-300 rounded-sm shadow-lg shadow-brand/10 hover:shadow-brand/20"
              >
                Agendar Cita
                <Calendar className="w-5 h-5 ml-2" />
              </Link>
               <Link 
                to="/" 
                className="inline-flex items-center justify-center px-8 py-4 border border-white/10 text-white font-medium hover:bg-white/5 transition-all duration-300 rounded-sm"
              >
                Ver otras áreas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;