
import React, { useState, useMemo } from 'react';
import { Customer, Language, User as UserType, Job, Shipment, SampleRequest, Supplier, Product } from '../../types';
import { translations } from '../../translations';
import GraphicalWorldClock from '../GraphicalWorldClock';
import { Logo } from '../Logo';
import PrintWizard from '../PrintWizard';
import ContextualMessageBoard from '../ContextualMessageBoard';
import ConstraintCalendar from '../ConstraintCalendar';

// --- ICONS ---
const SearchIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>);
const PlusIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>);
const GridIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 v2a2 2 0 01-2 h-2a2 2 0 01-2-2v-2z" /></svg>);
const ListIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>);
const CRMIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>);
const DownloadIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>);
const XIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>);
const ChatIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>);
const CalendarIcon = ({ className }: { className: string }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>);

// --- INTERNAL DEMO DATA ---
// Fix: Use jobName instead of style and add required targetDelivery, completionPercent, and productRefId.
const DEMO_JOBS: Job[] = [
  { id: 'JOB-101', poNumber: 'PO-2024-8821', customer: 'Urban Outfitters', jobName: 'Graphic Tee Run', quantity: 5000, status: 'In Production', date: '2024-03-15', targetDelivery: '2024-04-15', completionPercent: 20, productRefId: 'PROD-001' },
  { id: 'JOB-102', poNumber: 'PO-2024-9902', customer: 'Zalando SE', jobName: 'Denim Jacket Batch', quantity: 2500, status: 'Cutting', date: '2024-04-01', targetDelivery: '2024-05-01', completionPercent: 10, productRefId: 'PROD-002' },
  { id: 'JOB-103', poNumber: 'PO-2024-1100', customer: 'Nordstrom', jobName: 'Silk Blouse Order', quantity: 1200, status: 'Sewing', date: '2024-03-20', targetDelivery: '2024-03-20', completionPercent: 45, productRefId: 'PROD-003' },
];

// Fix: Remove customer property from Shipment and add required carrier and method.
const DEMO_SHIPMENTS: Shipment[] = [
  { id: 'SH-9921', trackingNumber: 'TRK-9921-X', origin: 'Shanghai', destination: 'Los Angeles', eta: '2024-05-10', status: 'In Transit', items: [], carrier: 'Maersk', method: 'Sea' },
  { id: 'SH-3321', trackingNumber: 'TRK-3321-Z', origin: 'Ho Chi Minh', destination: 'New York', eta: '2024-06-01', status: 'Booked', items: [], carrier: 'DHL', method: 'Air' },
];

// Fix: Replace styleNo with productId and add required factoryId, cost, and courierCost.
const DEMO_SAMPLES: SampleRequest[] = [
  { id: 'SMP-001', type: 'Fit Sample', productId: 'PROD-001', factoryId: 'f1', status: 'Pending Approval', requestDate: '2024-02-15', cost: 100, courierCost: 50 },
  { id: 'SMP-002', type: 'PP Sample', productId: 'PROD-002', factoryId: 'f2', status: 'Approved', requestDate: '2024-02-20', cost: 150, courierCost: 60 },
];

// Fix: Remove code property from Supplier and add required sector, overallGrade, lastAuditDate, certifications, and metrics.
const DEMO_SUPPLIERS: Supplier[] = [
  { id: 'SUP-001', name: 'GreenTextiles Ltd', country: 'Vietnam', sector: 'Textiles', overallGrade: 'A', lastAuditDate: '2024-01-01', certifications: [], metrics: [] },
  { id: 'SUP-002', name: 'Shanghai Fabrics Co', country: 'China', sector: 'Textiles', overallGrade: 'B', lastAuditDate: '2024-01-01', certifications: [], metrics: [] },
];

// Fix: Remove price property from Product and add required dimensions, costVariables, and skus.
const DEMO_PRODUCTS: Product[] = [
  { id: 'PROD-001', name: 'Organic Cotton Tee', brand: 'Generic', status: 'Active', category: 'Tops', dimensions: { lengthCm: 0, widthCm: 0, heightCm: 0, weightKg: 0 }, costVariables: { materials: 12.50 }, skus: [] },
  { id: 'PROD-002', name: 'Slim Fit Denim', brand: 'Generic', status: 'Active', category: 'Bottoms', dimensions: { lengthCm: 0, widthCm: 0, heightCm: 0, weightKg: 0 }, costVariables: { materials: 28.00 }, skus: [] },
];

const COLORS = [
  'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
];

interface Props {
  customers: Customer[];
  users: UserType[];
  lang: Language;
  onAddCustomer: (customer: Customer) => void;
  onUpdateCustomer: (customer: Customer) => void;
  onDeleteCustomer?: (id: string) => void;
  isReadOnly?: boolean;
  // Fix: Added missing props used in App.tsx
  jobs: Job[];
  shipments: Shipment[];
  samples: SampleRequest[];
  onOpenCustomerWizard: () => void;
}

