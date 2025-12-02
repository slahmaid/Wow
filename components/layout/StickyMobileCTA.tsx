import React from 'react';
import { Button } from '../ui/Button';

interface StickyMobileCTAProps {
  onOpenCheckout?: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenCheckout }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 px-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] animate-in slide-in-from-bottom-full duration-500">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider mb-0.5">Total</span>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">$299</span>
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
          </div>
        </div>
        <Button 
          variant="primary" 
          className="!py-2.5 !px-6 text-sm min-h-[44px]"
          onClick={onOpenCheckout}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};