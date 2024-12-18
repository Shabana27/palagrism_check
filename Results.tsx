import React from 'react';
import { Download, Share2 } from 'lucide-react';
import { CheckResult } from '../types';

interface ResultsProps {
  result: CheckResult | null;
}

export function Results({ result }: ResultsProps) {
  if (!result) return null;

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Results</h2>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Download className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20">
            <svg className="w-20 h-20 transform -rotate-90">
              <circle
                className="text-gray-200"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="36"
                cx="40"
                cy="40"
              />
              <circle
                className="text-blue-500"
                strokeWidth="8"
                strokeDasharray={226.2}
                strokeDashoffset={226.2 * (1 - result.uniquenessScore / 100)}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="36"
                cx="40"
                cy="40"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p className="text-xl font-bold">{result.uniquenessScore}%</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Uniqueness Score</h3>
            <p className="text-sm text-gray-600">
              {result.uniquenessScore >= 90
                ? 'Highly unique content'
                : result.uniquenessScore >= 70
                ? 'Moderately unique content'
                : 'Significant similarity detected'}
            </p>
          </div>
        </div>
      </div>

      {result.matches.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">Similar Content Found</h3>
          <div className="space-y-2">
            {result.matches.map((match, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded">
                <p className="text-sm">{match.text}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {match.similarity}% similarity
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}