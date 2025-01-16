import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00c5c5]/10 to-[#00a5a5]/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Bienvenidos al mundo de{' '}
            <span className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
              CamiDevAI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Innovación y tecnología con un toque humano
          </p>
          <a
            href="#redes-sociales"
            className="inline-flex items-center px-6 py-3 bg-[#00c5c5] text-white rounded-lg hover:bg-[#00a5a5] transition-colors"
          >
            Conoce mis redes sociales
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}