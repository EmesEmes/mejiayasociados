import React, { useEffect } from 'react';
import { teamData } from '../data/team';
import { Linkedin, Mail } from 'lucide-react';

const Team: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Nuestro Equipo | Mejía & Asociados";
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      {/* Header */}
      <div className="relative py-20 bg-dark-800 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Nuestro <span className="text-brand">Equipo</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Profesionales altamente capacitados, unidos por la excelencia técnica y el compromiso ético en la defensa de sus intereses.
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-8 gap-y-12">
          {teamData.map((member) => (
            <div key={member.id} className="group flex flex-col md:flex-row bg-white/[0.02] border border-white/10 rounded-sm overflow-hidden hover:border-brand/30 transition-all duration-300">
              {/* Image Section */}
              <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                <div className="absolute inset-0 bg-brand/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500"></div>
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-3/5 p-8 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-brand transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-brand/80 text-sm font-medium tracking-wider uppercase">
                    {member.role}
                  </p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {member.bio}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-3">Especializaciones</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specializations.map((spec, idx) => (
                      <span key={idx} className="px-3 py-1 bg-dark-900 border border-white/10 rounded-full text-xs text-gray-300 hover:border-brand/50 transition-colors cursor-default">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-auto border-t border-white/5 pt-4">
                  <a href="#" className="text-gray-500 hover:text-brand transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-brand transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;