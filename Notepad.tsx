import React from 'react';
import { Copy } from 'lucide-react';

interface NotepadProps {
  value: string;
  onChange: (value: string) => void;
}

export function Notepad({ value, onChange }: NotepadProps) {
  return (
    <div className="relative w-full">
      <textarea
        className="w-full h-64 p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        placeholder="Paste your content here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        className="absolute bottom-4 right-4 p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
        onClick={() => navigator.clipboard.writeText(value)}
      >
        <Copy className="w-4 h-4" />
      </button>
    </div>
  );
}