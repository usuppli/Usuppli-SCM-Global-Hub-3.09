
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
  ChevronLeft,
  EyeOff,
  Plus,
  Search
} from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle'; 
import { Logo } from './Logo'; 

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
  <div className={`px-4 mt-6 mb-2 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 mt-0 mb-0 overflow-hidden'}`}>
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 whitespace-nowrap">{label}</p>
  </div>
);

const Sidebar: React.FC<SidebarProps> = ({ 
  user, activeTab, setActiveTab, currentLang, setCurrentLang, isReadOnly, onOpenProductWizard, onLogout,
  chatOpen, onToggleChat, unreadCount, onOpenCommandPalette, isPinned, setIsPinned, onHide,
  systemVersion
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isExpanded = isPinned || isHovered;

  // FAILSAFE: Ensure translation object exists
  const t = translations[currentLang] || translations['en'];
  const navT = t?.nav || translations['en'].nav; 

  const navItems = [
    { group: navT?.analytics, id: 'DASHBOARD' as TabType, label: navT?.dashboard, icon: LayoutDashboard },
    { group: navT?.sourcing, id: 'PRODUCT_CATALOG' as TabType, label: navT?.productCatalog, icon: Package, restrictedTo: ['admin', 'super_admin', 'editor', 'viewer'] },
    { group: null, id: 'PRODUCT_WORKSPACE' as TabType, label: 'Workspace', icon: Layers, restrictedTo: ['admin', 'super_admin', 'editor', 'viewer'] }, 
    { group: null, id: 'FACTORY_MASTER' as TabType, label: navT?.factoryMaster, icon: Factory, restrictedTo: ['admin', 'super_admin', 'editor'] },
    { group: navT?.executionGroup, id: 'ORDER_MANAGER' as TabType, label: navT?.production, icon: ClipboardList },
    { group: null, id: 'PRODUCTION_FLOOR' as TabType, label: navT?.shopFloor, icon: Wrench },
    { group: null, id: 'LOGISTICS_TOWER' as TabType, label: navT?.logistics, icon: Truck },
    { group: null, id: 'CRM' as TabType, label: navT?.crm, icon: Users, restrictedTo: ['admin', 'super_admin', 'editor', 'viewer'] },
    { group: navT?.system, id: 'TEAM_CHAT' as TabType, label: navT?.teamChat, icon: MessageSquare },
    { group: null, id: 'ADMIN' as TabType, label: navT?.admin, icon: Settings, restrictedTo: ['admin', 'super_admin'] },
  ];

  const NavButton = ({ label, icon: Icon, badge, onClick, isActive }: any) => (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all relative group/btn ${
          isActive 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40 border border-blue-500' 
          : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800 border border-transparent'
      }`}
    >
      <div className={`shrink-0 transition-transform duration-300 ${!isExpanded ? 'mx-auto scale-110' : ''}`}>
        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'group-hover/btn:text-blue-400'}`} />
      </div>
      <span className={`text-xs font-bold flex-1 text-left whitespace-nowrap transition-all duration-300 overflow-hidden ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
        {label}
      </span>
      {badge && badge > 0 && (
          <span className={`bg-red-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full shadow-lg ${!isExpanded ? 'absolute top-1 right-1' : ''}`}>
              {badge > 99 ? '99+' : badge}
          </span>
      )}
    </button>
  );

  return (
    <aside 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-[#0b1120] text-slate-300 flex flex-col h-screen transition-all duration-500 ease-in-out z-[60] relative border-r border-slate-800 shadow-2xl ${isExpanded ? 'w-72' : 'w-20'}`}
    >
      <div className={`absolute -right-3 top-20 flex flex-col gap-2 z-[70] transition-opacity duration-300 ${!isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <button onClick={() => setIsPinned(!isPinned)} className="bg-slate-800 border border-slate-700 rounded-full p-1.5 shadow-xl text-blue-400 hover:text-white transition-all">
          <ChevronLeft className={`w-3 h-3 transition-transform duration-500 ${!isPinned ? 'rotate-180' : ''}`} />
        </button>
        <button onClick={onHide} className="bg-slate-800 border border-slate-700 rounded-full p-1.5 shadow-xl text-slate-400 hover:text-red-400 transition-all">
          <EyeOff className="w-3 h-3" />
        </button>
      </div>

      <div className="flex flex-col gap-4 p-6 pb-2">
          <div className={`flex items-center gap-3 overflow-hidden transition-all duration-500 ${!isExpanded ? '-ml-1' : ''}`}>
            <Logo className="h-9 w-auto text-blue-500 shrink-0" variant="mark" />
            <div className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'}`}>
                <span className="font-black text-xl tracking-tighter text-white">USUPPLI</span>
            </div>
          </div>

          <div className={`flex bg-slate-900/50 border border-slate-800 rounded-xl p-1 transition-all duration-500 ${!isExpanded ? 'opacity-0 h-0 overflow-hidden' : 'gap-1'}`}>
            <button onClick={() => setCurrentLang('en')} className={`flex-1 py-1 text-[9px] font-black rounded-lg transition-all ${currentLang === 'en' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}>EN</button>
            <button onClick={() => setCurrentLang('zh-Hans')} className={`flex-1 py-1 text-[9px] font-black rounded-lg transition-all ${currentLang === 'zh-Hans' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}>简体</button>
            <button onClick={() => setCurrentLang('zh-Hant')} className={`flex-1 py-1 text-[9px] font-black rounded-lg transition-all ${currentLang === 'zh-Hant' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}>繁體</button>
        </div>
      </div>

      <div className="px-3 mb-4 flex items-center gap-2">
         {!isReadOnly && (
            <button 
                onClick={onOpenProductWizard}
                className={`group relative overflow-hidden flex items-center rounded-xl text-xs font-black text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/20 transition-all duration-300 ${isExpanded ? 'flex-1 py-2.5 justify-center gap-2' : 'w-full p-2 aspect-square justify-center'}`}
            >
                <Plus className="w-5 h-5 text-white shrink-0" />
                {isExpanded && <span className="whitespace-nowrap uppercase tracking-widest text-[10px]">New Product</span>}
            </button>
         )}
         <div className={`${isExpanded ? '' : 'hidden'}`}>
             <ThemeToggle />
         </div>
      </div>

      <nav className="flex-1 px-3 space-y-1 overflow-y-auto no-scrollbar custom-scrollbar">
        {navItems.map((item) => {
            if (item.restrictedTo && !item.restrictedTo.includes(user.role)) return null;
            const isTabActive = activeTab === item.id;

            return (
                <React.Fragment key={item.id}>
                    {item.group && <NavGroupLabel label={item.group} isExpanded={isExpanded} />}
                    <NavButton 
                        label={item.label}
                        icon={item.icon}
                        isActive={isTabActive}
                        badge={item.id === 'TEAM_CHAT' ? unreadCount : undefined}
                        onClick={() => setActiveTab(item.id)}
                    />
                </React.Fragment>
            );
        })}
      </nav>

      <div className="bg-[#0f172a] border-t border-slate-800">
          {onOpenCommandPalette && isExpanded && (
              <div className="px-3 pt-4 pb-2">
                <button 
                    onClick={onOpenCommandPalette}
                    className="w-full flex items-center justify-between bg-slate-900/50 hover:bg-slate-800 text-slate-500 hover:text-white px-3 py-2 rounded-xl transition-all border border-slate-800 hover:border-slate-700 shadow-inner"
                >
                    <div className="flex items-center gap-2">
                        <Search className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Command</span>
                    </div>
                    <span className="text-[9px] font-black opacity-30 bg-slate-800 px-1 rounded">⌘K</span>
                </button>
            </div>
          )}

          <div className="p-4 space-y-3">
            <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xs font-black text-white shadow-lg shrink-0`}>
                    {user.name.charAt(0)}
                </div>
                <div className={`flex-1 min-w-0 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'}`}>
                    <p className="font-bold text-xs text-white truncate">{user.name}</p>
                    <p className="text-[9px] text-slate-500 uppercase font-black tracking-tighter truncate">{user.role.replace('_', ' ')}</p>
                </div>
                <button onClick={onLogout} title="Logout" className={`text-slate-500 hover:text-red-400 transition-colors p-2 rounded-xl hover:bg-red-400/10 ${!isExpanded ? 'mx-auto' : ''}`}>
                    <LogOut className="w-5 h-5" />
                </button>
            </div>

            <div className={`pt-2 border-t border-slate-800/50 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                <p className="text-[8px] text-center font-black uppercase tracking-[0.3em] text-slate-600">
                    {systemVersion || "v3.07 Stable"}
                </p>
            </div>
          </div>
      </div>
    </aside>
  );
};

export default memo(Sidebar);