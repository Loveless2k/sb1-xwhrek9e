import React from 'react';
import { Bot } from 'lucide-react';

export default function ChatbotTeaser() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#00c5c5]/10 to-[#00a5a5]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00c5c5]/10 mb-6">
          <Bot className="h-8 w-8 text-[#00c5c5]" />
        </div>
        
        <h2 className="text-3xl font-bold mb-4">
          Próximamente: Mi Asistente Virtual
        </h2>
        
        <p className="text-gray-600 max-w-2xl mx-auto">
          Conoce mi asistente inteligente, diseñado especialmente para responder 
          tus preguntas sobre inteligencia artificial y ayudarte en tu viaje de aprendizaje.
        </p>
        
        <div className="mt-8">
          <button
            disabled
            className="px-6 py-3 bg-[#00c5c5]/20 text-[#00c5c5] rounded-lg cursor-not-allowed"
          >
            Muy pronto
          </button>
        </div>
      </div>
    </section>
  );
}