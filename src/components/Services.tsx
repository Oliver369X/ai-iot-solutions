"use client";

import { motion } from 'framer-motion';
import {
  BoltIcon,
  CpuChipIcon,
  ChartBarIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Reducción de Costos',
    description: 'Optimice el consumo energético y reduzca costos operativos hasta un 30% mediante análisis predictivo e IA.',
    icon: BoltIcon,
    gradient: 'from-orange-500/10 via-orange-500/5 to-transparent'
  },
  {
    name: 'Mantenimiento Predictivo',
    description: 'Anticipe y prevenga fallos en equipos antes de que ocurran, reduciendo tiempos de inactividad hasta un 45%.',
    icon: CpuChipIcon,
    gradient: 'from-blue-500/10 via-blue-500/5 to-transparent'
  },
  {
    name: 'Optimización de Procesos',
    description: 'Mejore la eficiencia operativa con insights basados en datos en tiempo real. Aumente la productividad hasta un 25%.',
    icon: ChartBarIcon,
    gradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent'
  },
  {
    name: 'Innovación Continua',
    description: 'Manténgase a la vanguardia con soluciones tecnológicas adaptativas y escalables.',
    icon: RocketLaunchIcon,
    gradient: 'from-purple-500/10 via-purple-500/5 to-transparent'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-secondary via-secondary/95 to-secondary/90">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-accent font-medium mb-4">NUESTROS SERVICIOS</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-text-light mb-6">
            Soluciones que Transforman
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Nuestras soluciones integran IA e IoT para optimizar sus operaciones,
            reducir costos y maximizar la eficiencia de su negocio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className={`w-12 h-12 mb-6 rounded-lg bg-gradient-to-br ${service.gradient} p-2.5`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-light mb-4">{service.name}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
