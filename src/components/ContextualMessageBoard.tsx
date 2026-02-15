
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { 
  MessageSquare, Search, Send, Paperclip, Flag, X, ChevronLeft, Plus, 
  MoreVertical, FileText, Building2, Package, Truck, TestTube, ArrowUpRight,
  Bell, AtSign, Share2, Minus, Maximize2, Mail, MessageCircle, Copy, 
  Image as ImageIcon, FileSpreadsheet, Pin, Trash2, RotateCcw, Factory,
  PanelRight
} from 'lucide-react';
import { Customer, Job, SampleRequest, Shipment, User, Supplier } from '../types'; 

// ==========================================
// TYPES
// ==========================================

export type ThreadPriority = 'urgent' | 'important' | 'normal';

export interface ThreadAttachment {
  id: string;
  name: string;
  type: 'pdf' | 'image' | 'doc' | 'spreadsheet';
  size: string;
  url: string;
}

export interface ThreadMessage {
  id: string;
  authorId: string;
  authorName: string;
  authorRole: string;
  text: string;
  timestamp: string;
  mentions: string[];
  attachments: ThreadAttachment[];
  isPinned: boolean;
  isEdited: boolean;
}

export interface CustomerThread {
  id: string;
  customerId: string;
  customerName: string;
  linkedOrderId?: string;
  linkedOrderType?: 'Job' | 'Sample' | 'Shipment' | 'Supplier';
  topic: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  priority: ThreadPriority;
  status: 'open' | 'resolved' | 'archived';
  isPinned?: boolean; 
  tags: string[];
  participants: string[];
  messages: ThreadMessage[];
}

interface ContextualMessageBoardProps {
  customers: Customer[];
  suppliers?: Supplier[]; 
  jobs?: Job[];
  samples?: SampleRequest[];
  shipments?: Shipment[];
  currentUser?: User | null;
  isOpen: boolean;            
  onClose: () => void;        
  onNavigateToCustomer: (customerId: string) => void;
  onNavigateToOrder: (orderId: string) => void;
}

