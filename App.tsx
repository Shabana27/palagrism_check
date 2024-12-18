import React, { useState } from 'react';
import { Shield, Wand2 } from 'lucide-react';
import { CheckType, Profession, CheckResult } from './types';
import { Notepad } from './components/Notepad';
import { CheckOptions } from './components/CheckOptions';
import { ProfessionSelect } from './components/ProfessionSelect';
import { Results } from './components/Results';

function App() {
  const [content, setContent] = useState('');
  const [checkType, setCheckType] = useState<CheckType>('paragraph');
  const [profession, setProfession] = useState<Profession>('academic');
  const [result, setResult] = useState<CheckResult | null>(null);

  const handleCheck = () => {
    // Simulated check result - in a real app, this would call an API
    setResult({
      uniquenessScore: 85,
      matches: [
        {
          text: "Similar content found in academic papers...",
          similarity: 15
        }
      ],
      timestamp: new Date().toISOString()
    });
  };

  const handleHumanize = () => {
    // In a real app, this would call an AI service
    console.log('Humanizing content for profession:', profession);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-900">PlagiarismGuard</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <CheckOptions selectedType={checkType} onTypeChange={setCheckType} />
          
          <div className="mb-6">
            <Notepad value={content} onChange={setContent} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handleCheck}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Check Plagiarism
              </button>
              
              <div className="flex items-center gap-4 px-4 py-2 bg-gray-100 rounded-lg">
                <ProfessionSelect value={profession} onChange={setProfession} />
                <button
                  onClick={handleHumanize}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
                >
                  <Wand2 className="w-4 h-4" />
                  Humanize Content
                </button>
              </div>
            </div>
          </div>
        </div>

        <Results result={result} />
      </main>
    </div>
  );
}

export default App;