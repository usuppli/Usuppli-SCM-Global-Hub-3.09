import React, { useState, useMemo } from 'react';
import { Shipment, Job, Language } from '../../types';
import { translations } from '../../translations';
import GraphicalWorldClock from '../GraphicalWorldClock';
import { Logo } from '../Logo';
import PrintWizard from '../PrintWizard';
import { Printer } from 'lucide-react';

// --- SAFE ICONS ---
const SearchIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>);
const GridIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 v2a2 2 0 01-2 h-2a2 2 0 01-2-2v-2z" /></svg>);
const ListIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>);
const SortIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>);
const PlaneIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>);
const ShipIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>);
const AlertIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>);
const EditIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>);
const DownloadIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>);
const PlusIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>);

// ==========================================
// LOCAL STANDARDIZED COMPONENTS
// ==========================================

const LOCAL_STYLES = {
  inputBase: "w-full p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 outline-none transition-all duration-200",
  inputFocus: "focus:bg-white dark:focus:bg-slate-900 focus:border-[#003d5b] dark:focus:border-blue-500 focus:ring-2 focus:ring-[#003d5b]/20",
  label: "block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5",
};

/**
 * Standardized Input component for local usage within the LogisticsTower context.
 */
const Input = ({ label, className, ...props }: any) => (
  <div className="w-full">
    {label && <label className={LOCAL_STYLES.label}>{label}</label>}
    <input className={`${LOCAL_STYLES.inputBase} ${LOCAL_STYLES.inputFocus} ${className||''}`} {...props} />
  </div>
);

/**
 * Standardized Select component for local usage within the LogisticsTower context.
 */
const Select = ({ label, children, ...props }: any) => (
  <div className="w-full">
    {label && <label className={LOCAL_STYLES.label}>{label}</label>}
    <div className="relative">
      <select className={`${LOCAL_STYLES.inputBase} appearance-none ${LOCAL_STYLES.inputFocus}`} {...props}>
        {children}
      </select>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
      </div>
    </div>
  </div>
);

/**
 * Pre-populated simulation data for the Logistics Tower.
 */
const DEMO_SHIPMENTS: Shipment[] = [
  { id: 'SHP-2024-001', trackingNumber: 'MSKU1234567', carrier: 'Maersk', status: 'In Transit', origin: 'Shenzhen, China', destination: 'Los Angeles, USA', eta: '2024-03-15', method: 'Sea', jobId: 'JOB-2024-001', lastUpdated: '2024-02-28' },
  { id: 'SHP-2024-002', trackingNumber: 'DHL7890123', carrier: 'DHL', status: 'Booked', origin: 'Ho Chi Minh, Vietnam', destination: 'Berlin, Germany', eta: '2024-03-10', method: 'Air', lastUpdated: '2024-03-01' },
  { id: 'SHP-2024-003', trackingNumber: 'CMAU4567890', carrier: 'CMA CGM', status: 'Customs', origin: 'Ningbo, China', destination: 'Rotterdam, Netherlands', eta: '2024-03-05', method: 'Sea', jobId: 'JOB-2024-002', lastUpdated: '2024-03-02' },
];

interface Props {
  shipments: Shipment[];
  jobs: Job[];
  onUpdateShipment: (shipment: Shipment) => void;
  onCreateShipment: (shipment: Shipment) => void;
  isReadOnly?: boolean;
  lang: Language;
  onOpenWizard?: () => void;
}

