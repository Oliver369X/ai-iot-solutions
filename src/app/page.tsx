export const metadata = {
  title: 'AI IoT Solutions - Transformando la Industria',
  description: 'Implementamos inteligencia artificial en sistemas IoT para optimizar procesos industriales.',
}

import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Benefits from '@/components/Benefits'
import Industries from '@/components/Industries'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <Services />
        <Benefits />
        <Industries />
        <Contact />
      </div>
    </main>
  )
}