// ==========================================
// RICH DEMO DATA
// ==========================================
const MOCK_THREADS: CustomerThread[] = [
  {
    id: 't1',
    customerId: 'CUST-001',
    customerName: 'Urban Outfitters',
    linkedOrderId: 'PO-2024-8821',
    linkedOrderType: 'Job',
    topic: 'Q3 Production Delays',
    lastMessage: 'Checking with the factory manager now.',
    lastMessageTime: '10:42 AM',
    unreadCount: 2,
    priority: 'urgent',
    status: 'open',
    isPinned: true,
    tags: ['Production', 'Delay'],
    participants: ['Mike R.', 'Sarah J.'],
    messages: [
      {
        id: 'm1',
        authorId: 'u2',
        authorName: 'Sarah Jenkins',
        authorRole: 'Customer',
        text: 'Hi Mike, hearing rumors about fabric shortages. How does this affect Q3 delivery for PO-8821?',
        timestamp: 'Yesterday, 4:20 PM',
        mentions: [],
        attachments: [],
        isPinned: false,
        isEdited: false
      },
      {
        id: 'm2',
        authorId: 'u1',
        authorName: 'Mike Ross',
        authorRole: 'Account Manager',
        text: 'Hi Sarah, let me verify the stock levels with the mill. Give me 10 mins.',
        timestamp: 'Yesterday, 4:25 PM',
        mentions: [],
        attachments: [],
        isPinned: false,
        isEdited: false
      },
      {
        id: 'm3',
        authorId: 'u1',
        authorName: 'Mike Ross',
        authorRole: 'Account Manager',
        text: 'Checking with the factory manager now.',
        timestamp: '10:42 AM',
        mentions: [],
        attachments: [],
        isPinned: false,
        isEdited: false
      }
    ]
  },
  {
    id: 't2',
    customerId: 'CUST-002',
    customerName: 'Zalando SE',
    linkedOrderId: 'SMP-2024-005',
    linkedOrderType: 'Sample',
    topic: 'SS25 Fit Sample Review',
    lastMessage: 'Here are the revised measurements.',
    lastMessageTime: 'Yesterday',
    unreadCount: 0,
    priority: 'normal',
    status: 'open',
    isPinned: false,
    tags: ['Fit', 'Sample'],
    participants: ['Markus W.', 'Design Team'],
    messages: [
      {
        id: 'm2-1',
        authorId: 'u3',
        authorName: 'Markus Weber',
        authorRole: 'Customer',
        text: 'The waist on the medium sample is still too tight. Please see attached photo.',
        timestamp: '2 days ago',
        mentions: [],
        attachments: [
          { id: 'a1', name: 'fit_issue_v2.jpg', type: 'image', size: '2.4 MB', url: '#' }
        ],
        isPinned: false,
        isEdited: false
      },
      {
        id: 'm2-2',
        authorId: 'u1',
        authorName: 'Mike Ross',
        authorRole: 'Account Manager',
        text: 'Understood. We will adjust the pattern by +2cm. Here are the revised measurements.',
        timestamp: 'Yesterday, 9:00 AM',
        mentions: [],
        attachments: [
          { id: 'a2', name: 'spec_sheet_rev3.pdf', type: 'pdf', size: '450 KB', url: '#' }
        ],
        isPinned: false,
        isEdited: false
      }
    ]
  },
  {
    id: 't3',
    customerId: 'CUST-005',
    customerName: 'Nordstrom',
    linkedOrderId: 'SH-9921',
    linkedOrderType: 'Shipment',
    topic: 'Customs Clearance Issue',
    lastMessage: 'Documents have been re-submitted.',
    lastMessageTime: 'Mon',
    unreadCount: 5,
    priority: 'important',
    status: 'open',
    isPinned: false,
    tags: ['Logistics', 'Customs'],
    participants: ['Emily C.', 'Logistics Team'],
    messages: [
      {
        id: 'm3-1',
        authorId: 'u4',
        authorName: 'Emily Chen',
        authorRole: 'Customer',
        text: 'Our broker says the commercial invoice is missing the HTS codes.',
        timestamp: 'Mon, 2:00 PM',
        mentions: [],
        attachments: [],
        isPinned: false,
        isEdited: false
      },
      {
        id: 'm3-2',
        authorId: 'u1',
        authorName: 'Mike Ross',
        authorRole: 'Account Manager',
        text: 'Apologies Emily. Documents have been re-submitted directly to your broker.',
        timestamp: 'Mon, 2:30 PM',
        mentions: [],
        attachments: [],
        isPinned: false,
        isEdited: false
      }
    ]
  },
  {
    id: 't4',
    customerId: 'CUST-003',
    customerName: 'The Foschini Group',
    linkedOrderId: 'GreenTextiles Ltd',
    linkedOrderType: 'Supplier',
    topic: 'Organic Cotton Certification',
    lastMessage: 'GOTS certificate expires next month.',
    lastMessageTime: 'Last Week',
    unreadCount: 0,
    priority: 'important',
    status: 'open',
    isPinned: true,
    tags: ['Compliance', 'Sustainability'],
    participants: ['Thabo M.', 'Compliance Officer'],
    messages: [
      {
        id: 'm4-1',
        authorId: 'u1',
        authorName: 'Mike Ross',
        authorRole: 'Account Manager',
        text: 'Thabo, just a heads up that the GOTS certificate for GreenTextiles expires next month. Have they sent the renewal?',
        timestamp: 'Last Week',
        mentions: [],
        attachments: [],
        isPinned: false,
        isEdited: false
      }
    ]
  },
  {
    id: 't5',
    customerId: 'CUST-001',
    customerName: 'Urban Outfitters',
    topic: '2026 Contract Negotiation',
    lastMessage: 'Draft contract attached for review.',
    lastMessageTime: '2 weeks ago',
    unreadCount: 0,
    priority: 'normal',
    status: 'archived',
    isPinned: false,
    tags: ['Legal', 'Sales'],
    participants: ['Sarah J.', 'Legal'],
    messages: [
      {
        id: 'm5-1',
        authorId: 'u1',
        authorName: 'Mike Ross',
        authorRole: 'Account Manager',
        text: 'Draft contract attached for review.',
        timestamp: '2 weeks ago',
        mentions: [],
        attachments: [
           { id: 'a3', name: 'Service_Agreement_2026_DRAFT.docx', type: 'doc', size: '1.2 MB', url: '#' }
        ],
        isPinned: false,
        isEdited: false
      }
    ]
  }
];

