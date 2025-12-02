import React, { useState } from 'react';
import { Aperture, Sun, Eye, Layers, Check, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const bundles = [
  { 
    id: 'single', 
    title: 'Single Sentry', 
    price: '$299', 
    save: null,
    desc: '1x Camera, 1x Mount' 
  },
  { 
    id: 'double', 
    title: 'Double Defense', 
    price: '$549', 
    save: 'Save $50', 
    desc: '2x Cameras, 2x Mounts',
    recommended: true 
  },
  { 
    id: 'estate', 
    title: 'Estate Pack', 
    price: '$999', 
    save: 'Save $200', 
    desc: '4x Cameras, 4x Mounts' 
  }
];

const galleryImages = [
  { id: 0, icon: Aperture, label: "Front View" },
  { id: 1, icon: Layers, label: "Side Profile" },
  { id: 2, icon: Sun, label: "Solar Array" },
  { id: 3, icon: Eye, label: "Night Vision" },
];

export const Shop: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedBundle, setSelectedBundle] = useState('single');
  const { addToCart, setIsCartOpen } = useCart();

  const ActiveIcon = galleryImages[selectedImage].icon;

  const handleAddToCart = () => {
    const bundle = bundles.find(b => b.id === selectedBundle);
    if (bundle) {
      addToCart({
        id: bundle.id,
        title: `Prumysl One - ${bundle.title}`,
        price: bundle.price,
        image: Aperture, // Using aperture icon as product placeholder image
        bundleId: bundle.id
      });
      setIsCartOpen(true);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Column: Gallery */}
        <div className="space-y-6">
          {/* Main Image Stage */}
          <div className="relative aspect-square w-full bg-neutral-900 rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center group">
            <div className="absolute inset-0 bg-luxury-gradient opacity-50" />
            
            {/* Ambient Background Glow */}
            <div className="absolute w-64 h-64 bg-solar-500/5 rounded-full blur-[80px]" />

            {/* Simulated Product Visual */}
            <div className="relative z-10 p-12 rounded-full border border-white/5 bg-black/50 backdrop-blur-sm shadow-2xl transition-transform duration-500 group-hover:scale-105">
              <ActiveIcon 
                strokeWidth={1} 
                className="w-32 h-32 md:w-48 md:h-48 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
              />
            </div>

            {/* Gallery Navigation Hints */}
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                {galleryImages[selectedImage].label}
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <button
                key={img.id}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-2xl border flex items-center justify-center transition-all duration-300 ${
                  selectedImage === index 
                    ? 'bg-white/10 border-solar-500 text-white' 
                    : 'bg-neutral-900 border-white/5 text-neutral-600 hover:border-white/20 hover:text-neutral-400'
                }`}
              >
                <img.icon size={24} strokeWidth={1.5} />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Buy Box */}
        <div className="flex flex-col h-full pt-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-medium text-white mb-4 tracking-tight">
              Prumysl One
            </h1>
            <p className="text-lg text-neutral-400 font-light leading-relaxed">
              The world's first truly autonomous security system. 
              Infinite power, 4K HDR optics, and military-grade encryption in a unibody aluminum shell.
            </p>
          </div>

          <div className="mb-8">
            <span className="text-4xl font-bold text-solar-500 tracking-tight">
              {bundles.find(b => b.id === selectedBundle)?.price}
            </span>
            <span className="text-neutral-500 ml-3 text-sm font-medium uppercase tracking-wider">
              Free Shipping included
            </span>
          </div>

          {/* Bundle Selector */}
          <div className="space-y-4 mb-10">
            {bundles.map((bundle) => (
              <div
                key={bundle.id}
                onClick={() => setSelectedBundle(bundle.id)}
                className={`relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center justify-between group ${
                  selectedBundle === bundle.id
                    ? 'bg-solar-500/5 border-solar-500 ring-1 ring-solar-500/50'
                    : 'bg-neutral-900 border-white/10 hover:border-white/30'
                }`}
              >
                {/* Recommended Badge */}
                {bundle.recommended && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-solar-500 text-black text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                    Best Value
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                    selectedBundle === bundle.id 
                      ? 'border-solar-500 bg-solar-500' 
                      : 'border-neutral-700 bg-transparent'
                  }`}>
                    {selectedBundle === bundle.id && <Check size={14} className="text-black" strokeWidth={3} />}
                  </div>
                  <div>
                    <h3 className={`font-medium text-lg ${selectedBundle === bundle.id ? 'text-white' : 'text-neutral-300'}`}>
                      {bundle.title}
                    </h3>
                    <p className="text-sm text-neutral-500">{bundle.desc}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className={`font-bold text-lg ${selectedBundle === bundle.id ? 'text-white' : 'text-neutral-400'}`}>
                    {bundle.price}
                  </div>
                  {bundle.save && (
                    <div className="text-xs font-semibold text-green-500 mt-1">
                      {bundle.save}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-auto space-y-8">
            <Button 
              variant="primary" 
              className="w-full !py-5 !text-base"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="text-neutral-500" size={20} />
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">Free<br/>Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck className="text-neutral-500" size={20} />
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">2-Year<br/>Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RefreshCcw className="text-neutral-500" size={20} />
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">30-Day<br/>Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};