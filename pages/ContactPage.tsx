import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import { ContactFormData } from '../types';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contacto | Mejía & Asociados";
  }, []);

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por contactarnos. Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      {/* Header */}
      <div className="relative py-20 bg-dark-800 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            <span className="text-brand">Contáctenos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Estamos listos para atender su caso con la rigurosidad y confidencialidad que usted merece.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Column */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-8">
              Información de Contacto
            </h3>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-brand/5 border border-brand/20 rounded-lg text-brand group-hover:bg-brand group-hover:text-dark-900 transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-lg">Dirección</h4>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    Av. Doce de Octubre y Francisco Salazar<br/>
                    Edificio Concorde<br/>
                    Quito, Ecuador
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-brand/5 border border-brand/20 rounded-lg text-brand group-hover:bg-brand group-hover:text-dark-900 transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-lg">Teléfonos</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">099 0784 892</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-brand/5 border border-brand/20 rounded-lg text-brand group-hover:bg-brand group-hover:text-dark-900 transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-lg">Email</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">davidmejia2702@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-brand/5 border border-brand/20 rounded-lg text-brand group-hover:bg-brand group-hover:text-dark-900 transition-all duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-lg">Horario de Atención</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Lunes a Viernes: 08:30 - 17:30</p>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Sábados: Previa cita</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white/[0.02] p-8 md:p-12 border border-white/5 rounded-sm h-fit sticky top-28">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Envíenos un Mensaje</h3>
            <p className="text-gray-400 mb-8 text-sm">Complete el formulario y nos pondremos en contacto a la brevedad posible.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-900 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand transition-colors rounded-sm"
                  placeholder="Juan Pérez"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-900 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand transition-colors rounded-sm"
                    placeholder="juan@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-dark-900 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand transition-colors rounded-sm"
                    placeholder="099 123 4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-dark-900 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand transition-colors resize-none rounded-sm"
                  placeholder="Detalle brevemente su consulta jurídica..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand text-dark-900 font-bold py-4 px-6 hover:bg-brand-light transition-all duration-300 flex items-center justify-center gap-2 group rounded-sm shadow-[0_0_15px_rgba(127,255,212,0.1)] hover:shadow-[0_0_25px_rgba(127,255,212,0.3)]"
              >
                Enviar Consulta
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;