export default function ContextualMessageBoard({ 
  customers, 
  suppliers = [], 
  jobs = [], 
  samples = [], 
  shipments = [], 
  currentUser,
  isOpen,
  onClose,
  onNavigateToCustomer, 
  onNavigateToOrder 
}: ContextualMessageBoardProps) {
  
  const [threads, setThreads] = useState<CustomerThread[]>(MOCK_THREADS);
  const [selectedThreadId, setSelectedThreadId] = useState<string | null>(null);
  const [filterText, setFilterText] = useState('');
  const [showNewThreadModal, setShowNewThreadModal] = useState(false);
  const [newMessageText, setNewMessageText] = useState('');
  
  // File Upload State
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [pendingAttachments, setPendingAttachments] = useState<ThreadAttachment[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // View States
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDocked, setIsDocked] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false); // New Loading State
  
  // Actions Menu State
  const [showActionsMenu, setShowActionsMenu] = useState(false);

  const selectedThread = useMemo(() => threads.find(t => t.id === selectedThreadId), [threads, selectedThreadId]);

  const sortedThreads = useMemo(() => {
    return [...threads].sort((a, b) => {
      if (a.isPinned === b.isPinned) return 0;
      return a.isPinned ? -1 : 1;
    }).filter(t => 
      t.topic.toLowerCase().includes(filterText.toLowerCase()) || 
      t.customerName.toLowerCase().includes(filterText.toLowerCase()) ||
      (t.linkedOrderId && t.linkedOrderId.toLowerCase().includes(filterText.toLowerCase()))
    );
  }, [threads, filterText]);

  const [newThreadData, setNewThreadData] = useState({
    customerId: '',
    topic: '',
    initialMessage: '',
    priority: 'normal' as ThreadPriority,
    linkedId: '',
    linkType: 'Job' as 'Job' | 'Sample' | 'Shipment' | 'Supplier'
  });

  useEffect(() => {
    if (messagesEndRef.current) messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [selectedThread?.messages, isMinimized, pendingAttachments, isDocked]);

  if (!isOpen) return null; 

  // --- MINIMIZED VIEW ---
  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-[200] animate-in slide-in-from-bottom-10 fade-in duration-300">
        <button 
          onClick={() => setIsMinimized(false)}
          className="bg-[#003d5b] hover:bg-[#002a40] text-white p-4 rounded-full shadow-2xl flex items-center gap-3 border border-white/20 transition-transform hover:scale-105 active:scale-95"
        >
          <div className="relative">
            <MessageSquare className="w-6 h-6" />
            {threads.some(t => t.unreadCount > 0) && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#003d5b]"></span>
            )}
          </div>
          <span className="font-bold pr-2">Collaboration Hub</span>
          <Maximize2 className="w-4 h-4 opacity-70" />
        </button>
      </div>
    );
  }

  // --- LOGIC ---

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map(file => {
        let type: ThreadAttachment['type'] = 'doc';
        if (file.type.includes('image')) type = 'image';
        else if (file.type.includes('pdf')) type = 'pdf';
        else if (file.name.match(/\.(xls|xlsx|csv)$/)) type = 'spreadsheet';

        return {
          id: `att-${Date.now()}-${Math.random()}`,
          name: file.name,
          type,
          size: (file.size / 1024).toFixed(0) + ' KB',
          url: URL.createObjectURL(file) 
        } as ThreadAttachment;
      });
      setPendingAttachments(prev => [...prev, ...newFiles]);
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removePendingAttachment = (id: string) => {
    setPendingAttachments(prev => prev.filter(a => a.id !== id));
  };

  const handleSendMessage = () => {
    if ((!newMessageText.trim() && pendingAttachments.length === 0) || !selectedThreadId) return;
    
    const userMessage: ThreadMessage = {
      id: `m-${Date.now()}`,
      authorId: currentUser?.id || 'guest',
      authorName: currentUser?.name || 'Guest User',
      authorRole: currentUser?.role || 'Visitor',
      text: newMessageText,
      timestamp: 'Just now',
      mentions: [],
      attachments: [...pendingAttachments], 
      isPinned: false,
      isEdited: false
    };

    setThreads(prev => prev.map(t => t.id === selectedThreadId ? { 
      ...t, 
      messages: [...t.messages, userMessage], 
      lastMessage: newMessageText || 'Sent an attachment', 
      lastMessageTime: 'Just now' 
    } : t));
    
    setNewMessageText('');
    setPendingAttachments([]); 
  };

  // --- REFRESH LOGIC (SIMULATED PUSH) ---
  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate network delay
    setTimeout(() => {
      // Logic: Pick a random thread and add a new "Incoming" message to simulated push
      const randomThreadIndex = Math.floor(Math.random() * threads.length);
      const targetThread = threads[randomThreadIndex];
      
      const incomingMsg: ThreadMessage = {
        id: `m-inc-${Date.now()}`,
        authorId: 'u-customer-sim',
        authorName: targetThread.participants[0] || 'Customer', // Use a participant name
        authorRole: 'Customer',
        text: 'Just checking in on the latest status updates. Any news?',
        timestamp: 'Just now',
        mentions: [],
        attachments: [],
        isPinned: false,
        isEdited: false
      };

      setThreads(prev => {
        const newThreads = [...prev];
        newThreads[randomThreadIndex] = {
          ...newThreads[randomThreadIndex],
          messages: [...newThreads[randomThreadIndex].messages, incomingMsg],
          lastMessage: incomingMsg.text,
          lastMessageTime: 'Just now',
          unreadCount: (newThreads[randomThreadIndex].unreadCount || 0) + 1
        };
        // Move updated thread to top if not pinned (simple reorder logic could be added here)
        return newThreads;
      });

      setIsRefreshing(false);
    }, 1200); // 1.2s delay to show spinner
  };

  const handleCreateThread = () => {
    if (!newThreadData.customerId || !newThreadData.topic) return;
    const customerName = customers.find(c => c.id === newThreadData.customerId)?.companyName || 'Unknown';
    
    const newThread: CustomerThread = {
      id: `t-${Date.now()}`,
      customerId: newThreadData.customerId,
      customerName: customerName,
      topic: newThreadData.topic,
      linkedOrderId: newThreadData.linkedId,
      linkedOrderType: newThreadData.linkType,
      lastMessage: newThreadData.initialMessage,
      lastMessageTime: 'Just now',
      unreadCount: 0,
      priority: newThreadData.priority,
      status: 'open',
      tags: [],
      participants: [currentUser?.name || 'Me'],
      messages: [{ 
        id: `m-${Date.now()}`, 
        authorId: currentUser?.id || 'guest', 
        authorName: currentUser?.name || 'Guest', 
        authorRole: currentUser?.role || 'Viewer', 
        text: newThreadData.initialMessage, 
        timestamp: 'Just now', 
        mentions: [], 
        attachments: [], 
        isPinned: false, 
        isEdited: false 
      }]
    };
    setThreads([newThread, ...threads]);
    setSelectedThreadId(newThread.id);
    setShowNewThreadModal(false);
    setNewThreadData({ customerId: '', topic: '', initialMessage: '', priority: 'normal', linkedId: '', linkType: 'Job' });
  };

  // --- ACTIONS ---

  const handleTogglePin = () => {
    if (!selectedThreadId) return;
    setThreads(prev => prev.map(t => 
      t.id === selectedThreadId ? { ...t, isPinned: !t.isPinned } : t
    ));
    setShowActionsMenu(false);
  };

  const handleClearChat = () => {
    if (!selectedThreadId) return;
    if (confirm("Are you sure you want to clear the chat history for this thread?")) {
      setThreads(prev => prev.map(t => 
        t.id === selectedThreadId ? { ...t, messages: [], lastMessage: 'Chat cleared', lastMessageTime: 'Just now' } : t
      ));
    }
    setShowActionsMenu(false);
  };

  const handleClearCache = () => {
    if (confirm("Reset Collaboration Hub to default state? All new threads will be lost.")) {
      setThreads(MOCK_THREADS);
      setSelectedThreadId(null);
    }
    setShowActionsMenu(false);
  };

  const handleExport = (type: 'email' | 'whatsapp' | 'wechat') => {
    if (!selectedThread) return;

    const history = selectedThread.messages
      .map(m => `[${m.timestamp}] ${m.authorName}: ${m.text} ${m.attachments.length > 0 ? '[Attachment]' : ''}`)
      .join('\n');
      
    const subject = `Chat Export: ${selectedThread.topic} (${selectedThread.customerName})`;
    const fullText = `TOPIC: ${selectedThread.topic}\nREF: ${selectedThread.linkedOrderId || 'General'}\n\n${history}`;

    if (type === 'email') {
      window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullText)}`);
    } else if (type === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(fullText)}`);
    } else if (type === 'wechat') {
      navigator.clipboard.writeText(fullText);
      alert("Chat history copied to clipboard! Please paste into WeChat.");
    }
    setShowActionsMenu(false);
  };

  const getPriorityColor = (p: ThreadPriority) => {
    switch (p) {
      case 'urgent': return 'bg-red-100 text-red-700 border-red-200';
      case 'important': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  const getAttachmentIcon = (type: string) => {
    switch(type) {
      case 'pdf': return <FileText className="w-4 h-4 text-red-500" />;
      case 'image': return <ImageIcon className="w-4 h-4 text-blue-500" />;
      case 'spreadsheet': return <FileSpreadsheet className="w-4 h-4 text-emerald-500" />;
      default: return <Paperclip className="w-4 h-4 text-slate-500" />;
    }
  };

  const getLinkIcon = (type?: string) => {
    switch(type) {
      case 'Job': return <Package className="w-3 h-3" />;
      case 'Sample': return <TestTube className="w-3 h-3" />;
      case 'Shipment': return <Truck className="w-3 h-3" />;
      case 'Supplier': return <Factory className="w-3 h-3" />;
      default: return <Package className="w-3 h-3" />;
    }
  };

  // --- DOCKING STYLE LOGIC ---
  const containerClasses = isDocked 
    ? "fixed right-0 top-0 h-full w-[500px] z-[100] shadow-2xl animate-in slide-in-from-right duration-300"
    : "fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200";

  const windowClasses = isDocked
    ? "bg-white dark:bg-slate-900 w-full h-full border-l border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden"
    : "bg-white dark:bg-slate-900 w-full max-w-6xl h-[85vh] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200";

  return (
    <div className={containerClasses}>
      
      {/* WINDOW CONTAINER */}
      <div className={windowClasses}>
        
        {/* WINDOW HEADER */}
        <div className="bg-[#003d5b] p-3 flex justify-between items-center text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg"><MessageSquare className="w-5 h-5" /></div>
            <div>
              <h3 className="text-lg font-bold leading-none">Collaboration Hub</h3>
              <p className="text-white/60 text-xs mt-0.5">Global Message Board</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
             
             {/* REFRESH BUTTON (UPDATED: Simulates Fetch) */}
             <button 
               onClick={handleRefresh} 
               className={`p-2 hover:bg-white/10 rounded-lg transition-all text-white/80 hover:text-white mr-2 ${isRefreshing ? 'animate-spin' : ''}`} 
               title="Refresh Messages"
             >
                <RotateCcw className="w-4 h-4" />
             </button>

             <button onClick={() => setShowNewThreadModal(true)} className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold transition-colors flex items-center gap-2 border border-white/10 mr-4">
                <Plus className="w-3 h-3" /> New Thread
             </button>
             
             {/* DOCK BUTTON */}
             <button onClick={() => setIsDocked(!isDocked)} className={`p-2 hover:bg-white/10 rounded-lg transition-colors ${isDocked ? 'bg-white/20 text-white' : 'text-white/80 hover:text-white'}`} title={isDocked ? "Center Window" : "Dock to Right"}>
               <PanelRight className="w-5 h-5" />
             </button>

             {/* MINIMIZE BUTTON */}
             <button onClick={() => setIsMinimized(true)} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/80 hover:text-white" title="Minimize">
               <Minus className="w-5 h-5" />
             </button>
             
             {/* CLOSE BUTTON */}
             <button onClick={onClose} className="p-2 hover:bg-red-500/80 rounded-lg transition-colors text-white/80 hover:text-white" title="Close">
               <X className="w-5 h-5" />
             </button>
          </div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex f-1 overflow-hidden">
          
          {/* LEFT SIDEBAR (Hide thread list on small docked screens if needed, but keeping for now) */}
          <div className={`${isDocked ? 'w-16 hover:w-64 absolute z-10 h-full transition-all duration-300' : 'w-80'} border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 flex flex-col group shadow-lg`}>
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className={`w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#003d5b]/20 dark:text-white ${isDocked ? 'opacity-0 group-hover:opacity-100 transition-opacity' : ''}`}
                  value={filterText}
                  onChange={e => setFilterText(e.target.value)}
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar bg-slate-50 dark:bg-slate-950/50">
              {sortedThreads.map(thread => (
                <div 
                  key={thread.id}
                  onClick={() => setSelectedThreadId(thread.id)}
                  className={`p-4 border-b border-slate-100 dark:border-slate-800 cursor-pointer transition-colors relative ${
                    selectedThreadId === thread.id ? 'bg-white dark:bg-slate-800 border-l-4 border-l-[#003d5b] shadow-sm' : 'hover:bg-slate-100 dark:hover:bg-slate-900 border-l-4 border-l-transparent'
                  }`}
                >
                  <div className={`flex justify-between mb-1 ${isDocked ? 'opacity-0 group-hover:opacity-100' : ''}`}>
                    <div className="flex gap-2 items-center">
                      {thread.isPinned && <Pin className="w-3 h-3 text-orange-500 fill-orange-500" />}
                      <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border ${getPriorityColor(thread.priority)}`}>{thread.priority}</span>
                    </div>
                    <span className="text-xs text-slate-400">{thread.lastMessageTime}</span>
                  </div>
                  
                  {/* Docked Compact View (Initials) */}
                  {isDocked && (
                    <div className="absolute inset-0 flex items-center justify-center group-hover:hidden">
                       <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 font-bold flex items-center justify-center text-xs relative">
                          {thread.customerName.charAt(0)}
                          {thread.unreadCount > 0 && <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white"></span>}
                       </div>
                    </div>
                  )}

                  <h4 className={`font-bold text-slate-800 dark:text-white text-sm truncate ${isDocked ? 'opacity-0 group-hover:opacity-100' : ''}`}>{thread.topic}</h4>
                  <div className={`flex items-center gap-1 text-xs text-blue-600 mb-2 truncate ${isDocked ? 'opacity-0 group-hover:opacity-100' : ''}`}><Building2 className="w-3 h-3"/> {thread.customerName}</div>
                  {thread.linkedOrderId && (
                    <div className={`inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500 mb-2 ${isDocked ? 'opacity-0 group-hover:opacity-100' : ''}`}>
                        {getLinkIcon(thread.linkedOrderType)}
                        {thread.linkedOrderId}
                    </div>
                  )}
                  <p className={`text-xs text-slate-500 line-clamp-1 ${isDocked ? 'opacity-0 group-hover:opacity-100' : ''}`}>{thread.lastMessage}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CHAT AREA */}
          <div className={`flex-1 flex flex-col bg-white dark:bg-slate-900 relative ${isDocked ? 'ml-16' : ''} transition-all duration-300`}>
            {selectedThread ? (
              <>
                {/* Thread Header */}
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-white dark:bg-slate-900 relative z-20">
                   <div>
                      <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        {selectedThread.isPinned && <Pin className="w-4 h-4 text-orange-500 fill-orange-500" />}
                        {selectedThread.topic}
                        <span className={`text-[10px] uppercase px-2 py-0.5 rounded border ${getPriorityColor(selectedThread.priority)}`}>{selectedThread.priority}</span>
                      </h2>
                      <div className="flex items-center gap-4 text-xs text-slate-500 mt-1">
                          <span className="flex items-center gap-1 hover:text-blue-600 cursor-pointer" onClick={() => { onClose(); onNavigateToCustomer(selectedThread.customerId); }}>
                            <Building2 className="w-3 h-3"/> {selectedThread.customerName} <ArrowUpRight className="w-3 h-3"/>
                          </span>
                          {selectedThread.linkedOrderId && (
                            <span className="flex items-center gap-1 hover:text-blue-600 cursor-pointer" onClick={() => { onClose(); onNavigateToOrder(selectedThread.linkedOrderId!); }}>
                              {getLinkIcon(selectedThread.linkedOrderType)} {selectedThread.linkedOrderId} <ArrowUpRight className="w-3 h-3"/>
                            </span>
                          )}
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-400"><Bell className="w-5 h-5"/></button>
                      
                      {/* EXPORT / ACTIONS MENU */}
                      <div className="relative">
                        <button 
                          onClick={() => setShowActionsMenu(!showActionsMenu)} 
                          className={`p-2 rounded-full text-slate-400 transition-colors ${showActionsMenu ? 'bg-slate-100 dark:bg-slate-800 text-blue-600' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                        >
                          <MoreVertical className="w-5 h-5"/>
                        </button>
                        
                        {/* DROPDOWN */}
                        {showActionsMenu && (
                          <div className="absolute right-0 top-12 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                            <div className="p-2 border-b border-slate-100 dark:border-slate-700 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Actions</div>
                            <button onClick={handleTogglePin} className="w-full text-left px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-3 text-slate-700 dark:text-slate-200">
                              <Pin className={`w-4 h-4 ${selectedThread.isPinned ? 'text-orange-500 fill-orange-500' : 'text-slate-500'}`} /> 
                              {selectedThread.isPinned ? 'Unpin Thread' : 'Pin Thread'}
                            </button>
                            <button onClick={handleClearChat} className="w-full text-left px-4 py-3 text-sm hover:bg-red-50 dark:hover:bg-red-950/30 flex items-center gap-3 text-red-600 dark:text-red-400">
                              <Trash2 className="w-4 h-4" /> Clear History
                            </button>
                            
                            {/* RESET DEMO (Moved here) */}
                            <button onClick={handleClearCache} className="w-full text-left px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-3 text-slate-500 dark:text-slate-400">
                              <RotateCcw className="w-4 h-4" /> Reset Demo Data
                            </button>

                            <div className="p-2 border-t border-b border-slate-100 dark:border-slate-700 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Export</div>
                            <button onClick={handleExport('email')} className="w-full text-left px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-3 text-slate-700 dark:text-slate-200">
                              <Mail className="w-4 h-4 text-blue-500" /> via Email
                            </button>
                            <button onClick={handleExport('whatsapp')} className="w-full text-left px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-3 text-slate-700 dark:text-slate-200">
                              <MessageCircle className="w-4 h-4 text-green-500" /> via WhatsApp
                            </button>
                            <button onClick={handleExport('wechat')} className="w-full text-left px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-3 text-slate-700 dark:text-slate-200">
                              <Copy className="w-4 h-4 text-emerald-600" /> WeChat (Copy)
                            </button>
                          </div>
                        )}
                      </div>
                   </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50 dark:bg-slate-950/30">
                   {selectedThread.messages.length === 0 && (
                      <div className="text-center text-slate-400 text-sm italic py-10">
                        No messages yet. Start the conversation!
                      </div>
                   )}
                   {selectedThread.messages.map(msg => {
                     const isMe = msg.authorId === (currentUser?.id || 'guest');
                     return (
                       <div key={msg.id} className={`flex gap-4 ${isMe ? 'flex-row-reverse' : ''}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isMe ? 'bg-[#003d5b] text-white' : 'bg-slate-200 text-slate-600'}`}>
                             {msg.authorName.charAt(0)}
                          </div>
                          <div className={`flex flex-col max-w-[75%] ${isMe ? 'items-end' : 'items-start'}`}>
                             <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{msg.authorName}</span>
                                <span className="text-[10px] text-slate-400">{msg.timestamp}</span>
                             </div>
                             <div className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${isMe ? 'bg-[#003d5b] text-white rounded-tr-none' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-tl-none'}`}>
                                {msg.text && <p className={msg.attachments.length > 0 ? "mb-2" : ""}>{msg.text}</p>}
                                
                                {msg.attachments && msg.attachments.length > 0 && (
                                  <div className="space-y-1.5 mt-1">
                                    {msg.attachments.map(att => (
                                      <div key={att.id} className={`flex items-center gap-2 p-2 rounded-lg text-xs ${isMe ? 'bg-white/10' : 'bg-slate-100 dark:bg-slate-700'}`}>
                                        {getAttachmentIcon(att.type)}
                                        <div className="flex flex-col overflow-hidden">
                                          <span className="font-bold truncate max-w-[150px]">{att.name}</span>
                                          <span className="opacity-70 text-[10px]">{att.size}</span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                             </div>
                          </div>
                       </div>
                     );
                   })}
                   <div ref={messagesEndRef} />
                </div>

                {/* ATTACHMENT PREVIEW */}
                {pendingAttachments.length > 0 && (
                  <div className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                    {pendingAttachments.map(att => (
                      <div key={att.id} className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs shadow-sm group">
                        {getAttachmentIcon(att.type)}
                        <span className="max-w-[100px] truncate">{att.name}</span>
                        <button onClick={() => removePendingAttachment(att.id)} className="text-slate-400 hover:text-red-500"><X className="w-3 h-3"/></button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Input */}
                <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                   <div className="flex gap-2">
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        className="hidden" 
                        multiple 
                        accept=".pdf,.jpg,.jpeg,.png,.xls,.xlsx"
                        onChange={handleFileSelect}
                      />
                      <button 
                        onClick={() => fileInputRef.current?.click()} 
                        className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        title="Attach files (PDF, Image, Excel)"
                      >
                        <Paperclip className="w-5 h-5"/>
                      </button>
                      <textarea 
                        value={newMessageText}
                        onChange={e => setNewMessageText(e.target.value)}
                        onKeyDown={e => { if(e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(); } }}
                        placeholder="Type your message..."
                        className="flex-1 bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#003d5b]/20 resize-none h-12 dark:text-white"
                      />
                      <button onClick={handleSendMessage} disabled={!newMessageText.trim() && pendingAttachments.length === 0} className="p-3 bg-[#003d5b] text-white rounded-xl hover:bg-[#002a40] disabled:opacity-50 transition-colors shadow-lg">
                         <Send className="w-4 h-4"/>
                      </button>
                   </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
                 <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="w-10 h-10 text-slate-300" />
                 </div>
                 <p>Select a conversation to start collaborating.</p>
              </div>
            )}
          </div>
        </div>

        {/* NEW THREAD MODAL */}
        {showNewThreadModal && (
          <div className="absolute inset-0 z-[110] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
             <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                   <h3 className="font-bold text-lg dark:text-white">Start New Thread</h3>
                   <button onClick={() => setShowNewThreadModal(false)}><X className="w-5 h-5 text-slate-400"/></button>
                </div>
                
                <div>
                   <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Customer</label>
                   <select 
                      className="w-full p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                      value={newThreadData.customerId}
                      onChange={e => setNewThreadData({...newThreadData, customerId: e.target.value})}
                   >
                      <option value="">Select Customer...</option>
                      {customers.map(c => <option key={c.id} value={c.id}>{c.companyName}</option>)}
                   </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Link Type</label>
                      <select 
                        className="w-full p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                        value={newThreadData.linkType}
                        onChange={e => setNewThreadData({...newThreadData, linkType: e.target.value as any})}
                      >
                         <option value="Job">Production Job</option>
                         <option value="Sample">Sample Order</option>
                         <option value="Shipment">Shipment Order</option>
                         <option value="Supplier">Supplier</option>
                      </select>
                   </div>
                   <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Select Item</label>
                      <select 
                        className="w-full p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                        value={newThreadData.linkedId}
                        onChange={e => setNewThreadData({...newThreadData, linkedId: e.target.value})}
                      >
                         <option value="">None</option>
                         {/* Job (Production Job # or Name) */}
                         {newThreadData.linkType === 'Job' && jobs.map(j => (
                           <option key={j.id} value={j.poNumber}>{j.poNumber}</option>
                         ))}
                         
                         {/* Sample (Sample Order # or Name) */}
                         {newThreadData.linkType === 'Sample' && samples.map(s => (
                           <option key={s.id} value={s.id}>{s.id} - {s.type}</option>
                         ))}
                         
                         {/* Shipment (Shipment Order # or Name) */}
                         {newThreadData.linkType === 'Shipment' && shipments.map(s => (
                           <option key={s.id} value={s.trackingNumber}>{s.trackingNumber}</option>
                         ))}

                         {/* Supplier (Supplier # or Name) */}
                         {/* Fix: Removed s.code which does not exist on Supplier type. */}
                         {newThreadData.linkType === 'Supplier' && suppliers.map(s => (
                           <option key={s.id} value={s.name}>{s.name} ({s.id})</option>
                         ))}
                      </select>
                   </div>
                </div>

                <div>
                   <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Topic</label>
                   <input 
                      className="w-full p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                      placeholder="Subject..."
                      value={newThreadData.topic}
                      onChange={e => setNewThreadData({...newThreadData, topic: e.target.value})}
                   />
                </div>

                <div>
                   <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Message</label>
                   <textarea 
                      className="w-full p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm h-20 resize-none"
                      placeholder="Initial message..."
                      value={newThreadData.initialMessage}
                      onChange={e => setNewThreadData({...newThreadData, initialMessage: e.target.value})}
                   />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                   <button onClick={() => setShowNewThreadModal(false)} className="px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-lg text-sm font-bold">Cancel</button>
                   <button onClick={handleCreateThread} className="px-6 py-2 bg-[#003d5b] text-white rounded-lg text-sm font-bold hover:bg-[#002a40]">Create Thread</button>
                </div>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}
