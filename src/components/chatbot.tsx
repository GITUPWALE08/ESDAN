import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useGlobalState } from '../globalStore/useGlobalState';

interface Message {
  from: 'bot' | 'user';
  text: string;
}

export default function Chatbot() {
  const { chatOpen, toggleChat } = useGlobalState();
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: 'Hello! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, chatOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg: Message = { from: 'user', text: input };
    setMessages(prev => [...prev, newMsg]);
    setInput('');

    // Simulate response
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: 'Thank you for your message.' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {/* Toggle Button: Floating Action Button (FAB) style */}
      <button
        onClick={toggleChat}
        className="bg-brand-green text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:bg-green-700 active:scale-95 transition-all duration-300"
        aria-label="Chat with us"
      >
        {chatOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      <div className={`
        fixed md:absolute bottom-20 right-4 md:right-0 
        w-[calc(100vw-2rem)] md:w-96 
        bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden
        transition-all duration-300 origin-bottom-right
        ${chatOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 translate-y-8 pointer-events-none'}
      `}>
        {/* Header */}
        <div className="bg-brand-green p-4 flex justify-between items-center text-white">
          <span className="font-semibold">ESDAN Assistant</span>
          <button onClick={toggleChat} className="md:hidden"><X size={20}/></button>
        </div>
        
        {/* Messages Area: constrained height for mobile keyboard safety */}
        <div ref={scrollRef} className="h-[50vh] md:h-80 overflow-y-auto p-4 space-y-4 bg-gray-50 scroll-smooth">
          {messages.map((msg, idx) => (
             /* ... render messages ... */
             <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
               <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.from === 'user' ? 'bg-brand-green text-white rounded-br-none' : 'bg-white text-gray-800 shadow-sm rounded-bl-none'}`}>
                 {msg.text}
               </div>
             </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t flex gap-2 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 bg-gray-100 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/50"
          />
          <button 
            onClick={handleSend} 
            className="p-3 bg-brand-green text-white rounded-full shadow-sm active:scale-90 transition-transform"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}