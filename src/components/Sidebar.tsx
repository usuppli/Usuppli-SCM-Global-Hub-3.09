import React, { useState, memo } from 'react';
import { TabType, User, Language } from '../types';
import { translations } from '../translations';
import { 
  LayoutDashboard, 
  Package, 
  Layers, 
  Factory, 
  ClipboardList, 
  Wrench, 
  Truck, 
  Users, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Plus, 
  ChevronLeft,
  EyeOff
} from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle'; 
import { Logo } from './Logo'; 

// --- ICONS (Legacy Aesthetic) ---
const SearchTriggerIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
);

const HideIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
);

interface SidebarProps {
  user: User;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  currentLang: Language;
  setCurrentLang: (lang: Language) => void;
  isReadOnly: boolean;
  onOpenProductWizard: () => void;
  onLogout: () => void;
  chatOpen?: boolean;
  onToggleChat?: () => void;
  unreadCount?: number;
  onOpenCommandPalette?: () => void;
  isPinned: boolean;
  setIsPinned: (val: boolean) => void;
  onHide: () => void;
  systemVersion?: string;
}

const NavGroupLabel: React.FC<{ label: string; isExpanded: boolean }> = ({ label, isExpanded }) => (
  <div className={`px-6 mt-4 mb-1 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 mt-0 mb-0 overflow-hidden'}`}>
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 whitespace-nowrap">{label}</p>
  </div>
);

