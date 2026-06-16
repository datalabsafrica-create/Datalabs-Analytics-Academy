import React, { useState } from 'react';
import { Database, TrendingUp, Search, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export function DataAnalyzer() {
  const [goal, setGoal] = useState('');
  const [dataset, setDataset] = useState('');
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal.trim() || !dataset.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/analyze-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goal, dataset }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to analyze data');
      }

      setAnalysis(data.analysis);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 w-full">
      <div className="mb-8 text-center max-w-3xl mx-auto">
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Database className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">AI Business Analyst</h1>
        <p className="text-slate-600 text-lg">
          Paste your business dataset and set a goal. Our AI will analyze trends, profile data, and provide strategic recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
            <Search className="w-5 h-5 mr-2 text-blue-600" /> New Analysis
          </h2>
          
          <form onSubmit={handleAnalyze} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Business Goal
              </label>
              <input
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="e.g. Identify the top 3 performing product categories"
                className="w-full border border-slate-300 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Dataset (CSV, JSON, or Tabular text)
              </label>
              <textarea
                value={dataset}
                onChange={(e) => setDataset(e.target.value)}
                placeholder="Paste a sample of your dataset here..."
                rows={12}
                className="w-full border border-slate-300 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm bg-slate-50"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !goal.trim() || !dataset.trim()}
              className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-2xl hover:bg-blue-700 transition shadow-lg shadow-blue-200 disabled:opacity-50 disabled:shadow-none flex items-center justify-center disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span>Analyzing Dataset...</span>
              ) : (
                <>
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Generate Insights
                </>
              )}
            </button>
            
            {error && (
              <div className="p-4 bg-red-50 text-red-700 rounded-xl flex items-start border border-red-100">
                <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            )}
          </form>
        </div>

        <div className="bg-slate-900 rounded-3xl shadow-sm border border-slate-800 p-8 min-h-[500px] flex flex-col">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center">
            Analysis Results
          </h2>
          
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {analysis ? (
              <div className="prose prose-invert max-w-none prose-h3:text-blue-400 prose-a:text-blue-400">
                <ReactMarkdown>{analysis}</ReactMarkdown>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-slate-500 pb-12">
                <Database className="w-16 h-16 mb-4 opacity-20" />
                <p className="text-center max-w-xs">
                  Your insights will appear here once the analysis is complete.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
