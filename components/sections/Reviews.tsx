import React from 'react';
import { Star, Quote } from 'lucide-react';

const PressLogo: React.FC<{ name: string }> = ({ name }) => (
  <span className="text-xl md:text-3xl font-black tracking-tighter text-neutral-800 hover:text-neutral-200 transition-colors duration-700 cursor-default uppercase select-none">
    {name}
  </span>
);

const ReviewCard: React.FC<{ quote: string; author: string }> = ({ quote, author }) => (
  <div className="relative group bg-black p-8 md:p-10 rounded-2xl border border-white/5 hover:border-solar-500/20 transition-all duration-700">
    <div className="absolute top-8 right-8 md:top-10 md:right-10 opacity-20 group-hover:opacity-100 group-hover:text-solar-500 transition-all duration-700">
      <Quote size={20} strokeWidth={1.5} />
    </div>
    
    <div className="flex gap-1 mb-6 md:mb-8">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={14} 
          className="fill-solar-500 text-solar-500" 
        />
      ))}
    </div>
    
    <p className="text-base md:text-lg text-neutral-300 font-light leading-relaxed md:leading-8 mb-8 md:mb-10 min-h-[80px]">
      "{quote}"
    </p>
    
    <div className="flex items-center gap-4">
      <div className="w-6 h-[1px] bg-neutral-800 group-hover:bg-solar-500 transition-colors duration-500" />
      <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest group-hover:text-white transition-colors duration-500">
        {author}
      </span>
    </div>
  </div>
);

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-40 bg-neutral-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Press Logos */}
        <div className="mb-20 md:mb-32 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-neutral-600 uppercase mb-8 md:mb-12">
            Acclaimed By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-32 opacity-80">
            <PressLogo name="Wired" />
            <PressLogo name="The Verge" />
            <PressLogo name="TechCrunch" />
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <ReviewCard 
            quote="It feels more like industrial art than a camera. The solar tech is invisible but relentless."
            author="TechMonthly"
          />
          <ReviewCard 
            quote="I cancelled my $30/month security subscription the day I installed this."
            author="Omar B., Verified Owner"
          />
          <ReviewCard 
            quote="Survived a sandstorm and heavy rain without blinking. Solid build."
            author="Sarah K., Verified Owner"
          />
        </div>

      </div>
    </section>
  );
};