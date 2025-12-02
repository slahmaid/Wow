import React from 'react';

export const Specs: React.FC = () => {
  const specs = [
    { label: "Optics", value: "4K Ultra HD HDR" },
    { label: "Field of View", value: "160° Ultrawide" },
    { label: "Battery", value: "365-Day Reserve" },
    { label: "Build", value: "Aerospace Aluminum" },
    { label: "Rating", value: "IP67 Waterproof" },
  ];

  return (
    <section id="specs" className="relative bg-black py-20 md:py-40 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
        
        {/* Left Side: Artistic Lens Visual */}
        <div className="relative group w-full max-w-lg mx-auto lg:max-w-none">
            {/* Glow behind */}
            <div className="absolute inset-0 bg-solar-500/5 blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative aspect-square rounded-full overflow-hidden border border-white/5 bg-neutral-900/30 backdrop-blur-sm shadow-2xl">
              {/* Lens Outer Ring */}
              <div className="absolute inset-8 md:inset-12 rounded-full border-[2px] border-neutral-800/50 bg-neutral-950 shadow-inner flex items-center justify-center overflow-hidden">
                  
                  {/* Lens Glass Elements (CSS Art) */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.05)_0%,_transparent_20%),_radial-gradient(circle_at_center,_#1a1a1a_0%,_#000_100%)]" />
                  
                  {/* Iris */}
                  <div className="relative w-3/4 h-3/4 rounded-full border border-white/5 bg-black overflow-hidden shadow-[inset_0_0_60px_rgba(0,0,0,1)]">
                      {/* Aperture Blades (Abstract) */}
                      <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_#121212_0deg,_#1c1c1c_20deg,_#121212_40deg,_#1c1c1c_60deg,_#121212_80deg,_#1c1c1c_100deg,_#121212_120deg,_#1c1c1c_140deg,_#121212_160deg,_#1c1c1c_180deg,_#121212_200deg,_#1c1c1c_220deg,_#121212_240deg,_#1c1c1c_260deg,_#121212_280deg,_#1c1c1c_300deg,_#121212_320deg,_#1c1c1c_340deg,_#121212_360deg)] opacity-30" />
                      
                      {/* Inner Lens Pupil */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-black rounded-full border border-white/5 shadow-[0_0_30px_rgba(0,0,0,1)] flex items-center justify-center">
                         <div className="w-1/2 h-1/2 bg-blue-900/10 rounded-full blur-md" />
                      </div>

                      {/* Reflections */}
                      <div className="absolute top-1/4 left-1/4 w-8 h-8 md:w-12 md:h-12 bg-white/5 rounded-full blur-2xl" />
                      <div className="absolute bottom-1/4 right-1/4 w-16 h-16 md:w-24 md:h-24 bg-solar-500/5 rounded-full blur-3xl" />
                  </div>
              </div>

              {/* Text Overlay for context */}
              <div className="absolute bottom-4 md:bottom-6 left-0 right-0 flex justify-center opacity-40">
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-neutral-500">Lens Assembly • f/1.6</span>
              </div>
            </div>
        </div>

        {/* Right Side: Specs List */}
        <div className="space-y-10 md:space-y-16">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xs font-bold tracking-[0.2em] text-solar-500 uppercase">
              Technical Specs
            </h2>
            <h3 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
              Engineering Masterpiece.
            </h3>
            <p className="text-neutral-500 font-light max-w-md leading-relaxed text-base md:text-lg">
              Every component of the Prumysl One is calibrated for extreme performance in the harshest environments.
            </p>
          </div>

          <div className="space-y-2">
            {specs.map((spec, index) => (
              <div 
                key={index}
                className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-6 md:py-8 border-b border-white/5 hover:border-solar-500/20 transition-colors duration-500"
              >
                <span className="text-sm font-medium text-neutral-500 group-hover:text-neutral-300 transition-colors uppercase tracking-wider mb-1 sm:mb-0">
                  {spec.label}
                </span>
                <span className="text-lg font-light text-white tracking-wide">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 md:pt-6">
             <button className="text-sm font-semibold text-white/80 hover:text-white transition-colors flex items-center gap-2 group p-2 -ml-2 rounded-lg active:bg-white/5">
                <span className="border-b border-solar-500 pb-0.5">Download Full Datasheet</span>
             </button>
          </div>
        </div>

      </div>
    </section>
  );
};