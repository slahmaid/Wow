import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { Specs } from '../components/sections/Specs';
import { Reviews } from '../components/sections/Reviews';
import { FAQ } from '../components/sections/FAQ';
import { InTheBox } from '../components/sections/InTheBox';

interface HomeProps {
  onOpenCheckout: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenCheckout }) => {
  return (
    <div className="flex flex-col w-full">
      <Hero onOpenCheckout={onOpenCheckout} />
      <Features />
      <Specs />
      <Reviews />
      <FAQ />
      <InTheBox />
    </div>
  );
};