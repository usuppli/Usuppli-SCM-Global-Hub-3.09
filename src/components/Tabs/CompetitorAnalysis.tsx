
import React, { useState, useEffect } from 'react';
import { Product, Language } from '../../types';
import { translations } from '../../translations';
import { Target, Plus, TrendingUp, TrendingDown, Minus, ExternalLink } from 'lucide-react'; // Added icons

const STYLES = {
  inputTable: "w-full p-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 outline-none transition-all duration-200 focus:bg-white dark:focus:bg-slate-900 focus:border-[#003d5b] dark:focus:border-blue-500 focus:ring-2 focus:ring-[#003d5b]/20",
};

interface Props {
  product?: Product; // Made optional for flexibility
  lang: Language;
  onSave?: (product: Product) => void;
  isReadOnly?: boolean;
}

const CompetitorAnalysis: React.FC<Props> = ({ product, lang, onSave, isReadOnly }) => {
  // CRASH PROTECTION: Use optional chaining and fallback
  // Note: Updated key 'competitor' based on your previous translations file update
  const t = (translations[lang] || translations['en'])?.competitor || translations['en'].competitor;
  const common = (translations[lang] || translations['en'])?.common || translations['en'].common;

  // Fallback labels if translation structure differs
  const labels = {
    brand: t?.headers?.brand || "Brand",
    price: t?.headers?.price || "Price",
    origin: t?.headers?.origin || "Origin",
    strength: t?.headers?.strength || "Key Strength",
    marketShare: t?.marketShare || "Market Share",
    pricePosition: t?.pricePosition || "Price Position"
  };

  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    ultra: [ { id: 1, brand: 'La Perla', price: '$250.00', origin: 'Italy', strength: 'Luxury Heritage', marketShare: 22, trend: 'up' } ],
    premium: [
        { id: 1, brand: "Victoria's Secret", price: '$79.50', origin: 'USA', strength: 'Brand Power', marketShare: 35, trend: 'down' },
        { id: 2, brand: 'ThirdLove', price: '$84.00', origin: 'USA', strength: 'Fit Technology', marketShare: 18, trend: 'neutral' }
    ],
    value: [ { id: 1, brand: 'Target (Auden)', price: '$22.00', origin: 'Global', strength: 'Accessibility', marketShare: 15, trend: 'up' } ]
  });

  useEffect(() => {
    if (isEditing) {
      const firstInput = document.querySelector('#competitor-card input') as HTMLElement;
      if (firstInput) firstInput.focus();
    }
  }, [isEditing]);

  const handleChange = (tier: 'ultra' | 'premium' | 'value', index: number, field: string, val: string) => {
      const newTier = [...data[tier]];
      newTier[index] = { ...newTier[index], [field]: val };
      setData(prev => ({ ...prev, [tier]: newTier }));
  };

  const handleSave = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if(onSave && product) onSave(product);
    setIsEditing(false);
  };

  const getCardClassName = () => 
    `bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden transition-all duration-200 ${
      !isEditing && !isReadOnly ? 'cursor-pointer hover:border-sky-400 dark:hover:border-blue-500 group' : ''
    }`;

  const EditableRow: React.FC<{ item: any, tier: 'ultra'|'premium'|'value', index: number }> = ({ item, tier, index }) => {
      if (!isEditing) {
          return (
            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group/row">
                <td className="py-3 px-2 w-1/4">
                    <div className="font-bold text-slate-700 dark:text-slate-100">{item.brand}</div>
                    <div className="text-[10px] text-slate-400 font-medium">{item.marketShare}% Share</div>
                </td>
                <td className="py-3 px-2 w-1/4">
                    <div className="text-slate-600 dark:text-slate-300 font-mono text-xs">{item.price}</div>
                </td>
                <td className="py-3 px-2 w-1/4">
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 uppercase tracking-wide">{item.origin}</span>
                </td>
                <td className="py-3 px-2 w-1/4">
                    <div className="flex items-center justify-between">
                        <span className="text-xs italic text-slate-600 dark:text-slate-400">{item.strength}</span>
                        <div className={`p-1 rounded-full opacity-0 group-hover/row:opacity-100 transition-opacity ${
                            item.trend === 'up' ? 'bg-emerald-100 text-emerald-600' : 
                            item.trend === 'down' ? 'bg-rose-100 text-rose-600' : 'bg-slate-100 text-slate-500'
                        }`}>
                            {item.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : item.trend === 'down' ? <TrendingDown className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
                        </div>
                    </div>
                </td>
            </tr>
          );
      }
      return (
        <tr className="border-b dark:border-slate-800">
            <td className="py-2 w-1/4 pr-2"><input className={STYLES.inputTable} value={item.brand} onChange={e => handleChange(tier, index, 'brand', e.target.value)} placeholder="Brand Name" /></td>
            <td className="py-2 w-1/4 pr-2"><input className={STYLES.inputTable} value={item.price} onChange={e => handleChange(tier, index, 'price', e.target.value)} placeholder="Price" /></td>
            <td className="py-2 w-1/4 pr-2"><input className={STYLES.inputTable} value={item.origin} onChange={e => handleChange(tier, index, 'origin', e.target.value)} placeholder="Origin" /></td>
            <td className="py-2"><input className={STYLES.inputTable} value={item.strength} onChange={e => handleChange(tier, index, 'strength', e.target.value)} placeholder="Strength" /></td>
        </tr>
      );
  };

  return (
    <div className="space-y-6 animate-in fade-in max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-end">
            <div>
              <h2 className="text-2xl font-black text-slate-800 dark:text-white flex items-center gap-3">
                <Target className="w-8 h-8 text-rose-500" />
                {t?.title || "Competitor Intelligence"}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-1 font-bold text-xs uppercase tracking-widest pl-1">
                {t?.subtitle || "Market Analysis & Tracking"}
              </p>
            </div>
            {!isReadOnly && (
                <button className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl shadow-lg shadow-rose-900/20 transition-all active:scale-95 font-bold text-xs uppercase tracking-wide">
                  <Plus className="w-4 h-4" /> {t?.trackNew || "Track Competitor"}
                </button>
            )}
        </div>

        {/* Main Card */}
        <div id="competitor-card" className={getCardClassName()} onClick={() => !isEditing && !isReadOnly && setIsEditing(true)}>
             {!isEditing && !isReadOnly && (
                <div className="absolute top-6 right-6 text-[10px] font-bold text-sky-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider bg-sky-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full">{common?.clickToEdit || "Click to edit"}</div>
            )}

            {isEditing && (
                <div className="absolute top-6 right-6 flex gap-2 z-10">
                    <button onClick={(e) => { e.stopPropagation(); setIsEditing(false); }} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-xl hover:bg-slate-200 transition-colors">{common?.cancel || "Cancel"}</button>
                    <button onClick={handleSave} className="px-4 py-2 bg-[#003d5b] dark:bg-blue-600 text-white text-xs font-bold rounded-xl hover:bg-sky-900 shadow-lg transition-colors">{common?.save || "Save"}</button>
                </div>
            )}
            
            <div className="space-y-8 mt-2">
                {['ultra', 'premium', 'value'].map(tierKey => (
                    <div key={tierKey}>
                        <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3 border-b dark:border-slate-800 pb-2 flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${tierKey === 'ultra' ? 'bg-purple-500' : tierKey === 'premium' ? 'bg-blue-500' : 'bg-emerald-500'}`}></span>
                            {tierKey.toUpperCase()} TIER
                        </h4>
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="text-slate-400 dark:text-slate-600 text-[9px] uppercase font-bold tracking-widest">
                                    <th className="pb-3 px-2 w-1/4">{labels.brand}</th>
                                    <th className="pb-3 px-2 w-1/4">{labels.price}</th>
                                    <th className="pb-3 px-2 w-1/4">{labels.origin}</th>
                                    <th className="pb-3 px-2">{labels.strength}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                                {data[tierKey as keyof typeof data].map((item, i) => <EditableRow key={item.id} item={item} tier={tierKey as any} index={i} />)}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
            
            {!isEditing && (
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <button className="text-xs font-bold text-rose-500 flex items-center gap-1 hover:gap-2 transition-all">
                    View Full Intelligence Report <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
            )}
        </div>
    </div>
  );
};
export default CompetitorAnalysis;