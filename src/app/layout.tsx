import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI IoT Solutions - Transformando la Industria",
  description: "Implementamos inteligencia artificial en sistemas IoT para optimizar procesos industriales, reducir costos y mejorar la eficiencia operativa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen`}>
        {/* Next.js Gradient Background */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
        
        {/* Main Content */}
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