const Sidebar: React.FC<SidebarProps> = ({ 
  user, activeTab, setActiveTab, currentLang, setCurrentLang, isReadOnly, onOpenProductWizard, onLogout,
  unreadCount, onOpenCommandPalette, isPinned, setIsPinned, onHide,
  systemVersion = '3.10'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isExpanded = isPinned || isHovered;

  const t = translations[currentLang] || translations['en'];
  const navT = t?.nav || translations['en'].nav; 
  const commonT = t?.common || translations['en'].common;

  // Navigation Items
  const navItems = [
    { group: navT?.analytics, id: 'DASHBOARD', label: navT?.dashboard, icon: LayoutDashboard },
    { group: navT?.sourcing, id: 'PRODUCT_CATALOG', label: navT?.productCatalog, icon: Package, restrictedTo: ['admin', 'super_admin', 'editor', 'viewer'] },
    { group: null, id: 'PRODUCT_WORKSPACE', label: navT?.productWorkspace || 'Workspace', icon: Layers, restrictedTo: ['admin', 'super_admin', 'editor', 'viewer'] }, 
    { group: null, id: 'FACTORY_MASTER', label: navT?.factoryMaster, icon: Factory, restrictedTo: ['admin', 'super_admin', 'editor'] },
    { group: navT?.executionGroup, id: 'ORDER_MANAGER', label: navT?.production, icon: ClipboardList },
    { group: null, id: 'PRODUCTION_FLOOR', label: navT?.shopFloor, icon: Wrench },
    { group: null, id: 'LOGISTICS_TOWER', label: navT?.logistics, icon: Truck },
    { group: null, id: 'CRM', label: navT?.crm, icon: Users, restrictedTo: ['admin', 'super_admin', 'editor', 'viewer'] },
    { group: navT?.system, id: 'TEAM_CHAT', label: navT?.teamChat, icon: MessageSquare },
    { group: null, id: 'ADMIN', label: navT?.admin, icon: Settings, restrictedTo: ['admin', 'super_admin'] },
  ];

  return (
    <aside 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-[#0f172a] text-slate-300 flex flex-col h-screen transition-all duration-500 ease-in-out z-[60] relative border-r border-slate-800 shadow-2xl ${isExpanded ? 'w-64' : 'w-20'}`}
    >
      {/* PIN / HIDE CONTROLS */}
      <div className={`absolute -right-3 top-20 flex flex-col gap-2 z-[70] transition-opacity duration-300 ${!isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <button onClick={() => setIsPinned(!isPinned)} className="bg-slate-800 border border-slate-700 rounded-full p-1.5 shadow-xl text-blue-400 hover:text-white transition-all">
          <ChevronLeft className={`w-3 h-3 transition-transform duration-500 ${!isPinned ? 'rotate-180' : ''}`} />
        </button>
        <button onClick={onHide} className="bg-slate-800 border border-slate-700 rounded-full p-1.5 shadow-xl text-slate-400 hover:text-red-400 transition-all">
          <EyeOff className="w-3 h-3" />
        </button>
      </div>

      {/* HEADER */}
      <div className="h-16 flex items-center px-6 shrink-0 border-b border-slate-800 overflow-hidden">
          <Logo className="h-8 w-auto text-white shrink-0" variant="mark" />
          {isExpanded && (
              <div className="ml-3 flex flex-col leading-none">
                  <span className="font-black text-lg tracking-tight text-white uppercase">USUPPLI</span>
                  <span className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-0.5">Global SCM</span>
              </div>
          )}
      </div>

      {/* ACTION BLOCK (57% Width Hybrid Layout) */}
      <div className="px-3 py-4 flex items-center justify-center gap-2 shrink-0">
         {!isReadOnly && (
            <button 
                onClick={onOpenProductWizard}
                className={`flex items-center justify-center gap-2 py-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 transition-all ${
                    isExpanded 
                    ? 'w-[57%] shadow-lg' 
                    : 'w-10 h-10 p-0'
                }`}
            >
                <Plus className="w-3.5 h-3.5 shrink-0" />
                {isExpanded && <span className="font-bold text-xs whitespace-nowrap overflow-hidden">{navT?.newProduct || "New Product"}</span>}
            </button>
         )}
         {isExpanded && <ThemeToggle />}
      </div>

      {/* NAVIGATION LINKS */}
      <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto no-scrollbar custom-scrollbar">
        {navItems.map((item) => {
            if (item.restrictedTo && !item.restrictedTo.includes(user.role)) return null;
            const isActive = activeTab === item.id;

            return (
                <React.Fragment key={item.id}>
                    {item.group && <NavGroupLabel label={item.group} isExpanded={isExpanded} />}
                    <button 
                        onClick={() => setActiveTab(item.id as TabType)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group relative ${
                            isActive 
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' 
                            : 'text-slate-400 hover:text-white hover:bg-slate-800' 
                        } ${!isExpanded ? 'justify-center' : ''}`}
                        title={!isExpanded ? item.label : ''}
                    >
                        <div className={`shrink-0 transition-transform duration-300 ${!isExpanded ? 'mx-auto scale-110' : ''}`}>
                            <item.icon className="w-5 h-5" />
                        </div>
                        <span className={`text-sm font-medium whitespace-nowrap transition-all duration-300 overflow-hidden ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
                            {item.label}
                        </span>
                        
                        {item.id === 'TEAM_CHAT' && unreadCount && unreadCount > 0 && (
                            <span className={`bg-red-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full shadow-lg ${!isExpanded ? 'absolute top-1 right-1' : ''}`}>
                                {unreadCount > 99 ? '99+' : unreadCount}
                            </span>
                        )}
                    </button>
                </React.Fragment>
            );
        })}
      </nav>

      {/* FOOTER */}
      <div className="bg-[#0f172a] border-t border-slate-800 shrink-0">
          {/* LANGUAGE SELECTOR */}
          <div className={`px-6 py-4 flex items-center justify-center transition-all duration-500 ${!isExpanded ? 'opacity-0 h-0 overflow-hidden' : 'gap-5'}`}>
            <button onClick={() => setCurrentLang('en')} className={`text-[10px] font-bold transition-all ${currentLang === 'en' ? 'text-white underline underline-offset-4' : 'text-slate-500 hover:text-slate-300'}`}>EN</button>
            <button onClick={() => setCurrentLang('zh-Hans')} className={`text-[10px] font-bold transition-all ${currentLang === 'zh-Hans' ? 'text-white underline underline-offset-4' : 'text-slate-500 hover:text-slate-300'}`}>简</button>
            <button onClick={() => setCurrentLang('zh-Hant')} className={`text-[10px] font-bold transition-all ${currentLang === 'zh-Hant' ? 'text-white underline underline-offset-4' : 'text-slate-500 hover:text-slate-300'}`}>繁</button>
          </div>

          <div className="p-4 pt-0 flex flex-col gap-3">
            <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-blue-400 border border-slate-700 shadow-lg shrink-0 ${!isExpanded ? 'mx-auto' : ''}`}>
                    {user.name.charAt(0)}
                </div>
                
                <div className={`flex-1 min-w-0 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0 h-0 overflow-hidden'}`}>
                    <p className="font-bold text-xs text-white truncate">{user.name}</p>
                    <p className="text-[9px] text-slate-500 uppercase font-bold tracking-tight truncate">{user.role.replace('_', ' ')}</p>
                </div>
                
                {isExpanded && (
                    <button onClick={onLogout} title="Logout" className="text-slate-500 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-red-400/10">
                        <LogOut className="w-4 h-4" />
                    </button>
                )}
            </div>

            {isExpanded && (
                <div className="mt-4 flex justify-between items-center px-1 pb-2">
                    <span className="text-[8px] font-mono text-slate-600 opacity-50">v{systemVersion}</span>
                    <button onClick={onHide} className="text-slate-600 hover:text-slate-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-colors" title="Hide Sidebar">
                        <HideIcon className="w-3.5 h-3.5" /> Hide
                    </button>
                </div>
            )}
            {!isExpanded && (
              <button onClick={onHide} className="w-full flex justify-center text-slate-600 hover:text-slate-400 py-2">
                <HideIcon className="w-5 h-5" />
              </button>
            )}
          </div>
      </div>
    </aside>
  );
};

export default memo(Sidebar);