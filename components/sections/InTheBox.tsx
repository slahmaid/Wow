import React from 'react';
import { Aperture, Disc, Zap, Wrench, Shield } from 'lucide-react';

export const InTheBox: React.FC = () => {
  return (
    <section className="py-20 md:py-40 bg-neutral-950 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium text-white text-center mb-16 md:mb-32 tracking-tight">
          In The Box
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 items-center max-w-5xl mx-auto">
          
          {/* Item 1: Mount */}
          <div className="aspect-square bg-white/5 rounded-3xl flex flex-col items-center justify-center p-6 border border-white/5 hover:border-white/10 transition-all duration-500 group">
            <Disc className="w-8 h-8 md:w-10 md:h-10 text-neutral-600 group-hover:text-white transition-colors duration-500 mb-4" strokeWidth={1} />
            <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 uppercase text-center group-hover:text-neutral-300 transition-colors">
              Magnetic Mount
            </span>
          </div>

          {/* Item 2: Cable */}
          <div className="aspect-square bg-white/5 rounded-3xl flex flex-col items-center justify-center p-6 border border-white/5 hover:border-white/10 transition-all duration-500 group">
            <Zap className="w-8 h-8 md:w-10 md:h-10 text-neutral-600 group-hover:text-white transition-colors duration-500 mb-4" strokeWidth={1} />
            <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 uppercase text-center group-hover:text-neutral-300 transition-colors">
              USB-C Cable
            </span>
          </div>

          {/* Item 3: Camera (Centerpiece) */}
          <div className="col-span-2 md:col-span-1 aspect-[2/1] md:aspect-square bg-gradient-to-b from-neutral-900 to-black rounded-3xl flex flex-col items-center justify-center p-8 border border-white/10 shadow-2xl relative group overflow-hidden md:scale-110 md:z-10 transition-transform duration-500 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]">
             <div className="absolute inset-0 bg-solar-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             {/* Abstract Camera Icon */}
             <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-black rounded-full border border-white/10 flex items-center justify-center mb-4 md:mb-6 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-solar-500/30 transition-colors duration-500">
                <Aperture className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1} />
             </div>
             
             <span className="relative z-10 text-xs font-bold tracking-[0.2em] text-white uppercase text-center">
               Prumysl One
             </span>
             <span className="relative z-10 text-[9px] font-medium tracking-widest text-solar-500 uppercase text-center mt-1">
               Main Unit
             </span>
          </div>

          {/* Item 4: Hardware */}
          <div className="aspect-square bg-white/5 rounded-3xl flex flex-col items-center justify-center p-6 border border-white/5 hover:border-white/10 transition-all duration-500 group">
            <Wrench className="w-8 h-8 md:w-10 md:h-10 text-neutral-600 group-hover:text-white transition-colors duration-500 mb-4" strokeWidth={1} />
            <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 uppercase text-center group-hover:text-neutral-300 transition-colors">
              Mounting Kit
            </span>
          </div>

          {/* Item 5: Sticker */}
          <div className="aspect-square bg-white/5 rounded-3xl flex flex-col items-center justify-center p-6 border border-white/5 hover:border-white/10 transition-all duration-500 group">
            <Shield className="w-8 h-8 md:w-10 md:h-10 text-neutral-600 group-hover:text-white transition-colors duration-500 mb-4" strokeWidth={1} />
            <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 uppercase text-center group-hover:text-neutral-300 transition-colors">
              Window Sticker
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};