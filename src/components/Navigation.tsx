import React from 'react';
import { Link } from 'react-router-dom';
import { Wand2 } from 'lucide-react';

export const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-orange-500">
            <Wand2 size={24} />
            <span>PseudoGen</span>
          </Link>
          
          <div className="flex gap-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/admin"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};