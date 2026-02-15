import React, { useState, useMemo, useEffect } from 'react';
import { Job, Product, Factory, SampleRequest, Language, Customer } from '../../types';
import { translations } from '../../translations';
import OrderManager from './OrderManager';
import GraphicalWorldClock from '../GraphicalWorldClock';
import { Logo } from '../Logo';
import { IconsOutline as Icons } from '../Icons';
import { Printer } from 'lucide-react';
import PrintWizard from '../PrintWizard';

// --- SAFE ICONS ---
const PlusIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>);
const SearchIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>);
const PaperclipIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>);
const TruckIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114" /></svg>);
const CurrencyIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const UserIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>);
const EditIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>);
const PencilIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>);
const SortIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>);
const CloseIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>);
const DownloadIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>);

// --- PRE-POPULATED DATA ---
const DEMO_JOBS: Job[] = [
    { id: 'JOB-2024-001', jobName: 'Spring Collection Launch', productRefId: 'PROD-001', quantity: 5000, status: 'Production', completionPercent: 60, productionStage: 'Assembly', startDate: '2024-01-15', deliveryDate: '2024-03-01', targetDelivery: '2024-03-01', priority: 'High' },
    { id: 'JOB-2024-002', jobName: 'Urgent Restock - Black Tees', productRefId: 'PROD-004', quantity: 2000, status: 'Inquiry', completionPercent: 10, productionStage: 'Material Prep', startDate: '2024-02-01', deliveryDate: '2024-02-28', targetDelivery: '2024-02-28', priority: 'Urgent' },
    { id: 'JOB-2024-003', jobName: 'Summer Swimwear Line', productRefId: 'PROD-SWIM', quantity: 15000, status: 'Sampling', completionPercent: 25, productionStage: 'Sampling', startDate: '2024-01-20', deliveryDate: '2024-04-15', targetDelivery: '2024-04-15', priority: 'Medium' },
    { id: 'JOB-2024-004', jobName: 'Smart Home Hub v2', productRefId: 'PROD-ELEC', quantity: 1000, status: 'QC', completionPercent: 90, productionStage: 'QC', startDate: '2023-12-10', deliveryDate: '2024-02-20', targetDelivery: '2024-02-20', priority: 'High' },
    { id: 'JOB-2024-005', jobName: 'Eco-Friendly Packaging', productRefId: 'PROD-PACK', quantity: 50000, status: 'In Transit', completionPercent: 95, productionStage: 'In Transit', startDate: '2024-01-05', deliveryDate: '2024-02-15', targetDelivery: '2024-02-15', priority: 'Low' },
];

