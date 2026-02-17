
import React, { useState, useMemo } from 'react';
import { Product, Language } from '../../types';
import { translations } from '../../translations';
import { Zap, ShieldAlert, Globe, Info, Map } from 'lucide-react';

const STYLES = {
  inputTable: "w-full p-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 outline-none transition-all duration-200 focus:bg-white dark:focus:bg-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
  tabBtn: "px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all border",
  tabActive: "bg-blue-600 text-white border-blue-600 shadow-md",
  tabInactive: "bg-white dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
};

interface Props { product: Product; lang: Language; onSave: (product: Product) => void; isReadOnly?: boolean; globalTariffs?: Record<string, number>; lockedTariffs?: string[]; }

const REGIONS: Record<string, string[]> = {
  'North America': ['USA', 'Canada', 'Mexico'],
  'South America': ['Brazil', 'Guyana', 'Grenada', 'Jamaica'],
  'Africa': ['South Africa', 'Nigeria', 'Kenya', 'Ghana', 'Ethiopia', 'Angola', 'Egypt', 'Morocco', 'Algeria', 'Côte d\'Ivoire', 'Tanzania'],
  'Asia': ['China', 'Taiwan', 'Philippines', 'Vietnam', 'India'],
  'Europe': ['UK', 'Germany', 'France'],
  'Other': ['Bahamas']
};

