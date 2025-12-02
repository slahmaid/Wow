import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Truck, User, Phone, MapPin, ShoppingBag } from 'lucide-react';
import { Button } from './Button';
import { useCart } from '../../context/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MOROCCO_CITIES = [
  'Casablanca',
  'Rabat',
  'Marrakech',
  'Tangier',
  'Agadir',
  'Fes',
  'Meknes',
  'Oujda',
  'Kenitra',
  'Tetouan',
  'Other'
];

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Casablanca'
  });
  const [phoneError, setPhoneError] = useState('');
  const { cartTotal, cartItems, clearCart } = useCart();

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setPhoneError('');
    }
  }, [isOpen]);

  const validatePhone = (phone: string) => {
    // Basic validation: allows +, -, spaces, and digits. Min length 8.
    const re = /^[0-9+\s-]{8,20}$/;
    return re.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError('');

    if (!validatePhone(formData.phone)) {
      setPhoneError('Please enter a valid phone number');
      return;
    }

    setStatus('processing');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      clearCart(); // Clear the cart when order is successful
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'phone') setPhoneError('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[70]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-neutral-900 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-white/10 pointer-events-auto flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px]"
            >
              {/* Left Side: Form / Success Message */}
              <div className="flex-1 p-6 md:p-10 overflow-y-auto custom-scrollbar relative bg-neutral-900">
                <div className="flex items-center justify-between mb-6">
                   {status !== 'success' && (
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Quick Order</h2>
                        <p className="text-xs md:text-sm text-green-500 font-medium mt-1 flex items-center gap-1">
                          <Truck size={14} /> Pay on Delivery (Cash)
                        </p>
                      </div>
                   )}
                  <button onClick={onClose} className="md:hidden text-neutral-400 hover:text-white p-2 bg-white/5 rounded-full">
                    <X size={20} />
                  </button>
                </div>

                {status === 'success' ? (
                  <div className="h-full flex flex-col items-center justify-center py-4 space-y-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                      <Check className="w-12 h-12 text-green-500" strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">Order Received!</h3>
                      <p className="text-neutral-300 max-w-sm mx-auto leading-relaxed">
                        Thank you, <span className="text-solar-500 font-medium">{formData.name}</span>. 
                        <br/>
                        We will call you on <span className="text-white font-mono bg-white/10 px-2 py-0.5 rounded">{formData.phone}</span> shortly to confirm your delivery time.
                      </p>
                    </div>
                    <Button 
                      variant="primary" 
                      onClick={onClose}
                      className="!w-full max-w-xs mt-4 !bg-neutral-800 !text-white !border !border-white/10 hover:!bg-white/10"
                    >
                      Continue Shopping
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-solar-500/5 border border-solar-500/20 rounded-xl p-4 mb-6">
                        <p className="text-sm text-solar-500/90 text-center font-medium">
                            Free Shipping included. Pay securely when you receive your package.
                        </p>
                    </div>

                    <div className="space-y-5">
                      {/* Name Field */}
                      <div className="relative group">
                        <label className="block text-[10px] uppercase tracking-wider text-neutral-500 font-bold mb-2 ml-1">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-solar-500 transition-colors" size={20} />
                            <input 
                                required 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your full name" 
                                className="w-full h-14 bg-black border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder-neutral-600 focus:outline-none focus:border-solar-500 focus:ring-1 focus:ring-solar-500 transition-all text-base" 
                            />
                        </div>
                      </div>

                      {/* Phone Field */}
                      <div className="relative group">
                        <label className="block text-[10px] uppercase tracking-wider text-neutral-500 font-bold mb-2 ml-1">Phone Number</label>
                        <div className="relative">
                            <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${phoneError ? 'text-red-500' : 'text-neutral-500 group-focus-within:text-solar-500'}`} size={20} />
                            <input 
                                required 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="06 XX XX XX XX" 
                                className={`w-full h-14 bg-black border rounded-xl pl-12 pr-4 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 transition-all text-base ${phoneError ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-solar-500 focus:ring-solar-500'}`}
                            />
                        </div>
                        {phoneError && <p className="text-red-500 text-xs mt-1.5 ml-1">{phoneError}</p>}
                      </div>

                      {/* City Field */}
                      <div className="relative group">
                        <label className="block text-[10px] uppercase tracking-wider text-neutral-500 font-bold mb-2 ml-1">City</label>
                        <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-solar-500 transition-colors" size={20} />
                            <select 
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                className="w-full h-14 bg-black border border-white/10 rounded-xl pl-12 pr-4 text-white focus:outline-none focus:border-solar-500 focus:ring-1 focus:ring-solar-500 transition-all text-base appearance-none cursor-pointer"
                            >
                                {MOROCCO_CITIES.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        variant="primary" 
                        className="w-full flex items-center justify-center gap-3 !py-4 !text-base shadow-lg hover:shadow-solar-500/20"
                        disabled={status === 'processing'}
                      >
                        {status === 'processing' ? (
                          <span className="flex items-center gap-2">
                             <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                             Processing...
                          </span>
                        ) : (
                          <>
                            <Truck size={20} strokeWidth={2} />
                            Confirm Order
                          </>
                        )}
                      </Button>
                      <p className="text-center text-[10px] text-neutral-500 mt-4">
                         By clicking confirm, you agree to pay upon delivery.
                      </p>
                    </div>
                  </form>
                )}
              </div>

              {/* Right Side: Summary (Hidden on Success to focus on message) */}
              <div className={`w-full md:w-80 bg-neutral-950 border-t md:border-t-0 md:border-l border-white/5 p-8 md:p-10 flex flex-col transition-opacity duration-500 ${status === 'success' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                 <button onClick={onClose} className="hidden md:flex self-end text-neutral-500 hover:text-white mb-8 p-2 hover:bg-white/5 rounded-full transition-colors">
                    <X size={20} />
                 </button>

                 <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6">Order Summary</h3>
                 
                 {cartItems.length > 0 ? (
                    <div className="flex-1 overflow-y-auto max-h-[150px] mb-4 space-y-4 pr-2 custom-scrollbar">
                      {cartItems.map((item, index) => (
                        <div key={`${item.id}-${index}`} className="flex items-start gap-3">
                           <div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center border border-white/10 shrink-0">
                              <ShoppingBag className="text-neutral-600" size={16} />
                           </div>
                           <div>
                              <div className="text-white text-sm font-medium">{item.title}</div>
                              <div className="text-xs text-neutral-500">{item.price}</div>
                           </div>
                        </div>
                      ))}
                    </div>
                 ) : (
                    // Fallback for direct "Buy Now" (Pre-Order) if cart is empty, show default single item logic or just a placeholder
                    <div className="flex items-start gap-4 mb-6 pb-6 border-b border-white/5">
                        <div className="w-20 h-20 bg-neutral-900 rounded-2xl flex items-center justify-center border border-white/10 shrink-0">
                           <ShoppingBag className="text-neutral-600" size={24} strokeWidth={1} />
                        </div>
                        <div>
                          <div className="text-white font-medium text-lg">Prumysl One</div>
                          <div className="text-xs text-neutral-500 mt-1">Solar Security Sentry</div>
                          <div className="text-sm text-green-500 font-medium mt-2 flex items-center gap-1">
                            <Truck size={12} /> In Stock
                          </div>
                        </div>
                     </div>
                 )}

                 <div className="space-y-3 mt-auto">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">Subtotal</span>
                      <span className="text-neutral-300">{cartTotal === '$0.00' ? '$299.00' : cartTotal}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">Shipping</span>
                      <span className="text-green-500 font-medium">FREE</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">Payment</span>
                      <span className="text-neutral-300">Cash on Delivery</span>
                    </div>
                 </div>

                 <div className="pt-6 border-t border-white/5 mt-6">
                    <div className="flex justify-between items-end">
                       <span className="text-sm font-bold text-white uppercase tracking-widest">Total</span>
                       <span className="text-3xl font-bold text-solar-500">{cartTotal === '$0.00' ? '$299' : cartTotal}</span>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};