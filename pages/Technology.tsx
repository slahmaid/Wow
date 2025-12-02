import React from 'react';

export const Technology: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-medium text-white mb-6">Technology</h1>
      <p className="text-neutral-400 text-xl font-light">Deep dive into the Infinite Core™ and Neural Sentinel AI.</p>
      
      <div className="mt-12 p-8 bg-white/5 rounded-3xl border border-white/5">
        <h2 className="text-2xl text-white mb-4">Engineering Manifesto</h2>
        <p className="text-neutral-400 leading-relaxed max-w-2xl">
            Prumysl is built on the belief that security should be autonomous. 
            No wires. No charging. No subscriptions. Just pure, unadulterated physics and code working in harmony.
        </p>
      </div>
    </div>
  );
};