const TariffRates: React.FC<Props> = ({ product, lang, onSave, isReadOnly, globalTariffs, lockedTariffs = [] }) => {
  const rootT = translations[lang] || translations['en'];
  const t = rootT.workspace.tariffs;
  const common = rootT.common;
  const [isEditing, setIsEditing] = useState(false);
  const [activeRegion, setActiveRegion] = useState('All');

  const userRole = localStorage.getItem('userRole') || 'viewer';
  const hasWriteAccess = userRole === 'admin' || userRole === 'super_admin' || userRole === 'editor';
  const finalReadOnly = isReadOnly || !hasWriteAccess;

  const allKnownCountries = Array.from(new Set([
    ...Object.values(REGIONS).flat(),
    ...Object.keys(globalTariffs || {}),
    ...Object.keys(product.dutyOverrides || {})
  ])).sort();

  const visibleCountries = useMemo(() => {
    if (activeRegion === 'All') return allKnownCountries;
    const regionCountries = REGIONS[activeRegion] || [];
    return allKnownCountries.filter(c => regionCountries.includes(c));
  }, [activeRegion, allKnownCountries]);

  const handleRateUpdate = (country: string, value: string) => {
    const cleanValue = parseFloat(value.replace(/[^0-9.]/g, '')) / 100;
    if (isNaN(cleanValue)) return;
    const updatedProduct = {
      ...product,
      dutyOverrides: { ...(product.dutyOverrides || {}), [country]: cleanValue }
    };
    onSave(updatedProduct);
  };

  const handleFeeUpdate = (country: string, value: string) => {
    const cleanValue = parseFloat(value.replace(/[^0-9.]/g, '')) / 100;
    const updatedProduct = {
      ...product,
      additionalFees: { ...(product.additionalFees || {}), [country]: isNaN(cleanValue) ? 0 : cleanValue }
    };
    onSave(updatedProduct);
  };

  return (
    <div className="space-y-6 animate-in fade-in">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden transition-all duration-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400"><Map className="w-5 h-5" /></div>
                    <div>
                        <h3 className="font-bold text-slate-800 dark:text-white">{t.title}</h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-tighter">
                            {finalReadOnly ? t.subtitleRead : t.subtitleEdit}
                        </p>
                    </div>
                </div>
                {!finalReadOnly && (
                    <button onClick={() => setIsEditing(!isEditing)} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${isEditing ? 'bg-amber-500 text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'}`}>
                        {isEditing ? t.finish : t.modify}
                    </button>
                )}
            </div>

            <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                <button onClick={() => setActiveRegion('All')} className={`${STYLES.tabBtn} ${activeRegion === 'All' ? STYLES.tabActive : STYLES.tabInactive}`}>{t.allMarkets}</button>
                {Object.keys(REGIONS).map(region => (<button key={region} onClick={() => setActiveRegion(region)} className={`${STYLES.tabBtn} ${activeRegion === region ? STYLES.tabActive : STYLES.tabInactive}`}>{region}</button>))}
            </div>
            
            <div className="overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
                    <table className="w-full text-left text-sm relative">
                        <thead className="bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur sticky top-0 z-10 border-b border-slate-100 dark:border-slate-800 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                            <tr>
                                <th className="p-4">{t.table.dest}</th>
                                <th className="p-4">{t.table.base}</th>
                                <th className="p-4">{t.table.fees}</th>
                                <th className="p-4">{t.table.total}</th>
                                <th className="p-4">{t.table.integrity}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                            {visibleCountries.length === 0 ? (
                                <tr><td colSpan={5} className="p-8 text-center text-slate-400 italic text-xs">No markets found in this region.</td></tr>
                            ) : (
                                visibleCountries.map((country) => {
                                    const isAdminLocked = lockedTariffs.includes(country);
                                    const productRate = product.dutyOverrides?.[country];
                                    const adminRate = globalTariffs?.[country];
                                    const appliedBase = (isAdminLocked && adminRate !== undefined) ? adminRate : (productRate ?? adminRate ?? 0.15);
                                    const isWorkspaceApplied = !isAdminLocked && productRate !== undefined;
                                    const fee = product.additionalFees?.[country] || 0;
                                    const total = appliedBase + fee;

                                    return (
                                        <tr key={country} className={`transition-colors ${isWorkspaceApplied ? 'bg-blue-50/10 dark:bg-blue-900/5' : 'hover:bg-slate-50/50 dark:hover:bg-slate-800/10'}`}>
                                            <td className="p-4 font-bold text-slate-800 dark:text-white uppercase tracking-tighter flex items-center gap-2">{country}{isWorkspaceApplied && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />}</td>
                                            <td className="p-4">
                                                {isEditing && !isAdminLocked ? (<input className={`${STYLES.inputTable} w-20 font-bold`} defaultValue={(appliedBase * 100).toFixed(1)} onBlur={(e) => handleRateUpdate(country, e.target.value)} />) : (<span className={`font-mono text-lg font-black ${isAdminLocked ? 'text-red-500' : isWorkspaceApplied ? 'text-blue-500' : 'text-slate-400'}`}>{(appliedBase * 100).toFixed(1)}%</span>)}
                                            </td>
                                            <td className="p-4 font-mono">
                                                {isEditing ? (<input className={`${STYLES.inputTable} w-16 font-bold`} defaultValue={(fee * 100).toFixed(1)} onBlur={(e) => handleFeeUpdate(country, e.target.value)} />) : (<span className="text-slate-400">{(fee * 100).toFixed(1)}%</span>)}
                                            </td>
                                            <td className="p-4">
                                                <div className={`px-3 py-1 rounded-lg border w-fit ${total > 0.4 ? 'bg-red-50 dark:bg-red-950/20 border-red-100 dark:border-red-900/50' : 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700'}`}><span className={`font-black font-mono ${total > 0.4 ? 'text-red-600 dark:text-red-400' : 'text-slate-700 dark:text-slate-200'}`}>{(total * 100).toFixed(1)}%</span></div>
                                            </td>
                                            <td className="p-4">
                                                {isAdminLocked ? (<div className="flex items-center gap-1.5 text-[8px] font-black uppercase text-red-500 bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded w-fit tracking-widest border border-red-200 dark:border-red-800"><ShieldAlert className="w-3 h-3" /> {t.status.locked}</div>) : isWorkspaceApplied ? (<div className="flex items-center gap-1.5 text-[8px] font-black uppercase text-blue-500 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded w-fit tracking-widest border border-blue-200 dark:border-blue-800"><Zap className="w-3 h-3 fill-current" /> {t.status.precision}</div>) : (<div className="flex items-center gap-1.5 text-[8px] font-black uppercase text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded w-fit tracking-widest"><Globe className="w-3 h-3" /> {t.status.default}</div>)}
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-400 dark:text-slate-500 italic px-2">
                <Info className="w-3 h-3" />
                <span>{finalReadOnly ? t.infoRead : t.infoEdit}</span>
            </div>
        </div>
    </div>
  );
};

export default TariffRates;
