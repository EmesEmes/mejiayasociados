import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there is a hash in the URL and scroll to it
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Services />
      <About />
      
      {/* Simple CTA section replacing the full form */}
      <section className="py-24 bg-gradient-to-b from-dark-800 to-dark-900 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            ¿Necesita Asesoría Legal?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Nuestro equipo de especialistas está listo para escuchar su caso y ofrecerle una estrategia jurídica sólida y efectiva.
          </p>
          <Link 
            to="/contacto"
            className="inline-flex items-center px-10 py-4 bg-brand text-dark-900 font-bold rounded-sm hover:bg-brand-light transition-all duration-300 shadow-lg shadow-brand/10 hover:shadow-brand/20 group"
          >
            Contáctenos Ahora
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;