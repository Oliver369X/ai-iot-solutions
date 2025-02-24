"use client";

import { motion } from 'framer-motion';
import { 
  BoltIcon,
  CpuChipIcon,
  ChartBarIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const benefits = [
  {
    title: "Reducción de Costos Energéticos",
    description: "Optimice su consumo de energía mediante análisis predictivo y automatización inteligente. Ahorre hasta un 30% en costos operativos.",
    icon: BoltIcon,
    color: "from-amber-400 via-orange-500 to-orange-600",
    bgLight: "bg-orange-50",
  },
  {
    title: "Mantenimiento Predictivo",
    description: "Anticipe y prevenga fallos en equipos antes de que ocurran. Reduzca el tiempo de inactividad hasta en un 45%.",
    icon: CpuChipIcon,
    color: "from-blue-400 via-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
  },
  {
    title: "Optimización de Procesos",
    description: "Mejore la eficiencia operativa con insights basados en datos en tiempo real. Aumente la productividad hasta un 25%.",
    icon: ChartBarIcon,
    color: "from-emerald-400 via-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50",
  },
  {
    title: "Innovación Continua",
    description: "Manténgase a la vanguardia con soluciones tecnológicas adaptativas y escalables. Impulse la transformación digital de su negocio.",
    icon: RocketLaunchIcon,
    color: "from-purple-400 via-purple-500 to-violet-600",
    bgLight: "bg-purple-50",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-base font-semibold text-primary">
            BENEFICIOS CLAVE
          </span>
          <h2 className="text-4xl font-bold text-secondary mt-2 mb-4">
            Transforme su Negocio con IA e IoT
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Descubra cómo nuestra integración de IA e IoT puede revolucionar su operación
            y generar resultados medibles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${benefit.bgLight} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
            >
              <div className="relative p-8">
                <div className={`w-16 h-16 mb-6 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a 
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-primary to-accent rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Descubra su Potencial
            <RocketLaunchIcon className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
