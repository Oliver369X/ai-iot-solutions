"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          message,
          to: 'luis123migel456@gmail.com'
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-elegant">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-accent font-medium mb-4">CONTACTO</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-text-light mb-6">
              ¿Listo para Transformar su Negocio?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Contáctenos para descubrir cómo nuestras soluciones de IA e IoT
              pueden optimizar sus operaciones.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Correo Electrónico
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-lg border-gray-300 bg-white/5 text-white shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
                    placeholder="su@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Mensaje
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="block w-full rounded-lg border-gray-300 bg-white/5 text-white shadow-sm focus:border-accent focus:ring-accent sm:text-sm"
                    placeholder="¿Cómo podemos ayudarle?"
                    required
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-gray-900 bg-gradient-gold hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50 transition-all duration-300"
                >
                  {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>

              {status === 'success' && (
                <div className="text-sm text-emerald-400">
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                </div>
              )}
              {status === 'error' && (
                <div className="text-sm text-red-400">
                  Hubo un error al enviar el mensaje. Por favor, intente nuevamente.
                </div>
              )}
            </form>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-center space-x-6">
                <a
                  href="mailto:luis123migel456@gmail.com"
                  className="flex items-center text-gray-300 hover:text-accent transition-colors duration-200"
                >
                  <EnvelopeIcon className="w-5 h-5 mr-2" />
                  <span>luis123migel456@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
