import React from 'react';
import { Sun, Shield, Eye, Cpu, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, className = '' }) => {
  return (
    <div className={`group relative bg-neutral-900 rounded-3xl p-8 md:p-10 border border-white/5 overflow-hidden transition-all duration-700 ease-out hover:scale-[1.01] hover:border-solar-500/30 hover:shadow-[0_0_50px_-10px_rgba(245,158,11,0.05)] min-h-[250px] flex flex-col justify-start ${className}`}>
      
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-solar-500/5 via-transparent to-solar-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Icon */}
      <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 md:mb-8 text-neutral-400 group-hover:text-solar-500 group-hover:border-solar-500/50 transition-all duration-500">
        <Icon size={20} strokeWidth={1.5} className="md:w-6 md:h-6" />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-auto">
        <h3 className="text-xl md:text-2xl font-medium text-white mb-3 md:mb-4 tracking-tight">{title}</h3>
        <p className="text-base text-neutral-400 leading-relaxed font-light">{description}</p>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-solar-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-20 md:py-40 bg-neutral-950 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-24">
          <h2 className="text-xs font-bold tracking-[0.2em] text-solar-500 uppercase mb-4 md:mb-6 pl-1">
            Specification
          </h2>
          <h3 className="text-3xl md:text-6xl font-medium text-white tracking-tight leading-tight">
            Engineered for <br/>
            <span className="text-neutral-600">Total Autonomy.</span>
          </h3>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Large Card: Infinite Solar Core */}
          <FeatureCard 
            title="Infinite Core™"
            description="Harvests energy from ambient light. 1 hour of sun provides 72 hours of surveillance."
            icon={Sun}
            className="md:col-span-2"
          />

          {/* Tall Card: Encryption */}
          <FeatureCard 
            title="Vault Encryption"
            description="Your footage stays on the device. No monthly fees. No cloud leaks. 100% Private."
            icon={Shield}
            className="md:row-span-2"
          />

          {/* Small Card: Night Vision */}
          <FeatureCard 
            title="TrueColor Night"
            description="f/1.6 aperture lens captures vibrant color, even in pitch darkness."
            icon={Eye}
          />

          {/* Small Card: AI Threat Detection */}
          <FeatureCard 
            title="Neural Sentinel"
            description="On-board AI distinguishes humans from pets and leaves. Zero false alarms."
            icon={Cpu}
          />

        </div>
      </div>
    </section>
  );
};