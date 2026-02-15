
import React, { useState, useMemo } from 'react';
import { useExchangeRates } from '../../hooks/useExchangeRates';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { translations } from '../../translations';
import { Language } from '../../types';
import CurrencyWidget from '../Widgets/CurrencyWidget'; // Ensure this path is correct

// ICONS
const RefreshIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
);
const TrendingUpIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
);
const EditIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
);
const SaveIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
);
const DollarSign = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

interface Props { lang: Language; }

export const ExchangeRateView: React.FC<Props> = ({ lang }) => {
  // Safe Access
  const t = (translations[lang] || translations['en'])?.exchange || translations['en'].exchange;
  
  const { rates, loading, refresh, lastUpdated, getTrendData } = useExchangeRates();
  const currencies = Object.keys(rates);
  
  const [selectedCurrency, setSelectedCurrency] = useState<string>('CNY');
  const [isEditing, setIsEditing] = useState(false);
  const [overrides, setOverrides] = useState<Record<string, number>>({});

  const displayRate = (curr: string) => overrides[curr] || rates[curr] || 0;

  const handleOverride = (curr: string, val: string) => {
      setOverrides(prev => ({ ...prev, [curr]: parseFloat(val) }));
  };

  const trendData = useMemo(() => getTrendData(selectedCurrency), [selectedCurrency, getTrendData]);

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
        <div className="flex justify-between items-end">
            <div>
                <h2 className="text-3xl font-black text-slate-800 dark:text-white flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl">
                      <DollarSign className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    {t?.title || "Currency Exchange"}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2 font-bold text-xs uppercase tracking-widest pl-1">
                    {t?.subtitle || "Real-time Forex"}
                </p>
            </div>
            
            <div className="flex gap-2">
                <button 
                    onClick={() => setIsEditing(!isEditing)}
                    className={`p-3 rounded-xl transition-all shadow-sm active:scale-95 ${isEditing ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                    title={isEditing ? "Save Changes" : "Edit Rates"}
                >
                    {isEditing ? <SaveIcon className="w-5 h-5" /> : <EditIcon className="w-5 h-5" />}
                </button>
                <button 
                    onClick={refresh} 
                    disabled={loading}
                    className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all text-slate-600 dark:text-slate-300 disabled:opacity-50 shadow-sm active:scale-95"
                >
                    <RefreshIcon className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {/* Converter Widget */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <DollarSign className="w-64 h-64" />
                </div>
                <h3 className="relative z-10 text-lg font-black text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                    <TrendingUpIcon className="w-5 h-5 text-blue-500" /> {t?.calculator || "Converter"}
                </h3>
                
                <div className="relative z-10">
                    <CurrencyWidget />
                </div>
            </div>

            {/* CURRENCY GRID */}
            <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-[2.5rem] border border-slate-200 dark:border-slate-800">
                 <h3 className="text-lg font-black text-slate-800 dark:text-white mb-6">{t?.rate || "Live Rates"} (Base: USD)</h3>
                 <div className="grid grid-cols-2 gap-4">
                    {currencies.map(curr => (
                        <div 
                            key={curr} 
                            onClick={() => setSelectedCurrency(curr)}
                            className={`bg-white dark:bg-slate-800 border p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer group relative ${selectedCurrency === curr ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-100 dark:border-slate-700 hover:-translate-y-1'}`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">{curr}</span>
                                <div className={`p-1.5 rounded-lg transition-opacity border ${selectedCurrency === curr ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 border-blue-100' : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 border-emerald-100 dark:border-emerald-900 opacity-0 group-hover:opacity-100'}`}>
                                    <TrendingUpIcon className="w-3 h-3" />
                                </div>
                            </div>
                            
                            <div className="flex items-baseline gap-2">
                                {isEditing ? (
                                    <input 
                                        type="number" 
                                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-2 py-1 text-lg font-black text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                        value={displayRate(curr)}
                                        onChange={(e) => handleOverride(curr, e.target.value)}
                                        onFocus={() => setSelectedCurrency(curr)}
                                    />
                                ) : (
                                    <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{displayRate(curr).toFixed(3)}</span>
                                )}
                            </div>
                        </div>
                    ))}
                 </div>
                 <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center px-2">
                    <span className="text-[8px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest">Base: 1.00 USD</span>
                    <span className="text-[9px] text-slate-300 dark:text-slate-600 font-mono font-bold bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-slate-100 dark:border-slate-800">
                        {lastUpdated ? new Date(lastUpdated).toLocaleDateString() : '--'}
                    </span>
                 </div>
            </div>
        </div>

        {/* GRAPH SECTION */}
        <div className="p-8 bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h4 className="text-lg font-black text-slate-800 dark:text-white flex items-center gap-2">
                        <TrendingUpIcon className="w-5 h-5 text-blue-500" />
                        {selectedCurrency} Historical Trend
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">30-Day Rate Fluctuation Analysis</p>
                </div>
                <div className="flex gap-2">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-[10px] font-bold text-slate-500">1M</span>
                    <span className="px-3 py-1 bg-white dark:bg-slate-900 rounded-lg text-[10px] font-bold text-slate-400 border border-slate-200 dark:border-slate-700">3M</span>
                    <span className="px-3 py-1 bg-white dark:bg-slate-900 rounded-lg text-[10px] font-bold text-slate-400 border border-slate-200 dark:border-slate-700">1Y</span>
                </div>
            </div>
            
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trendData}>
                        <defs>
                            <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" strokeOpacity={0.5} />
                        <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                        <YAxis domain={['auto', 'auto']} axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                            itemStyle={{ color: '#fff' }}
                            formatter={(value: number) => [value.toFixed(4), 'Rate']}
                        />
                        <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRate)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    </div>
  );
};

export default ExchangeRateView;