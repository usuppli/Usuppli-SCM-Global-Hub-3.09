
import React, { useState } from 'react';
import { Product, Language } from '../../types';
import { translations } from '../../translations';

const STYLES = {
  inputBase: "w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 placeholder:text-slate-400 outline-none transition-all duration-200",
  inputFocus: "focus:bg-white dark:focus:bg-slate-900 focus:border-[#003d5b] dark:focus:border-blue-500 focus:ring-2 focus:ring-[#003d5b]/20",
  buttonPrimary: "px-6 py-3 bg-[#003d5b] dark:bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-sky-900 dark:hover:bg-blue-500 transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-wait"
};

interface Props {
  product?: Product;
  lang: Language;
}

const AIStrategy: React.FC<Props> = ({ product, lang }) => {
  const t = translations[lang]?.ai || {
      title: "AI Supply Chain Optimization",
      subtitle: "Comparative analysis of production scenarios",
      headers: { param: "Parameter", scenarioA: "Optimized (A)", scenarioB: "Risky (B)", current: "Current" },
      rows: { volume: "Volume", cost: "Unit Cost", margin: "Margin", risk: "Risk Level" }
  };

  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [customStrategy, setCustomStrategy] = useState<string | null>(null);

  const handleGenerate = () => {
      const queryToRun = prompt.trim() || "Conduct a comprehensive strategic audit of this product's supply chain.";
      setIsGenerating(true);
      setTimeout(() => {
          setCustomStrategy(`
### AI Analysis: ${prompt.trim() ? "Custom Query" : "General Strategic Audit"}

**Strategic Insight:**
${prompt.trim() 
  ? "Our analysis recommends a decentralized sourcing approach for the next quarter. Transitioning 30% of production to regional African facilities could reduce cross-border tariff exposure by **8.4%** while improving brand perception in emerging markets." 
  : "Current supply chain parameters indicate a **12% inefficiency** in logistics. Consolidating shipments from the Foshan region could unlock immediate margin gains."}

**Action Plan:**
1.  **Initiate RFQ** with 3 alternative regional suppliers.
2.  **Inventory Buffering:** Increase safety stock of critical raw materials by 15% before Chinese New Year.
3.  **Route Optimization:** Utilize multimodal transport (Sea+Rail) for Caribbean distribution hubs.
          `);
          setIsGenerating(false);
      }, 2000);
  };

  return (
    <div className="w-full h-full space-y-8 animate-in fade-in pb-10">
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-8 rounded-[2rem] shadow-2xl text-white relative overflow-hidden border border-white/5">
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-stretch">
                <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-3 flex items-center gap-3">
                        <div className="p-2 bg-white/10 rounded-xl">
                            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                        </div>
                        {t.title}
                    </h3>
                    <p className="text-base text-indigo-200 mb-8 max-w-xl leading-relaxed">{t.subtitle}.</p>
                    
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 inline-block self-start hover:bg-white/20 transition-colors cursor-pointer">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-300 mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                            Live System Recommendation
                        </p>
                        <p className="font-bold text-2xl text-white">Optimize Q4 Logistics Route</p>
                        <p className="text-xs text-indigo-200 mt-1">Projected Cost Saving: <span className="text-emerald-300 font-bold">8.2%</span></p>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 h-full">
                        <table className="w-full text-left text-sm h-full">
                            <thead className="text-[10px] text-indigo-300 uppercase bg-white/5 font-black tracking-widest">
                                <tr>
                                    <th className="p-5">{t.headers.param}</th>
                                    <th className="p-5 text-emerald-400">{t.headers.scenarioA}</th>
                                    <th className="p-5 text-red-400">{t.headers.scenarioB}</th>
                                    <th className="p-5 text-white">{t.headers.current}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-indigo-800/50">
                                {[['volume', '15,000', '2,500', '5,000'], ['cost', '$8.50', '$12.20', '$10.75'], ['margin', '42%', '18%', '32%'], ['risk', 'Low', 'High', 'Med']].map(([row, a, b, cur]) => (
                                  <tr key={row}>
                                    <td className="p-5 font-medium text-indigo-200 capitalize">{t.rows[row as keyof typeof t.rows]}</td>
                                    <td className="p-5 text-emerald-300 font-mono font-bold text-lg">{a}</td>
                                    <td className="p-5 text-red-300 font-mono text-lg">{b}</td>
                                    <td className="p-5 text-white font-mono text-lg">{cur}</td>
                                  </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                <h4 className="font-bold text-slate-800 dark:text-white mb-6 text-sm uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    AI Recommendations
                </h4>
                <div className="space-y-4 flex-1">
                    <div className="flex gap-5 items-start p-6 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-2xl border border-emerald-100 dark:border-emerald-900/50 hover:shadow-md transition-shadow group cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 font-bold group-hover:bg-emerald-600 group-hover:text-white transition-colors">1</div>
                        <div>
                            <h5 className="font-bold text-slate-800 dark:text-slate-100 text-base">Shift Regional Logistics</h5>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Diversifying transit routes through Singapore hubs could mitigate the current 12-day congestion at US West Coast ports.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                <h4 className="font-bold text-slate-800 dark:text-white mb-4 text-sm uppercase tracking-widest">Custom Strategy Query</h4>
                <div className="flex flex-col flex-1">
                    <textarea 
                        className={`${STYLES.inputBase} ${STYLES.inputFocus} flex-1 min-h-[160px] resize-none text-base p-6`}
                        placeholder="Ask the AI advisor..."
                        value={prompt}
                        onChange={e => setPrompt(e.target.value)}
                    />
                    <div className="mt-4 flex justify-end">
                        <button onClick={handleGenerate} disabled={isGenerating} className={STYLES.buttonPrimary}>
                            {isGenerating ? 'Analyzing...' : 'Run Analysis'}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {customStrategy && (
            <div className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl animate-in fade-in slide-in-from-bottom-4">
                <div className="whitespace-pre-wrap font-medium text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                    {customStrategy}
                </div>
                <div className="mt-8 pt-6 border-t dark:border-slate-800 flex justify-between items-center text-xs text-slate-400 font-mono uppercase tracking-widest">
                    <span>Generated by Usuppli AI Model v4.1</span>
                    <button onClick={() => setCustomStrategy(null)} className="text-red-400 hover:text-red-600 font-bold transition-colors">Clear</button>
                </div>
            </div>
        )}
    </div>
  );
};

export default AIStrategy;