const CustomerDirectory: React.FC<Props> = ({ 
  customers = [], users = [], lang, onAddCustomer, onUpdateCustomer, onDeleteCustomer, isReadOnly, jobs, shipments, samples, onOpenCustomerWizard
}) => {
  const rootT = translations[lang] || translations['en'];
  const t = rootT.nav;
  
  const [isHubOpen, setIsHubOpen] = useState(false); 
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filtered = useMemo(() => {
    return customers.filter(c => 
      (c.companyName || '').toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [customers, searchTerm]);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* GLOBAL CLOCK BAR */}
      <div className="relative w-full flex justify-center items-center mb-6">
         <div className="flex justify-center w-full bg-white dark:bg-slate-900 rounded-[2rem] shadow-sm border border-slate-200 dark:border-slate-800">
            <GraphicalWorldClock />
         </div>
         <div className="absolute top-4 right-6 z-10 hidden md:block">
            <Logo className="h-10 w-auto text-slate-700 dark:text-slate-300" variant="mark" />
         </div>
      </div>

      {/* TOOLBAR */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm gap-4">
         <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <CRMIcon className="w-6 h-6 text-[#003d5b] dark:text-blue-400" />
                {t.crm}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-widest">Manage client relationships and regions</p>
         </div>

         <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
             
             <div className="relative flex-grow md:w-64 group">
                 <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                 <input 
                   type="text" 
                   placeholder="Search clients..." 
                   className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-white rounded-xl text-sm outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                 />
             </div>

             <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border dark:border-slate-700">
                 <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400' : 'text-slate-400 hover:text-slate-600'}`}><GridIcon className="w-4 h-4" /></button>
                 <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400' : 'text-slate-400 hover:text-slate-600'}`}><ListIcon className="w-4 h-4" /></button>
             </div>

             {/* CALENDAR BUTTON */}
             <button 
                onClick={() => setIsCalendarOpen(true)} 
                className={`px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl font-bold text-xs text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2 shadow-sm ${isCalendarOpen ? 'bg-blue-50 dark:bg-slate-700 ring-2 ring-blue-500/20' : ''}`}
             >
                <CalendarIcon className="w-4 h-4" /> <span>Calendar</span>
             </button>

             {/* HUB BUTTON */}
             <button 
                onClick={() => setIsHubOpen(true)} 
                className={`px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl font-bold text-xs text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2 shadow-sm ${isHubOpen ? 'bg-blue-50 dark:bg-slate-700' : ''}`}
             >
                <ChatIcon className="w-4 h-4" /> <span>Hub</span>
             </button>

             {!isReadOnly && (
                 <button onClick={onOpenCustomerWizard} className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg hover:bg-blue-700 flex items-center gap-2 transition-all active:scale-95 shrink-0">
                    <PlusIcon className="w-4 h-4" /> Add Customer
                 </button>
             )}
         </div>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((c, index) => (
          <div key={c.id} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all cursor-pointer group">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg mb-4 ${COLORS[index % COLORS.length]}`}>
                {(c.companyName || '?').charAt(0)}
            </div>
            <h4 className="font-bold text-slate-800 dark:text-white text-lg tracking-tight mb-1">{c.companyName}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-widest">{c.region}</p>
            
            <div className="pt-4 border-t border-slate-50 dark:border-slate-800 flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Account Active</span>
                <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">${(c.totalSpend || 0).toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>

      {/* STABLE OVERLAYS */}
      <ConstraintCalendar 
          isOpen={isCalendarOpen} 
          onClose={() => setIsCalendarOpen(false)} 
          lang={lang} 
          customers={customers}
          jobs={DEMO_JOBS}
          shipments={DEMO_SHIPMENTS}
          samples={DEMO_SAMPLES}
          products={DEMO_PRODUCTS}
          suppliers={DEMO_SUPPLIERS}
      />

      <ContextualMessageBoard 
          isOpen={isHubOpen} 
          onClose={() => setIsHubOpen(false)} 
          customers={customers} 
          suppliers={DEMO_SUPPLIERS}
          // Fix: name -> username (incorrect) was corrected to name, added email.
          currentUser={users[0] ? { id: users[0].id, name: users[0].name, email: users[0].email, role: users[0].role } : undefined}
          jobs={DEMO_JOBS}
          samples={DEMO_SAMPLES}
          shipments={DEMO_SHIPMENTS}
          onNavigateToCustomer={(id) => {}}
          onNavigateToOrder={(id) => {}}
      />

    </div>
  );
};

export default CustomerDirectory;
