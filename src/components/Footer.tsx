import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Información de la Empresa */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">CamiDevAI</h3>
            <p className="max-w-md">
              Transformando el mundo de la tecnología a través de la educación 
              y la innovación en inteligencia artificial.
            </p>
          </div>
          
          {/* Sección de Contacto y Legal */}
          <div className="grid grid-cols-2 gap-8">
            {/* Contacto */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <div className="space-y-2">
                {/* Enlace de Email */}
                <a 
                  href="mailto:camidevai@gmail.com" 
                  className="flex items-center hover:text-[#00c5c5]"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  <span>camidevai@gmail.com</span>
                </a>
                {/* Ubicación */}
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-[#00c5c5]" />
                  <span>Chile</span>
                </div>
              </div>
            </div>
            
            {/* Sección Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="hover:text-[#00c5c5]">Privacidad</a>
                <a href="#" className="block hover:text-[#00c5c5]">Términos</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Línea Divisoria y Derechos Reservados */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} CamiDevAI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
