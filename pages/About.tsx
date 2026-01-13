import React, { useEffect } from 'react';
import { Scale, Users, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Nosotros | Mejía & Asociados";
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      {/* Hero Section */}
      <div className="relative py-20 bg-dark-800 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Nuestra <span className="text-brand">Firma</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Mejía & Asociados es un estudio jurídico dedicado al litigio estratégico y al análisis profundo de casos, concebido para brindar soluciones jurídicas rigurosas, técnicamente sustentadas y orientadas a la protección efectiva de derechos.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Core Areas Section */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <div className="inline-block px-3 py-1 mb-4 border border-brand/30 rounded-full bg-brand/10 text-brand text-xs font-bold tracking-widest uppercase">
              Ejes Centrales
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Especialización Penal y Constitucional
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              El despacho tiene como ejes centrales de actuación el <strong className="text-white">Derecho Penal</strong> y el <strong className="text-white">Derecho Constitucional</strong>, áreas que constituyen el núcleo de nuestra práctica profesional y en las que se desarrollan las principales estrategias de defensa, control de legalidad y tutela de derechos fundamentales.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Nuestro trabajo en estas materias se caracteriza por una construcción sólida de teorías del caso, un manejo técnico de la prueba, y una lectura constitucional transversal de cada conflicto jurídico.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-brand/20 blur-[100px] rounded-full"></div>
            <div className="relative bg-dark-800 border border-white/10 p-8 rounded-sm shadow-2xl">
              <div className="flex gap-6 mb-8">
                <div className="bg-brand/10 p-4 rounded-lg">
                  <Scale className="w-8 h-8 text-brand" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl">Litigio Estratégico</h4>
                  <p className="text-gray-500 text-sm mt-1">Defensa técnica y sustentada</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-brand/10 p-4 rounded-lg">
                  <BookOpen className="w-8 h-8 text-brand" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl">Análisis Profundo</h4>
                  <p className="text-gray-500 text-sm mt-1">Rigurosidad académica y legal</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mb-24 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-3xl"></div>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              {/* Placeholder for Founder Image */}
              <div className="aspect-[3/4] bg-dark-700 rounded-sm border border-white/10 relative overflow-hidden group">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-black/50">
                    <Users className="w-12 h-12 opacity-50" />
                 </div>
                 {/* Replace src with actual image of José David Mejía Silva */}
                 <img src="/josedavidmejia.webp" alt="José David Mejía Silva" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-brand font-medium tracking-widest uppercase text-sm mb-2">Fundador y Director</h3>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">José David Mejía Silva</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                José David Mejía Silva es abogado especializado en Derecho Penal y Derecho Constitucional, Magíster en Derecho Penal por la Universidad Andina Simón Bolívar – Ecuador, y graduado como abogado en la Universidad Internacional SEK.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Es fundador y director del Estudio Jurídico Mejía & Asociados, desde donde lidera la asesoría y defensa legal con un enfoque estratégico, personalizado y riguroso, entendiendo que cada caso es único y requiere un análisis jurídico individualizado, profundo y responsable.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Su ejercicio profesional se fundamenta en la convicción de que todo proceso legal puede y debe conducirse con honestidad, excelencia y absoluta transparencia, demostrando que es posible ejercer el derecho sin corrupción. Bajo esta filosofía, brinda un acompañamiento cercano al cliente, diseñando soluciones jurídicas a la medida, con estricto apego a la Constitución, el debido proceso y la ética profesional.
              </p>
              <div className="h-px w-24 bg-brand/50"></div>
            </div>
          </div>
        </div>

        {/* Complementary Areas */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-white mb-8">Enfoque Integral y Especializado</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            Si bien Mejía & Asociados mantiene una especialización clara y definida en las áreas penal y constitucional, el estudio cuenta con un equipo de profesionales capacitados que permite atender, de manera técnica y responsable, otras ramas del derecho vinculadas o complementarias al litigio principal.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Derecho Laboral', 'Derecho Notarial', 'Derecho Civil', 'Derecho Societario', 'Propiedad Intelectual', 'Derecho Contractual', 'Derecho Administrativo'].map((area) => (
              <span key={area} className="px-6 py-3 bg-dark-800 border border-white/10 rounded-sm text-gray-300 hover:border-brand/50 hover:text-brand transition-all cursor-default">
                {area}
              </span>
            ))}
          </div>

          <p className="text-gray-400 italic text-lg border-l-4 border-brand pl-6 text-left bg-white/[0.02] py-4 pr-4">
            "Estas áreas no se abordan desde una lógica generalista, sino desde una intervención especializada y coordinada, asegurando que cada asunto sea tratado por profesionales con formación y experiencia específica, manteniendo siempre un estándar técnico elevado."
          </p>
        </div>

        {/* Philosophy */}
        <div className="bg-brand text-dark-900 p-8 md:p-16 rounded-sm text-center">
          <Award className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6">Nuestra Filosofía</h2>
          <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            En Mejía & Asociados no creemos en la práctica jurídica superficial ni en el ejercicio indiscriminado de todas las ramas del derecho. Nuestra filosofía se basa en la especialización, el estudio riguroso de cada caso y la estrategia jurídica bien fundamentada, entendiendo el derecho como una herramienta de defensa, control y transformación social.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;