const LogisticsTower: React.FC<Props> = ({ shipments, jobs, onUpdateShipment, onCreateShipment, isReadOnly, lang, onOpenWizard }) => {
  const rootT = translations[lang] || translations['en'];
  const t = rootT.logistics;

  // ROLE RESTRICTION FOR CSV EXPORT
  const userRole = localStorage.getItem('userRole') || 'viewer';
  const isAdmin = userRole === 'admin' || userRole === 'super_admin';

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'eta' | 'carrier' | 'status'>('eta');
  const [simulatedShipments, setSimulatedShipments] = useState<Shipment[]>([]);
  
  const [showModal, setShowModal] = useState(false);
  const [editingShipment, setEditingShipment] = useState<Partial<Shipment> | null>(null);
  const [printShipmentData, setPrintShipmentData] = useState<Shipment | null>(null);

  const allShipments = useMemo(() => [...shipments, ...simulatedShipments], [shipments, simulatedShipments]);

  const hudStats = useMemo(() => {
    const active = allShipments.filter(s => s.status !== 'Delivered');
    const customsHold = active.filter(s => s.status === 'Customs');
    const airCount = active.filter(s => s.method === 'Air').length;
    const oceanCount = active.filter(s => s.method === 'Sea' || s.method === 'Ocean').length;
    const nextArrival = [...active].sort((a, b) => (a.eta || '9999').localeCompare(b.eta || '9999'))[0] || null;
    return { activeCount: active.length, customsHold: customsHold.length, airCount, oceanCount, nextArrival };
  }, [allShipments]);

  const filtered = useMemo(() => {
    return allShipments.filter(s => 
      (s.trackingNumber || '').toLowerCase().includes(searchTerm.toLowerCase()) || 
      (s.carrier || '').toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => {
      if (sortBy === 'eta') return (a.eta || '9999').localeCompare(b.eta || '9999');
      const valA = (a[sortBy] as string) || '';
      const valB = (b[sortBy] as string) || '';
      return valA.localeCompare(valB);
    });
  }, [allShipments, searchTerm, sortBy]);

  const handleEditClick = (shipment: Shipment) => {
    setEditingShipment({ ...shipment });
    setShowModal(true);
  };

  const handleSave = () => {
    if (editingShipment && editingShipment.id) {
      if (shipments.find(s => s.id === editingShipment.id)) {
        onUpdateShipment(editingShipment as Shipment);
      } else {
        setSimulatedShipments(prev => prev.map(s => s.id === editingShipment.id ? editingShipment as Shipment : s));
      }
      setShowModal(false);
      setEditingShipment(null);
    }
  };

  const handleExportCSV = () => {
    if (filtered.length === 0) return;
    const headers = "ID,Tracking,Carrier,Status,Origin,Destination,ETA,Method,CurrentLocation";
    const rows = filtered.map(s => 
      `"${s.id}","${s.trackingNumber}","${s.carrier}","${s.status}","${s.origin}","${s.destination}","${s.eta}","${s.method}","${s.currentLocation}"`
    ).join('\n');
    const blob = new Blob([`${headers}\n${rows}`], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `usuppli-logistics-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* HUD DASHBOARD */}
      <div className="w-full h-72 bg-slate-900 rounded-3xl relative overflow-hidden shadow-2xl group border border-slate-800">
          <div className="absolute top-6 left-6 z-30">
              <div className="bg-slate-900/50 backdrop-blur-md p-2 rounded-lg border border-white/10">
                  <Logo className="h-8 w-auto text-white" variant="mark" />
              </div>
          </div>
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
              <GraphicalWorldClock theme="dark" isAbsolute={false} className="scale-90" />
          </div>

          <div className="absolute top-1/2 left-6 -translate-y-1/2 z-20">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex gap-6 shadow-lg">
                <div>
                    <p className="text-[10px] font-bold text-sky-300 uppercase tracking-widest mb-1">{t.inboundAir || 'Air'}</p>
                    <div className="flex items-center gap-2">
                        <PlaneIcon className="w-6 h-6 text-sky-400" />
                        <span className="text-2xl font-bold text-white">{hudStats.airCount}</span>
                    </div>
                </div>
                <div className="w-px bg-white/10"></div>
                <div>
                    <p className="text-[10px] font-bold text-sky-300 uppercase tracking-widest mb-1">{t.inboundOcean || 'Ocean'}</p>
                    <div className="flex items-center gap-2">
                        <ShipIcon className="w-6 h-6 text-sky-400" />
                        <span className="text-2xl font-bold text-white">{hudStats.oceanCount}</span>
                    </div>
                </div>
              </div>
          </div>

          {hudStats.customsHold > 0 && (
            <div className="absolute top-1/2 right-6 -translate-y-1/2 z-20">
                <div className="bg-red-500/20 backdrop-blur-md border border-red-500/50 rounded-2xl p-4 flex items-center gap-4 animate-pulse shadow-lg text-white">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center"><AlertIcon className="w-6 h-6" /></div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest">{t.customsHold || 'Customs'}</p>
                        <p className="font-bold">{hudStats.customsHold} Units</p>
                    </div>
                </div>
            </div>
          )}

          <div className="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-[4000ms] z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-0"></div>
          
          <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none z-20">
            <div className="flex justify-between items-end w-full">
                <div>
                  <h2 className="text-4xl font-bold text-white">{hudStats.activeCount} <span className="text-lg text-slate-400 font-medium">{t.activeUnits || 'Units'}</span></h2>
                </div>
                {hudStats.nextArrival && (
                  <div className="text-right text-white">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{t.nextArrival || 'Next Arrival'}</p>
                    <p className="text-2xl font-bold">{hudStats.nextArrival.eta}</p>
                  </div>
                )}
            </div>
          </div>
      </div>

      {/* TOOLBAR */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm gap-4">
        <div>
           <h3 className="text-xl font-bold text-slate-800 dark:text-white">{t.title}</h3>
           <p className="text-xs text-slate-500 dark:text-slate-400">{t.subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
          {simulatedShipments.length === 0 && (
            // FIX: DEMO_SHIPMENTS constant is now defined locally.
            <button onClick={() => setSimulatedShipments(DEMO_SHIPMENTS)} className="px-3 py-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs font-bold hover:bg-emerald-100 transition-all">Load Simulation</button>
          )}
          
          <div className="relative flex-grow md:w-56">
            <SearchIcon className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3 top-3" />
            <input className="w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 dark:text-white text-sm outline-none focus:ring-2 focus:ring-[#003d5b]/20 dark:focus:ring-blue-500/20" placeholder="Search tracking..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>

          <div className="relative">
            <SortIcon className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3 top-3 pointer-events-none" />
            <select className="pl-10 pr-8 py-2 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 dark:text-white text-sm font-bold appearance-none cursor-pointer" value={sortBy} onChange={e => setSortBy(e.target.value as any)}>
              <option value="eta" className="dark:bg-slate-900">Sort by ETA</option>
              <option value="carrier" className="dark:bg-slate-900">Sort by Carrier</option>
              <option value="status" className="dark:bg-slate-900">Sort by Status</option>
            </select>
          </div>

          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border dark:border-slate-700">
            <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 shadow-sm text-[#003d5b] dark:text-blue-400' : 'text-slate-400'}`}><GridIcon className="w-4 h-4" /></button>
            <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 shadow-sm text-[#003d5b] dark:text-blue-400' : 'text-slate-400'}`}><ListIcon className="w-4 h-4" /></button>
          </div>

          {/* ROLE SECURITY: Only Admins see Export */}
          {isAdmin && (
            <button 
              onClick={handleExportCSV} 
              className="px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl font-bold text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2 shadow-sm"
            >
              <DownloadIcon className="w-4 h-4" /> <span>Export CSV</span>
            </button>
          )}

          {!isReadOnly && (
            <button 
              onClick={onOpenWizard} 
              className="px-4 py-2 bg-[#003d5b] dark:bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg hover:bg-sky-900 dark:hover:bg-blue-500 transition-all flex items-center gap-2 shrink-0"
            >
              <PlusIcon className="w-4 h-4" /> <span>Add Shipment</span>
            </button>
          )}
        </div>
      </div>

      {/* VIEW: GRID */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(s => (
            <div 
              key={s.id} 
              onClick={() => !isReadOnly && handleEditClick(s)}
              className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm dark:shadow-none border border-slate-100 dark:border-slate-800 hover:shadow-md dark:hover:bg-slate-800/50 hover:border-[#003d5b]/30 dark:hover:border-blue-500/30 transition-all cursor-pointer group relative"
            >
               <div className="flex justify-between items-start mb-2 pr-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">{s.trackingNumber}</span>
                    <button 
                        onClick={(e) => { e.stopPropagation(); setPrintShipmentData(s); }}
                        className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-400 hover:text-blue-500 transition-colors"
                        title="Print Manifest"
                    >
                        <Printer className="w-3 h-3" />
                    </button>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase border ${
                    s.status === 'Customs' ? 'bg-red-50 text-red-600 border-red-100 dark:bg-red-950/20 dark:text-red-400 dark:border-red-800' : 
                    s.status === 'Delivered' ? 'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-red-800' :
                    'bg-sky-50 text-sky-600 border-sky-100 dark:bg-sky-950/20 dark:text-sky-400 dark:border-sky-800'
                  }`}>
                    {s.status}
                  </span>
               </div>
               
               <h5 className="font-bold text-slate-800 dark:text-white text-sm mb-1 leading-tight">{s.carrier}</h5>
               <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{s.origin} &rarr; {s.destination}</p>
               
               <div className="flex items-center justify-between pt-2 border-t border-slate-50 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                     {s.method === 'Air' ? <PlaneIcon className="w-4 h-4 text-slate-400 dark:text-slate-500" /> : <ShipIcon className="w-4 h-4 text-slate-400 dark:text-slate-500" />}
                     <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400">{s.method}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">ETA: {s.eta}</span>
               </div>
            </div>
          ))}
        </div>
      ) : (
        /* VIEW: LIST */
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-sm overflow-hidden overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-950 text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-5">Carrier / Tracking</th>
                <th className="p-5">Route</th>
                <th className="p-5">Method</th>
                <th className="p-5">Status</th>
                <th className="p-5">ETA</th>
                <th className="p-5 text-right">Tools</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-800">
              {filtered.map(s => (
                <tr key={s.id} onClick={() => !isReadOnly && handleEditClick(s)} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                  <td className="p-5">
                    <div className="font-bold text-slate-700 dark:text-slate-200">{s.carrier}</div>
                    <div className="text-xs font-mono text-slate-400 dark:text-slate-500">{s.trackingNumber}</div>
                  </td>
                  <td className="p-5 text-slate-600 dark:text-slate-300 font-medium">{s.origin} &rarr; {s.destination}</td>
                  <td className="p-5">
                    {s.method === 'Air' ? <PlaneIcon className="w-4 h-4 text-sky-500 dark:text-blue-400" /> : <ShipIcon className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />}
                  </td>
                  <td className="p-5">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase border ${
                      s.status === 'Customs' ? 'bg-red-50 text-red-700 border-red-100 dark:bg-red-950/20 dark:text-red-400 dark:border-red-800' : 'bg-sky-50 text-sky-700 border-sky-100 dark:bg-sky-950/20 dark:text-sky-400 dark:border-sky-800'
                    }`}>{s.status}</span>
                  </td>
                  <td className="p-5 font-bold text-slate-700 dark:text-slate-200">{s.eta}</td>
                  <td className="p-5 text-right">
                    <div className="flex justify-end gap-2">
                        <button 
                            onClick={(e) => { e.stopPropagation(); setPrintShipmentData(s); }}
                            className="p-2 text-slate-400 hover:text-blue-500 transition-colors"
                            title="Print Manifest"
                        >
                            <Printer className="w-4 h-4" />
                        </button>
                        {!isReadOnly && <button className="p-2 text-slate-400 dark:text-slate-500 hover:text-sky-600 dark:hover:text-blue-400 transition-colors"><EditIcon className="w-4 h-4" /></button>}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* EDIT MODAL */}
      {showModal && editingShipment && (
        <div className="fixed inset-0 z-[160] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
           <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden border dark:border-slate-800">
              <div className="bg-[#003d5b] dark:bg-slate-950 p-6 text-white font-bold flex justify-between items-center">
                  <h3>Edit Shipment</h3>
                  <button onClick={() => setShowModal(false)}><XIcon className="w-5 h-5 opacity-70" /></button>
              </div>
              <div className="p-8 space-y-5 max-h-[70vh] overflow-y-auto">
                 {/* FIX: Local Select and Input components are now findable. */}
                 <Select label="Status" value={editingShipment.status || 'Booked'} onChange={(e: any) => setEditingShipment({...editingShipment, status: e.target.value})}>
                    {['Booked', 'In Transit', 'Customs', 'Delivered', 'Exception', 'Delayed'].map(s => <option key={s} value={s} className="dark:bg-slate-900">{s}</option>)}
                 </Select>
                 <Input label="Current Location" value={editingShipment.currentLocation || ''} onChange={(e: any) => setEditingShipment({...editingShipment, currentLocation: e.target.value})} />
                 <Input label="ETA" type="date" value={editingShipment.eta || ''} onChange={(e: any) => setEditingShipment({...editingShipment, eta: e.target.value})} />
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-2">
                 <button onClick={() => setShowModal(false)} className="px-5 py-2.5 text-slate-500 font-bold hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl text-sm">Cancel</button>
                 <button onClick={handleSave} className="px-6 py-2.5 bg-[#003d5b] dark:bg-blue-600 text-white font-bold rounded-xl hover:bg-sky-900 dark:hover:bg-blue-500 shadow-lg text-sm">Save Changes</button>
              </div>
           </div>
        </div>
      )}

      {/* PRINT WIZARD */}
      {printShipmentData && (
        <PrintWizard 
          mode="shipment"
          shipment={printShipmentData}
          onClose={() => setPrintShipmentData(null)}
        />
      )}
    </div>
  );
};

// Internal icon for modal close
const XIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
);

export default LogisticsTower;