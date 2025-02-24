"use client";

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const navigation = [
  { name: 'Inicio', href: '#home' },
  { name: 'Servicios', href: '#services' },
  { name: 'Beneficios', href: '#benefits' },
  { name: 'Industrias', href: '#industries' },
  { name: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="h-20"></div>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
          <div className="flex items-center justify-between py-4">
            <div className="flex lg:flex-1">
              <Link href="#" className="flex items-center gap-3">
                <div className="relative w-12 h-12 bg-gradient-elegant rounded-xl shadow-elegant flex items-center justify-center">
                  <span className="text-text-light font-bold text-2xl">S</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-primary">Stratex</span>
                  <span className="text-sm text-gray-600">Smart Solutions</span>
                </div>
              </Link>
            </div>
            
            <div className="hidden lg:flex lg:gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link
                href="#contact"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-elegant shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Contactar
              </Link>
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Abrir menú principal</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>

        <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
          <div className="fixed inset-0 bg-black/20" aria-hidden="true" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link href="#" className="flex items-center gap-3">
                <div className="relative w-12 h-12 bg-gradient-elegant rounded-xl shadow-elegant flex items-center justify-center">
                  <span className="text-text-light font-bold text-2xl">S</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-primary">Stratex</span>
                  <span className="text-sm text-gray-600">Smart Solutions</span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Cerrar menú</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="#contact"
                    className="block w-full px-4 py-3 text-center font-medium text-white bg-gradient-elegant rounded-lg shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contactar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
