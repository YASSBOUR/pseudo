import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { CategoryGrid } from '../components/CategoryGrid';
import { NameGeneratorInput } from '../components/NameGeneratorInput';
import { Footer } from '../components/Footer';
import { SeoSection } from '../components/SeoSection';
import { generateCustomName } from '../utils/nameGenerator';

export const Home: React.FC = () => {
  const { categories } = useStore();
  const [customWord, setCustomWord] = useState('');
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);

  const generateNames = () => {
    const names = generateCustomName(customWord);
    setGeneratedNames(names);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Generator Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-500 mb-8">Générateur de Pseudo</h1>
          <NameGeneratorInput
            value={customWord}
            onChange={setCustomWord}
            onGenerate={generateNames}
          />
          
          {generatedNames.length > 0 && (
            <div className="mt-8 bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">Pseudos aléatoires</h2>
              <div className="grid grid-cols-3 gap-4">
                {generatedNames.map((name, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 text-white p-3 rounded-lg text-center"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Categories Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">Catégories</h2>
          <CategoryGrid categories={categories} />
        </section>

        {/* SEO Section */}
        <SeoSection />
      </div>
      
      <Footer />
    </div>
  );
};