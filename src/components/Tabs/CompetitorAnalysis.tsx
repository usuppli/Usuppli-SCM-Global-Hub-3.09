
import React, { useState, useEffect } from 'react';
import { Product, Language } from '../../types';
import { translations } from '../../translations';

const STYLES = {
  inputTable: "w-full p-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 outline-none transition-all duration-200 focus:bg-white dark:focus:bg-slate-900 focus:border-[#003d5b] dark:focus:border-blue-500 focus:ring-2 focus:ring-[#003d5b]/20",
};

interface Props {
  product: Product;
  lang: Language;
  onSave: (product: Product) => void;
  isReadOnly?: boolean;
}

const CompetitorAnalysis: React.FC<Props> = ({ product, lang, onSave, isReadOnly }) => {
  const t = translations[lang].competitors;
  const common = translations[lang].common;

  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    ultra: [ { id: 1, brand: 'La Perla', price: '$250.00', origin: 'Italy', strength: 'Luxury Heritage' } ],
    premium: [
        { id: 1, brand: "Victoria's Secret", price: '$79.50', origin: 'USA', strength: 'Brand Power' },
        { id: 2, brand: 'ThirdLove', price: '$84.00', origin: 'USA', strength: 'Fit Technology' }
    ],
    value: [ { id: 1, brand: 'Target (Auden)', price: '$22.00', origin: 'Global', strength: 'Accessibility' } ]
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
    onSave(product);
    setIsEditing(false);
  };

  const getCardClassName = () => 
    `bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden transition-all duration-200 ${
      !isEditing && !isReadOnly ? 'cursor-pointer hover:border-sky-400 dark:hover:border-blue-500 group' : ''
    }`;

  const EditableRow: React.FC<{ item: any, tier: 'ultra'|'premium'|'value', index: number }> = ({ item, tier, index }) => {
      if (!isEditing) {
          return (
            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-3 px-2 font-bold text-slate-700 dark:text-slate-100 w-1/4">{item.brand}</td>
                <td className="py-3 px-2 text-slate-600 dark:text-slate-300 w-1/4 font-mono">{item.price}</td>
                <td className="py-3 px-2 text-slate-600 dark:text-slate-300 w-1/4 uppercase text-[10px] font-bold">{item.origin}</td>
                <td className="py-3 px-2 text-slate-600 dark:text-slate-400 text-xs italic">{item.strength}</td>
            </tr>
          );
      }
      return (
        <tr className="border-b dark:border-slate-800">
            <td className="py-2 w-1/4 pr-2"><input className={STYLES.inputTable} value={item.brand} onChange={e => handleChange(tier, index, 'brand', e.target.value)} /></td>
            <td className="py-2 w-1/4 pr-2"><input className={STYLES.inputTable} value={item.price} onChange={e => handleChange(tier, index, 'price', e.target.value)} /></td>
            <td className="py-2 w-1/4 pr-2"><input className={STYLES.inputTable} value={item.origin} onChange={e => handleChange(tier, index, 'origin', e.target.value)} /></td>
            <td className="py-2"><input className={STYLES.inputTable} value={item.strength} onChange={e => handleChange(tier, index, 'strength', e.target.value)} /></td>
        </tr>
      );
  };

  return (
    <div className="space-y-6 animate-in fade-in">
        <div id="competitor-card" className={getCardClassName()} onClick={() => !isEditing && !isReadOnly && setIsEditing(true)}>
             {!isEditing && !isReadOnly && (
                <div className="absolute top-3 right-3 text-[10px] font-bold text-sky-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">{common.clickToEdit}</div>
            )}

            {isEditing && (
                <div className="absolute top-3 right-3 flex gap-2 z-10">
                    <button onClick={(e) => { e.stopPropagation(); setIsEditing(false); }} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-lg hover:bg-slate-200">{common.cancel}</button>
                    <button onClick={handleSave} className="px-3 py-1 bg-[#003d5b] dark:bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-sky-900 shadow-lg">{common.save}</button>
                </div>
            )}

            <h3 className="font-bold text-slate-800 dark:text-white">{t.title}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">{t.subtitle}</p>
            
            <div className="space-y-8">
                {['ultra', 'premium', 'value'].map(tierKey => (
                    <div key={tierKey}>
                        <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3 border-b dark:border-slate-800 pb-2">{t.tiers[tierKey as keyof typeof t.tiers]}</h4>
                        <table className="w-full text-left text-sm">
                            <thead><tr className="text-slate-500 dark:text-slate-600 text-[10px] uppercase font-bold tracking-widest"><th className="pb-2 px-2 w-1/4">{t.headers.brand}</th><th className="pb-2 px-2 w-1/4">{t.headers.price}</th><th className="pb-2 px-2 w-1/4">{t.headers.origin}</th><th className="pb-2 px-2">{t.headers.strength}</th></tr></thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {data[tierKey as keyof typeof data].map((item, i) => <EditableRow key={item.id} item={item} tier={tierKey as any} index={i} />)}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};
export default CompetitorAnalysis;
