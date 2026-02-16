import { useState } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { type Product } from '../../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function QuoteModal({ isOpen, onClose, product }: QuoteModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen || !product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // SIMULATE API CALL
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // In a real app, you would send this data to your backend or email service here.
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-brand-green text-white">
          <h3 className="text-xl font-bold">Request a Quote</h3>
          <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full transition">
            <X size={24} />
          </button>
        </div>

        {success ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <Send size={32} />
            </div>
            <h4 className="text-2xl font-bold text-gray-800">Request Sent!</h4>
            <p className="text-gray-600">
              Thank you for your interest in the <span className="font-semibold">{product.name}</span>. Our team will contact you shortly with pricing and availability.
            </p>
            <button 
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-brand-green text-white rounded-lg font-medium hover:bg-green-800 transition"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-gray-600">
              Inquiring about: <span className="font-bold text-gray-900 block">{product.name}</span>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition" placeholder="Enter your name" />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input required type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition" placeholder="Enter your email" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Phone</label>
                <input required type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition" placeholder="080..." />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Quantity</label>
                <input required type="number" min="1" defaultValue="1" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Message (Optional)</label>
              <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition" placeholder="Any specific requirements?" />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-3 bg-brand-green text-white rounded-xl font-bold text-lg hover:bg-green-800 transition active:scale-98 flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" /> : 'Send Request'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}