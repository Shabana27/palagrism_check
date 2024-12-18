import React from 'react';
import { Briefcase } from 'lucide-react';
import { Profession } from '../types';

interface ProfessionSelectProps {
  value: Profession;
  onChange: (profession: Profession) => void;
}

export function ProfessionSelect({ value, onChange }: ProfessionSelectProps) {
  return (
    <div className="flex items-center gap-2">
      <Briefcase className="w-4 h-4 text-gray-500" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as Profession)}
        className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="academic">Academic</option>
        <option value="legal">Legal</option>
        <option value="technical">Technical</option>
        <option value="casual">Casual</option>
      </select>
    </div>
  );
}