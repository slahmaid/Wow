import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Does it work in the shade?",
    answer: "Yes. Our high-efficiency monocrystalline panel absorbs UV light even on cloudy days."
  },
  {
    question: "Is there a monthly fee?",
    answer: "Never. You own the hardware and the data. Storage is local and free."
  },
  {
    question: "How do I install it?",
    answer: "Peel, stick, and magnetize. No drilling or wiring required."
  }
];

const AccordionItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 md:py-8 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className="text-lg md:text-xl font-medium text-white group-hover:text-solar-500 transition-colors duration-300 pr-8">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "anticipate" }}
          className="text-neutral-500 group-hover:text-solar-500 transition-colors duration-300 flex-shrink-0"
        >
          <Plus size={24} strokeWidth={1.5} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-neutral-400 font-light leading-relaxed text-base md:text-lg">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className="relative py-20 md:py-40 bg-black px-6 border-t border-white/5">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium text-white text-center mb-16 md:mb-24 tracking-tight">
          Common Questions
        </h2>
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};