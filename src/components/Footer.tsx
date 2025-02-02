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

        <script>window.PICKAXE=window.PICKAXE||{pickaxes:[],style:"kHsjoCQGgI0GWASmgIdIAxiDA6wgM6CMbgC4UgDDAXYEAvDIBoGEBgG4CAWQIGYBgwCqApdoEjggjIaCcCoCA9gVAaAnBYBkqgBkKBwWoARYgJhrAFwqAFQEAHkIAXAQAASgbCfAhqSAAAsDMAYEc+QJckgGXFAhUGBQ30DEcIGo0wBBdgS5VAcAaATm8A1GoCpYQJQmgEVYAYgDBAQRKAhe0ASXIAURAOyAimqAFxCAsEGAQjSADFiACCIASoAACIBA+oAAeoBI8IAhHIAkEYAqCYAuaYAAIYAyboA2CYA/O4CwJYBLUIAWQYB8QoB2EIAtKYAAg4BuaoA9c4B7QYAJf4A6GICCSYCLh4CPYYCUI4BxGYCbOYB9eYCjTYBUVYCJq4BjX4AVZ4CZuYBFd4AvoYBMKoANpIAMSIBQFIDP3QDigDKKgFjigIhcLoBAC4CIF4BhGIAIDIBQhIBBYIAFHoBeKIBQsYAAcMAABSAApTAMQ1ACBAOjSgAYhAAogA0KQBczoAAhEAL0CATIRAOJEgDQmQBhcIAQ1EAigGAEotANxkgBj0QBIj4ATSUABlOAAhzAEbAgAaOQBSFYAmNkAuKxsQCOjYA8j8ABJaAKTjACIlABpACsugGwMQAiwIAm1MATAKAd07ABkcgGBKwCgVIBiocA0E2AIaBAAoDgALDQDl7oACgcAqMCAbtdAAkzgBgogAggAHyQAiVAAcQAAiYASckAi9qAFtvALmDgAoQwCA0IAQkMAYTCAM+HAKxQgApswDBUIAGr0AJL6ATWhANnrgAz5wAGE4B6LEAC6WABBBAK2ZgFEiQBTSYBz4MAkW6AazZABMIgCM1wBGoYACUUAd7uAMuLAMKwgCryQDGDIAgx0AY0mAUeDAIjGgBAnwBkTIAFbsAOGqAEwbAEAwgA0CQBIVIBxPEAjcWAV4/AFEDgGF8wAb5YAczUAJ3+AXRhAF+0gHWEQAlxIAYhEAwAGARY1AG81gAIiwAUfIAESQABeANZkgCes4ABqSAOIigDgrIACEKALwYgBJ0oAQICAKNxgCAAYARfmAJVwgDpOIAsySADeMgA87oAikMAABAA"},window.PICKAXE.pickaxes.push({id:"CamiBotAI_Tu_Gua_en_el_Mundo_de_la_IA__XA4XM",type:"fab"});const{id:_fid}=window.PICKAXE.pickaxes[0];fetch(`https://embed.pickaxeproject.com/axe/api/script/${_fid}`).then((e=>e.json())).then((({v:e})=>{const t=`https://cdn.jsdelivr.net/gh/pickaxeproject/cdn@${e}/dist`;if(!document.querySelector(`script[src="${t}/bundle.js"]`)){const e=document.createElement("script");e.src=t+"/bundle.js",e.defer=!0,document.head.appendChild(e)}}));</script>
        
        {/* Línea Divisoria y Derechos Reservados */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} CamiDevAI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