const DEMO_SAMPLES: SampleRequest[] = [
  {
    id: 'SMP-CN-001',
    type: 'Counter Sample',
    productId: 'PROD-BAMBOO', 
    factoryId: 'FAC-CN-005', 
    customerId: 'CUST-ROTH',
    status: 'In Progress',
    requestDate: '2024-02-01',
    estimatedCompletion: '2024-02-15',
    trackingNumber: 'Pending',
    courier: 'SF Express',
    cost: 120.00,
    courierCost: 35.00,
    attachments: [{ id: 'a1', name: 'Bamboo_TechPack_v2.pdf', url: '#', type: 'file' }],
    comments: [{ id: 'c1', userId: 'sys', userName: 'System', text: 'Fabric weight must be 220gsm. Double check stitching on seams.', date: new Date().toISOString() }]
  },
  {
    id: 'SMP-CN-002',
    type: 'Golden Sample',
    productId: 'PROD-TVBOX', 
    factoryId: 'FAC-CN-001', 
    customerId: 'CUST-BEMA',
    status: 'Requested',
    requestDate: '2024-02-05',
    estimatedCompletion: '2024-02-25',
    trackingNumber: '',
    courier: '',
    cost: 250.00,
    courierCost: 0,
    attachments: [],
    comments: [{ id: 'c2', userId: 'sys', userName: 'System', text: 'Requirements: Android 14 OS, Amlogic S905X4 chip, Custom logo printing on housing.', date: new Date().toISOString() }]
  },
  {
    id: 'SMP-CN-003',
    type: 'Pre-Production',
    productId: 'PROD-HOODIE', 
    factoryId: 'FAC-CN-005', 
    customerId: 'CUST-ROTH',
    status: 'Shipped',
    requestDate: '2024-01-20',
    estimatedCompletion: '2024-02-08',
    trackingNumber: 'SF1029384756',
    courier: 'DHL',
    cost: 85.00,
    courierCost: 40.00,
    attachments: [{ id: 'a3', name: 'Logo_Placement_Guide.ai', url: '#', type: 'file' }],
    comments: [{ id: 'c3', userId: 'sys', userName: 'System', text: 'Color matching for "Midnight Blue" approved. Proceeding with heavy french terry fabric.', date: new Date().toISOString() }]
  },
  {
    id: 'SMP-CN-004',
    type: 'Size Set',
    productId: 'PROD-YOGA', 
    factoryId: 'FAC-CN-HUANG', 
    customerId: 'CUST-ACTIVE',
    status: 'In Progress',
    requestDate: '2024-02-10',
    estimatedCompletion: '2024-02-28',
    trackingNumber: '',
    courier: '',
    cost: 200.00,
    courierCost: 50.00,
    attachments: [],
    comments: [{ id: 'c4', userId: 'sys', userName: 'System', text: 'Sizes S,M,L,XL,2XL,3XL. 2 pieces each. Fabric must pass squat test.', date: new Date().toISOString() }]
  },
  {
    id: 'SMP-CN-005',
    type: 'Golden Sample',
    productId: 'PROD-TUMBLER', 
    factoryId: 'FAC-CN-YIWU', 
    customerId: 'CUST-BEMA',
    status: 'Delivered',
    requestDate: '2024-01-15',
    estimatedCompletion: '2024-01-30',
    trackingNumber: 'DHL99887766',
    courier: 'DHL',
    cost: 60.00,
    courierCost: 30.00,
    attachments: [{ id: 'a5', name: 'Tumbler_3D_Mock.png', url: '#', type: 'file' }],
    comments: [{ id: 'c5', userId: 'sys', userName: 'System', text: '5 Pieces. Matte Black finish. Laser etching for logo.', date: new Date().toISOString() }]
  },
  {
    id: 'SMP-CN-006',
    type: 'Lab Sample',
    productId: 'PROD-GLUE', 
    factoryId: 'FAC-CN-GLUE', 
    customerId: 'CUST-BEAUTY',
    status: 'Requested',
    requestDate: '2024-02-12',
    estimatedCompletion: '2024-03-01',
    trackingNumber: '',
    courier: '',
    cost: 45.00,
    courierCost: 0,
    attachments: [],
    comments: [{ id: 'c6', userId: 'sys', userName: 'System', text: '5 Bottles (50ML). Waterproof formula test.', date: new Date().toISOString() }]
  }
];

const SAMPLE_BACKGROUNDS = [
    "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop", 
];

const STYLES = {
  inputBase: "w-full p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 outline-none transition-all duration-200",
  inputFocus: "focus:bg-white dark:focus:bg-slate-900 focus:border-[#003d5b] dark:focus:border-blue-500 focus:ring-2 focus:ring-[#003d5b]/20",
  label: "block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5",
};

const Input = ({ label, className, ...props }: any) => (
  <div className="w-full">
    {label && <label className={STYLES.label}>{label}</label>}
    <input className={`${STYLES.inputBase} ${STYLES.inputFocus} ${className||''}`} {...props} />
  </div>
);

const Select = ({ label, options, children, ...props }: any) => (
  <div className="w-full">
    {label && <label className={STYLES.label}>{label}</label>}
    <div className="relative">
      <select className={`${STYLES.inputBase} appearance-none ${STYLES.inputFocus}`} {...props}>
        {options ? options.map((opt: any) => (
          <option key={opt.value} value={opt.value} className="dark:bg-slate-900">{opt.label}</option>
        )) : children}
      </select>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
      </div>
    </div>
  </div>
);

