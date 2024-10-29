import React from 'react';
import { Category } from '../types';
import { Edit, Trash2 } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  onEdit: (category: Category) => void;
  onDelete: (id: string) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={category.imageUrl}
        alt={category.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
        <p className="text-gray-600 mb-4">{category.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {category.subcategories.length} subcategories
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(category)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
            >
              <Edit size={18} />
            </button>
            <button
              onClick={() => onDelete(category.id)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-full"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};