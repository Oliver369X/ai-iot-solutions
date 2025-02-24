"use client";

import { motion } from 'framer-motion';
import { 
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  HomeModernIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';

const industries = [
  {
    title: "Ciudades Inteligentes",
    description: "Transformamos espacios urbanos con soluciones IoT integradas para una mejor gestión, eficiencia energética y calidad de vida de los ciudadanos.",
    icon: BuildingOffice2Icon,
    color: "from-sky-400 via-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    stats: ["40% reducción en consumo energético", "60% mejora en gestión de tráfico", "30% menos emisiones CO2"]
  },
  {
    title: "Manufactura",
    description: "Optimizamos procesos de producción con monitoreo en tiempo real, mantenimiento predictivo y automatización inteligente para maximizar la eficiencia.",
    icon: BuildingStorefrontIcon,
    color: "from-fuchsia-400 via-purple-500 to-purple-600",
    bgLight: "bg-purple-50",
    stats: ["25% aumento en productividad", "45% menos tiempo de inactividad", "35% reducción en costos"]
  },
  {
    title: "Edificios Inteligentes",
    description: "Automatizamos la gestión de edificios para mayor eficiencia energética, seguridad y confort, creando espacios más sostenibles e inteligentes.",
    icon: HomeModernIcon,
    color: "from-emerald-400 via-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50",
    stats: ["30% ahorro energético", "50% mejor gestión de espacios", "40% más satisfacción"]
  },
  {
    title: "Industria 4.0",
    description: "Implementamos soluciones de última generación para transformar su operación industrial con IA, IoT y automatización avanzada.",
    icon: CpuChipIcon,
    color: "from-amber-400 via-orange-500 to-orange-600",
    bgLight: "bg-orange-50",
    stats: ["35% más eficiencia", "55% mejor control de calidad", "40% reducción de errores"]
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-base font-semibold text-primary">
            INDUSTRIAS QUE TRANSFORMAMOS
          </span>
          <h2 className="text-4xl font-bold text-secondary mt-2 mb-4">
            Soluciones Específicas para su Sector
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Nuestras soluciones se adaptan a diversas industrias, cada una con sus propios
            desafíos y oportunidades únicas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${industry.bgLight} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
            >
              <div className="relative p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${industry.color} flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{industry.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {industry.stats.map((stat, statIndex) => (
                    <div 
                      key={statIndex}
                      className={`px-4 py-2 rounded-lg bg-white shadow-sm border border-gray-100 text-sm font-medium text-gray-800`}
                    >
                      {stat}
                    </div>
                  ))}
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
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
            Explore Soluciones para su Industria
            <CpuChipIcon className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
