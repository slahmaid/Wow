import React from 'react';
import { Button } from '../ui/Button';
import { Zap, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenCheckout?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 md:pt-40 md:pb-32 px-6 overflow-hidden">
      
      {/* Ambient Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[300px] md:h-[500px] bg-solar-500/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto w-full flex flex-col items-center text-center space-y-12 md:space-y-16">
        
        {/* Text Group */}
        <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm mb-4 md:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-solar-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
              Now accepting pre-orders
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] md:leading-[1.05]">
            Security that <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-400 to-yellow-200">lives forever.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-base md:text-xl text-neutral-400 font-light tracking-wide leading-relaxed px-4 md:px-0">
            The first 4K sentry powered entirely by the sun. Install it once. Protected forever.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4 md:pt-6 w-full sm:w-auto">
            <Button variant="primary" icon="arrow" className="w-full sm:w-auto" onClick={onOpenCheckout}>
              Order Prumysl One
            </Button>
            <Button variant="secondary" icon="play" className="w-full sm:w-auto">
              See the Technology
            </Button>
          </div>
        </div>

        {/* Visual / Product Placeholder */}
        <div className="relative w-full max-w-4xl mt-12 md:mt-16 group perspective-1000">
          
          {/* Glass Card Container */}
          <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.01] group-hover:border-solar-500/30">
            
            {/* Placeholder Visual Representation */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-neutral-900/50 to-black">
              
              {/* Abstract Camera Lens Representation */}
              <div className="relative w-32 h-32 md:w-64 md:h-64 rounded-full border border-white/5 bg-black shadow-[0_0_100px_rgba(0,0,0,0.8)] flex items-center justify-center group-hover:shadow-[0_0_120px_rgba(245,158,11,0.15)] transition-shadow duration-700 scale-75 md:scale-100">
                 {/* Solar Ring */}
                 <div className="absolute inset-0 rounded-full border-2 border-solar-500/10 rotate-45 group-hover:rotate-90 transition-transform duration-[1.5s]" />
                 <div className="absolute inset-2 rounded-full border border-white/5" />
                 
                 {/* Lens Glint */}
                 <div className="w-16 h-16 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-neutral-900 to-black border border-white/5 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute -top-10 -left-10 w-20 h-40 bg-white/5 skew-x-12 blur-xl" />
                    <div className="w-8 h-8 rounded-full bg-blue-900/20 blur-md" />
                 </div>

                 {/* Status Indicator */}
                 <div className="absolute top-4 right-4 md:top-8 md:right-8 w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
              </div>

              {/* Grid Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] pointer-events-none opacity-50" />
            </div>

            {/* Floating Spec Cards (Hidden on mobile to reduce clutter) */}
            <div className="absolute top-8 left-8 p-4 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 hidden md:flex items-center gap-4 animate-in fade-in slide-in-from-left-8 duration-700 delay-300">
               <div className="p-2 bg-white/5 rounded-lg text-solar-500">
                 <Zap size={18} strokeWidth={1.5} />
               </div>
               <div>
                 <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">Battery Life</div>
                 <div className="text-sm font-medium text-white tracking-wide">Infinite Solar</div>
               </div>
            </div>

            <div className="absolute bottom-8 right-8 p-4 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 hidden md:flex items-center gap-4 animate-in fade-in slide-in-from-right-8 duration-700 delay-500">
               <div className="p-2 bg-white/5 rounded-lg text-solar-500">
                 <ShieldCheck size={18} strokeWidth={1.5} />
               </div>
               <div>
                 <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">Resolution</div>
                 <div className="text-sm font-medium text-white tracking-wide">4K HDR Vision</div>
               </div>
            </div>
            
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30 animate-pulse">
          <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400">Scroll</span>
          <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white to-transparent" />
        </div>

      </div>
    </section>
  );
};