import { useState } from 'react';
import { ShoppingCart, CheckCircle, Battery, Zap, Gauge, PlayCircle } from 'lucide-react';
import VideoEmbed from '../components/ui/videoEmbedded'; // Import the component
import { products } from '../data/products';
import { type Product } from '../types';
import QuoteModal from '../components/products/quoteModal';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenQuote = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Helper to get icon for specs (optional visual flair)
  const getSpecIcon = (label: string) => {
    if (label.includes('Battery')) return <Battery size={18} className="text-brand-gold" />;
    if (label.includes('Speed')) return <Gauge size={18} className="text-brand-gold" />;
    return <Zap size={18} className="text-brand-gold" />;
  };

  return (
    <div className="pb-20 animate-fade-in space-y-12">
      <header className="border-b-2 border-brand-green/20 pb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-green">Our Products</h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">Innovative solutions driving economic growth.</p>
      </header>

      <div className="space-y-16">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
            
            {/* Image Section */}
            <div className="lg:w-1/2 relative bg-gray-100 min-h-[300px] lg:min-h-full group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-brand-gold text-brand-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                Featured Product
              </div>
            </div>

            {/* Details Section */}
            <div className="lg:w-1/2 p-6 md:p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Key Specs Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {product.specs.slice(0, 3).map((spec, idx) => (
                    <div key={idx} className="bg-brand-green/5 p-3 rounded-xl border border-brand-green/10">
                      <div className="flex items-center gap-2 mb-1">
                        {getSpecIcon(spec.label)}
                        <span className="text-xs text-gray-500 uppercase font-bold">{spec.label}</span>
                      </div>
                      <div className="font-semibold text-gray-800 text-sm md:text-base">{spec.value}</div>
                    </div>
                  ))}
                </div>

                {/* Detailed Features List */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Key Features</h3>
                  <ul className="grid md:grid-cols-2 gap-x-4 gap-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle size={16} className="text-brand-green mt-0.5 mr-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Video Showcase Section */}
              {product.videos && product.videos.length > 0 && (
                <div className="mb-10 animate-fade-in">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <PlayCircle className="text-brand-green" size={24} />
                    See it in Action
                  </h3>
                  
                  <div className={`grid gap-6 ${product.videos.length > 1 ? 'md:grid-cols-2' : 'max-w-2xl'}`}>
                    {product.videos.map((videoId, idx) => (
                      <VideoEmbed 
                        key={idx} 
                        videoId={videoId} 
                        title={`${product.name} Demo ${idx + 1}`} 
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                <button 
                  onClick={() => handleOpenQuote(product)}
                  className="flex-1 bg-brand-green text-white py-3.5 rounded-xl font-bold text-lg hover:bg-green-800 transition shadow-lg shadow-brand-green/20 flex items-center justify-center gap-2 active:scale-95"
                >
                  <ShoppingCart size={20} />
                  Order / Get Quote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quote Modal Component */}
      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        product={selectedProduct} 
      />
    </div>
  );
}