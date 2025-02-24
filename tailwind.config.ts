import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B3A67', // Azul corporativo elegante
        secondary: '#14213D', // Azul oscuro profundo
        accent: '#E6B655', // Dorado elegante
        success: '#2E7D32', // Verde corporativo
        info: '#0288D1', // Azul información
        warning: '#ED6C02', // Naranja advertencia
        'text-light': '#FFFFFF',
        'text-dark': '#1A1A1A',
        'surface-light': '#FFFFFF',
        'surface-dark': '#0A0A0A',
      },
      backgroundImage: {
        'gradient-elegant': 'linear-gradient(135deg, #2B3A67 0%, #14213D 100%)',
        'gradient-gold': 'linear-gradient(135deg, #E6B655 0%, #BF9742 100%)',
      },
      boxShadow: {
        'elegant': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elegant-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}

export default config
