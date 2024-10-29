import React from 'react';
import { Plus } from 'lucide-react';

interface NameGeneratorInputProps {
  value: string;
  onChange: (value: string) => void;
  onGenerate: () => void;
}

export const NameGeneratorInput: React.FC<NameGeneratorInputProps> = ({
  value,
  onChange,
  onGenerate,
}) => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Ajouter un mot (optionnel)
          </label>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            placeholder="Entrez un mot..."
          />
        </div>
        <button
          onClick={onGenerate}
          className="mt-7 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 flex items-center gap-2"
        >
          <Plus size={20} />
          Ajouter
        </button>
      </div>
    </div>
  );
};