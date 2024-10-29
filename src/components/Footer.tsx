import React from 'react';
import { Facebook, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <img
            src="/images/logo-pseudonyme.png"
            alt="Pseudonyme"
            className="h-12 mb-6"
          />
          
          <div className="flex gap-4 mb-6">
            <a href="#" className="hover:text-orange-500">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-orange-500">
              <Globe size={24} />
            </a>
          </div>

          <div className="flex gap-4 mb-6">
            <img src="https://flagcdn.com/24x18/fr.png" alt="French" className="cursor-pointer" />
            <img src="https://flagcdn.com/24x18/gb.png" alt="English" className="cursor-pointer" />
            <img src="https://flagcdn.com/24x18/es.png" alt="Spanish" className="cursor-pointer" />
            <img src="https://flagcdn.com/24x18/it.png" alt="Italian" className="cursor-pointer" />
            <img src="https://flagcdn.com/24x18/de.png" alt="German" className="cursor-pointer" />
            <img src="https://flagcdn.com/24x18/pt.png" alt="Portuguese" className="cursor-pointer" />
          </div>

          <div className="text-sm">
            <p>© 2024 Générateur de pseudo</p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-orange-500">Crédits</a>
              <a href="#" className="hover:text-orange-500">Contactez-moi</a>
              <a href="#" className="hover:text-orange-500">Modifier votre consentement</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};