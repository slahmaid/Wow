import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

interface NavbarProps {
  onOpenCheckout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, cartItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        when: "afterChildren",
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  // Helper to close menu when clicking a link
  const handleLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-md border-white/10 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer z-50">
            <div className="w-8 h-8 bg-solar-500 rounded-sm rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-full" />
            </div>
            <span className="ml-2 text-xl font-bold tracking-[0.2em] text-white">
              PRUMYSL
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="text-xs font-medium text-neutral-400 hover:text-solar-400 tracking-widest uppercase transition-colors">Shop</Link>
            <Link to="/technology" className="text-xs font-medium text-neutral-400 hover:text-solar-400 tracking-widest uppercase transition-colors">Technology</Link>
            <Link to="/support" className="text-xs font-medium text-neutral-400 hover:text-solar-400 tracking-widest uppercase transition-colors">Support</Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="text-white hover:text-solar-400 transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-solar-500 text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
            <Button 
              variant="secondary" 
              className="!px-6 !py-2 !text-xs !uppercase !tracking-widest"
              onClick={onOpenCheckout}
            >
              Pre-Order
            </Button>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden text-white z-50 relative p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-50 md:hidden bg-neutral-900/95 backdrop-blur-xl flex flex-col"
          >
            {/* Header (for close button alignment) */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
              <div className="flex items-center gap-2 opacity-0">
                 {/* Invisible placeholder */}
                 <span className="w-8 h-8"/> 
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white p-2 hover:text-solar-500 transition-colors rounded-full border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-10 pb-20">
              <motion.div variants={linkVariants}>
                <Link 
                  to="/" 
                  className="text-3xl font-light tracking-wide text-white hover:text-solar-500 transition-colors"
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link 
                  to="/shop" 
                  className="text-3xl font-light tracking-wide text-white hover:text-solar-500 transition-colors"
                  onClick={handleLinkClick}
                >
                  Shop
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link 
                  to="/technology" 
                  className="text-3xl font-light tracking-wide text-white hover:text-solar-500 transition-colors"
                  onClick={handleLinkClick}
                >
                  Technology
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link 
                  to="/support" 
                  className="text-3xl font-light tracking-wide text-white hover:text-solar-500 transition-colors"
                  onClick={handleLinkClick}
                >
                  Support
                </Link>
              </motion.div>
              
              <motion.div variants={linkVariants} className="pt-8">
                 <Button 
                   variant="primary" 
                   className="!text-sm !px-10"
                   onClick={() => {
                     handleLinkClick();
                     onOpenCheckout && onOpenCheckout();
                   }}
                 >
                   Pre-Order Now
                 </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};