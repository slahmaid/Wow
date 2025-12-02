import React, { ButtonHTMLAttributes } from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: 'arrow' | 'play';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  icon, 
  children, 
  className = '',
  ...props 
}) => {
  // active:scale-95 for better mobile touch feedback
  // min-h-[44px] implicit via py-4 (1rem top + 1rem bottom + line height > 44px)
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 touch-manipulation";
  
  const variants = {
    primary: "bg-solar-500 text-black hover:bg-white hover:text-black shadow-[0_0_20px_-5px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)]",
    secondary: "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm",
    ghost: "bg-transparent text-neutral-400 hover:text-white"
  };

  const IconComponent = icon === 'arrow' ? ArrowRight : icon === 'play' ? Play : null;

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {IconComponent && (
        <IconComponent className={`ml-2 w-4 h-4 ${variant === 'primary' ? 'stroke-2' : ''}`} />
      )}
    </button>
  );
};