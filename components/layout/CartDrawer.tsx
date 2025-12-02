import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '../ui/Button';
import { useCart } from '../../context/CartContext';

interface CartDrawerProps {
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onCheckout }) => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, cartTotal } = useCart();

  const handleCheckout = () => {
    setIsCartOpen(false);
    onCheckout();
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-neutral-900 border-l border-white/10 shadow-2xl z-[65] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-neutral-900/50 backdrop-blur-md">
              <h2 className="text-xl font-medium text-white flex items-center gap-2">
                Your Cart 
                <span className="text-sm text-neutral-500 font-normal">({cartItems.length} items)</span>
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50 space-y-4">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="text-lg font-medium">Your cart is empty</p>
                </div>
              ) : (
                cartItems.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="w-20 h-20 bg-black rounded-lg flex items-center justify-center border border-white/5 shrink-0">
                      {item.image && <item.image className="w-8 h-8 text-white" strokeWidth={1} />}
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-white font-medium">{item.title}</h3>
                        <p className="text-solar-500 font-bold mt-1">{item.price}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(index)}
                        className="flex items-center gap-1 text-xs text-neutral-500 hover:text-red-500 transition-colors self-start mt-2"
                      >
                        <Trash2 size={12} /> Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-white/5 bg-neutral-900 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-neutral-400">Subtotal</span>
                  <span className="text-xl font-bold text-white">{cartTotal}</span>
                </div>
                <div className="flex items-center justify-between text-sm mb-6">
                  <span className="text-neutral-500">Shipping</span>
                  <span className="text-green-500">Free</span>
                </div>
                <Button 
                  variant="primary" 
                  className="w-full"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};