interface Props {
  products: Product[];
  customers: Customer[];
  factories: Factory[];
  jobs: Job[];
  samples: SampleRequest[];
  lang: Language;
  onSaveJobsList: (jobs: Job[]) => void;
  onSaveSample: (sample: SampleRequest) => void;
  onRequestNewJob?: () => void;
  onRequestNewSample?: () => void;
  isReadOnly?: boolean;
}

const Jobs: React.FC<Props> = ({ 
  products = [], 
  customers = [], 
  factories = [], 
  jobs = [], 
  samples = [], 
  lang, 
  onSaveJobsList, 
  onSaveSample, 
  onRequestNewJob, 
  onRequestNewSample,
  isReadOnly = false 
}) => {
  const rootT = translations[lang] || translations['en'];
  const t = rootT.production || { title: "Order Management", sampleTracker: "Sample Tracker", newJob: "New Order", requestSample: "Request Sample" };
  
  // ROLE RESTRICTION FOR CSV EXPORT
  const userRole = localStorage.getItem('userRole') || 'viewer';
  const isAdmin = userRole === 'admin' || userRole === 'super_admin';

  const [activeSubTab, setActiveSubTab] = useState<'production' | 'samples'>('production');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'date' | 'status'>('date'); 
  const [simulatedJobs, setSimulatedJobs] = useState<Job[]>(DEMO_JOBS); 
  const [simulatedSamples, setSimulatedSamples] = useState<SampleRequest[]>(DEMO_SAMPLES); 
  const [selectedSampleId, setSelectedSampleId] = useState<string | null>(null);
  const [showSampleModal, setShowSampleModal] = useState(false);
  const [editingSample, setEditingSample] = useState<Partial<SampleRequest> | null>(null);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [printSample, setPrintSample] = useState<SampleRequest | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
        setCurrentBgIndex((prev) => (prev + 1) % SAMPLE_BACKGROUNDS.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  const allJobs = useMemo(() => [...(jobs.length > 0 ? jobs : simulatedJobs)], [jobs, simulatedJobs]);
  const allSamples = useMemo(() => [...(samples.length > 0 ? samples : simulatedSamples)], [samples, simulatedSamples]);

  const filteredSamples = useMemo(() => {
    let result = allSamples.filter(s => {
      if (!s) return false;
      const term = searchTerm.toLowerCase();
      const track = (s.trackingNumber || '').toLowerCase();
      const id = (s.id || '').toLowerCase();
      return track.includes(term) || id.includes(term);
    });

    return result.sort((a, b) => {
        if (sortOrder === 'status') {
            return (a.status || '').localeCompare(b.status || '');
        }
        return new Date(b.requestDate).getTime() - new Date(a.requestDate).getTime();
    });
  }, [allSamples, searchTerm, sortOrder]);

  const handleExportCSV = () => {
    if (activeSubTab === 'production') {
        if (allJobs.length === 0) return;
        const headers = "ID,Name,Status,Quantity,DeliveryDate,Priority";
        const rows = allJobs.map(j => `"${j.id}","${j.jobName}","${j.status}","${j.quantity}","${j.deliveryDate || j.targetDelivery}","${j.priority}"`).join('\n');
        const blob = new Blob([`${headers}\n${rows}`], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `usuppli-orders-${new Date().toISOString().split('T')[0]}.csv`;
        link.click();
        URL.revokeObjectURL(url);
    } else {
        if (allSamples.length === 0) return;
        const headers = "ID,Type,Status,Product,Factory,Cost";
        const rows = allSamples.map(s => `"${s.id}","${s.type}","${s.status}","${s.productId}","${s.factoryId}","${s.cost}"`).join('\n');
        const blob = new Blob([`${headers}\n${rows}`], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `usuppli-samples-${new Date().toISOString().split('T')[0]}.csv`;
        link.click();
        URL.revokeObjectURL(url);
    }
  };

  useEffect(() => {
      if (activeSubTab === 'samples' && !selectedSampleId && filteredSamples.length > 0) {
          setSelectedSampleId(filteredSamples[0].id);
      }
  }, [activeSubTab, filteredSamples, selectedSampleId]);

  const selectedSample = useMemo(() => allSamples.find(s => s.id === selectedSampleId), [allSamples, selectedSampleId]);

  const getProductName = (id: string) => {
    if(!id) return 'Unknown Product';
    if (id === 'PROD-BAMBOO') return 'Bamboo Sleepwear 2pc XL';
    if (id === 'PROD-TVBOX') return 'Android 4K TV Box v3';
    if (id === 'PROD-HOODIE') return 'Custom Hoodie & T-Shirt Set';
    if (id === 'PROD-YOGA') return 'Yoga Pants & Top Set';
    if (id === 'PROD-TUMBLER') return '20oz BEMA Tumbler';
    if (id === 'PROD-GLUE') return 'Lace Wig Glue (50ML)';
    const p = products?.find(p => p.id === id);
    return p ? p.name : id;
  };

  const getFactoryName = (id: string) => {
    if(!id) return 'Unknown Factory';
    if (id === 'FAC-CN-005') return 'Suzhou Garment Manufactory';
    if (id === 'FAC-CN-001') return 'Dongguan Precision Moldings';
    if (id === 'FAC-CN-HUANG') return 'Huang He Textile Co';
    if (id === 'FAC-CN-YIWU') return 'Yi Wu Manufacturing Co.';
    if (id === 'FAC-CN-GLUE') return 'Guangzhou Adhesives Ltd';
    const f = factories?.find(f => f.id === id);
    return f ? f.name : id;
  };

  const getStatusColor = (status: string) => {
    const s = (status || '').toLowerCase();
    if (s.includes('approved') || s.includes('delivered')) return 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800';
    if (s.includes('progress') || s.includes('transit') || s.includes('shipped')) return 'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-400 dark:border-sky-800';
    if (s.includes('requested') || s.includes('pending')) return 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800';
    return 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700';
  };

  const handleUpdateJob = (updatedJob: Job) => {
      if (jobs.find(j => j.id === updatedJob.id)) {
          const newJobs = jobs.map(j => j.id === updatedJob.id ? updatedJob : j);
          onSaveJobsList(newJobs);
      } else {
          setSimulatedJobs(prev => prev.map(j => j.id === updatedJob.id ? updatedJob : j));
      }
  };

  const handleDeleteJob = (id: string) => {
      if (confirm("Delete this order?")) {
          if (jobs.find(j => j.id === id)) {
              onSaveJobsList(jobs.filter(j => j.id !== id));
          } else {
              setSimulatedJobs(prev => prev.filter(j => j.id !== id));
          }
      }
  };

  const handleEditSample = (sample: SampleRequest) => {
    if(!sample) return;
    setEditingSample({...sample});
    setShowSampleModal(true);
  };

  const handleSaveSample = () => {
    if (editingSample && editingSample.id) {
        if (samples.find(s => s.id === editingSample.id)) {
            onSaveSample(editingSample as SampleRequest);
        } else {
            setSimulatedSamples(prev => prev.map(s => s.id === editingSample.id ? editingSample as SampleRequest : s));
        }
        setShowSampleModal(false);
        setEditingSample(null);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="relative w-full flex justify-center items-center mb-2">
         <div className="flex justify-center w-full bg-white dark:bg-slate-800 rounded-[2rem] shadow-sm border border-slate-200 dark:border-slate-700"><GraphicalWorldClock /></div>
         <div className="absolute top-4 right-6 z-10 hidden md:block"><Logo className="h-10 w-auto text-slate-700 dark:text-slate-300" variant="mark" /></div>
      </div>

      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm gap-4">
         <div className="flex items-center gap-4">
             <div className="flex items-center gap-2">
                 <Icons.Order className="w-6 h-6 text-slate-400" />
                 <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{t.title}</h3>
             </div>
             <div className="flex gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                <button onClick={() => setActiveSubTab('production')} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeSubTab === 'production' ? 'bg-white dark:bg-slate-700 text-[#003d5b] dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}>
                    Production
                </button>
                <button onClick={() => setActiveSubTab('samples')} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeSubTab === 'samples' ? 'bg-white dark:bg-slate-700 text-[#003d5b] dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}>
                    Samples
                </button>
             </div>
         </div>
         
         <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto justify-end">
             <div className="relative group flex-grow md:flex-grow-0 md:w-64">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <SearchIcon className="h-4 w-4 text-slate-400 group-focus-within:text-[#003d5b] dark:group-focus-within:text-blue-400" />
                 </div>
                 <input
                    type="text"
                    className={`${STYLES.inputBase} ${STYLES.inputFocus} pl-10`}
                    placeholder={activeSubTab === 'production' ? "Search jobs..." : "Search samples..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                 />
             </div>

             {/* ROLE SECURITY: Only Admins see Export */}
             {isAdmin && (
               <button 
                  onClick={handleExportCSV} 
                  className="px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl font-bold text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2 shadow-sm shrink-0"
               >
                  <DownloadIcon className="w-4 h-4" /> <span>Export CSV</span>
               </button>
             )}

             {!isReadOnly && (
                 <button 
                    onClick={() => {
                        if (activeSubTab === 'production' && onRequestNewJob) onRequestNewJob();
                        if (activeSubTab === 'samples' && onRequestNewSample) onRequestNewSample();
                    }}
                    className="px-4 py-2 bg-[#003d5b] dark:bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg flex items-center gap-2 shrink-0 hover:bg-sky-900 dark:hover:bg-blue-500 transition-all"
                 >
                    <PlusIcon className="w-4 h-4" />
                    {activeSubTab === 'production' ? rootT.production.newJob : "New Sample"}
                 </button>
             )}
         </div>
      </div>

      <div className="min-h-[600px]">
          {activeSubTab === 'production' && (
            <OrderManager 
                jobs={allJobs.filter(j => (j.jobName || '').toLowerCase().includes(searchTerm.toLowerCase()))}
                viewMode="board" 
                lang={lang}
                onUpdateJob={handleUpdateJob}
                onDeleteJob={handleDeleteJob}
                isReadOnly={isReadOnly}
                customers={customers || []}
                factories={factories || []}
                products={products || []}
            />
          )}

          {activeSubTab === 'samples' && (
            <div className="flex flex-col lg:flex-row h-[calc(100vh-280px)] min-h-[600px] gap-6 animate-in fade-in duration-500">
                <div className="w-full lg:w-1/3 flex flex-col bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                    <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 sticky top-0 z-10 flex justify-between items-center">
                        <div>
                            <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Sample Requests</h4>
                            <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">{filteredSamples.length} Active Records</p>
                        </div>
                        <button onClick={() => setSortOrder(prev => prev === 'date' ? 'status' : 'date')} className="p-2 text-slate-400 hover:text-[#003d5b] dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
                            <SortIcon className="w-4 h-4" />
                        </button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar bg-slate-50/50 dark:bg-slate-950/50">
                        {filteredSamples.map(s => (
                            <div 
                                key={s.id} 
                                onClick={() => setSelectedSampleId(s.id)}
                                className={`p-4 rounded-xl border transition-all cursor-pointer group relative flex flex-col gap-2 shadow-sm ${
                                selectedSampleId === s.id 
                                    ? 'bg-white dark:bg-slate-800 border-[#003d5b] dark:border-blue-500 ring-1 ring-[#003d5b]/10 shadow-md' 
                                    : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-[#003d5b]/30 dark:hover:border-blue-500/50 hover:shadow-md'
                                }`}
                            >
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-2">
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getStatusColor(s.status)}`}>
                                            {s.status}
                                        </span>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); setPrintSample(s); }}
                                            className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-400 hover:text-slate-600 transition-colors"
                                            title="Print Request"
                                        >
                                            <Printer className="w-3 h-3" />
                                        </button>
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">{s.requestDate}</span>
                                </div>
                                <div>
                                    <h5 className={`font-bold text-sm leading-tight ${selectedSampleId === s.id ? 'text-[#003d5b] dark:text-blue-400' : 'text-slate-700 dark:text-slate-200'}`}>
                                        {getProductName(s.productId)}
                                    </h5>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 truncate">{getFactoryName(s.factoryId)}</p>
                                </div>
                                <div className="flex justify-between items-center pt-2 border-t border-slate-50 dark:border-slate-800 mt-1">
                                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1">
                                        <PaperclipIcon className="w-3 h-3 text-slate-400" /> {s.attachments?.length || 0}
                                    </span>
                                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">{s.type}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 rounded-[2rem] overflow-hidden flex flex-col relative bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    {selectedSample ? (
                        <div className="h-full overflow-y-auto custom-scrollbar p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div 
                                    onClick={() => !isReadOnly && handleEditSample(selectedSample)}
                                    className="md:col-span-2 bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-800 relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all min-h-[160px]"
                                >
                                    {SAMPLE_BACKGROUNDS.map((img, index) => (
                                        <img key={index} src={img} alt="" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentBgIndex ? 'opacity-40' : 'opacity-0'}`} />
                                    ))}
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10"></div>
                                    <div className="flex justify-between items-start relative z-20">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h2 className="text-2xl font-bold text-white">{getProductName(selectedSample.productId)}</h2>
                                                <span className="text-xs font-mono text-slate-400 bg-white/10 px-2 py-1 rounded backdrop-blur-sm">{selectedSample.id}</span>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm text-slate-400">
                                                <span className="flex items-center gap-1"><UserIcon className="w-4 h-4" /> {selectedSample.customerId === 'CUST-BEMA' ? 'Bema Fans' : selectedSample.customerId === 'CUST-ROTH' ? 'John Roth' : 'Customer'}</span>
                                                <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                                                <span className="flex items-center gap-1"><TruckIcon className="w-4 h-4" /> {getFactoryName(selectedSample.factoryId)}</span>
                                            </div>
                                        </div>
                                        {!isReadOnly && <div className="p-2 text-white/50 group-hover:text-white bg-white/10 rounded-full transition-colors"><EditIcon className="w-5 h-5" /></div>}
                                    </div>
                                </div>

                                <div onClick={() => !isReadOnly && handleEditSample(selectedSample)} className="md:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 group cursor-pointer hover:shadow-md transition-all relative">
                                    <div className="flex justify-between items-center mb-6">
                                        <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Sample Status</h4>
                                        <span className="opacity-0 group-hover:opacity-100 text-slate-400 transition-opacity"><PencilIcon className="w-4 h-4" /></span>
                                    </div>
                                    <div className="flex justify-between relative z-10">
                                        <div className="absolute top-3 left-0 right-0 h-0.5 bg-slate-100 dark:bg-slate-800 -z-10"></div>
                                        {['Requested', 'In Progress', 'Shipped', 'Delivered', 'Feedback'].map((stage, idx) => {
                                            const activeIdx = ['Requested', 'In Progress', 'Shipped', 'Delivered', 'Feedback'].findIndex(s => selectedSample.status.includes(s));
                                            const isDone = idx <= (activeIdx === -1 ? 1 : activeIdx);
                                            const activeColor = isDone ? (selectedSample.status === 'Delivered' || selectedSample.status === 'Feedback' ? 'bg-emerald-500' : 'bg-[#003d5b] dark:bg-blue-600') : 'bg-white dark:bg-slate-800';
                                            return (
                                                <div key={stage} className="flex flex-col items-center gap-2">
                                                    <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold transition-all ${isDone ? `${activeColor} border-transparent text-white` : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-300 dark:text-slate-600'}`}>
                                                        {idx + 1}
                                                    </div>
                                                    <span className={`text-[9px] uppercase font-bold tracking-wide ${isDone ? 'text-slate-700 dark:text-slate-300' : 'text-slate-300 dark:text-slate-600'}`}>{stage}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div onClick={() => handleEditSample(selectedSample)} className="bg-gradient-to-br from-indigo-500 to-violet-600 rounded-3xl p-6 shadow-lg shadow-indigo-500/20 text-white relative group cursor-pointer hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-white/20 rounded-xl"><TruckIcon className="w-6 h-6" /></div>
                                        <div className="flex-1">
                                            <p className="text-[10px] font-bold text-indigo-100 uppercase tracking-wider">Logistics</p>
                                            <p className="text-xl font-bold">{selectedSample.courier || 'Pending'}</p>
                                        </div>
                                    </div>
                                    <div className="text-xs text-indigo-100 border-t border-white/20 pt-2">Tracking: {selectedSample.trackingNumber || '-'}</div>
                                </div>

                                <div onClick={() => handleEditSample(selectedSample)} className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-6 shadow-lg shadow-emerald-500/20 text-white relative group cursor-pointer hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-white/20 rounded-xl"><CurrencyIcon className="w-6 h-6" /></div>
                                        <div className="flex-1">
                                            <p className="text-[10px] font-bold text-emerald-100 uppercase tracking-wider">Total Cost</p>
                                            <p className="text-xl font-bold">${(selectedSample.cost + selectedSample.courierCost).toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div className="text-xs text-emerald-100 border-t border-white/20 pt-2 flex justify-between">
                                        <span>Sample: ${selectedSample.cost}</span>
                                        <span>Ship: ${selectedSample.courierCost}</span>
                                    </div>
                                </div>

                                <div onClick={() => !isReadOnly && handleEditSample(selectedSample)} className="md:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 group cursor-pointer hover:shadow-md transition-all relative">
                                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">Comments & Notes</h4>
                                    <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-4 text-sm text-slate-600 dark:text-slate-400 italic leading-relaxed">
                                        {selectedSample.comments && selectedSample.comments.length > 0 ? selectedSample.comments[0].text : "No comments provided."}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-slate-300">
                            <Icons.Order className="w-16 h-16 opacity-50 mb-4" />
                            <h3 className="text-xl font-bold text-slate-600 dark:text-slate-400">Select a Sample</h3>
                        </div>
                    )}
                </div>
            </div>
          )}

          {showSampleModal && editingSample && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
               <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden border dark:border-slate-800">
                  <div className="bg-[#003d5b] dark:bg-slate-950 p-6 text-white font-bold flex justify-between items-center">
                      <h3>Edit Sample Request</h3>
                      <button onClick={() => setShowSampleModal(false)}><CloseIcon className="w-5 h-5 opacity-70" /></button>
                  </div>
                  <div className="p-8 space-y-5 max-h-[70vh] overflow-y-auto">
                     <div className="grid grid-cols-2 gap-4">
                         <Select label="Status" value={editingSample.status || 'Requested'} onChange={(e: any) => setEditingSample({...editingSample, status: e.target.value})}>
                            {['Requested', 'In Progress', 'Shipped', 'Delivered', 'Feedback'].map(s => <option key={s} value={s} className="dark:bg-slate-900">{s}</option>)}
                         </Select>
                         <Input label="Tracking" value={editingSample.trackingNumber || ''} onChange={(e: any) => setEditingSample({...editingSample, trackingNumber: e.target.value})} />
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                         <Input label="Cost ($)" type="number" value={editingSample.cost || 0} onChange={(e: any) => setEditingSample({...editingSample, cost: Number(e.target.value)})} />
                         <Input label="Courier ($)" type="number" value={editingSample.courierCost || 0} onChange={(e: any) => setEditingSample({...editingSample, courierCost: Number(e.target.value)})} />
                     </div>
                     <Input label="Courier" value={editingSample.courier || ''} onChange={(e: any) => setEditingSample({...editingSample, courier: e.target.value})} />
                  </div>
                  <div className="p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-2">
                     <button onClick={() => setShowSampleModal(false)} className="px-5 py-2.5 text-slate-500 font-bold hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl text-sm">Cancel</button>
                     <button onClick={handleSaveSample} className="px-6 py-2.5 bg-[#003d5b] dark:bg-blue-600 text-white font-bold rounded-xl hover:bg-sky-900 dark:hover:bg-blue-500 shadow-lg text-sm">Save</button>
                  </div>
               </div>
            </div>
          )}

          {printSample && (
            <PrintWizard 
                mode="sample" 
                sample={printSample} 
                product={products.find(p => p.id === printSample.productId)} 
                factory={factories.find(f => f.id === printSample.factoryId)}
                onClose={() => setPrintSample(null)} 
            />
          )}
      </div>
    </div>
  );
};

export default Jobs;