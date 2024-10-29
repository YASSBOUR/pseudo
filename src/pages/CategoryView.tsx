import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { NameGenerator } from '../components/NameGenerator';

export const CategoryView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { categories } = useStore();
  const category = categories.find((c) => c.id === id);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
      <p className="text-gray-600 mb-8">{category.description}</p>
      
      <div className="grid gap-6">
        {category.subcategories.map((subcategory) => (
          <NameGenerator key={subcategory.id} subcategory={subcategory} />
        ))}
      </div>
    </div>
  );
};