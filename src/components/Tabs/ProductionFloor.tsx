import React, { useState, useEffect, useMemo } from 'react';
import { Job, Product, Customer, Language } from '../../types';
import { translations } from '../../translations';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// --- v3.08 INDUSTRIAL ICONS ---
const SensorIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>);
const AlertIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>);
const SearchIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>);
const GridIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 v2a2 2 0 01-2 h-2a2 2 0 01-2-2v-2z" /></svg>);
const ListIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>);
const DownloadIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>);

interface Props {
  jobs: Job[];
  products?: Product[];
  customers?: Customer[];
  lang: Language;
}

const ProductionFloor: React.FC<Props> = ({ jobs = [], lang }) => {
  const rootT = translations[lang] || translations['en'];
  const t = rootT.shopFloor;
  const commonT = rootT.common;

  // v3.10 RBAC Security Check
  const userRole = localStorage.getItem('userRole') || 'viewer';
  const isAdmin = userRole === 'admin' || userRole === 'super_admin';

  // v3.08 State Protocls
  const [isConnected, setIsConnected] = useState(false);
  const [activeMachine] = useState<string>('Line A');
  const [telemetryData, setTelemetryData] = useState<any[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  // v3.08 High-Frequency Telemetry Simulation
  useEffect(() => {
    if (!isConnected) return;
    const interval = setInterval(() => {
      setTelemetryData(prev => {
        const now = new Date();
        const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        const newData = {
          time,
          efficiency: 88 + Math.random() * 8, // v3.08 optimized efficiency range
          temperature: 61 + Math.random() * 3, // v3.08 thermal calibration
          output: Math.floor(Math.random() * 25) + 115
        };
        const newArr = [...prev, newData];
        if (newArr.length > 25) newArr.shift(); // Extended data window for 3.08
        return newArr;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isConnected]);

  // Initial Data Seed
  useEffect(() => {
    const initData = Array.from({ length: 15 }).map((_, i) => ({
      time: `10:${25 + i}`,
      efficiency: 90,
      temperature: 62,
      output: 120
    }));
    setTelemetryData(initData);
  }, []);

  const activeJob = jobs.find(j => j.status === 'Production') || jobs[0];

  const filteredJobs = useMemo(() => {
    return jobs.filter(j => 
        (j.jobName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (j.id || '').toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [jobs, searchTerm]);

  const handleExportCSV = () => {
    if (filteredJobs.length === 0) return;
    const headers = "ID,JobName,Status,ProductionStage,Completion,DeliveryDate";
    const rows = filteredJobs.map(j => 
      `"${j.id}","${j.jobName}","${j.status}","${j.productionStage}","${j.completionPercent}%","${j.deliveryDate || j.targetDelivery}"`
    ).join('\n');
    const blob = new Blob([`${headers}\n${rows}`], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `usuppli-telemetry-queue-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-12">
      
      {/* v3.08 HEADER: COMMAND CENTER PROTOCOL */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#0f172a] text-white p-10 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-slate-800 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-5 mb-3">
                <div className={`w-4 h-4 rounded-full ${isConnected ? 'bg-emerald-500 animate-pulse shadow-[0_0_20px_rgba(16,185,129,0.6)]' : 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]'}`}></div>
                <h3 className="text-4xl font-black tracking-tighter uppercase">{t?.title || "Shop Floor Telemetry"}</h3>
            </div>
            <p className="text-slate-400 text-xs font-mono uppercase tracking-[0.3em] font-bold">
                {isConnected ? `ACTIVE SIGNAL: ${activeMachine} // NODE_ID: US-SCM-A4` : 'SYSTEM STANDBY // AWAITING SECURE LINK'}
            </p>
          </div>
          
          <div className="flex gap-8 mt-6 md:mt-0 relative z-10">
              <div className="text-right hidden md:block border-r border-slate-800 pr-10">
                  <span className="block text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Active Batch</span>
                  <span className="block text-2xl font-mono font-bold text-emerald-400 tracking-tighter">{activeJob?.id || 'NO_SIGNAL'}</span>
              </div>
              <button 
                onClick={() => setIsConnected(!isConnected)}
                className={`px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl transition-all active:scale-95 border ${
                    isConnected 
                    ? 'bg-red-600/10 text-red-500 border-red-600/30 hover:bg-red-600 hover:text-white shadow-red-950/40' 
                    : 'bg-emerald-600 text-white border-emerald-500 hover:bg-emerald-500 shadow-emerald-950/50'
                }`}
              >
                  {/* v3.10 Safe Prop Fix */}
                  {isConnected ? 'Terminate Link' : (t?.syncLine || 'Sync Line Status')}
              </button>
          </div>

          {/* v3.08 Background Branding */}
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <SensorIcon className="w-64 h-64 text-white" />
          </div>
      </div>

      {/* v3.08 TELEMETRY DASHBOARD GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-slate-900 p-10 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden ring-1 ring-white/5">
              <div className="flex justify-between items-center mb-10">
                  <h4 className="text-white font-black text-sm uppercase tracking-[0.25em] flex items-center gap-4">
                      <SensorIcon className="w-6 h-6 text-blue-500" />
                      Live Efficiency Matrix
                  </h4>
                  <div className="flex gap-4 text-[10px] text-slate-400 font-black font-mono">
                      <span className="bg-black/40 px-4 py-2 rounded-xl border border-slate-700 uppercase">OEE_INDEX: 87.4%</span>
                      <span className="bg-black/40 px-4 py-2 rounded-xl border border-slate-700 text-blue-400 uppercase">TARGET_OEE: 92.0%</span>
                  </div>
              </div>
              <div className="h-[320px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={telemetryData}>
                          <defs>
                              <linearGradient id="colorEff" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.5}/>
                                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                              </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                          <XAxis dataKey="time" tick={{fontSize: 10, fill: '#64748b', fontWeight: 800}} axisLine={false} tickLine={false} />
                          <YAxis domain={[60, 100]} tick={{fontSize: 10, fill: '#64748b', fontWeight: 800}} axisLine={false} tickLine={false} />
                          <Tooltip 
                            contentStyle={{backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '20px', color: '#fff', fontWeight: 900, fontSize: '12px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)'}} 
                            cursor={{ stroke: '#3b82f6', strokeWidth: 3 }}
                          />
                          <Area type="monotone" dataKey="efficiency" stroke="#3b82f6" strokeWidth={5} fillOpacity={1} fill="url(#colorEff)" isAnimationActive={false} />
                      </AreaChart>
                  </ResponsiveContainer>
              </div>
          </div>

          <div className="space-y-8">
              <div className="bg-slate-900 p-10 rounded-[3rem] border border-slate-800 shadow-2xl ring-1 ring-white/5">
                  <h4 className="text-slate-500 text-[10px] font-black uppercase mb-8 tracking-[0.3em]">Environment Analysis</h4>
                  <div className="space-y-8">
                      {[
                        { label: 'Thermal Core', value: '62.4°C', percent: 64 },
                        { label: 'Axis-Z Vibration', value: '1.2 Hz', percent: 18 },
                        { label: 'Load Utilization', value: '45.2 kW', percent: 79 }
                      ].map((item, idx) => (
                          <div key={item.label}>
                              <div className="flex justify-between text-xs text-slate-300 font-black mb-3 uppercase tracking-widest">
                                  <span>{item.label}</span>
                                  <span className="font-mono text-emerald-400">{item.value}</span>
                              </div>
                              <div className="w-full bg-slate-800/50 rounded-full h-2.5 shadow-inner">
                                  <div 
                                    className={`h-full rounded-full transition-all duration-1000 ${idx === 2 ? 'bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]' : 'bg-emerald-600 shadow-[0_0_10px_rgba(5,150,105,0.5)]'}`} 
                                    style={{width: `${item.percent}%`}}
                                  ></div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>

              <div className="bg-slate-900 p-10 rounded-[3rem] border border-slate-800 shadow-2xl ring-1 ring-white/5">
                  <h4 className="text-slate-500 text-[10px] font-black uppercase mb-8 tracking-[0.3em]">System Diagnostics</h4>
                  <div className="space-y-4">
                      <div className="flex items-start gap-5 p-5 bg-red-600/10 border border-red-600/30 rounded-[1.5rem] animate-pulse">
                          <AlertIcon className="w-7 h-7 text-red-500 mt-0.5" />
                          <div>
                              <p className="text-red-400 font-black text-sm uppercase tracking-tight">Pressure Threshold Alert</p>
                              <p className="text-red-500/60 text-[10px] font-bold mt-1 uppercase tracking-widest">Station 4 // Sector Gamma</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* v3.08 PRODUCTION QUEUE STATUS SECTION */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm gap-6 mt-4">
        <div>
           <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">Batch Flow Status</h3>
           <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-[0.2em]">Real-time manufacturing throughput</p>
        </div>

        <div className="flex items-center gap-4 w-full xl:w-auto">
          <div className="relative flex-grow md:w-80 group">
            <SearchIcon className="w-5 h-5 text-slate-400 group-focus-within:text-blue-600 absolute left-5 top-1/2 -translate-y-1/2 transition-colors" />
            <input 
                className="w-full pl-14 pr-6 py-4 border border-slate-200 dark:border-slate-700 rounded-[1.5rem] bg-slate-50 dark:bg-slate-800 dark:text-white text-sm font-bold outline-none focus:ring-8 focus:ring-blue-600/5 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-inner" 
                placeholder={commonT?.search || "Search Active Stream..."} 
                value={searchTerm} 
                onChange={e => setSearchTerm(e.target.value)} 
            />
          </div>
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-[1.5rem] border dark:border-slate-700 shadow-sm">
            <button onClick={() => setViewMode('grid')} className={`p-3 rounded-[1rem] transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 shadow-lg text-blue-600 dark:text-blue-400' : 'text-slate-400 hover:text-slate-600'}`}><GridIcon className="w-6 h-6" /></button>
            <button onClick={() => setViewMode('list')} className={`p-3 rounded-[1rem] transition-all ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 shadow-lg text-blue-600 dark:text-blue-400' : 'text-slate-400 hover:text-slate-600'}`}><ListIcon className="w-6 h-6" /></button>
          </div>
          
          {isAdmin && (
            <button 
                onClick={handleExportCSV} 
                className="px-6 py-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-[1.5rem] font-black text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-3 shadow-md uppercase tracking-widest active:scale-95"
            >
                <DownloadIcon className="w-5 h-5" /> <span>Export Logs</span>
            </button>
          )}
        </div>
      </div>

      {/* VIEW: GRID PROTOCOL */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredJobs.map(j => (
            <div key={j.id} className="bg-white dark:bg-slate-800 p-10 rounded-[3rem] border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className="flex justify-between items-start mb-8">
                 <div>
                    <h4 className="font-black text-slate-900 dark:text-white text-2xl tracking-tighter group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors uppercase">{j.jobName}</h4>
                    <span className="text-[10px] font-mono font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mt-2 block">{j.id}</span>
                 </div>
                 <div className="flex flex-col items-end">
                    <span className="text-xs font-black bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-2xl border border-blue-100 dark:border-blue-900/50 shadow-sm">
                       {j.completionPercent || 0}%
                    </span>
                 </div>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 h-3 rounded-full overflow-hidden shadow-inner">
                 <div className="bg-blue-600 h-full transition-all duration-1000 shadow-[0_0_15px_rgba(37,99,235,0.6)]" style={{ width: `${j.completionPercent || 0}%` }}></div>
              </div>
              <div className="mt-8 flex justify-between items-center border-t border-slate-50 dark:border-slate-700 pt-6">
                 <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em]">{j.productionStage || 'In_Queue'}</p>
                 <span className="text-[10px] font-mono font-black text-slate-500 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 uppercase">
                    ETA: {j.deliveryDate || j.targetDelivery}
                 </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* VIEW: LIST PROTOCOL */
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-[3rem] shadow-2xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-950 text-[10px] font-black uppercase text-slate-500 dark:text-slate-500 tracking-[0.3em] border-b dark:border-slate-800">
              <tr>
                <th className="p-8">Batch Identity</th>
                <th className="p-8">Phase Status</th>
                <th className="p-8">OEE Efficiency</th>
                <th className="p-8 text-center">Batch Flow</th>
                <th className="p-8 text-right">Commitment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredJobs.map(job => (
                <tr key={job.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group cursor-pointer">
                  <td className="p-8 font-black">
                      <div className="text-slate-900 dark:text-white text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors uppercase tracking-tighter">{job.jobName}</div>
                      <div className="text-[10px] font-mono font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em] mt-1.5">{job.id}</div>
                  </td>
                  <td className="p-8">
                      <span className="px-4 py-2 bg-blue-100/50 dark:bg-blue-900/40 text-blue-800 dark:text-blue-400 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-blue-200 dark:border-blue-900 shadow-sm">{job.productionStage || 'Queued'}</span>
                  </td>
                  <td className="p-8">
                     <div className="flex items-center gap-5">
                        <div className="w-40 bg-slate-100 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden shadow-inner border dark:border-slate-600"><div className="bg-blue-600 h-full shadow-[0_0_12px_rgba(37,99,235,0.5)] transition-all duration-1000" style={{ width: `${job.completionPercent || 0}%` }}></div></div>
                        <span className="text-xs font-black text-slate-900 dark:text-slate-300 font-mono">{job.completionPercent || 0}%</span>
                     </div>
                  </td>
                  <td className="p-8 text-center font-mono font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                     120 UNITS/HR
                  </td>
                  <td className="p-8 text-right text-slate-500 dark:text-slate-400 font-mono font-bold uppercase tracking-tight">
                    {job.deliveryDate || job.targetDelivery}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductionFloor;