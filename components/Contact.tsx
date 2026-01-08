import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Gracias por contactarnos. Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-brand font-medium tracking-widest uppercase text-sm mb-4">Contáctanos</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
              ¿Necesitas Asesoría Legal?
            </h3>
            <p className="text-gray-400 mb-12 text-lg">
              Agenda una consulta con nuestros expertos. Estamos ubicados estratégicamente en el centro financiero de Quito.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand/10 rounded-lg text-brand">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Dirección</h4>
                  <p className="text-gray-400">Av. Amazonas y Naciones Unidas<br/>Edificio La Previsora, Oficina 102<br/>Quito, Ecuador</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand/10 rounded-lg text-brand">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Teléfono</h4>
                  <p className="text-gray-400">+593 2 123 4567</p>
                  <p className="text-gray-400">+593 9 876 5432</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand/10 rounded-lg text-brand">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-gray-400">contacto@mejiayasociados.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-900 p-8 md:p-10 border border-white/5 rounded-sm">
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
                  className="w-full bg-dark-800 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand transition-colors"
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
                    className="w-full bg-dark-800 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand transition-colors"
                    placeholder="juan@ejemplo.com"
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
                    className="w-full bg-dark-800 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand transition-colors"
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
                  rows={4}
                  className="w-full bg-dark-800 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand transition-colors resize-none"
                  placeholder="Describa brevemente su caso..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand text-dark-900 font-bold py-4 px-6 hover:bg-brand-light transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Enviar Mensaje
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;