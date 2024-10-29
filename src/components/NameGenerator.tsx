import React, { useState } from 'react';
import { Subcategory } from '../types';
import { RefreshCw } from 'lucide-react';

interface NameGeneratorProps {
  subcategory: Subcategory;
}

export const NameGenerator: React.FC<NameGeneratorProps> = ({ subcategory }) => {
  const [generatedName, setGeneratedName] = useState<string>('');

  const generateName = () => {
    const randomIndex = Math.floor(Math.random() * subcategory.nameList.length);
    setGeneratedName(subcategory.nameList[randomIndex]);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={subcategory.imageUrl}
          alt={subcategory.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold">{subcategory.name}</h2>
          <p className="text-gray-600">{subcategory.description}</p>
        </div>
      </div>
      
      <div className="text-center py-8">
        <div className="text-3xl font-bold mb-6">{generatedName || 'Click to generate'}</div>
        <button
          onClick={generateName}
          className="flex items-center gap-2 mx-auto px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
        >
          <RefreshCw size={20} />
          Generate Name
        </button>
      </div>
    </div>
  );
};