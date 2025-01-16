import React from 'react';
import { Instagram, Facebook, Linkedin, MessageSquare } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    followers: '142K+',
    url: 'https://www.instagram.com/camidevai/',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    followers: '1K+',
    url: 'https://www.linkedin.com/in/camilabanares/',
    color: 'bg-blue-600'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    followers: '65K+',
    url: 'https://m.facebook.com/people/Camicatura-Digital/61564523003680/',
    color: 'bg-blue-500'
  },
  {
    name: 'TikTok',
    icon: MessageSquare,
    followers: '43K+',
    url: 'https://www.tiktok.com/@camidevai',
    color: 'bg-black'
  }
];

export default function SocialLinks() {
  return (
    <section id="redes-sociales" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
            Conecta conmigo
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6"
            >
              <div className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                <social.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{social.name}</h3>
              <p className="text-gray-500">{social.followers} seguidores</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}