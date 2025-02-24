"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-elegant overflow-hidden">
      {/* Fondo con efecto de partículas */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-accent font-medium mb-4">INNOVACIÓN TECNOLÓGICA</h2>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-text-light mb-6 leading-tight">
              Transformamos su Industria con IA e IoT
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
              Optimizamos sus operaciones mediante soluciones inteligentes que 
              integran IA con sistemas IoT, maximizando la eficiencia y reduciendo costos.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-gradient-gold text-text-dark font-semibold rounded-lg shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-0.5 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Solicitar Consulta
              </motion.a>
              <motion.a
                href="#services"
                className="px-8 py-3 bg-white/10 text-text-light font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explorar Soluciones
              </motion.a>
            </div>

            {/* Métricas */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-accent mb-2">45%</h3>
                <p className="text-sm text-gray-300">Reducción de Costos</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-accent mb-2">98%</h3>
                <p className="text-sm text-gray-300">Precisión en IA</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-accent mb-2">24/7</h3>
                <p className="text-sm text-gray-300">Monitoreo</p>
              </div>
            </div>
          </motion.div>

          {/* Imagen o Ilustración */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              <div className="absolute inset-0 bg-gradient-elegant rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 relative">
                  <Image
                    src="/hero-illustration.svg"
                    alt="AI IoT Integration"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
