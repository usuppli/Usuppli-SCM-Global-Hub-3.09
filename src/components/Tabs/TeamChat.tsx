import React, { useState, useRef, useEffect, useMemo } from 'react';
import { User, ChatMessage, ChatThread, Language } from '../../types';
import { translations } from '../../translations';
import { 
  Send, 
  Search, 
  Paperclip, 
  Minus, 
  X, 
  Users, 
  Mic, 
  Square, 
  FileText, 
  MessageSquare,
  Mail,
  Smartphone,
  Copy,
  Pin
} from 'lucide-react';

// --- v3.09 PROTOCOL MOCK DATA ---
const INITIAL_THREADS: ChatThread[] = [
  { id: 'chan-gen', name: 'Global Logistics', type: 'group', unreadCount: 2, lastMessage: 'Shipment SHP-001 has cleared customs.' },
  { id: 'chan-prod', name: 'Production Floor', type: 'group', unreadCount: 0, lastMessage: 'Line A maintenance complete.' },
  { id: 'dm-sarah', name: 'Sarah Jenkins', type: 'direct', unreadCount: 1, lastMessage: 'Can we review the Q3 tariffs?', isOnline: true },
  { id: 'dm-mike', name: 'Mike Ross', type: 'direct', unreadCount: 0, lastMessage: 'PO for Stanley is signed.', isOnline: false }
];

const INITIAL_MESSAGES: Record<string, ChatMessage[]> = {
  'chan-gen': [
    { id: 'm1', senderId: 'u2', text: 'Morning team. SHP-001 is on schedule.', timestamp: new Date(Date.now() - 3600000), isRead: true },
    { id: 'm2', senderId: 'u1', text: 'Great. Let me know when the BL is ready.', timestamp: new Date(Date.now() - 1800000), isRead: true }
  ]
};

interface Props {
  currentUser: User;
  users: User[];
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

const TeamChat: React.FC<Props> = ({ currentUser, users, lang, isOpen, onClose }) => {
  const t = (translations[lang] || translations['en']).teamChat;
  const commonT = (translations[lang] || translations['en']).common;

  // --- STATE ---
  const [threads, setThreads] = useState<ChatThread[]>(INITIAL_THREADS);
  const [messages, setMessages] = useState<Record<string, ChatMessage[]>>(INITIAL_MESSAGES);
  const [activeThreadId, setActiveThreadId] = useState<string>('chan-gen');
  const [inputText, setInputText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- LOGIC ---
  const activeThread = threads.find(t => t.id === activeThreadId);
  const currentMessages = messages[activeThreadId] || [];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentMessages, activeThreadId]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const newMessage: ChatMessage = {
      id: `m-${Date.now()}`,
      senderId: currentUser.id,
      text: inputText,
      timestamp: new Date(),
      isRead: false
    };

    setMessages(prev => ({
      ...prev,
      [activeThreadId]: [...(prev[activeThreadId] || []), newMessage]
    }));
    setInputText('');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const attachmentMsg: ChatMessage = {
      id: `m-${Date.now()}`,
      senderId: currentUser.id,
      text: `Sent a file: ${file.name}`,
      timestamp: new Date(),
      isRead: false,
      attachment: {
        type: file.type.startsWith('image/') ? 'image' : 'file',
        url: URL.createObjectURL(file),
        name: file.name,
        size: `${(file.size / 1024).toFixed(1)} KB`
      }
    };

    setMessages(prev => ({
      ...prev,
      [activeThreadId]: [...(prev[activeThreadId] || []), attachmentMsg]
    }));
    setNotification(`File Sync: ${file.name}`);
    setTimeout(() => setNotification(null), 3000);
  };

