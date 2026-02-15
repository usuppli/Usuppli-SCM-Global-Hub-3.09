
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Shipment, Language, Customer, Job, SampleRequest, Supplier, Product } from '../types';
import { translations } from '../translations'; // Merged Import
import { 
  X, Calendar, ChevronLeft, ChevronRight, AlertTriangle, 
  MapPin, Info, Minus, Maximize2, PanelRight, Ship, Package, Plus, Save,
  Link, User, Factory, FileText, Truck, TestTube, Calculator, Clock, ArrowRight,
  Box, Hash, CheckCircle2, CalendarPlus, Trash2
} from 'lucide-react';

// --- TYPES & INTERFACES ---
export interface ConstraintEvent {
  id: string;
  title: string;
  description: string;
  start: string; 
  end: string;   
  type: 'factory_shutdown' | 'port_delay' | 'holiday' | 'weather' | 'shipping_opportunity' | 'customer_event' | 'logistics_plan';
  severity: 'low' | 'medium' | 'high' | 'opportunity' | 'plan'; 
  region?: string;
  impactedArea?: string;
  linkedEntityType?: 'Customer' | 'Job' | 'Shipment' | 'Sample' | 'Supplier' | 'Order' | 'Product';
  linkedEntityId?: string;
  linkedEntityName?: string;
}

interface LeadTimeBreakdown {
  production: number;
  qualityCheck: number;
  shipping: number;
  customs: number;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  customers?: Customer[];
  jobs?: Job[];
  shipments?: Shipment[];
  samples?: SampleRequest[];
  suppliers?: Supplier[];
  products?: Product[];
  orders?: any[]; 
}

const MOCK_EVENTS: ConstraintEvent[] = [
  { id: 'e1', title: 'LA Port Congestion', description: 'Moderate Delay Risk - Shipping', start: '2026-02-01', end: '2026-02-05', type: 'port_delay', severity: 'medium', region: 'North America', linkedEntityType: 'Shipment', linkedEntityName: 'SH-9921' },
  { id: 'e2', title: 'CNY Factory Shutdown', description: 'All production halted', start: '2026-02-10', end: '2026-02-24', type: 'factory_shutdown', severity: 'high', region: 'Asia' },
];

const SEVERITY_STYLES = {
  low: { bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-700 dark:text-blue-300', border: 'border-blue-200 dark:border-blue-800', dot: 'bg-blue-500' },
  medium: { bg: 'bg-amber-50 dark:bg-amber-900/20', text: 'text-amber-700 dark:text-amber-300', border: 'border-amber-200 dark:border-amber-800', dot: 'bg-amber-500' },
  high: { bg: 'bg-red-50 dark:bg-red-900/20', text: 'text-red-700 dark:text-red-300', border: 'border-red-200 dark:border-red-800', dot: 'bg-red-500' },
  opportunity: { bg: 'bg-emerald-50 dark:bg-emerald-900/20', text: 'text-emerald-700 dark:text-emerald-300', border: 'border-emerald-200 dark:border-emerald-800', dot: 'bg-emerald-500' },
  plan: { bg: 'bg-indigo-50 dark:bg-indigo-900/20', text: 'text-indigo-700 dark:text-indigo-300', border: 'border-indigo-200 dark:border-indigo-800', dot: 'bg-indigo-500' } 
};

export default function ConstraintCalendar({ 
  isOpen, onClose, lang,
  customers = [], jobs = [], shipments = [], samples = [], suppliers = [], products = []
}: Props) {
  // CRASH PROTECTION: Safe access to translations
  const rootT = translations[lang] || translations['en'];
  const t = rootT.calendar;
  const commonT = rootT.common;

  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 1));
  const [events, setEvents] = useState<ConstraintEvent[]>(MOCK_EVENTS);
  const [hoveredEvent, setHoveredEvent] = useState<ConstraintEvent | null>(null);
  
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDocked, setIsDocked] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  // Calculator State
  const [calcStartDate, setCalcStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [calcType, setCalcType] = useState<'Job' | 'Sample' | 'Product'>('Job');
  const [calcSelectedId, setCalcSelectedId] = useState('');
  const [calcQuantity, setCalcQuantity] = useState(1000);
  const [calcDestination, setCalcDestination] = useState('Los Angeles, CA');
  const [leadTimeData, setLeadTimeData] = useState<LeadTimeBreakdown>({ production: 30, qualityCheck: 5, shipping: 25, customs: 3 });

  const [newEvent, setNewEvent] = useState<Partial<ConstraintEvent>>({
    type: 'factory_shutdown', severity: 'medium', start: new Date().toISOString().split('T')[0], end: new Date().toISOString().split('T')[0]
  });

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const getEventsForDay = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(e => dateStr >= e.start && dateStr <= e.end);
  };

  const days = useMemo(() => {
    const d = [];
    for (let i = 0; i < firstDayOfMonth; i++) d.push(null);
    for (let i = 1; i <= daysInMonth; i++) d.push(i);
    return d;
  }, [daysInMonth, firstDayOfMonth]);

  const calculateETA = () => {
    const totalDays = leadTimeData.production + leadTimeData.qualityCheck + leadTimeData.shipping + leadTimeData.customs;
    const start = new Date(calcStartDate);
    const eta = new Date(start);
    eta.setDate(start.getDate() + totalDays);
    return { totalDays, eta };
  };

  const calcResults = calculateETA();

  const handleSaveCalculationToCalendar = () => {
    const entityName = calcSelectedId || 'Planned Order';
    const calcEvent: ConstraintEvent = {
        id: `plan-${Date.now()}`,
        title: `Logistics Plan: ${entityName}`,
        description: `Planned shipment of ${calcQuantity} units to ${calcDestination}.`,
        start: calcStartDate,
        end: calcResults.eta.toISOString().split('T')[0],
        type: 'logistics_plan',
        severity: 'plan', 
        region: calcDestination,
        linkedEntityType: calcType,
        linkedEntityId: calcSelectedId,
        linkedEntityName: entityName
    };
    setEvents([...events, calcEvent]);
    setShowCalculator(false);
  };

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.start || !newEvent.end) return;
    const eventToAdd: ConstraintEvent = {
        id: `e-${Date.now()}`,
        title: newEvent.title,
        description: newEvent.description || 'Manual Entry',
        start: newEvent.start,
        end: newEvent.end,
        type: newEvent.type as any,
        severity: newEvent.severity as any,
        region: newEvent.region || 'Global',
        linkedEntityType: newEvent.linkedEntityType,
        linkedEntityId: newEvent.linkedEntityId
    };
    setEvents([...events, eventToAdd]);
    setShowAddModal(false);
  };

  const getEntityIcon = (type?: string) => {
    switch(type) {
      case 'Customer': return <User className="w-3 h-3" />;
      case 'Job': return <Package className="w-3 h-3" />;
      case 'Shipment': return <Truck className="w-3 h-3" />;
      case 'Sample': return <TestTube className="w-3 h-3" />;
      default: return <Info className="w-3 h-3" />;
    }
  };

  if (!isOpen) return null;

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-24 z-[200] animate-in slide-in-from-bottom-10 fade-in duration-300">
        <button onClick={() => setIsMinimized(false)} className="bg-[#003d5b] hover:bg-[#002a40] text-white p-4 rounded-full shadow-2xl flex items-center gap-3 border border-white/20 transition-transform hover:scale-105 active:scale-95">
          <div className="relative"><Calendar className="w-6 h-6" /><span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#003d5b]"></span></div>
          <span className="font-bold pr-2">{t?.title || "Constraint Calendar"}</span><Maximize2 className="w-4 h-4 opacity-70" />
        </button>
      </div>
    );
  }

  const containerClasses = isDocked ? "fixed right-0 top-0 h-full w-[500px] z-[100] shadow-2xl animate-in slide-in-from-right duration-300" : "fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200";
  const windowClasses = isDocked ? "bg-white dark:bg-slate-900 w-full h-full border-l border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden" : "bg-white dark:bg-slate-900 w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200";

  return (
    <div className={containerClasses}>
      <div className={windowClasses}>
        
        {/* HEADER */}
        <div className="bg-[#003d5b] p-3 flex justify-between items-center text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg"><Calendar className="w-5 h-5" /></div>
            <div>
              <h3 className="text-lg font-bold leading-none">{t?.title || "Constraint Calendar"}</h3>
              <p className="text-white/60 text-xs mt-0.5">Global Production & Logistics Constraints</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
             <button onClick={() => setShowCalculator(!showCalculator)} className={`p-2 hover:bg-white/10 rounded-lg transition-colors ${showCalculator ? 'bg-white/20' : ''}`} title="Calculator">
                <Calculator className="w-5 h-5" />
             </button>
             <button onClick={() => setShowAddModal(true)} className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold transition-colors flex items-center gap-2 border border-white/10 mr-2">
                <Plus className="w-3 h-3" /> {t?.addEvent || "Add Event"}
             </button>
             <button onClick={() => setIsDocked(!isDocked)} className="p-2 hover:bg-white/10 rounded-lg transition-colors"><PanelRight className="w-5 h-5" /></button>
             <button onClick={() => setIsMinimized(true)} className="p-2 hover:bg-white/10 rounded-lg transition-colors"><Minus className="w-5 h-5" /></button>
             <button onClick={onClose} className="p-2 hover:bg-red-500/80 rounded-lg transition-colors"><X className="w-5 h-5" /></button>
          </div>
        </div>

        {/* CALENDAR BODY */}
        <div className="flex h-full overflow-hidden bg-slate-50 dark:bg-slate-950/50 relative">
          <div className="flex-1 flex flex-col h-full overflow-hidden">
            <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0">
                <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                    <button onClick={handlePrevMonth} className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded-md transition-all"><ChevronLeft className="w-5 h-5" /></button>
                    <span className="px-4 font-bold text-slate-700 dark:text-white min-w-[140px] text-center">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
                    <button onClick={handleNextMonth} className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded-md transition-all"><ChevronRight className="w-5 h-5" /></button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
                <div className="grid grid-cols-7 gap-px bg-slate-200 dark:bg-slate-700 border rounded-2xl overflow-hidden shadow-sm">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="bg-slate-50 dark:bg-slate-800 p-2 text-center text-xs font-bold uppercase text-slate-400">{day}</div>
                ))}
                
                {days.map((day, index) => {
                    if (!day) return <div key={`empty-${index}`} className="bg-white dark:bg-slate-900 min-h-[100px]" />;
                    const dayEvents = getEventsForDay(day);
                    const isToday = day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth();
                    return (
                    <div key={day} className={`bg-white dark:bg-slate-900 min-h-[100px] p-2 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 relative ${isToday ? 'bg-blue-50/30' : ''}`}>
                        <span className={`text-sm font-bold ${isToday ? 'text-blue-600 bg-blue-100 w-7 h-7 flex items-center justify-center rounded-full' : 'text-slate-700 dark:text-slate-300'}`}>{day}</span>
                        <div className="mt-2 space-y-1">
                        {dayEvents.map((event) => (
                            <div key={event.id} onMouseEnter={() => setHoveredEvent(event)} onMouseLeave={() => setHoveredEvent(null)} className={`text-[10px] px-1.5 py-1 rounded border-l-2 truncate cursor-help flex items-center gap-1 shadow-sm ${SEVERITY_STYLES[event.severity].bg} ${SEVERITY_STYLES[event.severity].text} ${SEVERITY_STYLES[event.severity].border}`}>
                            {event.linkedEntityType && <span className="opacity-70">{getEntityIcon(event.linkedEntityType)}</span>}
                            <span className="truncate">{event.title}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                    );
                })}
                </div>
            </div>
          </div>

          {/* CALCULATOR PANEL */}
          {showCalculator && (
             <div className="w-96 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col animate-in slide-in-from-right duration-300 shadow-xl z-20">
                <div className="p-4 border-b dark:border-slate-800 flex justify-between items-center">
                    <h3 className="font-bold text-sm flex items-center gap-2 text-slate-800 dark:text-slate-100">
                      <Calculator className="w-4 h-4 text-blue-600" /> Lead Time Calculator
                    </h3>
                    <button onClick={() => setShowCalculator(false)} className="text-slate-400 hover:text-red-500"><X className="w-4 h-4" /></button>
                </div>
                
                <div className="p-4 space-y-4 overflow-y-auto flex-1">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-xs font-bold text-blue-600 uppercase">Est. Arrival (ETA)</span>
                            <span className="text-xl font-black text-slate-800 dark:text-white">{calcResults.totalDays} Days</span>
                        </div>
                        <p className="text-sm font-bold text-blue-700 dark:text-blue-300">{calcResults.eta.toDateString()}</p>
                        <button onClick={handleSaveCalculationToCalendar} className="w-full mt-3 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 shadow-md">
                            <CalendarPlus className="w-4 h-4" /> {t?.addPlan || "Add Plan to Calendar"}
                        </button>
                    </div>
                </div>
             </div>
          )}
        </div>

        {/* ADD EVENT MODAL */}
        {showAddModal && (
            <div className="absolute inset-0 z-[160] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-xl shadow-2xl border dark:border-slate-800 p-6 space-y-4">
                    <div className="flex justify-between items-center border-b dark:border-slate-800 pb-3">
                        <h3 className="font-bold text-lg dark:text-white">{t?.addEvent || "Add Event"}</h3>
                        <button onClick={() => setShowAddModal(false)}><X className="w-5 h-5 text-slate-400" /></button>
                    </div>
                    <Input label="Event Title" placeholder="e.g. Typhoon Warning" value={newEvent.title || ''} onChange={(e:any) => setNewEvent({...newEvent, title: e.target.value})} />
                    <div className="grid grid-cols-2 gap-4">
                        <Input label="Start Date" type="date" value={newEvent.start} onChange={(e:any) => setNewEvent({...newEvent, start: e.target.value})} />
                        <Input label="End Date" type="date" value={newEvent.end} onChange={(e:any) => setNewEvent({...newEvent, end: e.target.value})} />
                    </div>
                    <button onClick={handleAddEvent} className="w-full py-2.5 bg-[#003d5b] text-white rounded-lg font-bold flex items-center justify-center gap-2 shadow-md">
                      <Save className="w-4 h-4" /> {commonT?.save || "Save"}
                    </button>
                </div>
            </div>
        )}
      </div>
    </div>
  );
}