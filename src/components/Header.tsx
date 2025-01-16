import React from 'react';
import { Brain, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-[#00c5c5]" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
              CamiDevAI
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['Inicio', 'Sobre mí', 'Formación', 'Redes Sociales', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-600 hover:text-[#00c5c5] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}