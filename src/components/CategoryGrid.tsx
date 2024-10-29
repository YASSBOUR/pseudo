import React from 'react';
import { Category } from '../types';
import { Link } from 'react-router-dom';

interface CategoryGridProps {
  categories: Category[];
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <div key={category.id} className="bg-gray-800 rounded-lg overflow-hidden">
          <img
            src={category.imageUrl}
            alt={category.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
            <div className="text-gray-400 text-sm mb-4">
              {category.subcategories.map((sub) => sub.name).join(', ')}
            </div>
            <Link
              to={`/category/${category.id}`}
              className="block w-full text-center py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              Voir plus
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};