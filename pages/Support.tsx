import React from 'react';
import { FileText, Play, Search, Mail, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Support: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <h1 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight">
          Concierge Support
        </h1>
        <p className="text-xl text-neutral-400 font-light">
          Our team is based in Europe and ready to assist.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-24">
        
        {/* Card 1: Manuals & Setup */}
        <div className="bg-neutral-900 rounded-3xl p-8 border border-white/5 flex flex-col hover:border-white/10 transition-colors duration-500 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          <div className="w-12 h-12 bg-black rounded-xl border border-white/10 flex items-center justify-center mb-6 text-solar-500">
             <FileText size={24} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl text-white font-medium mb-2">Manuals & Setup</h3>
          <p className="text-neutral-500 font-light mb-8">
            Detailed schematics and installation guides.
          </p>
          
          <div className="space-y-4 mt-auto">
            <button className="w-full flex items-center justify-between p-4 rounded-xl bg-black border border-white/5 hover:border-solar-500/30 transition-colors group">
              <span className="text-neutral-300 text-sm group-hover:text-white transition-colors">Quick Start Guide (PDF)</span>
              <FileText size={16} className="text-neutral-600 group-hover:text-solar-500 transition-colors" />
            </button>
            <button className="w-full flex items-center justify-between p-4 rounded-xl bg-black border border-white/5 hover:border-solar-500/30 transition-colors group">
              <span className="text-neutral-300 text-sm group-hover:text-white transition-colors">Installation Video</span>
              <Play size={16} className="text-neutral-600 group-hover:text-solar-500 transition-colors" />
            </button>
          </div>
        </div>

        {/* Card 2: Order Tracking */}
        <div className="bg-neutral-900 rounded-3xl p-8 border border-white/5 flex flex-col hover:border-white/10 transition-colors duration-500 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
           <div className="w-12 h-12 bg-black rounded-xl border border-white/10 flex items-center justify-center mb-6 text-solar-500">
             <Search size={24} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl text-white font-medium mb-2">Track Order</h3>
          <p className="text-neutral-500 font-light mb-8">
            Check the status of your shipment.
          </p>

          <div className="mt-auto space-y-4">
             <div>
               <label className="block text-[10px] uppercase tracking-wider text-neutral-500 font-bold mb-2">Order Number</label>
               <input type="text" placeholder="#PRU-12345" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-solar-500 transition-colors" />
             </div>
             <Button variant="secondary" className="w-full justify-between group">
                Track Shipment
                <Search size={16} className="group-hover:text-white transition-colors" />
             </Button>
          </div>
        </div>

        {/* Card 3: Contact Form */}
        <div className="bg-neutral-900 rounded-3xl p-8 border border-white/5 flex flex-col lg:col-span-2 xl:col-span-1 hover:border-white/10 transition-colors duration-500 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
           <div className="w-12 h-12 bg-black rounded-xl border border-white/10 flex items-center justify-center mb-6 text-solar-500">
             <MessageSquare size={24} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl text-white font-medium mb-2">Contact Us</h3>
          <p className="text-neutral-500 font-light mb-8">
            Direct line to our support engineers.
          </p>

          <form className="space-y-4 mt-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
               <input type="text" placeholder="Name" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-solar-500 transition-colors text-sm" />
               <input type="email" placeholder="Email" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-solar-500 transition-colors text-sm" />
            </div>
            
            <div className="relative">
              <select className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-solar-500 transition-colors text-sm appearance-none cursor-pointer">
                <option>Technical Support</option>
                <option>Billing Question</option>
                <option>Warranty Claim</option>
                <option>Other</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                 <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>

            <textarea rows={3} placeholder="How can we help?" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-solar-500 transition-colors text-sm resize-none" />
            
            <Button variant="primary" className="w-full !py-3">
               Send Message
            </Button>
          </form>
        </div>

      </div>

      {/* Footer Note */}
      <div className="border-t border-white/5 pt-12 text-center animate-in fade-in duration-1000 delay-500">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
           <Mail size={16} className="text-neutral-400 group-hover:text-white" />
           <span className="text-sm text-neutral-400 group-hover:text-white font-light transition-colors">
             Business Inquiries? <span className="text-white font-medium border-b border-solar-500/30 group-hover:border-solar-500 transition-colors">Contact our B2B team</span> for wholesale pricing.
           </span>
        </div>
      </div>
    </div>
  );
};