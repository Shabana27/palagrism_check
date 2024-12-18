import React from 'react';
import { Code, FileText, RefreshCw } from 'lucide-react';
import { CheckType } from '../types';

interface CheckOptionsProps {
  selectedType: CheckType;
  onTypeChange: (type: CheckType) => void;
}

export function CheckOptions({ selectedType, onTypeChange }: CheckOptionsProps) {
  const options = [
    { type: 'code' as const, icon: Code, label: 'Code Check' },
    { type: 'paragraph' as const, icon: FileText, label: 'Paragraph Check' },
    { type: 'paraphrase' as const, icon: RefreshCw, label: 'Paraphrase Check' },
  ];

  return (
    <div className="flex gap-4 mb-6">
      {options.map(({ type, icon: Icon, label }) => (
        <button
          key={type}
          onClick={() => onTypeChange(type)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            selectedType === type
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <Icon className="w-4 h-4" />
          {label}
        </button>
      ))}
    </div>
  );
}