  const filteredThreads = threads.filter(thr => 
    thr.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  // --- v3.09 MINIMIZED "ACTION ORB" ---
  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-[100] animate-in slide-in-from-bottom-10 duration-300">
        <button 
          onClick={() => setIsMinimized(false)}
          className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-2xl flex items-center gap-3 border border-white/20 transition-all hover:scale-110 active:scale-95 group ring-4 ring-blue-600/10"
        >
          <div className="relative">
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-blue-600 animate-pulse"></span>
          </div>
          <span className="font-black text-[10px] uppercase tracking-widest pr-2 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
            {activeThread?.name || 'Team Chat'}
          </span>
        </button>
      </div>
    );
  }

  // --- v3.09 DUAL-PANE WINDOW ---
  return (
    <div className="fixed bottom-6 right-6 w-[850px] h-[650px] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_35px_80px_rgba(0,0,0,0.4)] border border-slate-200 dark:border-slate-800 flex overflow-hidden z-[100] animate-in zoom-in-95 duration-300 ring-1 ring-black/5">
      
      {/* SIDEBAR: THREAD TILES */}
      <div className="w-72 border-r border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
             <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
             <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">Usuppli Hub</h3>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder={commonT.search}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold focus:ring-4 focus:ring-blue-500/10 outline-none transition-all shadow-inner"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar px-3 space-y-2 pb-6">
          {filteredThreads.map(thr => (
            <button
              key={thr.id}
              onClick={() => {
                setActiveThreadId(thr.id);
                setThreads(prev => prev.map(t => t.id === thr.id ? { ...t, unreadCount: 0 } : t));
              }}
              className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 text-left relative group ${
                activeThreadId === thr.id 
                  ? 'bg-white dark:bg-slate-800 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700' 
                  : 'hover:bg-slate-200/50 dark:hover:bg-slate-800/30'
              }`}
            >
              <div className="relative shrink-0">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shadow-sm ${
                  thr.type === 'group' 
                  ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/40' 
                  : 'bg-slate-200 text-slate-600 dark:bg-slate-800'
                }`}>
                  {thr.type === 'group' ? <Users className="w-6 h-6" /> : thr.name.charAt(0)}
                </div>
                {thr.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-3 border-white dark:border-slate-900 rounded-full"></div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex justify-between items-center mb-0.5">
                  <span className={`text-xs font-black truncate uppercase tracking-tight ${activeThreadId === thr.id ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}>{thr.name}</span>
                  {thr.unreadCount > 0 && (
                    <span className="bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-lg">{thr.unreadCount}</span>
                  )}
                </div>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold truncate tracking-tight">{thr.lastMessage}</p>
              </div>
              {activeThreadId === thr.id && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-r-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 flex flex-col bg-white dark:bg-slate-900 relative">
        
        {/* HEADER */}
        <header className="h-20 px-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-4">
            <div className="relative">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black ${activeThread?.type === 'group' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-white'}`}>
                    {activeThread?.type === 'group' ? <Users className="w-5 h-5" /> : activeThread?.name.charAt(0)}
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse"></div>
            </div>
            <div>
              <h4 className="text-base font-black text-slate-900 dark:text-white leading-none uppercase tracking-tight">{activeThread?.name}</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.15em] mt-1.5 flex items-center gap-1.5">
                {activeThread?.type === 'group' ? 'Node Channel Alpha' : 'Peer-to-Peer Sync'}
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                Active Now
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setIsMinimized(true)} className="p-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-slate-400 hover:text-slate-600 transition-all"><Minus className="w-5 h-5" /></button>
            <button onClick={onClose} className="p-2.5 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl text-slate-400 hover:text-red-500 transition-all"><X className="w-5 h-5" /></button>
          </div>
        </header>

        {/* NOTIFICATION TOAST */}
        {notification && (
          <div className="absolute top-24 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl animate-in slide-in-from-top-4 border border-white/10 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
            {notification}
          </div>
        )}

        {/* MESSAGES VIEWPORT */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar bg-slate-50/20 dark:bg-slate-950/20">
          {currentMessages.map(msg => {
            const isMe = msg.senderId === currentUser.id;
            return (
              <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
                <div className={`max-w-[75%] group ${isMe ? 'items-end' : 'items-start'} flex flex-col`}>
                  <div className={`p-5 text-sm font-bold shadow-sm transition-all hover:shadow-xl leading-relaxed ${
                    isMe 
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-[2rem] rounded-tr-sm' 
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-100 dark:border-slate-700 rounded-[2rem] rounded-tl-sm'
                  }`}>
                    {msg.attachment ? (
                      <div className="space-y-4">
                        {msg.attachment.type === 'image' ? (
                          <div className="rounded-2xl overflow-hidden border border-white/20 shadow-lg">
                            <img src={msg.attachment.url} className="w-full h-auto object-cover max-h-64" alt="attachment" />
                          </div>
                        ) : (
                          <div className="flex items-center gap-4 p-4 bg-black/10 dark:bg-black/20 rounded-2xl border border-white/10">
                            <div className="p-3 bg-white/20 rounded-xl"><FileText className="w-6 h-6" /></div>
                            <div className="min-w-0 flex-1">
                              <p className="font-black text-xs truncate uppercase tracking-wider">{msg.attachment.name}</p>
                              <p className="text-[9px] font-bold opacity-60 uppercase">{msg.attachment.size}</p>
                            </div>
                          </div>
                        )}
                        <p className="px-1">{msg.text.split(': ')[1]}</p>
                      </div>
                    ) : msg.text}
                  </div>
                  <div className={`mt-2 px-2 flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-400`}>
                    {!isMe && <span className="text-blue-500">{activeThread?.name.split(' ')[0]}</span>}
                    <span>{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* INPUT COMMAND CENTER */}
        <div className="p-8 border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shrink-0">
          <form onSubmit={handleSend} className="flex gap-4 bg-slate-100 dark:bg-slate-800 p-2.5 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 focus-within:ring-8 focus-within:ring-blue-600/5 transition-all items-center shadow-inner">
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              onChange={handleFileUpload} 
            />
            <button 
              type="button" 
              onClick={() => fileInputRef.current?.click()}
              className="p-3.5 text-slate-400 hover:text-blue-600 hover:bg-white dark:hover:bg-slate-700 rounded-full transition-all shadow-sm"
              title="Attach Protocol"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            
            <input 
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              placeholder={t.typeMessage}
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-black text-slate-800 dark:text-white placeholder:text-slate-400 outline-none px-2"
            />

            {inputText.trim() ? (
              <button 
                type="submit"
                className="p-3.5 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-500 transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
              >
                <Send className="w-5 h-5" />
              </button>
            ) : (
              <button 
                type="button"
                onClick={() => setIsRecording(!isRecording)}
                className={`p-3.5 rounded-full transition-all shadow-sm ${isRecording ? 'bg-red-500 text-white animate-pulse' : 'text-slate-400 hover:text-blue-600 hover:bg-white dark:hover:bg-slate-700'}`}
              >
                {isRecording ? <Square className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>
            )}
          </form>

          {/* v3.09 PROTOCOL ACTIONS */}
          <div className="flex justify-center gap-8 mt-6">
            <button onClick={() => { navigator.clipboard.writeText(currentMessages.map(m => m.text).join('\n')); setNotification('Audit Log Copied'); }} className="text-[10px] font-black text-slate-400 hover:text-blue-600 flex items-center gap-2 uppercase tracking-[0.2em] transition-colors"><Copy className="w-3.5 h-3.5" /> Copy Log</button>
            <button className="text-[10px] font-black text-slate-400 hover:text-blue-600 flex items-center gap-2 uppercase tracking-[0.2em] transition-colors"><Mail className="w-3.5 h-3.5" /> Dispatch Mail</button>
            <button className="text-[10px] font-black text-slate-400 hover:text-blue-600 flex items-center gap-2 uppercase tracking-[0.2em] transition-colors"><Pin className="w-3.5 h-3.5" /> Mark Action</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamChat;