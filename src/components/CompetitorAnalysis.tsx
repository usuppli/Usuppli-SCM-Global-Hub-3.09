import React, { useState, useEffect } from 'react';
import { TrendingUp, Loader2, Zap, AlertCircle, BarChart3 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Props {
  product?: any;
  [key: string]: any;
}

export default function CompetitorAnalysis({ product }: Props) {
  const [market, setMarket] = useState('Athletic Footwear');
  const [report, setReport] = useState<{ text: string; date: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-fill market from product category if available
  useEffect(() => {
    if (product?.category) {
      setMarket(product.category);
    }
  }, [product]);

  const generateReport = async () => {
    if (!market.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Generate a strategic market analysis for the "${market}" industry.
      Focus on 3 areas:
      1. Key Trends (Bullet points)
      2. Top Competitor Risks (e.g. market leaders)
      3. Supply Chain Opportunities
      
      Keep it professional and concise.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      const text = response.text || "No report generated.";
      
      setReport({
        text: text,
        date: new Date().toLocaleDateString()
      });

    } catch (err) {
      console.error(err);
      setError("Could not generate report. Please check your API key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in w-full h-full">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex-1 w-full">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Market Intelligence
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Real-time competitive landscape analysis</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <input 
            type="text" 
            value={market} 
            onChange={(e) => setMarket(e.target.value)}
            placeholder="Enter Industry (e.g. Solar Panels)"
            className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-950 text-sm w-full sm:w-64 outline-none focus:ring-2 focus:ring-blue-500/20 font-bold dark:text-white"
          />
          <button 
            onClick={generateReport}
            disabled={loading || !market.trim()}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg disabled:opacity-50 transition-all"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
            Analyze
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm min-h-[400px] flex flex-col">
        {error && (
          <div className="p-6">
            <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl flex items-center gap-2 text-sm font-bold border border-red-100 dark:border-red-800">
                <AlertCircle className="w-4 h-4" /> {error}
            </div>
          </div>
        )}

        {report ? (
          <div className="p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="prose dark:prose-invert max-w-none text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed font-medium">
                {report.text}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 flex justify-between">
                <span>Source: Gemini 3 Flash Analysis</span>
                <span>Generated: {report.date}</span>
              </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 py-20">
            <BarChart3 className="w-16 h-16 mb-4 opacity-20" />
            <p className="font-bold text-sm">Enter an industry above to generate a competitive landscape report.</p>
          </div>
        )}
      </div>
    </div>
  );
}